import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../helpers';

declare let mLayout: any;
@Component({
    selector: "app-aside-nav",
    templateUrl: "./aside-nav.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class AsideNavComponent implements OnInit, AfterViewInit {
    
    flag=0;
    rolePermissionMenu:any;
    currentUser:any;
     admin_profile_pic = "./assets/image/user_profile.png";
   // admin_profile_pic = localStorage.getItem('adminProfilePic');

    constructor() {

    }
    ngOnInit() {
        this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
        this.rolePermissionMenu = JSON.parse(localStorage.getItem("rolePermissionMenu"));
        console.log("rolePermissionMenu",  this.currentUser)
        console.log("rolePermissionMenu", this.rolePermissionMenu)
    }
    ngAfterViewInit() {

      //  mLayout.initAside();

    }

    menuToggle(){

           $('.has-submenu > a').next("ul").toggle();
       
     }

}