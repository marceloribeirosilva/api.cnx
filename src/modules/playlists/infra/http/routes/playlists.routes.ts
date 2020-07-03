import { Router } from 'express';
import ensureAuthenticated from '@modules/users/infra/http/middleware/ensureAuthenticated';
import PlaylistsController from '@modules/playlists/infra/http/controllers/PlaylistsController';

const PlaylistRouter = Router();
PlaylistRouter.use(ensureAuthenticated);

const playListsController = new PlaylistsController();

PlaylistRouter.get('/', playListsController.index);

export default PlaylistRouter;
