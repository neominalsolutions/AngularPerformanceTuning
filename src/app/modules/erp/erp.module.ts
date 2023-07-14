import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErpRoutingModule } from './erp-routing.module';
import { StandAloneComponent } from '../crm/stand-alone/stand-alone.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [CommonModule, ErpRoutingModule, StandAloneComponent],
})
export class ErpModule {}
