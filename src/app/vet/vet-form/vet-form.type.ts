import { FormControl } from '@angular/forms';

export interface VetFormType {
  id: FormControl<number>;
  firstName: FormControl<string>;
  lastName: FormControl<string>;
}
