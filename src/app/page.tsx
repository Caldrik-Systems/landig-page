import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TheProblem from "@/components/TheProblem";
import HowWeWork from "@/components/HowWeWork";
import Services from "@/components/Services";
import Focus from "@/components/Focus";
import HonestLine from "@/components/HonestLine";
import TheDoorway from "@/components/TheDoorway";
import Footer from "@/components/Footer";
import TrustedClients from "@/components/TrustedClients";
import Insights from "@/components/Insights";
import Partners from "@/components/Partners";

const isDev = process.env.NODE_ENV !== "production";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <Navigation />
      <Hero />
      {isDev && <TrustedClients />}
      <TheProblem />
      <HowWeWork />
      <Services />
      {isDev && <Partners />}
      <Focus />
      <HonestLine />
      {isDev && <Insights />}
      <TheDoorway />
      <Footer />
    </div>
  );
}
