import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl = "http://localhost:8000/";

  constructor(
    private http: HttpClient
  ) { }

  login(data:any) {
    const url: string = this.baseUrl + 'login';
    return this.http.post(url, {data});
  }

  register(data:any) {
    const url: string = this.baseUrl + 'register';
    return this.http.post(url, {data});
  }
}
