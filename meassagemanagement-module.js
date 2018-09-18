(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["meassagemanagement-module"],{

/***/ "./src/app/meassagemanagement/meassagemanagement.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/meassagemanagement/meassagemanagement.module.ts ***!
  \*****************************************************************/
/*! exports provided: MeassagemanagementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeassagemanagementModule", function() { return MeassagemanagementModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _meassagemanagementinfo_meassagemanagementinfo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./meassagemanagementinfo/meassagemanagementinfo.component */ "./src/app/meassagemanagement/meassagemanagementinfo/meassagemanagementinfo.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _theme_layouts_layout_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../theme/layouts/layout.module */ "./src/app/theme/layouts/layout.module.ts");
/* harmony import */ var _theme_pages_default_default_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../theme/pages/default/default.component */ "./src/app/theme/pages/default/default.component.ts");
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
                'component': _meassagemanagementinfo_meassagemanagementinfo_component__WEBPACK_IMPORTED_MODULE_2__["MeassagemanagementinfoComponent"],
            }
        ],
    },
];
var MeassagemanagementModule = /** @class */ (function () {
    function MeassagemanagementModule() {
    }
    MeassagemanagementModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _theme_layouts_layout_module__WEBPACK_IMPORTED_MODULE_4__["LayoutModule"],
            ],
            declarations: [_meassagemanagementinfo_meassagemanagementinfo_component__WEBPACK_IMPORTED_MODULE_2__["MeassagemanagementinfoComponent"]],
            providers: []
        })
    ], MeassagemanagementModule);
    return MeassagemanagementModule;
}());



/***/ }),

/***/ "./src/app/meassagemanagement/meassagemanagementinfo/meassagemanagementinfo.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/meassagemanagement/meassagemanagementinfo/meassagemanagementinfo.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<section id=\"main-content\" class=\"\">\n    <section class=\"wrapper main-wrapper row\" style=\"\">\n\n        <div class=\"col-12\">\n            <div class=\"page-title\">\n\n                <div class=\"float-left\">\n                    <!-- PAGE HEADING TAG - START --><h1 class=\"title\">Message Management</h1><!-- PAGE HEADING TAG - END -->                            </div>\n\n                <div class=\"float-right d-none\">\n                    <ol class=\"breadcrumb\">\n                        <li>\n                            <a href=\"index.html\"><i class=\"fa fa-home\"></i>Home</a>\n                        </li>\n                        <li>\n                            <a href=\"blo-categories.html\">Message Management</a>\n                        </li>\n                        <li class=\"active\">\n                            <strong>Message Management</strong>\n                        </li>\n                    </ol>\n                </div>\n\n            </div>\n        </div>\n        <div class=\"clearfix\"></div>\n        <!-- MAIN CONTENT AREA STARTS -->\n\n        <div class=\"col-xl-12\">\n            <section class=\"box \">\n                <header class=\"panel_header\">\n                    <h2 class=\"title float-left\">All Data</h2>\n                    <div class=\"actions panel_actions float-right\">\n                        <a class=\"box_toggle fa fa-chevron-down\"></a>\n                      \n                    </div>\n                </header>\n                <div class=\"content-body\">    <div class=\"row\">\n                        <div class=\"col-12\">\n\n\n                            <!-- ********************************************** -->\n\n\n                            <div></div><table id=\"example-11\" class=\"display table table-hover table-condensed dataTable no-footer\" cellspacing=\"0\" width=\"100%\">\n                                <thead>\n                                    <tr>\n                                        <th>ID</th><th>Category Name</th><th>Description</th><th>No. of Blogs</th>                    </tr>\n                                </thead>\n\n                                <tbody>\n                                    <tr role=\"row\"><td>1</td><td>photoshop</td><td>Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.</td><td>84</td></tr><tr role=\"row\"><td>2</td><td>crm service</td><td>Sed vel enim sit amet nunc viverra dapibus.</td><td>66</td></tr><tr role=\"row\"><td>3</td><td>photoshop</td><td>Sed ante.</td><td>75</td></tr><tr role=\"row\"><td>4</td><td>graphic design</td><td>Nam tristique tortor eu pede.</td><td>49</td></tr><tr role=\"row\"><td>5</td><td>web design</td><td>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.</td><td>78</td></tr><tr role=\"row\"><td>6</td><td>php website</td><td>Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.</td><td>62</td></tr><tr role=\"row\"><td>7</td><td>graphic design</td><td>Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.</td><td>32</td></tr><tr role=\"row\"><td>8</td><td>crm service</td><td>Morbi quis tortor id nulla ultrices aliquet.</td><td>88</td></tr><tr role=\"row\"><td>9</td><td>wordpress website</td><td>Nunc purus.</td><td>76</td></tr><tr role=\"row\"><td>10</td><td>logo design</td><td>Nam dui.</td><td>70</td></tr><tr role=\"row\"><td>11</td><td>marketing</td><td>Aenean fermentum.</td><td>41</td></tr><tr role=\"row\"><td>12</td><td>logo design</td><td>Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.</td><td>86</td></tr><tr role=\"row\"><td>13</td><td>marketing</td><td>Duis consequat dui nec nisi volutpat eleifend.</td><td>76</td></tr><tr role=\"row\"><td>14</td><td>web design</td><td>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.</td><td>83</td></tr><tr role=\"row\"><td>15</td><td>wordpress website</td><td>Aenean fermentum.</td><td>84</td></tr><tr role=\"row\"><td>16</td><td>crm service</td><td>Proin risus.</td><td>48</td></tr><tr role=\"row\"><td>17</td><td>marketing</td><td>Curabitur at ipsum ac tellus semper interdum.</td><td>56</td></tr><tr role=\"row\"><td>18</td><td>programming</td><td>Maecenas ut massa quis augue luctus tincidunt.</td><td>90</td></tr><tr role=\"row\"><td>19</td><td>logo design</td><td>Nullam sit amet turpis elementum ligula vehicula consequat.</td><td>55</td></tr><tr role=\"row\"><td>20</td><td>php website</td><td>Nulla justo.</td><td>32</td></tr><tr role=\"row\"><td>21</td><td>branding</td><td>Proin at turpis a pede posuere nonummy.</td><td>56</td></tr><tr role=\"row\"><td>22</td><td>wordpress website</td><td>Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.</td><td>31</td></tr><tr role=\"row\"><td>23</td><td>graphic design</td><td>Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.</td><td>32</td></tr><tr role=\"row\"><td>24</td><td>wordpress website</td><td>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</td><td>32</td></tr><tr role=\"row\"><td>25</td><td>marketing</td><td>Fusce consequat.</td><td>71</td></tr><tr role=\"row\"><td>26</td><td>SEO and SEM</td><td>In blandit ultrices enim.</td><td>70</td></tr><tr role=\"row\"><td>27</td><td>branding</td><td>Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.</td><td>67</td></tr><tr role=\"row\"><td>28</td><td>php website</td><td>Vivamus tortor.</td><td>72</td></tr><tr role=\"row\"><td>29</td><td>photoshop</td><td>Nulla justo.</td><td>39</td></tr><tr role=\"row\"><td>30</td><td>programming</td><td>Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.</td><td>31</td></tr><tr role=\"row\"><td>31</td><td>crm service</td><td>Phasellus sit amet erat.</td><td>62</td></tr><tr role=\"row\"><td>32</td><td>photoshop</td><td>Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.</td><td>69</td></tr><tr role=\"row\"><td>33</td><td>graphic design</td><td>Proin risus.</td><td>44</td></tr><tr role=\"row\"><td>34</td><td>social media marketing</td><td>In est risus, auctor sed, tristique in, tempus sit amet, sem.</td><td>46</td></tr><tr role=\"row\"><td>35</td><td>crm service</td><td>Nullam porttitor lacus at turpis.</td><td>36</td></tr><tr role=\"row\"><td>36</td><td>social media marketing</td><td>Donec ut mauris eget massa tempor convallis.</td><td>70</td></tr><tr role=\"row\"><td>37</td><td>social media marketing</td><td>Phasellus sit amet erat.</td><td>80</td></tr><tr role=\"row\"><td>38</td><td>social media marketing</td><td>Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.</td><td>64</td></tr><tr role=\"row\"><td>39</td><td>branding</td><td>Maecenas rhoncus aliquam lacus.</td><td>66</td></tr><tr role=\"row\"><td>40</td><td>branding</td><td>Ut at dolor quis odio consequat varius.</td><td>51</td></tr><tr role=\"row\"><td>41</td><td>branding</td><td>Cras pellentesque volutpat dui.</td><td>57</td></tr><tr role=\"row\"><td>42</td><td>crm service</td><td>Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.</td><td>72</td></tr><tr role=\"row\"><td>43</td><td>SEO and SEM</td><td>Nam dui.</td><td>55</td></tr><tr role=\"row\"><td>44</td><td>web design</td><td>In quis justo.</td><td>46</td></tr><tr role=\"row\"><td>45</td><td>photoshop</td><td>Sed ante.</td><td>75</td></tr><tr role=\"row\"><td>46</td><td>programming</td><td>Quisque ut erat.</td><td>81</td></tr><tr role=\"row\"><td>47</td><td>SEO and SEM</td><td>Praesent blandit.</td><td>86</td></tr><tr role=\"row\"><td>48</td><td>photoshop</td><td>Donec semper sapien a libero.</td><td>30</td></tr><tr role=\"row\"><td>49</td><td>marketing</td><td>Aenean lectus.</td><td>30</td></tr><tr role=\"row\"><td>50</td><td>marketing</td><td>Nulla tellus.</td><td>59</td></tr>\n                                </tbody>\n                            </table>\n                            <!-- ********************************************** -->\n\n\n\n\n                        </div>\n                    </div>\n                </div>\n            </section></div>\n\n\n\n\n\n\n        <!-- MAIN CONTENT AREA ENDS -->\n    </section>\n</section>\n\n\n"

/***/ }),

/***/ "./src/app/meassagemanagement/meassagemanagementinfo/meassagemanagementinfo.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/meassagemanagement/meassagemanagementinfo/meassagemanagementinfo.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/meassagemanagement/meassagemanagementinfo/meassagemanagementinfo.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/meassagemanagement/meassagemanagementinfo/meassagemanagementinfo.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: MeassagemanagementinfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeassagemanagementinfoComponent", function() { return MeassagemanagementinfoComponent; });
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

var MeassagemanagementinfoComponent = /** @class */ (function () {
    function MeassagemanagementinfoComponent() {
    }
    MeassagemanagementinfoComponent.prototype.ngOnInit = function () {
    };
    MeassagemanagementinfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-meassagemanagementinfo',
            template: __webpack_require__(/*! ./meassagemanagementinfo.component.html */ "./src/app/meassagemanagement/meassagemanagementinfo/meassagemanagementinfo.component.html"),
            styles: [__webpack_require__(/*! ./meassagemanagementinfo.component.scss */ "./src/app/meassagemanagement/meassagemanagementinfo/meassagemanagementinfo.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MeassagemanagementinfoComponent);
    return MeassagemanagementinfoComponent;
}());



/***/ })

}]);
//# sourceMappingURL=meassagemanagement-module.js.map