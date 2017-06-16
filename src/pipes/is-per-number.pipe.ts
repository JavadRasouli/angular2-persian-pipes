
import { Pipe, PipeTransform } from '@angular/core';
import { PersianNumberService } from 'angular2-persian-utils'

@Pipe({
  name: 'isPerNumber'
})
export class IsPerNumberPipe implements PipeTransform {

  constructor(private persianNumberService: PersianNumberService) { }

  transform(inputValue: string): boolean {
    return this.persianNumberService.isPersianNumber(inputValue);
  }
}
