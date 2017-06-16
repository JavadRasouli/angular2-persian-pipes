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