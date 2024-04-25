import Image from 'next/image'
import styles from '@/app/style/creatrice.module.css'

export default function Creatrice() {
  return (
    <div className={styles.creatriceDiv}>
      <div className={styles.imgDiv}>
        <Image
          src="/estelle.png" 
          width={450}
          height={600}
          alt='Photo Creatrice'
        />
      </div>
      <div className={styles.textDiv}>
        <h1>
          La Créatrice
        </h1>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem  accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab  illo inventore veritatis et quasi architecto beatae vitae dicta sunt  explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut  odit aut fugit, sed quia consequuntur
  magni dolores eos qui ratione  voluptatem sequi nesciunt.
        </p>
        <span>_</span>
        <p>Anne-Marie</p>
      </div>
    </div>
  );
}
