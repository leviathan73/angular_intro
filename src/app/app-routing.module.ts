import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
	{ path: "", component: AboutComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes/*, { onSameUrlNavigation: 'reload' }*/)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
