(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-module"],{

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dashboardinfo_dashboardinfo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboardinfo/dashboardinfo.component */ "./src/app/dashboard/dashboardinfo/dashboardinfo.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _theme_layouts_layout_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../theme/layouts/layout.module */ "./src/app/theme/layouts/layout.module.ts");
/* harmony import */ var _theme_pages_default_default_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../theme/pages/default/default.component */ "./src/app/theme/pages/default/default.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        'path': '',
        'component': _theme_pages_default_default_component__WEBPACK_IMPORTED_MODULE_5__["DefaultComponent"],
        'children': [
            {
                'path': '',
                'component': _dashboardinfo_dashboardinfo_component__WEBPACK_IMPORTED_MODULE_2__["DashboardinfoComponent"],
            }
        ],
    },
];
var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _theme_layouts_layout_module__WEBPACK_IMPORTED_MODULE_4__["LayoutModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
            ],
            declarations: [_dashboardinfo_dashboardinfo_component__WEBPACK_IMPORTED_MODULE_2__["DashboardinfoComponent"]]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboardinfo/dashboardinfo.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/dashboard/dashboardinfo/dashboardinfo.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n      <div class=\"col-12\">\n          <div class=\"page-title\">\n      \n              <div class=\"pull-left\">\n                  <!-- PAGE HEADING TAG - START -->\n      \n                  <h1 class=\"title\">Dashboard</h1>\n                  <!-- PAGE HEADING TAG - END -->\n              </div>\n      \n              <div class=\"pull-right hidden-xs\">\n                  <ol class=\"breadcrumb\">\n                      <li>\n                          <a routerLink=\"/\">\n                              <i class=\"fa fa-home\"></i>Home</a>\n                      </li>\n                      <li class=\"active\">\n                          <strong>Dashboard</strong>\n                      </li>\n      \n                  </ol>\n              </div>\n      \n          </div>\n         \n      </div>\n      \n        <div class=\"col-12\">\n            <div class=\"page-title\">\n  \n                <div class=\"float-left\">\n                    <!-- PAGE HEADING TAG - START -->\n              \n                </div>\n                <div class=\"float-right\">\n                   <!-- <a [routerLink]=\"['add-subadmin']\"> <i class=\"fa fa-plus\"></i>Dashboard </a>-->\n  \n                </div>\n  \n            </div>\n        </div>\n        <div class=\"clearfix\"></div>\n        <!-- MAIN CONTENT AREA STARTS -->\n  \n        <div class=\"col-xl-12\">\n            <section class=\"box \">\n                  <div class=\"content-body \">\n                    <div class=\"row\">\n                        <div class=\"col-12\">\n                          <div class=\"container\" style=\"margin-left: 0;max-width: 1299px;\">\n  \n                            \n                           </div>\n                        </div>\n                    </div>\n                </div>\n            </section>\n        </div>\n  \n  \n  \n  \n  \n  \n      "

/***/ }),

/***/ "./src/app/dashboard/dashboardinfo/dashboardinfo.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/dashboard/dashboardinfo/dashboardinfo.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/dashboardinfo/dashboardinfo.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/dashboard/dashboardinfo/dashboardinfo.component.ts ***!
  \********************************************************************/
/*! exports provided: DashboardinfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardinfoComponent", function() { return DashboardinfoComponent; });
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

var DashboardinfoComponent = /** @class */ (function () {
    function DashboardinfoComponent() {
    }
    DashboardinfoComponent.prototype.ngOnInit = function () {
    };
    DashboardinfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboardinfo',
            template: __webpack_require__(/*! ./dashboardinfo.component.html */ "./src/app/dashboard/dashboardinfo/dashboardinfo.component.html"),
            styles: [__webpack_require__(/*! ./dashboardinfo.component.scss */ "./src/app/dashboard/dashboardinfo/dashboardinfo.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardinfoComponent);
    return DashboardinfoComponent;
}());



/***/ })

}]);
//# sourceMappingURL=dashboard-module.js.map