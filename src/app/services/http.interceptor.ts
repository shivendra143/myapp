import { Injectable } from "@angular/core";
import { ConnectionBackend, RequestOptions, Request, RequestOptionsArgs, Response, Http, Headers } from "@angular/http";
import {
    HttpErrorResponse,
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment'
import { of } from 'rxjs/observable/of';

@Injectable()
export class InterceptedHttp extends Http {
    access_token = '';
    constructor(backend: ConnectionBackend, defaultOptions: RequestOptions) {
        super(backend, defaultOptions);
        this.getRequestOptionArgs();
    }

    request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
        return super.request(url, options).catch((error: Response) => {
            if (error.status === 401) {
                console.log('The authentication session expires or the user is not authorised. Force refresh of the current page.');
                window.location.href = window.location.href + '?' + new Date().getMilliseconds();
            }
            return Observable.throw(error);
        });
    }

     /**
     * Handle API authentication errors.
     */
    private handleAuthError() {
        sessionStorage.clear();
        localStorage.clear();
      //  this.router.navigate(['/login']);
    }
    
    get(url: string, options?: RequestOptionsArgs): Observable<Response> {
       
        return super.get(url, this.getRequestOptionArgs(options));
    }

    post(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
        return super.post(url, body, this.getRequestOptionArgs(options));
    }

    put(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
        return super.put(url, body, this.getRequestOptionArgs(options));
    }

    delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return super.delete(url, this.getRequestOptionArgs(options));
    }


    private getRequestOptionArgs(options?: RequestOptionsArgs): RequestOptionsArgs {
        
        if (localStorage.length !=0 ) {
            let currentUser = JSON.parse(localStorage.getItem('currentUser'));
            let usertoken = JSON.parse(sessionStorage.getItem('usertoken'));
            this.access_token = currentUser.token || usertoken.token;
          
        }else{

            sessionStorage.clear();
            localStorage.clear();
            window.location.href='login';
        }
       if (options == null) {
            options = new RequestOptions();
        }
        if (options.headers == null) {
            options.headers = new Headers();
        }
        options.headers.append('plateform', 'browser');
        options.headers.append('Authorization',  this.access_token);

        return options;
    }

   
}