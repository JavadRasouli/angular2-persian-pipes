## IsPerNumberPipe

This pipe take a '[`Template expressions`](https://angular.io/guide/template-syntax#!)' and check it is persian number?

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

## License

[`MIT`](./LICENSE.md)