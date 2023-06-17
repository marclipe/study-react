import { AboutUs } from './components/AboutUs/AboutUs'
import { Header } from './components/Header/Header'
import { HeroSection } from './components/HeroSection/HeroSection'
import { SectionServices } from './components/SectionServices/SectionServices';
import { SectionTestimonials } from './components/SectionTestimonials/SectionTestimonials';

// import styles from './App.module.css'; 
import './global.css'


export function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutUs />
      <SectionServices/>
      <SectionTestimonials/>
    </>
  );
}


