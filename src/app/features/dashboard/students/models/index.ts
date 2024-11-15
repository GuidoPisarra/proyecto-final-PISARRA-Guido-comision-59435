import { Course } from "../../courses/models/course";

export interface Student {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  createdAt: Date;
  token: string;
  role: string;
  avatarUrl?: string;
  coursesRegistered: Course[];
}
