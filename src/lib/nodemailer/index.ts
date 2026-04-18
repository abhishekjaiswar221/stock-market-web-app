import { WELCOME_EMAIL_TEMPLATE } from "@/lib/nodemailer/templates";
import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.NODEMAILER_EMAIL!,
    pass: process.env.NODEMAILER_PASSWORD!,
  },
});

export const sendWelcomeEmail = async ({
  email,
  name,
  intro,
}: WelcomeEmailData) => {
  const htmlTemplate = WELCOME_EMAIL_TEMPLATE.replace("{{name}}", name).replace(
    "{{intro}}",
    intro,
  );

  const mailOptions = {
    from: `"Stockix" <stockix@no-reply.in>`,
    to: email,
    subject: `Welcome to Stockix - Your stock market toolkit is ready!`,
    text: "Thanks for joining Stockix",
    html: htmlTemplate,
  };

  await transporter.sendMail(mailOptions);
};
