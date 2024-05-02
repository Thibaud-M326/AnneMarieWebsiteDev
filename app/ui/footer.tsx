import styles from "@/app/style/footer.module.css"
import Image from 'next/image'
import Link from 'next/link'
import { Jaldi } from 'next/font/google'

const jaldi = Jaldi({
  subsets: ['latin'],
  weight: '400'
})

export default function Footer() {
  return (
    <div
      id="footer"
      className={jaldi.className}
    >
      <div
        className={styles.footerDiv}
      >
        <div>
          <Link
            href="#contact"
          >Contact</Link>
          <p>Tel : 06 01 02 03 04 05</p>
          <p>mail@mail.com</p>
        </div>
        <div>
          <div
            className={styles.linkDiv}
          >
            <Link
              href="https://www.facebook.com/"
              target='_blank'
            >
              Facebook
            </Link>
            <Link
              href="https://www.facebook.com/"
              target='_blank'
            >
              <Image
                src="/socials/logoFacebook.png"
                width={35}
                height={35}
                alt="Logo Facebook"
              />
            </Link>
          </div>
          <div
            className={styles.linkDiv}
          >
            <Link
              href="https://www.instagram.com/"
              target='_blank'
            >
              Instagram
            </Link>
            <Link
              href="https://www.instagram.com/"
              target='_blank'
            >
              <Image
                src="/socials/logoInstagram.png"
                width={35}
                height={35}
                alt="Logo Instagram"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}