
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();

  const { name, email, message } = body;

  try {
    const { data, error } = await resend.emails.send({
      from: 'Counseling <onboarding@kevinburrafato.com>',
      to: ['kevin.burrafato@gmail.com'],
      subject: `Nuovo messaggio da ${name}`,
      html: `
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Messaggio:</strong></p>
        <blockquote style="border-left: 2px solid #ccc; padding-left: 10px;">
          ${message}
        </blockquote>
      `,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}