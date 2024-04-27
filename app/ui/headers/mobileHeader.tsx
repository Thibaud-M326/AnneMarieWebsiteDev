import Link from 'next/link'
import Image from 'next/image'
import styles from '@/app/style/mobileHeader.module.css'

export default function MobileHeader() {
	const besaceMaj = "Besaces.";

	return (
		<div className={styles.headerDiv}>
			<div>
				<h1 className={styles.besaceH1}>{besaceMaj}</h1>
			</div>
			<div className={styles.rightHeaderDiv}>
				<button>
					<Image
						src="/logoInstagram.png"
						width={35}
						height={35}
						alt="Logo Instagram"
					/>
				</button>
			</div>
		</div>
	);
}
