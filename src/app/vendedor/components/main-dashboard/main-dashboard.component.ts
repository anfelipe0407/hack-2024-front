import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrl: './main-dashboard.component.scss'
})
export class MainDashboardComponent {
  constructor(
    private router: Router
  ){}

  goTo(val: string){
    if(val === 'nueva'){
      this.router.navigate(["/vendedor/solicitudes/nueva"])
    }

    if(val === 'ver'){
      this.router.navigate(["/vendedor/solicitudes"])
    }
  }
}
