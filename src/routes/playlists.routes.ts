import { Router } from 'express';
import ensureAuthenticated from '../middleware/ensureAuthenticated';
import PlaylistsService from '../services/PlaylistsService';

const PlaylistRouter = Router();
PlaylistRouter.use(ensureAuthenticated);

PlaylistRouter.get('/', async (request, response) => {
  const playlistsService = new PlaylistsService();
  const { user } = request;

  const data = await playlistsService.execute(user.hometown);

  return response.json(data);
});

export default PlaylistRouter;
