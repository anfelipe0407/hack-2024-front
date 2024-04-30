import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { barrios } from '../../vendedor/barrios.constant';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  barrios = barrios

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router:Router
  ){}

  formulario: FormGroup = this.fb.group({
    correo: [''],
    clave: [''],
  });

  submit(){
    console.log(this.formulario.value);
    
    this.authService.login(this.formulario.value).subscribe({
      next: (res:any) => {
        console.log(res);
        localStorage.setItem('id_usuario', res.id_usuario);

        if(res.logCorrecto && res.rol === "admin"){
          localStorage.setItem('rol', 'admin');
          this.router.navigate(["/admin"])
        }
        if(res.logCorrecto && res.rol === "vendedor"){
          localStorage.setItem('rol', 'vendedor');
          this.router.navigate(["/vendedor"])
        }
        if(res.logCorrecto && res.rol === "reciclador"){
          localStorage.setItem('rol', 'reciclador');
          this.router.navigate(["/reciclador"])
        }
      },
      error(err) {
          console.log(err);
          Swal.fire({
            title: "Credenciales incorrectas",
            text: "El correo o la contraseña están incorrectos",
            icon: "error"
          });
      },
    })
  }
}
