"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export type ContactState = {
  error?: string;
  success?: boolean;
};

export async function sendContact(
  prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const name = formData.get("name") as string;
  const company = formData.get("company") as string | null;
  const message = formData.get("message") as string;

  if (!name?.trim() || !message?.trim()) {
    return { error: "Preencha os campos obrigatórios." };
  }

  if (message.trim().length < 10) {
    return { error: "Conta um pouco mais sobre o projeto." };
  }

  try {
    await resend.emails.send({
      from: "site@resend.monkay.io",
      to: "contato@monkay.io",
      subject: `Nova mensagem de ${name}${company ? ` — ${company}` : ""}`,
      html: `
        <p><strong>Nome:</strong> ${name}</p>
        ${company ? `<p><strong>Empresa:</strong> ${company}</p>` : ""}
        <p><strong>Mensagem:</strong><br>${message.replace(/\n/g, "<br>")}</p>
      `,
    });
    return { success: true };
  } catch {
    return { error: "Erro ao enviar. Tente novamente." };
  }
}
