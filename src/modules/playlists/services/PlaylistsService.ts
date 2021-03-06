import SpotifyService from './SpotifyService';
import OpenWeatherService from './OpenWeatherService';
import ISpotifyDTO from '../dtos/ISpotifyDTO';

interface Response {
  city: string;
  temperature: number;
  styleMusic: string;
  playlist: ISpotifyDTO[];
}

class PlaylistsService {
  public async execute(city: string): Promise<Response> {
    const openWeather = new OpenWeatherService();
    const spotify = new SpotifyService();

    const temperature = await openWeather.execute(city);

    let styleMusic;

    if (temperature > 30) {
      styleMusic = 'party';
    } else if (temperature >= 15 && temperature <= 30) {
      styleMusic = 'pop';
    } else if (temperature >= 10 && temperature <= 14) {
      styleMusic = 'rock';
    } else {
      styleMusic = 'classical';
    }

    const dataSpotify = await spotify.execute(styleMusic);

    return {
      city,
      temperature,
      styleMusic,
      playlist: dataSpotify,
    };
  }
}

export default PlaylistsService;
