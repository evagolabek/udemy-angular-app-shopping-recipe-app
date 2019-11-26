import {Directive, HostListener, HostBinding} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})

// css class 'open' is added dynamically with this directive
export class DropdownDirective {
  @HostBinding('class.open') isOpen =  false;

  @HostListener('click') toggleOpen(){
    this.isOpen = !this.isOpen;
  }
}