import{S as t,i as a,s as e,e as s,a as n,t as c,I as o,c as r,g as i,f as h,b as l,d,h as m,k as u,j as p,l as f,n as E,K as v}from"../../chunks/index-1610c520.js";import{p as $}from"../../chunks/stores-286a2a37.js";import{f as j,u as k}from"../../chunks/helpers-3e564c97.js";function I(t){let a,e,v,$,I,g,x,y,A,D,L,H,K,R,S,T;return document.title=a=t[0],{c(){e=s("meta"),$=s("link"),g=n(),x=s("div"),y=s("header"),A=s("h1"),D=c(t[0]),L=n(),H=s("p"),K=c(t[3]),R=n(),S=s("article"),T=c(t[2]),this.h()},l(a){const s=o('[data-svelte="svelte-nwhgs0"]',document.head);e=r(s,"META",{name:!0,content:!0}),$=r(s,"LINK",{rel:!0,href:!0}),s.forEach(i),g=h(a),x=r(a,"DIV",{class:!0});var n=l(x);y=r(n,"HEADER",{class:!0});var c=l(y);A=r(c,"H1",{class:!0});var m=l(A);D=d(m,t[0]),m.forEach(i),L=h(c),H=r(c,"P",{class:!0});var u=l(H);K=d(u,t[3]),u.forEach(i),c.forEach(i),R=h(n),S=r(n,"ARTICLE",{class:!0});var p=l(S);T=d(p,t[2]),p.forEach(i),n.forEach(i),this.h()},h(){m(e,"name","description"),m(e,"content",v=j(t[1])),m($,"rel","canonical"),m($,"href",I=""+(k+t[4].path)),m(A,"class","post-title"),m(H,"class","post-meta"),m(y,"class","post-header"),m(S,"class","post-content"),m(x,"class","post")},m(t,a){u(document.head,e),u(document.head,$),p(t,g,a),p(t,x,a),u(x,y),u(y,A),u(A,D),u(y,L),u(y,H),u(H,K),u(x,R),u(x,S),u(S,T)},p(t,[s]){1&s&&a!==(a=t[0])&&(document.title=a),2&s&&v!==(v=j(t[1]))&&m(e,"content",v),16&s&&I!==(I=""+(k+t[4].path))&&m($,"href",I),1&s&&f(D,t[0]),8&s&&f(K,t[3]),4&s&&f(T,t[2])},i:E,o:E,d(t){i(e),i($),t&&i(g),t&&i(x)}}}function g(t,a,e){let s,n;v(t,$,(t=>e(4,n=t)));let{title:c}=a,{description:o}=a,{content:r}=a,{date:i}=a,{author:h}=a,{meta:l}=a;return t.$$set=t=>{"title"in t&&e(0,c=t.title),"description"in t&&e(1,o=t.description),"content"in t&&e(2,r=t.content),"date"in t&&e(5,i=t.date),"author"in t&&e(6,h=t.author),"meta"in t&&e(7,l=t.meta)},t.$$.update=()=>{var a;224&t.$$.dirty&&e(3,s=[(a=i,a.toLocaleDateString("en",{month:"short",day:"numeric",year:"numeric"})),h,l].filter((t=>t)).join(" • "))},[c,o,r,s,n,i,h,l]}export default class extends t{constructor(t){super(),a(this,t,g,I,e,{title:0,description:1,content:2,date:5,author:6,meta:7})}}