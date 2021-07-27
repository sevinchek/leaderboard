(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>a});var r=t(645),o=t.n(r)()((function(n){return n[1]}));o.push([n.id,'* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-family: "Baloo Chettan 2", cursive;\n}\n\nul {\n  list-style: none;\n  border: 2px solid black;\n}\n\nli {\n  padding: 0.1rem 0.5rem;\n}\n\nbutton {\n  border: 2px solid black;\n  background-color: #fff;\n}\n\nli:nth-child(odd) {\n  background: #ddd;\n}\n\nh1 {\n  margin: 2rem 1.5rem;\n}\n\nmain {\n  padding: 0 4rem;\n  display: flex;\n}\n\n#scores {\n  display: flex;\n  flex-direction: column;\n  margin-right: 5rem;\n}\n\n#scores-title {\n  display: flex;\n  margin-bottom: 1rem;\n  align-items: center;\n}\n\n#scores-title > button {\n  margin-left: 1rem;\n  height: 1.5rem;\n  padding: 0 1rem;\n}\n\n#add-score > h2 {\n  margin-bottom: 1rem;\n}\n\n#add-score > form {\n  display: flex;\n  flex-direction: column;\n}\n\n#add-score > form > input {\n  margin-bottom: 1rem;\n  border: 2px solid black;\n  padding: 0.2rem;\n}\n\n#add-score > form > button {\n  align-self: flex-end;\n  height: 1.5rem;\n  padding: 0 1rem;\n}\n',""]);const a=o},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,r){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var d=0;d<n.length;d++){var c=[].concat(n[d]);r&&o[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),e.push(c))}},e}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],d=0;d<n.length;d++){var c=n[d],s=r.base?c[0]+r.base:c[0],l=a[s]||0,u="".concat(s," ").concat(l);a[s]=l+1;var f=t(u),m={css:c[1],media:c[2],sourceMap:c[3]};-1!==f?(e[f].references++,e[f].updater(m)):e.push({identifier:u,updater:o(m,r),references:1}),i.push(u)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var d=t(a[i]);e[d].references--}for(var c=r(n,o),s=0;s<a.length;s++){var l=t(a[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=c}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r=t.css,o=t.media,a=t.sourceMap;o?n.setAttribute("media",o):n.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),a=t(569),i=t.n(a),d=t(565),c=t.n(d),s=t(216),l=t.n(s),u=t(589),f=t.n(u),m=t(426),p={};p.styleTagTransform=f(),p.setAttributes=c(),p.insert=i().bind(null,"head"),p.domAPI=o(),p.insertStyleElement=l(),e()(m.Z,p),m.Z&&m.Z.locals&&m.Z.locals;const v=document.querySelector("ul");document.querySelector("#add-form").addEventListener("submit",(n=>{n.preventDefault();const e=document.querySelectorAll("input"),t=document.createElement("li"),r=document.createElement("p");r.innerHTML=e[0].value+": "+e[1].value,t.appendChild(r),v.appendChild(t),e[0].value="",e[1].value=""}))})()})();