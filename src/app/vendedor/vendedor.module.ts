import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendedorRoutingModule } from './vendedor-routing.module';
import { MainComponent } from './main/main.component';
import { MainDashboardComponent } from './components/main-dashboard/main-dashboard.component';
import { LeftNavVendedorComponent } from './ui-components/left-nav-vendedor/left-nav-vendedor.component';
import { TopBannerVendedorComponent } from './ui-components/top-banner-vendedor/top-banner-vendedor.component';
import { CrearSolicitudComponent } from './components/crear-solicitud/crear-solicitud.component';

// * Primeng
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { VerSolicitudComponent } from './ver-solicitud/ver-solicitud.component';
import { MisSolicitudesComponent } from './mis-solicitudes/mis-solicitudes.component';

@NgModule({
  declarations: [
    MainComponent,
    MainDashboardComponent,
    LeftNavVendedorComponent,
    TopBannerVendedorComponent,
    CrearSolicitudComponent,
    VerSolicitudComponent,
    MisSolicitudesComponent,
  ],
  imports: [
    CommonModule,
    VendedorRoutingModule,

    // * Primeng
    InputTextModule,
    ButtonModule,
  ],
  exports: [LeftNavVendedorComponent],
})
export class VendedorModule {}
