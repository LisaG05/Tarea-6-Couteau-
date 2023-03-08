import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'nombre',
    loadChildren: () => import('./Menu/nombre/nombre.module').then( m => m.NombrePageModule)
  },
  {
    path: 'nombre2',
    loadChildren: () => import('./Menu/nombre2/nombre2.module').then( m => m.Nombre2PageModule)
  },
  {
    path: 'nombrepais',
    loadChildren: () => import('./Menu/nombrepais/nombrepais.module').then( m => m.NombrepaisPageModule)
  },
  {
    path: 'clima',
    loadChildren: () => import('./Menu/clima/clima.module').then( m => m.ClimaPageModule)
  },
  {
    path: 'contratame',
    loadChildren: () => import('./Menu/contratame/contratame.module').then( m => m.ContratamePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
