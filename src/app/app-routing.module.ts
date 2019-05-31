import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RandomKeysComponent } from './random-keys/random-keys.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';

const routes: Routes = [
  {
    path: 'random-keys',
    component: RandomKeysComponent,
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
