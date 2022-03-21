import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { HttpService } from '../http/http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  token: any;
  constructor(private httpService: HttpService) {
    this.token = localStorage.getItem('token')
   }
  Register(reqData: any) {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.httpService.post(
      `${environment.baseUrl}/api/v1/users/register`,
      reqData,
      false,
      httpOptions
    );
  }

  Login(reqData: any) {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.httpService.post(
      `${environment.baseUrl}/api/v1/users/login`,
      reqData,
      false,
      httpOptions
    );
  }

  Profile(reqData: any) {
    this.token = localStorage.getItem('token');
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer '+ this.token,
      }),
    };
    return this.httpService.post(
      `${environment.baseUrl}/api/v1/profiles`,
      reqData,
      true,
      httpOptions
    );
  }

  Search(reqData: any){
    this.token = localStorage.getItem('token');
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer '+ this.token,
      }),
    };
    return this.httpService.post(
      `${environment.baseUrl}/api/v1/searches`,
      reqData,
      true,
      httpOptions
    );
  }
}
