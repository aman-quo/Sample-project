import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService: HttpService) { }
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
}
