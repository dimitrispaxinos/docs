"use strict";(self.webpackChunkpolkadot_js=self.webpackChunkpolkadot_js||[]).push([[1875],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),l=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},p=function(t){var e=l(t.components);return r.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),f=l(n),d=a,m=f["".concat(s,".").concat(d)]||f[d]||u[d]||o;return n?r.createElement(m,c(c({ref:e},p),{},{components:n})):r.createElement(m,c({ref:e},p))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,c=new Array(o);c[0]=f;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:a,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3279:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),c=["components"],i={title:"Overview",slug:"/api-contract"},s=void 0,l={unversionedId:"api-contract/intro",id:"api-contract/intro",title:"Overview",description:"The @polkadot/api-contract interfaces provides a thin layer on-top of the available API transactions to allow you to manage Substrate contracts in a consistent way. Since not all Substrate chains have contracts available, using it assumes that you are connecting to a chain that has the contracts palette.",source:"@site/docs/api-contract/intro.md",sourceDirName:"api-contract",slug:"/api-contract",permalink:"/docs/api-contract",editUrl:"https://github.com/polkadot-js/docs/edit/master/docs/api-contract/intro.md",tags:[],version:"current",frontMatter:{title:"Overview",slug:"/api-contract"},sidebar:"reference",previous:{title:"FAQ",permalink:"/docs/util-crypto/FAQ"},next:{title:"Overview",permalink:"/docs/api-contract/start"}},p={},u=[],f={toc:u};function d(t){var e=t.components,n=(0,a.Z)(t,c);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"@polkadot/api-contract")," interfaces provides a thin layer on-top of the available API transactions to allow you to manage Substrate contracts in a consistent way. Since not all Substrate chains have contracts available, using it assumes that you are connecting to a chain that has the contracts palette."),(0,o.kt)("p",null,"The API contracts interfaces transparently handles any encoding and decoding of messages and results using the available ABIs, allowing the developer to work with contract deployments and calls without having to handle encoding themselves."),(0,o.kt)("p",null,"To get started, follow the ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-contract/start"},"getting started")," journey for installation and use for the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/polkadot-js/api/tree/master/packages/api-contract/src/promise"},"Promise-based version")," for the contracts interfaces."))}d.isMDXComponent=!0}}]);