import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './skills/skills.component';
import { NewSkillComponent } from './new-skill/new-skill.component';
import { AppLayoutModule } from '../app-layout/app-layout.module';
import { MaterialDesignModule } from '../material-design.module';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
	declarations: [SkillsComponent, NewSkillComponent],
	imports: [
		CommonModule,
		AppLayoutModule,
		AppRoutingModule,
		MaterialDesignModule
	],
	exports: [SkillsComponent]
})
export class SkillsModule { }
