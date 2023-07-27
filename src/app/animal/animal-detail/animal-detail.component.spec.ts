import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalDetailComponent } from './animal-detail.component';
import { RouterTestingModule } from '@angular/router/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { first, of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

describe('AnimalDetailComponent', () => {
  let component: AnimalDetailComponent;
  let fixture: ComponentFixture<AnimalDetailComponent>;
  let httpCtrl: HttpTestingController;

  beforeEach(() => {
    const paramMap = new Map();
    paramMap.set('id', '1');

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule, SharedModule],
      declarations: [AnimalDetailComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of(paramMap),
            snapshot: {
              paramMap,
            },
          },
        },
      ],
    });

    httpCtrl = TestBed.inject(HttpTestingController);

    fixture = TestBed.createComponent(AnimalDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should request correct animal for a given ID', () => {
    const requestCtrl = httpCtrl.expectOne('/api/animals/1');
    requestCtrl.flush({ id: 1 });

    httpCtrl.verify();

    fixture.detectChanges();
    const template = fixture.nativeElement as HTMLElement;
    const content = template.querySelector('p')?.innerText;
    expect(content?.startsWith('Nom')).toBeTrue();
  });

  it('should request correct animal for a given ID (TS async)', (done) => {
    // le pipe Async a déjà souscrit et déclenché la requête
    const templateAsyncRequestCtrl = httpCtrl.expectOne('/api/animals/1');
    templateAsyncRequestCtrl.flush({ id: 1 });

    component.animal$.pipe(first()).subscribe({
      next: (animal) => {
        console.log(animal);
        expect(animal.id).toBe(1);
        done();
      },
    });

    // Requête provoquée par la souscription au dessus
    const testSubRequestCtrl = httpCtrl.expectOne('/api/animals/1');
    testSubRequestCtrl.flush({ id: 1 });

    httpCtrl.verify();
  });
});
