(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["classoflicense-module"],{

/***/ "./src/app/classoflicense/classoflicense.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/classoflicense/classoflicense.module.ts ***!
  \*********************************************************/
/*! exports provided: ClassoflicenseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassoflicenseModule", function() { return ClassoflicenseModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _licenseinfo_licenseinfo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./licenseinfo/licenseinfo.component */ "./src/app/classoflicense/licenseinfo/licenseinfo.component.ts");
/* harmony import */ var _licenseve_licenseve_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./licenseve/licenseve.component */ "./src/app/classoflicense/licenseve/licenseve.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _theme_layouts_layout_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../theme/layouts/layout.module */ "./src/app/theme/layouts/layout.module.ts");
/* harmony import */ var _theme_pages_default_default_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../theme/pages/default/default.component */ "./src/app/theme/pages/default/default.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var ngx_uploader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-uploader */ "./node_modules/ngx-uploader/fesm5/ngx-uploader.js");
/* harmony import */ var primeng_components_fileupload_fileupload__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/components/fileupload/fileupload */ "./node_modules/primeng/components/fileupload/fileupload.js");
/* harmony import */ var primeng_components_fileupload_fileupload__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primeng_components_fileupload_fileupload__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var ng2_pagination__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng2-pagination */ "./node_modules/ng2-pagination/index.js");
/* harmony import */ var ng2_pagination__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(ng2_pagination__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var ng4_geoautocomplete__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng4-geoautocomplete */ "./node_modules/ng4-geoautocomplete/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var routes = [
    {
        'path': '',
        'component': _theme_pages_default_default_component__WEBPACK_IMPORTED_MODULE_6__["DefaultComponent"],
        'children': [
            {
                'path': '',
                'component': _licenseinfo_licenseinfo_component__WEBPACK_IMPORTED_MODULE_2__["LicenseinfoComponent"],
            },
            {
                'path': 'edit-license/:driverid',
                'component': _licenseve_licenseve_component__WEBPACK_IMPORTED_MODULE_3__["LicenseveComponent"],
            },
            {
                'path': 'add-license',
                'component': _licenseve_licenseve_component__WEBPACK_IMPORTED_MODULE_3__["LicenseveComponent"],
            }
        ],
    },
];
var ClassoflicenseModule = /** @class */ (function () {
    function ClassoflicenseModule() {
    }
    ClassoflicenseModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_12__["AgmCoreModule"].forRoot({
                    apiKey: "AIzaSyAp5vIeGvze_ZWYwee-fVE3JS3LYnREZP0",
                    libraries: ["places"]
                }),
                ngx_toastr__WEBPACK_IMPORTED_MODULE_15__["ToastrModule"].forRoot(),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"].forRoot(),
                ng4_geoautocomplete__WEBPACK_IMPORTED_MODULE_14__["Ng4GeoautocompleteModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _theme_layouts_layout_module__WEBPACK_IMPORTED_MODULE_5__["LayoutModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                ngx_uploader__WEBPACK_IMPORTED_MODULE_9__["NgxUploaderModule"],
                ng2_pagination__WEBPACK_IMPORTED_MODULE_11__["Ng2PaginationModule"],
                primeng_components_fileupload_fileupload__WEBPACK_IMPORTED_MODULE_10__["FileUploadModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_13__["ScheduleModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_13__["CalendarModule"]
            ],
            declarations: [_licenseinfo_licenseinfo_component__WEBPACK_IMPORTED_MODULE_2__["LicenseinfoComponent"], _licenseve_licenseve_component__WEBPACK_IMPORTED_MODULE_3__["LicenseveComponent"]]
        })
    ], ClassoflicenseModule);
    return ClassoflicenseModule;
}());



/***/ }),

/***/ "./src/app/classoflicense/licenseinfo/licenseinfo.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/classoflicense/licenseinfo/licenseinfo.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  licenseinfo works!\n</p>\n"

/***/ }),

/***/ "./src/app/classoflicense/licenseinfo/licenseinfo.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/classoflicense/licenseinfo/licenseinfo.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/classoflicense/licenseinfo/licenseinfo.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/classoflicense/licenseinfo/licenseinfo.component.ts ***!
  \*********************************************************************/
/*! exports provided: LicenseinfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LicenseinfoComponent", function() { return LicenseinfoComponent; });
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

var LicenseinfoComponent = /** @class */ (function () {
    function LicenseinfoComponent() {
    }
    LicenseinfoComponent.prototype.ngOnInit = function () {
    };
    LicenseinfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-licenseinfo',
            template: __webpack_require__(/*! ./licenseinfo.component.html */ "./src/app/classoflicense/licenseinfo/licenseinfo.component.html"),
            styles: [__webpack_require__(/*! ./licenseinfo.component.scss */ "./src/app/classoflicense/licenseinfo/licenseinfo.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LicenseinfoComponent);
    return LicenseinfoComponent;
}());



/***/ }),

/***/ "./src/app/classoflicense/licenseve/licenseve.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/classoflicense/licenseve/licenseve.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  licenseve works!\n</p>\n"

/***/ }),

/***/ "./src/app/classoflicense/licenseve/licenseve.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/classoflicense/licenseve/licenseve.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/classoflicense/licenseve/licenseve.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/classoflicense/licenseve/licenseve.component.ts ***!
  \*****************************************************************/
/*! exports provided: LicenseveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LicenseveComponent", function() { return LicenseveComponent; });
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

var LicenseveComponent = /** @class */ (function () {
    function LicenseveComponent() {
    }
    LicenseveComponent.prototype.ngOnInit = function () {
    };
    LicenseveComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-licenseve',
            template: __webpack_require__(/*! ./licenseve.component.html */ "./src/app/classoflicense/licenseve/licenseve.component.html"),
            styles: [__webpack_require__(/*! ./licenseve.component.scss */ "./src/app/classoflicense/licenseve/licenseve.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LicenseveComponent);
    return LicenseveComponent;
}());



/***/ })

}]);
//# sourceMappingURL=classoflicense-module.js.map