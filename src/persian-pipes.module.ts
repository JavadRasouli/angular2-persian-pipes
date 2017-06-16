import { NgModule } from '@angular/core';
import { PersianUtilsModule } from 'angular2-persian-utils';
import {PerNumberPipe} from './pipes/per-number.pipe'
import { IsPerNumberPipe } from './pipes/is-per-number.pipe';
import { PerToEngNumberPipe } from './pipes/per-to-eng-number.pipe';

@NgModule({
  declarations: [PerNumberPipe, IsPerNumberPipe, PerToEngNumberPipe],
  imports: [PersianUtilsModule],
  providers: [],
  exports: [PerNumberPipe, IsPerNumberPipe, PerToEngNumberPipe] 
})
export class PersianPipesModule { }
