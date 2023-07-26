import { Component } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { Vet } from '../../shared/api/vet';
import { VetService } from '../../shared/api/vet.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vet-detail',
  templateUrl: './vet-detail.component.html',
  styleUrls: ['./vet-detail.component.scss'],
})
export class VetDetailComponent {
  vet$: Observable<Vet>;

  constructor(
    private vetService: VetService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.vet$ = this.activatedRoute.paramMap.pipe(
      switchMap((paramMap) => this.vetService.get(Number(paramMap.get('id'))))
    );
  }
}
