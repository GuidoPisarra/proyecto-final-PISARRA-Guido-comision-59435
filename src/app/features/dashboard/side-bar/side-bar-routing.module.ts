import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('../home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'students',
    loadChildren: () =>
      import('../students/student.module').then((m) => m.StudentsModule),
  },
  {
    path: 'clases',
    loadChildren: () =>
      import('../clases/clases.module').then((m) => m.ClasesModule),
  },
  {
    path: 'courses',
    loadChildren: () =>
      import('../courses/courses.module').then((m) => m.CoursesModule),
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SideBarRoutingModule { }
