import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-adminmanagementinfo',
  templateUrl: './adminmanagementinfo.component.html',
  styleUrls: ['./adminmanagementinfo.component.scss']
})
export class AdminmanagementinfoComponent implements OnInit {

  user: any = {};
  msg: any;
  strVal:any;
  lastChar:any;  
  phone_invalid_error:boolean = false;
  invalid_name_error_msg="Please enter valid name";
  name_invalid_error:boolean = false;
  invalid_error_msg:string = "";

  // admin_profile_pic = "./assets/image/user_profile.png";
  admin_profile_pic = localStorage.getItem('adminProfilePic');
  
  constructor( private service: AdminService) { }

  ngOnInit() {
    this.getAdminInfo();

    $('.edit-btn').on('click', function(){
        $(".view-profile-section").addClass('display-none');
        $(".edit-section").removeClass('display-none');

    });

    $('.cancel-btn-profile').on('click', function(){
      $(".edit-section").addClass('display-none');
      $(".view-profile-section").removeClass('display-none');

  });
  }

  getAdminInfo() {
    this.service.getAdminInfo().subscribe(res => {
      this.user = res.data;
      console.log(this.user);
    });
  }
  
  onFileadminprofile(event: any) {
		
		this.service.updateUploadadminprofile(event).subscribe(
			data1 => {
          console.log(localStorage.getItem('adminProfilePic'));
          localStorage.setItem('adminProfilePic', data1.data.url);
          this.admin_profile_pic = localStorage.getItem('adminProfilePic');
			},
			error => {
			console.log('error')
			});
         this.msg = 'Update admin profile image successfully';
           
     }

  updateAdminProfile() {

    let length = this.user.phone.toString().length;
      let phoneNumber = this.user.phone.toString().trim();
      let nameLength = this.user.name.toString().length;
      let name = this.user.name.toString().trim();
      if(nameLength < 2){
        alert("Please enter valid name");
      }else if(length < 10){
        alert("Please enter valid phone number");
      }else{
          this.service.updateAdminProfile(this.admin_profile_pic,this.user.name,this.user.phone).subscribe(
          data2 => {
            let currentUser = JSON.parse(localStorage.getItem('currentUser'));
            currentUser.data.name=this.user.name;
            localStorage.setItem('currentUser',JSON.stringify(currentUser));
            
            this.phone_invalid_error = false;
            this.name_invalid_error = false;
            window.location.href = "/profile";
          },
          error => {
          console.log('error')
          })
      }
    }

    onChange(){
  
  
      this.strVal = this.user.phone.toString();
      this.lastChar = this.strVal.charCodeAt(this.strVal.length - 1);
  
      // if(this.lastChar == 101 || this.lastChar == 43 || this.lastChar == 45){
      //   this.strVal = this.strVal.substring(0, this.strVal.length - 1);
      // }
      if(this.lastChar < 48 || this.lastChar > 57){
        this.strVal = this.strVal.substring(0, this.strVal.length - 1);
      }
  
      this.user.phone = this.strVal;
      
    }

    onNameChange(){
  
  
      this.strVal = this.user.name.toString().trim();
  
      if(this.strVal.length < 2){
        this.name_invalid_error = true;
        this.invalid_name_error_msg = "Please enter valid name"
      }else{
        this.name_invalid_error = false;
      }
      
    }

    phoneCheck(){
      let length = this.user.phone.toString().length;
      let phoneNumber = this.user.phone.toString();
      if(length < 10){
        this.phone_invalid_error = true;
        this.invalid_error_msg = "Please enter valid phone number"
      }
    }

}
