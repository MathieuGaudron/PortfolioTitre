"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  const phrases = [
    "Je suis Mathieu, un développeur web full-stack !",
    "Je recherche une alternance en développement web",
    "à partir de septembre 2025 !"
  ];

  const [displayedTexts, setDisplayedTexts] = useState<string[]>([]);

  useEffect(() => {
    let index = 0;
    setDisplayedTexts([phrases[0]]);

    const interval = setInterval(() => {
      index++;
      if (index < phrases.length) {
        setDisplayedTexts((prev) => [...prev, phrases[index]]);
      } else {
        clearInterval(interval);
      }
    }, phrases[index]?.length * 50 + 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex flex-col md:flex-row items-center justify-center min-h-screen text-white px-6 md:px-12">
      <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-purple-900 shadow-lg shadow-violet-700/50 transition-transform duration-300 hover:scale-110">
        <Image
          src="/assets/photo_cv_epitech.jpg"
          alt="Mathieu Gaudron"
          width={300}
          height={300}
          className="object-cover w-full h-full cursor-pointer"
        />
      </div>

      <div className="mt-6 md:mt-0 md:ml-12 text-center md:text-left max-w-lg">
        <h1 className="text-4xl md:text-5xl font-bold font-geist">
          Bonjour, bienvenue sur mon <span className="text-purple-400">Portfolio</span>
        </h1>

        <div className="mt-4 text-lg text-gray-300">
          {displayedTexts.map((text, index) => (
            <p key={index}>
              <Typewriter
                words={[text]}
                loop={1}
                cursor={index === displayedTexts.length - 1}
                cursorStyle="_"
                typeSpeed={50}
              />
            </p>
          ))}
        </div>

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
