(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{PTmb:function(t,e,n){"use strict";n.d(e,"a",function(){return p}),n("BuZO"),n("PG31");var i=n("AytR"),o=n("82od"),r=n("CcnG"),c=n("t/Na"),u=n("ZYCi"),p=function(){function t(t,e){this.http=t,this.router=e,this.config=new o.a}return t.prototype.getDrivers=function(t){return void 0===t&&(t=""),this.http.get(i.a.APIURL+"/drivers"+t)},t.prototype.getdDrivers=function(t){return void 0===t&&(t=""),this.http.get(i.a.APIURL+"/driver"+t)},t.prototype.addDriver=function(t){return this.http.post(i.a.APIURL+"/users",t)},t.prototype.updateDriver=function(t,e){return void 0===e&&(e=""),this.http.put(i.a.APIURL+"/users"+e,t)},t.prototype.updatedDriver=function(t,e){return void 0===e&&(e=""),this.http.put(i.a.APIURL+"/driver"+e,t)},t.prototype.deleteDriver=function(t){return void 0===t&&(t=""),this.http.delete(i.a.APIURL+"/driver"+t)},t.prototype.uploadLogo=function(t){var e=i.a.APIURL+"/users/images",n=t.target.files[0],o=new FormData;return o.append("selfieImage",n,n.name),this.http.post(e,o)},t.ngInjectableDef=r.defineInjectable({factory:function(){return new t(r.inject(c.c),r.inject(u.m))},token:t,providedIn:"root"}),t}()},ndxW:function(t,e,n){"use strict";n.d(e,"a",function(){return u}),n("BuZO"),n("PG31");var i=n("AytR"),o=n("82od"),r=n("CcnG"),c=n("t/Na"),u=function(){function t(t){this.http=t,this.config=new o.a}return t.prototype.getStates=function(t){return void 0===t&&(t=""),this.http.get(i.a.APIURL+"/states"+t)},t.prototype.addStates=function(t){return this.http.post(i.a.APIURL+"/states",t)},t.prototype.updateStates=function(t,e){return void 0===e&&(e=""),this.http.put(i.a.APIURL+"/states"+e,t)},t.prototype.deleteStates=function(t){return void 0===t&&(t=""),this.http.delete(i.a.APIURL+"/states"+t)},t.ngInjectableDef=r.defineInjectable({factory:function(){return new t(r.inject(c.c))},token:t,providedIn:"root"}),t}()},pmY2:function(t,e,n){"use strict";n.d(e,"a",function(){return u}),n("BuZO"),n("PG31");var i=n("AytR"),o=n("82od"),r=n("CcnG"),c=n("t/Na"),u=function(){function t(t){this.http=t,this.config=new o.a}return t.prototype.getCities=function(t){return void 0===t&&(t=""),this.http.get(i.a.APIURL+"/cities"+t)},t.prototype.addCities=function(t){return this.http.post(i.a.APIURL+"/cities",t)},t.prototype.updateCities=function(t,e){return void 0===e&&(e=""),this.http.put(i.a.APIURL+"/cities"+e,t)},t.prototype.deleteCities=function(t){return void 0===t&&(t=""),this.http.delete(i.a.APIURL+"/cities"+t)},t.ngInjectableDef=r.defineInjectable({factory:function(){return new t(r.inject(c.c))},token:t,providedIn:"root"}),t}()},z4TD:function(t,e,n){"use strict";n.d(e,"a",function(){return u}),n("BuZO"),n("PG31");var i=n("AytR"),o=n("82od"),r=n("CcnG"),c=n("t/Na"),u=function(){function t(t){this.http=t,this.config=new o.a}return t.prototype.getLicence=function(t){return void 0===t&&(t=""),this.http.get(i.a.APIURL+"/classLicence"+t)},t.prototype.addLicence=function(t){return this.http.post(i.a.APIURL+"/classLicence",t)},t.prototype.updateLicence=function(t,e){return void 0===e&&(e=""),this.http.put(i.a.APIURL+"/classLicence"+e,t)},t.prototype.deleteLicence=function(t){void 0===t&&(t="");var e=i.a.APIURL+"/classLicence"+t;return alert(e),this.http.delete(e)},t.ngInjectableDef=r.defineInjectable({factory:function(){return new t(r.inject(c.c))},token:t,providedIn:"root"}),t}()}}]);