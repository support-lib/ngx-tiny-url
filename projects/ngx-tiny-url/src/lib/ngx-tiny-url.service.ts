import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class NgxTinyUrlService {
  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http: HttpClient) { }
  
  shorten(url: string, alias?: string): Observable<string> {
    let extras = '';
    if (alias) {
      extras = `&alias=${encodeURIComponent(alias)}`;
    }
    return this.http.get('https://tinyurl.com/api-create.php?url=' + encodeURIComponent(url) + extras, {
      headers: this.headers,
      responseType: 'text'
    }).pipe(
      map(res => res.toString())
    );
  }
}
