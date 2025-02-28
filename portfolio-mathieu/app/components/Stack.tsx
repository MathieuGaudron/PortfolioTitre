"use client";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiPhp,
  SiSymfony,
  SiMysql,
  SiMongodb,
  SiLaravel,
  SiNodedotjs,
  SiWordpress,
} from "react-icons/si";

const techs = [
  { name: "React", icon: <SiReact />, color: "text-blue-400" },
  { name: "Next.js", icon: <SiNextdotjs />, color: "text-gray-200" },
  { name: "TailwindCSS", icon: <SiTailwindcss />, color: "text-cyan-400" },
  { name: "Node.js", icon: <SiNodedotjs />, color: "text-green-400" },
  { name: "MongoDB", icon: <SiMongodb />, color: "text-green-500" },
  { name: "MySQL", icon: <SiMysql />, color: "text-blue-500" },
  { name: "PHP", icon: <SiPhp />, color: "text-blue-500" },
  { name: "Symfony", icon: <SiSymfony />, color: "text-gray-100" },
  { name: "Laravel", icon: <SiLaravel />, color: "text-red-500" },
  { name: "WordPress", icon: <SiWordpress />, color: "text-blue-600" },
];

export default function Stacks() {
  return (
    <section className="py-12 px-4 sm:px-8 md:px-16 lg:px-24 text-center mt-24 md:mt-32">
      <h2 className="text-3xl font-bold mb-14 text-purple-400">
        Les stacks sur lesquelles j&apos;ai pu travailler :
      </h2>

      <div className="grid grid-cols-2   md:grid-cols-5 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8">
        {techs.map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 rounded-lg shadow-lg transition-transform duration-300 hover:scale-110 cursor-pointer"
          >
            <span className={`text-4xl sm:text-5xl ${tech.color}`}>{tech.icon}</span>
            <p className="mt-2 text-gray-300 text-base">{tech.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
