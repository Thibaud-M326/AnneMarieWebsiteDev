import styles from "@/app/style/signature.module.css"
import { Jaldi } from 'next/font/google'

const jaldi = Jaldi({
  subsets: ['latin'],
  weight: '400'
})

export default function Signature() {
	return (
		<div className={`${styles.signatureDiv} ${jaldi.className}`}>
			<p
				className={styles.signature}
			>
				2024 @ design et réalisation par thibaudmaitre@gmail.com
			</p>
		</div>
	);
}