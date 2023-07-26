import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Animal } from '../../shared/api/animal';
import { AnimalService } from '../../shared/api/animal.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-animal-form',
  templateUrl: './animal-form.component.html',
  styleUrls: ['./animal-form.component.scss'],
})
export class AnimalFormComponent implements OnInit {
  animal: Animal;
  @ViewChild('animalForm') animalForm: NgForm;

  constructor(
    private animalService: AnimalService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.animalService.get(Number(id)).subscribe((data) => {
        this.animal = data;
      });
    } else {
      this.animal = {
        name: undefined,
        species: undefined,
        veterinarian: undefined,
        comment: undefined,
        email: undefined,
        phoneNumber: undefined,
      };
    }
  }

  onSubmit(): void {
    if (this.animalForm.form.valid) {
      this.animalService.save(this.animal).subscribe(() => {
        this.router.navigate(['/animals']);
      });
    }
  }
}
