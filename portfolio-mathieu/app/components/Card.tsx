"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaReact } from "react-icons/fa";

interface CardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  demo?: string;
  githubButton?: boolean;
  reactButton?: boolean;
  projectId: string;
}

export default function Card({
  title,
  description,
  image,
  link,
  demo,
  githubButton,
  reactButton,
  projectId,
}: CardProps) {
  const [commentaires, setCommentaires] = useState<
    { id: string; username: string; text: string }[]
  >([]);
  const [pseudo, setPseudo] = useState("");
  const [nouveauCommentaire, setNouveauCommentaire] = useState("");

  useEffect(() => {
    const fetchCommentaires = async () => {
      const { supabase } = await import("./../lib/supabaseClient");

      const { data, error } = await supabase
        .from("commentaires")
        .select("*")
        .eq("project_id", projectId)
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Erreur de chargement des commentaires:", error);
      } else {
        setCommentaires(data || []);
      }
    };

    fetchCommentaires();
  }, [projectId]);

  const ajouterCommentaire = async () => {
    if (!pseudo || !nouveauCommentaire) {
      alert("Remplis tous les champs !");
      return;
    }

    const { supabase } = await import("./../lib/supabaseClient");

    const { data, error } = await supabase
      .from("commentaires")
      .insert([{ project_id: projectId, username: pseudo, text: nouveauCommentaire }])
      .select();

    if (error) {
      console.error("Erreur lors de l'ajout du commentaire:", error);
      alert("Erreur lors de l'envoi du commentaire.");
    } else {
      setCommentaires((prevCommentaires) => [data[0], ...prevCommentaires]);
      setNouveauCommentaire("");
    }
  };

  return (
    <div className="rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 mb-8 hover:shadow-purple-600">
      <Link href={demo || "#"} target="_blank" rel="noopener noreferrer">
        <div className="relative w-full h-64 cursor-pointer">
          <Image
            src={image}
            alt={title}
            width={600}
            height={400}
            className="rounded-t-lg w-full h-64 object-contain"
          />
        </div>
      </Link>

      <div className="p-6">
        <h3 className="text-2xl font-bold text-purple-400">{title}</h3>
        <p className="text-gray-300 mt-2">{description}</p>

        <div className="flex flex-wrap justify-center gap-4 mt-4">
          {githubButton && (
            <Link
              href={link}
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 text-white bg-black rounded-lg shadow-md hover:bg-white hover:text-black transition-all"
            >
              <FaGithub size={20} />
              Voir sur GitHub
            </Link>
          )}

          {reactButton && demo && (
            <Link
              href={demo}
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-800 transition-all"
            >
              <FaReact size={24} className="animate-spin-slow" />
              Tester le projet
            </Link>
          )}
        </div>

        <hr className="mt-10 border-t-2 border-purple-500" />

        <div className="mt-6">
          <h4 className="text-lg font-semibold text-gray-200">Commentaires</h4>
          <div className="space-y-3 mt-3 max-h-40 overflow-y-auto p-4 rounded-lg">
            {commentaires.length > 0 ? (
              commentaires.map((commentaire) => (
                <div key={commentaire.id} className="p-2 rounded-lg text-gray-300">
                  <strong className="text-purple-400">{commentaire.username} :</strong> {commentaire.text}
                </div>
              ))
            ) : (
              <p className="text-gray-400">Soyez le premier à commenter ce projet !</p>
            )}
          </div>

          <div className="mt-4">
            <input
              type="text"
              placeholder="Pseudo"
              value={pseudo}
              onChange={(e) => setPseudo(e.target.value)}
              className="w-full p-2 rounded-lg bg-black text-white border border-purple-600 mb-2"
            />
            <textarea
              placeholder="Écrire un commentaire..."
              value={nouveauCommentaire}
              onChange={(e) => setNouveauCommentaire(e.target.value)}
              className="w-full p-2 rounded-lg bg-black text-white border border-purple-600 mb-2"
            />
            <button
              onClick={ajouterCommentaire}
              className="w-full p-2 mt-3 text-white rounded-lg hover:bg-white hover:text-black"
            >
              Ajouter un commentaire
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
