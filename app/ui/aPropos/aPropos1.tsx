import Image from 'next/image'
import styles from "@/app/style/aPropos/aPropos1.module.css"
import { Merriweather, Kurale } from 'next/font/google'
import Carousel from "@/app/ui/aPropos/aProposCarousel1"
import { promises as fs } from 'fs'

const merriweather = Merriweather({
	subsets: ['latin'],
	weight: '300'
})

const kurale = Kurale({
	subsets: ['latin'],
	weight: '400'
})

export default async function APropos() {

  return (
    <div className={styles.aProposDiv}
      id="aPropos"
    >
      <div className={styles.textDiv}>
        <div className={styles.titleTextDiv}>
          <h1 >Mon Atelier</h1>
          <p
            className={merriweather.className}
          >
            Je laisse libre cours à ma créativité en compagnie de ma fidèle collaboratrice, la machine à coudre.<br/>
            J&apos;aime jouer avec des matériaux variés : du liège solide aux tissus comme le simili, la toile de jute et le coton.<br/>
            En les associant, je crée des pièces à la fois robustes et charmantes, parfaites pour durer dans le temps avec style et élégance.<br/>
            Chaque pièce est pensée pour la femme moderne, dynamique et raffinée, qui cherche à allier praticité et style intemporel dans son quotidien.
          </p>
        </div>
        <div className={`${styles.quoteDiv} ${kurale.className}`}>
          <p>
          «Chacun de nos sacs est confectionné à partir de matériaux soigneusement sélectionnés, alliant qualité et durabilité pour un style intemporel.»
          </p>
        </div>
      </div>
      <div className={styles.imageDiv}>
        <Carousel />
      </div>
    </div>
  );
}