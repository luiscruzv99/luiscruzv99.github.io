import{_ as i}from"./preload-helper-aa6bc0ce.js";const a=(o,e)=>{const t=o[e];return t?typeof t=="function"?t():Promise.resolve(t):new Promise((n,r)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(r.bind(null,new Error("Unknown variable dynamic import: "+e)))})};async function s({params:o}){const e=await a(Object.assign({"../blogEntries/changelog_0.2.md":()=>i(()=>import("./changelog_0.2-9a4137e6.js"),["changelog_0.2-9a4137e6.js","index-2ce92430.js","blog-dd810baa.js","../assets/blog-657e27b9.css"],import.meta.url),"../blogEntries/making_of.md":()=>i(()=>import("./making_of-ad7b7423.js"),["making_of-ad7b7423.js","index-2ce92430.js","blog-dd810baa.js","../assets/blog-657e27b9.css"],import.meta.url)}),`../blogEntries/${o.slug}.md`);try{const{title:t,date:n,tags:r}=e.metadata;return{content:e.default,title:t,date:n,tags:r}}catch{return{}}}const u=Object.freeze(Object.defineProperty({__proto__:null,load:s},Symbol.toStringTag,{value:"Module"}));export{u as _,s as l};
