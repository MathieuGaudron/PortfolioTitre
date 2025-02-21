import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { nom, email, message } = await req.json();

    if (!nom || !email || !message) {
      return NextResponse.json({ error: "Tous les champs sont requis." }, { status: 400 });
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "no-reply@tonsite.com", // Resend recommande d'utiliser un email avec ton domaine validé
        to: [process.env.EMAIL_RECEIVER],
        subject: `Nouveau message de ${nom}`,
        text: `De : ${nom} (${email})\n\nMessage : ${message}`,
      }),
    });

    if (!response.ok) throw new Error("Erreur lors de l'envoi de l'email");

    return NextResponse.json({ success: true, message: "Email envoyé avec succès !" }, { status: 200 });
  } catch (error) {
    console.error("❌ Erreur lors de l'envoi de l'email :", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
