import { Component, EventEmitter, Injectable, ElementRef, NgZone, OnInit, ViewChild} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { UploadOutput, UploadInput, UploadFile, humanizeBytes, UploaderOptions } from 'ngx-uploader';
import { HttpClient, HttpParams, HttpRequest, HttpEvent} from '@angular/common/http';
import { MapsAPILoader } from '@agm/core';
import { ToastrService } from 'ngx-toastr';
import { StateService } from '../../services/state.service';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-editstate',
  templateUrl: './editstate.component.html',
  styleUrls: ['./editstate.component.scss']
})
export class EditstateComponent implements OnInit {

  userForm: any;
  stateid;
  formData: FormData;
  files: UploadFile[];
  uploadInput: EventEmitter<UploadInput>;
  humanizeBytes: Function;
  dragOver: boolean;
  msg: any = null;
  options: UploaderOptions;
  States:any;
  lastChar:any;  

  public lat: any = '';
  public lng: any = '';
  public countryName: any = '';

  Countries: any[] = [{'country':'--Select--', '_id':''}];
  default: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private service: CountryService,
    private stateservice: StateService,
    private toastr: ToastrService,
    private _router: Router,
    public http: HttpClient,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
      
  ) {
      
   

    this.route.params.subscribe((params) => {
      this.stateid = params['driverid'];
     // console.log(this.driverid)
      this.options = { concurrency: 1, maxUploads: 3 };
      this.files = []; // local uploading files array
      this.uploadInput = new EventEmitter<UploadInput>(); // input events, we use this to emit data to ngx-uploader
      this.humanizeBytes = humanizeBytes;
    });

    this.userForm = this.formBuilder.group({
      'id': [this.stateid, Validators.required],
      'stateName': ['', Validators.required],
      'country': ['', ]
     });
    this.userForm.controls['country'].setValue(this.default, {onlySelf: true});
   
  }

  
  
  saveUser() {
    console.log(this.userForm.value)
    if(this.userForm.value.country == ''){
      this.toastr.error('Usr name is required');
    }
    if (this.userForm.dirty && this.userForm.valid) {
      let query = '/'+this.stateid; 
        this.stateservice.updateStates(this.userForm.value,query).subscribe(
            data => {
                console.log(data)
                this.toastr.success('State updated Successfully');
                this._router.navigate(['/state']);
            },
            error => {
               console.log('error')
            });
       
    }
  }
     
  getCountries() {
    this.service.getCountries().subscribe(res => {
      this.Countries = res.countries;
   });
  }
  
 getStates() {
  let query = '/'+this.stateid;
    this.stateservice.getStates(query).subscribe(res => {
     
      this.States = res.states;
      this.userForm.controls['id'].setValue( this.States.id, {onlySelf: true});
      this.userForm.controls['stateName'].setValue( this.States.stateName, {onlySelf: true});
      this.userForm.controls['country'].setValue( this.States.country, {onlySelf: true});
    
   });
  }

  ngOnInit() {
      this.getCountries();
      this.getStates();
   }
  
     
}
