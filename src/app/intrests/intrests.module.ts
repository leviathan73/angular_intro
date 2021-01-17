import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntrestsComponent } from './intrests/intrests.component';
import { MaterialDesignModule } from '../material-design.module';
import { AppRoutingModule } from '../app-routing.module';
import { NewInterestComponent } from './new-interest/new-interest.component';
import { AppLayoutModule } from '../app-layout/app-layout.module';
import { AppLayoutRoutingModule } from '../app-layout/app-layout-routing-module';



@NgModule({
	declarations: [IntrestsComponent, NewInterestComponent],
	imports: [
		CommonModule,
		AppLayoutRoutingModule,
		MaterialDesignModule,
		AppLayoutModule
	]
})
export class IntrestsModule { }
