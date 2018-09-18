import { Component, EventEmitter, Injectable, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { UploadOutput, UploadInput, UploadFile, humanizeBytes, UploaderOptions } from 'ngx-uploader';
import { FileUploadModule, FileUpload } from 'primeng/components/fileupload/fileupload';
import { HttpClient, HttpParams, HttpRequest, HttpEvent} from '@angular/common/http';
import { Observable } from "rxjs";
import { ValidationService } from '../../services/validation.service';
import { FormControl } from '@angular/forms';
import { MapsAPILoader } from '@agm/core';
import { EmployeeService } from '../../services/employee.service';
import { ToastrService } from 'ngx-toastr';
import { CountryService } from '../../services/country.service';



declare var google: any;
@Component({
  selector: 'app-copempadd',
  templateUrl: './copempadd.component.html',
  styleUrls: ['./copempadd.component.scss']
})
export class CopempaddComponent implements OnInit {

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
  Countries: any[] = [{'countryName':'--Select--', '_id':''}];
  default: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private service: EmployeeService,
    private countryservice: CountryService,
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
      userFirstName: ['', Validators.required],
      userLastName: ['', Validators.required],
      userEmail: ['', [Validators.required, ValidationService.emailValidator]],
      userPhone: ['', Validators.required],
      userRole:"CorporateEmployer",
      userPassword: ['', Validators.required],
      country: ['', Validators.required],
      state: ['', ],
      city: ['', ],
      address: ['', Validators.required],
      businessName: ['', Validators.required],
      businessAddress: ['', Validators.required],
      businessLogo: ['',],
      workIdCard: ['', Validators.required],
      companyRegistrationNo: ['', Validators.required]
    });
    
    this.userForm.controls['country'].setValue(this.default, {onlySelf: true});

  }

  
  
  saveUser() {
    this.toastr.error('Usr name is required');
    console.log(this.userForm.value)
    if (this.userForm.dirty && this.userForm.valid) {

    
        this.service.createcorpEmployee(this.userForm.value).subscribe(
            data => {
                console.log(data)
                 this.toastr.success('User added Successfully');
                 //this._router.navigate(['/employee']);
            },
            error => {
              this.toastr.error('Error');
            });
       
    }
  }

  myUploaderNew(event1) {
    this.service.uploadLogo(event1).subscribe(
      data => {
        console.log(data)
      this.userForm.controls['businessLogo'].setValue(data.path.businessLogo);
      this.userForm.controls['workIdCard'].setValue(data.path.businessLogo);
      this.userForm.controls['companyRegistrationNo'].setValue(data.path.businessLogo);
     //  this.profile_image = data.data.url;
       this.msg = 'Uploded successfully';
      },
      error => {
         console.log('error')
      });
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
      this.getCountries();     
  }
  getCountries() {
    this.countryservice.getCountries().subscribe(res => {
      this.Countries = res.countries;
   });
  }

}
