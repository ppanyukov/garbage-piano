import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RandomKeysComponent } from './random-keys/random-keys.component';


const routes: Routes = [
  {
    path: '',
    component: RandomKeysComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RandomKeysRoutingModule { }
