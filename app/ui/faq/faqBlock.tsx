'use client'

import styles from "@/app/style/faq/faqBlock.module.css"
import type { question, reponse } from "@/app/lib/definition"
import { useState } from "react"

export default function FaqBlock({ question, reponse }: { question: question; reponse: reponse }) {
	const [styleReponseP, setStyleReponseP] = useState(styles.reponseNeutralP)

	function handleClick() {
		if (styleReponseP === styles.reponseNeutralP
			|| styleReponseP === styles.reponseHideP) {
			setStyleReponseP(styles.reponseDisplayP)
		} else {
			setStyleReponseP(styles.reponseHideP)
		}
	}

	return (
		<div className={styles.faqDiv}>
			<p
				onClick={handleClick}
				id="clickP"
				className={styles.questionP}
			>
				{question}
			</p>
			<div className={styles.reponseDiv}>
				<p
					className={styleReponseP}
				>
					{reponse}
				</p>
			</div>
		</div>
	);
}