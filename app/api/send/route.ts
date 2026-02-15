import { EmailTemplate } from '@/components/EmailTemplate';
import { Resend } from 'resend';
import * as React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, message } = body;

    const { data, error } = await resend.emails.send({
      from: 'Kevin Burrafato <contact@kevinburrafato.com>',
      to: ['kevin.burrafato@gmail.com'],
      subject: `Nuovo messaggio da ${name}`,
      react: EmailTemplate({ firstName: name, email, message }) as React.ReactElement,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}