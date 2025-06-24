"use client";

import { useState } from "react";
import Card from "./Card";
import Modal from "./Modal";

export default function Cards() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImages, setModalImages] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (images: string[], index: number) => {
    setModalImages(images);
    setCurrentIndex(index);
    setModalOpen(true);
    setTimeout(() => {
      window.scrollTo({ top: 1800, behavior: "smooth" });
    }, 50);
  };

  const closeModal = () => setModalOpen(false);
  const nextImage = () =>
    setCurrentIndex((prev) => (prev + 1) % modalImages.length);
  const prevImage = () =>
    setCurrentIndex(
      (prev) => (prev - 1 + modalImages.length) % modalImages.length
    );

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
          title="Chez PONCH'"
          description="Création d’un site (Java / Spring Boot / MySQL) pour un restaurant, avec une interface d’administration permettant la gestion complète des plats et menus (CRUD). Une page de configuration dédiée permet au client de crée le site si il n'est pas encore crée et de personnaliser facilement les couleurs, images, titres et textes des boutons du site."
          images={[
            "/assets/java-restaurant/home.png",
            "/assets/java-restaurant/home1.png",
            "/assets/java-restaurant/admin_home.png",
            "/assets/java-restaurant/config.png",
            "/assets/java-restaurant/plats_admin.png",
            "/assets/java-restaurant/menu_admin.png",
            "/assets/java-restaurant/carte_client.png",
            "/assets/java-restaurant/menu_client.png",
          ]}
          link="https://github.com/MathieuGaudron/JAVA_RESTAURANT"
          githubButton={true}
          reactButton={false}
          projectId="Chez-PONCH'"
          onImageClick={(index) =>
            openModal(
              [
                "/assets/java-restaurant/home.png",
                "/assets/java-restaurant/home1.png",
                "/assets/java-restaurant/admin_home.png",
                "/assets/java-restaurant/config.png",
                "/assets/java-restaurant/plats_admin.png",
                "/assets/java-restaurant/menu_admin.png",
                "/assets/java-restaurant/carte_client.png",
                "/assets/java-restaurant/menu_client.png",
              ],
              index
            )
          }
        />
        



        <Card
          title="Intranet Auto-école"
          description="Création d'un intranet pour une auto-école (PYTHON / DJANGO), avec gestion des rôles : administrateur, secrétaire, instructeur et élève. Chaque rôle dispose de fonctionnalités spécifiques adaptées à ses besoins."
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
          onImageClick={(index) =>
            openModal(
              [
                "/assets/driving-school/intranet-1.png",
                "/assets/driving-school/intranet-2.png",
                "/assets/driving-school/intranet-3.png",
                "/assets/driving-school/intranet-4.png",
                "/assets/driving-school/intranet-5.png",
                "/assets/driving-school/intranet-6.png",
                "/assets/driving-school/intranet-7.png",
                "/assets/driving-school/intranet-8.png",
              ],
              index
            )
          }
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
      </div>

      {modalOpen && (
        <Modal
          images={modalImages}
          index={currentIndex}
          onClose={closeModal}
          onNext={nextImage}
          onPrev={prevImage}
        />
      )}
    </section>
  );
}
