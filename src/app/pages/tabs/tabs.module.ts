import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage }      from './tabs.page';
import { DynamicModule } from '../../components/dynamic/dynamic.module';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		TabsPageRoutingModule,
		DynamicModule
	],
  declarations: [TabsPage]
})
export class TabsPageModule {}
