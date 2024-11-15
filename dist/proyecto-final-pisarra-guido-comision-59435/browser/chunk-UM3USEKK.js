import{b as me,k as Re}from"./chunk-W43C5WKI.js";import{Da as pe,Hc as z,I as ce,Ja as he,Ma as P,Oc as x,Pa as ye,Q as ae,Y as de,Z as le,a as f,b as y,ga as fe,ha as U,i as F,ka as m,l as oe,la as w,m as S,na as u,o as ie,pa as a,q as se,qa as R,ra as N,t as ue,vb as $,wa as j,x as v}from"./chunk-YTEZ3TT7.js";function V(e,r){let t=!r?.manualCleanup;t&&!r?.injector&&pe(V);let n=t?r?.injector?.get(P)??R(P):null,o=ot(r?.equal),i;r?.requireSync?i=$({kind:0},{equal:o}):i=$({kind:1,value:r?.initialValue},{equal:o});let s=e.subscribe({next:c=>i.set({kind:1,value:c}),error:c=>{if(r?.rejectErrors)throw c;i.set({kind:2,error:c})}});if(r?.requireSync&&i().kind===0)throw new U(601,!1);return n?.onDestroy(s.unsubscribe.bind(s)),x(()=>{let c=i();switch(c.kind){case 1:return c.value;case 2:throw c.error;case 0:throw new U(601,!1)}},{equal:r?.equal})}function ot(e=Object.is){return(r,t)=>r.kind===1&&t.kind===1&&e(r.value,t.value)}var B={};function Y(e,r){if(B[e]=(B[e]||0)+1,typeof r=="function")return q(e,(...n)=>y(f({},r(...n)),{type:e}));switch(r?r._as:"empty"){case"empty":return q(e,()=>({type:e}));case"props":return q(e,n=>y(f({},n),{type:e}));default:throw new Error("Unexpected config.")}}function k(){return{_as:"props",_p:void 0}}function q(e,r){return Object.defineProperty(r,"type",{value:e,writable:!1})}function st(e){return e.charAt(0).toUpperCase()+e.substring(1)}function ut(e){return e.charAt(0).toLowerCase()+e.substring(1)}function ke(e){let{source:r,events:t}=e;return Object.keys(t).reduce((n,o)=>y(f({},n),{[ct(o)]:Y(at(r,o),t[o])}),{})}function De(){return k()}function ct(e){return e.trim().split(" ").map((r,t)=>t===0?ut(r):st(r)).join("")}function at(e,r){return`[${e}] ${r}`}var Me="@ngrx/store/init",g=(()=>{class e extends S{constructor(){super({type:Me})}next(t){if(typeof t=="function")throw new TypeError(`
        Dispatch expected an object, instead it received a function.
        If you're using the createAction function, make sure to invoke the function
        before dispatching the action. For example, someAction should be someAction().`);if(typeof t>"u")throw new TypeError("Actions must be objects");if(typeof t.type>"u")throw new TypeError("Actions must have a type property");super.next(t)}complete(){}ngOnDestroy(){super.complete()}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275prov=m({token:e,factory:e.\u0275fac})}}return e})(),dt=[g],Ue=new u("@ngrx/store Internal Root Guard"),Se=new u("@ngrx/store Internal Initial State"),Q=new u("@ngrx/store Initial State"),Ne=new u("@ngrx/store Reducer Factory"),ve=new u("@ngrx/store Internal Reducer Factory Provider"),Pe=new u("@ngrx/store Initial Reducers"),L=new u("@ngrx/store Internal Initial Reducers"),ge=new u("@ngrx/store Store Features"),be=new u("@ngrx/store Internal Store Reducers"),K=new u("@ngrx/store Internal Feature Reducers"),Ee=new u("@ngrx/store Internal Feature Configs"),$e=new u("@ngrx/store Internal Store Features"),Ae=new u("@ngrx/store Internal Feature Reducers Token"),ze=new u("@ngrx/store Feature Reducers"),Ie=new u("@ngrx/store User Provided Meta Reducers"),T=new u("@ngrx/store Meta Reducers"),Fe=new u("@ngrx/store Internal Resolved Meta Reducers"),we=new u("@ngrx/store User Runtime Checks Config"),je=new u("@ngrx/store Internal User Runtime Checks Config"),E=new u("@ngrx/store Internal Runtime Checks"),W=new u("@ngrx/store Check if Action types are unique"),Rn=new u("@ngrx/store Root Store Provider"),Sn=new u("@ngrx/store Feature State Provider");function J(e,r={}){let t=Object.keys(e),n={};for(let i=0;i<t.length;i++){let s=t[i];typeof e[s]=="function"&&(n[s]=e[s])}let o=Object.keys(n);return function(s,c){s=s===void 0?r:s;let l=!1,p={};for(let d=0;d<o.length;d++){let h=o[d],rt=n[h],ne=s[h],re=rt(ne,c);p[h]=re,l=l||re!==ne}return l?p:s}}function lt(e,r){return Object.keys(e).filter(t=>t!==r).reduce((t,n)=>Object.assign(t,{[n]:e[n]}),{})}function Ve(...e){return function(r){if(e.length===0)return r;let t=e[e.length-1];return e.slice(0,-1).reduceRight((o,i)=>i(o),t(r))}}function qe(e,r){return Array.isArray(r)&&r.length>0&&(e=Ve.apply(null,[...r,e])),(t,n)=>{let o=e(t);return(i,s)=>(i=i===void 0?n:i,o(i,s))}}function ft(e){let r=Array.isArray(e)&&e.length>0?Ve(...e):t=>t;return(t,n)=>(t=r(t),(o,i)=>(o=o===void 0?n:o,t(o,i)))}var A=class extends F{},O=class extends g{},pt="@ngrx/store/update-reducers",C=(()=>{class e extends S{get currentReducers(){return this.reducers}constructor(t,n,o,i){super(i(o,n)),this.dispatcher=t,this.initialState=n,this.reducers=o,this.reducerFactory=i}addFeature(t){this.addFeatures([t])}addFeatures(t){let n=t.reduce((o,{reducers:i,reducerFactory:s,metaReducers:c,initialState:l,key:p})=>{let d=typeof i=="function"?ft(c)(i,l):qe(s,c)(i,l);return o[p]=d,o},{});this.addReducers(n)}removeFeature(t){this.removeFeatures([t])}removeFeatures(t){this.removeReducers(t.map(n=>n.key))}addReducer(t,n){this.addReducers({[t]:n})}addReducers(t){this.reducers=f(f({},this.reducers),t),this.updateReducers(Object.keys(t))}removeReducer(t){this.removeReducers([t])}removeReducers(t){t.forEach(n=>{this.reducers=lt(this.reducers,n)}),this.updateReducers(t)}updateReducers(t){this.next(this.reducerFactory(this.reducers,this.initialState)),this.dispatcher.next({type:pt,features:t})}ngOnDestroy(){this.complete()}static{this.\u0275fac=function(n){return new(n||e)(a(O),a(Q),a(Pe),a(Ne))}}static{this.\u0275prov=m({token:e,factory:e.\u0275fac})}}return e})(),ht=[C,{provide:A,useExisting:C},{provide:O,useExisting:g}],X=(()=>{class e extends oe{ngOnDestroy(){this.complete()}static{this.\u0275fac=(()=>{let t;return function(o){return(t||(t=he(e)))(o||e)}})()}static{this.\u0275prov=m({token:e,factory:e.\u0275fac})}}return e})(),yt=[X],_=class extends F{},xe=(()=>{class e extends S{static{this.INIT=Me}constructor(t,n,o,i){super(i);let c=t.pipe(se(ie)).pipe(fe(n)),l={state:i},p=c.pipe(le(mt,l));this.stateSubscription=p.subscribe(({state:d,action:h})=>{this.next(d),o.next(h)}),this.state=V(this,{manualCleanup:!0,requireSync:!0})}ngOnDestroy(){this.stateSubscription.unsubscribe(),this.complete()}static{this.\u0275fac=function(n){return new(n||e)(a(g),a(A),a(X),a(Q))}}static{this.\u0275prov=m({token:e,factory:e.\u0275fac})}}return e})();function mt(e={state:void 0},[r,t]){let{state:n}=e;return{state:t(n,r),action:r}}var Rt=[xe,{provide:_,useExisting:xe}],I=(()=>{class e extends F{constructor(t,n,o){super(),this.actionsObserver=n,this.reducerManager=o,this.source=t,this.state=t.state}select(t,...n){return vt.call(null,t,...n)(this)}selectSignal(t,n){return x(()=>t(this.state()),n)}lift(t){let n=new e(this,this.actionsObserver,this.reducerManager);return n.operator=t,n}dispatch(t){this.actionsObserver.next(t)}next(t){this.actionsObserver.next(t)}error(t){this.actionsObserver.error(t)}complete(){this.actionsObserver.complete()}addReducer(t,n){this.reducerManager.addReducer(t,n)}removeReducer(t){this.reducerManager.removeReducer(t)}static{this.\u0275fac=function(n){return new(n||e)(a(_),a(g),a(C))}}static{this.\u0275prov=m({token:e,factory:e.\u0275fac})}}return e})(),St=[I];function vt(e,r,...t){return function(o){let i;if(typeof e=="string"){let s=[r,...t].filter(Boolean);i=o.pipe(de(e,...s))}else if(typeof e=="function")i=o.pipe(v(s=>e(s,r)));else throw new TypeError(`Unexpected type '${typeof e}' in select operator, expected 'string' or 'function'`);return i.pipe(ae())}}var ee="https://ngrx.io/guide/store/configuration/runtime-checks";function Te(e){return e===void 0}function Oe(e){return e===null}function Le(e){return Array.isArray(e)}function gt(e){return typeof e=="string"}function bt(e){return typeof e=="boolean"}function Et(e){return typeof e=="number"}function Ke(e){return typeof e=="object"&&e!==null}function At(e){return Ke(e)&&!Le(e)}function It(e){if(!At(e))return!1;let r=Object.getPrototypeOf(e);return r===Object.prototype||r===null}function G(e){return typeof e=="function"}function Ft(e){return G(e)&&e.hasOwnProperty("\u0275cmp")}function wt(e,r){return Object.prototype.hasOwnProperty.call(e,r)}var jt=!1;function xt(){return jt}function Ce(e,r){return e===r}function Tt(e,r,t){for(let n=0;n<e.length;n++)if(!t(e[n],r[n]))return!0;return!1}function Be(e,r=Ce,t=Ce){let n=null,o=null,i;function s(){n=null,o=null}function c(d=void 0){i={result:d}}function l(){i=void 0}function p(){if(i!==void 0)return i.result;if(!n)return o=e.apply(null,arguments),n=arguments,o;if(!Tt(arguments,n,r))return o;let d=e.apply(null,arguments);return n=arguments,t(o,d)?o:(o=d,d)}return{memoized:p,reset:s,setResult:c,clearResult:l}}function D(...e){return Ct(Be)(...e)}function Ot(e,r,t,n){if(t===void 0){let i=r.map(s=>s(e));return n.memoized.apply(null,i)}let o=r.map(i=>i(e,t));return n.memoized.apply(null,[...o,t])}function Ct(e,r={stateFn:Ot}){return function(...t){let n=t;if(Array.isArray(n[0])){let[d,...h]=n;n=[...d,...h]}else n.length===1&&_t(n[0])&&(n=kt(n[0]));let o=n.slice(0,n.length-1),i=n[n.length-1],s=o.filter(d=>d.release&&typeof d.release=="function"),c=e(function(...d){return i.apply(null,d)}),l=Be(function(d,h){return r.stateFn.apply(null,[d,o,h,c])});function p(){l.reset(),c.reset(),s.forEach(d=>d.release())}return Object.assign(l.memoized,{release:p,projector:c.memoized,setResult:l.setResult,clearResult:l.clearResult})}}function Ge(e){return D(r=>{let t=r[e];return!xt()&&z()&&!(e in r)&&console.warn(`@ngrx/store: The feature name "${e}" does not exist in the state, therefore createFeatureSelector cannot access it.  Be sure it is imported in a loaded module using StoreModule.forRoot('${e}', ...) or StoreModule.forFeature('${e}', ...).  If the default state is intended to be undefined, as is the case with router state, this development-only warning message can be ignored.`),t},r=>r)}function _t(e){return!!e&&typeof e=="object"&&Object.values(e).every(r=>typeof r=="function")}function kt(e){let r=Object.values(e),t=Object.keys(e),n=(...o)=>t.reduce((i,s,c)=>y(f({},i),{[s]:o[c]}),{});return[...r,n]}function Dt(e){return e instanceof u?R(e):e}function Mt(e,r){return r.map((t,n)=>{if(e[n]instanceof u){let o=R(e[n]);return{key:t.key,reducerFactory:o.reducerFactory?o.reducerFactory:J,metaReducers:o.metaReducers?o.metaReducers:[],initialState:o.initialState}}return t})}function Ut(e){return e.map(r=>r instanceof u?R(r):r)}function He(e){return typeof e=="function"?e():e}function Nt(e,r){return e.concat(r)}function Pt(){if(R(I,{optional:!0,skipSelf:!0}))throw new TypeError("The root Store has been provided more than once. Feature modules should provide feature states instead.");return"guarded"}function $t(e,r){return function(t,n){let o=r.action(n)?H(n):n,i=e(t,o);return r.state()?H(i):i}}function H(e){Object.freeze(e);let r=G(e);return Object.getOwnPropertyNames(e).forEach(t=>{if(!t.startsWith("\u0275")&&wt(e,t)&&(!r||t!=="caller"&&t!=="callee"&&t!=="arguments")){let n=e[t];(Ke(n)||G(n))&&!Object.isFrozen(n)&&H(n)}}),e}function zt(e,r){return function(t,n){if(r.action(n)){let i=Z(n);_e(i,"action")}let o=e(t,n);if(r.state()){let i=Z(o);_e(i,"state")}return o}}function Z(e,r=[]){return(Te(e)||Oe(e))&&r.length===0?{path:["root"],value:e}:Object.keys(e).reduce((n,o)=>{if(n)return n;let i=e[o];return Ft(i)?n:Te(i)||Oe(i)||Et(i)||bt(i)||gt(i)||Le(i)?!1:It(i)?Z(i,[...r,o]):{path:[...r,o],value:i}},!1)}function _e(e,r){if(e===!1)return;let t=e.path.join("."),n=new Error(`Detected unserializable ${r} at "${t}". ${ee}#strict${r}serializability`);throw n.value=e.value,n.unserializablePath=t,n}function Vt(e,r){return function(t,n){if(r.action(n)&&!ye.isInAngularZone())throw new Error(`Action '${n.type}' running outside NgZone. ${ee}#strictactionwithinngzone`);return e(t,n)}}function qt(e){return z()?f({strictStateSerializability:!1,strictActionSerializability:!1,strictStateImmutability:!0,strictActionImmutability:!0,strictActionWithinNgZone:!1,strictActionTypeUniqueness:!1},e):{strictStateSerializability:!1,strictActionSerializability:!1,strictStateImmutability:!1,strictActionImmutability:!1,strictActionWithinNgZone:!1,strictActionTypeUniqueness:!1}}function Lt({strictActionSerializability:e,strictStateSerializability:r}){return t=>e||r?zt(t,{action:n=>e&&!te(n),state:()=>r}):t}function Kt({strictActionImmutability:e,strictStateImmutability:r}){return t=>e||r?$t(t,{action:n=>e&&!te(n),state:()=>r}):t}function te(e){return e.type.startsWith("@ngrx")}function Bt({strictActionWithinNgZone:e}){return r=>e?Vt(r,{action:t=>e&&!te(t)}):r}function Gt(e){return[{provide:je,useValue:e},{provide:we,useFactory:Ht,deps:[je]},{provide:E,deps:[we],useFactory:qt},{provide:T,multi:!0,deps:[E],useFactory:Kt},{provide:T,multi:!0,deps:[E],useFactory:Lt},{provide:T,multi:!0,deps:[E],useFactory:Bt}]}function Ze(){return[{provide:W,multi:!0,deps:[E],useFactory:Zt}]}function Ht(e){return e}function Zt(e){if(!e.strictActionTypeUniqueness)return;let r=Object.entries(B).filter(([,t])=>t>1).map(([t])=>t);if(r.length)throw new Error(`Action types are registered more than once, ${r.map(t=>`"${t}"`).join(", ")}. ${ee}#strictactiontypeuniqueness`)}function Yt(e={},r={}){return[{provide:Ue,useFactory:Pt},{provide:Se,useValue:r.initialState},{provide:Q,useFactory:He,deps:[Se]},{provide:L,useValue:e},{provide:be,useExisting:e instanceof u?e:L},{provide:Pe,deps:[L,[new N(be)]],useFactory:Dt},{provide:Ie,useValue:r.metaReducers?r.metaReducers:[]},{provide:Fe,deps:[T,Ie],useFactory:Nt},{provide:ve,useValue:r.reducerFactory?r.reducerFactory:J},{provide:Ne,deps:[ve,Fe],useFactory:qe},dt,ht,yt,Rt,St,Gt(r.runtimeChecks),Ze()]}function Qt(e,r,t={}){return[{provide:Ee,multi:!0,useValue:e instanceof Object?{}:t},{provide:ge,multi:!0,useValue:{key:e instanceof Object?e.name:e,reducerFactory:!(t instanceof u)&&t.reducerFactory?t.reducerFactory:J,metaReducers:!(t instanceof u)&&t.metaReducers?t.metaReducers:[],initialState:!(t instanceof u)&&t.initialState?t.initialState:void 0}},{provide:$e,deps:[Ee,ge],useFactory:Mt},{provide:K,multi:!0,useValue:e instanceof Object?e.reducer:r},{provide:Ae,multi:!0,useExisting:r instanceof u?r:K},{provide:ze,multi:!0,deps:[K,[new N(Ae)]],useFactory:Ut},Ze()]}var Ye=(()=>{class e{constructor(t,n,o,i,s,c){}static{this.\u0275fac=function(n){return new(n||e)(a(g),a(A),a(X),a(I),a(Ue,8),a(W,8))}}static{this.\u0275mod=j({type:e})}static{this.\u0275inj=w({})}}return e})(),Wt=(()=>{class e{constructor(t,n,o,i,s){this.features=t,this.featureReducers=n,this.reducerManager=o;let c=t.map((l,p)=>{let h=n.shift()[p];return y(f({},l),{reducers:h,initialState:He(l.initialState)})});o.addFeatures(c)}ngOnDestroy(){this.reducerManager.removeFeatures(this.features)}static{this.\u0275fac=function(n){return new(n||e)(a($e),a(ze),a(C),a(Ye),a(W,8))}}static{this.\u0275mod=j({type:e})}static{this.\u0275inj=w({})}}return e})(),vn=(()=>{class e{static forRoot(t,n){return{ngModule:Ye,providers:[...Yt(t,n)]}}static forFeature(t,n,o={}){return{ngModule:Wt,providers:[...Qt(t,n,o)]}}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275mod=j({type:e})}static{this.\u0275inj=w({})}}return e})();function M(...e){let r=e.pop(),t=e.map(n=>n.type);return{reducer:r,types:t}}function Qe(e,...r){let t=new Map;for(let n of r)for(let o of n.types){let i=t.get(o);if(i){let s=(c,l)=>n.reducer(i(c,l),l);t.set(o,s)}else t.set(o,n.reducer)}return function(n=e,o){let i=t.get(o.type);return i?i(n,o):n}}var b=ke({source:"Auth",events:{"set Authenticated Student":k(),"Unset Authenticated Student":De()}}),We=Y("[UI] Set Page Title",k());var Je="auth",Xt={authenticatedStudent:null,pageTitle:""},Fn=Qe(Xt,M(b.setAuthenticatedStudent,(e,r)=>y(f({},e),{authenticatedStudent:r.student})),M(b.unsetAuthenticatedStudent,e=>y(f({},e),{authenticatedStudent:null})),M(We,(e,{title:r})=>y(f({},e),{pageTitle:r})));var Xe={baseURL:"http://localhost:3000"};var et=Ge(Je),tt=D(et,e=>e.authenticatedStudent),_n=D(et,e=>e.pageTitle);var nt=class e{constructor(r,t,n){this.router=r;this._httpClient=t;this.store=n;this.authStudent$=this.store.select(tt)}_authStudent$=new S(null);authStudent$=this._authStudent$.asObservable();baseURL=Xe.baseURL;login(r){return this._httpClient.get(`${this.baseURL}/students?email=${r.email}&password=${r.password}`).pipe(v(t=>{let n=this.handleAuthentication(t);if(n)return n;throw new Error("Los datos son inv\xE1lidos")}),ce(()=>ue(()=>new Error("Los datos son inv\xE1lidos"))))}handleAuthentication(r){if(r.length>0){let t=r[0];return this.store.dispatch(b.setAuthenticatedStudent({student:t})),localStorage.setItem("token",t.token),t}return null}verifyToken(){return this._httpClient.get(`${this.baseURL}/students?token=${localStorage.getItem("token")}`).pipe(v(r=>!!this.handleAuthentication(r)))}getUserRole(){return this.authStudent$.pipe(v(r=>r?.role||"user"))}logout(){this.store.dispatch(b.unsetAuthenticatedStudent()),this._authStudent$.next(null),localStorage.removeItem("token"),this.router.navigate(["auth","login"])}static \u0275fac=function(t){return new(t||e)(a(Re),a(me),a(I))};static \u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"})};export{V as a,Y as b,Me as c,g as d,Q as e,A as f,O as g,pt as h,X as i,_ as j,I as k,Ye as l,Wt as m,vn as n,We as o,Je as p,Fn as q,_n as r,Xe as s,nt as t};
