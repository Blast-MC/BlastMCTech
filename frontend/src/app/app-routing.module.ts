import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

export const routes: Routes = [
	{
		path: '',
		children: [
      { path: 'files', loadChildren: () => import('./pages/files/files.module').then(m => m.FilesModule) },
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
