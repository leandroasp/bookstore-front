import { EventEmitter, Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { Usuario } from "./usuario.model";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  userAuth: boolean = false;

  userLoged = new EventEmitter<boolean>();

  constructor(private router: Router, private _snack: MatSnackBar) {}

  verify(usuario: Usuario) {
    if (usuario.email == "leandroasp@gmail.com" && usuario.senha == "123456") {
      this.userAuth = true;

      this.userLoged.emit(true);

      this.router.navigate(["/"]);
    } else {
      this.userAuth = false;

      this.userLoged.emit(false);

      this.mensagem("E-mail ou senha inválidos");
    }
  }

  userIsAuth() {
    return this.userAuth;
  }

  mensagem(str: String): void {
    this._snack.open(`${str}`, "OK", {
      horizontalPosition: "end",
      verticalPosition: "top",
      duration: 5000,
    });
  }
}
