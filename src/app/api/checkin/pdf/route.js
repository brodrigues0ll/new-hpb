import { NextResponse } from "next/server";
import { buildCheckinPdf } from "@/utils/checkinPdf";

function unauthorized() {
  return new NextResponse("Autenticação necessária.", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Check-in PDF", charset="UTF-8"',
    },
  });
}

function isAuthorized(request) {
  const header = request.headers.get("authorization");
  if (!header?.startsWith("Basic ")) return false;

  const decoded = Buffer.from(header.slice(6), "base64").toString("utf-8");
  const separatorIndex = decoded.indexOf(":");
  if (separatorIndex === -1) return false;

  const user = decoded.slice(0, separatorIndex);
  const password = decoded.slice(separatorIndex + 1);

  return user === process.env.USER_HPB && password === process.env.PASSWORD_HPB;
}

export async function GET(request) {
  if (!process.env.USER_HPB || !process.env.PASSWORD_HPB || !isAuthorized(request)) {
    return unauthorized();
  }

  const { searchParams } = new URL(request.url);
  const encoded = searchParams.get("data");

  if (!encoded) {
    return NextResponse.json({ error: "Dados não informados." }, { status: 400 });
  }

  let data;
  try {
    const json = Buffer.from(encoded, "base64url").toString("utf-8");
    data = JSON.parse(json);
  } catch {
    return NextResponse.json({ error: "Dados inválidos." }, { status: 400 });
  }

  if (!data?.nome || !data?.cpf) {
    return NextResponse.json({ error: "Dados inválidos." }, { status: 400 });
  }

  const pdfBytes = await buildCheckinPdf(data);
  const safeName = String(data.nome)
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .toLowerCase();

  return new NextResponse(pdfBytes, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="checkin-${safeName}.pdf"`,
    },
  });
}
