import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  Renderer2,
} from "@angular/core";

@Directive({
  selector: "p[diretivaTeste]",
})
export class DiretivaTesteDirective {
  @Input() defaultColor: String = "white";
  @Input() diretivaTeste: String = "yellow";

  constructor(private _elementRef: ElementRef, private _renderer: Renderer2) {
    //console.log(_elementRef);
    //this._elementRef.nativeElement.style.backgroundColor = "pink";
    /*this._renderer.setStyle(
      this._elementRef.nativeElement,
      "background-color",
      "yellow"
    );*/
  }

  //@HostBinding("style.backgroundColor") backgroundColor!: String;
  private backgroundColor!: String;
  @HostBinding("style.backgroundColor") get setBackColor() {
    return this.backgroundColor;
  }

  @HostListener("mouseenter") onMouseOver() {
    /*this._renderer.setStyle(
      this._elementRef.nativeElement,
      "background-color",
      "red"
    );*/
    this.backgroundColor = this.diretivaTeste;
  }

  @HostListener("mouseleave") onMouseLeave() {
    /*this._renderer.setStyle(
      this._elementRef.nativeElement,
      "background-color",
      "yellow"
    );*/

    this.backgroundColor = this.defaultColor;
  }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }
}
