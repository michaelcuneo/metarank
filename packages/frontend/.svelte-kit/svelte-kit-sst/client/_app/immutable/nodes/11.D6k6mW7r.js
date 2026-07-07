import"../chunks/DsnmJJEf.js";import{p as q,a,b as B,s as t,d as n,f as k,c,r as l,aA as i,az as h}from"../chunks/CYmh6bbh.js";import{i as L}from"../chunks/veUKRnU1.js";import{C as d}from"../chunks/dARqgW6P.js";import{B as w}from"../chunks/BJM_R-I9.js";import{S as F}from"../chunks/_LNIaFHy.js";import"../chunks/DiSjSarL.js";import"../chunks/C4fvl8ly.js";var K=c('<pre class="svelte-1xmjmrw">Authorization: Bearer YOUR_API_KEY</pre>'),D=c('<div class="method svelte-1xmjmrw">POST</div> <code>https://api.metarank.dev/v1/seo/meta</code>',1),G=c('<pre class="svelte-1xmjmrw"></pre>'),J=c('<pre class="svelte-1xmjmrw"></pre>'),N=c('<div class="example-header svelte-1xmjmrw"><span class="svelte-1xmjmrw">cURL</span> <!></div> <pre class="svelte-1xmjmrw"></pre>',1),Q=c('<div class="example-header svelte-1xmjmrw"><span class="svelte-1xmjmrw">JavaScript</span> <!></div> <pre class="svelte-1xmjmrw"></pre>',1),V=c('<h2>Get started</h2> <p class="svelte-1xmjmrw">Try MetaRank in the browser or integrate it directly using the API.</p> <div class="cta-actions svelte-1xmjmrw"><!> <!></div>',1),X=c(`<div class="page-shell docs svelte-1xmjmrw"><header class="docs-hero svelte-1xmjmrw"><h1 class="page-title svelte-1xmjmrw">MetaRank API Documentation</h1> <p class="page-lead svelte-1xmjmrw">Generate clean, search-optimized SEO metadata from real content using a single API call.</p></header> <section class="svelte-1xmjmrw"><h2 class="svelte-1xmjmrw">What MetaRank does</h2> <p class="svelte-1xmjmrw">MetaRank analyzes your article content and returns SEO-ready metadata including titles,
			descriptions, keywords, slugs, and search intent.</p> <p class="svelte-1xmjmrw">There is no training phase, no prompt management, and no tuning required.
			You provide content. MetaRank returns metadata.</p></section> <section class="svelte-1xmjmrw"><h2 class="svelte-1xmjmrw">Authentication</h2> <p class="svelte-1xmjmrw">All requests require an API key passed via the Authorization header.</p> <!></section> <section class="svelte-1xmjmrw"><h2 class="svelte-1xmjmrw">API Endpoint</h2> <!></section> <section class="svelte-1xmjmrw"><h2 class="svelte-1xmjmrw">Request body</h2> <!> <ul class="field-notes svelte-1xmjmrw"><li class="svelte-1xmjmrw"><strong>title</strong> (required) — Article title</li> <li class="svelte-1xmjmrw"><strong>body</strong> (required) — Minimum 100 characters</li> <li class="svelte-1xmjmrw"><strong>location</strong> (optional) — Geographic SEO context</li> <li class="svelte-1xmjmrw"><strong>targetQuery</strong> (optional) — Overrides inferred intent</li></ul></section> <section class="svelte-1xmjmrw"><h2 class="svelte-1xmjmrw">Response</h2> <!> <p class="note svelte-1xmjmrw">Responses are deterministic JSON and safe to store or cache.</p></section> <section class="svelte-1xmjmrw"><h2 class="svelte-1xmjmrw">Examples</h2> <!> <!></section> <section class="svelte-1xmjmrw"><h2 class="svelte-1xmjmrw">Usage and limits</h2> <ul class="svelte-1xmjmrw"><li class="svelte-1xmjmrw">One request equals one article processed</li> <li class="svelte-1xmjmrw">Failed requests are not billed</li> <li class="svelte-1xmjmrw">Retries do not count toward usage</li> <li class="svelte-1xmjmrw">Usage resets monthly</li></ul></section> <section class="svelte-1xmjmrw"><h2 class="svelte-1xmjmrw">Data handling</h2> <p class="svelte-1xmjmrw">Content is processed ephemerally. MetaRank does not store content or use it for training.</p></section> <!></div>`);function ne(O,A){q(A,!0);const T=s=>navigator.clipboard.writeText(s),R=`curl -X POST https://api.metarank.dev/v1/seo/meta \\
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
}).then(res => res.json());`;var g=X(),j=t(n(g),4),C=t(n(j),4);d(C,{children:(s,m)=>{var e=K();a(s,e)},$$slots:{default:!0}}),l(j);var _=t(j,2),I=t(n(_),2);d(I,{class:"endpoint",children:(s,m)=>{var e=D();i(2),a(s,e)},$$slots:{default:!0}}),l(_);var f=t(_,2),z=t(n(f),2);d(z,{children:(s,m)=>{var e=G();e.textContent=`{
  "title": "How to build a SaaS product as a solo founder",
  "body": "Full article content in Markdown, HTML, or plain text",
  "location": "United Kingdom",
  "targetQuery": "build a SaaS product"
}`,a(s,e)},$$slots:{default:!0}}),i(2),l(f);var $=t(f,2),E=t(n($),2);d(E,{children:(s,m)=>{var e=J();e.textContent=`{
  "metaTitle": "How to Build a SaaS Product as a Solo Founder",
  "metaDescription": "Learn how to validate a SaaS idea, choose a tech stack, build an MVP, and launch.",
  "slug": "build-saas-product-solo-founder",
  "keywords": "saas product, solo founder, build saas",
  "ogDescription": "A practical guide to building a SaaS product as a solo founder.",
  "searchIntent": "informational",
  "primaryLocation": "United Kingdom",
  "languageCode": "en"
}`,a(s,e)},$$slots:{default:!0}}),i(2),l($);var S=t($,2),M=t(n(S),2);d(M,{class:"example-block",children:(s,m)=>{var e=N(),o=k(e),p=t(n(o),2);w(p,{size:"sm",variant:"ghost",onclick:()=>T(R),children:(u,y)=>{i();var r=h("Copy");a(u,r)},$$slots:{default:!0}}),l(o);var v=t(o,2);v.textContent=`curl -X POST https://api.metarank.dev/v1/seo/meta \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "title": "How to build a SaaS product",
    "body": "Full article content in Markdown, HTML, or plain text"
  }'`,a(s,e)},$$slots:{default:!0}});var Y=t(M,2);d(Y,{class:"example-block",children:(s,m)=>{var e=Q(),o=k(e),p=t(n(o),2);w(p,{size:"sm",variant:"ghost",onclick:()=>T(H),children:(u,y)=>{i();var r=h("Copy");a(u,r)},$$slots:{default:!0}}),l(o);var v=t(o,2);v.textContent=`fetch("https://api.metarank.dev/v1/seo/meta", {
  method: "POST",
  headers: {
    Authorization: "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    title: "How to build a SaaS product",
    body: "Full article content in Markdown, HTML, or plain text"
  })
}).then(res => res.json());`,a(s,e)},$$slots:{default:!0}}),l(S);var U=t(S,6);d(U,{class:"cta",children:(s,m)=>{var e=V(),o=t(k(e),4),p=n(o);{var v=r=>{w(r,{as:"a",href:"/dashboard/generate",size:"lg",children:(x,P)=>{i();var b=h("Try the generator");a(x,b)},$$slots:{default:!0}})},u=r=>{F(r,{class:"clerk-user-button",children:(x,P)=>{i();var b=h("Get started free");a(x,b)},$$slots:{default:!0}})};L(p,r=>{A.data.auth.isSignedIn?r(v):r(u,!1)})}var y=t(p,2);w(y,{as:"a",href:"/docs",size:"lg",variant:"ghost",children:(r,x)=>{i();var P=h("View API docs");a(r,P)},$$slots:{default:!0}}),l(o),a(s,e)},$$slots:{default:!0}}),l(g),a(O,g),B()}export{ne as component};
