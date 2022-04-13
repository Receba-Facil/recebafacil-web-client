import api from '../client-http';
import { TokenInterface } from '../interfaces';
import { GenerateTokenCardDTO } from '../dto/CardDTO';
import CardRoutes from '../routes/CardRoutes';

interface CardServiceInterface {
  generateToken: (data: GenerateTokenCardDTO) => Promise<TokenInterface>;
}

export default class CardService implements CardServiceInterface {
  async generateToken(data: GenerateTokenCardDTO): Promise<TokenInterface> {
    const URN = CardRoutes.generateToken();

    const response = await api.post<TokenInterface>(URN, data);

    return response.data;
  }
}
