import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { environment as env } from '../../environments/environment';
import { Config } from '../services/config';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  config = new Config;
  constructor(private http: Http ) {}

  getCountries(query="") {
  const uri = env.APIURL + '/countries'+query;
    return this
        .http
        .get(uri)
        .map((res: Response) => {
            return res.json();
        })
        .catch((error: Response) => {
            error = error.json();
            return Observable.throw(error);
        });
  }

  addCountries(data) {
    const uri = env.APIURL + '/countries';
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
  updateCountries(data,query="") {
    const uri = env.APIURL + '/countries'+query;
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
  deleteCountries(query="") {
    const uri = env.APIURL + '/countries'+query;
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

 /* uplodpic(event) {
    console.log(event)
       const uri = env.APIURL +'/users/images';
      const fileList: FileList = event.files;
      if (fileList.length > 0) {
          const file = fileList[0];
  
          const formData = new FormData();
          formData.append('flag_128', file, file.name);
          return this
          .http
          .post(uri, formData)
          .map((res: Response) => {
              return res.json();
          })
          .catch((error: Response) => {
              error = error.json();
              return Observable.throw(error);
          });
         
      }
  }*/

  uploadLogo(event) {
         const uri = env.APIURL +'/users/images';
        const fileList: FileList = event.target.files;
    
        const file = fileList[0];
    
        const formData = new FormData();
        formData.append('flag_128', file, file.name);
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

}
