import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AgregarComponent } from './components/agregar/agregar.component';
import { VendedorModule } from '../vendedor/vendedor.module';
import { ModificarComponent } from './components/modificar/modificar.component';
import { DeshabilitarComponent } from './components/deshabilitar/deshabilitar.component';


@NgModule({
  declarations: [
    MainComponent,
    DashboardComponent,
    AgregarComponent,
    ModificarComponent,
    DeshabilitarComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,

    VendedorModule
  ]
})
export class AdminModule { }
