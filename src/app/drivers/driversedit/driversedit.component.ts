import { Component, EventEmitter, Injectable, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { UploadOutput, UploadInput, UploadFile, humanizeBytes, UploaderOptions } from 'ngx-uploader';
import { HttpClient, HttpParams, HttpRequest, HttpEvent} from '@angular/common/http';
import { ValidationService } from '../../services/validation.service';
import { MapsAPILoader } from '@agm/core';
import { DriversService } from '../../services/drivers.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-driversedit',
  templateUrl: './driversedit.component.html',
  styleUrls: ['./driversedit.component.scss']
})
export class DriverseditComponent implements OnInit {

  userForm: any;
  driverid;
  formData: FormData;
  files: UploadFile[];
  uploadInput: EventEmitter<UploadInput>;
  humanizeBytes: Function;
  dragOver: boolean;
  msg: any = null;
  options: UploaderOptions;
  Drivers:any;
  lastChar:any;  

  public lat: any = '';
  public lng: any = '';
  public address: any = '';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private service: DriversService,
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
      "id": [this.driverid, Validators.required],
      "userFirstName": ['', Validators.required],
      "userLastName": ['', Validators.required],
      "userEmail": ['', [Validators.required, ValidationService.emailValidator]],
      "userPhone": ['', Validators.required],
      "userRole": "Driver",
      "userPassword": ['', Validators.required],
      "country": ['', Validators.required],
      "state": "",
      "city": "",
      "userAddress": ['', Validators.required],
      "selfieImage": ['', Validators.required],
      "documentImage": ['', Validators.required]
    });
  }

  
  
  saveUser() {
    if(this.userForm.value.userFirstName == ""){
      this.toastr.error('Usr name is required');
      return false;
    }
    console.log(this.userForm.value)
    if (this.userForm.dirty && this.userForm.valid) {

    
        this.service.addDriver(this.userForm.value).subscribe(
            data => {
                console.log(data)
                this.toastr.success('Driver added Successfully');
                this._router.navigate(['/driver']);
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
    this.userForm.controls['userAddress'].setValue(this.address);
    
  }
  ngOnInit() {
      this.getDrivers();
     }
  
  myUploaderNew(event1) {
      this.service.uploadLogo(event1).subscribe(
        data => {
          console.log(data);
        this.userForm.controls['selfieImage'].setValue(data.path.selfieImage);
        this.userForm.controls['documentImage'].setValue(data.path.selfieImage);
        //  this.profile_image = data.data.url;
         this.msg = 'Uploded successfully';
        },
        error => {
           console.log('error')
        });
     }

     getDrivers() {
       let query = '/'+this.driverid;
      this.service.getdDrivers(query).subscribe(res => {
        this.Drivers = res.data;
        
        this.userForm.controls['id'].setValue( this.Drivers.id, {onlySelf: true});
        this.userForm.controls['userFirstName'].setValue( this.Drivers.userFirstName, {onlySelf: true});
        this.userForm.controls['userLastName'].setValue( this.Drivers.userLastName, {onlySelf: true});
        this.userForm.controls['userEmail'].setValue( this.Drivers.userEmail, {onlySelf: true});
        this.userForm.controls['userPhone'].setValue( this.Drivers.userPhone, {onlySelf: true});
        this.userForm.controls['userRole'].setValue( this.Drivers.userRole, {onlySelf: true});
        this.userForm.controls['state'].setValue( this.Drivers.state, {onlySelf: true});
        this.userForm.controls['city'].setValue( this.Drivers.city, {onlySelf: true});
        this.userForm.controls['country'].setValue( this.Drivers.country, {onlySelf: true});
        this.userForm.controls['userAddress'].setValue( this.Drivers.userAddress, {onlySelf: true});
      
     });
    }

    updateDriver(){
      let query = ''+this.driverid;
      this.service.updateDriver(this.userForm.value, query).subscribe(
        data => {
            console.log(data)
            this.toastr.success('Driver updated Successfully');
            this._router.navigate(['/driver']);
        },
        error => {
           console.log('error')
        });
    }

}
