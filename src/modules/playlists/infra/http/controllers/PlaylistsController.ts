import { Request, Response } from 'express';
import PlaylistsService from '@modules/playlists/services/PlaylistsService';

export default class PlaylistsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const playlistsService = new PlaylistsService();
    const { user } = request;

    const data = await playlistsService.execute(user.hometown);

    return response.json(data);
  }
}
