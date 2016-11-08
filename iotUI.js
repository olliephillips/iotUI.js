//  iotUI.js - experimental
//	Ollie Phillips, 2016
//	MIT License
//	Credits to Riot.js and Muut Inc. iotUI.js is built on top of riot.js
	
/* Riot v2.3.15, @license MIT, (c) 2015 Muut Inc. + contributors */
(function(e,t){"use strict";var n={version:"v2.3.15",settings:{}},r=0,i=[],o={},f="riot-",u=f+"tag",a="string",s="object",c="undefined",l="function",p=/^(?:t(?:body|head|foot|[rhd])|caption|col(?:group)?|opt(?:ion|group))$/,d=["_item","_id","_parent","update","root","mount","unmount","mixin","isMounted","isLoop","tags","parent","opts","trigger","on","off","one"],g=(e&&e.document||{}).documentMode|0;n.observable=function(e){e=e||{};var t={},n=Array.prototype.slice,r=function(e,t){e.replace(/\S+/g,t)},i=function(t,n){Object.defineProperty(e,t,{value:n,enumerable:false,writable:false,configurable:false})};i("on",function(n,i){if(typeof i!="function")return e;r(n,function(e,n){(t[e]=t[e]||[]).push(i);i.typed=n>0});return e});i("off",function(n,i){if(n=="*"&&!i)t={};else{r(n,function(e){if(i){var n=t[e];for(var r=0,o;o=n&&n[r];++r){if(o==i)n.splice(r--,1)}}else delete t[e]})}return e});i("one",function(t,n){function r(){e.off(t,r);n.apply(e,arguments)}return e.on(t,r)});i("trigger",function(i){var o=n.call(arguments,1),f;r(i,function(r){f=n.call(t[r]||[],0);for(var i=0,u;u=f[i];++i){if(u.busy)return;u.busy=1;u.apply(e,u.typed?[r].concat(o):o);if(f[i]!==u){i--}u.busy=0}if(t["*"]&&r!="*")e.trigger.apply(e,["*",r].concat(o))});return e});return e};(function(t){var n=/^.+?\/+[^\/]+/,r="EventListener",i="remove"+r,o="add"+r,f="hasAttribute",u="replace",a="popstate",s="hashchange",c="trigger",l=3,p=typeof e!="undefined"&&e,d=typeof document!="undefined"&&document,g=p&&history,h=p&&(g.location||p.location),v=R.prototype,m=d&&d.ontouchstart?"touchstart":"click",y=false,b=t.observable(),x=false,w,_,N,C,E,L=[],S=0;function T(e){return e.split(/[\/?#]/)}function M(e,t){var n=new RegExp("^"+t[u](/\*/g,"([^/?#]+?)")[u](/\.\./,".*")+"$"),r=e.match(n);if(r)return r.slice(1)}function O(e,t){var n;return function(){clearTimeout(n);n=setTimeout(e,t)}}function A(e){w=O(H,1);p[o](a,w);p[o](s,w);d[o](m,F);if(e)H(true)}function R(){this.$=[];t.observable(this);b.on("stop",this.s.bind(this));b.on("emit",this.e.bind(this))}function $(e){return e[u](/^\/|\/$/,"")}function j(e){return typeof e=="string"}function k(e){return(e||h.href||"")[u](n,"")}function I(e){return _[0]=="#"?(e||h.href||"").split(_)[1]||"":k(e)[u](_,"")}function H(e){var t=S==0;if(l<=S)return;S++;L.push(function(){var t=I();if(e||t!=N){b[c]("emit",t);N=t}});if(t){while(L.length){L[0]();L.shift()}S=0}}function F(e){if(e.which!=1||e.metaKey||e.ctrlKey||e.shiftKey||e.defaultPrevented)return;var t=e.target;while(t&&t.nodeName!="A")t=t.parentNode;if(!t||t.nodeName!="A"||t[f]("download")||!t[f]("href")||t.target&&t.target!="_self"||t.href.indexOf(h.href.match(n)[0])==-1)return;if(t.href!=h.href){if(t.href.split("#")[0]==h.href.split("#")[0]||_!="#"&&k(t.href).indexOf(_)!==0||!B(I(t.href),t.title||d.title))return}e.preventDefault()}function B(e,t,n){if(g){e=_+$(e);t=t||d.title;n?g.replaceState(null,t,e):g.pushState(null,t,e);d.title=t;x=false;H();return x}return b[c]("emit",I(e))}v.m=function(e,t,n){if(j(e)&&(!t||j(t)))B(e,t,n||false);else if(t)this.r(e,t);else this.r("@",e)};v.s=function(){this.off("*");this.$=[]};v.e=function(e){this.$.concat("@").some(function(t){var n=(t=="@"?C:E)($(e),$(t));if(typeof n!="undefined"){this[c].apply(null,[t].concat(n));return x=true}},this)};v.r=function(e,t){if(e!="@"){e="/"+$(e);this.$.push(e)}this.on(e,t)};var P=new R;var K=P.m.bind(P);K.create=function(){var e=new R;e.m.stop=e.s.bind(e);return e.m.bind(e)};K.base=function(e){_=e||"#";N=I()};K.exec=function(){H(true)};K.parser=function(e,t){if(!e&&!t){C=T;E=M}if(e)C=e;if(t)E=t};K.query=function(){var e={};var t=h.href||N;t[u](/[?&](.+?)=([^&]*)/g,function(t,n,r){e[n]=r});return e};K.stop=function(){if(y){if(p){p[i](a,w);p[i](s,w);d[i](m,F)}b[c]("stop");y=false}};K.start=function(e){if(!y){if(p){if(document.readyState=="complete")A(e);else p[o]("load",function(){setTimeout(function(){A(e)},1)})}y=true}};K.base();K.parser();t.route=K})(n);var h=function(e){var t="g",r=/\/\*[^*]*\*+(?:[^*\/][^*]*\*+)*\//g,i=/"[^"\\]*(?:\\[\S\s][^"\\]*)*"|'[^'\\]*(?:\\[\S\s][^'\\]*)*'/g,o=i.source+"|"+/(?:\breturn\s+|(?:[$\w\)\]]|\+\+|--)\s*(\/)(?![*\/]))/.source+"|"+/\/(?=[^*\/])[^[\/\\]*(?:(?:\[(?:\\.|[^\]\\]*)*\]|\\.)[^[\/\\]*)*?(\/)[gim]*/.source,f={"(":RegExp("([()])|"+o,t),"[":RegExp("([[\\]])|"+o,t),"{":RegExp("([{}])|"+o,t)},u="{ }";var a=["{","}","{","}",/{[^}]*}/,/\\([{}])/g,/\\({)|{/g,RegExp("\\\\(})|([[({])|(})|"+o,t),u,/^\s*{\^?\s*([$\w]+)(?:\s*,\s*(\S+))?\s+in\s+(\S.*)\s*}/,/(^|[^\\]){=[\S\s]*?}/];var s=e,c,l=[],p;function d(e){return e}function g(e,n){if(!n)n=l;return new RegExp(e.source.replace(/{/g,n[2]).replace(/}/g,n[3]),e.global?t:"")}function h(e){if(e===u)return a;var n=e.split(" ");if(n.length!==2||/[\x00-\x1F<>a-zA-Z0-9'",;\\]/.test(e)){throw new Error('Unsupported brackets "'+e+'"')}n=n.concat(e.replace(/(?=[[\]()*+?.^$|])/g,"\\").split(" "));n[4]=g(n[1].length>1?/{[\S\s]*?}/:a[4],n);n[5]=g(e.length>3?/\\({|})/g:a[5],n);n[6]=g(a[6],n);n[7]=RegExp("\\\\("+n[3]+")|([[({])|("+n[3]+")|"+o,t);n[8]=e;return n}function v(e){return e instanceof RegExp?c(e):l[e]}v.split=function b(e,t,n){if(!n)n=l;var r=[],i,o,u,a,s=n[6];o=u=s.lastIndex=0;while(i=s.exec(e)){a=i.index;if(o){if(i[2]){s.lastIndex=p(e,i[2],s.lastIndex);continue}if(!i[3])continue}if(!i[1]){c(e.slice(u,a));u=s.lastIndex;s=n[6+(o^=1)];s.lastIndex=u}}if(e&&u<e.length){c(e.slice(u))}return r;function c(e){if(t||o)r.push(e&&e.replace(n[5],"$1"));else r.push(e)}function p(e,t,n){var r,i=f[t];i.lastIndex=n;n=1;while(r=i.exec(e)){if(r[1]&&!(r[1]===t?++n:--n))break}return n?e.length:i.lastIndex}};v.hasExpr=function x(e){return l[4].test(e)};v.loopKeys=function w(e){var t=e.match(l[9]);return t?{key:t[1],pos:t[2],val:l[0]+t[3].trim()+l[1]}:{val:e.trim()}};v.hasRaw=function(e){return l[10].test(e)};v.array=function _(e){return e?h(e):l};function m(e){if((e||(e=u))!==l[8]){l=h(e);c=e===u?d:g;l[9]=c(a[9]);l[10]=c(a[10])}s=e}function y(e){var t;e=e||{};t=e.brackets;Object.defineProperty(e,"brackets",{set:m,get:function(){return s},enumerable:true});p=e;m(t)}Object.defineProperty(v,"settings",{set:y,get:function(){return p}});v.settings=typeof n!=="undefined"&&n.settings||{};v.set=m;v.R_STRINGS=i;v.R_MLCOMMS=r;v.S_QBLOCKS=o;return v}();var v=function(){var t={};function n(e,n){if(!e)return e;return(t[e]||(t[e]=i(e))).call(n,r)}n.haveRaw=h.hasRaw;n.hasExpr=h.hasExpr;n.loopKeys=h.loopKeys;n.errorHandler=null;function r(e,t){if(n.errorHandler){e.riotData={tagName:t&&t.root&&t.root.tagName,_riot_id:t&&t._riot_id};n.errorHandler(e)}}function i(e){var t=u(e);if(t.slice(0,11)!=="try{return ")t="return "+t;return new Function("E",t+";")}var o=RegExp(h.S_QBLOCKS,"g"),f=/\x01(\d+)~/g;function u(e){var t=[],n,r=h.split(e.replace(/\u2057/g,'"'),1);if(r.length>2||r[0]){var i,o,u=[];for(i=o=0;i<r.length;++i){n=r[i];if(n&&(n=i&1?c(n,1,t):'"'+n.replace(/\\/g,"\\\\").replace(/\r\n?|\n/g,"\\n").replace(/"/g,'\\"')+'"'))u[o++]=n}n=o<2?u[0]:"["+u.join(",")+'].join("")'}else{n=c(r[1],0,t)}if(t[0])n=n.replace(f,function(e,n){return t[n].replace(/\r/g,"\\r").replace(/\n/g,"\\n")});return n}var a={"(":/[()]/g,"[":/[[\]]/g,"{":/[{}]/g},s=/^(?:(-?[_A-Za-z\xA0-\xFF][-\w\xA0-\xFF]*)|\x01(\d+)~):/;function c(e,t,n){if(e[0]==="=")e=e.slice(1);e=e.replace(o,function(e,t){return e.length>2&&!t?""+(n.push(e)-1)+"~":e}).replace(/\s+/g," ").trim().replace(/\ ?([[\({},?\.:])\ ?/g,"$1");if(e){var r=[],i=0,f;while(e&&(f=e.match(s))&&!f.index){var u,c,l=/,|([[{(])|$/g;e=RegExp.rightContext;u=f[2]?n[f[2]].slice(1,-1).trim().replace(/\s+/g," "):f[1];while(c=(f=l.exec(e))[1])p(c,l);c=e.slice(0,f.index);e=RegExp.rightContext;r[i++]=g(c,1,u)}e=!i?g(e,t):i>1?"["+r.join(",")+'].join(" ").trim()':r[0]}return e;function p(t,n){var r,i=1,o=a[t];o.lastIndex=n.lastIndex;while(r=o.exec(e)){if(r[0]===t)++i;else if(!--i)break}n.lastIndex=i?e.length:o.lastIndex}}var l='"in this?this:'+(typeof e!=="object"?"global":"window")+").",p=/[,{][$\w]+:|(^ *|[^$\w\.])(?!(?:typeof|true|false|null|undefined|in|instanceof|is(?:Finite|NaN)|void|NaN|new|Date|RegExp|Math)(?![$\w]))([$_A-Za-z][$\w]*)/g,d=/^(?=(\.[$\w]+))\1(?:[^.[(]|$)/;function g(e,t,n){var r;e=e.replace(p,function(e,t,n,i,o){if(n){i=r?0:i+e.length;if(n!=="this"&&n!=="global"&&n!=="window"){e=t+'("'+n+l+n;if(i)r=(o=o[i])==="."||o==="("||o==="["}else if(i){r=!d.test(o.slice(i))}}return e});if(r){e="try{return "+e+"}catch(e){E(e,this)}"}if(n){e=(r?"function(){"+e+"}.call(this)":"("+e+")")+'?"'+n+'":""'}else if(t){e="function(v){"+(r?e.replace("return ","v="):"v=("+e+")")+';return v||v===0?v:""}.call(this)'}return e}n.parse=function(e){return e};n.version=h.version="v2.3.21";return n}();var m=function(e){var t=/<yield\s+to=(['"])?@\1\s*>([\S\s]+?)<\/yield\s*>/.source,n={tr:"tbody",th:"tr",td:"tr",col:"colgroup"},r="div";e=e&&e<10;var i=e?p:/^(?:t(?:body|head|foot|[rhd])|caption|col(?:group)?)$/;function o(e,t){var n=e&&e.match(/^\s*<([-\w]+)/),o=n&&n[1].toLowerCase(),a=Y(r);e=u(e,t||"");if(i.test(o))a=f(a,e,o);else a.innerHTML=e;a.stub=true;return a}function f(e,t,r){var i=r[0]==="o",o=i?"select>":"table>";e.innerHTML="<"+o+t.trim()+"</"+o;o=e.firstChild;if(i){o.selectedIndex=-1}else{var f=n[r];if(f&&o.children.length===1)o=ee(f,o)}return o}function u(e,n){if(!/<yield\b/i.test(e))return e;var r=0;e=e.replace(/<yield\s+from=['"]([-\w]+)['"]\s*(?:\/>|>\s*<\/yield\s*>)/gi,function(e,i){var o=n.match(RegExp(t.replace("@",i),"i"));++r;return o&&o[2]||""});return r?e:e.replace(/<yield\s*(?:\/>|>\s*<\/yield\s*>)/gi,n)}return o}(g);function y(e,t,n){var r={};r[e.key]=t;if(e.pos)r[e.pos]=n;return r}function b(e,t){var n=t.length,r=e.length,i;while(n>r){i=t[--n];t.splice(n,1);i.unmount()}}function x(e,t){Object.keys(e.tags).forEach(function(n){var r=e.tags[n];if(V(r))A(r,function(e){B(e,n,t)});else B(r,n,t)})}function w(e,t,n){var r=e._root,i;e._virts=[];while(r){i=r.nextSibling;if(n)t.insertBefore(r,n._root);else t.appendChild(r);e._virts.push(r);r=i}}function _(e,t,n,r){var i=e._root,o,f=0;for(;f<r;f++){o=i.nextSibling;t.insertBefore(i,n._root);i=o}}function N(e,t,n){$(e,"each");var r=typeof k(e,"no-reorder")!==a||$(e,"no-reorder"),i=q(e),f=o[i]||{tmpl:e.outerHTML},u=p.test(i),s=e.parentNode,c=document.createTextNode(""),l=H(e),d=/^option$/i.test(i),g=[],h=[],m,N=e.tagName=="VIRTUAL";n=v.loopKeys(n);s.insertBefore(c,e);t.one("before-mount",function(){e.parentNode.removeChild(e);if(s.stub)s=t.root}).on("update",function(){var a=v(n.val,t),p=document.createDocumentFragment();if(!V(a)){m=a||false;a=m?Object.keys(a).map(function(e){return y(n,e,a[e])}):[]}a.forEach(function(a,c){var d=r&&a instanceof Object,v=h.indexOf(a),b=~v&&d?v:c,C=g[b];a=!m&&n.key?y(n,a,c):a;if(!d&&!C||d&&!~v||!C){C=new S(f,{parent:t,isLoop:true,hasImpl:!!o[i],root:u?s:e.cloneNode(),item:a},e.innerHTML);C.mount();if(N)C._root=C.root.firstChild;if(c==g.length){if(N)w(C,p);else p.appendChild(C.root)}else{if(N)w(C,s,g[c]);else s.insertBefore(C.root,g[c].root);h.splice(c,0,a)}g.splice(c,0,C);b=c}else C.update(a);if(b!==c&&d){if(N)_(C,s,g[c],e.childNodes.length);else s.insertBefore(C.root,g[c].root);if(n.pos)C[n.pos]=c;g.splice(c,0,g.splice(b,1)[0]);h.splice(c,0,h.splice(b,1)[0]);if(!l&&C.tags)x(C,c)}C._item=a;D(C,"_parent",t)});b(a,g);if(d)s.appendChild(p);else s.insertBefore(p,c);if(l)t.tags[i]=g;h=a.slice()})}var C=function(t){if(!e)return{add:function(){},inject:function(){}};var n=function(){var e=Y("style");I(e,"type","text/css");var t=ee("style[type=riot]");if(t){if(t.id)e.id=t.id;t.parentNode.replaceChild(e,t)}else document.getElementsByTagName("head")[0].appendChild(e);return e}();var r=n.styleSheet,i="";Object.defineProperty(t,"styleNode",{value:n,writable:true});return{add:function(e){i+=e},inject:function(){if(i){if(r)r.cssText+=i;else n.innerHTML+=i;i=""}}}}(n);function E(e,t,n,r){G(e,function(e){if(e.nodeType==1){e.isLoop=e.isLoop||(e.parentNode&&e.parentNode.isLoop||k(e,"each"))?1:0;if(n){var i=H(e);if(i&&!e.isLoop)n.push(P(i,{root:e,parent:t},e.innerHTML,t))}if(!e.isLoop||r)re(e,t,[])}})}function L(e,t,n){function r(e,t,r){if(v.hasExpr(t)){n.push(z({dom:e,expr:t},r))}}G(e,function(e){var n=e.nodeType,i;if(n==3&&e.parentNode.tagName!="STYLE")r(e,e.nodeValue);if(n!=1)return;i=k(e,"each");if(i){N(e,t,i);return false}A(e.attributes,function(t){var n=t.name,i=n.split("__")[1];r(e,t.value,{attr:i||n,bool:i});if(i){$(e,n);return false}});if(H(e))return false})}function S(e,o,f){var u=n.observable(this),l=te(o.opts)||{},p=o.parent,g=o.isLoop,h=o.hasImpl,y=Q(o.item),b=[],x=[],w=o.root,_=e.fn,N=w.tagName.toLowerCase(),C={},S=[],T;if(_&&w._tag)w._tag.unmount(true);this.isMounted=false;w.isLoop=g;w._tag=this;D(this,"_riot_id",++r);z(this,{parent:p,root:w,opts:l,tags:{}},y);A(w.attributes,function(e){var t=e.value;if(v.hasExpr(t))C[e.name]=t});T=m(e.tmpl,f);function M(){var e=h&&g?u:p||u;A(w.attributes,function(t){var n=t.value;l[j(t.name)]=v.hasExpr(n)?v(n,e):n});A(Object.keys(C),function(t){l[j(t)]=v(C[t],e)})}function k(e){for(var t in y){if(typeof u[t]!==c&&Z(u,t))u[t]=e[t]}}function H(){if(!u.parent||!g)return;A(Object.keys(u.parent),function(e){var t=!U(d,e)&&U(S,e);if(typeof u[e]===c||t){if(!t)S.push(e);u[e]=u.parent[e]}})}D(this,"update",function(e){e=Q(e);H();if(e&&typeof y===s){k(e);y=e}z(u,e);M();u.trigger("update",e);O(b,u);oe(function(){u.trigger("updated")});return this});D(this,"mixin",function(){A(arguments,function(e){var t;e=typeof e===a?n.mixin(e):e;if(R(e)){t=new e;e=e.prototype}else t=e;A(Object.getOwnPropertyNames(e),function(e){if(e!="init")u[e]=R(t[e])?t[e].bind(u):t[e]});if(t.init)t.init.bind(u)()});return this});D(this,"mount",function(){M();if(_)_.call(u,l);L(T,u,b);F(true);if(e.attrs||h){W(e.attrs,function(e,t){I(w,e,t)});L(u.root,u,b)}if(!u.parent||g)u.update(y);u.trigger("before-mount");if(g&&!h){u.root=w=T.firstChild}else{while(T.firstChild)w.appendChild(T.firstChild);if(w.stub)u.root=w=p.root}if(g)E(u.root,u.parent,null,true);if(!u.parent||u.parent.isMounted){u.isMounted=true;u.trigger("mount")}else u.parent.one("mount",function(){if(!X(u.root)){u.parent.isMounted=u.isMounted=true;u.trigger("mount")}})});D(this,"unmount",function(e){var n=w,r=n.parentNode,o,f=i.indexOf(u);u.trigger("before-unmount");if(~f)i.splice(f,1);if(this._virts){A(this._virts,function(e){if(e.parentNode)e.parentNode.removeChild(e)})}if(r){if(p){o=K(p);if(V(o.tags[N]))A(o.tags[N],function(e,t){if(e._riot_id==u._riot_id)o.tags[N].splice(t,1)});else o.tags[N]=t}else while(n.firstChild)n.removeChild(n.firstChild);if(!e)r.removeChild(n);else $(r,"riot-tag")}u.trigger("unmount");F();u.off("*");u.isMounted=false;delete w._tag});function F(e){A(x,function(t){t[e?"mount":"unmount"]()});if(!p)return;var t=e?"on":"off";if(g)p[t]("unmount",u.unmount);else p[t]("update",u.update)[t]("unmount",u.unmount)}E(T,this,x)}function T(t,n,r,i){r[t]=function(t){var o=i._parent,f=i._item,u;if(!f)while(o&&!f){f=o._item;o=o._parent}t=t||e.event;if(Z(t,"currentTarget"))t.currentTarget=r;if(Z(t,"target"))t.target=t.srcElement;if(Z(t,"which"))t.which=t.charCode||t.keyCode;t.item=f;if(n.call(i,t)!==true&&!/radio|check/.test(r.type)){if(t.preventDefault)t.preventDefault();t.returnValue=false}if(!t.preventUpdate){u=f?K(o):i;u.update()}}}function M(e,t,n){if(!e)return;e.insertBefore(n,t);e.removeChild(t)}function O(e,t){A(e,function(e,n){var r=e.dom,i=e.attr,o=v(e.expr,t),a=e.dom.parentNode;if(e.bool)o=o?i:false;else if(o==null)o="";if(a&&a.tagName=="TEXTAREA"){o=(""+o).replace(/riot-/g,"");a.value=o}if(e.value===o)return;e.value=o;if(!i){r.nodeValue=""+o;return}$(r,i);if(R(o)){T(i,o,r,t)}else if(i=="if"){var c=e.stub,l=function(){M(c.parentNode,c,r)},p=function(){M(r.parentNode,r,c)};if(o){if(c){l();r.inStub=false;if(!X(r)){G(r,function(e){if(e._tag&&!e._tag.isMounted)e._tag.isMounted=!!e._tag.trigger("mount")})}}}else{c=e.stub=c||document.createTextNode("");if(r.parentNode)p();else(t.parent||t).one("updated",p);r.inStub=true}}else if(/^(show|hide)$/.test(i)){if(i=="hide")o=!o;r.style.display=o?"":"none"}else if(i=="value"){r.value=o}else if(ie(i,f)&&i!=u){if(o)I(r,i.slice(f.length),o)}else{if(e.bool){r[i]=o;if(!o)return}if(o===0||o&&typeof o!==s)I(r,i,o)}})}function A(e,t){var n=e?e.length:0;for(var r=0,i;r<n;r++){i=e[r];if(i!=null&&t(i,r)===false)r--}return e}function R(e){return typeof e===l||false}function $(e,t){e.removeAttribute(t)}function j(e){return e.replace(/-(\w)/g,function(e,t){return t.toUpperCase()})}function k(e,t){return e.getAttribute(t)}function I(e,t,n){e.setAttribute(t,n)}function H(e){return e.tagName&&o[k(e,u)||e.tagName.toLowerCase()]}function F(e,t,n){var r=n.tags[t];if(r){if(!V(r))if(r!==e)n.tags[t]=[r];if(!U(n.tags[t],e))n.tags[t].push(e)}else{n.tags[t]=e}}function B(e,t,n){var r=e.parent,i;if(!r)return;i=r.tags[t];if(V(i))i.splice(n,0,i.splice(i.indexOf(e),1)[0]);else F(e,t,r)}function P(e,t,n,r){var i=new S(e,t,n),o=q(t.root),f=K(r);i.parent=f;i._parent=r;F(i,o,f);if(f!==r)F(i,o,r);t.root.innerHTML="";return i}function K(e){var t=e;while(!H(t.root)){if(!t.parent)break;t=t.parent}return t}function D(e,t,n,r){Object.defineProperty(e,t,z({value:n,enumerable:false,writable:false,configurable:false},r));return e}function q(e){var t=H(e),n=k(e,"name"),r=n&&!v.hasExpr(n)?n:t?t.name:e.tagName.toLowerCase();return r}function z(e){var t,n=arguments;for(var r=1;r<n.length;++r){if(t=n[r]){for(var i in t){if(Z(e,i))e[i]=t[i]}}}return e}function U(e,t){return~e.indexOf(t)}function V(e){return Array.isArray(e)||e instanceof Array}function Z(e,t){var n=Object.getOwnPropertyDescriptor(e,t);return typeof e[t]===c||n&&n.writable}function Q(e){if(!(e instanceof S)&&!(e&&typeof e.trigger==l))return e;var t={};for(var n in e){if(!U(d,n))t[n]=e[n]}return t}function G(e,t){if(e){if(t(e)===false)return;else{e=e.firstChild;while(e){G(e,t);e=e.nextSibling}}}}function W(e,t){var n,r=/([-\w]+) ?= ?(?:"([^"]*)|'([^']*)|({[^}]*}))/g;while(n=r.exec(e)){t(n[1].toLowerCase(),n[2]||n[3]||n[4])}}function X(e){while(e){if(e.inStub)return true;e=e.parentNode}return false}function Y(e){return document.createElement(e)}function J(e,t){return(t||document).querySelectorAll(e)}function ee(e,t){return(t||document).querySelector(e)}function te(e){function t(){}t.prototype=e;return new t}function ne(e){return k(e,"id")||k(e,"name")}function re(e,t,n){var r=ne(e),i,o=function(o){if(U(n,r))return;i=V(o);if(!o)t[r]=e;else if(!i||i&&!U(o,e)){if(i)o.push(e);else t[r]=[o,e]}};if(!r)return;if(v.hasExpr(r))t.one("mount",function(){r=ne(e);o(t[r])});else o(t[r])}function ie(e,t){return e.slice(0,t.length)===t}var oe=function(e){var t=e.requestAnimationFrame||e.mozRequestAnimationFrame||e.webkitRequestAnimationFrame;if(!t||/iP(ad|hone|od).*OS 6/.test(e.navigator.userAgent)){var n=0;t=function(e){var t=Date.now(),r=Math.max(16-(t-n),0);setTimeout(function(){e(n=t+r)},r)}}return t}(e||{});function fe(e,t,n){var r=o[t],f=e._innerHTML=e._innerHTML||e.innerHTML;e.innerHTML="";if(r&&e)r=new S(r,{root:e,opts:n},f);if(r&&r.mount){r.mount();if(!U(i,r))i.push(r)}return r}n.util={brackets:h,tmpl:v};n.mixin=function(){var e={};return function(t,n){if(!n)return e[t];e[t]=n}}();n.tag=function(e,t,n,r,i){if(R(r)){i=r;if(/^[\w\-]+\s?=/.test(n)){r=n;n=""}else r=""}if(n){if(R(n))i=n;else C.add(n)}o[e]={name:e,tmpl:t,attrs:r,fn:i};return e};n.tag2=function(e,t,n,r,i,f){if(n)C.add(n);o[e]={name:e,tmpl:t,attrs:r,fn:i};return e};n.mount=function(e,t,n){var r,i,f=[];function c(e){var t="";A(e,function(e){if(!/[^-\w]/.test(e))t+=",*["+u+"="+e.trim()+"]"});return t}function l(){var e=Object.keys(o);return e+c(e)}function p(e){var r;if(e.tagName){if(t&&(!(r=k(e,u))||r!=t))I(e,u,t);var i=fe(e,t||e.getAttribute(u)||e.tagName.toLowerCase(),n);if(i)f.push(i)}else if(e.length)A(e,p)}C.inject();if(typeof t===s){n=t;t=0}if(typeof e===a){if(e==="*")e=i=l();else e+=c(e.split(","));r=e?J(e):[]}else r=e;if(t==="*"){t=i||l();if(r.tagName)r=J(t,r);else{var d=[];A(r,function(e){d.push(J(t,e))});r=d}t=0}if(r.tagName)p(r);else A(r,p);return f};n.update=function(){return A(i,function(e){e.update()})};n.Tag=S;if(typeof exports===s)module.exports=n;else if(typeof define===l&&typeof define.amd!==c)define(function(){return n});else e.riot=n})(typeof window!="undefined"?window:void 0);
/* End riot.min.js */


/* Start Riot tags */
// Thermometer
riot.tag2('iotui-thermometer', '<div riot-style="width:{opts.width}px;height:{opts.height}px;"> <svg style="width:100%;height:100%;" viewbox="0 0 500 500" id="thermometer"> <g id="layer1"> <g transform="translate(248,-4)" id="g4870"> <g id="markings"> <path id="rect4772" d="m -148.57143,77.505081 c 19.04762,0 38.09524,0 57.142864,0 0,3.333331 0,6.666662 0,9.999994 -19.047624,0 -38.095244,0 -57.142864,0 0,-3.333332 0,-6.666663 0,-9.999994 z" style="fill:#003410;fill-opacity:1;stroke:#15d400;stroke-width:0;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"></path> <path id="rect4774" d="m -149.42857,270.64792 c 19.04762,0 38.09524,0 57.142857,0 0,3.33333 0,6.66666 0,9.99999 -19.047617,0 -38.095237,0 -57.142857,0 0,-3.33333 0,-6.66666 0,-9.99999 z" style="fill:#003410;fill-opacity:1;stroke:#15d400;stroke-width:0;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"></path> <path id="rect4776" d="m -148.57143,174.07651 c 19.04762,0 38.09524,0 57.142864,0 0,3.33333 0,6.66666 0,9.99999 -19.047624,0 -38.095244,0 -57.142864,0 0,-3.33333 0,-6.66666 0,-9.99999 z" style="fill:#003410;fill-opacity:1;stroke:#15d400;stroke-width:0;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"></path> </g> <g id="thermo"> <g id="g4791"> <path id="path4740" d="M 118,383.21933 C 120.19142,446.58989 57.108672,498.12471 -4.0575798,493.47968 -42.225361,490.87872 -79.317434,469.50687 -96.731301,434.74503 -117.43633,397.67164 -115.16084,348.06735 -86.629321,315.59005 -43.2161,258.79484 54.77478,259.64283 96.120464,318.4755 110.12962,336.94182 118.07497,360.01073 118,383.21933 Z" style="fill:#003410;fill-opacity:1;stroke:#75d400;stroke-width:0;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"></path> <path id="rect4742" d="m -50.571415,1.7907732 c 35.238096,0 70.476191,0 105.714287,0 0,120.9523868 0,241.9047668 0,362.8571468 -35.238096,0 -70.476191,0 -105.714287,0 0,-120.95238 0,-241.90476 0,-362.8571468 z" style="fill:#003410;fill-opacity:1;stroke:#75d400;stroke-width:0;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"></path> <path id="rect4748" d="m -16.000004,36.647915 c 13.333332,0 26.666664,0 39.999996,0 0,101.904755 0,203.809505 0,305.714265 -13.333332,0 -26.666664,0 -39.999996,0 0,-101.90475 0,-203.80951 0,-305.714265 z" style="fill:#eff8fa;fill-opacity:1;stroke:#15d400;stroke-width:0;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"></path> <path id="path4744" d="m 74.285732,384.07648 c 1.566276,46.32683 -52.768461,80.20857 -94.633445,63.03961 -41.687091,-12.62821 -60.474025,-71.27058 -30.696599,-104.32117 28.495461,-37.36093 94.439597,-33.18056 116.619231,8.83664 5.635481,9.81942 8.748294,21.10992 8.710813,32.44492 z" style="fill:#ef3410;fill-opacity:1;stroke:#15d400;stroke-width:0;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"></path> <path id="rect4778" d="m -114.57143,123.50508 c 6.66667,0 13.33333,0 19.999998,0 1.90248,8.50069 -1.153532,12.04289 -9.794628,10 -8.48844,1.82177 -12.30948,-1.02386 -10.20537,-9.79463 l 0,-0.20537 0,0 z" style="fill:#003410;fill-opacity:1;stroke:#15d400;stroke-width:0;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"></path> <path id="rect4780" d="m -114.57143,221.50508 c 6.66667,0 13.33333,0 19.999998,0 1.90248,8.50069 -1.153532,12.04289 -9.794628,10 -8.48844,1.82177 -12.30948,-1.02386 -10.20537,-9.79463 l 0,-0.20537 z" style="fill:#003410;fill-opacity:1;stroke:#15d400;stroke-width:0;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"></path> </g> </g> <rect style="fill:#ef3410;fill-opacity:1;stroke:#15d400;stroke-width:0;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" class="level" width="41" height="240" x="-16.857134" y="80"></rect> <text xml:space="preserve" text-anchor="end" style="font-style:normal;font-weight:normal;font-size:36px;line-height:125%;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" x="-170" y="96.076492" id="max">{opts.max}</text> <text id="min" y="292.07648" x="-170" text-anchor="end" style="font-style:normal;font-weight:normal;font-size:36px;line-height:125%;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" xml:space="preserve">{opts.min}</text> <text id="med" y="192.07649" x="-170" text-anchor="end" style="font-style:normal;font-weight:normal;font-size:36px;line-height:125%;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" xml:space="preserve">{med}</text> </g> </g> </svg> </div>', '', '', function(opts) {

	this.val = opts.val
	this.max = opts.max
	this.min = opts.min
	this.med = parseInt(opts.min) + parseInt((opts.max - opts.min)/2)
	var self = this
	var level

	function setLevel(){
		var height = {max: 240, min: 120}
		var yPos = {max:80, min: 280}
		var range = self.max - self.min
		var heightRange = (height.max - height.min)/range
		var yRange = (yPos.max - yPos.min)/range
		var incs = self.val - self.min

		var curHeight = Math.floor(level.getAttribute('height'))
		var curY = Math.floor(level.getAttribute('y'))
		var newHeight = Math.floor(height.min + (incs * heightRange))
		var newY = Math.floor(yPos.min + (incs * yRange))

		var animate = setInterval(frame, 5);

	    function frame() {
			if((curHeight == newHeight) && (curY == newY)){
				clearInterval(animate)
			}

			if(curHeight > newHeight) {
				curHeight--
			} else if (curHeight < newHeight){
				curHeight++
			}

			if(curY < newY) {
				curY ++
			} else if(curY > newY) {
				curY--
			}

			if(curHeight != newHeight) {
				level.setAttribute('height', curHeight)
			}

			if(curY != newY) {
				level.setAttribute('y', curY)
			}
	    }
	}

	this.on('set', function(val) {
		self.val = val
		self.update()
	})

	this.on('mount', function(){
		level = self.root.querySelector('.level')
		setLevel()

		this.on('update', function(){
			if(self.val > self.max){
				self.val = self.max
			}
			if(self.val < self.min){
				self.val = self.min
			}
			setLevel()
		})
	})
}, '{ }');

// Tank 
riot.tag2('iotui-tank', '<div riot-style="width:{opts.width}px;height:{opts.height}px;"> <svg style="width:100%;height:100%;" viewbox="-100 0 500 350" id="tank"> <g id="layer1"> <g transform="translate(160,-14.162441)" id="g4778"> <path style="fill:#003410;fill-opacity:1;stroke:#003410;stroke-width:19.265028;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" d="m 168.06108,25.066151 c 12.97832,0 25.95665,0 38.93497,0 0,10.72118 0,21.44236 0,32.16354 -12.97832,0 -25.95665,0 -38.93497,0 0,-10.72118 0,-21.44236 0,-32.16354 z m -374.7197,0.407209 c 13.7813,0 27.5626,0 41.3439,0 0,10.571775 0,21.143549 0,31.715324 -13.7813,0 -27.5626,0 -41.3439,0 0,-10.571775 0,-21.143549 0,-31.715324 z m 33.8012,14.0325 c 0,93.23763 0,186.47526 0,279.71289 116.190753,0 232.381507,0 348.57226,0 0,-93.23763 0,-186.47526 0,-279.712895" id="rect4727"></path> <path riot-style="fill:{color};fill-opacity:1;stroke:{color};stroke-width:29.85139465;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" d="m -140.27085,39.009565 c 0,83.421645 0,166.843285 0,250.264925 94.466367,0 188.932733,0 283.3991,0 0,-83.42164 0,-166.84328 0,-250.264925" class="liquid"></path> <path transform="translate(0,0)" style="fill:#eff8fa;fill-opacity:1;stroke:none;stroke-width:30;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" d="m 157.25057,88.928571 c -9.79559,14.650839 -26.09666,9.591099 -38.50883,10.320399 -4.42763,-1.10916 -25.684903,-1.75208 -18.59395,-14.527243 16.15482,-9.266664 34.10139,-8.025603 50.66226,-2.508345 2.16333,1.415108 5.78123,2.168486 6.44052,6.715189 z m -40.39682,0 C 107.05816,103.57941 90.757097,98.51967 78.344927,99.24897 73.917305,98.13981 52.660022,97.49689 59.75097,84.721727 c 16.154825,-9.266664 34.101396,-8.025603 50.66226,-2.508344 2.16333,1.415124 5.78123,2.168485 6.44052,6.715188 z M 61.558823,88.293103 C 51.763258,102.94398 35.46216,97.88423 23.049995,98.61351 18.622368,97.50438 -2.6349191,96.86143 4.4560403,84.086259 20.610865,74.819597 38.557435,76.060658 55.118301,81.577915 c 2.163342,1.415124 5.78123,2.168485 6.440522,6.715188 z M 8.555911,87.657635 c -9.7955651,14.650875 -26.096664,9.591125 -38.508828,10.320415 -4.427627,-1.10914 -25.684917,-1.75209 -18.593953,-14.527258 16.154824,-9.266659 34.101394,-8.025599 50.6622588,-2.508343 2.1240851,1.37564 5.8206835,2.21955 6.4405222,6.715186 z m -52.42991,1.270936 c -9.795588,14.650839 -26.096658,9.591099 -38.508829,10.320399 -4.427623,-1.10916 -25.684912,-1.75208 -18.593952,-14.527243 16.154818,-9.266666 34.101391,-8.025603 50.662258,-2.508345 2.163341,1.415108 5.781233,2.168486 6.440523,6.715189 z M -95.587652,90.0724 c -9.795558,14.65087 -26.096658,9.59112 -38.508828,10.32039 -4.42763,-1.10912 -25.68491,-1.75208 -18.59395,-14.527235 16.15483,-9.266656 34.1014,-8.025597 50.66225,-2.508347 2.124091,1.375653 5.820687,2.219555 6.440528,6.715192 z M -155.54047,36.884777 c 104.50169,0 209.003384,0 313.50508,0 0,17.973641 0,35.947281 0,53.920923 -104.501696,0 -209.00339,0 -313.50508,0 0,-17.973642 0,-35.947282 0,-53.920923 z" class="level"></path> <rect style="fill:#eff8fa;fill-opacity:1;stroke:none;stroke-width:30;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" y="38.076488" x="-155.50508" height="100" width="313.60969" class="fill" style="fill:#003410;fill-opacity:1;stroke:none;stroke-width:30;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"></rect> </g> <rect y="74.798508" x="-20.395954" height="10.101526" width="52.527931" id="rect4813" style="fill:#003410;fill-opacity:1;stroke:none;stroke-width:30;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"></rect> <rect style="fill:#003410;fill-opacity:1;stroke:none;stroke-width:30;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" id="rect4815" width="52.527931" height="10.101526" x="-20.395954" y="170.79851"></rect> <rect y="266.79852" x="-20.395954" height="10.101526" width="52.527931" id="rect4817" style="fill:#003410;fill-opacity:1;stroke:none;stroke-width:30;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"></rect> <rect style="fill:#003410;fill-opacity:1;stroke:none;stroke-width:30;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" id="rect4819" width="24.24366" height="10.101526" x="-13.111678" y="122.79851"></rect> <rect y="216.79851" x="-13.111678" height="10.101526" width="24.24366" id="rect4821" style="fill:#003410;fill-opacity:1;stroke:none;stroke-width:30;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"></rect> <text id="max" y="90.534531" x="-35" text-anchor="end" style="font-style:normal;font-weight:normal;font-size:26px;line-height:125%;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" xml:space="preserve">{opts.max}</text> <text xml:space="preserve" text-anchor="end" style="font-style:normal;font-weight:normal;font-size:26px;line-height:125%;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" x="-35" y="188.53453" id="med">{med}</text> <text id="min" y="284.53455" x="-35" text-anchor="end" style="font-style:normal;font-weight:normal;font-size:26px;line-height:125%;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" xml:space="preserve">{opts.min}</text> </g> </svg> </div>', '', '', function(opts) {

	if(opts.color) {
		this.color = opts.color
	} else {
		this.color = '#72c9c6'
	}
	this.val = opts.val
	this.max = opts.max
	this.min = opts.min
	this.med = parseInt(opts.min) + parseInt((opts.max - opts.min)/2)
	var self = this
	var level, fill

	function setLevel(){

		var height = {max: 0, min: 195}
		var range = self.max - self.min
		var heightRange = (height.min - height.max)/range
		var incs = self.val - self.min

		var curHeight = Math.floor(fill.getAttribute('height'))
		var newHeight = Math.floor(height.min - (incs * heightRange))
		if (newHeight < 0){newHeight = 0}

		var animate = setInterval(frame, 5);

	    function frame() {
			if(curHeight == newHeight){
				clearInterval(animate)
			}

			if(curHeight > newHeight) {
				curHeight--
			} else if (curHeight < newHeight){
				curHeight++
			}

			if(curHeight != newHeight) {
				fill.setAttribute('height', curHeight)
				level.setAttribute('transform','translate(0,'+ curHeight + ')')
			}
	    }
	}

	this.on('set', function(val) {
		self.val = val
		self.update()
	})

	this.on('mount', function(){
		level = self.root.querySelector('.level')
		fill = self.root.querySelector('.fill')
		setLevel()

		this.on('update', function(){
			if(self.val > self.max){
				self.val = self.max
			}
			if(self.val < self.min){
				self.val = self.min
			}
			setLevel()
		})
	})
}, '{ }');

// Switch
riot.tag2('iotui-switch', '<div riot-style="width:{opts.width}px;height:{opts.height}px;"> <svg style="width:100%;height:100%;" viewbox="-100 -50 500 350" id="tank"> <g id="layer1"> <g transform="translate(157.5838,0)" id="g4250"> <ellipse style="fill:#d42e00;fill-opacity:1;stroke:#003410;stroke-width:30;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" id="path4228" cx="-69.124046" cy="86.58773" rx="72.14286" ry="70.714287"></ellipse> <ellipse ry="70.714287" rx="72.14286" cy="86.58773" cx="70.875954" id="ellipse4230" style="fill:#30b100;fill-opacity:1;stroke:#003410;stroke-width:30;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"></ellipse> <rect style="fill:#003410;fill-opacity:1;stroke:none;stroke-width:29.18169594;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" id="rect4232" width="147.96118" height="171.15004" x="-71.390335" y="1.0357149"></rect> <rect style="fill:#d42e00;fill-opacity:1;stroke:none;stroke-width:30;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" id="rect4234" width="72.050041" height="111.42857" x="-72.390335" y="30.87344"></rect> <rect y="31.125977" x="0.65025854" height="110.9235" width="76.090652" id="rect4236" style="fill:#30b100;fill-opacity:1;stroke:none;stroke-width:30;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"></rect> <circle style="fill:#483737;fill-opacity:1;stroke:#483737;stroke-width:39.70330048;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" class="button" cx="52.0" cy="85.296188" r="56.14835"></circle> <text xml:space="preserve" style="font-style:normal;font-weight:normal;font-size:40px;line-height:125%;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#999999;fill-opacity:1;stroke:#000000;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:0" x="30.0" y="94.615761" class="label">{labelText}</text> </g> </g> </svg> </div>', '', '', function(opts) {

	this.state = opts.state || 'off'
	if(this.state == 'off') {
		this.labelText = 'Off'
	} else {
		this.labelText = 'On'
	}

	var self = this
	var button, label

	function setSwitch() {
		var buttonPosition = {on: -52.0, off: 53}
		var labelPosition = {on: -82.0, off: 30}
		var curPosition = button.getAttribute('cx')
		var tarPosition
		var newLabel

		if(self.state == 'on') {
			tarPosition = buttonPosition.on
			tarLabelPosition = labelPosition.on
			self.labelText = 'On'
		} else {
			tarPosition = buttonPosition.off
			tarLabelPosition = labelPosition.off
			self.labelText = 'Off'
		}
		label.style.display = 'none'
		var animate = setInterval(frame, 5);
		function frame() {
			if(curPosition == tarPosition){
				clearInterval(animate)
				label.setAttribute('x', tarLabelPosition)
				label.style.display = 'inline'
			}

			if(curPosition > tarPosition) {
				curPosition--
			} else if (curPosition < tarPosition){
				curPosition++
			}

			if(curPosition != tarPosition) {
				button.setAttribute('cx', curPosition)
			}
	    }
	}

	this.on('set', function(state) {
		self.state = state
		self.update()
	})

	function buttonPush(){
		if(self.state == 'on') {
			self.state = 'off'
		} else {
			self.state = 'on'
		}
		self.update()
	}

	this.on('mount', function(){

		button = self.root.querySelector('.button')
		label = self.root.querySelector('.label')
		self.state = opts.state
		setSwitch()

		button.addEventListener('mousedown', function(){
			event.preventDefault()
			buttonPush()
		})

		button.addEventListener('touchstart', function(){
			event.preventDefault()
			buttonPush()
		})

		label.addEventListener('mousedown', function(){
			event.preventDefault()
			buttonPush()
		})

		label.addEventListener('touchstart', function(){
			event.preventDefault()
			buttonPush()
		})

		this.on('update', function(){
			setSwitch()
			this.trigger('change', self.state)
		})

	})
}, '{ }');

// Controller
riot.tag2('iotui-controller', '<div riot-style="width:{opts.width}px;height:{opts.height}px;"> <svg style="width:100%;height:100%;" viewbox="-40 0 500 250" id="tank"> <g transform="translate(212.80291,-2.710865)" id="g3357"> <rect style="fill:#eff8fa;fill-opacity:1;stroke:#003410;stroke-width:30;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" id="rect3351" width="162.39992" height="145.14807" x="-81.077835" y="18.766151"></rect> <g class="increment"> <circle class="increment-circle" r="48.880211" cy="93.660683" cx="162.18085" id="path4235" style="fill:#eff8fa;fill-opacity:1;stroke:none;stroke-width:30;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0"></circle> <rect y="56.050453" x="151.38367" height="75.200325" width="22.669085" id="rect4229" class="increment-rect" style="fill:#003410;fill-opacity:1;stroke:none;stroke-width:30;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0"></rect> <rect transform="matrix(0,-1,1,0,0,0)" style="fill:#003410;fill-opacity:1;stroke:none;stroke-width:30;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0" id="rect4231" width="24.064104" height="70.840889" x="-104.68266" y="126.36285"></rect> </g> <g class="decrement"> <circle class="decrement-circle" style="fill:#eff8fa;fill-opacity:1;stroke:none;stroke-width:30;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0" id="circle4239" cx="-161.85349" cy="93.660683" r="48.880211"></circle> <rect y="-197.67148" x="-104.59953" height="70.840889" width="24.064104" id="rect4243" class="decrement-rect" style="fill:#003410;fill-opacity:1;stroke:none;stroke-width:30;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0" transform="matrix(0,-1,1,0,0,0)"></rect> </g> <text text-anchor="middle" xml:space="preserve" style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:50px;line-height:125%;font-family:sans-serif;-inkscape-font-specification:\'sans-serif, Normal\';text-align:start;letter-spacing:0px;word-spacing:0px;writing-mode:lr-tb;fill:#000000;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" x="-2.298431" y="108.29862" id="display">{val}</text> </g> </svg> </div>', '', '', function(opts) {

	this.val = opts.val
	this.max = opts.max
	this.min = opts.min
	this.step = opts.step || 1

	var self = this
	var increment, decrement

	function incVal() {
		var newVal,curVal
		curVal = self.val
		increment.setAttribute('transform','translate(0,2)')
		setTimeout(function(){
			increment.setAttribute('transform','translate(0,-2)')
		},100)

		newVal = parseInt(self.val) + parseInt(self.step)
		if(newVal > self.max) {
			newVal = self.max
		}
		if(newVal != curVal) {
			self.val = newVal
			self.update()
		}
	}

	function decVal() {
		var newVal,curVal
		curVal = self.val
		decrement.setAttribute('transform','translate(0,2)')
		setTimeout(function(){
			decrement.setAttribute('transform','translate(0,-2)')
		},100)

		newVal = parseInt(self.val) - parseInt(self.step)
		if(newVal < self.min) {
			newVal = self.min
		}
		if(newVal != curVal) {
			self.val = newVal
			self.update()
		}
	}

	this.on('set', function(val) {
		if(val > self.val) {
			incVal()
		} else {
			decVal()
		}
	})

	this.on('mount', function(){

		increment = self.root.querySelector('.increment')
		decrement = self.root.querySelector('.decrement')
		self.state = opts.state

		increment.addEventListener('mousedown', function(){
			event.preventDefault()
			incVal()
		})

		increment.addEventListener('touchstart', function(){
			event.preventDefault()
			incVal()
		})

		decrement.addEventListener('mousedown', function(){
			event.preventDefault()
			decVal()
		})

		decrement.addEventListener('touchstart', function(){
			event.preventDefault()
			decVal()
		})

		this.on('update', function(){
			this.trigger('change', self.state)
		})
	})
}, '{ }');

// F1Wheel
riot.tag2('iotui-f1wheel', '<div riot-style="height:{opts.height}px;width:{opts.width}px;margin-left:auto;margin-right:auto;"> <svg id="riot-f1wheel" style="width:100%;height:100%;" viewbox="0 0 523 341" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <defs> <radialgradient cx="119.095644%" cy="52.0301464%" fx="119.095644%" fy="52.0301464%" r="14.6438989%" id="radialGradient-1"> <stop stop-color="#494949" offset="0%"></stop> <stop stop-color="#161616" offset="100%"></stop> </radialGradient> <lineargradient x1="100%" y1="42%" x2="59.0642105%" y2="42%" id="linearGradient-2"> <stop stop-color="#191919" offset="0%"></stop> <stop stop-color="#4C4C4C" offset="48%"></stop> <stop stop-color="#191919" offset="96%"></stop> </linearGradient> <lineargradient x1="-42.9665647%" y1="101.754319%" x2="-42.9665476%" y2="19.8827403%" id="linearGradient-3"> <stop stop-color="#191919" offset="0%"></stop> <stop stop-color="#4C4C4C" offset="48%"></stop> <stop stop-color="#191919" offset="96%"></stop> </linearGradient> <lineargradient x1="50.1105719%" y1="99.7080827%" x2="50.110596%" y2="-0.584348656%" id="linearGradient-4"> <stop stop-color="#191919" offset="0%"></stop> <stop stop-color="#4C4C4C" offset="48%"></stop> <stop stop-color="#191919" offset="96%"></stop> </linearGradient> <lineargradient x1="91.5044266%" y1="30.4937341%" x2="16.0759438%" y2="17.4454618%" id="linearGradient-5"> <stop stop-color="#191919" offset="0%"></stop> <stop stop-color="#4C4C4C" offset="48%"></stop> <stop stop-color="#191919" offset="96%"></stop> </linearGradient> <lineargradient x1="96.207177%" y1="84.4571859%" x2="34.4929582%" y2="97.2764936%" id="linearGradient-6"> <stop stop-color="#191919" offset="0%"></stop> <stop stop-color="#4C4C4C" offset="48%"></stop> <stop stop-color="#191919" offset="96%"></stop> </linearGradient> <radialgradient cx="-19.0810003%" cy="52.0301464%" fx="-19.0810003%" fy="52.0301464%" r="14.6438989%" id="radialGradient-7"> <stop stop-color="#494949" offset="0%"></stop> <stop stop-color="#161616" offset="100%"></stop> </radialGradient> <lineargradient x1="0%" y1="42%" x2="40.9357895%" y2="42%" id="linearGradient-8"> <stop stop-color="#191919" offset="0%"></stop> <stop stop-color="#4C4C4C" offset="48%"></stop> <stop stop-color="#191919" offset="96%"></stop> </linearGradient> <lineargradient x1="142.967035%" y1="101.754319%" x2="142.967018%" y2="19.8827403%" id="linearGradient-9"> <stop stop-color="#191919" offset="0%"></stop> <stop stop-color="#4C4C4C" offset="48%"></stop> <stop stop-color="#191919" offset="96%"></stop> </linearGradient> <lineargradient x1="49.8892495%" y1="99.7080827%" x2="49.8892254%" y2="-0.584348656%" id="linearGradient-10"> <stop stop-color="#191919" offset="0%"></stop> <stop stop-color="#4C4C4C" offset="48%"></stop> <stop stop-color="#191919" offset="96%"></stop> </linearGradient> <lineargradient x1="8.49543826%" y1="30.4937341%" x2="83.923921%" y2="17.4454618%" id="linearGradient-11"> <stop stop-color="#191919" offset="0%"></stop> <stop stop-color="#4C4C4C" offset="48%"></stop> <stop stop-color="#191919" offset="96%"></stop> </linearGradient> <lineargradient x1="3.79268783%" y1="84.4571859%" x2="65.5069066%" y2="97.2764936%" id="linearGradient-12"> <stop stop-color="#191919" offset="0%"></stop> <stop stop-color="#4C4C4C" offset="48%"></stop> <stop stop-color="#191919" offset="96%"></stop> </linearGradient> <radialgradient cx="-19.0810003%" cy="52.0329748%" fx="-19.0810003%" fy="52.0329748%" r="14.6438989%" id="radialGradient-13"> <stop stop-color="#494949" offset="0%"></stop> <stop stop-color="#161616" offset="100%"></stop> </radialGradient> <radialgradient cx="119.095644%" cy="52.0335608%" fx="119.095644%" fy="52.0335608%" r="14.6438989%" id="radialGradient-14"> <stop stop-color="#494949" offset="0%"></stop> <stop stop-color="#161616" offset="100%"></stop> </radialGradient> <radialgradient cx="47.8895118%" cy="55.8923302%" fx="47.8895118%" fy="55.8923302%" r="3.51813166%" id="radialGradient-15"> <stop stop-color="#494949" offset="0%"></stop> <stop stop-color="#161616" offset="100%"></stop> </radialGradient> <radialgradient cx="52.085624%" cy="55.8923302%" fx="52.085624%" fy="55.8923302%" r="3.51794244%" id="radialGradient-16"> <stop stop-color="#494949" offset="0%"></stop> <stop stop-color="#161616" offset="100%"></stop> </radialGradient> <lineargradient x1="99%" y1="54%" x2="0%" y2="53%" id="linearGradient-17"> <stop stop-color="#555555" offset="49%"></stop> <stop stop-color="#000000" offset="100%"></stop> </linearGradient> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="wheel"> <path d="M355.884216,299.095764 C347.228517,296.223823 337.327685,301.635517 328.268951,299.095764 C304.945707,292.55674 278.921547,287.576843 261.5,287.576843 C243.927092,287.576843 220.602013,292.469854 197.072193,299.095778 C189.450269,301.242088 180.15386,296.6932 172.677521,299.095764 C131.760179,312.244784 97.5,334.5 97.5,334.5 L114.5,255.5 L114.5,136.5 L142.5,119.5 L136.5,56.5 L63.5,56.5 L34.5,45.5 L74.5,5.5 L136.5,0.5 L258.426346,0.5 L386.5,0.5 L448.5,5.5 L488.5,45.5 L448.5,56.5 L386.5,56.5 L380.5,119.5 L408.5,136.5 L408.5,255.5 L425.5,334.5 C425.5,334.5 394.555266,311.926728 355.884216,299.095764 Z" id="Shape" fill="#323232"></path> <path d="M404.33,289.75 C401.05,287.8 398.02,297.53 397.56,311.47 C397.1,325.42 399.39,338.31 402.67,340.25 C402.95,340.42 403.22,340.5 403.5,340.5" id="Shape" fill="url(#radialGradient-1)"></path> <polygon id="Shape" fill="#191919" points="391.5 39.5 335.5 68.5 278.097336 229.422699 289.5 260.5 233.5 260.5 245.987854 229.422699 187.5 68.5 131.5 39.5 131.5 5.5 136.5 0.5 386.5 0.5 391.5 5.5"></polygon> <g id="Group" transform="translate(397.000000, 28.000000)"> <polygon id="Shape" fill="url(#linearGradient-2)" points="125.5 51.5 125.5 249.5 62.5 312.5 11.5 312.5 11.5 261.5 51.5 261.5 79.5 232.5 79.5 176.5 57.5 153.5 11.5 153.5 11.5 96.5 62.5 96.5 79.5 79.5 79.5 57.5 51.5 28.5 79.5 0.5"></polygon> <polygon id="Shape" fill="url(#linearGradient-3)" points="53.34 153.5 0.5 153.5 0.5 96.5 59.08 96.5 85.5 108.5 85.5 142.5"></polygon> <polygon id="Shape" fill="url(#linearGradient-4)" points="6.5 312.5 6.5 261.5 52.97 261.5 62.5 312.5"></polygon> <polygon id="Shape" fill="url(#linearGradient-5)" points="62.5 312.5 51.5 261.5 79.5 232.5 125.5 249.5"></polygon> <polygon id="Shape" fill="url(#linearGradient-6)" points="125.5 51.5 79.5 57.5 51.5 28.5 79.5 0.5"></polygon> </g> <path d="M118.5,289.75 C121.78,287.8 124.81,297.53 125.27,311.47 C125.73,325.42 123.44,338.31 120.16,340.25 C119.89,340.42 119.61,340.5 119.33,340.5" id="Shape" fill="url(#radialGradient-7)"></path> <polygon id="Shape" fill="url(#linearGradient-8)" points="0.5 79.5 0.5 277.5 63.5 340.5 114.5 340.5 114.5 289.5 74.5 289.5 46.5 260.5 46.5 204.5 68.5 181.5 114.5 181.5 114.5 124.5 63.5 124.5 46.5 107.5 46.5 85.5 74.5 56.5 46.5 28.5"></polygon> <polygon id="Shape" fill="url(#linearGradient-9)" points="72.66 181.5 125.5 181.5 125.5 124.5 66.92 124.5 40.5 136.5 40.5 170.5"></polygon> <polygon id="Shape" fill="url(#linearGradient-10)" points="119.5 340.5 119.5 289.5 73.03 289.5 63.5 340.5"></polygon> <polygon id="Shape" fill="url(#linearGradient-11)" points="63.5 340.5 74.5 289.5 46.5 260.5 0.5 277.5"></polygon> <polygon id="Shape" fill="url(#linearGradient-12)" points="0.5 79.5 46.5 85.5 74.5 56.5 46.5 28.5"></polygon> <rect id="Rectangle-path" stroke="#000000" stroke-width="2.12" fill="#000000" x="221.5" y="157.5" width="233" height="22" rx="4"></rect> <circle fill="#656565" cx="357.5" cy="96.5" r="22.5"></circle> <circle fill="#4C4C4C" cx="359.5" cy="99.5" r="17.5"></circle> <circle stroke="#000000" stroke-width="2" fill="#000000" cx="356.5" cy="95.5" r="17.5"></circle> <text font-family="sans-serif" font-size="10" font-weight="normal" fill="#F7F4F8"> <tspan class="startbuttonlabel" x="318" y="133">{opts.startbuttonlabel}</tspan> </text> <circle id="Oval" fill="#656565" cx="158.5" cy="154.5" r="22.5"></circle> <circle id="Oval" fill="#4C4C4C" cx="160.5" cy="154.5" r="17.5"></circle> <circle id="Oval" stroke="#000000" stroke-width="2" fill="#000000" cx="156.5" cy="151.5" r="17.5"></circle> <circle id="Oval" fill="#656565" cx="159.5" cy="208.5" r="22.5"></circle> <circle id="Oval" fill="#4C4C4C" cx="161.5" cy="206.5" r="17.5"></circle> <circle id="Oval" stroke="#000000" stroke-width="2" fill="#000000" cx="157.5" cy="205.5" r="17.5"></circle> <rect id="Rectangle-path" stroke="#000000" stroke-width="1.12" fill="#000000" x="221.5" y="214.5" width="176" height="22"></rect> <circle id="Oval" stroke="#000000" stroke-width="4" fill="#323232" cx="262" cy="203" r="74"></circle> <rect id="Rectangle-path" stroke="#000000" stroke-width="2" fill="#656565" x="125.5" y="11.5" width="6" height="23"></rect> <rect id="Rectangle-path" stroke="#000000" stroke-width="2" fill="#656565" x="391.5" y="11.5" width="6" height="23"></rect> <circle id="Oval" stroke="#4A4A4A" stroke-width="4" fill="#6C696C" cx="262" cy="198" r="40"></circle> <path d="M124.67,124.77 C127.95,122.6 130.98,133.47 131.44,149.06 C131.9,164.65 129.61,179.05 126.33,181.23 C126.06,181.41 125.78,181.5 125.5,181.5" id="Shape" fill="url(#radialGradient-13)"></path> <path d="M398.33,124.78 C395.05,122.6 392.02,133.47 391.56,149.06 C391.1,164.65 393.39,179.05 396.67,181.23 C396.95,181.41 397.22,181.5 397.5,181.5" id="Shape" fill="url(#radialGradient-14)"></path> <path d="M46.29,28.73 C46.97,26.13 53.87,30.16 61.7,37.74 C69.54,45.31 75.34,53.56 74.66,56.16 C74.6,56.38 74.5,56.55 74.35,56.68" id="Shape" fill="url(#radialGradient-15)"></path> <path d="M476.59,28.48 C475.9,25.88 469,29.91 461.17,37.49 C453.33,45.06 447.53,53.31 448.22,55.91 C448.27,56.13 448.38,56.3 448.52,56.43" id="Shape" fill="url(#radialGradient-16)"></path> <text font-family="sans-serif" font-size="30" font-weight="normal" fill="#9B9B9B"> <tspan text-anchor="middle" class="wheellabel" x="260" y="47">{opts.wheellabel}</tspan> </text> <text font-family="sans-serif" font-size="10" font-weight="normal" fill="#F7F4F8"> <tspan class="primarybuttonlabel" x="162" y="126">{opts.primarybuttonlabel}</tspan> </text> <text font-family="sans-serif" font-size="10" font-weight="normal" fill="#F7F4F8"> <tspan class="secondarybuttonlabel" x="163" y="248">{opts.secondarybuttonlabel}</tspan> </text> </g> <g class="startbutton"> <circle id="startbuttonlightgo" stroke="#000000" stroke-width="2" fill="#51E413" cx="356.5" cy="95.5" r="12.5"></circle> <circle id="startbuttonlightstop" stroke="#000000" stroke-width="2" fill="#E70D0D" cx="356.5" cy="96.5" r="12.5"></circle> </g> <g id="forwarddrivebutton" transform="translate(377.000000, 134.000000)"> <rect id="Rectangle-path" fill="url(#linearGradient-17)" x="0.5" y="0.5" width="79" height="56" rx="6.59"></rect> <polygon id="Triangle" fill="#51E513" points="45 13 60 43 30 43"></polygon> </g> <g id="reversedrivebutton" transform="translate(377.000000, 205.000000)"> <rect id="Rectangle-path-Copy" fill="url(#linearGradient-17)" x="0" y="0" width="79" height="56" rx="6.59"></rect> <polygon id="Triangle" fill="#51E513" transform="translate(44.000000, 30.000000) scale(1, -1) translate(-44.000000, -30.000000) " points="59 45 29 45 44 15"></polygon> </g> <circle id="primarybutton" stroke="#000000" stroke-width="2" fill="#4990E2" cx="156.5" cy="151.5" r="12.5"></circle> <circle id="secondarybutton" stroke="#000000" stroke-width="2" fill="#F6A623" cx="157.5" cy="205.5" r="12.5"></circle> </g> </svg> </div>', '', '', function(opts) {

	this.wheellabel = opts.wheellabel
	this.primarybuttonlabel = opts.primarynuttonlabel
	this.secondarybuttonlabel = opts.secondarybuttonlabel
	this.startbuttonlabel = opts.startbuttonlabel

	this.state = {}

	this.sensitivity = 10

	this.state.running = false
	var self = this

	this.on('mount', function(){

		window.addEventListener("deviceorientation", getOrientation, true);

		primaryButton = self.root.querySelector('#primarybutton')
		secondaryButton = self.root.querySelector('#secondarybutton')

		startButton = self.root.querySelector('.startbutton')
		startButtonLightGo = self.root.querySelector('#startbuttonlightgo')
		startButtonLightStop = self.root.querySelector('#startbuttonlightstop')

		forwardDriveButton = self.root.querySelector('#forwarddrivebutton')
		reverseDriveButton = self.root.querySelector('#reversedrivebutton')

		startButton.addEventListener('touchstart', function(){
			event.preventDefault()
			startButtonPush()
		})
		startButton.addEventListener('mousedown', function(){
			event.preventDefault()
			startButtonPush()
		})

		primaryButton.addEventListener('touchstart', function(){
			event.preventDefault()
			primaryButtonPush()
		})
		primaryButton.addEventListener('mousedown', function(){
			event.preventDefault()
			primaryButtonPush()
		})

		secondaryButton.addEventListener('touchstart', function(){
			event.preventDefault()
			secondaryButtonPush()
		})
		secondaryButton.addEventListener('mousedown', function(){
			event.preventDefault()
			secondaryButtonPush()
		})

		forwardDriveButton.addEventListener('touchstart', function(){
			event.preventDefault()
			forwardDrive()
		})
		forwardDriveButton.addEventListener('mousedown', function(){
			event.preventDefault()
			forwardDrive()
		})

		forwardDriveButton.addEventListener('touchend', function(){
			event.preventDefault()
			stop()
		})
		forwardDriveButton.addEventListener('mouseup', function(){
			event.preventDefault()
			stop()
		})

		reverseDriveButton.addEventListener('touchstart', function(){
			event.preventDefault()
			reverseDrive()
		})
		reverseDriveButton.addEventListener('mousedown', function(){
			event.preventDefault()
			reverseDrive()
		})

		reverseDriveButton.addEventListener('touchend', function(){
			event.preventDefault()
			stop()
		})
		reverseDriveButton.addEventListener('mouseup', function(){
			event.preventDefault()
			stop()
		})

		this.on('update', function(){
			this.trigger('change', self.state)
		})
	})

	function getOrientation(event) {

		if(event.beta) {
			self.state.beta = event.beta
		}
	}

	function getSteering() {
		if(self.state.beta < -self.sensitivity) {

			self.state.steer = "left"
		} else if(self.state.beta > self.sensitivity) {

			self.state.steer = "right"
		} else {

			self.state.steer = "neutral"
		}
		self.trigger('steer', self.state)
	}

	function startButtonPush() {
		self.state.running = !self.state.running
		if(self.state.running == true){
			startButtonLightStop.style.display = "none";
			self.state.ignition = "on"

			this.interval = setInterval(getSteering, 500)
		} else {
			startButtonLightStop.style.display = "inline";
			self.state.ignition = "off"
			clearInterval(this.interval)
		}
		self.trigger('ignition', self.state)
	}

	function primaryButtonPush() {
		self.trigger('primarybuttonpush', self.state)
	}

	function secondaryButtonPush() {
		self.trigger('secondarybuttonpush', self.state)
	}

	function forwardDrive(){
		if (self.state.running) {
			self.state.drive = "forward"
			self.trigger('drive', self.state)
		}
	}

	function reverseDrive(){
		if (self.state.running) {
			self.state.drive = "reverse"
			self.trigger('drive', self.state)
		}
	}

	function stop(){
		if (self.state.running) {
			self.state.drive = "stop"
			self.trigger('drive', self.state)
		}
	}

});

/* End Riot tags */

/* Start iotUI.js */
var iotUI = {
	
	thermometer: {
		set: function(id, data){
			if(document.querySelector('#'+ id)) {
				var tag = document.querySelector('#'+ id)._tag;
				tag.trigger('set', data);
			}
		},
		get: function(id, param){
			if(document.querySelector('#'+ id)) {
				var tag = document.querySelector('#'+ id)._tag;
				switch (param) {
					case 'val' :
						return tag.val
					break; 
					case 'max' :
						return tag.max
					break;
					case 'min' :
						return tag.min
					break;
				}
			}	
		}
	},
	
	tank: {
		set: function(id, data){
			if(document.querySelector('#'+ id)) {
				var tag = document.querySelector('#'+ id)._tag;
				tag.trigger('set', data);
			}
		},
		get: function(id, param){
			if(document.querySelector('#'+ id)) {
				var tag = document.querySelector('#'+ id)._tag;
				switch (param) {
					case 'val' :
						return tag.val
					break; 
					case 'max' :
						return tag.max
					break;
					case 'min' :
						return tag.min
					break;
				}
			}	
		}
	},
	
	switch: {
		set: {
			on: function(id){
				if(document.querySelector('#'+ id)) {
					var tag = document.querySelector('#'+ id)._tag;
					tag.trigger('set', 'on');
				}
			},
			off: function(id){
				if(document.querySelector('#'+ id)) {
					var tag = document.querySelector('#'+ id)._tag;
					tag.trigger('set', 'off');
				}
			}	
		},
		get: function(id){
			if(document.querySelector('#'+ id)) {
				var tag = document.querySelector('#'+ id)._tag;
				return tag.state
			}	
		}
	},
	
	controller: {
		set: function(id, data){
			if(document.querySelector('#'+ id)) {
				var tag = document.querySelector('#'+ id)._tag;
				tag.trigger('set', data);
			}
		},
		get: function(id, param){
			if(document.querySelector('#'+ id)) {
				var tag = document.querySelector('#'+ id)._tag;
				switch (param) {
					case 'val' :
						return tag.val
					break; 
					case 'max' :
						return tag.max
					break;
					case 'min' :
						return tag.min
					break;
					case 'step' :
						return tag.interval
					break;
				}
			}	
		}
	},
	
	addListener: function(id, event, callback){
		if(document.querySelector('#'+ id)) {
			var tag = document.querySelector('#'+ id)._tag;	
			tag.on(event, callback)
		}
	}	
}

// Global mount, no need to add in code
riot.mount('*');