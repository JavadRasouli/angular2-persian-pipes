# Angular2PersianUtils

Persian utils for Angular2 apps. 

## Install

### npm

```
npm install angular2-persian-utils --save
```

## Usage

Import `PersianUtilsModule` into your app's modules:

``` typescript
import {PersianUtilsModule} from 'angular2-persian-utils'

@NgModule({
  imports: [
    PersianUtilsModule
  ]
})
```

This makes all the `angular2-persian-utils` services available for use in your app.

## Available services
---------------

### NationalCodeService

#### Methods

##### isValid(nationalId: string): boolean

check nationalId is valid?

nationalId >> کد ملی

##### Example

```typescript
import { Component } from '@angular/core';

import {NationalCodeService} from 'angular2-persian-utils'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private nationalCodeService: NationalCodeService) {
        console.log(nationalCodeService.isValid('1234567890'));
    }
}
```

### CompanyNationalIdService

#### Methods

##### isValid(nationalCode: string): boolean

check nationalCode is valid?

nationalCode >> شماره ثبت شرکت

##### Example

```typescript
import { Component } from '@angular/core';

import {CompanyNationalIdService} from 'angular2-persian-utils'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private companyNationalIdService: CompanyNationalIdService) {
        console.log(companyNationalIdService.isValid('12345678910'));
    }
}
```

## License

[`MIT`](./LICENSE.md)