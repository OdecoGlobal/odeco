'use server';

import ContactFormEmail from '@/emails/contact';
import { contactFormType } from '@/types';
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY!);

export async function sendContactEmail(data: contactFormType) {
  try {
    await resend.emails.send({
      from: 'admin@odeco.dev',
      to: 'odecoglobal@gmail.com',
      subject: `Portfolio Contact Form: ${data.subject}`,
      react: ContactFormEmail({ ...data }),
    });
    return { success: true };
  } catch (error) {
    console.error('failed to send email', error);
    return { success: false, error: (error as Error).message };
  }
}
