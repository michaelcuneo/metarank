import{a,f as l,t as h}from"../chunks/Bu7Q5KXf.js";import"../chunks/Dl6eFod9.js";import{s as t,c as o,f as S,r as n,as as d}from"../chunks/C0TdTIal.js";import{C as m}from"../chunks/Dx_vHjA-.js";import{B as x}from"../chunks/CwJQ-ncM.js";var I=l('<pre class="svelte-1xmjmrw">Authorization: Bearer YOUR_API_KEY</pre>'),Y=l('<div class="method svelte-1xmjmrw">POST</div> <code>https://api.metarank.dev/v1/seo/meta</code>',1),z=l('<pre class="svelte-1xmjmrw"></pre>'),U=l('<pre class="svelte-1xmjmrw"></pre>'),q=l('<div class="example-header svelte-1xmjmrw"><span class="svelte-1xmjmrw">cURL</span> <!></div> <pre class="svelte-1xmjmrw"></pre>',1),B=l('<div class="example-header svelte-1xmjmrw"><span class="svelte-1xmjmrw">JavaScript</span> <!></div> <pre class="svelte-1xmjmrw"></pre>',1),L=l('<h2>Get started</h2> <p class="svelte-1xmjmrw">Try MetaRank in the browser or integrate it directly using the API.</p> <div class="cta-actions svelte-1xmjmrw"><!> <!></div>',1),F=l(`<div class="page-shell docs svelte-1xmjmrw"><header class="docs-hero svelte-1xmjmrw"><h1 class="page-title svelte-1xmjmrw">MetaRank API Documentation</h1> <p class="page-lead svelte-1xmjmrw">Generate clean, search-optimized SEO metadata from real content using a single API call.</p></header> <section class="svelte-1xmjmrw"><h2 class="svelte-1xmjmrw">What MetaRank does</h2> <p class="svelte-1xmjmrw">MetaRank analyzes your article content and returns SEO-ready metadata including titles,
			descriptions, keywords, slugs, and search intent.</p> <p class="svelte-1xmjmrw">There is no training phase, no prompt management, and no tuning required.
			You provide content. MetaRank returns metadata.</p></section> <section class="svelte-1xmjmrw"><h2 class="svelte-1xmjmrw">Authentication</h2> <p class="svelte-1xmjmrw">All requests require an API key passed via the Authorization header.</p> <!></section> <section class="svelte-1xmjmrw"><h2 class="svelte-1xmjmrw">API Endpoint</h2> <!></section> <section class="svelte-1xmjmrw"><h2 class="svelte-1xmjmrw">Request body</h2> <!> <ul class="field-notes svelte-1xmjmrw"><li class="svelte-1xmjmrw"><strong>title</strong> (required) — Article title</li> <li class="svelte-1xmjmrw"><strong>body</strong> (required) — Minimum 100 characters</li> <li class="svelte-1xmjmrw"><strong>location</strong> (optional) — Geographic SEO context</li> <li class="svelte-1xmjmrw"><strong>targetQuery</strong> (optional) — Overrides inferred intent</li></ul></section> <section class="svelte-1xmjmrw"><h2 class="svelte-1xmjmrw">Response</h2> <!> <p class="note svelte-1xmjmrw">Responses are deterministic JSON and safe to store or cache.</p></section> <section class="svelte-1xmjmrw"><h2 class="svelte-1xmjmrw">Examples</h2> <!> <!></section> <section class="svelte-1xmjmrw"><h2 class="svelte-1xmjmrw">Usage and limits</h2> <ul class="svelte-1xmjmrw"><li class="svelte-1xmjmrw">One request equals one article processed</li> <li class="svelte-1xmjmrw">Failed requests are not billed</li> <li class="svelte-1xmjmrw">Retries do not count toward usage</li> <li class="svelte-1xmjmrw">Usage resets monthly</li></ul></section> <section class="svelte-1xmjmrw"><h2 class="svelte-1xmjmrw">Data handling</h2> <p class="svelte-1xmjmrw">Content is processed ephemerally. MetaRank does not store content or use it for training.</p></section> <!></div>`);function Q(k){const P=s=>navigator.clipboard.writeText(s),A=`curl -X POST https://api.metarank.dev/v1/seo/meta \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "title": "How to build a SaaS product",
    "body": "Full article content in Markdown, HTML, or plain text"
  }'`,T=`fetch("https://api.metarank.dev/v1/seo/meta", {
  method: "POST",
  headers: {
    Authorization: "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    title: "How to build a SaaS product",
    body: "Full article content in Markdown, HTML, or plain text"
  })
}).then(res => res.json());`;var w=F(),j=t(o(w),4),M=t(o(j),4);m(M,{children:(s,p)=>{var e=I();a(s,e)},$$slots:{default:!0}}),n(j);var g=t(j,2),O=t(o(g),2);m(O,{class:"endpoint",children:(s,p)=>{var e=Y();d(2),a(s,e)},$$slots:{default:!0}}),n(g);var _=t(g,2),R=t(o(_),2);m(R,{children:(s,p)=>{var e=z();e.textContent=`{
  "title": "How to build a SaaS product as a solo founder",
  "body": "Full article content in Markdown, HTML, or plain text",
  "location": "United Kingdom",
  "targetQuery": "build a SaaS product"
}`,a(s,e)},$$slots:{default:!0}}),d(2),n(_);var $=t(_,2),H=t(o($),2);m(H,{children:(s,p)=>{var e=U();e.textContent=`{
  "metaTitle": "How to Build a SaaS Product as a Solo Founder",
  "metaDescription": "Learn how to validate a SaaS idea, choose a tech stack, build an MVP, and launch.",
  "slug": "build-saas-product-solo-founder",
  "keywords": "saas product, solo founder, build saas",
  "ogDescription": "A practical guide to building a SaaS product as a solo founder.",
  "searchIntent": "informational",
  "primaryLocation": "United Kingdom",
  "languageCode": "en"
}`,a(s,e)},$$slots:{default:!0}}),d(2),n($);var f=t($,2),b=t(o(f),2);m(b,{class:"example-block",children:(s,p)=>{var e=q(),r=S(e),v=t(o(r),2);x(v,{size:"sm",variant:"ghost",onclick:()=>P(A),children:(i,y)=>{d();var c=h("Copy");a(i,c)},$$slots:{default:!0}}),n(r);var u=t(r,2);u.textContent=`curl -X POST https://api.metarank.dev/v1/seo/meta \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "title": "How to build a SaaS product",
    "body": "Full article content in Markdown, HTML, or plain text"
  }'`,a(s,e)},$$slots:{default:!0}});var C=t(b,2);m(C,{class:"example-block",children:(s,p)=>{var e=B(),r=S(e),v=t(o(r),2);x(v,{size:"sm",variant:"ghost",onclick:()=>P(T),children:(i,y)=>{d();var c=h("Copy");a(i,c)},$$slots:{default:!0}}),n(r);var u=t(r,2);u.textContent=`fetch("https://api.metarank.dev/v1/seo/meta", {
  method: "POST",
  headers: {
    Authorization: "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    title: "How to build a SaaS product",
    body: "Full article content in Markdown, HTML, or plain text"
  })
}).then(res => res.json());`,a(s,e)},$$slots:{default:!0}}),n(f);var E=t(f,6);m(E,{class:"cta",children:(s,p)=>{var e=L(),r=t(S(e),4),v=o(r);x(v,{as:"a",href:"/generate",children:(i,y)=>{d();var c=h("Get an API key");a(i,c)},$$slots:{default:!0}});var u=t(v,2);x(u,{as:"a",href:"/generate",variant:"ghost",children:(i,y)=>{d();var c=h("Try the generator");a(i,c)},$$slots:{default:!0}}),n(r),a(s,e)},$$slots:{default:!0}}),n(w),a(k,w)}export{Q as component};
