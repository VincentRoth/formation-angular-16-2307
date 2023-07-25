import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { AnimalDetailComponent } from './animal-detail/animal-detail.component';

const routes: Routes = [
  {
    path: 'animals',
    component: AnimalListComponent,
    title: 'Listes des animaux',
  },
  {
    path: 'animals/:id',
    component: AnimalDetailComponent,
    title: "Fiche d'un animal",
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimalRoutingModule {}
