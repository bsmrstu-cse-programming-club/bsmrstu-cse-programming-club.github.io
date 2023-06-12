import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RootRoutingModule } from './root-routing.module';
import { RootDefaultComponent } from './components/root-default/root-default.component';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexModule } from '@angular/flex-layout';

@NgModule({
  declarations: [RootDefaultComponent],
  imports: [
    CommonModule,
    BrowserModule,
    RootRoutingModule,
    MatToolbarModule,
    FlexModule,
  ],
  bootstrap: [RootDefaultComponent],
})
export class RootModule {}
