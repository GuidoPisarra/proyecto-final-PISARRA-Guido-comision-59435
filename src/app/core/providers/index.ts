import { CLASES_MOCK_URL, COURSES_MOCK_URL, STUDENTS_MOCK_URL } from '../injection_tokens';

export const STUDENTS_URL = {
  provide: STUDENTS_MOCK_URL,
  useValue: 'http://localhost:4200/assets/studentsMock.json',
};
export const COURSES_URL = {
  provide: COURSES_MOCK_URL,
  useValue: 'http://localhost:4200/assets/coursesMock.json',
};
export const CLASES_URL = {
  provide: CLASES_MOCK_URL,
  useValue: 'http://localhost:4200/assets/clasesMock.json',
};
