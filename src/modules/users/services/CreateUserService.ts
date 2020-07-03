import { hash } from 'bcryptjs';
import { inject, injectable } from 'tsyringe';
import User from '@modules/users/infra/typeorm/entities/User';

import AppError from '@shared/errors/AppError';
import IUsersRepository from '../repositories/IUsersRepository';

interface IRequest {
  name: string;
  email: string;
  password: string;
  personal_notes: string;
  hometown: string;
}
@injectable()
class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({
    name,
    email,
    password,
    personal_notes,
    hometown,
  }: IRequest): Promise<{ user: User }> {
    const checkUserExists = await this.usersRepository.findByEmail(email);

    if (checkUserExists) {
      throw new AppError('Esse e-mail já está sendo utilizado');
    }

    const hashedPassword = await hash(password, 8);
    const hashedPersonalNotes = await hash(personal_notes, 8);

    const user = await this.usersRepository.create({
      name,
      email,
      password: hashedPassword,
      personal_notes: hashedPersonalNotes,
      hometown,
    });

    return { user };
  }
}

export default CreateUserService;
