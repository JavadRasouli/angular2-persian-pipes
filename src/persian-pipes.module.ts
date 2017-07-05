import { NgModule } from '@angular/core';
import { PersianUtilsModule } from 'angular2-persian-utils';
import {PerNumberPipe} from './pipes/per-number.pipe'
import { IsPerNumberPipe } from './pipes/is-per-number.pipe';
import { PerToEngNumberPipe } from './pipes/per-to-eng-number.pipe';
import { NumToPerWord } from './pipes/num-to-per-word.pipe';
import { SafePerWord } from './pipes/safe-per-word.pipe';
import { IsNationalCode } from './pipes/is-nationalcode.pipe';
import { IsCompanyNationalId } from './pipes/is-company-national-id.pipe';

@NgModule({
  declarations: [PerNumberPipe, IsPerNumberPipe, PerToEngNumberPipe, NumToPerWord, SafePerWord, IsNationalCode, IsCompanyNationalId],
  imports: [PersianUtilsModule],
  providers: [],
  exports: [PerNumberPipe, IsPerNumberPipe, PerToEngNumberPipe, NumToPerWord, SafePerWord, IsNationalCode, IsCompanyNationalId] 
})
export class PersianPipesModule { }
