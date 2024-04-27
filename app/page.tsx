import Image from "next/image";
import Header from "@/app/ui/headers/header"
import Creatrice from "@/app/ui/creatrice"
import Creations from "@/app/ui/creations"

export default function Home() {
  return (
    <main >
      <Header />
      <Creatrice />
      <Creations />
    </main>
  );
}
