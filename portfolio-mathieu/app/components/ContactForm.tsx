"use client";
import { useState } from "react";

const FORM_ID = process.env.NEXT_PUBLIC_FORMSPARK_ID || "";
const FORMSPARK_URL = `https://submit-form.com/${FORM_ID}`;

export default function ContactForm() {
  const [formData, setFormData] = useState({ nom: "", email: "", message: "" });
  const [status, setStatus] = useState({ loading: false, error: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.nom.trim()) {
      setStatus({ loading: false, error: "Le nom est obligatoire." });
    } else if (!formData.email.trim()) {
      setStatus({ loading: false, error: "L'email est obligatoire." });
    } else if (!formData.message.trim()) {
      setStatus({ loading: false, error: "Le message ne peut pas être vide." });
    } else {
      setStatus({ loading: true, error: "" });

      fetch(FORMSPARK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
        .then(() => {
          setFormData({ nom: "", email: "", message: "" });
        })
        .catch((error) => {
          setStatus({ loading: true, error: "Votre message a été envoyé. Je vous répondrai au plus vite !" });
          setFormData({ nom: "", email: "", message: "" });
        });
    }
  };

  return (
    <section className="py-16 text-center mx-auto max-w-screen-xl">
      <h2 className="text-3xl font-bold mb-4 md:mb-8 text-purple-400">
        Me Contacter
      </h2>
      <div className="max-w-lg mx-auto p-6 bg-black/40 rounded-lg shadow-lg">
        {status.error && (
          <p className="text-purple-300 font-semibold sm:mb-5 mb-3">{status.error}</p>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col space-y-4 mb-5">
          <input
            type="text"
            name="nom"
            placeholder="Votre nom"
            value={formData.nom}
            onChange={handleChange}
            className="p-2 rounded bg-gray-800 text-white border border-purple-500 focus:ring-2 focus:ring-purple-500"
          />

          <input
            type="email"
            name="email"
            placeholder="Votre email"
            value={formData.email}
            onChange={handleChange}
            className="p-2 rounded bg-gray-800 text-white border border-purple-500 focus:ring-2 focus:ring-purple-500"
          />

          <textarea
            name="message"
            placeholder="Votre message..."
            value={formData.message}
            onChange={handleChange}
            className="p-2 rounded bg-gray-800 text-white border border-purple-500 focus:ring-2 focus:ring-purple-500"
          />

          <button
            type="submit"
            disabled={status.loading}
            className={"p-2 bg-purple-600 text-white rounded-lg hover:bg-purple-800 transition-all border-2 border-none border-purple-400"}
          >
            Envoyer
          </button>
        </form>
      </div>
    </section>
  );
}
