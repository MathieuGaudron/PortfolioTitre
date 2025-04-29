import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stack from "./components/Stack";
// import Card from "./components/Card";
import Cards from "./components/Cards";
import ContactForm from "./components/ContactForm";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <meta
          name="google-site-verification"
          content="_XOV1wQskjFLFy_gqsuPGhhjQAP-igooA1ZJqzlQB48"
        />  
      </Head>
      <Navbar />

      <main className="relative bg-custom-radial text-white min-h-screen flex flex-col items-center font-geist">
        <div
          className="opacity-0 scale-95 animate-scale-in w-full"
          id="accueil"
        >
          <section>
            <Hero />
          </section>
          <section>
            <Stack />
          </section>
          <section id="projets">
            <Cards />
            {/* <Card /> */}
          </section>
          <section id="contact">
            <ContactForm />
          </section>
        </div>
      </main>
    </div>
  );
}
