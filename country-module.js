(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["country-module"],{

/***/ "./src/app/country/country.module.ts":
/*!*******************************************!*\
  !*** ./src/app/country/country.module.ts ***!
  \*******************************************/
/*! exports provided: CountryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryModule", function() { return CountryModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _countryinfo_countryinfo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./countryinfo/countryinfo.component */ "./src/app/country/countryinfo/countryinfo.component.ts");
/* harmony import */ var _countryadd_countryadd_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./countryadd/countryadd.component */ "./src/app/country/countryadd/countryadd.component.ts");
/* harmony import */ var _countryedit_countryedit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./countryedit/countryedit.component */ "./src/app/country/countryedit/countryedit.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _theme_layouts_layout_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../theme/layouts/layout.module */ "./src/app/theme/layouts/layout.module.ts");
/* harmony import */ var _theme_pages_default_default_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../theme/pages/default/default.component */ "./src/app/theme/pages/default/default.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var ngx_uploader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-uploader */ "./node_modules/ngx-uploader/fesm5/ngx-uploader.js");
/* harmony import */ var primeng_components_fileupload_fileupload__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/components/fileupload/fileupload */ "./node_modules/primeng/components/fileupload/fileupload.js");
/* harmony import */ var primeng_components_fileupload_fileupload__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primeng_components_fileupload_fileupload__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var ng2_pagination__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng2-pagination */ "./node_modules/ng2-pagination/index.js");
/* harmony import */ var ng2_pagination__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(ng2_pagination__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var ng4_geoautocomplete__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng4-geoautocomplete */ "./node_modules/ng4-geoautocomplete/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var routes = [
    {
        'path': '',
        'component': _theme_pages_default_default_component__WEBPACK_IMPORTED_MODULE_7__["DefaultComponent"],
        'children': [
            {
                'path': '',
                'component': _countryinfo_countryinfo_component__WEBPACK_IMPORTED_MODULE_2__["CountryinfoComponent"],
            },
            {
                'path': 'edit-country/:driverid',
                'component': _countryedit_countryedit_component__WEBPACK_IMPORTED_MODULE_4__["CountryeditComponent"],
            },
            {
                'path': 'add-country',
                'component': _countryadd_countryadd_component__WEBPACK_IMPORTED_MODULE_3__["CountryaddComponent"],
            },
            {
                'path': 'view-country/:driverid',
                'component': _countryedit_countryedit_component__WEBPACK_IMPORTED_MODULE_4__["CountryeditComponent"],
            }
        ],
    },
];
var CountryModule = /** @class */ (function () {
    function CountryModule() {
    }
    CountryModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_13__["AgmCoreModule"].forRoot({
                    apiKey: "AIzaSyAp5vIeGvze_ZWYwee-fVE3JS3LYnREZP0",
                    libraries: ["places"]
                }),
                ngx_toastr__WEBPACK_IMPORTED_MODULE_16__["ToastrModule"].forRoot(),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"].forRoot(),
                ng4_geoautocomplete__WEBPACK_IMPORTED_MODULE_15__["Ng4GeoautocompleteModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
                _theme_layouts_layout_module__WEBPACK_IMPORTED_MODULE_6__["LayoutModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                ngx_uploader__WEBPACK_IMPORTED_MODULE_10__["NgxUploaderModule"],
                ng2_pagination__WEBPACK_IMPORTED_MODULE_12__["Ng2PaginationModule"],
                primeng_components_fileupload_fileupload__WEBPACK_IMPORTED_MODULE_11__["FileUploadModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_14__["ScheduleModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_14__["CalendarModule"]
            ],
            declarations: [_countryinfo_countryinfo_component__WEBPACK_IMPORTED_MODULE_2__["CountryinfoComponent"], _countryadd_countryadd_component__WEBPACK_IMPORTED_MODULE_3__["CountryaddComponent"], _countryedit_countryedit_component__WEBPACK_IMPORTED_MODULE_4__["CountryeditComponent"]]
        })
    ], CountryModule);
    return CountryModule;
}());



/***/ }),

/***/ "./src/app/country/countryadd/countryadd.component.html":
/*!**************************************************************!*\
  !*** ./src/app/country/countryadd/countryadd.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n      <div class=\"col-12\">\n        <div class=\"page-title\">\n    \n            <div class=\"pull-left\">\n                <!-- PAGE HEADING TAG - START -->\n    \n                <h1 class=\"title\">Add Country</h1>\n                <!-- PAGE HEADING TAG - END -->\n            </div>\n    \n            <div class=\"pull-right hidden-xs\">\n                <ol class=\"breadcrumb\">\n                    <li>\n                        <a routerLink=\"/\">\n                            <i class=\"fa fa-home\"></i>Home</a>\n                    </li>\n                    <li>\n                        <a routerLink=\"/country\">\n                            <i class=\"fa fa-list-ol\"></i>Country Lists</a>\n                    </li>\n                    <li class=\"active\">\n                        <strong>Add Country</strong>\n                    </li>\n    \n                </ol>\n            </div>\n    \n        </div>\n     \n    </div>\n    \n      <div class=\"col-12\">\n          <div class=\"page-title\">\n\n              <div class=\"float-left\">\n                  <!-- PAGE HEADING TAG - START -->\n            \n              </div>\n              <div class=\"float-right\">\n                 <!-- <a [routerLink]=\"['add-subadmin']\"> <i class=\"fa fa-plus\"></i>Dashboard </a>-->\n\n              </div>\n\n          </div>\n      </div>\n      <div class=\"clearfix\"></div>\n      <!-- MAIN CONTENT AREA STARTS -->\n    \n      <div class=\"col-xl-12\">\n            <section class=\"box \">\n                  <div class=\"content-body \">\n                    <div class=\"row\">\n                        <div class=\"col-12\">\n                          <div class=\"container\">\n                            <form [formGroup]=\"userForm\" (submit)=\"saveUser()\">\n                                 \n                                <div  class=\"form-group row\">\n                                      <div class=\"col-sm-3\">\n                                          <label class=\"mt-2\" for=\"countryName\"><strong>Country Name*</strong></label>\n                                      </div>\n                                      <div  class=\"col-sm-9\">\n                                        <ng4geo-autocomplete (componentCallback)=\"autoCompleteCallback1($event)\" ></ng4geo-autocomplete>\n                                        <input type=\"hidden\" formControlName=\"countryName\" name=\"countryName\" id=\"address\">\n                                        <input type=\"hidden\" formControlName=\"latitude\" name=\"lat\" id=\"lat\" >\n                                        <input type=\"hidden\" formControlName=\"longitude\" name=\"lng\" id=\"lng\" >  </div>\n                                  </div>\n  \n                                  \n                        \n                                  <div  class=\"form-group row\">\n                                      <div class=\"col-sm-3\">\n                                          <label class=\"mt-2\" for=\"countryCode\"><strong>Country Code*</strong></label>\n                                      </div>\n                                      <div  class=\"col-sm-9\">\n                                          <input type=\"text\" formControlName=\"countryCode\"  class=\"form-control\" max=\"40\" id=\"countryCode\"  placeholder=\"Country Code\" />  <br>\n                                         \n                                     </div>\n                                  </div>\n                                  <div  class=\"form-group row\">\n                                      <div class=\"col-sm-3\">\n                                          <label class=\"mt-2\" for=\"capital\"><strong>Capital</strong></label>\n                                      </div>\n                                      <div  class=\"col-sm-9\">\n                                          <input type=\"text\" formControlName=\"capital\"  class=\"form-control\" max=\"100\" id=\"capital\"  placeholder=\"Country Code\" />  <br>\n                                         \n                                     </div>\n                                  </div>\n                                  <div  class=\"form-group row\">\n                                      <div class=\"col-sm-3\">\n                                          <label class=\"mt-2\" for=\"name_official\"><strong>Office address</strong></label>\n                                      </div>\n                                      <div  class=\"col-sm-9\">\n                                          <input type=\"text\" formControlName=\"name_official\"  class=\"form-control\" max=\"100\" id=\"name_official\"  placeholder=\"Office address\" />  <br>\n                                         \n                                     </div>\n                                  </div>\n                                  <div  class=\"form-group row\">\n                                      <div class=\"col-sm-3\">\n                                          <label class=\"mt-2\" for=\"dialCode\"><strong>Dial Code</strong></label>\n                                      </div>\n                                      <div  class=\"col-sm-9\">\n                                          <input type=\"text\" formControlName=\"dialCode\"  class=\"form-control\" max=\"100\" id=\"dialCode\"  placeholder=\"Dial Code\" />  <br>\n                                         \n                                     </div>\n                                  </div>\n                                  <div  class=\"form-group row\">\n                                      <div class=\"col-sm-3\">\n                                          <label class=\"mt-2\" for=\"countryStatus\"><strong>Status*</strong></label>\n                                      </div>\n                                      <div  class=\"col-sm-9\">\n                                            <select id=\"countryStatus\" formControlName=\"countryStatus\" class=\"form-control\" >\n                                                    <option *ngFor=\"let s of allstatus\" [ngValue]=\"s.value\">{{ s.name }}</option>\n                                            </select>\n                                          \n                                      </div>\n                                   </div>\n  \n                                   <div  class=\"form-group row\">\n                                      <div class=\"col-sm-3\">\n                                          <label class=\"mt-2\" for=\"name\"><strong>Country Logo*</strong></label>\n                                      </div>\n                                      <div  class=\"col-sm-9\">\n                                          <label for=\"fileToUpload\">\n                                             <input type=\"File\" class=\"form-control\" name=\"fileToUpload\" id=\"fileToUpload\" (change)=\"myUploaderNew($event)\">\n                                            <input type=\"hidden\" formControlName=\"flag_27\" id=\"flag_27\" >\n                                           </label>\n                                          <div style=\"color:green;\">{{msg}}</div>\n                                      </div>\n                                   </div>\n\n                                 <!--  <div  class=\"form-group row\">\n                                      <div class=\"col-sm-3\">\n                                          <label class=\"mt-2\" for=\"name\"><strong>Country Logo*</strong></label>\n                                      </div>\n                                      <div  class=\"col-sm-9\">\n                                          <div class=\"drop-container\" ngFileDrop [options]=\"options\" (uploadOutput)=\"onUploadOutput($event)\" [uploadInput]=\"uploadInput\" [ngClass]=\"{ 'is-drop-over': dragOver }\">\n                                           <p-fileUpload  customUpload=\"true\"\n                                          accept=\"image/*\" (uploadHandler)=\"myUploader($event)\"></p-fileUpload>\n                                        </div>\n                                        \n                                          <div style=\"color:green;\"></div>\n                                          \n                                       </div>\n                                   </div> -->\n                        \n                                   <div  class=\"form-group row\">\n                                      <div class=\"col-sm-3\">\n                                          <label class=\"mt-2\" for=\"name\"><strong></strong></label>\n                                      </div>\n                                      <div  class=\"col-sm-9\">\n                                          <button type=\"submit\"  class=\"btn btn-primary btn-block\">Add Country</button>\n                                      </div>\n                                  </div>    \n                                 \n                              </form>\n                    \n                           \n                           </div>\n                        </div>\n                    </div>\n                </div>\n            </section>\n        </div>\n\n\n\n\n\n\n    "

/***/ }),

/***/ "./src/app/country/countryadd/countryadd.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/country/countryadd/countryadd.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  width: 700px; }\n"

/***/ }),

/***/ "./src/app/country/countryadd/countryadd.component.ts":
/*!************************************************************!*\
  !*** ./src/app/country/countryadd/countryadd.component.ts ***!
  \************************************************************/
/*! exports provided: CountryaddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryaddComponent", function() { return CountryaddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_uploader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-uploader */ "./node_modules/ngx-uploader/fesm5/ngx-uploader.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _services_country_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/country.service */ "./src/app/services/country.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CountryaddComponent = /** @class */ (function () {
    function CountryaddComponent(formBuilder, route, service, toastr, _router, http, mapsAPILoader, ngZone) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.route = route;
        this.service = service;
        this.toastr = toastr;
        this._router = _router;
        this.http = http;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.msg = null;
        this.lat = '';
        this.lng = '';
        this.countryName = '';
        this.allstatus = [{ 'name': '--Select--', 'value': '' }, { 'name': 'Active', 'value': 'active' },
            { 'name': 'InActive', 'value': 'inactive' }];
        this.default = '';
        this.route.params.subscribe(function (params) {
            _this.countryid = params['driverid'];
            console.log(_this.countryid);
            _this.options = { concurrency: 1, maxUploads: 3 };
            _this.files = []; // local uploading files array
            _this.uploadInput = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // input events, we use this to emit data to ngx-uploader
            _this.humanizeBytes = ngx_uploader__WEBPACK_IMPORTED_MODULE_3__["humanizeBytes"];
        });
        this.userForm = this.formBuilder.group({
            'countryCode': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'countryName': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'capital': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'latitude': ['',],
            'longitude': ['',],
            'latlng': ['',],
            'timezones': ['',],
            'dialCode': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'flag_128': ['',],
            'flag_32': ['',],
            'name_official': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'countryStatus': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'countryLogo': ['',],
            'flag_27': ['',]
        });
        this.userForm.controls['countryStatus'].setValue(this.default, { onlySelf: true });
    }
    CountryaddComponent.prototype.saveUser = function () {
        var _this = this;
        console.log(this.userForm.value);
        if (this.userForm.value.countryName == '') {
            this.toastr.error('Usr name is required');
        }
        if (this.userForm.dirty && this.userForm.valid) {
            this.service.addCountries(this.userForm.value).subscribe(function (data) {
                console.log(data);
                _this.toastr.success('Country added Successfully');
                _this._router.navigate(['/country']);
            }, function (error) {
                console.log('error');
            });
        }
    };
    CountryaddComponent.prototype.autoCompleteCallback1 = function (data) {
        console.log(data);
        if (data.data.formatted_address == '') {
            this.countryName = "";
        }
        else {
            this.countryName = data.data.formatted_address;
        }
        this.lat = JSON.stringify(data.data.geometry['location'].lat);
        this.lng = JSON.stringify(data.data.geometry['location'].lng);
        this.userForm.controls['countryName'].setValue(this.countryName);
        this.userForm.controls['latitude'].setValue(this.lat);
        this.userForm.controls['longitude'].setValue(this.lng);
        this.userForm.controls['latlng'].setValue([this.lat, this.lng]);
        console.log(this.countryName);
        console.log(this.lat);
        console.log(this.lng);
    };
    CountryaddComponent.prototype.ngOnInit = function () {
    };
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
    CountryaddComponent.prototype.myUploaderNew = function (event1) {
        var _this = this;
        this.service.uploadLogo(event1).subscribe(function (data) {
            _this.userForm.controls['flag_128'].setValue(data['path'].flag_128);
            _this.userForm.controls['flag_27'].setValue(data['path'].flag_128);
            _this.userForm.controls['countryLogo'].setValue(data['path'].flag_128);
            //  this.profile_image = data.data.url;
            _this.msg = 'Uploded successfully';
        }, function (error) {
            console.log('error');
        });
    };
    CountryaddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-countryadd',
            template: __webpack_require__(/*! ./countryadd.component.html */ "./src/app/country/countryadd/countryadd.component.html"),
            styles: [__webpack_require__(/*! ./countryadd.component.scss */ "./src/app/country/countryadd/countryadd.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_country_service__WEBPACK_IMPORTED_MODULE_7__["CountryService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _agm_core__WEBPACK_IMPORTED_MODULE_5__["MapsAPILoader"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], CountryaddComponent);
    return CountryaddComponent;
}());



/***/ }),

/***/ "./src/app/country/countryedit/countryedit.component.html":
/*!****************************************************************!*\
  !*** ./src/app/country/countryedit/countryedit.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n      <div class=\"col-12\">\n        <div class=\"page-title\">\n    \n            <div class=\"pull-left\">\n                <!-- PAGE HEADING TAG - START -->\n    \n                <h1 class=\"title\">Edit Country</h1>\n                <!-- PAGE HEADING TAG - END -->\n            </div>\n    \n            <div class=\"pull-right hidden-xs\">\n                <ol class=\"breadcrumb\">\n                    <li>\n                        <a routerLink=\"/\">\n                            <i class=\"fa fa-home\"></i>Home</a>\n                    </li>\n                    <li>\n                        <a routerLink=\"/country\">\n                            <i class=\"fa fa-list-ol\"></i>Country Lists</a>\n                    </li>\n                    <li class=\"active\">\n                        <strong>Add Country</strong>\n                    </li>\n    \n                </ol>\n            </div>\n    \n        </div>\n     \n    </div>\n    \n      <div class=\"col-12\">\n          <div class=\"page-title\">\n\n              <div class=\"float-left\">\n                  <!-- PAGE HEADING TAG - START -->\n            \n              </div>\n              <div class=\"float-right\">\n                 <!-- <a [routerLink]=\"['add-subadmin']\"> <i class=\"fa fa-plus\"></i>Dashboard </a>-->\n\n              </div>\n\n          </div>\n      </div>\n      <div class=\"clearfix\"></div>\n      <!-- MAIN CONTENT AREA STARTS -->\n    \n      <div class=\"col-xl-12\">\n            <section class=\"box \">\n                  <div class=\"content-body \">\n                    <div class=\"row\">\n                        <div class=\"col-12\">\n                          <div class=\"container\">\n                            <form [formGroup]=\"userForm\" (submit)=\"saveUser()\">\n                                 \n                                <div  class=\"form-group row\">\n                                      <div class=\"col-sm-3\">\n                                          <label class=\"mt-2\" for=\"countryName\"><strong>Country Name*</strong></label>\n                                      </div>\n                                      <div  class=\"col-sm-9\">\n                                        <ng4geo-autocomplete (componentCallback)=\"autoCompleteCallback1($event)\" ></ng4geo-autocomplete>\n                                        <input type=\"hidden\" formControlName=\"countryName\" name=\"countryName\" id=\"address\">\n                                        <input type=\"hidden\" formControlName=\"latitude\" name=\"lat\" id=\"lat\" >\n                                        <input type=\"hidden\" formControlName=\"longitude\" name=\"lng\" id=\"lng\" >  </div>\n                                  </div>\n  \n                                  \n                        \n                                  <div  class=\"form-group row\">\n                                      <div class=\"col-sm-3\">\n                                          <label class=\"mt-2\" for=\"countryCode\"><strong>Country Code*</strong></label>\n                                      </div>\n                                      <div  class=\"col-sm-9\">\n                                          <input type=\"text\" formControlName=\"countryCode\"  class=\"form-control\" max=\"40\" id=\"countryCode\"  placeholder=\"Country Code\" />  <br>\n                                         \n                                     </div>\n                                  </div>\n                                  <div  class=\"form-group row\">\n                                      <div class=\"col-sm-3\">\n                                          <label class=\"mt-2\" for=\"capital\"><strong>Capital</strong></label>\n                                      </div>\n                                      <div  class=\"col-sm-9\">\n                                          <input type=\"text\" formControlName=\"capital\"  class=\"form-control\" max=\"100\" id=\"capital\"  placeholder=\"Country Code\" />  <br>\n                                         \n                                     </div>\n                                  </div>\n                                  <div  class=\"form-group row\">\n                                      <div class=\"col-sm-3\">\n                                          <label class=\"mt-2\" for=\"name_official\"><strong>Office address</strong></label>\n                                      </div>\n                                      <div  class=\"col-sm-9\">\n                                          <input type=\"text\" formControlName=\"name_official\"  class=\"form-control\" max=\"100\" id=\"name_official\"  placeholder=\"Office address\" />  <br>\n                                         \n                                     </div>\n                                  </div>\n                                  <div  class=\"form-group row\">\n                                      <div class=\"col-sm-3\">\n                                          <label class=\"mt-2\" for=\"dialCode\"><strong>Dial Code</strong></label>\n                                      </div>\n                                      <div  class=\"col-sm-9\">\n                                          <input type=\"text\" formControlName=\"dialCode\"  class=\"form-control\" max=\"100\" id=\"dialCode\"  placeholder=\"Dial Code\" />  <br>\n                                         \n                                     </div>\n                                  </div>\n                                  <div  class=\"form-group row\">\n                                      <div class=\"col-sm-3\">\n                                          <label class=\"mt-2\" for=\"countryStatus\"><strong>Status*</strong></label>\n                                      </div>\n                                      <div  class=\"col-sm-9\">\n                                            <select id=\"countryStatus\" formControlName=\"countryStatus\" class=\"form-control\" >\n                                                    <option *ngFor=\"let s of allstatus\" [ngValue]=\"s.value\">{{ s.name }}</option>\n                                            </select>\n                                          \n                                      </div>\n                                   </div>\n  \n                                   <div  class=\"form-group row\">\n                                      <div class=\"col-sm-3\">\n                                          <label class=\"mt-2\" for=\"name\"><strong>Country Logo*</strong></label>\n                                      </div>\n                                      <div  class=\"col-sm-9\">\n                                          <label for=\"fileToUpload\">\n                                             <input type=\"File\" class=\"form-control\" name=\"fileToUpload\" id=\"fileToUpload\" (change)=\"myUploaderNew($event)\">\n                                            <input type=\"hidden\" formControlName=\"flag_27\" id=\"flag_27\" >\n                                           </label>\n                                          <div style=\"color:green;\">{{msg}}</div>\n                                      </div>\n                                   </div>\n\n                                 <!--  <div  class=\"form-group row\">\n                                      <div class=\"col-sm-3\">\n                                          <label class=\"mt-2\" for=\"name\"><strong>Country Logo*</strong></label>\n                                      </div>\n                                      <div  class=\"col-sm-9\">\n                                          <div class=\"drop-container\" ngFileDrop [options]=\"options\" (uploadOutput)=\"onUploadOutput($event)\" [uploadInput]=\"uploadInput\" [ngClass]=\"{ 'is-drop-over': dragOver }\">\n                                           <p-fileUpload  customUpload=\"true\"\n                                          accept=\"image/*\" (uploadHandler)=\"myUploader($event)\"></p-fileUpload>\n                                        </div>\n                                        \n                                          <div style=\"color:green;\"></div>\n                                          \n                                       </div>\n                                   </div> -->\n                        \n                                   <div  class=\"form-group row\">\n                                      <div class=\"col-sm-3\">\n                                          <label class=\"mt-2\" for=\"name\"><strong></strong></label>\n                                      </div>\n                                      <div  class=\"col-sm-9\">\n                                          <button type=\"submit\"  class=\"btn btn-primary btn-block\">Add User</button>\n                                      </div>\n                                  </div>    \n                                 \n                              </form>\n                    \n                           \n                           </div>\n                        </div>\n                    </div>\n                </div>\n            </section>\n        </div>\n\n\n\n\n\n\n    "

/***/ }),

/***/ "./src/app/country/countryedit/countryedit.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/country/countryedit/countryedit.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  width: 700px; }\n"

/***/ }),

/***/ "./src/app/country/countryedit/countryedit.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/country/countryedit/countryedit.component.ts ***!
  \**************************************************************/
/*! exports provided: CountryeditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryeditComponent", function() { return CountryeditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_uploader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-uploader */ "./node_modules/ngx-uploader/fesm5/ngx-uploader.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _services_country_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/country.service */ "./src/app/services/country.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CountryeditComponent = /** @class */ (function () {
    function CountryeditComponent(formBuilder, route, service, toastr, _router, http, mapsAPILoader, ngZone) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.route = route;
        this.service = service;
        this.toastr = toastr;
        this._router = _router;
        this.http = http;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.msg = null;
        this.lat = '';
        this.lng = '';
        this.countryName = '';
        this.allstatus = [{ 'name': '--Select--', 'value': '' }, { 'name': 'Active', 'value': 'active' },
            { 'name': 'InActive', 'value': 'inactive' }];
        this.default = '';
        this.route.params.subscribe(function (params) {
            _this.countryid = params['driverid'];
            console.log(_this.countryid);
            _this.options = { concurrency: 1, maxUploads: 3 };
            _this.files = []; // local uploading files array
            _this.uploadInput = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // input events, we use this to emit data to ngx-uploader
            _this.humanizeBytes = ngx_uploader__WEBPACK_IMPORTED_MODULE_3__["humanizeBytes"];
        });
        this.userForm = this.formBuilder.group({
            'id': [this.countryid, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'countryCode': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'countryName': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'capital': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'latitude': ['',],
            'longitude': ['',],
            'latlng': ['',],
            'timezones': ['',],
            'dialCode': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'flag_128': ['',],
            'flag_32': ['',],
            'name_official': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'countryStatus': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'countryLogo': ['',],
            'flag_27': ['',]
        });
        this.userForm.controls['countryStatus'].setValue(this.default, { onlySelf: true });
    }
    CountryeditComponent.prototype.saveUser = function () {
        var _this = this;
        console.log(this.userForm.value);
        if (this.userForm.value.countryName == '') {
            this.toastr.error('Usr name is required');
        }
        if (this.userForm.dirty && this.userForm.valid) {
            var query = "/" + this.userForm.value.id;
            this.service.updateCountries(this.userForm.value, query).subscribe(function (data) {
                console.log(data);
                _this.toastr.success('Country updated Successfully');
                _this._router.navigate(['/country']);
            }, function (error) {
                console.log('error');
            });
        }
    };
    CountryeditComponent.prototype.autoCompleteCallback1 = function (data) {
        console.log(data);
        if (data.data.formatted_address == '') {
            this.countryName = "";
        }
        else {
            this.countryName = data.data.formatted_address;
        }
        this.lat = JSON.stringify(data.data.geometry['location'].lat);
        this.lng = JSON.stringify(data.data.geometry['location'].lng);
        this.userForm.controls['countryName'].setValue(this.countryName);
        this.userForm.controls['latitude'].setValue(this.lat);
        this.userForm.controls['longitude'].setValue(this.lng);
        this.userForm.controls['latlng'].setValue([this.lat, this.lng]);
        console.log(this.countryName);
        console.log(this.lat);
        console.log(this.lng);
    };
    CountryeditComponent.prototype.ngOnInit = function () {
        this.getCountries();
    };
    CountryeditComponent.prototype.myUploaderNew = function (event1) {
        var _this = this;
        this.service.uploadLogo(event1).subscribe(function (data) {
            _this.userForm.controls['flag_128'].setValue(data['path'].flag_128);
            _this.userForm.controls['flag_27'].setValue(data['path'].flag_128);
            _this.userForm.controls['countryLogo'].setValue(data['path'].flag_128);
            //  this.profile_image = data.data.url;
            _this.msg = 'Uploded successfully';
        }, function (error) {
            console.log('error');
        });
    };
    CountryeditComponent.prototype.getCountries = function () {
        var _this = this;
        var query = "/" + this.countryid;
        this.service.getCountries(query).subscribe(function (res) {
            console.log(res);
            _this.Countries = res['countries'];
            _this.userForm.controls['id'].setValue(_this.Countries.id, { onlySelf: true });
            _this.userForm.controls['countryCode'].setValue(_this.Countries.countryCode, { onlySelf: true });
            _this.userForm.controls['countryName'].setValue(_this.Countries.countryName, { onlySelf: true });
            _this.userForm.controls['capital'].setValue(_this.Countries.capital, { onlySelf: true });
            _this.userForm.controls['latitude'].setValue(_this.Countries.latitude, { onlySelf: true });
            _this.userForm.controls['longitude'].setValue(_this.Countries.longitude, { onlySelf: true });
            _this.userForm.controls['dialCode'].setValue(_this.Countries.dialCode, { onlySelf: true });
            _this.userForm.controls['countryStatus'].setValue(_this.Countries.countryStatus, { onlySelf: true });
            _this.userForm.controls['countryLogo'].setValue(_this.Countries.flag_128, { onlySelf: true });
            _this.userForm.controls['name_official'].setValue(_this.Countries.name_official, { onlySelf: true });
        });
    };
    CountryeditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-countryedit',
            template: __webpack_require__(/*! ./countryedit.component.html */ "./src/app/country/countryedit/countryedit.component.html"),
            styles: [__webpack_require__(/*! ./countryedit.component.scss */ "./src/app/country/countryedit/countryedit.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_country_service__WEBPACK_IMPORTED_MODULE_7__["CountryService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _agm_core__WEBPACK_IMPORTED_MODULE_5__["MapsAPILoader"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], CountryeditComponent);
    return CountryeditComponent;
}());



/***/ }),

/***/ "./src/app/country/countryinfo/countryinfo.component.html":
/*!****************************************************************!*\
  !*** ./src/app/country/countryinfo/countryinfo.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n      <div class=\"col-12\">\n        <div class=\"page-title\">\n    \n            <div class=\"pull-left\">\n                <!-- PAGE HEADING TAG - START -->\n    \n                <h1 class=\"title\">Manage Country Lists</h1>\n                <!-- PAGE HEADING TAG - END -->\n            </div>\n    \n            <div class=\"pull-right hidden-xs\">\n                <ol class=\"breadcrumb\">\n                    <li>\n                        <a routerLink=\"/\">\n                            <i class=\"fa fa-home\"></i>Home</a>\n                    </li>\n                    <li class=\"active\">\n                        <strong>Country Lists</strong>\n                    </li>\n    \n                </ol>\n            </div>\n    \n        </div>\n        <div class=\"custum-links\" style=\"position: absolute; right: 15px; z-index: 1\">\n            <a routerLink=\"/country/add-country\" style=\"font-weight: bold;\">\n                <i class=\"fa fa-plus\"></i> Add Country </a> &nbsp;\n           \n        </div>\n    </div>\n    \n      <div class=\"col-12\">\n          <div class=\"page-title\">\n\n              <div class=\"float-left\">\n                  <!-- PAGE HEADING TAG - START -->\n            \n              </div>\n              <div class=\"float-right\">\n                 <!-- <a [routerLink]=\"['add-subadmin']\"> <i class=\"fa fa-plus\"></i>Dashboard </a>-->\n\n              </div>\n\n          </div>\n      </div>\n      <div class=\"clearfix\"></div>\n      <!-- MAIN CONTENT AREA STARTS -->\n\n      <div class=\"col-xl-12\">\n          <section class=\"box \">\n                <div class=\"content-body \">\n                  <div class=\"row\">\n                      <div class=\"col-12\">\n                        <div class=\"container\" style=\"margin-left: 0;max-width: 1299px;\">\n\n                          <div class=\"pagination-data\" style=\"overflow: scroll;height:600px;min-height:600px;\">\n  \n                          <table id=\"example-11\" class=\"display table table-bordered table-hover table-condensed dataTable no-footer\" cellspacing=\"0\" width=\"100%\">\n                              <thead>\n                                  <tr>\n                                    <th>S.No.</th>\n                                    <th> Country Name </th>\n                                    <th> Country Code </th>\n                                    <th> Country Logo </th>\n                                    <th> Country Status </th>\n                                    <th> Capital </th>\n                                    <th> Created At</th>\n                                    <th> DialCode </th>\n                                    <th>Action</th>\n                                  </tr>\n                              </thead>\n                              <tbody>\n                                <tr *ngFor=\"let conlist of Countries; let i=index\" class=\"ng-scope\">\n                                      <td class=\"ng-binding\"> {{i+1}} </td>\n                                      <td class=\"ng-binding\"> {{conlist.countryName}} </td>\n                                      <td class=\"ng-binding\"> {{conlist.countryCode}} </td>\n                                      <td class=\"ng-binding\"> {{conlist.countryLogo}} </td>\n                                      <td class=\"ng-binding\">  {{conlist.countryStatus}} </td>\n                                      <td class=\"ng-binding\"> {{conlist.capital}} </td>\n                                      <td class=\"ng-binding\"> {{conlist.createdAt}} </td>\n                                      <td class=\"ng-binding\"> {{conlist.dialCode}} </td>\n                                      <td style=\"min-width:120px;\">\n                                          <i class=\"fa fa-trash ng-pristine text-danger ng-untouched ng-valid ng-empty\" ng-model=\"_id\" data-toggle=\"modal\" data-target=\"#myModal-delete\" aria-hidden=\"true\" title=\"Delete user\" (click)=\"deleteCountries(conlist._id)\"></i> &nbsp;\n\n                                          <a [routerLink]=\"['edit-country', conlist._id]\">\n                                              <i class=\"fa fa-eye text-primary\" aria-hidden=\"true\" title=\"view user\"></i>\n                                          </a> &nbsp; <a [routerLink]=\"['edit-country', conlist._id]\">\n                                              <i class=\"fa fa-edit text-success\" aria-hidden=\"true\" title=\"edit user\"></i>\n                                          </a>\n                                      </td>\n                                  </tr>\n\n                              </tbody>\n                          </table>\n                          <!-- ********************************************** -->\n                          </div>\n                         </div>\n                      </div>\n                  </div>\n              </div>\n          </section>\n      </div>\n\n\n\n\n\n\n    "

/***/ }),

/***/ "./src/app/country/countryinfo/countryinfo.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/country/countryinfo/countryinfo.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/country/countryinfo/countryinfo.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/country/countryinfo/countryinfo.component.ts ***!
  \**************************************************************/
/*! exports provided: CountryinfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryinfoComponent", function() { return CountryinfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_country_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/country.service */ "./src/app/services/country.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CountryinfoComponent = /** @class */ (function () {
    function CountryinfoComponent(service, toastr) {
        this.service = service;
        this.toastr = toastr;
    }
    CountryinfoComponent.prototype.ngOnInit = function () {
        this.getCountries();
    };
    CountryinfoComponent.prototype.getCountries = function () {
        var _this = this;
        this.service.getCountries().subscribe(function (res) {
            _this.Countries = res['countries'];
        });
    };
    CountryinfoComponent.prototype.deleteCountries = function (id) {
        var _this = this;
        var query = '/' + id;
        this.service.deleteCountries(query).subscribe(function (res) {
            _this.toastr.success('State deleted Successfully');
            _this.getCountries();
        });
    };
    CountryinfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-countryinfo',
            template: __webpack_require__(/*! ./countryinfo.component.html */ "./src/app/country/countryinfo/countryinfo.component.html"),
            styles: [__webpack_require__(/*! ./countryinfo.component.scss */ "./src/app/country/countryinfo/countryinfo.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_country_service__WEBPACK_IMPORTED_MODULE_1__["CountryService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], CountryinfoComponent);
    return CountryinfoComponent;
}());



/***/ }),

/***/ "./src/app/services/config.ts":
/*!************************************!*\
  !*** ./src/app/services/config.ts ***!
  \************************************/
/*! exports provided: Config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Config", function() { return Config; });
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");

var Config = /** @class */ (function () {
    function Config() {
        this.headerOptions = {
            headers: new _angular_http__WEBPACK_IMPORTED_MODULE_0__["Headers"]({
                'Content-Type': 'application/json'
            })
        };
    }
    return Config;
}());



/***/ }),

/***/ "./src/app/services/country.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/country.service.ts ***!
  \*********************************************/
/*! exports provided: CountryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryService", function() { return CountryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/config */ "./src/app/services/config.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CountryService = /** @class */ (function () {
    function CountryService(http) {
        this.http = http;
        this.config = new _services_config__WEBPACK_IMPORTED_MODULE_4__["Config"];
    }
    CountryService.prototype.getCountries = function (query) {
        if (query === void 0) { query = ""; }
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].APIURL + '/countries' + query;
        return this
            .http
            .get(uri);
    };
    CountryService.prototype.addCountries = function (data) {
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].APIURL + '/countries';
        return this
            .http
            .post(uri, data);
    };
    CountryService.prototype.updateCountries = function (data, query) {
        if (query === void 0) { query = ""; }
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].APIURL + '/countries' + query;
        return this
            .http
            .put(uri, data);
    };
    CountryService.prototype.deleteCountries = function (query) {
        if (query === void 0) { query = ""; }
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].APIURL + '/countries' + query;
        return this
            .http
            .delete(uri);
    };
    /* uplodpic(event) {
       console.log(event)
          const uri = env.APIURL +'/users/images';
         const fileList: FileList = event.files;
         if (fileList.length > 0) {
             const file = fileList[0];
     
             const formData = new FormData();
             formData.append('flag_128', file, file.name);
             return this
             .http
             .post(uri, formData)
             .map((res: Response) => {
                 return res.json();
             })
             .catch((error: Response) => {
                 error = error.json();
                 return Observable.throw(error);
             });
            
         }
     }*/
    CountryService.prototype.uploadLogo = function (event) {
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].APIURL + '/users/images';
        var fileList = event.target.files;
        var file = fileList[0];
        var formData = new FormData();
        formData.append('flag_128', file, file.name);
        return this
            .http
            .post(uri, formData);
    };
    CountryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], CountryService);
    return CountryService;
}());



/***/ })

}]);
//# sourceMappingURL=country-module.js.map