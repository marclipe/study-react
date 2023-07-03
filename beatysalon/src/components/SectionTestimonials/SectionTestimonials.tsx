import styles from '../SectionTestimonials/SectionTestimonials.module.css'
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import perfilOne from '../../assets/images/perfil-one.png';
import perfilTwo from '../../assets/images/perfil-two.png';

import { Pagination } from 'swiper';

export function SectionTestimonials() {
  const [slidePerView, setSlidePerView] = useState(1);

  const slides = [
    { id: '1', description: "Eu sou cliente do Beautysalon há 5 anos e não troco por nada! Certamente meu cabelo mudou muito depois que comecei a tratar somente com produtos naturais e veganos. São profissionais incríveis e qualificados.", name: "Wanessa Souza", image: perfilOne },
    { id: '2', description: "Minha mãe frequenta o salão há anos e me levou um dia para conhecer. Minha experiência foi incrível, eu continuo fazendo o a terapia capilar e isso salvou o meu cabelo. Adoro todos os profissionais do Beautysalon.", name: "Luna Falcão", image: perfilTwo },
    { id: '3', description: "Eu sou cliente do Beautysalon há 5 anos e não troco por nada! Certamente meu cabelo mudou muito depois que comecei a tratar somente com produtos naturais e veganos. São profissionais incríveis e qualificados.", name: "Wanessa Souza", image: perfilOne},
  ];

  useEffect(() => {
    function handleResize() {
      if(window.innerWidth < 600) {
        setSlidePerView(1); 
      } else {
        setSlidePerView(1);
      }
    }

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, []);

  return (
    <div id="testimonials" className={styles.container__section}>
      <h1 className={styles.title}>
        Depoimentos de quem já <br /> passou por aqui
      </h1>

      <Swiper
        slidesPerView={slidePerView}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        autoplay={{ delay: 3000 }}
      >
        {slides.map((item) => (
          <SwiperSlide className={styles.container__swiper} key={item.id}>
            <div className={styles.container__carousel}>
              <div className={styles.container__slide}>
                <p className={styles.description}>
                  <span className={styles.quotes}>"</span>
                  {item.description}
                </p>
                <div className={styles.slide__item}>
                  <img
                    src={item.image}
                    alt={item.description}
                    className={styles.slide__image}
                  />
                  <p className={styles.name}>{item.name}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}