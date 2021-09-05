import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { HomeComponent } from "./home.component";
import { Home2Component } from "./home2.component";
import { DiretivaTesteDirective } from "./diretiva-teste.directive";
import { NgElseDirective } from "./ng-else.directive";
import { MatCardModule } from "@angular/material/card";

@NgModule({
  declarations: [
    HomeComponent,
    Home2Component,
    DiretivaTesteDirective,
    NgElseDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [],
})
export class HomeModule {}
