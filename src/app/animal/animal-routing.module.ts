import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { AnimalDetailComponent } from './animal-detail/animal-detail.component';
import { AnimalComponent } from './animal.component';
import { hasRightGuard } from '../shared/auth/has-right.guard';
import { Right } from '../shared/auth/right';

const routes: Routes = [
  {
    path: 'animals',
    component: AnimalComponent,
    children: [
      {
        path: '',
        component: AnimalListComponent,
        title: 'Listes des animaux',
      },
      {
        path: ':id',
        component: AnimalDetailComponent,
        title: "Fiche d'un animal",
        canActivate: [hasRightGuard],
        data: {
          right: Right.ANIMAL_GET,
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimalRoutingModule {}
