import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LivroReadAllComponent } from "../livro/livro-read-all/livro-read-all.component";
import { CategoriaCreateComponent } from "./categoria-create/categoria-create.component";
import { CategoriaDeleteComponent } from "./categoria-delete/categoria-delete.component";
import { CategoriaReadComponent } from "./categoria-read/categoria-read.component";
import { CategoriaUpdateComponent } from "./categoria-update/categoria-update.component";

const categoriaRoutes: Routes = [
  {
    path: "",
    component: CategoriaReadComponent,
  },
  {
    path: "create",
    component: CategoriaCreateComponent,
  },
  {
    path: "delete/:id",
    component: CategoriaDeleteComponent,
  },
  {
    path: "update/:id",
    component: CategoriaUpdateComponent,
  },
  {
    path: ":id_cat/livros",
    component: LivroReadAllComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(categoriaRoutes)],
  exports: [RouterModule],
})
export class CategoriaRoutingModule {}
