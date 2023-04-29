(()=>{"use strict";var t={28:(t,e,n)=>{n.d(e,{Z:()=>i});var o=n(81),r=n.n(o),a=n(645),c=n.n(a)()(r());c.push([t.id,"* {\n    padding: 0px;\n    margin: 0px;\n}",""]);const i=c},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",o=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),o&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),o&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,o,r,a){"string"==typeof t&&(t=[[null,t,void 0]]);var c={};if(o)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var u=0;u<t.length;u++){var d=[].concat(t[u]);o&&c[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),e.push(d))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,o=0;o<e.length;o++)if(e[o].identifier===t){n=o;break}return n}function o(t,o){for(var a={},c=[],i=0;i<t.length;i++){var s=t[i],u=o.base?s[0]+o.base:s[0],d=a[u]||0,l="".concat(u," ").concat(d);a[u]=d+1;var p=n(l),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var h=r(f,o);o.byIndex=i,e.splice(i,0,{identifier:l,updater:h,references:1})}c.push(l)}return c}function r(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,r){var a=o(t=t||[],r=r||{});return function(t){t=t||[];for(var c=0;c<a.length;c++){var i=n(a[c]);e[i].references--}for(var s=o(t,r),u=0;u<a.length;u++){var d=n(a[u]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=s}}},569:t=>{var e={};t.exports=function(t,n){var o=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return t[o](a,a.exports,n),a.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{var t=n(379),e=n.n(t),o=n(795),r=n.n(o),a=n(569),c=n.n(a),i=n(565),s=n.n(i),u=n(216),d=n.n(u),l=n(589),p=n.n(l),f=n(28),h={};function m(t,e=[],n=!1){const o=document.createElement(t);if(e){let t=e;Array.isArray(e)||(t=[e]),t.forEach((t=>{o.classList.add(t)}))}return n&&o.setAttribute("id",n),o}function v(t,...e){e.forEach((e=>{t.appendChild(e)}))}h.styleTagTransform=p(),h.setAttributes=s(),h.insert=c().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=d(),e()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;const y=document.getElementById("content");function b(){const t=document.querySelector(".content-body");t.textContent="";const e=m("h1"),n=m("p");n.textContent="blah blah home page blah",v(t,e,n)}const x=[{name:"Home",token:"home",method:b},{name:"Menu",token:"menu",method:function(){const t=document.querySelector(".content-body");t.textContent="";const e=m("h1"),n=m("p");n.textContent="blah blah menu page blah",v(t,e,n)}},{name:"About Us",token:"about-us",method:function(){const t=document.querySelector(".content-body");t.textContent="";const e=m("h1"),n=m("p");n.textContent="blah blah about us blah",v(t,e,n)}}];!function(){const t=m("div","header");x.forEach((e=>{const n=m("button",["tab",`${e.token}`]);n.textContent=`${e.name}`,n.addEventListener("click",e.method),t.appendChild(n)}));const e=m("div","content-body"),n=m("div","footer");n.textContent="This isn't a real restaurant",v(y,t,e,n)}(),b()})()})();