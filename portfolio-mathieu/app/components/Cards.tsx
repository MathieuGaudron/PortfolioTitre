import Card from "./Card";

export default function Cards() {
  return (
    <section className="py-16 text-center mx-auto max-w-screen-xl">
      <h2 className="text-3xl font-bold mb-8 md:mb-12 text-purple-400">
        Mes Projets
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-20 px-4 sm:px-8 mx-4 md:mx-0">
        <Card
          title="Bibliothèque de Films"
          description="Une application React / Node / MongoDB qui permet de rechercher vos films et séries TV du moment. Inclus un système d'inscription et connexion avec un JWT."
          image="/assets/MoviesLibrary.png"
          link="https://github.com/MathieuGaudron/MoviesLibrary"
          demo="https://movies-library-psi.vercel.app/"
          githubButton={true}
          reactButton={true}
        />

        <Card
          title="Auto-école HD Conduite"
          description="Un site web vitrine pour l'auto école d'un client. Réalisé avec React et Tailwind CSS."
          image="/assets/hd-conduite.png"
          link="https://github.com/MathieuGaudron/HD_CONDUITE"
          demo="https://hd-conduite.vercel.app/"
          githubButton={true}
          reactButton={true}
        />

        <Card
          title="Bibliothèque de Films"
          description="Une application React / Node / MongoDB qui permet de rechercher vos films et séries TV du moment. Inclus un système d'inscription / connexion."
          image="/assets/MoviesLibrary.png"
          link="https://github.com/MathieuGaudron/MoviesLibrary"
          demo="https://movies-library-psi.vercel.app/"
          githubButton={true}
          reactButton={true}
        />
      </div>
    </section>
  );
}
