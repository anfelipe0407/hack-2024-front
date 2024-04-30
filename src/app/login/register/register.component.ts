import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { barrios } from '../../vendedor/barrios.constant';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  barrios = barrios

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router:Router
  ){}

  formulario: FormGroup = this.fb.group({
    nombre: [''],
    correo: [''],
    clave: [''],
    barrio: [''],
    direccion: [''],
    rol: [''],
  });

  selectRol(rol: string){
    this.formulario.get('rol')?.setValue(rol);
  }

  submit(){
    console.log(this.formulario.value);
    
    this.authService.register(this.formulario.value).subscribe({
      next: (res) => {
        console.log(res);

        this.router.navigate(["/auth"])
      },
      error(err) {
          console.log(err);
      },
    })
  }
}
