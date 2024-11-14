import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: 'home',
    data: { title: 'Inicio' },
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'students',
    data: { title: 'Alumnos' },
    loadChildren: () =>
      import('./students/student.module').then((m) => m.StudentsModule),
  },
  {
    path: 'clases',
    data: { title: 'Clases' },
    loadChildren: () => import('./clases/clases.module').then((m) => m.ClasesModule),
  },
  {
    path: 'courses',
    data: { title: 'Cursos' },
    loadChildren: () => import('./courses/courses.module').then((m) => m.CoursesModule),
  },
  {
    path: 'users',
    data: { title: 'Usuarios' },
    loadChildren: () => import('./users/users.module').then((m) => m.UsersModule),
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
