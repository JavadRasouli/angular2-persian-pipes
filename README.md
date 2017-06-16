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

## Available pipes

* [`PersianPipesModule`](./PersianPipesModule.md)
* [`PerNumberPipe`](./doc/PerNumberPipe.md)
* [`IsPerNumberPipe`](./doc/IsPerNumberPipe.md)
* [`PerToEngNumberPipe`](./doc/PerToEngNumberPipe.md)

## License

[`MIT`](./LICENSE.md)