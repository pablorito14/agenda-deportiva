"use strict";(self.webpackChunkagenda_futbol=self.webpackChunkagenda_futbol||[]).push([[913],{3913:(P,d,i)=>{i.r(d),i.d(d,{PublicModule:()=>H});var r=i(6895),l=i(9008),e=i(1571);let m=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-main"]],decls:1,vars:0,template:function(n,o){1&n&&e._UZ(0,"router-outlet")},dependencies:[l.lC]}),t})();var f=i(5439),u=i.n(f),g=i(5226),p=i.n(g),h=i(4004),v=i(262),b=i(9646),x=i(2340),C=i(529);let _=(()=>{class t{constructor(n){this.http=n}getAgenda(){return this.http.get(`${x.N.apiUrl}/agenda`).pipe((0,h.U)(o=>o.data),(0,v.K)(o=>(0,b.of)({status:!1,msg:o.error.msg})))}}return t.\u0275fac=function(n){return new(n||t)(e.LFG(C.eN))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),y=(()=>{class t{transform(n,o){return n.filter(c=>c.fecha==o)}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275pipe=e.Yjl({name:"filtrarDias",type:t,pure:!0}),t})();function F(t,a){if(1&t&&(e.TgZ(0,"div",24)(1,"small",25),e._uU(2),e.qZA()()),2&t){const n=a.$implicit;e.xp6(2),e.Oqu(n.nombre)}}function Z(t,a){if(1&t&&(e.TgZ(0,"div",19)(1,"div",20),e._uU(2),e.qZA(),e.TgZ(3,"div",21),e._uU(4),e.qZA(),e.TgZ(5,"div",22),e.YNc(6,F,3,1,"div",23),e.qZA()()),2&t){const n=a.$implicit,o=e.oxw(3);e.xp6(2),e.hij(" ",o.moment(n.fecha).format("HH:mm")," "),e.xp6(2),e.hij(" ",n.nombre," "),e.xp6(2),e.Q6J("ngForOf",n.canales)}}function M(t,a){if(1&t&&(e.TgZ(0,"div")(1,"div",17),e._uU(2),e.qZA(),e.YNc(3,Z,7,3,"div",18),e.qZA()),2&t){const n=a.$implicit,o=a.index;e.Gre("card mb-3 shadow mx-2 animate__animated animate__bounceInUp animate__delay-1s delay-",o>5?5:o,""),e.xp6(2),e.Oqu(n.nombre),e.xp6(1),e.Q6J("ngForOf",n.eventos)}}const s=function(t){return{"fa-spin":t}};function A(t,a){if(1&t){const n=e.EpF();e.TgZ(0,"div",2)(1,"div",3)(2,"div",4)(3,"button",5),e.NdJ("click",function(){e.CHM(n);const c=e.oxw();return e.KtG(c.cambiarFecha("-1"))}),e._UZ(4,"i",6),e.qZA()(),e.TgZ(5,"div",7),e._uU(6),e.ALo(7,"uppercase"),e.TgZ(8,"span",8),e.NdJ("click",function(){e.CHM(n);const c=e.oxw();return e.KtG(c.actualizar())}),e._UZ(9,"i",9),e.qZA()(),e.TgZ(10,"div",10)(11,"button",11),e.NdJ("click",function(){e.CHM(n);const c=e.oxw();return e.KtG(c.actualizar())}),e._UZ(12,"i",12),e.qZA()(),e.TgZ(13,"div",13)(14,"button",14),e.NdJ("click",function(){e.CHM(n);const c=e.oxw();return e.KtG(c.cambiarFecha("+1"))}),e._UZ(15,"i",15),e.qZA()()(),e.YNc(16,M,4,5,"div",16),e.qZA()}if(2&t){const n=a.$implicit,o=e.oxw();e.xp6(3),e.Q6J("disabled",0==o.indiceFechaSel),e.xp6(3),e.hij(" ",e.lcZ(7,6,o.moment(n.fecha).format("dddd DD [de] MMMM"))," "),e.xp6(3),e.Q6J("ngClass",e.VKq(8,s,o.reload)),e.xp6(3),e.Q6J("ngClass",e.VKq(10,s,o.reload)),e.xp6(2),e.Q6J("disabled",o.indiceFechaSel==o.agenda.length-1),e.xp6(2),e.Q6J("ngForOf",n.torneos)}}const T=[{path:"",component:m,children:[{path:"home",component:(()=>{class t{constructor(n){this._agenda=n,this.moment=u(),this.agenda=[],this.reload=!1}ngOnInit(){this.obtenerAgenda()}notificacion(n){p().mixin({toast:!0,position:"top",showConfirmButton:!0,confirmButtonText:"Actualizar",timerProgressBar:!0}).fire({icon:"error",title:"\xa1Ocurri\xf3 un Error!",text:n}).then(c=>{c.isConfirmed&&this.obtenerAgenda()})}obtenerAgenda(){this._agenda.getAgenda().subscribe(n=>{console.log(n),!1!==n.status?(this.agenda=n,this.fechaSel=n[0].fecha,this.indiceFechaSel=0,this.reload=!1):this.notificacion(n.msg)})}cambiarFecha(n){"-1"==n?(this.indiceFechaSel--,this.fechaSel=this.agenda[this.indiceFechaSel].fecha):"+1"==n&&(this.indiceFechaSel++,this.fechaSel=this.agenda[this.indiceFechaSel].fecha)}actualizar(){this.reload=!0,this.obtenerAgenda()}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(_))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-home"]],decls:3,vars:4,consts:[[1,"row","g-0","d-flex","justify-content-center","clase"],["class","col-12 col-lg-10 col-xl-8",4,"ngFor","ngForOf"],[1,"col-12","col-lg-10","col-xl-8"],[1,"row","g-0","align-items-center","mb-3","-pt-2","bg-black","text-white","rounded-4","rounded-top-0","shadow"],[1,"col-3","col-md-2","order-0","order-md-0","d-grid"],[1,"btn","btn-primary","m-2","ms-3",3,"disabled","click"],[1,"fs-4","fa-duotone","fa-angles-left"],[1,"col-12","col-md-8","order-2","order-md-1","fs-3","fw-bold","text-center"],["role","button",1,"d-none","d-md-inline",3,"click"],[1,"fa-duotone","fa-rotate-right","fa-sm",3,"ngClass"],[1,"col-2","offset-2","d-grid","d-md-none"],[1,"btn","btn-secondary","m-2",3,"click"],[1,"fa-duotone","fa-rotate-right","fa-xl",3,"ngClass"],[1,"col-3","offset-2","col-md-2","offset-md-0","order-1","order-md-2","text-end","d-grid"],[1,"btn","btn-primary","m-2","me-3",3,"disabled","click"],[1,"fs-4","fa-duotone","fa-angles-right"],[3,"class",4,"ngFor","ngForOf"],[1,"card-header","fs-4","fw-bold","border-bottom","border-2","bg-primary","bg-opacity-10","-text-white"],["class","row g-0 px-2 align-items-center border-bottom d-flex",4,"ngFor","ngForOf"],[1,"row","g-0","px-2","align-items-center","border-bottom","d-flex"],[1,"col-2","col-lg-1","pe-0","fw-bold","py-1"],[1,"col-8","col-lg-8"],[1,"col-2","col-lg-3","text-center","text-md-end"],["class","lh-1 mb-1",4,"ngFor","ngForOf"],[1,"lh-1","mb-1"],[1,"text-muted","canales"]],template:function(n,o){1&n&&(e.TgZ(0,"div",0),e.YNc(1,A,17,12,"div",1),e.ALo(2,"filtrarDias"),e.qZA()),2&n&&(e.xp6(1),e.Q6J("ngForOf",e.xi3(2,1,o.agenda,o.fechaSel)))},dependencies:[r.mk,r.sg,r.gd,y],styles:[".canales[_ngcontent-%COMP%]{font-size:.75rem}.clase[_ngcontent-%COMP%]{max-height:100vh}.delay-0[_ngcontent-%COMP%]{--animate-delay: 0s}.delay-1[_ngcontent-%COMP%]{--animate-delay: .25s}.delay-2[_ngcontent-%COMP%]{--animate-delay: .5s}.delay-3[_ngcontent-%COMP%]{--animate-delay: .75s}.delay-4[_ngcontent-%COMP%]{--animate-delay: 1s}.delay-5[_ngcontent-%COMP%]{--animate-delay: 1.25s}"]}),t})()},{path:"**",redirectTo:"/home"}]}];let O=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[l.Bz.forChild(T),l.Bz]}),t})(),H=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[r.ez,O]}),t})()}}]);