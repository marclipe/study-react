import styles from "../../components/SectionTestimonials/SectionTestimonials.module.css";
import { TestimonialCarousel } from "../TestimonialCarousel/TestimonialCarousel";

export function SectionTestimonials(){
    return (
      <section className={styles.section__testimonials}>
        <h1 className={styles.title__testimonials}>
          Depoimentos de quem já <br />
          passou por aqui
        </h1>
        <div>
          <TestimonialCarousel />
        </div>
      </section>
    );
}