import React, { useState, useEffect } from 'react';
import Header from '../components/header.tsx';
import background from "../storage/img/background.png";
import windLogo from "../storage/img/bounding_box.png";
import Card from '../components/card.tsx';
import Card2 from '../components/card2.tsx';
import HourlyForecast from '../components/HourlyForecast.tsx';
import LineChart from '../components/Graph.tsx';
import HorizontalBarChart from '../components/Graph2.tsx';

const Home: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  // Efecto para detectar el scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 100); // Cambia el estado si scroll > 100px
    };

    window.addEventListener('scroll', handleScroll);

    // Limpiar el evento cuando el componente se desmonte
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='relative'>
      {/* Header fijo con cambio de diseño cuando se scrollea */}
      <div className={`fixed top-0 left-0 w-full z-10 transition-all duration-300 ${scrolled ? 'bg-blue-500 h-[15em]' : 'bg-transparent h-[25em] my-[2em]'}`}>
        <Header />
      </div>

      {/* Imagen de fondo y contenido de la página */}
      <div className='h-[25em] w-full z-0'>
        <img src={background} className="object-none object-bottom w-full h-[25em] rounded-b-[3em]" alt="Background" />
      </div>

      <div className='grid grid-cols-2 p-4 gap-3 mt-[4em]'>
        <Card2 img={windLogo} title="Wind Speed" number="32" decimal="10" />
        <Card2 img={windLogo} title="Wind Speed" number="32" decimal="10" />
        <Card2 img={windLogo} title="Wind Speed" number="32" decimal="10" />
        <Card2 img={windLogo} title="Wind Speed" number="32" decimal="10" />
      </div>

      <div className='p-4'>
        <HourlyForecast />
      </div>

      <div className='bg-blue-100 p-4 mx-4 '>
        <LineChart />
      </div>

      <div className='bg-blue-100 p-4 mx-4 my-4'>
        <HorizontalBarChart />
      </div>
    </div>
  );
}

export default Home;


