import { Component, EventEmitter, Injectable, ElementRef, NgZone, OnInit, ViewChild} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { UploadOutput, UploadInput, UploadFile, humanizeBytes, UploaderOptions } from 'ngx-uploader';
import {HttpClient, HttpParams, HttpRequest, HttpEvent} from '@angular/common/http';
import { MapsAPILoader } from '@agm/core';
import { ToastrService } from 'ngx-toastr';
import { StateService } from '../../services/state.service';
import { CountryService } from '../../services/country.service';
import { CityService } from '../../services/city.service';

@Component({
  selector: 'app-editcity',
  templateUrl: './editcity.component.html',
  styleUrls: ['./editcity.component.scss']
})
export class EditcityComponent implements OnInit {

  userForm: any;
  cityid;
  formData: FormData;
  files: UploadFile[];
  uploadInput: EventEmitter<UploadInput>;
  humanizeBytes: Function;
  dragOver: boolean;
  msg: any = null;
  options: UploaderOptions;
  Cities:any;
  lastChar:any;  

  public lat: any = '';
  public lng: any = '';
  public countryName: any = '';

  Countries: any[] = [{'country':'--Select--', '_id':''}];
  States: any[] = [{'stateName':'--Select--', '_id':''}];
  default: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private service: CityService,
    private countryservice: CountryService,
    private stateservice: StateService,
    private toastr: ToastrService,
    private _router: Router,
    public http: HttpClient,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
      
  ) {
      
   

    this.route.params.subscribe((params) => {
      this.cityid = params['driverid'];
     // console.log(this.driverid)
      this.options = { concurrency: 1, maxUploads: 3 };
      this.files = []; // local uploading files array
      this.uploadInput = new EventEmitter<UploadInput>(); // input events, we use this to emit data to ngx-uploader
      this.humanizeBytes = humanizeBytes;
    });

    this.userForm = this.formBuilder.group({
      'id': [ this.cityid, Validators.required],
      'stateName': ['', Validators.required],
      'country': ['', ],
      'cityName': ['', ]     
     });
    this.userForm.controls['stateName'].setValue(this.default, {onlySelf: true});
    this.userForm.controls['country'].setValue(this.default, {onlySelf: true});
   
  }

  
  
  saveUser() {
    console.log(this.userForm.value)

    if(this.userForm.value.country == ''){
      this.toastr.error('Country is required');
      return false;
    }
    if (this.userForm.dirty && this.userForm.valid) {
        let query = '/'+this.cityid; 
        this.service.updateCities(this.userForm.value,query).subscribe(
            data => {
                this.toastr.success('City updated Successfully');
                this._router.navigate(['/city']);
            },
            error => {
              this.toastr.error('error')
            });
       
    }
  }
     
  getCountries() {
    this.countryservice.getCountries().subscribe(res => {
      this.Countries = res.countries;
   });
  }

  getStates(id="") {
    if(id==""){
        id=this.userForm.value.country;
    }
    let cid = id;
    let query = '?country_id='+cid;
   // let query = '?country_id='+'5b64792806ff811e1f06f0d0';
    this.stateservice.getStates(query).subscribe(res => {
      console.log(res)
      this.States = res.states;
     
   });
  }
  getCities() {
    let query = '/'+this.cityid
    this.service.getCities(query).subscribe(res => {
      this.Cities = res.cities;

      this.userForm.controls['id'].setValue( this.Cities.id, {onlySelf: true});
      this.userForm.controls['cityName'].setValue( this.Cities.cityName, {onlySelf: true});
      this.userForm.controls['country'].setValue( this.Cities.country._id, {onlySelf: true});
      this.getStates(this.Cities.state.country);
      this.userForm.controls['stateName'].setValue( this.Cities.state._id, {onlySelf: true});
      
   });
  }
  
  ngOnInit() {
      this.getCountries();
      this.getCities();
   }
  
    

}
