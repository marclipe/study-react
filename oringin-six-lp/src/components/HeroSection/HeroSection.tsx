import imageHero from "../../assets/images/Image-hero.png";
import styles from "./HeroSection.module.css";

export function HeroSection() {
    return (
      <section className={styles.container__hero}>
        <div className={styles.content}>
            <h1 className={styles.title__hero}>Saúde natural para<br /> os seus cabelos</h1>
            <p className={styles.text__hero}>Um salão exclusivo em São Paulo,<br />especializado em tratamentos naturais.</p>
            <a className={styles.button__schedule} href="#">Agendar um  horário</a>
        </div>
        <div>
          <div className={styles.background}></div>
          <img className={styles.photoHero} src={imageHero} alt="Imagem da Seção Hero" />
        </div>
      </section>
    );
}