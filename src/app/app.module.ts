import { BrowserModule } from "@angular/platform-browser";
import { LOCALE_ID, NgModule } from "@angular/core";
import { registerLocaleData } from '@angular/common';
import ptBR from '@angular/common/locales/pt';

import { HomeModule } from "./components/views/home/home.module";
import { LivroModule } from "./components/views/livro/livro.module";
import { TemplateModule } from "./components/template/template.module";
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { ExemplosComponent } from './components/views/exemplos/exemplos.component';

import { CamelCasePipe } from './camel-case.pipe';
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { LoginComponent } from './components/views/login/login.component';
import { FormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatTableModule } from "@angular/material/table";

registerLocaleData(ptBR, 'pt-BR');

@NgModule({
  declarations: [
    AppComponent,
    ExemplosComponent,
    CamelCasePipe,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TemplateModule,
    HomeModule,
    LivroModule,
    FormsModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
