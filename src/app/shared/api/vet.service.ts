import { Injectable } from '@angular/core';
import { AbstractCrudService } from './abstract-crud.service';
import { Vet } from './vet';

@Injectable({
  providedIn: 'root',
})
export class VetService extends AbstractCrudService<Vet> {
  constructor() {
    super('/api/veterinarians');
  }
}
