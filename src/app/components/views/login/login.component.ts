import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Usuario } from './usuario.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario = {
    email: '',
    senha: ''
  }

  constructor(private loginService: AuthService) { }

  ngOnInit(): void {
  }

  logar() {
    this.loginService.verify(this.usuario);
  }

}
