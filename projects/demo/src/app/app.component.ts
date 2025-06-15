import { Component } from '@angular/core';
import { NgxTinyUrlService } from "ngx-tiny-url";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo';
  shortenedUrl = '';

  constructor(private tinyUrl: NgxTinyUrlService) {
    this.tinyUrl.shorten('https://www.google.com').subscribe((res: string) => {
      this.shortenedUrl = res;
    });
  }
}
