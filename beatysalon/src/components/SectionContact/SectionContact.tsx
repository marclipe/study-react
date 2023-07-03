import styles from './SectionContact.module.css';
import whatsAppIcon from '../../assets/icons/whatsapp.svg';
import mapIcon from '../../assets/icons/map-pin.svg';
import mailIcon from '../../assets/icons/mail.svg';
import { WhatsappLogo } from '@phosphor-icons/react';

const contacts = [
  { id: "1", image: whatsAppIcon, info: " 11 99845-6754" },
  { id: "2", image: mapIcon, info: "R. Amauri Souza, 346" },
  { id: "3", image: mailIcon, info: "contato@beautysalon.com" },
];

export function SectionContact(){
  return (
    <section id="contact" className={styles.container}>
      <div className={styles.item__containerOne}>
        <h1 className={styles.title__contact}>
          Entre em contato <br /> com a gente!
        </h1>
        <p className={styles.text__contact}>
          Entre em contato com a Beautysalon, queremos tirar suas dúvidas, ouvir
          suas críticas e sugestões.
        </p>
        <a className={styles.button__contact} href="#">
          <WhatsappLogo size={24} color="#F9F9F9" />
          Entrar em contato
        </a>
      </div>

      <div className={styles.item__containerTwo}>
        {contacts.map((item) => (
          <div key={item.id}>
            <div className={styles.item__contact}>
              <img src={item.image} alt={item.info} />
              <p>{item.info}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}