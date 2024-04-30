import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// * Componentes
import { MainComponent } from './main/main.component';
import { MainDashboardComponent } from './components/main-dashboard/main-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        component: MainDashboardComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendedorRoutingModule { }
