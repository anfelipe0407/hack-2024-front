import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { barrios } from '../../vendedor/barrios.constant';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  barrio = barrios

  constructor(
    private fb: FormBuilder
  ){}

  formulario: FormGroup = this.fb.group({
    nombre: [''],
    correo: [''],
    clave: [''],
    barrio: [''],
    direccion: [''],
    rol: [''],
  })
}
