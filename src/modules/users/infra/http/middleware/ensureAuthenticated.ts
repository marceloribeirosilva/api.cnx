import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import AppError from '@shared/errors/AppError';

import authConfig from '@config/auth';

interface TokenPayload {
  hometown: string;
  iat: number;
  exp: number;
  sub: string;
}

export default function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError('Token JWT não reconhecido', 401);
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = verify(token, authConfig.jwt.secret);

    const { sub, hometown } = decoded as TokenPayload;

    request.user = {
      id: sub,
      hometown,
    };

    return next();
  } catch {
    throw new AppError('Token JWT inválido', 401);
  }
}
