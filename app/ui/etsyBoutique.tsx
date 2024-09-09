import styles from "@/app/style/etsyBoutique.module.css"
import Image from 'next/image'
import Link from 'next/link'
import { Newsreader } from 'next/font/google'
import { Jaldi } from 'next/font/google'

const newsreader = Newsreader({
	subsets: ['latin'],
	weight: '600'
})

const jaldi = Jaldi({
	subsets: ['latin'],
	weight: '400'
})

export default function EtsyBoutique() {
	return (
		<div 
      className={styles.etsyBoutiqueDiv}
		>
			<div className={styles.textAndButton}>
				<div className={styles.text}>
					Toutes mes créations sont disponibles sur ma boutique :
				</div>
				<div className={styles.buttonDiv}>
					<Link
						href="https://www.etsy.com/shop/amcreationunique/?etsrc=sdt"
						target='_blank'
					>
						<button 
      				className={`${newsreader.className} ${styles.button}`}
						>
							Etsy
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
}