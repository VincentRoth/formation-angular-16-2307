import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AnimalDetailComponent } from './animal-detail/animal-detail.component';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { AnimalItemComponent } from './animal-item/animal-item.component';
import { AnimalRoutingModule } from './animal-routing.module';
import { AnimalComponent } from './animal.component';
import { FormsModule } from '@angular/forms';
import { AnimalFormComponent } from './animal-form/animal-form.component';
import { UiModule } from '../shared/ui.module';

@NgModule({
  declarations: [
    AnimalDetailComponent,
    AnimalListComponent,
    AnimalItemComponent,
    AnimalComponent,
    AnimalFormComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AnimalRoutingModule,
    FormsModule,
    UiModule,
  ],
  exports: [],
})
export class AnimalModule {}
