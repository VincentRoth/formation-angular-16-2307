import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'animals', pathMatch: 'full' },
  {
    path: 'veterinarians',
    loadChildren: () => import('./vet/vet.module').then((mod) => mod.VetModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
