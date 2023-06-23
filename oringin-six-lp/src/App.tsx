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
import 'swiper/css';
import "swiper/css/pagination";
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

export function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutUs />
      <SectionServices />
      <SectionTestimonials/>
    </>
  );
}


