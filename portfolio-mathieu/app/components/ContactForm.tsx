"use client";
import { useState } from "react";

export default function ContactForm() {
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [erreur, setErreur] = useState("");
  const [envoye, setEnvoye] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!nom || !email || !message) {
      setErreur("Tous les champs sont obligatoires !");
      return;
    }

    setErreur("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nom, email, message }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Erreur lors de l'envoi");

      setEnvoye(true);
      setNom("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Erreur lors de l'envoi du message :", error);
      setErreur("Échec de l'envoi, réessayez.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-black/40 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-purple-400 mb-4">Contactez-moi</h2>

      {envoye && (
        <p className="text-green-500 font-semibold transition-opacity duration-300 opacity-100">
          Message envoyé avec succès ! ✅
        </p>
      )}
      {erreur && (
        <p className="text-red-500 font-semibold transition-opacity duration-300 opacity-100">
          {erreur}
        </p>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          type="text"
          placeholder="Votre nom"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
          className="p-2 rounded bg-gray-800 text-white border border-purple-500 focus:ring-2 focus:ring-purple-500"
        />

        <input
          type="email"
          placeholder="Votre email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 rounded bg-gray-800 text-white border border-purple-500 focus:ring-2 focus:ring-purple-500"
        />

        <textarea
          placeholder="Votre message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="p-2 rounded bg-gray-800 text-white border border-purple-500 focus:ring-2 focus:ring-purple-500"
        />

        <button
          type="submit"
          disabled={isLoading}
          className={`p-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all border-2 border-dashed border-purple-400 ${
            isLoading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {isLoading ? "Envoi..." : "Envoyer"}
        </button>
      </form>
    </div>
  );
}
