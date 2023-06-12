import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicComponent } from './components/basic/basic.component';
import { ModerateComponent } from './components/moderate/moderate.component';
import { AdvanceComponent } from './components/advance/advance.component';
import { AdditionalResourcesComponent } from './components/additional-resources/additional-resources.component';

const routes: Routes = [
  {
    path: 'basic',
    component: BasicComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'basic',
  },
  {
    path: 'moderate',
    component: ModerateComponent,
  },
  {
    path: 'advance',
    component: AdvanceComponent,
  },
  {
    path: 'resources',
    component: AdditionalResourcesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SyllabusRoutingModule {}
