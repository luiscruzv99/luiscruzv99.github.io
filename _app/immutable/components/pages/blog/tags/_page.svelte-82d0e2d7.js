import{S as T,i as V,s as j,k as m,q as N,a as E,l as g,m as b,r as S,h as u,c as A,n as p,b as x,D as _,B as y,F as B,e as D,u as C}from"../../../../chunks/index-5963a7a1.js";function I(c,t,e){const a=c.slice();return a[1]=t[e],a}function q(c){let t,e,a=c[1]+"",n,d;return{c(){t=m("div"),e=m("a"),n=N(a),this.h()},l(f){t=g(f,"DIV",{class:!0});var r=b(t);e=g(r,"A",{href:!0,class:!0});var h=b(e);n=S(h,a),h.forEach(u),r.forEach(u),this.h()},h(){p(e,"href",d="/blog/tags/"+c[1]),p(e,"class","tag_link_big"),p(t,"class","p-2")},m(f,r){x(f,t,r),_(t,e),_(e,n)},p(f,r){r&1&&a!==(a=f[1]+"")&&C(n,a),r&1&&d!==(d="/blog/tags/"+f[1])&&p(e,"href",d)},d(f){f&&u(t)}}}function H(c){let t,e=c[1]!=null&&q(c);return{c(){e&&e.c(),t=D()},l(a){e&&e.l(a),t=D()},m(a,n){e&&e.m(a,n),x(a,t,n)},p(a,n){a[1]!=null?e?e.p(a,n):(e=q(a),e.c(),e.m(t.parentNode,t)):e&&(e.d(1),e=null)},d(a){e&&e.d(a),a&&u(t)}}}function F(c){let t,e,a,n,d,f,r,h=c[0].tags,i=[];for(let s=0;s<h.length;s+=1)i[s]=H(I(c,h,s));return{c(){t=m("main"),e=m("h1"),a=N("All Tags"),n=E(),d=m("hr"),f=E(),r=m("div");for(let s=0;s<i.length;s+=1)i[s].c();this.h()},l(s){t=g(s,"MAIN",{class:!0});var o=b(t);e=g(o,"H1",{});var l=b(e);a=S(l,"All Tags"),l.forEach(u),n=A(o),d=g(o,"HR",{}),f=A(o),r=g(o,"DIV",{class:!0});var v=b(r);for(let k=0;k<i.length;k+=1)i[k].l(v);v.forEach(u),o.forEach(u),this.h()},h(){p(r,"class","flex justify-center"),p(t,"class","mx-5 md:mx-20 lg:mx-40 xl:mx-80 pb-32 pt-4")},m(s,o){x(s,t,o),_(t,e),_(e,a),_(t,n),_(t,d),_(t,f),_(t,r);for(let l=0;l<i.length;l+=1)i[l].m(r,null)},p(s,[o]){if(o&1){h=s[0].tags;let l;for(l=0;l<h.length;l+=1){const v=I(s,h,l);i[l]?i[l].p(v,o):(i[l]=H(v),i[l].c(),i[l].m(r,null))}for(;l<i.length;l+=1)i[l].d(1);i.length=h.length}},i:y,o:y,d(s){s&&u(t),B(i,s)}}}function M(c,t,e){let{data:a}=t;return c.$$set=n=>{"data"in n&&e(0,a=n.data)},[a]}class R extends T{constructor(t){super(),V(this,t,M,F,j,{data:0})}}export{R as default};
