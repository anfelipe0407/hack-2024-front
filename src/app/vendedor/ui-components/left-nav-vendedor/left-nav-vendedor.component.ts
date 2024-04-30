import { Component, Input, OnInit } from '@angular/core';
import { OpcionesLeftNav } from '../../interfaces/vendedor.interface';
import { Router } from '@angular/router';

export type Rol = "vendedor" | "admin" | "reciclador"

@Component({
  selector: 'app-left-nav-vendedor',
  templateUrl: './left-nav-vendedor.component.html',
  styleUrl: './left-nav-vendedor.component.scss'
})
export class LeftNavVendedorComponent implements OnInit{
  @Input() rol: Rol = "vendedor";

  opciones: OpcionesLeftNav[] = [
    
  ]

  constructor(
    private router: Router
  ){

  }

  goTo(url: string[]){
    console.log(url);
    this.router.navigate(url);
  }

  ngOnInit(): void {
      if(this.rol === "vendedor"){
        this.opciones = [
          {
            texto: "Principal",
            icono: "home",
            url: ["/vendedor"]
          },
          {
            texto: "Solicitudes",
            icono: "list",
            url: ["/vendedor/solicitudes"]
          },
          {
            texto: "Nueva solicitud",
            icono: "add",
            url: ["/vendedor/solicitudes/nueva"]
          },
        ]
      }
  }
}
