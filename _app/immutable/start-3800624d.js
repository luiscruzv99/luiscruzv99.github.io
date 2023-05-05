import{S as Ye,i as We,s as Xe,a as Ze,e as F,c as Qe,b as z,g as ce,t as J,d as fe,f as G,h as K,j as xe,o as ve,k as et,l as tt,m as nt,n as we,p as B,q as rt,r as at,u as ot,v as Y,w as W,x as Ie,y as X,z as Z,A as Ce}from"./chunks/index-2ce92430.js";import{g as Fe,f as Je,s as M,a as Ee,b as st,i as it}from"./chunks/singletons-c61b72f2.js";import{_ as V}from"./chunks/preload-helper-aa6bc0ce.js";function lt(r,e){return r==="/"||e==="ignore"?r:e==="never"?r.endsWith("/")?r.slice(0,-1):r:e==="always"&&!r.endsWith("/")?r+"/":r}function ct(r){for(const e in r)r[e]=r[e].replace(/%23/g,"#").replace(/%3[Bb]/g,";").replace(/%2[Cc]/g,",").replace(/%2[Ff]/g,"/").replace(/%3[Ff]/g,"?").replace(/%3[Aa]/g,":").replace(/%40/g,"@").replace(/%26/g,"&").replace(/%3[Dd]/g,"=").replace(/%2[Bb]/g,"+").replace(/%24/g,"$");return r}const ft=["href","pathname","search","searchParams","toString","toJSON"];function ut(r,e){const t=new URL(r);for(const o of ft){let i=t[o];Object.defineProperty(t,o,{get(){return e(),i},enumerable:!0,configurable:!0})}return t[Symbol.for("nodejs.util.inspect.custom")]=(o,i,l)=>l(r,i),pt(t),t}function pt(r){Object.defineProperty(r,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}function dt(r){let e=5381;if(typeof r=="string"){let t=r.length;for(;t;)e=e*33^r.charCodeAt(--t)}else if(ArrayBuffer.isView(r)){const t=new Uint8Array(r.buffer,r.byteOffset,r.byteLength);let o=t.length;for(;o;)e=e*33^t[--o]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const ue=window.fetch;window.fetch=(r,e)=>{if((r instanceof Request?r.method:(e==null?void 0:e.method)||"GET")!=="GET"){const o=new URL(r instanceof Request?r.url:r.toString(),document.baseURI).href;le.delete(o)}return ue(r,e)};const le=new Map;function ht(r,e,t){let i=`script[data-sveltekit-fetched][data-url=${JSON.stringify(r instanceof Request?r.url:r)}]`;(t==null?void 0:t.body)&&(typeof t.body=="string"||ArrayBuffer.isView(t.body))&&(i+=`[data-hash="${dt(t.body)}"]`);const l=document.querySelector(i);if(l!=null&&l.textContent){const{body:n,...u}=JSON.parse(l.textContent),_=l.getAttribute("data-ttl");return _&&le.set(e,{body:n,init:u,ttl:1e3*Number(_)}),Promise.resolve(new Response(n,u))}return ue(r,t)}function mt(r,e){const t=le.get(r);if(t){if(performance.now()<t.ttl)return new Response(t.body,t.init);le.delete(r)}return ue(r,e)}const _t=/^(\.\.\.)?(\w+)(?:=(\w+))?$/;function gt(r){const e=[],t=[];let o=!0;return{pattern:r===""?/^\/$/:new RegExp(`^${r.split(/(?:\/|$)/).filter(yt).map((l,n,u)=>{const _=decodeURIComponent(l),h=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(_);if(h)return e.push(h[1]),t.push(h[2]),"(?:/(.*))?";const g=n===u.length-1;return _&&"/"+_.split(/\[(.+?)\]/).map((w,O)=>{if(O%2){const T=_t.exec(w);if(!T)throw new Error(`Invalid param: ${w}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,U,q,D]=T;return e.push(q),t.push(D),U?"(.*?)":"([^/]+?)"}return g&&w.includes(".")&&(o=!1),w.normalize().replace(/%5[Bb]/g,"[").replace(/%5[Dd]/g,"]").replace(/#/g,"%23").replace(/\?/g,"%3F").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join("")}).join("")}${o?"/?":""}$`),names:e,types:t}}function yt(r){return!/^\([^)]+\)$/.test(r)}function wt(r,e,t,o){const i={};for(let l=0;l<e.length;l+=1){const n=e[l],u=t[l],_=r[l+1]||"";if(u){const h=o[u];if(!h)throw new Error(`Missing "${u}" param matcher`);if(!h(_))return}i[n]=_}return i}function bt(r,e,t,o){const i=new Set(e);return Object.entries(t).map(([u,[_,h,g]])=>{const{pattern:w,names:O,types:T}=gt(u),U={id:u,exec:q=>{const D=w.exec(q);if(D)return wt(D,O,T,o)},errors:[1,...g||[]].map(q=>r[q]),layouts:[0,...h||[]].map(n),leaf:l(_)};return U.errors.length=U.layouts.length=Math.max(U.errors.length,U.layouts.length),U});function l(u){const _=u<0;return _&&(u=~u),[_,r[u]]}function n(u){return u===void 0?u:[i.has(u),r[u]]}}function vt(r){let e,t,o;var i=r[0][0];function l(n){return{props:{data:n[2],form:n[1]}}}return i&&(e=Y(i,l(r))),{c(){e&&W(e.$$.fragment),t=F()},l(n){e&&Ie(e.$$.fragment,n),t=F()},m(n,u){e&&X(e,n,u),z(n,t,u),o=!0},p(n,u){const _={};if(u&4&&(_.data=n[2]),u&2&&(_.form=n[1]),i!==(i=n[0][0])){if(e){ce();const h=e;J(h.$$.fragment,1,0,()=>{Z(h,1)}),fe()}i?(e=Y(i,l(n)),W(e.$$.fragment),G(e.$$.fragment,1),X(e,t.parentNode,t)):e=null}else i&&e.$set(_)},i(n){o||(e&&G(e.$$.fragment,n),o=!0)},o(n){e&&J(e.$$.fragment,n),o=!1},d(n){n&&K(t),e&&Z(e,n)}}}function Et(r){let e,t,o;var i=r[0][0];function l(n){return{props:{data:n[2],$$slots:{default:[kt]},$$scope:{ctx:n}}}}return i&&(e=Y(i,l(r))),{c(){e&&W(e.$$.fragment),t=F()},l(n){e&&Ie(e.$$.fragment,n),t=F()},m(n,u){e&&X(e,n,u),z(n,t,u),o=!0},p(n,u){const _={};if(u&4&&(_.data=n[2]),u&523&&(_.$$scope={dirty:u,ctx:n}),i!==(i=n[0][0])){if(e){ce();const h=e;J(h.$$.fragment,1,0,()=>{Z(h,1)}),fe()}i?(e=Y(i,l(n)),W(e.$$.fragment),G(e.$$.fragment,1),X(e,t.parentNode,t)):e=null}else i&&e.$set(_)},i(n){o||(e&&G(e.$$.fragment,n),o=!0)},o(n){e&&J(e.$$.fragment,n),o=!1},d(n){n&&K(t),e&&Z(e,n)}}}function kt(r){let e,t,o;var i=r[0][1];function l(n){return{props:{data:n[3],form:n[1]}}}return i&&(e=Y(i,l(r))),{c(){e&&W(e.$$.fragment),t=F()},l(n){e&&Ie(e.$$.fragment,n),t=F()},m(n,u){e&&X(e,n,u),z(n,t,u),o=!0},p(n,u){const _={};if(u&8&&(_.data=n[3]),u&2&&(_.form=n[1]),i!==(i=n[0][1])){if(e){ce();const h=e;J(h.$$.fragment,1,0,()=>{Z(h,1)}),fe()}i?(e=Y(i,l(n)),W(e.$$.fragment),G(e.$$.fragment,1),X(e,t.parentNode,t)):e=null}else i&&e.$set(_)},i(n){o||(e&&G(e.$$.fragment,n),o=!0)},o(n){e&&J(e.$$.fragment,n),o=!1},d(n){n&&K(t),e&&Z(e,n)}}}function Ge(r){let e,t=r[5]&&Ke(r);return{c(){e=et("div"),t&&t.c(),this.h()},l(o){e=tt(o,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var i=nt(e);t&&t.l(i),i.forEach(K),this.h()},h(){we(e,"id","svelte-announcer"),we(e,"aria-live","assertive"),we(e,"aria-atomic","true"),B(e,"position","absolute"),B(e,"left","0"),B(e,"top","0"),B(e,"clip","rect(0 0 0 0)"),B(e,"clip-path","inset(50%)"),B(e,"overflow","hidden"),B(e,"white-space","nowrap"),B(e,"width","1px"),B(e,"height","1px")},m(o,i){z(o,e,i),t&&t.m(e,null)},p(o,i){o[5]?t?t.p(o,i):(t=Ke(o),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},d(o){o&&K(e),t&&t.d()}}}function Ke(r){let e;return{c(){e=rt(r[6])},l(t){e=at(t,r[6])},m(t,o){z(t,e,o)},p(t,o){o&64&&ot(e,t[6])},d(t){t&&K(e)}}}function Rt(r){let e,t,o,i,l;const n=[Et,vt],u=[];function _(g,w){return g[0][1]?0:1}e=_(r),t=u[e]=n[e](r);let h=r[4]&&Ge(r);return{c(){t.c(),o=Ze(),h&&h.c(),i=F()},l(g){t.l(g),o=Qe(g),h&&h.l(g),i=F()},m(g,w){u[e].m(g,w),z(g,o,w),h&&h.m(g,w),z(g,i,w),l=!0},p(g,[w]){let O=e;e=_(g),e===O?u[e].p(g,w):(ce(),J(u[O],1,1,()=>{u[O]=null}),fe(),t=u[e],t?t.p(g,w):(t=u[e]=n[e](g),t.c()),G(t,1),t.m(o.parentNode,o)),g[4]?h?h.p(g,w):(h=Ge(g),h.c(),h.m(i.parentNode,i)):h&&(h.d(1),h=null)},i(g){l||(G(t),l=!0)},o(g){J(t),l=!1},d(g){u[e].d(g),g&&K(o),h&&h.d(g),g&&K(i)}}}function Ot(r,e,t){let{stores:o}=e,{page:i}=e,{components:l}=e,{form:n}=e,{data_0:u=null}=e,{data_1:_=null}=e;xe(o.page.notify);let h=!1,g=!1,w=null;return ve(()=>{const O=o.page.subscribe(()=>{h&&(t(5,g=!0),t(6,w=document.title||"untitled page"))});return t(4,h=!0),O}),r.$$set=O=>{"stores"in O&&t(7,o=O.stores),"page"in O&&t(8,i=O.page),"components"in O&&t(0,l=O.components),"form"in O&&t(1,n=O.form),"data_0"in O&&t(2,u=O.data_0),"data_1"in O&&t(3,_=O.data_1)},r.$$.update=()=>{r.$$.dirty&384&&o.page.set(i)},[l,n,u,_,h,g,w,o,i]}class It extends Ye{constructor(e){super(),We(this,e,Ot,Rt,Xe,{stores:7,page:8,components:0,form:1,data_0:2,data_1:3})}}const St={},pe=[()=>V(()=>import("./chunks/0-a8241f00.js"),["chunks/0-a8241f00.js","chunks/_layout-1daba58d.js","components/pages/_layout.svelte-a55b0785.js","assets/_layout-2ae6ac63.css","chunks/index-2ce92430.js","chunks/index-03399a6b.js"],import.meta.url),()=>V(()=>import("./chunks/1-25977a18.js"),["chunks/1-25977a18.js","components/error.svelte-de7beb5d.js","chunks/index-2ce92430.js","chunks/singletons-c61b72f2.js"],import.meta.url),()=>V(()=>import("./chunks/2-33f90a6e.js"),["chunks/2-33f90a6e.js","components/pages/_page.svelte-e6708fd6.js","chunks/index-2ce92430.js","chunks/index-03399a6b.js"],import.meta.url),()=>V(()=>import("./chunks/3-c10eb016.js"),["chunks/3-c10eb016.js","components/pages/bdays/natalia/_page.svelte-5a6ac063.js","assets/_page-841d462c.css","chunks/index-2ce92430.js"],import.meta.url),()=>V(()=>import("./chunks/4-9d742c42.js"),["chunks/4-9d742c42.js","components/pages/bdays/pau/_page.svelte-7b03e662.js","chunks/index-2ce92430.js"],import.meta.url),()=>V(()=>import("./chunks/5-accbcbce.js"),["chunks/5-accbcbce.js","chunks/_page-8a416d3b.js","chunks/postFetcher-c01a6c51.js","chunks/preload-helper-aa6bc0ce.js","components/pages/blog/_page.svelte-165eac81.js","chunks/index-2ce92430.js","chunks/BlogCard-74928e38.js","chunks/TagContainer-5fac49f6.js"],import.meta.url),()=>V(()=>import("./chunks/6-235a0238.js"),["chunks/6-235a0238.js","chunks/_page-39d585ff.js","chunks/preload-helper-aa6bc0ce.js","components/pages/blog/_slug_/_page.svelte-ffca09a6.js","chunks/index-2ce92430.js","chunks/TagContainer-5fac49f6.js"],import.meta.url),()=>V(()=>import("./chunks/7-40b9ef4a.js"),["chunks/7-40b9ef4a.js","chunks/_page-1f23882f.js","chunks/postFetcher-c01a6c51.js","chunks/preload-helper-aa6bc0ce.js","components/pages/blog/posts/_page.svelte-a9c77157.js","chunks/index-2ce92430.js","chunks/BlogCard-74928e38.js","chunks/TagContainer-5fac49f6.js"],import.meta.url),()=>V(()=>import("./chunks/8-332468a8.js"),["chunks/8-332468a8.js","chunks/_page-d86a15c7.js","chunks/postFetcher-c01a6c51.js","chunks/preload-helper-aa6bc0ce.js","components/pages/blog/tags/_page.svelte-c8c60bc6.js","chunks/index-2ce92430.js"],import.meta.url),()=>V(()=>import("./chunks/9-126062b4.js"),["chunks/9-126062b4.js","chunks/_page-9ca9fea6.js","chunks/postFetcher-c01a6c51.js","chunks/preload-helper-aa6bc0ce.js","components/pages/blog/tags/_tag_/_page.svelte-c11b3f84.js","chunks/index-2ce92430.js","chunks/BlogCard-74928e38.js"],import.meta.url),()=>V(()=>import("./chunks/10-36715edf.js"),["chunks/10-36715edf.js","components/pages/projects/_page.svelte-eca072a1.js","chunks/index-2ce92430.js"],import.meta.url)],Lt=[],At={"":[2],blog:[5],projects:[10],"bdays/natalia":[3],"bdays/pau":[4],"blog/posts":[7],"blog/tags":[8],"blog/tags/[tag]":[9],"blog/[slug]":[6]},$t={handleError:({error:r})=>{console.error(r)}};class ke{constructor(e,t){this.status=e,typeof t=="string"?this.body={message:t}:t?this.body=t:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class Me{constructor(e,t){this.status=e,this.location=t}}const Pt="/__data.json";async function jt(r){var e;for(const t in r)if(typeof((e=r[t])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(r).map(async([o,i])=>[o,await i])));return r}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const Nt=-1,Tt=-2,Dt=-3,Ut=-4,Vt=-5,qt=-6;function Bt(r){const e=JSON.parse(r);if(typeof e=="number")return i(e);const t=e,o=Array(t.length);function i(l){if(l===Nt)return;if(l===Dt)return NaN;if(l===Ut)return 1/0;if(l===Vt)return-1/0;if(l===qt)return-0;if(l in o)return o[l];const n=t[l];if(!n||typeof n!="object")o[l]=n;else if(Array.isArray(n))if(typeof n[0]=="string")switch(n[0]){case"Date":o[l]=new Date(n[1]);break;case"Set":const _=new Set;o[l]=_;for(let w=1;w<n.length;w+=1)_.add(i(n[w]));break;case"Map":const h=new Map;o[l]=h;for(let w=1;w<n.length;w+=2)h.set(i(n[w]),i(n[w+1]));break;case"RegExp":o[l]=new RegExp(n[1],n[2]);break;case"Object":o[l]=Object(n[1]);break;case"BigInt":o[l]=BigInt(n[1]);break;case"null":const g=Object.create(null);o[l]=g;for(let w=1;w<n.length;w+=2)g[n[w]]=i(n[w+1]);break}else{const u=new Array(n.length);o[l]=u;for(let _=0;_<n.length;_+=1){const h=n[_];h!==Tt&&(u[_]=i(h))}}else{const u={};o[l]=u;for(const _ in n){const h=n[_];u[_]=i(h)}}return o[l]}return i(0)}const He="sveltekit:scroll",C="sveltekit:index",oe=bt(pe,Lt,At,St),Re=pe[0],Oe=pe[1];Re();Oe();let te={};try{te=JSON.parse(sessionStorage[He])}catch{}function be(r){te[r]=Ee()}function Ct({target:r,base:e,trailing_slash:t}){var Ve;const o=[];let i=null;const l={before_navigate:[],after_navigate:[]};let n={branch:[],error:null,url:null},u=!1,_=!1,h=!0,g=!1,w=!1,O,T=(Ve=history.state)==null?void 0:Ve[C];T||(T=Date.now(),history.replaceState({...history.state,[C]:T},"",location.href));const U=te[T];U&&(history.scrollRestoration="manual",scrollTo(U.x,U.y));let q=!1,D,Se,ne;async function Le(){ne=ne||Promise.resolve(),await ne,ne=null;const a=new URL(location.href),f=_e(a,!0);i=null,await $e(f,a,[])}async function de(a,{noscroll:f=!1,replaceState:p=!1,keepfocus:s=!1,state:c={}},d,m){return typeof a=="string"&&(a=new URL(a,Fe(document))),ge({url:a,scroll:f?Ee():null,keepfocus:s,redirect_chain:d,details:{state:c,replaceState:p},nav_token:m,accepted:()=>{},blocked:()=>{},type:"goto"})}async function Ae(a){const f=_e(a,!1);if(!f)throw new Error("Attempted to prefetch a URL that does not belong to this app");return i={id:f.id,promise:Ne(f)},i.promise}async function $e(a,f,p,s,c={},d){var k,E;Se=c;let m=a&&await Ne(a);if(m||(m=await Ue(f,null,ee(new Error(`Not found: ${f.pathname}`),{url:f,params:{},routeId:null}),404)),f=(a==null?void 0:a.url)||f,Se!==c)return!1;if(m.type==="redirect")if(p.length>10||p.includes(f.pathname))m=await re({status:500,error:ee(new Error("Redirect loop"),{url:f,params:{},routeId:null}),url:f,routeId:null});else return de(new URL(m.location,f).href,{},[...p,f.pathname],c),!1;else((E=(k=m.props)==null?void 0:k.page)==null?void 0:E.status)>=400&&await M.updated.check()&&await ae(f);if(o.length=0,w=!1,g=!0,s&&s.details){const{details:b}=s,v=b.replaceState?0:1;b.state[C]=T+=v,history[b.replaceState?"replaceState":"pushState"](b.state,"",f)}if(i=null,_){n=m.state,m.props.page&&(m.props.page.url=f);const b=ie();O.$set(m.props),b()}else Pe(m);if(s){const{scroll:b,keepfocus:v}=s;if(!v){const I=document.body,L=I.getAttribute("tabindex");I.tabIndex=-1,I.focus({preventScroll:!0}),setTimeout(()=>{var A;(A=getSelection())==null||A.removeAllRanges()}),L!==null?I.setAttribute("tabindex",L):I.removeAttribute("tabindex")}if(await Ce(),h){const I=f.hash&&document.getElementById(f.hash.slice(1));b?scrollTo(b.x,b.y):I?I.scrollIntoView():scrollTo(0,0)}}else await Ce();h=!0,m.props.page&&(D=m.props.page),d&&d(),g=!1}function Pe(a){var c,d;n=a.state;const f=document.querySelector("style[data-sveltekit]");f&&f.remove(),D=a.props.page;const p=ie();O=new It({target:r,props:{...a.props,stores:M},hydrate:!0}),p();const s={from:null,to:se("to",{params:n.params,routeId:(d=(c=n.route)==null?void 0:c.id)!=null?d:null,url:new URL(location.href)}),type:"load"};l.after_navigate.forEach(m=>m(s)),_=!0}async function Q({url:a,params:f,branch:p,status:s,error:c,route:d,form:m}){var L;const k=p.filter(Boolean),E={type:"loaded",state:{url:a,params:f,branch:p,error:c,route:d},props:{components:k.map(A=>A.node.component)}};m!==void 0&&(E.props.form=m);let b={},v=!D;for(let A=0;A<k.length;A+=1){const j=k[A];b={...b,...j.data},(v||!n.branch.some(N=>N===j))&&(E.props[`data_${A}`]=b,v=v||Object.keys((L=j.data)!=null?L:{}).length>0)}if(v||(v=Object.keys(D.data).length!==Object.keys(b).length),!n.url||a.href!==n.url.href||n.error!==c||m!==void 0||v){E.props.page={error:c,params:f,routeId:d&&d.id,status:s,url:a,form:m,data:v?b:D.data};const A=(j,N)=>{Object.defineProperty(E.props.page,j,{get:()=>{throw new Error(`$page.${j} has been replaced by $page.url.${N}`)}})};A("origin","origin"),A("path","pathname"),A("query","searchParams")}return E}async function he({loader:a,parent:f,url:p,params:s,routeId:c,server_data_node:d}){var b,v,I,L,A;let m=null;const k={dependencies:new Set,params:new Set,parent:!1,url:!1},E=await a();if((b=E.shared)!=null&&b.load){let j=function(...S){for(const y of S){const{href:R}=new URL(y,p);k.dependencies.add(R)}};const N={routeId:c,params:new Proxy(s,{get:(S,y)=>(k.params.add(y),S[y])}),data:(v=d==null?void 0:d.data)!=null?v:null,url:ut(p,()=>{k.url=!0}),async fetch(S,y){let R;S instanceof Request?(R=S.url,y={body:S.method==="GET"||S.method==="HEAD"?void 0:await S.blob(),cache:S.cache,credentials:S.credentials,headers:S.headers,integrity:S.integrity,keepalive:S.keepalive,method:S.method,mode:S.mode,redirect:S.redirect,referrer:S.referrer,referrerPolicy:S.referrerPolicy,signal:S.signal,...y}):R=S;const P=new URL(R,p).href;return j(P),_?mt(P,y):ht(R,P,y)},setHeaders:()=>{},depends:j,parent(){return k.parent=!0,f()}};Object.defineProperties(N,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1}}),m=(I=await E.shared.load.call(null,N))!=null?I:null,m=m?await jt(m):null}return{node:E,loader:a,server:d,shared:(L=E.shared)!=null&&L.load?{type:"data",data:m,uses:k}:null,data:(A=m!=null?m:d==null?void 0:d.data)!=null?A:null}}function je(a,f,p,s){if(w)return!0;if(!p)return!1;if(p.parent&&f||p.url&&a)return!0;for(const c of p.params)if(s[c]!==n.params[c])return!0;for(const c of p.dependencies)if(o.some(d=>d(new URL(c))))return!0;return!1}function me(a,f){var p,s;return(a==null?void 0:a.type)==="data"?{type:"data",data:a.data,uses:{dependencies:new Set((p=a.uses.dependencies)!=null?p:[]),params:new Set((s=a.uses.params)!=null?s:[]),parent:!!a.uses.parent,url:!!a.uses.url}}:(a==null?void 0:a.type)==="skip"&&f!=null?f:null}async function Ne({id:a,invalidating:f,url:p,params:s,route:c}){var S;if((i==null?void 0:i.id)===a)return i.promise;const{errors:d,layouts:m,leaf:k}=c,E=[...m,k];d.forEach(y=>y==null?void 0:y().catch(()=>{})),E.forEach(y=>y==null?void 0:y[1]().catch(()=>{}));let b=null;const v=n.url?a!==n.url.pathname+n.url.search:!1,I=E.reduce((y,R,P)=>{var x;const $=n.branch[P],H=!!(R!=null&&R[0])&&(($==null?void 0:$.loader)!==R[1]||je(v,y.some(Boolean),(x=$.server)==null?void 0:x.uses,s));return y.push(H),y},[]);if(I.some(Boolean)){try{b=await ze(p,I)}catch(y){return re({status:500,error:ee(y,{url:p,params:s,routeId:c.id}),url:p,routeId:c.id})}if(b.type==="redirect")return b}const L=b==null?void 0:b.nodes;let A=!1;const j=E.map(async(y,R)=>{var x;if(!y)return;const P=n.branch[R],$=L==null?void 0:L[R];if((!$||$.type==="skip")&&y[1]===(P==null?void 0:P.loader)&&!je(v,A,(x=P.shared)==null?void 0:x.uses,s))return P;if(A=!0,($==null?void 0:$.type)==="error")throw $;return he({loader:y[1],url:p,params:s,routeId:c.id,parent:async()=>{var Be;const qe={};for(let ye=0;ye<R;ye+=1)Object.assign(qe,(Be=await j[ye])==null?void 0:Be.data);return qe},server_data_node:me($===void 0&&y[0]?{type:"skip"}:$!=null?$:null,P==null?void 0:P.server)})});for(const y of j)y.catch(()=>{});const N=[];for(let y=0;y<E.length;y+=1)if(E[y])try{N.push(await j[y])}catch(R){if(R instanceof Me)return{type:"redirect",location:R.location};let P=500,$;L!=null&&L.includes(R)?(P=(S=R.status)!=null?S:P,$=R.error):R instanceof ke?(P=R.status,$=R.body):$=ee(R,{params:s,url:p,routeId:c.id});const H=await Te(y,N,d);return H?await Q({url:p,params:s,branch:N.slice(0,H.idx).concat(H.node),status:P,error:$,route:c}):await Ue(p,c.id,$,P)}else N.push(void 0);return await Q({url:p,params:s,branch:N,status:200,error:null,route:c,form:f?void 0:null})}async function Te(a,f,p){for(;a--;)if(p[a]){let s=a;for(;!f[s];)s-=1;try{return{idx:s+1,node:{node:await p[a](),loader:p[a],data:{},server:null,shared:null}}}catch{continue}}}async function re({status:a,error:f,url:p,routeId:s}){var b;const c={},d=await Re();let m=null;if(d.server)try{const v=await ze(p,[!0]);if(v.type!=="data"||v.nodes[0]&&v.nodes[0].type!=="data")throw 0;m=(b=v.nodes[0])!=null?b:null}catch{(p.origin!==location.origin||p.pathname!==location.pathname||u)&&await ae(p)}const k=await he({loader:Re,url:p,params:c,routeId:s,parent:()=>Promise.resolve({}),server_data_node:me(m)}),E={node:await Oe(),loader:Oe,shared:null,server:null,data:null};return await Q({url:p,params:c,branch:[k,E],status:a,error:f,route:null})}function _e(a,f){if(De(a))return;const p=decodeURI(a.pathname.slice(e.length)||"/");for(const s of oe){const c=s.exec(p);if(c){const d=new URL(a.origin+lt(a.pathname,t)+a.search+a.hash);return{id:d.pathname+d.search,invalidating:f,route:s,params:ct(c),url:d}}}}function De(a){return a.origin!==location.origin||!a.pathname.startsWith(e)}async function ge({url:a,scroll:f,keepfocus:p,redirect_chain:s,details:c,type:d,delta:m,nav_token:k,accepted:E,blocked:b}){var j,N,S,y;let v=!1;const I=_e(a,!1),L={from:se("from",{params:n.params,routeId:(N=(j=n.route)==null?void 0:j.id)!=null?N:null,url:n.url}),to:se("to",{params:(S=I==null?void 0:I.params)!=null?S:null,routeId:(y=I==null?void 0:I.route.id)!=null?y:null,url:a}),type:d};m!==void 0&&(L.delta=m);const A={...L,cancel:()=>{v=!0}};if(l.before_navigate.forEach(R=>R(A)),v){b();return}be(T),E(),_&&M.navigating.set(L),await $e(I,a,s,{scroll:f,keepfocus:p,details:c},k,()=>{l.after_navigate.forEach(R=>R(L)),M.navigating.set(null)})}async function Ue(a,f,p,s){return a.origin===location.origin&&a.pathname===location.pathname&&!u?await re({status:s,error:p,url:a,routeId:f}):await ae(a)}function ae(a){return location.href=a.href,new Promise(()=>{})}return{after_navigate:a=>{ve(()=>(l.after_navigate.push(a),()=>{const f=l.after_navigate.indexOf(a);l.after_navigate.splice(f,1)}))},before_navigate:a=>{ve(()=>(l.before_navigate.push(a),()=>{const f=l.before_navigate.indexOf(a);l.before_navigate.splice(f,1)}))},disable_scroll_handling:()=>{(g||!_)&&(h=!1)},goto:(a,f={})=>de(a,f,[]),invalidate:a=>{if(a===void 0)throw new Error("`invalidate()` (with no arguments) has been replaced by `invalidateAll()`");if(typeof a=="function")o.push(a);else{const{href:f}=new URL(a,location.href);o.push(p=>p.href===f)}return Le()},invalidateAll:()=>(w=!0,Le()),prefetch:async a=>{const f=new URL(a,Fe(document));await Ae(f)},prefetch_routes:async a=>{const p=(a?oe.filter(s=>a.some(c=>s.exec(c))):oe).map(s=>Promise.all([...s.layouts,s.leaf].map(c=>c==null?void 0:c[1]())));await Promise.all(p)},apply_action:async a=>{if(a.type==="error"){const f=new URL(location.href),{branch:p,route:s}=n;if(!s)return;const c=await Te(n.branch.length,p,s.errors);if(c){const d=await Q({url:f,params:n.params,branch:p.slice(0,c.idx).concat(c.node),status:500,error:a.error,route:s});n=d.state;const m=ie();O.$set(d.props),m()}}else if(a.type==="redirect")de(a.location,{},[]);else{const f={form:a.data,page:{...D,form:a.data,status:a.status}},p=ie();O.$set(f),p()}},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",s=>{var m,k;let c=!1;const d={from:se("from",{params:n.params,routeId:(k=(m=n.route)==null?void 0:m.id)!=null?k:null,url:n.url}),to:null,type:"unload",cancel:()=>c=!0};l.before_navigate.forEach(E=>E(d)),c?(s.preventDefault(),s.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){be(T);try{sessionStorage[He]=JSON.stringify(te)}catch{}}});const a=s=>{const{url:c,options:d}=Je(s);if(c&&d.prefetch){if(De(c))return;Ae(c)}};let f;const p=s=>{clearTimeout(f),f=setTimeout(()=>{var c;(c=s.target)==null||c.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",a),addEventListener("mousemove",p),addEventListener("sveltekit:trigger_prefetch",a),addEventListener("click",s=>{if(s.button||s.which!==1||s.metaKey||s.ctrlKey||s.shiftKey||s.altKey||s.defaultPrevented)return;const{a:c,url:d,options:m}=Je(s);if(!c||!d)return;const k=c instanceof SVGAElement;if(!k&&d.protocol!==location.protocol&&!(d.protocol==="https:"||d.protocol==="http:"))return;const E=(c.getAttribute("rel")||"").split(/\s+/);if(c.hasAttribute("download")||E.includes("external")||m.reload||(k?c.target.baseVal:c.target))return;const[b,v]=d.href.split("#");if(v!==void 0&&b===location.href.split("#")[0]){q=!0,be(T),n.url=d,M.page.set({...D,url:d}),M.page.notify();return}ge({url:d,scroll:m.noscroll?Ee():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:d.href===location.href},accepted:()=>s.preventDefault(),blocked:()=>s.preventDefault(),type:"link"})}),addEventListener("popstate",s=>{if(s.state){if(s.state[C]===T)return;const c=s.state[C]-T;ge({url:new URL(location.href),scroll:te[s.state[C]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{T=s.state[C]},blocked:()=>{history.go(-c)},type:"popstate",delta:c})}}),addEventListener("hashchange",()=>{q&&(q=!1,history.replaceState({...history.state,[C]:++T},"",location.href))});for(const s of document.querySelectorAll("link"))s.rel==="icon"&&(s.href=s.href);addEventListener("pageshow",s=>{s.persisted&&M.navigating.set(null)})},_hydrate:async({status:a,error:f,node_ids:p,params:s,routeId:c,data:d,form:m})=>{var b;u=!0;const k=new URL(location.href);let E;try{const v=p.map(async(I,L)=>{const A=d[L];return he({loader:pe[I],url:k,params:s,routeId:c,parent:async()=>{const j={};for(let N=0;N<L;N+=1)Object.assign(j,(await v[N]).data);return j},server_data_node:me(A)})});E=await Q({url:k,params:s,branch:await Promise.all(v),status:a,error:f,form:m,route:(b=oe.find(I=>I.id===c))!=null?b:null})}catch(v){if(v instanceof Me){await ae(new URL(v.location,location.href));return}E=await re({status:v instanceof ke?v.status:500,error:ee(v,{url:k,params:s,routeId:c}),url:k,routeId:c})}Pe(E)}}}async function ze(r,e){const t=new URL(r);t.pathname=r.pathname.replace(/\/$/,"")+Pt;const o=await ue(t.href,{headers:{"x-sveltekit-invalidated":e.map(l=>l?"1":"").join(",")}}),i=await o.text();if(!o.ok)throw new Error(JSON.parse(i));return Bt(i)}function ee(r,e){var t;return r instanceof ke?r.body:(t=$t.handleError({error:r,event:e}))!=null?t:{message:e.routeId!=null?"Internal Error":"Not Found"}}const Ft=["hash","href","host","hostname","origin","pathname","port","protocol","search","searchParams","toString","toJSON"];function se(r,e){for(const t of Ft)Object.defineProperty(e,t,{get(){throw new Error(`The navigation shape changed - ${r}.${t} should now be ${r}.url.${t}`)},enumerable:!1});return e}function ie(){return()=>{}}async function Mt({env:r,hydrate:e,paths:t,target:o,trailing_slash:i}){st(t);const l=Ct({target:o,base:t.base,trailing_slash:i});it({client:l}),e?await l._hydrate(e):l.goto(location.href,{replaceState:!0}),l._start_router()}export{Mt as start};
