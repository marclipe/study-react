import styles from '../SectionTestimonials/SectionTestimonials.module.css'

import { Swiper, SwiperSlide } from 'swiper/react';

import perfilOne from '../../assets/images/perfil-one.png'

export function SectionTestimonials() {

  const slides = [
    { description: "1", name: "Wanessa Souza", image: perfilOne },
    { description: "2", name: "Wanessa Souza", image: perfilOne },
    { description: "3", name: "Wanessa Souza", image: perfilOne},
  ];

  return (
    <>
      <h1 className={styles.title}>Depoimentos de quem já passou por aqui</h1>

      <Swiper>
        {slides.map((item) => (
          <SwiperSlide>
            <div>
              <p className={styles.description}>
                {item.description}
              </p>
              <img 
              src={item.image} 
              alt={item.description} 
              className={styles.slide__item}/>
              <p className={styles.name}>{item.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}