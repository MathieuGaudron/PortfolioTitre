"use client";
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
}

export default function Card({ title, description, image, link, demo, githubButton, reactButton }: CardProps) {
  return (
    <div className="rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-purple-600">
      <div className="relative w-full h-52">
        <Image
          src={image.startsWith("/") ? image : "/assets/default-image.jpg"}
          alt={title}
          width={500}
          height={300}
          className="rounded-t-lg w-full h-52 object-contain"
        />
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold text-purple-400">{title}</h3>
        <p className="text-gray-300 mt-2">{description}</p>

 
        {githubButton && demo && (
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <Link
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-white bg-black rounded-lg shadow-md hover:bg-white hover:text-black transition-all"
            >
              <FaGithub size={20} />
              Voir sur GitHub
            </Link>

            {reactButton && (
              <Link
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-800 transition-all"
              >
                <FaReact size={20} className="animate-spin-slow" />
                Tester le projet
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
