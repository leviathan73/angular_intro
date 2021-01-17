import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EducationComponent } from './education/education.component';
import { NewEducationComponent } from './new-education/new-education.component';
import { RouterModule } from '@angular/router';
import { MaterialDesignModule } from '../material-design.module';
import { ModalComponentComponent } from '../app-layout/modal-component/modal-component.component';
import { AppLayoutModule } from '../app-layout/app-layout.module';



@NgModule({
	declarations: [EducationComponent, NewEducationComponent],
	imports: [
		CommonModule,
		RouterModule,
		MaterialDesignModule,
		AppLayoutModule
	]
})
export class EducationModule { }
