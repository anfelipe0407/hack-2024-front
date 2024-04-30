import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { MainComponent } from './main/main.component';

import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    MainComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,

    DividerModule,
    InputTextModule
  ]
})
export class LoginModule { }
