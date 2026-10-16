"use client";

import { useState } from "react";
import { ClipboardCheck, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

const maskCpf = (value) =>
  value
    .replace(/\D/g, "")
    .slice(0, 11)
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2");

const maskPhone = (value) => {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 10) {
    return digits
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{4})(\d)/, "$1-$2");
  }
  return digits
    .replace(/(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{5})(\d)/, "$1-$2");
};

const INITIAL_STATE = {
  nome: "",
  cpf: "",
  endereco: "",
  celular: "",
  dataNascimento: "",
  temAcompanhante: false,
  nomeAcompanhante: "",
  cpfAcompanhante: "",
};

export default function Checkin() {
  const [form, setForm] = useState(INITIAL_STATE);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (field) => (e) => {
    const { value, type, checked } = e.target;
    let nextValue = type === "checkbox" ? checked : value;

    if (field === "cpf" || field === "cpfAcompanhante") {
      nextValue = maskCpf(nextValue);
    }
    if (field === "celular") {
      nextValue = maskPhone(nextValue);
    }

    setForm((prev) => ({ ...prev, [field]: nextValue }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/checkin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(data?.error || "Não foi possível enviar o check-in.");
        return;
      }

      setStatus("success");
      setForm(INITIAL_STATE);
    } catch {
      setStatus("error");
      setErrorMessage("Não foi possível enviar o check-in. Verifique sua conexão.");
    }
  };

  const inputClass =
    "w-full rounded-xl bg-neutral-900/60 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-orange-500/60 focus:ring-2 focus:ring-orange-500/20 transition-all duration-200";

  const labelClass = "block text-xs font-semibold tracking-widest text-neutral-400 mb-2 uppercase";

  return (
    <main>
      {/* Hero */}
      <section
        className="relative pt-36 pb-16 px-5 md:px-10 overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, #161616 0%, #1a1a1a 60%, #212121 100%)",
        }}
        aria-label="Cabeçalho da página de check-in"
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 40% 0%, rgba(234,88,12,0.06) 0%, transparent 60%)",
          }}
          aria-hidden="true"
        />
        <div className="max-w-[1200px] mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-500/30 text-orange-400 text-xs font-bold tracking-[0.2em] glass mb-6 animate-fade-in-down">
            <ClipboardCheck className="w-3.5 h-3.5" aria-hidden="true" />
            CHECK-IN
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-5 animate-fade-in-up delay-100">
            Faça seu <span className="gradient-text">Check-in</span>
          </h1>
          <p className="text-neutral-400 text-base md:text-xl max-w-xl mx-auto leading-relaxed animate-fade-in-up delay-200">
            Preencha seus dados antes da chegada e agilize sua hospedagem no
            Hotel Pousada Bambuzal.
          </p>
        </div>
      </section>

      {/* Form */}
      <section
        className="bg-[#212121] py-16 md:py-24 px-5 md:px-10 xl:px-20"
        aria-label="Formulário de check-in"
      >
        <div className="max-w-[720px] mx-auto">
          <div className="rounded-3xl border border-white/8 p-6 md:p-12 bg-neutral-900/40">
            {status === "success" ? (
              <div className="flex flex-col items-center text-center gap-4 py-8">
                <CheckCircle2 className="w-14 h-14 text-green-400" aria-hidden="true" />
                <h2 className="text-2xl font-bold text-white">
                  Check-in enviado com sucesso!
                </h2>
                <p className="text-neutral-400 text-sm max-w-sm">
                  Recebemos seus dados. Em breve nossa equipe entrará em
                  contato caso seja necessário.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-2 text-orange-400 hover:text-orange-300 text-sm font-semibold underline underline-offset-4"
                >
                  Enviar outro check-in
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div>
                  <label htmlFor="nome" className={labelClass}>
                    Nome completo *
                  </label>
                  <input
                    id="nome"
                    type="text"
                    required
                    value={form.nome}
                    onChange={handleChange("nome")}
                    className={inputClass}
                    placeholder="Seu nome completo"
                    autoComplete="name"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="cpf" className={labelClass}>
                      CPF *
                    </label>
                    <input
                      id="cpf"
                      type="text"
                      required
                      inputMode="numeric"
                      value={form.cpf}
                      onChange={handleChange("cpf")}
                      className={inputClass}
                      placeholder="000.000.000-00"
                      maxLength={14}
                    />
                  </div>
                  <div>
                    <label htmlFor="dataNascimento" className={labelClass}>
                      Data de nascimento *
                    </label>
                    <input
                      id="dataNascimento"
                      type="date"
                      required
                      value={form.dataNascimento}
                      onChange={handleChange("dataNascimento")}
                      className={inputClass}
                      autoComplete="bday"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="endereco" className={labelClass}>
                    Endereço *
                  </label>
                  <input
                    id="endereco"
                    type="text"
                    required
                    value={form.endereco}
                    onChange={handleChange("endereco")}
                    className={inputClass}
                    placeholder="Rua, número, bairro, cidade - UF"
                    autoComplete="street-address"
                  />
                </div>

                <div>
                  <label htmlFor="celular" className={labelClass}>
                    Celular *
                  </label>
                  <input
                    id="celular"
                    type="tel"
                    required
                    inputMode="numeric"
                    value={form.celular}
                    onChange={handleChange("celular")}
                    className={inputClass}
                    placeholder="(00) 00000-0000"
                    maxLength={15}
                    autoComplete="tel"
                  />
                </div>

                <div className="h-px bg-white/10" />

                <label className="flex items-center gap-3 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={form.temAcompanhante}
                    onChange={handleChange("temAcompanhante")}
                    className="w-5 h-5 rounded border-white/20 bg-neutral-900/60 text-orange-500 focus:ring-orange-500/40 accent-orange-500"
                  />
                  <span className="text-sm font-semibold text-neutral-300">
                    Possui acompanhante?
                  </span>
                </label>

                {form.temAcompanhante && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-fade-in-up">
                    <div>
                      <label htmlFor="nomeAcompanhante" className={labelClass}>
                        Nome do acompanhante *
                      </label>
                      <input
                        id="nomeAcompanhante"
                        type="text"
                        required={form.temAcompanhante}
                        value={form.nomeAcompanhante}
                        onChange={handleChange("nomeAcompanhante")}
                        className={inputClass}
                        placeholder="Nome completo do acompanhante"
                      />
                    </div>
                    <div>
                      <label htmlFor="cpfAcompanhante" className={labelClass}>
                        CPF do acompanhante *
                      </label>
                      <input
                        id="cpfAcompanhante"
                        type="text"
                        required={form.temAcompanhante}
                        inputMode="numeric"
                        value={form.cpfAcompanhante}
                        onChange={handleChange("cpfAcompanhante")}
                        className={inputClass}
                        placeholder="000.000.000-00"
                        maxLength={14}
                      />
                    </div>
                  </div>
                )}

                {status === "error" && (
                  <div className="flex items-start gap-3 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3">
                    <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" aria-hidden="true" />
                    <p className="text-sm text-red-300">{errorMessage}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full inline-flex items-center justify-center gap-2 py-4 rounded-full font-bold text-base text-white bg-gradient-orange btn-cta hover:shadow-orange-glow transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
                      Enviando...
                    </>
                  ) : (
                    <span>Confirmar Check-in</span>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
