import { Component, OnInit, ViewChild } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  temp: String = "teste";

  destroy: boolean = false;

  clicado: boolean = true;

  cursos: String[] = ["Engenharia Civil", "Direito", "Medicina"];

  objeto: any = {
    nome: "Leandro",
    endereco: {
      rua: "Teste",
      numero: "12",
    },
    telefone: null,
  };

  @ViewChild("domElement") appHomeElement!: HTMLElement;

  constructor() {}

  ngOnInit(): void {}

  onKeyUp(event: KeyboardEvent) {
    this.temp = (<HTMLInputElement>event.target).value;
  }

  alert(text: String) {
    alert(text);
    //console.log(this.appHomeElement);
    this.destroy = true;
  }

  onClick() {
    this.clicado = !this.clicado;
  }
}
