import { Logo } from "../Logo/Logo";
import styles from "./Header.module.css";

export function Header() {
    return (
		<header className={styles.header}>
		<div className={styles.header__logo}><Logo /></div>
		<div className={styles.header__item}>
					<ul className={styles.menu}>
							<li className={styles.menu__item}>
									<a className={styles.menu__link} href="#">Início</a>
							</li>
							<li className={styles.menu__item}>
									<a className={styles.menu__link} href="#">Sobre</a>
							</li>
							<li className={styles.menu__item}>
									<a className={styles.menu__link} href="#">Serviços</a>
							</li>
							<li className={styles.menu__item}>
									<a className={styles.menu__link} href="#">Depoimentos</a>
							</li>
							<li className={styles.menu__item}>
									<a className={styles.menu__link} href="#">Contato</a>
							</li>
					</ul>
			</div>
		</header>
    );
}