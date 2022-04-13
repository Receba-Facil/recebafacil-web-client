interface CardRoutesInterface {
  generateToken: () => string;
}

class CardRoutes implements CardRoutesInterface {
  generateToken(): string {
    return '/cards/tokens';
  }
}

export default new CardRoutes();
