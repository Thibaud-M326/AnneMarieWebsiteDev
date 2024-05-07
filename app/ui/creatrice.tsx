import Image from 'next/image'
import styles from '@/app/style/creatrice.module.css'
import { Merriweather } from 'next/font/google'

const merriweather = Merriweather({
	subsets: ['latin'],
	weight: '300'
})

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
        <p className={merriweather.className}>
        Bienvenue dans un monde de création et de passion.<br/>
La couture est un art, où chaque point raconte une histoire, révélant la touche finale qui rend chaque sac spécial.<br/>
Dans mon atelier, la créativité est reine et chaque pièce est le fruit d&apos;un travail minutieux, où l&apos;assemblage des matières et l&apos;harmonisation des couleurs donnent vie à des accessoires conçus avec attention tant à l&apos;intérieur qu&apos;à l&apos;extérieur.<br/>
J&apos;aime mêler les matières, du tissu au liège, de la toile de jute aux imprimés, pour composer des pièces uniques et exprimer ma passion pour la couture créative.<br/>
Laissez-vous inspirer, et trouvez le complice qui vous accompagnera dans l&apos;expression de votre style unique.<br/>
        </p>
        <span>_</span>
        <p className={merriweather.className}>
          Anne-Marie
        </p>
      </div>
    </div>
  );
}
