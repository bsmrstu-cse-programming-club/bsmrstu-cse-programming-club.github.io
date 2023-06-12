import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SyllabusRoutingModule } from './syllabus-routing.module';
import { BasicComponent } from './components/basic/basic.component';
import { ModerateComponent } from './components/moderate/moderate.component';
import { AdvanceComponent } from './components/advance/advance.component';
import { AdditionalResourcesComponent } from './components/additional-resources/additional-resources.component';
import { FlexModule } from '@angular/flex-layout';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [
    BasicComponent,
    ModerateComponent,
    AdvanceComponent,
    AdditionalResourcesComponent,
  ],
  imports: [CommonModule, SyllabusRoutingModule, FlexModule, MatDividerModule],
})
export class SyllabusModule {}
