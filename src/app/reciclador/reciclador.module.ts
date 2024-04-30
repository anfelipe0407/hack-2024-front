import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecicladorRoutingModule } from './reciclador-routing.module';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './compontents/dashboard/dashboard.component';
import { SolicitudesComponent } from './compontents/solicitudes/solicitudes.component';
import { ExplorarComponent } from './compontents/explorar/explorar.component';
import { DetalleComponent } from './compontents/detalle/detalle.component';
import { VendedorModule } from '../vendedor/vendedor.module';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [
    MainComponent,
    DashboardComponent,
    SolicitudesComponent,
    ExplorarComponent,
    DetalleComponent

   
  ],
  imports: [
    CommonModule,
    RecicladorRoutingModule,
    VendedorModule,
    InputTextModule
  ]
})
export class RecicladorModule { }
