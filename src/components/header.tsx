import React, { useState, useEffect } from 'react';
import searchImg from "../storage/img/search_white.png";
import CloudSun from "../storage/img/cloud_and_sun_1.png";
import Card from './card';


const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100); // Detecta si se ha scrolleado más de 100px
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`h-[28em] flex flex-col justify-between text-white transition-all duration-300 ${scrolled ? 'h-[6em]' : 'h-[23em]'}`}>
      <header className="bg-transparent flex justify-between px-8 z-10">
        <h3 className="font-bold">Floridablanca, Santander</h3>
        <img src={searchImg} className="object-contain" />
      </header>

      {/* Sección con el número 3 y el estado del tiempo */}
      <div className='flex justify-around my-2 h-[10em] gap-[3em]'>
        <div className='flex items-end justify-between w-[10em]'>
          {/* Cambiar tamaño del número 3 al hacer scroll */}
          <h1 className={`transition-all duration-300 ${scrolled ? 'text-[3em]' : 'text-[6em]'}`}>3</h1>
          <label>Feels like</label>
          <h3>-2</h3>
        </div>
        {/* Ocultar la palabra "Cloudy" cuando se scrollea */}
        <div className='flex flex-col items-center justify-between'>
          <img src={CloudSun} className="object-none" />
          <h2 className={`text-[1.5em] transition-opacity duration-300 ${scrolled ? 'opacity-0' : 'opacity-100'}`}>Cloudy</h2>
        </div>
      </div>

      {/* Ocultar esta parte completamente cuando se hace scroll */}
      <div className={`flex justify-between p-4 items-end transition-all duration-300 ${scrolled ? 'opacity-0' : 'opacity-100'}`}>
        <label>January 18, 16:14</label>
        <div>
          <h2>Day 3</h2>
          <h2>Night -1</h2>
        </div>
      </div>
      <div className='flex gap-3 p-4'>
        <Card title="Today" />
        <Card title="Tomorrow" />
        <Card title="10 days" />
      </div>
    </div>
  );
}

export default Header;
