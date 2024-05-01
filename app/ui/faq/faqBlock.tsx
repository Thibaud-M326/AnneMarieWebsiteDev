'use client'

import styles from "@/app/style/faq/faqBlock.module.css"
import type { question, reponse, open } from "@/app/lib/definition"
import { useState, useEffect } from "react"

export default function FaqBlock({ question, reponse, open }: { question: question; reponse: reponse; open: open }) {
	const [styleReponseDiv, setStyleReponseDiv] = useState(styles.reponseNeutralDiv)

	// function handleClick() {
	// 	if (styleReponseDiv === styles.reponseNeutralDiv
	// 		|| styleReponseDiv === styles.reponseHideDiv) {
	// 		setStyleReponseDiv(styles.reponseDisplayDiv)
	// 	} else {
	// 		setStyleReponseDiv(styles.reponseHideDiv)
	// 	}
	// }

	useEffect(() => {
		if (open === true || styleReponseDiv === styles.reponseNeutralDiv
		) {
			console.log("open")
			setStyleReponseDiv(styles.reponseDisplayDiv)
		} else {
			console.log("close")
			setStyleReponseDiv(styles.reponseHideDiv)
		}
	}, [styleReponseDiv, setStyleReponseDiv, open])


	return (
		<div className={styles.faqDiv}>
			<p
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