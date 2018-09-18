import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../helpers';

declare let mLayout: any;
@Component({
    selector: "app-header-nav",
    templateUrl: "./header-nav.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class HeaderNavComponent implements OnInit, AfterViewInit {
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
      //  console.log("rolePermissionMenu", this.rolePermissionMenu)
    }
    ngAfterViewInit() {

        mLayout.initHeader();

    }

    sidebarToggle(){
       if(this.flag == 0)
        {   
            document.getElementById('sidebarCustomId').classList.remove("expandit");
            document.getElementById('sidebarCustomId').classList.add("collapseit");
            document.getElementById('main-content').classList.add("sidebar_shift");
            this.flag =1;
        }else{
          document.getElementById('sidebarCustomId').classList.remove("collapseit");
            document.getElementById('sidebarCustomId').classList.add("expandit");
            document.getElementById('main-content').classList.remove("sidebar_shift");
            this.flag=0
        }

    }

}