(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>a});var r=t(645),o=t.n(r)()((function(e){return e[1]}));o.push([e.id,'* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-family: "Baloo Chettan 2", cursive;\n}\n\nul {\n  list-style: none;\n  border: 2px solid black;\n}\n\nli {\n  padding: 0.1rem 0.5rem;\n}\n\nbutton {\n  border: 2px solid black;\n  background-color: #fff;\n}\n\nli:nth-child(odd) {\n  background: #ddd;\n}\n\nh1 {\n  margin: 2rem 1.5rem;\n}\n\nmain {\n  padding: 0 4rem;\n  display: flex;\n}\n\n#scores {\n  display: flex;\n  flex-direction: column;\n  margin-right: 5rem;\n}\n\n#scores-title {\n  display: flex;\n  margin-bottom: 1rem;\n  align-items: center;\n}\n\n#scores-title > button {\n  margin-left: 1rem;\n  height: 1.5rem;\n  padding: 0 1rem;\n}\n\n#add-score > h2 {\n  margin-bottom: 1rem;\n}\n\n#add-score > form {\n  display: flex;\n  flex-direction: column;\n}\n\n#add-score > form > input {\n  margin-bottom: 1rem;\n  border: 2px solid black;\n  padding: 0.2rem;\n}\n\n#add-score > form > button {\n  align-self: flex-end;\n  height: 1.5rem;\n  padding: 0 1rem;\n}\n',""]);const a=o},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);r&&o[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),n.push(c))}},n}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],d=r.base?c[0]+r.base:c[0],u=a[d]||0,l="".concat(d," ").concat(u);a[d]=u+1;var f=t(l),m={css:c[1],media:c[2],sourceMap:c[3]};-1!==f?(n[f].references++,n[f].updater(m)):n.push({identifier:l,updater:o(m,r),references:1}),i.push(l)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=t(a[i]);n[s].references--}for(var c=r(e,o),d=0;d<a.length;d++){var u=t(a[d]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}a=c}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r=t.css,o=t.media,a=t.sourceMap;o?e.setAttribute("media",o):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),a=t(569),i=t.n(a),s=t(565),c=t.n(s),d=t(216),u=t.n(d),l=t(589),f=t.n(l),m=t(426),p={};p.styleTagTransform=f(),p.setAttributes=c(),p.insert=i().bind(null,"head"),p.domAPI=o(),p.insertStyleElement=u(),n()(m.Z,p),m.Z&&m.Z.locals&&m.Z.locals;const h=document.querySelector("ul"),v=document.querySelector("#add-form"),b=document.querySelector("#refresh"),g=async()=>{await fetch("https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/clgFLMtHrYVTrf5UzXrW/scores").then((e=>e.json())).then((e=>{h.innerHTML="",e.result.forEach((e=>{const n=document.createElement("li"),t=document.createElement("p");t.innerHTML=`${e.user}: ${e.score}`,n.appendChild(t),h.appendChild(n)}))}))};v.addEventListener("submit",(async e=>{e.preventDefault();const n=document.querySelectorAll("input");await fetch("https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/clgFLMtHrYVTrf5UzXrW/scores",{method:"POST",body:JSON.stringify({user:n[0].value,score:Number(n[1].value)}),headers:{"Content-type":"application/json; charset=UTF-8"}}),n[0].value="",n[1].value=""})),b.addEventListener("click",g),document.addEventListener("DOMContentLoaded",g)})()})();