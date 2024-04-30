import Image from 'next/image'
import styles from "@/app/style/aPropos/aPropos2.module.css"
import { Merriweather } from 'next/font/google'

const merriweather = Merriweather({
	subsets: ['latin'],
	weight: '300'
})

export default function aPropos() {

  return (
    <div className={styles.aProposDiv}>
      <div className={styles.textDiv}>
        <div className={styles.titleTextDiv}>
          <h1 
            id="aPropos"
          >Designé et fait à la main</h1>
          <p
            className={merriweather.className}
          >
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem  accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab  illo inventore veritatis et quasi architecto beatae vitae dicta sunt  explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut  odit aut fugit, sed quia consequuntur
            magni dolores eos qui ratione  voluptatem sequi nesciunt.
          </p>
        </div>
        <div className={`${styles.quoteDiv} ${merriweather.className}`}>
          <p>
            «Des sacs à main qui aspirent à vous accompagner avec élégance et simplicité, jour après jour.»
          </p>
        </div>
      </div>
      <div className={styles.imageDiv}>
        <Image
          src="/aPropos/tricotMains.png"
          width={450}
          height={600}
          alt='Photo Creatrice'
        />
      </div>
    </div>
  );
}