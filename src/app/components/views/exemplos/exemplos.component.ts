import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-exemplos",
  templateUrl: "./exemplos.component.html",
  styleUrls: ["./exemplos.component.css"],
})
export class ExemplosComponent implements OnInit {

  livro: any = {
    titulo: "Título do Livro",
    numeroPaginas: 321,
    preco: 99.99,
    dataLancamento: new Date(2020, 2, 15),
    url: "http://urbanize.me",
  };

  constructor() {}

  ngOnInit(): void {}
}
