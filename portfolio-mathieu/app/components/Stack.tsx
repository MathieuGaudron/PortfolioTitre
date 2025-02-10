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
    <section className="py-8 px-24 text-center">
      <h2 className="text-3xl font-bold mb-16 text-purple-400">Les stacks sur lesquelles j&apos;ai pu travailler :</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 justify-center">
        {techs.map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 rounded-lg bg-black/30 shadow-lg transition-all duration-500 hover:scale-125 cursor-pointer"
          >
            <span className={`text-5xl ${tech.color}`}>{tech.icon}</span>
            <p className="mt-2 text-gray-300">{tech.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
