import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppLayoutModule } from './app-layout/app-layout.module';
import { HeaderComponent } from './app-layout/header/header.component';
import { NavigationComponent } from './app-layout/navigation/navigation.component';
import { SkillsModule } from './skills/skills.module';
import { AboutComponent } from './about/about.component';
import { IntrestsModule } from './intrests/intrests.module';
import { MaterialDesignModule } from './material-design.module';
import { EducationModule } from './education/education.module';

@NgModule({
	declarations: [
		AppComponent,
		AboutComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		AppLayoutModule,
		SkillsModule,
		IntrestsModule,
		EducationModule,
		MaterialDesignModule
	],
	bootstrap: [HeaderComponent, NavigationComponent, AppComponent]
})
export class AppModule {

}
