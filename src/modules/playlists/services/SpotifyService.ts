import Spotify from 'node-spotify-api';
import AppError from '@shared/errors/AppError';
import ISpotifyDTO from '../entities/ISpotify';

class SpotifyService {
  public async execute(temperature: string): Promise<ISpotifyDTO[]> {
    const playlistReturn: ISpotifyDTO[] = [];

    try {
      const spotifyApi = new Spotify({
        id: '2f2a7259249d4039b71dfb549c561b4d',
        secret: 'a640fe6cbd2e47058392b73aece3d0d7',
      });

      const response = await spotifyApi.request(
        `https://api.spotify.com/v1/browse/categories/${temperature}/playlists`,
      );

      response.playlists.items.forEach((element: ISpotifyDTO) => {
        const obj: ISpotifyDTO = {
          description: element.description,
          href: element.href,
          id: element.id,
          name: element.name,
          tracks: {
            href: element.tracks.href,
            total: element.tracks.total,
          },
        };
        playlistReturn.push(obj);
      });
    } catch (err) {
      throw new AppError('Erro interno do servidor ', 500);
    }

    return playlistReturn;
  }
}

export default SpotifyService;
