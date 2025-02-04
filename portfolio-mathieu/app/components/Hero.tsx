"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center min-h-screen text-white px-6 md:px-12">
      {/* Image avec animation */}
      <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-purple-900 shadow-lg shadow-violet-700/50 transition-transform duration-300 hover:scale-110">
        <Image
          src="/assets/photo_cv_epitech.jpg"
          alt="Mathieu Gaudron"
          width={300}
          height={300}
          className="object-cover w-full h-full cursor-pointer"
        />
      </div>

      {/* Texte de présentation */}
      <div className="mt-6 md:mt-0 md:ml-12 text-center md:text-left max-w-lg">
        <h1 className="text-4xl md:text-5xl font-bold font-geist">
          Salut, moi c'est <span className="text-purple-400">Mathieu</span>
        </h1>
        <p className="mt-4 text-gray-300">
          Développeur web passionné, je crée des applications modernes et
          performantes avec{" "}
          <span className="text-purple-400">React, Symfony & Next.js</span>.
        </p>

        {/* Bouton "En savoir plus" */}
        <a
          href="#projets"
          className="mt-6 inline-block px-6 py-3 text-lg font-semibold text-white bg-purple-600 rounded-xl shadow-lg hover:bg-purple-700 transition-transform duration-200 hover:scale-105"
        >
          Voir mes projets
        </a>
      </div>
    </section>
  );
}
