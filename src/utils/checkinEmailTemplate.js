export function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function infoRow(label, value) {
  return `
    <tr>
      <td style="padding:14px 0;border-bottom:1px solid #2a2a2a;" width="40%">
        <span style="font-family:Arial,Helvetica,sans-serif;font-size:11px;font-weight:700;letter-spacing:1.5px;color:#ea580c;text-transform:uppercase;">
          ${escapeHtml(label)}
        </span>
      </td>
      <td style="padding:14px 0;border-bottom:1px solid #2a2a2a;" width="60%">
        <span style="font-family:Arial,Helvetica,sans-serif;font-size:15px;color:#f5f5f5;font-weight:600;">
          ${escapeHtml(value)}
        </span>
      </td>
    </tr>`;
}

function sectionTitle(text) {
  return `
    <tr>
      <td style="padding:28px 0 6px 0;">
        <span style="font-family:Arial,Helvetica,sans-serif;font-size:13px;font-weight:700;letter-spacing:2px;color:#9a9a9a;text-transform:uppercase;">
          ${escapeHtml(text)}
        </span>
      </td>
    </tr>`;
}

export function buildCheckinEmailHtml({
  nome,
  cpf,
  endereco,
  celular,
  dataNascimentoBr,
  temAcompanhante,
  nomeAcompanhante,
  cpfAcompanhante,
  pdfUrl,
}) {
  const guestRows = [
    infoRow("Nome", nome),
    infoRow("CPF", cpf),
    infoRow("Data de nascimento", dataNascimentoBr),
    infoRow("Celular", celular),
    infoRow("Endereço", endereco),
  ].join("");

  const companionBlock = temAcompanhante
    ? `
      ${sectionTitle("Acompanhante")}
      <tr>
        <td>
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
            ${infoRow("Nome", nomeAcompanhante)}
            ${infoRow("CPF", cpfAcompanhante)}
          </table>
        </td>
      </tr>`
    : "";

  const pdfButtonBlock = pdfUrl
    ? `
      <tr>
        <td style="padding-top:30px;" align="center">
          <table role="presentation" cellpadding="0" cellspacing="0" border="0">
            <tr>
              <td align="center" style="border-radius:999px;background:linear-gradient(135deg,#f97316 0%,#ea580c 100%);">
                <a href="${escapeHtml(pdfUrl)}"
                  style="display:inline-block;padding:14px 34px;font-family:Arial,Helvetica,sans-serif;font-size:14px;font-weight:700;letter-spacing:0.5px;color:#ffffff;text-decoration:none;">
                  Baixar PDF do Check-in
                </a>
              </td>
            </tr>
          </table>
        </td>
      </tr>`
    : "";

  return `<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Novo Check-in — Hotel Pousada Bambuzal</title>
  </head>
  <body style="margin:0;padding:0;background-color:#161616;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#161616;">
      <tr>
        <td align="center" style="padding:32px 16px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:580px;">
            <!-- Header -->
            <tr>
              <td style="background:radial-gradient(ellipse at 80% 0%, rgba(234,88,12,0.18) 0%, transparent 60%),linear-gradient(135deg,#1a1a1a 0%,#2a1708 55%,#1a1a1a 100%);border-radius:20px 20px 0 0;padding:32px 36px 24px 36px;border:1px solid #2a2a2a;border-bottom:none;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td>
                      <span style="display:inline-block;padding:6px 14px;border-radius:999px;border:1px solid rgba(234,88,12,0.4);background:rgba(234,88,12,0.08);font-family:Arial,Helvetica,sans-serif;font-size:10px;font-weight:700;letter-spacing:2px;color:#f97316;text-transform:uppercase;">
                        Check-in Online
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding-top:14px;">
                      <span style="font-family:Arial,Helvetica,sans-serif;font-size:26px;font-weight:800;color:#ffffff;">
                        Novo Check-in Recebido
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding-top:6px;">
                      <span style="font-family:Arial,Helvetica,sans-serif;font-size:13px;color:#a3a3a3;">
                        Hotel Pousada Bambuzal — Sana, Macaé/RJ
                      </span>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Body card -->
            <tr>
              <td style="background-color:#1b1b1b;border:1px solid #2a2a2a;border-top:1px solid #2a2a2a;border-radius:0 0 20px 20px;padding:8px 36px 32px 36px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                  ${sectionTitle("Dados do hóspede")}
                  <tr>
                    <td>
                      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                        ${guestRows}
                      </table>
                    </td>
                  </tr>
                  ${companionBlock}
                  ${pdfButtonBlock}
                </table>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="padding:24px 12px 0 12px;" align="center">
                <span style="font-family:Arial,Helvetica,sans-serif;font-size:11px;color:#6b6b6b;">
                  Enviado automaticamente pelo formulário de check-in do site do Hotel Pousada Bambuzal.
                </span>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}
