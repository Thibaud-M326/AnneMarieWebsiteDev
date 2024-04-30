import Image from 'next/image'
import styles from "@/app/style/aPropos.module.css"

export default function aPropos() {
  return (
    <div className={styles.aProposDiv}>
      <div className={styles.textDiv}>
        <div className={styles.titleTextDiv}>
          <h1 
            id="aPropos"
          >Materiaux</h1>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem  accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab  illo inventore veritatis et quasi architecto beatae vitae dicta sunt  explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut  odit aut fugit, sed quia consequuntur
            magni dolores eos qui ratione  voluptatem sequi nesciunt.
          </p>
          <span />
        </div>
        <div className={styles.quoteDiv}>
          <p>
            «Chacun de nos sacs à main est confectionné à partir de  matériaux soigneusement sélectionnés, alliant qualité et durabilité pour  un style intemporel.»
          </p>
        </div>
      </div>
      <div className={styles.imageDiv}>
        <Image
          src="/aPropos/purLaine.jpg"
          width={450}
          height={600}
          alt='Photo Creatrice'
        />
      </div>
    </div>
  );
}