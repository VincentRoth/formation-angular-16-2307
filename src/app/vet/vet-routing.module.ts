import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VetComponent } from './vet.component';
import { VetListComponent } from './vet-list/vet-list.component';
import { VetDetailComponent } from './vet-detail/vet-detail.component';

const routes: Routes = [
  {
    path: 'veterinarians',
    component: VetComponent,
    children: [
      { path: '', component: VetListComponent },
      { path: ':id', component: VetDetailComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VetRoutingModule {}
