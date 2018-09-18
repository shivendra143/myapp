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
export class AdminService {
    config = new Config;
    constructor(private http: Http) { }
    getAdminInfo() {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        console.log(currentUser.data._id)
        let headers: Headers = new Headers();
        headers.append("sessionToken", currentUser.sessionToken);
        headers.append("Content-Type", "application/json");
        const uri = env.APIURL + '/admin/admin-info/' + currentUser.data._id;
        return this
            .http
            .get(uri, { headers: headers })
            .map((res: Response) => {
                return res.json();
            })
            .catch((error: Response) => {
                error = error.json();
                return Observable.throw(error);
            });
    }
    getAdminActivity() {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        console.log(currentUser.data._id)
        let headers: Headers = new Headers();
        headers.append("sessionToken", currentUser.sessionToken);
        headers.append("Content-Type", "application/json");
        const uri = env.APIURL + '/admin/my-activity';
        return this
            .http
            .get(uri, { headers: headers })
            .map((res: Response) => {
                return res.json();
            })
            .catch((error: Response) => {
                error = error.json();
                return Observable.throw(error);
            });
    }
    getActivitynext(a) {

        let con = a + 1;
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        // console.log(currentUser)
        let headers: Headers = new Headers();
        headers.append("sessionToken", currentUser.sessionToken);
        headers.append("Content-Type", "application/json");
        const uri = env.APIURL + '/admin/my-activity?page=' + con;
        return this
            .http
            .get(uri, { headers: headers })
            .map((res: Response) => {
                return res.json();
            })
            .catch((error: Response) => {
                error = error.json();
                return Observable.throw(error);
            });
    }
    getActivitypre(a) {

        let con = a - 2;
        //alert(con)
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        // console.log(currentUser)
        let headers: Headers = new Headers();
        headers.append("sessionToken", currentUser.sessionToken);
        headers.append("Content-Type", "application/json");
        const uri = env.APIURL + '/admin/my-activity?page=' + con;
        return this
            .http
            .get(uri, { headers: headers })
            .map((res: Response) => {
                return res.json();
            })
            .catch((error: Response) => {
                error = error.json();
                return Observable.throw(error);
            });
    }
    updatePassword(data) {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        // console.log(currentUser)
        let headers: Headers = new Headers();
        headers.append("sessionToken", currentUser.sessionToken);
        headers.append("Content-Type", "application/json");
        const uri = env.APIURL + '/admin/change-password';
        return this
            .http
            .post(uri, data, { headers: headers })
            .map((res: Response) => {
                return res.json()
            })
            .catch((error: Response) => {
                error = error.json();
                return Observable.throw(error);
            });
    }
    //update profile image 
    // updateUploadadminprofile(event, phone, name) {

    //     let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    //     let headers: Headers = new Headers();
    //     headers.append("sessionToken", currentUser.sessionToken);
    //     const uri = env.APIURL + '/admin/update-profile';
    //     const fileList: FileList = event.target.files;
    //     alert(uri);
    //     const file = fileList[0];

    //     const formData = new FormData();
    //     formData.append('image', file, file.name);
    //     formData.append('name', name);
    //     formData.append('phone', phone);
    //     return this
    //         .http
    //         .patch(uri, formData, { headers: headers })
    //         .map((res: Response) => {
    //             return res.json();
    //         })
    //         .catch((error: Response) => {
    //             error = error.json();
    //             return Observable.throw(error);
    //         });
    // }

    updateUploadadminprofile(event) {

        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        let headers: Headers = new Headers();
        headers.append("sessionToken", currentUser.sessionToken);
        //  headers.append("Content-Type", "application/json");
        //  headers.append("Content-Type", "multipart/form-data");
        const uri = env.APIURL + '/admin/upload-image';
        // const uri = 'http://devadmin.jhaiho.com/api/admin/upload-image';

        const fileList: FileList = event.target.files;

        const file = fileList[0];

        const formData = new FormData();
        formData.append('image', file, file.name);

        return this
            .http
            .post(uri, formData, { headers: headers })
            .map((res: Response) => {
                return res.json();
            })
            .catch((error: Response) => {
                error = error.json();
                return Observable.throw(error);
            });
    }

    updateAdminProfile(imageUrl, name, phone) {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        let headers: Headers = new Headers();
        headers.append("sessionToken", currentUser.sessionToken);
        headers.append("Content-Type", 'application/json');
        const uri = env.APIURL + '/admin/update-profile';
        let data = {
            name:name,
            phoneNumber:phone,
            profileImage:imageUrl
        }
        console.log(data);
        console.log(currentUser.sessionToken);
        return this
            .http
            .post(uri, data, { headers: headers })
            .map((res: Response) => {
                return res.json();
            })
            .catch((error: Response) => {
                error = error.json();
                return Observable.throw(error);
            });
    }

}
