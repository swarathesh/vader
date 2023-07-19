import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdownHide]'
})
export class DropdownDirective {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  // Add a click event listener to the document
  @HostListener('document:click', ['$event'])
  onClick(event: Event) {
    // Check if the clicked element is inside the dropdown
    if (!this.elementRef.nativeElement.contains(event.target)) {
      // If the clicked element is outside the dropdown, hide it
      this.hideDropdown();
    }
  }

  private hideDropdown() {
    // Use Renderer2 to add/remove Tailwind CSS classes to hide the dropdown
    this.renderer.removeClass(this.elementRef.nativeElement, 'block');
    this.renderer.addClass(this.elementRef.nativeElement, 'hidden');
  }
}
