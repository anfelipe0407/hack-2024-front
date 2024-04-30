import { Component } from '@angular/core';

type TipoActivo = "todas" | "pendientes" | "completadas"
@Component({
  selector: 'app-mis-solicitudes',
  templateUrl: './mis-solicitudes.component.html',
  styleUrl: './mis-solicitudes.component.scss'
})
export class MisSolicitudesComponent {
  tipoActivas: TipoActivo = "todas"
}
