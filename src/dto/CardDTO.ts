import { CardInterface } from '../interfaces';

export interface GenerateTokenCardDTO
  extends Pick<
    CardInterface,
    'holder_name' | 'expiration_year' | 'expiration_month'
  > {
  card_number: string;
  security_code: string;
}
