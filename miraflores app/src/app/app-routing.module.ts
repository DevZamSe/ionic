import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'crearcuenta',
    loadChildren: () => import('./pages/crearcuenta/crearcuenta.module').then( m => m.CrearcuentaPageModule)
  },
  {
    path: 'recuperarcontrasena',
    loadChildren: () => import('./pages/recuperarcontrasena/recuperarcontrasena.module').then( m => m.RecuperarcontrasenaPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'makevideo',
    loadChildren: () => import('./makevideo/makevideo/makevideo.module').then( m => m.MakevideoPageModule)
  },
  {
    path: 'makevideomascota',
    loadChildren: () => import('./makevideo/makevideomascota/makevideomascota.module').then( m => m.MakevideomascotaPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
