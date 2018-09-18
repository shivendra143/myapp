import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { environment as env } from '../../environments/environment';
import { Config } from '../services/config';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  config = new Config;
  constructor(
      private http: Http, 
      private router: Router 
    ) {}

  getEmployee() {
        const uri = env.APIURL + '/employer';
        return this
            .http
            .get(uri)
            .map((response: Response) => response.json());
  }

  createindEmployee(data) {
    const uri = env.APIURL + '/admin/create-subadmin';
   return this
        .http
        .post(uri, data)
        .map((res: Response) => {
            console.log(res)
            return res.json()
        });
  }

  createcorpEmployee(data) {
    const uri = env.APIURL + '/users/';
   return this
        .http
        .post(uri, data)
        .map((res: Response) => {
            console.log(res)
            return res.json()
        });
  }

  uploadLogo(event) {
    const uri = env.APIURL +'/users/images';
   const fileList: FileList = event.target.files;

   const file = fileList[0];

   const formData = new FormData();
   formData.append('businessLogo', file, file.name);
   return this
           .http
           .post(uri,formData)
           .map((res: Response) => {
           return res.json();
           }).catch((error: Response) => {
           error = error.json();
           return Observable.throw(error);
           });            
}

  navigate(){
    localStorage.removeItem('currentUser');
    sessionStorage.removeItem('usertoken');
    localStorage.removeItem("rolePermissionMenu")
    sessionStorage.clear();
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
