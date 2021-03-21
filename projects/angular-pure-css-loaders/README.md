# Angular Pure CSS Loaders

Angular component wrappers of [Pure CSS Loaders](https://loading.io/css/)

### Install

Yarn: `yarn add angular-pure-css-loaders`
NPM: `npm i --save angular-pure-css-loaders`

### Import

```typescript
@NgModule({
  declarations: [
    AppComponent,
    ...,
  ],
  imports: [
    ...,
    PureCssLoadingModule,
  ],
  providers: [
    ...,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

### Use a loader

The loader tag corresponds to the `class="lds-..."` name prefixed with `pcl-`. For example, the snippet blow is the the loader for `class=lds-roller`

```html
<pcl-roller></pcl-roller>
```
