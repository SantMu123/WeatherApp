import React, { useState, useEffect } from 'react';
import searchImg from "../storage/img/search_white.png";
import CloudSun from "../storage/img/cloud_and_sun_1.png";
import SearchBlack from "../storage/img/search_black.png"
import Card from './card';
import { getWeatherData, WeatherData } from '../api/weatherApi'; // Importamos la API

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [city, setCity] = useState('Floridablanca'); // Estado para la ciudad
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null); // Estado para los datos del clima
  const [inputCity, setInputCity] = useState(''); // Estado para el input del buscador

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Llama a la API al montar el componente o cuando se cambia la ciudad
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const data = await getWeatherData(city);
        console.log(data)
        setWeatherData(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeather();
  }, [city]);

  // Función para manejar el submit del formulario de búsqueda
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setCity(inputCity); // Actualiza la ciudad con el valor del input
  };

  const subComponenteUno = (
    <div className='h-[28em] flex flex-col justify-between text-white transition-all duration-300'>
      <header className="bg-transparent flex justify-between px-8 z-10">
      <form onSubmit={handleSearch} className="flex items-center">
        <input 
          type="text" 
          value={inputCity} 
          onChange={(e) => setInputCity(e.target.value)} 
          placeholder="Enter city" 
          className="text-black rounded-lg px-2 py-1" 
        />
        <button type="submit" className="ml-2">
          <img src={searchImg} className="object-contain" alt="Search" />
        </button>
      </form>

      {weatherData && (
        <h3>{weatherData.location.name}, {weatherData.location.country}</h3>
      )}
    </header>

      {weatherData && (
        <div className='flex justify-around my-2 h-[10em] gap-[3em]'>
          <div className='flex items-end justify-between w-[10em]'>
            <h1 className='transition-all duration-300 text-[5em]'>{weatherData.current.temp_c}°</h1>
            <label>Feels like</label>
            <h3>{weatherData.current.feelslike_c}</h3>
          </div>
          <div className='flex flex-col items-center justify-between'>
            <img src={CloudSun} className="object-none" />
            <h2 className='text-[1.5em] transition-opacity duration-300'>{weatherData.current.condition.text}</h2>
          </div>
        </div>
      )}

      <div className='flex justify-between p-4 items-end transition-all duration-300'>
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

  const subComponenteDos = (
    <div className='h-[11em] flex flex-col justify-between text-black transition-all duration-300 bg-purple-light'>
      <header className="bg-transparent flex justify-between px-8 z-10">
        <form onSubmit={handleSearch} className="flex items-center">
          <input 
            type="text" 
            value={inputCity} 
            onChange={(e) => setInputCity(e.target.value)} 
            placeholder="Enter city" 
            className="text-black rounded-lg px-2 py-1" 
          />
          <button type="submit" className="ml-2">
            <img src={SearchBlack} className="object-contain" alt="Search" />
          </button>
        </form>
      </header>

      <div className='flex justify-around items-center h-[5em] gap-[3em]'>
        <div className='flex items-end justify-between w-[10em]'>
          <h1 className='transition-all duration-300 text-[3em]'>3</h1>
          <label>Feels like</label>
          <h3>-2</h3>
        </div>
        <div className='flex flex-col items-center justify-between'>
          <img src={CloudSun} className="w-[4em]" />
        </div>
      </div>
      <div className='flex gap-3 p-4'>
        <Card title="Today" flag="true" />
        <Card title="Tomorrow" flag="true"/>
        <Card title="10 days" flag="true"/>
      </div>
    </div>
  );

  return scrolled ? subComponenteDos : subComponenteUno;
}

export default Header;


