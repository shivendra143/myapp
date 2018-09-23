(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./adminmanagement.module": [
		"./src/app/admin/adminmanagement.module.ts",
		"adminmanagement-module"
	],
	"./auth/auth.module": [
		"./src/app/auth/auth.module.ts"
	],
	"./city.module": [
		"./src/app/city/city.module.ts",
		"city-module~classoflicense-module~country-module~drivers-module~employee-module~state-module",
		"city-module"
	],
	"./classoflicense.module": [
		"./src/app/classoflicense/classoflicense.module.ts",
		"city-module~classoflicense-module~country-module~drivers-module~employee-module~state-module",
		"classoflicense-module"
	],
	"./contentmanagement.module": [
		"./src/app/contentmanagement/contentmanagement.module.ts",
		"contentmanagement-module"
	],
	"./country.module": [
		"./src/app/country/country.module.ts",
		"city-module~classoflicense-module~country-module~drivers-module~employee-module~state-module",
		"country-module"
	],
	"./dashboard.module": [
		"./src/app/dashboard/dashboard.module.ts",
		"dashboard-module"
	],
	"./drivers.module": [
		"./src/app/drivers/drivers.module.ts",
		"city-module~classoflicense-module~country-module~drivers-module~employee-module~state-module",
		"drivers-module~employee-module",
		"drivers-module"
	],
	"./employee.module": [
		"./src/app/employee/employee.module.ts",
		"city-module~classoflicense-module~country-module~drivers-module~employee-module~state-module",
		"drivers-module~employee-module",
		"employee-module"
	],
	"./feedback.module": [
		"./src/app/feedback/feedback.module.ts",
		"feedback-module"
	],
	"./meassagemanagement.module": [
		"./src/app/meassagemanagement/meassagemanagement.module.ts",
		"meassagemanagement-module"
	],
	"./notification.module": [
		"./src/app/notification/notification.module.ts",
		"notification-module"
	],
	"./state.module": [
		"./src/app/state/state.module.ts",
		"city-module~classoflicense-module~country-module~drivers-module~employee-module~state-module",
		"state-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error('Cannot find module "' + req + '".');
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/_directives/href-prevent-default.directive.ts":
/*!***************************************************************!*\
  !*** ./src/app/_directives/href-prevent-default.directive.ts ***!
  \***************************************************************/
/*! exports provided: HrefPreventDefaultDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HrefPreventDefaultDirective", function() { return HrefPreventDefaultDirective; });
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

var HrefPreventDefaultDirective = /** @class */ (function () {
    function HrefPreventDefaultDirective(el) {
        this.el = el;
    }
    HrefPreventDefaultDirective.prototype.ngAfterViewInit = function () {
    };
    HrefPreventDefaultDirective.prototype.preventDefault = function (event) {
        if (this.href.length === 0 || this.href === '#') {
            event.preventDefault();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], HrefPreventDefaultDirective.prototype, "href", void 0);
    HrefPreventDefaultDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: "[href]",
            host: { '(click)': 'preventDefault($event)' },
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], HrefPreventDefaultDirective);
    return HrefPreventDefaultDirective;
}());



/***/ }),

/***/ "./src/app/_directives/unwrap-tag.directive.ts":
/*!*****************************************************!*\
  !*** ./src/app/_directives/unwrap-tag.directive.ts ***!
  \*****************************************************/
/*! exports provided: UnwrapTagDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnwrapTagDirective", function() { return UnwrapTagDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers */ "./src/app/helpers.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UnwrapTagDirective = /** @class */ (function () {
    function UnwrapTagDirective(el) {
        this.el = el;
    }
    UnwrapTagDirective.prototype.ngAfterViewInit = function () {
        var nativeElement = this.el.nativeElement;
        _helpers__WEBPACK_IMPORTED_MODULE_1__["Helpers"].unwrapTag(nativeElement);
    };
    UnwrapTagDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: "[appunwraptag]",
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], UnwrapTagDirective);
    return UnwrapTagDirective;
}());



/***/ }),

/***/ "./src/app/_services/script-loader.service.ts":
/*!****************************************************!*\
  !*** ./src/app/_services/script-loader.service.ts ***!
  \****************************************************/
/*! exports provided: ScriptLoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScriptLoaderService", function() { return ScriptLoaderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ScriptLoaderService = /** @class */ (function () {
    function ScriptLoaderService() {
        this._scripts = [];
    }
    /**
     * @deprecated
     * @param tag
     * @param {string} scripts
     * @returns {Promise<any[]>}
     */
    ScriptLoaderService.prototype.load = function (tag) {
        var _this = this;
        var scripts = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            scripts[_i - 1] = arguments[_i];
        }
        scripts.forEach(function (src) {
            if (!_this._scripts[src]) {
                _this._scripts[src] = { src: src, loaded: false };
            }
        });
        var promises = [];
        scripts.forEach(function (src) { return promises.push(_this.loadScript(tag, src)); });
        return Promise.all(promises);
    };
    /**
     * Lazy load list of scripts
     * @param tag
     * @param scripts
     * @param loadOnce
     * @returns {Promise<any[]>}
     */
    ScriptLoaderService.prototype.loadScripts = function (tag, scripts, loadOnce) {
        var _this = this;
        loadOnce = loadOnce || false;
        scripts.forEach(function (script) {
            if (!_this._scripts[script]) {
                _this._scripts[script] = { src: script, loaded: false };
            }
        });
        var promises = [];
        scripts.forEach(function (script) { return promises.push(_this.loadScript(tag, script, loadOnce)); });
        return Promise.all(promises);
    };
    /**
     * Lazy load a single script
     * @param tag
     * @param {string} src
     * @param loadOnce
     * @returns {Promise<any>}
     */
    ScriptLoaderService.prototype.loadScript = function (tag, src, loadOnce) {
        var _this = this;
        loadOnce = loadOnce || false;
        if (!this._scripts[src]) {
            this._scripts[src] = { src: src, loaded: false };
        }
        return new Promise(function (resolve, reject) {
            // resolve if already loaded
            if (_this._scripts[src].loaded && loadOnce) {
                resolve({ src: src, loaded: true });
            }
            else {
                // load script tag
                var scriptTag = jquery__WEBPACK_IMPORTED_MODULE_1__('<script/>').
                    attr('type', 'text/javascript').
                    attr('src', _this._scripts[src].src);
                jquery__WEBPACK_IMPORTED_MODULE_1__(tag).append(scriptTag);
                _this._scripts[src] = { src: src, loaded: true };
                resolve({ src: src, loaded: true });
            }
        });
    };
    ScriptLoaderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], ScriptLoaderService);
    return ScriptLoaderService;
}());



/***/ }),

/***/ "./src/app/admin/adminmanagement-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/admin/adminmanagement-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: AdminmanagementRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminmanagementRoutingModule", function() { return AdminmanagementRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _theme_theme_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../theme/theme.component */ "./src/app/theme/theme.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/_guards/auth.guard */ "./src/app/auth/_guards/auth.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        'path': '',
        'component': _theme_theme_component__WEBPACK_IMPORTED_MODULE_1__["ThemeComponent"],
        'canActivate': [_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        'children': [
            {
                'path': 'profile',
                'loadChildren': '.\/adminmanagement.module#AdminmanagementModule',
            },
            {
                'path': '',
                'redirectTo': 'profile',
                'pathMatch': 'full',
            },
        ],
    }
];
var AdminmanagementRoutingModule = /** @class */ (function () {
    function AdminmanagementRoutingModule() {
    }
    AdminmanagementRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], AdminmanagementRoutingModule);
    return AdminmanagementRoutingModule;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_logout_logout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/logout/logout.component */ "./src/app/auth/logout/logout.component.ts");
/* harmony import */ var _auth_forgot_forgot_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/forgot/forgot.component */ "./src/app/auth/forgot/forgot.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: 'login', loadChildren: './auth/auth.module#AuthModule' },
    { path: 'logout', component: _auth_logout_logout_component__WEBPACK_IMPORTED_MODULE_2__["LogoutComponent"] },
    { path: 'dashboard', redirectTo: 'dashboard' },
    { path: 'driver', redirectTo: 'driver' },
    { path: 'employee', redirectTo: 'employee' },
    { path: 'country', redirectTo: 'country' },
    { path: 'state', redirectTo: 'state' },
    { path: 'city', redirectTo: 'city' },
    { path: 'license', redirectTo: 'license' },
    { path: 'feedback', redirectTo: 'feedback' },
    { path: 'notification', redirectTo: 'notification' },
    { path: 'content-management', redirectTo: 'content-management' },
    { path: 'meassage-management', redirectTo: 'meassage-management' },
    { path: 'reset-password-admin/:resetToken', component: _auth_forgot_forgot_component__WEBPACK_IMPORTED_MODULE_3__["ForgotComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- begin::Page loader -->\r\n\r\n<div class=\"m-page-loader m-page-loader--base m-page-loader--non-block\" style=\"width: 100%;height:100%; background-color: transparent; position: absolute; left:0; top: 0px; text-align: center\">\r\n    <div style=\"position: absolute; top: 45%; left: 45%;\">\r\n        <div class=\"m-blockui\">\r\n            <span>\r\n\t\t\tPlease wait...\r\n\t\t</span>\r\n            <span>\r\n\t\t\t<div class=\"m-loader m-loader--brand\"></div>\r\n\t\t</span>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!-- end::Page loader -->\r\n<!-- begin:: Page -->\r\n<router-outlet></router-outlet>\r\n<!-- end:: Page -->\r\n<app-quick-sidebar></app-quick-sidebar>\r\n<app-scroll-top></app-scroll-top>\r\n<app-tooltips></app-tooltips>\r\n<style>\r\n    .m-nav-sticky {\r\n        display: none\r\n    }\r\n\r\n</style>\r\n<!--begin::Base Scripts -->\r\n<!--end::Base Scripts -->\r\n<!--begin::Page Vendors -->\r\n<!--end::Page Vendors -->\r\n<!--begin::Page Snippets -->\r\n<!--end::Page Snippets -->\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers */ "./src/app/helpers.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(_router) {
        this._router = _router;
        this.title = 'app';
        this.globalBodyClass = 'm-page--loading-non-block m-page--wide m-header--fixed m-header--fixed-mobile m-aside-left--enabled m-aside-left--offcanvas m-footer--push m-aside--offcanvas-default';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._router.events.subscribe(function (route) {
            if (route instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                _helpers__WEBPACK_IMPORTED_MODULE_2__["Helpers"].setLoading(true);
                _helpers__WEBPACK_IMPORTED_MODULE_2__["Helpers"].bodyClass(_this.globalBodyClass);
            }
            if (route instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                _helpers__WEBPACK_IMPORTED_MODULE_2__["Helpers"].setLoading(false);
            }
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'body',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _theme_theme_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theme/theme.component */ "./src/app/theme/theme.component.ts");
/* harmony import */ var _theme_layouts_layout_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theme/layouts/layout.module */ "./src/app/theme/layouts/layout.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services_script_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_services/script-loader.service */ "./src/app/_services/script-loader.service.ts");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth/auth.module */ "./src/app/auth/auth.module.ts");
/* harmony import */ var _feedback_feedback_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./feedback/feedback-routing.module */ "./src/app/feedback/feedback-routing.module.ts");
/* harmony import */ var _notification_notification_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./notification/notification-routing.module */ "./src/app/notification/notification-routing.module.ts");
/* harmony import */ var _contentmanagement_contentmanagement_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./contentmanagement/contentmanagement-routing.module */ "./src/app/contentmanagement/contentmanagement-routing.module.ts");
/* harmony import */ var _meassagemanagement_meassagemanagement_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./meassagemanagement/meassagemanagement-routing.module */ "./src/app/meassagemanagement/meassagemanagement-routing.module.ts");
/* harmony import */ var _admin_adminmanagement_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./admin/adminmanagement-routing.module */ "./src/app/admin/adminmanagement-routing.module.ts");
/* harmony import */ var _drivers_drivers_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./drivers/drivers-routing.module */ "./src/app/drivers/drivers-routing.module.ts");
/* harmony import */ var _country_country_routing_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./country/country-routing.module */ "./src/app/country/country-routing.module.ts");
/* harmony import */ var _dashboard_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./dashboard/dashboard-routing.module */ "./src/app/dashboard/dashboard-routing.module.ts");
/* harmony import */ var _employee_employee_routing_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./employee/employee-routing.module */ "./src/app/employee/employee-routing.module.ts");
/* harmony import */ var _classoflicense_classoflicense_routing_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./classoflicense/classoflicense-routing.module */ "./src/app/classoflicense/classoflicense-routing.module.ts");
/* harmony import */ var _state_state_routing_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./state/state-routing.module */ "./src/app/state/state-routing.module.ts");
/* harmony import */ var _city_city_routing_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./city/city-routing.module */ "./src/app/city/city-routing.module.ts");
/* harmony import */ var _services_http_interceptor__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/http.interceptor */ "./src/app/services/http.interceptor.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _theme_theme_component__WEBPACK_IMPORTED_MODULE_2__["ThemeComponent"],
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]
            ],
            imports: [
                _theme_layouts_layout_module__WEBPACK_IMPORTED_MODULE_3__["LayoutModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _dashboard_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_16__["DashboardRoutingModule"],
                _drivers_drivers_routing_module__WEBPACK_IMPORTED_MODULE_14__["DriversRoutingModule"],
                _employee_employee_routing_module__WEBPACK_IMPORTED_MODULE_17__["EmployeeRoutingModule"],
                _country_country_routing_module__WEBPACK_IMPORTED_MODULE_15__["CountryRoutingModule"],
                _state_state_routing_module__WEBPACK_IMPORTED_MODULE_19__["StateRoutingModule"],
                _city_city_routing_module__WEBPACK_IMPORTED_MODULE_20__["CityRoutingModule"],
                _classoflicense_classoflicense_routing_module__WEBPACK_IMPORTED_MODULE_18__["ClassoflicenseRoutingModule"],
                _feedback_feedback_routing_module__WEBPACK_IMPORTED_MODULE_9__["FeedbackRoutingModule"],
                _notification_notification_routing_module__WEBPACK_IMPORTED_MODULE_10__["NotificationRoutingModule"],
                _contentmanagement_contentmanagement_routing_module__WEBPACK_IMPORTED_MODULE_11__["ContentmanagementRoutingModule"],
                _meassagemanagement_meassagemanagement_routing_module__WEBPACK_IMPORTED_MODULE_12__["MeassagemanagementRoutingModule"],
                _auth_auth_module__WEBPACK_IMPORTED_MODULE_8__["AuthModule"],
                _admin_adminmanagement_routing_module__WEBPACK_IMPORTED_MODULE_13__["AdminmanagementRoutingModule"]
            ],
            providers: [
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HTTP_INTERCEPTORS"],
                    useClass: _services_http_interceptor__WEBPACK_IMPORTED_MODULE_21__["RequestInterceptor"],
                    multi: true,
                },
                _services_script_loader_service__WEBPACK_IMPORTED_MODULE_7__["ScriptLoaderService"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/_directives/alert.component.html":
/*!*******************************************************!*\
  !*** ./src/app/auth/_directives/alert.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"message\" class=\"m-alert m-alert--outline alert alert-{{message.type}} alert-dismissible\" role=\"alert\">\r\n\t<button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"></button>\r\n\t<span>{{message.text}}</span>\r\n</div>"

/***/ }),

/***/ "./src/app/auth/_directives/alert.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/auth/_directives/alert.component.ts ***!
  \*****************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/index */ "./src/app/auth/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertComponent = /** @class */ (function () {
    function AlertComponent(_alertService) {
        this._alertService = _alertService;
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._alertService.getMessage().subscribe(function (message) {
            _this.message = message;
            setTimeout(function () {
                this.message = "";
            }.bind(_this), 5000);
        });
    };
    AlertComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-alert',
            template: __webpack_require__(/*! ./alert.component.html */ "./src/app/auth/_directives/alert.component.html")
        }),
        __metadata("design:paramtypes", [_services_index__WEBPACK_IMPORTED_MODULE_1__["AlertService"]])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "./src/app/auth/_guards/auth.guard.ts":
/*!********************************************!*\
  !*** ./src/app/auth/_guards/auth.guard.ts ***!
  \********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/user.service */ "./src/app/auth/_services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(_router, _userService) {
        this._router = _router;
        this._userService = _userService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        var usertoken = JSON.parse(sessionStorage.getItem('usertoken'));
        var grouting = [
            '/dashboard',
            '/driver',
            '/driver/add-driver',
            '/driver/edit-driver',
            '/driver/view-driver',
            '/employee',
            '/employee/add-ind-employee',
            '/employee/edit-ind-employee',
            '/employee/add-corp-employee',
            '/employee/edit-corp-employee',
            '/country',
            '/country/add-country',
            '/country/edit-country',
            '/state',
            '/state/add-state',
            '/state/edit-state',
            '/notification',
            '/city',
            '/city/add-city',
            '/city/edit-city',
            '/notification',
            '/meassage-management',
            '/content-management',
            '/profile',
            '/profile/my-activity',
            '/profile/update-password',
            '/license',
            '/license/edit-license',
            '/license/add-license',
            '/logout'
        ];
        if (currentUser || usertoken) {
            if (grouting.indexOf(state.url) > -1) {
                return true;
            }
            else {
                localStorage.removeItem('currentUser');
                localStorage.clear();
                sessionStorage.clear();
                this._router.navigate(['/login']);
                return false;
            }
        }
        // not logged in so redirect to login page with the return url
        this._router.navigate(['/login']);
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/_helpers/fake-backend.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/_helpers/fake-backend.ts ***!
  \***********************************************/
/*! exports provided: mockBackEndFactory, fakeBackendProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mockBackEndFactory", function() { return mockBackEndFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fakeBackendProvider", function() { return fakeBackendProvider; });
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_http_testing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http/testing */ "./node_modules/@angular/http/fesm5/testing.js");


function mockBackEndFactory(backend, options, realBackend) {
    // array in local storage for registered users
    var users = JSON.parse(localStorage.getItem('users')) || [];
    // fake token
    var token = 'fake-jwt-token';
    // configure fake backend
    backend.connections.subscribe(function (connection) {
        // wrap in timeout to simulate server api call
        setTimeout(function () {
            // authenticate
            if (connection.request.url.endsWith('/api/authenticate') && connection.request.method === _angular_http__WEBPACK_IMPORTED_MODULE_0__["RequestMethod"].Post) {
                // get parameters from post request
                var params_1 = JSON.parse(connection.request.getBody());
                // find if any user matches login credentials
                var filteredUsers = users.filter(function (user) {
                    return user.email === params_1.email && user.password === params_1.password;
                });
                // default account
                if (params_1.email === 'operator@dashboard.com' && params_1.password === '123') {
                    filteredUsers[0] = {
                        fullName: 'John',
                        email: 'operator@dashboard.com',
                        password: '123',
                        rolePermissionMenu: [{
                                "menuLabel": "Dashboard",
                                "menuRouterLink": "/dashboard",
                                "menuIcon": "",
                                "subMenuLabel1": [
                                    {
                                        "subMenuLabel": "Dashboard list 1",
                                        "subMenuRouterLink": "/dashboard1",
                                        "subMenuIcon": "fa fa-tasks",
                                        "subMenuLabel2": []
                                    }, {
                                        "subMenuLabel": "Dashboard list 2",
                                        "subMenuRouterLink": "dashboard2",
                                        "subMenuIcon": "fa fa-calendar",
                                        "subMenuLabel2": []
                                    }
                                ]
                            },
                            {
                                "menuLabel": "Sub Admin",
                                "menuRouterLink": "/sub-admin",
                                "menuIcon": "",
                                "subMenuLabel1": []
                            },
                            {
                                "menuLabel": "User Management",
                                "menuRouterLink": "/user-management",
                                "menuIcon": "",
                                "subMenuLabel1": []
                            },
                            {
                                "menuLabel": "Feedback",
                                "menuRouterLink": "/feedback",
                                "menuIcon": "",
                                "subMenuLabel1": []
                            },
                            {
                                "menuLabel": "Notifications",
                                "menuRouterLink": "/notification",
                                "menuIcon": "",
                                "subMenuLabel1": []
                            },
                            {
                                "menuLabel": "Content Management",
                                "menuRouterLink": "/content-management",
                                "menuIcon": "",
                                "subMenuLabel1": []
                            }
                        ]
                    };
                }
                else if (params_1.email === 'operator@dashboard1.com' && params_1.password === '123') {
                    filteredUsers[0] = {
                        fullName: 'Alice',
                        email: 'operator@dashboard1.com',
                        password: '123',
                        rolePermissionMenu: [{
                                "menuLabel": "Dashboard",
                                "menuRouterLink": "/dashboard",
                                "menuIcon": "",
                                "subMenuLabel1": []
                            }]
                    };
                }
                if (filteredUsers.length) {
                    // if login details are valid return 200 OK with user details and fake jwt token
                    var user = filteredUsers[0];
                    connection.mockRespond(new _angular_http__WEBPACK_IMPORTED_MODULE_0__["Response"](new _angular_http__WEBPACK_IMPORTED_MODULE_0__["ResponseOptions"]({
                        status: 200,
                        body: {
                            id: user.id,
                            fullName: user.fullName,
                            email: user.email,
                            token: token,
                            rolePermissionMenu: user.rolePermissionMenu
                        }
                    })));
                }
                else {
                    // else return 400 bad request
                    connection.mockError(new Error('Email or password is incorrect'));
                }
                return;
            }
            // get users
            if (connection.request.url.endsWith('/api/users') && connection.request.method === _angular_http__WEBPACK_IMPORTED_MODULE_0__["RequestMethod"].Get) {
                // check for fake auth token in header and return users if valid, this security
                // is implemented server side in a real application
                if (connection.request.headers.get('Authorization') === 'Bearer ' + token) {
                    connection.mockRespond(new _angular_http__WEBPACK_IMPORTED_MODULE_0__["Response"](new _angular_http__WEBPACK_IMPORTED_MODULE_0__["ResponseOptions"]({
                        status: 200,
                        body: users
                    })));
                }
                else {
                    // return 401 not authorised if token is null or invalid
                    connection.mockRespond(new _angular_http__WEBPACK_IMPORTED_MODULE_0__["Response"](new _angular_http__WEBPACK_IMPORTED_MODULE_0__["ResponseOptions"]({
                        status: 401
                    })));
                }
                return;
            }
            // get user by id
            if (connection.request.url.match(/\/api\/users\/\d+$/) && connection.request.method === _angular_http__WEBPACK_IMPORTED_MODULE_0__["RequestMethod"].Get) {
                // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                if (connection.request.headers.get('Authorization') === 'Bearer ' + token) {
                    // find user by id in users array
                    var urlParts = connection.request.url.split('/');
                    var id_1 = parseInt(urlParts[urlParts.length - 1]);
                    var matchedUsers = users.filter(function (user) {
                        return user.id === id_1;
                    });
                    var user = matchedUsers.length ? matchedUsers[0] : null;
                    // respond 200 OK with user
                    connection.mockRespond(new _angular_http__WEBPACK_IMPORTED_MODULE_0__["Response"](new _angular_http__WEBPACK_IMPORTED_MODULE_0__["ResponseOptions"]({
                        status: 200,
                        body: user
                    })));
                }
                else {
                    // return 401 not authorised if token is null or invalid
                    connection.mockRespond(new _angular_http__WEBPACK_IMPORTED_MODULE_0__["Response"](new _angular_http__WEBPACK_IMPORTED_MODULE_0__["ResponseOptions"]({
                        status: 401
                    })));
                }
                return;
            }
            // create user
            if (connection.request.url.endsWith('/api/users') && connection.request.method === _angular_http__WEBPACK_IMPORTED_MODULE_0__["RequestMethod"].Post) {
                // get new user object from post body
                var newUser_1 = JSON.parse(connection.request.getBody());
                // validation
                var duplicateUser = users.filter(function (user) {
                    return user.email === newUser_1.email;
                }).length;
                if (duplicateUser) {
                    return connection.mockError(new Error('Email "' + newUser_1.email + '" is already registered'));
                }
                // save new user
                newUser_1.id = users.length + 1;
                users.push(newUser_1);
                localStorage.setItem('users', JSON.stringify(users));
                // respond 200 OK
                connection.mockRespond(new _angular_http__WEBPACK_IMPORTED_MODULE_0__["Response"](new _angular_http__WEBPACK_IMPORTED_MODULE_0__["ResponseOptions"]({
                    status: 200
                })));
                return;
            }
            // delete user
            if (connection.request.url.match(/\/api\/users\/\d+$/) && connection.request.method === _angular_http__WEBPACK_IMPORTED_MODULE_0__["RequestMethod"].Delete) {
                // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                if (connection.request.headers.get('Authorization') === 'Bearer ' + token) {
                    // find user by id in users array
                    var urlParts = connection.request.url.split('/');
                    var id = parseInt(urlParts[urlParts.length - 1]);
                    for (var i = 0; i < users.length; i++) {
                        var user = users[i];
                        if (user.id === id) {
                            // delete user
                            users.splice(i, 1);
                            localStorage.setItem('users', JSON.stringify(users));
                            break;
                        }
                    }
                    // respond 200 OK
                    connection.mockRespond(new _angular_http__WEBPACK_IMPORTED_MODULE_0__["Response"](new _angular_http__WEBPACK_IMPORTED_MODULE_0__["ResponseOptions"]({
                        status: 200
                    })));
                }
                else {
                    // return 401 not authorised if token is null or invalid
                    connection.mockRespond(new _angular_http__WEBPACK_IMPORTED_MODULE_0__["Response"](new _angular_http__WEBPACK_IMPORTED_MODULE_0__["ResponseOptions"]({
                        status: 401
                    })));
                }
                return;
            }
            // token verify
            if (connection.request.url.endsWith('/api/verify') && connection.request.method === _angular_http__WEBPACK_IMPORTED_MODULE_0__["RequestMethod"].Get) {
                // check for fake auth token in header and return users if valid, this security
                // is implemented server side in a real application
                if (connection.request.headers.get('Authorization') === 'Bearer ' + token) {
                    connection.mockRespond(new _angular_http__WEBPACK_IMPORTED_MODULE_0__["Response"](new _angular_http__WEBPACK_IMPORTED_MODULE_0__["ResponseOptions"]({
                        status: 200,
                        body: {
                            status: 'ok'
                        }
                    })));
                }
                else {
                    // return 401 not authorised if token is null or invalid
                    connection.mockRespond(new _angular_http__WEBPACK_IMPORTED_MODULE_0__["Response"](new _angular_http__WEBPACK_IMPORTED_MODULE_0__["ResponseOptions"]({
                        status: 401
                    })));
                }
                return;
            }
            // forgot password
            if (connection.request.url.endsWith('/api/forgot-password') && connection.request.method === _angular_http__WEBPACK_IMPORTED_MODULE_0__["RequestMethod"].Post) {
                // get parameters from post request
                var params_2 = JSON.parse(connection.request.getBody());
                // find if any user matches login credentials
                var filteredUsers = users.filter(function (user) {
                    return user.email === params_2.email;
                });
                if (filteredUsers.length) {
                    // in real world, if email is valid, send email change password link
                    var user = filteredUsers[0];
                    connection.mockRespond(new _angular_http__WEBPACK_IMPORTED_MODULE_0__["Response"](new _angular_http__WEBPACK_IMPORTED_MODULE_0__["ResponseOptions"]({
                        status: 200
                    })));
                }
                else {
                    // else return 400 bad request
                    connection.mockError(new Error('User with this email does not exist'));
                }
                return;
            }
            // pass through any requests not handled above
            var realHttp = new _angular_http__WEBPACK_IMPORTED_MODULE_0__["Http"](realBackend, options);
            var requestOptions = new _angular_http__WEBPACK_IMPORTED_MODULE_0__["RequestOptions"]({
                method: connection.request.method,
                headers: connection.request.headers,
                body: connection.request.getBody(),
                url: connection.request.url,
                withCredentials: connection.request.withCredentials,
                responseType: connection.request.responseType
            });
            realHttp.request(connection.request.url, requestOptions)
                .subscribe(function (response) {
                connection.mockRespond(response);
            }, function (error) {
                connection.mockError(error);
            });
        }, 500);
    });
    return new _angular_http__WEBPACK_IMPORTED_MODULE_0__["Http"](backend, options);
}
var fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: _angular_http__WEBPACK_IMPORTED_MODULE_0__["Http"],
    deps: [_angular_http_testing__WEBPACK_IMPORTED_MODULE_1__["MockBackend"], _angular_http__WEBPACK_IMPORTED_MODULE_0__["BaseRequestOptions"], _angular_http__WEBPACK_IMPORTED_MODULE_0__["XHRBackend"]],
    useFactory: mockBackEndFactory
};


/***/ }),

/***/ "./src/app/auth/_helpers/index.ts":
/*!****************************************!*\
  !*** ./src/app/auth/_helpers/index.ts ***!
  \****************************************/
/*! exports provided: mockBackEndFactory, fakeBackendProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fake_backend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fake-backend */ "./src/app/auth/_helpers/fake-backend.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mockBackEndFactory", function() { return _fake_backend__WEBPACK_IMPORTED_MODULE_0__["mockBackEndFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fakeBackendProvider", function() { return _fake_backend__WEBPACK_IMPORTED_MODULE_0__["fakeBackendProvider"]; });




/***/ }),

/***/ "./src/app/auth/_services/alert.service.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/_services/alert.service.ts ***!
  \*************************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AlertService = /** @class */ (function () {
    function AlertService(_router) {
        var _this = this;
        this._router = _router;
        this.subject = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        _router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                if (_this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    // clear alert
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.success = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    };
    AlertService.prototype.error = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        // console.log(message)
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'danger', text: message });
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    AlertService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "./src/app/auth/_services/authentication.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/auth/_services/authentication.service.ts ***!
  \**********************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
    }
    AuthenticationService.prototype.login = function (email, password) {
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].APIURL + '/users/login';
        //let username1: string = 'admin@jhaiho.com';
        //let password1: string = 'Pass@word1';
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        // headers.append("Authorization", "Basic " + btoa(username1 + ":" + password1)); 
        headers.append("Content-Type", "application/json");
        return this.http.post(uri, { userEmail: email, userPassword: password }, { headers: headers })
            .map(function (response) {
            // login successful if there's a jwt token in the response
            var user = response.json();
            console.log(user.token);
            console.log(user.user);
            var filteredUsers = {};
            filteredUsers[0] = {
                name: 'test',
                fullName: 'test',
                email: 'n@gmail.com',
                img: 'abcd',
                rolePermissionMenu: [
                    {
                        "menuLabel": "Dashboard",
                        "menuRouterLink": "/dashboard",
                        "menuIcon": "fa fa-tasks",
                        "subMenuLabel1": [
                            {
                                "subMenuLabel": "Dashboard list 1",
                                "subMenuRouterLink": "/dashboard",
                                "subMenuIcon": "fa fa-tasks",
                                "subMenuLabel2": []
                            }, {
                                "subMenuLabel": "Dashboard list 2",
                                "subMenuRouterLink": "/dashboard",
                                "subMenuIcon": "fa fa-calendar",
                                "subMenuLabel2": []
                            }
                        ]
                    },
                    {
                        "menuLabel": "Drivers",
                        "menuRouterLink": "/driver",
                        "menuIcon": "fa fa-user",
                        "subMenuLabel1": []
                    },
                    {
                        "menuLabel": "Employees",
                        "menuRouterLink": "/employee",
                        "menuIcon": "fa fa-users",
                        "subMenuLabel1": []
                    },
                    {
                        "menuLabel": "Idscan Details",
                        "menuRouterLink": "/notification",
                        "menuIcon": "fa fa-comments-o",
                        "subMenuLabel1": []
                    },
                    {
                        "menuLabel": "Marketing Agency Accounts",
                        "menuRouterLink": "/notification",
                        "menuIcon": "fa fa-bell-o",
                        "subMenuLabel1": []
                    },
                    {
                        "menuLabel": "Manage Payments",
                        "menuRouterLink": "/meassage-management",
                        "menuIcon": "fa fa-envelope",
                        "subMenuLabel1": []
                    },
                    {
                        "menuLabel": "Manage CMS",
                        "menuRouterLink": "/content-management",
                        "menuIcon": "fa fa-file-code-o",
                        "subMenuLabel1": []
                    },
                    {
                        "menuLabel": "Manage Advertising",
                        "menuRouterLink": "/content-management",
                        "menuIcon": "fa fa-file-code-o",
                        "subMenuLabel1": []
                    },
                    {
                        "menuLabel": "Manage Literacy",
                        "menuRouterLink": "/content-management",
                        "menuIcon": "fa fa-file-code-o",
                        "subMenuLabel1": []
                    },
                    {
                        "menuLabel": "Manage Global Wanted",
                        "menuRouterLink": "/content-management",
                        "menuIcon": "fa fa-file-code-o",
                        "subMenuLabel1": []
                    },
                    {
                        "menuLabel": "Country List",
                        "menuRouterLink": "/country",
                        "menuIcon": "fa fa-file-code-o",
                        "subMenuLabel1": []
                    },
                    {
                        "menuLabel": "State List",
                        "menuRouterLink": "/state",
                        "menuIcon": "fa fa-file-code-o",
                        "subMenuLabel1": []
                    },
                    {
                        "menuLabel": "City List",
                        "menuRouterLink": "/city",
                        "menuIcon": "fa fa-file-code-o",
                        "subMenuLabel1": []
                    },
                    {
                        "menuLabel": "Class of Licence List",
                        "menuRouterLink": "/license",
                        "menuIcon": "fa fa-file-code-o",
                        "subMenuLabel1": []
                    },
                    {
                        "menuLabel": "Vehicle Preference List",
                        "menuRouterLink": "/content-management",
                        "menuIcon": "fa fa-file-code-o",
                        "subMenuLabel1": []
                    },
                    {
                        "menuLabel": "Promo Code List",
                        "menuRouterLink": "/content-management",
                        "menuIcon": "fa fa-file-code-o",
                        "subMenuLabel1": []
                    },
                    {
                        "menuLabel": "Image Recognition Request",
                        "menuRouterLink": "/content-management",
                        "menuIcon": "fa fa-file-code-o",
                        "subMenuLabel1": []
                    },
                    {
                        "menuLabel": "Settings",
                        "menuRouterLink": "/content-management",
                        "menuIcon": "fa fa-settings",
                        "subMenuLabel1": []
                    }
                ]
            };
            // if (user.user && user.token) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            // localStorage.setItem('adminProfilePic', user.data.image);
            localStorage.setItem('currentUser', JSON.stringify(user));
            sessionStorage.setItem('usertoken', JSON.stringify(user));
            var users = filteredUsers[0];
            localStorage.setItem('rolePermissionMenu', JSON.stringify(users.rolePermissionMenu));
            // }
        });
    };
    AuthenticationService.prototype.logout = function () {
        localStorage.removeItem('currentUser');
        sessionStorage.removeItem('usertoken');
        localStorage.removeItem("rolePermissionMenu");
        localStorage.clear();
        sessionStorage.clear();
    };
    AuthenticationService.prototype.forgotPassword = function (email) {
        // console.log(currentUser)
        var username1 = 'admin@jhaiho.com';
        var password1 = 'Pass@word1';
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append("Authorization", "Basic " + btoa(username1 + ":" + password1));
        headers.append("Content-Type", "application/json");
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].APIURL + '/admin/forgot-password';
        return this
            .http
            .post(uri, JSON.stringify({ email: email }), { headers: headers })
            .map(function (res) {
            return res.json();
        })
            .catch(function (error) {
            error = error.json();
            return rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(error);
        });
    };
    AuthenticationService.prototype.reset = function (resetToken, new_password) {
        // console.log(currentUser)
        var username1 = 'admin@jhaiho.com';
        var password1 = 'Pass@word1';
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append("Authorization", "Basic " + btoa(username1 + ":" + password1));
        headers.append("Content-Type", "application/json");
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].APIURL + '/admin/reset-password/' + resetToken;
        return this
            .http
            .post(uri, JSON.stringify({ new_password: new_password }), { headers: headers })
            .map(function (res) {
            return res.json();
        })
            .catch(function (error) {
            error = error.json();
            return rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(error);
        });
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/auth/_services/index.ts":
/*!*****************************************!*\
  !*** ./src/app/auth/_services/index.ts ***!
  \*****************************************/
/*! exports provided: AlertService, AuthenticationService, UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert.service */ "./src/app/auth/_services/alert.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return _alert_service__WEBPACK_IMPORTED_MODULE_0__["AlertService"]; });

/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authentication.service */ "./src/app/auth/_services/authentication.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return _authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]; });

/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service */ "./src/app/auth/_services/user.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]; });






/***/ }),

/***/ "./src/app/auth/_services/user.service.ts":
/*!************************************************!*\
  !*** ./src/app/auth/_services/user.service.ts ***!
  \************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.verify = function () {
        return this.http.get('/api/verify', this.jwt()).map(function (response) { return response.json(); });
    };
    UserService.prototype.forgotPassword = function (email) {
        return this.http.post('/api/forgot-password', JSON.stringify({ email: email }), this.jwt()).map(function (response) { return response.json(); });
    };
    UserService.prototype.getAll = function () {
        return this.http.get('/api/users', this.jwt()).map(function (response) { return response.json(); });
    };
    UserService.prototype.getById = function (id) {
        return this.http.get('/api/users/' + id, this.jwt()).map(function (response) { return response.json(); });
    };
    UserService.prototype.create = function (user) {
        return this.http.post('/api/users', user, this.jwt()).map(function (response) { return response.json(); });
    };
    UserService.prototype.update = function (user) {
        return this.http.put('/api/users/' + user.id, user, this.jwt()).map(function (response) { return response.json(); });
    };
    UserService.prototype.delete = function (id) {
        return this.http.delete('/api/users/' + id, this.jwt()).map(function (response) { return response.json(); });
    };
    // private helper methods
    UserService.prototype.jwt = function () {
        // create authorization header with jwt token
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Authorization': 'Bearer ' + currentUser.token });
            return new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        }
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/auth/auth-routing.routing.ts":
/*!**********************************************!*\
  !*** ./src/app/auth/auth-routing.routing.ts ***!
  \**********************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.component */ "./src/app/auth/auth.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _auth_component__WEBPACK_IMPORTED_MODULE_2__["AuthComponent"] },
];
var AuthRoutingModule = /** @class */ (function () {
    function AuthRoutingModule() {
    }
    AuthRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], AuthRoutingModule);
    return AuthRoutingModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.component.ts":
/*!****************************************!*\
  !*** ./src/app/auth/auth.component.ts ***!
  \****************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_script_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/script-loader.service */ "./src/app/_services/script-loader.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_services/authentication.service */ "./src/app/auth/_services/authentication.service.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_services/alert.service */ "./src/app/auth/_services/alert.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_services/user.service */ "./src/app/auth/_services/user.service.ts");
/* harmony import */ var _directives_alert_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_directives/alert.component */ "./src/app/auth/_directives/alert.component.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helpers */ "./src/app/helpers.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AuthComponent = /** @class */ (function () {
    function AuthComponent(_router, _script, _userService, _route, _authService, _alertService, cfr) {
        this._router = _router;
        this._script = _script;
        this._userService = _userService;
        this._route = _route;
        this._authService = _authService;
        this._alertService = _alertService;
        this.cfr = cfr;
        this.model = {};
        this.loading = false;
    }
    AuthComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.model.remember = false;
        if (localStorage.getItem('currentUser') != null) {
            this._router.navigate(['/dashboard']);
        }
        else {
            this._script.loadScripts('body', [
                'assets/demo/demo5/base/scripts.bundle.js'
            ], true).then(function () {
                _helpers__WEBPACK_IMPORTED_MODULE_7__["Helpers"].setLoading(false);
                _this.handleFormSwitch();
                _this.handleSignInFormSubmit();
                _this.handleSignUpFormSubmit();
                _this.handleForgetPasswordFormSubmit();
            });
        }
    };
    AuthComponent.prototype.signin = function () {
        var _this = this;
        this.loading = true;
        this._authService.login(this.model.email, this.model.password).subscribe(function (data) {
            var currentUser = JSON.parse(localStorage.getItem('currentUser'));
            // console.log(currentUser)
            _this._router.navigate(['/dashboard']);
        }, function (error) {
            _this.showAlert('alertSignin');
            _this._alertService.error('Either admin email or password is invalid.');
            _this.loading = false;
        });
    };
    AuthComponent.prototype.signup = function () {
        var _this = this;
        this.loading = true;
        this._userService.create(this.model).subscribe(function (data) {
            _this.showAlert('alertSignin');
            _this._alertService.success('Thank you. To complete your registration please check your email.', true);
            _this.loading = false;
            _this.displaySignInForm();
            _this.model = {};
        }, function (error) {
            _this.showAlert('alertSignup');
            _this._alertService.error(error);
            _this.loading = false;
        });
    };
    AuthComponent.prototype.forgotPass = function () {
        var _this = this;
        this.loading = true;
        this._authService.forgotPassword(this.model.email).subscribe(function (data) {
            _this.showAlert('alertSignin');
            _this._alertService.success('Cool! Password recovery instruction has been sent to your email.', true);
            _this.loading = false;
            _this.displaySignInForm();
            _this.model = {};
        }, function (error) {
            console.log(error);
            _this.showAlert('alertForgotPass');
            _this._alertService.error('Email does not exist in database.');
            _this.loading = false;
        });
    };
    AuthComponent.prototype.showAlert = function (target) {
        this[target].clear();
        var factory = this.cfr.resolveComponentFactory(_directives_alert_component__WEBPACK_IMPORTED_MODULE_6__["AlertComponent"]);
        var ref = this[target].createComponent(factory);
        ref.changeDetectorRef.detectChanges();
    };
    AuthComponent.prototype.handleSignInFormSubmit = function () {
        $('#m_login_signin_submit').click(function (e) {
            var form = $(e.target).closest('form');
            form.validate({
                rules: {
                    email: {
                        required: true,
                        email: true,
                    },
                    password: {
                        required: true,
                    },
                },
            });
            if (!form.valid()) {
                e.preventDefault();
                return;
            }
        });
    };
    AuthComponent.prototype.displaySignUpForm = function () {
        var login = document.getElementById('m_login');
        mUtil.removeClass(login, 'm-login--forget-password');
        mUtil.removeClass(login, 'm-login--signin');
        mUtil.addClass(login, 'm-login--signup');
        mUtil.animateClass(login.getElementsByClassName('m-login__signup')[0], 'flipInX animated');
    };
    AuthComponent.prototype.displaySignInForm = function () {
        var login = document.getElementById('m_login');
        mUtil.removeClass(login, 'm-login--forget-password');
        mUtil.removeClass(login, 'm-login--signup');
        $("#m_email-error").empty();
        try {
            $('form').data('validator').resetForm();
        }
        catch (e) {
        }
        mUtil.addClass(login, 'm-login--signin');
        mUtil.animateClass(login.getElementsByClassName('m-login__signin')[0], 'flipInX animated');
    };
    AuthComponent.prototype.displayForgetPasswordForm = function () {
        var login = document.getElementById('m_login');
        mUtil.removeClass(login, 'm-login--signin');
        mUtil.removeClass(login, 'm-login--signup');
        mUtil.addClass(login, 'm-login--forget-password');
        mUtil.animateClass(login.getElementsByClassName('m-login__forget-password')[0], 'flipInX animated');
    };
    AuthComponent.prototype.handleFormSwitch = function () {
        var _this = this;
        document.getElementById('m_login_forget_password').addEventListener('click', function (e) {
            e.preventDefault();
            _this.displayForgetPasswordForm();
        });
        document.getElementById('m_login_forget_password_cancel').addEventListener('click', function (e) {
            e.preventDefault();
            _this.displaySignInForm();
        });
        document.getElementById('m_login_signup').addEventListener('click', function (e) {
            e.preventDefault();
            _this.displaySignUpForm();
        });
        document.getElementById('m_login_signup_cancel').addEventListener('click', function (e) {
            e.preventDefault();
            _this.displaySignInForm();
        });
    };
    AuthComponent.prototype.handleSignUpFormSubmit = function () {
        document.getElementById('m_login_signup_submit').addEventListener('click', function (e) {
            var btn = $(e.target);
            var form = $(e.target).closest('form');
            form.validate({
                rules: {
                    fullname: {
                        required: true,
                    },
                    email: {
                        required: true,
                        email: true,
                    },
                    password: {
                        required: true,
                    },
                    rpassword: {
                        required: true,
                    },
                    agree: {
                        required: true,
                    },
                },
            });
            if (!form.valid()) {
                e.preventDefault();
                return;
            }
        });
    };
    AuthComponent.prototype.handleForgetPasswordFormSubmit = function () {
        document.getElementById('m_login_forget_password_submit').addEventListener('click', function (e) {
            var btn = $(e.target);
            var form = $(e.target).closest('form');
            form.validate({
                rules: {
                    email: {
                        required: true,
                        email: true,
                    },
                },
            });
            if (!form.valid()) {
                e.preventDefault();
                return;
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('alertSignin', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])
    ], AuthComponent.prototype, "alertSignin", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('alertSignup', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])
    ], AuthComponent.prototype, "alertSignup", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('alertForgotPass', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])
    ], AuthComponent.prototype, "alertForgotPass", void 0);
    AuthComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: '.m-grid.m-grid--hor.m-grid--root.m-page',
            template: __webpack_require__(/*! ./templates/login-1.component.html */ "./src/app/auth/templates/login-1.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_script_loader_service__WEBPACK_IMPORTED_MODULE_2__["ScriptLoaderService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"],
            _services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]])
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_http_testing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http/testing */ "./node_modules/@angular/http/fesm5/testing.js");
/* harmony import */ var _auth_routing_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth-routing.routing */ "./src/app/auth/auth-routing.routing.ts");
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth.component */ "./src/app/auth/auth.component.ts");
/* harmony import */ var _directives_alert_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_directives/alert.component */ "./src/app/auth/_directives/alert.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/auth/logout/logout.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_guards/auth.guard */ "./src/app/auth/_guards/auth.guard.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_services/alert.service */ "./src/app/auth/_services/alert.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_services/authentication.service */ "./src/app/auth/_services/authentication.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_services/user.service */ "./src/app/auth/_services/user.service.ts");
/* harmony import */ var _helpers_index__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_helpers/index */ "./src/app/auth/_helpers/index.ts");
/* harmony import */ var _forgot_forgot_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./forgot/forgot.component */ "./src/app/auth/forgot/forgot.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _auth_component__WEBPACK_IMPORTED_MODULE_6__["AuthComponent"],
                _directives_alert_component__WEBPACK_IMPORTED_MODULE_7__["AlertComponent"],
                _logout_logout_component__WEBPACK_IMPORTED_MODULE_8__["LogoutComponent"],
                _forgot_forgot_component__WEBPACK_IMPORTED_MODULE_14__["ForgotComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _auth_routing_routing__WEBPACK_IMPORTED_MODULE_5__["AuthRoutingModule"],
            ],
            providers: [
                _guards_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"],
                _services_alert_service__WEBPACK_IMPORTED_MODULE_10__["AlertService"],
                _services_authentication_service__WEBPACK_IMPORTED_MODULE_11__["AuthenticationService"],
                _services_user_service__WEBPACK_IMPORTED_MODULE_12__["UserService"],
                // api backend simulation
                _helpers_index__WEBPACK_IMPORTED_MODULE_13__["fakeBackendProvider"],
                _angular_http_testing__WEBPACK_IMPORTED_MODULE_4__["MockBackend"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["BaseRequestOptions"],
            ],
            entryComponents: [_directives_alert_component__WEBPACK_IMPORTED_MODULE_7__["AlertComponent"]],
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/auth/forgot/forgot.component.html":
/*!***************************************************!*\
  !*** ./src/app/auth/forgot/forgot.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"newlogin\">\n\n<div class=\"login_page\">\n\n        <div class=\"container-fluid\">\n                <div class=\"login-wrapper row\">\n                        <div id=\"login\" class=\"login loginpage offset-xl-4 offset-lg-3 offset-md-3 offset-0 col-12 col-md-6 col-xl-4\">\n\n\n<div class=\" m-login m-login--1 m-login--signin\" id=\"m_login\">\n    <div class=\"\">\n        <div class=\"\">\n            <div class=\"m-stack__item m-stack__item--fluid\">\n                <div class=\"m-login__wrapper\">\n                    <div class=\"m-login__logo\">\n                        <a href=\"#\">\n                            <img alt=\"\" src=\"./assets/demo/demo5/media/img/logo/logo1.png\" width=\"100\">\n                         </a>\n                    </div>\n                    <div class=\"m-login__signin\">\n                        <div class=\"m-login__head\">\n                            <h3 class=\"m-login__title\">\n                                Reset Password\n                            </h3>\n                        </div>\n                        <form (ngSubmit)=\"f.form.valid && reset()\" #f=\"ngForm\" class=\"m-login__form m-form\" action=\"\">\n                            <ng-template #alertSignin></ng-template>\n                            <div class=\"form-group m-form__group\">\n                                <input class=\"input\" type=\"password\" placeholder=\"New Password\" name=\"newPassword\" [(ngModel)]=\"model.newPassword\" #newPassword=\"ngModel\">\n                            </div>\n                            <div class=\"form-group m-form__group\">\n                                <input class=\"input\" type=\"password\" placeholder=\"Confirm Password\" name=\"confirmPassword\" [(ngModel)]=\"model.confirmPassword\" #confirmPassword=\"ngModel\">\n                            </div>\n                            <div class=\"m-login__form-action\">\n                                <button [disabled]=\"loading\" [ngClass]=\"{'m-loader m-loader--right m-loader--light': loading}\" id=\"m_login_signin_submit\" class=\"btn btn-primary btn-block\">\n\t\t\t\t\t\t\t\t\tSave Password\n\t\t\t\t\t\t\t\t</button>\n                            </div>\n                        </form>\n                        <div class=\"m-login__account\">\n                            <p> <span class=\"m-login__account-msg\"> \n                                <div id=\"m_login_signup\" class=\"m-link m-link--focus m-login__account-link\">\n                                \n                                </div>\n                                </span>\n                            </p>   \n                         </div>\n                    </div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n</div>\n</div>\n</div>\n</div>\n\n</div>"

/***/ }),

/***/ "./src/app/auth/forgot/forgot.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/forgot/forgot.component.ts ***!
  \*************************************************/
/*! exports provided: ForgotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotComponent", function() { return ForgotComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/authentication.service */ "./src/app/auth/_services/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ForgotComponent = /** @class */ (function () {
    function ForgotComponent(_router, _authService, route) {
        this._router = _router;
        this._authService = _authService;
        this.route = route;
        this.model = {};
        this.resetToken = '';
    }
    ForgotComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (response) { return _this.resetToken = response.get('resetToken'); });
    };
    ForgotComponent.prototype.reset = function () {
        var _this = this;
        if (this.model.newPassword != this.model.confirmPassword) {
        }
        this.loading = true;
        this._authService.reset(this.resetToken, this.model.confirmPassword).subscribe(function (data) {
            _this.loading = false;
            var currentUser = JSON.parse(localStorage.getItem('currentUser'));
            // console.log(currentUser.rolePermissionMenu[0].menuRouterLink)
            _this._router.navigate(['/login']);
        }, function (error) {
            // this.showAlert('alertSignin');
            // this._alertService.error('Reset Password Unsuccessful.');
            // this.loading = false;
        });
    };
    ForgotComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forgot',
            template: __webpack_require__(/*! ./forgot.component.html */ "./src/app/auth/forgot/forgot.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ForgotComponent);
    return ForgotComponent;
}());



/***/ }),

/***/ "./src/app/auth/logout/logout.component.html":
/*!***************************************************!*\
  !*** ./src/app/auth/logout/logout.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/auth/logout/logout.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/logout/logout.component.ts ***!
  \*************************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/authentication.service */ "./src/app/auth/_services/authentication.service.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers */ "./src/app/helpers.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(_router, _authService) {
        this._router = _router;
        this._authService = _authService;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        _helpers__WEBPACK_IMPORTED_MODULE_3__["Helpers"].setLoading(true);
        // reset login status
        this._authService.logout();
        this._router.navigate(['/login']);
    };
    LogoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-logout',
            template: __webpack_require__(/*! ./logout.component.html */ "./src/app/auth/logout/logout.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/auth/templates/login-1.component.html":
/*!*******************************************************!*\
  !*** ./src/app/auth/templates/login-1.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"newlogin\">\r\n\r\n    <div class=\"container-fluid\">\r\n        <div class=\"login-wrapper row\">\r\n\r\n            <div id=\"login\" class=\"login loginpage offset-xl-4 offset-lg-3 offset-md-3 offset-0 col-12 col-md-6 col-xl-4\">\r\n\r\n                <div class=\" m-login m-login--1 m-login--signin\" id=\"m_login\" style=\"margin-top: 20%;\">\r\n                    <div class=\"\">\r\n                        <div class=\"\">\r\n                            <div class=\"m-stack__item m-stack__item--fluid\">\r\n                                <div class=\"m-login__wrapper\">\r\n                                    <div class=\"m-login__logo\">\r\n                                            \r\n                                        <!--<a href=\"#\">\r\n                                            <img alt=\"\" src=\"./assets/demo/demo5/media/img/logo/logo1.png\" width=\"100\">\r\n                                        </a>-->\r\n                                    </div>\r\n                                    <div class=\"m-login__signin\">\r\n                                        <div class=\"m-login__head\">\r\n                                            <h3 class=\"m-login__title\">\r\n                                                    <i class=\"fa fa-paw\" style=\"font-size:30px;\"></i> &nbsp;<span>Global Drivers</span>\r\n                                            </h3>\r\n                                            <!-- <div class=\"m--margin-top-40 m-alert m-alert--outline m-alert--outline-2x alert alert-success fade show\" role=\"alert\">\r\n\t\t\t\t\t\t\t\tUse username\r\n\t\t\t\t\t\t\t\t<span style=\"font-weight: 500;\">\r\n\t\t\t\t\t\t\t\t\tdemo@demo.com\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\tand password\r\n\t\t\t\t\t\t\t\t<span style=\"font-weight: 500;\">\r\n\t\t\t\t\t\t\t\t\tdemo\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\tto continue or singup.\r\n\t\t\t\t\t\t\t</div> -->\r\n                                        </div>\r\n                                        <form (ngSubmit)=\"f.form.valid && signin()\" #f=\"ngForm\" class=\"m-login__form m-form\" action=\"\">\r\n                                            <ng-template #alertSignin></ng-template>\r\n                                            <div class=\"form-group m-form__group\">\r\n                                                <input class=\"input\" type=\"text\" placeholder=\"Email\" name=\"email\" [(ngModel)]=\"model.email\" #email=\"ngModel\" autocomplete=\"off\">\r\n                                            </div>\r\n                                            <div class=\"form-group m-form__group\">\r\n                                                <input class=\"input\" type=\"password\" placeholder=\"Password\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\">\r\n                                            </div>\r\n                                            <div class=\"row m-login__form-sub\">\r\n                                                <div class=\"col m--align-left\">\r\n                                                    <label class=\"m-checkbox m-checkbox--focus\">\r\n                                                        <input type=\"checkbox\" name=\"remember\" [(ngModel)]=\"model.remember\" #remember=\"ngModel\"> Remember me\r\n                                                        <span></span>\r\n                                                    </label>\r\n                                                </div>\r\n                                                <div class=\"col m--align-right\">\r\n                                                    <a href=\"javascript:;\" id=\"m_login_forget_password\" class=\"m-link\">\r\n                                                        Forgot Password ?\r\n                                                    </a>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"m-login__form-action\">\r\n                                                <!-- <button [disabled]=\"loading\" [ngClass]=\"{'m-loader m-loader--right m-loader--light': loading}\" id=\"m_login_signin_submit\" class=\"btn btn-primary btn-block\"> -->\r\n                                                <button [disabled]=\"loading\" id=\"m_login_signin_submit\" class=\"btn btn-primary btn-block\">\r\n                                                    Sign In\r\n                                                </button>\r\n                                            </div>\r\n                                        </form>\r\n                                        <div class=\"m-login__account\">\r\n                                            <p>\r\n                                                <span class=\"m-login__account-msg\">\r\n                                                    <div id=\"m_login_signup\" class=\"m-link m-link--focus m-login__account-link\">\r\n\r\n                                                    </div>\r\n                                                </span>\r\n                                            </p>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"m-login__signup\">\r\n                                        <div class=\"m-login__head\">\r\n                                            <h3 class=\"m-login__title\">\r\n                                                Sign Up\r\n                                            </h3>\r\n                                            <div class=\"m-login__desc\">\r\n                                                Enter your details to create your account:\r\n                                            </div>\r\n                                        </div>\r\n                                        <form (ngSubmit)=\"f.form.valid && signup()\" #f=\"ngForm\" class=\"m-login__form m-form\" action=\"\">\r\n                                            <ng-template #alertSignup></ng-template>\r\n                                            <div class=\"form-group m-form__group\">\r\n                                                <input class=\"input\" type=\"text\" placeholder=\"Fullname\" name=\"fullname\" [(ngModel)]=\"model.fullname\" #fullname=\"ngModel\">\r\n                                            </div>\r\n                                            <div class=\"form-group m-form__group\">\r\n                                                <input class=\"input\" type=\"text\" placeholder=\"Email\" name=\"email\" [(ngModel)]=\"model.email\" #email=\"ngModel\" autocomplete=\"off\">\r\n                                            </div>\r\n                                            <div class=\"form-group m-form__group\">\r\n                                                <input class=\"input\" type=\"password\" placeholder=\"Password\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\">\r\n                                            </div>\r\n                                            <div class=\"form-group m-form__group\">\r\n                                                <input class=\"input m-login__form-input--last\" type=\"password\" placeholder=\"Confirm Password\" name=\"rpassword\" [(ngModel)]=\"model.rpassword\"\r\n                                                    #rpassword=\"ngModel\">\r\n                                            </div>\r\n                                            <div class=\"row form-group m-form__group m-login__form-sub\">\r\n                                                <div class=\"col m--align-left\">\r\n                                                    <label class=\"m-checkbox m-checkbox--focus\">\r\n                                                        <input type=\"checkbox\" name=\"agree\" [(ngModel)]=\"model.agree\" #agree=\"ngModel\"> I Agree the\r\n                                                        <a href=\"#\" class=\"m-link m-link--focus\">\r\n                                                            terms and conditions\r\n                                                        </a>\r\n                                                        .\r\n                                                        <span></span>\r\n                                                    </label>\r\n                                                    <span class=\"m-form__help\"></span>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"m-login__form-action\">\r\n                                                <button [disabled]=\"loading\" [ngClass]=\"{'m-loader m-loader--right m-loader--light': loading}\" id=\"m_login_signup_submit\"\r\n                                                    class=\"btn btn-primary\">\r\n                                                    Sign Up\r\n                                                </button> &nbsp;&nbsp;\r\n                                                <button [disabled]=\"loading\" id=\"m_login_signup_cancel\" class=\"btn\">\r\n                                                    Cancel\r\n                                                </button>\r\n                                            </div>\r\n                                        </form>\r\n                                    </div>\r\n                                    <div class=\"m-login__forget-password\">\r\n                                        <div class=\"m-login__head\">\r\n                                            <h3 class=\"m-login__title\">\r\n                                                Forgot Password ?\r\n                                            </h3>\r\n                                            <div class=\"m-login__desc\">\r\n                                                <b>Enter your email to reset your password:</b>\r\n                                            </div>\r\n                                        </div>\r\n                                        <form (ngSubmit)=\"f.form.valid && forgotPass()\" #f=\"ngForm\" class=\"m-login__form m-form\" action=\"\">\r\n                                            <ng-template #alertForgotPass></ng-template>\r\n                                            <div class=\"form-group m-form__group\">\r\n                                                <input class=\"input\" type=\"text\" placeholder=\"Email\" name=\"email\" [(ngModel)]=\"model.email\" #email=\"ngModel\" id=\"m_email\"\r\n                                                    autocomplete=\"off\">\r\n                                            </div>\r\n                                            <div class=\"m-login__form-action\">\r\n                                                <button [disabled]=\"loading\" [ngClass]=\"{'m-loader m-loader--right m-loader--light': loading}\" id=\"m_login_forget_password_submit\"\r\n                                                    class=\"btn btn-primary\">\r\n                                                    Request\r\n                                                </button> &nbsp;&nbsp;\r\n                                                <button [disabled]=\"loading\" id=\"m_login_forget_password_cancel\" class=\"btn btn-primary\">\r\n                                                    Cancel\r\n                                                </button>\r\n                                            </div>\r\n                                        </form>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/city/city-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/city/city-routing.module.ts ***!
  \*********************************************/
/*! exports provided: CityRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityRoutingModule", function() { return CityRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _theme_theme_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../theme/theme.component */ "./src/app/theme/theme.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/_guards/auth.guard */ "./src/app/auth/_guards/auth.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        'path': '',
        'component': _theme_theme_component__WEBPACK_IMPORTED_MODULE_1__["ThemeComponent"],
        'canActivate': [_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        'children': [
            {
                'path': 'city',
                'loadChildren': '.\/city.module#CityModule',
            },
            {
                'path': '',
                'redirectTo': 'city',
                'pathMatch': 'full',
            },
        ],
    }
];
var CityRoutingModule = /** @class */ (function () {
    function CityRoutingModule() {
    }
    CityRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], CityRoutingModule);
    return CityRoutingModule;
}());



/***/ }),

/***/ "./src/app/classoflicense/classoflicense-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/classoflicense/classoflicense-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: ClassoflicenseRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassoflicenseRoutingModule", function() { return ClassoflicenseRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _theme_theme_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../theme/theme.component */ "./src/app/theme/theme.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/_guards/auth.guard */ "./src/app/auth/_guards/auth.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        'path': '',
        'component': _theme_theme_component__WEBPACK_IMPORTED_MODULE_1__["ThemeComponent"],
        'canActivate': [_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        'children': [
            {
                'path': 'license',
                'loadChildren': '.\/classoflicense.module#ClassoflicenseModule',
            },
            {
                'path': '',
                'redirectTo': 'license',
                'pathMatch': 'full',
            },
        ],
    }
];
var ClassoflicenseRoutingModule = /** @class */ (function () {
    function ClassoflicenseRoutingModule() {
    }
    ClassoflicenseRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ClassoflicenseRoutingModule);
    return ClassoflicenseRoutingModule;
}());



/***/ }),

/***/ "./src/app/contentmanagement/contentmanagement-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/contentmanagement/contentmanagement-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: ContentmanagementRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentmanagementRoutingModule", function() { return ContentmanagementRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _theme_theme_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../theme/theme.component */ "./src/app/theme/theme.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/_guards/auth.guard */ "./src/app/auth/_guards/auth.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        'path': '',
        'component': _theme_theme_component__WEBPACK_IMPORTED_MODULE_1__["ThemeComponent"],
        'canActivate': [_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        'children': [
            {
                'path': 'content-management',
                'loadChildren': '.\/contentmanagement.module#ContentmanagementModule',
            },
            {
                'path': '',
                'redirectTo': 'content-management',
                'pathMatch': 'full',
            },
        ],
    }
];
var ContentmanagementRoutingModule = /** @class */ (function () {
    function ContentmanagementRoutingModule() {
    }
    ContentmanagementRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ContentmanagementRoutingModule);
    return ContentmanagementRoutingModule;
}());



/***/ }),

/***/ "./src/app/country/country-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/country/country-routing.module.ts ***!
  \***************************************************/
/*! exports provided: CountryRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryRoutingModule", function() { return CountryRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _theme_theme_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../theme/theme.component */ "./src/app/theme/theme.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/_guards/auth.guard */ "./src/app/auth/_guards/auth.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        'path': '',
        'component': _theme_theme_component__WEBPACK_IMPORTED_MODULE_1__["ThemeComponent"],
        'canActivate': [_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        'children': [
            {
                'path': 'country',
                'loadChildren': '.\/country.module#CountryModule',
            },
            {
                'path': '',
                'redirectTo': 'country',
                'pathMatch': 'full',
            },
        ],
    }
];
var CountryRoutingModule = /** @class */ (function () {
    function CountryRoutingModule() {
    }
    CountryRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], CountryRoutingModule);
    return CountryRoutingModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/dashboard/dashboard-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _theme_theme_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../theme/theme.component */ "./src/app/theme/theme.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/_guards/auth.guard */ "./src/app/auth/_guards/auth.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        'path': '',
        'component': _theme_theme_component__WEBPACK_IMPORTED_MODULE_1__["ThemeComponent"],
        'canActivate': [_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        'children': [
            {
                'path': 'dashboard',
                'loadChildren': '.\/dashboard.module#DashboardModule',
            },
            {
                'path': '',
                'redirectTo': 'dashboard',
                'pathMatch': 'full',
            },
        ],
    }
];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());



/***/ }),

/***/ "./src/app/drivers/drivers-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/drivers/drivers-routing.module.ts ***!
  \***************************************************/
/*! exports provided: DriversRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriversRoutingModule", function() { return DriversRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _theme_theme_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../theme/theme.component */ "./src/app/theme/theme.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/_guards/auth.guard */ "./src/app/auth/_guards/auth.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        'path': '',
        'component': _theme_theme_component__WEBPACK_IMPORTED_MODULE_1__["ThemeComponent"],
        'canActivate': [_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        'children': [
            {
                'path': 'driver',
                'loadChildren': '.\/drivers.module#DriversModule',
            },
            {
                'path': '',
                'redirectTo': 'driver',
                'pathMatch': 'full',
            },
        ],
    }
];
var DriversRoutingModule = /** @class */ (function () {
    function DriversRoutingModule() {
    }
    DriversRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], DriversRoutingModule);
    return DriversRoutingModule;
}());



/***/ }),

/***/ "./src/app/employee/employee-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/employee/employee-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: EmployeeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeRoutingModule", function() { return EmployeeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _theme_theme_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../theme/theme.component */ "./src/app/theme/theme.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/_guards/auth.guard */ "./src/app/auth/_guards/auth.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        'path': '',
        'component': _theme_theme_component__WEBPACK_IMPORTED_MODULE_1__["ThemeComponent"],
        'canActivate': [_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        'children': [
            {
                'path': 'employee',
                'loadChildren': '.\/employee.module#EmployeeModule',
            },
            {
                'path': '',
                'redirectTo': 'employee',
                'pathMatch': 'full',
            },
        ],
    }
];
var EmployeeRoutingModule = /** @class */ (function () {
    function EmployeeRoutingModule() {
    }
    EmployeeRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], EmployeeRoutingModule);
    return EmployeeRoutingModule;
}());



/***/ }),

/***/ "./src/app/feedback/feedback-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/feedback/feedback-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: FeedbackRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackRoutingModule", function() { return FeedbackRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _theme_theme_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../theme/theme.component */ "./src/app/theme/theme.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/_guards/auth.guard */ "./src/app/auth/_guards/auth.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        'path': '',
        'component': _theme_theme_component__WEBPACK_IMPORTED_MODULE_1__["ThemeComponent"],
        'canActivate': [_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        'children': [
            {
                'path': 'feedback',
                'loadChildren': '.\/feedback.module#FeedbackModule',
            },
            {
                'path': '',
                'redirectTo': 'feedback',
                'pathMatch': 'full',
            },
        ],
    }
];
var FeedbackRoutingModule = /** @class */ (function () {
    function FeedbackRoutingModule() {
    }
    FeedbackRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], FeedbackRoutingModule);
    return FeedbackRoutingModule;
}());



/***/ }),

/***/ "./src/app/helpers.ts":
/*!****************************!*\
  !*** ./src/app/helpers.ts ***!
  \****************************/
/*! exports provided: Helpers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Helpers", function() { return Helpers; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

var Helpers = /** @class */ (function () {
    function Helpers() {
    }
    Helpers.loadStyles = function (tag, src) {
        if (Array.isArray(src)) {
            jquery__WEBPACK_IMPORTED_MODULE_0__["each"](src, function (k, s) {
                jquery__WEBPACK_IMPORTED_MODULE_0__(tag).append(jquery__WEBPACK_IMPORTED_MODULE_0__('<link/>').attr('href', s).attr('rel', 'stylesheet').attr('type', 'text/css'));
            });
        }
        else {
            jquery__WEBPACK_IMPORTED_MODULE_0__(tag).append(jquery__WEBPACK_IMPORTED_MODULE_0__('<link/>').attr('href', src).attr('rel', 'stylesheet').attr('type', 'text/css'));
        }
    };
    Helpers.unwrapTag = function (element) {
        jquery__WEBPACK_IMPORTED_MODULE_0__(element).removeAttr('appunwraptag').unwrap();
    };
    /**
     * Set title markup
     * @param title
     */
    Helpers.setTitle = function (title) {
        jquery__WEBPACK_IMPORTED_MODULE_0__('.m-subheader__title').text(title);
    };
    /**
     * Breadcrumbs markup
     * @param breadcrumbs
     */
    Helpers.setBreadcrumbs = function (breadcrumbs) {
        if (breadcrumbs)
            jquery__WEBPACK_IMPORTED_MODULE_0__('.m-subheader__title').addClass('m-subheader__title--separator');
        var ul = jquery__WEBPACK_IMPORTED_MODULE_0__('.m-subheader__breadcrumbs');
        if (jquery__WEBPACK_IMPORTED_MODULE_0__(ul).length === 0) {
            ul = jquery__WEBPACK_IMPORTED_MODULE_0__('<ul/>').addClass('m-subheader__breadcrumbs m-nav m-nav--inline')
                .append(jquery__WEBPACK_IMPORTED_MODULE_0__('<li/>').addClass('m-nav__item')
                .append(jquery__WEBPACK_IMPORTED_MODULE_0__('<a/>').addClass('m-nav__link m-nav__link--icon')
                .append(jquery__WEBPACK_IMPORTED_MODULE_0__('<i/>').addClass('m-nav__link-icon la la-home'))));
        }
        jquery__WEBPACK_IMPORTED_MODULE_0__(ul).find('li:not(:first-child)').remove();
        jquery__WEBPACK_IMPORTED_MODULE_0__["each"](breadcrumbs, function (k, v) {
            var li = jquery__WEBPACK_IMPORTED_MODULE_0__('<li/>').addClass('m-nav__item')
                .append(jquery__WEBPACK_IMPORTED_MODULE_0__('<a/>').addClass('m-nav__link m-nav__link--icon').attr('routerLink', v.href).attr('title', v.title)
                .append(jquery__WEBPACK_IMPORTED_MODULE_0__('<span/>').addClass('m-nav__link-text').text(v.text)));
            jquery__WEBPACK_IMPORTED_MODULE_0__(ul).append(jquery__WEBPACK_IMPORTED_MODULE_0__('<li/>').addClass('m-nav__separator').text('-')).append(li);
        });
        jquery__WEBPACK_IMPORTED_MODULE_0__('.m-subheader .m-stack__item:first-child').append(ul);
    };
    Helpers.setLoading = function (enable) {
        var body = jquery__WEBPACK_IMPORTED_MODULE_0__('body');
        if (enable) {
            jquery__WEBPACK_IMPORTED_MODULE_0__(body).addClass('m-page--loading-non-block');
        }
        else {
            jquery__WEBPACK_IMPORTED_MODULE_0__(body).removeClass('m-page--loading-non-block');
        }
    };
    Helpers.bodyClass = function (strClass) {
        jquery__WEBPACK_IMPORTED_MODULE_0__('body').attr('class', strClass);
    };
    return Helpers;
}());



/***/ }),

/***/ "./src/app/meassagemanagement/meassagemanagement-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/meassagemanagement/meassagemanagement-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: MeassagemanagementRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeassagemanagementRoutingModule", function() { return MeassagemanagementRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _theme_theme_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../theme/theme.component */ "./src/app/theme/theme.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/_guards/auth.guard */ "./src/app/auth/_guards/auth.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        'path': '',
        'component': _theme_theme_component__WEBPACK_IMPORTED_MODULE_1__["ThemeComponent"],
        'canActivate': [_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        'children': [
            {
                'path': 'meassage-management',
                'loadChildren': '.\/meassagemanagement.module#MeassagemanagementModule',
            },
            {
                'path': '',
                'redirectTo': 'meassage-management',
                'pathMatch': 'full',
            },
        ],
    }
];
var MeassagemanagementRoutingModule = /** @class */ (function () {
    function MeassagemanagementRoutingModule() {
    }
    MeassagemanagementRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], MeassagemanagementRoutingModule);
    return MeassagemanagementRoutingModule;
}());



/***/ }),

/***/ "./src/app/notification/notification-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/notification/notification-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: NotificationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationRoutingModule", function() { return NotificationRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _theme_theme_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../theme/theme.component */ "./src/app/theme/theme.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/_guards/auth.guard */ "./src/app/auth/_guards/auth.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        'path': '',
        'component': _theme_theme_component__WEBPACK_IMPORTED_MODULE_1__["ThemeComponent"],
        'canActivate': [_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        'children': [
            {
                'path': 'notification',
                'loadChildren': '.\/notification.module#NotificationModule',
            },
            {
                'path': '',
                'redirectTo': 'notification',
                'pathMatch': 'full',
            },
        ],
    }
];
var NotificationRoutingModule = /** @class */ (function () {
    function NotificationRoutingModule() {
    }
    NotificationRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], NotificationRoutingModule);
    return NotificationRoutingModule;
}());



/***/ }),

/***/ "./src/app/services/http.interceptor.ts":
/*!**********************************************!*\
  !*** ./src/app/services/http.interceptor.ts ***!
  \**********************************************/
/*! exports provided: RequestInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestInterceptor", function() { return RequestInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs_observable_of__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/observable/of */ "./node_modules/rxjs-compat/_esm5/observable/of.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RequestInterceptor = /** @class */ (function () {
    function RequestInterceptor(router) {
        this.router = router;
        this.access_token = '';
    }
    /**
     * @param HttpRequest<any> request - The intercepted request
     * @param HttpHandler next - The next interceptor in the pipeline
     * @return Observable<HttpEvent<any>>
     */
    RequestInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        request = this.addToken(request);
        return next.handle(request)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error, caught) {
            //  console.log("function called");
            if (error.status === 401) {
                _this.handleAuthError();
                // if you've caught / handled the error, you don't
                // want to rethrow it unless you also want
                // downstream consumers to have to handle it as
                // well.
                return Object(rxjs_observable_of__WEBPACK_IMPORTED_MODULE_3__["of"])(error);
            }
            throw error.error;
        }));
    };
    /**
     * Handle API authentication errors.
     */
    RequestInterceptor.prototype.handleAuthError = function () {
        // clear stored credentials; they're invalid
        // navigate back to the login page
        sessionStorage.clear();
        localStorage.clear();
        this.router.navigate(['/login']);
    };
    /**
     * Add stored auth token to request headers.
     * @param HttpRequest<any> request - the intercepted request
     * @return HttpRequest<any> - the modified request
     */
    RequestInterceptor.prototype.addToken = function (request) {
        if (localStorage.length != 0) {
            var currentUser = JSON.parse(localStorage.getItem('currentUser'));
            var usertoken = JSON.parse(sessionStorage.getItem('usertoken'));
            this.access_token = currentUser.token || usertoken.token;
            if (this.access_token) {
                var token = this.access_token;
                return request.clone({
                    setHeaders: {
                        "Authorization": token,
                        "plateform": 'browser',
                    },
                });
            }
        }
        return request;
    };
    RequestInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], RequestInterceptor);
    return RequestInterceptor;
}());



/***/ }),

/***/ "./src/app/state/state-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/state/state-routing.module.ts ***!
  \***********************************************/
/*! exports provided: StateRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateRoutingModule", function() { return StateRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _theme_theme_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../theme/theme.component */ "./src/app/theme/theme.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/_guards/auth.guard */ "./src/app/auth/_guards/auth.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        'path': '',
        'component': _theme_theme_component__WEBPACK_IMPORTED_MODULE_1__["ThemeComponent"],
        'canActivate': [_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        'children': [
            {
                'path': 'state',
                'loadChildren': '.\/state.module#StateModule',
            },
            {
                'path': '',
                'redirectTo': 'state',
                'pathMatch': 'full',
            },
        ],
    }
];
var StateRoutingModule = /** @class */ (function () {
    function StateRoutingModule() {
    }
    StateRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], StateRoutingModule);
    return StateRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/layouts/aside-nav/aside-nav.component.html":
/*!******************************************************************!*\
  !*** ./src/app/theme/layouts/aside-nav/aside-nav.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "   <!-- SIDEBAR - START -->\r\n\r\n   <div class=\"page-sidebar fixedscroll expandit\" id=\"sidebarCustomId\">\r\n\r\n\t\t<!-- MAIN MENU - START -->\r\n\t\t   <div class=\"page-sidebar-wrapper\" id=\"main-menu-wrapper\"> \r\n\r\n\t\t\t   <!-- USER INFO - START -->\r\n\t\t\t   <div class=\"profile-info row\">\r\n\r\n\t\t\t\t   <div class=\"profile-image col-4\">\r\n\r\n\t\t\t\t\t   <a href=\"#\"  id=\"a\">\r\n\t\t\t\t\t\t   <img alt=\"\" src=\"{{admin_profile_pic}}\" class=\"img-fluid rounded-circle\">\r\n\t\t\t\t\t   </a>\r\n\r\n\t\t\t\t   </div>\r\n\r\n\t\t\t\t   <div class=\"profile-details col-8\">\r\n\r\n\t\t\t\t\t   <h3>\r\n\t\t\t\t\t\t   <a href=\"#\">{{currentUser.user.userFirstName}}</a>\r\n\r\n\t\t\t\t\t\t   <!-- Available statuses: online, idle, busy, away and offline -->\r\n\t\t\t\t\t\t   <span class=\"profile-status online\"></span>\r\n\t\t\t\t\t   </h3>\r\n\r\n\t\t\t\t\t   <p class=\"profile-title\">Administrator</p>\r\n\r\n\t\t\t\t   </div>\r\n\r\n\t\t\t   </div>\r\n\t\t\t   <!-- USER INFO - END -->\r\n\r\n              <br>\r\n\t\t\t   <ul class='wraplist'>\t\r\n\r\n\t\t\t\t\t<li class=\"has-submenu\" *ngFor=\"let pmenu of rolePermissionMenu;let index=index\" routerLinkActive=\"open\" [class.has-submenu]=\"(pmenu.subMenuLabel1.length>0)\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\"> \r\n\t\t\t\t\t\t<a  routerLink=\"/{{pmenu.menuRouterLink}}\">\r\n\t\t\t\t\t\t\t<i class=\"{{pmenu.menuIcon}}\"></i>\r\n\t\t\t\t\t\t\t<span class=\"title\">{{pmenu.menuLabel}}</span>\r\n\t\t\t\t\t\t\t<span class=\"arrow \" *ngIf=\"(pmenu.subMenuLabel1.length>0)\"  (click)=\"menuToggle()\" ></span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t<ul class=\"sub-menu\"  *ngIf=\"(pmenu.subMenuLabel1.length>0)\">\r\n\t\t\t\t\t\t\t<li *ngFor=\"let subMenuLabel1 of pmenu.subMenuLabel1;let index=index\"> \r\n\t\t\t\t\t\t\t\t<a class=\"\" routerLink=\"/{{subMenuLabel1.subMenuRouterLink}}\" >{{subMenuLabel1.subMenuLabel}}</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t  <!-- <li class=\"\"> \r\n\t\t\t\t\t   <a href=\"index-blog.html\">\r\n\t\t\t\t\t\t   <i class=\"fa fa-dashboard\"></i>\r\n\t\t\t\t\t\t   <span class=\"title\">Dashboard</span>\r\n\t\t\t\t\t   </a>\r\n\t\t\t\t   </li>\r\n\t\t\t\t   <li class=\"open\"> \r\n\t\t\t\t\t   <a href=\"javascript:;\">\r\n\t\t\t\t\t\t   <i class=\"fa fa-sitemap\"></i>\r\n\t\t\t\t\t\t   <span class=\"title\">Categories</span>\r\n\t\t\t\t\t\t   <span class=\"arrow \"></span>\r\n\t\t\t\t\t   </a>\r\n\t\t\t\t\t   <ul class=\"sub-menu\" >\r\n\t\t\t\t\t\t   <li>\r\n\t\t\t\t\t\t\t   <a class=\"\" href=\"blo-categories.html\" >All Categories</a>\r\n\t\t\t\t\t\t   </li>\r\n\t\t\t\t\t\t   <li>\r\n\t\t\t\t\t\t\t   <a class=\"\" href=\"blo-category-add.html\" >Add Category</a>\r\n\t\t\t\t\t\t   </li>\r\n\t\t\t\t\t\t   <li>\r\n\t\t\t\t\t\t\t   <a class=\"\" href=\"blo-category-edit.html\" >Edit Category</a>\r\n\t\t\t\t\t\t   </li>\r\n\t\t\t\t\t   </ul>\r\n\t\t\t\t   </li>\r\n\t\t\t\t   <li class=\"\"> \r\n\t\t\t\t\t   <a href=\"javascript:;\">\r\n\t\t\t\t\t\t   <i class=\"fa fa-files-o\"></i>\r\n\t\t\t\t\t\t   <span class=\"title\">Pages</span>\r\n\t\t\t\t\t\t   <span class=\"arrow \"></span>\r\n\t\t\t\t\t   </a>\r\n\t\t\t\t\t   <ul class=\"sub-menu\" >\r\n\t\t\t\t\t\t   <li>\r\n\t\t\t\t\t\t\t   <a class=\"\" href=\"blo-pages.html\" >All Pages</a>\r\n\t\t\t\t\t\t   </li>\r\n\t\t\t\t\t\t   <li>\r\n\t\t\t\t\t\t\t   <a class=\"\" href=\"blo-page-add.html\" >Add Page</a>\r\n\t\t\t\t\t\t   </li>\r\n\t\t\t\t\t\t   <li>\r\n\t\t\t\t\t\t\t   <a class=\"\" href=\"blo-page-edit.html\" >Edit Page</a>\r\n\t\t\t\t\t\t   </li>\r\n\t\t\t\t\t\t   <li>\r\n\t\t\t\t\t\t\t   <a class=\"\" href=\"blo-page-view.html\" >View Page</a>\r\n\t\t\t\t\t\t   </li>\r\n\t\t\t\t\t   </ul>\r\n\t\t\t\t   </li>\r\n\t\t\t\t   <li class=\"\"> \r\n\t\t\t\t\t   <a href=\"javascript:;\">\r\n\t\t\t\t\t\t   <i class=\"fa fa-user\"></i>\r\n\t\t\t\t\t\t   <span class=\"title\">Users</span>\r\n\t\t\t\t\t\t   <span class=\"arrow \"></span>\r\n\t\t\t\t\t   </a>\r\n\t\t\t\t\t   <ul class=\"sub-menu\" >\r\n\t\t\t\t\t\t   <li>\r\n\t\t\t\t\t\t\t   <a class=\"\" href=\"blo-users.html\" >All Users</a>\r\n\t\t\t\t\t\t   </li>\r\n\t\t\t\t\t\t   <li>\r\n\t\t\t\t\t\t\t   <a class=\"\" href=\"blo-user-add.html\" >Add User</a>\r\n\t\t\t\t\t\t   </li>\r\n\t\t\t\t\t\t   <li>\r\n\t\t\t\t\t\t\t   <a class=\"\" href=\"blo-user-edit.html\" >Edit User</a>\r\n\t\t\t\t\t\t   </li>\r\n\t\t\t\t\t\t   <li>\r\n\t\t\t\t\t\t\t   <a class=\"\" href=\"blo-user-profile.html\" >User Profile</a>\r\n\t\t\t\t\t\t   </li>\r\n\t\t\t\t\t   </ul>\r\n\t\t\t\t   </li> -->\r\n\t\t\t\t\t\r\n\t\t\t\t\t\r\n\t\t\t\t\t\r\n\t\t\t\t\t\r\n\r\n\t\t\t   </ul>\r\n\r\n\t\t\t\t\r\n\r\n\t\t   </div>\r\n\t\t   <!-- MAIN MENU - END -->\r\n\r\n\r\n\t   </div>\r\n\t   <!--  SIDEBAR - END -->"

/***/ }),

/***/ "./src/app/theme/layouts/aside-nav/aside-nav.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/theme/layouts/aside-nav/aside-nav.component.ts ***!
  \****************************************************************/
/*! exports provided: AsideNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsideNavComponent", function() { return AsideNavComponent; });
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

var AsideNavComponent = /** @class */ (function () {
    // admin_profile_pic = localStorage.getItem('adminProfilePic');
    function AsideNavComponent() {
        this.flag = 0;
        this.admin_profile_pic = "./assets/image/user_profile.png";
    }
    AsideNavComponent.prototype.ngOnInit = function () {
        this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
        this.rolePermissionMenu = JSON.parse(localStorage.getItem("rolePermissionMenu"));
        console.log("rolePermissionMenu", this.currentUser);
        console.log("rolePermissionMenu", this.rolePermissionMenu);
    };
    AsideNavComponent.prototype.ngAfterViewInit = function () {
        //  mLayout.initAside();
    };
    AsideNavComponent.prototype.menuToggle = function () {
        $('.has-submenu > a').next("ul").toggle();
    };
    AsideNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-aside-nav",
            template: __webpack_require__(/*! ./aside-nav.component.html */ "./src/app/theme/layouts/aside-nav/aside-nav.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [])
    ], AsideNavComponent);
    return AsideNavComponent;
}());



/***/ }),

/***/ "./src/app/theme/layouts/footer/footer.component.html":
/*!************************************************************!*\
  !*** ./src/app/theme/layouts/footer/footer.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/layouts/footer/footer.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/theme/layouts/footer/footer.component.ts ***!
  \**********************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-footer",
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/theme/layouts/footer/footer.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/theme/layouts/header-nav/header-nav.component.html":
/*!********************************************************************!*\
  !*** ./src/app/theme/layouts/header-nav/header-nav.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='page-topbar'>\r\n\t<div class='logo-area'>\r\n\t\t\t<h3 class=\"logo\">\r\n\t\t\t\t\t<i class=\"fa fa-paw\" style=\"font-size:30px;\"></i> &nbsp;<span>Global Drivers</span>\r\n\t\t\t\t\r\n\t\t\t</h3>\r\n\t</div>\r\n\t<div class='quick-area'>\r\n\t\t<div class='float-left'>\r\n\t\t\t<ul class=\"info-menu left-links list-inline list-unstyled\">\r\n\t\t\t\t<li class=\"sidebar-toggle-wrap\">\r\n\t\t\t\t\t<a href=\"#\" data-toggle=\"sidebar\" class=\"sidebar_toggle\" (click)=\"sidebarToggle()\">\r\n\t\t\t\t\t\t<i class=\"fa fa-bars\"></i>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\t\t<div class='float-right'>\r\n\t\t\t<!-- begin::Topbar -->\r\n\t\t\t<div class=\"m-stack__item m-stack__item--fluid m-header-head\" id=\"m_header_nav\" style=\"padding-top: 10px;\">\r\n\t\t\t\t<div id=\"m_header_topbar\" class=\"m-topbar  m-stack m-stack--ver m-stack--general\">\r\n\t\t\t\t\t<div class=\"m-stack__item m-topbar__nav-wrapper\">\r\n\t\t\t\t\t\t<ul class=\"m-topbar__nav m-nav m-nav--inline\">\r\n\r\n\r\n\r\n\t\t\t\t\t\t\t<li class=\"m-nav__item m-topbar__user-profile m-topbar__user-profile--img  m-dropdown m-dropdown--medium m-dropdown--arrow m-dropdown--header-bg-fill m-dropdown--align-right m-dropdown--mobile-full-width m-dropdown--skin-light\"\r\n\t\t\t\t\t\t\t m-dropdown-toggle=\"click\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"m-nav__link m-dropdown__toggle\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-topbar__userpic\">\r\n\t\t\t\t\t\t\t\t\t\t<img src=\"{{admin_profile_pic}}\" class=\"m--img-rounded m--marginless m--img-centered\" alt=\"\" />\r\n\t\t\t\t\t\t\t\t\t</span> &nbsp;&nbsp;\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-topbar__welcome\">\r\n\t\t\t\t\t\t\t\t\t\tHello&nbsp;&nbsp;\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-topbar__username\">\r\n\t\t\t\t\t\t\t\t\t\t{{currentUser.user.userFirstName}}\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<div class=\"m-dropdown__wrapper\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust\"></span>\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__inner\">\r\n\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__body\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__content\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"m-nav m-nav--skin-light\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-nav__section m--hide\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__section-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSection\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/profile\" class=\"m-nav__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-profile-1\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-title\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-wrap\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tMy Profile\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/profile/my-activity\" class=\"m-nav__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-share\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tActivity\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/profile/update-password\" class=\"m-nav__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-chat-1\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tChange Password\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-nav__separator m-nav__separator--fit\"></li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <a routerLink=\"/snippets/pages/user/login-1\" class=\"btn m-btn--pill btn-secondary m-btn m-btn--custom m-btn--label-brand m-btn--bolder\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t routerLink=\"/logout\" data-toggle=\"modal\" data-target=\"#logoutModal\"> -->\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"btn m-btn--pill btn-primary m-btn m-btn--custom m-btn--label-brand m-btn--bolder\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t  data-toggle=\"modal\" routerLink=\"/logout\" id=\"logout\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tLogout\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</li>\r\n\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<!-- end::Topbar -->\r\n\t\t</div>\r\n\t</div>\r\n\r\n</div>\r\n<!-- END TOPBAR -->\r\n\r\n\r\n<div class=\"modal fade\" id=\"logoutModal\" role=\"dialog\">\r\n\t<div class=\"modal-dialog\">\r\n\r\n\t\t<!-- Modal content-->\r\n\t\t<div class=\"modal-content\" >\r\n\t\t\t<div class=\"modal-body\">\r\n\t\t\t\t<p style=\"font-weight: bold\">Are you sure, You want to logout?</p>\r\n\t\t\t\t<p style=\"text-align:center\">\r\n\t\t\t\t\t<a routerLink=\"/logout\" style=\"margin-right: 3%;\">\r\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Yes</button>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t\t<a>\r\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">No</button>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</p>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/theme/layouts/header-nav/header-nav.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/theme/layouts/header-nav/header-nav.component.ts ***!
  \******************************************************************/
/*! exports provided: HeaderNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderNavComponent", function() { return HeaderNavComponent; });
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

var HeaderNavComponent = /** @class */ (function () {
    // admin_profile_pic = localStorage.getItem('adminProfilePic');
    function HeaderNavComponent() {
        this.flag = 0;
        this.admin_profile_pic = "./assets/image/user_profile.png";
    }
    HeaderNavComponent.prototype.ngOnInit = function () {
        this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
        this.rolePermissionMenu = JSON.parse(localStorage.getItem("rolePermissionMenu"));
        //  console.log("rolePermissionMenu", this.rolePermissionMenu)
    };
    HeaderNavComponent.prototype.ngAfterViewInit = function () {
        mLayout.initHeader();
    };
    HeaderNavComponent.prototype.sidebarToggle = function () {
        if (this.flag == 0) {
            document.getElementById('sidebarCustomId').classList.remove("expandit");
            document.getElementById('sidebarCustomId').classList.add("collapseit");
            document.getElementById('main-content').classList.add("sidebar_shift");
            this.flag = 1;
        }
        else {
            document.getElementById('sidebarCustomId').classList.remove("collapseit");
            document.getElementById('sidebarCustomId').classList.add("expandit");
            document.getElementById('main-content').classList.remove("sidebar_shift");
            this.flag = 0;
        }
    };
    HeaderNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-header-nav",
            template: __webpack_require__(/*! ./header-nav.component.html */ "./src/app/theme/layouts/header-nav/header-nav.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [])
    ], HeaderNavComponent);
    return HeaderNavComponent;
}());



/***/ }),

/***/ "./src/app/theme/layouts/layout.module.ts":
/*!************************************************!*\
  !*** ./src/app/theme/layouts/layout.module.ts ***!
  \************************************************/
/*! exports provided: createTranslateLoader, LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pages_default_default_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/default/default.component */ "./src/app/theme/pages/default/default.component.ts");
/* harmony import */ var _aside_nav_aside_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aside-nav/aside-nav.component */ "./src/app/theme/layouts/aside-nav/aside-nav.component.ts");
/* harmony import */ var _header_nav_header_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header-nav/header-nav.component */ "./src/app/theme/layouts/header-nav/header-nav.component.ts");
/* harmony import */ var _pages_aside_left_display_disabled_aside_left_display_disabled_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/aside-left-display-disabled/aside-left-display-disabled.component */ "./src/app/theme/pages/aside-left-display-disabled/aside-left-display-disabled.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/theme/layouts/footer/footer.component.ts");
/* harmony import */ var _quick_sidebar_quick_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./quick-sidebar/quick-sidebar.component */ "./src/app/theme/layouts/quick-sidebar/quick-sidebar.component.ts");
/* harmony import */ var _scroll_top_scroll_top_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./scroll-top/scroll-top.component */ "./src/app/theme/layouts/scroll-top/scroll-top.component.ts");
/* harmony import */ var _tooltips_tooltips_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tooltips/tooltips.component */ "./src/app/theme/layouts/tooltips/tooltips.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _directives_href_prevent_default_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../_directives/href-prevent-default.directive */ "./src/app/_directives/href-prevent-default.directive.ts");
/* harmony import */ var _directives_unwrap_tag_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../_directives/unwrap-tag.directive */ "./src/app/_directives/unwrap-tag.directive.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_15__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}
var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _pages_default_default_component__WEBPACK_IMPORTED_MODULE_1__["DefaultComponent"],
                _aside_nav_aside_nav_component__WEBPACK_IMPORTED_MODULE_2__["AsideNavComponent"],
                _header_nav_header_nav_component__WEBPACK_IMPORTED_MODULE_3__["HeaderNavComponent"],
                _pages_aside_left_display_disabled_aside_left_display_disabled_component__WEBPACK_IMPORTED_MODULE_4__["AsideLeftDisplayDisabledComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
                _quick_sidebar_quick_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["QuickSidebarComponent"],
                _scroll_top_scroll_top_component__WEBPACK_IMPORTED_MODULE_7__["ScrollTopComponent"],
                _tooltips_tooltips_component__WEBPACK_IMPORTED_MODULE_8__["TooltipsComponent"],
                _directives_href_prevent_default_directive__WEBPACK_IMPORTED_MODULE_11__["HrefPreventDefaultDirective"],
                _directives_unwrap_tag_directive__WEBPACK_IMPORTED_MODULE_12__["UnwrapTagDirective"],
            ],
            exports: [
                _pages_default_default_component__WEBPACK_IMPORTED_MODULE_1__["DefaultComponent"],
                _aside_nav_aside_nav_component__WEBPACK_IMPORTED_MODULE_2__["AsideNavComponent"],
                _header_nav_header_nav_component__WEBPACK_IMPORTED_MODULE_3__["HeaderNavComponent"],
                _pages_aside_left_display_disabled_aside_left_display_disabled_component__WEBPACK_IMPORTED_MODULE_4__["AsideLeftDisplayDisabledComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
                _quick_sidebar_quick_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["QuickSidebarComponent"],
                _scroll_top_scroll_top_component__WEBPACK_IMPORTED_MODULE_7__["ScrollTopComponent"],
                _tooltips_tooltips_component__WEBPACK_IMPORTED_MODULE_8__["TooltipsComponent"],
                _directives_href_prevent_default_directive__WEBPACK_IMPORTED_MODULE_11__["HrefPreventDefaultDirective"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateLoader"],
                        useFactory: (createTranslateLoader),
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClient"]]
                    }
                })
            ],
            providers: []
        })
    ], LayoutModule);
    return LayoutModule;
}());



/***/ }),

/***/ "./src/app/theme/layouts/quick-sidebar/quick-sidebar.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/theme/layouts/quick-sidebar/quick-sidebar.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- begin::Quick Sidebar -->\r\n<div id=\"m_quick_sidebar\" class=\"m-quick-sidebar m-quick-sidebar--tabbed m-quick-sidebar--skin-light\" appunwraptag=\"\">\r\n\t<div class=\"m-quick-sidebar__content m--hide\">\r\n\t\t<span id=\"m_quick_sidebar_close\" class=\"m-quick-sidebar__close\">\r\n\t\t\t<i class=\"la la-close\"></i>\r\n\t\t</span>\r\n\t\t<ul id=\"m_quick_sidebar_tabs\" class=\"nav nav-tabs m-tabs m-tabs-line m-tabs-line--brand\" role=\"tablist\">\r\n\t\t\t<li class=\"nav-item m-tabs__item\">\r\n\t\t\t\t<a class=\"nav-link m-tabs__link active\" data-toggle=\"tab\" href=\"#m_quick_sidebar_tabs_messenger\" role=\"tab\">\r\n\t\t\t\t\tMessages\r\n\t\t\t\t</a>\r\n\t\t\t</li>\r\n\t\t\t<li class=\"nav-item m-tabs__item\">\r\n\t\t\t\t<a class=\"nav-link m-tabs__link\" \t\tdata-toggle=\"tab\" href=\"#m_quick_sidebar_tabs_settings\" role=\"tab\">\r\n\t\t\t\t\tSettings\r\n\t\t\t\t</a>\r\n\t\t\t</li>\r\n\t\t\t<li class=\"nav-item m-tabs__item\">\r\n\t\t\t\t<a class=\"nav-link m-tabs__link\" data-toggle=\"tab\" href=\"#m_quick_sidebar_tabs_logs\" role=\"tab\">\r\n\t\t\t\t\tLogs\r\n\t\t\t\t</a>\r\n\t\t\t</li>\r\n\t\t</ul>\r\n\t\t<div class=\"tab-content\">\r\n\t\t\t<div class=\"tab-pane active m-scrollable\" id=\"m_quick_sidebar_tabs_messenger\" role=\"tabpanel\">\r\n\t\t\t\t<div class=\"m-messenger m-messenger--message-arrow m-messenger--skin-light\">\r\n\t\t\t\t\t<div class=\"m-messenger__messages\">\r\n\t\t\t\t\t\t<div class=\"m-messenger__wrapper\">\r\n\t\t\t\t\t\t\t<div class=\"m-messenger__message m-messenger__message--in\">\r\n\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-pic\">\r\n\t\t\t\t\t\t\t\t\t<img src=\"./assets/app/media/img//users/user3.jpg\" alt=\"\"/>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-body\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-arrow\"></div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-content\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-username\">\r\n\t\t\t\t\t\t\t\t\t\t\tMegan wrote\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-text\">\r\n\t\t\t\t\t\t\t\t\t\t\tHi Bob. What time will be the meeting ?\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"m-messenger__wrapper\">\r\n\t\t\t\t\t\t\t<div class=\"m-messenger__message m-messenger__message--out\">\r\n\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-body\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-arrow\"></div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-content\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-text\">\r\n\t\t\t\t\t\t\t\t\t\t\tHi Megan. It's at 2.30PM\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"m-messenger__wrapper\">\r\n\t\t\t\t\t\t\t<div class=\"m-messenger__message m-messenger__message--in\">\r\n\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-pic\">\r\n\t\t\t\t\t\t\t\t\t<img src=\"./assets/app/media/img//users/user3.jpg\" alt=\"\"/>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-body\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-arrow\"></div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-content\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-username\">\r\n\t\t\t\t\t\t\t\t\t\t\tMegan wrote\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-text\">\r\n\t\t\t\t\t\t\t\t\t\t\tWill the development team be joining ?\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"m-messenger__wrapper\">\r\n\t\t\t\t\t\t\t<div class=\"m-messenger__message m-messenger__message--out\">\r\n\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-body\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-arrow\"></div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-content\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-text\">\r\n\t\t\t\t\t\t\t\t\t\t\tYes sure. I invited them as well\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"m-messenger__datetime\">\r\n\t\t\t\t\t\t\t2:30PM\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"m-messenger__wrapper\">\r\n\t\t\t\t\t\t\t<div class=\"m-messenger__message m-messenger__message--in\">\r\n\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-pic\">\r\n\t\t\t\t\t\t\t\t\t<img src=\"./assets/app/media/img//users/user3.jpg\"  alt=\"\"/>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-body\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-arrow\"></div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-content\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-username\">\r\n\t\t\t\t\t\t\t\t\t\t\tMegan wrote\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-text\">\r\n\t\t\t\t\t\t\t\t\t\t\tNoted. For the Coca-Cola Mobile App project as well ?\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"m-messenger__wrapper\">\r\n\t\t\t\t\t\t\t<div class=\"m-messenger__message m-messenger__message--out\">\r\n\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-body\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-arrow\"></div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-content\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-text\">\r\n\t\t\t\t\t\t\t\t\t\t\tYes, sure.\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"m-messenger__wrapper\">\r\n\t\t\t\t\t\t\t<div class=\"m-messenger__message m-messenger__message--out\">\r\n\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-body\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-arrow\"></div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-content\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-text\">\r\n\t\t\t\t\t\t\t\t\t\t\tPlease also prepare the quotation for the Loop CRM project as well.\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"m-messenger__datetime\">\r\n\t\t\t\t\t\t\t3:15PM\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"m-messenger__wrapper\">\r\n\t\t\t\t\t\t\t<div class=\"m-messenger__message m-messenger__message--in\">\r\n\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-no-pic m--bg-fill-danger\">\r\n\t\t\t\t\t\t\t\t\t<span>\r\n\t\t\t\t\t\t\t\t\t\tM\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-body\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-arrow\"></div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-content\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-username\">\r\n\t\t\t\t\t\t\t\t\t\t\tMegan wrote\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-text\">\r\n\t\t\t\t\t\t\t\t\t\t\tNoted. I will prepare it.\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"m-messenger__wrapper\">\r\n\t\t\t\t\t\t\t<div class=\"m-messenger__message m-messenger__message--out\">\r\n\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-body\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-arrow\"></div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-content\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-text\">\r\n\t\t\t\t\t\t\t\t\t\t\tThanks Megan. I will see you later.\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"m-messenger__wrapper\">\r\n\t\t\t\t\t\t\t<div class=\"m-messenger__message m-messenger__message--in\">\r\n\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-pic\">\r\n\t\t\t\t\t\t\t\t\t<img src=\"./assets/app/media/img//users/user3.jpg\"  alt=\"\"/>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-body\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-arrow\"></div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-content\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-username\">\r\n\t\t\t\t\t\t\t\t\t\t\tMegan wrote\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-text\">\r\n\t\t\t\t\t\t\t\t\t\t\tSure. See you in the meeting soon.\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"m-messenger__seperator\"></div>\r\n\t\t\t\t\t<div class=\"m-messenger__form\">\r\n\t\t\t\t\t\t<div class=\"m-messenger__form-controls\">\r\n\t\t\t\t\t\t\t<input type=\"text\" name=\"\" placeholder=\"Type here...\" class=\"m-messenger__form-input\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"m-messenger__form-tools\">\r\n\t\t\t\t\t\t\t<a href=\"\" class=\"m-messenger__form-attachment\">\r\n\t\t\t\t\t\t\t\t<i class=\"la la-paperclip\"></i>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"tab-pane  m-scrollable\" id=\"m_quick_sidebar_tabs_settings\" role=\"tabpanel\">\r\n\t\t\t\t<div class=\"m-list-settings\">\r\n\t\t\t\t\t<div class=\"m-list-settings__group\">\r\n\t\t\t\t\t\t<div class=\"m-list-settings__heading\">\r\n\t\t\t\t\t\t\tGeneral Settings\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"m-list-settings__item\">\r\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-label\">\r\n\t\t\t\t\t\t\t\tEmail Notifications\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-control\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-switch m-switch--outline m-switch--icon-check m-switch--brand\">\r\n\t\t\t\t\t\t\t\t\t<label>\r\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" checked=\"checked\" name=\"\">\r\n\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"m-list-settings__item\">\r\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-label\">\r\n\t\t\t\t\t\t\t\tSite Tracking\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-control\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-switch m-switch--outline m-switch--icon-check m-switch--brand\">\r\n\t\t\t\t\t\t\t\t\t<label>\r\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"\">\r\n\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"m-list-settings__item\">\r\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-label\">\r\n\t\t\t\t\t\t\t\tSMS Alerts\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-control\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-switch m-switch--outline m-switch--icon-check m-switch--brand\">\r\n\t\t\t\t\t\t\t\t\t<label>\r\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"\">\r\n\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"m-list-settings__item\">\r\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-label\">\r\n\t\t\t\t\t\t\t\tBackup Storage\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-control\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-switch m-switch--outline m-switch--icon-check m-switch--brand\">\r\n\t\t\t\t\t\t\t\t\t<label>\r\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"\">\r\n\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"m-list-settings__item\">\r\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-label\">\r\n\t\t\t\t\t\t\t\tAudit Logs\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-control\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-switch m-switch--outline m-switch--icon-check m-switch--brand\">\r\n\t\t\t\t\t\t\t\t\t<label>\r\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" checked=\"checked\" name=\"\">\r\n\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"m-list-settings__group\">\r\n\t\t\t\t\t\t<div class=\"m-list-settings__heading\">\r\n\t\t\t\t\t\t\tSystem Settings\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"m-list-settings__item\">\r\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-label\">\r\n\t\t\t\t\t\t\t\tSystem Logs\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-control\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-switch m-switch--outline m-switch--icon-check m-switch--brand\">\r\n\t\t\t\t\t\t\t\t\t<label>\r\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"\">\r\n\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"m-list-settings__item\">\r\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-label\">\r\n\t\t\t\t\t\t\t\tError Reporting\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-control\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-switch m-switch--outline m-switch--icon-check m-switch--brand\">\r\n\t\t\t\t\t\t\t\t\t<label>\r\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"\">\r\n\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"m-list-settings__item\">\r\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-label\">\r\n\t\t\t\t\t\t\t\tApplications Logs\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-control\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-switch m-switch--outline m-switch--icon-check m-switch--brand\">\r\n\t\t\t\t\t\t\t\t\t<label>\r\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"\">\r\n\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"m-list-settings__item\">\r\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-label\">\r\n\t\t\t\t\t\t\t\tBackup Servers\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-control\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-switch m-switch--outline m-switch--icon-check m-switch--brand\">\r\n\t\t\t\t\t\t\t\t\t<label>\r\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" checked=\"checked\" name=\"\">\r\n\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"m-list-settings__item\">\r\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-label\">\r\n\t\t\t\t\t\t\t\tAudit Logs\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-control\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-switch m-switch--outline m-switch--icon-check m-switch--brand\">\r\n\t\t\t\t\t\t\t\t\t<label>\r\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"\">\r\n\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"tab-pane  m-scrollable\" id=\"m_quick_sidebar_tabs_logs\" role=\"tabpanel\">\r\n\t\t\t\t<div class=\"m-list-timeline\">\r\n\t\t\t\t\t<div class=\"m-list-timeline__group\">\r\n\t\t\t\t\t\t<div class=\"m-list-timeline__heading\">\r\n\t\t\t\t\t\t\tSystem Logs\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"m-list-timeline__items\">\r\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-success\"></span>\r\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\r\n\t\t\t\t\t\t\t\t\t12 new users registered\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-badge m-badge--warning m-badge--wide\">\r\n\t\t\t\t\t\t\t\t\t\timportant\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\tJust now\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-info\"></span>\r\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\r\n\t\t\t\t\t\t\t\t\tSystem shutdown\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t11 mins\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-danger\"></span>\r\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\r\n\t\t\t\t\t\t\t\t\tNew invoice received\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t20 mins\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-warning\"></span>\r\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\r\n\t\t\t\t\t\t\t\t\tDatabase overloaded 89%\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-badge m-badge--success m-badge--wide\">\r\n\t\t\t\t\t\t\t\t\t\tresolved\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t1 hr\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-success\"></span>\r\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\r\n\t\t\t\t\t\t\t\t\tSystem error\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t2 hrs\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-info\"></span>\r\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\r\n\t\t\t\t\t\t\t\t\tProduction server down\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-badge m-badge--danger m-badge--wide\">\r\n\t\t\t\t\t\t\t\t\t\tpending\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t3 hrs\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-success\"></span>\r\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\r\n\t\t\t\t\t\t\t\t\tProduction server up\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t5 hrs\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"m-list-timeline__group\">\r\n\t\t\t\t\t\t<div class=\"m-list-timeline__heading\">\r\n\t\t\t\t\t\t\tApplications Logs\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"m-list-timeline__items\">\r\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-info\"></span>\r\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\r\n\t\t\t\t\t\t\t\t\tNew order received\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-badge m-badge--info m-badge--wide\">\r\n\t\t\t\t\t\t\t\t\t\turgent\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t7 hrs\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-success\"></span>\r\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\r\n\t\t\t\t\t\t\t\t\t12 new users registered\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\tJust now\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-info\"></span>\r\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\r\n\t\t\t\t\t\t\t\t\tSystem shutdown\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t11 mins\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-danger\"></span>\r\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\r\n\t\t\t\t\t\t\t\t\tNew invoices received\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t20 mins\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-warning\"></span>\r\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\r\n\t\t\t\t\t\t\t\t\tDatabase overloaded 89%\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t1 hr\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-success\"></span>\r\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\r\n\t\t\t\t\t\t\t\t\tSystem error\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-badge m-badge--info m-badge--wide\">\r\n\t\t\t\t\t\t\t\t\t\tpending\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t2 hrs\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-info\"></span>\r\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\r\n\t\t\t\t\t\t\t\t\tProduction server down\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t3 hrs\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"m-list-timeline__group\">\r\n\t\t\t\t\t\t<div class=\"m-list-timeline__heading\">\r\n\t\t\t\t\t\t\tServer Logs\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"m-list-timeline__items\">\r\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-success\"></span>\r\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\r\n\t\t\t\t\t\t\t\t\tProduction server up\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t5 hrs\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-info\"></span>\r\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\r\n\t\t\t\t\t\t\t\t\tNew order received\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t7 hrs\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-success\"></span>\r\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\r\n\t\t\t\t\t\t\t\t\t12 new users registered\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\tJust now\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-info\"></span>\r\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\r\n\t\t\t\t\t\t\t\t\tSystem shutdown\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t11 mins\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-danger\"></span>\r\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\r\n\t\t\t\t\t\t\t\t\tNew invoice received\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t20 mins\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-warning\"></span>\r\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\r\n\t\t\t\t\t\t\t\t\tDatabase overloaded 89%\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t1 hr\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-success\"></span>\r\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\r\n\t\t\t\t\t\t\t\t\tSystem error\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t2 hrs\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-info\"></span>\r\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\r\n\t\t\t\t\t\t\t\t\tProduction server down\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t3 hrs\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-success\"></span>\r\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\r\n\t\t\t\t\t\t\t\t\tProduction server up\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t5 hrs\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-info\"></span>\r\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\r\n\t\t\t\t\t\t\t\t\tNew order received\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t1117 hrs\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<!-- end::Quick Sidebar -->\r\n"

/***/ }),

/***/ "./src/app/theme/layouts/quick-sidebar/quick-sidebar.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/theme/layouts/quick-sidebar/quick-sidebar.component.ts ***!
  \************************************************************************/
/*! exports provided: QuickSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuickSidebarComponent", function() { return QuickSidebarComponent; });
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

var QuickSidebarComponent = /** @class */ (function () {
    function QuickSidebarComponent() {
    }
    QuickSidebarComponent.prototype.ngOnInit = function () {
    };
    QuickSidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-quick-sidebar",
            template: __webpack_require__(/*! ./quick-sidebar.component.html */ "./src/app/theme/layouts/quick-sidebar/quick-sidebar.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [])
    ], QuickSidebarComponent);
    return QuickSidebarComponent;
}());



/***/ }),

/***/ "./src/app/theme/layouts/scroll-top/scroll-top.component.html":
/*!********************************************************************!*\
  !*** ./src/app/theme/layouts/scroll-top/scroll-top.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- begin::Scroll Top -->\r\n<div id=\"m_scroll_top\" class=\"m-scroll-top\" appunwraptag=\"\">\r\n\t<i class=\"la la-arrow-up\"></i>\r\n</div>\r\n<!-- end::Scroll Top -->\r\n"

/***/ }),

/***/ "./src/app/theme/layouts/scroll-top/scroll-top.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/theme/layouts/scroll-top/scroll-top.component.ts ***!
  \******************************************************************/
/*! exports provided: ScrollTopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollTopComponent", function() { return ScrollTopComponent; });
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

var ScrollTopComponent = /** @class */ (function () {
    function ScrollTopComponent() {
    }
    ScrollTopComponent.prototype.ngOnInit = function () {
    };
    ScrollTopComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-scroll-top",
            template: __webpack_require__(/*! ./scroll-top.component.html */ "./src/app/theme/layouts/scroll-top/scroll-top.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [])
    ], ScrollTopComponent);
    return ScrollTopComponent;
}());



/***/ }),

/***/ "./src/app/theme/layouts/tooltips/tooltips.component.html":
/*!****************************************************************!*\
  !*** ./src/app/theme/layouts/tooltips/tooltips.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- begin::Quick Nav -->\r\n<ul class=\"m-nav-sticky\" style=\"margin-top: 30px;\" appunwraptag=\"\">\r\n\t<!--\r\n\t<li class=\"m-nav-sticky__item\" data-toggle=\"m-tooltip\" title=\"Showcase\" data-placement=\"left\">\r\n\t\t<a href=\"\">\r\n\t\t\t<i class=\"la la-eye\"></i>\r\n\t\t</a>\r\n\t</li>\r\n\t<li class=\"m-nav-sticky__item\" data-toggle=\"m-tooltip\" title=\"Pre-sale Chat\" data-placement=\"left\">\r\n\t\t<a href=\"\" >\r\n\t\t\t<i class=\"la la-comments-o\"></i>\r\n\t\t</a>\r\n\t</li>\r\n\t-->\r\n\t<li class=\"m-nav-sticky__item\" data-toggle=\"m-tooltip\" title=\"Purchase\" data-placement=\"left\">\r\n\t\t<a href=\"https://themeforest.net/item/metronic-responsive-admin-dashboard-template/4021469?ref=keenthemes\" >\r\n\t\t\t<i class=\"la la-cart-arrow-down\"></i>\r\n\t\t</a>\r\n\t</li>\r\n\t<li class=\"m-nav-sticky__item\" data-toggle=\"m-tooltip\" title=\"Documentation\" data-placement=\"left\">\r\n\t\t<a href=\"https://keenthemes.com/metronic/documentation.html\" >\r\n\t\t\t<i class=\"la la-code-fork\"></i>\r\n\t\t</a>\r\n\t</li>\r\n\t<li class=\"m-nav-sticky__item\" data-toggle=\"m-tooltip\" title=\"Support\" data-placement=\"left\">\r\n\t\t<a href=\"https://keenthemes.com/forums/forum/support/metronic5/\" >\r\n\t\t\t<i class=\"la la-life-ring\"></i>\r\n\t\t</a>\r\n\t</li>\r\n</ul>\r\n<!-- begin::Quick Nav -->\r\n"

/***/ }),

/***/ "./src/app/theme/layouts/tooltips/tooltips.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/theme/layouts/tooltips/tooltips.component.ts ***!
  \**************************************************************/
/*! exports provided: TooltipsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipsComponent", function() { return TooltipsComponent; });
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

var TooltipsComponent = /** @class */ (function () {
    function TooltipsComponent() {
    }
    TooltipsComponent.prototype.ngOnInit = function () {
    };
    TooltipsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-tooltips",
            template: __webpack_require__(/*! ./tooltips.component.html */ "./src/app/theme/layouts/tooltips/tooltips.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [])
    ], TooltipsComponent);
    return TooltipsComponent;
}());



/***/ }),

/***/ "./src/app/theme/pages/aside-left-display-disabled/aside-left-display-disabled.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/theme/pages/aside-left-display-disabled/aside-left-display-disabled.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"m-grid__item m-grid__item--fluid m-wrapper\">\r\n\t<router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/theme/pages/aside-left-display-disabled/aside-left-display-disabled.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/theme/pages/aside-left-display-disabled/aside-left-display-disabled.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: AsideLeftDisplayDisabledComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsideLeftDisplayDisabledComponent", function() { return AsideLeftDisplayDisabledComponent; });
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

var AsideLeftDisplayDisabledComponent = /** @class */ (function () {
    function AsideLeftDisplayDisabledComponent() {
    }
    AsideLeftDisplayDisabledComponent.prototype.ngOnInit = function () {
    };
    AsideLeftDisplayDisabledComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: ".m-grid__item.m-grid__item--fluid.m-grid.m-grid--ver-desktop.m-grid--desktop.	m-container.m-container--responsive.m-container--xxl.m-page__container.m-body",
            template: __webpack_require__(/*! ./aside-left-display-disabled.component.html */ "./src/app/theme/pages/aside-left-display-disabled/aside-left-display-disabled.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [])
    ], AsideLeftDisplayDisabledComponent);
    return AsideLeftDisplayDisabledComponent;
}());



/***/ }),

/***/ "./src/app/theme/pages/default/default.component.html":
/*!************************************************************!*\
  !*** ./src/app/theme/pages/default/default.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-aside-nav></app-aside-nav> -->\r\n<div class=\"m-grid__item m-grid__item--fluid m-wrapper\">\r\n\r\n\r\n<section id=\"main-content\" class=\"\">\r\n    <section class=\"wrapper main-wrapper row\" style=\"\">\r\n\r\n    <router-outlet></router-outlet>\r\n    </section>\r\n</section>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/theme/pages/default/default.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/theme/pages/default/default.component.ts ***!
  \**********************************************************/
/*! exports provided: DefaultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultComponent", function() { return DefaultComponent; });
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

var DefaultComponent = /** @class */ (function () {
    function DefaultComponent() {
    }
    DefaultComponent.prototype.ngOnInit = function () {
    };
    DefaultComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: ".m-grid__item.m-grid__item--fluid.m-grid.m-grid--ver-desktop.m-grid--desktop.	m-container.m-container--responsive.m-container--xxl.m-page__container.m-body",
            template: __webpack_require__(/*! ./default.component.html */ "./src/app/theme/pages/default/default.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [])
    ], DefaultComponent);
    return DefaultComponent;
}());



/***/ }),

/***/ "./src/app/theme/theme.component.html":
/*!********************************************!*\
  !*** ./src/app/theme/theme.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header-nav></app-header-nav>\r\n<app-aside-nav></app-aside-nav>\r\n\r\n<!-- begin::Body -->\r\n<router-outlet></router-outlet>\r\n<!-- end::Body -->\r\n\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "./src/app/theme/theme.component.ts":
/*!******************************************!*\
  !*** ./src/app/theme/theme.component.ts ***!
  \******************************************/
/*! exports provided: ThemeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeComponent", function() { return ThemeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers */ "./src/app/helpers.ts");
/* harmony import */ var _services_script_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/script-loader.service */ "./src/app/_services/script-loader.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ThemeComponent = /** @class */ (function () {
    function ThemeComponent(_script, _router) {
        this._script = _script;
        this._router = _router;
    }
    ThemeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._script.loadScripts('head', ['assets/demo/demo5/base/scripts.bundle.js'], true)
            .then(function (result) {
            _helpers__WEBPACK_IMPORTED_MODULE_2__["Helpers"].setLoading(false);
            // optional js to be loaded once
            _this._script.loadScripts('head', ['assets/vendors/custom/fullcalendar/fullcalendar.bundle.js'], true);
        });
        this._router.events.subscribe(function (route) {
            if (route instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                // (<any>mLayout).closeMobileAsideMenuOffcanvas();
                // (<any>mLayout).closeMobileHorMenuOffcanvas();
                // (<any>mApp).scrollTop();
                _helpers__WEBPACK_IMPORTED_MODULE_2__["Helpers"].setLoading(true);
                // hide visible popover
                // (<any>$('[data-toggle="m-popover"]')).popover('hide');
            }
            if (route instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                // init required js
                mApp.init();
                mUtil.init();
                _helpers__WEBPACK_IMPORTED_MODULE_2__["Helpers"].setLoading(false);
                // content m-wrapper animation
                var animation_1 = 'm-animate-fade-in-up';
                $('.m-wrapper').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function (e) {
                    $('.m-wrapper').removeClass(animation_1);
                }).removeClass(animation_1).addClass(animation_1);
            }
        });
    };
    ThemeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: ".m-grid.m-grid--hor.m-grid--root.m-page",
            template: __webpack_require__(/*! ./theme.component.html */ "./src/app/theme/theme.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [_services_script_loader_service__WEBPACK_IMPORTED_MODULE_3__["ScriptLoaderService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ThemeComponent);
    return ThemeComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    // APIBaseUrl: 'https://devadmin.jhaiho.com',
    //APIURL: 'https://devadmin.jhaiho.com/api',
    APIBaseUrl: 'http://23.239.215.73:8080',
    APIURL: 'http://23.239.215.73:8080/v1',
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\driver\gdriver\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map