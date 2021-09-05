import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
} from "@angular/core";

@Component({
  selector: "app-home2",
  templateUrl: "./home2.component.html",
})
export class Home2Component
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewChecked,
    OnDestroy
{
  @Input() nome: String = "";

  @Output() eventoNovo = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    //console.log("ngOnInit");
  }

  ngOnChanges() {
    //console.log("ngOnChanges");
  }

  ngDoCheck() {
    //console.log("ngDoCheck");
  }

  ngAfterContentInit() {
    //console.log("ngAfterContentInit");
  }

  ngAfterContentChecked() {
    //console.log("ngAfterContentChecked");
  }

  ngAfterViewChecked() {
    //console.log("ngAfterViewChecked");
  }

  ngOnDestroy() {
    //console.log("ngOnDestroy");
  }
}
