import"../chunks/DsnmJJEf.js";import{p as q,a,b as B,s as t,d as n,f as k,c,r as l,au as i,at as h}from"../chunks/9hBVOzVF.js";import{i as L}from"../chunks/LVNYBr06.js";import{C as d}from"../chunks/B1PveZMo.js";import{B as x}from"../chunks/BHExk8si.js";var F=c('<pre class="svelte-1xmjmrw">Authorization: Bearer YOUR_API_KEY</pre>'),K=c('<div class="method svelte-1xmjmrw">POST</div> <code>https://api.metarank.dev/v1/seo/meta</code>',1),D=c('<pre class="svelte-1xmjmrw"></pre>'),G=c('<pre class="svelte-1xmjmrw"></pre>'),J=c('<div class="example-header svelte-1xmjmrw"><span class="svelte-1xmjmrw">cURL</span> <!></div> <pre class="svelte-1xmjmrw"></pre>',1),N=c('<div class="example-header svelte-1xmjmrw"><span class="svelte-1xmjmrw">JavaScript</span> <!></div> <pre class="svelte-1xmjmrw"></pre>',1),Q=c('<h2>Get started</h2> <p class="svelte-1xmjmrw">Try MetaRank in the browser or integrate it directly using the API.</p> <div class="cta-actions svelte-1xmjmrw"><!> <!></div>',1),V=c(`<div class="page-shell docs svelte-1xmjmrw"><header class="docs-hero svelte-1xmjmrw"><h1 class="page-title svelte-1xmjmrw">MetaRank API Documentation</h1> <p class="page-lead svelte-1xmjmrw">Generate clean, search-optimized SEO metadata from real content using a single API call.</p></header> <section class="svelte-1xmjmrw"><h2 class="svelte-1xmjmrw">What MetaRank does</h2> <p class="svelte-1xmjmrw">MetaRank analyzes your article content and returns SEO-ready metadata including titles,
			descriptions, keywords, slugs, and search intent.</p> <p class="svelte-1xmjmrw">There is no training phase, no prompt management, and no tuning required.
			You provide content. MetaRank returns metadata.</p></section> <section class="svelte-1xmjmrw"><h2 class="svelte-1xmjmrw">Authentication</h2> <p class="svelte-1xmjmrw">All requests require an API key passed via the Authorization header.</p> <!></section> <section class="svelte-1xmjmrw"><h2 class="svelte-1xmjmrw">API Endpoint</h2> <!></section> <section class="svelte-1xmjmrw"><h2 class="svelte-1xmjmrw">Request body</h2> <!> <ul class="field-notes svelte-1xmjmrw"><li class="svelte-1xmjmrw"><strong>title</strong> (required) — Article title</li> <li class="svelte-1xmjmrw"><strong>body</strong> (required) — Minimum 100 characters</li> <li class="svelte-1xmjmrw"><strong>location</strong> (optional) — Geographic SEO context</li> <li class="svelte-1xmjmrw"><strong>targetQuery</strong> (optional) — Overrides inferred intent</li></ul></section> <section class="svelte-1xmjmrw"><h2 class="svelte-1xmjmrw">Response</h2> <!> <p class="note svelte-1xmjmrw">Responses are deterministic JSON and safe to store or cache.</p></section> <section class="svelte-1xmjmrw"><h2 class="svelte-1xmjmrw">Examples</h2> <!> <!></section> <section class="svelte-1xmjmrw"><h2 class="svelte-1xmjmrw">Usage and limits</h2> <ul class="svelte-1xmjmrw"><li class="svelte-1xmjmrw">One request equals one article processed</li> <li class="svelte-1xmjmrw">Failed requests are not billed</li> <li class="svelte-1xmjmrw">Retries do not count toward usage</li> <li class="svelte-1xmjmrw">Usage resets monthly</li></ul></section> <section class="svelte-1xmjmrw"><h2 class="svelte-1xmjmrw">Data handling</h2> <p class="svelte-1xmjmrw">Content is processed ephemerally. MetaRank does not store content or use it for training.</p></section> <!></div>`);function se(O,A){q(A,!0);const T=s=>navigator.clipboard.writeText(s),R=`curl -X POST https://api.metarank.dev/v1/seo/meta \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "title": "How to build a SaaS product",
    "body": "Full article content in Markdown, HTML, or plain text"
  }'`,H=`fetch("https://api.metarank.dev/v1/seo/meta", {
  method: "POST",
  headers: {
    Authorization: "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    title: "How to build a SaaS product",
    body: "Full article content in Markdown, HTML, or plain text"
  })
}).then(res => res.json());`;var g=V(),j=t(n(g),4),C=t(n(j),4);d(C,{children:(s,m)=>{var e=F();a(s,e)},$$slots:{default:!0}}),l(j);var _=t(j,2),z=t(n(_),2);d(z,{class:"endpoint",children:(s,m)=>{var e=K();i(2),a(s,e)},$$slots:{default:!0}}),l(_);var f=t(_,2),I=t(n(f),2);d(I,{children:(s,m)=>{var e=D();e.textContent=`{
  "title": "How to build a SaaS product as a solo founder",
  "body": "Full article content in Markdown, HTML, or plain text",
  "location": "United Kingdom",
  "targetQuery": "build a SaaS product"
}`,a(s,e)},$$slots:{default:!0}}),i(2),l(f);var $=t(f,2),E=t(n($),2);d(E,{children:(s,m)=>{var e=G();e.textContent=`{
  "metaTitle": "How to Build a SaaS Product as a Solo Founder",
  "metaDescription": "Learn how to validate a SaaS idea, choose a tech stack, build an MVP, and launch.",
  "slug": "build-saas-product-solo-founder",
  "keywords": "saas product, solo founder, build saas",
  "ogDescription": "A practical guide to building a SaaS product as a solo founder.",
  "searchIntent": "informational",
  "primaryLocation": "United Kingdom",
  "languageCode": "en"
}`,a(s,e)},$$slots:{default:!0}}),i(2),l($);var y=t($,2),M=t(n(y),2);d(M,{class:"example-block",children:(s,m)=>{var e=J(),o=k(e),p=t(n(o),2);x(p,{size:"sm",variant:"ghost",onclick:()=>T(R),children:(u,S)=>{i();var r=h("Copy");a(u,r)},$$slots:{default:!0}}),l(o);var v=t(o,2);v.textContent=`curl -X POST https://api.metarank.dev/v1/seo/meta \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "title": "How to build a SaaS product",
    "body": "Full article content in Markdown, HTML, or plain text"
  }'`,a(s,e)},$$slots:{default:!0}});var Y=t(M,2);d(Y,{class:"example-block",children:(s,m)=>{var e=N(),o=k(e),p=t(n(o),2);x(p,{size:"sm",variant:"ghost",onclick:()=>T(H),children:(u,S)=>{i();var r=h("Copy");a(u,r)},$$slots:{default:!0}}),l(o);var v=t(o,2);v.textContent=`fetch("https://api.metarank.dev/v1/seo/meta", {
  method: "POST",
  headers: {
    Authorization: "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    title: "How to build a SaaS product",
    body: "Full article content in Markdown, HTML, or plain text"
  })
}).then(res => res.json());`,a(s,e)},$$slots:{default:!0}}),l(y);var U=t(y,6);d(U,{class:"cta",children:(s,m)=>{var e=Q(),o=t(k(e),4),p=n(o);{var v=r=>{x(r,{as:"a",href:"/dashboard/generate",size:"lg",children:(w,P)=>{i();var b=h("Try the generator");a(w,b)},$$slots:{default:!0}})},u=r=>{x(r,{as:"a",href:"/signup",size:"lg",children:(w,P)=>{i();var b=h("Get started free");a(w,b)},$$slots:{default:!0}})};L(p,r=>{A.data.auth.isSignedIn?r(v):r(u,!1)})}var S=t(p,2);x(S,{as:"a",href:"/docs",size:"lg",variant:"ghost",children:(r,w)=>{i();var P=h("View API docs");a(r,P)},$$slots:{default:!0}}),l(o),a(s,e)},$$slots:{default:!0}}),l(g),a(O,g),B()}export{se as component};
