import Cards from "@/components/custom/Cards";
import ContactUs from "@/components/custom/ContactUs";
import Footer from "@/components/custom/Footer";
import Hero from "@/components/custom/Hero";
import Navbar from "@/components/custom/Navbar";
import Payment from "@/components/custom/Payment";
import ThreeImageClient from "@/components/custom/ThreeImageClient"; // Import the client-side component

export default function Home() {
  return (
    <main>
      {/* Navbar Section */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Three Image Section (client-side) */}
      <ThreeImageClient />

      {/* Cards Section */}
      <Cards />

      {/* Payment */}
      <Payment />

      {/* Contact us */}
      <ContactUs />

      {/* Footer */}
      <Footer />
    </main>
  );
}
