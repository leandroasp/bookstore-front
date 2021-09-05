import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { LogService } from "../log.service";
import { Categoria } from "./categoria.model";

@Injectable({
  providedIn: "root",
})
export class CategoriaService {
  baseUrl: String = environment.baseUrl;

  constructor(
    private http: HttpClient,
    private _snack: MatSnackBar,
    private logService: LogService
  ) {}

  findAll(): Observable<Categoria[]> {
    this.logService.console("Listar todos as categorias");
    const url = `${this.baseUrl}categorias`;
    return this.http.get<Categoria[]>(url);
  }

  findById(id: String): Observable<Categoria> {
    this.logService.console("Abrir uma categoria");
    const url = `${this.baseUrl}categorias/${id}`;
    return this.http.get<Categoria>(url);
  }

  create(categoria: Categoria): Observable<Categoria> {
    this.logService.console("Criar uma categoria");
    const url = `${this.baseUrl}categorias`;
    return this.http.post<Categoria>(url, categoria);
  }

  delete(id: String): Observable<void> {
    this.logService.console("Deletar uma categoria");
    const url = `${this.baseUrl}categorias/${id}`;
    return this.http.delete<void>(url);
  }

  update(categoria: Categoria): Observable<void> {
    this.logService.console("Atualizar uma categoria");
    const url = `${this.baseUrl}categorias/${categoria.id}`;
    return this.http.put<void>(url, categoria);
  }

  mensagem(str: String): void {
    this._snack.open(`${str}`, "OK", {
      horizontalPosition: "end",
      verticalPosition: "top",
      duration: 5000,
    });
  }
}
