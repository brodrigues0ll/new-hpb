import { NextResponse } from "next/server";
import { Resend } from "resend";
import { buildCheckinEmailHtml } from "@/utils/checkinEmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);
const DESTINATION_EMAIL = "hotelpousadabambuzal@gmail.com";

const CPF_REGEX = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

function isValidCpf(cpf) {
  if (!CPF_REGEX.test(cpf)) return false;

  const digits = cpf.replace(/\D/g, "");
  if (/^(\d)\1{10}$/.test(digits)) return false;

  const calcCheckDigit = (base) => {
    let sum = 0;
    for (let i = 0; i < base.length; i++) {
      sum += Number(digits[i]) * (base.length + 1 - i);
    }
    const rest = (sum * 10) % 11;
    return rest === 10 ? 0 : rest;
  };

  const firstDigit = calcCheckDigit(digits.slice(0, 9));
  const secondDigit = calcCheckDigit(digits.slice(0, 10));

  return firstDigit === Number(digits[9]) && secondDigit === Number(digits[10]);
}

function formatDateBr(isoDate) {
  const [year, month, day] = String(isoDate).split("-");
  if (!year || !month || !day) return isoDate;
  return `${day}/${month}/${year}`;
}

export async function POST(request) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: "Serviço de e-mail não configurado." },
      { status: 500 }
    );
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Corpo da requisição inválido." },
      { status: 400 }
    );
  }

  const {
    nome,
    cpf,
    endereco,
    celular,
    dataNascimento,
    temAcompanhante,
    nomeAcompanhante,
    cpfAcompanhante,
  } = body ?? {};

  const requiredFields = { nome, cpf, endereco, celular, dataNascimento };
  const missing = Object.entries(requiredFields).filter(
    ([, value]) => !value || !String(value).trim()
  );

  if (missing.length > 0) {
    return NextResponse.json(
      { error: "Preencha todos os campos obrigatórios." },
      { status: 400 }
    );
  }

  if (!isValidCpf(cpf)) {
    return NextResponse.json({ error: "CPF inválido." }, { status: 400 });
  }

  if (temAcompanhante) {
    if (!nomeAcompanhante || !String(nomeAcompanhante).trim()) {
      return NextResponse.json(
        { error: "Informe o nome do acompanhante." },
        { status: 400 }
      );
    }
    if (!cpfAcompanhante || !isValidCpf(cpfAcompanhante)) {
      return NextResponse.json(
        { error: "CPF do acompanhante inválido." },
        { status: 400 }
      );
    }
  }

  const dataNascimentoBr = formatDateBr(dataNascimento);

  const pdfPayload = Buffer.from(
    JSON.stringify({
      nome,
      cpf,
      endereco,
      celular,
      dataNascimentoBr,
      temAcompanhante,
      nomeAcompanhante,
      cpfAcompanhante,
    })
  ).toString("base64url");

  const pdfUrl = `${new URL(request.url).origin}/api/checkin/pdf?data=${pdfPayload}`;

  const html = buildCheckinEmailHtml({
    nome,
    cpf,
    endereco,
    celular,
    dataNascimentoBr,
    temAcompanhante,
    nomeAcompanhante,
    cpfAcompanhante,
    pdfUrl,
  });

  try {
    const { error } = await resend.emails.send({
      from: "Check-in Bambuzal <checkin@hotelpousadabambuzal.com>",
      to: DESTINATION_EMAIL,
      subject: `Novo Check-in — ${nome}`,
      html,
      replyTo: DESTINATION_EMAIL,
    });

    if (error) {
      return NextResponse.json(
        { error: "Falha ao enviar o e-mail de check-in." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Falha ao enviar o e-mail de check-in." },
      { status: 500 }
    );
  }
}
