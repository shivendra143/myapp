(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["adminmanagement-module"],{

/***/ "./node_modules/rxjs-compat/_esm5/add/observable/throw.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/add/observable/throw.js ***!
  \****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");

rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].throw = rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"];
rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].throwError = rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"];
//# sourceMappingURL=throw.js.map

/***/ }),

/***/ "./src/app/admin/activity/activity.component.html":
/*!********************************************************!*\
  !*** ./src/app/admin/activity/activity.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-12\">\n    <div class=\"page-title\">\n\n        <div class=\"float-left\">\n            <!-- PAGE HEADING TAG - START -->\n            <h1 class=\"title\">My Activity</h1>\n            <!-- PAGE HEADING TAG - END -->\n        </div>\n\n        <div class=\"float-right \">\n            <ol class=\"breadcrumb\">\n                <li>\n                    <a routerLink=\"/\"><i class=\"fa fa-home\"></i>Home</a>\n                </li>\n\n                <li class=\"active\">\n                    <strong>My Activity </strong>\n                </li>\n            </ol>\n        </div>\n\n    </div>\n</div>\n<div class=\"clearfix\"></div>\n<!-- MAIN CONTENT AREA STARTS -->\n\n<div class=\"col-xl-12\">\n    <section class=\"box \">\n\n        <div class=\"content-body\">\n            <div class=\"row\">\n                <div class=\"col-12\">\n\n\n                    <!-- ********************************************** -->\n\n\n                    <div></div>\n                    <table id=\"example-11\" class=\"display table table-hover table-bordered table-condensed dataTable no-footer\" cellspacing=\"0\" width=\"100%\">\n                        <thead>\n                            <tr>\n                                <th>S.No</th>\n                                <th> Activity </th>\n                                <th> Activity Date </th>\n\n                            </tr>\n                        </thead>\n                        <tbody>\n\n                            <tr *ngFor=\"let activitylist of activities; let i=index\" class=\"ng-scope\">\n                                <td class=\"ng-binding\"> {{i+1}} </td>\n                                <td class=\"ng-binding\"> {{activitylist.message}} </td>\n                                <td class=\"ng-binding\"> {{activitylist.created}} </td>\n\n                            </tr>\n\n                        </tbody>\n                    </table>\n                    \n                    <!-- ********************************************** -->\n\n\n\n\n                </div>\n            </div>\n        </div>\n    </section>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/activity/activity.component.scss":
/*!********************************************************!*\
  !*** ./src/app/admin/activity/activity.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/activity/activity.component.ts":
/*!******************************************************!*\
  !*** ./src/app/admin/activity/activity.component.ts ***!
  \******************************************************/
/*! exports provided: ActivityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityComponent", function() { return ActivityComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/admin.service */ "./src/app/services/admin.service.ts");
/* harmony import */ var _services_pager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/pager.service */ "./src/app/services/pager.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ActivityComponent = /** @class */ (function () {
    function ActivityComponent(service, pagerService) {
        this.service = service;
        this.pagerService = pagerService;
        // pager object
        this.pager = {};
        this.Math = Math;
    }
    ActivityComponent.prototype.ngOnInit = function () {
        this.getAdminActivity();
    };
    ActivityComponent.prototype.getAdminActivity = function () {
        var _this = this;
        this.service.getAdminActivity().subscribe(function (res) {
            _this.activities = res.data;
            _this.setPage(1);
        });
    };
    ActivityComponent.prototype.nextPrevious = function (a) {
        var _this = this;
        this.service.getActivitynext(a).subscribe(function (res) {
            _this.activities = res.data;
        });
    };
    ActivityComponent.prototype.nextPrevious1 = function (a) {
        var _this = this;
        this.service.getActivitypre(a).subscribe(function (res) {
            _this.activities = res.data.users;
        });
    };
    ActivityComponent.prototype.nextPage = function () {
        var _this = this;
        this.service.getAdminActivity().subscribe(function (data) {
            return _this.activities = data;
        });
        this.setPage(1);
    };
    ActivityComponent.prototype.setPage = function (page) {
        // get pager object from service
        this.pager = this.pagerService.getPager(this.activities.length, page);
        // get current page of items
        this.pagedItems = this.activities.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    ActivityComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-activity',
            template: __webpack_require__(/*! ./activity.component.html */ "./src/app/admin/activity/activity.component.html"),
            styles: [__webpack_require__(/*! ./activity.component.scss */ "./src/app/admin/activity/activity.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"], _services_pager_service__WEBPACK_IMPORTED_MODULE_2__["PagerService"]])
    ], ActivityComponent);
    return ActivityComponent;
}());



/***/ }),

/***/ "./src/app/admin/adminedit/adminedit.component.html":
/*!**********************************************************!*\
  !*** ./src/app/admin/adminedit/adminedit.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  adminedit works!\n</p>\n"

/***/ }),

/***/ "./src/app/admin/adminedit/adminedit.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/admin/adminedit/adminedit.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/adminedit/adminedit.component.ts":
/*!********************************************************!*\
  !*** ./src/app/admin/adminedit/adminedit.component.ts ***!
  \********************************************************/
/*! exports provided: AdmineditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmineditComponent", function() { return AdmineditComponent; });
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

var AdmineditComponent = /** @class */ (function () {
    function AdmineditComponent() {
    }
    AdmineditComponent.prototype.ngOnInit = function () {
    };
    AdmineditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-adminedit',
            template: __webpack_require__(/*! ./adminedit.component.html */ "./src/app/admin/adminedit/adminedit.component.html"),
            styles: [__webpack_require__(/*! ./adminedit.component.scss */ "./src/app/admin/adminedit/adminedit.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AdmineditComponent);
    return AdmineditComponent;
}());



/***/ }),

/***/ "./src/app/admin/adminmanagement.module.ts":
/*!*************************************************!*\
  !*** ./src/app/admin/adminmanagement.module.ts ***!
  \*************************************************/
/*! exports provided: AdminmanagementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminmanagementModule", function() { return AdminmanagementModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _theme_layouts_layout_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../theme/layouts/layout.module */ "./src/app/theme/layouts/layout.module.ts");
/* harmony import */ var _theme_pages_default_default_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../theme/pages/default/default.component */ "./src/app/theme/pages/default/default.component.ts");
/* harmony import */ var _adminedit_adminedit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./adminedit/adminedit.component */ "./src/app/admin/adminedit/adminedit.component.ts");
/* harmony import */ var _services_pager_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/pager.service */ "./src/app/services/pager.service.ts");
/* harmony import */ var _adminmanagementinfo_adminmanagementinfo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./adminmanagementinfo/adminmanagementinfo.component */ "./src/app/admin/adminmanagementinfo/adminmanagementinfo.component.ts");
/* harmony import */ var _activity_activity_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./activity/activity.component */ "./src/app/admin/activity/activity.component.ts");
/* harmony import */ var _changepassword_changepassword_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./changepassword/changepassword.component */ "./src/app/admin/changepassword/changepassword.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    {
        'path': '',
        'component': _theme_pages_default_default_component__WEBPACK_IMPORTED_MODULE_4__["DefaultComponent"],
        'children': [
            {
                'path': '',
                'component': _adminmanagementinfo_adminmanagementinfo_component__WEBPACK_IMPORTED_MODULE_7__["AdminmanagementinfoComponent"],
            },
            {
                'path': 'my-activity',
                'component': _activity_activity_component__WEBPACK_IMPORTED_MODULE_8__["ActivityComponent"],
            },
            {
                'path': 'update-password',
                'component': _changepassword_changepassword_component__WEBPACK_IMPORTED_MODULE_9__["ChangepasswordComponent"],
            }
        ],
    }
];
var AdminmanagementModule = /** @class */ (function () {
    function AdminmanagementModule() {
    }
    AdminmanagementModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                _theme_layouts_layout_module__WEBPACK_IMPORTED_MODULE_3__["LayoutModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"]
            ],
            declarations: [_adminmanagementinfo_adminmanagementinfo_component__WEBPACK_IMPORTED_MODULE_7__["AdminmanagementinfoComponent"], _adminedit_adminedit_component__WEBPACK_IMPORTED_MODULE_5__["AdmineditComponent"], _activity_activity_component__WEBPACK_IMPORTED_MODULE_8__["ActivityComponent"], _changepassword_changepassword_component__WEBPACK_IMPORTED_MODULE_9__["ChangepasswordComponent"]],
            providers: [
                _services_pager_service__WEBPACK_IMPORTED_MODULE_6__["PagerService"]
            ]
        })
    ], AdminmanagementModule);
    return AdminmanagementModule;
}());



/***/ }),

/***/ "./src/app/admin/adminmanagementinfo/adminmanagementinfo.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/admin/adminmanagementinfo/adminmanagementinfo.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-12\">\n    <div class=\"page-title\">\n\n        <div class=\"float-left\">\n            <!-- PAGE HEADING TAG - START -->\n            <h1 class=\"title\">Admin Profile</h1>\n            <!-- PAGE HEADING TAG - END -->\n        </div>\n        <div class=\"pull-right\">\n            <ol class=\"breadcrumb\">\n                <li>\n                    <a routerLink=\"/\">\n                        <i class=\"fa fa-home\"></i>Home</a>\n                </li>\n                <li class=\"active\">\n                    <a routerLink=\"/\">\n                        <i class=\"fa fa-user\"></i>My Profile</a>\n                </li>\n            </ol>\n        </div>\n    </div>\n</div>\n<div class=\"clearfix\"></div>\n<!-- MAIN CONTENT AREA STARTS -->\n\n<div class=\"col-xl-12\">\n    <section class=\"box \">\n\n        <div class=\"content-body  view-details\">\n\n            <div class=\"row \">\n                <div class=\"col-12 col-md-12 view-profile-section col-lg-12\">\n                    <header class=\"pan\">\n                        <!--                  <h2 class=\"title float-left\">Profile Details</h2>-->\n                        <div class=\"actions panel_actions float-right\">\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <button type=\"submit\" class=\"btn edit-btn btn-primary\">\n                                        <i class=\"fa fa-edit\"></i>&nbsp;Edit</button>\n                                </div>\n                            </div>\n                        </div>\n                    </header>\n                    <div class=\"row\">\n                        <div class=\"col-md-4\">\n                            <div class=\"uprofile-image\">\n                                <!-- <label for=\"fileToUpload\">\n                                    <span class=\"ui-button-icon-left ui-clickable fa fa-fw fa-pencil\"></span>\n                                    <input type=\"file\" name=\"fileToUpload\" id=\"fileToUpload\" accept=\"image/*\" (change)=\"onFileadminprofile($event)\">\n                                </label> -->\n                                <!--<div *ngIf=\"user.image\">\n                                                           <img src=\"{{user.image}}\" class=\"img-fluid\">\n                                                        </div> -->\n                                <div *ngIf=\"user.image\">\n                                    <img src=\"{{admin_profile_pic}}\" class=\"img-fluid\" data-toggle=\"modal\" data-target=\"#openImage\">\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-md-8 admin-pro\">\n\n                            <div class=\"form-group\">\n                                <label class=\"form-label\">\n                                    <strong class=\"pr-3\">Name: </strong>\n                                </label> {{user.name}}\n\n                            </div>\n\n                            <div class=\"form-group\">\n                                <label class=\"form-label\">\n                                    <strong class=\"pr-3\">Phone: </strong>\n                                </label> {{user.phone}}\n\n                            </div>\n\n                            <div class=\"form-group\">\n                                <label class=\"form-label\">\n                                    <strong class=\"pr-3\">Email: </strong>\n                                </label> {{user.email}}\n\n                            </div>\n\n                            <div class=\"form-group\">\n                                <label class=\"form-label\">\n                                    <strong class=\"pr-3\">Role: </strong>\n                                </label> {{user.role}}\n\n                            </div>\n\n                        </div>\n                        <div class=\"clearfix\"></div>\n                    </div>\n\n                    <div class=\"row\">\n\n                    </div>\n\n                </div>\n\n                <div class=\"col-12 col-md-12 col-lg-12 edit-section display-none\">\n                    <header class=\"pan\">\n                        <!--                  <h2 class=\"title float-left\">Profile Details</h2>-->\n                        <div class=\"actions panel_actions float-right\">\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <button type=\"submit\" class=\"btn  btn-primary mr-2\" (click)=\"updateAdminProfile()\">\n                                        <i class=\"fa fa-save\"></i>&nbsp;Update</button>\n                                    <button type=\"submit\" class=\"btn cancel-btn-profile btn-primary\">\n                                        <i class=\"fa fa-times-circle\"></i>&nbsp;Cancel</button>\n                                </div>\n                            </div>\n                        </div>\n                    </header>\n                    <div class=\"row \">\n                        <div class=\"col-md-4\">\n                            <div class=\"uprofile-image\">\n                                <label for=\"fileToUpload\">\n                                    <span class=\"ui-button-icon-left ui-clickable fa fa-fw fa-pencil\"></span>\n                                    <input type=\"file\" name=\"fileToUpload\" id=\"fileToUpload\" accept=\"image/*\" (change)=\"onFileadminprofile($event)\">\n                                </label>\n                                <!--<div *ngIf=\"user.image\">\n                                                           <img src=\"{{user.image}}\" class=\"img-fluid\">\n                                                        </div> -->\n                                <div *ngIf=\"user.image\">\n                                    <img src=\"{{admin_profile_pic}}\" class=\"img-fluid\">\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-md-8 admin-pro\">\n                            <div class=\"row\">\n                                <div class=\"col-md-8 offset-md-0\">\n                                    <div class=\"form-group row\">\n                                        <div class=\"col-sm-2\">\n                                            <label for=\"name\" class=\"mt-2\">\n                                                <strong>Name:</strong>\n                                            </label>\n                                        </div>\n                                        <div class=\"col-sm-9\">\n                                            <input type=\"text\" [(ngModel)]=\"user.name\" class=\"form-control\" maxlength=\"40\" (change)=\"onNameChange()\">\n                                            <p *ngIf=\"name_invalid_error\" style=\"color:red;\">\n                                                {{invalid_name_error_msg}}\n                                            </p>\n                                        </div>\n\n                                    </div>\n\n                                    <div class=\"form-group row\">\n                                        <div class=\"col-sm-2\">\n                                            <label for=\"name\" class=\"mt-2\">\n                                                <strong>Phone: </strong>\n                                            </label>\n                                        </div>\n                                        <div class=\"col-sm-9\">\n                                            <input type=\"text\" [(ngModel)]=\"user.phone\" (change)=\"phoneCheck()\" class=\"form-control\" maxlength=\"10\" (keyup)=\"onChange()\">\n                                            <p *ngIf=\"phone_invalid_error\" style=\"color:red;\">\n                                                {{invalid_error_msg}}\n                                            </p>\n                                        </div>\n                                    </div>\n\n\n                                    <div class=\"form-group row \">\n                                        <div class=\"col-sm-2\">\n                                            <label for=\"name\" class=\"mt-2\">\n                                                <strong>Email: </strong>\n                                            </label>\n                                        </div>\n                                        <div class=\"col-sm-9\">\n                                            <input disabled type=\"text\" value=\"{{user.email}}\" class=\"form-control\">\n\n                                        </div>\n\n                                    </div>\n\n                                    <div class=\"form-group row\">\n                                        <div class=\"col-sm-2\">\n                                            <label for=\"name\" class=\"mt-2\">\n                                                <strong>Role: </strong>\n                                            </label>\n                                        </div>\n                                        <div class=\"col-sm-9\">\n                                            <input disabled type=\"text\" value=\"{{user.role}}\" class=\"form-control\">\n\n                                        </div>\n\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"clearfix\"></div>\n                    </div>\n\n                    <div class=\"row\">\n\n                    </div>\n\n                </div>\n\n            </div>\n        </div>\n    </section>\n</div>\n\n\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"openImage\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n\n            <div class=\"modal-body\">\n                <img src=\"{{admin_profile_pic}}\">\n            </div>\n\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/admin/adminmanagementinfo/adminmanagementinfo.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/admin/adminmanagementinfo/adminmanagementinfo.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#fileToUpload {\n  display: none; }\n\n.uprofile-image .fa-pencil {\n  color: #3F51B5 !important; }\n"

/***/ }),

/***/ "./src/app/admin/adminmanagementinfo/adminmanagementinfo.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/admin/adminmanagementinfo/adminmanagementinfo.component.ts ***!
  \****************************************************************************/
/*! exports provided: AdminmanagementinfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminmanagementinfoComponent", function() { return AdminmanagementinfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/admin.service */ "./src/app/services/admin.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminmanagementinfoComponent = /** @class */ (function () {
    function AdminmanagementinfoComponent(service) {
        this.service = service;
        this.user = {};
        this.phone_invalid_error = false;
        this.invalid_name_error_msg = "Please enter valid name";
        this.name_invalid_error = false;
        this.invalid_error_msg = "";
        // admin_profile_pic = "./assets/image/user_profile.png";
        this.admin_profile_pic = localStorage.getItem('adminProfilePic');
    }
    AdminmanagementinfoComponent.prototype.ngOnInit = function () {
        this.getAdminInfo();
        $('.edit-btn').on('click', function () {
            $(".view-profile-section").addClass('display-none');
            $(".edit-section").removeClass('display-none');
        });
        $('.cancel-btn-profile').on('click', function () {
            $(".edit-section").addClass('display-none');
            $(".view-profile-section").removeClass('display-none');
        });
    };
    AdminmanagementinfoComponent.prototype.getAdminInfo = function () {
        var _this = this;
        this.service.getAdminInfo().subscribe(function (res) {
            _this.user = res.data;
            console.log(_this.user);
        });
    };
    AdminmanagementinfoComponent.prototype.onFileadminprofile = function (event) {
        var _this = this;
        this.service.updateUploadadminprofile(event).subscribe(function (data1) {
            console.log(localStorage.getItem('adminProfilePic'));
            localStorage.setItem('adminProfilePic', data1.data.url);
            _this.admin_profile_pic = localStorage.getItem('adminProfilePic');
        }, function (error) {
            console.log('error');
        });
        this.msg = 'Update admin profile image successfully';
    };
    AdminmanagementinfoComponent.prototype.updateAdminProfile = function () {
        var _this = this;
        var length = this.user.phone.toString().length;
        var phoneNumber = this.user.phone.toString().trim();
        var nameLength = this.user.name.toString().length;
        var name = this.user.name.toString().trim();
        if (nameLength < 2) {
            alert("Please enter valid name");
        }
        else if (length < 10) {
            alert("Please enter valid phone number");
        }
        else {
            this.service.updateAdminProfile(this.admin_profile_pic, this.user.name, this.user.phone).subscribe(function (data2) {
                var currentUser = JSON.parse(localStorage.getItem('currentUser'));
                currentUser.data.name = _this.user.name;
                localStorage.setItem('currentUser', JSON.stringify(currentUser));
                _this.phone_invalid_error = false;
                _this.name_invalid_error = false;
                window.location.href = "/profile";
            }, function (error) {
                console.log('error');
            });
        }
    };
    AdminmanagementinfoComponent.prototype.onChange = function () {
        this.strVal = this.user.phone.toString();
        this.lastChar = this.strVal.charCodeAt(this.strVal.length - 1);
        // if(this.lastChar == 101 || this.lastChar == 43 || this.lastChar == 45){
        //   this.strVal = this.strVal.substring(0, this.strVal.length - 1);
        // }
        if (this.lastChar < 48 || this.lastChar > 57) {
            this.strVal = this.strVal.substring(0, this.strVal.length - 1);
        }
        this.user.phone = this.strVal;
    };
    AdminmanagementinfoComponent.prototype.onNameChange = function () {
        this.strVal = this.user.name.toString().trim();
        if (this.strVal.length < 2) {
            this.name_invalid_error = true;
            this.invalid_name_error_msg = "Please enter valid name";
        }
        else {
            this.name_invalid_error = false;
        }
    };
    AdminmanagementinfoComponent.prototype.phoneCheck = function () {
        var length = this.user.phone.toString().length;
        var phoneNumber = this.user.phone.toString();
        if (length < 10) {
            this.phone_invalid_error = true;
            this.invalid_error_msg = "Please enter valid phone number";
        }
    };
    AdminmanagementinfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-adminmanagementinfo',
            template: __webpack_require__(/*! ./adminmanagementinfo.component.html */ "./src/app/admin/adminmanagementinfo/adminmanagementinfo.component.html"),
            styles: [__webpack_require__(/*! ./adminmanagementinfo.component.scss */ "./src/app/admin/adminmanagementinfo/adminmanagementinfo.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"]])
    ], AdminmanagementinfoComponent);
    return AdminmanagementinfoComponent;
}());



/***/ }),

/***/ "./src/app/admin/changepassword/changepassword.component.html":
/*!********************************************************************!*\
  !*** ./src/app/admin/changepassword/changepassword.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n       <div class=\"col-12\">\n          <div class=\"page-title\">\n             <div class=\"float-left\">\n                <!-- PAGE HEADING TAG - START -->\n                <h1 class=\"title\">Update Password</h1>\n                <!-- PAGE HEADING TAG - END -->                            \n             </div>\n          </div>\n       </div>\n       <div class=\"clearfix\"></div>\n       <!-- MAIN CONTENT AREA STARTS -->\n       <div class=\"col-xl-12\">\n          <section class=\"box \">\n             <!-- <header class=\"panel_header\">\n                <h2 class=\"title float-left\">Update Password</h2>\n                <div class=\"actions panel_actions float-right\">\n                </div>\n             </header> -->\n             <div class=\"content-body\">\n                <div class=\"row\">\n                   <form [formGroup]=\"passwordForm\" (submit)=\"updatePassword()\">\n                       \n                        \n                      \n                      <div class=\"col-xs-12 col-sm-9 col-md-8\">\n                        <div class=\"col-lg-12 col-sm-12 col-xs-12 alert alert-success\" *ngIf=\"showMessage && response.code == '200'\" role=\"alert\">\n                                <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"></button>   \n                            <span>{{response.message }}</span>\n                        </div>\n                        \n                        <div class=\"col-lg-12 col-sm-12 col-xs-12 alert alert-danger\" *ngIf=\"showMessage && response.code != '200'\" role=\"alert\">\n                            <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"></button>    \n                            <span>{{ response.message }}</span>\n                        </div>\n                         <div class=\"form-group\">\n                            <label class=\"form-label\">Email</label>\n                            <span class=\"desc\"></span>\n                            <div>\n                               <input type=\"email\" class=\"form-control\" formControlName=\"email\" autocomplete=\"off\">\n                            </div>\n                         </div>\n                         <div class=\"form-group\">\n                            <label class=\"form-label\">Old Password</label>\n                            <span class=\"desc\"></span>\n                            <div>\n                               <input type=\"password\" class=\"form-control\" formControlName=\"old_password\" (keyup)=\"checkPassword()\">\n                            </div>\n                         </div>\n                         <div class=\"form-group\">\n                            <label class=\"form-label\">New Password</label>\n                            <span class=\"desc\"></span>\n                            <div>\n                               <input type=\"password\" class=\"form-control\" formControlName=\"new_password\" (keyup)=\"checkPassword()\">\n                            </div>\n                            <p *ngIf=\"show_msg\" style=\"color:red;font-weight: bolder;\">\n                                Old Password Can't be same as Old Password.\n                            </p>\n                         </div>                         \n                         <div class=\"col-xs-12 col-sm-9 col-md-8 padding-bottom-30\">\n                            <div class=\"text-left\">\n                               <button type=\"submit\" [ngClass]=\"{'m-loader m-loader--right m-loader--light': loading}\" [disabled]=\"!passwordForm.valid\" class=\"btn btn-primary\" style=\"margin-right: 5%;\">Save</button>\n                               <button type=\"button\" class=\"btn\" (click)=\"resetForm()\">Reset</button>\n                            </div>\n                         </div>\n                      </div>\n                   </form>\n                </div>\n             </div>\n          </section>\n       </div>\n   "

/***/ }),

/***/ "./src/app/admin/changepassword/changepassword.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/admin/changepassword/changepassword.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/changepassword/changepassword.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/admin/changepassword/changepassword.component.ts ***!
  \******************************************************************/
/*! exports provided: ChangepasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangepasswordComponent", function() { return ChangepasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/admin.service */ "./src/app/services/admin.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/observable/throw */ "./node_modules/rxjs-compat/_esm5/add/observable/throw.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChangepasswordComponent = /** @class */ (function () {
    function ChangepasswordComponent(formBuilder, service) {
        this.formBuilder = formBuilder;
        this.service = service;
        this.model = {};
        this.response = {};
        this.showMessage = false;
        this.loading = false;
        this.show_msg = false;
        this.passwordForm = this.formBuilder.group({
            'email': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'old_password': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'new_password': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    ChangepasswordComponent.prototype.ngOnInit = function () {
    };
    ChangepasswordComponent.prototype.updatePassword = function () {
        var _this = this;
        console.log(this.passwordForm.value);
        if (this.show_msg == true) {
            alert("Old Password & New Password can't be same");
        }
        else {
            this.loading = true;
            this.service.updatePassword(this.passwordForm.value).subscribe(function (data) {
                _this.showMessage = true;
                _this.response = data;
                console.log(data);
                _this.loading = false;
                _this.model = {};
            }, function (error) {
                _this.showMessage = true;
                _this.response = error;
                console.log("eee");
                console.log(error.message);
                _this.loading = false;
            });
        }
    };
    ChangepasswordComponent.prototype.FadeOutLink = function () {
        var _this = this;
        setTimeout(function () {
            _this.showMessage = false;
        }, 2000);
    };
    ChangepasswordComponent.prototype.checkPassword = function () {
        console.log(this.passwordForm.value.old_password);
        console.log(this.passwordForm.value.new_password);
        if (this.passwordForm.value.old_password.toString().trim().length > 0) {
            if (this.passwordForm.value.old_password == this.passwordForm.value.new_password) {
                this.error_message = "Old Password Can't be same as Old Password.";
                this.show_msg = true;
            }
            else {
                this.show_msg = false;
            }
        }
        else {
            this.show_msg = false;
        }
    };
    ChangepasswordComponent.prototype.resetForm = function () {
        this.passwordForm.controls['old_password'].setValue('');
        this.passwordForm.controls['new_password'].setValue('');
        this.passwordForm.controls['email'].setValue('');
    };
    ChangepasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-changepassword',
            template: __webpack_require__(/*! ./changepassword.component.html */ "./src/app/admin/changepassword/changepassword.component.html"),
            styles: [__webpack_require__(/*! ./changepassword.component.scss */ "./src/app/admin/changepassword/changepassword.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _services_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"]])
    ], ChangepasswordComponent);
    return ChangepasswordComponent;
}());



/***/ }),

/***/ "./src/app/services/admin.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/admin.service.ts ***!
  \*******************************************/
/*! exports provided: AdminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminService", function() { return AdminService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/config */ "./src/app/services/config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AdminService = /** @class */ (function () {
    function AdminService(http) {
        this.http = http;
        this.config = new _services_config__WEBPACK_IMPORTED_MODULE_6__["Config"];
    }
    AdminService.prototype.getAdminInfo = function () {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        console.log(currentUser.data._id);
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append("sessionToken", currentUser.sessionToken);
        headers.append("Content-Type", "application/json");
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].APIURL + '/admin/admin-info/' + currentUser.data._id;
        return this
            .http
            .get(uri, { headers: headers })
            .map(function (res) {
            return res.json();
        })
            .catch(function (error) {
            error = error.json();
            return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error);
        });
    };
    AdminService.prototype.getAdminActivity = function () {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        console.log(currentUser.data._id);
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append("sessionToken", currentUser.sessionToken);
        headers.append("Content-Type", "application/json");
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].APIURL + '/admin/my-activity';
        return this
            .http
            .get(uri, { headers: headers })
            .map(function (res) {
            return res.json();
        })
            .catch(function (error) {
            error = error.json();
            return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error);
        });
    };
    AdminService.prototype.getActivitynext = function (a) {
        var con = a + 1;
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        // console.log(currentUser)
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append("sessionToken", currentUser.sessionToken);
        headers.append("Content-Type", "application/json");
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].APIURL + '/admin/my-activity?page=' + con;
        return this
            .http
            .get(uri, { headers: headers })
            .map(function (res) {
            return res.json();
        })
            .catch(function (error) {
            error = error.json();
            return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error);
        });
    };
    AdminService.prototype.getActivitypre = function (a) {
        var con = a - 2;
        //alert(con)
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        // console.log(currentUser)
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append("sessionToken", currentUser.sessionToken);
        headers.append("Content-Type", "application/json");
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].APIURL + '/admin/my-activity?page=' + con;
        return this
            .http
            .get(uri, { headers: headers })
            .map(function (res) {
            return res.json();
        })
            .catch(function (error) {
            error = error.json();
            return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error);
        });
    };
    AdminService.prototype.updatePassword = function (data) {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        // console.log(currentUser)
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append("sessionToken", currentUser.sessionToken);
        headers.append("Content-Type", "application/json");
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].APIURL + '/admin/change-password';
        return this
            .http
            .post(uri, data, { headers: headers })
            .map(function (res) {
            return res.json();
        })
            .catch(function (error) {
            error = error.json();
            return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error);
        });
    };
    //update profile image 
    // updateUploadadminprofile(event, phone, name) {
    //     let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    //     let headers: Headers = new Headers();
    //     headers.append("sessionToken", currentUser.sessionToken);
    //     const uri = env.APIURL + '/admin/update-profile';
    //     const fileList: FileList = event.target.files;
    //     alert(uri);
    //     const file = fileList[0];
    //     const formData = new FormData();
    //     formData.append('image', file, file.name);
    //     formData.append('name', name);
    //     formData.append('phone', phone);
    //     return this
    //         .http
    //         .patch(uri, formData, { headers: headers })
    //         .map((res: Response) => {
    //             return res.json();
    //         })
    //         .catch((error: Response) => {
    //             error = error.json();
    //             return Observable.throw(error);
    //         });
    // }
    AdminService.prototype.updateUploadadminprofile = function (event) {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append("sessionToken", currentUser.sessionToken);
        //  headers.append("Content-Type", "application/json");
        //  headers.append("Content-Type", "multipart/form-data");
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].APIURL + '/admin/upload-image';
        // const uri = 'http://devadmin.jhaiho.com/api/admin/upload-image';
        var fileList = event.target.files;
        var file = fileList[0];
        var formData = new FormData();
        formData.append('image', file, file.name);
        return this
            .http
            .post(uri, formData, { headers: headers })
            .map(function (res) {
            return res.json();
        })
            .catch(function (error) {
            error = error.json();
            return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error);
        });
    };
    AdminService.prototype.updateAdminProfile = function (imageUrl, name, phone) {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append("sessionToken", currentUser.sessionToken);
        headers.append("Content-Type", 'application/json');
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].APIURL + '/admin/update-profile';
        var data = {
            name: name,
            phoneNumber: phone,
            profileImage: imageUrl
        };
        console.log(data);
        console.log(currentUser.sessionToken);
        return this
            .http
            .post(uri, data, { headers: headers })
            .map(function (res) {
            return res.json();
        })
            .catch(function (error) {
            error = error.json();
            return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error);
        });
    };
    AdminService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], AdminService);
    return AdminService;
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

/***/ "./src/app/services/pager.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/pager.service.ts ***!
  \*******************************************/
/*! exports provided: PagerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagerService", function() { return PagerService; });
var PagerService = /** @class */ (function () {
    function PagerService() {
    }
    PagerService.prototype.getPager = function (totalItems, currentPage, pageSize) {
        if (currentPage === void 0) { currentPage = 1; }
        if (pageSize === void 0) { pageSize = 10; }
        // calculate total pages
        var totalPages = Math.ceil(totalItems / pageSize);
        // ensure current page isn't out of range
        if (currentPage < 1) {
            currentPage = 1;
        }
        else if (currentPage > totalPages) {
            currentPage = totalPages;
        }
        var startPage, endPage;
        if (totalPages <= 10) {
            // less than 10 total pages so show all
            startPage = 1;
            endPage = totalPages;
        }
        else {
            // more than 10 total pages so calculate start and end pages
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            }
            else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            }
            else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }
        // calculate start and end item indexes
        var startIndex = (currentPage - 1) * pageSize;
        var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
        // create an array of pages to ng-repeat in the pager control
        var pages = Array.from(Array((endPage + 1) - startPage).keys()).map(function (i) { return startPage + i; });
        // return object with all pager properties required by the view
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    };
    return PagerService;
}());



/***/ })

}]);
//# sourceMappingURL=adminmanagement-module.js.map