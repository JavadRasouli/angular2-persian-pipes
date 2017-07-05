
import { Pipe, PipeTransform } from '@angular/core';
import { NationalCodeService, PersianNumberService } from 'angular2-persian-utils'

@Pipe({
    name: 'isNationalCode'
})
export class IsNationalCode implements PipeTransform {

    constructor(private nationalCodeService: NationalCodeService, private persianNumberService: PersianNumberService) { }

    transform(nationalCode: string): boolean {
        try {
            let number = this.persianNumberService.toEngNumber(nationalCode);
            let natCode = number.toString();

            while (natCode.length < 10)
                natCode = "0" + natCode;

            return this.nationalCodeService.isValid(natCode);
        } catch (e) {
            return false;
        }

    }
}
