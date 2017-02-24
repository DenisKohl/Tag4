import {Directive, ElementRef, Renderer} from '@angular/core';

@Directive({
    selector: '[redFont]'
})
export class RedFontDirective {
    constructor(el: ElementRef, renderer: Renderer) {
        // el.nativeElement.style.color = 'red';
        renderer.setElementStyle(el.nativeElement, 'color', 'red');
    }
}
