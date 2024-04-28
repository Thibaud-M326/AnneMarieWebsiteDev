import Link from 'next/link'
import Image from 'next/image'
import styles from '@/app/style/mobileHeader.module.css'
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react'
import clsx from 'clsx';

export default function MobileHeader() {
	const besaceMaj = "Besaces.";
const [styleMenuDiv, setStyleMenuDiv] = useState(styles.menuDivNeutral)

	function displayMenu() {
		if(styleMenuDiv === styles.menuDivDisplay) {
		 	setStyleMenuDiv(styles.menuDivNone);
		} else {
		 	setStyleMenuDiv(styles.menuDivDisplay);
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
							sx={{fontSize: 40}}
						/>
					</button>
				</div>
				<div className={styleMenuDiv}>
					<p>active</p>
				</div>
			</div>
	);
}
