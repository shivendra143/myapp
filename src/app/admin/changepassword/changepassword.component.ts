import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.scss']
})
export class ChangepasswordComponent implements OnInit {
  
  passwordForm:any;
  formData: FormData;
  model: any = {};
  response:any={};
  showMessage=false;
  loading = false;
  error_message:string;
  show_msg=false;

  constructor( private formBuilder: FormBuilder,private service: AdminService) { 
    this.passwordForm = this.formBuilder.group({
          'email': ['', Validators.required],
          'old_password': ['', Validators.required],
          'new_password': ['', Validators.required]
    }); 
 }

  ngOnInit() {
  }

  updatePassword() {
    console.log(this.passwordForm.value);
    if(this.show_msg == true){
        alert("Old Password & New Password can't be same");
    }else{
      this.loading = true;
      this.service.updatePassword(this.passwordForm.value).subscribe(
          data => {  
            this.showMessage=true;        
            this.response=data;
            console.log(data)
            this.loading = false;   
            this.model = {};
          },
          error => {
            this.showMessage=true; 
            this.response=error;
            console.log("eee")
            console.log(error.message)
            this.loading = false;
          });
      }
  }
  
  FadeOutLink() {
    setTimeout( () => {
          this.showMessage = false;
        }, 2000);
   }

   checkPassword(){
     console.log(this.passwordForm.value.old_password);
     console.log(this.passwordForm.value.new_password);
     if(this.passwordForm.value.old_password.toString().trim().length > 0 ){
       if(this.passwordForm.value.old_password == this.passwordForm.value.new_password){
         this.error_message = "Old Password Can't be same as Old Password.";
         this.show_msg = true;
       }else{
        this.show_msg = false;
       }
     }else{
      this.show_msg = false;
     }
   }

   resetForm(){
      this.passwordForm.controls['old_password'].setValue('');
      this.passwordForm.controls['new_password'].setValue('');
      this.passwordForm.controls['email'].setValue('');
   }

}
