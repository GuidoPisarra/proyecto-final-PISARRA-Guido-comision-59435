import { Course } from '../../courses/models/course';
import { User } from '../../users/models';

export interface RegisterCourse {
  id: string;
  userId: string;
  courseId: string;
  user?: User;
  course?: Course;
}
