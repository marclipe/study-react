import styles from '../SectionContact/SectionContact.module.css';
import whatsAppIcon from '../../assets/icons/whatsapp.svg';
import mapIcon from '../../assets/icons/map-pin.svg';
import mailIcon from '../../assets/icons/mail.svg';

const contacts = [
  { id: "1", image: whatsAppIcon, info: " Entrar em contato" },
  { id: "2", image: mapIcon, info: "R. Amauri Souza, 346" },
  { id: "3", image: mailIcon, info: "contato@beautysalon.com" },
];

export function SectionContact(){
  return (
    <section className={styles.container}>
      <div className={styles.item__container}>
        <h1>Entre em contato com a gente!</h1>
        <p>
          Entre em contato com a Beautysalon, queremos tirar suas dúvidas, ouvir
          suas críticas e sugestões.
        </p>
        <a href="#">
          <img src={whatsAppIcon} alt="Logo WhatsApp" /> Entrar em contato
        </a>
      </div>

      <div className={styles.item__container}>
        {contacts.map((item) => (
          <div key={item.id}>
            <div>
              <img src={item.image} alt={item.info} />
              <p>{item.info}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}