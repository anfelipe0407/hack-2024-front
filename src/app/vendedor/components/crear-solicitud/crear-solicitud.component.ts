import { Component, OnInit } from '@angular/core';
import { VendedorService } from '../../services/vendedor.service';
import { barrios } from '../../barrios.constant';

@Component({
  selector: 'app-crear-solicitud',
  templateUrl: './crear-solicitud.component.html',
  styleUrl: './crear-solicitud.component.scss'
})
export class CrearSolicitudComponent implements OnInit{
  pasoActual:number = 1;
  materialesShow : any[]= [];

  materialSelect: any = {}

  barrios = barrios;

  precioEstablecido = 0;
  cantidad = 0;
  barrio = "";

  constructor(
    private vendedorService: VendedorService
  ){}

  ngOnInit(): void {
      this.getMateriales()
  }

   getRandomArbitrary(min:number, max:number) {
    return Math.random() * (max - min) + min;
  }

  irAPaso(num: number){
    this.pasoActual = num
  }

  emitirSolicitud(){
    const data = {
      id_material: this.materialSelect?.id,
      id_usuario_emisor: 1,
      codigo: this.getRandomArbitrary(1000,9999),
      cantidad: this.cantidad,
      precio_unitario_esperado: this.precioEstablecido,
      barrio: this.barrio
    }

    console.log(data);
    
  }

  usarElMismoPrecio(){
    this.precioEstablecido= this.materialSelect.precio_unitario_sugerido
  }

  seleccionarMaterial(material: any){
    console.log(material);
    this.materialSelect = material;

    this.pasoActual = 2;
  }

  confirmarPrecio(){
    this.pasoActual = 3;
  }

  getMateriales(){
    this.vendedorService.getMateriales().subscribe({
      next: (res: any) => {
        console.log(res);
        this.materialesShow = res.materiales;
        console.log(this.materialesShow);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
