## PerNumberPipe

This pipe take a '[`Template expressions`](https://angular.io/guide/template-syntax#!)' and convert to persian digits.

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

## License

[`MIT`](./LICENSE.md)