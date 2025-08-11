import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import HeroSection from '../components/HeroSection';
import AboutUs from '../components/AboutUs';
import WhyChooseUs from '../components/WhyChooseUs';
import Solutions from '../components/Solutions';
import PlacementSolutions from '../components/PlacementSolutions';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';
import OurStory from '../components/OurStory';
import Facts from '../components/Facts';
import Partners from '../components/Partners';
import Platform from "../components/Platform";
import PortalDetails from '../components/PortalDetails';

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location?.state?.scrollTo) {
      const scrollId = location.state.scrollTo;

      // Scroll after short delay to ensure DOM is ready
      setTimeout(() => {
        const target = document.getElementById(scrollId);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });

          // Clear scrollTo from location state to prevent re-scroll on refresh
          navigate(location.pathname, { replace: true, state: {} });
        }
      }, 300);
    }
  }, [location, navigate]);

  return (
    <>
      <div id="hero"><HeroSection /></div>
      <div id="about"><AboutUs /></div>
      <OurStory />
      <div id="why"><WhyChooseUs /></div>
      <div id="solutions"><Solutions /></div>
      <div style={{ backgroundColor: "#ffffff" }}>
        <Platform />
      </div>
      <div id="placement"><PlacementSolutions /></div>
      <Facts />
      <PortalDetails />
      <Partners />
      <div id="testimonials"><Testimonials /></div>
      <div id="contact"><ContactForm /></div>
    </>
  );
};

export default Home;