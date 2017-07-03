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

``` typescript
import {PersianPipesModule} from 'angular2-persian-pipes'

@NgModule({
  imports: [
    PersianPipesModule
  ]
})
```

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

``` typescript
import {PersianPipesModule} from 'angular2-persian-pipes'

@NgModule({
  imports: [
    PersianPipesModule
  ]
})
```

```html
<h3>{{'12345679' | perNumber}}</h3> <!--output: ۱۲۳۴۵۶۷۹-->
```

## PerToEngNumberPipe

This pipe take a [`Template expressions`](https://angular.io/guide/template-syntax#!) and convert to english number.

##### Example

``` typescript
import {PersianPipesModule} from 'angular2-persian-pipes'

@NgModule({
  imports: [
    PersianPipesModule
  ]
})
```

```html
<h3>{{'1234567890' | perToEngNumber}}</h3>  <!--output: 1234567890-->
<h3>{{'۱۲۳۴۵۶۷۸۹۰' | perToEngNumber}}</h3>  <!--output: 1234567890-->
<!-- this pipe just persian number to english number and arabic number not suported this pipe. -->
<h3>{{'۱۲۳٤٥٦۷۸۹۰' | perToEngNumber}}</h3>  <!--output: 0-->
```



## License

[`MIT`](./LICENSE.md)
