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
  selector: 'app-driversadd',
  templateUrl: './driversadd.component.html',
  styleUrls: ['./driversadd.component.scss']
})
export class DriversaddComponent implements OnInit {

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
      "userFirstName": ['', Validators.required],
      "userLastName": ['', Validators.required],
      "userEmail": ['', [Validators.required, ValidationService.emailValidator]],
      "userPhone": ['', Validators.required],
      "userRole": "Driver",
      "userPassword": ['', Validators.required],
      "country": ['5b64792806ff811e1f06f001', Validators.required],
      "state": "5b6479ab06ff811e1f06f137",
      "city": "5b6479fe06ff811e1f06f696",
      "gender" : "Male",
      "userAddress": ['', Validators.required],
      "driverLicence":"DL234334",
      "userClassLicence":"5b745b3097ab92246dbb5ea0",
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

}
