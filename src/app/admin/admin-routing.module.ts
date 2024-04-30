import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AgregarComponent } from './components/agregar/agregar.component';
import { ModificarComponent } from './components/modificar/modificar.component';
import { DeshabilitarComponent } from './components/deshabilitar/deshabilitar.component';
import { SolicitudesComponent } from './components/solicitudes/solicitudes.component';
import { VendedorModule } from '../vendedor/vendedor.module';
import { VendedoresComponent } from './components/vendedores/vendedores.component';
import { RecicladoresComponent } from './components/recicladores/recicladores.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'agregar',
        component: AgregarComponent,
      },
      {
        path: 'editar',
        component: ModificarComponent,
      },
      {
        path: 'deshabilitar',
        component: DeshabilitarComponent,
      },
      {
        path: 'solicitudes',
        component: SolicitudesComponent,
      },
      {
        path: 'vendedores',
        component: VendedoresComponent,
      },
      {
        path: 'recicladores',
        component: RecicladoresComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
