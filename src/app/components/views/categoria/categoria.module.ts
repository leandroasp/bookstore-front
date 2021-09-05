import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatTableModule } from "@angular/material/table";
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormsModule } from "@angular/forms";

import { CategoriaReadComponent } from "./categoria-read/categoria-read.component";
import { CategoriaCreateComponent } from "./categoria-create/categoria-create.component";
import { CategoriaDeleteComponent } from "./categoria-delete/categoria-delete.component";
import { CategoriaUpdateComponent } from "./categoria-update/categoria-update.component";
import { HttpClientModule } from "@angular/common/http";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { CategoriaRoutingModule } from "./categoria.routing.module";

@NgModule({
  declarations: [
    CategoriaReadComponent,
    CategoriaCreateComponent,
    CategoriaDeleteComponent,
    CategoriaUpdateComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    CategoriaRoutingModule,
  ],
  providers: [],
  bootstrap: [],
})
export class CategoriaModule {}
