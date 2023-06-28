import styles from '../Footer/Footer.module.css';

import logoFooter from '../../assets/images/logo-footer.png';
import logoInstagram from '../../assets/icons/instagram.svg'; 
import logoFacebook from '../../assets/icons/facebook.svg';
import logoYoutube from '../../assets/icons/youtube.svg'

const icons = [
  { id: "1", iconImage: logoInstagram },
  { id: "2", iconImage: logoFacebook },
  { id: "3", iconImage: logoYoutube },
];

export function Footer(){
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__item}>
        <img className={styles.footer__image} src={logoFooter} alt="" />
        <p className={styles.footer__text_name}>&copy;{year} Beautysalon.</p>
        <p className={styles.footer__text}>Todos os direitos reservados.</p>
      </div>
      <div className={styles.footer__itemTwo}>
        {icons.map((item) => (
          <div key={item.id}>
            <img src={item.iconImage} alt="Ícone de Rede social" />
          </div>
        ))}
      </div>
    </footer>
  );
}