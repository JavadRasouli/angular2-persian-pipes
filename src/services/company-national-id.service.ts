import { Injectable } from '@angular/core';

@Injectable()
export class CompanyNationalIdService {

  constructor() { }

  isValid(nationalId: string): boolean {
    return this.vlaidate(nationalId);
  }

  private vlaidate(nationalId: string): boolean {
    if (nationalId == undefined)
      return false;

    if (nationalId.length !== 11)
      return false;

    switch (nationalId) {
      case '00000000000':
      case '11111111111':
      case '22222222222':
      case '33333333333':
      case '44444444444':
      case '55555555555':
      case '66666666666':
      case '77777777777':
      case '88888888888':
      case '99999999999':
        return false;
    }

    var addition = parseInt(nationalId.charAt(9)) + 2;

    var num1 = (parseInt(nationalId.charAt(0)) + addition) * 29;
    var num2 = (parseInt(nationalId.charAt(1)) + addition) * 27;
    var num3 = (parseInt(nationalId.charAt(2)) + addition) * 23;
    var num4 = (parseInt(nationalId.charAt(3)) + addition) * 19;
    var num5 = (parseInt(nationalId.charAt(4)) + addition) * 17;
    var num6 = (parseInt(nationalId.charAt(5)) + addition) * 29;
    var num7 = (parseInt(nationalId.charAt(6)) + addition) * 27;
    var num8 = (parseInt(nationalId.charAt(7)) + addition) * 23;
    var num9 = (parseInt(nationalId.charAt(8)) + addition) * 19;
    var num10 = (parseInt(nationalId.charAt(9)) + addition) * 17;
    var controlNum = parseInt(nationalId.charAt(10));

    var sum = num1 + num2 + num3 + num4 + num5 + num6 + num7 + num8 + num9 + num10;
    var remain = sum % 11;
    remain = (remain === 10) ? 0 : remain;
    return controlNum === remain;
  }
}
