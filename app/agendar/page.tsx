import BookingForm from "@/components/BookingForm";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Agendá Tu Llamada — Hungry Customers System",
  description: "Completá el formulario y agendá tu llamada gratuita de 20 minutos.",
};

export default function AgendarPage() {
  return (
    <>
      <Navbar />
      <main>
        <BookingForm />
      </main>
      <Footer />
    </>
  );
}
