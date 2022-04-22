import { NgModule }         from '@angular/core';
import { ComponentsModule } from '../components.module';
import { DynamicComponent } from './dynamic.component';
import { DirectivesModule } from '../../directives/directives.module';

@NgModule({
  imports: [
    ComponentsModule,
    DirectivesModule
  ],
  declarations: [DynamicComponent],
  exports: [DynamicComponent]
})
export class DynamicModule{}
