import{S as fe,i as de,s as me,k as g,a as U,q as S,l as _,m as p,h as i,c as M,r as L,n as r,b as P,D as n,u as Me,B as z,F as Ve,C as F,P as K,Q as X,E as xe,R as Be,f as Z,T as He,e as te,U as Ne,G as Pe,I as Re,w as Ie,V as Fe,x as Ee,y as je,t as Se,z as Le}from"../../chunks/index-2ce92430.js";import{a as De}from"../../chunks/index-03399a6b.js";function Ce(c,e,s){const t=c.slice();return t[5]=e[s],t}function Ge(c){let e,s;return{c(){e=g("img"),this.h()},l(t){e=_(t,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){F(e.src,s=c[2])||r(e,"src",s),r(e,"alt",""),r(e,"class","rounded-full")},m(t,l){P(t,e,l)},p(t,l){l&4&&!F(e.src,s=t[2])&&r(e,"src",s)},d(t){t&&i(e)}}}function Oe(c){let e,s,t;return{c(){e=g("a"),s=g("img"),this.h()},l(l){e=_(l,"A",{href:!0,target:!0,class:!0});var a=p(e);s=_(a,"IMG",{src:!0,alt:!0,class:!0}),a.forEach(i),this.h()},h(){F(s.src,t=c[2])||r(s,"src",t),r(s,"alt",""),r(s,"class","rounded-full"),r(e,"href",c[3]),r(e,"target","_blank"),r(e,"class","hover:scale-105 transition ease-in-out")},m(l,a){P(l,e,a),n(e,s)},p(l,a){a&4&&!F(s.src,t=l[2])&&r(s,"src",t),a&8&&r(e,"href",l[3])},d(l){l&&i(e)}}}function Te(c){let e,s=c[5]+"",t;return{c(){e=g("p"),t=S(s),this.h()},l(l){e=_(l,"P",{class:!0});var a=p(e);t=L(a,s),a.forEach(i),this.h()},h(){r(e,"class","p-2 md:text-justify")},m(l,a){P(l,e,a),n(e,t)},p(l,a){a&2&&s!==(s=l[5]+"")&&Me(t,s)},d(l){l&&i(e)}}}function qe(c){let e,s,t,l,a,d,u,o,C;function A(h,k){return h[3].length>1?Oe:Ge}let E=A(c),f=E(c),y=c[1].split(`
`),m=[];for(let h=0;h<y.length;h+=1)m[h]=Te(Ce(c,y,h));return{c(){e=g("div"),s=g("div"),f.c(),t=U(),l=g("div"),a=g("h2"),d=S(c[0]),u=U(),o=g("div");for(let h=0;h<m.length;h+=1)m[h].c();this.h()},l(h){e=_(h,"DIV",{class:!0});var k=p(e);s=_(k,"DIV",{class:!0});var v=p(s);f.l(v),v.forEach(i),t=M(k),l=_(k,"DIV",{class:!0});var x=p(l);a=_(x,"H2",{class:!0});var w=p(a);d=L(w,c[0]),w.forEach(i),u=M(x),o=_(x,"DIV",{class:!0});var b=p(o);for(let I=0;I<m.length;I+=1)m[I].l(b);b.forEach(i),x.forEach(i),k.forEach(i),this.h()},h(){r(s,"class","flex p-5 items-center m-auto w-3/4 md:w-1/3"),r(a,"class","text-left"),r(o,"class","font-dosis text-xl"),r(l,"class","block p-8 w-full"),r(e,"class",C="flex flex-col lg:flex-row rounded-xl "+c[4]+" my-10 drop-shadow-lg")},m(h,k){P(h,e,k),n(e,s),f.m(s,null),n(e,t),n(e,l),n(l,a),n(a,d),n(l,u),n(l,o);for(let v=0;v<m.length;v+=1)m[v].m(o,null)},p(h,[k]){if(E===(E=A(h))&&f?f.p(h,k):(f.d(1),f=E(h),f&&(f.c(),f.m(s,null))),k&1&&Me(d,h[0]),k&2){y=h[1].split(`
`);let v;for(v=0;v<y.length;v+=1){const x=Ce(h,y,v);m[v]?m[v].p(x,k):(m[v]=Te(x),m[v].c(),m[v].m(o,null))}for(;v<m.length;v+=1)m[v].d(1);m.length=y.length}k&16&&C!==(C="flex flex-col lg:flex-row rounded-xl "+h[4]+" my-10 drop-shadow-lg")&&r(e,"class",C)},i:z,o:z,d(h){h&&i(e),f.d(),Ve(m,h)}}}function ze(c,e,s){let{titulo:t=""}=e,{desc:l=""}=e,{imgSrc:a=""}=e,{imgLink:d=""}=e,{bgcolor:u="bg-cpink"}=e;return c.$$set=o=>{"titulo"in o&&s(0,t=o.titulo),"desc"in o&&s(1,l=o.desc),"imgSrc"in o&&s(2,a=o.imgSrc),"imgLink"in o&&s(3,d=o.imgLink),"bgcolor"in o&&s(4,u=o.bgcolor)},[t,l,a,d,u]}class Je extends fe{constructor(e){super(),de(this,e,ze,qe,me,{titulo:0,desc:1,imgSrc:2,imgLink:3,bgcolor:4})}}function Ae(c,e,s){const t=c.slice();return t[5]=e[s],t[7]=s,t}function We(c){let e,s,t;return{c(){e=g("img"),this.h()},l(l){e=_(l,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){F(e.src,s=c[5])||r(e,"src",s),r(e,"alt",""),r(e,"class","px-4 w-1/6 my-auto hidden lg:block")},m(l,a){P(l,e,a)},p(l,a){a&1&&!F(e.src,s=l[5])&&r(e,"src",s)},i(l){t||Pe(()=>{t=Re(e,De,{duration:400}),t.start()})},o:z,d(l){l&&i(e)}}}function Qe(c){let e,s,t;return{c(){e=g("img"),this.h()},l(l){e=_(l,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){F(e.src,s=c[5])||r(e,"src",s),r(e,"alt",""),r(e,"class","px-4")},m(l,a){P(l,e,a)},p(l,a){a&1&&!F(e.src,s=l[5])&&r(e,"src",s)},i(l){t||Pe(()=>{t=Re(e,De,{duration:400}),t.start()})},o:z,d(l){l&&i(e)}}}function Ue(c,e){let s,t;function l(u,o){return u[7]==1?Qe:We}let a=l(e),d=a(e);return{key:c,first:null,c(){s=te(),d.c(),t=te(),this.h()},l(u){s=te(),d.l(u),t=te(),this.h()},h(){this.first=s},m(u,o){P(u,s,o),d.m(u,o),P(u,t,o)},p(u,o){e=u,a===(a=l(e))&&d?d.p(e,o):(d.d(1),d=a(e),d&&(d.c(),Z(d,1),d.m(t.parentNode,t)))},i(u){Z(d)},o:z,d(u){u&&i(s),d.d(u),u&&i(t)}}}function Ke(c){let e,s,t,l,a,d,u,o=[],C=new Map,A,E,f,y,m,h,k,v=c[0];const x=w=>w[5];for(let w=0;w<v.length;w+=1){let b=Ae(c,v,w),I=x(b);C.set(I,o[w]=Ue(I,b))}return{c(){e=g("div"),s=g("button"),t=K("svg"),l=K("rect"),a=K("rect"),d=U(),u=g("div");for(let w=0;w<o.length;w+=1)o[w].c();A=U(),E=g("button"),f=K("svg"),y=K("rect"),m=K("rect"),this.h()},l(w){e=_(w,"DIV",{class:!0});var b=p(e);s=_(b,"BUTTON",{class:!0});var I=p(s);t=X(I,"svg",{version:!0,id:!0,xmlns:!0,"xmlns:xlink":!0,x:!0,y:!0,width:!0,height:!0,viewBox:!0,"enable-background":!0,"xml:space":!0});var j=p(t);l=X(j,"rect",{fill:!0,x:!0,y:!0,transform:!0,width:!0,height:!0}),p(l).forEach(i),a=X(j,"rect",{fill:!0,x:!0,y:!0,transform:!0,width:!0,height:!0}),p(a).forEach(i),j.forEach(i),I.forEach(i),d=M(b),u=_(b,"DIV",{class:!0});var B=p(u);for(let R=0;R<o.length;R+=1)o[R].l(B);B.forEach(i),A=M(b),E=_(b,"BUTTON",{class:!0});var J=p(E);f=X(J,"svg",{version:!0,id:!0,xmlns:!0,"xmlns:xlink":!0,x:!0,y:!0,width:!0,height:!0,viewBox:!0,"enable-background":!0,"xml:space":!0,class:!0});var G=p(f);y=X(G,"rect",{fill:!0,x:!0,y:!0,transform:!0,width:!0,height:!0}),p(y).forEach(i),m=X(G,"rect",{fill:!0,x:!0,y:!0,transform:!0,width:!0,height:!0}),p(m).forEach(i),G.forEach(i),J.forEach(i),b.forEach(i),this.h()},h(){r(l,"fill","#F15946"),r(l,"x","4"),r(l,"y","-0.5"),r(l,"transform","matrix(0.7072 0.707 -0.707 0.7072 5.4989 -2.2781)"),r(l,"width","2.999"),r(l,"height","12"),r(a,"fill","#F15946"),r(a,"x","4"),r(a,"y","5.864"),r(a,"transform","matrix(-0.7071 0.7071 -0.7071 -0.7071 17.7781 16.3651)"),r(a,"width","3"),r(a,"height","12"),r(t,"version","1.1"),r(t,"id","Layer_1"),r(t,"xmlns","http://www.w3.org/2000/svg"),r(t,"xmlns:xlink","http://www.w3.org/1999/xlink"),r(t,"x","0px"),r(t,"y","0px"),r(t,"width","3em"),r(t,"height","3em"),r(t,"viewBox","0 0 11 18"),r(t,"enable-background","new 0 0 11 18"),r(t,"xml:space","preserve"),r(s,"class","hidden md:block"),r(u,"class","flex justify-center lg:h-96"),r(y,"fill","#F15946"),r(y,"x","4"),r(y,"y","-0.5"),r(y,"transform","matrix(0.7072 0.707 -0.707 0.7072 5.4989 -2.2781)"),r(y,"width","2.999"),r(y,"height","12"),r(m,"fill","#F15946"),r(m,"x","4"),r(m,"y","5.864"),r(m,"transform","matrix(-0.7071 0.7071 -0.7071 -0.7071 17.7781 16.3651)"),r(m,"width","3"),r(m,"height","12"),r(f,"version","1.1"),r(f,"id","Layer_1"),r(f,"xmlns","http://www.w3.org/2000/svg"),r(f,"xmlns:xlink","http://www.w3.org/1999/xlink"),r(f,"x","0px"),r(f,"y","0px"),r(f,"width","3em"),r(f,"height","3em"),r(f,"viewBox","0 0 11 18"),r(f,"enable-background","new 0 0 11 18"),r(f,"xml:space","preserve"),r(f,"class","rotate-180"),r(E,"class","hidden md:block"),r(e,"class","w-full flex overflow-x-hidden self-center")},m(w,b){P(w,e,b),n(e,s),n(s,t),n(t,l),n(t,a),n(e,d),n(e,u);for(let I=0;I<o.length;I+=1)o[I].m(u,null);n(e,A),n(e,E),n(E,f),n(f,y),n(f,m),h||(k=[xe(s,"click",c[2]),xe(E,"click",c[1])],h=!0)},p(w,[b]){b&1&&(v=w[0],o=Be(o,b,x,1,w,v,C,u,Ne,Ue,null,Ae))},i(w){for(let b=0;b<v.length;b+=1)Z(o[b])},o:z,d(w){w&&i(e);for(let b=0;b<o.length;b+=1)o[b].d();h=!1,He(k)}}}function Xe(c,e,s){let{files:t}=e,l=[t[t.length-1],t[0],t[1]],a=0;async function d(){a=(a+1)%t.length,s(0,l=[t[((a-1)%t.length+t.length)%t.length],t[a%t.length],t[(a+1)%t.length]])}function u(){a=((a-1)%t.length+t.length)%t.length,s(0,l=[t[((a-1)%t.length+t.length)%t.length],t[a%t.length],t[(a+1)%t.length]])}return setInterval(()=>{d()},5e3),c.$$set=o=>{"files"in o&&s(3,t=o.files)},[l,d,u,t]}class Ye extends fe{constructor(e){super(),de(this,e,Xe,Ke,me,{files:3})}}const Ze=""+new URL("../../assets/profile-edfbac92.jpg",import.meta.url).href,$e=`I'm a software engineer based in Santander, currently finishing my masters in computing engineering.\r
I really enjoy web technologies, AI, and anything coding related. So much so that I created this page, to be able to showcase my side projects. \r
In the past I have worked with several languages, like Java, Python, C or JS/TS, but I'm always looking to expand my knowledge in computer science. If you feel curious and want to learn more, you can visit my github profile by clicking my picture.\r
Thank you for visiting and enjoy your stay\u{1F60A}`,et=""+new URL("../../assets/pathfinder-eccf7650.png",import.meta.url).href,tt=""+new URL("../../assets/cells-71bc9f60.gif",import.meta.url).href,rt=""+new URL("../../assets/dotfiles-2983d81c.png",import.meta.url).href,lt=""+new URL("../../assets/svsChat-5a5dcf64.png",import.meta.url).href;function st(c){let e,s,t,l,a,d,u,o,C,A,E,f,y,m,h,k,v,x,w,b,I,j,B,J,G,R,re,le,D,se,O,ae,ne,H,oe,ie,ce,q,he,ue,$;return l=new Je({props:{titulo:"About Me",desc:$e,imgSrc:Ze,imgLink:"https://github.com/luiscruzv99"}}),q=new Ye({props:{files:[tt,et,rt,lt]}}),{c(){e=g("html"),s=U(),t=g("div"),Ie(l.$$.fragment),a=U(),d=g("hr"),u=U(),o=g("section"),C=g("a"),A=g("h1"),E=S("The blog"),f=U(),y=g("p"),m=S(`Sometimes I feel the need to leave a written reference of something I've done or found, to use
			it in the future. Sometimes I simply want to write about a thing that has peaked my interest
			or about my interests and hobbies. Whatever the case may be, if you think there might be
			something of value, don't be afraid to take a look `),h=g("a"),k=S("here"),v=S(`
			or check `),x=g("a"),w=S("the last post"),b=S(" I made."),I=U(),j=g("section"),B=g("h1"),J=S("My Projects"),G=U(),R=g("p"),re=S(`As part of my habit of learning new technologies, and as a way of practising coding, I tend to
			start a lot of really small and simple projects. Unfortunately, most of them don't ever get to
			see the light of day and be uploaded to my github, and they usually end up being deleted once
			I feel I'm finished with them. Nonetheless, there are some that I do upload to my github, in
			order to save the code for future reference, or just to work on them again when I feel like
			it.`),le=U(),D=g("p"),se=S("If you feel curious, you can always check my "),O=g("a"),ae=S("projects page"),ne=S(`, my
			`),H=g("a"),oe=S("github page"),ie=S(`, or
			just look at some of the project images down below.`),ce=U(),Ie(q.$$.fragment),he=U(),ue=g("hr"),this.h()},l(T){const Y=Fe("svelte-1is1pg6",document.head);e=_(Y,"HTML",{lang:!0}),p(e).forEach(i),Y.forEach(i),s=M(T),t=_(T,"DIV",{class:!0});var V=p(t);Ee(l.$$.fragment,V),a=M(V),d=_(V,"HR",{}),u=M(V),o=_(V,"SECTION",{});var ee=p(o);C=_(ee,"A",{href:!0});var ge=p(C);A=_(ge,"H1",{class:!0});var _e=p(A);E=L(_e,"The blog"),_e.forEach(i),ge.forEach(i),f=M(ee),y=_(ee,"P",{});var W=p(y);m=L(W,`Sometimes I feel the need to leave a written reference of something I've done or found, to use
			it in the future. Sometimes I simply want to write about a thing that has peaked my interest
			or about my interests and hobbies. Whatever the case may be, if you think there might be
			something of value, don't be afraid to take a look `),h=_(W,"A",{href:!0,class:!0});var pe=p(h);k=L(pe,"here"),pe.forEach(i),v=L(W,`
			or check `),x=_(W,"A",{href:!0,class:!0});var ve=p(x);w=L(ve,"the last post"),ve.forEach(i),b=L(W," I made."),W.forEach(i),ee.forEach(i),I=M(V),j=_(V,"SECTION",{});var N=p(j);B=_(N,"H1",{});var be=p(B);J=L(be,"My Projects"),be.forEach(i),G=M(N),R=_(N,"P",{class:!0});var ye=p(R);re=L(ye,`As part of my habit of learning new technologies, and as a way of practising coding, I tend to
			start a lot of really small and simple projects. Unfortunately, most of them don't ever get to
			see the light of day and be uploaded to my github, and they usually end up being deleted once
			I feel I'm finished with them. Nonetheless, there are some that I do upload to my github, in
			order to save the code for future reference, or just to work on them again when I feel like
			it.`),ye.forEach(i),le=M(N),D=_(N,"P",{class:!0});var Q=p(D);se=L(Q,"If you feel curious, you can always check my "),O=_(Q,"A",{class:!0,href:!0});var we=p(O);ae=L(we,"projects page"),we.forEach(i),ne=L(Q,`, my
			`),H=_(Q,"A",{class:!0,href:!0,target:!0});var ke=p(H);oe=L(ke,"github page"),ke.forEach(i),ie=L(Q,`, or
			just look at some of the project images down below.`),Q.forEach(i),ce=M(N),Ee(q.$$.fragment,N),N.forEach(i),he=M(V),ue=_(V,"HR",{}),V.forEach(i),this.h()},h(){document.title="Home - Luis' page",r(e,"lang","en"),r(A,"class","px-4 hover:scale-110 hover:font-bold hover:text-fopal transition ease-in-out duration-200"),r(C,"href","/blog"),r(h,"href","./blog"),r(h,"class","page_link"),r(x,"href","./blog"),r(x,"class","page_link"),r(R,"class","p-4"),r(O,"class","page_link"),r(O,"href","./projects"),r(H,"class","page_link"),r(H,"href","https://github.com/luiscruzv99"),r(H,"target","_blank"),r(D,"class","p-4"),r(t,"class","mx-5 md:mx-20 lg:mx-40 xl:mx-80")},m(T,Y){n(document.head,e),P(T,s,Y),P(T,t,Y),je(l,t,null),n(t,a),n(t,d),n(t,u),n(t,o),n(o,C),n(C,A),n(A,E),n(o,f),n(o,y),n(y,m),n(y,h),n(h,k),n(y,v),n(y,x),n(x,w),n(y,b),n(t,I),n(t,j),n(j,B),n(B,J),n(j,G),n(j,R),n(R,re),n(j,le),n(j,D),n(D,se),n(D,O),n(O,ae),n(D,ne),n(D,H),n(H,oe),n(D,ie),n(j,ce),je(q,j,null),n(t,he),n(t,ue),$=!0},p:z,i(T){$||(Z(l.$$.fragment,T),Z(q.$$.fragment,T),$=!0)},o(T){Se(l.$$.fragment,T),Se(q.$$.fragment,T),$=!1},d(T){i(e),T&&i(s),T&&i(t),Le(l),Le(q)}}}class ot extends fe{constructor(e){super(),de(this,e,null,st,me,{})}}export{ot as default};
