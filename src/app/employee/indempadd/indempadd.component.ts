import { Component, EventEmitter, Injectable, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { UploadOutput, UploadInput, UploadFile, humanizeBytes, UploaderOptions } from 'ngx-uploader';
import { FileUploadModule, FileUpload } from 'primeng/components/fileupload/fileupload';
import {HttpClient, HttpParams, HttpRequest, HttpEvent} from '@angular/common/http';
import {Observable} from "rxjs";
import { ValidationService } from '../../services/validation.service';
import { FormControl } from '@angular/forms';
import { MapsAPILoader } from '@agm/core';
import { EmployeeService } from '../../services/employee.service';
import { ToastrService } from 'ngx-toastr';


declare var google: any;

@Component({
  selector: 'app-indempadd',
  templateUrl: './indempadd.component.html',
  styleUrls: ['./indempadd.component.scss']
})
export class IndempaddComponent implements OnInit {
  userForm: any;
  driverid;
  formData: FormData;
  files: UploadFile[];
  uploadInput: EventEmitter<UploadInput>;
  humanizeBytes: Function;
  dragOver: boolean;
  msg: any = null;
  options: UploaderOptions;
  strVal:any;
  lastChar:any;  

  public lat: any = '';
  public lng: any = '';
  public address: any = '';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private service: EmployeeService,
    private toastr: ToastrService,
    private _router: Router,
    public http: HttpClient,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
      
  ) {
      
   

    this.route.params.subscribe((params) => {
      this.driverid = params['driverid'];
      console.log(this.driverid)

      this.options = { concurrency: 1, maxUploads: 3 };
      this.files = []; // local uploading files array
      this.uploadInput = new EventEmitter<UploadInput>(); // input events, we use this to emit data to ngx-uploader
      this.humanizeBytes = humanizeBytes;
    });

    this.userForm = this.formBuilder.group({
      lastName: ['', Validators.required],
      firstName: ['', Validators.required],
      email: ['', [Validators.required, ValidationService.emailValidator]],
      phoneNumber: ['', Validators.required],
      password: ['', Validators.required],
      countryCode: ['', Validators.required],
      address: ['', Validators.required],
      profileImage: ['', Validators.required]
    });
  }

  
  
  saveUser() {
    this.toastr.error('Usr name is required');
    console.log(this.userForm.value)
    if (this.userForm.dirty && this.userForm.valid) {

    
        this.service.createindEmployee(this.userForm.value).subscribe(
            data => {
                console.log(data)
                 alert('User added Successfully');
                 this._router.navigate(['/usermanagement']);
            },
            error => {
               console.log('error')
            });
       
    }
  }
    
  autoCompleteCallback1(data: any): any {
    if(data.data.formatted_address == ''){
      this.address ="";
    }else{
    this.address = JSON.stringify(data.data.formatted_address);
    }
    this.userForm.controls['address'].setValue(this.address);
    
  }
    ngOnInit() {
     
      
     }
  
  myUploader(event1) {
    
   
   }
  myUploadergallery(event1) {
   
   
   }


  onChange(){


    this.strVal = this.userForm.value.phoneNumber.toString();
    this.lastChar = this.strVal.charCodeAt(this.strVal.length - 1);

    // if(this.lastChar == 101 || this.lastChar == 43 || this.lastChar == 45){
    //   this.strVal = this.strVal.substring(0, this.strVal.length - 1);
    // }
    if(this.lastChar < 48 || this.lastChar > 57){
      this.strVal = this.strVal.substring(0, this.strVal.length - 1);
    }

    
    this.userForm.controls['phoneNumber'].setValue(this.strVal);
    
  }
  onUploadOutput(e){

  }
  myFunc(){
        document.getElementById('my_file').click();
  }
 
 

}
