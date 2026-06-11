import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Categories from './components/Categories';
import FeaturedPros from './components/FeaturedPros';
import PopularServices from './components/PopularServices';
import HowItWorks from './components/HowItWorks';
import Reviews from './components/Reviews';
import Team from './components/Team';
import FAQ from './components/FAQ';
import Blog from './components/Blog';
import Newsletter from './components/Newsletter';
import Contact from './components/Contact';
import CtaJoin from './components/CtaJoin';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <TrustBar />
      <Categories />
      <FeaturedPros />
      <PopularServices />
      <HowItWorks />
      <Reviews />
      <Team />
      <FAQ />
      <Blog />
      <Newsletter />
      <Contact />
      <CtaJoin />
      <Footer />
      <BackToTop />
    </>
  );
}
