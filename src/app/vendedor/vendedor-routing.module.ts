import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// * Componentes
import { MainComponent } from './main/main.component';
import { MainDashboardComponent } from './components/main-dashboard/main-dashboard.component';
import { CrearSolicitudComponent } from './components/crear-solicitud/crear-solicitud.component';
import { MisSolicitudesComponent } from './mis-solicitudes/mis-solicitudes.component';
import { VerSolicitudComponent } from './ver-solicitud/ver-solicitud.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        component: MainDashboardComponent
      },
      {
        path: 'solicitudes',
        component: MisSolicitudesComponent
      },
      {
        path: 'solicitudes/ver',
        component: VerSolicitudComponent
      },
      {
        path: 'solicitudes/nueva',
        component: CrearSolicitudComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendedorRoutingModule { }
