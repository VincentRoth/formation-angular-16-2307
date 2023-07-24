import { Component, OnInit } from '@angular/core';
import { Animal } from '../../shared/api/animal';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-animal-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './animal-detail.component.html',
  styleUrls: ['./animal-detail.component.scss'],
})
export class AnimalDetailComponent implements OnInit {
  animal: Animal;

  ngOnInit(): void {
    this.animal = {
      name: 'Idéfix',
      species: 'dog',
      veterinarian: "Panoramix D'Armorique",
      comment: 'Développe une allergie à la potion magique.',
      email: 'test1@gmail.com',
      phoneNumber: '06.12.34.56.78',
    };
  }
}
