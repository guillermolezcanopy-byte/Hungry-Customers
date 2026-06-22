import ThankYouHero from "@/components/thankyou/ThankYouHero";
import NextSteps from "@/components/thankyou/NextSteps";
import ThankYouTestimonials from "@/components/thankyou/ThankYouTestimonials";
import Roadmap from "@/components/thankyou/Roadmap";
import ProgramExplainer from "@/components/thankyou/ProgramExplainer";
import JoinCallCTA from "@/components/thankyou/JoinCallCTA";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "¡Llamada Confirmada! — Hungry Customers System",
  description: "Tu llamada está agendada. Seguí los próximos pasos para aprovecharla al máximo.",
};

export default function GraciasPage() {
  return (
    <>
      <Navbar />
      <main>
        <ThankYouHero />
        <NextSteps />
        <ThankYouTestimonials />
        <Roadmap />
        <ProgramExplainer />
        <JoinCallCTA />
      </main>
      <Footer />
    </>
  );
}
