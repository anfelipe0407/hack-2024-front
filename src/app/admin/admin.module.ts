import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AgregarComponent } from './components/agregar/agregar.component';


@NgModule({
  declarations: [
    MainComponent,
    DashboardComponent,
    AgregarComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
