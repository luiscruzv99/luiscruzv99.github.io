import{S as R,i as G,s as J,k as g,w as H,a as y,q as K,l as m,m as $,x as T,h as u,c as k,r as L,n as E,b as z,D as i,y as F,f as w,d as O,t as I,z as M,F as Q,g as U}from"../../../../chunks/index-5963a7a1.js";import{B as W}from"../../../../chunks/BlogCard-459d5d6e.js";import{T as X}from"../../../../chunks/TagContainer-0052021c.js";function j(f,t,r){const o=f.slice();return o[1]=t[r],o}function q(f){let t,r,o,d;return r=new W({props:{blogEntry:f[1]}}),{c(){t=g("div"),H(r.$$.fragment),o=y(),this.h()},l(s){t=m(s,"DIV",{class:!0});var c=$(t);T(r.$$.fragment,c),o=k(c),c.forEach(u),this.h()},h(){E(t,"class","flex justify-center")},m(s,c){z(s,t,c),F(r,t,null),i(t,o),d=!0},p(s,c){const v={};c&1&&(v.blogEntry=s[1]),r.$set(v)},i(s){d||(w(r.$$.fragment,s),d=!0)},o(s){I(r.$$.fragment,s),d=!1},d(s){s&&u(t),M(r)}}}function Y(f){let t,r,o,d,s,c,v,A,S,B,_,C,b,D;o=new X({props:{tags:f[0].tags}});let p=f[0].orderedPosts,a=[];for(let e=0;e<p.length;e+=1)a[e]=q(j(f,p,e));const N=e=>I(a[e],1,1,()=>{a[e]=null});return{c(){t=g("div"),r=g("aside"),H(o.$$.fragment),d=y(),s=g("main"),c=g("h1"),v=K("All posts"),A=y(),S=g("hr"),B=y(),_=g("div");for(let e=0;e<a.length;e+=1)a[e].c();C=y(),b=g("aside"),this.h()},l(e){t=m(e,"DIV",{class:!0});var n=$(t);r=m(n,"ASIDE",{class:!0});var h=$(r);T(o.$$.fragment,h),h.forEach(u),d=k(n),s=m(n,"MAIN",{class:!0});var l=$(s);c=m(l,"H1",{});var x=$(c);v=L(x,"All posts"),x.forEach(u),A=k(l),S=m(l,"HR",{}),B=k(l),_=m(l,"DIV",{class:!0});var V=$(_);for(let P=0;P<a.length;P+=1)a[P].l(V);V.forEach(u),l.forEach(u),C=k(n),b=m(n,"ASIDE",{class:!0}),$(b).forEach(u),n.forEach(u),this.h()},h(){E(r,"class","hidden lg:block w-1/5 text-center my-auto p-8"),E(_,"class","grid md:grid-cols-2"),E(s,"class","md:3/4 lg:w-3/5"),E(b,"class","hidden lg:block w-1/5 text-center"),E(t,"class","flex justify-around p-4 md:p-8 lg:p-16")},m(e,n){z(e,t,n),i(t,r),F(o,r,null),i(t,d),i(t,s),i(s,c),i(c,v),i(s,A),i(s,S),i(s,B),i(s,_);for(let h=0;h<a.length;h+=1)a[h].m(_,null);i(t,C),i(t,b),D=!0},p(e,[n]){const h={};if(n&1&&(h.tags=e[0].tags),o.$set(h),n&1){p=e[0].orderedPosts;let l;for(l=0;l<p.length;l+=1){const x=j(e,p,l);a[l]?(a[l].p(x,n),w(a[l],1)):(a[l]=q(x),a[l].c(),w(a[l],1),a[l].m(_,null))}for(U(),l=p.length;l<a.length;l+=1)N(l);O()}},i(e){if(!D){w(o.$$.fragment,e);for(let n=0;n<p.length;n+=1)w(a[n]);D=!0}},o(e){I(o.$$.fragment,e),a=a.filter(Boolean);for(let n=0;n<a.length;n+=1)I(a[n]);D=!1},d(e){e&&u(t),M(o),Q(a,e)}}}function Z(f,t,r){let{data:o}=t;return f.$$set=d=>{"data"in d&&r(0,o=d.data)},[o]}class st extends R{constructor(t){super(),G(this,t,Z,Y,J,{data:0})}}export{st as default};
