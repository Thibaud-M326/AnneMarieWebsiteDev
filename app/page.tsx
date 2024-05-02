import Header from "@/app/ui/headers/header"
import Creatrice from "@/app/ui/creatrice"
import Creations from "@/app/ui/creations"
import APropos1 from "@/app/ui/aPropos/aPropos1"
import APropos2 from "@/app/ui/aPropos/aPropos2"
import Contact from "@/app/ui/contact"
import Faq from "@/app/ui/faq/faq"
import Footer from "@/app/ui/footer"
import Signature from "@/app/ui/signature"

export default function Home() {
  return (
    <main >
      <Header />
      <Creatrice />
      <Creations />
      <APropos1 />
      <APropos2 />
      <Contact />
      <Faq />
      <Footer />
      <Signature />
    </main>
  );
}
