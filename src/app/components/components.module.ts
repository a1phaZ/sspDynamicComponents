import { NgModule }            from '@angular/core';
import { HeaderComponent }     from './header/header.component';
import { InputFieldComponent } from './input-field/input-field.component';
import { IonicModule }         from '@ionic/angular';

@NgModule({
    declarations: [HeaderComponent, InputFieldComponent],
    imports: [
      IonicModule
    ],
    exports: [HeaderComponent, InputFieldComponent]
  }
)
export class ComponentsModule {}
