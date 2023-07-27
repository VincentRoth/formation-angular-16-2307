import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VetDetailComponent } from './vet-detail.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('VetDetailComponent', () => {
  let component: VetDetailComponent;
  let fixture: ComponentFixture<VetDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [VetDetailComponent],
    });
    fixture = TestBed.createComponent(VetDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
