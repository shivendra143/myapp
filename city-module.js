(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["city-module"],{

/***/ "./src/app/city/addcity/addcity.component.html":
/*!*****************************************************!*\
  !*** ./src/app/city/addcity/addcity.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n      <div class=\"col-12\">\n        <div class=\"page-title\">\n    \n            <div class=\"pull-left\">\n                <!-- PAGE HEADING TAG - START -->\n    \n                <h1 class=\"title\">Add City</h1>\n                <!-- PAGE HEADING TAG - END -->\n            </div>\n    \n            <div class=\"pull-right hidden-xs\">\n                <ol class=\"breadcrumb\">\n                    <li>\n                        <a routerLink=\"/\">\n                            <i class=\"fa fa-home\"></i>Home</a>\n                    </li>\n                    <li>\n                        <a routerLink=\"/city\">\n                            <i class=\"fa fa-list-ol\"></i>City Lists</a>\n                    </li>\n                    <li class=\"active\">\n                        <strong>Add City</strong>\n                    </li>\n    \n                </ol>\n            </div>\n    \n        </div>\n     \n    </div>\n    \n      <div class=\"col-12\">\n          <div class=\"page-title\">\n\n              <div class=\"float-left\">\n                  <!-- PAGE HEADING TAG - START -->\n            \n              </div>\n              <div class=\"float-right\">\n                 <!-- <a [routerLink]=\"['add-subadmin']\"> <i class=\"fa fa-plus\"></i>Dashboard </a>-->\n\n              </div>\n\n          </div>\n      </div>\n      <div class=\"clearfix\"></div>\n      <!-- MAIN CONTENT AREA STARTS -->\n    \n      <div class=\"col-xl-12\">\n            <section class=\"box \">\n                  <div class=\"content-body \">\n                    <div class=\"row\">\n                        <div class=\"col-12\">\n                          <div class=\"container\">\n                            <form [formGroup]=\"userForm\" (submit)=\"saveUser()\">\n                                 \n                              <div  class=\"form-group row\">\n                                <div class=\"col-sm-3\">\n                                    <label class=\"mt-2\" for=\"country\"><strong>Country*</strong></label>\n                                </div>\n                                <div  class=\"col-sm-9\">\n                                      <select id=\"country\" formControlName=\"country\"  (change)=\"getStates()\" class=\"form-control\" >\n                                              <option>--Select--</option>\n                                              <option *ngFor=\"let s of Countries\" [ngValue]=\"s._id\"> {{ s.countryName }}</option>\n                                      </select>    \n                                     \n                                </div>\n                              </div>\n                               \n                               <div  class=\"form-group row\">\n                                    <div class=\"col-sm-3\">\n                                        <label class=\"mt-2\" for=\"countryCode\"><strong>State Name*</strong></label>\n                                    </div>\n                                    <div  class=\"col-sm-9\">\n                                        <select id=\"country\" formControlName=\"stateName\"  (change)=\"getStates()\" class=\"form-control\" >\n                                          <option>--Select--</option>\n                                          <option *ngFor=\"let s of States\" [ngValue]=\"s._id\"> {{ s.stateName }}</option>\n                                        </select> \n                                  </div>\n                               </div>\n\n                               <div  class=\"form-group row\">\n                                    <div class=\"col-sm-3\">\n                                        <label class=\"mt-2\" for=\"cityName\"><strong>City Name*</strong></label>\n                                    </div>\n                                    <div  class=\"col-sm-9\">\n                                        <input type=\"text\" formControlName=\"cityName\"  class=\"form-control\" max=\"40\" id=\"cityName\"  placeholder=\"City Name\" />  <br>\n                                      \n                                  </div>\n                               </div>\n                                \n                                \n      \n                                   <div  class=\"form-group row\">\n                                      <div class=\"col-sm-3\">\n                                          <label class=\"mt-2\" for=\"name\"><strong></strong></label>\n                                      </div>\n                                      <div  class=\"col-sm-9\">\n                                          <button type=\"submit\"  class=\"btn btn-primary btn-block\">Add City</button>\n                                      </div>\n                                  </div>    \n                                 \n                              </form>\n                    \n                           \n                           </div>\n                        </div>\n                    </div>\n                </div>\n            </section>\n        </div>\n\n\n\n\n\n\n    "

/***/ }),

/***/ "./src/app/city/addcity/addcity.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/city/addcity/addcity.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/city/addcity/addcity.component.ts":
/*!***************************************************!*\
  !*** ./src/app/city/addcity/addcity.component.ts ***!
  \***************************************************/
/*! exports provided: AddcityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddcityComponent", function() { return AddcityComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_uploader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-uploader */ "./node_modules/ngx-uploader/fesm5/ngx-uploader.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _services_state_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/state.service */ "./src/app/services/state.service.ts");
/* harmony import */ var _services_country_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/country.service */ "./src/app/services/country.service.ts");
/* harmony import */ var _services_city_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/city.service */ "./src/app/services/city.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AddcityComponent = /** @class */ (function () {
    function AddcityComponent(formBuilder, route, service, countryservice, stateservice, toastr, _router, http, mapsAPILoader, ngZone) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.route = route;
        this.service = service;
        this.countryservice = countryservice;
        this.stateservice = stateservice;
        this.toastr = toastr;
        this._router = _router;
        this.http = http;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.msg = null;
        this.lat = '';
        this.lng = '';
        this.countryName = '';
        this.Countries = [{ 'country': '--Select--', '_id': '' }];
        this.States = [{ 'stateName': '--Select--', '_id': '' }];
        this.default = '';
        this.route.params.subscribe(function (params) {
            _this.driverid = params['driverid'];
            // console.log(this.driverid)
            _this.options = { concurrency: 1, maxUploads: 3 };
            _this.files = []; // local uploading files array
            _this.uploadInput = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // input events, we use this to emit data to ngx-uploader
            _this.humanizeBytes = ngx_uploader__WEBPACK_IMPORTED_MODULE_3__["humanizeBytes"];
        });
        this.userForm = this.formBuilder.group({
            'stateName': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'country': ['',],
            'cityName': ['',]
        });
        this.userForm.controls['stateName'].setValue(this.default, { onlySelf: true });
        this.userForm.controls['country'].setValue(this.default, { onlySelf: true });
    }
    AddcityComponent.prototype.saveUser = function () {
        var _this = this;
        console.log(this.userForm.value);
        if (this.userForm.value.country == '') {
            this.toastr.error('Country is required');
            return false;
        }
        if (this.userForm.dirty && this.userForm.valid) {
            this.service.addCities(this.userForm.value).subscribe(function (data) {
                _this.toastr.success('City added Successfully');
                _this._router.navigate(['/city']);
            }, function (error) {
                _this.toastr.error('error');
            });
        }
    };
    AddcityComponent.prototype.getCountries = function () {
        var _this = this;
        this.countryservice.getCountries().subscribe(function (res) {
            _this.Countries = res['countries'];
        });
    };
    AddcityComponent.prototype.getStates = function () {
        var _this = this;
        var cid = this.userForm.value.country;
        var query = '?country_id=' + cid;
        // let query = '?country_id='+'5b64792806ff811e1f06f0d0';
        this.stateservice.getStates(query).subscribe(function (res) {
            console.log(res);
            _this.States = res['states'];
        });
    };
    AddcityComponent.prototype.ngOnInit = function () {
        this.getCountries();
    };
    AddcityComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-addcity',
            template: __webpack_require__(/*! ./addcity.component.html */ "./src/app/city/addcity/addcity.component.html"),
            styles: [__webpack_require__(/*! ./addcity.component.scss */ "./src/app/city/addcity/addcity.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_city_service__WEBPACK_IMPORTED_MODULE_9__["CityService"],
            _services_country_service__WEBPACK_IMPORTED_MODULE_8__["CountryService"],
            _services_state_service__WEBPACK_IMPORTED_MODULE_7__["StateService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _agm_core__WEBPACK_IMPORTED_MODULE_5__["MapsAPILoader"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], AddcityComponent);
    return AddcityComponent;
}());



/***/ }),

/***/ "./src/app/city/city.module.ts":
/*!*************************************!*\
  !*** ./src/app/city/city.module.ts ***!
  \*************************************/
/*! exports provided: CityModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityModule", function() { return CityModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _cityinfo_cityinfo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cityinfo/cityinfo.component */ "./src/app/city/cityinfo/cityinfo.component.ts");
/* harmony import */ var _addcity_addcity_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addcity/addcity.component */ "./src/app/city/addcity/addcity.component.ts");
/* harmony import */ var _editcity_editcity_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editcity/editcity.component */ "./src/app/city/editcity/editcity.component.ts");
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
                'component': _cityinfo_cityinfo_component__WEBPACK_IMPORTED_MODULE_2__["CityinfoComponent"],
            },
            {
                'path': 'edit-city/:driverid',
                'component': _editcity_editcity_component__WEBPACK_IMPORTED_MODULE_4__["EditcityComponent"],
            },
            {
                'path': 'add-city',
                'component': _addcity_addcity_component__WEBPACK_IMPORTED_MODULE_3__["AddcityComponent"],
            }
        ],
    },
];
var CityModule = /** @class */ (function () {
    function CityModule() {
    }
    CityModule = __decorate([
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
            declarations: [_cityinfo_cityinfo_component__WEBPACK_IMPORTED_MODULE_2__["CityinfoComponent"], _addcity_addcity_component__WEBPACK_IMPORTED_MODULE_3__["AddcityComponent"], _editcity_editcity_component__WEBPACK_IMPORTED_MODULE_4__["EditcityComponent"]]
        })
    ], CityModule);
    return CityModule;
}());



/***/ }),

/***/ "./src/app/city/cityinfo/cityinfo.component.html":
/*!*******************************************************!*\
  !*** ./src/app/city/cityinfo/cityinfo.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n      <div class=\"col-12\">\n          <div class=\"page-title\">\n      \n              <div class=\"pull-left\">\n                  <!-- PAGE HEADING TAG - START -->\n      \n                  <h1 class=\"title\">Manage City Lists</h1>\n                  <!-- PAGE HEADING TAG - END -->\n              </div>\n      \n              <div class=\"pull-right hidden-xs\">\n                  <ol class=\"breadcrumb\">\n                      <li>\n                          <a routerLink=\"/\">\n                              <i class=\"fa fa-home\"></i>Home</a>\n                      </li>\n                      <li class=\"active\">\n                          <strong>City Lists</strong>\n                      </li>\n      \n                  </ol>\n              </div>\n      \n          </div>\n          <div class=\"custum-links\" style=\"position: absolute; right: 15px; z-index: 1\">\n              <a routerLink=\"/city/add-city\" style=\"font-weight: bold;\">\n                  <i class=\"fa fa-plus\"></i> Add City </a> &nbsp;\n             \n          </div>\n      </div>\n      \n        <div class=\"col-12\">\n            <div class=\"page-title\">\n  \n                <div class=\"float-left\">\n                    <!-- PAGE HEADING TAG - START -->\n              \n                </div>\n                <div class=\"float-right\">\n                   <!-- <a [routerLink]=\"['add-subadmin']\"> <i class=\"fa fa-plus\"></i>Dashboard </a>-->\n  \n                </div>\n  \n            </div>\n        </div>\n        <div class=\"clearfix\"></div>\n        <!-- MAIN CONTENT AREA STARTS -->\n  \n        <div class=\"col-xl-12\">\n            <section class=\"box \">\n                  <div class=\"content-body \">\n                    <div class=\"row\">\n                        <div class=\"col-12\">\n                          <div class=\"container\" style=\"margin-left: 0;max-width: 1299px;\">\n  \n                            <div class=\"pagination-data\" style=\"overflow: scroll;height:600px;min-height:600px;\">\n    \n                            <table id=\"example-11\" class=\"display table table-bordered table-hover table-condensed dataTable no-footer\" cellspacing=\"0\" width=\"100%\">\n                                <thead>\n                                    <tr>\n                                      <th>S.No.</th>\n                                      <th> City Name </th>\n                                      <th> Country Name </th>\n                                      <th> State Name </th>\n                                      <th> Action </th>\n                                      \n                                    </tr>\n                                </thead>\n                                <tbody>\n                                  <tr *ngFor=\"let conlist of Cities; let i=index\" class=\"ng-scope\">\n                                        <td class=\"ng-binding\"> {{i+1}} </td>\n                                        <td class=\"ng-binding\"> {{conlist.cityName}} </td>\n                                        <td class=\"ng-binding\"> {{conlist.country.countryName}} </td>\n                                        <td class=\"ng-binding\"> {{conlist.state.stateName}} </td>\n                                        <td style=\"min-width:120px;\">\n                                            <i class=\"fa fa-trash ng-pristine text-danger ng-untouched ng-valid ng-empty\" ng-model=\"_id\" data-toggle=\"modal\" data-target=\"#myModal-delete\" aria-hidden=\"true\" title=\"Delete user\" (click)=\"deleteCities(conlist._id)\"></i> &nbsp;\n  \n                                            <a [routerLink]=\"['edit-cty', conlist._id]\">\n                                                <i class=\"fa fa-eye text-primary\" aria-hidden=\"true\" title=\"view user\"></i>\n                                            </a> &nbsp; <a [routerLink]=\"['edit-city', conlist._id]\">\n                                                <i class=\"fa fa-edit text-success\" aria-hidden=\"true\" title=\"edit user\"></i>\n                                            </a>\n                                        </td>\n                                    </tr>\n  \n                                </tbody>\n                            </table>\n                            <!-- ********************************************** -->\n                            </div>\n                           </div>\n                        </div>\n                    </div>\n                </div>\n            </section>\n        </div>\n  \n  \n  \n  \n  \n  \n      "

/***/ }),

/***/ "./src/app/city/cityinfo/cityinfo.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/city/cityinfo/cityinfo.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/city/cityinfo/cityinfo.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/city/cityinfo/cityinfo.component.ts ***!
  \*****************************************************/
/*! exports provided: CityinfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityinfoComponent", function() { return CityinfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_city_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/city.service */ "./src/app/services/city.service.ts");
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



var CityinfoComponent = /** @class */ (function () {
    function CityinfoComponent(service, toastr) {
        this.service = service;
        this.toastr = toastr;
    }
    CityinfoComponent.prototype.ngOnInit = function () {
        this.getCities();
    };
    CityinfoComponent.prototype.getCities = function () {
        var _this = this;
        this.service.getCities().subscribe(function (res) {
            _this.Cities = res['cities'];
        });
    };
    CityinfoComponent.prototype.deleteCities = function (id) {
        var _this = this;
        var query = '/' + id;
        this.service.deleteCities(query).subscribe(function (data) {
            _this.toastr.success('City deleted Successfully');
        }, function (error) {
            _this.toastr.error('error');
        });
    };
    CityinfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cityinfo',
            template: __webpack_require__(/*! ./cityinfo.component.html */ "./src/app/city/cityinfo/cityinfo.component.html"),
            styles: [__webpack_require__(/*! ./cityinfo.component.scss */ "./src/app/city/cityinfo/cityinfo.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_city_service__WEBPACK_IMPORTED_MODULE_1__["CityService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], CityinfoComponent);
    return CityinfoComponent;
}());



/***/ }),

/***/ "./src/app/city/editcity/editcity.component.html":
/*!*******************************************************!*\
  !*** ./src/app/city/editcity/editcity.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n      <div class=\"col-12\">\n        <div class=\"page-title\">\n    \n            <div class=\"pull-left\">\n                <!-- PAGE HEADING TAG - START -->\n    \n                <h1 class=\"title\">Edit City</h1>\n                <!-- PAGE HEADING TAG - END -->\n            </div>\n    \n            <div class=\"pull-right hidden-xs\">\n                <ol class=\"breadcrumb\">\n                    <li>\n                        <a routerLink=\"/\">\n                            <i class=\"fa fa-home\"></i>Home</a>\n                    </li>\n                    <li>\n                        <a routerLink=\"/city\">\n                            <i class=\"fa fa-list-ol\"></i>City Lists</a>\n                    </li>\n                    <li class=\"active\">\n                        <strong>Edit City</strong>\n                    </li>\n    \n                </ol>\n            </div>\n    \n        </div>\n     \n    </div>\n    \n      <div class=\"col-12\">\n          <div class=\"page-title\">\n\n              <div class=\"float-left\">\n                  <!-- PAGE HEADING TAG - START -->\n            \n              </div>\n              <div class=\"float-right\">\n                 <!-- <a [routerLink]=\"['add-subadmin']\"> <i class=\"fa fa-plus\"></i>Dashboard </a>-->\n\n              </div>\n\n          </div>\n      </div>\n      <div class=\"clearfix\"></div>\n      <!-- MAIN CONTENT AREA STARTS -->\n    \n      <div class=\"col-xl-12\">\n            <section class=\"box \">\n                  <div class=\"content-body \">\n                    <div class=\"row\">\n                        <div class=\"col-12\">\n                          <div class=\"container\">\n                            <form [formGroup]=\"userForm\" (submit)=\"saveUser()\">\n                               \n                              <div  class=\"form-group row\">\n                                <div class=\"col-sm-3\">\n                                    <label class=\"mt-2\" for=\"cityName\"><strong>City Name*</strong></label>\n                                </div>\n                                <div  class=\"col-sm-9\">\n                                    <input type=\"text\" formControlName=\"cityName\"  class=\"form-control\" max=\"40\" id=\"cityName\"  placeholder=\"City Name\" />  <br>\n                                  \n                              </div>\n                             </div>\n                            \n                              <div  class=\"form-group row\">\n                                <div class=\"col-sm-3\">\n                                    <label class=\"mt-2\" for=\"country\"><strong>Country*</strong></label>\n                                </div>\n                                <div  class=\"col-sm-9\">\n                                      <select id=\"country\" formControlName=\"country\"  (change)=\"getStates()\" class=\"form-control\" >\n                                              <option>--Select--</option>\n                                              <option *ngFor=\"let s of Countries\" [ngValue]=\"s._id\"> {{ s.countryName }}</option>\n                                      </select>    \n                                     \n                                </div>\n                              </div>\n                               \n                               <div  class=\"form-group row\">\n                                    <div class=\"col-sm-3\">\n                                        <label class=\"mt-2\" for=\"countryCode\"><strong>State Name*</strong></label>\n                                    </div>\n                                    <div  class=\"col-sm-9\">\n                                        <select id=\"country\" formControlName=\"stateName\"  (change)=\"getStates()\" class=\"form-control\" >\n                                          <option>--Select--</option>\n                                          <option *ngFor=\"let s of States\" [ngValue]=\"s._id\"> {{ s.stateName }}</option>\n                                        </select> \n                                  </div>\n                               </div>\n\n                                   <div  class=\"form-group row\">\n                                      <div class=\"col-sm-3\">\n                                          <label class=\"mt-2\" for=\"name\"><strong></strong></label>\n                                      </div>\n                                      <div  class=\"col-sm-9\">\n                                          <button type=\"submit\"  class=\"btn btn-primary btn-block\">Add User</button>\n                                      </div>\n                                  </div>    \n                                 \n                              </form>\n                    \n                           \n                           </div>\n                        </div>\n                    </div>\n                </div>\n            </section>\n        </div>\n\n\n\n\n\n\n    "

/***/ }),

/***/ "./src/app/city/editcity/editcity.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/city/editcity/editcity.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/city/editcity/editcity.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/city/editcity/editcity.component.ts ***!
  \*****************************************************/
/*! exports provided: EditcityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditcityComponent", function() { return EditcityComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_uploader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-uploader */ "./node_modules/ngx-uploader/fesm5/ngx-uploader.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _services_state_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/state.service */ "./src/app/services/state.service.ts");
/* harmony import */ var _services_country_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/country.service */ "./src/app/services/country.service.ts");
/* harmony import */ var _services_city_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/city.service */ "./src/app/services/city.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var EditcityComponent = /** @class */ (function () {
    function EditcityComponent(formBuilder, route, service, countryservice, stateservice, toastr, _router, http, mapsAPILoader, ngZone) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.route = route;
        this.service = service;
        this.countryservice = countryservice;
        this.stateservice = stateservice;
        this.toastr = toastr;
        this._router = _router;
        this.http = http;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.msg = null;
        this.lat = '';
        this.lng = '';
        this.countryName = '';
        this.Countries = [{ 'country': '--Select--', '_id': '' }];
        this.States = [{ 'stateName': '--Select--', '_id': '' }];
        this.default = '';
        this.route.params.subscribe(function (params) {
            _this.cityid = params['driverid'];
            // console.log(this.driverid)
            _this.options = { concurrency: 1, maxUploads: 3 };
            _this.files = []; // local uploading files array
            _this.uploadInput = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // input events, we use this to emit data to ngx-uploader
            _this.humanizeBytes = ngx_uploader__WEBPACK_IMPORTED_MODULE_3__["humanizeBytes"];
        });
        this.userForm = this.formBuilder.group({
            'id': [this.cityid, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'stateName': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'country': ['',],
            'cityName': ['',]
        });
        this.userForm.controls['stateName'].setValue(this.default, { onlySelf: true });
        this.userForm.controls['country'].setValue(this.default, { onlySelf: true });
    }
    EditcityComponent.prototype.saveUser = function () {
        var _this = this;
        console.log(this.userForm.value);
        if (this.userForm.value.country == '') {
            this.toastr.error('Country is required');
            return false;
        }
        if (this.userForm.dirty && this.userForm.valid) {
            var query = '/' + this.cityid;
            this.service.updateCities(this.userForm.value, query).subscribe(function (data) {
                _this.toastr.success('City updated Successfully');
                _this._router.navigate(['/city']);
            }, function (error) {
                _this.toastr.error('error');
            });
        }
    };
    EditcityComponent.prototype.getCountries = function () {
        var _this = this;
        this.countryservice.getCountries().subscribe(function (res) {
            _this.Countries = res['countries'];
        });
    };
    EditcityComponent.prototype.getStates = function (id) {
        var _this = this;
        if (id === void 0) { id = ""; }
        if (id == "") {
            id = this.userForm.value.country;
        }
        var cid = id;
        var query = '?country_id=' + cid;
        // let query = '?country_id='+'5b64792806ff811e1f06f0d0';
        this.stateservice.getStates(query).subscribe(function (res) {
            console.log(res);
            _this.States = res['states'];
        });
    };
    EditcityComponent.prototype.getCities = function () {
        var _this = this;
        var query = '/' + this.cityid;
        this.service.getCities(query).subscribe(function (res) {
            _this.Cities = res['cities'];
            _this.userForm.controls['id'].setValue(_this.Cities.id, { onlySelf: true });
            _this.userForm.controls['cityName'].setValue(_this.Cities.cityName, { onlySelf: true });
            _this.userForm.controls['country'].setValue(_this.Cities.country._id, { onlySelf: true });
            _this.getStates(_this.Cities.state.country);
            _this.userForm.controls['stateName'].setValue(_this.Cities.state._id, { onlySelf: true });
        });
    };
    EditcityComponent.prototype.ngOnInit = function () {
        this.getCountries();
        this.getCities();
    };
    EditcityComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-editcity',
            template: __webpack_require__(/*! ./editcity.component.html */ "./src/app/city/editcity/editcity.component.html"),
            styles: [__webpack_require__(/*! ./editcity.component.scss */ "./src/app/city/editcity/editcity.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_city_service__WEBPACK_IMPORTED_MODULE_9__["CityService"],
            _services_country_service__WEBPACK_IMPORTED_MODULE_8__["CountryService"],
            _services_state_service__WEBPACK_IMPORTED_MODULE_7__["StateService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _agm_core__WEBPACK_IMPORTED_MODULE_5__["MapsAPILoader"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], EditcityComponent);
    return EditcityComponent;
}());



/***/ }),

/***/ "./src/app/services/city.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/city.service.ts ***!
  \******************************************/
/*! exports provided: CityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityService", function() { return CityService; });
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






var CityService = /** @class */ (function () {
    function CityService(http) {
        this.http = http;
        this.config = new _services_config__WEBPACK_IMPORTED_MODULE_4__["Config"];
    }
    CityService.prototype.getCities = function (query) {
        if (query === void 0) { query = ""; }
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].APIURL + '/cities' + query;
        return this
            .http
            .get(uri);
    };
    CityService.prototype.addCities = function (data) {
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].APIURL + '/cities';
        return this
            .http
            .post(uri, data);
    };
    CityService.prototype.updateCities = function (data, query) {
        if (query === void 0) { query = ""; }
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].APIURL + '/cities' + query;
        return this
            .http
            .put(uri, data);
    };
    CityService.prototype.deleteCities = function (query) {
        if (query === void 0) { query = ""; }
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].APIURL + '/cities' + query;
        return this
            .http
            .delete(uri);
    };
    CityService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], CityService);
    return CityService;
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



/***/ }),

/***/ "./src/app/services/state.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/state.service.ts ***!
  \*******************************************/
/*! exports provided: StateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateService", function() { return StateService; });
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






var StateService = /** @class */ (function () {
    function StateService(http) {
        this.http = http;
        this.config = new _services_config__WEBPACK_IMPORTED_MODULE_4__["Config"];
    }
    StateService.prototype.getStates = function (query) {
        if (query === void 0) { query = ""; }
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].APIURL + '/states' + query;
        return this
            .http
            .get(uri);
    };
    StateService.prototype.addStates = function (data) {
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].APIURL + '/states';
        return this
            .http
            .post(uri, data);
    };
    StateService.prototype.updateStates = function (data, query) {
        if (query === void 0) { query = ""; }
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].APIURL + '/states' + query;
        return this
            .http
            .put(uri, data);
    };
    StateService.prototype.deleteStates = function (query) {
        if (query === void 0) { query = ""; }
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].APIURL + '/states' + query;
        alert(uri);
        return this
            .http
            .delete(uri);
    };
    StateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], StateService);
    return StateService;
}());



/***/ })

}]);
//# sourceMappingURL=city-module.js.map