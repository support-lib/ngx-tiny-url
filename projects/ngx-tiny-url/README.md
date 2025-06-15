# NgxTinyUrl

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.0.

An angular library to shorten url using [TinyUrl](https://tinyurl.com/) api. Works on angular version 16+

## Installation

To install this library, run:

```bash
$ npm install ngx-tiny-url
```

## Usage

```typescript

import {NgxTinyUrlModule} from 'ngx-tiny-url';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxTinyUrlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once imported in your module, inject the NgxTinyUrlService into your component as shown below: 

```typescript
import {NgxTinyUrlService} from 'ngx-tiny-url';


export class AppComponent {
  title = 'demo';
  shortenedUrl = '';

  constructor(private tinyUrl: NgxTinyUrlService) {
      this.tinyUrl.shorten('https://www.google.com').subscribe(res => {
        this.shortenedUrl = res;
      });
    }
}
```


## License

MIT ©