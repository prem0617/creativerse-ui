import Cards from "@/components/custom/Cards";
import Hero from "@/components/custom/Hero";
import Navbar from "@/components/custom/Navbar";
import ThreeImage from "@/components/custom/ThreeImage";

export default function Home() {
  return (
    <div>
      <Navbar />

      <Hero />

      {/* Three Image */}
      <ThreeImage />

      <Cards />
    </div>
  );
}
