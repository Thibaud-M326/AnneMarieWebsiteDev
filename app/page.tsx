import Image from "next/image"
import Header from "@/app/ui/headers/header"
import Creatrice from "@/app/ui/creatrice"
import Creations from "@/app/ui/creations"
import APropos1 from "@/app/ui/aPropos/aPropos1"
import APropos2 from "@/app/ui/aPropos/aPropos2"

export default function Home() {
  return (
    <main >
      <Header />
      <Creatrice />
      <Creations />
      <APropos1 />
      <APropos2 />
    </main>
  );
}
