import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendedorRoutingModule } from './vendedor-routing.module';
import { MainComponent } from './main/main.component';
import { MainDashboardComponent } from './components/main-dashboard/main-dashboard.component';
import { LeftNavVendedorComponent } from './ui-components/left-nav-vendedor/left-nav-vendedor.component';
import { TopBannerVendedorComponent } from './ui-components/top-banner-vendedor/top-banner-vendedor.component';


@NgModule({
  declarations: [
    MainComponent,
    MainDashboardComponent,
    LeftNavVendedorComponent,
    TopBannerVendedorComponent
  ],
  imports: [
    CommonModule,
    VendedorRoutingModule
  ]
})
export class VendedorModule { }
