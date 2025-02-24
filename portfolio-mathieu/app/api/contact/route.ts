import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { nom, email, message } = await req.json();

    if (!nom || !email || !message) {
      return NextResponse.json({ error: "Tous les champs sont requis." }, { status: 400 });
    }

    console.log("Envoi du mail en cours...");
    console.log("Expéditeur:", process.env.BREVO_API_KEY ? "OK" : "NON DÉFINIE");
    console.log("Destinataire:", process.env.EMAIL_RECEIVER || "NON DÉFINI");

    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": process.env.BREVO_API_KEY || "",
      },
      body: JSON.stringify({
        sender: { email: "mathieu.g@outlook.fr", name: "Portfolio-Mathieu" },
        to: [{ email: process.env.EMAIL_RECEIVER, name: "Mathieu" }],
        subject: `Nouveau message de ${nom}`,
        htmlContent: `
          <p><strong>Nom :</strong> ${nom}</p>
          <p><strong>Email :</strong> ${email}</p>
          <p><strong>Message :</strong><br>${message}</p>
        `,
      }),
    });

    const result = await response.text();
    console.log("Réponse Brevo :", result);

    if (!response.ok) {
      console.error("Erreur Brevo :", result);
      return NextResponse.json({ error: "Échec de l'envoi." }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: "Email envoyé avec succès !" }, { status: 200 });

  } catch (error) {
    console.error("Erreur serveur :", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
