import styles from "./HeroSection.module.css";

export function HeroSection() {
    return (
      <section>
        <div className={styles.content}>
            <h1>Saúde natural para<br /> os seus cabelos</h1>
            <p>Um salão exclusivo em São Paulo, especializado em tratamentos naturais.</p>
            <a href="#">Agendar um  horário</a>
        </div>
      </section>
    );
}