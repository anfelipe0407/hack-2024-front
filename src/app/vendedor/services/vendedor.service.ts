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

  getMateriales(){
    const url: string = this.baseUrl + "vendedor/materiales"

    return this.http.get(url);
  }
  
  // asociarElementoGenerico(
  
  // ) {
  //   const url: string = "";
  //   return this.http.post(url, {  });
  // }
}
