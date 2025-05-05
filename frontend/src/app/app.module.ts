import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {AppComponent} from './app.component';
import {NavModule} from './components/nav/nav.module';

@NgModule({
	declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    RouterModule,
    NavModule,
  ],
	exports: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {}
