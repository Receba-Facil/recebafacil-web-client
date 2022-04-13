export interface CardInterface {
  id: string;
  resource: 'card';
  customer: string;
  description: string | null;
  first4_digits: string;
  last4_digits: string;
  card_brand: string;
  expiration_month: string;
  expiration_year: string;
  holder_name: string;
  created_at: Date;
  updated_at: Date;
}
