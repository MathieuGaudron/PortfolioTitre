import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

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
            
          </section>
        </div>
      </main>
    </div>
  );
}
