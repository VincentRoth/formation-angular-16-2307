import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VetListComponent } from './vet-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('VetListComponent', () => {
  let component: VetListComponent;
  let fixture: ComponentFixture<VetListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [VetListComponent],
    });
    fixture = TestBed.createComponent(VetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
