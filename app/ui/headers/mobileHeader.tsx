import Link from 'next/link'
import Image from 'next/image'
import styles from '@/app/style/headers/mobileHeader.module.css'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Roboto } from 'next/font/google'
import { useState } from 'react'

const roboto = Roboto({
	subsets: ['latin'],
	weight: '400'
})

export default function MobileHeader() {
	const besaceMaj = "Besaces.";
	const [styleMenuDiv, setStyleMenuDiv] = useState(styles.menuDivNeutral)

	function displayMenu() {
		if (styleMenuDiv === styles.menuDivNeutral) {
			setStyleMenuDiv(styles.menuDivDisplay);
		} else if (styleMenuDiv === styles.menuDivNone) {
			setStyleMenuDiv(styles.menuDivDisplay);
		}
	}

	function closeMenu() {
		if (styleMenuDiv === styles.menuDivDisplay) {
			setStyleMenuDiv(styles.menuDivNone);
		}
	}

	return (
		<div className={styles.headerDiv}>
			<div>
				<h1 className={styles.besaceH1}>{besaceMaj}</h1>
			</div>
			<div className={styles.rightHeaderDiv}>
				<button
					className={styles.burgerButton}
					onClick={displayMenu}
				>
					<MenuIcon
						sx={{ fontSize: 45 }}
            className={styles.burgerIcon}
					/>
				</button>
			</div>

			<div className={styleMenuDiv}>
				<div className={styles.headerDiv}>
					<div>
						<h1 className={styles.besaceH1}>{besaceMaj}</h1>
					</div>
					<div className={styles.rightHeaderDiv}>
						<button
							className={styles.closeButton}
							onClick={closeMenu}
						>
							<CloseIcon
								sx={{ fontSize: 40 }}
							/>
						</button>
					</div>
				</div>

				<div className={`${styles.containerDiv} ${roboto.className}`}>
					<Link
						href="#creations"
						onClick={closeMenu}
					>CREATIONS</Link>
					<Link
						href="#aPropos"
						onClick={closeMenu}
					>À PROPOS</Link>
					<Link
						href="#contact"
						onClick={closeMenu}
					>CONTACT</Link>
					<Link
						href="#faq"
						onClick={closeMenu}
					>FAQ</Link>
					<span />
					<div >
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
							href="https://www.facebook.com/"
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
			</div>
		</div>
	);
}
