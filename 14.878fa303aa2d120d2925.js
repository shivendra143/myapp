(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"82od":function(l,n,u){"use strict";u.d(n,"a",function(){return t});var e=u("sE5F"),t=function(){return function(){this.headerOptions={headers:new e.d({"Content-Type":"application/json"})}}}()},"9SHn":function(l,n,u){"use strict";var e=u("7W/L"),t=u("Akrg"),o=u("TXfF"),i=u("Q5AY"),a=u("kevW"),d=u("j5V/"),r=u("+YG4"),s=u("AS99"),c=u("N59q"),m=(u("jeoQ"),u("jJjB"),u("zKQG"),u("3FdN"),u("fNGB"),u("y+xJ"),u("4Jtj"),u("rX1C"),u("Ry/H")),p=u("Izlp"),f=function(){function l(){}return l.prototype.load=function(){if(!window.google||!window.google.maps)throw new Error("Google Maps API not loaded on page. Make sure window.google.maps is available!");return Promise.resolve()},l}(),g=u("/fSM");u.d(n,!1,function(){return e.a}),u.d(n,!1,function(){return t.a}),u.d(n,!1,function(){return o.a}),u.d(n,!1,function(){return i.a}),u.d(n,!1,function(){return a.a}),u.d(n,!1,function(){return d.a}),u.d(n,!1,function(){return r.a}),u.d(n,!1,function(){return s.a}),u.d(n,!1,function(){return c.a}),u.d(n,!1,function(){}),u.d(n,!1,function(){}),u.d(n,!1,function(){}),u.d(n,!1,function(){}),u.d(n,!1,function(){}),u.d(n,!1,function(){}),u.d(n,!1,function(){}),u.d(n,!1,function(){}),u.d(n,!1,function(){}),u.d(n,!1,function(){return m.a}),u.d(n,!1,function(){return m.b}),u.d(n,!1,function(){return p.a}),u.d(n,!1,function(){return f}),u.d(n,!1,function(){return g.a})},UOzi:function(l,n,u){"use strict";u.r(n);var e=u("CcnG"),t=u("z4TD"),o=function(){function l(l,n){this.service=l,this.toastr=n}return l.prototype.ngOnInit=function(){this.getLicence()},l.prototype.getLicence=function(){var l=this;this.service.getLicence().subscribe(function(n){l.Licences=n.classLicences})},l.prototype.deleteCountries=function(l){var n=this;this.service.deleteLicence("/"+l).subscribe(function(l){n.toastr.success("State deleted Successfully"),n.getLicence()})},l}(),i=u("gIcY"),a=u("MKA2"),d=(u("9SHn"),u("ndxW")),r=u("Xpb8"),s=function(){function l(l,n,u,t,o,d,r,s,c,m){var p=this;this.formBuilder=l,this.route=n,this.service=u,this.stateservice=t,this.licenseservice=o,this.toastr=d,this._router=r,this.http=s,this.mapsAPILoader=c,this.ngZone=m,this.msg=null,this.lat="",this.lng="",this.countryName="",this.Countries=[{country:"--Select--",_id:""}],this.default="",this.route.params.subscribe(function(l){p.driverid=l.driverid,p.options={concurrency:1,maxUploads:3},p.files=[],p.uploadInput=new e.EventEmitter,p.humanizeBytes=a.b}),this.userForm=this.formBuilder.group({className:["",i.Validators.required],country:[""]}),this.userForm.controls.country.setValue(this.default,{onlySelf:!0})}return l.prototype.saveUser=function(){var l=this;console.log(this.userForm.value),""==this.userForm.value.country&&this.toastr.error("Country is required"),this.userForm.dirty&&this.userForm.valid&&this.licenseservice.addLicence(this.userForm.value).subscribe(function(n){console.log(n),l.toastr.success("Class Licence added Successfully"),l._router.navigate(["/license"])},function(l){console.log("error")})},l.prototype.getCountries=function(){var l=this;this.service.getCountries().subscribe(function(n){l.Countries=n.countries})},l.prototype.getLicence=function(){var l=this;this.licenseservice.getLicence("/"+this.driverid).subscribe(function(n){l.Licences=n.cities,l.userForm.controls.country.setValue(l.Licences.country,{onlySelf:!0}),l.userForm.controls.className.setValue(l.Licences.className,{onlySelf:!0})})},l.prototype.ngOnInit=function(){this.getCountries(),this.getLicence()},l}(),c=u("58BA"),m=function(){},p=u("XePT"),f=u("4lDY"),g=u("u4HF"),v=u("aq8m"),h=u("qcfG"),C=u("xaNE"),y=u("FNNE"),b=u("gW6t"),L=u("pMnS"),_=u("PS+O"),k=u("ZYCi"),N=u("Ip0R"),S=u("SZbH"),F=e["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function R(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,26,"tr",[["class","ng-scope"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,1,"td",[["class","ng-binding"]],null,null,null,null,null)),(l()(),e["\u0275ted"](2,null,[" "," "])),(l()(),e["\u0275eld"](3,0,null,null,1,"td",[["class","ng-binding"]],null,null,null,null,null)),(l()(),e["\u0275ted"](4,null,[" "," "])),(l()(),e["\u0275eld"](5,0,null,null,1,"td",[["class","ng-binding"]],null,null,null,null,null)),(l()(),e["\u0275ted"](6,null,[" "," "])),(l()(),e["\u0275eld"](7,0,null,null,1,"td",[["class","ng-binding"]],null,null,null,null,null)),(l()(),e["\u0275ted"](8,null,[" "," "])),(l()(),e["\u0275eld"](9,0,null,null,1,"td",[["class","ng-binding"]],null,null,null,null,null)),(l()(),e["\u0275ted"](10,null,[" "," "])),(l()(),e["\u0275eld"](11,0,null,null,1,"td",[["class","ng-binding"]],null,null,null,null,null)),(l()(),e["\u0275ted"](12,null,[" "," "])),(l()(),e["\u0275eld"](13,0,null,null,1,"td",[["class","ng-binding"]],null,null,null,null,null)),(l()(),e["\u0275ted"](14,null,[" "," "])),(l()(),e["\u0275eld"](15,0,null,null,11,"td",[["style","min-width:120px;"]],null,null,null,null,null)),(l()(),e["\u0275eld"](16,0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-trash ng-pristine text-danger ng-untouched ng-valid ng-empty"],["data-target","#myModal-delete"],["data-toggle","modal"],["ng-model","_id"],["title","Delete user"]],null,[[null,"click"]],function(l,n,u){var e=!0,t=l.component;return"click"===n&&(e=!1!==t.deleteCountries(t.conlist._id)&&e),e},null,null)),(l()(),e["\u0275ted"](-1,null,[" \xa0 "])),(l()(),e["\u0275eld"](18,0,null,null,3,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e["\u0275nov"](l,19).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&t),t},null,null)),e["\u0275did"](19,671744,null,0,k.o,[k.m,k.a,N.LocationStrategy],{routerLink:[0,"routerLink"]},null),e["\u0275pad"](20,2),(l()(),e["\u0275eld"](21,0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-eye text-primary"],["title","view user"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" \xa0 "])),(l()(),e["\u0275eld"](23,0,null,null,3,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e["\u0275nov"](l,24).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&t),t},null,null)),e["\u0275did"](24,671744,null,0,k.o,[k.m,k.a,N.LocationStrategy],{routerLink:[0,"routerLink"]},null),e["\u0275pad"](25,2),(l()(),e["\u0275eld"](26,0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-edit text-success"],["title","edit user"]],null,null,null,null,null))],function(l,n){l(n,19,0,l(n,20,0,"edit-license",n.context.$implicit._id)),l(n,24,0,l(n,25,0,"edit-license",n.context.$implicit._id))},function(l,n){l(n,2,0,n.context.index+1),l(n,4,0,n.context.$implicit.className),l(n,6,0,n.context.$implicit.country.countryCode),l(n,8,0,n.context.$implicit.country.countryStatus),l(n,10,0,n.context.$implicit.country.capital),l(n,12,0,n.context.$implicit.country.createdAt),l(n,14,0,n.context.$implicit.country.dialCode),l(n,18,0,e["\u0275nov"](n,19).target,e["\u0275nov"](n,19).href),l(n,23,0,e["\u0275nov"](n,24).target,e["\u0275nov"](n,24).href)})}function M(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,20,"div",[["class","col-12"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,13,"div",[["class","page-title"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,2,"div",[["class","pull-left"]],null,null,null,null,null)),(l()(),e["\u0275eld"](3,0,null,null,1,"h1",[["class","title"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Manage Class of Licence "])),(l()(),e["\u0275eld"](5,0,null,null,9,"div",[["class","pull-right hidden-xs"]],null,null,null,null,null)),(l()(),e["\u0275eld"](6,0,null,null,8,"ol",[["class","breadcrumb"]],null,null,null,null,null)),(l()(),e["\u0275eld"](7,0,null,null,4,"li",[],null,null,null,null,null)),(l()(),e["\u0275eld"](8,0,null,null,3,"a",[["routerLink","/"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e["\u0275nov"](l,9).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&t),t},null,null)),e["\u0275did"](9,671744,null,0,k.o,[k.m,k.a,N.LocationStrategy],{routerLink:[0,"routerLink"]},null),(l()(),e["\u0275eld"](10,0,null,null,0,"i",[["class","fa fa-home"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Home"])),(l()(),e["\u0275eld"](12,0,null,null,2,"li",[["class","active"]],null,null,null,null,null)),(l()(),e["\u0275eld"](13,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Licence Lists"])),(l()(),e["\u0275eld"](15,0,null,null,5,"div",[["class","custum-links"],["style","position: absolute; right: 15px; z-index: 1"]],null,null,null,null,null)),(l()(),e["\u0275eld"](16,0,null,null,3,"a",[["routerLink","/license/add-license"],["style","font-weight: bold;"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e["\u0275nov"](l,17).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&t),t},null,null)),e["\u0275did"](17,671744,null,0,k.o,[k.m,k.a,N.LocationStrategy],{routerLink:[0,"routerLink"]},null),(l()(),e["\u0275eld"](18,0,null,null,0,"i",[["class","fa fa-plus"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" Add Licence "])),(l()(),e["\u0275ted"](-1,null,[" \xa0 "])),(l()(),e["\u0275eld"](21,0,null,null,3,"div",[["class","col-12"]],null,null,null,null,null)),(l()(),e["\u0275eld"](22,0,null,null,2,"div",[["class","page-title"]],null,null,null,null,null)),(l()(),e["\u0275eld"](23,0,null,null,0,"div",[["class","float-left"]],null,null,null,null,null)),(l()(),e["\u0275eld"](24,0,null,null,0,"div",[["class","float-right"]],null,null,null,null,null)),(l()(),e["\u0275eld"](25,0,null,null,0,"div",[["class","clearfix"]],null,null,null,null,null)),(l()(),e["\u0275eld"](26,0,null,null,28,"div",[["class","col-xl-12"]],null,null,null,null,null)),(l()(),e["\u0275eld"](27,0,null,null,27,"section",[["class","box "]],null,null,null,null,null)),(l()(),e["\u0275eld"](28,0,null,null,26,"div",[["class","content-body "]],null,null,null,null,null)),(l()(),e["\u0275eld"](29,0,null,null,25,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](30,0,null,null,24,"div",[["class","col-12"]],null,null,null,null,null)),(l()(),e["\u0275eld"](31,0,null,null,23,"div",[["class","container"],["style","margin-left: 0;max-width: 1299px;"]],null,null,null,null,null)),(l()(),e["\u0275eld"](32,0,null,null,22,"div",[["class","pagination-data"],["style","overflow-x: auto;"]],null,null,null,null,null)),(l()(),e["\u0275eld"](33,0,null,null,21,"table",[["cellspacing","0"],["class","display table table-bordered table-hover table-condensed dataTable no-footer"],["id","example-11"],["width","100%"]],null,null,null,null,null)),(l()(),e["\u0275eld"](34,0,null,null,17,"thead",[],null,null,null,null,null)),(l()(),e["\u0275eld"](35,0,null,null,16,"tr",[],null,null,null,null,null)),(l()(),e["\u0275eld"](36,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["S.No."])),(l()(),e["\u0275eld"](38,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" Class Name "])),(l()(),e["\u0275eld"](40,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" Country Code "])),(l()(),e["\u0275eld"](42,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" Country Status "])),(l()(),e["\u0275eld"](44,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" Capital "])),(l()(),e["\u0275eld"](46,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" Created At"])),(l()(),e["\u0275eld"](48,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" DialCode "])),(l()(),e["\u0275eld"](50,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Action"])),(l()(),e["\u0275eld"](52,0,null,null,2,"tbody",[],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,R)),e["\u0275did"](54,802816,null,0,N.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var u=n.component;l(n,9,0,"/"),l(n,17,0,"/license/add-license"),l(n,54,0,u.Licences)},function(l,n){l(n,8,0,e["\u0275nov"](n,9).target,e["\u0275nov"](n,9).href),l(n,16,0,e["\u0275nov"](n,17).target,e["\u0275nov"](n,17).href)})}var x=e["\u0275ccf"]("app-licenseinfo",o,function(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"app-licenseinfo",[],null,null,null,M,F)),e["\u0275did"](1,114688,null,0,o,[t.a,S.k],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),w=u("t/Na"),A=u("Izlp"),O=e["\u0275crt"]({encapsulation:0,styles:[[".container[_ngcontent-%COMP%]{width:700px}"]],data:{}});function I(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,3,"option",[],null,null,null,null,null)),e["\u0275did"](1,147456,null,0,i.NgSelectOption,[e.ElementRef,e.Renderer2,[2,i.SelectControlValueAccessor]],{ngValue:[0,"ngValue"]},null),e["\u0275did"](2,147456,null,0,i["\u0275angular_packages_forms_forms_r"],[e.ElementRef,e.Renderer2,[8,null]],{ngValue:[0,"ngValue"]},null),(l()(),e["\u0275ted"](3,null,["",""]))],function(l,n){l(n,1,0,n.context.$implicit._id),l(n,2,0,n.context.$implicit._id)},function(l,n){l(n,3,0,n.context.$implicit.countryName)})}function E(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,19,"div",[["class","col-12"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,18,"div",[["class","page-title"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,2,"div",[["class","pull-left"]],null,null,null,null,null)),(l()(),e["\u0275eld"](3,0,null,null,1,"h1",[["class","title"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Create Class Licence "])),(l()(),e["\u0275eld"](5,0,null,null,14,"div",[["class","pull-right hidden-xs"]],null,null,null,null,null)),(l()(),e["\u0275eld"](6,0,null,null,13,"ol",[["class","breadcrumb"]],null,null,null,null,null)),(l()(),e["\u0275eld"](7,0,null,null,4,"li",[],null,null,null,null,null)),(l()(),e["\u0275eld"](8,0,null,null,3,"a",[["routerLink","/"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e["\u0275nov"](l,9).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&t),t},null,null)),e["\u0275did"](9,671744,null,0,k.o,[k.m,k.a,N.LocationStrategy],{routerLink:[0,"routerLink"]},null),(l()(),e["\u0275eld"](10,0,null,null,0,"i",[["class","fa fa-home"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Home"])),(l()(),e["\u0275eld"](12,0,null,null,4,"li",[],null,null,null,null,null)),(l()(),e["\u0275eld"](13,0,null,null,3,"a",[["routerLink","/license"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e["\u0275nov"](l,14).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&t),t},null,null)),e["\u0275did"](14,671744,null,0,k.o,[k.m,k.a,N.LocationStrategy],{routerLink:[0,"routerLink"]},null),(l()(),e["\u0275eld"](15,0,null,null,0,"i",[["class","fa fa-list-ol"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Class Licence Lists"])),(l()(),e["\u0275eld"](17,0,null,null,2,"li",[["class","active"]],null,null,null,null,null)),(l()(),e["\u0275eld"](18,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Add Class Licence"])),(l()(),e["\u0275eld"](20,0,null,null,3,"div",[["class","col-12"]],null,null,null,null,null)),(l()(),e["\u0275eld"](21,0,null,null,2,"div",[["class","page-title"]],null,null,null,null,null)),(l()(),e["\u0275eld"](22,0,null,null,0,"div",[["class","float-left"]],null,null,null,null,null)),(l()(),e["\u0275eld"](23,0,null,null,0,"div",[["class","float-right"]],null,null,null,null,null)),(l()(),e["\u0275eld"](24,0,null,null,0,"div",[["class","clearfix"]],null,null,null,null,null)),(l()(),e["\u0275eld"](25,0,null,null,48,"div",[["class","col-xl-12"]],null,null,null,null,null)),(l()(),e["\u0275eld"](26,0,null,null,47,"section",[["class","box "]],null,null,null,null,null)),(l()(),e["\u0275eld"](27,0,null,null,46,"div",[["class","content-body "]],null,null,null,null,null)),(l()(),e["\u0275eld"](28,0,null,null,45,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](29,0,null,null,44,"div",[["class","col-12"]],null,null,null,null,null)),(l()(),e["\u0275eld"](30,0,null,null,43,"div",[["class","container"]],null,null,null,null,null)),(l()(),e["\u0275eld"](31,0,null,null,42,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,n,u){var t=!0,o=l.component;return"submit"===n&&(t=!1!==e["\u0275nov"](l,33).onSubmit(u)&&t),"reset"===n&&(t=!1!==e["\u0275nov"](l,33).onReset()&&t),"submit"===n&&(t=!1!==o.saveUser()&&t),t},null,null)),e["\u0275did"](32,16384,null,0,i["\u0275angular_packages_forms_forms_bg"],[],null,null),e["\u0275did"](33,540672,null,0,i.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},null),e["\u0275prd"](2048,null,i.ControlContainer,null,[i.FormGroupDirective]),e["\u0275did"](35,16384,null,0,i.NgControlStatusGroup,[[4,i.ControlContainer]],null,null),(l()(),e["\u0275eld"](36,0,null,null,17,"div",[["class","form-group row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](37,0,null,null,3,"div",[["class","col-sm-3"]],null,null,null,null,null)),(l()(),e["\u0275eld"](38,0,null,null,2,"label",[["class","mt-2"],["for","country"]],null,null,null,null,null)),(l()(),e["\u0275eld"](39,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Country*"])),(l()(),e["\u0275eld"](41,0,null,null,12,"div",[["class","col-sm-9"]],null,null,null,null,null)),(l()(),e["\u0275eld"](42,0,null,null,11,"select",[["class","form-control"],["formControlName","country"],["id","country"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"change"],[null,"blur"]],function(l,n,u){var t=!0;return"change"===n&&(t=!1!==e["\u0275nov"](l,43).onChange(u.target.value)&&t),"blur"===n&&(t=!1!==e["\u0275nov"](l,43).onTouched()&&t),t},null,null)),e["\u0275did"](43,16384,null,0,i.SelectControlValueAccessor,[e.Renderer2,e.ElementRef],null,null),e["\u0275prd"](1024,null,i.NG_VALUE_ACCESSOR,function(l){return[l]},[i.SelectControlValueAccessor]),e["\u0275did"](45,671744,null,0,i.FormControlName,[[3,i.ControlContainer],[8,null],[8,null],[6,i.NG_VALUE_ACCESSOR],[2,i["\u0275angular_packages_forms_forms_j"]]],{name:[0,"name"]},null),e["\u0275prd"](2048,null,i.NgControl,null,[i.FormControlName]),e["\u0275did"](47,16384,null,0,i.NgControlStatus,[[4,i.NgControl]],null,null),(l()(),e["\u0275eld"](48,0,null,null,3,"option",[],null,null,null,null,null)),e["\u0275did"](49,147456,null,0,i.NgSelectOption,[e.ElementRef,e.Renderer2,[2,i.SelectControlValueAccessor]],null,null),e["\u0275did"](50,147456,null,0,i["\u0275angular_packages_forms_forms_r"],[e.ElementRef,e.Renderer2,[8,null]],null,null),(l()(),e["\u0275ted"](-1,null,["--Select--"])),(l()(),e["\u0275and"](16777216,null,null,1,null,I)),e["\u0275did"](53,802816,null,0,N.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),e["\u0275eld"](54,0,null,null,12,"div",[["class","form-group row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](55,0,null,null,3,"div",[["class","col-sm-3"]],null,null,null,null,null)),(l()(),e["\u0275eld"](56,0,null,null,2,"label",[["class","mt-2"],["for","className"]],null,null,null,null,null)),(l()(),e["\u0275eld"](57,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Class Licence Name*"])),(l()(),e["\u0275eld"](59,0,null,null,7,"div",[["class","col-sm-9"]],null,null,null,null,null)),(l()(),e["\u0275eld"](60,0,null,null,5,"input",[["class","form-control"],["formControlName","className"],["id","className"],["max","40"],["placeholder","Class Licence Name"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var t=!0;return"input"===n&&(t=!1!==e["\u0275nov"](l,61)._handleInput(u.target.value)&&t),"blur"===n&&(t=!1!==e["\u0275nov"](l,61).onTouched()&&t),"compositionstart"===n&&(t=!1!==e["\u0275nov"](l,61)._compositionStart()&&t),"compositionend"===n&&(t=!1!==e["\u0275nov"](l,61)._compositionEnd(u.target.value)&&t),t},null,null)),e["\u0275did"](61,16384,null,0,i.DefaultValueAccessor,[e.Renderer2,e.ElementRef,[2,i.COMPOSITION_BUFFER_MODE]],null,null),e["\u0275prd"](1024,null,i.NG_VALUE_ACCESSOR,function(l){return[l]},[i.DefaultValueAccessor]),e["\u0275did"](63,671744,null,0,i.FormControlName,[[3,i.ControlContainer],[8,null],[8,null],[6,i.NG_VALUE_ACCESSOR],[2,i["\u0275angular_packages_forms_forms_j"]]],{name:[0,"name"]},null),e["\u0275prd"](2048,null,i.NgControl,null,[i.FormControlName]),e["\u0275did"](65,16384,null,0,i.NgControlStatus,[[4,i.NgControl]],null,null),(l()(),e["\u0275eld"](66,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e["\u0275eld"](67,0,null,null,6,"div",[["class","form-group row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](68,0,null,null,2,"div",[["class","col-sm-3"]],null,null,null,null,null)),(l()(),e["\u0275eld"](69,0,null,null,1,"label",[["class","mt-2"],["for","name"]],null,null,null,null,null)),(l()(),e["\u0275eld"](70,0,null,null,0,"strong",[],null,null,null,null,null)),(l()(),e["\u0275eld"](71,0,null,null,2,"div",[["class","col-sm-9"]],null,null,null,null,null)),(l()(),e["\u0275eld"](72,0,null,null,1,"button",[["class","btn btn-primary btn-block"],["type","submit"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Add State"]))],function(l,n){var u=n.component;l(n,9,0,"/"),l(n,14,0,"/license"),l(n,33,0,u.userForm),l(n,45,0,"country"),l(n,53,0,u.Countries),l(n,63,0,"className")},function(l,n){l(n,8,0,e["\u0275nov"](n,9).target,e["\u0275nov"](n,9).href),l(n,13,0,e["\u0275nov"](n,14).target,e["\u0275nov"](n,14).href),l(n,31,0,e["\u0275nov"](n,35).ngClassUntouched,e["\u0275nov"](n,35).ngClassTouched,e["\u0275nov"](n,35).ngClassPristine,e["\u0275nov"](n,35).ngClassDirty,e["\u0275nov"](n,35).ngClassValid,e["\u0275nov"](n,35).ngClassInvalid,e["\u0275nov"](n,35).ngClassPending),l(n,42,0,e["\u0275nov"](n,47).ngClassUntouched,e["\u0275nov"](n,47).ngClassTouched,e["\u0275nov"](n,47).ngClassPristine,e["\u0275nov"](n,47).ngClassDirty,e["\u0275nov"](n,47).ngClassValid,e["\u0275nov"](n,47).ngClassInvalid,e["\u0275nov"](n,47).ngClassPending),l(n,60,0,e["\u0275nov"](n,65).ngClassUntouched,e["\u0275nov"](n,65).ngClassTouched,e["\u0275nov"](n,65).ngClassPristine,e["\u0275nov"](n,65).ngClassDirty,e["\u0275nov"](n,65).ngClassValid,e["\u0275nov"](n,65).ngClassInvalid,e["\u0275nov"](n,65).ngClassPending)})}var P=e["\u0275ccf"]("app-licenseve",s,function(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"app-licenseve",[],null,null,null,E,O)),e["\u0275did"](1,114688,null,0,s,[i.FormBuilder,k.a,r.a,d.a,t.a,S.k,k.m,w.c,A.a,e.NgZone],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),V=u("Ovjw"),j=u("iCtU"),U=u("e5OV"),D=u("8NoF"),K=u("FeSO"),T=u("5sLU"),B=u("oYRQ"),G=u("q7oS"),z=u("OU4G"),Z=u("bSlz"),Y=u("9n00"),$=u("Wqpw"),H=u("Ok6J"),q=u("ebCm"),W=u("NGEN"),X=u("ejuw"),J=u("swaV"),Q=u("Zt+D"),ll=u("lMb6"),nl=u("sE5F"),ul=u("xTly"),el=u("hCxe"),tl=u("B/MV"),ol=u("Eo4b"),il=u("/D4B"),al=u("H06x"),dl=u("BBZF"),rl=u("Ry/H"),sl=u("ZYjt"),cl=u("/fSM"),ml=u("bt6x"),pl=u("0XGt"),fl=u("nhl2"),gl=u("gpiN"),vl=u("MVL9"),hl=u("j2fZ"),Cl=u("LKjY"),yl=u("PsaP"),bl=u("InZo"),Ll=u("C9m0"),_l=u("+NDo"),kl=u("4WQT"),Nl=u("wtSO"),Sl=u("NlYj"),Fl=u("neuq"),Rl=u("y+WT"),Ml=u("eUd/"),xl=u("nNbs"),wl=u("SHUP"),Al=u("7LN8"),Ol=u("VSng"),Il=u("GS5F"),El=u("WwML"),Pl=u("VYqR"),Vl=u("hAPg"),jl=u("KB/w");u.d(n,"ClassoflicenseModuleNgFactory",function(){return Ul});var Ul=e["\u0275cmf"](m,[],function(l){return e["\u0275mod"]([e["\u0275mpd"](512,e.ComponentFactoryResolver,e["\u0275CodegenComponentFactoryResolver"],[[8,[p.a,f.a,g.a,v.a,h.a,C.a,y.a,b.a,L.a,_.a,x,P]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["\u0275mpd"](4608,N.NgLocalization,N.NgLocaleLocalization,[e.LOCALE_ID,[2,N["\u0275angular_packages_common_common_a"]]]),e["\u0275mpd"](4608,i["\u0275angular_packages_forms_forms_i"],i["\u0275angular_packages_forms_forms_i"],[]),e["\u0275mpd"](4608,V.a,V.a,[e.ApplicationRef,e.Injector,e.ComponentFactoryResolver,N.DOCUMENT]),e["\u0275mpd"](4608,j.a,j.a,[e.ComponentFactoryResolver,e.Injector,V.a]),e["\u0275mpd"](4608,U.a,U.a,[]),e["\u0275mpd"](4608,D.a,D.a,[]),e["\u0275mpd"](4608,K.a,K.a,[]),e["\u0275mpd"](4608,T.a,T.a,[]),e["\u0275mpd"](4608,B.a,B.a,[]),e["\u0275mpd"](4608,G.a,G.a,[]),e["\u0275mpd"](4608,z.a,z.b,[]),e["\u0275mpd"](4608,Z.a,Z.b,[]),e["\u0275mpd"](4608,Y.b,Y.a,[]),e["\u0275mpd"](4608,$.a,$.b,[]),e["\u0275mpd"](4608,H.a,H.a,[]),e["\u0275mpd"](4608,q.a,q.a,[]),e["\u0275mpd"](4608,W.a,W.a,[]),e["\u0275mpd"](4608,X.a,X.a,[]),e["\u0275mpd"](4608,J.a,J.a,[]),e["\u0275mpd"](4608,Q.a,Q.a,[]),e["\u0275mpd"](4608,ll.a,ll.a,[]),e["\u0275mpd"](4608,nl.c,nl.c,[]),e["\u0275mpd"](4608,nl.l,nl.b,[]),e["\u0275mpd"](5120,nl.n,nl.o,[]),e["\u0275mpd"](4608,nl.m,nl.m,[nl.c,nl.l,nl.n]),e["\u0275mpd"](4608,nl.j,nl.a,[]),e["\u0275mpd"](5120,nl.e,nl.p,[nl.m,nl.j]),e["\u0275mpd"](4608,ul.b,ul.a,[]),e["\u0275mpd"](4608,el.a,el.a,[]),e["\u0275mpd"](4608,tl.a,tl.a,[nl.e,e.PLATFORM_ID,ul.b,el.a]),e["\u0275mpd"](4608,w.h,w.n,[N.DOCUMENT,e.PLATFORM_ID,w.l]),e["\u0275mpd"](4608,w.o,w.o,[w.h,w.m]),e["\u0275mpd"](5120,w.a,function(l){return[l]},[w.o]),e["\u0275mpd"](4608,w.k,w.k,[]),e["\u0275mpd"](6144,w.i,null,[w.k]),e["\u0275mpd"](4608,w.g,w.g,[w.i]),e["\u0275mpd"](6144,w.b,null,[w.g]),e["\u0275mpd"](4608,w.f,w.j,[w.b,e.Injector]),e["\u0275mpd"](4608,w.c,w.c,[w.f]),e["\u0275mpd"](5120,ol.f,il.b,[w.c]),e["\u0275mpd"](4608,ol.c,ol.e,[]),e["\u0275mpd"](4608,ol.h,ol.d,[]),e["\u0275mpd"](4608,ol.b,ol.a,[]),e["\u0275mpd"](4608,ol.l,ol.l,[]),e["\u0275mpd"](4608,ol.i,ol.i,[ol.l,ol.f,ol.c,ol.h,ol.b,ol.j,ol.k]),e["\u0275mpd"](4608,i.FormBuilder,i.FormBuilder,[]),e["\u0275mpd"](4608,al.PaginationService,al.PaginationService,[]),e["\u0275mpd"](4608,dl.c,dl.c,[]),e["\u0275mpd"](4608,dl.b,dl.b,[]),e["\u0275mpd"](4608,A.a,rl.b,[[2,rl.a],dl.c,dl.b]),e["\u0275mpd"](4608,S.c,S.c,[]),e["\u0275mpd"](4608,S.b,S.b,[S.c,e.ComponentFactoryResolver,e.ApplicationRef]),e["\u0275mpd"](4608,S.k,S.k,[S.d,S.b,e.Injector,sl.DomSanitizer,e.NgZone]),e["\u0275mpd"](1073742336,N.CommonModule,N.CommonModule,[]),e["\u0275mpd"](1073742336,cl.a,cl.a,[]),e["\u0275mpd"](1073742336,S.j,S.j,[[3,S.j]]),e["\u0275mpd"](1073742336,ml.a,ml.a,[]),e["\u0275mpd"](1073742336,pl.a,pl.a,[]),e["\u0275mpd"](1073742336,fl.a,fl.a,[]),e["\u0275mpd"](1073742336,gl.a,gl.a,[]),e["\u0275mpd"](1073742336,vl.a,vl.a,[]),e["\u0275mpd"](1073742336,hl.a,hl.a,[]),e["\u0275mpd"](1073742336,Cl.a,Cl.a,[]),e["\u0275mpd"](1073742336,yl.a,yl.a,[]),e["\u0275mpd"](1073742336,i["\u0275angular_packages_forms_forms_bb"],i["\u0275angular_packages_forms_forms_bb"],[]),e["\u0275mpd"](1073742336,i.FormsModule,i.FormsModule,[]),e["\u0275mpd"](1073742336,bl.a,bl.a,[]),e["\u0275mpd"](1073742336,Ll.a,Ll.a,[]),e["\u0275mpd"](1073742336,_l.a,_l.a,[]),e["\u0275mpd"](1073742336,kl.a,kl.a,[]),e["\u0275mpd"](1073742336,Nl.a,Nl.a,[]),e["\u0275mpd"](1073742336,Sl.a,Sl.a,[]),e["\u0275mpd"](1073742336,Fl.a,Fl.a,[]),e["\u0275mpd"](1073742336,Rl.a,Rl.a,[]),e["\u0275mpd"](1073742336,Ml.a,Ml.a,[]),e["\u0275mpd"](1073742336,nl.f,nl.f,[]),e["\u0275mpd"](1073742336,xl.a,xl.a,[]),e["\u0275mpd"](1073742336,k.p,k.p,[[2,k.v],[2,k.m]]),e["\u0275mpd"](1073742336,w.e,w.e,[]),e["\u0275mpd"](1073742336,w.d,w.d,[]),e["\u0275mpd"](1073742336,ol.g,ol.g,[]),e["\u0275mpd"](1073742336,il.a,il.a,[]),e["\u0275mpd"](1073742336,i.ReactiveFormsModule,i.ReactiveFormsModule,[]),e["\u0275mpd"](1073742336,a.a,a.a,[]),e["\u0275mpd"](1073742336,wl.Ng2PaginationModule,wl.Ng2PaginationModule,[]),e["\u0275mpd"](1073742336,Al.SharedModule,Al.SharedModule,[]),e["\u0275mpd"](1073742336,Ol.ButtonModule,Ol.ButtonModule,[]),e["\u0275mpd"](1073742336,Il.ProgressBarModule,Il.ProgressBarModule,[]),e["\u0275mpd"](1073742336,El.MessagesModule,El.MessagesModule,[]),e["\u0275mpd"](1073742336,Pl.FileUploadModule,Pl.FileUploadModule,[]),e["\u0275mpd"](1073742336,Vl.ScheduleModule,Vl.ScheduleModule,[]),e["\u0275mpd"](1073742336,jl.CalendarModule,jl.CalendarModule,[]),e["\u0275mpd"](1073742336,m,m,[]),e["\u0275mpd"](256,w.l,"XSRF-TOKEN",[]),e["\u0275mpd"](256,w.m,"X-XSRF-TOKEN",[]),e["\u0275mpd"](256,ol.k,void 0,[]),e["\u0275mpd"](256,ol.j,void 0,[]),e["\u0275mpd"](256,rl.a,{apiKey:"AIzaSyAp5vIeGvze_ZWYwee-fVE3JS3LYnREZP0",libraries:["places"]},[]),e["\u0275mpd"](256,S.d,{config:{},defaults:S.a},[]),e["\u0275mpd"](1024,k.k,function(){return[[{path:"",component:c.a,children:[{path:"",component:o},{path:"edit-license/:driverid",component:s},{path:"add-license",component:s}]}]]},[])])})},Xpb8:function(l,n,u){"use strict";u.d(n,"a",function(){return a}),u("BuZO"),u("PG31");var e=u("AytR"),t=u("82od"),o=u("CcnG"),i=u("t/Na"),a=function(){function l(l){this.http=l,this.config=new t.a}return l.prototype.getCountries=function(l){return void 0===l&&(l=""),this.http.get(e.a.APIURL+"/countries"+l)},l.prototype.addCountries=function(l){return this.http.post(e.a.APIURL+"/countries",l)},l.prototype.updateCountries=function(l,n){return void 0===n&&(n=""),this.http.put(e.a.APIURL+"/countries"+n,l)},l.prototype.deleteCountries=function(l){return void 0===l&&(l=""),this.http.delete(e.a.APIURL+"/countries"+l)},l.prototype.uploadLogo=function(l){var n=e.a.APIURL+"/users/images",u=l.target.files[0],t=new FormData;return t.append("flag_128",u,u.name),this.http.post(n,t)},l.ngInjectableDef=o.defineInjectable({factory:function(){return new l(o.inject(i.c))},token:l,providedIn:"root"}),l}()}}]);