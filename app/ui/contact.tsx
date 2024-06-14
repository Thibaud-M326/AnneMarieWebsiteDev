'use client'

import { useForm, ValidationError } from "@formspree/react"
import styles from "@/app/style/contact.module.css"
import { Jaldi } from 'next/font/google'

const jaldi = Jaldi({
  subsets: ['latin'],
  weight: '400'
})

export default function Contact() {
  return (
    <div className={styles.contactDiv}
      id="contact" 
    >
      <div className={styles.contactezNousDiv}>
        <div className={styles.contactTextDiv}>
          <p
            className={`${jaldi.className} ${styles.dontHesitateP}`}
          >
            N&apos;hésitez pas à nous communiquer vos demandes
          </p>
          <p
            className={`${jaldi.className} ${styles.numAndMailP}`}
          >
            Tél : 06 58 81 04 27 | amcrea34@gmail.com
          </p>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}

export function ContactForm() {
  const [state, handleSubmit] = useForm("mknllaad");
  if (state.succeeded) {
    return (
      <p
        className={`${jaldi.className} ${styles.succeedP}`}
      >
        Merci, un email vient de nous être envoyé !
      </p>
    );
  }

  return (
    <div className={styles.formDiv}>
      <form
        onSubmit={handleSubmit}
        className={jaldi.className}
      >

        <input
          className={styles.prenomInput}
          placeholder="prenom*"
          id="prenom"
          type="text"
          name="prenom"
          required
        />
        <ValidationError
          prefix="Prenom"
          field="prenom"
          errors={state.errors}
        />

        <input
          placeholder="nom"
          id="nom"
          type="text"
          name="nom"
        />
        <ValidationError
          prefix="Nom"
          field="nom"
          errors={state.errors}
        />

        <input
          placeholder="mail*"
          id="email"
          type="email"
          name="email"
          required
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
        />

        <input
          placeholder="telephone"
          id="telephone"
          type="tel"
          name="telephone"
        />
        <ValidationError
          prefix="Telephone"
          field="telephone"
          errors={state.errors}
        />

        <textarea
          placeholder="message*"
          id="message"
          name="message"
          required
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />

        <p>
           * Champs requis
        </p>

        <button 
          type="submit" 
          disabled={state.submitting}
          className={jaldi.className}
        >
          Envoyer
        </button>
      </form>
    </div>
  );
}
