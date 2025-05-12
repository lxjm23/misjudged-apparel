import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email } = await req.json();

  if (!email || !/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  const API_KEY = process.env.MAILCHIMP_API_KEY!;
  const SERVER = process.env.MAILCHIMP_SERVER_PREFIX!;
  const LIST_ID = process.env.MAILCHIMP_AUDIENCE_ID!;

  const data = {
    email_address: email,
    status: "subscribed",
  };

  const res = await fetch(`https://${SERVER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`, {
    method: "POST",
    headers: {
      Authorization: `apikey ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const err = await res.json();
    console.error("Mailchimp error", err);
    return NextResponse.json({ error: "Failed to subscribe" }, { status: 500 });
  }

  return NextResponse.json({ message: "Subscribed!" });
}
