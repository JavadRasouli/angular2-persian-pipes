
import { Pipe, PipeTransform } from '@angular/core';
import { PersianLettersService } from 'angular2-persian-utils'

@Pipe({
    name: 'safePerWord'
})
export class SafePerWord implements PipeTransform {

    constructor(private persianLettersService: PersianLettersService) { }

    transform(inputValue: string): string {
        return this.persianLettersService.replaceArabicLettersWithPersianLetters(inputValue);
    }
}