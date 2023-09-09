import { Directive,ElementRef, HostListener, Input  } from '@angular/core';

@Directive({
  selector: '[appToggle]'
})
export class ToggleDirective {
  
  @Input("classToggle")
  appToggle="";

  constructor(private el: ElementRef) {
    console.log("directiva toggle")
   }
  @HostListener('click') onClick() {
    this.el.nativeElement.classList.toggle(this.appToggle)
  }
}
