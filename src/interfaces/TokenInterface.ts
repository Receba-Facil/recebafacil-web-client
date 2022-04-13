import { CardInterface } from './CardInterface';

export interface TokenInterface {
  id: string;
  resource: 'token';
  used: boolean;
  type: 'card';
  card: CardInterface;
  created_at: Date;
  updated_at: Date;
}
