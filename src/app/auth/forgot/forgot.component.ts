import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Router } from "@angular/router";
import { AuthenticationService } from "../_services/authentication.service";
import { Helpers } from "../../helpers";
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-forgot',
    templateUrl: './forgot.component.html',
    encapsulation: ViewEncapsulation.None,
})

export class ForgotComponent implements OnInit {

	model: any = {};
	resetToken: string = '';
	error_msg:string;
	loading:boolean;

    constructor(private _router: Router,
        private _authService: AuthenticationService,
        private route: ActivatedRoute) {
    }

    ngOnInit(): void {

    	this.route.paramMap.subscribe(response => this.resetToken = response.get('resetToken'));

    }

    reset(){
    	
    	if(this.model.newPassword != this.model.confirmPassword){

    	}
        this.loading=true;
        this._authService.reset(this.resetToken,this.model.confirmPassword).subscribe(
            data => {
                this.loading=false;
                let currentUser = JSON.parse(localStorage.getItem('currentUser'));
                // console.log(currentUser.rolePermissionMenu[0].menuRouterLink)
                this._router.navigate(['/login']);
            },
            error => {
                // this.showAlert('alertSignin');
                // this._alertService.error('Reset Password Unsuccessful.');
                // this.loading = false;
            });
    }
}