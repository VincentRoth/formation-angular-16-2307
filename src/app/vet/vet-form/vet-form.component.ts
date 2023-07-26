import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VetService } from '../../shared/api/vet.service';
import { Vet } from '../../shared/api/vet';
import { VetFormType } from './vet-form.type';

@Component({
  selector: 'app-vet-form',
  templateUrl: './vet-form.component.html',
  styleUrls: ['./vet-form.component.scss'],
})
export class VetFormComponent implements OnInit {
  vetForm: FormGroup<VetFormType>;

  constructor(
    private vetService: VetService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    if (id) {
      this.vetService.get(Number(id)).subscribe((data) => {
        this.initForm(data);
      });
    } else {
      this.initForm();
    }
  }

  onSubmit(): void {
    if (this.vetForm.valid) {
      const value: Vet = this.vetForm.getRawValue();
      this.vetService.save(value).subscribe(() => {
        this.router.navigate(['/veterinarians']);
      });
    }
  }

  private initForm(model?: Vet): void {
    this.vetForm = new FormGroup({
      id: new FormControl<number>(model?.id),
      firstName: new FormControl<string>(
        model?.firstName || '',
        Validators.required
      ),
      lastName: new FormControl<string>(model?.lastName || '', [
        Validators.required,
        Validators.minLength(4),
      ]),
    });
  }
}
