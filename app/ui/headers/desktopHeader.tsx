import Link from 'next/link'
import Image from 'next/image'
import styles from '@/app/style/headers/desktopHeader.module.css'
import { Merriweather } from 'next/font/google'

const merriweather = Merriweather({
	subsets: ['latin'],
	weight: '300'
})

export default function DesktopHeader() {
	const besaceMaj = "Besaces.";

	return (
		<div className={styles.headerDiv}>
			<div>
				<h1 className={styles.besaceH1}>{besaceMaj}</h1>
			</div>
			<div className={`${styles.rightHeaderDiv} ${merriweather.className}`}>
				<Link
					href="#creations"
				>creations</Link>
				<Link
					href="#aPropos"
				>à propos</Link>
				<Link
					href="#contact"
				>contact</Link>
				<Link
					href="#faq"
				>FAQ</Link>
				<Link
					href="https://www.instagram.com/"
					target='_blank'
				>
					<Image
						src="/logoInstagram.png"
						width={35}
						height={35}
						alt="Logo Instagram"
					/>
				</Link>
				<Link
					href="https://www.instagram.com/"
					target='_blank'
				>
					<Image
						src="/logoFacebook.png"
						width={35}
						height={35}
						alt="Logo Facebook"
					/>
				</Link>
			</div>
		</div>
	);
}
