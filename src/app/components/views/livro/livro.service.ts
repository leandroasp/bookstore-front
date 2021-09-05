import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Livro } from "./livro.model";
import { LogService } from "../log.service";

@Injectable({
  providedIn: "root",
})
export class LivroService {
  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient, private _snack: MatSnackBar, private logService: LogService) {}

  findAllByCategoria(id_cat: String): Observable<Livro[]> {
    this.logService.console('Listar todos os livros');
    const url = `${this.baseUrl}livros?categoria=${id_cat}`;
    return this.http.get<Livro[]>(url);
  }
}
