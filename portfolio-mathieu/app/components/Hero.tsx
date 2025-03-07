"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { FaFilePdf } from "react-icons/fa";

export default function Hero() {
  const phrases = [
    "Je suis Mathieu, un développeur web full-stack en bac+3 !",
    "Je recherche une alternance en développement web à partir de septembre 2025 !",
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

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="flex flex-col lg:flex-row md:flex-col items-center justify-center min-h-screen text-white px-6 md:px-12 font-geist mt-24 sm:mt-16 md:mt-40 xl:mt-10">
      <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 md:mb-16 rounded-full overflow-hidden border-4 border-purple-900 shadow-lg shadow-violet-700/50 transition-transform duration-300 hover:scale-110">
        <Image
          src="/assets/photo_cv_epitech.jpg"
          alt="Mathieu Gaudron"
          width={300}
          height={300}
          className="object-cover w-full h-full cursor-pointer"
        />
      </div>

      <div className="mt-6 md:mt-0 md:ml-12 text-center md:text-left max-w-lg md:max-w-xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-geist leading-tight">
          Bonjour, bienvenue sur mon{" "}
          <span className="text-purple-400">Portfolio </span>!
        </h1>

        <div className="mt-8 text-base sm:text-lg text-gray-300">
          {displayedTexts.map((text, index) => (
            <p key={index}>
              <Typewriter
                words={[text]}
                loop={1}
                cursor={index === displayedTexts.length - 1}
                cursorStyle="_"
                typeSpeed={20}
              />
            </p>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row mt-8 justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-16">
          <button
            onClick={() => scrollToSection("projets")}
            className="px-4 py-3 sm:px-6 sm:py-4 text-base sm:text-lg font-semibold text-white bg-purple-600 rounded-xl shadow-lg hover:bg-purple-700 transition-transform duration-200 hover:scale-105"
          >
            Voir mes projets
          </button>

          <div className="flex justify-center sm:justify-start space-x-6 ">
            <Link
              href="https://github.com/MathieuGaudron"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl sm:text-5xl text-purple-500 hover:text-purple-600 transition-transform duration-200 hover:scale-110 mt-1"
            >
              <SiGithub />
            </Link>

            <Link
              href="https://www.linkedin.com/in/mathieu-gaudron-ponch/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl sm:text-5xl text-purple-500 hover:text-purple-600 transition-transform duration-200 hover:scale-110 mt-1"
            >
              <SiLinkedin />
            </Link>

            <Link
              href="/CV_DEV_MATHIEU_GAUDRON_2025.pdf"
              download="CV_DEV_MATHIEU_GAUDRON_2025.pdf"
              target="_blank"
              className="flex items-center space-x-2 bg-purple-500 text-black px-3 rounded-lg hover:bg-purple-600 transition-transform duration-200 hover:scale-110 mt-1"
            >
              <FaFilePdf className="text-xl" />
              <span className="font-bold">CV</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
