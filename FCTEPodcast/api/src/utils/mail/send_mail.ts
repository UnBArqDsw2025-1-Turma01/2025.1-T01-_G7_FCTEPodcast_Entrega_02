import { Resend } from "resend";
import { RESEND_API_KEY } from "../constants";

export const send_mail = async (
  message: string,
  subject: string,
  to: string
) => {
  const resend = new Resend(RESEND_API_KEY);

  if (!to || !/^[^@<>]+@[^@<>]+\.[^@<>]+$/.test(to)) {
    console.error("Email inválido:", to);
    throw new Error("Endereço de e-mail inválido.");
  }

  try {
    const { data, error } = await resend.emails.send({
      from: "FCTEPodcast <contato@fctepodcast.cwtsh.site>",
      to: [to],
      subject,
      html: message,
    });

    if (error) {
      console.error("Resend error:", error);
      throw new Error("Failed to send email");
    }

    console.log("E-mail enviado! ID:", data?.id);
  } catch (err) {
    console.error("Erro ao enviar:", err);
    throw err;
  }
};
