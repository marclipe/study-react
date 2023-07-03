import { ServiceCard } from '../ServiceCard/ServiceCard'

import styles from './SectionServices.module.css'
import womanHair from '../../assets/icons/woman-hair.svg'
import trim from "../../assets/icons/trim.svg";
import cosmetic from '../../assets/icons/cosmetic.svg'

export function SectionServices() {
    return (
      <section id="services" className={styles.section}>
        <div className={styles.services__content}>
          <h1 className={styles.title__services}>Serviços</h1>
          <p className={styles.subscription__services}>
            Com mais de 10 anos no mercado, o <strong>Beautysalon</strong> já
            conquistou clientes de inúmeros países com seus tratamentos
            exclusivos e totalmente naturais
          </p>
        </div>
        <div className={styles.services__card}>
          <ServiceCard
            image={womanHair}
            title={"Terapia capilar"}
            description={
              "Terapia completa para couro cabeludo e fios, protegendo todos os tipos de cabelos, inclusive os longos e finos."
            }
          />
          <ServiceCard
            image={trim}
            title={"Cortes"}
            description={
              "A nossa equipe é repleta de profissionais renomados, famosos por lançarem tendências com cortes diferenciados e clássicos."
            }
          />
          <ServiceCard
            image={cosmetic}
            title={"Tratamentos"}
            description={
              "O beautysalon conta com diversos tratamentos naturais e totalmente veganos, para qualquer tipo de cabelo."
            }
          />
        </div>
      </section>
    );
}