import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceContact {
  constructor(private http: HttpClient) { }
  post(url: string, token: boolean, httpOptions: any) {
    return this.http.post(url,token && httpOptions)
  }
}
