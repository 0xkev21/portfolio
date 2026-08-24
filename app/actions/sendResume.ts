'use server'

import { Resend } from 'resend';
import { readFile } from '@/lib/file-helpers';
import ResumeEmail from '../components/ResumeEmail';
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';
import { headers } from 'next/headers';

const resend = new Resend(process.env.RESEND_API_KEY);

const rateLimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(1, '24h'),
})

export async function sendResume(formData: FormData) {
  try {
    const turnstileToken = formData.get('turnstileToken');
    if(!turnstileToken) {
      return {error: 'Security token missing.'};
    }

    const verifyResponse = await fetch(
      'https://challenges.cloudflare.com/turnstile/v0/siteverify',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `secret=${process.env.TURNSTILE_SECRET_KEY}&response=${turnstileToken}`,
      }
    )
    const verification = await verifyResponse.json();
    if(!verification.success) {
      return {error: 'Security check failed. Are you a bot?'}
    }

    const headerList = await headers();
    const ip = headerList.get('x-forwarded-for') ?? '127.0.0.1';

    const { success } = await rateLimit.limit(ip);

    if (!success) {
      return { error: 'You have reached the daily limit for resume requests. Please try again tomorrow.' };
    }

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