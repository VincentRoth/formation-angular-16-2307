import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Animal } from './animal';
import { AbstractCrudService } from './abstract-crud.service';

@Injectable({
  providedIn: 'root',
})
export class AnimalService extends AbstractCrudService<Animal> {
  constructor() {
    super('/api/animals');
  }
}
