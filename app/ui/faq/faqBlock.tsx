'use client'

import styles from "@/app/style/faq/faqBlock.module.css"
import type { question, reponse } from "@/app/lib/definition"
import { useState } from "react"

export default function FaqBlock({ question, reponse }: { question: question; reponse: reponse }) {
	const [styleReponseDiv, setStyleReponseDiv] = useState(styles.reponseNeutralDiv)

	function handleClick() {
		if (styleReponseDiv === styles.reponseNeutralDiv
			|| styleReponseDiv === styles.reponseHideDiv) {
			setStyleReponseDiv(styles.reponseDisplayDiv)
		} else {
			setStyleReponseDiv(styles.reponseHideDiv)
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
			<div className={styleReponseDiv}>
				<p
					className={styles.reponseP}
				>
					{reponse}
				</p>
			</div>
		</div>
	);
}