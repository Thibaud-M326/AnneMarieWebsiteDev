import styles from '@/app/style/faq/faq.module.css'
import { Jaldi } from 'next/font/google'
import FaqBlock from "@/app/ui/faq/faqBlock"
import { questions, reponses } from "@/app/lib/faqList"

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
      <div className={styles.titleDiv}>
        <h1>
          Foire aux questions
        </h1>
        <p
          className={styles.tipsP}
        >
          Cliquez sur les questions qui vous intéressent pour voir apparaître leurs réponses.
        </p>
      </div>
      <div className={styles.questionDiv}>
        {questions.map(function (question, i) {
          return (
            <FaqBlock
              key={i}
              question={question}
              reponse={reponses[i]}
            />
          );
        })}
      </div>
    </div>
  );
}
