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
export class StateService {

  config = new Config;
  constructor(private http: Http ) {}

  getStates(query="") {
  const uri = env.APIURL + '/states'+query;
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

  addStates(data) {
    const uri = env.APIURL + '/states';
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
  updateStates(data,query="") {
    const uri = env.APIURL + '/states'+query
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

  deleteStates(query="") {
    const uri = env.APIURL + '/states'+query
    alert(uri)
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
