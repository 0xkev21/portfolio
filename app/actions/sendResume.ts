'use server'

import { Resend } from 'resend';
import { readFile } from '@/lib/file-helpers';
import ResumeEmail from '../components/ResumeEmail';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendResume(formData: FormData) {
  try {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;

    if(!name || !email) {
      return {error: 'Name and email are required'}
    }

    const fileBuffer =  await readFile('/private/kev_resume.pdf');

    await resend.emails.send({
      from: 'Kev <noreply@hellokev.me>',
      to: email,
      subject: "Here's my resume, as requested",
      react: ResumeEmail({name: name}),
      attachments: [{filename: 'Kev_Resume.pdf', content: fileBuffer}],
      replyTo: 'contact@hellokev.me',
      bcc: 'contact@hellokev.me',
    })

    return { success: true }
  } catch(error) {
    console.error(error);
    return { error: "Failed to send resume email."}
  }
}