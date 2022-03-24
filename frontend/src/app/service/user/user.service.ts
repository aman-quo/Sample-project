import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { HttpService } from '../http/http.service';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  token: any;
  constructor(private httpService: HttpService) {
    this.token = localStorage.getItem('token')
   }
  Register(reqData: any) {
    return this.httpService.post(
      `${environment.baseUrl}/api/v1/users/register`,
      reqData,
     
    );
  }

  Login(reqData: any) {
    return this.httpService.post(
      `${environment.baseUrl}/api/v1/users/login`,
      reqData,
     
    );
  }

  Profile(reqData: any) {
    return this.httpService.post(
      `${environment.baseUrl}/api/v1/profiles`,
      reqData,
    );
  }

  Search(interests:string){
    return this.httpService.get(
      `${environment.baseUrl}/api/v1/searches/${interests}`
    );
  }

  Contact(_id: string){
    return this.httpService.post(
      `${environment.baseUrl}/api/v1/contacts/${_id}`,
    );
  }
}
