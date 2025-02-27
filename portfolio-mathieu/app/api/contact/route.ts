// import { NextResponse } from 'next/server';

// export async function POST(req: Request) {
//   try {
//     const body = await req.json();

//     const response = await fetch('https://submit-form.com/kJd8PpSoP', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(body),
//     });

//     if (!response.ok) {
//       throw new Error('Erreur lors de l’envoi du formulaire');
//     }

//     return NextResponse.json({ message: 'Formulaire envoyé avec succès' }, { status: 200 });
//   } catch (error) {
//     return NextResponse.json({ message: (error as Error).message }, { status: 500 });
//   }
// }
