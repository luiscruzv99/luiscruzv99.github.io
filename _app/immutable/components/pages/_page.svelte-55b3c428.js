import{S as ie,i as ce,s as he,k as p,a as T,q as j,l as v,m as y,h as c,c as U,r as S,n as r,b as M,D as n,u as Le,B as O,F as Ae,C as V,P as Q,Q as K,E as ve,R as Pe,f as Y,T as Re,e as ee,U as De,G as Ce,I as Te,w as ye,x as be,y as we,t as ke,z as xe}from"../../chunks/index-b123a481.js";import{a as Ue}from"../../chunks/index-6cee56f8.js";function Ie(h,e,l){const t=h.slice();return t[5]=e[l],t}function Me(h){let e,l;return{c(){e=p("img"),this.h()},l(t){e=v(t,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){V(e.src,l=h[2])||r(e,"src",l),r(e,"alt",""),r(e,"class","rounded-full")},m(t,s){M(t,e,s)},p(t,s){s&4&&!V(e.src,l=t[2])&&r(e,"src",l)},d(t){t&&c(e)}}}function Be(h){let e,l,t;return{c(){e=p("a"),l=p("img"),this.h()},l(s){e=v(s,"A",{href:!0,target:!0,class:!0});var a=y(e);l=v(a,"IMG",{src:!0,alt:!0,class:!0}),a.forEach(c),this.h()},h(){V(l.src,t=h[2])||r(l,"src",t),r(l,"alt",""),r(l,"class","rounded-full"),r(e,"href",h[3]),r(e,"target","_blank"),r(e,"class","hover:scale-105 transition ease-in-out")},m(s,a){M(s,e,a),n(e,l)},p(s,a){a&4&&!V(l.src,t=s[2])&&r(l,"src",t),a&8&&r(e,"href",s[3])},d(s){s&&c(e)}}}function Ee(h){let e,l=h[5]+"",t;return{c(){e=p("p"),t=j(l),this.h()},l(s){e=v(s,"P",{class:!0});var a=y(e);t=S(a,l),a.forEach(c),this.h()},h(){r(e,"class","p-2 md:text-justify")},m(s,a){M(s,e,a),n(e,t)},p(s,a){a&2&&l!==(l=s[5]+"")&&Le(t,l)},d(s){s&&c(e)}}}function Ne(h){let e,l,t,s,a,i,u,o,A;function L(f,k){return f[3].length>1?Be:Me}let E=L(h),d=E(h),b=h[1].split(`
`),m=[];for(let f=0;f<b.length;f+=1)m[f]=Ee(Ie(h,b,f));return{c(){e=p("div"),l=p("div"),d.c(),t=T(),s=p("div"),a=p("h2"),i=j(h[0]),u=T(),o=p("div");for(let f=0;f<m.length;f+=1)m[f].c();this.h()},l(f){e=v(f,"DIV",{class:!0});var k=y(e);l=v(k,"DIV",{class:!0});var g=y(l);d.l(g),g.forEach(c),t=U(k),s=v(k,"DIV",{class:!0});var x=y(s);a=v(x,"H2",{class:!0});var w=y(a);i=S(w,h[0]),w.forEach(c),u=U(x),o=v(x,"DIV",{class:!0});var _=y(o);for(let I=0;I<m.length;I+=1)m[I].l(_);_.forEach(c),x.forEach(c),k.forEach(c),this.h()},h(){r(l,"class","flex p-5 items-center m-auto w-3/4 md:w-1/3"),r(a,"class","text-left"),r(o,"class","font-dosis text-xl"),r(s,"class","block p-8 w-full"),r(e,"class",A="flex flex-col lg:flex-row rounded-xl "+h[4]+" my-10 drop-shadow-lg")},m(f,k){M(f,e,k),n(e,l),d.m(l,null),n(e,t),n(e,s),n(s,a),n(a,i),n(s,u),n(s,o);for(let g=0;g<m.length;g+=1)m[g].m(o,null)},p(f,[k]){if(E===(E=L(f))&&d?d.p(f,k):(d.d(1),d=E(f),d&&(d.c(),d.m(l,null))),k&1&&Le(i,f[0]),k&2){b=f[1].split(`
`);let g;for(g=0;g<b.length;g+=1){const x=Ie(f,b,g);m[g]?m[g].p(x,k):(m[g]=Ee(x),m[g].c(),m[g].m(o,null))}for(;g<m.length;g+=1)m[g].d(1);m.length=b.length}k&16&&A!==(A="flex flex-col lg:flex-row rounded-xl "+f[4]+" my-10 drop-shadow-lg")&&r(e,"class",A)},i:O,o:O,d(f){f&&c(e),d.d(),Ae(m,f)}}}function Ve(h,e,l){let{titulo:t=""}=e,{desc:s=""}=e,{imgSrc:a=""}=e,{imgLink:i=""}=e,{bgcolor:u="bg-cpink"}=e;return h.$$set=o=>{"titulo"in o&&l(0,t=o.titulo),"desc"in o&&l(1,s=o.desc),"imgSrc"in o&&l(2,a=o.imgSrc),"imgLink"in o&&l(3,i=o.imgLink),"bgcolor"in o&&l(4,u=o.bgcolor)},[t,s,a,i,u]}class Fe extends ie{constructor(e){super(),ce(this,e,Ve,Ne,he,{titulo:0,desc:1,imgSrc:2,imgLink:3,bgcolor:4})}}function je(h,e,l){const t=h.slice();return t[5]=e[l],t[7]=l,t}function Ge(h){let e,l,t;return{c(){e=p("img"),this.h()},l(s){e=v(s,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){V(e.src,l=h[5])||r(e,"src",l),r(e,"alt",""),r(e,"class","px-4 w-1/6 my-auto hidden lg:block")},m(s,a){M(s,e,a)},p(s,a){a&1&&!V(e.src,l=s[5])&&r(e,"src",l)},i(s){t||Ce(()=>{t=Te(e,Ue,{duration:400}),t.start()})},o:O,d(s){s&&c(e)}}}function He(h){let e,l,t;return{c(){e=p("img"),this.h()},l(s){e=v(s,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){V(e.src,l=h[5])||r(e,"src",l),r(e,"alt",""),r(e,"class","px-4")},m(s,a){M(s,e,a)},p(s,a){a&1&&!V(e.src,l=s[5])&&r(e,"src",l)},i(s){t||Ce(()=>{t=Te(e,Ue,{duration:400}),t.start()})},o:O,d(s){s&&c(e)}}}function Se(h,e){let l,t;function s(u,o){return u[7]==1?He:Ge}let a=s(e),i=a(e);return{key:h,first:null,c(){l=ee(),i.c(),t=ee(),this.h()},l(u){l=ee(),i.l(u),t=ee(),this.h()},h(){this.first=l},m(u,o){M(u,l,o),i.m(u,o),M(u,t,o)},p(u,o){e=u,a===(a=s(e))&&i?i.p(e,o):(i.d(1),i=a(e),i&&(i.c(),Y(i,1),i.m(t.parentNode,t)))},i(u){Y(i)},o:O,d(u){u&&c(l),i.d(u),u&&c(t)}}}function Oe(h){let e,l,t,s,a,i,u,o=[],A=new Map,L,E,d,b,m,f,k,g=h[0];const x=w=>w[5];for(let w=0;w<g.length;w+=1){let _=je(h,g,w),I=x(_);A.set(I,o[w]=Se(I,_))}return{c(){e=p("div"),l=p("button"),t=Q("svg"),s=Q("rect"),a=Q("rect"),i=T(),u=p("div");for(let w=0;w<o.length;w+=1)o[w].c();L=T(),E=p("button"),d=Q("svg"),b=Q("rect"),m=Q("rect"),this.h()},l(w){e=v(w,"DIV",{class:!0});var _=y(e);l=v(_,"BUTTON",{class:!0});var I=y(l);t=K(I,"svg",{version:!0,id:!0,xmlns:!0,"xmlns:xlink":!0,x:!0,y:!0,width:!0,height:!0,viewBox:!0,"enable-background":!0,"xml:space":!0});var P=y(t);s=K(P,"rect",{fill:!0,x:!0,y:!0,transform:!0,width:!0,height:!0}),y(s).forEach(c),a=K(P,"rect",{fill:!0,x:!0,y:!0,transform:!0,width:!0,height:!0}),y(a).forEach(c),P.forEach(c),I.forEach(c),i=U(_),u=v(_,"DIV",{class:!0});var q=y(u);for(let R=0;R<o.length;R+=1)o[R].l(q);q.forEach(c),L=U(_),E=v(_,"BUTTON",{class:!0});var z=y(E);d=K(z,"svg",{version:!0,id:!0,xmlns:!0,"xmlns:xlink":!0,x:!0,y:!0,width:!0,height:!0,viewBox:!0,"enable-background":!0,"xml:space":!0,class:!0});var F=y(d);b=K(F,"rect",{fill:!0,x:!0,y:!0,transform:!0,width:!0,height:!0}),y(b).forEach(c),m=K(F,"rect",{fill:!0,x:!0,y:!0,transform:!0,width:!0,height:!0}),y(m).forEach(c),F.forEach(c),z.forEach(c),_.forEach(c),this.h()},h(){r(s,"fill","#F15946"),r(s,"x","4"),r(s,"y","-0.5"),r(s,"transform","matrix(0.7072 0.707 -0.707 0.7072 5.4989 -2.2781)"),r(s,"width","2.999"),r(s,"height","12"),r(a,"fill","#F15946"),r(a,"x","4"),r(a,"y","5.864"),r(a,"transform","matrix(-0.7071 0.7071 -0.7071 -0.7071 17.7781 16.3651)"),r(a,"width","3"),r(a,"height","12"),r(t,"version","1.1"),r(t,"id","Layer_1"),r(t,"xmlns","http://www.w3.org/2000/svg"),r(t,"xmlns:xlink","http://www.w3.org/1999/xlink"),r(t,"x","0px"),r(t,"y","0px"),r(t,"width","3em"),r(t,"height","3em"),r(t,"viewBox","0 0 11 18"),r(t,"enable-background","new 0 0 11 18"),r(t,"xml:space","preserve"),r(l,"class","hidden md:block"),r(u,"class","flex justify-center lg:h-96"),r(b,"fill","#F15946"),r(b,"x","4"),r(b,"y","-0.5"),r(b,"transform","matrix(0.7072 0.707 -0.707 0.7072 5.4989 -2.2781)"),r(b,"width","2.999"),r(b,"height","12"),r(m,"fill","#F15946"),r(m,"x","4"),r(m,"y","5.864"),r(m,"transform","matrix(-0.7071 0.7071 -0.7071 -0.7071 17.7781 16.3651)"),r(m,"width","3"),r(m,"height","12"),r(d,"version","1.1"),r(d,"id","Layer_1"),r(d,"xmlns","http://www.w3.org/2000/svg"),r(d,"xmlns:xlink","http://www.w3.org/1999/xlink"),r(d,"x","0px"),r(d,"y","0px"),r(d,"width","3em"),r(d,"height","3em"),r(d,"viewBox","0 0 11 18"),r(d,"enable-background","new 0 0 11 18"),r(d,"xml:space","preserve"),r(d,"class","rotate-180"),r(E,"class","hidden md:block"),r(e,"class","w-full flex overflow-x-hidden self-center")},m(w,_){M(w,e,_),n(e,l),n(l,t),n(t,s),n(t,a),n(e,i),n(e,u);for(let I=0;I<o.length;I+=1)o[I].m(u,null);n(e,L),n(e,E),n(E,d),n(d,b),n(d,m),f||(k=[ve(l,"click",h[2]),ve(E,"click",h[1])],f=!0)},p(w,[_]){_&1&&(g=w[0],o=Pe(o,_,x,1,w,g,A,u,De,Se,null,je))},i(w){for(let _=0;_<g.length;_+=1)Y(o[_])},o:O,d(w){w&&c(e);for(let _=0;_<o.length;_+=1)o[_].d();f=!1,Re(k)}}}function qe(h,e,l){let{files:t}=e,s=[t[t.length-1],t[0],t[1]],a=0;async function i(){a=(a+1)%t.length,l(0,s=[t[((a-1)%t.length+t.length)%t.length],t[a%t.length],t[(a+1)%t.length]])}function u(){a=((a-1)%t.length+t.length)%t.length,l(0,s=[t[((a-1)%t.length+t.length)%t.length],t[a%t.length],t[(a+1)%t.length]])}return setInterval(()=>{i()},5e3),h.$$set=o=>{"files"in o&&l(3,t=o.files)},[s,i,u,t]}class ze extends ie{constructor(e){super(),ce(this,e,qe,Oe,he,{files:3})}}const Je=""+new URL("../../assets/profile-edfbac92.jpg",import.meta.url).href,We=`I'm a software engineer based in Santander, currently finishing my masters in computing engineering.\r
I really enjoy web technologies, AI, and anything coding related. So much so that I created this page, to be able to showcase my side projects. \r
In the past I have worked with several languages, like Java, Python, C or JS/TS, but I'm always looking to expand my knowledge in computer science. If you feel curious and want to learn more, you can visit my github profile by clicking my picture.\r
Thank you for visiting and enjoy your stay\u{1F60A}`,Qe=""+new URL("../../assets/pathfinder-eccf7650.png",import.meta.url).href,Ke=""+new URL("../../assets/cells-71bc9f60.gif",import.meta.url).href,Xe=""+new URL("../../assets/dotfiles-2983d81c.png",import.meta.url).href,Ye=""+new URL("../../assets/svsChat-5a5dcf64.png",import.meta.url).href;function Ze(h){let e,l,t,s,a,i,u,o,A,L,E,d,b,m,f,k,g,x,w,_,I,P,q,z,F,R,X,te,re,B,le,G,se,ae,H,ne,oe,Z;return l=new Fe({props:{titulo:"About Me",desc:We,imgSrc:Je,imgLink:"https://github.com/luiscruzv99"}}),P=new ze({props:{files:[Ke,Qe,Xe,Ye]}}),{c(){e=p("div"),ye(l.$$.fragment),t=T(),s=p("hr"),a=T(),i=p("section"),u=p("h1"),o=j("My Projects"),A=T(),L=p("p"),E=j(`As part of my habit of learning new technologies, and as a way of practising coding, I tend to
			start a lot of really small and simple projects. Unfortunately, most of them don't ever get to
			see the light of day and be uploaded to my github, and they usually end up being deleted once
			I feel I'm finished with them. Nonetheless, there are some that I do upload to my github, in
			order to save the code for future reference, or just to work on them again when I feel like
			it.`),d=T(),b=p("p"),m=j("If you feel curious, you can always check my "),f=p("a"),k=j("projects page"),g=j(`, my
			`),x=p("a"),w=j("github page"),_=j(`, or
			just look at some of the project images down below.`),I=T(),ye(P.$$.fragment),q=T(),z=p("hr"),F=T(),R=p("section"),X=p("h1"),te=j("The blog"),re=T(),B=p("p"),le=j(`Sometimes I feel the need to leave a written reference of something I've done or found, to use
			it in the future. Sometimes I simply want to write about a thing that has peaked my interest
			or about my interests and hobbies. Whatever the case may be, if you think there might be
			something of value, don't be afraid to take a look `),G=p("a"),se=j("here"),ae=j(`
			or check `),H=p("a"),ne=j("the last post"),oe=j(" I made."),this.h()},l(D){e=v(D,"DIV",{class:!0});var C=y(e);be(l.$$.fragment,C),t=U(C),s=v(C,"HR",{}),a=U(C),i=v(C,"SECTION",{});var N=y(i);u=v(N,"H1",{});var ue=y(u);o=S(ue,"My Projects"),ue.forEach(c),A=U(N),L=v(N,"P",{class:!0});var fe=y(L);E=S(fe,`As part of my habit of learning new technologies, and as a way of practising coding, I tend to
			start a lot of really small and simple projects. Unfortunately, most of them don't ever get to
			see the light of day and be uploaded to my github, and they usually end up being deleted once
			I feel I'm finished with them. Nonetheless, there are some that I do upload to my github, in
			order to save the code for future reference, or just to work on them again when I feel like
			it.`),fe.forEach(c),d=U(N),b=v(N,"P",{class:!0});var J=y(b);m=S(J,"If you feel curious, you can always check my "),f=v(J,"A",{class:!0,href:!0});var de=y(f);k=S(de,"projects page"),de.forEach(c),g=S(J,`, my
			`),x=v(J,"A",{class:!0,href:!0,target:!0});var me=y(x);w=S(me,"github page"),me.forEach(c),_=S(J,`, or
			just look at some of the project images down below.`),J.forEach(c),I=U(N),be(P.$$.fragment,N),N.forEach(c),q=U(C),z=v(C,"HR",{}),F=U(C),R=v(C,"SECTION",{});var $=y(R);X=v($,"H1",{});var ge=y(X);te=S(ge,"The blog"),ge.forEach(c),re=U($),B=v($,"P",{});var W=y(B);le=S(W,`Sometimes I feel the need to leave a written reference of something I've done or found, to use
			it in the future. Sometimes I simply want to write about a thing that has peaked my interest
			or about my interests and hobbies. Whatever the case may be, if you think there might be
			something of value, don't be afraid to take a look `),G=v(W,"A",{href:!0,class:!0});var _e=y(G);se=S(_e,"here"),_e.forEach(c),ae=S(W,`
			or check `),H=v(W,"A",{href:!0,class:!0});var pe=y(H);ne=S(pe,"the last post"),pe.forEach(c),oe=S(W," I made."),W.forEach(c),$.forEach(c),C.forEach(c),this.h()},h(){r(L,"class","p-4"),r(f,"class","page_link"),r(f,"href","./projects"),r(x,"class","page_link"),r(x,"href","https://github.com/luiscruzv99"),r(x,"target","_blank"),r(b,"class","p-4"),r(G,"href","./blog"),r(G,"class","page_link"),r(H,"href","./blog"),r(H,"class","page_link"),r(e,"class","mx-5 md:mx-20 lg:mx-40 xl:mx-80 pb-32")},m(D,C){M(D,e,C),we(l,e,null),n(e,t),n(e,s),n(e,a),n(e,i),n(i,u),n(u,o),n(i,A),n(i,L),n(L,E),n(i,d),n(i,b),n(b,m),n(b,f),n(f,k),n(b,g),n(b,x),n(x,w),n(b,_),n(i,I),we(P,i,null),n(e,q),n(e,z),n(e,F),n(e,R),n(R,X),n(X,te),n(R,re),n(R,B),n(B,le),n(B,G),n(G,se),n(B,ae),n(B,H),n(H,ne),n(B,oe),Z=!0},p:O,i(D){Z||(Y(l.$$.fragment,D),Y(P.$$.fragment,D),Z=!0)},o(D){ke(l.$$.fragment,D),ke(P.$$.fragment,D),Z=!1},d(D){D&&c(e),xe(l),xe(P)}}}class tt extends ie{constructor(e){super(),ce(this,e,null,Ze,he,{})}}export{tt as default};
