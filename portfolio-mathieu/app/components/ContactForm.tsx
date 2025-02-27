"use client";
import { useState } from "react";

const FORM_ID = process.env.NEXT_PUBLIC_FORMSPARK_ID || "";
const FORMSPARK_URL = `https://submit-form.com/${FORM_ID}`;

export default function ContactForm() {
  const [formData, setFormData] = useState({ nom: "", email: "", message: "" });
  const [status, setStatus] = useState({ loading: false, error: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.nom.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({ loading: false, error: "Veuillez remplir tous les champs correctement." });
      return;
    }

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
        console.error("Erreur lors de l'envoi :", error);
        setStatus({ loading: false, error: "Échec de l'envoi du message." });
      })
      .finally(() => {
        setStatus({ loading: false, error: "" });
      });
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-black/40 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-purple-400 mb-4">Contactez-moi</h2>

      {status.error && <p className="text-red-500 font-semibold">{status.error}</p>}

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
          className={`p-2 bg-purple-600 text-white rounded-lg hover:bg-purple-800 transition-all border-2 border-none border-purple-400 ${status.loading ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          {status.loading ? "Envoi en cours..." : "Envoyer"}
        </button>
      </form>
    </div>
  );
}
