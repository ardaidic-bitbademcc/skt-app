import jwt from 'jsonwebtoken';

const SECRET = process.env.JWT_SECRET;
if (!SECRET) throw new Error('JWT_SECRET env variable is required');

export interface TokenPayload {
  id: string;
  email: string;
  role: string;
  branchId: string | null;
}

export function signToken(payload: TokenPayload): string {
  return jwt.sign(payload, SECRET!, { expiresIn: '7d' });
}

export function verifyToken(token: string): TokenPayload {
  return jwt.verify(token, SECRET!) as TokenPayload;
}
