(function(FuseBox){
FuseBox.pkg("default", {}, function(___scope___){
___scope___.file("renderer.js", function(exports, require, module, __filename, __dirname){ 

'use strict';

// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process
//ONLY if you set FuseBox.isServer to true.
//Is there a better way to check for this?
FuseBox.isServer = true;

//These two doesn't work, this might be due to fusebox and something frontend related
// import fs from 'fs';
// import * as fs from 'fs'

//Use require instead in order for Node API to work
var fs = require('fs');
console.log("Let's log fs to know Node is avaliable", fs);
if (fs.readFileSync) {
  console.log('Sucess! - readFileSync function exists! Go ahead and start coding!');
} else {
  console.error('fs.readFileSync sync is not avaliable');
}
});
});
FuseBox.pkg("fs", {}, function(___scope___){
___scope___.file("index.js", function(exports, require, module, __filename, __dirname){ 

if (FuseBox.isServer) {
    module.exports = global.require("fs");
} else {
    module.exports = {}
}
});
return ___scope___.entry = "index.js";
});

FuseBox.import("default/renderer.js");
FuseBox.main("default/renderer.js");
})
(function(e){var r="undefined"!=typeof window&&window.navigator;r&&(window.global=window),e=r&&"undefined"==typeof __fbx__dnm__?e:module.exports;var n=r?window.__fsbx__=window.__fsbx__||{}:global.$fsbx=global.$fsbx||{};r||(global.require=require);var t=n.p=n.p||{},i=n.e=n.e||{},a=function(e){var r=e.charCodeAt(0);if(r>=97&&r<=122||64===r){if(64===r){var n=e.split("/"),t=n.splice(2,n.length).join("/");return[n[0]+"/"+n[1],t||void 0]}var i=e.indexOf("/");if(i===-1)return[e];var a=e.substring(0,i),o=e.substring(i+1);return[a,o]}},o=function(e){return e.substring(0,e.lastIndexOf("/"))||"./"},f=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];for(var n=[],t=0,i=arguments.length;t<i;t++)n=n.concat(arguments[t].split("/"));for(var a=[],t=0,i=n.length;t<i;t++){var o=n[t];o&&"."!==o&&(".."===o?a.pop():a.push(o))}return""===n[0]&&a.unshift(""),a.join("/")||(a.length?"/":".")},s=function(e){var r=e.match(/\.(\w{1,})$/);if(r){var n=r[1];return n?e:e+".js"}return e+".js"},u=function(e){if(r){var n,t=document,i=t.getElementsByTagName("head")[0];/\.css$/.test(e)?(n=t.createElement("link"),n.rel="stylesheet",n.type="text/css",n.href=e):(n=t.createElement("script"),n.type="text/javascript",n.src=e,n.async=!0),i.insertBefore(n,i.firstChild)}},l=function(e,n){var i=n.path||"./",o=n.pkg||"default",u=a(e);u&&(i="./",o=u[0],n.v&&n.v[o]&&(o=o+"@"+n.v[o]),e=u[1]),e&&126===e.charCodeAt(0)&&(e=e.slice(2,e.length),i="./");var l=t[o];if(!l){if(r)throw'Package was not found "'+o+'"';return{serverReference:require(o)}}e||(e="./"+l.s.entry);var v,c=f(i,e),d=s(c),p=l.f[d];return!p&&d.indexOf("*")>-1&&(v=d),p||v||(d=f(c,"/","index.js"),p=l.f[d],p||(d=c+".js",p=l.f[d]),p||(p=l.f[c+".jsx"])),{file:p,wildcard:v,pkgName:o,versions:l.v,filePath:c,validPath:d}},v=function(e,n){if(!r)return n(/\.(js|json)$/.test(e)?global.require(e):"");var t;t=new XMLHttpRequest,t.onreadystatechange=function(){if(4==t.readyState)if(200==t.status){var r=t.getResponseHeader("Content-Type"),i=t.responseText;/json/.test(r)?i="module.exports = "+i:/javascript/.test(r)||(i="module.exports = "+JSON.stringify(i));var a=f("./",e);p.dynamic(a,i),n(p.import(e,{}))}else console.error(e+" was not found upon request"),n(void 0)},t.open("GET",e,!0),t.send()},c=function(e,r){var n=i[e];if(n)for(var t in n){var a=n[t].apply(null,r);if(a===!1)return!1}},d=function(e,n){if(void 0===n&&(n={}),58===e.charCodeAt(4)||58===e.charCodeAt(5))return u(e);var i=l(e,n);if(i.serverReference)return i.serverReference;var a=i.file;if(i.wildcard){var f=new RegExp(i.wildcard.replace(/\*/g,"@").replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&").replace(/@/g,"[a-z0-9$_-]+"),"i"),s=t[i.pkgName];if(s){var p={};for(var g in s.f)f.test(g)&&(p[g]=d(i.pkgName+"/"+g));return p}}if(!a){var m="function"==typeof n,h=c("async",[e,n]);if(h===!1)return;return v(e,function(e){if(m)return n(e)})}var _=i.validPath,x=i.pkgName;if(a.locals&&a.locals.module)return a.locals.module.exports;var w=a.locals={},b=o(_);w.exports={},w.module={exports:w.exports},w.require=function(e,r){return d(e,{pkg:x,path:b,v:i.versions})},w.require.main={filename:r?"./":global.require.main.filename,paths:r?[]:global.require.main.paths};var y=[w.module.exports,w.require,w.module,_,b,x];c("before-import",y);var k=a.fn;return k.apply(0,y),c("after-import",y),w.module.exports},p=function(){function n(){}return n.global=function(e,n){var t=r?window:global;return void 0===n?t[e]:void(t[e]=n)},n.import=function(e,r){return d(e,r)},n.on=function(e,r){i[e]=i[e]||[],i[e].push(r)},n.exists=function(e){var r=l(e,{});return void 0!==r.file},n.remove=function(e){var r=l(e,{}),n=t[r.pkgName];n&&n.f[r.validPath]&&delete n.f[r.validPath]},n.main=function(e){return this.mainFile=e,n.import(e,{})},n.expose=function(r){for(var n in r){var t=r[n],i=d(t.pkg);e[t.alias]=i}},n.dynamic=function(r,n,t){var i=t&&t.pkg||"default";this.pkg(i,{},function(t){t.file(r,function(r,t,i,a,o){var f=new Function("__fbx__dnm__","exports","require","module","__filename","__dirname","__root__",n);f(!0,r,t,i,a,o,e)})})},n.flush=function(e){var r=t.default;if(e)return void(r.f[e]&&delete r.f[e].locals);for(var n in r.f){var i=r.f[n];delete i.locals}},n.pkg=function(e,r,n){if(t[e])return n(t[e].s);var i=t[e]={},a=i.f={};i.v=r;var o=i.s={file:function(e,r){a[e]={fn:r}}};return n(o)},n}();return p.packages=t,p.isBrowser=void 0!==r,p.isServer=!r,e.FuseBox=p}(this))
//# sourceMappingURL=sourcemaps.js.map