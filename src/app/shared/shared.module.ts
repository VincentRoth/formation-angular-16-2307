import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MailToDirective } from './mail-to.directive';

@NgModule({
  declarations: [MailToDirective],
  exports: [MailToDirective],
  imports: [CommonModule],
})
export class SharedModule {}
