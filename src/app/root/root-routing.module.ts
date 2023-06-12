import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'syllabus',
    loadChildren: () =>
      import('../syllabus/syllabus.module').then((m) => m.SyllabusModule),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'syllabus',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RootRoutingModule {}
