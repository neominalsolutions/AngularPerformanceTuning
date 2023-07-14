import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrmRoutingModule } from './crm-routing.module';
import { StandAloneComponent } from './stand-alone/stand-alone.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    CrmRoutingModule,
    StandAloneComponent, // Standalone componentler module gibi çalışır o yüzden declarion kısmında tanımlanmazlar sadece import kısmına eklenirler.
  ],
})
export class CrmModule {}
