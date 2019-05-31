import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';

const routes: Routes = [
  {
    path: 'random-keys',
    loadChildren: () => import('./random-keys/random-keys.module').then(mod => mod.RandomKeysModule)
  },
  {
    path: '',
    component: ComingSoonComponent,
  },
  {
    path: '**',
    component: ComingSoonComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
