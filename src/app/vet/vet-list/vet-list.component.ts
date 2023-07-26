import { Component } from '@angular/core';
import { Vet } from '../../shared/api/vet';
import { VetService } from '../../shared/api/vet.service';

@Component({
  selector: 'app-vet-list',
  templateUrl: './vet-list.component.html',
  styleUrls: ['./vet-list.component.scss'],
})
export class VetListComponent {
  vets: Vet[];

  constructor(private vetService: VetService) {}

  ngOnInit(): void {
    this.refreshData();
  }

  onDeleteItem(vet: Vet): void {
    this.vetService.delete(vet.id).subscribe(() => {
      this.refreshData();
    });
  }

  private refreshData(): void {
    this.vetService.getAll().subscribe((data) => {
      this.vets = data;
    });
  }
}
