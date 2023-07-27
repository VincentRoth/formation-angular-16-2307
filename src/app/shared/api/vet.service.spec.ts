import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { VetService } from './vet.service';

describe('VetService', () => {
  let service: VetService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(VetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
