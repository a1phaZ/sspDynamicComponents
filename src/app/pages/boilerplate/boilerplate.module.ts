import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BoilerplatePageRoutingModule } from './boilerplate-routing.module';

import { BoilerplatePage }  from './boilerplate.page';
import { AppModule }        from '../../app.module';
import { ComponentsModule } from '../../components/components.module';
import { DynamicModule }    from '../../components/dynamic/dynamic.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BoilerplatePageRoutingModule,
    ComponentsModule,
    DynamicModule
  ],
  declarations: [BoilerplatePage]
})
export class BoilerplatePageModule {}
