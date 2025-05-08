import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

export const routes: Routes = [
	{
		path: '',
		children: [
      { path: 'haste', loadChildren: () => import('./pages/haste/haste.module').then(m => m.HasteModule) },
			{ path: 'qrcode', loadChildren: () => import('./pages/qrcode/qrcode.module').then(m => m.QRCodeModule) },
			{ path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
			{ path: '**', redirectTo: '' },
		]
	}
]

@NgModule({
	imports: [
		RouterModule.forRoot(routes, {
			initialNavigation: 'enabledNonBlocking',
			scrollPositionRestoration: 'enabled'
		})
	],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
