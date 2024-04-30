import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './compontents/dashboard/dashboard.component';
import { DetalleComponent } from './compontents/detalle/detalle.component';
import { ExplorarComponent } from './compontents/explorar/explorar.component';
import { SolicitudesComponent } from './compontents/solicitudes/solicitudes.component';


const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'detalle',
        component: DetalleComponent
      },
      {
        path: 'explorar',
        component: ExplorarComponent
      },
      {
        path: 'solicitudes',
        component: SolicitudesComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecicladorRoutingModule { }
