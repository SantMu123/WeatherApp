// /src/api/weatherApi.ts
const API_KEY = '16ff6b67a6414769b7c145009242110'; // Reemplázalo por tu clave de API
const BASE_URL = 'http://api.weatherapi.com/v1';

// Definimos las interfaces según la respuesta esperada de la API de WeatherAPI
interface WeatherCondition {
  text: string;
  icon: string;
  code: number;
}

interface CurrentWeather {
  temp_c: number;
  temp_f: number;
  is_day: number;
  condition: WeatherCondition;
  wind_kph: number;
  humidity: number;
}

interface Location {
  name: string;
  region: string;
  country: string;
  localtime: string;
}

export interface WeatherData {
  location: Location;
  current: CurrentWeather;
}

// Función para obtener los datos del clima
export const getWeatherData = async (city: string): Promise<WeatherData> => {
  try {
    const response = await fetch(`${BASE_URL}/current.json?key=${API_KEY}&q=${city}`);
    if (!response.ok) {
      throw new Error('Error fetching weather data');
    }
    const data: WeatherData = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
