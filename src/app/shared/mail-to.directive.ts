import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: 'a[appMailTo]',
})
export class MailToDirective implements OnInit {
  @Input('appMailTo') email: string;

  constructor(private element: ElementRef<HTMLAnchorElement>) {}

  ngOnInit(): void {
    this.element.nativeElement.href = `mailto:${this.email}`;
  }
}
