import { Injectable }      from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';

@Injectable({
  providedIn: 'root'
})
export class ComponentsService {
  headerComponent = HeaderComponent
  constructor() { }
}
