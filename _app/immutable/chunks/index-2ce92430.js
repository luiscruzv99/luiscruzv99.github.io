function E(){}const it=t=>t;function $t(t,e){for(const n in e)t[n]=e[n];return t}function st(t){return t()}function Y(){return Object.create(null)}function k(t){t.forEach(st)}function F(t){return typeof t=="function"}function Jt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let R;function Kt(t,e){return R||(R=document.createElement("a")),R.href=e,t===R.href}function vt(t){return Object.keys(t).length===0}function Et(t,...e){if(t==null)return E;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Qt(t,e,n){t.$$.on_destroy.push(Et(e,n))}function Ut(t,e,n,s){if(t){const i=rt(t,e,n,s);return t[0](i)}}function rt(t,e,n,s){return t[1]&&s?$t(n.ctx.slice(),t[1](s(e))):n.ctx}function Vt(t,e,n,s){if(t[2]&&s){const i=t[2](s(n));if(e.dirty===void 0)return i;if(typeof i=="object"){const o=[],r=Math.max(e.dirty.length,i.length);for(let c=0;c<r;c+=1)o[c]=e.dirty[c]|i[c];return o}return e.dirty|i}return e.dirty}function Xt(t,e,n,s,i,o){if(i){const r=rt(e,n,s,o);t.p(r,i)}}function Yt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let s=0;s<n;s++)e[s]=-1;return e}return-1}function Zt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}const lt=typeof window<"u";let ot=lt?()=>window.performance.now():()=>Date.now(),U=lt?t=>requestAnimationFrame(t):E;const N=new Set;function ct(t){N.forEach(e=>{e.c(t)||(N.delete(e),e.f())}),N.size!==0&&U(ct)}function at(t){let e;return N.size===0&&U(ct),{promise:new Promise(n=>{N.add(e={c:t,f:n})}),abort(){N.delete(e)}}}let G=!1;function Nt(){G=!0}function kt(){G=!1}function Tt(t,e,n,s){for(;t<e;){const i=t+(e-t>>1);n(i)<=s?t=i+1:e=i}return t}function At(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let a=0;a<e.length;a++){const d=e[a];d.claim_order!==void 0&&l.push(d)}e=l}const n=new Int32Array(e.length+1),s=new Int32Array(e.length);n[0]=-1;let i=0;for(let l=0;l<e.length;l++){const a=e[l].claim_order,d=(i>0&&e[n[i]].claim_order<=a?i+1:Tt(1,i,u=>e[n[u]].claim_order,a))-1;s[l]=n[d]+1;const f=d+1;n[f]=l,i=Math.max(f,i)}const o=[],r=[];let c=e.length-1;for(let l=n[i]+1;l!=0;l=s[l-1]){for(o.push(e[l-1]);c>=l;c--)r.push(e[c]);c--}for(;c>=0;c--)r.push(e[c]);o.reverse(),r.sort((l,a)=>l.claim_order-a.claim_order);for(let l=0,a=0;l<r.length;l++){for(;a<o.length&&r[l].claim_order>=o[a].claim_order;)a++;const d=a<o.length?o[a]:null;t.insertBefore(r[l],d)}}function St(t,e){t.appendChild(e)}function ut(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Mt(t){const e=V("style");return Ct(ut(t),e),e.sheet}function Ct(t,e){return St(t.head||t,e),e.sheet}function jt(t,e){if(G){for(At(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Ht(t,e,n){t.insertBefore(e,n||null)}function Dt(t,e,n){G&&!n?jt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function C(t){t.parentNode.removeChild(t)}function te(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function V(t){return document.createElement(t)}function ft(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function X(t){return document.createTextNode(t)}function ee(){return X(" ")}function ne(){return X("")}function ie(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function se(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Lt(t){return Array.from(t.childNodes)}function _t(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function dt(t,e,n,s,i=!1){_t(t);const o=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const c=t[r];if(e(c)){const l=n(c);return l===void 0?t.splice(r,1):t[r]=l,i||(t.claim_info.last_index=r),c}}for(let r=t.claim_info.last_index-1;r>=0;r--){const c=t[r];if(e(c)){const l=n(c);return l===void 0?t.splice(r,1):t[r]=l,i?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,c}}return s()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function ht(t,e,n,s){return dt(t,i=>i.nodeName===e,i=>{const o=[];for(let r=0;r<i.attributes.length;r++){const c=i.attributes[r];n[c.name]||o.push(c.name)}o.forEach(r=>i.removeAttribute(r))},()=>s(e))}function re(t,e,n){return ht(t,e,n,V)}function le(t,e,n){return ht(t,e,n,ft)}function Rt(t,e){return dt(t,n=>n.nodeType===3,n=>{const s=""+e;if(n.data.startsWith(s)){if(n.data.length!==s.length)return n.splitText(s.length)}else n.data=s},()=>X(e),!0)}function oe(t){return Rt(t," ")}function Z(t,e,n){for(let s=n;s<t.length;s+=1){const i=t[s];if(i.nodeType===8&&i.textContent.trim()===e)return s}return t.length}function ce(t,e){const n=Z(t,"HTML_TAG_START",0),s=Z(t,"HTML_TAG_END",n);if(n===s)return new tt(void 0,e);_t(t);const i=t.splice(n,s-n+1);C(i[0]),C(i[i.length-1]);const o=i.slice(1,i.length-1);for(const r of o)r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new tt(o,e)}function ae(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function ue(t,e,n,s){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,s?"important":"")}function Ot(t,e,{bubbles:n=!1,cancelable:s=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,s,e),i}function fe(t,e){const n=[];let s=0;for(const i of e.childNodes)if(i.nodeType===8){const o=i.textContent.trim();o===`HEAD_${t}_END`?(s-=1,n.push(i)):o===`HEAD_${t}_START`&&(s+=1,n.push(i))}else s>0&&n.push(i);return n}class Pt{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,s=null){this.e||(this.is_svg?this.e=ft(n.nodeName):this.e=V(n.nodeName),this.t=n,this.c(e)),this.i(s)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)Ht(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(C)}}class tt extends Pt{constructor(e,n=!1){super(n),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)Dt(this.t,this.n[n],e)}}function _e(t,e){return new t(e)}const B=new Map;let z=0;function qt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Bt(t,e){const n={stylesheet:Mt(e),rules:{}};return B.set(t,n),n}function J(t,e,n,s,i,o,r,c=0){const l=16.666/s;let a=`{
`;for(let p=0;p<=1;p+=l){const g=e+(n-e)*o(p);a+=p*100+`%{${r(g,1-g)}}
`}const d=a+`100% {${r(n,1-n)}}
}`,f=`__svelte_${qt(d)}_${c}`,u=ut(t),{stylesheet:h,rules:_}=B.get(u)||Bt(u,t);_[f]||(_[f]=!0,h.insertRule(`@keyframes ${f} ${d}`,h.cssRules.length));const y=t.style.animation||"";return t.style.animation=`${y?`${y}, `:""}${f} ${s}ms linear ${i}ms 1 both`,z+=1,f}function K(t,e){const n=(t.style.animation||"").split(", "),s=n.filter(e?o=>o.indexOf(e)<0:o=>o.indexOf("__svelte")===-1),i=n.length-s.length;i&&(t.style.animation=s.join(", "),z-=i,z||zt())}function zt(){U(()=>{z||(B.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&C(e)}),B.clear())})}let j;function S(t){j=t}function mt(){if(!j)throw new Error("Function called outside component initialization");return j}function de(t){mt().$$.on_mount.push(t)}function he(t){mt().$$.after_update.push(t)}const A=[],et=[],P=[],nt=[],pt=Promise.resolve();let Q=!1;function yt(){Q||(Q=!0,pt.then(gt))}function me(){return yt(),pt}function H(t){P.push(t)}const I=new Set;let O=0;function gt(){const t=j;do{for(;O<A.length;){const e=A[O];O++,S(e),Ft(e.$$)}for(S(null),A.length=0,O=0;et.length;)et.pop()();for(let e=0;e<P.length;e+=1){const n=P[e];I.has(n)||(I.add(n),n())}P.length=0}while(A.length);for(;nt.length;)nt.pop()();Q=!1,I.clear(),S(t)}function Ft(t){if(t.fragment!==null){t.update(),k(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(H)}}let T;function wt(){return T||(T=Promise.resolve(),T.then(()=>{T=null})),T}function M(t,e,n){t.dispatchEvent(Ot(`${e?"intro":"outro"}${n}`))}const q=new Set;let v;function pe(){v={r:0,c:[],p:v}}function ye(){v.r||k(v.c),v=v.p}function xt(t,e){t&&t.i&&(q.delete(t),t.i(e))}function ge(t,e,n,s){if(t&&t.o){if(q.has(t))return;q.add(t),v.c.push(()=>{q.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}const bt={duration:0};function we(t,e,n){let s=e(t,n),i=!1,o,r,c=0;function l(){o&&K(t,o)}function a(){const{delay:f=0,duration:u=300,easing:h=it,tick:_=E,css:y}=s||bt;y&&(o=J(t,0,1,u,f,h,y,c++)),_(0,1);const p=ot()+f,g=p+u;r&&r.abort(),i=!0,H(()=>M(t,!0,"start")),r=at(w=>{if(i){if(w>=g)return _(1,0),M(t,!0,"end"),l(),i=!1;if(w>=p){const x=h((w-p)/u);_(x,1-x)}}return i})}let d=!1;return{start(){d||(d=!0,K(t),F(s)?(s=s(),wt().then(a)):a())},invalidate(){d=!1},end(){i&&(l(),i=!1)}}}function xe(t,e,n,s){let i=e(t,n),o=s?0:1,r=null,c=null,l=null;function a(){l&&K(t,l)}function d(u,h){const _=u.b-o;return h*=Math.abs(_),{a:o,b:u.b,d:_,duration:h,start:u.start,end:u.start+h,group:u.group}}function f(u){const{delay:h=0,duration:_=300,easing:y=it,tick:p=E,css:g}=i||bt,w={start:ot()+h,b:u};u||(w.group=v,v.r+=1),r||c?c=w:(g&&(a(),l=J(t,o,u,_,h,y,g)),u&&p(0,1),r=d(w,_),H(()=>M(t,u,"start")),at(x=>{if(c&&x>c.start&&(r=d(c,_),c=null,M(t,r.b,"start"),g&&(a(),l=J(t,o,r.b,r.duration,0,y,i.css))),r){if(x>=r.end)p(o=r.b,1-o),M(t,r.b,"end"),c||(r.b?a():--r.group.r||k(r.group.c)),r=null;else if(x>=r.start){const D=x-r.start;o=r.a+r.d*y(D/r.duration),p(o,1-o)}}return!!(r||c)}))}return{run(u){F(i)?wt().then(()=>{i=i(),f(u)}):f(u)},end(){a(),r=c=null}}}const be=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function $e(t,e){t.d(1),e.delete(t.key)}function ve(t,e,n,s,i,o,r,c,l,a,d,f){let u=t.length,h=o.length,_=u;const y={};for(;_--;)y[t[_].key]=_;const p=[],g=new Map,w=new Map;for(_=h;_--;){const m=f(i,o,_),b=n(m);let $=r.get(b);$?s&&$.p(m,e):($=a(b,m),$.c()),g.set(b,p[_]=$),b in y&&w.set(b,Math.abs(_-y[b]))}const x=new Set,D=new Set;function W(m){xt(m,1),m.m(c,d),r.set(m.key,m),d=m.first,h--}for(;u&&h;){const m=p[h-1],b=t[u-1],$=m.key,L=b.key;m===b?(d=m.first,u--,h--):g.has(L)?!r.has($)||x.has($)?W(m):D.has(L)?u--:w.get($)>w.get(L)?(D.add($),W(m)):(x.add(L),u--):(l(b,r),u--)}for(;u--;){const m=t[u];g.has(m.key)||l(m,r)}for(;h;)W(p[h-1]);return p}function Ee(t,e){const n={},s={},i={$$scope:1};let o=t.length;for(;o--;){const r=t[o],c=e[o];if(c){for(const l in r)l in c||(s[l]=1);for(const l in c)i[l]||(n[l]=c[l],i[l]=1);t[o]=c}else for(const l in r)i[l]=1}for(const r in s)r in n||(n[r]=void 0);return n}function Ne(t){return typeof t=="object"&&t!==null?t:{}}function ke(t){t&&t.c()}function Te(t,e){t&&t.l(e)}function Gt(t,e,n,s){const{fragment:i,after_update:o}=t.$$;i&&i.m(e,n),s||H(()=>{const r=t.$$.on_mount.map(st).filter(F);t.$$.on_destroy?t.$$.on_destroy.push(...r):k(r),t.$$.on_mount=[]}),o.forEach(H)}function Wt(t,e){const n=t.$$;n.fragment!==null&&(k(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function It(t,e){t.$$.dirty[0]===-1&&(A.push(t),yt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Ae(t,e,n,s,i,o,r,c=[-1]){const l=j;S(t);const a=t.$$={fragment:null,ctx:[],props:o,update:E,not_equal:i,bound:Y(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:Y(),dirty:c,skip_bound:!1,root:e.target||l.$$.root};r&&r(a.root);let d=!1;if(a.ctx=n?n(t,e.props||{},(f,u,...h)=>{const _=h.length?h[0]:u;return a.ctx&&i(a.ctx[f],a.ctx[f]=_)&&(!a.skip_bound&&a.bound[f]&&a.bound[f](_),d&&It(t,f)),u}):[],a.update(),d=!0,k(a.before_update),a.fragment=s?s(a.ctx):!1,e.target){if(e.hydrate){Nt();const f=Lt(e.target);a.fragment&&a.fragment.l(f),f.forEach(C)}else a.fragment&&a.fragment.c();e.intro&&xt(t.$$.fragment),Gt(t,e.target,e.anchor,e.customElement),kt(),gt()}S(l)}class Se{$destroy(){Wt(this,1),this.$destroy=E}$on(e,n){if(!F(n))return E;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const i=s.indexOf(n);i!==-1&&s.splice(i,1)}}$set(e){this.$$set&&!vt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Ee as $,me as A,E as B,Kt as C,jt as D,ie as E,te as F,H as G,xe as H,we as I,Ut as J,Xt as K,Yt as L,Vt as M,it as N,Qt as O,ft as P,le as Q,ve as R,Se as S,k as T,$e as U,fe as V,be as W,et as X,tt as Y,ce as Z,$t as _,ee as a,Ne as a0,Zt as a1,Dt as b,oe as c,ye as d,ne as e,xt as f,pe as g,C as h,Ae as i,he as j,V as k,re as l,Lt as m,se as n,de as o,ue as p,X as q,Rt as r,Jt as s,ge as t,ae as u,_e as v,ke as w,Te as x,Gt as y,Wt as z};
