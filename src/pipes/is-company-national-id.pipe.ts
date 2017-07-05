
import { Pipe, PipeTransform } from '@angular/core';
import { CompanyNationalIdService, PersianNumberService } from 'angular2-persian-utils'

@Pipe({
    name: 'isCompanyNationalId'
})
export class IsCompanyNationalId implements PipeTransform {

    constructor(private companyNationalIdService: CompanyNationalIdService, private persianNumberService: PersianNumberService) { }

    transform(companyNationalId: string): boolean {
        try {
            let number = this.persianNumberService.toEngNumber(companyNationalId);
            let companyNatId = number.toString();

            while (companyNatId.length < 11)
                companyNatId = "0" + companyNatId;

            return this.companyNationalIdService.isValid(companyNatId);
        } catch (e) {
            return false;
        }

    }
}
