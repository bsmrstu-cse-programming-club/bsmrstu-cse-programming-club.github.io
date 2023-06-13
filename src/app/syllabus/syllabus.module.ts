import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SyllabusRoutingModule } from './syllabus-routing.module';
import { BasicComponent } from './components/basic/basic.component';
import { ModerateComponent } from './components/moderate/moderate.component';
import { AdvanceComponent } from './components/advance/advance.component';
import { AdditionalResourcesComponent } from './components/additional-resources/additional-resources.component';
import { FlexModule } from '@angular/flex-layout';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SidenavComponent } from './components/sidenav/sidenav.component';

@NgModule({
    declarations: [BasicComponent, ModerateComponent, AdvanceComponent, AdditionalResourcesComponent, SidenavComponent],
    imports: [
        CommonModule,
        SyllabusRoutingModule,
        FlexModule,
        MatDividerModule,
        MatExpansionModule,
        MatButtonModule,
        MatIconModule,
        MatTooltipModule,
    ],
})
export class SyllabusModule {}
