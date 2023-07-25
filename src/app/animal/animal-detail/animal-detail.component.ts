import { Component, OnDestroy, OnInit } from '@angular/core';
import { Animal } from '../../shared/api/animal';
import { AnimalService } from '../../shared/api/animal.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription, switchMap } from 'rxjs';

@Component({
  selector: 'app-animal-detail',
  templateUrl: './animal-detail.component.html',
  styleUrls: ['./animal-detail.component.scss'],
})
export class AnimalDetailComponent implements OnInit, OnDestroy {
  animal: Animal;
  private subscription: Subscription;

  constructor(
    private animalService: AnimalService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.subscription = this.activatedRoute.paramMap
      .pipe(
        switchMap((paramMap) =>
          this.animalService.get(Number(paramMap.get('id')))
        )
      )
      .subscribe((data) => {
        this.animal = data;
      });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
