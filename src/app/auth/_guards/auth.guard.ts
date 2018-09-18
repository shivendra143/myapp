import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { UserService } from "../_services/user.service";
import { Observable } from "rxjs/Rx";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private _router: Router, private _userService: UserService) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        let usertoken = JSON.parse(sessionStorage.getItem('usertoken'));
        let grouting =[
		'/dashboard',
        '/driver',
        '/driver/add-driver',
        '/driver/edit-driver',
        '/driver/view-driver',
        '/employee',
        '/employee/add-ind-employee',
        '/employee/edit-ind-employee',
        '/employee/add-corp-employee',
        '/employee/edit-corp-employee',
        '/country',
        '/country/add-country',
        '/country/edit-country',
        '/state',
        '/state/add-state',
        '/state/edit-state',
        '/notification',
        '/city',
        '/city/add-city',
        '/city/edit-city',
        '/notification',
        '/meassage-management',
        '/content-management',
        '/profile',
        '/profile/my-activity',
        '/profile/update-password',
        '/license',
        '/license/edit-license',
        '/license/add-license',
        '/logout'];
      if(currentUser || usertoken){
            if(grouting.indexOf(state.url)>-1){
               return true;
            }else{
               localStorage.removeItem('currentUser');
               localStorage.clear();
               sessionStorage.clear();
               this._router.navigate(['/login']);
               return false; 
            }
        }
        // not logged in so redirect to login page with the return url
        this._router.navigate(['/login']);
        return false;
    }
}
