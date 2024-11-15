import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleGuard } from '../../core/guards/role.guard';
const routes: Routes = [
  {
    path: 'home',
    data: { title: 'Inicio', roles: ['admin', 'user'] },
    canActivate: [RoleGuard],
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'students',
    data: { title: 'Alumnos', roles: ['admin', 'user'] },
    canActivate: [RoleGuard],
    loadChildren: () =>
      import('./students/student.module').then((m) => m.StudentsModule),
  },
  {
    path: 'clases',
    data: { title: 'Clases', roles: ['admin', 'user'] },
    canActivate: [RoleGuard],
    loadChildren: () => import('./clases/clases.module').then((m) => m.ClasesModule),
  },
  {
    path: 'courses',
    data: { title: 'Cursos', roles: ['admin', 'user'] },
    canActivate: [RoleGuard],
    loadChildren: () => import('./courses/courses.module').then((m) => m.CoursesModule),
  },
  {
    path: 'users',
    data: { title: 'Usuarios', roles: ['admin'] },
    canActivate: [RoleGuard],
    loadChildren: () => import('./users/users.module').then((m) => m.UsersModule),
  },
  {
    path: 'inscripciones',
    data: { title: 'Inscripciones', roles: ['admin'] },
    loadChildren: () =>
      import('./register-course/register-course.module').then((m) => m.RegisterCourseModule),
  },
  {
    path: '**',
    redirectTo: 'home',
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule { }
