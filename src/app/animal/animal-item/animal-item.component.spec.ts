import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalItemComponent } from './animal-item.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('AnimalItemComponent', () => {
  let component: AnimalItemComponent;
  let fixture: ComponentFixture<AnimalItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AnimalItemComponent],
    });
    fixture = TestBed.createComponent(AnimalItemComponent);
    component = fixture.componentInstance;
    component.model = {
      comment: 'comment',
      email: 'email',
      name: 'name',
      phoneNumber: 'phoneNumber',
      species: 'species',
      veterinarian: 'veterinarian',
      id: 1,
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
