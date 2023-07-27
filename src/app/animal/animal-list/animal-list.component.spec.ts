import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalListComponent } from './animal-list.component';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { AnimalItemComponent } from '../animal-item/animal-item.component';
import { Animal } from '../../shared/api/animal';
import { RouterTestingModule } from '@angular/router/testing';

describe('AnimalListComponent', () => {
  let component: AnimalListComponent;
  let fixture: ComponentFixture<AnimalListComponent>;
  let httpCtrl: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [AnimalListComponent, AnimalItemComponent],
    });

    httpCtrl = TestBed.inject(HttpTestingController);

    fixture = TestBed.createComponent(AnimalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list of animals in template', () => {
    const requestCtrl = httpCtrl.expectOne('/api/animals');
    expect(requestCtrl.request.method).toBe('GET');

    expect(component.animals).toBeUndefined();

    const animals: Animal[] = [
      { id: 1, name: 'Name1', species: 'Species1', veterinarian: 'Vet1' },
      { id: 2, name: 'Name2', species: 'Species2', veterinarian: 'Vet2' },
      { id: 3, name: 'Name3', species: 'Species3', veterinarian: 'Vet3' },
    ];
    requestCtrl.flush(animals);

    expect(component.animals?.length).toBe(3);

    httpCtrl.verify();

    // Template
    fixture.detectChanges();
    const template: HTMLElement = fixture.nativeElement;
    expect(template.querySelectorAll('li')?.length).toBe(3);
  });
});
