import { CLASES_MOCK_URL, COURSES_MOCK_URL, USERS_MOCK_URL } from '../injection_tokens';

export const USERS_URL = {
  provide: USERS_MOCK_URL,
  useValue: 'http://localhost:4200/assets/usersMock.json',
};
export const COURSES_URL = {
  provide: COURSES_MOCK_URL,
  useValue: 'http://localhost:4200/assets/coursesMock.json',
};
export const CLASES_URL = {
  provide: CLASES_MOCK_URL,
  useValue: 'http://localhost:4200/assets/clasesMock.json',
};
