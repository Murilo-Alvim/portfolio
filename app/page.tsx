import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Sobre from "@/components/Sobre";
import Competencias from "@/components/Competencias";
import Experiencia from "@/components/Experiencia";
import Projetos from "@/components/Projetos";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />
      <Hero />
      <Sobre />
      <Competencias />
      <Experiencia />
      <Projetos />
      <Contato />
      <Footer />
    </main>
  );
}
