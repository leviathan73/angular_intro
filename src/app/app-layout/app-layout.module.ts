import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { APP_CONFIG, AppConfig } from './app-config';
import { AppLayoutRoutingModule } from './app-layout-routing-module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ModalComponentComponent } from './modal-component/modal-component.component';
import { MaterialDesignModule } from '../material-design.module';

@NgModule({
	declarations: [HeaderComponent, NavigationComponent, PageNotFoundComponent, ModalComponentComponent],
	imports: [
		CommonModule,
		AppLayoutRoutingModule,
		MaterialDesignModule
	],
	exports: [ModalComponentComponent],
	// exports: [HeaderComponent, NavigationComponent],
	providers: [{ provide: APP_CONFIG, useValue: { title: "Angular CV Builer" } }],
})
export class AppLayoutModule {
	constructor() {
		// Add an icon to the library for convenient access in other components
	}

}
