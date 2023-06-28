import { AboutUs } from './components/AboutUs/AboutUs'
import { Header } from './components/Header/Header'
import { HeroSection } from './components/HeroSection/HeroSection'
import { SectionServices } from './components/SectionServices/SectionServices';
import { SectionTestimonials } from './components/SectionTestimonials/SectionTestimonials';

// import styles from './App.module.css'; 
import './global.css'

import { register } from 'swiper/element';

register();

// Import Swiper styles
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import "swiper/css";
import "swiper/css/effect-fade";
import { SectionContact } from './components/SectionContact/SectionContact';
import { Footer } from './components/Footer/Footer';

export function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutUs />
      <SectionServices />
      <SectionTestimonials/>
      <SectionContact/>
      <Footer/>
    </>
  );
}


