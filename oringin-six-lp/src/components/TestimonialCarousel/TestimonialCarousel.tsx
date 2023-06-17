import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "../../components/SectionTestimonials/SectionTestimonials.module.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export function TestimonialCarousel() {
  return (
    <Slider {...settings}>
      <div>
        <p> Eu sou cliente do Beautysalon há 5 anos e não troco por nada! Certamente meu cabelo mudou muito depois que comecei a tratar somente com produtos naturais e veganos. São profissionais incríveis e qualificados. </p>
				<img src={''} alt={''} />
        <p>Wanessa Souza</p>
      </div>
      <div>
        <p> Eu sou cliente do Beautysalon há 5 anos e não troco por nada! Certamente meu cabelo mudou muito depois que comecei a tratar somente com produtos naturais e veganos. São profissionais incríveis e qualificados. </p>
				<img src={''} alt={''} />
        <p>Wanessa Souza</p>
      </div>
      <div>
        <p> Eu sou cliente do Beautysalon há 5 anos e não troco por nada! Certamente meu cabelo mudou muito depois que comecei a tratar somente com produtos naturais e veganos. São profissionais incríveis e qualificados. </p>
				<img src={''} alt={''} />
        <p>Wanessa Souza</p>
      </div>
    </Slider>
  );
}
