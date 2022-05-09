import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "027f1b76e9f9cb",
      pass: "90288a3cbf98e4"
    }
  });


export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject , body}: SendMailData){
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Lucas Chaves <luucas.chaves@hotmail.com>',
            subject,
            html: body,
        });
    }
}