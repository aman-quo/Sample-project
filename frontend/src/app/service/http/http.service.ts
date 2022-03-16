import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }
  post(url: string, payload: any, token: boolean, httpOptions: any) {
    return this.http.post(url, payload, token && httpOptions)
  }
  get(url: string, payload: any, token: boolean, httpOptions: any) {
    return this.http.post(url, payload, token && httpOptions)
  }
}
