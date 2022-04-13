import api from './client-http';
import authenticate from './authentication';
import { RecebaFacilClientDTO } from './dto/RecebaFacilClientDTO';
import CardService from './services/CardService';

export = class RecebaFacilClient {
  public cards: CardService;

  constructor({
    marketplace_id,
    api_key,
    config = {
      environment: 'production',
    },
  }: RecebaFacilClientDTO) {
    const authHeader = authenticate(api_key);
    api.interceptors.request.use(request => {
      if (config?.environment === 'development')
        request.baseURL = 'https://test2.api.recebafacil.com';
      else request.baseURL = 'https://api.recebafacil.com';

      request.baseURL += `/marketplaces/${marketplace_id}`;
      request.auth = authHeader;

      if (
        request.method &&
        (request.method === 'POST' || request.method === 'PUT')
      ) {
        request.headers = {
          'Content-Type': 'application/json',
        };
      }

      return request;
    });

    this.cards = new CardService();
  }
};
