import { Router } from 'express';
import ensureAuthenticated from '@modules/users/infra/http/middleware/ensureAuthenticated';
import PlaylistsService from '@modules/playlists/services/PlaylistsService';

const PlaylistRouter = Router();
PlaylistRouter.use(ensureAuthenticated);

PlaylistRouter.get('/', async (request, response) => {
  const playlistsService = new PlaylistsService();
  const { user } = request;

  const data = await playlistsService.execute(user.hometown);

  return response.json(data);
});

export default PlaylistRouter;
