import { FilesComponent } from './files.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: ':id/:extension', component: FilesComponent},
  { path: ':id', component: FilesComponent},
	{ path: '', component: FilesComponent },
	{ path: '**', redirectTo: '' },
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class FilesRoutingModule {
}
