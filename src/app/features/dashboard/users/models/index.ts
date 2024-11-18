import { Course } from "../../courses/models/course";

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  createdAt: Date;
  token: string;
  role: string;
  avatarUrl?: string;
  courses: Course[];
}
