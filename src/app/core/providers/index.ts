import { USERS_MOCK_URL } from '../injection_tokens';

export const USERS_URL = {
  provide: USERS_MOCK_URL,
  useValue: 'http://localhost:4200/assets/usersMock.json',
};
