(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"0aWE":function(l,n,u){"use strict";u.r(n);var e=u("CcnG"),a=u("PTmb"),d=function(){function l(l,n){this.service=l,this.toastr=n,this.driverRef=null}return l.prototype.ngOnInit=function(){this.getDrivers()},l.prototype.getDrivers=function(){var l=this;this.service.getDrivers().subscribe(function(n){console.log(n.data),l.Drivers=n.data})},l.prototype.deleteDriver=function(l){var n=this;this.service.deleteDriver("/"+l).subscribe(function(l){console.log(l),n.toastr.success("Driver deleted Successfully"),n.getDrivers()},function(l){console.log("error")})},l}(),t=u("58BA"),o=function(){},i=u("XePT"),c=u("4lDY"),p=u("u4HF"),r=u("aq8m"),m=u("qcfG"),s=u("xaNE"),g=u("FNNE"),f=u("gW6t"),v=u("pMnS"),b=u("PS+O"),h=u("ZYCi"),M=u("Ip0R"),F=u("SZbH"),S=e["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function N(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,12,"tr",[["class","ng-scope"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,1,"td",[["class","ng-binding"]],null,null,null,null,null)),(l()(),e["\u0275ted"](2,null,[" ",""])),(l()(),e["\u0275eld"](3,0,null,null,1,"td",[["class","ng-binding"]],null,null,null,null,null)),(l()(),e["\u0275ted"](4,null,[" "," "," "])),(l()(),e["\u0275eld"](5,0,null,null,1,"td",[["class","ng-binding"]],null,null,null,null,null)),(l()(),e["\u0275ted"](6,null,[" "," "])),(l()(),e["\u0275eld"](7,0,null,null,2,"td",[["class","ng-binding"]],null,null,null,null,null)),(l()(),e["\u0275eld"](8,0,null,null,0,"img",[["width","40"]],[[8,"src",4]],null,null,null,null)),(l()(),e["\u0275eld"](9,0,null,null,0,"img",[["width","40"]],[[8,"src",4]],null,null,null,null)),(l()(),e["\u0275eld"](10,0,null,null,2,"td",[["class","ng-binding"]],null,null,null,null,null)),(l()(),e["\u0275eld"](11,0,null,null,1,"button",[],null,null,null,null,null)),(l()(),e["\u0275ted"](12,null,["",""]))],null,function(l,n){l(n,2,0,n.context.index+1),l(n,4,0,n.context.$implicit.userFirstName,n.context.$implicit.userLastName),l(n,6,0,n.context.$implicit.userEmail),l(n,8,0,e["\u0275inlineInterpolate"](1,"http://23.239.215.73:8080/v1/images/",n.context.$implicit.driverLicenceFront,"")),l(n,9,0,e["\u0275inlineInterpolate"](1,"http://23.239.215.73:8080/v1/images/",n.context.$implicit.driverLicenceFront,"")),l(n,12,0,n.context.$implicit.userStatus)})}function R(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,14,"div",[["class","col-12"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,13,"div",[["class","page-title"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,2,"div",[["class","pull-left"]],null,null,null,null,null)),(l()(),e["\u0275eld"](3,0,null,null,1,"h1",[["class","title"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Scan Recognition Request"])),(l()(),e["\u0275eld"](5,0,null,null,9,"div",[["class","pull-right hidden-xs"]],null,null,null,null,null)),(l()(),e["\u0275eld"](6,0,null,null,8,"ol",[["class","breadcrumb"]],null,null,null,null,null)),(l()(),e["\u0275eld"](7,0,null,null,4,"li",[],null,null,null,null,null)),(l()(),e["\u0275eld"](8,0,null,null,3,"a",[["routerLink","/"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var a=!0;return"click"===n&&(a=!1!==e["\u0275nov"](l,9).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&a),a},null,null)),e["\u0275did"](9,671744,null,0,h.o,[h.m,h.a,M.LocationStrategy],{routerLink:[0,"routerLink"]},null),(l()(),e["\u0275eld"](10,0,null,null,0,"i",[["class","fa fa-home"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Home"])),(l()(),e["\u0275eld"](12,0,null,null,2,"li",[["class","active"]],null,null,null,null,null)),(l()(),e["\u0275eld"](13,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Recognition"])),(l()(),e["\u0275eld"](15,0,null,null,3,"div",[["class","col-12"]],null,null,null,null,null)),(l()(),e["\u0275eld"](16,0,null,null,2,"div",[["class","page-title"]],null,null,null,null,null)),(l()(),e["\u0275eld"](17,0,null,null,0,"div",[["class","float-left"]],null,null,null,null,null)),(l()(),e["\u0275eld"](18,0,null,null,0,"div",[["class","float-right"]],null,null,null,null,null)),(l()(),e["\u0275eld"](19,0,null,null,0,"div",[["class","clearfix"]],null,null,null,null,null)),(l()(),e["\u0275eld"](20,0,null,null,22,"div",[["class","col-xl-12"]],null,null,null,null,null)),(l()(),e["\u0275eld"](21,0,null,null,21,"section",[["class","box "]],null,null,null,null,null)),(l()(),e["\u0275eld"](22,0,null,null,20,"div",[["class","content-body "]],null,null,null,null,null)),(l()(),e["\u0275eld"](23,0,null,null,19,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](24,0,null,null,18,"div",[["class","col-12"]],null,null,null,null,null)),(l()(),e["\u0275eld"](25,0,null,null,17,"div",[["class","container"],["style","margin-left: 0;max-width: 1299px;"]],null,null,null,null,null)),(l()(),e["\u0275eld"](26,0,null,null,16,"div",[["class","pagination-data"],["style","overflow-x:auto;"]],null,null,null,null,null)),(l()(),e["\u0275eld"](27,0,null,null,15,"table",[["cellspacing","0"],["class","display table table-bordered table-hover table-condensed dataTable no-footer"],["id","example-11"],["width","100%"]],null,null,null,null,null)),(l()(),e["\u0275eld"](28,0,null,null,11,"thead",[],null,null,null,null,null)),(l()(),e["\u0275eld"](29,0,null,null,10,"tr",[],null,null,null,null,null)),(l()(),e["\u0275eld"](30,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["S.No."])),(l()(),e["\u0275eld"](32,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" Name "])),(l()(),e["\u0275eld"](34,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" Email "])),(l()(),e["\u0275eld"](36,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" Scan Recognition Image"])),(l()(),e["\u0275eld"](38,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" Status "])),(l()(),e["\u0275eld"](40,0,null,null,2,"tbody",[],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,N)),e["\u0275did"](42,802816,null,0,M.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var u=n.component;l(n,9,0,"/"),l(n,42,0,u.Drivers)},function(l,n){l(n,8,0,e["\u0275nov"](n,9).target,e["\u0275nov"](n,9).href)})}var y=e["\u0275ccf"]("app-recognitionlist",d,function(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"app-recognitionlist",[],null,null,null,R,S)),e["\u0275did"](1,114688,null,0,d,[a.a,F.k],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),_=u("gIcY"),k=u("Ovjw"),C=u("iCtU"),w=u("e5OV"),x=u("8NoF"),D=u("FeSO"),L=u("5sLU"),j=u("oYRQ"),O=u("q7oS"),I=u("OU4G"),E=u("bSlz"),P=u("9n00"),T=u("Wqpw"),B=u("Ok6J"),A=u("ebCm"),Y=u("NGEN"),Z=u("ejuw"),K=u("swaV"),U=u("Zt+D"),V=u("lMb6"),q=u("sE5F"),z=u("xTly"),G=u("hCxe"),W=u("B/MV"),H=u("t/Na"),$=u("Eo4b"),X=u("/D4B"),J=u("H06x"),Q=u("BBZF"),ll=u("Izlp"),nl=u("Ry/H"),ul=u("ZYjt"),el=u("/fSM"),al=u("bt6x"),dl=u("0XGt"),tl=u("nhl2"),ol=u("gpiN"),il=u("MVL9"),cl=u("j2fZ"),pl=u("LKjY"),rl=u("PsaP"),ml=u("InZo"),sl=u("C9m0"),gl=u("+NDo"),fl=u("4WQT"),vl=u("wtSO"),bl=u("NlYj"),hl=u("neuq"),Ml=u("y+WT"),Fl=u("eUd/"),Sl=u("nNbs"),Nl=u("MKA2"),Rl=u("SHUP"),yl=u("7LN8"),_l=u("VSng"),kl=u("GS5F"),Cl=u("WwML"),wl=u("VYqR"),xl=u("hAPg"),Dl=u("KB/w");u.d(n,"RecognitionModuleNgFactory",function(){return Ll});var Ll=e["\u0275cmf"](o,[],function(l){return e["\u0275mod"]([e["\u0275mpd"](512,e.ComponentFactoryResolver,e["\u0275CodegenComponentFactoryResolver"],[[8,[i.a,c.a,p.a,r.a,m.a,s.a,g.a,f.a,v.a,b.a,y]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["\u0275mpd"](4608,M.NgLocalization,M.NgLocaleLocalization,[e.LOCALE_ID,[2,M["\u0275angular_packages_common_common_a"]]]),e["\u0275mpd"](4608,_["\u0275angular_packages_forms_forms_i"],_["\u0275angular_packages_forms_forms_i"],[]),e["\u0275mpd"](4608,k.a,k.a,[e.ApplicationRef,e.Injector,e.ComponentFactoryResolver,M.DOCUMENT]),e["\u0275mpd"](4608,C.a,C.a,[e.ComponentFactoryResolver,e.Injector,k.a]),e["\u0275mpd"](4608,w.a,w.a,[]),e["\u0275mpd"](4608,x.a,x.a,[]),e["\u0275mpd"](4608,D.a,D.a,[]),e["\u0275mpd"](4608,L.a,L.a,[]),e["\u0275mpd"](4608,j.a,j.a,[]),e["\u0275mpd"](4608,O.a,O.a,[]),e["\u0275mpd"](4608,I.a,I.b,[]),e["\u0275mpd"](4608,E.a,E.b,[]),e["\u0275mpd"](4608,P.b,P.a,[]),e["\u0275mpd"](4608,T.a,T.b,[]),e["\u0275mpd"](4608,B.a,B.a,[]),e["\u0275mpd"](4608,A.a,A.a,[]),e["\u0275mpd"](4608,Y.a,Y.a,[]),e["\u0275mpd"](4608,Z.a,Z.a,[]),e["\u0275mpd"](4608,K.a,K.a,[]),e["\u0275mpd"](4608,U.a,U.a,[]),e["\u0275mpd"](4608,V.a,V.a,[]),e["\u0275mpd"](4608,q.c,q.c,[]),e["\u0275mpd"](4608,q.l,q.b,[]),e["\u0275mpd"](5120,q.n,q.o,[]),e["\u0275mpd"](4608,q.m,q.m,[q.c,q.l,q.n]),e["\u0275mpd"](4608,q.j,q.a,[]),e["\u0275mpd"](5120,q.e,q.p,[q.m,q.j]),e["\u0275mpd"](4608,z.b,z.a,[]),e["\u0275mpd"](4608,G.a,G.a,[]),e["\u0275mpd"](4608,W.a,W.a,[q.e,e.PLATFORM_ID,z.b,G.a]),e["\u0275mpd"](4608,H.h,H.n,[M.DOCUMENT,e.PLATFORM_ID,H.l]),e["\u0275mpd"](4608,H.o,H.o,[H.h,H.m]),e["\u0275mpd"](5120,H.a,function(l){return[l]},[H.o]),e["\u0275mpd"](4608,H.k,H.k,[]),e["\u0275mpd"](6144,H.i,null,[H.k]),e["\u0275mpd"](4608,H.g,H.g,[H.i]),e["\u0275mpd"](6144,H.b,null,[H.g]),e["\u0275mpd"](4608,H.f,H.j,[H.b,e.Injector]),e["\u0275mpd"](4608,H.c,H.c,[H.f]),e["\u0275mpd"](5120,$.f,X.b,[H.c]),e["\u0275mpd"](4608,$.c,$.e,[]),e["\u0275mpd"](4608,$.h,$.d,[]),e["\u0275mpd"](4608,$.b,$.a,[]),e["\u0275mpd"](4608,$.l,$.l,[]),e["\u0275mpd"](4608,$.i,$.i,[$.l,$.f,$.c,$.h,$.b,$.j,$.k]),e["\u0275mpd"](4608,_.FormBuilder,_.FormBuilder,[]),e["\u0275mpd"](4608,J.PaginationService,J.PaginationService,[]),e["\u0275mpd"](4608,Q.c,Q.c,[]),e["\u0275mpd"](4608,Q.b,Q.b,[]),e["\u0275mpd"](4608,ll.a,nl.b,[[2,nl.a],Q.c,Q.b]),e["\u0275mpd"](4608,F.c,F.c,[]),e["\u0275mpd"](4608,F.b,F.b,[F.c,e.ComponentFactoryResolver,e.ApplicationRef]),e["\u0275mpd"](4608,F.k,F.k,[F.d,F.b,e.Injector,ul.DomSanitizer,e.NgZone]),e["\u0275mpd"](1073742336,M.CommonModule,M.CommonModule,[]),e["\u0275mpd"](1073742336,el.a,el.a,[]),e["\u0275mpd"](1073742336,F.j,F.j,[[3,F.j]]),e["\u0275mpd"](1073742336,al.a,al.a,[]),e["\u0275mpd"](1073742336,dl.a,dl.a,[]),e["\u0275mpd"](1073742336,tl.a,tl.a,[]),e["\u0275mpd"](1073742336,ol.a,ol.a,[]),e["\u0275mpd"](1073742336,il.a,il.a,[]),e["\u0275mpd"](1073742336,cl.a,cl.a,[]),e["\u0275mpd"](1073742336,pl.a,pl.a,[]),e["\u0275mpd"](1073742336,rl.a,rl.a,[]),e["\u0275mpd"](1073742336,_["\u0275angular_packages_forms_forms_bb"],_["\u0275angular_packages_forms_forms_bb"],[]),e["\u0275mpd"](1073742336,_.FormsModule,_.FormsModule,[]),e["\u0275mpd"](1073742336,ml.a,ml.a,[]),e["\u0275mpd"](1073742336,sl.a,sl.a,[]),e["\u0275mpd"](1073742336,gl.a,gl.a,[]),e["\u0275mpd"](1073742336,fl.a,fl.a,[]),e["\u0275mpd"](1073742336,vl.a,vl.a,[]),e["\u0275mpd"](1073742336,bl.a,bl.a,[]),e["\u0275mpd"](1073742336,hl.a,hl.a,[]),e["\u0275mpd"](1073742336,Ml.a,Ml.a,[]),e["\u0275mpd"](1073742336,Fl.a,Fl.a,[]),e["\u0275mpd"](1073742336,q.f,q.f,[]),e["\u0275mpd"](1073742336,Sl.a,Sl.a,[]),e["\u0275mpd"](1073742336,h.p,h.p,[[2,h.v],[2,h.m]]),e["\u0275mpd"](1073742336,H.e,H.e,[]),e["\u0275mpd"](1073742336,H.d,H.d,[]),e["\u0275mpd"](1073742336,$.g,$.g,[]),e["\u0275mpd"](1073742336,X.a,X.a,[]),e["\u0275mpd"](1073742336,_.ReactiveFormsModule,_.ReactiveFormsModule,[]),e["\u0275mpd"](1073742336,Nl.a,Nl.a,[]),e["\u0275mpd"](1073742336,Rl.Ng2PaginationModule,Rl.Ng2PaginationModule,[]),e["\u0275mpd"](1073742336,yl.SharedModule,yl.SharedModule,[]),e["\u0275mpd"](1073742336,_l.ButtonModule,_l.ButtonModule,[]),e["\u0275mpd"](1073742336,kl.ProgressBarModule,kl.ProgressBarModule,[]),e["\u0275mpd"](1073742336,Cl.MessagesModule,Cl.MessagesModule,[]),e["\u0275mpd"](1073742336,wl.FileUploadModule,wl.FileUploadModule,[]),e["\u0275mpd"](1073742336,xl.ScheduleModule,xl.ScheduleModule,[]),e["\u0275mpd"](1073742336,Dl.CalendarModule,Dl.CalendarModule,[]),e["\u0275mpd"](1073742336,o,o,[]),e["\u0275mpd"](256,H.l,"XSRF-TOKEN",[]),e["\u0275mpd"](256,H.m,"X-XSRF-TOKEN",[]),e["\u0275mpd"](256,$.k,void 0,[]),e["\u0275mpd"](256,$.j,void 0,[]),e["\u0275mpd"](256,nl.a,{apiKey:"AIzaSyAp5vIeGvze_ZWYwee-fVE3JS3LYnREZP0",libraries:["places"]},[]),e["\u0275mpd"](256,F.d,{config:{},defaults:F.a},[]),e["\u0275mpd"](1024,h.k,function(){return[[{path:"",component:t.a,children:[{path:"",component:d}]}]]},[])])})},"82od":function(l,n,u){"use strict";u.d(n,"a",function(){return a});var e=u("sE5F"),a=function(){return function(){this.headerOptions={headers:new e.d({"Content-Type":"application/json"})}}}()}}]);