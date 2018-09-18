import { Component, EventEmitter, Injectable, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { UploadOutput, UploadInput, UploadFile, humanizeBytes, UploaderOptions } from 'ngx-uploader';
import { FileUploadModule, FileUpload } from 'primeng/components/fileupload/fileupload';
import { HttpClient, HttpParams, HttpRequest, HttpEvent} from '@angular/common/http';
import { MapsAPILoader } from '@agm/core';
import { ToastrService } from 'ngx-toastr';
import { CountryService } from '../../services/country.service';



@Component({
  selector: 'app-countryadd',
  templateUrl: './countryadd.component.html',
  styleUrls: ['./countryadd.component.scss']
})
export class CountryaddComponent implements OnInit {

  userForm: any;
  countryid;
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
  public countryName: any = '';
  allstatus: any[] = [{'name':'--Select--', 'value':''}, {'name':'Active','value':'active'}, 
  {'name':'InActive','value':'inactive'}];
  default: string = '';
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private service: CountryService,
    private toastr: ToastrService,
    private _router: Router,
    public http: HttpClient,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
      
  ) {
      
   

    this.route.params.subscribe((params) => {
      this.countryid = params['driverid'];
      console.log(this.countryid)

      this.options = { concurrency: 1, maxUploads: 3 };
      this.files = []; // local uploading files array
      this.uploadInput = new EventEmitter<UploadInput>(); // input events, we use this to emit data to ngx-uploader
      this.humanizeBytes = humanizeBytes;
    });

    this.userForm = this.formBuilder.group({
      'countryCode': ['', Validators.required],
      'countryName': ['', Validators.required],
      'capital': ['', Validators.required],
      'latitude': ['', ],
      'longitude': ['', ],
      'latlng':['',],
      'timezones':['',],
      'dialCode':['', Validators.required],
      'flag_128':['',],
      'flag_32':['', ],
      'name_official':['', Validators.required],
      'countryStatus': ['', Validators.required],
      'countryLogo': ['', ],
      'flag_27': ['', ]
     
    });
    this.userForm.controls['countryStatus'].setValue(this.default, {onlySelf: true});
   
  }

  
  
  saveUser() {
    console.log(this.userForm.value)
    if(this.userForm.value.countryName == ''){
      this.toastr.error('Usr name is required');
    }
    if (this.userForm.dirty && this.userForm.valid) {
         
        this.service.addCountries(this.userForm.value).subscribe(
            data => {
                console.log(data)
                this.toastr.success('Country added Successfully');
                this._router.navigate(['/country']);
            },
            error => {
               console.log('error')
            });
       
    }
  }
    
  autoCompleteCallback1(data: any): any {
    console.log(data)
    if(data.data.formatted_address == ''){
      this.countryName ="";
    }else{
    this.countryName = data.data.formatted_address;
    }
    this.lat = JSON.stringify(data.data.geometry['location'].lat);
    this.lng = JSON.stringify(data.data.geometry['location'].lng);
    this.userForm.controls['countryName'].setValue(this.countryName);
    this.userForm.controls['latitude'].setValue(this.lat);
    this.userForm.controls['longitude'].setValue(this.lng);
    this.userForm.controls['latlng'].setValue([this.lat,this.lng]);
    
    console.log(this.countryName)
    console.log(this.lat)
    console.log(this.lng)
    
  }
    ngOnInit() {
     
      
     }
  
     /*myUploader(event1) {
       
      this.service.uplodpic(event1).subscribe(
        data => {
          //console.log(data.path.flag_128)
         // this.userForm.controls['countryLogo'].setValue('');
        },
        error => {
           console.log('error')
        });
     
     }*/
   
     myUploaderNew(event1) {
      this.service.uploadLogo(event1).subscribe(
        data => {
        this.userForm.controls['flag_128'].setValue(data.path.flag_128);
        this.userForm.controls['flag_27'].setValue(data.path.flag_128);
        this.userForm.controls['countryLogo'].setValue(data.path.flag_128);
        //  this.profile_image = data.data.url;
         this.msg = 'Uploded successfully';
        },
        error => {
           console.log('error')
        });
     }

}
