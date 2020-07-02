import axios from 'axios';
import AppError from '../errors/AppError';

class OpenWeatherService {
  public async execute(city: string): Promise<number> {
    try {
      const cityParsed = city.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      const url = `http://api.openweathermap.org/data/2.5/find?q=${cityParsed}&units=metric&APPID=11d30803f899b4b798b88b6a1e868c33&lang=pt_br`;
      const response = await axios.get(url);
      return response.data.list[0].main.temp;
    } catch (error) {
      throw new AppError('Erro ao acessar o serviço OpenWeather ', 500);
    }
  }
}

export default OpenWeatherService;
