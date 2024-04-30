import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VendedorService {

  baseUrl = "http://localhost:8000/"

  constructor(
    private http: HttpClient
  ) { }

  getSolicitudes(){
    const url: string = this.baseUrl + "vendedor/solicitudes"

    return this.http.get(url);
  }

  getMateriales(){
    const url: string = this.baseUrl + "vendedor/materiales"

    return this.http.get(url);
  }
  
  crearSolicitud(
    data: any
  ) {
    const url: string = this.baseUrl + "vendedor/solicitud/nueva";
    return this.http.post(url, { data });
  }
}
