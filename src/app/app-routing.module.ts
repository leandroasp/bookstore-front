import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./components/guards/auth-guard";
import { CategoriaGuard } from "./components/guards/categoria-guard";
import { ExemplosComponent } from "./components/views/exemplos/exemplos.component";
import { HomeComponent } from "./components/views/home/home.component";
import { LoginComponent } from "./components/views/login/login.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "categorias",
    loadChildren: () =>
      import("./components/views/categoria/categoria.module").then(
        (m) => m.CategoriaModule
      ),
    canActivate: [AuthGuard],
    canActivateChild: [CategoriaGuard],
  },
  {
    path: "exemplos",
    component: ExemplosComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
