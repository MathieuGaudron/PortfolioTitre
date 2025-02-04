import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="bg-custom-radial text-white min-h-screen flex flex-col items-center font-geist">
      {/* Navbar */}
      <Navbar />

      {/* Contenu principal */}
      {/* <section className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl font-bold text-purple-400 drop-shadow-lg">
          Bienvenue sur mon Portfolio
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          Découvrez mes projets et mon parcours en développement web.
        </p>
      </section> */}

      <section>
        {/* Hero */}
        <Hero />
      </section>
    </main>
  );
}
