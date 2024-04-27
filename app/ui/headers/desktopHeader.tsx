import Link from 'next/link'
import Image from 'next/image'
import styles from '@/app/style/desktopHeader.module.css'

export default function DesktopHeader() {
	const besaceMaj = "Besaces.";

	return (
		<div className={styles.headerDiv}>
			<div>
				<h1 className={styles.besaceH1}>{besaceMaj}</h1>
			</div>
			<div className={styles.rightHeaderDiv}>
				<Link href="">creations</Link>
				<Link href="">à propos</Link>
				<Link href="">contact</Link>
				<Link href="">FAQ</Link>
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
