import { Component, Input } from '@angular/core';
import { OpcionesLeftNav } from '../../interfaces/vendedor.interface';

@Component({
  selector: 'app-left-nav-vendedor',
  templateUrl: './left-nav-vendedor.component.html',
  styleUrl: './left-nav-vendedor.component.scss'
})
export class LeftNavVendedorComponent {
  @Input() rol: string = "vendedor";

  opciones: OpcionesLeftNav[] = [
    {
      texto: "Principal",
      icono: "home",
      url: ""
    },
    {
      texto: "Principal",
      icono: "home",
      url: ""
    },
    {
      texto: "Principal",
      icono: "home",
      url: ""
    },
    {
      texto: "Principal",
      icono: "home",
      url: ""
    },
    {
      texto: "Principal",
      icono: "home",
      url: ""
    },
  ]
}
