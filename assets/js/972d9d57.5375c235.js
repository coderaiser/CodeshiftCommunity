(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{86:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var i=n(3),o=n(7),r=(n(0),n(95)),a={id:"introduction",title:"Introduction",slug:"/"},c={unversionedId:"introduction",id:"introduction",isDocsHomePage:!1,title:"Introduction",description:"CodeshiftCommunity is a community-owned global registry and documentation hub for codemods.",source:"@site/docs/introduction.mdx",slug:"/",permalink:"/CodeshiftCommunity/docs/",editUrl:"https://github.com/CodeshiftCommunity/CodeshiftCommunity/edit/master/website/docs/introduction.mdx",version:"current",sidebar:"docs",next:{title:"Guiding principles",permalink:"/CodeshiftCommunity/docs/guiding-principles"}},s=[{value:"Why?",id:"why",children:[{value:"Fragmentation in the ecosystem",id:"fragmentation-in-the-ecosystem",children:[]},{value:"Package adoption &amp; upgrade pain",id:"package-adoption--upgrade-pain",children:[]},{value:"Lack of documentation &amp; familiarity",id:"lack-of-documentation--familiarity",children:[]}]},{value:"How do we solve these problems?",id:"how-do-we-solve-these-problems",children:[{value:"A centralized registry",id:"a-centralized-registry",children:[]},{value:"Rich documentation",id:"rich-documentation",children:[]}]},{value:"Getting started",id:"getting-started",children:[]}],d={toc:s};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"CodeshiftCommunity is a community-owned global registry and documentation hub for codemods.\nThis project provides library users & maintainers with facilities to help ",Object(r.b)("a",{parentName:"p",href:"authoring"},"write"),", ",Object(r.b)("a",{parentName:"p",href:"testing"},"test"),", ",Object(r.b)("a",{parentName:"p",href:"contribution"},"publish")," and ",Object(r.b)("a",{parentName:"p",href:"docs/consuming"},"consume")," codemods in a structured and familiar way."),Object(r.b)("h2",{id:"why"},"Why?"),Object(r.b)("p",null,"Our overarching goal is to build a community around codemods to help normalize both authoring and consuming them, turning it into a standard development practice throughout the JavaScript ecosystem."),Object(r.b)("p",null,"We believe this can be achieved by making the right support, documentation and tooling available to everyone."),Object(r.b)("p",null,"To do this CodeshiftCommunity aims to solve three main problems."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Fragmentation of how codemods are written & distributed in the ecosystem"),Object(r.b)("li",{parentName:"ol"},"Package adoption & upgrade pain"),Object(r.b)("li",{parentName:"ol"},"Lack of documentation & familiarity")),Object(r.b)("h3",{id:"fragmentation-in-the-ecosystem"},"Fragmentation in the ecosystem"),Object(r.b)("p",null,"Popular libraries in the ecosystem such as ",Object(r.b)("a",{parentName:"p",href:"https://github.com/reactjs/react-codemod"},"React"),", ",Object(r.b)("a",{parentName:"p",href:"https://github.com/mui-org/material-ui/tree/master/packages/material-ui-codemod"},"material-ui")," and ",Object(r.b)("a",{parentName:"p",href:"https://nextjs.org/docs/advanced-features/codemods"},"next.js"),", all provide their own take on codemods, CLI and distribution services.\nThese services are varied from one another and generally quite hidden from the average user.\nProviding this as an additional service to aid in upgrading their libraries is a great thing, but comes with significant overhead to those projects."),Object(r.b)("h3",{id:"package-adoption--upgrade-pain"},"Package adoption & upgrade pain"),Object(r.b)("p",null,"When publishing packages via semver, it is too easy to push the upgrade pain onto users.\nUsers will likely then have to go digging in either your changelog or (worst case) your code to find out how to safely migrate to the latest and greatest.\nOften the solution is just to avoid upgrading entirely or migrate to a new library."),Object(r.b)("h3",{id:"lack-of-documentation--familiarity"},"Lack of documentation & familiarity"),Object(r.b)("p",null,"Writing codemods often feels like tribal knowledge, there might be only a handfull of people in your company that have written one or know how to write one. This needs to change!"),Object(r.b)("h2",{id:"how-do-we-solve-these-problems"},"How do we solve these problems?"),Object(r.b)("h3",{id:"a-centralized-registry"},"A centralized registry"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://github.com/DefinitelyTyped/DefinitelyTyped"},"DefinitelyTyped")," is a great example of how consolidating type definitions under the one roof builds familiarity and consistency for the entire typescript user base."),Object(r.b)("p",null,"By consolidating codemods in the same way, the ecosystem can benefit from:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"A single place to find, use and publish codemods"),Object(r.b)("li",{parentName:"ol"},"Community support & bug fixes"),Object(r.b)("li",{parentName:"ol"},"Countless examples")),Object(r.b)("p",null,"CodeshiftCommunity provides a codemod registry that hosts and automatically publishes codemods for you under the ",Object(r.b)("a",{parentName:"p",href:"https://github.com/CodeshiftCommunity/CodeshiftCommunity/tree/main/community"},"/community directory"),".\nThe community directory organizes codemods by package name and version. They are then published to npm as modules that can be retrospectivally patched or improved.\nThis ensures that users running codemods are always getting the latest and greatest version of your codemod."),Object(r.b)("h3",{id:"rich-documentation"},"Rich documentation"),Object(r.b)("p",null,'CodeshiftCommunity is a documentation hub first, by provding guides, recipes and reference material we aim demystify codemods, which are often seen as "arcane knowledge".'),Object(r.b)("p",null,'With the right documentation and guidance in place, it will be significantly easier to normalize codemods and reduce their learning curve.\nWe want to remove the stigma that "codemods are hard" or "they take a long time to write" and get everyone into the healthy practice of writing them.\nMeaning that more people can contribute to writing codemods and ultimately improve the javascript ecosystem\'s adoption problem.'),Object(r.b)("h2",{id:"getting-started"},"Getting started"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/docs/your-first-codemod"},"Your first codemod")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"consuming"},"Consuming codemods")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"authoring"},"Writing codemods")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"testing"},"Testing codemods")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"your-first-codemod"},"Learning resources")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"contribution"},"Publishing & contribution"))))}l.isMDXComponent=!0},95:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var i=n(0),o=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=o.a.createContext({}),l=function(e){var t=o.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return o.a.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,a=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),p=i,b=u["".concat(a,".").concat(p)]||u[p]||m[p]||r;return n?o.a.createElement(b,c(c({ref:t},d),{},{components:n})):o.a.createElement(b,c({ref:t},d))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var d=2;d<r;d++)a[d]=n[d];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);