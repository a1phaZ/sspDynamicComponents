import { Injectable }         from '@angular/core';
import { HeaderComponent }    from '../components/header/header.component';
import { InputFieldComponent } from '../components/input-field/input-field.component';

@Injectable({
  providedIn: 'root'
})
export class ComponentsService {
  headerComponent = HeaderComponent;
  inputFieldComponent = InputFieldComponent;

  constructor() { }
}
