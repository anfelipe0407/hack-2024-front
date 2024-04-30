import { Component, OnInit } from '@angular/core';
import { VendedorService } from '../services/vendedor.service';

type TipoActivo = "todas" | "pendientes" | "completadas"
@Component({
  selector: 'app-mis-solicitudes',
  templateUrl: './mis-solicitudes.component.html',
  styleUrl: './mis-solicitudes.component.scss'
})
export class MisSolicitudesComponent implements OnInit{
  tipoActivas: TipoActivo = "todas"

  solicitudes: any[] = []

  constructor(
    private vendedorService: VendedorService
  ){}

  ngOnInit(): void {
      this.getSolicitudes()
  }

  getSolicitudes(){
    this.vendedorService.getSolicitudes().subscribe({
      next: (res:any) => {
        console.log(res);
        this.solicitudes = res.solicitudes;
      },
      error(err) {
        console.log(err);
      },
    })
  }
}
