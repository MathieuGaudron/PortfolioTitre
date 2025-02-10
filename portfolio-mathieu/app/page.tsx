import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stack from "./components/Stack";
// import Card from "./components/Card";
import Cards from "./components/Cards";


export default function Home() {
  return (
    <div>
      <Navbar />

      <main className="relative bg-custom-radial text-white min-h-screen flex flex-col items-center font-geist">
        <div className="opacity-0 scale-95 animate-scale-in w-full">
          <section>
            <Hero />
          </section>
          <section>
            <Stack />
          </section>
          <section>
            <Cards />
            {/* <Card /> */}
          </section>
        </div>
      </main>
    </div>
  );
}
