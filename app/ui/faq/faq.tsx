import styles from '@/app/style/faq/faq.module.css'
import { Jaldi } from 'next/font/google'
import FaqBlock from "@/app/ui/faq/faqBlock"
import { faqs } from "@/app/ui/faq/faqList"

const jaldi = Jaldi({
  subsets: ['latin'],
  weight: ['400', '700']
})

export default function Faq() {
	return (
		<div
			id="faq"
			className={`${styles.faqDiv} ${jaldi.className}`}
		>
			<h1>
				Foire aux questions
			</h1>
			<p>
				Cliquez sur les questions qui vous intéressent pour voir apparaître leurs réponses.
			</p>
			<div className={styles.questionDiv}>
				<FaqBlock />
			</div>
		</div>
	);
}
