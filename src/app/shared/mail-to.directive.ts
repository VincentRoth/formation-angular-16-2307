import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: 'a[appMailTo]',
})
export class MailToDirective implements AfterViewInit {
  constructor(private element: ElementRef<HTMLAnchorElement>) {}

  ngAfterViewInit(): void {
    const email = this.element.nativeElement.innerText;
    this.element.nativeElement.href = `mailto:${email}`;
  }
}
