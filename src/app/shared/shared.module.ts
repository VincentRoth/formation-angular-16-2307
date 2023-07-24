import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MailToDirective } from './mail-to.directive';
import { PhoneFormatPipe } from './phone-format.pipe';

@NgModule({
  declarations: [MailToDirective, PhoneFormatPipe],
  exports: [MailToDirective, PhoneFormatPipe],
  imports: [CommonModule],
})
export class SharedModule {}
