import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
} from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../views/login/auth.service";

@Injectable({
  providedIn: "root",
})
export class CategoriaGuard implements CanActivateChild {
  constructor(private authService: AuthService, private router: Router) {}

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    // if (this.authService.userIsAuth()) {
    //   return true;
    // }

    // this.router.navigate(["/login"]);
    console.log("Rota filha");

    if (state.url.indexOf("update") > 0) {
      this.authService.mensagem(
        "Você não tem permissão para acessar essa página"
      );
      return false;
    }
    return true;
  }
}
