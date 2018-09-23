(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["drivers-module"],{

/***/ "./src/app/drivers/drivers.module.ts":
/*!*******************************************!*\
  !*** ./src/app/drivers/drivers.module.ts ***!
  \*******************************************/
/*! exports provided: DriversModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriversModule", function() { return DriversModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _driversinfo_driversinfo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./driversinfo/driversinfo.component */ "./src/app/drivers/driversinfo/driversinfo.component.ts");
/* harmony import */ var _driversadd_driversadd_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./driversadd/driversadd.component */ "./src/app/drivers/driversadd/driversadd.component.ts");
/* harmony import */ var _driversedit_driversedit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./driversedit/driversedit.component */ "./src/app/drivers/driversedit/driversedit.component.ts");
/* harmony import */ var _driversview_driversview_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./driversview/driversview.component */ "./src/app/drivers/driversview/driversview.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _theme_layouts_layout_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../theme/layouts/layout.module */ "./src/app/theme/layouts/layout.module.ts");
/* harmony import */ var _theme_pages_default_default_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../theme/pages/default/default.component */ "./src/app/theme/pages/default/default.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var ngx_uploader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-uploader */ "./node_modules/ngx-uploader/fesm5/ngx-uploader.js");
/* harmony import */ var primeng_components_fileupload_fileupload__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/components/fileupload/fileupload */ "./node_modules/primeng/components/fileupload/fileupload.js");
/* harmony import */ var primeng_components_fileupload_fileupload__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(primeng_components_fileupload_fileupload__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var ng2_pagination__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng2-pagination */ "./node_modules/ng2-pagination/index.js");
/* harmony import */ var ng2_pagination__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(ng2_pagination__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var ng4_geoautocomplete__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng4-geoautocomplete */ "./node_modules/ng4-geoautocomplete/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var routes = [
    {
        'path': '',
        'component': _theme_pages_default_default_component__WEBPACK_IMPORTED_MODULE_8__["DefaultComponent"],
        'children': [
            {
                'path': '',
                'component': _driversinfo_driversinfo_component__WEBPACK_IMPORTED_MODULE_2__["DriversinfoComponent"],
            },
            {
                'path': 'edit-driver/:driverid',
                'component': _driversedit_driversedit_component__WEBPACK_IMPORTED_MODULE_4__["DriverseditComponent"],
            },
            {
                'path': 'add-driver',
                'component': _driversadd_driversadd_component__WEBPACK_IMPORTED_MODULE_3__["DriversaddComponent"],
            },
            {
                'path': 'view-driver/:driverid',
                'component': _driversview_driversview_component__WEBPACK_IMPORTED_MODULE_5__["DriversviewComponent"],
            }
        ],
    },
];
var DriversModule = /** @class */ (function () {
    function DriversModule() {
    }
    DriversModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_14__["AgmCoreModule"].forRoot({
                    apiKey: "AIzaSyAp5vIeGvze_ZWYwee-fVE3JS3LYnREZP0",
                    libraries: ["places"]
                }),
                ngx_toastr__WEBPACK_IMPORTED_MODULE_17__["ToastrModule"].forRoot(),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"].forRoot(),
                ng4_geoautocomplete__WEBPACK_IMPORTED_MODULE_16__["Ng4GeoautocompleteModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes),
                _theme_layouts_layout_module__WEBPACK_IMPORTED_MODULE_7__["LayoutModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                ngx_uploader__WEBPACK_IMPORTED_MODULE_11__["NgxUploaderModule"],
                ng2_pagination__WEBPACK_IMPORTED_MODULE_13__["Ng2PaginationModule"],
                primeng_components_fileupload_fileupload__WEBPACK_IMPORTED_MODULE_12__["FileUploadModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_15__["ScheduleModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_15__["CalendarModule"]
            ],
            declarations: [_driversinfo_driversinfo_component__WEBPACK_IMPORTED_MODULE_2__["DriversinfoComponent"], _driversadd_driversadd_component__WEBPACK_IMPORTED_MODULE_3__["DriversaddComponent"], _driversedit_driversedit_component__WEBPACK_IMPORTED_MODULE_4__["DriverseditComponent"], _driversview_driversview_component__WEBPACK_IMPORTED_MODULE_5__["DriversviewComponent"]]
        })
    ], DriversModule);
    return DriversModule;
}());



/***/ }),

/***/ "./src/app/drivers/driversadd/driversadd.component.html":
/*!**************************************************************!*\
  !*** ./src/app/drivers/driversadd/driversadd.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n      <div class=\"col-12\">\n          <div class=\"page-title\">\n      \n              <div class=\"pull-left\">\n                  <!-- PAGE HEADING TAG - START -->\n      \n                  <h1 class=\"title\">Add Driver</h1>\n                  <!-- PAGE HEADING TAG - END -->\n              </div>\n      \n              <div class=\"pull-right hidden-xs\">\n                  <ol class=\"breadcrumb\">\n                      <li>\n                          <a routerLink=\"/\">\n                              <i class=\"fa fa-home\"></i>Home</a>\n                      </li>\n                      <li>\n                          <a routerLink=\"/driver\">\n                              <i class=\"fa fa-list-ol\"></i>Driver</a>\n                      </li>\n                      <li class=\"active\">\n                          <strong>Add Driver</strong>\n                      </li>\n      \n                  </ol>\n              </div>\n      \n          </div>\n         \n      </div>\n      \n        <div class=\"col-12\">\n            <div class=\"page-title\">\n  \n                <div class=\"float-left\">\n                    <!-- PAGE HEADING TAG - START -->\n              \n                </div>\n                <div class=\"float-right\">\n                   <!-- <a [routerLink]=\"['add-subadmin']\"> <i class=\"fa fa-plus\"></i>Dashboard </a>-->\n  \n                </div>\n  \n            </div>\n        </div>\n        <div class=\"clearfix\"></div>\n        <!-- MAIN CONTENT AREA STARTS -->\n  \n        <div class=\"col-xl-12\">\n            <section class=\"box \">\n                  <div class=\"content-body \">\n                    <div class=\"row\">\n                        <div class=\"col-12\">\n                          <div class=\"container\">\n                            <form [formGroup]=\"userForm\" (submit)=\"saveUser()\">\n                                 \n                                  <div  class=\"form-group row\">\n                                      <div class=\"col-sm-3\">\n                                          <label class=\"mt-2\" for=\"userFirstName\"><strong>First Name*</strong></label>\n                                      </div>\n                                      <div  class=\"col-sm-9\">\n                                          <input  type=\"text\" formControlName=\"userFirstName\" class=\"form-control\" id=\"userFirstName\" maxlength=\"40\" placeholder=\"First Name\"/> \n                                      </div>\n                                  </div>\n  \n                                  <div  class=\"form-group row\">\n                                      <div class=\"col-sm-3\">\n                                          <label class=\"mt-2\" for=\"userLastName\"><strong>Last Name*</strong></label>\n                                      </div>\n                                      <div  class=\"col-sm-9\">\n                                          <input  type=\"text\" formControlName=\"userLastName\" class=\"form-control\" id=\"userLastName\" maxlength=\"40\" placeholder=\"Last Name\"/> \n                                      </div>\n                                  </div>\n                                 \n                                   <div  class=\"form-group row\">\n                                      <div class=\"col-sm-3\">\n                                          <label class=\"mt-2\" for=\"userEmail\"><strong>Email</strong></label>\n                                      </div>\n                                      <div  class=\"col-sm-9\">\n                                          <input type=\"text\" formControlName=\"userEmail\"  class=\"form-control\" max=\"40\" id=\"userEmail\" placeholder=\"Email\"/>  <br>\n                                         \n                                     </div>\n                                  </div>\n                                  \n                                  <div  class=\"form-group row\">\n                                      <div class=\"col-sm-3\">\n                                          <label class=\"mt-2\" for=\"gender\"><strong>Gender*</strong></label>\n                                      </div>\n                                      <div  class=\"col-sm-9\">\n                                        <select id=\"gender\" formControlName=\"gender\" class=\"form-control\" >\n                                            <option *ngFor=\"let s of gender\" [ngValue]=\"s.value\">{{ s.name }}</option>\n                                         </select>\n                                      </div>\n                                  </div>\n\n                                  <div  class=\"form-group row\">\n                                      <div class=\"col-sm-3\">\n                                          <label class=\"mt-2\" for=\"userPhone\"><strong>Mobile No*</strong></label>\n                                      </div>\n                                      <div  class=\"col-sm-9\">\n                                          \n                                          <input type=\"text\" formControlName=\"userPhone\" class=\"form-control phone_number\" maxlength=\"10\" id=\"userPhone\" name=\"phoneNumber\" placeholder=\"Phone Number\" />\n                                        \n                                      </div>\n                                  </div>\n                                 \n                                  <div  class=\"form-group row\">\n                                      <div class=\"col-sm-3\">\n                                          <label class=\"mt-2\" for=\"userPassword\"><strong>Password*</strong></label>\n                                      </div>\n                                      <div  class=\"col-sm-9\">\n                                          <input type=\"password\" formControlName=\"userPassword\"  class=\"form-control\" max=\"40\" id=\"userPassword\" placeholder=\"Password\" />  <br>\n                                         \n                                     </div>\n                                  </div>\n                                  <div  class=\"form-group row\">\n                                      <div class=\"col-sm-3\">\n                                          <label class=\"mt-2\" for=\"confirmpassword\"><strong>Confirm Password*</strong></label>\n                                      </div>\n                                      <div  class=\"col-sm-9\">\n                                          <input type=\"password\"  class=\"form-control\" max=\"40\" id=\"confirmpassword\"  placeholder=\"Confirm Password\" />  <br>\n                                        \n                                     </div>\n                                  </div>\n                        \n                                  <div  class=\"form-group row\">\n                                      <div class=\"col-sm-3\">\n                                          <label class=\"mt-2\" for=\"country\"><strong>Country*</strong></label>\n                                      </div>\n                                      <div  class=\"col-sm-9\">\n                                        <select id=\"country\" formControlName=\"country\"  (change)=\"getStates()\" class=\"form-control\" >\n                                            <option>--Select--</option>\n                                            <option *ngFor=\"let s of Countries\" [ngValue]=\"s._id\">{{ s.countryName }}</option>\n                                        </select> \n                                     </div>\n                                  </div>\n\n\n                                  <div  class=\"form-group row\">\n                                    <div class=\"col-sm-3\">\n                                        <label class=\"mt-2\" for=\"state\"><strong>State Name*</strong></label>\n                                    </div>\n                                    <div  class=\"col-sm-9\">\n                                        <select id=\"state\" formControlName=\"state\"  (change)=\"getCities()\" class=\"form-control\" >\n                                          <option>--Select--</option>\n                                          <option *ngFor=\"let s of States\" [ngValue]=\"s._id\"> {{ s.stateName }} </option>\n                                        </select> \n                                     </div>\n                                  </div>\n\n                                  <div  class=\"form-group row\">\n                                    <div class=\"col-sm-3\">\n                                        <label class=\"mt-2\" for=\"city\"><strong>City Name*</strong></label>\n                                    </div>\n                                    <div  class=\"col-sm-9\">\n                                        <select id=\"city\" formControlName=\"city\"   class=\"form-control\" >\n                                          <option>--Select--</option>\n                                          <option *ngFor=\"let s of Cities\" [ngValue]=\"s._id\"> {{ s.cityName }} </option>\n                                        </select> \n                                     </div>\n                                  </div>\n\n\n                                  <div  class=\"form-group row\">\n                                    <div class=\"col-sm-3\">\n                                        <label class=\"mt-2\" for=\"driverLicence\"><strong>Driver Licence*</strong></label>\n                                    </div>\n                                    <div  class=\"col-sm-9\">\n                                        <input  type=\"text\" formControlName=\"driverLicence\" class=\"form-control\" id=\"driverLicence\" maxlength=\"40\" placeholder=\"Last Name\"/> \n                                    </div>\n                                 </div>\n                                  <div  class=\"form-group row\">\n                                    <div class=\"col-sm-3\">\n                                        <label class=\"mt-2\" for=\"userClassLicence\"><strong>User Class Licence*</strong></label>\n                                    </div>\n                                    <div  class=\"col-sm-9\">\n                                        <input  type=\"text\" formControlName=\"userClassLicence\" class=\"form-control\" id=\"userClassLicence\" maxlength=\"40\" placeholder=\"Last Name\"/> \n                                    </div>\n                                 </div>\n\n                                  <div  class=\"form-group row\">\n                                      <div class=\"col-sm-3\">\n                                          <label class=\"mt-2\" for=\"userAddress\"><strong>Address*</strong></label>\n                                      </div>\n                                      <div  class=\"col-sm-9\">\n                                          <ng4geo-autocomplete (componentCallback)=\"autoCompleteCallback1($event)\" ></ng4geo-autocomplete>\n                                          <input type=\"hidden\" formControlName=\"userAddress\" name=\"userAddress\" id=\"userAddress\">\n                                      </div>\n                                   </div>\n\n                                   <div  class=\"form-group row\">\n                                    <div class=\"col-sm-3\">\n                                        <label class=\"mt-2\" for=\"name\"><strong>Driver's image*</strong></label>\n                                    </div>\n                                    <div  class=\"col-sm-9\">\n                                        <label for=\"fileToUpload\">\n                                           <input type=\"File\" class=\"form-control\" name=\"fileToUpload\" id=\"fileToUpload\" (change)=\"myUploaderNew($event)\">\n                                          <input type=\"hidden\" formControlName=\"selfieImage\" id=\"selfieImage\" >\n                                         </label>\n                                        <div style=\"color:green;\">{{msg}}</div>\n                                    </div>\n                                 </div>\n                                  \n                        \n                                   <div  class=\"form-group row\">\n                                      <div class=\"col-sm-3\">\n                                          <label class=\"mt-2\" for=\"name\"><strong></strong></label>\n                                      </div>\n                                      <div  class=\"col-sm-9\">\n                                          <button type=\"submit\"  class=\"btn btn-primary btn-block\">Add Driver</button>\n                                      </div>\n                                  </div>    \n                                 \n                              </form>\n                    \n                           \n                           </div>\n                        </div>\n                    </div>\n                </div>\n            </section>\n        </div>\n  \n  \n  \n  \n  \n  \n      \n  \n  \n  \n  \n  "

/***/ }),

/***/ "./src/app/drivers/driversadd/driversadd.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/drivers/driversadd/driversadd.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  width: 700px; }\n"

/***/ }),

/***/ "./src/app/drivers/driversadd/driversadd.component.ts":
/*!************************************************************!*\
  !*** ./src/app/drivers/driversadd/driversadd.component.ts ***!
  \************************************************************/
/*! exports provided: DriversaddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriversaddComponent", function() { return DriversaddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_uploader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-uploader */ "./node_modules/ngx-uploader/fesm5/ngx-uploader.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_validation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/validation.service */ "./src/app/services/validation.service.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _services_drivers_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/drivers.service */ "./src/app/services/drivers.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _services_state_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/state.service */ "./src/app/services/state.service.ts");
/* harmony import */ var _services_country_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/country.service */ "./src/app/services/country.service.ts");
/* harmony import */ var _services_city_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/city.service */ "./src/app/services/city.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var DriversaddComponent = /** @class */ (function () {
    function DriversaddComponent(formBuilder, route, service, toastr, countryservice, stateservice, cityservice, _router, http, mapsAPILoader, ngZone) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.route = route;
        this.service = service;
        this.toastr = toastr;
        this.countryservice = countryservice;
        this.stateservice = stateservice;
        this.cityservice = cityservice;
        this._router = _router;
        this.http = http;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.msg = null;
        this.lat = '';
        this.lng = '';
        this.address = '';
        this.Countries = [{ 'countryName': '--Select--', '_id': '' }];
        this.States = [{ 'stateName': '--Select--', '_id': '' }];
        this.Cities = [{ 'cityName': '--Select--', '_id': '' }];
        this.gender = [{ 'name': '--Select--', 'value': '' }, { 'name': 'Male', 'value': 'Male' },
            { 'name': 'Female', 'value': 'Female' }];
        this.default = '';
        this.route.params.subscribe(function (params) {
            _this.driverid = params['driverid'];
            console.log(_this.driverid);
            _this.options = { concurrency: 1, maxUploads: 3 };
            _this.files = []; // local uploading files array
            _this.uploadInput = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // input events, we use this to emit data to ngx-uploader
            _this.humanizeBytes = ngx_uploader__WEBPACK_IMPORTED_MODULE_3__["humanizeBytes"];
        });
        this.userForm = this.formBuilder.group({
            "userFirstName": ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            "userLastName": ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            "userEmail": ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _services_validation_service__WEBPACK_IMPORTED_MODULE_5__["ValidationService"].emailValidator]],
            "userPhone": ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            "userRole": "Driver",
            "userPassword": ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            "country": ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            "state": ['',],
            "city": ['',],
            "gender": ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            "userAddress": ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            "driverLicence": ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            "userClassLicence": ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            "selfieImage": ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            "documentImage": ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.userForm.controls['country'].setValue(this.default, { onlySelf: true });
        this.userForm.controls['gender'].setValue(this.default, { onlySelf: true });
        this.userForm.controls['state'].setValue(this.default, { onlySelf: true });
    }
    DriversaddComponent.prototype.saveUser = function () {
        var _this = this;
        if (this.userForm.value.userFirstName == "") {
            this.toastr.error('Usr name is required');
            return false;
        }
        console.log(this.userForm.value);
        if (this.userForm.dirty && this.userForm.valid) {
            this.service.addDriver(this.userForm.value).subscribe(function (data) {
                console.log(data);
                _this.toastr.success('Driver added Successfully');
                _this._router.navigate(['/driver']);
            }, function (error) {
                console.log('error');
            });
        }
    };
    DriversaddComponent.prototype.autoCompleteCallback1 = function (data) {
        if (data.data.formatted_address == '') {
            this.address = "";
        }
        else {
            this.address = JSON.stringify(data.data.formatted_address);
        }
        this.userForm.controls['userAddress'].setValue(this.address);
    };
    DriversaddComponent.prototype.ngOnInit = function () {
        this.getCountries();
    };
    DriversaddComponent.prototype.myUploaderNew = function (event1) {
        var _this = this;
        this.service.uploadLogo(event1).subscribe(function (data) {
            console.log(data);
            _this.userForm.controls['selfieImage'].setValue(data['path'].selfieImage);
            _this.userForm.controls['documentImage'].setValue(data['path'].selfieImage);
            //  this.profile_image = data.data.url;
            _this.msg = 'Uploded successfully';
        }, function (error) {
            console.log('error');
        });
    };
    DriversaddComponent.prototype.getCountries = function () {
        var _this = this;
        this.countryservice.getCountries().subscribe(function (res) {
            _this.Countries = res['countries'];
        });
    };
    DriversaddComponent.prototype.getStates = function () {
        var _this = this;
        var cid = this.userForm.value.country;
        var query = '?country_id=' + cid;
        // let query = '?country_id='+'5b64792806ff811e1f06f0d0';
        this.stateservice.getStates(query).subscribe(function (res) {
            console.log(res);
            _this.States = res['states'];
        });
    };
    DriversaddComponent.prototype.getCities = function () {
        var _this = this;
        var cid = this.userForm.value.state;
        // let query = '?state_id=5b6479ab06ff811e1f06f110';
        var query = '?state_id=' + cid;
        this.cityservice.getCities(query).subscribe(function (res) {
            _this.Cities = res['cities'];
        });
    };
    DriversaddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-driversadd',
            template: __webpack_require__(/*! ./driversadd.component.html */ "./src/app/drivers/driversadd/driversadd.component.html"),
            styles: [__webpack_require__(/*! ./driversadd.component.scss */ "./src/app/drivers/driversadd/driversadd.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_drivers_service__WEBPACK_IMPORTED_MODULE_7__["DriversService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"],
            _services_country_service__WEBPACK_IMPORTED_MODULE_10__["CountryService"],
            _services_state_service__WEBPACK_IMPORTED_MODULE_9__["StateService"],
            _services_city_service__WEBPACK_IMPORTED_MODULE_11__["CityService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _agm_core__WEBPACK_IMPORTED_MODULE_6__["MapsAPILoader"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], DriversaddComponent);
    return DriversaddComponent;
}());



/***/ }),

/***/ "./src/app/drivers/driversedit/driversedit.component.html":
/*!****************************************************************!*\
  !*** ./src/app/drivers/driversedit/driversedit.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n      <div class=\"col-12\">\n        <div class=\"page-title\">\n    \n            <div class=\"pull-left\">\n                <!-- PAGE HEADING TAG - START -->\n    \n                <h1 class=\"title\">Edit Driver</h1>\n                <!-- PAGE HEADING TAG - END -->\n            </div>\n    \n            <div class=\"pull-right hidden-xs\">\n                <ol class=\"breadcrumb\">\n                    <li>\n                        <a routerLink=\"/\">\n                            <i class=\"fa fa-home\"></i>Home</a>\n                    </li>\n                    <li>\n                        <a routerLink=\"/driver\">\n                            <i class=\"fa fa-list-ol\"></i>Driver</a>\n                    </li>\n                    <li class=\"active\">\n                        <strong>Edit Driver</strong>\n                    </li>\n    \n                </ol>\n            </div>\n    \n        </div>\n       \n    </div>\n    \n      <div class=\"col-12\">\n          <div class=\"page-title\">\n\n              <div class=\"float-left\">\n                  <!-- PAGE HEADING TAG - START -->\n            \n              </div>\n              <div class=\"float-right\">\n                 <!-- <a [routerLink]=\"['add-subadmin']\"> <i class=\"fa fa-plus\"></i>Dashboard </a>-->\n\n              </div>\n\n          </div>\n      </div>\n      <div class=\"clearfix\"></div>\n      <!-- MAIN CONTENT AREA STARTS -->\n\n      <div class=\"col-xl-12\">\n          <section class=\"box \">\n                <div class=\"content-body \">\n                  <div class=\"row\">\n                      <div class=\"col-12\">\n                        <div class=\"container\">\n                         \n                                <form [formGroup]=\"userForm\" (submit)=\"updateDriver()\">\n                                 \n                                        <div  class=\"form-group row\">\n                                            <div class=\"col-sm-3\">\n                                                <label class=\"mt-2\" for=\"userFirstName\"><strong>First Name*</strong></label>\n                                            </div>\n                                            <div  class=\"col-sm-9\">\n                                                <input  type=\"text\" formControlName=\"userFirstName\" class=\"form-control\" id=\"userFirstName\" maxlength=\"40\" placeholder=\"First Name\"/> \n                                            </div>\n                                        </div>\n        \n                                        <div  class=\"form-group row\">\n                                            <div class=\"col-sm-3\">\n                                                <label class=\"mt-2\" for=\"userLastName\"><strong>Last Name*</strong></label>\n                                            </div>\n                                            <div  class=\"col-sm-9\">\n                                                <input  type=\"text\" formControlName=\"userLastName\" class=\"form-control\" id=\"userLastName\" maxlength=\"40\" placeholder=\"Last Name\"/> \n                                            </div>\n                                        </div>\n                                       \n                                         <div  class=\"form-group row\">\n                                            <div class=\"col-sm-3\">\n                                                <label class=\"mt-2\" for=\"userEmail\"><strong>Email</strong></label>\n                                            </div>\n                                            <div  class=\"col-sm-9\">\n                                                <input type=\"text\" formControlName=\"userEmail\"  class=\"form-control\" max=\"40\" id=\"userEmail\" placeholder=\"Email\"/>  <br>\n                                               \n                                           </div>\n                                        </div>\n                                        \n                                        <div  class=\"form-group row\">\n                                            <div class=\"col-sm-3\">\n                                                <label class=\"mt-2\" for=\"gender\"><strong>Gender*</strong></label>\n                                            </div>\n                                            <div  class=\"col-sm-9\">\n                                              <select id=\"gender\" formControlName=\"gender\" class=\"form-control\" >\n                                                  <option *ngFor=\"let s of gender\" [ngValue]=\"s.value\">{{ s.name }}</option>\n                                               </select>\n                                            </div>\n                                        </div>\n      \n                                        <div  class=\"form-group row\">\n                                            <div class=\"col-sm-3\">\n                                                <label class=\"mt-2\" for=\"userPhone\"><strong>Mobile No*</strong></label>\n                                            </div>\n                                            <div  class=\"col-sm-9\">\n                                                \n                                                <input type=\"text\" formControlName=\"userPhone\" class=\"form-control phone_number\" maxlength=\"10\" id=\"userPhone\" name=\"phoneNumber\" placeholder=\"Phone Number\" />\n                                              \n                                            </div>\n                                        </div>\n                                       \n                                        <div  class=\"form-group row\">\n                                            <div class=\"col-sm-3\">\n                                                <label class=\"mt-2\" for=\"userPassword\"><strong>Password*</strong></label>\n                                            </div>\n                                            <div  class=\"col-sm-9\">\n                                                <input type=\"password\" formControlName=\"userPassword\"  class=\"form-control\" max=\"40\" id=\"userPassword\" placeholder=\"Password\" />  <br>\n                                               \n                                           </div>\n                                        </div>\n                                        <div  class=\"form-group row\">\n                                            <div class=\"col-sm-3\">\n                                                <label class=\"mt-2\" for=\"confirmpassword\"><strong>Confirm Password*</strong></label>\n                                            </div>\n                                            <div  class=\"col-sm-9\">\n                                                <input type=\"password\"  class=\"form-control\" max=\"40\" id=\"confirmpassword\"  placeholder=\"Confirm Password\" />  <br>\n                                              \n                                           </div>\n                                        </div>\n                              \n                                        <div  class=\"form-group row\">\n                                            <div class=\"col-sm-3\">\n                                                <label class=\"mt-2\" for=\"country\"><strong>Country*</strong></label>\n                                            </div>\n                                            <div  class=\"col-sm-9\">\n                                              <select id=\"country\" formControlName=\"country\"  (change)=\"getStates()\" class=\"form-control\" >\n                                                  <option>--Select--</option>\n                                                  <option *ngFor=\"let cont of Countries\" [ngValue]=\"cont._id\">{{ cont.countryName }}</option>\n                                              </select> \n                                           </div>\n                                        </div>\n      \n      \n                                        <div  class=\"form-group row\">\n                                          <div class=\"col-sm-3\">\n                                              <label class=\"mt-2\" for=\"state\"><strong>State Name*</strong></label>\n                                          </div>\n                                          <div  class=\"col-sm-9\">\n                                              <select id=\"state\" formControlName=\"state\"  (change)=\"getCities()\" class=\"form-control\" >\n                                                <option>--Select--</option>\n                                                <option *ngFor=\"let s of States\" [ngValue]=\"s._id\"> {{ s.stateName }} </option>\n                                              </select> \n                                           </div>\n                                        </div>\n      \n                                        <div  class=\"form-group row\">\n                                          <div class=\"col-sm-3\">\n                                              <label class=\"mt-2\" for=\"city\"><strong>City Name*</strong></label>\n                                          </div>\n                                          <div  class=\"col-sm-9\">\n                                              <select id=\"city\" formControlName=\"city\"   class=\"form-control\" >\n                                                <option>--Select--</option>\n                                                <option *ngFor=\"let s of Cities\" [ngValue]=\"s._id\"> {{ s.cityName }} </option>\n                                              </select> \n                                           </div>\n                                        </div>\n      \n      \n                                        <div  class=\"form-group row\">\n                                          <div class=\"col-sm-3\">\n                                              <label class=\"mt-2\" for=\"driverLicence\"><strong>Driver Licence*</strong></label>\n                                          </div>\n                                          <div  class=\"col-sm-9\">\n                                              <input  type=\"text\" formControlName=\"driverLicence\" class=\"form-control\" id=\"driverLicence\" maxlength=\"40\" placeholder=\"Driver Licence\"/> \n                                          </div>\n                                       </div>\n                                        <div  class=\"form-group row\">\n                                          <div class=\"col-sm-3\">\n                                              <label class=\"mt-2\" for=\"userClassLicence\"><strong>User Class Licence*</strong></label>\n                                          </div>\n                                          <div  class=\"col-sm-9\">\n                                             \n                                              <input  type=\"text\" formControlName=\"userClassLicence\" class=\"form-control\" id=\"userClassLicence\" maxlength=\"40\" placeholder=\"User Class Licence\"/> \n                                          </div>\n                                       </div>\n      \n                                        <div  class=\"form-group row\">\n                                            <div class=\"col-sm-3\">\n                                                <label class=\"mt-2\" for=\"userAddress\"><strong>Address*</strong></label>\n                                            </div>\n                                            <div  class=\"col-sm-9\">\n                                                 <input type=\"text\" formControlName=\"userAddress\" class=\"form-control\" name=\"userAddress\" id=\"userAddress\">\n                                            </div>\n                                         </div>\n      \n                                         <div  class=\"form-group row\">\n                                          <div class=\"col-sm-3\">\n                                              <label class=\"mt-2\" for=\"name\"><strong>Driver's image*</strong></label>\n                                          </div>\n                                          <div  class=\"col-sm-9\">\n                                              <label for=\"fileToUpload\">\n                                                 <input type=\"File\" class=\"form-control\" name=\"fileToUpload\" id=\"fileToUpload\" (change)=\"myUploaderNew($event)\">\n                                                <input type=\"hidden\" formControlName=\"selfieImage\" id=\"selfieImage\" >\n                                               </label>\n                                              <div style=\"color:green;\">{{msg}}</div>\n                                          </div>\n                                       </div>\n                                        \n                              \n                                         <div  class=\"form-group row\">\n                                            <div class=\"col-sm-3\">\n                                                <label class=\"mt-2\" for=\"name\"><strong></strong></label>\n                                            </div>\n                                            <div  class=\"col-sm-9\">\n                                                <button type=\"submit\"  class=\"btn btn-primary btn-block\">Update Driver</button>\n                                            </div>\n                                        </div>    \n                                       \n                                    </form>\n\n                        \n                         </div>\n                      </div>\n                  </div>\n              </div>\n          </section>\n      </div>\n\n\n\n\n\n\n    \n\n\n\n\n"

/***/ }),

/***/ "./src/app/drivers/driversedit/driversedit.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/drivers/driversedit/driversedit.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  width: 700px; }\n"

/***/ }),

/***/ "./src/app/drivers/driversedit/driversedit.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/drivers/driversedit/driversedit.component.ts ***!
  \**************************************************************/
/*! exports provided: DriverseditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverseditComponent", function() { return DriverseditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_uploader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-uploader */ "./node_modules/ngx-uploader/fesm5/ngx-uploader.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_validation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/validation.service */ "./src/app/services/validation.service.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _services_drivers_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/drivers.service */ "./src/app/services/drivers.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _services_state_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/state.service */ "./src/app/services/state.service.ts");
/* harmony import */ var _services_country_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/country.service */ "./src/app/services/country.service.ts");
/* harmony import */ var _services_city_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/city.service */ "./src/app/services/city.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var DriverseditComponent = /** @class */ (function () {
    function DriverseditComponent(formBuilder, route, service, countryservice, stateservice, cityservice, toastr, _router, http, mapsAPILoader, ngZone) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.route = route;
        this.service = service;
        this.countryservice = countryservice;
        this.stateservice = stateservice;
        this.cityservice = cityservice;
        this.toastr = toastr;
        this._router = _router;
        this.http = http;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.msg = null;
        this.lat = '';
        this.lng = '';
        this.address = '';
        this.Countries = [{ 'countryName': '--Select--', '_id': '' }];
        this.States = [{ 'stateName': '--Select--', '_id': '' }];
        this.Cities = [{ 'cityName': '--Select--', '_id': '' }];
        this.gender = [{ 'name': '--Select--', 'value': '' }, { 'name': 'Male', 'value': 'Male' },
            { 'name': 'Female', 'value': 'Female' }];
        this.default = '';
        this.route.params.subscribe(function (params) {
            _this.driverid = params['driverid'];
            console.log(_this.driverid);
            _this.options = { concurrency: 1, maxUploads: 3 };
            _this.files = []; // local uploading files array
            _this.uploadInput = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // input events, we use this to emit data to ngx-uploader
            _this.humanizeBytes = ngx_uploader__WEBPACK_IMPORTED_MODULE_3__["humanizeBytes"];
        });
        this.userForm = this.formBuilder.group({
            "_id": [this.driverid, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            "userFirstName": ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            "userLastName": ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            "userEmail": ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _services_validation_service__WEBPACK_IMPORTED_MODULE_5__["ValidationService"].emailValidator]],
            "userPhone": ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            "userRole": "Driver",
            "userPassword": ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            "country": ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            "state": ['',],
            "city": ['',],
            "gender": ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            "userAddress": ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            "driverLicence": ['',],
            "userClassLicence": ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            "selfieImage": ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            "documentImage": ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.userForm.controls['country'].setValue(this.default, { onlySelf: true });
        this.userForm.controls['gender'].setValue(this.default, { onlySelf: true });
        this.userForm.controls['state'].setValue(this.default, { onlySelf: true });
    }
    DriverseditComponent.prototype.saveUser = function () {
        var _this = this;
        if (this.userForm.value.userFirstName == "") {
            this.toastr.error('Usr name is required');
            return false;
        }
        console.log(this.userForm.value);
        if (this.userForm.dirty && this.userForm.valid) {
            this.service.addDriver(this.userForm.value).subscribe(function (data) {
                console.log(data);
                _this.toastr.success('Driver added Successfully');
                _this._router.navigate(['/driver']);
            }, function (error) {
                console.log('error');
            });
        }
    };
    DriverseditComponent.prototype.autoCompleteCallback1 = function (data) {
        // alert(data)
        if (data.data.formatted_address == '') {
            this.address = "";
        }
        else {
            this.address = JSON.stringify(data.data.formatted_address);
        }
        this.userForm.controls['userAddress'].setValue(this.address);
    };
    DriverseditComponent.prototype.ngOnInit = function () {
        this.getDrivers();
        this.getCountries();
    };
    DriverseditComponent.prototype.myUploaderNew = function (event1) {
        var _this = this;
        this.service.uploadLogo(event1).subscribe(function (data) {
            console.log(data);
            _this.userForm.controls['selfieImage'].setValue(data['path'].selfieImage);
            _this.userForm.controls['documentImage'].setValue(data['path'].selfieImage);
            //  this.profile_image = data.data.url;
            _this.msg = 'Uploded successfully';
        }, function (error) {
            console.log('error');
        });
    };
    DriverseditComponent.prototype.getDrivers = function () {
        var _this = this;
        var query = '/' + this.driverid;
        this.service.getdDrivers(query).subscribe(function (res) {
            _this.Drivers = res['driver'].user;
            _this.getStates(_this.Drivers.country._id);
            _this.getCities(_this.Drivers.state._id);
            // console.log(res)
            console.log(_this.Drivers);
            _this.userForm.controls['_id'].setValue(_this.Drivers.id, { onlySelf: true });
            _this.userForm.controls['userFirstName'].setValue(_this.Drivers.userFirstName, { onlySelf: true });
            _this.userForm.controls['userLastName'].setValue(_this.Drivers.userLastName, { onlySelf: true });
            _this.userForm.controls['userEmail'].setValue(_this.Drivers.userEmail, { onlySelf: true });
            _this.userForm.controls['userPhone'].setValue(_this.Drivers.userPhone, { onlySelf: true });
            _this.userForm.controls['userRole'].setValue(_this.Drivers.userRole, { onlySelf: true });
            _this.userForm.controls['country'].setValue(_this.Drivers.country._id, { onlySelf: true });
            _this.userForm.controls['state'].setValue(_this.Drivers.state._id, { onlySelf: true });
            _this.userForm.controls['city'].setValue(_this.Drivers.city._id, { onlySelf: true });
            _this.userForm.controls['gender'].setValue(_this.Drivers.gender, { onlySelf: true });
            _this.userForm.controls['userAddress'].setValue(_this.Drivers.userAddress, { onlySelf: true });
            _this.userForm.controls['driverLicence'].setValue(res['driver'].driverLicence, { onlySelf: true });
            _this.userForm.controls['userClassLicence'].setValue(_this.Drivers.userClassLicence.className, { onlySelf: true });
            _this.userForm.controls['selfieImage'].setValue(_this.Drivers.selfieImage, { onlySelf: true });
            _this.userForm.controls['documentImage'].setValue(_this.Drivers.documentImage, { onlySelf: true });
        });
    };
    DriverseditComponent.prototype.updateDriver = function () {
        var _this = this;
        var query = '/' + this.driverid;
        this.service.updateDriver(this.userForm.value, query).subscribe(function (data) {
            console.log(data);
            _this.toastr.success('Driver updated Successfully');
            _this._router.navigate(['/driver']);
        }, function (error) {
            console.log('error');
        });
    };
    DriverseditComponent.prototype.getCountries = function () {
        var _this = this;
        this.countryservice.getCountries().subscribe(function (res) {
            _this.Countries = res['countries'];
        });
    };
    DriverseditComponent.prototype.getStates = function (id) {
        var _this = this;
        var cid;
        if (this.userForm.value.country == '') {
            cid = id;
        }
        else {
            cid = this.userForm.value.country;
        }
        var query = '?country_id=' + cid;
        // let query = '?country_id='+'5b64792806ff811e1f06f0d0';
        this.stateservice.getStates(query).subscribe(function (res) {
            console.log(res);
            _this.States = res['states'];
        });
    };
    DriverseditComponent.prototype.getCities = function (id) {
        var _this = this;
        var cid;
        if (this.userForm.value.state == '') {
            cid = id;
        }
        else {
            cid = this.userForm.value.state;
        }
        var query = '?state_id=' + cid;
        this.cityservice.getCities(query).subscribe(function (res) {
            _this.Cities = res['cities'];
        });
    };
    DriverseditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-driversedit',
            template: __webpack_require__(/*! ./driversedit.component.html */ "./src/app/drivers/driversedit/driversedit.component.html"),
            styles: [__webpack_require__(/*! ./driversedit.component.scss */ "./src/app/drivers/driversedit/driversedit.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_drivers_service__WEBPACK_IMPORTED_MODULE_7__["DriversService"],
            _services_country_service__WEBPACK_IMPORTED_MODULE_10__["CountryService"],
            _services_state_service__WEBPACK_IMPORTED_MODULE_9__["StateService"],
            _services_city_service__WEBPACK_IMPORTED_MODULE_11__["CityService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _agm_core__WEBPACK_IMPORTED_MODULE_6__["MapsAPILoader"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], DriverseditComponent);
    return DriverseditComponent;
}());



/***/ }),

/***/ "./src/app/drivers/driversinfo/driversinfo.component.html":
/*!****************************************************************!*\
  !*** ./src/app/drivers/driversinfo/driversinfo.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n      <div class=\"col-12\">\n        <div class=\"page-title\">\n    \n            <div class=\"pull-left\">\n                <!-- PAGE HEADING TAG - START -->\n    \n                <h1 class=\"title\">Manage Drivers</h1>\n                <!-- PAGE HEADING TAG - END -->\n            </div>\n    \n            <div class=\"pull-right hidden-xs\">\n                <ol class=\"breadcrumb\">\n                    <li>\n                        <a routerLink=\"/\">\n                            <i class=\"fa fa-home\"></i>Home</a>\n                    </li>\n                    <li class=\"active\">\n                        <strong>Drivers</strong>\n                    </li>\n    \n                </ol>\n            </div>\n    \n        </div>\n        <div class=\"custum-links\" style=\"position: absolute; right: 15px; z-index: 1\">\n            <a routerLink=\"/driver/add-driver\" style=\"font-weight: bold;\">\n                <i class=\"fa fa-plus\"></i> Add Drivers </a> &nbsp;\n           \n        </div>\n    </div>\n    \n      <div class=\"col-12\">\n          <div class=\"page-title\">\n\n              <div class=\"float-left\">\n                  <!-- PAGE HEADING TAG - START -->\n            \n              </div>\n              <div class=\"float-right\">\n                 <!-- <a [routerLink]=\"['add-subadmin']\"> <i class=\"fa fa-plus\"></i>Dashboard </a>-->\n\n              </div>\n\n          </div>\n      </div>\n      <div class=\"clearfix\"></div>\n      <!-- MAIN CONTENT AREA STARTS -->\n\n      <div class=\"col-xl-12\">\n          <section class=\"box \">\n                <div class=\"content-body \">\n                  <div class=\"row\">\n                      <div class=\"col-12\">\n                        <div class=\"\">\n\n                          <div class=\"pagination-data\" style=\"overflow: scroll;\">\n  \n                          <table id=\"example-11\" class=\"display table table-bordered table-hover table-condensed dataTable no-footer\" cellspacing=\"0\" width=\"100%\">\n                              <thead>\n                                  <tr>\n                                    <th>S.No.</th>\n                                    <th> First Name </th>\n                                    <th> Last Name </th>\n                                    <th> Email </th>\n                                    <th> Mobile No</th>\n                                    <th> Driver License</th>\n                                    <th> Country </th>\n                                    <th> Rating </th>\n                                    <th> Top Listed </th>\n                                    <th> Driver Dob </th>\n                                    <th> Archive/Inactive </th>\n                                    <th>Action</th>\n                                  </tr>\n                              </thead>\n                              <tbody>\n                                \n                                  <tr *ngFor=\"let userlist of Drivers; let i=index\" class=\"ng-scope\">\n                                      <td class=\"ng-binding\"> {{i+1}}</td>\n                                      <td class=\"ng-binding\"> {{userlist.userFirstName}} </td>\n                                      <td class=\"ng-binding\"> {{userlist.userLastName}} </td>\n                                      <td class=\"ng-binding\"> {{userlist.userEmail}} </td>\n                                      <td class=\"ng-binding\"> {{userlist.userPhone}} </td>\n                                      <td class=\"ng-binding\"> {{userlist.driverLicence}} </td>\n                                      <td class=\"ng-binding\"> {{userlist.countryName}} </td>\n                                      <td class=\"ng-binding\"> {{userlist.rating}} </td>\n                                      <td class=\"ng-binding\"> {{userlist.countryName}} </td>\n                                      <td class=\"ng-binding\">  </td>\n                                      <td class=\"ng-binding\"> <button>{{userlist.userStatus}}</button> </td>\n                                      <td style=\"min-width:120px;\">\n                                          <i class=\"fa fa-trash ng-pristine text-danger ng-untouched ng-valid ng-empty\" ng-model=\"_id\" data-toggle=\"modal\" data-target=\"#myModal-delete\" aria-hidden=\"true\" title=\"Delete user\" (click)=\"deleteDriver(userlist._id)\"></i> &nbsp;\n                                           \n                                          <a [routerLink]=\"['edit-driver', userlist.driverId]\">\n                                              <i class=\"fa fa-eye text-primary\" aria-hidden=\"true\" title=\"view user\"></i>\n                                          </a> &nbsp; <a [routerLink]=\"['edit-driver', userlist.driverId]\">\n                                              <i class=\"fa fa-edit text-success\" aria-hidden=\"true\" title=\"edit user\"></i>\n                                          </a>\n                                      </td>\n                                  </tr>\n\n                              </tbody>\n                          </table>\n                          <!-- ********************************************** -->\n                          </div>\n                         </div>\n                      </div>\n                  </div>\n              </div>\n          </section>\n      </div>\n\n\n\n\n\n\n    "

/***/ }),

/***/ "./src/app/drivers/driversinfo/driversinfo.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/drivers/driversinfo/driversinfo.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/drivers/driversinfo/driversinfo.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/drivers/driversinfo/driversinfo.component.ts ***!
  \**************************************************************/
/*! exports provided: DriversinfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriversinfoComponent", function() { return DriversinfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_drivers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/drivers.service */ "./src/app/services/drivers.service.ts");
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



var DriversinfoComponent = /** @class */ (function () {
    function DriversinfoComponent(service, toastr) {
        this.service = service;
        this.toastr = toastr;
        this.driverRef = null;
    }
    DriversinfoComponent.prototype.ngOnInit = function () {
        this.getDrivers();
    };
    DriversinfoComponent.prototype.getDrivers = function () {
        var _this = this;
        this.service.getDrivers().subscribe(function (res) {
            console.log(res['data']);
            _this.Drivers = res['data'];
        });
    };
    DriversinfoComponent.prototype.deleteDriver = function (id) {
        var _this = this;
        var query = '/' + id;
        this.service.deleteDriver(query).subscribe(function (data) {
            console.log(data);
            _this.toastr.success('Driver deleted Successfully');
            _this.getDrivers();
        }, function (error) {
            console.log('error');
        });
    };
    DriversinfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-driversinfo',
            template: __webpack_require__(/*! ./driversinfo.component.html */ "./src/app/drivers/driversinfo/driversinfo.component.html"),
            styles: [__webpack_require__(/*! ./driversinfo.component.scss */ "./src/app/drivers/driversinfo/driversinfo.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_drivers_service__WEBPACK_IMPORTED_MODULE_1__["DriversService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], DriversinfoComponent);
    return DriversinfoComponent;
}());



/***/ }),

/***/ "./src/app/drivers/driversview/driversview.component.html":
/*!****************************************************************!*\
  !*** ./src/app/drivers/driversview/driversview.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  driversview works!\n</p>\n"

/***/ }),

/***/ "./src/app/drivers/driversview/driversview.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/drivers/driversview/driversview.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/drivers/driversview/driversview.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/drivers/driversview/driversview.component.ts ***!
  \**************************************************************/
/*! exports provided: DriversviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriversviewComponent", function() { return DriversviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DriversviewComponent = /** @class */ (function () {
    function DriversviewComponent() {
    }
    DriversviewComponent.prototype.ngOnInit = function () {
    };
    DriversviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-driversview',
            template: __webpack_require__(/*! ./driversview.component.html */ "./src/app/drivers/driversview/driversview.component.html"),
            styles: [__webpack_require__(/*! ./driversview.component.scss */ "./src/app/drivers/driversview/driversview.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DriversviewComponent);
    return DriversviewComponent;
}());



/***/ }),

/***/ "./src/app/services/drivers.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/drivers.service.ts ***!
  \*********************************************/
/*! exports provided: DriversService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriversService", function() { return DriversService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/config */ "./src/app/services/config.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DriversService = /** @class */ (function () {
    function DriversService(http, router) {
        this.http = http;
        this.router = router;
        this.config = new _services_config__WEBPACK_IMPORTED_MODULE_5__["Config"];
    }
    DriversService.prototype.getDrivers = function (query) {
        if (query === void 0) { query = ""; }
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].APIURL + '/drivers' + query;
        return this
            .http
            .get(uri);
    };
    DriversService.prototype.getdDrivers = function (query) {
        if (query === void 0) { query = ""; }
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].APIURL + '/driver' + query;
        return this
            .http
            .get(uri);
    };
    DriversService.prototype.addDriver = function (data) {
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].APIURL + '/users';
        return this
            .http
            .post(uri, data);
    };
    DriversService.prototype.updateDriver = function (data, query) {
        if (query === void 0) { query = ""; }
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].APIURL + '/driver' + query;
        return this
            .http
            .put(uri, data);
    };
    DriversService.prototype.deleteDriver = function (query) {
        if (query === void 0) { query = ""; }
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].APIURL + '/driver' + query;
        return this
            .http
            .delete(uri);
    };
    DriversService.prototype.uploadLogo = function (event) {
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].APIURL + '/users/images';
        var fileList = event.target.files;
        var file = fileList[0];
        var formData = new FormData();
        formData.append('selfieImage', file, file.name);
        return this
            .http
            .post(uri, formData);
    };
    DriversService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], DriversService);
    return DriversService;
}());



/***/ })

}]);
//# sourceMappingURL=drivers-module.js.map