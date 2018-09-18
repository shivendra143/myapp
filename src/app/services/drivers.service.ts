import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { environment as env } from '../../environments/environment';
import { Config } from '../services/config';

@Injectable({
  providedIn: 'root'
})
export class DriversService {
  config = new Config;
  constructor(
      private http: Http, 
      private router: Router, 
    ) {}
 
  getDrivers(query="") {
    const uri = env.APIURL + '/drivers'+query;
    return this
        .http
        .get(uri)
        .map((res: Response) => {
            return res.json();
        })
        .catch((error: Response) => {
           // this.navigate();
            error = error.json();
            return Observable.throw(error);
        });
  }

  getdDrivers(query="") {
    const uri = env.APIURL + '/driver'+query;
    return this
        .http
        .get(uri)
        .map((res: Response) => {
            return res.json();
        })
        .catch((error: Response) => {
           // this.navigate();
            error = error.json();
            return Observable.throw(error);
        });
  }

  addDriver(data) {
   const uri = env.APIURL + '/users';
   return this
        .http
        .post(uri, data)
        .map((res: Response) => {
            console.log(res)
            return res.json()
        })
        .catch((error: Response) => {
            error = error.json();
            return Observable.throw(error);
        });
  }
  updateDriver(data,query="") {
    const uri = env.APIURL + '/driver'+query;
    return this
         .http
         .put(uri, data)
         .map((res: Response) => {
             console.log(res)
             return res.json()
         })
         .catch((error: Response) => {
             error = error.json();
             return Observable.throw(error);
         });
   }
  deleteDriver(query="") {
    const uri = env.APIURL + '/driver'+query;
    return this
         .http
         .delete(uri)
         .map((res: Response) => {
             console.log(res)
             return res.json()
         })
         .catch((error: Response) => {
             error = error.json();
             return Observable.throw(error);
         });
   }

  uploadLogo(event) {
    const uri = env.APIURL +'/users/images';
   const fileList: FileList = event.target.files;

   const file = fileList[0];

   const formData = new FormData();
   formData.append('selfieImage', file, file.name);
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
