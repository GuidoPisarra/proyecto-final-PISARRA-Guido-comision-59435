import{a as R,b as bt,c as Mt,d as wt,e as Et}from"./chunk-BGYGAQCJ.js";import{a as xt,b as Ut}from"./chunk-IXRLILUS.js";import{a as tt,b as et,d as it,e as nt,g as ct,h as ut,i as pt,j as ft,k as _t,l as gt,m as St,n as ht,o as Ct,p as vt,q as Dt}from"./chunk-PGJU2VVE.js";import"./chunk-JNFBHA52.js";import{t as $}from"./chunk-UM3USEKK.js";import{h as ot,i as at,j as rt,k as mt,l as st,m as lt,n as dt}from"./chunk-BUIY3QUJ.js";import{Aa as X,Ba as Y,Ca as Z,i as G,k as H,m as N,ma as P,na as q,oa as O,qa as z,sa as J,ta as F,va as K,wa as Q,za as W}from"./chunk-W43C5WKI.js";import{Cb as c,Fa as D,Ga as x,Hb as d,Pb as o,Qb as n,Rb as u,Sb as g,Tb as S,Vb as b,Yb as p,_b as f,a as B,b as V,cd as k,fd as L,gd as j,ic as a,jc as I,kb as m,kc as M,la as h,lb as s,rc as A,tc as y,va as C,wa as v}from"./chunk-YTEZ3TT7.js";var w=class e{constructor(i,t,r){this.matDialogRef=i;this.formBuilder=t;this.data=r;this.studentForm=this.formBuilder.group({firstName:[null,[F.required,R]],lastName:[null,[F.required,R]],email:[null,[bt]]}),this.patchFormValue()}studentForm;get isEditing(){return!!this.data?.editingStudent}patchFormValue(){this.data?.editingStudent&&this.studentForm.patchValue(this.data.editingStudent)}onSave(){this.studentForm.invalid?this.studentForm.markAllAsTouched():this.matDialogRef.close(V(B({},this.studentForm.value),{id:this.isEditing?this.data.editingStudent.id:xt(4),createdAt:this.isEditing?this.data.editingStudent.createdAt:new Date}))}get firstName(){return this.studentForm.get("firstName")}get lastName(){return this.studentForm.get("lastName")}get email(){return this.studentForm.get("email")}static \u0275fac=function(t){return new(t||e)(s(ot),s(Z),s(at))};static \u0275cmp=C({type:e,selectors:[["app-users-dialog"]],decls:28,vars:2,consts:[["mat-dialog-title",""],["mat-dialog-content",""],[3,"formGroup"],[1,"row"],[1,"col-6"],[1,"example-form-field","w-100"],["formControlName","firstName","matInput","","type","text"],["formControlName","lastName","matInput","","type","text"],[1,"col-12"],["formControlName","email","matInput","","type","email"],["mat-dialog-actions",""],["mat-dialog-close","","mat-button",""],["mat-button","",3,"click"]],template:function(t,r){t&1&&(o(0,"h1",0),a(1),n(),o(2,"div",1)(3,"form",2)(4,"div",3)(5,"div",4)(6,"mat-form-field",5)(7,"mat-label"),a(8,"Nombre"),n(),u(9,"input",6)(10,"mat-error"),n()(),o(11,"div",4)(12,"mat-form-field",5)(13,"mat-label"),a(14,"Apellido"),n(),u(15,"input",7)(16,"mat-error"),n()(),o(17,"div",8)(18,"mat-form-field",5)(19,"mat-label"),a(20,"Email"),n(),u(21,"input",9)(22,"mat-error"),n()()()()(),o(23,"div",10)(24,"button",11),a(25,"Cancelar"),n(),o(26,"button",12),p("click",function(){return r.onSave()}),a(27,"Guardar"),n()()),t&2&&(m(),M(" ",r.data!=null&&r.data.editingStudent?"Editando":"Creando",` usuario
`),m(2),d("formGroup",r.studentForm))},dependencies:[W,J,K,Q,X,Y,P,it,tt,et,nt,mt,st,dt,lt]})};function Rt(e,i){e&1&&(o(0,"th",12),a(1,"Nombre"),n())}function Tt(e,i){if(e&1&&(o(0,"td",13),a(1),A(2,"studentFullName"),n()),e&2){let t=i.$implicit;m(),M("",y(2,1,t,"uppercase")," ")}}function Bt(e,i){e&1&&(o(0,"th",12),a(1,"Email"),n())}function Vt(e,i){if(e&1&&(o(0,"td",14),a(1),n()),e&2){let t=i.$implicit;m(),I(t.email)}}function kt(e,i){e&1&&(o(0,"th",12),a(1,"Creacion"),n())}function Lt(e,i){if(e&1&&(o(0,"td",14),a(1),A(2,"date"),n()),e&2){let t=i.$implicit;m(),I(y(2,1,t.createdAt,"dd/MM/yyyy"))}}function jt(e,i){e&1&&(o(0,"th",12),a(1,"Acciones"),n())}function Gt(e,i){if(e&1){let t=b();o(0,"button",15),p("click",function(){D(t);let l=f().$implicit,_=f();return x(_.openModal(l))}),o(1,"mat-icon"),a(2,"edit"),n()()}}function Ht(e,i){if(e&1){let t=b();o(0,"button",15),p("click",function(){D(t);let l=f().$implicit,_=f();return x(_.onDelete(l.id))}),o(1,"mat-icon"),a(2,"delete"),n()()}}function $t(e,i){if(e&1){let t=b();o(0,"td",14)(1,"button",15),p("click",function(){let l=D(t).$implicit,_=f();return x(_.viewDetails(l))}),o(2,"mat-icon"),a(3,"visibility"),n()(),c(4,Gt,3,0,"button",16)(5,Ht,3,0,"button",16),n()}if(e&2){let t=f();m(4),d("ngIf",t.isAdmin),m(),d("ngIf",t.isAdmin)}}function Pt(e,i){e&1&&u(0,"tr",17)}function qt(e,i){e&1&&u(0,"tr",18)}var E=class e{constructor(i,t,r,l,_,zt){this.matDialog=i;this._studentService=t;this._alertService=r;this._authService=l;this.router=_;this.activatedRoute=zt;this._authService.getUserRole().subscribe(At=>{this.isAdmin=At==="admin"})}displayedColumns=["name","email","createdAt","actions"];dataSource=[];isLoading=!1;isAdmin=!1;ngOnInit(){this.loadStudents(),this._alertService.subscribeToAlerts()}loadStudents(){this.isLoading=!0,this._studentService.getStudents().subscribe({next:i=>{this.dataSource=i},error:()=>{this.isLoading=!1},complete:()=>{this.isLoading=!1}})}addStudent(i){this.isLoading=!0,i.role="user",this._studentService.addStudent(i).subscribe({next:t=>{this.dataSource=[...this.dataSource,t]},error:()=>{this.isLoading=!1},complete:()=>{this.isLoading=!1}})}onDelete(i){this._alertService.showAlert({title:"\xA1Advertencia!",text:"\xBFEst\xE1s seguro de eliminar este estudiante?",icon:"warning",showCancelButton:!0,confirmButtonText:"S\xED, eliminar",cancelButtonText:"Cancelar",customClass:{confirmButton:"swal2-confirm-btn",cancelButton:"swal2-cancel-btn"}}).then(t=>{t.isConfirmed&&(this.isLoading=!0,this._studentService.deleteStudentById(i).subscribe({next:r=>{this.dataSource=r},error:()=>{this.isLoading=!1},complete:()=>{this.isLoading=!1}}))})}openModal(i){this.matDialog.open(w,{data:{editingStudent:i}}).afterClosed().subscribe({next:t=>{t&&(i?this.handleUpdate(i.id.toString(),t):this.addStudent(t))}})}handleUpdate(i,t){this.isLoading=!0,this._studentService.updateStudentById(i,t).subscribe({next:r=>{this.dataSource=r},error:r=>{this.isLoading=!1},complete:()=>{this.isLoading=!1}})}viewDetails(i){let t=this.matDialog.open(wt,{width:"500px",data:i})}static \u0275fac=function(t){return new(t||e)(s(rt),s(Et),s(Ut),s($),s(H),s(G))};static \u0275cmp=C({type:e,selectors:[["app-users"]],decls:22,vars:3,consts:[[1,"container"],["mat-fab","","extended","",1,"btn-crear-usuario",3,"click"],["mat-table","",1,"mat-elevation-z10",3,"dataSource"],["matColumnDef","name"],["mat-header-cell","",4,"matHeaderCellDef"],["color","red","app-hightlight","","mat-cell","",4,"matCellDef"],["matColumnDef","email"],["mat-cell","",4,"matCellDef"],["matColumnDef","createdAt"],["matColumnDef","actions"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["color","red","app-hightlight","","mat-cell",""],["mat-cell",""],["mat-icon-button","",3,"click"],["mat-icon-button","",3,"click",4,"ngIf"],["mat-header-row",""],["mat-row",""]],template:function(t,r){t&1&&(o(0,"div",0)(1,"h2"),a(2,"Usuarios"),n(),o(3,"button",1),p("click",function(){return r.openModal()}),o(4,"mat-icon"),a(5,"add"),n(),a(6," Crear usuario "),n(),o(7,"table",2),g(8,3),c(9,Rt,2,0,"th",4)(10,Tt,3,4,"td",5),S(),g(11,6),c(12,Bt,2,0,"th",4)(13,Vt,2,1,"td",7),S(),g(14,8),c(15,kt,2,0,"th",4)(16,Lt,3,4,"td",7),S(),g(17,9),c(18,jt,2,0,"th",4)(19,$t,6,2,"td",7),S(),c(20,Pt,1,0,"tr",10)(21,qt,1,0,"tr",11),n()()),t&2&&(m(7),d("dataSource",r.dataSource),m(13),d("matHeaderRowDef",r.displayedColumns),m(),d("matRowDefColumns",r.displayedColumns))},dependencies:[k,O,q,z,ct,pt,St,ft,ut,ht,_t,gt,Ct,vt,L,Mt]})};var Ot=[{path:"",component:E}],U=class e{static \u0275fac=function(t){return new(t||e)};static \u0275mod=v({type:e});static \u0275inj=h({imports:[N.forChild(Ot),N]})};var It=class e{static \u0275fac=function(t){return new(t||e)};static \u0275mod=v({type:e});static \u0275inj=h({imports:[j,U,Dt]})};export{It as UsersModule};