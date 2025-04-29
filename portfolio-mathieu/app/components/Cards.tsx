import Card from "./Card";

export default function Cards() {
  return (
    <section className="py-16 text-center mt-24 md:mt-32 mx-auto max-w-screen-xl">
      <h2 className="text-3xl font-bold mb-8 md:mb-12 lg:mb-24 text-purple-400">
        Mes Projets
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 px-4 sm:px-8 mx-4 md:mx-0">
        <Card
          title="Bibliothèque de Films"
          description="Une application React / Node / MongoDB qui permet de rechercher vos films et séries TV du moment. Inclus un système d'inscription et connexion avec un JWT."
          image="/assets/MoviesLibrary.png"
          link="https://github.com/MathieuGaudron/MoviesLibrary"
          demo="https://movies-library-psi.vercel.app/"
          githubButton={true}
          reactButton={true}
          projectId="movies-library"
        />

        <Card
          title="Intranet Auto-école"
          description="Création d'un intranet en PYTHON / DJANGO pour une auto-école, avec gestion des rôles : administrateur, secrétaire, instructeur et élève. Chaque rôle dispose de fonctionnalités spécifiques adaptées à ses besoins."
          images={[
            "/assets/driving-school/intranet-1.png",
            "/assets/driving-school/intranet-2.png",
            "/assets/driving-school/intranet-3.png",
            "/assets/driving-school/intranet-4.png",
            "/assets/driving-school/intranet-5.png",
            "/assets/driving-school/intranet-6.png",
            "/assets/driving-school/intranet-7.png",
            "/assets/driving-school/intranet-8.png",
          ]}
          link="https://github.com/MathieuGaudron/Intranet_Auto_Ecole"
          githubButton={true}
          reactButton={false}
          projectId="auto-ecole-intranet"
        />

        <Card
          title="Puissance 4"
          description="Projet d'algorithmie en JavaScript. Le célèbre jeu puissance 4."
          image="/assets/puissance4.png"
          link="https://github.com/MathieuGaudron/Puissance_4"
          demo="https://puissance-4-green.vercel.app/"
          githubButton={true}
          reactButton={true}
          projectId="puissance-4"
        />

        <Card
          title="Outil de gestion de Stock"
          description="Création d'un outil de gestion de stock pour une entreprise d'evenementiel et de vente d'alcool. Réalisé avec NextJs. Ce projet est actuellement en cours de développement..."
          image="/assets/loading1.gif"
          link="#"
          // demo=
          githubButton={false}
          reactButton={false}
          projectId="puissance-4"
        />
      </div>
    </section>
  );
}
