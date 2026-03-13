import{c as Z,a as O,f as Ze,t as dt}from"../chunks/Bu7Q5KXf.js";import{p as V,f as ee,a as J,au as _e,ai as an,d as nn,e as rn,i as k,aj as Ce,av as B,t as Ht,c as T,s as L,r as R,as as Ue,a3 as on}from"../chunks/C0TdTIal.js";import{s as le}from"../chunks/8ILFD9ba.js";import"../chunks/Dl6eFod9.js";import{c as de}from"../chunks/BF37hQJR.js";import{i as Vt}from"../chunks/BO3ry4d0.js";import{p as ne}from"../chunks/BGsqKDfP.js";import{B as mt}from"../chunks/CwJQ-ncM.js";import{u as Jt,s as sn,a as ln,l as fn,b as vt,U as un}from"../chunks/BaROSqDl.js";import{i as Xt}from"../chunks/C5kQKzcA.js";import{g as gt}from"../chunks/C-DJC-h7.js";import{s as cn}from"../chunks/B6Lh7vbX.js";import"../chunks/DAvWFGG5.js";import{r as qt,s as dn}from"../chunks/CZg0sGa3.js";import{w as mn}from"../chunks/Ci7UnhWk.js";const vn="pk_test_c3VpdGVkLWltcGFsYS0xOS5jbGVyay5hY2NvdW50cy5kZXYk";function gn(e,t){V(t,!0);const a=Jt();var n=Z(),r=ee(n);{var o=i=>{var s=Z(),l=ee(s);le(l,()=>t.children),O(i,s)};Xt(r,i=>{a.auth.userId&&i(o)})}O(e,n),J()}function hn(e,t){V(t,!0);const a=Jt();var n=Z(),r=ee(n);{var o=i=>{var s=Z(),l=ee(s);le(l,()=>t.children),O(i,s)};Xt(r,i=>{a.auth.userId===null&&i(o)})}O(e,n),J()}const pn=(e,t,a)=>!e&&a?bn(a):yn(t),bn=e=>{const t=e.userId,a=e.user,n=e.sessionId,r=e.sessionStatus,o=e.sessionClaims;return{userId:t,user:a,sessionId:n,session:e.session,sessionStatus:r,sessionClaims:o,organization:e.organization,orgId:e.orgId,orgRole:e.orgRole,orgPermissions:e.orgPermissions,orgSlug:e.orgSlug,actor:e.actor,factorVerificationAge:e.factorVerificationAge}},yn=e=>{const t=e.user?e.user.id:e.user,a=e.user,n=e.session?e.session.id:e.session,r=e.session,o=e.session?.status,i=e.session?e.session.lastActiveToken?.jwt?.claims:null,s=e.session?e.session.factorVerificationAge:null,l=r?.actor,u=e.organization,d=e.organization?e.organization.id:e.organization,c=u?.slug,v=u&&a?.organizationMemberships?.find(b=>b.organization.id===d),g=v&&v.permissions;return{userId:t,user:a,sessionId:n,session:r,sessionStatus:o,sessionClaims:i,organization:u,orgId:d,orgRole:v&&v.role,orgSlug:c,orgPermissions:g,actor:l,factorVerificationAge:s}};function xn(e,t){V(t,!0);const a=qt(t,["$$slots","$$events","$$legacy","children","initialState"]);let n=_e(null),r=_e(!1),o=_e(an({client:void 0,session:void 0,user:void 0,organization:void 0}));const i=B(()=>pn(k(r),k(o),t.initialState)),s=B(()=>k(o).client),l=B(()=>k(i).session),u=B(()=>k(i).user),d=B(()=>k(i).organization);sn("svelte-clerk");async function c(){if(await fn(a),!window.Clerk)throw new Error("Clerk script failed to load");Ce(n,window.Clerk,!0),await k(n).load(a),Ce(r,!0),k(n).addListener(b=>{Ce(o,b,!0)})}nn(()=>{rn(()=>{c()})}),mn(()=>[t.appearance,t.localization],()=>{k(n)&&k(n).__unstable__updateProps({options:{localization:t.localization},appearance:t.appearance})}),ln({get clerk(){return k(n)},get isLoaded(){return k(r)},get auth(){return k(i)},get client(){return k(s)},get session(){return k(l)},get user(){return k(u)},get organization(){return k(d)}});var v=Z(),g=ee(v);le(g,()=>t.children),O(e,v),J()}function ht(e){if(typeof e=="boolean")return e;if(e==null)return!1;if(typeof e=="string"){if(e.toLowerCase()==="true")return!0;if(e.toLowerCase()==="false")return!1}const t=parseInt(e,10);return isNaN(t)?!1:t>0}function P(e,t){return e in vt?vt[e]:t}function E(){return{publishableKey:P("PUBLIC_CLERK_PUBLISHABLE_KEY"),domain:P("PUBLIC_CLERK_DOMAIN"),isSatellite:P("PUBLIC_CLERK_IS_SATELLITE"),proxyUrl:P("PUBLIC_CLERK_PROXY_URL"),signInUrl:P("PUBLIC_CLERK_SIGN_IN_URL"),signUpUrl:P("PUBLIC_CLERK_SIGN_UP_URL"),clerkJSUrl:P("PUBLIC_CLERK_JS_URL"),clerkJSVersion:P("PUBLIC_CLERK_JS_VERSION"),signInForceRedirectUrl:P("PUBLIC_CLERK_SIGN_IN_FORCE_REDIRECT_URL"),signUpForceRedirectUrl:P("PUBLIC_CLERK_SIGN_UP_FORCE_REDIRECT_URL"),signInFallbackRedirectUrl:P("PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL"),signUpFallbackRedirectUrl:P("PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL"),telemetryDisabled:ht(P("PUBLIC_CLERK_TELEMETRY_DISABLED")),telemetryDebug:ht(P("PUBLIC_CLERK_TELEMETRY_DEBUG"))}}function Sn(e){const{publishableKey:t,signInUrl:a,signUpUrl:n,signInForceRedirectUrl:r,signUpForceRedirectUrl:o,signInFallbackRedirectUrl:i,signUpFallbackRedirectUrl:s,clerkJSUrl:l,clerkJSVersion:u,proxyUrl:d,domain:c,telemetry:v}=e;return{publishableKey:t||E().publishableKey,signInUrl:a||E().signInUrl,signUpUrl:n||E().signUpUrl,signInForceRedirectUrl:r||E().signInForceRedirectUrl,signUpForceRedirectUrl:o||E().signUpForceRedirectUrl,signInFallbackRedirectUrl:i||E().signInFallbackRedirectUrl,signUpFallbackRedirectUrl:s||E().signUpFallbackRedirectUrl,clerkJSUrl:l||E().clerkJSUrl,clerkJSVersion:u||E().clerkJSVersion,proxyUrl:d||E().proxyUrl,domain:c||E().domain,telemetry:v||{debug:E().telemetryDebug,disabled:E().telemetryDisabled}}}function kn(e,t){V(t,!0);const a=qt(t,["$$slots","$$events","$$legacy","children"]),n=B(()=>({...a,...Sn(a),routerPush:r=>gt(r),routerReplace:r=>gt(r,{replaceState:!0})}));{let r=B(()=>ne?.data?.initialState);xn(e,dn({get initialState(){return k(r)}},()=>k(n),{children:(o,i)=>{var s=Z(),l=ee(s);le(l,()=>t.children),O(o,s)},$$slots:{default:!0}}))}J()}var An=Ze('<header class="header svelte-1elxaub"><div class="header-inner svelte-1elxaub"><div class="brand"><a href="/" class="brand-name svelte-1elxaub">MetaRank</a></div> <nav class="nav svelte-1elxaub"><a href="/">Landing</a> <a href="/about">About</a> <a href="/pricing">Pricing</a> <a href="/docs">Docs</a></nav> <div class="actions svelte-1elxaub"><!> <!> <!></div></div></header>');function wn(e,t){V(t,!1),Vt();var a=An(),n=T(a),r=L(T(n),2),o=T(r);let i;var s=L(o,2);let l;var u=L(s,2);let d;var c=L(u,2);let v;R(r);var g=L(r,2),b=T(g);gn(b,{children:(y,S)=>{un(y,{})},$$slots:{default:!0}});var p=L(b,2);hn(p,{children:(y,S)=>{mt(y,{as:"a",href:"/signin",size:"sm",children:(w,Y)=>{Ue();var C=dt("Sign in →");O(w,C)},$$slots:{default:!0}})},$$slots:{default:!0}});var A=L(p,2);mt(A,{as:"a",href:"/generate",size:"sm",children:(y,S)=>{Ue();var w=dt("Generate →");O(y,w)},$$slots:{default:!0}}),R(g),R(n),R(a),Ht((y,S,w)=>{i=de(o,1,"nav-link svelte-1elxaub",null,i,{active:ne.url.pathname==="/"}),l=de(s,1,"nav-link svelte-1elxaub",null,l,y),d=de(u,1,"nav-link svelte-1elxaub",null,d,S),v=de(c,1,"nav-link svelte-1elxaub",null,v,w)},[()=>({active:ne.url.pathname.startsWith("/about")}),()=>({active:ne.url.pathname.startsWith("/pricing")}),()=>({active:ne.url.pathname.startsWith("/docs")})]),O(e,a),J()}var In=Ze('<footer class="footer svelte-jz8lnl"><div class="footer-inner svelte-jz8lnl"><div class="footer-brand svelte-jz8lnl"><div class="logo svelte-jz8lnl">MetaRank</div> <p class="tagline svelte-jz8lnl">Predictable SEO metadata for developers and publishing systems.</p></div> <nav class="footer-nav svelte-jz8lnl" aria-label="Footer"><div class="footer-group svelte-jz8lnl"><div class="footer-title svelte-jz8lnl">Product</div> <a href="/generate" class="svelte-jz8lnl">Generate</a> <a href="/pricing" class="svelte-jz8lnl">Pricing</a> <a href="/about" class="svelte-jz8lnl">About</a></div> <div class="footer-group svelte-jz8lnl"><div class="footer-title svelte-jz8lnl">Developers</div> <a href="/docs" class="svelte-jz8lnl">Docs</a> <a href="https://github.com/your-org/metarank" target="_blank" rel="noopener" class="svelte-jz8lnl">GitHub</a></div> <div class="footer-group svelte-jz8lnl"><div class="footer-title svelte-jz8lnl">Company</div> <a href="mailto:hello@metarank.io" class="svelte-jz8lnl">Contact</a></div></nav></div> <div class="footer-bottom svelte-jz8lnl"><span> </span> <span class="sep svelte-jz8lnl">·</span> <span>Stable, predictable SEO metadata</span></div></footer>');function Pn(e,t){V(t,!1),Vt();var a=In(),n=L(T(a),2),r=T(n),o=T(r);R(r),Ue(4),R(n),R(a),Ht(i=>cn(o,`© ${i??""} MetaRank`),[()=>new Date().getFullYear()]),O(e,a),J()}function $e(e,t){(t==null||t>e.length)&&(t=e.length);for(var a=0,n=Array(t);a<t;a++)n[a]=e[a];return n}function En(e){if(Array.isArray(e))return e}function _n(e){if(Array.isArray(e))return $e(e)}function Cn(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Fn(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,Qt(n.key),n)}}function On(e,t,a){return t&&Fn(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function ge(e,t){var a=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=et(e))||t){a&&(e=a);var n=0,r=function(){};return{s:r,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(l){throw l},f:r}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o,i=!0,s=!1;return{s:function(){a=a.call(e)},n:function(){var l=a.next();return i=l.done,l},e:function(l){s=!0,o=l},f:function(){try{i||a.return==null||a.return()}finally{if(s)throw o}}}}function h(e,t,a){return(t=Qt(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function jn(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Ln(e,t){var a=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(a!=null){var n,r,o,i,s=[],l=!0,u=!1;try{if(o=(a=a.call(e)).next,t===0){if(Object(a)!==a)return;l=!1}else for(;!(l=(n=o.call(a)).done)&&(s.push(n.value),s.length!==t);l=!0);}catch(d){u=!0,r=d}finally{try{if(!l&&a.return!=null&&(i=a.return(),Object(i)!==i))return}finally{if(u)throw r}}return s}}function Nn(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Tn(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function pt(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),a.push.apply(a,n)}return a}function f(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?pt(Object(a),!0).forEach(function(n){h(e,n,a[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):pt(Object(a)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))})}return e}function Se(e,t){return En(e)||Ln(e,t)||et(e,t)||Nn()}function j(e){return _n(e)||jn(e)||et(e)||Tn()}function Rn(e,t){if(typeof e!="object"||!e)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var n=a.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Qt(e){var t=Rn(e,"string");return typeof t=="symbol"?t:t+""}function be(e){"@babel/helpers - typeof";return be=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},be(e)}function et(e,t){if(e){if(typeof e=="string")return $e(e,t);var a={}.toString.call(e).slice(8,-1);return a==="Object"&&e.constructor&&(a=e.constructor.name),a==="Map"||a==="Set"?Array.from(e):a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?$e(e,t):void 0}}var bt=function(){},tt={},Zt={},ea=null,ta={mark:bt,measure:bt};try{typeof window<"u"&&(tt=window),typeof document<"u"&&(Zt=document),typeof MutationObserver<"u"&&(ea=MutationObserver),typeof performance<"u"&&(ta=performance)}catch{}var Un=tt.navigator||{},yt=Un.userAgent,xt=yt===void 0?"":yt,M=tt,x=Zt,St=ea,me=ta;M.document;var D=!!x.documentElement&&!!x.head&&typeof x.addEventListener=="function"&&typeof x.createElement=="function",aa=~xt.indexOf("MSIE")||~xt.indexOf("Trident/"),Fe,$n=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,Dn=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,na={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},graphite:{"fa-thin":"thin",fagt:"thin"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"},utility:{"fa-semibold":"semibold",fausb:"semibold"},"utility-duo":{"fa-semibold":"semibold",faudsb:"semibold"},"utility-fill":{"fa-semibold":"semibold",faufsb:"semibold"}},Mn={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},ra=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],I="classic",fe="duotone",ia="sharp",oa="sharp-duotone",sa="chisel",la="etch",fa="graphite",ua="jelly",ca="jelly-duo",da="jelly-fill",ma="notdog",va="notdog-duo",ga="slab",ha="slab-press",pa="thumbprint",ba="utility",ya="utility-duo",xa="utility-fill",Sa="whiteboard",zn="Classic",Wn="Duotone",Yn="Sharp",Bn="Sharp Duotone",Gn="Chisel",Kn="Etch",Hn="Graphite",Vn="Jelly",Jn="Jelly Duo",Xn="Jelly Fill",qn="Notdog",Qn="Notdog Duo",Zn="Slab",er="Slab Press",tr="Thumbprint",ar="Utility",nr="Utility Duo",rr="Utility Fill",ir="Whiteboard",ka=[I,fe,ia,oa,sa,la,fa,ua,ca,da,ma,va,ga,ha,pa,ba,ya,xa,Sa];Fe={},h(h(h(h(h(h(h(h(h(h(Fe,I,zn),fe,Wn),ia,Yn),oa,Bn),sa,Gn),la,Kn),fa,Hn),ua,Vn),ca,Jn),da,Xn),h(h(h(h(h(h(h(h(h(Fe,ma,qn),va,Qn),ga,Zn),ha,er),pa,tr),ba,ar),ya,nr),xa,rr),Sa,ir);var or={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},graphite:{100:"fagt"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"},utility:{600:"fausb"},"utility-duo":{600:"faudsb"},"utility-fill":{600:"faufsb"}},sr={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Graphite":{100:"fagt",normal:"fagt"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"},"Font Awesome 7 Utility":{600:"fausb",normal:"fausb"},"Font Awesome 7 Utility Duo":{600:"faudsb",normal:"faudsb"},"Font Awesome 7 Utility Fill":{600:"faufsb",normal:"faufsb"}},lr=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["graphite",{defaultShortPrefixId:"fagt",defaultStyleId:"thin",styleIds:["thin"],futureStyleIds:[],defaultFontWeight:100}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["utility",{defaultShortPrefixId:"fausb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-duo",{defaultShortPrefixId:"faudsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-fill",{defaultShortPrefixId:"faufsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),fr={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},graphite:{thin:"fagt"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},utility:{semibold:"fausb"},"utility-duo":{semibold:"faudsb"},"utility-fill":{semibold:"faufsb"},whiteboard:{semibold:"fawsb"}},Aa=["fak","fa-kit","fakd","fa-kit-duotone"],kt={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},ur=["kit"],cr="kit",dr="kit-duotone",mr="Kit",vr="Kit Duotone";h(h({},cr,mr),dr,vr);var gr={kit:{"fa-kit":"fak"}},hr={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},pr={kit:{fak:"fa-kit"}},At={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Oe,ve={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},br=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],yr="classic",xr="duotone",Sr="sharp",kr="sharp-duotone",Ar="chisel",wr="etch",Ir="graphite",Pr="jelly",Er="jelly-duo",_r="jelly-fill",Cr="notdog",Fr="notdog-duo",Or="slab",jr="slab-press",Lr="thumbprint",Nr="utility",Tr="utility-duo",Rr="utility-fill",Ur="whiteboard",$r="Classic",Dr="Duotone",Mr="Sharp",zr="Sharp Duotone",Wr="Chisel",Yr="Etch",Br="Graphite",Gr="Jelly",Kr="Jelly Duo",Hr="Jelly Fill",Vr="Notdog",Jr="Notdog Duo",Xr="Slab",qr="Slab Press",Qr="Thumbprint",Zr="Utility",ei="Utility Duo",ti="Utility Fill",ai="Whiteboard";Oe={},h(h(h(h(h(h(h(h(h(h(Oe,yr,$r),xr,Dr),Sr,Mr),kr,zr),Ar,Wr),wr,Yr),Ir,Br),Pr,Gr),Er,Kr),_r,Hr),h(h(h(h(h(h(h(h(h(Oe,Cr,Vr),Fr,Jr),Or,Xr),jr,qr),Lr,Qr),Nr,Zr),Tr,ei),Rr,ti),Ur,ai);var ni="kit",ri="kit-duotone",ii="Kit",oi="Kit Duotone";h(h({},ni,ii),ri,oi);var si={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},graphite:{"fa-thin":"fagt"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"},utility:{"fa-semibold":"fausb"},"utility-duo":{"fa-semibold":"faudsb"},"utility-fill":{"fa-semibold":"faufsb"}},li={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],graphite:["fagt"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"],utility:["fausb"],"utility-duo":["faudsb"],"utility-fill":["faufsb"]},De={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},graphite:{fagt:"fa-thin"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"},utility:{fausb:"fa-semibold"},"utility-duo":{faudsb:"fa-semibold"},"utility-fill":{faufsb:"fa-semibold"}},fi=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],wa=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fagt","fajr","fajfr","fajdr","facr","fausb","faudsb","faufsb"].concat(br,fi),ui=["solid","regular","light","thin","duotone","brands","semibold"],Ia=[1,2,3,4,5,6,7,8,9,10],ci=Ia.concat([11,12,13,14,15,16,17,18,19,20]),di=["aw","fw","pull-left","pull-right"],mi=[].concat(j(Object.keys(li)),ui,di,["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",ve.GROUP,ve.SWAP_OPACITY,ve.PRIMARY,ve.SECONDARY]).concat(Ia.map(function(e){return"".concat(e,"x")})).concat(ci.map(function(e){return"w-".concat(e)})),vi={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},U="___FONT_AWESOME___",Me=16,Pa="fa",Ea="svg-inline--fa",K="data-fa-i2svg",ze="data-fa-pseudo-element",gi="data-fa-pseudo-element-pending",at="data-prefix",nt="data-icon",wt="fontawesome-i2svg",hi="async",pi=["HTML","HEAD","STYLE","SCRIPT"],_a=["::before","::after",":before",":after"],Ca=(function(){try{return!0}catch{return!1}})();function ue(e){return new Proxy(e,{get:function(a,n){return n in a?a[n]:a[I]}})}var Fa=f({},na);Fa[I]=f(f(f(f({},{"fa-duotone":"duotone"}),na[I]),kt.kit),kt["kit-duotone"]);var bi=ue(Fa),We=f({},fr);We[I]=f(f(f(f({},{duotone:"fad"}),We[I]),At.kit),At["kit-duotone"]);var It=ue(We),Ye=f({},De);Ye[I]=f(f({},Ye[I]),pr.kit);var rt=ue(Ye),Be=f({},si);Be[I]=f(f({},Be[I]),gr.kit);ue(Be);var yi=$n,Oa="fa-layers-text",xi=Dn,Si=f({},or);ue(Si);var ki=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],je=Mn,Ai=[].concat(j(ur),j(mi)),ie=M.FontAwesomeConfig||{};function wi(e){var t=x.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Ii(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(x&&typeof x.querySelector=="function"){var Pi=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Pi.forEach(function(e){var t=Se(e,2),a=t[0],n=t[1],r=Ii(wi(a));r!=null&&(ie[n]=r)})}var ja={styleDefault:"solid",familyDefault:I,cssPrefix:Pa,replacementClass:Ea,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ie.familyPrefix&&(ie.cssPrefix=ie.familyPrefix);var te=f(f({},ja),ie);te.autoReplaceSvg||(te.observeMutations=!1);var m={};Object.keys(ja).forEach(function(e){Object.defineProperty(m,e,{enumerable:!0,set:function(a){te[e]=a,oe.forEach(function(n){return n(m)})},get:function(){return te[e]}})});Object.defineProperty(m,"familyPrefix",{enumerable:!0,set:function(t){te.cssPrefix=t,oe.forEach(function(a){return a(m)})},get:function(){return te.cssPrefix}});M.FontAwesomeConfig=m;var oe=[];function Ei(e){return oe.push(e),function(){oe.splice(oe.indexOf(e),1)}}var X=Me,N={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function _i(e){if(!(!e||!D)){var t=x.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var a=x.head.childNodes,n=null,r=a.length-1;r>-1;r--){var o=a[r],i=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(n=o)}return x.head.insertBefore(t,n),e}}var Ci="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Pt(){for(var e=12,t="";e-- >0;)t+=Ci[Math.random()*62|0];return t}function ae(e){for(var t=[],a=(e||[]).length>>>0;a--;)t[a]=e[a];return t}function it(e){return e.classList?ae(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function La(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Fi(e){return Object.keys(e||{}).reduce(function(t,a){return t+"".concat(a,'="').concat(La(e[a]),'" ')},"").trim()}function ke(e){return Object.keys(e||{}).reduce(function(t,a){return t+"".concat(a,": ").concat(e[a].trim(),";")},"")}function ot(e){return e.size!==N.size||e.x!==N.x||e.y!==N.y||e.rotate!==N.rotate||e.flipX||e.flipY}function Oi(e){var t=e.transform,a=e.containerWidth,n=e.iconWidth,r={transform:"translate(".concat(a/2," 256)")},o="translate(".concat(t.x*32,", ").concat(t.y*32,") "),i="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(o," ").concat(i," ").concat(s)},u={transform:"translate(".concat(n/2*-1," -256)")};return{outer:r,inner:l,path:u}}function ji(e){var t=e.transform,a=e.width,n=a===void 0?Me:a,r=e.height,o=r===void 0?Me:r,i="";return aa?i+="translate(".concat(t.x/X-n/2,"em, ").concat(t.y/X-o/2,"em) "):i+="translate(calc(-50% + ".concat(t.x/X,"em), calc(-50% + ").concat(t.y/X,"em)) "),i+="scale(".concat(t.size/X*(t.flipX?-1:1),", ").concat(t.size/X*(t.flipY?-1:1),") "),i+="rotate(".concat(t.rotate,"deg) "),i}var Li=`:root, :host {
  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';
  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';
  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';
  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';
  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';
  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';
  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';
  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';
  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';
  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';
  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';
  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';
  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';
  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';
  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';
  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';
  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';
  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';
  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';
  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';
  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function Na(){var e=Pa,t=Ea,a=m.cssPrefix,n=m.replacementClass,r=Li;if(a!==e||n!==t){var o=new RegExp("\\.".concat(e,"\\-"),"g"),i=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");r=r.replace(o,".".concat(a,"-")).replace(i,"--".concat(a,"-")).replace(s,".".concat(n))}return r}var Et=!1;function Le(){m.autoAddCss&&!Et&&(_i(Na()),Et=!0)}var Ni={mixout:function(){return{dom:{css:Na,insertCss:Le}}},hooks:function(){return{beforeDOMElementCreation:function(){Le()},beforeI2svg:function(){Le()}}}},$=M||{};$[U]||($[U]={});$[U].styles||($[U].styles={});$[U].hooks||($[U].hooks={});$[U].shims||($[U].shims=[]);var F=$[U],Ta=[],Ra=function(){x.removeEventListener("DOMContentLoaded",Ra),ye=1,Ta.map(function(t){return t()})},ye=!1;D&&(ye=(x.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(x.readyState),ye||x.addEventListener("DOMContentLoaded",Ra));function Ti(e){D&&(ye?setTimeout(e,0):Ta.push(e))}function ce(e){var t=e.tag,a=e.attributes,n=a===void 0?{}:a,r=e.children,o=r===void 0?[]:r;return typeof e=="string"?La(e):"<".concat(t," ").concat(Fi(n),">").concat(o.map(ce).join(""),"</").concat(t,">")}function _t(e,t,a){if(e&&e[t]&&e[t][a])return{prefix:t,iconName:a,icon:e[t][a]}}var Ne=function(t,a,n,r){var o=Object.keys(t),i=o.length,s=a,l,u,d;for(n===void 0?(l=1,d=t[o[0]]):(l=0,d=n);l<i;l++)u=o[l],d=s(d,t[u],u,t);return d};function Ua(e){return j(e).length!==1?null:e.codePointAt(0).toString(16)}function Ct(e){return Object.keys(e).reduce(function(t,a){var n=e[a],r=!!n.icon;return r?t[n.iconName]=n.icon:t[a]=n,t},{})}function Ge(e,t){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=a.skipHooks,r=n===void 0?!1:n,o=Ct(t);typeof F.hooks.addPack=="function"&&!r?F.hooks.addPack(e,Ct(t)):F.styles[e]=f(f({},F.styles[e]||{}),o),e==="fas"&&Ge("fa",t)}var se=F.styles,Ri=F.shims,$a=Object.keys(rt),Ui=$a.reduce(function(e,t){return e[t]=Object.keys(rt[t]),e},{}),st=null,Da={},Ma={},za={},Wa={},Ya={};function $i(e){return~Ai.indexOf(e)}function Di(e,t){var a=t.split("-"),n=a[0],r=a.slice(1).join("-");return n===e&&r!==""&&!$i(r)?r:null}var Ba=function(){var t=function(o){return Ne(se,function(i,s,l){return i[l]=Ne(s,o,{}),i},{})};Da=t(function(r,o,i){if(o[3]&&(r[o[3]]=i),o[2]){var s=o[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){r[l.toString(16)]=i})}return r}),Ma=t(function(r,o,i){if(r[i]=i,o[2]){var s=o[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){r[l]=i})}return r}),Ya=t(function(r,o,i){var s=o[2];return r[i]=i,s.forEach(function(l){r[l]=i}),r});var a="far"in se||m.autoFetchSvg,n=Ne(Ri,function(r,o){var i=o[0],s=o[1],l=o[2];return s==="far"&&!a&&(s="fas"),typeof i=="string"&&(r.names[i]={prefix:s,iconName:l}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:s,iconName:l}),r},{names:{},unicodes:{}});za=n.names,Wa=n.unicodes,st=Ae(m.styleDefault,{family:m.familyDefault})};Ei(function(e){st=Ae(e.styleDefault,{family:m.familyDefault})});Ba();function lt(e,t){return(Da[e]||{})[t]}function Mi(e,t){return(Ma[e]||{})[t]}function G(e,t){return(Ya[e]||{})[t]}function Ga(e){return za[e]||{prefix:null,iconName:null}}function zi(e){var t=Wa[e],a=lt("fas",e);return t||(a?{prefix:"fas",iconName:a}:null)||{prefix:null,iconName:null}}function z(){return st}var Ka=function(){return{prefix:null,iconName:null,rest:[]}};function Wi(e){var t=I,a=$a.reduce(function(n,r){return n[r]="".concat(m.cssPrefix,"-").concat(r),n},{});return ka.forEach(function(n){(e.includes(a[n])||e.some(function(r){return Ui[n].includes(r)}))&&(t=n)}),t}function Ae(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.family,n=a===void 0?I:a,r=bi[n][e];if(n===fe&&!e)return"fad";var o=It[n][e]||It[n][r],i=e in F.styles?e:null,s=o||i||null;return s}function Yi(e){var t=[],a=null;return e.forEach(function(n){var r=Di(m.cssPrefix,n);r?a=r:n&&t.push(n)}),{iconName:a,rest:t}}function Ft(e){return e.sort().filter(function(t,a,n){return n.indexOf(t)===a})}var Ot=wa.concat(Aa);function we(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.skipLookups,n=a===void 0?!1:a,r=null,o=Ft(e.filter(function(g){return Ot.includes(g)})),i=Ft(e.filter(function(g){return!Ot.includes(g)})),s=o.filter(function(g){return r=g,!ra.includes(g)}),l=Se(s,1),u=l[0],d=u===void 0?null:u,c=Wi(o),v=f(f({},Yi(i)),{},{prefix:Ae(d,{family:c})});return f(f(f({},v),Hi({values:e,family:c,styles:se,config:m,canonical:v,givenPrefix:r})),Bi(n,r,v))}function Bi(e,t,a){var n=a.prefix,r=a.iconName;if(e||!n||!r)return{prefix:n,iconName:r};var o=t==="fa"?Ga(r):{},i=G(n,r);return r=o.iconName||i||r,n=o.prefix||n,n==="far"&&!se.far&&se.fas&&!m.autoFetchSvg&&(n="fas"),{prefix:n,iconName:r}}var Gi=ka.filter(function(e){return e!==I||e!==fe}),Ki=Object.keys(De).filter(function(e){return e!==I}).map(function(e){return Object.keys(De[e])}).flat();function Hi(e){var t=e.values,a=e.family,n=e.canonical,r=e.givenPrefix,o=r===void 0?"":r,i=e.styles,s=i===void 0?{}:i,l=e.config,u=l===void 0?{}:l,d=a===fe,c=t.includes("fa-duotone")||t.includes("fad"),v=u.familyDefault==="duotone",g=n.prefix==="fad"||n.prefix==="fa-duotone";if(!d&&(c||v||g)&&(n.prefix="fad"),(t.includes("fa-brands")||t.includes("fab"))&&(n.prefix="fab"),!n.prefix&&Gi.includes(a)){var b=Object.keys(s).find(function(A){return Ki.includes(A)});if(b||u.autoFetchSvg){var p=lr.get(a).defaultShortPrefixId;n.prefix=p,n.iconName=G(n.prefix,n.iconName)||n.iconName}}return(n.prefix==="fa"||o==="fa")&&(n.prefix=z()||"fas"),n}var Vi=(function(){function e(){Cn(this,e),this.definitions={}}return On(e,[{key:"add",value:function(){for(var a=this,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];var i=r.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(s){a.definitions[s]=f(f({},a.definitions[s]||{}),i[s]),Ge(s,i[s]);var l=rt[I][s];l&&Ge(l,i[s]),Ba()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(a,n){var r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(function(o){var i=r[o],s=i.prefix,l=i.iconName,u=i.icon,d=u[2];a[s]||(a[s]={}),d.length>0&&d.forEach(function(c){typeof c=="string"&&(a[s][c]=u)}),a[s][l]=u}),a}}])})(),jt=[],q={},Q={},Ji=Object.keys(Q);function Xi(e,t){var a=t.mixoutsTo;return jt=e,q={},Object.keys(Q).forEach(function(n){Ji.indexOf(n)===-1&&delete Q[n]}),jt.forEach(function(n){var r=n.mixout?n.mixout():{};if(Object.keys(r).forEach(function(i){typeof r[i]=="function"&&(a[i]=r[i]),be(r[i])==="object"&&Object.keys(r[i]).forEach(function(s){a[i]||(a[i]={}),a[i][s]=r[i][s]})}),n.hooks){var o=n.hooks();Object.keys(o).forEach(function(i){q[i]||(q[i]=[]),q[i].push(o[i])})}n.provides&&n.provides(Q)}),a}function Ke(e,t){for(var a=arguments.length,n=new Array(a>2?a-2:0),r=2;r<a;r++)n[r-2]=arguments[r];var o=q[e]||[];return o.forEach(function(i){t=i.apply(null,[t].concat(n))}),t}function H(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),n=1;n<t;n++)a[n-1]=arguments[n];var r=q[e]||[];r.forEach(function(o){o.apply(null,a)})}function W(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Q[e]?Q[e].apply(null,t):void 0}function He(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,a=e.prefix||z();if(t)return t=G(a,t)||t,_t(Ha.definitions,a,t)||_t(F.styles,a,t)}var Ha=new Vi,qi=function(){m.autoReplaceSvg=!1,m.observeMutations=!1,H("noAuto")},Qi={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return D?(H("beforeI2svg",t),W("pseudoElements2svg",t),W("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=t.autoReplaceSvgRoot;m.autoReplaceSvg===!1&&(m.autoReplaceSvg=!0),m.observeMutations=!0,Ti(function(){eo({autoReplaceSvgRoot:a}),H("watch",t)})}},Zi={icon:function(t){if(t===null)return null;if(be(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:G(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var a=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=Ae(t[0]);return{prefix:n,iconName:G(n,a)||a}}if(typeof t=="string"&&(t.indexOf("".concat(m.cssPrefix,"-"))>-1||t.match(yi))){var r=we(t.split(" "),{skipLookups:!0});return{prefix:r.prefix||z(),iconName:G(r.prefix,r.iconName)||r.iconName}}if(typeof t=="string"){var o=z();return{prefix:o,iconName:G(o,t)||t}}}},_={noAuto:qi,config:m,dom:Qi,parse:Zi,library:Ha,findIconDefinition:He,toHtml:ce},eo=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=t.autoReplaceSvgRoot,n=a===void 0?x:a;(Object.keys(F.styles).length>0||m.autoFetchSvg)&&D&&m.autoReplaceSvg&&_.dom.i2svg({node:n})};function Ie(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(n){return ce(n)})}}),Object.defineProperty(e,"node",{get:function(){if(D){var n=x.createElement("div");return n.innerHTML=e.html,n.children}}}),e}function to(e){var t=e.children,a=e.main,n=e.mask,r=e.attributes,o=e.styles,i=e.transform;if(ot(i)&&a.found&&!n.found){var s=a.width,l=a.height,u={x:s/l/2,y:.5};r.style=ke(f(f({},o),{},{"transform-origin":"".concat(u.x+i.x/16,"em ").concat(u.y+i.y/16,"em")}))}return[{tag:"svg",attributes:r,children:t}]}function ao(e){var t=e.prefix,a=e.iconName,n=e.children,r=e.attributes,o=e.symbol,i=o===!0?"".concat(t,"-").concat(m.cssPrefix,"-").concat(a):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:f(f({},r),{},{id:i}),children:n}]}]}function no(e){var t=["aria-label","aria-labelledby","title","role"];return t.some(function(a){return a in e})}function ft(e){var t=e.icons,a=t.main,n=t.mask,r=e.prefix,o=e.iconName,i=e.transform,s=e.symbol,l=e.maskId,u=e.extra,d=e.watchable,c=d===void 0?!1:d,v=n.found?n:a,g=v.width,b=v.height,p=[m.replacementClass,o?"".concat(m.cssPrefix,"-").concat(o):""].filter(function(C){return u.classes.indexOf(C)===-1}).filter(function(C){return C!==""||!!C}).concat(u.classes).join(" "),A={children:[],attributes:f(f({},u.attributes),{},{"data-prefix":r,"data-icon":o,class:p,role:u.attributes.role||"img",viewBox:"0 0 ".concat(g," ").concat(b)})};!no(u.attributes)&&!u.attributes["aria-hidden"]&&(A.attributes["aria-hidden"]="true"),c&&(A.attributes[K]="");var y=f(f({},A),{},{prefix:r,iconName:o,main:a,mask:n,maskId:l,transform:i,symbol:s,styles:f({},u.styles)}),S=n.found&&a.found?W("generateAbstractMask",y)||{children:[],attributes:{}}:W("generateAbstractIcon",y)||{children:[],attributes:{}},w=S.children,Y=S.attributes;return y.children=w,y.attributes=Y,s?ao(y):to(y)}function Lt(e){var t=e.content,a=e.width,n=e.height,r=e.transform,o=e.extra,i=e.watchable,s=i===void 0?!1:i,l=f(f({},o.attributes),{},{class:o.classes.join(" ")});s&&(l[K]="");var u=f({},o.styles);ot(r)&&(u.transform=ji({transform:r,width:a,height:n}),u["-webkit-transform"]=u.transform);var d=ke(u);d.length>0&&(l.style=d);var c=[];return c.push({tag:"span",attributes:l,children:[t]}),c}function ro(e){var t=e.content,a=e.extra,n=f(f({},a.attributes),{},{class:a.classes.join(" ")}),r=ke(a.styles);r.length>0&&(n.style=r);var o=[];return o.push({tag:"span",attributes:n,children:[t]}),o}var Te=F.styles;function Ve(e){var t=e[0],a=e[1],n=e.slice(4),r=Se(n,1),o=r[0],i=null;return Array.isArray(o)?i={tag:"g",attributes:{class:"".concat(m.cssPrefix,"-").concat(je.GROUP)},children:[{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(je.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(je.PRIMARY),fill:"currentColor",d:o[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:t,height:a,icon:i}}var io={found:!1,width:512,height:512};function oo(e,t){!Ca&&!m.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Je(e,t){var a=t;return t==="fa"&&m.styleDefault!==null&&(t=z()),new Promise(function(n,r){if(a==="fa"){var o=Ga(e)||{};e=o.iconName||e,t=o.prefix||t}if(e&&t&&Te[t]&&Te[t][e]){var i=Te[t][e];return n(Ve(i))}oo(e,t),n(f(f({},io),{},{icon:m.showMissingIcons&&e?W("missingIconAbstract")||{}:{}}))})}var Nt=function(){},Xe=m.measurePerformance&&me&&me.mark&&me.measure?me:{mark:Nt,measure:Nt},re='FA "7.2.0"',so=function(t){return Xe.mark("".concat(re," ").concat(t," begins")),function(){return Va(t)}},Va=function(t){Xe.mark("".concat(re," ").concat(t," ends")),Xe.measure("".concat(re," ").concat(t),"".concat(re," ").concat(t," begins"),"".concat(re," ").concat(t," ends"))},ut={begin:so,end:Va},he=function(){};function Tt(e){var t=e.getAttribute?e.getAttribute(K):null;return typeof t=="string"}function lo(e){var t=e.getAttribute?e.getAttribute(at):null,a=e.getAttribute?e.getAttribute(nt):null;return t&&a}function fo(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(m.replacementClass)}function uo(){if(m.autoReplaceSvg===!0)return pe.replace;var e=pe[m.autoReplaceSvg];return e||pe.replace}function co(e){return x.createElementNS("http://www.w3.org/2000/svg",e)}function mo(e){return x.createElement(e)}function Ja(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.ceFn,n=a===void 0?e.tag==="svg"?co:mo:a;if(typeof e=="string")return x.createTextNode(e);var r=n(e.tag);Object.keys(e.attributes||[]).forEach(function(i){r.setAttribute(i,e.attributes[i])});var o=e.children||[];return o.forEach(function(i){r.appendChild(Ja(i,{ceFn:n}))}),r}function vo(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var pe={replace:function(t){var a=t[0];if(a.parentNode)if(t[1].forEach(function(r){a.parentNode.insertBefore(Ja(r),a)}),a.getAttribute(K)===null&&m.keepOriginalSource){var n=x.createComment(vo(a));a.parentNode.replaceChild(n,a)}else a.remove()},nest:function(t){var a=t[0],n=t[1];if(~it(a).indexOf(m.replacementClass))return pe.replace(t);var r=new RegExp("".concat(m.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){var o=n[0].attributes.class.split(" ").reduce(function(s,l){return l===m.replacementClass||l.match(r)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});n[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?a.removeAttribute("class"):a.setAttribute("class",o.toNode.join(" "))}var i=n.map(function(s){return ce(s)}).join(`
`);a.setAttribute(K,""),a.innerHTML=i}};function Rt(e){e()}function Xa(e,t){var a=typeof t=="function"?t:he;if(e.length===0)a();else{var n=Rt;m.mutateApproach===hi&&(n=M.requestAnimationFrame||Rt),n(function(){var r=uo(),o=ut.begin("mutate");e.map(r),o(),a()})}}var ct=!1;function qa(){ct=!0}function qe(){ct=!1}var xe=null;function Ut(e){if(St&&m.observeMutations){var t=e.treeCallback,a=t===void 0?he:t,n=e.nodeCallback,r=n===void 0?he:n,o=e.pseudoElementsCallback,i=o===void 0?he:o,s=e.observeMutationsRoot,l=s===void 0?x:s;xe=new St(function(u){if(!ct){var d=z();ae(u).forEach(function(c){if(c.type==="childList"&&c.addedNodes.length>0&&!Tt(c.addedNodes[0])&&(m.searchPseudoElements&&i(c.target),a(c.target)),c.type==="attributes"&&c.target.parentNode&&m.searchPseudoElements&&i([c.target],!0),c.type==="attributes"&&Tt(c.target)&&~ki.indexOf(c.attributeName))if(c.attributeName==="class"&&lo(c.target)){var v=we(it(c.target)),g=v.prefix,b=v.iconName;c.target.setAttribute(at,g||d),b&&c.target.setAttribute(nt,b)}else fo(c.target)&&r(c.target)})}}),D&&xe.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function go(){xe&&xe.disconnect()}function ho(e){var t=e.getAttribute("style"),a=[];return t&&(a=t.split(";").reduce(function(n,r){var o=r.split(":"),i=o[0],s=o.slice(1);return i&&s.length>0&&(n[i]=s.join(":").trim()),n},{})),a}function po(e){var t=e.getAttribute("data-prefix"),a=e.getAttribute("data-icon"),n=e.innerText!==void 0?e.innerText.trim():"",r=we(it(e));return r.prefix||(r.prefix=z()),t&&a&&(r.prefix=t,r.iconName=a),r.iconName&&r.prefix||(r.prefix&&n.length>0&&(r.iconName=Mi(r.prefix,e.innerText)||lt(r.prefix,Ua(e.innerText))),!r.iconName&&m.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=e.firstChild.data)),r}function bo(e){var t=ae(e.attributes).reduce(function(a,n){return a.name!=="class"&&a.name!=="style"&&(a[n.name]=n.value),a},{});return t}function yo(){return{iconName:null,prefix:null,transform:N,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function $t(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},a=po(e),n=a.iconName,r=a.prefix,o=a.rest,i=bo(e),s=Ke("parseNodeAttributes",{},e),l=t.styleParser?ho(e):[];return f({iconName:n,prefix:r,transform:N,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:l,attributes:i}},s)}var xo=F.styles;function Qa(e){var t=m.autoReplaceSvg==="nest"?$t(e,{styleParser:!1}):$t(e);return~t.extra.classes.indexOf(Oa)?W("generateLayersText",e,t):W("generateSvgReplacementMutation",e,t)}function So(){return[].concat(j(Aa),j(wa))}function Dt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!D)return Promise.resolve();var a=x.documentElement.classList,n=function(c){return a.add("".concat(wt,"-").concat(c))},r=function(c){return a.remove("".concat(wt,"-").concat(c))},o=m.autoFetchSvg?So():ra.concat(Object.keys(xo));o.includes("fa")||o.push("fa");var i=[".".concat(Oa,":not([").concat(K,"])")].concat(o.map(function(d){return".".concat(d,":not([").concat(K,"])")})).join(", ");if(i.length===0)return Promise.resolve();var s=[];try{s=ae(e.querySelectorAll(i))}catch{}if(s.length>0)n("pending"),r("complete");else return Promise.resolve();var l=ut.begin("onTree"),u=s.reduce(function(d,c){try{var v=Qa(c);v&&d.push(v)}catch(g){Ca||g.name==="MissingIcon"&&console.error(g)}return d},[]);return new Promise(function(d,c){Promise.all(u).then(function(v){Xa(v,function(){n("active"),n("complete"),r("pending"),typeof t=="function"&&t(),l(),d()})}).catch(function(v){l(),c(v)})})}function ko(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Qa(e).then(function(a){a&&Xa([a],t)})}function Ao(e){return function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=(t||{}).icon?t:He(t||{}),r=a.mask;return r&&(r=(r||{}).icon?r:He(r||{})),e(n,f(f({},a),{},{mask:r}))}}var wo=function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=a.transform,r=n===void 0?N:n,o=a.symbol,i=o===void 0?!1:o,s=a.mask,l=s===void 0?null:s,u=a.maskId,d=u===void 0?null:u,c=a.classes,v=c===void 0?[]:c,g=a.attributes,b=g===void 0?{}:g,p=a.styles,A=p===void 0?{}:p;if(t){var y=t.prefix,S=t.iconName,w=t.icon;return Ie(f({type:"icon"},t),function(){return H("beforeDOMElementCreation",{iconDefinition:t,params:a}),ft({icons:{main:Ve(w),mask:l?Ve(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:y,iconName:S,transform:f(f({},N),r),symbol:i,maskId:d,extra:{attributes:b,styles:A,classes:v}})})}},Io={mixout:function(){return{icon:Ao(wo)}},hooks:function(){return{mutationObserverCallbacks:function(a){return a.treeCallback=Dt,a.nodeCallback=ko,a}}},provides:function(t){t.i2svg=function(a){var n=a.node,r=n===void 0?x:n,o=a.callback,i=o===void 0?function(){}:o;return Dt(r,i)},t.generateSvgReplacementMutation=function(a,n){var r=n.iconName,o=n.prefix,i=n.transform,s=n.symbol,l=n.mask,u=n.maskId,d=n.extra;return new Promise(function(c,v){Promise.all([Je(r,o),l.iconName?Je(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(g){var b=Se(g,2),p=b[0],A=b[1];c([a,ft({icons:{main:p,mask:A},prefix:o,iconName:r,transform:i,symbol:s,maskId:u,extra:d,watchable:!0})])}).catch(v)})},t.generateAbstractIcon=function(a){var n=a.children,r=a.attributes,o=a.main,i=a.transform,s=a.styles,l=ke(s);l.length>0&&(r.style=l);var u;return ot(i)&&(u=W("generateAbstractTransformGrouping",{main:o,transform:i,containerWidth:o.width,iconWidth:o.width})),n.push(u||o.icon),{children:n,attributes:r}}}},Po={mixout:function(){return{layer:function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.classes,o=r===void 0?[]:r;return Ie({type:"layer"},function(){H("beforeDOMElementCreation",{assembler:a,params:n});var i=[];return a(function(s){Array.isArray(s)?s.map(function(l){i=i.concat(l.abstract)}):i=i.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(m.cssPrefix,"-layers")].concat(j(o)).join(" ")},children:i}]})}}}},Eo={mixout:function(){return{counter:function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};n.title;var r=n.classes,o=r===void 0?[]:r,i=n.attributes,s=i===void 0?{}:i,l=n.styles,u=l===void 0?{}:l;return Ie({type:"counter",content:a},function(){return H("beforeDOMElementCreation",{content:a,params:n}),ro({content:a.toString(),extra:{attributes:s,styles:u,classes:["".concat(m.cssPrefix,"-layers-counter")].concat(j(o))}})})}}}},_o={mixout:function(){return{text:function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,o=r===void 0?N:r,i=n.classes,s=i===void 0?[]:i,l=n.attributes,u=l===void 0?{}:l,d=n.styles,c=d===void 0?{}:d;return Ie({type:"text",content:a},function(){return H("beforeDOMElementCreation",{content:a,params:n}),Lt({content:a,transform:f(f({},N),o),extra:{attributes:u,styles:c,classes:["".concat(m.cssPrefix,"-layers-text")].concat(j(s))}})})}}},provides:function(t){t.generateLayersText=function(a,n){var r=n.transform,o=n.extra,i=null,s=null;if(aa){var l=parseInt(getComputedStyle(a).fontSize,10),u=a.getBoundingClientRect();i=u.width/l,s=u.height/l}return Promise.resolve([a,Lt({content:a.innerHTML,width:i,height:s,transform:r,extra:o,watchable:!0})])}}},Za=new RegExp('"',"ug"),Mt=[1105920,1112319],zt=f(f(f(f({},{FontAwesome:{normal:"fas",400:"fas"}}),sr),vi),hr),Qe=Object.keys(zt).reduce(function(e,t){return e[t.toLowerCase()]=zt[t],e},{}),Co=Object.keys(Qe).reduce(function(e,t){var a=Qe[t];return e[t]=a[900]||j(Object.entries(a))[0][1],e},{});function Fo(e){var t=e.replace(Za,"");return Ua(j(t)[0]||"")}function Oo(e){var t=e.getPropertyValue("font-feature-settings").includes("ss01"),a=e.getPropertyValue("content"),n=a.replace(Za,""),r=n.codePointAt(0),o=r>=Mt[0]&&r<=Mt[1],i=n.length===2?n[0]===n[1]:!1;return o||i||t}function jo(e,t){var a=e.replace(/^['"]|['"]$/g,"").toLowerCase(),n=parseInt(t),r=isNaN(n)?"normal":n;return(Qe[a]||{})[r]||Co[a]}function Wt(e,t){var a="".concat(gi).concat(t.replace(":","-"));return new Promise(function(n,r){if(e.getAttribute(a)!==null)return n();var o=ae(e.children),i=o.filter(function(Pe){return Pe.getAttribute(ze)===t})[0],s=M.getComputedStyle(e,t),l=s.getPropertyValue("font-family"),u=l.match(xi),d=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(i&&!u)return e.removeChild(i),n();if(u&&c!=="none"&&c!==""){var v=s.getPropertyValue("content"),g=jo(l,d),b=Fo(v),p=u[0].startsWith("FontAwesome"),A=Oo(s),y=lt(g,b),S=y;if(p){var w=zi(b);w.iconName&&w.prefix&&(y=w.iconName,g=w.prefix)}if(y&&!A&&(!i||i.getAttribute(at)!==g||i.getAttribute(nt)!==S)){e.setAttribute(a,S),i&&e.removeChild(i);var Y=yo(),C=Y.extra;C.attributes[ze]=t,Je(y,g).then(function(Pe){var en=ft(f(f({},Y),{},{icons:{main:Pe,mask:Ka()},prefix:g,iconName:S,extra:C,watchable:!0})),Ee=x.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(Ee,e.firstChild):e.appendChild(Ee),Ee.outerHTML=en.map(function(tn){return ce(tn)}).join(`
`),e.removeAttribute(a),n()}).catch(r)}else n()}else n()})}function Lo(e){return Promise.all([Wt(e,"::before"),Wt(e,"::after")])}function No(e){return e.parentNode!==document.head&&!~pi.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(ze)&&(!e.parentNode||e.parentNode.tagName!=="svg")}var To=function(t){return!!t&&_a.some(function(a){return t.includes(a)})},Ro=function(t){if(!t)return[];var a=new Set,n=t.split(/,(?![^()]*\))/).map(function(l){return l.trim()});n=n.flatMap(function(l){return l.includes("(")?l:l.split(",").map(function(u){return u.trim()})});var r=ge(n),o;try{for(r.s();!(o=r.n()).done;){var i=o.value;if(To(i)){var s=_a.reduce(function(l,u){return l.replace(u,"")},i);s!==""&&s!=="*"&&a.add(s)}}}catch(l){r.e(l)}finally{r.f()}return a};function Yt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(D){var a;if(t)a=e;else if(m.searchPseudoElementsFullScan)a=e.querySelectorAll("*");else{var n=new Set,r=ge(document.styleSheets),o;try{for(r.s();!(o=r.n()).done;){var i=o.value;try{var s=ge(i.cssRules),l;try{for(s.s();!(l=s.n()).done;){var u=l.value,d=Ro(u.selectorText),c=ge(d),v;try{for(c.s();!(v=c.n()).done;){var g=v.value;n.add(g)}}catch(p){c.e(p)}finally{c.f()}}}catch(p){s.e(p)}finally{s.f()}}catch(p){m.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(i.href," (").concat(p.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(p){r.e(p)}finally{r.f()}if(!n.size)return;var b=Array.from(n).join(", ");try{a=e.querySelectorAll(b)}catch{}}return new Promise(function(p,A){var y=ae(a).filter(No).map(Lo),S=ut.begin("searchPseudoElements");qa(),Promise.all(y).then(function(){S(),qe(),p()}).catch(function(){S(),qe(),A()})})}}var Uo={hooks:function(){return{mutationObserverCallbacks:function(a){return a.pseudoElementsCallback=Yt,a}}},provides:function(t){t.pseudoElements2svg=function(a){var n=a.node,r=n===void 0?x:n;m.searchPseudoElements&&Yt(r)}}},Bt=!1,$o={mixout:function(){return{dom:{unwatch:function(){qa(),Bt=!0}}}},hooks:function(){return{bootstrap:function(){Ut(Ke("mutationObserverCallbacks",{}))},noAuto:function(){go()},watch:function(a){var n=a.observeMutationsRoot;Bt?qe():Ut(Ke("mutationObserverCallbacks",{observeMutationsRoot:n}))}}}},Gt=function(t){var a={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(n,r){var o=r.toLowerCase().split("-"),i=o[0],s=o.slice(1).join("-");if(i&&s==="h")return n.flipX=!0,n;if(i&&s==="v")return n.flipY=!0,n;if(s=parseFloat(s),isNaN(s))return n;switch(i){case"grow":n.size=n.size+s;break;case"shrink":n.size=n.size-s;break;case"left":n.x=n.x-s;break;case"right":n.x=n.x+s;break;case"up":n.y=n.y-s;break;case"down":n.y=n.y+s;break;case"rotate":n.rotate=n.rotate+s;break}return n},a)},Do={mixout:function(){return{parse:{transform:function(a){return Gt(a)}}}},hooks:function(){return{parseNodeAttributes:function(a,n){var r=n.getAttribute("data-fa-transform");return r&&(a.transform=Gt(r)),a}}},provides:function(t){t.generateAbstractTransformGrouping=function(a){var n=a.main,r=a.transform,o=a.containerWidth,i=a.iconWidth,s={transform:"translate(".concat(o/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),u="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),d="rotate(".concat(r.rotate," 0 0)"),c={transform:"".concat(l," ").concat(u," ").concat(d)},v={transform:"translate(".concat(i/2*-1," -256)")},g={outer:s,inner:c,path:v};return{tag:"g",attributes:f({},g.outer),children:[{tag:"g",attributes:f({},g.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:f(f({},n.icon.attributes),g.path)}]}]}}}},Re={x:0,y:0,width:"100%",height:"100%"};function Kt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Mo(e){return e.tag==="g"?e.children:[e]}var zo={hooks:function(){return{parseNodeAttributes:function(a,n){var r=n.getAttribute("data-fa-mask"),o=r?we(r.split(" ").map(function(i){return i.trim()})):Ka();return o.prefix||(o.prefix=z()),a.mask=o,a.maskId=n.getAttribute("data-fa-mask-id"),a}}},provides:function(t){t.generateAbstractMask=function(a){var n=a.children,r=a.attributes,o=a.main,i=a.mask,s=a.maskId,l=a.transform,u=o.width,d=o.icon,c=i.width,v=i.icon,g=Oi({transform:l,containerWidth:c,iconWidth:u}),b={tag:"rect",attributes:f(f({},Re),{},{fill:"white"})},p=d.children?{children:d.children.map(Kt)}:{},A={tag:"g",attributes:f({},g.inner),children:[Kt(f({tag:d.tag,attributes:f(f({},d.attributes),g.path)},p))]},y={tag:"g",attributes:f({},g.outer),children:[A]},S="mask-".concat(s||Pt()),w="clip-".concat(s||Pt()),Y={tag:"mask",attributes:f(f({},Re),{},{id:S,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[b,y]},C={tag:"defs",children:[{tag:"clipPath",attributes:{id:w},children:Mo(v)},Y]};return n.push(C,{tag:"rect",attributes:f({fill:"currentColor","clip-path":"url(#".concat(w,")"),mask:"url(#".concat(S,")")},Re)}),{children:n,attributes:r}}}},Wo={provides:function(t){var a=!1;M.matchMedia&&(a=M.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var n=[],r={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:f(f({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var i=f(f({},o),{},{attributeName:"opacity"}),s={tag:"circle",attributes:f(f({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return a||s.children.push({tag:"animate",attributes:f(f({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:f(f({},i),{},{values:"1;0;1;1;0;1;"})}),n.push(s),n.push({tag:"path",attributes:f(f({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:a?[]:[{tag:"animate",attributes:f(f({},i),{},{values:"1;0;0;0;0;1;"})}]}),a||n.push({tag:"path",attributes:f(f({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:f(f({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},Yo={hooks:function(){return{parseNodeAttributes:function(a,n){var r=n.getAttribute("data-fa-symbol"),o=r===null?!1:r===""?!0:r;return a.symbol=o,a}}}},Bo=[Ni,Io,Po,Eo,_o,Uo,$o,Do,zo,Wo,Yo];Xi(Bo,{mixoutsTo:_});_.noAuto;var Go=_.config;_.library;_.dom;_.parse;_.findIconDefinition;_.toHtml;_.icon;_.layer;_.text;_.counter;var Ko=Ze('<div class="app-shell svelte-12qhfyh"><!> <main class="svelte-12qhfyh"><!></main> <!></div>');function ls(e,t){V(t,!0),Go.autoAddCss=!1,kn(e,{get publishableKey(){return vn},children:(a,n)=>{var r=Ko(),o=T(r);wn(o,{});var i=L(o,2),s=T(i);le(s,()=>t.children??on),R(i);var l=L(i,2);Pn(l,{}),R(r),O(a,r)},$$slots:{default:!0}}),J()}export{ls as component};
