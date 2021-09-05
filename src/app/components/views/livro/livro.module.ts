import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatTableModule } from "@angular/material/table";
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "src/app/app-routing.module";

import { LivroReadAllComponent } from "./livro-read-all/livro-read-all.component";
import { HttpClientModule } from "@angular/common/http";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [LivroReadAllComponent],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [],
})
export class LivroModule {}
