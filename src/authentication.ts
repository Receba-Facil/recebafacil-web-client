interface AuthHeader {
  username: string;
  password: string;
}

export default (api_key: string): AuthHeader => ({
  username: api_key,
  password: '',
});
