import Card from "./Card";

export default function Cards() {
  return (
    <section className="py-16 text-center">
      <h2 className="text-3xl font-bold mb-12 mt-8 text-purple-400">Mes Projets</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 px-6">
        <Card
          title="Bibliothèque de Films"
          description="Une application React / Node / MongoDB qui permet de rechercher vos films et séries TV du moment. Inclus un système d'inscription / connexion."
          image="/assets/MoviesLibrary.png"
          link="https://github.com/MathieuGaudron/MoviesLibrary"
          demo="https://movies-library-psi.vercel.app/"
          githubButton={true}
          reactButton={true}
        />


        <Card
          title="Générateur de Factures SaaS"
          description="Un mini-SaaS en Next.js pour générer et télécharger des factures PDF."
          image="/assets/invoice-saas.jpg"
          link="https://github.com/MathieuGaudron/invoice-saas"
        />

        <Card
          title="Gestion de Stock Événementiel"
          description="Un outil en Symfony et React pour gérer le stock de boissons d'événements."
          image="/assets/stock-management.jpg"
          link="https://github.com/MathieuGaudron/stock-management"
        />
      </div>
    </section>
  );
}
