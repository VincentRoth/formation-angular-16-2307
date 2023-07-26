import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { VetRoutingModule } from './vet-routing.module';
import { VetComponent } from './vet.component';
import { VetListComponent } from './vet-list/vet-list.component';
import { VetDetailComponent } from './vet-detail/vet-detail.component';
import { VetFormComponent } from './vet-form/vet-form.component';

@NgModule({
  declarations: [
    VetComponent,
    VetListComponent,
    VetDetailComponent,
    VetFormComponent,
  ],
  imports: [CommonModule, VetRoutingModule, ReactiveFormsModule],
})
export class VetModule {}
