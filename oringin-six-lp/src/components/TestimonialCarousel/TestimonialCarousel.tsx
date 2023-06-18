import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CarouselCard } from "../CarouselCard/CarouselCard";

import profilePhotoOne from '../../assets/images/perfil-one.png' 

import styles from "../../components/SectionTestimonials/SectionTestimonials.module.css";


const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2, /*Para ter 2 slides*/
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1, /*Para ter 1 slide*/
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
  ],
  className: styles.slider,
};

export function TestimonialCarousel() {
  return (
    <Slider {...settings}>
      <CarouselCard
        description={
          "Eu sou cliente do Beautysalon há 5 anos e não troco por nada! Certamente meu cabelo mudou muito depois que comecei a tratar somente com produtos naturais e veganos. São profissionais incríveis e qualificados."
        }
        image={profilePhotoOne}
        name={"Wanessa Souza"}
      />
      <CarouselCard
        description={
          "Eu sou cliente do Beautysalon há 5 anos e não troco por nada! Certamente meu cabelo mudou muito depois que comecei a tratar somente com produtos naturais e veganos. São profissionais incríveis e qualificados."
        }
        image={profilePhotoOne}
        name={"Wanessa Souza"}
      />
      <CarouselCard
        description={
          "Eu sou cliente do Beautysalon há 5 anos e não troco por nada! Certamente meu cabelo mudou muito depois que comecei a tratar somente com produtos naturais e veganos. São profissionais incríveis e qualificados."
        }
        image={profilePhotoOne}
        name={"Wanessa Souza"}
      />
    </Slider>
  );
}
