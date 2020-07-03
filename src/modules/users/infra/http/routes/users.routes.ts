import { Router } from 'express';
import CreateUserService from '@modules/users/services/CreateUserService';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UserRepository';

const usersRouter = Router();

usersRouter.post('/', async (request, response) => {
  const { name, email, password, personal_notes, hometown } = request.body;

  const createUser = new CreateUserService(new UsersRepository());

  const user = await createUser.execute({
    name,
    email,
    password,
    personal_notes,
    hometown,
  });

  delete user.user.password;
  delete user.user.personal_notes;

  return response.json(user);
});

export default usersRouter;
