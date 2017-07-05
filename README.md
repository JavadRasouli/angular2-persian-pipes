# Angular2PersianPipes

Persian pipes for Angular2 apps. 

## Install

### npm

```
npm install angular2-persian-pipes --save
```

## Usage

Import `PersianPipesModule` into your app's modules:

``` typescript
import {PersianPipesModule} from 'angular2-persian-pipes'

@NgModule({
  imports: [
    PersianPipesModule
  ]
})
```

This makes all the `angular2-persian-pipes` pipes available for use in your app.

## IsPerNumberPipe

This pipe take a [`Template expressions`](https://angular.io/guide/template-syntax#!) and check it is persian number?

##### Example

```html
<h3>{{1234567890 | isPerNumber}}</h3>   <!--output: false-->
<h3>{{'1234567890' | isPerNumber}}</h3> <!--output: false-->
<h3>{{'1۱2۲3۳4۴5۵6۶7۷8۸9۹0۰' | isPerNumber}}</h3> <!--output: false-->
<!-- ۱۲۳٤٥٦۷۸۹۰ is arabic number. -->
<h3>{{'۱۲۳٤٥٦۷۸۹۰' | isPerNumber}}</h3>   <!--output: false-->
<h3>{{'۱۲۳۴۵۶۷۸۹۰' | isPerNumber}}</h3>   <!--output: true-->
```

## PerNumberPipe

This pipe take a [`Template expressions`](https://angular.io/guide/template-syntax#!) and convert to persian digits.

##### Example

```html
<h3>{{'12345679' | perNumber}}</h3> <!--output: ۱۲۳۴۵۶۷۹-->
```

## PerToEngNumberPipe

This pipe take a [`Template expressions`](https://angular.io/guide/template-syntax#!) and convert to english number.

##### Example

```html
<h3>{{'1234567890' | perToEngNumber}}</h3>  <!--output: 1234567890-->
<h3>{{'۱۲۳۴۵۶۷۸۹۰' | perToEngNumber}}</h3>  <!--output: 1234567890-->
<!-- this pipe just persian number to english number and arabic number not suported this pipe. -->
<h3>{{'۱۲۳٤٥٦۷۸۹۰' | perToEngNumber}}</h3>  <!--output: 0-->
```

## NumToPerWord

This pipe take a [`Template expressions`](https://angular.io/guide/template-syntax#!) and convert to persian word.

##### Example

```html
  <h3>{{'1234567890' | numToPerWord}}</h3>  <!--output: یک میلیارد و دویست و سی و چهار میلیون و پانصد و شصت و هفت هزار و هشتصد و نود-->
  <h3>{{'۱۲۳۴۵۶۷۸۹۰' | numToPerWord}}</h3>  <!--output: یک میلیارد و دویست و سی و چهار میلیون و پانصد و شصت و هفت هزار و هشتصد و نود-->
  <h3>{{'۱۲۳٤٥٦۷۸۹۰' | numToPerWord}}</h3>  <!--output: ۱۲۳٤٥٦۷۸۹۰ is not valid number! -->
  <h3>{{1234567890 | numToPerWord}}</h3>  <!--output: یک میلیارد و دویست و سی و چهار میلیون و پانصد و شصت و هفت هزار و هشتصد و نود-->
```

## SafePerWord

This pipe take a 'string' and replace all arabic letters with persian(e.g 'ي' and 'ك' replace with 'ی' and 'ک').

##### Example

```html
  <h3>{{'انگولار يك فريمورك ساختاري براي وب اپليكيشن هاي پويا است.' | safePerWord}}</h3> <!--output: انگولار یک فریمورک ساختاری برای وب اپلیکیشن های پویا است.-->
  <h3>{{'Angular يك فريمورك ساختاري براي وب اپليكيشن هاي پويا است.' | safePerWord}}</h3> <!--output: Angular یک فریمورک ساختاری برای وب اپلیکیشن های پویا است.-->
```

## IsNationalCode

This pipe take a 'nationalCode' and check it is correctly?

nationalCode >> شماره ملی

##### Example

```html
  <h3>{{'0082959277' | isNationalCode}}</h3>  <!--output: true-->
  <h3>{{'۰۰۸۲۹۵۹۲۷۷' | isNationalCode}}</h3>  <!--output: true-->
  <h3>{{'۰۰۸۲۹٥۹۲۷۷' | isNationalCode}}</h3>  <!--output: false-->
  <h3>{{0082959277 | isNationalCode}}</h3>  <!--output: true-->
```

## IsCompanyNationalId

This pipe take a 'CompanyNationalId' and check it is correctly?

CompanyNationalId >> شناسه ملی شرکت

##### Example

```html
  <h3>{{'10260595692' | isCompanyNationalId}}</h3>  <!--output: true-->
  <h3>{{'۱۰۲۶۰۵۹۵۶۹۲' | isCompanyNationalId}}</h3>  <!--output: true-->
  <h3>{{'۱۰۲۶۰٥۹٥۶۹۲' | isCompanyNationalId}}</h3>  <!--output: false-->
  <h3>{{10260595692 | isCompanyNationalId}}</h3>  <!--output: true-->
```

## License

[`MIT`](./LICENSE.md)
