import { PDFDocument, StandardFonts, rgb } from "pdf-lib";

export async function buildCheckinPdf({
  nome,
  cpf,
  endereco,
  celular,
  dataNascimentoBr,
  temAcompanhante,
  nomeAcompanhante,
  cpfAcompanhante,
}) {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([595.28, 841.89]); // A4
  const { width, height } = page.getSize();

  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  const orange = rgb(234 / 255, 88 / 255, 12 / 255);
  const dark = rgb(0.1, 0.1, 0.1);
  const gray = rgb(0.45, 0.45, 0.45);

  // Header
  page.drawRectangle({ x: 0, y: height - 110, width, height: 110, color: rgb(0.08, 0.08, 0.08) });
  page.drawRectangle({ x: 0, y: height - 114, width, height: 4, color: orange });

  page.drawText("Hotel Pousada Bambuzal", {
    x: 50,
    y: height - 55,
    size: 20,
    font: fontBold,
    color: rgb(1, 1, 1),
  });
  page.drawText("Ficha de Check-in", {
    x: 50,
    y: height - 78,
    size: 12,
    font: fontRegular,
    color: orange,
  });
  page.drawText("Sana, Macaé - RJ", {
    x: 50,
    y: height - 96,
    size: 9,
    font: fontRegular,
    color: rgb(0.7, 0.7, 0.7),
  });

  let cursorY = height - 150;
  const lineHeight = 46;

  const drawField = (label, value) => {
    page.drawText(label.toUpperCase(), {
      x: 50,
      y: cursorY,
      size: 9,
      font: fontBold,
      color: orange,
    });
    page.drawText(String(value || "-"), {
      x: 50,
      y: cursorY - 18,
      size: 12,
      font: fontRegular,
      color: dark,
    });
    page.drawLine({
      start: { x: 50, y: cursorY - 28 },
      end: { x: width - 50, y: cursorY - 28 },
      thickness: 0.5,
      color: rgb(0.85, 0.85, 0.85),
    });
    cursorY -= lineHeight;
  };

  drawField("Nome", nome);
  drawField("CPF", cpf);
  drawField("Data de nascimento", dataNascimentoBr);
  drawField("Celular", celular);
  drawField("Endereço", endereco);

  if (temAcompanhante) {
    cursorY -= 8;
    page.drawText("ACOMPANHANTE", {
      x: 50,
      y: cursorY,
      size: 11,
      font: fontBold,
      color: gray,
    });
    cursorY -= 30;
    drawField("Nome do acompanhante", nomeAcompanhante);
    drawField("CPF do acompanhante", cpfAcompanhante);
  }

  page.drawText(`Gerado em ${new Date().toLocaleString("pt-BR")}`, {
    x: 50,
    y: 40,
    size: 8,
    font: fontRegular,
    color: gray,
  });

  return pdfDoc.save();
}
