(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["employee-module"],{

/***/ "./src/app/employee/copempadd/copempadd.component.html":
/*!*************************************************************!*\
  !*** ./src/app/employee/copempadd/copempadd.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n      <div class=\"col-12\">\n          <div class=\"page-title\">\n      \n              <div class=\"pull-left\">\n                  <!-- PAGE HEADING TAG - START -->\n      \n                  <h1 class=\"title\">Add Corporate Employer</h1>\n                  <!-- PAGE HEADING TAG - END -->\n              </div>\n      \n              <div class=\"pull-right hidden-xs\">\n                  <ol class=\"breadcrumb\">\n                      <li>\n                          <a routerLink=\"/\">\n                              <i class=\"fa fa-home\"></i>Home</a>\n                      </li>\n                      <li>\n                          <a routerLink=\"/employee\">\n                              <i class=\"fa fa-list-ol\"></i>Employer</a>\n                      </li>\n                      <li class=\"active\">\n                          <strong>Add Corporate Employer</strong>\n                      </li>\n      \n                  </ol>\n              </div>\n      \n          </div>\n         \n      </div>\n      \n        <div class=\"col-12\">\n            <div class=\"page-title\">\n  \n                <div class=\"float-left\">\n                    <!-- PAGE HEADING TAG - START -->\n              \n                </div>\n                <div class=\"float-right\">\n                   <!-- <a [routerLink]=\"['add-subadmin']\"> <i class=\"fa fa-plus\"></i>Dashboard </a>-->\n  \n                </div>\n  \n            </div>\n        </div>\n        <div class=\"clearfix\"></div>\n        <!-- MAIN CONTENT AREA STARTS -->\n  \n        <div class=\"col-xl-12\">\n            <section class=\"box \">\n                  <div class=\"content-body \">\n                    <div class=\"row\">\n                        <div class=\"col-12\">\n                          <div class=\"container\">\n                            <form [formGroup]=\"userForm\" (submit)=\"saveUser()\">\n                                 \n                                  <div  class=\"form-group row\">\n                                      <div class=\"col-sm-3\">\n                                          <label class=\"mt-2\" for=\"userFirstName\"><strong>First Name*</strong></label>\n                                      </div>\n                                      <div  class=\"col-sm-9\">\n                                          <input  type=\"text\" formControlName=\"userFirstName\" class=\"form-control\" id=\"userFirstName\" maxlength=\"40\" placeholder=\"First Name\"/> \n                                      </div>\n                                  </div>\n  \n                                  <div  class=\"form-group row\">\n                                      <div class=\"col-sm-3\">\n                                          <label class=\"mt-2\" for=\"userLastName\"><strong>Last Name*</strong></label>\n                                      </div>\n                                      <div  class=\"col-sm-9\">\n                                          <input  type=\"text\" formControlName=\"userLastName\" class=\"form-control\" id=\"userLastName\" maxlength=\"40\" placeholder=\"Last Name\"/> \n                                      </div>\n                                  </div>\n                                 \n                                   <div  class=\"form-group row\">\n                                      <div class=\"col-sm-3\">\n                                          <label class=\"mt-2\" for=\"userEmail\"><strong>Email*</strong></label>\n                                      </div>\n                                      <div  class=\"col-sm-9\">\n                                          <input type=\"text\" formControlName=\"userEmail\"  class=\"form-control\" max=\"40\" id=\"userEmail\" placeholder=\"Email\"/>  <br>\n                                         \n                                     </div>\n                                  </div>\n                                  \n                                  <div  class=\"form-group row\">\n                                        <div class=\"col-sm-3\">\n                                            <label class=\"mt-2\" for=\"gender\"><strong>Gender*</strong></label>\n                                        </div>\n                                        <div  class=\"col-sm-9\">\n                                          <select id=\"gender\" formControlName=\"gender\" class=\"form-control\" >\n                                              <option *ngFor=\"let s of gender\" [ngValue]=\"s.value\">{{ s.name }}</option>\n                                           </select>\n                                        </div>\n                                    </div>\n\n                                  <div  class=\"form-group row\">\n                                      <div class=\"col-sm-3\">\n                                          <label class=\"mt-2\" for=\"userPhone\"><strong>Mobile No*</strong></label>\n                                      </div>\n                                      <div  class=\"col-sm-9\">\n                                          \n                                          <input type=\"text\" formControlName=\"userPhone\" class=\"form-control phone_number\" maxlength=\"10\" id=\"userPhone\" name=\"phoneNumber\" placeholder=\"Phone Number\" />\n                                        \n                                      </div>\n                                  </div>\n                                 \n                                  <div  class=\"form-group row\">\n                                      <div class=\"col-sm-3\">\n                                          <label class=\"mt-2\" for=\"userPassword\"><strong>Password*</strong></label>\n                                      </div>\n                                      <div  class=\"col-sm-9\">\n                                          <input type=\"userPassword\" formControlName=\"userPassword\"  class=\"form-control\" max=\"40\" id=\"password\" placeholder=\"Password\" />  <br>\n                                         \n                                     </div>\n                                  </div>\n                                  <div  class=\"form-group row\">\n                                      <div class=\"col-sm-3\">\n                                          <label class=\"mt-2\" for=\"confirmpassword\"><strong>Confirm Password*</strong></label>\n                                      </div>\n                                      <div  class=\"col-sm-9\">\n                                          <input type=\"password\"  class=\"form-control\" max=\"40\" id=\"confirmpassword\"  placeholder=\"Confirm Password\" />  <br>\n                                        \n                                     </div>\n                                  </div>\n                                  \n                                    <div  class=\"form-group row\">\n                                        <div class=\"col-sm-3\">\n                                            <label class=\"mt-2\" for=\"country\"><strong>Country*</strong></label>\n                                        </div>\n                                        <div  class=\"col-sm-9\">\n                                          <select id=\"country\" formControlName=\"country\"  (change)=\"getStates()\" class=\"form-control\" >\n                                              <option>--Select--</option>\n                                              <option *ngFor=\"let s of Countries\" [ngValue]=\"s._id\">{{ s.countryName }}</option>\n                                          </select> \n                                       </div>\n                                    </div>\n\n                                     <div  class=\"form-group row\">\n                                        <div class=\"col-sm-3\">\n                                            <label class=\"mt-2\" for=\"state\"><strong>State Name*</strong></label>\n                                        </div>\n                                        <div  class=\"col-sm-9\">\n                                            <select id=\"state\" formControlName=\"state\"  (change)=\"getCities()\" class=\"form-control\" >\n                                              <option>--Select--</option>\n                                              <option *ngFor=\"let s of States\" [ngValue]=\"s._id\"> {{ s.stateName }} </option>\n                                            </select> \n                                         </div>\n                                      </div>\n    \n                                      <div  class=\"form-group row\">\n                                        <div class=\"col-sm-3\">\n                                            <label class=\"mt-2\" for=\"city\"><strong>City Name*</strong></label>\n                                        </div>\n                                        <div  class=\"col-sm-9\">\n                                            <select id=\"city\" formControlName=\"city\"   class=\"form-control\" >\n                                              <option>--Select--</option>\n                                              <option *ngFor=\"let s of Cities\" [ngValue]=\"s._id\"> {{ s.cityName }} </option>\n                                            </select> \n                                         </div>\n                                   </div>\n\n                                  <div  class=\"form-group row\">\n                                      <div class=\"col-sm-3\">\n                                          <label class=\"mt-2\" for=\"address\"><strong>Address*</strong></label>\n                                      </div>\n                                      <div  class=\"col-sm-9\">\n                                          <ng4geo-autocomplete (componentCallback)=\"autoCompleteCallback1($event)\" ></ng4geo-autocomplete>\n                                          <input type=\"hidden\" formControlName=\"address\" name=\"address\" id=\"userAddress\">\n                                      </div>\n                                   </div>\n                                  \n                                   <div  class=\"form-group row\">\n                                        <div class=\"col-sm-3\">\n                                            <label class=\"mt-2\" for=\"businessName\"><strong>Business Name*</strong></label>\n                                        </div>\n                                        <div  class=\"col-sm-9\">\n                                            <input type=\"text\"  class=\"form-control\"  formControlName=\"businessName\"  id=\"businessName\"  placeholder=\"Business Name\" />  <br>\n                                          \n                                       </div>\n                                    </div>\n                                  \n                                    <div  class=\"form-group row\">\n                                        <div class=\"col-sm-3\">\n                                            <label class=\"mt-2\" for=\"businessAddress\"><strong>Business Adress*</strong></label>\n                                        </div>\n                                        <div  class=\"col-sm-9\">\n                                            <input type=\"text\"  class=\"form-control\"  formControlName=\"businessAddress\"  id=\"businessAddress\"  placeholder=\"Business Address\" />  <br>\n                                          \n                                       </div>\n                                    </div>\n                                    <div  class=\"form-group row\">\n                                            <div class=\"col-sm-3\">\n                                                <label class=\"mt-2\" for=\"workId\"><strong>Work ID Card*</strong></label>\n                                            </div>\n                                            <div  class=\"col-sm-9\">\n                                                 <input type=\"text\" formControlName=\"workId\" class=\"form-control\" name=\"workId\" id=\"workId\">\n                                            </div>\n                                    </div>\n      \n                                    <div  class=\"form-group row\">\n                                        <div class=\"col-sm-3\">\n                                            <label class=\"mt-2\" for=\"companyRegistrationNo\"><strong>Company Registration Number*</strong></label>\n                                        </div>\n                                        <div  class=\"col-sm-9\">\n                                                <input type=\"text\" formControlName=\"companyRegistrationNo\" class=\"form-control\" name=\"companyRegistrationNo\" id=\"companyRegistrationNo\">\n                                        </div>\n                                    </div>\n                                   \n                                   \n                                    <div  class=\"form-group row\">\n                                        <div class=\"col-sm-3\">\n                                            <label class=\"mt-2\" for=\"name\"><strong>Corporate's image*</strong></label>\n                                        </div>\n                                        <div  class=\"col-sm-9\">\n                                            <label for=\"fileToUpload\">\n                                               <input type=\"File\" class=\"form-control\" name=\"fileToUpload\" id=\"fileToUpload\" (change)=\"myUploaderNew($event)\">\n                                              <input type=\"hidden\" formControlName=\"businessLogo\" id=\"businessLogo\" >\n                                             </label>\n                                            <div style=\"color:green;\">{{msg}}</div>\n                                        </div>\n                                     </div>\n                                 \n                        \n                                   <div  class=\"form-group row\">\n                                      <div class=\"col-sm-3\">\n                                          <label class=\"mt-2\" for=\"name\"><strong></strong></label>\n                                      </div>\n                                      <div  class=\"col-sm-9\">\n                                          <button type=\"submit\"  class=\"btn btn-primary btn-block\">Add Corporate Employer</button>\n                                      </div>\n                                  </div>    \n                                 \n                              </form>\n                    \n                           \n                           </div>\n                        </div>\n                    </div>\n                </div>\n            </section>\n        </div>\n  \n  \n  \n  \n  \n  \n      \n  \n  \n  \n  \n  "

/***/ }),

/***/ "./src/app/employee/copempadd/copempadd.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/employee/copempadd/copempadd.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  width: 700px; }\n"

/***/ }),

/***/ "./src/app/employee/copempadd/copempadd.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/employee/copempadd/copempadd.component.ts ***!
  \***********************************************************/
/*! exports provided: CopempaddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CopempaddComponent", function() { return CopempaddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_uploader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-uploader */ "./node_modules/ngx-uploader/fesm5/ngx-uploader.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _services_employee_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/employee.service */ "./src/app/services/employee.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _services_state_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/state.service */ "./src/app/services/state.service.ts");
/* harmony import */ var _services_country_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/country.service */ "./src/app/services/country.service.ts");
/* harmony import */ var _services_city_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/city.service */ "./src/app/services/city.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var CopempaddComponent = /** @class */ (function () {
    function CopempaddComponent(formBuilder, route, service, countryservice, stateservice, cityservice, toastr, _router, http, mapsAPILoader, ngZone) {
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
            userFirstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            userLastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            userEmail: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            userPhone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            userRole: "CorporateEmployer",
            userPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            gender: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            state: ['',],
            city: ['',],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            businessName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            businessAddress: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            businessLogo: ['',],
            workIdCard: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            workId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            companyRegistrationNo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.userForm.controls['country'].setValue(this.default, { onlySelf: true });
        this.userForm.controls['gender'].setValue(this.default, { onlySelf: true });
        this.userForm.controls['state'].setValue(this.default, { onlySelf: true });
    }
    ;
    CopempaddComponent.prototype.saveUser = function () {
        var _this = this;
        if (this.userForm.value.userFirstName == '') {
            this.toastr.error('Usr name is required');
            return false;
        }
        console.log(this.userForm.value);
        if (this.userForm.dirty && this.userForm.valid) {
            this.service.createcorpEmployee(this.userForm.value).subscribe(function (data) {
                console.log(data);
                _this.toastr.success('User added Successfully');
                _this._router.navigate(['/employee']);
            }, function (error) {
                _this.toastr.error('Error');
            });
        }
    };
    CopempaddComponent.prototype.myUploaderNew = function (event1) {
        var _this = this;
        this.service.uploadLogo(event1).subscribe(function (data) {
            console.log(data);
            _this.userForm.controls['businessLogo'].setValue(data['path'].businessLogo);
            _this.userForm.controls['workIdCard'].setValue(data['path'].businessLogo);
            _this.userForm.controls['companyRegistrationNo'].setValue(data['path'].businessLogo);
            //  this.profile_image = data.data.url;
            _this.msg = 'Uploded successfully';
        }, function (error) {
            console.log('error');
        });
    };
    CopempaddComponent.prototype.autoCompleteCallback1 = function (data) {
        if (data.data.formatted_address == '') {
            this.address = "";
        }
        else {
            this.address = JSON.stringify(data.data.formatted_address);
        }
        this.userForm.controls['address'].setValue(this.address);
    };
    CopempaddComponent.prototype.ngOnInit = function () {
        this.getCountries();
    };
    CopempaddComponent.prototype.getCountries = function () {
        var _this = this;
        this.countryservice.getCountries().subscribe(function (res) {
            _this.Countries = res['countries'];
        });
    };
    CopempaddComponent.prototype.getStates = function () {
        var _this = this;
        var cid = this.userForm.value.country;
        var query = '?country_id=' + cid;
        // let query = '?country_id='+'5b64792806ff811e1f06f0d0';
        this.stateservice.getStates(query).subscribe(function (res) {
            console.log(res);
            _this.States = res['states'];
        });
    };
    CopempaddComponent.prototype.getCities = function () {
        var _this = this;
        var cid = this.userForm.value.state;
        // let query = '?state_id=5b6479ab06ff811e1f06f110';
        var query = '?state_id=' + cid;
        this.cityservice.getCities(query).subscribe(function (res) {
            _this.Cities = res['cities'];
        });
    };
    CopempaddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-copempadd',
            template: __webpack_require__(/*! ./copempadd.component.html */ "./src/app/employee/copempadd/copempadd.component.html"),
            styles: [__webpack_require__(/*! ./copempadd.component.scss */ "./src/app/employee/copempadd/copempadd.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_employee_service__WEBPACK_IMPORTED_MODULE_6__["EmployeeService"],
            _services_country_service__WEBPACK_IMPORTED_MODULE_9__["CountryService"],
            _services_state_service__WEBPACK_IMPORTED_MODULE_8__["StateService"],
            _services_city_service__WEBPACK_IMPORTED_MODULE_10__["CityService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _agm_core__WEBPACK_IMPORTED_MODULE_5__["MapsAPILoader"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], CopempaddComponent);
    return CopempaddComponent;
}());



/***/ }),

/***/ "./src/app/employee/copempedit/copempedit.component.html":
/*!***************************************************************!*\
  !*** ./src/app/employee/copempedit/copempedit.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n      <div class=\"col-12\">\n        <div class=\"page-title\">\n    \n            <div class=\"pull-left\">\n                <!-- PAGE HEADING TAG - START -->\n    \n                <h1 class=\"title\">Edit Corporate Employer</h1>\n                <!-- PAGE HEADING TAG - END -->\n            </div>\n    \n            <div class=\"pull-right hidden-xs\">\n                <ol class=\"breadcrumb\">\n                    <li>\n                        <a routerLink=\"/\">\n                            <i class=\"fa fa-home\"></i>Home</a>\n                    </li>\n                    <li>\n                        <a routerLink=\"/employee\">\n                            <i class=\"fa fa-list-ol\"></i>Employer</a>\n                    </li>\n                    <li class=\"active\">\n                        <strong>Edit Corporate Employer</strong>\n                    </li>\n    \n                </ol>\n            </div>\n    \n        </div>\n       \n    </div>\n    \n      <div class=\"col-12\">\n          <div class=\"page-title\">\n\n              <div class=\"float-left\">\n                  <!-- PAGE HEADING TAG - START -->\n            \n              </div>\n              <div class=\"float-right\">\n                 <!-- <a [routerLink]=\"['add-subadmin']\"> <i class=\"fa fa-plus\"></i>Dashboard </a>-->\n\n              </div>\n\n          </div>\n      </div>\n      <div class=\"clearfix\"></div>\n      <!-- MAIN CONTENT AREA STARTS -->\n\n      <div class=\"col-xl-12\">\n          <section class=\"box \">\n                <div class=\"content-body \">\n                  <div class=\"row\">\n                      <div class=\"col-12\">\n                        <div class=\"container\">\n                          <form [formGroup]=\"userForm\" (submit)=\"saveUser()\">\n                               \n                                <div  class=\"form-group row\">\n                                    <div class=\"col-sm-3\">\n                                        <label class=\"mt-2\" for=\"userFirstName\"><strong>First Name*</strong></label>\n                                    </div>\n                                    <div  class=\"col-sm-9\">\n                                        <input  type=\"hidden\" formControlName=\"id\" class=\"form-control\" id=\"id\"/> \n                                        <input  type=\"text\" formControlName=\"userFirstName\" class=\"form-control\" id=\"userFirstName\" maxlength=\"40\" placeholder=\"First Name\"/> \n                                    </div>\n                                </div>\n\n                                <div  class=\"form-group row\">\n                                    <div class=\"col-sm-3\">\n                                        <label class=\"mt-2\" for=\"userLastName\"><strong>Last Name*</strong></label>\n                                    </div>\n                                    <div  class=\"col-sm-9\">\n                                        <input  type=\"text\" formControlName=\"userLastName\" class=\"form-control\" id=\"userLastName\" maxlength=\"40\" placeholder=\"Last Name\"/> \n                                    </div>\n                                </div>\n                               \n                                 <div  class=\"form-group row\">\n                                    <div class=\"col-sm-3\">\n                                        <label class=\"mt-2\" for=\"userEmail\"><strong>Email*</strong></label>\n                                    </div>\n                                    <div  class=\"col-sm-9\">\n                                        <input type=\"text\" formControlName=\"userEmail\"  class=\"form-control\" max=\"40\" id=\"userEmail\" placeholder=\"Email\"/>  <br>\n                                       \n                                   </div>\n                                </div>\n                                \n                                <div  class=\"form-group row\">\n                                      <div class=\"col-sm-3\">\n                                          <label class=\"mt-2\" for=\"gender\"><strong>Gender*</strong></label>\n                                      </div>\n                                      <div  class=\"col-sm-9\">\n                                        <select id=\"gender\" formControlName=\"gender\" class=\"form-control\" >\n                                            <option *ngFor=\"let s of gender\" [ngValue]=\"s.value\">{{ s.name }}</option>\n                                         </select>\n                                      </div>\n                                  </div>\n\n                                <div  class=\"form-group row\">\n                                    <div class=\"col-sm-3\">\n                                        <label class=\"mt-2\" for=\"userPhone\"><strong>Mobile No*</strong></label>\n                                    </div>\n                                    <div  class=\"col-sm-9\">\n                                        \n                                        <input type=\"text\" formControlName=\"userPhone\" class=\"form-control phone_number\" maxlength=\"10\" id=\"userPhone\" name=\"phoneNumber\" placeholder=\"Phone Number\" />\n                                      \n                                    </div>\n                                </div>\n                               \n                               <!-- <div  class=\"form-group row\">\n                                    <div class=\"col-sm-3\">\n                                        <label class=\"mt-2\" for=\"userPassword\"><strong>Password*</strong></label>\n                                    </div>\n                                    <div  class=\"col-sm-9\">\n                                        <input type=\"userPassword\" formControlName=\"userPassword\"  class=\"form-control\" max=\"40\" id=\"password\" placeholder=\"Password\" />  <br>\n                                       \n                                   </div>\n                                </div>\n                                <div  class=\"form-group row\">\n                                    <div class=\"col-sm-3\">\n                                        <label class=\"mt-2\" for=\"confirmpassword\"><strong>Confirm Password*</strong></label>\n                                    </div>\n                                    <div  class=\"col-sm-9\">\n                                        <input type=\"password\"  class=\"form-control\" max=\"40\" id=\"confirmpassword\"  placeholder=\"Confirm Password\" />  <br>\n                                      \n                                   </div>\n                                </div>-->\n                                \n                                  <div  class=\"form-group row\">\n                                      <div class=\"col-sm-3\">\n                                          <label class=\"mt-2\" for=\"country\"><strong>Country*</strong></label>\n                                      </div>\n                                      <div  class=\"col-sm-9\">\n                                        <select id=\"country\" formControlName=\"country\"  (change)=\"getStates()\" class=\"form-control\" >\n                                            <option>--Select--</option>\n                                            <option *ngFor=\"let s of Countries\" [ngValue]=\"s._id\">{{ s.countryName }}</option>\n                                        </select> \n                                     </div>\n                                  </div>\n\n                                   <div  class=\"form-group row\">\n                                      <div class=\"col-sm-3\">\n                                          <label class=\"mt-2\" for=\"state\"><strong>State Name*</strong></label>\n                                      </div>\n                                      <div  class=\"col-sm-9\">\n                                          <select id=\"state\" formControlName=\"state\"  (change)=\"getCities()\" class=\"form-control\" >\n                                            <option>--Select--</option>\n                                            <option *ngFor=\"let s of States\" [ngValue]=\"s._id\"> {{ s.stateName }} </option>\n                                          </select> \n                                       </div>\n                                    </div>\n  \n                                    <div  class=\"form-group row\">\n                                      <div class=\"col-sm-3\">\n                                          <label class=\"mt-2\" for=\"city\"><strong>City Name*</strong></label>\n                                      </div>\n                                      <div  class=\"col-sm-9\">\n                                          <select id=\"city\" formControlName=\"city\"   class=\"form-control\" >\n                                            <option>--Select--</option>\n                                            <option *ngFor=\"let s of Cities\" [ngValue]=\"s._id\"> {{ s.cityName }} </option>\n                                          </select> \n                                       </div>\n                                 </div>\n\n                                <div  class=\"form-group row\">\n                                    <div class=\"col-sm-3\">\n                                        <label class=\"mt-2\" for=\"address\"><strong>Address*</strong></label>\n                                    </div>\n                                    <div  class=\"col-sm-9\">\n                                        <input type=\"text\" formControlName=\"address\" class=\"form-control\" name=\"address\" id=\"userAddress\">\n                                    </div>\n                                 </div>\n                                \n                                 <div  class=\"form-group row\">\n                                      <div class=\"col-sm-3\">\n                                          <label class=\"mt-2\" for=\"businessName\"><strong>Business Name*</strong></label>\n                                      </div>\n                                      <div  class=\"col-sm-9\">\n                                          <input type=\"text\"  class=\"form-control\"  formControlName=\"businessName\"  id=\"businessName\"  placeholder=\"Business Name\" />  <br>\n                                        \n                                     </div>\n                                  </div>\n                                \n                                  <div  class=\"form-group row\">\n                                      <div class=\"col-sm-3\">\n                                          <label class=\"mt-2\" for=\"businessAddress\"><strong>Business Adress*</strong></label>\n                                      </div>\n                                      <div  class=\"col-sm-9\">\n                                          <input type=\"text\"  class=\"form-control\"  formControlName=\"businessAddress\"  id=\"businessAddress\"  placeholder=\"Business Address\" />  <br>\n                                        \n                                     </div>\n                                  </div>\n                                  <div  class=\"form-group row\">\n                                          <div class=\"col-sm-3\">\n                                              <label class=\"mt-2\" for=\"workId\"><strong>Work ID Card*</strong></label>\n                                          </div>\n                                          <div  class=\"col-sm-9\">\n                                               <input type=\"text\" formControlName=\"workId\" class=\"form-control\" name=\"workId\" id=\"workId\">\n                                          </div>\n                                  </div>\n    \n                                  <div  class=\"form-group row\">\n                                      <div class=\"col-sm-3\">\n                                          <label class=\"mt-2\" for=\"companyRegistrationNo\"><strong>Company Registration Number*</strong></label>\n                                      </div>\n                                      <div  class=\"col-sm-9\">\n                                              <input type=\"text\" formControlName=\"companyRegistrationNo\" class=\"form-control\" name=\"companyRegistrationNo\" id=\"companyRegistrationNo\">\n                                      </div>\n                                  </div>\n                                 \n                                 \n                                  <div  class=\"form-group row\">\n                                      <div class=\"col-sm-3\">\n                                          <label class=\"mt-2\" for=\"name\"><strong>Corporate's image*</strong></label>\n                                      </div>\n                                      <div  class=\"col-sm-9\">\n                                          <label for=\"fileToUpload\">\n                                             <input type=\"File\" class=\"form-control\" name=\"fileToUpload\" id=\"fileToUpload\" (change)=\"myUploaderNew($event)\">\n                                            <input type=\"hidden\" formControlName=\"businessLogo\" id=\"businessLogo\" >\n                                           </label>\n                                          <div style=\"color:green;\">{{msg}}</div>\n                                      </div>\n                                   </div>\n                               \n                      \n                                 <div  class=\"form-group row\">\n                                    <div class=\"col-sm-3\">\n                                        <label class=\"mt-2\" for=\"name\"><strong></strong></label>\n                                    </div>\n                                    <div  class=\"col-sm-9\">\n                                        <button type=\"submit\"  class=\"btn btn-primary btn-block\">Update Corporate Employer</button>\n                                    </div>\n                                </div>    \n                               \n                            </form>\n                  \n                         \n                         </div>\n                      </div>\n                  </div>\n              </div>\n          </section>\n      </div>\n\n\n\n\n\n\n    \n\n\n\n\n"

/***/ }),

/***/ "./src/app/employee/copempedit/copempedit.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/employee/copempedit/copempedit.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  width: 700px; }\n"

/***/ }),

/***/ "./src/app/employee/copempedit/copempedit.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/employee/copempedit/copempedit.component.ts ***!
  \*************************************************************/
/*! exports provided: CopempeditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CopempeditComponent", function() { return CopempeditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_uploader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-uploader */ "./node_modules/ngx-uploader/fesm5/ngx-uploader.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _services_employee_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/employee.service */ "./src/app/services/employee.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _services_state_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/state.service */ "./src/app/services/state.service.ts");
/* harmony import */ var _services_country_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/country.service */ "./src/app/services/country.service.ts");
/* harmony import */ var _services_city_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/city.service */ "./src/app/services/city.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var CopempeditComponent = /** @class */ (function () {
    function CopempeditComponent(formBuilder, route, service, countryservice, stateservice, cityservice, toastr, _router, http, mapsAPILoader, ngZone) {
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
            id: [this.driverid, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            userFirstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            userLastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            userEmail: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            userPhone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            // userPassword: ['', Validators.required],
            userRole: "CorporateEmployer",
            gender: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            state: ['',],
            city: ['',],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            businessName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            businessAddress: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            businessLogo: ['',],
            workIdCard: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            workId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            companyRegistrationNo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.userForm.controls['country'].setValue(this.default, { onlySelf: true });
        this.userForm.controls['gender'].setValue(this.default, { onlySelf: true });
        this.userForm.controls['state'].setValue(this.default, { onlySelf: true });
    }
    ;
    CopempeditComponent.prototype.getUsers = function () {
        var _this = this;
        var query = '/' + this.driverid;
        this.service.getEmployee(query).subscribe(function (res) {
            _this.Employees = res['employer'].user;
            _this.getStates(_this.Employees.country._id);
            _this.getCities(_this.Employees.state._id);
            // console.log(res)
            console.log(_this.Employees);
            _this.userForm.controls['id'].setValue(_this.Employees._id, { onlySelf: true });
            _this.userForm.controls['userFirstName'].setValue(_this.Employees.userFirstName, { onlySelf: true });
            _this.userForm.controls['userLastName'].setValue(_this.Employees.userLastName, { onlySelf: true });
            _this.userForm.controls['userEmail'].setValue(_this.Employees.userEmail, { onlySelf: true });
            _this.userForm.controls['userPhone'].setValue(_this.Employees.userPhone, { onlySelf: true });
            _this.userForm.controls['userRole'].setValue(_this.Employees.userRole, { onlySelf: true });
            _this.userForm.controls['country'].setValue(_this.Employees.country._id, { onlySelf: true });
            _this.userForm.controls['state'].setValue(_this.Employees.state._id, { onlySelf: true });
            _this.userForm.controls['city'].setValue(_this.Employees.city._id, { onlySelf: true });
            _this.userForm.controls['gender'].setValue(_this.Employees.gender, { onlySelf: true });
            _this.userForm.controls['address'].setValue(_this.Employees.userAddress, { onlySelf: true });
            _this.userForm.controls['businessName'].setValue(res['employer'].businessName, { onlySelf: true });
            _this.userForm.controls['businessAddress'].setValue(res['employer'].businessAddress, { onlySelf: true });
            _this.userForm.controls['businessLogo'].setValue(res['employer'].businessLogo, { onlySelf: true });
            _this.userForm.controls['workIdCard'].setValue(res['employer'].workIdCard, { onlySelf: true });
            _this.userForm.controls['workId'].setValue(res['employer'].workIdCard, { onlySelf: true });
            _this.userForm.controls['companyRegistrationNo'].setValue(res['employer'].companyRegistrationNo, { onlySelf: true });
        });
    };
    CopempeditComponent.prototype.saveUser = function () {
        var _this = this;
        console.log(this.userForm.value.id);
        if (this.userForm.value.userFirstName == '') {
            this.toastr.error('Usr name is required');
            return false;
        }
        if (this.userForm.valid) {
            var query = '/' + this.userForm.value.id;
            this.service.updatecorpEmployee(this.userForm.value, query).subscribe(function (data) {
                console.log(data);
                _this.toastr.success('User Updated Successfully');
                _this._router.navigate(['/employee']);
            }, function (error) {
                _this.toastr.error('Error');
            });
        }
    };
    CopempeditComponent.prototype.myUploaderNew = function (event1) {
        var _this = this;
        this.service.uploadLogo(event1).subscribe(function (data) {
            console.log(data);
            _this.userForm.controls['businessLogo'].setValue(data['path'].businessLogo);
            _this.userForm.controls['workIdCard'].setValue(data['path'].businessLogo);
            _this.userForm.controls['companyRegistrationNo'].setValue(data['path'].businessLogo);
            //  this.profile_image = data.data.url;
            _this.msg = 'Uploded successfully';
        }, function (error) {
            console.log('error');
        });
    };
    CopempeditComponent.prototype.autoCompleteCallback1 = function (data) {
        if (data.data.formatted_address == '') {
            this.address = "";
        }
        else {
            this.address = JSON.stringify(data.data.formatted_address);
        }
        this.userForm.controls['address'].setValue(this.address);
    };
    CopempeditComponent.prototype.ngOnInit = function () {
        this.getUsers();
        this.getCountries();
    };
    CopempeditComponent.prototype.getCountries = function () {
        var _this = this;
        this.countryservice.getCountries().subscribe(function (res) {
            _this.Countries = res['countries'];
        });
    };
    CopempeditComponent.prototype.getStates = function (id) {
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
    CopempeditComponent.prototype.getCities = function (id) {
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
    CopempeditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-copempedit',
            template: __webpack_require__(/*! ./copempedit.component.html */ "./src/app/employee/copempedit/copempedit.component.html"),
            styles: [__webpack_require__(/*! ./copempedit.component.scss */ "./src/app/employee/copempedit/copempedit.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_employee_service__WEBPACK_IMPORTED_MODULE_6__["EmployeeService"],
            _services_country_service__WEBPACK_IMPORTED_MODULE_9__["CountryService"],
            _services_state_service__WEBPACK_IMPORTED_MODULE_8__["StateService"],
            _services_city_service__WEBPACK_IMPORTED_MODULE_10__["CityService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _agm_core__WEBPACK_IMPORTED_MODULE_5__["MapsAPILoader"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], CopempeditComponent);
    return CopempeditComponent;
}());



/***/ }),

/***/ "./src/app/employee/empinfo/empinfo.component.html":
/*!*********************************************************!*\
  !*** ./src/app/employee/empinfo/empinfo.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-12\">\n  <div class=\"page-title\">\n\n      <div class=\"pull-left\">\n          <!-- PAGE HEADING TAG - START -->\n\n          <h1 class=\"title\">Manage Employers</h1>\n          <!-- PAGE HEADING TAG - END -->\n      </div>\n\n      <div class=\"pull-right hidden-xs\">\n          <ol class=\"breadcrumb\">\n              <li>\n                  <a routerLink=\"/\">\n                      <i class=\"fa fa-home\"></i>Home</a>\n              </li>\n              <li class=\"active\">\n                  <strong>Employers</strong>\n              </li>\n\n          </ol>\n      </div>\n\n  </div>\n  <div class=\"custum-links\" style=\"position: absolute; right: 15px; z-index: 1\">\n      <a routerLink=\"/employee/add-ind-employee\" style=\"font-weight: bold;\">\n          <i class=\"fa fa-plus\"></i> Add Individual Employer </a> &nbsp;\n      <a routerLink=\"/employee/add-corp-employee\" style=\"font-weight: bold;\">\n          <i class=\"fa fa-plus\"></i> Add Corporate Employer</a>\n  </div>\n</div>\n\n\n\n<div class=\"col-md-12\">\n  <div class=\"row\">\n      <div class=\"col-12\">\n          <ul class=\"nav nav-tabs primary\"  role=\"tablist\">\n              <li class=\"nav-item\">\n                  <a class=\"nav-link active\">\n                      <i class=\"fa fa-user\"></i> Employers List\n                  </a>\n              </li>\n             <!-- <li class=\"nav-item\">\n                  <a class=\"nav-link\" [routerLink]=\"['system-users']\">\n                      <i class=\"fa fa-info-circle\"></i> System Users\n                  </a>\n              </li>-->\n\n          </ul>\n      </div>\n\n\n\n\n  </div>\n</div>\n\n<!-- MAIN CONTENT AREA STARTS -->\n\n<div class=\"col-xl-12\">\n  <section class=\"box \">\n      <!-- <header class=\"panel_header\">\n                  <h2 class=\"title float-left\"></h2>\n                  <div class=\"float-right\" style=\"margin-top:20px;margin-right:40px;\">\n                      <a [routerLink]=\"['archive-user']\" class=\"btn btn-primary\"> Archive User</a>\n                  </div>\n              </header> -->\n      <div class=\"content-body\">\n          <div class=\"row margin-0\">\n\n              <div class=\"col-lg-4\">\n\n              </div>\n              <div class=\"col-lg-8\">\n                  <form>\n                      <!--                                 \n                              <div class=\"col-lg-3\" style=\"float:left\">\n                                  Status\n                              </div>\n                              <div class=\"col-lg-3\" style=\"float:left\">\n                                  Completeness\n                              </div>\n                              <div class=\"col-lg-3\" style=\"float:right\">\n                                  Onboard Date\n                              </div> -->\n                  </form>\n              </div>\n          </div>\n          <div class=\"row margin-0\">\n\n          </div>\n          <br>\n          <div class=\"row\">\n              <div class=\"col-12\">\n                  <!-- ********************************************** -->\n                  <div></div>\n\n                  <div class=\"\">\n\n                      <div class=\"pagination-data\" style=\"overflow: scroll;height:600px;min-height:600px;\">\n\n                          <table id=\"example-11\" class=\"display table table-bordered table-striped  dt-responsive dataTable no-footer\" cellspacing=\"0\"\n                              width=\"100%\" *ngIf=\"no_data==false\">\n                              <thead>\n                                  <tr>\n                                      <th>S.No.</th>\n                                      <th> First Name </th>\n                                      <th> Last Name </th>\n                                      <th> Email </th>\n                                      <th> Mobile No</th>\n                                      <th> Country </th>\n                                      <th> User Role </th>\n                                      <th> Archive/Inactive </th>\n                                      <th>Action</th>\n                                  </tr>\n                              </thead>\n                              <tr></tr>\n                              <tr *ngFor=\"let user of Employees ;  let i = index\">\n                                   \n                                  <td class=\"ng-binding\"> {{i + 1}} </td>\n                                  <td class=\"ng-binding\"> {{user.user?.userFirstName == ''?'N/A':user.user?.userFirstName}} </td>\n                                  <td class=\"ng-binding\"> {{(user.user?.userLastName == undefined || user.user?.userLastName == '')?'N/A':user.user?.userLastName}} </td>\n                                  <td class=\"ng-binding\"> {{(user.user?.userEmail == undefined || user.user?.userEmail == '')?'N/A':user.user?.userEmail}} </td>\n                                  <td class=\"ng-binding\"> {{user.user?.userPhone == ''?'N/A':user.user?.userPhone}} </td>\n                                  <td class=\"ng-binding\"> {{user.user?.country.countryName == ''?'N/A':user.user?.country.countryName}} </td>\n                                  <td class=\"ng-binding\"> {{user.user.userRole}} </td>\n                                  <td class=\"ng-binding\"> <button>{{user.user.userStatus}} </button> </td>\n                                  \n                                  <td style=\"min-width:120px;\">\n                                        <i class=\"fa fa-trash ng-pristine text-danger ng-untouched ng-valid ng-empty\" ng-model=\"_id\" data-toggle=\"modal\" data-target=\"#myModal-delete\" aria-hidden=\"true\" title=\"Delete user\" (click)=\"deleteemployee(user._id)\"></i> &nbsp;\n                                           \n                                        <a  *ngIf=\"user.user.userRole=='CorporateEmployer'\"  [routerLink]=\"['edit-corp-employee', user._id]\">\n                                            <i class=\"fa fa-eye text-primary\" aria-hidden=\"true\" title=\"view user\"></i>\n                                        </a>\n                                        <a  *ngIf=\"user.user.userRole=='IndividualEmployer'\"  [routerLink]=\"['edit-ind-employee', user._id]\">\n                                            <i class=\"fa fa-eye text-primary\" aria-hidden=\"true\" title=\"view user\"></i>\n                                        </a>\n                                         &nbsp;\n                                         <a *ngIf=\"user.user.userRole=='CorporateEmployer'\"  [routerLink]=\"['edit-corp-employee', user._id]\">\n                                            <i class=\"fa fa-edit text-success\" aria-hidden=\"true\" title=\"edit user\"></i>\n                                        </a>\n                                         <a *ngIf=\"user.user.userRole=='IndividualEmployer'\"  [routerLink]=\"['edit-ind-employee', user._id]\">\n                                            <i class=\"fa fa-edit text-success\" aria-hidden=\"true\" title=\"edit user\"></i>\n                                        </a>\n                                  </td>\n                              </tr>\n                              <tr *ngIf=\"no_data\">\n                                  <td colspan=\"11\">\n                                      No Data Found\n                                  </td>\n                              </tr>\n                          </table>\n\n                          <table id=\"example-11\" class=\"display table table-bordered table-striped  dt-responsive dataTable no-footer\" cellspacing=\"0\"\n                              width=\"100%\" *ngIf=\"no_data\">\n                              <thead>\n                                  <tr>\n\n                                          <th>S.No.</th>\n                                          <th> First Name </th>\n                                          <th> Last Name </th>\n                                          <th> Email </th>\n                                          <th> Mobile No</th>\n                                          <th> Country </th>\n                                          <th> Archive/Inactive </th>\n                                          <th>Action</th>\n\n                                  </tr>\n                              </thead>\n                              <tr *ngIf=\"no_data\">\n                                  <td colspan=\"8\" align=\"center\">\n                                      <b>No Data Found</b>\n                                  </td>\n                              </tr>\n                          </table>\n\n                      </div>\n                  \n                  </div>\n\n                  <!-- ********************************************** -->\n              </div>\n          </div>\n      </div>\n   \n    \n  </section>\n</div>\n<!-- MAIN CONTENT AREA ENDS -->\n"

/***/ }),

/***/ "./src/app/employee/empinfo/empinfo.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/employee/empinfo/empinfo.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section.box {\n  border-top: 2px solid #fff; }\n"

/***/ }),

/***/ "./src/app/employee/empinfo/empinfo.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/employee/empinfo/empinfo.component.ts ***!
  \*******************************************************/
/*! exports provided: EmpinfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmpinfoComponent", function() { return EmpinfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_employee_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/employee.service */ "./src/app/services/employee.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EmpinfoComponent = /** @class */ (function () {
    function EmpinfoComponent(service, route, modalService, _router) {
        this.service = service;
        this.route = route;
        this.modalService = modalService;
        this._router = _router;
        this.employeeRef = null;
        this.modalRef = null;
    }
    EmpinfoComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    EmpinfoComponent.prototype.getUsers = function () {
        var _this = this;
        this.service.getEmployee().subscribe(function (res) {
            console.log(res);
            _this.totalItem = res['employer'].length;
            if (_this.totalItem == 0) {
                _this.no_data = true;
            }
            else {
                _this.no_data = false;
            }
            _this.Employees = res['employer'];
        });
    };
    EmpinfoComponent.prototype.open = function (content) {
        var _this = this;
        this.modalRef = this.modalService.open(content);
        this.modalRef.result.then(function (result) {
            _this.employeeRef = null;
        }, function (reason) {
            _this.employeeRef = null;
        });
    };
    EmpinfoComponent.prototype.delete_u = function (modal, userid) {
        this.employeeRef = userid;
        this.open(modal);
    };
    EmpinfoComponent.prototype.deleteemployee = function (id) {
    };
    EmpinfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-empinfo',
            template: __webpack_require__(/*! ./empinfo.component.html */ "./src/app/employee/empinfo/empinfo.component.html"),
            styles: [__webpack_require__(/*! ./empinfo.component.scss */ "./src/app/employee/empinfo/empinfo.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_employee_service__WEBPACK_IMPORTED_MODULE_1__["EmployeeService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], EmpinfoComponent);
    return EmpinfoComponent;
}());



/***/ }),

/***/ "./src/app/employee/employee.module.ts":
/*!*********************************************!*\
  !*** ./src/app/employee/employee.module.ts ***!
  \*********************************************/
/*! exports provided: EmployeeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeModule", function() { return EmployeeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _empinfo_empinfo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./empinfo/empinfo.component */ "./src/app/employee/empinfo/empinfo.component.ts");
/* harmony import */ var _indempadd_indempadd_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./indempadd/indempadd.component */ "./src/app/employee/indempadd/indempadd.component.ts");
/* harmony import */ var _copempadd_copempadd_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./copempadd/copempadd.component */ "./src/app/employee/copempadd/copempadd.component.ts");
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
/* harmony import */ var _indempadd_control_messages_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./indempadd/control-messages.component */ "./src/app/employee/indempadd/control-messages.component.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var ng4_geoautocomplete__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng4-geoautocomplete */ "./node_modules/ng4-geoautocomplete/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _copempedit_copempedit_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./copempedit/copempedit.component */ "./src/app/employee/copempedit/copempedit.component.ts");
/* harmony import */ var _indempedit_indempedit_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./indempedit/indempedit.component */ "./src/app/employee/indempedit/indempedit.component.ts");
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
                'component': _empinfo_empinfo_component__WEBPACK_IMPORTED_MODULE_2__["EmpinfoComponent"],
            },
            {
                'path': 'add-ind-employee',
                'component': _indempadd_indempadd_component__WEBPACK_IMPORTED_MODULE_3__["IndempaddComponent"],
            },
            {
                'path': 'edit-ind-employee/:driverid',
                'component': _indempedit_indempedit_component__WEBPACK_IMPORTED_MODULE_19__["IndempeditComponent"],
            },
            {
                'path': 'add-corp-employee',
                'component': _copempadd_copempadd_component__WEBPACK_IMPORTED_MODULE_4__["CopempaddComponent"],
            },
            {
                'path': 'edit-corp-employee/:driverid',
                'component': _copempedit_copempedit_component__WEBPACK_IMPORTED_MODULE_18__["CopempeditComponent"],
            }
        ],
    },
];
var EmployeeModule = /** @class */ (function () {
    function EmployeeModule() {
    }
    EmployeeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_14__["AgmCoreModule"].forRoot({
                    apiKey: "AIzaSyAp5vIeGvze_ZWYwee-fVE3JS3LYnREZP0",
                    libraries: ["places"]
                }),
                ngx_toastr__WEBPACK_IMPORTED_MODULE_17__["ToastrModule"].forRoot(),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"].forRoot(),
                ng4_geoautocomplete__WEBPACK_IMPORTED_MODULE_16__["Ng4GeoautocompleteModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
                _theme_layouts_layout_module__WEBPACK_IMPORTED_MODULE_6__["LayoutModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                ngx_uploader__WEBPACK_IMPORTED_MODULE_10__["NgxUploaderModule"],
                ng2_pagination__WEBPACK_IMPORTED_MODULE_12__["Ng2PaginationModule"],
                primeng_components_fileupload_fileupload__WEBPACK_IMPORTED_MODULE_11__["FileUploadModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_15__["ScheduleModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_15__["CalendarModule"]
            ],
            declarations: [_empinfo_empinfo_component__WEBPACK_IMPORTED_MODULE_2__["EmpinfoComponent"], _indempadd_indempadd_component__WEBPACK_IMPORTED_MODULE_3__["IndempaddComponent"], _copempadd_copempadd_component__WEBPACK_IMPORTED_MODULE_4__["CopempaddComponent"], _indempadd_control_messages_component__WEBPACK_IMPORTED_MODULE_13__["ControlMessages"], _copempedit_copempedit_component__WEBPACK_IMPORTED_MODULE_18__["CopempeditComponent"], _indempedit_indempedit_component__WEBPACK_IMPORTED_MODULE_19__["IndempeditComponent"]]
        })
    ], EmployeeModule);
    return EmployeeModule;
}());



/***/ }),

/***/ "./src/app/employee/indempadd/control-messages.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/employee/indempadd/control-messages.component.ts ***!
  \******************************************************************/
/*! exports provided: ControlMessages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlMessages", function() { return ControlMessages; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_validation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/validation.service */ "./src/app/services/validation.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ControlMessages = /** @class */ (function () {
    function ControlMessages() {
    }
    Object.defineProperty(ControlMessages.prototype, "errorMessage", {
        get: function () {
            for (var propertyName in this.control.errors) {
                if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
                    return _services_validation_service__WEBPACK_IMPORTED_MODULE_2__["ValidationService"].getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
                }
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"])
    ], ControlMessages.prototype, "control", void 0);
    ControlMessages = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'control-messages',
            template: "<div class=\"error\" style=\"color:red;\" *ngIf=\"errorMessage !== null\">{{errorMessage}}</div>"
        }),
        __metadata("design:paramtypes", [])
    ], ControlMessages);
    return ControlMessages;
}());



/***/ }),

/***/ "./src/app/employee/indempadd/indempadd.component.html":
/*!*************************************************************!*\
  !*** ./src/app/employee/indempadd/indempadd.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n      <div class=\"col-12\">\n        <div class=\"page-title\">\n    \n            <div class=\"pull-left\">\n                <!-- PAGE HEADING TAG - START -->\n    \n                <h1 class=\"title\">Add Individual Employer</h1>\n                <!-- PAGE HEADING TAG - END -->\n            </div>\n    \n            <div class=\"pull-right hidden-xs\">\n                <ol class=\"breadcrumb\">\n                    <li>\n                        <a routerLink=\"/\">\n                            <i class=\"fa fa-home\"></i>Home</a>\n                    </li>\n                    <li>\n                        <a routerLink=\"/employee\">\n                            <i class=\"fa fa-list-ol\"></i>Employer</a>\n                    </li>\n                    <li class=\"active\">\n                        <strong>Add Individual Employer</strong>\n                    </li>\n    \n                </ol>\n            </div>\n    \n        </div>\n       \n    </div>\n    \n      <div class=\"col-12\">\n          <div class=\"page-title\">\n\n              <div class=\"float-left\">\n                  <!-- PAGE HEADING TAG - START -->\n            \n              </div>\n              <div class=\"float-right\">\n                 <!-- <a [routerLink]=\"['add-subadmin']\"> <i class=\"fa fa-plus\"></i>Dashboard </a>-->\n\n              </div>\n\n          </div>\n      </div>\n      <div class=\"clearfix\"></div>\n      <!-- MAIN CONTENT AREA STARTS -->\n\n      <div class=\"col-xl-12\">\n          <section class=\"box \">\n                <div class=\"content-body \">\n                  <div class=\"row\">\n                      <div class=\"col-12\">\n                        <div class=\"container\">\n                            <form [formGroup]=\"userForm\" (submit)=\"saveUser()\">\n                                 \n                                <div  class=\"form-group row\">\n                                    <div class=\"col-sm-3\">\n                                        <label class=\"mt-2\" for=\"userFirstName\"><strong>First Name*</strong></label>\n                                    </div>\n                                    <div  class=\"col-sm-9\">\n                                        <input  type=\"text\" formControlName=\"userFirstName\" class=\"form-control\" id=\"userFirstName\" maxlength=\"40\" placeholder=\"First Name\"/> \n                                    </div>\n                                </div>\n\n                                <div  class=\"form-group row\">\n                                    <div class=\"col-sm-3\">\n                                        <label class=\"mt-2\" for=\"userLastName\"><strong>Last Name*</strong></label>\n                                    </div>\n                                    <div  class=\"col-sm-9\">\n                                        <input  type=\"text\" formControlName=\"userLastName\" class=\"form-control\" id=\"userLastName\" maxlength=\"40\" placeholder=\"Last Name\"/> \n                                    </div>\n                                </div>\n                               \n                                 <div  class=\"form-group row\">\n                                    <div class=\"col-sm-3\">\n                                        <label class=\"mt-2\" for=\"userEmail\"><strong>Email*</strong></label>\n                                    </div>\n                                    <div  class=\"col-sm-9\">\n                                        <input type=\"text\" formControlName=\"userEmail\"  class=\"form-control\" max=\"40\" id=\"userEmail\" placeholder=\"Email\"/>  <br>\n                                       \n                                   </div>\n                                </div>\n                                \n                                <div  class=\"form-group row\">\n                                      <div class=\"col-sm-3\">\n                                          <label class=\"mt-2\" for=\"gender\"><strong>Gender*</strong></label>\n                                      </div>\n                                      <div  class=\"col-sm-9\">\n                                        <select id=\"gender\" formControlName=\"gender\" class=\"form-control\" >\n                                            <option *ngFor=\"let s of gender\" [ngValue]=\"s.value\">{{ s.name }}</option>\n                                         </select>\n                                      </div>\n                                  </div>\n\n                                <div  class=\"form-group row\">\n                                    <div class=\"col-sm-3\">\n                                        <label class=\"mt-2\" for=\"userPhone\"><strong>Mobile No*</strong></label>\n                                    </div>\n                                    <div  class=\"col-sm-9\">\n                                        \n                                        <input type=\"text\" formControlName=\"userPhone\" class=\"form-control phone_number\" maxlength=\"10\" id=\"userPhone\" name=\"phoneNumber\" placeholder=\"Phone Number\" />\n                                      \n                                    </div>\n                                </div>\n                               \n                                <div  class=\"form-group row\">\n                                    <div class=\"col-sm-3\">\n                                        <label class=\"mt-2\" for=\"userPassword\"><strong>Password*</strong></label>\n                                    </div>\n                                    <div  class=\"col-sm-9\">\n                                        <input type=\"userPassword\" formControlName=\"userPassword\"  class=\"form-control\" max=\"40\" id=\"password\" placeholder=\"Password\" />  <br>\n                                       \n                                   </div>\n                                </div>\n                                <div  class=\"form-group row\">\n                                    <div class=\"col-sm-3\">\n                                        <label class=\"mt-2\" for=\"confirmpassword\"><strong>Confirm Password*</strong></label>\n                                    </div>\n                                    <div  class=\"col-sm-9\">\n                                        <input type=\"password\"  class=\"form-control\" max=\"40\" id=\"confirmpassword\"  placeholder=\"Confirm Password\" />  <br>\n                                      \n                                   </div>\n                                </div>\n                                \n                                  <div  class=\"form-group row\">\n                                      <div class=\"col-sm-3\">\n                                          <label class=\"mt-2\" for=\"country\"><strong>Country*</strong></label>\n                                      </div>\n                                      <div  class=\"col-sm-9\">\n                                        <select id=\"country\" formControlName=\"country\"  (change)=\"getStates()\" class=\"form-control\" >\n                                            <option>--Select--</option>\n                                            <option *ngFor=\"let s of Countries\" [ngValue]=\"s._id\">{{ s.countryName }}</option>\n                                        </select> \n                                     </div>\n                                  </div>\n\n                                   <div  class=\"form-group row\">\n                                      <div class=\"col-sm-3\">\n                                          <label class=\"mt-2\" for=\"state\"><strong>State Name*</strong></label>\n                                      </div>\n                                      <div  class=\"col-sm-9\">\n                                          <select id=\"state\" formControlName=\"state\"  (change)=\"getCities()\" class=\"form-control\" >\n                                            <option>--Select--</option>\n                                            <option *ngFor=\"let s of States\" [ngValue]=\"s._id\"> {{ s.stateName }} </option>\n                                          </select> \n                                       </div>\n                                    </div>\n  \n                                    <div  class=\"form-group row\">\n                                      <div class=\"col-sm-3\">\n                                          <label class=\"mt-2\" for=\"city\"><strong>City Name*</strong></label>\n                                      </div>\n                                      <div  class=\"col-sm-9\">\n                                          <select id=\"city\" formControlName=\"city\"   class=\"form-control\" >\n                                            <option>--Select--</option>\n                                            <option *ngFor=\"let s of Cities\" [ngValue]=\"s._id\"> {{ s.cityName }} </option>\n                                          </select> \n                                       </div>\n                                 </div>\n\n                                <div  class=\"form-group row\">\n                                    <div class=\"col-sm-3\">\n                                        <label class=\"mt-2\" for=\"address\"><strong>Address*</strong></label>\n                                    </div>\n                                    <div  class=\"col-sm-9\">\n                                        <ng4geo-autocomplete (componentCallback)=\"autoCompleteCallback1($event)\" ></ng4geo-autocomplete>\n                                        <input type=\"hidden\" formControlName=\"address\" name=\"address\" id=\"userAddress\">\n                                    </div>\n                                 </div>\n                                \n                                 <div  class=\"form-group row\">\n                                      <div class=\"col-sm-3\">\n                                          <label class=\"mt-2\" for=\"userClassLicence\"><strong>User Class Licence*</strong></label>\n                                      </div>\n                                      <div  class=\"col-sm-9\">\n                                          <input type=\"text\"  class=\"form-control\"  formControlName=\"userClassLicence\"  id=\"userClassLicence\"  placeholder=\"User Class Licence\" />  <br>\n                                      </div>\n                                  </div>\n                                \n                                  <div  class=\"form-group row\">\n                                      <div class=\"col-sm-3\">\n                                          <label class=\"mt-2\" for=\"name\"><strong>Individual Employer's image*</strong></label>\n                                      </div>\n                                      <div  class=\"col-sm-9\">\n                                          <label for=\"fileToUpload\">\n                                             <input type=\"File\" class=\"form-control\" name=\"fileToUpload\" id=\"fileToUpload\" (change)=\"myUploaderNew($event)\">\n                                            <input type=\"hidden\" formControlName=\"selfieImage\" id=\"selfieImage\" >\n                                           </label>\n                                          <div style=\"color:green;\">{{msg}}</div>\n                                      </div>\n                                   </div>\n                               \n                      \n                                 <div  class=\"form-group row\">\n                                    <div class=\"col-sm-3\">\n                                        <label class=\"mt-2\" for=\"name\"><strong></strong></label>\n                                    </div>\n                                    <div  class=\"col-sm-9\">\n                                        <button type=\"submit\"  class=\"btn btn-primary btn-block\">Add Individual Employer</button>\n                                    </div>\n                                </div>    \n                               \n                            </form>\n                  \n                         \n                         \n                         </div>\n                      </div>\n                  </div>\n              </div>\n          </section>\n      </div>\n\n\n\n\n\n\n    \n\n\n\n\n"

/***/ }),

/***/ "./src/app/employee/indempadd/indempadd.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/employee/indempadd/indempadd.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  width: 700px; }\n"

/***/ }),

/***/ "./src/app/employee/indempadd/indempadd.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/employee/indempadd/indempadd.component.ts ***!
  \***********************************************************/
/*! exports provided: IndempaddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndempaddComponent", function() { return IndempaddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_uploader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-uploader */ "./node_modules/ngx-uploader/fesm5/ngx-uploader.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _services_employee_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/employee.service */ "./src/app/services/employee.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _services_state_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/state.service */ "./src/app/services/state.service.ts");
/* harmony import */ var _services_country_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/country.service */ "./src/app/services/country.service.ts");
/* harmony import */ var _services_city_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/city.service */ "./src/app/services/city.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var IndempaddComponent = /** @class */ (function () {
    function IndempaddComponent(formBuilder, route, service, countryservice, stateservice, cityservice, toastr, _router, http, mapsAPILoader, ngZone) {
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
            userFirstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            userLastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            userEmail: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            userPhone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            userRole: "IndividualEmployer",
            selfRegister: "no",
            userPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            gender: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            state: ['',],
            city: ['',],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            userClassLicence: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            selfieImage: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.userForm.controls['country'].setValue(this.default, { onlySelf: true });
        this.userForm.controls['gender'].setValue(this.default, { onlySelf: true });
        this.userForm.controls['state'].setValue(this.default, { onlySelf: true });
    }
    ;
    IndempaddComponent.prototype.saveUser = function () {
        var _this = this;
        if (this.userForm.value.userFirstName == '') {
            this.toastr.error('Usr name is required');
            return false;
        }
        console.log(this.userForm.value);
        if (this.userForm.dirty && this.userForm.valid) {
            this.service.createindEmployee(this.userForm.value).subscribe(function (data) {
                console.log(data);
                _this.toastr.success('User added Successfully');
                _this._router.navigate(['/employee']);
            }, function (error) {
                _this.toastr.error('Error');
            });
        }
    };
    IndempaddComponent.prototype.myUploaderNew = function (event1) {
        var _this = this;
        this.service.uploadLogo(event1).subscribe(function (data) {
            console.log(data);
            _this.userForm.controls['selfieImage'].setValue(data['path'].businessLogo);
            // this.userForm.controls['workIdCard'].setValue(data['path'].businessLogo);
            //  this.userForm.controls['companyRegistrationNo'].setValue(data['path'].businessLogo);
            //  this.profile_image = data.data.url;
            _this.msg = 'Uploded successfully';
        }, function (error) {
            console.log('error');
        });
    };
    IndempaddComponent.prototype.autoCompleteCallback1 = function (data) {
        if (data.data.formatted_address == '') {
            this.address = "";
        }
        else {
            this.address = JSON.stringify(data.data.formatted_address);
        }
        this.userForm.controls['address'].setValue(this.address);
    };
    IndempaddComponent.prototype.ngOnInit = function () {
        this.getCountries();
    };
    IndempaddComponent.prototype.getCountries = function () {
        var _this = this;
        this.countryservice.getCountries().subscribe(function (res) {
            _this.Countries = res['countries'];
        });
    };
    IndempaddComponent.prototype.getStates = function () {
        var _this = this;
        var cid = this.userForm.value.country;
        var query = '?country_id=' + cid;
        // let query = '?country_id='+'5b64792806ff811e1f06f0d0';
        this.stateservice.getStates(query).subscribe(function (res) {
            console.log(res);
            _this.States = res['states'];
        });
    };
    IndempaddComponent.prototype.getCities = function () {
        var _this = this;
        var cid = this.userForm.value.state;
        // let query = '?state_id=5b6479ab06ff811e1f06f110';
        var query = '?state_id=' + cid;
        this.cityservice.getCities(query).subscribe(function (res) {
            _this.Cities = res['cities'];
        });
    };
    IndempaddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-indempadd',
            template: __webpack_require__(/*! ./indempadd.component.html */ "./src/app/employee/indempadd/indempadd.component.html"),
            styles: [__webpack_require__(/*! ./indempadd.component.scss */ "./src/app/employee/indempadd/indempadd.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_employee_service__WEBPACK_IMPORTED_MODULE_6__["EmployeeService"],
            _services_country_service__WEBPACK_IMPORTED_MODULE_9__["CountryService"],
            _services_state_service__WEBPACK_IMPORTED_MODULE_8__["StateService"],
            _services_city_service__WEBPACK_IMPORTED_MODULE_10__["CityService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _agm_core__WEBPACK_IMPORTED_MODULE_5__["MapsAPILoader"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], IndempaddComponent);
    return IndempaddComponent;
}());



/***/ }),

/***/ "./src/app/employee/indempedit/indempedit.component.html":
/*!***************************************************************!*\
  !*** ./src/app/employee/indempedit/indempedit.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n      <div class=\"col-12\">\n        <div class=\"page-title\">\n    \n            <div class=\"pull-left\">\n                <!-- PAGE HEADING TAG - START -->\n    \n                <h1 class=\"title\">Edit Individual Employer</h1>\n                <!-- PAGE HEADING TAG - END -->\n            </div>\n    \n            <div class=\"pull-right hidden-xs\">\n                <ol class=\"breadcrumb\">\n                    <li>\n                        <a routerLink=\"/\">\n                            <i class=\"fa fa-home\"></i>Home</a>\n                    </li>\n                    <li>\n                        <a routerLink=\"/employee\">\n                            <i class=\"fa fa-list-ol\"></i>Employer</a>\n                    </li>\n                    <li class=\"active\">\n                        <strong>Edit Individual Employer</strong>\n                    </li>\n    \n                </ol>\n            </div>\n    \n        </div>\n       \n    </div>\n    \n      <div class=\"col-12\">\n          <div class=\"page-title\">\n\n              <div class=\"float-left\">\n                  <!-- PAGE HEADING TAG - START -->\n            \n              </div>\n              <div class=\"float-right\">\n                 <!-- <a [routerLink]=\"['add-subadmin']\"> <i class=\"fa fa-plus\"></i>Dashboard </a>-->\n\n              </div>\n\n          </div>\n      </div>\n      <div class=\"clearfix\"></div>\n      <!-- MAIN CONTENT AREA STARTS -->\n\n      <div class=\"col-xl-12\">\n          <section class=\"box \">\n                <div class=\"content-body \">\n                  <div class=\"row\">\n                      <div class=\"col-12\">\n                        <div class=\"container\">\n                            <form [formGroup]=\"userForm\" (submit)=\"updateUser()\">\n                                 \n                                <div  class=\"form-group row\">\n                                    <div class=\"col-sm-3\">\n                                        <label class=\"mt-2\" for=\"userFirstName\"><strong>First Name*</strong></label>\n                                    </div>\n                                    <div  class=\"col-sm-9\">\n                                        <input  type=\"hidden\" formControlName=\"id\" class=\"form-control\"/> \n                                        <input  type=\"text\" formControlName=\"userFirstName\" class=\"form-control\" id=\"userFirstName\" maxlength=\"40\" placeholder=\"First Name\"/> \n                                    </div>\n                                </div>\n\n                                <div  class=\"form-group row\">\n                                    <div class=\"col-sm-3\">\n                                        <label class=\"mt-2\" for=\"userLastName\"><strong>Last Name*</strong></label>\n                                    </div>\n                                    <div  class=\"col-sm-9\">\n                                        <input  type=\"text\" formControlName=\"userLastName\" class=\"form-control\" id=\"userLastName\" maxlength=\"40\" placeholder=\"Last Name\"/> \n                                    </div>\n                                </div>\n                               \n                                 <div  class=\"form-group row\">\n                                    <div class=\"col-sm-3\">\n                                        <label class=\"mt-2\" for=\"userEmail\"><strong>Email*</strong></label>\n                                    </div>\n                                    <div  class=\"col-sm-9\">\n                                        <input type=\"text\" formControlName=\"userEmail\"  class=\"form-control\" max=\"40\" id=\"userEmail\" placeholder=\"Email\"/>  <br>\n                                       \n                                   </div>\n                                </div>\n                                \n                                <div  class=\"form-group row\">\n                                      <div class=\"col-sm-3\">\n                                          <label class=\"mt-2\" for=\"gender\"><strong>Gender*</strong></label>\n                                      </div>\n                                      <div  class=\"col-sm-9\">\n                                        <select id=\"gender\" formControlName=\"gender\" class=\"form-control\" >\n                                            <option *ngFor=\"let s of gender\" [ngValue]=\"s.value\">{{ s.name }}</option>\n                                         </select>\n                                      </div>\n                                  </div>\n\n                                <div  class=\"form-group row\">\n                                    <div class=\"col-sm-3\">\n                                        <label class=\"mt-2\" for=\"userPhone\"><strong>Mobile No*</strong></label>\n                                    </div>\n                                    <div  class=\"col-sm-9\">\n                                        \n                                        <input type=\"text\" formControlName=\"userPhone\" class=\"form-control phone_number\" maxlength=\"10\" id=\"userPhone\" name=\"phoneNumber\" placeholder=\"Phone Number\" />\n                                      \n                                    </div>\n                                </div>\n                               \n                              <!--  <div  class=\"form-group row\">\n                                    <div class=\"col-sm-3\">\n                                        <label class=\"mt-2\" for=\"userPassword\"><strong>Password*</strong></label>\n                                    </div>\n                                    <div  class=\"col-sm-9\">\n                                        <input type=\"userPassword\" formControlName=\"userPassword\"  class=\"form-control\" max=\"40\" id=\"password\" placeholder=\"Password\" />  <br>\n                                       \n                                   </div>\n                                </div>\n                                <div  class=\"form-group row\">\n                                    <div class=\"col-sm-3\">\n                                        <label class=\"mt-2\" for=\"confirmpassword\"><strong>Confirm Password*</strong></label>\n                                    </div>\n                                    <div  class=\"col-sm-9\">\n                                        <input type=\"password\"  class=\"form-control\" max=\"40\" id=\"confirmpassword\"  placeholder=\"Confirm Password\" />  <br>\n                                      \n                                   </div> \n                                </div> -->\n                                \n                                  <div  class=\"form-group row\">\n                                      <div class=\"col-sm-3\">\n                                          <label class=\"mt-2\" for=\"country\"><strong>Country*</strong></label>\n                                      </div>\n                                      <div  class=\"col-sm-9\">\n                                        <select id=\"country\" formControlName=\"country\"  (change)=\"getStates()\" class=\"form-control\" >\n                                            <option>--Select--</option>\n                                            <option *ngFor=\"let s of Countries\" [ngValue]=\"s._id\">{{ s.countryName }}</option>\n                                        </select> \n                                     </div>\n                                  </div>\n\n                                   <div  class=\"form-group row\">\n                                      <div class=\"col-sm-3\">\n                                          <label class=\"mt-2\" for=\"state\"><strong>State Name*</strong></label>\n                                      </div>\n                                      <div  class=\"col-sm-9\">\n                                          <select id=\"state\" formControlName=\"state\"  (change)=\"getCities()\" class=\"form-control\" >\n                                            <option>--Select--</option>\n                                            <option *ngFor=\"let s of States\" [ngValue]=\"s._id\"> {{ s.stateName }} </option>\n                                          </select> \n                                       </div>\n                                    </div>\n  \n                                    <div  class=\"form-group row\">\n                                      <div class=\"col-sm-3\">\n                                          <label class=\"mt-2\" for=\"city\"><strong>City Name*</strong></label>\n                                      </div>\n                                      <div  class=\"col-sm-9\">\n                                          <select id=\"city\" formControlName=\"city\"   class=\"form-control\" >\n                                            <option>--Select--</option>\n                                            <option *ngFor=\"let s of Cities\" [ngValue]=\"s._id\"> {{ s.cityName }} </option>\n                                          </select> \n                                       </div>\n                                 </div>\n\n                                <div  class=\"form-group row\">\n                                    <div class=\"col-sm-3\">\n                                        <label class=\"mt-2\" for=\"address\"><strong>Address*</strong></label>\n                                    </div>\n                                    <div  class=\"col-sm-9\">\n                                        <input type=\"text\" formControlName=\"address\"  class=\"form-control\"  name=\"address\" id=\"userAddress\">\n                                    </div>\n                                 </div>\n                                \n                                <!-- <div  class=\"form-group row\">\n                                      <div class=\"col-sm-3\">\n                                          <label class=\"mt-2\" for=\"userClassLicence\"><strong>User Class Licence*</strong></label>\n                                      </div>\n                                      <div  class=\"col-sm-9\">\n                                          <input type=\"text\"  class=\"form-control\"  formControlName=\"userClassLicence\"  id=\"userClassLicence\"  placeholder=\"User Class Licence\" />  <br>\n                                      </div>\n                                  </div>-->\n                                \n                                  <div  class=\"form-group row\">\n                                      <div class=\"col-sm-3\">\n                                          <label class=\"mt-2\" for=\"name\"><strong>Individual Employer's image*</strong></label>\n                                      </div>\n                                      <div  class=\"col-sm-9\">\n                                          <label for=\"fileToUpload\">\n                                             <input type=\"File\" class=\"form-control\" name=\"fileToUpload\" id=\"fileToUpload\" (change)=\"myUploaderNew($event)\">\n                                            <input type=\"hidden\" formControlName=\"selfieImage\" id=\"selfieImage\" >\n                                           </label>\n                                          <div style=\"color:green;\">{{msg}}</div>\n                                      </div>\n                                   </div>\n\n                                  <div  class=\"form-group row\">\n                                      <div class=\"col-sm-3\">\n                                          <label class=\"mt-2\" for=\"name\"><strong>Document*</strong></label>\n                                      </div>\n                                      <div  class=\"col-sm-9\">\n                                          <label for=\"documentImage\">\n                                             <input type=\"File\" class=\"form-control\" name=\"fileToUpload\" id=\"fileToUpload\" (change)=\"myUploaderNewd($event)\">\n                                            <input type=\"hidden\" formControlName=\"documentImage\" id=\"documentImage\" >\n                                           </label>\n                                          <div style=\"color:green;\">{{msg1}}</div>\n                                      </div>\n                                   </div>\n                               \n                      \n                                 <div  class=\"form-group row\">\n                                    <div class=\"col-sm-3\">\n                                        <label class=\"mt-2\" for=\"name\"><strong></strong></label>\n                                    </div>\n                                    <div  class=\"col-sm-9\">\n                                        <button type=\"submit\"  class=\"btn btn-primary btn-block\">Update Individual Employer</button>\n                                    </div>\n                                </div>    \n                               \n                            </form>\n                  \n                         \n                         \n                         </div>\n                      </div>\n                  </div>\n              </div>\n          </section>\n      </div>\n\n\n\n\n\n\n    \n\n\n\n\n"

/***/ }),

/***/ "./src/app/employee/indempedit/indempedit.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/employee/indempedit/indempedit.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  width: 700px; }\n"

/***/ }),

/***/ "./src/app/employee/indempedit/indempedit.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/employee/indempedit/indempedit.component.ts ***!
  \*************************************************************/
/*! exports provided: IndempeditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndempeditComponent", function() { return IndempeditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_uploader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-uploader */ "./node_modules/ngx-uploader/fesm5/ngx-uploader.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _services_employee_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/employee.service */ "./src/app/services/employee.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _services_state_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/state.service */ "./src/app/services/state.service.ts");
/* harmony import */ var _services_country_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/country.service */ "./src/app/services/country.service.ts");
/* harmony import */ var _services_city_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/city.service */ "./src/app/services/city.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var IndempeditComponent = /** @class */ (function () {
    function IndempeditComponent(formBuilder, route, service, countryservice, stateservice, cityservice, toastr, _router, http, mapsAPILoader, ngZone) {
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
        this.msg1 = null;
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
            id: [this.driverid, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            userFirstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            userLastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            userEmail: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            userPhone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            userRole: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            gender: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            state: ['',],
            city: ['',],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            // userClassLicence: ['', Validators.required],
            selfieImage: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            documentImage: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.userForm.controls['country'].setValue(this.default, { onlySelf: true });
        this.userForm.controls['gender'].setValue(this.default, { onlySelf: true });
        this.userForm.controls['state'].setValue(this.default, { onlySelf: true });
    }
    ;
    IndempeditComponent.prototype.getUsers = function () {
        var _this = this;
        var query = '/' + this.driverid;
        this.service.getEmployee(query).subscribe(function (res) {
            _this.Employees = res['employer'].user;
            _this.getStates(_this.Employees.country._id);
            _this.getCities(_this.Employees.state._id);
            // console.log(res)
            console.log(_this.Employees);
            _this.userForm.controls['id'].setValue(_this.Employees._id, { onlySelf: true });
            _this.userForm.controls['userFirstName'].setValue(_this.Employees.userFirstName, { onlySelf: true });
            _this.userForm.controls['userLastName'].setValue(_this.Employees.userLastName, { onlySelf: true });
            _this.userForm.controls['userEmail'].setValue(_this.Employees.userEmail, { onlySelf: true });
            _this.userForm.controls['userPhone'].setValue(_this.Employees.userPhone, { onlySelf: true });
            _this.userForm.controls['userRole'].setValue(_this.Employees.userRole, { onlySelf: true });
            _this.userForm.controls['country'].setValue(_this.Employees.country._id, { onlySelf: true });
            _this.userForm.controls['state'].setValue(_this.Employees.state._id, { onlySelf: true });
            _this.userForm.controls['city'].setValue(_this.Employees.city._id, { onlySelf: true });
            _this.userForm.controls['gender'].setValue(_this.Employees.gender, { onlySelf: true });
            _this.userForm.controls['address'].setValue(_this.Employees.userAddress, { onlySelf: true });
            _this.userForm.controls['selfieImage'].setValue(_this.Employees.selfieImage, { onlySelf: true });
            _this.userForm.controls['documentImage'].setValue(_this.Employees.documentImage, { onlySelf: true });
            //  this.userForm.controls['userClassLicence'].setValue( res['employer'].userClassLicence, {onlySelf: true});
        });
    };
    IndempeditComponent.prototype.updateUser = function () {
        var _this = this;
        if (this.userForm.value.userFirstName == '') {
            this.toastr.error('Usr name is required');
            return false;
        }
        // alert(this.userForm.value.id)
        console.log(this.userForm.value);
        //  if (this.userForm.valid) {
        // alert(this.userForm.value.id)
        var query = '/' + this.userForm.value.id;
        this.service.updateindEmployee(this.userForm.value, query).subscribe(function (data) {
            console.log(data);
            _this.toastr.success('User Updated Successfully');
            _this._router.navigate(['/employee']);
        }, function (error) {
            _this.toastr.error('Error');
        });
        //  }
    };
    IndempeditComponent.prototype.myUploaderNew = function (event1) {
        var _this = this;
        this.service.uploadLogo(event1).subscribe(function (data) {
            console.log(data);
            _this.userForm.controls['selfieImage'].setValue(data['path'].businessLogo);
            //   this.userForm.controls['documentImage'].setValue(data['path'].businessLogo);
            //  this.profile_image = data.data.url;
            _this.msg = 'Uploded successfully';
        }, function (error) {
            console.log('error');
        });
    };
    IndempeditComponent.prototype.myUploaderNewd = function (event1) {
        var _this = this;
        this.service.uploadLogo(event1).subscribe(function (data) {
            console.log(data);
            // this.userForm.controls['selfieImage'].setValue(data['path'].businessLogo);
            _this.userForm.controls['documentImage'].setValue(data['path'].businessLogo);
            //  this.profile_image = data.data.url;
            _this.msg1 = 'Uploded successfully';
        }, function (error) {
            console.log('error');
        });
    };
    IndempeditComponent.prototype.autoCompleteCallback1 = function (data) {
        if (data.data.formatted_address == '') {
            this.address = "";
        }
        else {
            this.address = JSON.stringify(data.data.formatted_address);
        }
        this.userForm.controls['address'].setValue(this.address);
    };
    IndempeditComponent.prototype.ngOnInit = function () {
        this.getUsers();
        this.getCountries();
    };
    IndempeditComponent.prototype.getCountries = function () {
        var _this = this;
        this.countryservice.getCountries().subscribe(function (res) {
            _this.Countries = res['countries'];
        });
    };
    IndempeditComponent.prototype.getStates = function (id) {
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
    IndempeditComponent.prototype.getCities = function (id) {
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
    IndempeditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-indempedit',
            template: __webpack_require__(/*! ./indempedit.component.html */ "./src/app/employee/indempedit/indempedit.component.html"),
            styles: [__webpack_require__(/*! ./indempedit.component.scss */ "./src/app/employee/indempedit/indempedit.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_employee_service__WEBPACK_IMPORTED_MODULE_6__["EmployeeService"],
            _services_country_service__WEBPACK_IMPORTED_MODULE_9__["CountryService"],
            _services_state_service__WEBPACK_IMPORTED_MODULE_8__["StateService"],
            _services_city_service__WEBPACK_IMPORTED_MODULE_10__["CityService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _agm_core__WEBPACK_IMPORTED_MODULE_5__["MapsAPILoader"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], IndempeditComponent);
    return IndempeditComponent;
}());



/***/ }),

/***/ "./src/app/services/employee.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/employee.service.ts ***!
  \**********************************************/
/*! exports provided: EmployeeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeService", function() { return EmployeeService; });
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







var EmployeeService = /** @class */ (function () {
    function EmployeeService(http, router) {
        this.http = http;
        this.router = router;
        this.config = new _services_config__WEBPACK_IMPORTED_MODULE_5__["Config"];
    }
    EmployeeService.prototype.getEmployee = function (query) {
        if (query === void 0) { query = ""; }
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].APIURL + '/employer' + query;
        return this
            .http
            .get(uri);
    };
    EmployeeService.prototype.createindEmployee = function (data) {
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].APIURL + '/users';
        return this
            .http
            .post(uri, data);
    };
    EmployeeService.prototype.updateindEmployee = function (data, query) {
        if (query === void 0) { query = ""; }
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].APIURL + '/users' + query;
        return this
            .http
            .put(uri, data);
    };
    EmployeeService.prototype.createcorpEmployee = function (data) {
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].APIURL + '/users';
        return this
            .http
            .post(uri, data);
    };
    EmployeeService.prototype.updatecorpEmployee = function (data, query) {
        if (query === void 0) { query = ""; }
        // alert(query)
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].APIURL + '/users' + query;
        return this
            .http
            .put(uri, data);
    };
    EmployeeService.prototype.uploadLogo = function (event) {
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].APIURL + '/users/images';
        var fileList = event.target.files;
        var file = fileList[0];
        var formData = new FormData();
        formData.append('businessLogo', file, file.name);
        return this
            .http
            .post(uri, formData);
    };
    EmployeeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], EmployeeService);
    return EmployeeService;
}());



/***/ })

}]);
//# sourceMappingURL=employee-module.js.map