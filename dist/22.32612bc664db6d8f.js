"use strict";(self.webpackChunkmantis_free_version=self.webpackChunkmantis_free_version||[]).push([[22],{8022:(v,a,s)=>{s.r(a),s.d(a,{DashboardComponent:()=>p});var i=s(177),c=s(1626),l=s(34),d=s(904),t=s(3953),u=s(5794);const g=n=>["/edit",n];function m(n,h){if(1&n&&t.nrm(0,"img",13),2&n){const e=t.XpG().$implicit;t.Y8G("src","data:image/png;base64,"+e.image,t.B4B)}}function E(n,h){if(1&n){const e=t.RV6();t.j41(0,"tr")(1,"td")(2,"a",6),t.EFF(3),t.k0s()(),t.j41(4,"td"),t.DNE(5,m,1,1,"img",7),t.k0s(),t.j41(6,"td"),t.EFF(7),t.k0s(),t.j41(8,"td"),t.EFF(9),t.k0s(),t.j41(10,"td"),t.EFF(11),t.k0s(),t.j41(12,"td"),t.EFF(13),t.k0s(),t.j41(14,"td"),t.EFF(15),t.k0s(),t.j41(16,"td")(17,"button",8),t.qSk(),t.j41(18,"svg",9),t.nrm(19,"path",10),t.k0s()(),t.joV(),t.j41(20,"button",11),t.bIt("click",function(){const o=t.eBV(e).$implicit,_=t.XpG();return t.Njj(_.delete(o.id))}),t.qSk(),t.j41(21,"svg",9),t.nrm(22,"path",12),t.k0s()()()()}if(2&n){const e=h.$implicit;t.R7$(3),t.JRh(e.id),t.R7$(2),t.Y8G("ngIf",e.image),t.R7$(2),t.JRh(e.email),t.R7$(2),t.JRh(e.nom),t.R7$(2),t.JRh(e.role),t.R7$(2),t.JRh(e.num_tel),t.R7$(2),t.JRh(e.manager),t.R7$(2),t.Y8G("routerLink",t.eq3(8,g,e.id))}}let p=(()=>{class n{constructor(e,r){this.service=e,this.toastr=r,this.recentUsers=[]}ngOnInit(){this.service.getUsersAdmin().subscribe(e=>{this.recentUsers=e,console.log(this.recentUsers)},e=>{console.error("Error fetching users:",e)})}delete(e){const r=localStorage.getItem("user");JSON.parse(r).id==e?this.toastr.error("You can't delete the current user."):this.service.deleteUser(e).subscribe(_=>{window.location.reload()})}static#t=this.\u0275fac=function(r){return new(r||n)(t.rXU(d.N),t.rXU(u.tw))};static#e=this.\u0275cmp=t.VBU({type:n,selectors:[["app-dashboard"]],standalone:!0,features:[t.Jv_([d.N,c.Qq]),t.aNF],decls:25,vars:1,consts:[[1,"row","justify-content-center"],[1,"col-md-12","col-xl-10"],[1,"card","tbl-card",2,"min-height","500px"],[1,"table-responsive"],[1,"table","table-hover","mb-0"],[4,"ngFor","ngForOf"],["href","javascript:",1,"text-muted"],["alt","user-image","class","user-avatar me-2",3,"src",4,"ngIf"],[1,"btn-icon","edit",3,"routerLink"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 24 24","width","16","height","16"],["d","M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1.003 1.003 0 0 0 0-1.41l-2.34-2.34a1.003 1.003 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"],[1,"btn-icon","delete",3,"click"],["d","M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6v12zM16.5 4l-1-1h-7l-1 1H5v2h14V4z"],["alt","user-image",1,"user-avatar","me-2",3,"src"]],template:function(r,o){1&r&&(t.j41(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"table",4)(5,"thead")(6,"tr")(7,"th"),t.EFF(8,"ID"),t.k0s(),t.j41(9,"th"),t.EFF(10,"Image"),t.k0s(),t.j41(11,"th"),t.EFF(12,"E-mail"),t.k0s(),t.j41(13,"th"),t.EFF(14,"Nom et Pr\xe9nom"),t.k0s(),t.j41(15,"th"),t.EFF(16,"R\xf4le"),t.k0s(),t.j41(17,"th"),t.EFF(18,"Num\xe9ro de T\xe9l\xe9phone"),t.k0s(),t.j41(19,"th"),t.EFF(20,"Manager"),t.k0s(),t.j41(21,"th"),t.EFF(22,"Action"),t.k0s()()(),t.j41(23,"tbody"),t.DNE(24,E,23,10,"tr",5),t.k0s()()()()()()),2&r&&(t.R7$(24),t.Y8G("ngForOf",o.recentUsers))},dependencies:[c.q1,i.MD,i.Sq,i.bT,l.iI,l.Wk],styles:['@charset "UTF-8";.btn-icon[_ngcontent-%COMP%]{width:32px;height:32px;border:none;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;cursor:pointer;background-color:#f0f0f0;transition:background-color .3s}.btn-icon[_ngcontent-%COMP%]:hover{background-color:#e0e0e0}.btn-icon.edit[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:#007bff}.btn-icon.delete[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:#dc3545}.btn-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:16px;height:16px}.user-avatar[_ngcontent-%COMP%]{width:50px;height:50px;object-fit:cover;border-radius:50%}']})}return n})()}}]);