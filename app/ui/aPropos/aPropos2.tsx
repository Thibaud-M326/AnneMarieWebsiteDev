import Image from 'next/image'
import styles from "@/app/style/aPropos/aPropos2.module.css"
import { Merriweather, Kurale } from 'next/font/google'
import Carousel from "@/app/ui/aPropos/aProposCarousel2"

const merriweather = Merriweather({
	subsets: ['latin'],
	weight: '300'
})

const kurale = Kurale({
	subsets: ['latin'],
	weight: '400'
})

export default function APropos() {

  return (
    <div className={styles.aProposDiv}>
      <div className={styles.textDiv}>
        <div className={styles.titleTextDiv}>
          <h1 
            id="aPropos"
          >Savoir-faire</h1>
          <p
            className={merriweather.className}
          >
          Mon savoir-faire en matière de couture s&apos;associe harmonieusement à mon esprit créatif et à ma patience.<br/>
          Chaque idée, chaque geste reflète exprime ma joie de créer.<br/>
          Cette combinaison d&apos;expertise et de passion donne naissance à des œuvres uniques, empreintes de mon style personnel et de mon souci du détail.<br/>
          Laissez-vous séduire et affirmez votre style avec un accessoire qui vous ressemble.<br/>
          </p>
        </div>
        <div className={`${styles.quoteDiv} ${kurale.className}`}>
          <p>
            «Des sacs à main qui aspirent à vous accompagner avec élégance et simplicité, jour après jour.»
          </p>
        </div>
      </div>
      <div className={styles.imageDiv}>
        <Carousel />
      </div>
    </div>
  );
}