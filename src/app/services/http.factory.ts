import { XHRBackend, Http, RequestOptions, Headers } from '@angular/http';
import { InterceptedHttp } from "../services/http.interceptor";

export function httpFactory(xhrBackend: XHRBackend, requestOptions: RequestOptions): Http { 
    
    return new InterceptedHttp(xhrBackend, requestOptions);
}