import { Injectable } from "@angular/core";
import { Http,Headers, Response } from "@angular/http";
import "rxjs/add/operator/map";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { environment as env } from '../../../environments/environment';

@Injectable()
export class AuthenticationService {

    constructor(private http: Http) {
    }
    
    login(email: string, password: string) {
       
        const uri = env.APIURL + '/users/login';
       
        //let username1: string = 'admin@jhaiho.com';
        //let password1: string = 'Pass@word1';
        let headers: Headers = new Headers();
       // headers.append("Authorization", "Basic " + btoa(username1 + ":" + password1)); 
        headers.append("Content-Type", "application/json");
        return this.http.post(uri, { userEmail: email, userPassword: password }, {headers: headers})   
               .map((response: Response) => {
                // login successful if there's a jwt token in the response
               
                let user = response.json();
                console.log(user.token);
                console.log(user.user);
			    let filteredUsers ={};
				 filteredUsers[0] = {
                        name: 'test',
                        fullName: 'test',
                        email: 'n@gmail.com',
                        img: 'abcd',
                        rolePermissionMenu: [
                            {
                            "menuLabel": "Dashboard",
                            "menuRouterLink": "/dashboard",
                            "menuIcon": "fa fa-tasks",
                            "subMenuLabel1": [
                                {
                                    "subMenuLabel": "Dashboard list 1",
                                    "subMenuRouterLink": "/dashboard",
                                    "subMenuIcon": "fa fa-tasks",
                                    "subMenuLabel2": [
                                        
                                    ]
                                }, {
                                    "subMenuLabel": "Dashboard list 2",
                                    "subMenuRouterLink": "/dashboard",
                                    "subMenuIcon": "fa fa-calendar",
                                    "subMenuLabel2": [

                                    ]
                                }

                            ]
                        },
                        {
                            "menuLabel": "Drivers",
                            "menuRouterLink": "/driver",
                            "menuIcon": "fa fa-user",
                            "subMenuLabel1": []
                        },
                        {
                            "menuLabel": "Employees",
                            "menuRouterLink": "/employee",
                            "menuIcon": "fa fa-users",
                            "subMenuLabel1": []
                        },
                        {
                            "menuLabel": "Idscan Details",
                            "menuRouterLink": "/notification",
                            "menuIcon": "fa fa-comments-o",
                            "subMenuLabel1": []
                        },
                        {
                            "menuLabel": "Marketing Agency Accounts",
                            "menuRouterLink": "/notification",
                            "menuIcon": "fa fa-bell-o",
                            "subMenuLabel1": []
                        },
                        {
                            "menuLabel": "Manage Payments",
                            "menuRouterLink": "/meassage-management",
                            "menuIcon": "fa fa-envelope",
                            "subMenuLabel1": []
                        },
						{
                            "menuLabel": "Manage CMS",
                            "menuRouterLink": "/content-management",
                            "menuIcon": "fa fa-file-code-o",
                            "subMenuLabel1": []
                        },
						{
                            "menuLabel": "Manage Advertising",
                            "menuRouterLink": "/content-management",
                            "menuIcon": "fa fa-file-code-o",
                            "subMenuLabel1": []
                        },
						{
                            "menuLabel": "Manage Literacy",
                            "menuRouterLink": "/content-management",
                            "menuIcon": "fa fa-file-code-o",
                            "subMenuLabel1": []
                        },
						{
                            "menuLabel": "Manage Global Wanted",
                            "menuRouterLink": "/content-management",
                            "menuIcon": "fa fa-file-code-o",
                            "subMenuLabel1": []
                        },
						{
                            "menuLabel": "Country List",
                            "menuRouterLink": "/country",
                            "menuIcon": "fa fa-file-code-o",
                            "subMenuLabel1": []
                        },
						{
                            "menuLabel": "State List",
                            "menuRouterLink": "/state",
                            "menuIcon": "fa fa-file-code-o",
                            "subMenuLabel1": []
                        },
						{
                            "menuLabel": "City List",
                            "menuRouterLink": "/city",
                            "menuIcon": "fa fa-file-code-o",
                            "subMenuLabel1": []
                        },
						{
                            "menuLabel": "Class of Licence List",
                            "menuRouterLink": "/license",
                            "menuIcon": "fa fa-file-code-o",
                            "subMenuLabel1": []
                        },
						{
                            "menuLabel": "Vehicle Preference List",
                            "menuRouterLink": "/content-management",
                            "menuIcon": "fa fa-file-code-o",
                            "subMenuLabel1": []
                        },
						{
                            "menuLabel": "Promo Code List",
                            "menuRouterLink": "/content-management",
                            "menuIcon": "fa fa-file-code-o",
                            "subMenuLabel1": []
                        },
						{
                            "menuLabel": "Image Recognition Request",
                            "menuRouterLink": "/content-management",
                            "menuIcon": "fa fa-file-code-o",
                            "subMenuLabel1": []
                        },
						{
                            "menuLabel": "Settings",
                            "menuRouterLink": "/content-management",
                            "menuIcon": "fa fa-settings",
                            "subMenuLabel1": []
                        }
                        ]


                    };
				
               // if (user.user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                   // localStorage.setItem('adminProfilePic', user.data.image);
                     localStorage.setItem('currentUser', JSON.stringify(user));
                     sessionStorage.setItem('usertoken', JSON.stringify(user));
                     let users = filteredUsers[0];
					 localStorage.setItem('rolePermissionMenu', JSON.stringify(users.rolePermissionMenu));
                
               // }
            });
    }

    logout() {
        localStorage.removeItem('currentUser');
        sessionStorage.removeItem('usertoken');
        localStorage.removeItem("rolePermissionMenu")
        localStorage.clear();
        sessionStorage.clear();
    }
    
    forgotPassword(email: string) {
        // console.log(currentUser)
    let username1: string = 'admin@jhaiho.com';
    let password1: string = 'Pass@word1';
    let headers: Headers = new Headers();
    headers.append("Authorization", "Basic " + btoa(username1 + ":" + password1)); 
    headers.append("Content-Type", "application/json");
    const uri = env.APIURL + '/admin/forgot-password';
    return this
        .http
        .post(uri, JSON.stringify({ email }),  {headers: headers})
        .map((res: Response) => {
            return res.json()
        })
        .catch((error: Response) => {
            error = error.json();
            return Observable.throw(error);
        });
  }

      reset(resetToken: string, new_password: string) {
        // console.log(currentUser)
        let username1: string = 'admin@jhaiho.com';
        let password1: string = 'Pass@word1';
        let headers: Headers = new Headers();
        headers.append("Authorization", "Basic " + btoa(username1 + ":" + password1)); 
        headers.append("Content-Type", "application/json");
        const uri = env.APIURL + '/admin/reset-password/'+resetToken;
        return this
            .http
            .post(uri, JSON.stringify({ new_password : new_password }),  {headers: headers})
            .map((res: Response) => {
                return res.json()
            })
            .catch((error: Response) => {
                error = error.json();
                return Observable.throw(error);
            });
      }
}