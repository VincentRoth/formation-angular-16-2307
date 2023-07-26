import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { AnimalDetailComponent } from './animal-detail/animal-detail.component';
import { AnimalComponent } from './animal.component';
import { hasRightGuard } from '../shared/auth/has-right.guard';
import { Right } from '../shared/auth/right';
import { AnimalFormComponent } from './animal-form/animal-form.component';

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
        path: 'new',
        component: AnimalFormComponent,
        title: "Création d'un fiche",
      },
      {
        path: 'edit/:id',
        component: AnimalFormComponent,
        title: "Modification d'un fiche",
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
