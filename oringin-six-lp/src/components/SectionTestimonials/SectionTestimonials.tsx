import styles from '../SectionTestimonials/SectionTestimonials.module.css'

import { Swiper, SwiperSlide } from 'swiper/react';

import perfilOne from '../../assets/images/perfil-one.png'

import { Pagination } from 'swiper';

export function SectionTestimonials() {

  const slides = [
    { id: '1', description: "Eu sou cliente do Beautysalon há 5 anos e não troco por nada! Certamente meu cabelo mudou muito depois que comecei a tratar somente com produtos naturais e veganos. São profissionais incríveis e qualificados.", name: "Wanessa Souza", image: perfilOne },
    { id: '2', description: "Eu sou cliente do Beautysalon há 5 anos e não troco por nada! Certamente meu cabelo mudou muito depois que comecei a tratar somente com produtos naturais e veganos. São profissionais incríveis e qualificados.", name: "Wanessa Souza", image: perfilOne },
    { id: '3', description: "Eu sou cliente do Beautysalon há 5 anos e não troco por nada! Certamente meu cabelo mudou muito depois que comecei a tratar somente com produtos naturais e veganos. São profissionais incríveis e qualificados.", name: "Wanessa Souza", image: perfilOne},
  ];

  return (
    <>
      <h1 className={styles.title}>
        Depoimentos de quem já <br /> passou por aqui
      </h1>

      <Swiper
        slidesPerView={2}
        pagination={{ clickable: true }}
        modules={[Pagination]}

        breakpoints={{
          // when window width is >= 640px
          640: {
            slidesPerView: 1,
            // spaceBetween: 20
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 2,
            // spaceBetween: 40
          },
        }}
      >
        {slides.map((item) => (
          <SwiperSlide className={styles.container__slider} key={item.id}>
            <div className={styles.container__slide}>
              <p className={styles.description}>{item.description}</p>
              <div className={styles.slide__item}>
                <img
                  src={item.image}
                  alt={item.description}
                  className={styles.slide__image}
                />
                <p className={styles.name}>{item.name}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}