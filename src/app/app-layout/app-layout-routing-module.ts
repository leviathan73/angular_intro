import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { EducationComponent } from '../education/education/education.component';
import { NewEducationComponent } from '../education/new-education/new-education.component';
import { IntrestsComponent } from '../intrests/intrests/intrests.component';
import { NewInterestComponent } from '../intrests/new-interest/new-interest.component';
import { NewSkillComponent } from '../skills/new-skill/new-skill.component';
import { SkillsComponent } from '../skills/skills/skills.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
	{
		path: "skills", component: SkillsComponent,
		children: [
			{ path: "new", component: NewSkillComponent }
		]
	},
	{
		path: "intrests", component: IntrestsComponent,
		children: [
			{ path: "new", component: NewInterestComponent }
		]
	},
	{
		path: "education", component: EducationComponent,
		children: [
			{ path: "new", component: NewEducationComponent }
		]
	},
	{ path: "**", component: PageNotFoundComponent }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AppLayoutRoutingModule { }
