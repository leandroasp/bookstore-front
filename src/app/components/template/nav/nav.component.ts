import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../views/login/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  showMenu: boolean = false;

  constructor(private authSevice: AuthService) {}

  ngOnInit() {
    this.authSevice.userLoged.subscribe((show) => (this.showMenu = show));
  }
}
