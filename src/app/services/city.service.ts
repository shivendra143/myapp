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
export class CityService {

  
 config = new Config;
  constructor(private http: Http ) {}

  getCities(query="") {
  const uri = env.APIURL + '/cities'+query;
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

  addCities(data) {
    const uri = env.APIURL + '/cities';
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
  updateCities(data,query="") {
    const uri = env.APIURL + '/cities'+query;
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
  deleteCities(query="") {
    const uri = env.APIURL + '/cities'+query;
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
}
