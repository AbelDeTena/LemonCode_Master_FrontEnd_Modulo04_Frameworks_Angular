import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';




@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.scss']
})
export class CabeceraComponent {

  constructor(public authService: AuthService) {}

  logout(): void {
    this.authService.logout();
  }
  
}
