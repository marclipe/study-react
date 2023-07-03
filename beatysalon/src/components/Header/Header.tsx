import { useEffect, useState } from "react";
import styles from "./Header.module.css";
import menuIcon from '../../assets/icons/menu-icon.svg'; 
import menuClose from '../../assets/icons/close-icon.svg';
import logoMobile from '../../assets/images/logoMobile.png';

export function Header() {

	const [isOpen, setIsOpen] = useState(false)
	const [isDesktop, setIsDesktop] = useState(false);

		const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

		useEffect(() => {
			const handleResize = () => {
				setIsDesktop(window.innerWidth > 768);
			}; 

			handleResize();

			window.addEventListener('resize', handleResize); 

			return () => {
				window.removeEventListener("resize", handleResize);
			}
		}, []);

    return (
      <header className={styles.header}>
        <div
          className={`${styles.header__logo} ${isOpen ? styles.hideLogo : ""}`}
        >
          <a href=""><img className={styles.logoMobile} src={logoMobile} alt="#" /></a>
        </div>
        <div>
          <div
            className={`${styles.menuIcon} ${isDesktop ? styles.hideMenu : ""}`}
            onClick={toggleMenu}
          >
            {!isOpen && <img src={menuIcon} alt="" />}
            {isOpen && <img src={menuClose} alt="" />}
          </div>
          {isOpen && (
            <div>
              <ul className={styles.menu}>
                <li className={styles.menu__item}>
                  <a className={styles.menu__link} href="#home">
                    Início
                  </a>
                </li>
                <li className={styles.menu__item}>
                  <a className={styles.menu__link} href="#about">
                    Sobre
                  </a>
                </li>
                <li className={styles.menu__item}>
                  <a className={styles.menu__link} href="#services">
                    Serviços
                  </a>
                </li>
                <li className={styles.menu__item}>
                  <a className={styles.menu__link} href="#testimonials">
                    Depoimentos
                  </a>
                </li>
                <li className={styles.menu__item}>
                  <a className={styles.menu__link} href="#contact">
                    Contato
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
        {isDesktop && (
          <div>
            <ul className={styles.menu}>
              <li className={styles.menu__item}>
                <a className={styles.menu__link} href="#home">
                  Início
                </a>
              </li>
              <li className={styles.menu__item}>
                <a className={styles.menu__link} href="#about">
                  Sobre
                </a>
              </li>
              <li className={styles.menu__item}>
                <a className={styles.menu__link} href="#services">
                  Serviços
                </a>
              </li>
              <li className={styles.menu__item}>
                <a className={styles.menu__link} href="#testimonials">
                  Depoimentos
                </a>
              </li>
              <li className={styles.menu__item}>
                <a href="#contact" className={styles.menu__link}>
                  Contato
                </a>
              </li>
            </ul>
          </div>
        )}
      </header>
    );
}