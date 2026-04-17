import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// NOTE: You need to add RESEND_API_KEY to your .env.local file
// Get your free key at https://resend.com
const resend = new Resend(process.env.RESEND_API_KEY || "re_mock_key_to_prevent_build_error");

export async function POST(request: Request) {
    try {
        const { name, email, message } = await request.json();

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        if (process.env.RESEND_API_KEY) {
            const { data, error } = await resend.emails.send({
                from: 'Lumina Inquiry <onboarding@resend.dev>',
                to: 'support@lumina.io', // Placeholders, user can change this
                subject: `New Lumina Inquiry from ${name}`,
                replyTo: email,
                html: `
            <div style="font-family: sans-serif; padding: 20px; color: #333;">
              <h2 style="color: #7c3aed;">New Lumina Pre-order/Inquiry</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <hr style="border: 1px solid #eee; margin: 20px 0;" />
              <p><strong>Message:</strong></p>
              <p style="white-space: pre-wrap;">${message}</p>
            </div>
          `,
            });
            
            if (error) {
                console.error('Resend Error:', error);
                return NextResponse.json({ error }, { status: 400 });
            }
            return NextResponse.json({ success: true, data });
        } else {
            console.log("Mocking email send since no API key is provided:", { name, email, message });
            // Simulate network delay
            await new Promise(resolve => setTimeout(resolve, 1000));
            return NextResponse.json({ success: true, data: "mocked" });
        }
    } catch (error) {
        console.error('Internal Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
