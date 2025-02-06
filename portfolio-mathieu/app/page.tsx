import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="bg-custom-radial text-white min-h-screen flex flex-col items-center font-geist opacity-0 scale-95 animate-scale-in">
      <Navbar />

      <section>
        {/* Hero */}
        <Hero />
      </section>
    </main>
  );
}
