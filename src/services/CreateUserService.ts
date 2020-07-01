import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';
import User from '../models/User';

interface Request {
  name: string;
  email: string;
  password: string;
  personal_notes: string;
  hometown: string;
}

class CreateUserService {
  public async execute({
    name,
    email,
    password,
    personal_notes,
    hometown,
  }: Request): Promise<{ user: User }> {
    const userRepository = getRepository(User);

    const checkUserExists = await userRepository.findOne({
      where: { email },
    });

    if (checkUserExists) {
      throw new Error('Esse e-mail já está sendo utilizado');
    }

    const hashedPassword = await hash(password, 8);

    const user = userRepository.create({
      name,
      email,
      password: hashedPassword,
      personal_notes,
      hometown,
    });

    await userRepository.save(user);

    return { user };
  }
}

export default CreateUserService;
