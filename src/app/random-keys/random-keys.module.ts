import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RandomKeysRoutingModule } from './random-keys-routing.module';
import { RandomKeysComponent } from './random-keys/random-keys.component';

import {MaterialModule} from './material-module';

@NgModule({
  imports: [
    CommonModule,
    RandomKeysRoutingModule,
    MaterialModule,
  ],
  declarations: [
    RandomKeysComponent,
  ],
})
export class RandomKeysModule { }
