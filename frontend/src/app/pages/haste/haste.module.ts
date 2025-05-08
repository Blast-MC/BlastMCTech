import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HasteComponent } from './haste.component';
import { HasteRoutingModule } from './haste-routing.module';

@NgModule({
	declarations: [HasteComponent],
	imports: [
		CommonModule,
		HasteRoutingModule
	]
})
export class HasteModule {
}
