!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t,n){"use strict";(function(e){var n;function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}
/*!
 * jQuery JavaScript Library v2.2.4
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-05-20T17:23Z
 */
/*!
 * jQuery JavaScript Library v2.2.4
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-05-20T17:23Z
 */
!function(t,n){"object"===r(e)&&"object"===r(e.exports)?e.exports=t.document?n(t,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return n(e)}:n(t)}("undefined"!=typeof window?window:void 0,function(i,o){var a=[],s=i.document,u=a.slice,l=a.concat,c=a.push,d=a.indexOf,f={},p=f.toString,h=f.hasOwnProperty,v={},m=function e(t,n){return new e.fn.init(t,n)},g=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,y=/^-ms-/,b=/-([\da-z])/gi,x=function(e,t){return t.toUpperCase()};function w(e){var t=!!e&&"length"in e&&e.length,n=m.type(e);return"function"!==n&&!m.isWindow(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}m.fn=m.prototype={jquery:"2.2.4",constructor:m,selector:"",length:0,toArray:function(){return u.call(this)},get:function(e){return null!=e?e<0?this[e+this.length]:this[e]:u.call(this)},pushStack:function(e){var t=m.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e){return m.each(this,e)},map:function(e){return this.pushStack(m.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(u.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:c,sort:a.sort,splice:a.splice},m.extend=m.fn.extend=function(){var e,t,n,i,o,a,s=arguments[0]||{},u=1,l=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[u]||{},u++),"object"===r(s)||m.isFunction(s)||(s={}),u===l&&(s=this,u--);u<l;u++)if(null!=(e=arguments[u]))for(t in e)n=s[t],s!==(i=e[t])&&(c&&i&&(m.isPlainObject(i)||(o=m.isArray(i)))?(o?(o=!1,a=n&&m.isArray(n)?n:[]):a=n&&m.isPlainObject(n)?n:{},s[t]=m.extend(c,a,i)):void 0!==i&&(s[t]=i));return s},m.extend({expando:"jQuery"+("2.2.4"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isFunction:function(e){return"function"===m.type(e)},isArray:Array.isArray,isWindow:function(e){return null!=e&&e===e.window},isNumeric:function(e){var t=e&&e.toString();return!m.isArray(e)&&t-parseFloat(t)+1>=0},isPlainObject:function(e){var t;if("object"!==m.type(e)||e.nodeType||m.isWindow(e))return!1;if(e.constructor&&!h.call(e,"constructor")&&!h.call(e.constructor.prototype||{},"isPrototypeOf"))return!1;for(t in e);return void 0===t||h.call(e,t)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},type:function(e){return null==e?e+"":"object"===r(e)||"function"==typeof e?f[p.call(e)]||"object":r(e)},globalEval:function(e){var t,n=eval;(e=m.trim(e))&&(1===e.indexOf("use strict")?((t=s.createElement("script")).text=e,s.head.appendChild(t).parentNode.removeChild(t)):n(e))},camelCase:function(e){return e.replace(y,"ms-").replace(b,x)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t){var n,r=0;if(w(e))for(n=e.length;r<n&&!1!==t.call(e[r],r,e[r]);r++);else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(g,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(w(Object(e))?m.merge(n,"string"==typeof e?[e]:e):c.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:d.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(w(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return l.apply([],a)},guid:1,proxy:function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m.isFunction(e))return r=u.call(arguments,2),i=function(){return e.apply(t||this,r.concat(u.call(arguments)))},i.guid=e.guid=e.guid||m.guid++,i},now:Date.now,support:v}),"function"==typeof Symbol&&(m.fn[Symbol.iterator]=a[Symbol.iterator]),m.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){f["[object "+t+"]"]=t.toLowerCase()});var T=
/*!
   * Sizzle CSS Selector Engine v2.2.1
   * http://sizzlejs.com/
   *
   * Copyright jQuery Foundation and other contributors
   * Released under the MIT license
   * http://jquery.org/license
   *
   * Date: 2015-10-17
   */
function(e){var t,n,r,i,o,a,s,u,l,c,d,f,p,h,v,m,g,y,b,x="sizzle"+1*new Date,w=e.document,T=0,C=0,k=oe(),S=oe(),j=oe(),_=function(e,t){return e===t&&(d=!0),0},E=1<<31,N={}.hasOwnProperty,A=[],D=A.pop,q=A.push,L=A.push,P=A.slice,O=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},H="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",F="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",W="\\["+M+"*("+F+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+F+"))|)"+M+"*\\]",R=":("+F+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",I=new RegExp(M+"+","g"),$=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),B=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),X=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),U=new RegExp(R),V=new RegExp("^"+F+"$"),G={ID:new RegExp("^#("+F+")"),CLASS:new RegExp("^\\.("+F+")"),TAG:new RegExp("^("+F+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+R),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+H+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Q=/^h\d$/i,J=/^[^{]+\{\s*\[native \w/,K=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Z=/[+~]/,ee=/'|\\/g,te=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ne=function(e,t,n){var r="0x"+t-65536;return r!=r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},re=function(){f()};try{L.apply(A=P.call(w.childNodes),w.childNodes),A[w.childNodes.length].nodeType}catch(e){L={apply:A.length?function(e,t){q.apply(e,P.call(t))}:function(e,t){for(var n=e.length,r=0;e[n++]=t[r++];);e.length=n-1}}}function ie(e,t,r,i){var o,s,l,c,d,h,g,y,T=t&&t.ownerDocument,C=t?t.nodeType:9;if(r=r||[],"string"!=typeof e||!e||1!==C&&9!==C&&11!==C)return r;if(!i&&((t?t.ownerDocument||t:w)!==p&&f(t),t=t||p,v)){if(11!==C&&(h=K.exec(e)))if(o=h[1]){if(9===C){if(!(l=t.getElementById(o)))return r;if(l.id===o)return r.push(l),r}else if(T&&(l=T.getElementById(o))&&b(t,l)&&l.id===o)return r.push(l),r}else{if(h[2])return L.apply(r,t.getElementsByTagName(e)),r;if((o=h[3])&&n.getElementsByClassName&&t.getElementsByClassName)return L.apply(r,t.getElementsByClassName(o)),r}if(n.qsa&&!j[e+" "]&&(!m||!m.test(e))){if(1!==C)T=t,y=e;else if("object"!==t.nodeName.toLowerCase()){for((c=t.getAttribute("id"))?c=c.replace(ee,"\\$&"):t.setAttribute("id",c=x),s=(g=a(e)).length,d=V.test(c)?"#"+c:"[id='"+c+"']";s--;)g[s]=d+" "+ve(g[s]);y=g.join(","),T=Z.test(e)&&pe(t.parentNode)||t}if(y)try{return L.apply(r,T.querySelectorAll(y)),r}catch(e){}finally{c===x&&t.removeAttribute("id")}}}return u(e.replace($,"$1"),t,r,i)}function oe(){var e=[];return function t(n,i){return e.push(n+" ")>r.cacheLength&&delete t[e.shift()],t[n+" "]=i}}function ae(e){return e[x]=!0,e}function se(e){var t=p.createElement("div");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function ue(e,t){for(var n=e.split("|"),i=n.length;i--;)r.attrHandle[n[i]]=t}function le(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||E)-(~e.sourceIndex||E);if(r)return r;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function ce(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function de(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function fe(e){return ae(function(t){return t=+t,ae(function(n,r){for(var i,o=e([],n.length,t),a=o.length;a--;)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function pe(e){return e&&void 0!==e.getElementsByTagName&&e}for(t in n=ie.support={},o=ie.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},f=ie.setDocument=function(e){var t,i,a=e?e.ownerDocument||e:w;return a!==p&&9===a.nodeType&&a.documentElement?(h=(p=a).documentElement,v=!o(p),(i=p.defaultView)&&i.top!==i&&(i.addEventListener?i.addEventListener("unload",re,!1):i.attachEvent&&i.attachEvent("onunload",re)),n.attributes=se(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=se(function(e){return e.appendChild(p.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=J.test(p.getElementsByClassName),n.getById=se(function(e){return h.appendChild(e).id=x,!p.getElementsByName||!p.getElementsByName(x).length}),n.getById?(r.find.ID=function(e,t){if(void 0!==t.getElementById&&v){var n=t.getElementById(e);return n?[n]:[]}},r.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}}):(delete r.find.ID,r.filter.ID=function(e){var t=e.replace(te,ne);return function(e){var n=void 0!==e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}}),r.find.TAG=n.getElementsByTagName?function(e,t){return void 0!==t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){for(;n=o[i++];)1===n.nodeType&&r.push(n);return r}return o},r.find.CLASS=n.getElementsByClassName&&function(e,t){if(void 0!==t.getElementsByClassName&&v)return t.getElementsByClassName(e)},g=[],m=[],(n.qsa=J.test(p.querySelectorAll))&&(se(function(e){h.appendChild(e).innerHTML="<a id='"+x+"'></a><select id='"+x+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&m.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||m.push("\\["+M+"*(?:value|"+H+")"),e.querySelectorAll("[id~="+x+"-]").length||m.push("~="),e.querySelectorAll(":checked").length||m.push(":checked"),e.querySelectorAll("a#"+x+"+*").length||m.push(".#.+[+~]")}),se(function(e){var t=p.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&m.push("name"+M+"*[*^$|!~]?="),e.querySelectorAll(":enabled").length||m.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),m.push(",.*:")})),(n.matchesSelector=J.test(y=h.matches||h.webkitMatchesSelector||h.mozMatchesSelector||h.oMatchesSelector||h.msMatchesSelector))&&se(function(e){n.disconnectedMatch=y.call(e,"div"),y.call(e,"[s!='']:x"),g.push("!=",R)}),m=m.length&&new RegExp(m.join("|")),g=g.length&&new RegExp(g.join("|")),t=J.test(h.compareDocumentPosition),b=t||J.test(h.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},_=t?function(e,t){if(e===t)return d=!0,0;var r=!e.compareDocumentPosition-!t.compareDocumentPosition;return r||(1&(r=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!n.sortDetached&&t.compareDocumentPosition(e)===r?e===p||e.ownerDocument===w&&b(w,e)?-1:t===p||t.ownerDocument===w&&b(w,t)?1:c?O(c,e)-O(c,t):0:4&r?-1:1)}:function(e,t){if(e===t)return d=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===p?-1:t===p?1:i?-1:o?1:c?O(c,e)-O(c,t):0;if(i===o)return le(e,t);for(n=e;n=n.parentNode;)a.unshift(n);for(n=t;n=n.parentNode;)s.unshift(n);for(;a[r]===s[r];)r++;return r?le(a[r],s[r]):a[r]===w?-1:s[r]===w?1:0},p):p},ie.matches=function(e,t){return ie(e,null,null,t)},ie.matchesSelector=function(e,t){if((e.ownerDocument||e)!==p&&f(e),t=t.replace(X,"='$1']"),n.matchesSelector&&v&&!j[t+" "]&&(!g||!g.test(t))&&(!m||!m.test(t)))try{var r=y.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){}return ie(t,p,null,[e]).length>0},ie.contains=function(e,t){return(e.ownerDocument||e)!==p&&f(e),b(e,t)},ie.attr=function(e,t){(e.ownerDocument||e)!==p&&f(e);var i=r.attrHandle[t.toLowerCase()],o=i&&N.call(r.attrHandle,t.toLowerCase())?i(e,t,!v):void 0;return void 0!==o?o:n.attributes||!v?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null},ie.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},ie.uniqueSort=function(e){var t,r=[],i=0,o=0;if(d=!n.detectDuplicates,c=!n.sortStable&&e.slice(0),e.sort(_),d){for(;t=e[o++];)t===e[o]&&(i=r.push(o));for(;i--;)e.splice(r[i],1)}return c=null,e},i=ie.getText=function(e){var t,n="",r=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=i(e)}else if(3===o||4===o)return e.nodeValue}else for(;t=e[r++];)n+=i(t);return n},(r=ie.selectors={cacheLength:50,createPseudo:ae,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||ie.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&ie.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&U.test(n)&&(t=a(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=k[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&k(e,function(e){return t.test("string"==typeof e.className&&e.className||void 0!==e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=ie.attr(r,e);return null==i?"!="===t:!t||(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i.replace(I," ")+" ").indexOf(n)>-1:"|="===t&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,d,f,p,h,v=o!==a?"nextSibling":"previousSibling",m=t.parentNode,g=s&&t.nodeName.toLowerCase(),y=!u&&!s,b=!1;if(m){if(o){for(;v;){for(f=t;f=f[v];)if(s?f.nodeName.toLowerCase()===g:1===f.nodeType)return!1;h=v="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&y){for(b=(p=(l=(c=(d=(f=m)[x]||(f[x]={}))[f.uniqueID]||(d[f.uniqueID]={}))[e]||[])[0]===T&&l[1])&&l[2],f=p&&m.childNodes[p];f=++p&&f&&f[v]||(b=p=0)||h.pop();)if(1===f.nodeType&&++b&&f===t){c[e]=[T,p,b];break}}else if(y&&(b=p=(l=(c=(d=(f=t)[x]||(f[x]={}))[f.uniqueID]||(d[f.uniqueID]={}))[e]||[])[0]===T&&l[1]),!1===b)for(;(f=++p&&f&&f[v]||(b=p=0)||h.pop())&&((s?f.nodeName.toLowerCase()!==g:1!==f.nodeType)||!++b||(y&&((c=(d=f[x]||(f[x]={}))[f.uniqueID]||(d[f.uniqueID]={}))[e]=[T,b]),f!==t)););return(b-=i)===r||b%r==0&&b/r>=0}}},PSEUDO:function(e,t){var n,i=r.pseudos[e]||r.setFilters[e.toLowerCase()]||ie.error("unsupported pseudo: "+e);return i[x]?i(t):i.length>1?(n=[e,e,"",t],r.setFilters.hasOwnProperty(e.toLowerCase())?ae(function(e,n){for(var r,o=i(e,t),a=o.length;a--;)e[r=O(e,o[a])]=!(n[r]=o[a])}):function(e){return i(e,0,n)}):i}},pseudos:{not:ae(function(e){var t=[],n=[],r=s(e.replace($,"$1"));return r[x]?ae(function(e,t,n,i){for(var o,a=r(e,null,i,[]),s=e.length;s--;)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),t[0]=null,!n.pop()}}),has:ae(function(e){return function(t){return ie(e,t).length>0}}),contains:ae(function(e){return e=e.replace(te,ne),function(t){return(t.textContent||t.innerText||i(t)).indexOf(e)>-1}}),lang:ae(function(e){return V.test(e||"")||ie.error("unsupported lang: "+e),e=e.replace(te,ne).toLowerCase(),function(t){var n;do{if(n=v?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===h},focus:function(e){return e===p.activeElement&&(!p.hasFocus||p.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return!1===e.disabled},disabled:function(e){return!0===e.disabled},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!r.pseudos.empty(e)},header:function(e){return Q.test(e.nodeName)},input:function(e){return Y.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:fe(function(){return[0]}),last:fe(function(e,t){return[t-1]}),eq:fe(function(e,t,n){return[n<0?n+t:n]}),even:fe(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:fe(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:fe(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:fe(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=r.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[t]=ce(t);for(t in{submit:!0,reset:!0})r.pseudos[t]=de(t);function he(){}function ve(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function me(e,t,n){var r=t.dir,i=n&&"parentNode"===r,o=C++;return t.first?function(t,n,o){for(;t=t[r];)if(1===t.nodeType||i)return e(t,n,o)}:function(t,n,a){var s,u,l,c=[T,o];if(a){for(;t=t[r];)if((1===t.nodeType||i)&&e(t,n,a))return!0}else for(;t=t[r];)if(1===t.nodeType||i){if((s=(u=(l=t[x]||(t[x]={}))[t.uniqueID]||(l[t.uniqueID]={}))[r])&&s[0]===T&&s[1]===o)return c[2]=s[2];if(u[r]=c,c[2]=e(t,n,a))return!0}}}function ge(e){return e.length>1?function(t,n,r){for(var i=e.length;i--;)if(!e[i](t,n,r))return!1;return!0}:e[0]}function ye(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function be(e,t,n,r,i,o){return r&&!r[x]&&(r=be(r)),i&&!i[x]&&(i=be(i,o)),ae(function(o,a,s,u){var l,c,d,f=[],p=[],h=a.length,v=o||function(e,t,n){for(var r=0,i=t.length;r<i;r++)ie(e,t[r],n);return n}(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?v:ye(v,f,e,s,u),g=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,g,s,u),r)for(l=ye(g,p),r(l,[],s,u),c=l.length;c--;)(d=l[c])&&(g[p[c]]=!(m[p[c]]=d));if(o){if(i||e){if(i){for(l=[],c=g.length;c--;)(d=g[c])&&l.push(m[c]=d);i(null,g=[],l,u)}for(c=g.length;c--;)(d=g[c])&&(l=i?O(o,d):f[c])>-1&&(o[l]=!(a[l]=d))}}else g=ye(g===a?g.splice(h,g.length):g),i?i(null,a,g,u):L.apply(a,g)})}function xe(e){for(var t,n,i,o=e.length,a=r.relative[e[0].type],s=a||r.relative[" "],u=a?1:0,c=me(function(e){return e===t},s,!0),d=me(function(e){return O(t,e)>-1},s,!0),f=[function(e,n,r){var i=!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):d(e,n,r));return t=null,i}];u<o;u++)if(n=r.relative[e[u].type])f=[me(ge(f),n)];else{if((n=r.filter[e[u].type].apply(null,e[u].matches))[x]){for(i=++u;i<o&&!r.relative[e[i].type];i++);return be(u>1&&ge(f),u>1&&ve(e.slice(0,u-1).concat({value:" "===e[u-2].type?"*":""})).replace($,"$1"),n,u<i&&xe(e.slice(u,i)),i<o&&xe(e=e.slice(i)),i<o&&ve(e))}f.push(n)}return ge(f)}return he.prototype=r.filters=r.pseudos,r.setFilters=new he,a=ie.tokenize=function(e,t){var n,i,o,a,s,u,l,c=S[e+" "];if(c)return t?0:c.slice(0);for(s=e,u=[],l=r.preFilter;s;){for(a in n&&!(i=B.exec(s))||(i&&(s=s.slice(i[0].length)||s),u.push(o=[])),n=!1,(i=z.exec(s))&&(n=i.shift(),o.push({value:n,type:i[0].replace($," ")}),s=s.slice(n.length)),r.filter)!(i=G[a].exec(s))||l[a]&&!(i=l[a](i))||(n=i.shift(),o.push({value:n,type:a,matches:i}),s=s.slice(n.length));if(!n)break}return t?s.length:s?ie.error(e):S(e,u).slice(0)},s=ie.compile=function(e,t){var n,i=[],o=[],s=j[e+" "];if(!s){for(t||(t=a(e)),n=t.length;n--;)(s=xe(t[n]))[x]?i.push(s):o.push(s);(s=j(e,function(e,t){var n=t.length>0,i=e.length>0,o=function(o,a,s,u,c){var d,h,m,g=0,y="0",b=o&&[],x=[],w=l,C=o||i&&r.find.TAG("*",c),k=T+=null==w?1:Math.random()||.1,S=C.length;for(c&&(l=a===p||a||c);y!==S&&null!=(d=C[y]);y++){if(i&&d){for(h=0,a||d.ownerDocument===p||(f(d),s=!v);m=e[h++];)if(m(d,a||p,s)){u.push(d);break}c&&(T=k)}n&&((d=!m&&d)&&g--,o&&b.push(d))}if(g+=y,n&&y!==g){for(h=0;m=t[h++];)m(b,x,a,s);if(o){if(g>0)for(;y--;)b[y]||x[y]||(x[y]=D.call(u));x=ye(x)}L.apply(u,x),c&&!o&&x.length>0&&g+t.length>1&&ie.uniqueSort(u)}return c&&(T=k,l=w),b};return n?ae(o):o}(o,i))).selector=e}return s},u=ie.select=function(e,t,i,o){var u,l,c,d,f,p="function"==typeof e&&e,h=!o&&a(e=p.selector||e);if(i=i||[],1===h.length){if((l=h[0]=h[0].slice(0)).length>2&&"ID"===(c=l[0]).type&&n.getById&&9===t.nodeType&&v&&r.relative[l[1].type]){if(!(t=(r.find.ID(c.matches[0].replace(te,ne),t)||[])[0]))return i;p&&(t=t.parentNode),e=e.slice(l.shift().value.length)}for(u=G.needsContext.test(e)?0:l.length;u--&&(c=l[u],!r.relative[d=c.type]);)if((f=r.find[d])&&(o=f(c.matches[0].replace(te,ne),Z.test(l[0].type)&&pe(t.parentNode)||t))){if(l.splice(u,1),!(e=o.length&&ve(l)))return L.apply(i,o),i;break}}return(p||s(e,h))(o,t,!v,i,!t||Z.test(e)&&pe(t.parentNode)||t),i},n.sortStable=x.split("").sort(_).join("")===x,n.detectDuplicates=!!d,f(),n.sortDetached=se(function(e){return 1&e.compareDocumentPosition(p.createElement("div"))}),se(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||ue("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&se(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||ue("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),se(function(e){return null==e.getAttribute("disabled")})||ue(H,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),ie}(i);m.find=T,m.expr=T.selectors,m.expr[":"]=m.expr.pseudos,m.uniqueSort=m.unique=T.uniqueSort,m.text=T.getText,m.isXMLDoc=T.isXML,m.contains=T.contains;var C=function(e,t,n){for(var r=[],i=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(i&&m(e).is(n))break;r.push(e)}return r},k=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},S=m.expr.match.needsContext,j=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,_=/^.[^:#\[\.,]*$/;function E(e,t,n){if(m.isFunction(t))return m.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return m.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(_.test(t))return m.filter(t,e,n);t=m.filter(t,e)}return m.grep(e,function(e){return d.call(t,e)>-1!==n})}m.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?m.find.matchesSelector(r,e)?[r]:[]:m.find.matches(e,m.grep(t,function(e){return 1===e.nodeType}))},m.fn.extend({find:function(e){var t,n=this.length,r=[],i=this;if("string"!=typeof e)return this.pushStack(m(e).filter(function(){for(t=0;t<n;t++)if(m.contains(i[t],this))return!0}));for(t=0;t<n;t++)m.find(e,i[t],r);return(r=this.pushStack(n>1?m.unique(r):r)).selector=this.selector?this.selector+" "+e:e,r},filter:function(e){return this.pushStack(E(this,e||[],!1))},not:function(e){return this.pushStack(E(this,e||[],!0))},is:function(e){return!!E(this,"string"==typeof e&&S.test(e)?m(e):e||[],!1).length}});var N,A=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;(m.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||N,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:A.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof m?t[0]:t,m.merge(this,m.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:s,!0)),j.test(r[1])&&m.isPlainObject(t))for(r in t)m.isFunction(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=s.getElementById(r[2]))&&i.parentNode&&(this.length=1,this[0]=i),this.context=s,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):m.isFunction(e)?void 0!==n.ready?n.ready(e):e(m):(void 0!==e.selector&&(this.selector=e.selector,this.context=e.context),m.makeArray(e,this))}).prototype=m.fn,N=m(s);var D=/^(?:parents|prev(?:Until|All))/,q={children:!0,contents:!0,next:!0,prev:!0};function L(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}m.fn.extend({has:function(e){var t=m(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(m.contains(this,t[e]))return!0})},closest:function(e,t){for(var n,r=0,i=this.length,o=[],a=S.test(e)||"string"!=typeof e?m(e,t||this.context):0;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&m.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?m.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?d.call(m(e),this[0]):d.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(m.uniqueSort(m.merge(this.get(),m(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),m.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return C(e,"parentNode")},parentsUntil:function(e,t,n){return C(e,"parentNode",n)},next:function(e){return L(e,"nextSibling")},prev:function(e){return L(e,"previousSibling")},nextAll:function(e){return C(e,"nextSibling")},prevAll:function(e){return C(e,"previousSibling")},nextUntil:function(e,t,n){return C(e,"nextSibling",n)},prevUntil:function(e,t,n){return C(e,"previousSibling",n)},siblings:function(e){return k((e.parentNode||{}).firstChild,e)},children:function(e){return k(e.firstChild)},contents:function(e){return e.contentDocument||m.merge([],e.childNodes)}},function(e,t){m.fn[e]=function(n,r){var i=m.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=m.filter(r,i)),this.length>1&&(q[e]||m.uniqueSort(i),D.test(e)&&i.reverse()),this.pushStack(i)}});var P,O=/\S+/g;function H(){s.removeEventListener("DOMContentLoaded",H),i.removeEventListener("load",H),m.ready()}m.Callbacks=function(e){e="string"==typeof e?function(e){var t={};return m.each(e.match(O)||[],function(e,n){t[n]=!0}),t}(e):m.extend({},e);var t,n,r,i,o=[],a=[],s=-1,u=function(){for(i=e.once,r=t=!0;a.length;s=-1)for(n=a.shift();++s<o.length;)!1===o[s].apply(n[0],n[1])&&e.stopOnFalse&&(s=o.length,n=!1);e.memory||(n=!1),t=!1,i&&(o=n?[]:"")},l={add:function(){return o&&(n&&!t&&(s=o.length-1,a.push(n)),function t(n){m.each(n,function(n,r){m.isFunction(r)?e.unique&&l.has(r)||o.push(r):r&&r.length&&"string"!==m.type(r)&&t(r)})}(arguments),n&&!t&&u()),this},remove:function(){return m.each(arguments,function(e,t){for(var n;(n=m.inArray(t,o,n))>-1;)o.splice(n,1),n<=s&&s--}),this},has:function(e){return e?m.inArray(e,o)>-1:o.length>0},empty:function(){return o&&(o=[]),this},disable:function(){return i=a=[],o=n="",this},disabled:function(){return!o},lock:function(){return i=a=[],n||(o=n=""),this},locked:function(){return!!i},fireWith:function(e,n){return i||(n=[e,(n=n||[]).slice?n.slice():n],a.push(n),t||u()),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!r}};return l},m.extend({Deferred:function(e){var t=[["resolve","done",m.Callbacks("once memory"),"resolved"],["reject","fail",m.Callbacks("once memory"),"rejected"],["notify","progress",m.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return m.Deferred(function(n){m.each(t,function(t,o){var a=m.isFunction(e[t])&&e[t];i[o[1]](function(){var e=a&&a.apply(this,arguments);e&&m.isFunction(e.promise)?e.promise().progress(n.notify).done(n.resolve).fail(n.reject):n[o[0]+"With"](this===r?n.promise():this,a?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?m.extend(e,r):r}},i={};return r.pipe=r.then,m.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t,n,r,i=0,o=u.call(arguments),a=o.length,s=1!==a||e&&m.isFunction(e.promise)?a:0,l=1===s?e:m.Deferred(),c=function(e,n,r){return function(i){n[e]=this,r[e]=arguments.length>1?u.call(arguments):i,r===t?l.notifyWith(n,r):--s||l.resolveWith(n,r)}};if(a>1)for(t=new Array(a),n=new Array(a),r=new Array(a);i<a;i++)o[i]&&m.isFunction(o[i].promise)?o[i].promise().progress(c(i,n,t)).done(c(i,r,o)).fail(l.reject):--s;return s||l.resolveWith(r,o),l.promise()}}),m.fn.ready=function(e){return m.ready.promise().done(e),this},m.extend({isReady:!1,readyWait:1,holdReady:function(e){e?m.readyWait++:m.ready(!0)},ready:function(e){(!0===e?--m.readyWait:m.isReady)||(m.isReady=!0,!0!==e&&--m.readyWait>0||(P.resolveWith(s,[m]),m.fn.triggerHandler&&(m(s).triggerHandler("ready"),m(s).off("ready"))))}}),m.ready.promise=function(e){return P||(P=m.Deferred(),"complete"===s.readyState||"loading"!==s.readyState&&!s.documentElement.doScroll?i.setTimeout(m.ready):(s.addEventListener("DOMContentLoaded",H),i.addEventListener("load",H))),P.promise(e)},m.ready.promise();var M=function e(t,n,r,i,o,a,s){var u=0,l=t.length,c=null==r;if("object"===m.type(r))for(u in o=!0,r)e(t,n,u,r[u],!0,a,s);else if(void 0!==i&&(o=!0,m.isFunction(i)||(s=!0),c&&(s?(n.call(t,i),n=null):(c=n,n=function(e,t,n){return c.call(m(e),n)})),n))for(;u<l;u++)n(t[u],r,s?i:i.call(t[u],u,n(t[u],r)));return o?t:c?n.call(t):l?n(t[0],r):a},F=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function W(){this.expando=m.expando+W.uid++}W.uid=1,W.prototype={register:function(e,t){var n=t||{};return e.nodeType?e[this.expando]=n:Object.defineProperty(e,this.expando,{value:n,writable:!0,configurable:!0}),e[this.expando]},cache:function(e){if(!F(e))return{};var t=e[this.expando];return t||(t={},F(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[t]=n;else for(r in t)i[r]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][t]},access:function(e,t,n){var r;return void 0===t||t&&"string"==typeof t&&void 0===n?void 0!==(r=this.get(e,t))?r:this.get(e,m.camelCase(t)):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r,i,o=e[this.expando];if(void 0!==o){if(void 0===t)this.register(e);else{m.isArray(t)?r=t.concat(t.map(m.camelCase)):(i=m.camelCase(t),r=t in o?[t,i]:(r=i)in o?[r]:r.match(O)||[]),n=r.length;for(;n--;)delete o[r[n]]}(void 0===t||m.isEmptyObject(o))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!m.isEmptyObject(t)}};var R=new W,I=new W,$=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,B=/[A-Z]/g;function z(e,t,n){var r;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(B,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===n||"false"!==n&&("null"===n?null:+n+""===n?+n:$.test(n)?m.parseJSON(n):n)}catch(e){}I.set(e,t,n)}else n=void 0;return n}m.extend({hasData:function(e){return I.hasData(e)||R.hasData(e)},data:function(e,t,n){return I.access(e,t,n)},removeData:function(e,t){I.remove(e,t)},_data:function(e,t,n){return R.access(e,t,n)},_removeData:function(e,t){R.remove(e,t)}}),m.fn.extend({data:function(e,t){var n,i,o,a=this[0],s=a&&a.attributes;if(void 0===e){if(this.length&&(o=I.get(a),1===a.nodeType&&!R.get(a,"hasDataAttrs"))){for(n=s.length;n--;)s[n]&&0===(i=s[n].name).indexOf("data-")&&(i=m.camelCase(i.slice(5)),z(a,i,o[i]));R.set(a,"hasDataAttrs",!0)}return o}return"object"===r(e)?this.each(function(){I.set(this,e)}):M(this,function(t){var n,r;if(a&&void 0===t)return void 0!==(n=I.get(a,e)||I.get(a,e.replace(B,"-$&").toLowerCase()))?n:(r=m.camelCase(e),void 0!==(n=I.get(a,r))?n:void 0!==(n=z(a,r,void 0))?n:void 0);r=m.camelCase(e),this.each(function(){var n=I.get(this,r);I.set(this,r,t),e.indexOf("-")>-1&&void 0!==n&&I.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){I.remove(this,e)})}}),m.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=R.get(e,t),n&&(!r||m.isArray(n)?r=R.access(e,t,m.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=m.queue(e,t),r=n.length,i=n.shift(),o=m._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){m.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return R.get(e,n)||R.access(e,n,{empty:m.Callbacks("once memory").add(function(){R.remove(e,[t+"queue",n])})})}}),m.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?m.queue(this[0],e):void 0===t?this:this.each(function(){var n=m.queue(this,e,t);m._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&m.dequeue(this,e)})},dequeue:function(e){return this.each(function(){m.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=m.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";a--;)(n=R.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var X=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,U=new RegExp("^(?:([+-])=|)("+X+")([a-z%]*)$","i"),V=["Top","Right","Bottom","Left"],G=function(e,t){return e=t||e,"none"===m.css(e,"display")||!m.contains(e.ownerDocument,e)};function Y(e,t,n,r){var i,o=1,a=20,s=r?function(){return r.cur()}:function(){return m.css(e,t,"")},u=s(),l=n&&n[3]||(m.cssNumber[t]?"":"px"),c=(m.cssNumber[t]||"px"!==l&&+u)&&U.exec(m.css(e,t));if(c&&c[3]!==l){l=l||c[3],n=n||[],c=+u||1;do{c/=o=o||".5",m.style(e,t,c+l)}while(o!==(o=s()/u)&&1!==o&&--a)}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var Q=/^(?:checkbox|radio)$/i,J=/<([\w:-]+)/,K=/^$|\/(?:java|ecma)script/i,Z={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ee(e,t){var n=void 0!==e.getElementsByTagName?e.getElementsByTagName(t||"*"):void 0!==e.querySelectorAll?e.querySelectorAll(t||"*"):[];return void 0===t||t&&m.nodeName(e,t)?m.merge([e],n):n}function te(e,t){for(var n=0,r=e.length;n<r;n++)R.set(e[n],"globalEval",!t||R.get(t[n],"globalEval"))}Z.optgroup=Z.option,Z.tbody=Z.tfoot=Z.colgroup=Z.caption=Z.thead,Z.th=Z.td;var ne=/<|&#?\w+;/;function re(e,t,n,r,i){for(var o,a,s,u,l,c,d=t.createDocumentFragment(),f=[],p=0,h=e.length;p<h;p++)if((o=e[p])||0===o)if("object"===m.type(o))m.merge(f,o.nodeType?[o]:o);else if(ne.test(o)){for(a=a||d.appendChild(t.createElement("div")),s=(J.exec(o)||["",""])[1].toLowerCase(),u=Z[s]||Z._default,a.innerHTML=u[1]+m.htmlPrefilter(o)+u[2],c=u[0];c--;)a=a.lastChild;m.merge(f,a.childNodes),(a=d.firstChild).textContent=""}else f.push(t.createTextNode(o));for(d.textContent="",p=0;o=f[p++];)if(r&&m.inArray(o,r)>-1)i&&i.push(o);else if(l=m.contains(o.ownerDocument,o),a=ee(d.appendChild(o),"script"),l&&te(a),n)for(c=0;o=a[c++];)K.test(o.type||"")&&n.push(o);return d}!function(){var e=s.createDocumentFragment().appendChild(s.createElement("div")),t=s.createElement("input");t.setAttribute("type","radio"),t.setAttribute("checked","checked"),t.setAttribute("name","t"),e.appendChild(t),v.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked,e.innerHTML="<textarea>x</textarea>",v.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue}();var ie=/^key/,oe=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ae=/^([^.]*)(?:\.(.+)|)/;function se(){return!0}function ue(){return!1}function le(){try{return s.activeElement}catch(e){}}function ce(e,t,n,i,o,a){var s,u;if("object"===r(t)){for(u in"string"!=typeof n&&(i=i||n,n=void 0),t)ce(e,u,n,i,t[u],a);return e}if(null==i&&null==o?(o=n,i=n=void 0):null==o&&("string"==typeof n?(o=i,i=void 0):(o=i,i=n,n=void 0)),!1===o)o=ue;else if(!o)return e;return 1===a&&(s=o,(o=function(e){return m().off(e),s.apply(this,arguments)}).guid=s.guid||(s.guid=m.guid++)),e.each(function(){m.event.add(this,t,o,i,n)})}m.event={global:{},add:function(e,t,n,r,i){var o,a,s,u,l,c,d,f,p,h,v,g=R.get(e);if(g)for(n.handler&&(n=(o=n).handler,i=o.selector),n.guid||(n.guid=m.guid++),(u=g.events)||(u=g.events={}),(a=g.handle)||(a=g.handle=function(t){return void 0!==m&&m.event.triggered!==t.type?m.event.dispatch.apply(e,arguments):void 0}),l=(t=(t||"").match(O)||[""]).length;l--;)p=v=(s=ae.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),p&&(d=m.event.special[p]||{},p=(i?d.delegateType:d.bindType)||p,d=m.event.special[p]||{},c=m.extend({type:p,origType:v,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&m.expr.match.needsContext.test(i),namespace:h.join(".")},o),(f=u[p])||((f=u[p]=[]).delegateCount=0,d.setup&&!1!==d.setup.call(e,r,h,a)||e.addEventListener&&e.addEventListener(p,a)),d.add&&(d.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),i?f.splice(f.delegateCount++,0,c):f.push(c),m.event.global[p]=!0)},remove:function(e,t,n,r,i){var o,a,s,u,l,c,d,f,p,h,v,g=R.hasData(e)&&R.get(e);if(g&&(u=g.events)){for(l=(t=(t||"").match(O)||[""]).length;l--;)if(p=v=(s=ae.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),p){for(d=m.event.special[p]||{},f=u[p=(r?d.delegateType:d.bindType)||p]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=f.length;o--;)c=f[o],!i&&v!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(f.splice(o,1),c.selector&&f.delegateCount--,d.remove&&d.remove.call(e,c));a&&!f.length&&(d.teardown&&!1!==d.teardown.call(e,h,g.handle)||m.removeEvent(e,p,g.handle),delete u[p])}else for(p in u)m.event.remove(e,p+t[l],n,r,!0);m.isEmptyObject(u)&&R.remove(e,"handle events")}},dispatch:function(e){e=m.event.fix(e);var t,n,r,i,o,a,s=u.call(arguments),l=(R.get(this,"events")||{})[e.type]||[],c=m.event.special[e.type]||{};if(s[0]=e,e.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,e)){for(a=m.event.handlers.call(this,e,l),t=0;(i=a[t++])&&!e.isPropagationStopped();)for(e.currentTarget=i.elem,n=0;(o=i.handlers[n++])&&!e.isImmediatePropagationStopped();)e.rnamespace&&!e.rnamespace.test(o.namespace)||(e.handleObj=o,e.data=o.data,void 0!==(r=((m.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(e.result=r)&&(e.preventDefault(),e.stopPropagation()));return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,t){var n,r,i,o,a=[],s=t.delegateCount,u=e.target;if(s&&u.nodeType&&("click"!==e.type||isNaN(e.button)||e.button<1))for(;u!==this;u=u.parentNode||this)if(1===u.nodeType&&(!0!==u.disabled||"click"!==e.type)){for(r=[],n=0;n<s;n++)void 0===r[i=(o=t[n]).selector+" "]&&(r[i]=o.needsContext?m(i,this).index(u)>-1:m.find(i,this,null,[u]).length),r[i]&&r.push(o);r.length&&a.push({elem:u,handlers:r})}return s<t.length&&a.push({elem:this,handlers:t.slice(s)}),a},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,r,i,o=t.button;return null==e.pageX&&null!=t.clientX&&(r=(n=e.target.ownerDocument||s).documentElement,i=n.body,e.pageX=t.clientX+(r&&r.scrollLeft||i&&i.scrollLeft||0)-(r&&r.clientLeft||i&&i.clientLeft||0),e.pageY=t.clientY+(r&&r.scrollTop||i&&i.scrollTop||0)-(r&&r.clientTop||i&&i.clientTop||0)),e.which||void 0===o||(e.which=1&o?1:2&o?3:4&o?2:0),e}},fix:function(e){if(e[m.expando])return e;var t,n,r,i=e.type,o=e,a=this.fixHooks[i];for(a||(this.fixHooks[i]=a=oe.test(i)?this.mouseHooks:ie.test(i)?this.keyHooks:{}),r=a.props?this.props.concat(a.props):this.props,e=new m.Event(o),t=r.length;t--;)e[n=r[t]]=o[n];return e.target||(e.target=s),3===e.target.nodeType&&(e.target=e.target.parentNode),a.filter?a.filter(e,o):e},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==le()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===le()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&m.nodeName(this,"input"))return this.click(),!1},_default:function(e){return m.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},m.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},m.Event=function(e,t){if(!(this instanceof m.Event))return new m.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?se:ue):this.type=e,t&&m.extend(this,t),this.timeStamp=e&&e.timeStamp||m.now(),this[m.expando]=!0},m.Event.prototype={constructor:m.Event,isDefaultPrevented:ue,isPropagationStopped:ue,isImmediatePropagationStopped:ue,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=se,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=se,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=se,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},m.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){m.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=e.relatedTarget,i=e.handleObj;return r&&(r===this||m.contains(this,r))||(e.type=i.origType,n=i.handler.apply(this,arguments),e.type=t),n}}}),m.fn.extend({on:function(e,t,n,r){return ce(this,e,t,n,r)},one:function(e,t,n,r){return ce(this,e,t,n,r,1)},off:function(e,t,n){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,m(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"===r(e)){for(o in e)this.off(o,t,e[o]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=ue),this.each(function(){m.event.remove(this,e,n,t)})}});var de=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,fe=/<script|<style|<link/i,pe=/checked\s*(?:[^=]|=\s*.checked.)/i,he=/^true\/(.*)/,ve=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function me(e,t){return m.nodeName(e,"table")&&m.nodeName(11!==t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function ge(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function ye(e){var t=he.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function be(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(R.hasData(e)&&(o=R.access(e),a=R.set(t,o),l=o.events))for(i in delete a.handle,a.events={},l)for(n=0,r=l[i].length;n<r;n++)m.event.add(t,i,l[i][n]);I.hasData(e)&&(s=I.access(e),u=m.extend({},s),I.set(t,u))}}function xe(e,t){var n=t.nodeName.toLowerCase();"input"===n&&Q.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function we(e,t,n,r){t=l.apply([],t);var i,o,a,s,u,c,d=0,f=e.length,p=f-1,h=t[0],g=m.isFunction(h);if(g||f>1&&"string"==typeof h&&!v.checkClone&&pe.test(h))return e.each(function(i){var o=e.eq(i);g&&(t[0]=h.call(this,i,o.html())),we(o,t,n,r)});if(f&&(o=(i=re(t,e[0].ownerDocument,!1,e,r)).firstChild,1===i.childNodes.length&&(i=o),o||r)){for(s=(a=m.map(ee(i,"script"),ge)).length;d<f;d++)u=i,d!==p&&(u=m.clone(u,!0,!0),s&&m.merge(a,ee(u,"script"))),n.call(e[d],u,d);if(s)for(c=a[a.length-1].ownerDocument,m.map(a,ye),d=0;d<s;d++)u=a[d],K.test(u.type||"")&&!R.access(u,"globalEval")&&m.contains(c,u)&&(u.src?m._evalUrl&&m._evalUrl(u.src):m.globalEval(u.textContent.replace(ve,"")))}return e}function Te(e,t,n){for(var r,i=t?m.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||m.cleanData(ee(r)),r.parentNode&&(n&&m.contains(r.ownerDocument,r)&&te(ee(r,"script")),r.parentNode.removeChild(r));return e}m.extend({htmlPrefilter:function(e){return e.replace(de,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s=e.cloneNode(!0),u=m.contains(e.ownerDocument,e);if(!(v.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||m.isXMLDoc(e)))for(a=ee(s),r=0,i=(o=ee(e)).length;r<i;r++)xe(o[r],a[r]);if(t)if(n)for(o=o||ee(e),a=a||ee(s),r=0,i=o.length;r<i;r++)be(o[r],a[r]);else be(e,s);return(a=ee(s,"script")).length>0&&te(a,!u&&ee(e,"script")),s},cleanData:function(e){for(var t,n,r,i=m.event.special,o=0;void 0!==(n=e[o]);o++)if(F(n)){if(t=n[R.expando]){if(t.events)for(r in t.events)i[r]?m.event.remove(n,r):m.removeEvent(n,r,t.handle);n[R.expando]=void 0}n[I.expando]&&(n[I.expando]=void 0)}}}),m.fn.extend({domManip:we,detach:function(e){return Te(this,e,!0)},remove:function(e){return Te(this,e)},text:function(e){return M(this,function(e){return void 0===e?m.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return we(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||me(this,e).appendChild(e)})},prepend:function(){return we(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=me(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return we(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return we(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(m.cleanData(ee(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return m.clone(this,e,t)})},html:function(e){return M(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!fe.test(e)&&!Z[(J.exec(e)||["",""])[1].toLowerCase()]){e=m.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(m.cleanData(ee(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return we(this,arguments,function(t){var n=this.parentNode;m.inArray(this,e)<0&&(m.cleanData(ee(this)),n&&n.replaceChild(t,this))},e)}}),m.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){m.fn[e]=function(e){for(var n,r=[],i=m(e),o=i.length-1,a=0;a<=o;a++)n=a===o?this:this.clone(!0),m(i[a])[t](n),c.apply(r,n.get());return this.pushStack(r)}});var Ce,ke={HTML:"block",BODY:"block"};function Se(e,t){var n=m(t.createElement(e)).appendTo(t.body),r=m.css(n[0],"display");return n.detach(),r}function je(e){var t=s,n=ke[e];return n||("none"!==(n=Se(e,t))&&n||((t=(Ce=(Ce||m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentDocument).write(),t.close(),n=Se(e,t),Ce.detach()),ke[e]=n),n}var _e=/^margin/,Ee=new RegExp("^("+X+")(?!px)[a-z%]+$","i"),Ne=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=i),t.getComputedStyle(e)},Ae=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];for(o in i=n.apply(e,r||[]),t)e.style[o]=a[o];return i},De=s.documentElement;function qe(e,t,n){var r,i,o,a,s=e.style;return""!==(a=(n=n||Ne(e))?n.getPropertyValue(t)||n[t]:void 0)&&void 0!==a||m.contains(e.ownerDocument,e)||(a=m.style(e,t)),n&&!v.pixelMarginRight()&&Ee.test(a)&&_e.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o),void 0!==a?a+"":a}function Le(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){var e,t,n,r,o=s.createElement("div"),a=s.createElement("div");function u(){a.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",a.innerHTML="",De.appendChild(o);var s=i.getComputedStyle(a);e="1%"!==s.top,r="2px"===s.marginLeft,t="4px"===s.width,a.style.marginRight="50%",n="4px"===s.marginRight,De.removeChild(o)}a.style&&(a.style.backgroundClip="content-box",a.cloneNode(!0).style.backgroundClip="",v.clearCloneStyle="content-box"===a.style.backgroundClip,o.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",o.appendChild(a),m.extend(v,{pixelPosition:function(){return u(),e},boxSizingReliable:function(){return null==t&&u(),t},pixelMarginRight:function(){return null==t&&u(),n},reliableMarginLeft:function(){return null==t&&u(),r},reliableMarginRight:function(){var e,t=a.appendChild(s.createElement("div"));return t.style.cssText=a.style.cssText="-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",t.style.marginRight=t.style.width="0",a.style.width="1px",De.appendChild(o),e=!parseFloat(i.getComputedStyle(t).marginRight),De.removeChild(o),a.removeChild(t),e}}))}();var Pe=/^(none|table(?!-c[ea]).+)/,Oe={position:"absolute",visibility:"hidden",display:"block"},He={letterSpacing:"0",fontWeight:"400"},Me=["Webkit","O","Moz","ms"],Fe=s.createElement("div").style;function We(e){if(e in Fe)return e;for(var t=e[0].toUpperCase()+e.slice(1),n=Me.length;n--;)if((e=Me[n]+t)in Fe)return e}function Re(e,t,n){var r=U.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ie(e,t,n,r,i){for(var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;o<4;o+=2)"margin"===n&&(a+=m.css(e,n+V[o],!0,i)),r?("content"===n&&(a-=m.css(e,"padding"+V[o],!0,i)),"margin"!==n&&(a-=m.css(e,"border"+V[o]+"Width",!0,i))):(a+=m.css(e,"padding"+V[o],!0,i),"padding"!==n&&(a+=m.css(e,"border"+V[o]+"Width",!0,i)));return a}function $e(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Ne(e),a="border-box"===m.css(e,"boxSizing",!1,o);if(i<=0||null==i){if(((i=qe(e,t,o))<0||null==i)&&(i=e.style[t]),Ee.test(i))return i;r=a&&(v.boxSizingReliable()||i===e.style[t]),i=parseFloat(i)||0}return i+Ie(e,t,n||(a?"border":"content"),r,o)+"px"}function Be(e,t){for(var n,r,i,o=[],a=0,s=e.length;a<s;a++)(r=e[a]).style&&(o[a]=R.get(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&G(r)&&(o[a]=R.access(r,"olddisplay",je(r.nodeName)))):(i=G(r),"none"===n&&i||R.set(r,"olddisplay",i?n:m.css(r,"display"))));for(a=0;a<s;a++)(r=e[a]).style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}function ze(e,t,n,r,i){return new ze.prototype.init(e,t,n,r,i)}m.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=qe(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{float:"cssFloat"},style:function(e,t,n,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,u=m.camelCase(t),l=e.style;if(t=m.cssProps[u]||(m.cssProps[u]=We(u)||u),s=m.cssHooks[t]||m.cssHooks[u],void 0===n)return s&&"get"in s&&void 0!==(o=s.get(e,!1,i))?o:l[t];"string"===(a=r(n))&&(o=U.exec(n))&&o[1]&&(n=Y(e,t,o),a="number"),null!=n&&n==n&&("number"===a&&(n+=o&&o[3]||(m.cssNumber[u]?"":"px")),v.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),s&&"set"in s&&void 0===(n=s.set(e,n,i))||(l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=m.camelCase(t);return t=m.cssProps[s]||(m.cssProps[s]=We(s)||s),(a=m.cssHooks[t]||m.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=qe(e,t,r)),"normal"===i&&t in He&&(i=He[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),m.each(["height","width"],function(e,t){m.cssHooks[t]={get:function(e,n,r){if(n)return Pe.test(m.css(e,"display"))&&0===e.offsetWidth?Ae(e,Oe,function(){return $e(e,t,r)}):$e(e,t,r)},set:function(e,n,r){var i,o=r&&Ne(e),a=r&&Ie(e,t,r,"border-box"===m.css(e,"boxSizing",!1,o),o);return a&&(i=U.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=m.css(e,t)),Re(0,n,a)}}}),m.cssHooks.marginLeft=Le(v.reliableMarginLeft,function(e,t){if(t)return(parseFloat(qe(e,"marginLeft"))||e.getBoundingClientRect().left-Ae(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),m.cssHooks.marginRight=Le(v.reliableMarginRight,function(e,t){if(t)return Ae(e,{display:"inline-block"},qe,[e,"marginRight"])}),m.each({margin:"",padding:"",border:"Width"},function(e,t){m.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+V[r]+t]=o[r]||o[r-2]||o[0];return i}},_e.test(e)||(m.cssHooks[e+t].set=Re)}),m.fn.extend({css:function(e,t){return M(this,function(e,t,n){var r,i,o={},a=0;if(m.isArray(t)){for(r=Ne(e),i=t.length;a<i;a++)o[t[a]]=m.css(e,t[a],!1,r);return o}return void 0!==n?m.style(e,t,n):m.css(e,t)},e,t,arguments.length>1)},show:function(){return Be(this,!0)},hide:function(){return Be(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){G(this)?m(this).show():m(this).hide()})}}),m.Tween=ze,ze.prototype={constructor:ze,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||m.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(m.cssNumber[n]?"":"px")},cur:function(){var e=ze.propHooks[this.prop];return e&&e.get?e.get(this):ze.propHooks._default.get(this)},run:function(e){var t,n=ze.propHooks[this.prop];return this.options.duration?this.pos=t=m.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):ze.propHooks._default.set(this),this}},ze.prototype.init.prototype=ze.prototype,ze.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=m.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){m.fx.step[e.prop]?m.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[m.cssProps[e.prop]]&&!m.cssHooks[e.prop]?e.elem[e.prop]=e.now:m.style(e.elem,e.prop,e.now+e.unit)}}},ze.propHooks.scrollTop=ze.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},m.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},m.fx=ze.prototype.init,m.fx.step={};var Xe,Ue,Ve=/^(?:toggle|show|hide)$/,Ge=/queueHooks$/;function Ye(){return i.setTimeout(function(){Xe=void 0}),Xe=m.now()}function Qe(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=V[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function Je(e,t,n){for(var r,i=(Ke.tweeners[t]||[]).concat(Ke.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function Ke(e,t,n){var r,i,o=0,a=Ke.prefilters.length,s=m.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var t=Xe||Ye(),n=Math.max(0,l.startTime+l.duration-t),r=1-(n/l.duration||0),o=0,a=l.tweens.length;o<a;o++)l.tweens[o].run(r);return s.notifyWith(e,[l,r,n]),r<1&&a?n:(s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:m.extend({},t),opts:m.extend(!0,{specialEasing:{},easing:m.easing._default},n),originalProperties:t,originalOptions:n,startTime:Xe||Ye(),duration:n.duration,tweens:[],createTween:function(t,n){var r=m.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)l.tweens[n].run(1);return t?(s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l,t])):s.rejectWith(e,[l,t]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=m.camelCase(n)],o=e[n],m.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=m.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);o<a;o++)if(r=Ke.prefilters[o].call(l,e,c,l.opts))return m.isFunction(r.stop)&&(m._queueHooks(l.elem,l.opts.queue).stop=m.proxy(r.stop,r)),r;return m.map(c,Je,l),m.isFunction(l.opts.start)&&l.opts.start.call(e,l),m.fx.timer(m.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}m.Animation=m.extend(Ke,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return Y(n.elem,e,U.exec(t),n),n}]},tweener:function(e,t){m.isFunction(e)?(t=e,e=["*"]):e=e.match(O);for(var n,r=0,i=e.length;r<i;r++)n=e[r],Ke.tweeners[n]=Ke.tweeners[n]||[],Ke.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c=this,d={},f=e.style,p=e.nodeType&&G(e),h=R.get(e,"fxshow");for(r in n.queue||(null==(s=m._queueHooks(e,"fx")).unqueued&&(s.unqueued=0,u=s.empty.fire,s.empty.fire=function(){s.unqueued||u()}),s.unqueued++,c.always(function(){c.always(function(){s.unqueued--,m.queue(e,"fx").length||s.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[f.overflow,f.overflowX,f.overflowY],"inline"===("none"===(l=m.css(e,"display"))?R.get(e,"olddisplay")||je(e.nodeName):l)&&"none"===m.css(e,"float")&&(f.display="inline-block")),n.overflow&&(f.overflow="hidden",c.always(function(){f.overflow=n.overflow[0],f.overflowX=n.overflow[1],f.overflowY=n.overflow[2]})),t)if(i=t[r],Ve.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(p?"hide":"show")){if("show"!==i||!h||void 0===h[r])continue;p=!0}d[r]=h&&h[r]||m.style(e,r)}else l=void 0;if(m.isEmptyObject(d))"inline"===("none"===l?je(e.nodeName):l)&&(f.display=l);else for(r in h?"hidden"in h&&(p=h.hidden):h=R.access(e,"fxshow",{}),o&&(h.hidden=!p),p?m(e).show():c.done(function(){m(e).hide()}),c.done(function(){var t;for(t in R.remove(e,"fxshow"),d)m.style(e,t,d[t])}),d)a=Je(p?h[r]:0,r,c),r in h||(h[r]=a.start,p&&(a.end=a.start,a.start="width"===r||"height"===r?1:0))}],prefilter:function(e,t){t?Ke.prefilters.unshift(e):Ke.prefilters.push(e)}}),m.speed=function(e,t,n){var i=e&&"object"===r(e)?m.extend({},e):{complete:n||!n&&t||m.isFunction(e)&&e,duration:e,easing:n&&t||t&&!m.isFunction(t)&&t};return i.duration=m.fx.off?0:"number"==typeof i.duration?i.duration:i.duration in m.fx.speeds?m.fx.speeds[i.duration]:m.fx.speeds._default,null!=i.queue&&!0!==i.queue||(i.queue="fx"),i.old=i.complete,i.complete=function(){m.isFunction(i.old)&&i.old.call(this),i.queue&&m.dequeue(this,i.queue)},i},m.fn.extend({fadeTo:function(e,t,n,r){return this.filter(G).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=m.isEmptyObject(e),o=m.speed(t,n,r),a=function(){var t=Ke(this,m.extend({},e),o);(i||R.get(this,"finish"))&&t.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=m.timers,a=R.get(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&Ge.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));!t&&n||m.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=R.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=m.timers,a=r?r.length:0;for(n.finish=!0,m.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;t<a;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),m.each(["toggle","show","hide"],function(e,t){var n=m.fn[t];m.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(Qe(t,!0),e,r,i)}}),m.each({slideDown:Qe("show"),slideUp:Qe("hide"),slideToggle:Qe("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){m.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),m.timers=[],m.fx.tick=function(){var e,t=0,n=m.timers;for(Xe=m.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||m.fx.stop(),Xe=void 0},m.fx.timer=function(e){m.timers.push(e),e()?m.fx.start():m.timers.pop()},m.fx.interval=13,m.fx.start=function(){Ue||(Ue=i.setInterval(m.fx.tick,m.fx.interval))},m.fx.stop=function(){i.clearInterval(Ue),Ue=null},m.fx.speeds={slow:600,fast:200,_default:400},m.fn.delay=function(e,t){return e=m.fx&&m.fx.speeds[e]||e,t=t||"fx",this.queue(t,function(t,n){var r=i.setTimeout(t,e);n.stop=function(){i.clearTimeout(r)}})},function(){var e=s.createElement("input"),t=s.createElement("select"),n=t.appendChild(s.createElement("option"));e.type="checkbox",v.checkOn=""!==e.value,v.optSelected=n.selected,t.disabled=!0,v.optDisabled=!n.disabled,(e=s.createElement("input")).value="t",e.type="radio",v.radioValue="t"===e.value}();var Ze,et=m.expr.attrHandle;m.fn.extend({attr:function(e,t){return M(this,m.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){m.removeAttr(this,e)})}}),m.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return void 0===e.getAttribute?m.prop(e,t,n):(1===o&&m.isXMLDoc(e)||(t=t.toLowerCase(),i=m.attrHooks[t]||(m.expr.match.bool.test(t)?Ze:void 0)),void 0!==n?null===n?void m.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=m.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!v.radioValue&&"radio"===t&&m.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(O);if(o&&1===e.nodeType)for(;n=o[i++];)r=m.propFix[n]||n,m.expr.match.bool.test(n)&&(e[r]=!1),e.removeAttribute(n)}}),Ze={set:function(e,t,n){return!1===t?m.removeAttr(e,n):e.setAttribute(n,n),n}},m.each(m.expr.match.bool.source.match(/\w+/g),function(e,t){var n=et[t]||m.find.attr;et[t]=function(e,t,r){var i,o;return r||(o=et[t],et[t]=i,i=null!=n(e,t,r)?t.toLowerCase():null,et[t]=o),i}});var tt=/^(?:input|select|textarea|button)$/i,nt=/^(?:a|area)$/i;m.fn.extend({prop:function(e,t){return M(this,m.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[m.propFix[e]||e]})}}),m.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&m.isXMLDoc(e)||(t=m.propFix[t]||t,i=m.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=m.find.attr(e,"tabindex");return t?parseInt(t,10):tt.test(e.nodeName)||nt.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),v.optSelected||(m.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),m.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){m.propFix[this.toLowerCase()]=this});var rt=/[\t\r\n\f]/g;function it(e){return e.getAttribute&&e.getAttribute("class")||""}m.fn.extend({addClass:function(e){var t,n,r,i,o,a,s,u=0;if(m.isFunction(e))return this.each(function(t){m(this).addClass(e.call(this,t,it(this)))});if("string"==typeof e&&e)for(t=e.match(O)||[];n=this[u++];)if(i=it(n),r=1===n.nodeType&&(" "+i+" ").replace(rt," ")){for(a=0;o=t[a++];)r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=m.trim(r))&&n.setAttribute("class",s)}return this},removeClass:function(e){var t,n,r,i,o,a,s,u=0;if(m.isFunction(e))return this.each(function(t){m(this).removeClass(e.call(this,t,it(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof e&&e)for(t=e.match(O)||[];n=this[u++];)if(i=it(n),r=1===n.nodeType&&(" "+i+" ").replace(rt," ")){for(a=0;o=t[a++];)for(;r.indexOf(" "+o+" ")>-1;)r=r.replace(" "+o+" "," ");i!==(s=m.trim(r))&&n.setAttribute("class",s)}return this},toggleClass:function(e,t){var n=r(e);return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):m.isFunction(e)?this.each(function(n){m(this).toggleClass(e.call(this,n,it(this),t),t)}):this.each(function(){var t,r,i,o;if("string"===n)for(r=0,i=m(this),o=e.match(O)||[];t=o[r++];)i.hasClass(t)?i.removeClass(t):i.addClass(t);else void 0!==e&&"boolean"!==n||((t=it(this))&&R.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||!1===e?"":R.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;for(t=" "+e+" ";n=this[r++];)if(1===n.nodeType&&(" "+it(n)+" ").replace(rt," ").indexOf(t)>-1)return!0;return!1}});var ot=/\r/g,at=/[\x20\t\r\n\f]+/g;m.fn.extend({val:function(e){var t,n,r,i=this[0];return arguments.length?(r=m.isFunction(e),this.each(function(n){var i;1===this.nodeType&&(null==(i=r?e.call(this,n,m(this).val()):e)?i="":"number"==typeof i?i+="":m.isArray(i)&&(i=m.map(i,function(e){return null==e?"":e+""})),(t=m.valHooks[this.type]||m.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))})):i?(t=m.valHooks[i.type]||m.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:"string"==typeof(n=i.value)?n.replace(ot,""):null==n?"":n:void 0}}),m.extend({valHooks:{option:{get:function(e){var t=m.find.attr(e,"value");return null!=t?t:m.trim(m.text(e)).replace(at," ")}},select:{get:function(e){for(var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||i<0,a=o?null:[],s=o?i+1:r.length,u=i<0?s:o?i:0;u<s;u++)if(((n=r[u]).selected||u===i)&&(v.optDisabled?!n.disabled:null===n.getAttribute("disabled"))&&(!n.parentNode.disabled||!m.nodeName(n.parentNode,"optgroup"))){if(t=m(n).val(),o)return t;a.push(t)}return a},set:function(e,t){for(var n,r,i=e.options,o=m.makeArray(t),a=i.length;a--;)((r=i[a]).selected=m.inArray(m.valHooks.option.get(r),o)>-1)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),m.each(["radio","checkbox"],function(){m.valHooks[this]={set:function(e,t){if(m.isArray(t))return e.checked=m.inArray(m(e).val(),t)>-1}},v.checkOn||(m.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var st=/^(?:focusinfocus|focusoutblur)$/;m.extend(m.event,{trigger:function(e,t,n,o){var a,u,l,c,d,f,p,v=[n||s],g=h.call(e,"type")?e.type:e,y=h.call(e,"namespace")?e.namespace.split("."):[];if(u=l=n=n||s,3!==n.nodeType&&8!==n.nodeType&&!st.test(g+m.event.triggered)&&(g.indexOf(".")>-1&&(g=(y=g.split(".")).shift(),y.sort()),d=g.indexOf(":")<0&&"on"+g,(e=e[m.expando]?e:new m.Event(g,"object"===r(e)&&e)).isTrigger=o?2:3,e.namespace=y.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+y.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:m.makeArray(t,[e]),p=m.event.special[g]||{},o||!p.trigger||!1!==p.trigger.apply(n,t))){if(!o&&!p.noBubble&&!m.isWindow(n)){for(c=p.delegateType||g,st.test(c+g)||(u=u.parentNode);u;u=u.parentNode)v.push(u),l=u;l===(n.ownerDocument||s)&&v.push(l.defaultView||l.parentWindow||i)}for(a=0;(u=v[a++])&&!e.isPropagationStopped();)e.type=a>1?c:p.bindType||g,(f=(R.get(u,"events")||{})[e.type]&&R.get(u,"handle"))&&f.apply(u,t),(f=d&&u[d])&&f.apply&&F(u)&&(e.result=f.apply(u,t),!1===e.result&&e.preventDefault());return e.type=g,o||e.isDefaultPrevented()||p._default&&!1!==p._default.apply(v.pop(),t)||!F(n)||d&&m.isFunction(n[g])&&!m.isWindow(n)&&((l=n[d])&&(n[d]=null),m.event.triggered=g,n[g](),m.event.triggered=void 0,l&&(n[d]=l)),e.result}},simulate:function(e,t,n){var r=m.extend(new m.Event,n,{type:e,isSimulated:!0});m.event.trigger(r,null,t)}}),m.fn.extend({trigger:function(e,t){return this.each(function(){m.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return m.event.trigger(e,t,n,!0)}}),m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){m.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),m.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),v.focusin="onfocusin"in i,v.focusin||m.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){m.event.simulate(t,e.target,m.event.fix(e))};m.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=R.access(r,t);i||r.addEventListener(e,n,!0),R.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=R.access(r,t)-1;i?R.access(r,t,i):(r.removeEventListener(e,n,!0),R.remove(r,t))}}});var ut=i.location,lt=m.now(),ct=/\?/;m.parseJSON=function(e){return JSON.parse(e+"")},m.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new i.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||m.error("Invalid XML: "+e),t};var dt=/#.*$/,ft=/([?&])_=[^&]*/,pt=/^(.*?):[ \t]*([^\r\n]*)$/gm,ht=/^(?:GET|HEAD)$/,vt=/^\/\//,mt={},gt={},yt="*/".concat("*"),bt=s.createElement("a");function xt(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(O)||[];if(m.isFunction(n))for(;r=o[i++];)"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function wt(e,t,n,r){var i={},o=e===gt;function a(s){var u;return i[s]=!0,m.each(e[s]||[],function(e,s){var l=s(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):void 0:(t.dataTypes.unshift(l),a(l),!1)}),u}return a(t.dataTypes[0])||!i["*"]&&a("*")}function Tt(e,t){var n,r,i=m.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&m.extend(!0,e,r),e}bt.href=ut.href,m.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ut.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(ut.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":yt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":m.parseJSON,"text xml":m.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Tt(Tt(e,m.ajaxSettings),t):Tt(m.ajaxSettings,e)},ajaxPrefilter:xt(mt),ajaxTransport:xt(gt),ajax:function(e,t){"object"===r(e)&&(t=e,e=void 0),t=t||{};var n,o,a,u,l,c,d,f,p=m.ajaxSetup({},t),h=p.context||p,v=p.context&&(h.nodeType||h.jquery)?m(h):m.event,g=m.Deferred(),y=m.Callbacks("once memory"),b=p.statusCode||{},x={},w={},T=0,C="canceled",k={readyState:0,getResponseHeader:function(e){var t;if(2===T){if(!u)for(u={};t=pt.exec(a);)u[t[1].toLowerCase()]=t[2];t=u[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===T?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return T||(e=w[n]=w[n]||e,x[e]=t),this},overrideMimeType:function(e){return T||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(T<2)for(t in e)b[t]=[b[t],e[t]];else k.always(e[k.status]);return this},abort:function(e){var t=e||C;return n&&n.abort(t),S(0,t),this}};if(g.promise(k).complete=y.add,k.success=k.done,k.error=k.fail,p.url=((e||p.url||ut.href)+"").replace(dt,"").replace(vt,ut.protocol+"//"),p.type=t.method||t.type||p.method||p.type,p.dataTypes=m.trim(p.dataType||"*").toLowerCase().match(O)||[""],null==p.crossDomain){c=s.createElement("a");try{c.href=p.url,c.href=c.href,p.crossDomain=bt.protocol+"//"+bt.host!=c.protocol+"//"+c.host}catch(e){p.crossDomain=!0}}if(p.data&&p.processData&&"string"!=typeof p.data&&(p.data=m.param(p.data,p.traditional)),wt(mt,p,t,k),2===T)return k;for(f in(d=m.event&&p.global)&&0==m.active++&&m.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!ht.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(ct.test(o)?"&":"?")+p.data,delete p.data),!1===p.cache&&(p.url=ft.test(o)?o.replace(ft,"$1_="+lt++):o+(ct.test(o)?"&":"?")+"_="+lt++)),p.ifModified&&(m.lastModified[o]&&k.setRequestHeader("If-Modified-Since",m.lastModified[o]),m.etag[o]&&k.setRequestHeader("If-None-Match",m.etag[o])),(p.data&&p.hasContent&&!1!==p.contentType||t.contentType)&&k.setRequestHeader("Content-Type",p.contentType),k.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+yt+"; q=0.01":""):p.accepts["*"]),p.headers)k.setRequestHeader(f,p.headers[f]);if(p.beforeSend&&(!1===p.beforeSend.call(h,k,p)||2===T))return k.abort();for(f in C="abort",{success:1,error:1,complete:1})k[f](p[f]);if(n=wt(gt,p,t,k)){if(k.readyState=1,d&&v.trigger("ajaxSend",[k,p]),2===T)return k;p.async&&p.timeout>0&&(l=i.setTimeout(function(){k.abort("timeout")},p.timeout));try{T=1,n.send(x,S)}catch(e){if(!(T<2))throw e;S(-1,e)}}else S(-1,"No Transport");function S(e,t,r,s){var u,c,f,x,w,C=t;2!==T&&(T=2,l&&i.clearTimeout(l),n=void 0,a=s||"",k.readyState=e>0?4:0,u=e>=200&&e<300||304===e,r&&(x=function(e,t,n){for(var r,i,o,a,s=e.contents,u=e.dataTypes;"*"===u[0];)u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(p,k,r)),x=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];for(o=c.shift();o;)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e.throws)t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(p,x,k,u),u?(p.ifModified&&((w=k.getResponseHeader("Last-Modified"))&&(m.lastModified[o]=w),(w=k.getResponseHeader("etag"))&&(m.etag[o]=w)),204===e||"HEAD"===p.type?C="nocontent":304===e?C="notmodified":(C=x.state,c=x.data,u=!(f=x.error))):(f=C,!e&&C||(C="error",e<0&&(e=0))),k.status=e,k.statusText=(t||C)+"",u?g.resolveWith(h,[c,C,k]):g.rejectWith(h,[k,C,f]),k.statusCode(b),b=void 0,d&&v.trigger(u?"ajaxSuccess":"ajaxError",[k,p,u?c:f]),y.fireWith(h,[k,C]),d&&(v.trigger("ajaxComplete",[k,p]),--m.active||m.event.trigger("ajaxStop")))}return k},getJSON:function(e,t,n){return m.get(e,t,n,"json")},getScript:function(e,t){return m.get(e,void 0,t,"script")}}),m.each(["get","post"],function(e,t){m[t]=function(e,n,r,i){return m.isFunction(n)&&(i=i||r,r=n,n=void 0),m.ajax(m.extend({url:e,type:t,dataType:i,data:n,success:r},m.isPlainObject(e)&&e))}}),m._evalUrl=function(e){return m.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,throws:!0})},m.fn.extend({wrapAll:function(e){var t;return m.isFunction(e)?this.each(function(t){m(this).wrapAll(e.call(this,t))}):(this[0]&&(t=m(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild;return e}).append(this)),this)},wrapInner:function(e){return m.isFunction(e)?this.each(function(t){m(this).wrapInner(e.call(this,t))}):this.each(function(){var t=m(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=m.isFunction(e);return this.each(function(n){m(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){m.nodeName(this,"body")||m(this).replaceWith(this.childNodes)}).end()}}),m.expr.filters.hidden=function(e){return!m.expr.filters.visible(e)},m.expr.filters.visible=function(e){return e.offsetWidth>0||e.offsetHeight>0||e.getClientRects().length>0};var Ct=/%20/g,kt=/\[\]$/,St=/\r?\n/g,jt=/^(?:submit|button|image|reset|file)$/i,_t=/^(?:input|select|textarea|keygen)/i;function Et(e,t,n,i){var o;if(m.isArray(t))m.each(t,function(t,o){n||kt.test(e)?i(e,o):Et(e+"["+("object"===r(o)&&null!=o?t:"")+"]",o,n,i)});else if(n||"object"!==m.type(t))i(e,t);else for(o in t)Et(e+"["+o+"]",t[o],n,i)}m.param=function(e,t){var n,r=[],i=function(e,t){t=m.isFunction(t)?t():null==t?"":t,r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(void 0===t&&(t=m.ajaxSettings&&m.ajaxSettings.traditional),m.isArray(e)||e.jquery&&!m.isPlainObject(e))m.each(e,function(){i(this.name,this.value)});else for(n in e)Et(n,e[n],t,i);return r.join("&").replace(Ct,"+")},m.fn.extend({serialize:function(){return m.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=m.prop(this,"elements");return e?m.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!m(this).is(":disabled")&&_t.test(this.nodeName)&&!jt.test(e)&&(this.checked||!Q.test(e))}).map(function(e,t){var n=m(this).val();return null==n?null:m.isArray(n)?m.map(n,function(e){return{name:t.name,value:e.replace(St,"\r\n")}}):{name:t.name,value:n.replace(St,"\r\n")}}).get()}}),m.ajaxSettings.xhr=function(){try{return new i.XMLHttpRequest}catch(e){}};var Nt={0:200,1223:204},At=m.ajaxSettings.xhr();v.cors=!!At&&"withCredentials"in At,v.ajax=At=!!At,m.ajaxTransport(function(e){var t,n;if(v.cors||At&&!e.crossDomain)return{send:function(r,o){var a,s=e.xhr();if(s.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(a in e.xhrFields)s[a]=e.xhrFields[a];for(a in e.mimeType&&s.overrideMimeType&&s.overrideMimeType(e.mimeType),e.crossDomain||r["X-Requested-With"]||(r["X-Requested-With"]="XMLHttpRequest"),r)s.setRequestHeader(a,r[a]);t=function(e){return function(){t&&(t=n=s.onload=s.onerror=s.onabort=s.onreadystatechange=null,"abort"===e?s.abort():"error"===e?"number"!=typeof s.status?o(0,"error"):o(s.status,s.statusText):o(Nt[s.status]||s.status,s.statusText,"text"!==(s.responseType||"text")||"string"!=typeof s.responseText?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},s.onload=t(),n=s.onerror=t("error"),void 0!==s.onabort?s.onabort=n:s.onreadystatechange=function(){4===s.readyState&&i.setTimeout(function(){t&&n()})},t=t("abort");try{s.send(e.hasContent&&e.data||null)}catch(e){if(t)throw e}},abort:function(){t&&t()}}}),m.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return m.globalEval(e),e}}}),m.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),m.ajaxTransport("script",function(e){var t,n;if(e.crossDomain)return{send:function(r,i){t=m("<script>").prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&i("error"===e.type?404:200,e.type)}),s.head.appendChild(t[0])},abort:function(){n&&n()}}});var Dt=[],qt=/(=)\?(?=&|$)|\?\?/;m.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Dt.pop()||m.expando+"_"+lt++;return this[e]=!0,e}}),m.ajaxPrefilter("json jsonp",function(e,t,n){var r,o,a,s=!1!==e.jsonp&&(qt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&qt.test(e.data)&&"data");if(s||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m.isFunction(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,s?e[s]=e[s].replace(qt,"$1"+r):!1!==e.jsonp&&(e.url+=(ct.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return a||m.error(r+" was not called"),a[0]},e.dataTypes[0]="json",o=i[r],i[r]=function(){a=arguments},n.always(function(){void 0===o?m(i).removeProp(r):i[r]=o,e[r]&&(e.jsonpCallback=t.jsonpCallback,Dt.push(r)),a&&m.isFunction(o)&&o(a[0]),a=o=void 0}),"script"}),m.parseHTML=function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||s;var r=j.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=re([e],t,i),i&&i.length&&m(i).remove(),m.merge([],r.childNodes))};var Lt=m.fn.load;function Pt(e){return m.isWindow(e)?e:9===e.nodeType&&e.defaultView}m.fn.load=function(e,t,n){if("string"!=typeof e&&Lt)return Lt.apply(this,arguments);var i,o,a,s=this,u=e.indexOf(" ");return u>-1&&(i=m.trim(e.slice(u)),e=e.slice(0,u)),m.isFunction(t)?(n=t,t=void 0):t&&"object"===r(t)&&(o="POST"),s.length>0&&m.ajax({url:e,type:o||"GET",dataType:"html",data:t}).done(function(e){a=arguments,s.html(i?m("<div>").append(m.parseHTML(e)).find(i):e)}).always(n&&function(e,t){s.each(function(){n.apply(this,a||[e.responseText,t,e])})}),this},m.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){m.fn[t]=function(e){return this.on(t,e)}}),m.expr.filters.animated=function(e){return m.grep(m.timers,function(t){return e===t.elem}).length},m.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=m.css(e,"position"),c=m(e),d={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=m.css(e,"top"),u=m.css(e,"left"),("absolute"===l||"fixed"===l)&&(o+u).indexOf("auto")>-1?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m.isFunction(t)&&(t=t.call(e,n,m.extend({},s))),null!=t.top&&(d.top=t.top-s.top+a),null!=t.left&&(d.left=t.left-s.left+i),"using"in t?t.using.call(e,d):c.css(d)}},m.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){m.offset.setOffset(this,e,t)});var t,n,r=this[0],i={top:0,left:0},o=r&&r.ownerDocument;return o?(t=o.documentElement,m.contains(t,r)?(i=r.getBoundingClientRect(),n=Pt(o),{top:i.top+n.pageYOffset-t.clientTop,left:i.left+n.pageXOffset-t.clientLeft}):i):void 0},position:function(){if(this[0]){var e,t,n=this[0],r={top:0,left:0};return"fixed"===m.css(n,"position")?t=n.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),m.nodeName(e[0],"html")||(r=e.offset()),r.top+=m.css(e[0],"borderTopWidth",!0),r.left+=m.css(e[0],"borderLeftWidth",!0)),{top:t.top-r.top-m.css(n,"marginTop",!0),left:t.left-r.left-m.css(n,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent;e&&"static"===m.css(e,"position");)e=e.offsetParent;return e||De})}}),m.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;m.fn[e]=function(r){return M(this,function(e,r,i){var o=Pt(e);if(void 0===i)return o?o[t]:e[r];o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):e[r]=i},e,r,arguments.length)}}),m.each(["top","left"],function(e,t){m.cssHooks[t]=Le(v.pixelPosition,function(e,n){if(n)return n=qe(e,t),Ee.test(n)?m(e).position()[t]+"px":n})}),m.each({Height:"height",Width:"width"},function(e,t){m.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){m.fn[r]=function(r,i){var o=arguments.length&&(n||"boolean"!=typeof r),a=n||(!0===r||!0===i?"margin":"border");return M(this,function(t,n,r){var i;return m.isWindow(t)?t.document.documentElement["client"+e]:9===t.nodeType?(i=t.documentElement,Math.max(t.body["scroll"+e],i["scroll"+e],t.body["offset"+e],i["offset"+e],i["client"+e])):void 0===r?m.css(t,n,a):m.style(t,n,r,a)},t,o?r:void 0,o,null)}})}),m.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},size:function(){return this.length}}),m.fn.andSelf=m.fn.addBack,void 0===(n=function(){return m}.apply(t,[]))||(e.exports=n);var Ot=i.jQuery,Ht=i.$;return m.noConflict=function(e){return i.$===m&&(i.$=Ht),e&&i.jQuery===m&&(i.jQuery=Ot),m},o||(i.jQuery=i.$=m),m})}).call(this,n(5)(e))},function(e,t){e.exports=prestashop},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.psShowHide=
/**
 * 2007-2019 PrestaShop and Contributors
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to https://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2019 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */
function(){(0,r.default)(".ps-shown-by-js").show(),(0,r.default)(".ps-hidden-by-js").hide()},t.psGetRequestParameter=i,t.refreshCheckoutPage=function(){if(null!==i("updatedTransaction"))window.location.reload();else{var e=i();e.updatedTransaction=1;var t=[];for(var n in e){var r=e[n];t.push(n+"="+r)}window.location.href=window.location.pathname+"?"+t.join("&")}};var r=function(e){return e&&e.__esModule?e:{default:e}}(n(0));function i(e){var t={};return window.location.href.replace(location.hash,"").replace(/[?&]+([^=&]+)=?([^&]*)?/gi,function(e,n,r){t[n]=void 0!==r?r:""}),void 0!==e?t[e]?t[e]:null:t}},function(e,t,n){e.exports=n(4)},function(e,t,n){"use strict";var r=s(n(0));n(6),n(7),n(11),n(12),n(13),n(14);var i=s(n(1)),o=s(n(15)),a=n(2);function s(e){return e&&e.__esModule?e:{default:e}}for(var u in window.$=r.default,window.jQuery=r.default,o.default.prototype)i.default[u]=o.default.prototype[u];(0,r.default)(document).ready(function(){(0,a.psShowHide)()})},function(e,t,n){"use strict";e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t,n){"use strict";var r=a(n(0)),i=a(n(1)),o=n(2);function a(e){return e&&e.__esModule?e:{default:e}}
/**
 * 2007-2019 PrestaShop and Contributors
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to https://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2019 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */(0,r.default)(document).ready(function(){i.default.on("updateCart",function(e){i.default.cart=e.reason.cart;var t=(0,r.default)(".js-cart").data("refresh-url");if(t){var n={};e&&e.reason&&(n={id_product_attribute:e.reason.idProductAttribute,id_product:e.reason.idProduct}),r.default.post(t,n).then(function(e){(0,r.default)(".cart-detailed-totals").replaceWith(e.cart_detailed_totals),(0,r.default)(".cart-summary-items-subtotal").replaceWith(e.cart_summary_items_subtotal),(0,r.default)(".cart-summary-subtotals-container").replaceWith(e.cart_summary_subtotals_container),(0,r.default)(".cart-summary-totals").replaceWith(e.cart_summary_totals),(0,r.default)(".cart-detailed-actions").replaceWith(e.cart_detailed_actions),(0,r.default)(".cart-voucher").replaceWith(e.cart_voucher),(0,r.default)(".cart-overview").replaceWith(e.cart_detailed),(0,r.default)("#product_customization_id").val(0),(0,r.default)(".js-cart-line-product-quantity").each(function(e,t){var n=(0,r.default)(t);n.attr("value",n.val())}),(0,r.default)(".js-cart-payment-step-refresh").length&&(0,o.refreshCheckoutPage)(),i.default.emit("updatedCart",{eventType:"updateCart",resp:e})}).fail(function(e){i.default.emit("handleError",{eventType:"updateCart",resp:e})})}});var e=(0,r.default)("body");e.on("click",'[data-button-action="add-to-cart"]',function(e){if(e.preventDefault(),(0,r.default)("#quantity_wanted").val()>(0,r.default)("[data-stock]").data("stock")&&0===(0,r.default)("[data-allow-oosp]").data("allow-oosp").length)(0,r.default)('[data-button-action="add-to-cart"]').attr("disabled","disabled");else{var t=(0,r.default)(e.target).closest("form"),n=t.serialize()+"&add=1&action=update",o=t.attr("action"),a=function(e){e.parents(".product-add-to-cart").first().find(".product-minimal-quantity").addClass("error"),e.parent().find("label").addClass("error")},s=t.find("input[min]");if(!function(e){var t=!0;return e.each(function(e,n){var i=(0,r.default)(n),o=parseInt(i.attr("min"),10);o&&i.val()<o&&(a(i),t=!1)}),t}(s))return void a(s);r.default.post(o,n,null,"json").then(function(e){i.default.emit("updateCart",{reason:{idProduct:e.id_product,idProductAttribute:e.id_product_attribute,idCustomization:e.id_customization,linkAction:"add-to-cart",cart:e.cart},resp:e})}).fail(function(e){i.default.emit("handleError",{eventType:"addProductToCart",resp:e})})}}),e.on("submit",'[data-link-action="add-voucher"]',function(e){e.preventDefault();var t=(0,r.default)(e.currentTarget),n=t.attr("action");0===t.find("[name=action]").length&&t.append((0,r.default)("<input>",{type:"hidden",name:"ajax",value:1})),0===t.find("[name=action]").length&&t.append((0,r.default)("<input>",{type:"hidden",name:"action",value:"update"})),r.default.post(n,t.serialize(),null,"json").then(function(t){t.hasError?(0,r.default)(".js-error").show().find(".js-error-text").text(t.errors[0]):i.default.emit("updateCart",{reason:e.target.dataset,resp:t})}).fail(function(e){i.default.emit("handleError",{eventType:"updateCart",resp:e})})})})},function(e,t,n){"use strict";var r=u(n(0)),i=u(n(1)),o=u(n(8)),a=u(n(9)),s=u(n(10));function u(e){return e&&e.__esModule?e:{default:e}}
/**
 * 2007-2019 PrestaShop and Contributors
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to https://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2019 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */function l(){(0,o.default)(),(0,a.default)(),(0,s.default)(),function(){(0,r.default)(".checkout-step").off("click");var e=(0,r.default)(".js-current-step").prevAll();(e=(0,r.default)(".js-current-step").add(e)).addClass("-clickable"),e.on("click",function(e){var t=(0,r.default)(e.target).closest(".checkout-step");if(!t.hasClass("-unreachable"))if((0,r.default)(".js-current-step, .-current").removeClass("js-current-step -current"),t.toggleClass("-current"),t.toggleClass("js-current-step"),0==(0,r.default)("button.continue",t).length){var n=t.nextAll(".checkout-step.-clickable");n.removeClass("-unreachable").addClass("-complete"),(0,r.default)(".step-title",n).removeClass("not-allowed")}else{var o=t.nextAll();o.addClass("-unreachable").removeClass("-complete"),(0,r.default)(".step-title",o).addClass("not-allowed")}i.default.emit("changedCheckoutStep",{event:e})})}()}(0,r.default)(document).ready(function(){1===(0,r.default)("#checkout").length&&l()})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){(0,r.default)(".js-edit-addresses").on("click",function(e){e.stopPropagation(),(0,r.default)("#checkout-addresses-step").trigger("click"),i.default.emit("editAddress")}),(0,r.default)("#delivery-addresses input[type=radio], #invoice-addresses input[type=radio]").on("click",function(){(0,r.default)(".address-item").removeClass("selected"),(0,r.default)(".address-item:has(input[type=radio]:checked)").addClass("selected");var e=(0,r.default)(".js-address-error").prop("id").split("-").pop(),t=(0,r.default)("#not-valid-addresses").val(),n=this.name.split("_").pop(),i=(0,r.default)(".js-address-error[name=alert-"+n+"]");l(!1,e,n),""!==t&&null===s&&t.split(",").indexOf(this.value)>=0?(i.show(),l(!0,this.value,n),(0,r.default)(".js-address-error").prop("id","id-failure-address-"+this.value)):i.hide();var o=(0,r.default)(".js-address-error:visible");c(o.length<=0)})};var r=a(n(0)),i=a(n(1)),o=n(2);function a(e){return e&&e.__esModule?e:{default:e}}
/**
 * 2007-2019 PrestaShop and Contributors
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to https://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2019 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */var s=(0,o.psGetRequestParameter)("editAddress"),u=(0,o.psGetRequestParameter)("use_same_address");(0,r.default)(window).on("load",function(){var e=(0,r.default)(".js-address-error:visible");if(0===parseInt(u)&&(0,r.default)("#invoice-addresses input[type=radio]:checked").trigger("click"),(null!==s||(0,r.default)(".js-address-form:visible").length>1)&&e.hide(),e.length>0){var t=(0,r.default)(".js-address-error").prop("id").split("-").pop();e.each(function(){l(!0,t,(0,r.default)(this).attr("name").split("-").pop())})}e=(0,r.default)(".js-address-error:visible"),c(e.length<=0)});var l=function(e,t,n){var i="#7a7a7a";e&&((0,r.default)("#"+n+"-addresses a.edit-address").prop("style","color: #7a7a7a !important"),i="#2fb5d2"),(0,r.default)("#id-address-"+n+"-address-"+t+" a.edit-address").prop("style","color: "+i+" !important")},c=function(e){(0,r.default)("button[name=confirm-addresses]").prop("disabled",!e)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=
/**
 * 2007-2019 PrestaShop and Contributors
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to https://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2019 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */
function(){var e=(0,r.default)("body");e.on("change","#js-delivery input",function(e){var t=(0,r.default)("#js-delivery"),n=t.serialize(),a=(0,r.default)(e.currentTarget).parents("div.delivery-option");r.default.post(t.data("url-update"),n).then(function(e){(0,r.default)("#js-checkout-summary").replaceWith(e.preview),(0,r.default)(".js-cart-payment-step-refresh").length&&(0,o.refreshCheckoutPage)(),i.default.emit("updatedDeliveryForm",{dataForm:t.serializeArray(),deliveryOption:a,resp:e})}).fail(function(e){i.default.trigger("handleError",{eventType:"updateDeliveryOptions",resp:e})})}),e.on("click",".js-edit-delivery",function(e){e.stopPropagation(),(0,r.default)("#checkout-delivery-step").trigger("click"),i.default.emit("editDelivery")})};var r=a(n(0)),i=a(n(1)),o=n(2);function a(e){return e&&e.__esModule?e:{default:e}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=new o;return e.init(),e};var r=function(e){return e&&e.__esModule?e:{default:e}}(n(0));function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.confirmationSelector="#payment-confirmation",this.paymentSelector="#payment-section",this.conditionsSelector="#conditions-to-approve",this.conditionAlertSelector=".js-alert-payment-conditions",this.additionalInformatonSelector=".js-additional-information",this.optionsForm=".js-payment-option-form"}return function(e,t,n){t&&i(e.prototype,t),n&&i(e,n)}(e,[{key:"init",value:function(){(0,r.default)(this.paymentSelector+' input[type="checkbox"][disabled]').attr("disabled",!1);var e=(0,r.default)("body");e.on("change",this.conditionsSelector+' input[type="checkbox"]',r.default.proxy(this.toggleOrderButton,this)),e.on("change",'input[name="payment-option"]',r.default.proxy(this.toggleOrderButton,this)),e.on("click",this.confirmationSelector+" button",r.default.proxy(this.confirm,this)),this.collapseOptions()}},{key:"collapseOptions",value:function(){(0,r.default)(this.additionalInformatonSelector+", "+this.optionsForm).hide()}},{key:"getSelectedOption",value:function(){return(0,r.default)('input[name="payment-option"]:checked').attr("id")}},{key:"hideConfirmation",value:function(){(0,r.default)(this.confirmationSelector).hide()}},{key:"showConfirmation",value:function(){(0,r.default)(this.confirmationSelector).show()}},{key:"toggleOrderButton",value:function(){var e=!0;(0,r.default)(this.conditionsSelector+' input[type="checkbox"]').each(function(t,n){n.checked||(e=!1)}),this.collapseOptions();var t=this.getSelectedOption();if(t||(e=!1),(0,r.default)("#"+t+"-additional-information").show(),(0,r.default)("#pay-with-"+t+"-form").show(),(0,r.default)(".js-payment-binary").hide(),(0,r.default)("#"+t).hasClass("binary")){var n=this.getPaymentOptionSelector(t);this.hideConfirmation(),(0,r.default)(n).show(),e?(0,r.default)(n).removeClass("disabled"):(0,r.default)(n).addClass("disabled")}else this.showConfirmation(),(0,r.default)(this.confirmationSelector+" button").attr("disabled",!e),e?(0,r.default)(this.conditionAlertSelector).hide():(0,r.default)(this.conditionAlertSelector).show()}},{key:"getPaymentOptionSelector",value:function(e){var t=(0,r.default)("#".concat(e)).data("module-name");return".js-payment-".concat(t)}},{key:"confirm",value:function(){var e=this.getSelectedOption();e&&((0,r.default)(this.confirmationSelector+" button").prop("disabled",!0),(0,r.default)("#pay-with-"+e+"-form form").submit())}}]),e}()},function(e,t,n){"use strict";var r=function(e){return e&&e.__esModule?e:{default:e}}
/**
 * 2007-2019 PrestaShop and Contributors
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to https://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2019 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */(n(0));var i=!1;function o(e){i=!1,prestashop.emit("updateProductList",e),window.history.pushState(e,document.title,e.current_url)}function a(){i=!1}(0,r.default)(document).ready(function(){prestashop.on("updateFacets",function(e){!function(e){if(i);else{var t=[e,e.indexOf("?")>=0?"&":"?","from-xhr"].join("");r.default.get(t,null,null,"json").then(o).fail(a)}}(e)})})},function(e,t,n){"use strict";var r=o(n(0)),i=o(n(1));function o(e){return e&&e.__esModule?e:{default:e}}
/**
 * 2007-2019 PrestaShop and Contributors
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to https://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2019 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */(0,r.default)(document).ready(function(){(0,r.default)("body").on("click",".quick-view",function(e){i.default.emit("clickQuickView",{dataset:(0,r.default)(e.target).closest(".js-product-miniature").data()}),e.preventDefault()})})},function(e,t,n){"use strict";var r=a(n(0)),i=a(n(1)),o=n(2);function a(e){return e&&e.__esModule?e:{default:e}}
/**
 * 2007-2019 PrestaShop and Contributors
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to https://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2019 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */var s=null,u=null;function l(e,t,n){var a=(0,r.default)(".product-actions"),l=a.find("#quantity_wanted"),f=a.find("form:first").serialize(),p=(0,o.psGetRequestParameter)("preview");if(p=null!==p?"&preview="+p:"",null!==n){if(!e||"keyup"!==e.type||l.val()!==l.data("old-value")){l.data("old-value",l.val()),u&&clearTimeout(u);var h=30;"updatedProductQuantity"===t&&(h=750),u=setTimeout(function(){""!==f&&(s=r.default.ajax({url:n+(-1===n.indexOf("?")?"?":"&")+f+p,method:"POST",data:{ajax:1,action:"refresh",quantity_wanted:"updatedProductCombination"===t?l.attr("min"):l.val()},dataType:"json",beforeSend:function(){null!==s&&s.abort()},error:function(e,t,n){"abort"!==t&&0===(0,r.default)("section#main > .ajax-error").length&&d((0,r.default)(".quickview #product-availability, .page-product:not(.modal-open) .row #product-availability"),"An error occurred while processing your request")},success:function(e,n,o){var a=(0,r.default)("<div>").append(e.product_cover_thumbnails);(0,r.default)(".images-container").html()!==a.find(".images-container").html()&&(0,r.default)(".images-container").replaceWith(e.product_cover_thumbnails),(0,r.default)(".quickview .product-prices, .page-product:not(.modal-open) .row .product-prices").replaceWith(e.product_prices),(0,r.default)(".quickview .product-customization, .page-product:not(.modal-open) .row .product-customization").replaceWith(e.product_customization),(0,r.default)(".quickview .product-variants .page-product:not(.modal-open) .row .product-variants").replaceWith(e.product_variants),(0,r.default)(".quickview .product-discounts, .page-product:not(.modal-open) .row .product-discounts").replaceWith(e.product_discounts),(0,r.default)(".quickview .product-additional-info, .page-product:not(.modal-open) .row .product-additional-info").replaceWith(e.product_additional_info),(0,r.default)(".quickview #product-details, #product-details").replaceWith(e.product_details),(0,r.default)(".quickview .product-flags, .page-product:not(.modal-open) .row .product-flags").replaceWith(e.product_flags),function(e){var t=null;(0,r.default)(e.product_add_to_cart).each(function(e,n){if((0,r.default)(n).hasClass("product-add-to-cart"))return t=(0,r.default)(n),!1}),null===t&&d((0,r.default)(".quickview #product-availability, .page-product:not(.modal-open) .row #product-availability"),"An error occurred while processing your request");var n=(0,r.default)(".product-add-to-cart");c({$addToCartSnippet:t,$targetParent:n,targetSelector:".add"}),c({$addToCartSnippet:t,$targetParent:n,targetSelector:"#product-availability"}),c({$addToCartSnippet:t,$targetParent:n,targetSelector:".product-minimal-quantity"})}(e);var s=parseInt(e.product_minimal_quantity,10);isNaN(s)||"updatedProductQuantity"===t||(l.attr("min",s),l.val(s)),i.default.emit("updatedProduct",e)},complete:function(e,t){s=null,u=null}}))}.bind(s,u),h)}}else d((0,r.default)("#product-availability"),"An error occurred while processing your request")}function c(e){var t=(0,r.default)(e.$targetParent.find(e.targetSelector));if(!(t.length<=0)){var n=e.$addToCartSnippet.find(e.targetSelector);n.length>0?t.replaceWith(n[0].outerHTML):t.html("")}}function d(e,t){var n=(0,r.default)('<div class="alert alert-danger ajax-error" role="alert">'.concat(t,"</div>"));e.replaceWith(n)}(0,r.default)(document).ready(function(){(0,r.default)("body").on("change touchspin.on.startspin",".product-variants *[name]",function(e){i.default.emit("updateProduct",{eventType:"updatedProductCombination",event:e,resp:{},reason:{productUrl:i.default.urls.pages.product||""}})}),(0,r.default)("body").on("click",".product-refresh",function(e,t){e.preventDefault();var n="updatedProductCombination";void 0!==t&&t.eventType&&(n=t.eventType),i.default.emit("updateProduct",{eventType:n,event:e,resp:{},reason:{productUrl:i.default.urls.pages.product||""}})}),i.default.on("updateProduct",function(e){var t=e.eventType,n=e.event;(function(){var e=r.default.Deferred(),t=(0,r.default)(".product-actions"),n=(0,r.default)("#quantity_wanted");if(null!==i.default&&null!==i.default.urls&&null!==i.default.urls.pages&&""!==i.default.urls.pages.product&&null!==i.default.urls.pages.product)return e.resolve(i.default.urls.pages.product),e.promise();var o={};return(0,r.default)(t.find("form:first").serializeArray()).each(function(e,t){o[t.name]=t.value}),r.default.ajax({url:t.find("form:first").attr("action"),method:"POST",data:Object.assign({ajax:1,action:"productrefresh",quantity_wanted:n.val()},o),dataType:"json",success:function(t){var n=t.productUrl;i.default.page.canonical=n,e.resolve(n)},error:function(t,n,r){e.reject({jqXHR:t,textStatus:n,errorThrown:r})}}),e.promise()})().done(function(e){return l(n,t,e)}).fail(function(){0===(0,r.default)("section#main > .ajax-error").length&&d((0,r.default)("#product-availability"),"An error occurred while processing your request")})}),i.default.on("updatedProduct",function(e){if(e.product_url&&e.id_product_attribute&&!(0,r.default)(".modal.quickview").length){var t=document.title;e.product_title&&(t=e.product_title,(0,r.default)(document).attr("title",t)),window.history.replaceState({id_product_attribute:e.id_product_attribute},t,e.product_url)}}),i.default.on("updateCart",function(e){e&&e.reason&&"add-to-cart"===e.reason.linkAction&&(0,r.default)("#quantity_wanted").val(1)})})},function(e,t,n){"use strict";var r=o(n(0)),i=o(n(1));function o(e){return e&&e.__esModule?e:{default:e}}(0,r.default)(document).ready(function(){!function(e){(0,r.default)("body").on("change",e.country,function(){var t={id_country:(0,r.default)(e.country).val(),id_address:(0,r.default)(e.address+" form").data("id-address")},n=(0,r.default)(e.address+" form").data("refresh-url"),o=e.address+" input";r.default.post(n,t).then(function(t){var n=[];(0,r.default)(o).each(function(){n[(0,r.default)(this).prop("name")]=(0,r.default)(this).val()}),(0,r.default)(e.address).replaceWith(t.address_form),(0,r.default)(o).each(function(){(0,r.default)(this).val(n[(0,r.default)(this).prop("name")])}),i.default.emit("updatedAddressForm",{target:(0,r.default)(e.address),resp:t})}).fail(function(e){i.default.emit("handleError",{eventType:"updateAddressForm",resp:e})})})}({country:".js-country",address:".js-address-form"})})},function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function o(e){return"function"==typeof e}function a(e){return"object"===r(e)&&null!==e}function s(e){return void 0===e}e.exports=i,i.EventEmitter=i,i.prototype._events=void 0,i.prototype._maxListeners=void 0,i.defaultMaxListeners=10,i.prototype.setMaxListeners=function(e){if(!function(e){return"number"==typeof e}(e)||e<0||isNaN(e))throw TypeError("n must be a positive number");return this._maxListeners=e,this},i.prototype.emit=function(e){var t,n,r,i,u,l;if(this._events||(this._events={}),"error"===e&&(!this._events.error||a(this._events.error)&&!this._events.error.length)){if((t=arguments[1])instanceof Error)throw t;var c=new Error('Uncaught, unspecified "error" event. ('+t+")");throw c.context=t,c}if(s(n=this._events[e]))return!1;if(o(n))switch(arguments.length){case 1:n.call(this);break;case 2:n.call(this,arguments[1]);break;case 3:n.call(this,arguments[1],arguments[2]);break;default:i=Array.prototype.slice.call(arguments,1),n.apply(this,i)}else if(a(n))for(i=Array.prototype.slice.call(arguments,1),r=(l=n.slice()).length,u=0;u<r;u++)l[u].apply(this,i);return!0},i.prototype.addListener=function(e,t){var n;if(!o(t))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",e,o(t.listener)?t.listener:t),this._events[e]?a(this._events[e])?this._events[e].push(t):this._events[e]=[this._events[e],t]:this._events[e]=t,a(this._events[e])&&!this._events[e].warned&&(n=s(this._maxListeners)?i.defaultMaxListeners:this._maxListeners)&&n>0&&this._events[e].length>n&&(this._events[e].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[e].length),"function"==typeof console.trace&&console.trace()),this},i.prototype.on=i.prototype.addListener,i.prototype.once=function(e,t){if(!o(t))throw TypeError("listener must be a function");var n=!1;function r(){this.removeListener(e,r),n||(n=!0,t.apply(this,arguments))}return r.listener=t,this.on(e,r),this},i.prototype.removeListener=function(e,t){var n,r,i,s;if(!o(t))throw TypeError("listener must be a function");if(!this._events||!this._events[e])return this;if(i=(n=this._events[e]).length,r=-1,n===t||o(n.listener)&&n.listener===t)delete this._events[e],this._events.removeListener&&this.emit("removeListener",e,t);else if(a(n)){for(s=i;s-->0;)if(n[s]===t||n[s].listener&&n[s].listener===t){r=s;break}if(r<0)return this;1===n.length?(n.length=0,delete this._events[e]):n.splice(r,1),this._events.removeListener&&this.emit("removeListener",e,t)}return this},i.prototype.removeAllListeners=function(e){var t,n;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[e]&&delete this._events[e],this;if(0===arguments.length){for(t in this._events)"removeListener"!==t&&this.removeAllListeners(t);return this.removeAllListeners("removeListener"),this._events={},this}if(o(n=this._events[e]))this.removeListener(e,n);else if(n)for(;n.length;)this.removeListener(e,n[n.length-1]);return delete this._events[e],this},i.prototype.listeners=function(e){return this._events&&this._events[e]?o(this._events[e])?[this._events[e]]:this._events[e].slice():[]},i.prototype.listenerCount=function(e){if(this._events){var t=this._events[e];if(o(t))return 1;if(t)return t.length}return 0},i.listenerCount=function(e,t){return e.listenerCount(t)}}]);!function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,e),r.l=!0,r.exports}
var n={};e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=26)}([function(t,e){t.exports=jQuery},function(t,e){t.exports=prestashop},function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}
Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value" in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}
return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),o=n(0),a=function(t){return t&&t.__esModule?t:{default:t}}(o),s=function(){function t(e){i(this,t),this.el=e}
return r(t,[{key:"init",value:function(){this.el.on("show.bs.dropdown",function(t,e){e?(0,a.default)("#"+e).find(".dropdown-menu").first().stop(!0,!0).slideDown():(0,a.default)(t.target).find(".dropdown-menu").first().stop(!0,!0).slideDown()}),this.el.on("hide.bs.dropdown",function(t,e){e?(0,a.default)("#"+e).find(".dropdown-menu").first().stop(!0,!0).slideUp():(0,a.default)(t.target).find(".dropdown-menu").first().stop(!0,!0).slideUp()}),this.el.find("select.link").each(function(t,e){(0,a.default)(e).on("change",function(t){window.location=(0,a.default)(this).val()})})}}]),t}();e.default=s,t.exports=e.default},function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}
Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value" in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}
return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),o=n(0),a=function(t){return t&&t.__esModule?t:{default:t}}(o),s=function(){function t(){i(this,t)}
return r(t,[{key:"init",value:function(){(0,a.default)(".js-product-miniature").each(function(t,e){var n=(0,a.default)(e).find(".discount-product"),i=(0,a.default)(e).find(".on-sale"),r=(0,a.default)(e).find(".new");n.length&&(r.css("top",2*n.height()+10),n.css("top",-(0,a.default)(e).find(".thumbnail-container").height()+(0,a.default)(e).find(".product-description").height()+10),(0,a.default)(e).find(".pack").length&&(0,a.default)(e).find(".pack").css("top",2*n.height()+10)),i.length&&(n.css("top",parseFloat(n.css("top"))+i.height()+10),r.css("top",2*n.height()+i.height()+20)),(0,a.default)(e).find(".color").length>5&&function(){var t=0;(0,a.default)(e).find(".color").each(function(e,n){e>4&&((0,a.default)(n).hide(),t++)}),(0,a.default)(e).find(".js-count").append("+"+t)}()})}}]),t}();e.default=s,t.exports=e.default},function(t,e,n){"use strict";var i,r;!function(t){function e(t){var e=t.length,i=n.type(t);return"function"!==i&&!n.isWindow(t)&&(!(1!==t.nodeType||!e)||("array"===i||0===e||"number"==typeof e&&e>0&&e-1 in t))}
if(!t.jQuery){var n=function t(e,n){return new t.fn.init(e,n)};n.isWindow=function(t){return t&&t===t.window},n.type=function(t){return t?"object"==typeof t||"function"==typeof t?r[a.call(t)]||"object":typeof t:t+""},n.isArray=Array.isArray||function(t){return"array"===n.type(t)},n.isPlainObject=function(t){var e;if(!t||"object"!==n.type(t)||t.nodeType||n.isWindow(t))return!1;try{if(t.constructor&&!o.call(t,"constructor")&&!o.call(t.constructor.prototype,"isPrototypeOf"))return!1}catch(t){return!1}
for(e in t);return void 0===e||o.call(t,e)},n.each=function(t,n,i){var r=0,o=t.length,a=e(t);if(i){if(a)
for(;r<o&&!1!==n.apply(t[r],i);r++);else for(r in t)
if(t.hasOwnProperty(r)&&!1===n.apply(t[r],i))break}else if(a)
for(;r<o&&!1!==n.call(t[r],r,t[r]);r++);else for(r in t)
if(t.hasOwnProperty(r)&&!1===n.call(t[r],r,t[r]))break;return t},n.data=function(t,e,r){if(void 0===r){var o=t[n.expando],a=o&&i[o];if(void 0===e)return a;if(a&&e in a)return a[e]}else if(void 0!==e){var s=t[n.expando]||(t[n.expando]=++n.uuid);return i[s]=i[s]||{},i[s][e]=r,r}},n.removeData=function(t,e){var r=t[n.expando],o=r&&i[r];o&&(e?n.each(e,function(t,e){delete o[e]}):delete i[r])},n.extend=function(){var t,e,i,r,o,a,s=arguments[0]||{},l=1,u=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[l]||{},l++),"object"!=typeof s&&"function"!==n.type(s)&&(s={}),l===u&&(s=this,l--);l<u;l++)
if(o=arguments[l])
for(r in o)o.hasOwnProperty(r)&&(t=s[r],i=o[r],s!==i&&(c&&i&&(n.isPlainObject(i)||(e=n.isArray(i)))?(e?(e=!1,a=t&&n.isArray(t)?t:[]):a=t&&n.isPlainObject(t)?t:{},s[r]=n.extend(c,a,i)):void 0!==i&&(s[r]=i)));return s},n.queue=function(t,i,r){if(t){i=(i||"fx")+"queue";var o=n.data(t,i);return r?(!o||n.isArray(r)?o=n.data(t,i,function(t,n){var i=n||[];return t&&(e(Object(t))?function(t,e){for(var n=+e.length,i=0,r=t.length;i<n;)t[r++]=e[i++];if(n!==n)
for(;void 0!==e[i];)t[r++]=e[i++];t.length=r}(i,"string"==typeof t?[t]:t):[].push.call(i,t)),i}(r)):o.push(r),o):o||[]}},n.dequeue=function(t,e){n.each(t.nodeType?[t]:t,function(t,i){e=e||"fx";var r=n.queue(i,e),o=r.shift();"inprogress"===o&&(o=r.shift()),o&&("fx"===e&&r.unshift("inprogress"),o.call(i,function(){n.dequeue(i,e)}))})},n.fn=n.prototype={init:function(t){if(t.nodeType)return this[0]=t,this;throw new Error("Not a DOM node.")},offset:function(){var e=this[0].getBoundingClientRect?this[0].getBoundingClientRect():{top:0,left:0};return{top:e.top+(t.pageYOffset||document.scrollTop||0)-(document.clientTop||0),left:e.left+(t.pageXOffset||document.scrollLeft||0)-(document.clientLeft||0)}},position:function(){var t=this[0],e=function(t){for(var e=t.offsetParent;e&&"html"!==e.nodeName.toLowerCase()&&e.style&&"static"===e.style.position;)e=e.offsetParent;return e||document}(t),i=this.offset(),r=/^(?:body|html)$/i.test(e.nodeName)?{top:0,left:0}:n(e).offset();return i.top-=parseFloat(t.style.marginTop)||0,i.left-=parseFloat(t.style.marginLeft)||0,e.style&&(r.top+=parseFloat(e.style.borderTopWidth)||0,r.left+=parseFloat(e.style.borderLeftWidth)||0),{top:i.top-r.top,left:i.left-r.left}}};var i={};n.expando="velocity"+(new Date).getTime(),n.uuid=0;for(var r={},o=r.hasOwnProperty,a=r.toString,s="Boolean Number String Function Array Date RegExp Object Error".split(" "),l=0;l<s.length;l++)r["[object "+s[l]+"]"]=s[l].toLowerCase();n.fn.init.prototype=n.fn,t.Velocity={Utilities:n}}}(window),function(o){"object"==typeof t&&"object"==typeof t.exports?t.exports=o():(i=o,void 0!==(r="function"==typeof i?i.call(e,n,e,t):i)&&(t.exports=r))}(function(){return function(t,e,n,i){function r(t){for(var e=-1,n=t?t.length:0,i=[];++e<n;){var r=t[e];r&&i.push(r)}
return i}
function o(t){return _.isWrapped(t)?t=y.call(t):_.isNode(t)&&(t=[t]),t}
function a(t){var e=h.data(t,"velocity");return null===e?i:e}
function s(t,e){var n=a(t);n&&n.delayTimer&&!n.delayPaused&&(n.delayRemaining=n.delay-e+n.delayBegin,n.delayPaused=!0,clearTimeout(n.delayTimer.setTimeout))}
function l(t,e){var n=a(t);n&&n.delayTimer&&n.delayPaused&&(n.delayPaused=!1,n.delayTimer.setTimeout=setTimeout(n.delayTimer.next,n.delayRemaining))}
function u(t){return function(e){return Math.round(e*t)*(1/t)}}
function c(t,n,i,r){function o(t,e){return 1-3*e+3*t}
function a(t,e){return 3*e-6*t}
function s(t){return 3*t}
function l(t,e,n){return((o(e,n)*t+a(e,n))*t+s(e))*t}
function u(t,e,n){return 3*o(e,n)*t*t+2*a(e,n)*t+s(e)}
function c(e,n){for(var r=0;r<m;++r){var o=u(n,t,i);if(0===o)return n;n-=(l(n,t,i)-e)/o}
return n}
function f(){for(var e=0;e<b;++e)S[e]=l(e*_,t,i)}
function d(e,n,r){var o,a,s=0;do{a=n+(r-n)/2,o=l(a,t,i)-e,o>0?r=a:n=a}while(Math.abs(o)>v&&++s<y);return a}
function p(e){for(var n=0,r=1,o=b-1;r!==o&&S[r]<=e;++r)n+=_;--r;var a=(e-S[r])/(S[r+1]-S[r]),s=n+a*_,l=u(s,t,i);return l>=g?c(e,s):0===l?s:d(e,n,n+_)}
function h(){E=!0,t===n&&i===r||f()}
var m=4,g=.001,v=1e-7,y=10,b=11,_=1/(b-1),x="Float32Array" in e;if(4!==arguments.length)return!1;for(var w=0;w<4;++w)
if("number"!=typeof arguments[w]||isNaN(arguments[w])||!isFinite(arguments[w]))return!1;t=Math.min(t,1),i=Math.min(i,1),t=Math.max(t,0),i=Math.max(i,0);var S=x?new Float32Array(b):new Array(b),E=!1,C=function(e){return E||h(),t===n&&i===r?e:0===e?0:1===e?1:l(p(e),n,r)};C.getControlPoints=function(){return[{x:t,y:n},{x:i,y:r}]};var T="generateBezier("+[t,n,i,r]+")";return C.toString=function(){return T},C}
function f(t,e){var n=t;return _.isString(t)?E.Easings[t]||(n=!1):n=_.isArray(t)&&1===t.length?u.apply(null,t):_.isArray(t)&&2===t.length?C.apply(null,t.concat([e])):!(!_.isArray(t)||4!==t.length)&&c.apply(null,t),!1===n&&(n=E.Easings[E.defaults.easing]?E.defaults.easing:S),n}
function d(t){if(t){var e=E.timestamp&&!0!==t?t:v.now(),n=E.State.calls.length;n>1e4&&(E.State.calls=r(E.State.calls),n=E.State.calls.length);for(var o=0;o<n;o++)
if(E.State.calls[o]){var s=E.State.calls[o],l=s[0],u=s[2],c=s[3],f=!!c,g=null,y=s[5],b=s[6];if(c||(c=E.State.calls[o][3]=e-16),y){if(!0!==y.resume)continue;c=s[3]=Math.round(e-b-16),s[5]=null}
b=s[6]=e-c;for(var x=Math.min(b/u.duration,1),w=0,S=l.length;w<S;w++){var C=l[w],A=C.element;if(a(A)){var O=!1;if(u.display!==i&&null!==u.display&&"none"!==u.display){if("flex"===u.display){var k=["-webkit-box","-moz-box","-ms-flexbox","-webkit-flex"];h.each(k,function(t,e){T.setPropertyValue(A,"display",e)})}
T.setPropertyValue(A,"display",u.display)}
u.visibility!==i&&"hidden"!==u.visibility&&T.setPropertyValue(A,"visibility",u.visibility);for(var D in C)
if(C.hasOwnProperty(D)&&"element"!==D){var N,P=C[D],L=_.isString(P.easing)?E.Easings[P.easing]:P.easing;if(_.isString(P.pattern)){var j=1===x?function(t,e,n){var i=P.endValue[e];return n?Math.round(i):i}:function(t,e,n){var i=P.startValue[e],r=P.endValue[e]-i,o=i+r*L(x,u,r);return n?Math.round(o):o};N=P.pattern.replace(/{(\d+)(!)?}/g,j)}else if(1===x)N=P.endValue;else{var B=P.endValue-P.startValue;N=P.startValue+B*L(x,u,B)}
if(!f&&N===P.currentValue)continue;if(P.currentValue=N,"tween"===D)g=N;else{var V;if(T.Hooks.registered[D]){V=T.Hooks.getRoot(D);var F=a(A).rootPropertyValueCache[V];F&&(P.rootPropertyValue=F)}
var R=T.setPropertyValue(A,D,P.currentValue+(m<9&&0===parseFloat(N)?"":P.unitType),P.rootPropertyValue,P.scrollData);T.Hooks.registered[D]&&(T.Normalizations.registered[V]?a(A).rootPropertyValueCache[V]=T.Normalizations.registered[V]("extract",null,R[1]):a(A).rootPropertyValueCache[V]=R[1]),"transform"===R[0]&&(O=!0)}}
u.mobileHA&&a(A).transformCache.translate3d===i&&(a(A).transformCache.translate3d="(0px, 0px, 0px)",O=!0),O&&T.flushTransformCache(A)}}
u.display!==i&&"none"!==u.display&&(E.State.calls[o][2].display=!1),u.visibility!==i&&"hidden"!==u.visibility&&(E.State.calls[o][2].visibility=!1),u.progress&&u.progress.call(s[1],s[1],x,Math.max(0,c+u.duration-e),c,g),1===x&&p(o)}}
E.State.isTicking&&I(d)}
function p(t,e){if(!E.State.calls[t])return!1;for(var n=E.State.calls[t][0],r=E.State.calls[t][1],o=E.State.calls[t][2],s=E.State.calls[t][4],l=!1,u=0,c=n.length;u<c;u++){var f=n[u].element;e||o.loop||("none"===o.display&&T.setPropertyValue(f,"display",o.display),"hidden"===o.visibility&&T.setPropertyValue(f,"visibility",o.visibility));var d=a(f);if(!0!==o.loop&&(h.queue(f)[1]===i||!/\.velocityQueueEntryFlag/i.test(h.queue(f)[1]))&&d){d.isAnimating=!1,d.rootPropertyValueCache={};var p=!1;h.each(T.Lists.transforms3D,function(t,e){var n=/^scale/.test(e)?1:0,r=d.transformCache[e];d.transformCache[e]!==i&&new RegExp("^\\("+n+"[^.]").test(r)&&(p=!0,delete d.transformCache[e])}),o.mobileHA&&(p=!0,delete d.transformCache.translate3d),p&&T.flushTransformCache(f),T.Values.removeClass(f,"velocity-animating")}
if(!e&&o.complete&&!o.loop&&u===c-1)try{o.complete.call(r,r)}catch(t){setTimeout(function(){throw t},1)}
s&&!0!==o.loop&&s(r),d&&!0===o.loop&&!e&&(h.each(d.tweensContainer,function(t,e){if(/^rotate/.test(t)&&(parseFloat(e.startValue)-parseFloat(e.endValue))%360==0){var n=e.startValue;e.startValue=e.endValue,e.endValue=n}
/^backgroundPosition/.test(t)&&100===parseFloat(e.endValue)&&"%"===e.unitType&&(e.endValue=0,e.startValue=100)}),E(f,"reverse",{loop:!0,delay:o.delay})),!1!==o.queue&&h.dequeue(f,o.queue)}
E.State.calls[t]=!1;for(var m=0,g=E.State.calls.length;m<g;m++)
if(!1!==E.State.calls[m]){l=!0;break}!1===l&&(E.State.isTicking=!1,delete E.State.calls,E.State.calls=[])}
var h,m=function(){if(n.documentMode)return n.documentMode;for(var t=7;t>4;t--){var e=n.createElement("div");if(e.innerHTML="\x3c!--[if IE "+t+"]><span></span><![endif]--\x3e",e.getElementsByTagName("span").length)return e=null,t}
return i}(),g=function(){var t=0;return e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||function(e){var n,i=(new Date).getTime();return n=Math.max(0,16-(i-t)),t=i+n,setTimeout(function(){e(i+n)},n)}}(),v=function(){var t=e.performance||{};if("function"!=typeof t.now){var n=t.timing&&t.timing.navigationStart?t.timing.navigationStart:(new Date).getTime();t.now=function(){return(new Date).getTime()-n}}
return t}(),y=function(){var t=Array.prototype.slice;try{return t.call(n.documentElement),t}catch(e){return function(e,n){var i=this.length;if("number"!=typeof e&&(e=0),"number"!=typeof n&&(n=i),this.slice)return t.call(this,e,n);var r,o=[],a=e>=0?e:Math.max(0,i+e),s=n<0?i+n:Math.min(n,i),l=s-a;if(l>0)
if(o=new Array(l),this.charAt)
for(r=0;r<l;r++)o[r]=this.charAt(a+r);else for(r=0;r<l;r++)o[r]=this[a+r];return o}}}(),b=function(){return Array.prototype.includes?function(t,e){return t.includes(e)}:Array.prototype.indexOf?function(t,e){return t.indexOf(e)>=0}:function(t,e){for(var n=0;n<t.length;n++)
if(t[n]===e)return!0;return!1}},_={isNumber:function(t){return"number"==typeof t},isString:function(t){return"string"==typeof t},isArray:Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)},isFunction:function(t){return"[object Function]"===Object.prototype.toString.call(t)},isNode:function(t){return t&&t.nodeType},isWrapped:function(t){return t&&t!==e&&_.isNumber(t.length)&&!_.isString(t)&&!_.isFunction(t)&&!_.isNode(t)&&(0===t.length||_.isNode(t[0]))},isSVG:function(t){return e.SVGElement&&t instanceof e.SVGElement},isEmptyObject:function(t){for(var e in t)
if(t.hasOwnProperty(e))return!1;return!0}},x=!1;if(t.fn&&t.fn.jquery?(h=t,x=!0):h=e.Velocity.Utilities,m<=8&&!x)throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");if(m<=7)return void(jQuery.fn.velocity=jQuery.fn.animate);var w=400,S="swing",E={State:{isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),isAndroid:/Android/i.test(navigator.userAgent),isGingerbread:/Android 2\.3\.[3-7]/i.test(navigator.userAgent),isChrome:e.chrome,isFirefox:/Firefox/i.test(navigator.userAgent),prefixElement:n.createElement("div"),prefixMatches:{},scrollAnchor:null,scrollPropertyLeft:null,scrollPropertyTop:null,isTicking:!1,calls:[],delayedElements:{count:0}},CSS:{},Utilities:h,Redirects:{},Easings:{},Promise:e.Promise,defaults:{queue:"",duration:w,easing:S,begin:i,complete:i,progress:i,display:i,visibility:i,loop:!1,delay:!1,mobileHA:!0,_cacheValues:!0,promiseRejectEmpty:!0},init:function(t){h.data(t,"velocity",{isSVG:_.isSVG(t),isAnimating:!1,computedStyle:null,tweensContainer:null,rootPropertyValueCache:{},transformCache:{}})},hook:null,mock:!1,version:{major:1,minor:5,patch:0},debug:!1,timestamp:!0,pauseAll:function(t){var e=(new Date).getTime();h.each(E.State.calls,function(e,n){if(n){if(t!==i&&(n[2].queue!==t||!1===n[2].queue))return!0;n[5]={resume:!1}}}),h.each(E.State.delayedElements,function(t,n){n&&s(n,e)})},resumeAll:function(t){var e=(new Date).getTime();h.each(E.State.calls,function(e,n){if(n){if(t!==i&&(n[2].queue!==t||!1===n[2].queue))return!0;n[5]&&(n[5].resume=!0)}}),h.each(E.State.delayedElements,function(t,n){n&&l(n,e)})}};e.pageYOffset!==i?(E.State.scrollAnchor=e,E.State.scrollPropertyLeft="pageXOffset",E.State.scrollPropertyTop="pageYOffset"):(E.State.scrollAnchor=n.documentElement||n.body.parentNode||n.body,E.State.scrollPropertyLeft="scrollLeft",E.State.scrollPropertyTop="scrollTop");var C=function(){function t(t){return-t.tension*t.x-t.friction*t.v}
function e(e,n,i){var r={x:e.x+i.dx*n,v:e.v+i.dv*n,tension:e.tension,friction:e.friction};return{dx:r.v,dv:t(r)}}
function n(n,i){var r={dx:n.v,dv:t(n)},o=e(n,.5*i,r),a=e(n,.5*i,o),s=e(n,i,a),l=1/6*(r.dx+2*(o.dx+a.dx)+s.dx),u=1/6*(r.dv+2*(o.dv+a.dv)+s.dv);return n.x=n.x+l*i,n.v=n.v+u*i,n}
return function t(e,i,r){var o,a,s,l={x:-1,v:0,tension:null,friction:null},u=[0],c=0;for(e=parseFloat(e)||500,i=parseFloat(i)||20,r=r||null,l.tension=e,l.friction=i,o=null!==r,o?(c=t(e,i),a=c/r*.016):a=.016;;)
if(s=n(s||l,a),u.push(1+s.x),c+=16,!(Math.abs(s.x)>1e-4&&Math.abs(s.v)>1e-4))break;return o?function(t){return u[t*(u.length-1)|0]}:c}}();E.Easings={linear:function(t){return t},swing:function(t){return.5-Math.cos(t*Math.PI)/2},spring:function(t){return 1-Math.cos(4.5*t*Math.PI)*Math.exp(6*-t)}},h.each([["ease",[.25,.1,.25,1]],["ease-in",[.42,0,1,1]],["ease-out",[0,0,.58,1]],["ease-in-out",[.42,0,.58,1]],["easeInSine",[.47,0,.745,.715]],["easeOutSine",[.39,.575,.565,1]],["easeInOutSine",[.445,.05,.55,.95]],["easeInQuad",[.55,.085,.68,.53]],["easeOutQuad",[.25,.46,.45,.94]],["easeInOutQuad",[.455,.03,.515,.955]],["easeInCubic",[.55,.055,.675,.19]],["easeOutCubic",[.215,.61,.355,1]],["easeInOutCubic",[.645,.045,.355,1]],["easeInQuart",[.895,.03,.685,.22]],["easeOutQuart",[.165,.84,.44,1]],["easeInOutQuart",[.77,0,.175,1]],["easeInQuint",[.755,.05,.855,.06]],["easeOutQuint",[.23,1,.32,1]],["easeInOutQuint",[.86,0,.07,1]],["easeInExpo",[.95,.05,.795,.035]],["easeOutExpo",[.19,1,.22,1]],["easeInOutExpo",[1,0,0,1]],["easeInCirc",[.6,.04,.98,.335]],["easeOutCirc",[.075,.82,.165,1]],["easeInOutCirc",[.785,.135,.15,.86]]],function(t,e){E.Easings[e[0]]=c.apply(null,e[1])});var T=E.CSS={RegEx:{isHex:/^#([A-f\d]{3}){1,2}$/i,valueUnwrap:/^[A-z]+\((.*)\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,valueSplit:/([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi},Lists:{colors:["fill","stroke","stopColor","color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","outlineColor"],transformsBase:["translateX","translateY","scale","scaleX","scaleY","skewX","skewY","rotateZ"],transforms3D:["transformPerspective","translateZ","scaleZ","rotateX","rotateY"],units:["%","em","ex","ch","rem","vw","vh","vmin","vmax","cm","mm","Q","in","pc","pt","px","deg","grad","rad","turn","s","ms"],colorNames:{aliceblue:"240,248,255",antiquewhite:"250,235,215",aquamarine:"127,255,212",aqua:"0,255,255",azure:"240,255,255",beige:"245,245,220",bisque:"255,228,196",black:"0,0,0",blanchedalmond:"255,235,205",blueviolet:"138,43,226",blue:"0,0,255",brown:"165,42,42",burlywood:"222,184,135",cadetblue:"95,158,160",chartreuse:"127,255,0",chocolate:"210,105,30",coral:"255,127,80",cornflowerblue:"100,149,237",cornsilk:"255,248,220",crimson:"220,20,60",cyan:"0,255,255",darkblue:"0,0,139",darkcyan:"0,139,139",darkgoldenrod:"184,134,11",darkgray:"169,169,169",darkgrey:"169,169,169",darkgreen:"0,100,0",darkkhaki:"189,183,107",darkmagenta:"139,0,139",darkolivegreen:"85,107,47",darkorange:"255,140,0",darkorchid:"153,50,204",darkred:"139,0,0",darksalmon:"233,150,122",darkseagreen:"143,188,143",darkslateblue:"72,61,139",darkslategray:"47,79,79",darkturquoise:"0,206,209",darkviolet:"148,0,211",deeppink:"255,20,147",deepskyblue:"0,191,255",dimgray:"105,105,105",dimgrey:"105,105,105",dodgerblue:"30,144,255",firebrick:"178,34,34",floralwhite:"255,250,240",forestgreen:"34,139,34",fuchsia:"255,0,255",gainsboro:"220,220,220",ghostwhite:"248,248,255",gold:"255,215,0",goldenrod:"218,165,32",gray:"128,128,128",grey:"128,128,128",greenyellow:"173,255,47",green:"0,128,0",honeydew:"240,255,240",hotpink:"255,105,180",indianred:"205,92,92",indigo:"75,0,130",ivory:"255,255,240",khaki:"240,230,140",lavenderblush:"255,240,245",lavender:"230,230,250",lawngreen:"124,252,0",lemonchiffon:"255,250,205",lightblue:"173,216,230",lightcoral:"240,128,128",lightcyan:"224,255,255",lightgoldenrodyellow:"250,250,210",lightgray:"211,211,211",lightgrey:"211,211,211",lightgreen:"144,238,144",lightpink:"255,182,193",lightsalmon:"255,160,122",lightseagreen:"32,178,170",lightskyblue:"135,206,250",lightslategray:"119,136,153",lightsteelblue:"176,196,222",lightyellow:"255,255,224",limegreen:"50,205,50",lime:"0,255,0",linen:"250,240,230",magenta:"255,0,255",maroon:"128,0,0",mediumaquamarine:"102,205,170",mediumblue:"0,0,205",mediumorchid:"186,85,211",mediumpurple:"147,112,219",mediumseagreen:"60,179,113",mediumslateblue:"123,104,238",mediumspringgreen:"0,250,154",mediumturquoise:"72,209,204",mediumvioletred:"199,21,133",midnightblue:"25,25,112",mintcream:"245,255,250",mistyrose:"255,228,225",moccasin:"255,228,181",navajowhite:"255,222,173",navy:"0,0,128",oldlace:"253,245,230",olivedrab:"107,142,35",olive:"128,128,0",orangered:"255,69,0",orange:"255,165,0",orchid:"218,112,214",palegoldenrod:"238,232,170",palegreen:"152,251,152",paleturquoise:"175,238,238",palevioletred:"219,112,147",papayawhip:"255,239,213",peachpuff:"255,218,185",peru:"205,133,63",pink:"255,192,203",plum:"221,160,221",powderblue:"176,224,230",purple:"128,0,128",red:"255,0,0",rosybrown:"188,143,143",royalblue:"65,105,225",saddlebrown:"139,69,19",salmon:"250,128,114",sandybrown:"244,164,96",seagreen:"46,139,87",seashell:"255,245,238",sienna:"160,82,45",silver:"192,192,192",skyblue:"135,206,235",slateblue:"106,90,205",slategray:"112,128,144",snow:"255,250,250",springgreen:"0,255,127",steelblue:"70,130,180",tan:"210,180,140",teal:"0,128,128",thistle:"216,191,216",tomato:"255,99,71",turquoise:"64,224,208",violet:"238,130,238",wheat:"245,222,179",whitesmoke:"245,245,245",white:"255,255,255",yellowgreen:"154,205,50",yellow:"255,255,0"}},Hooks:{templates:{textShadow:["Color X Y Blur","black 0px 0px 0px"],boxShadow:["Color X Y Blur Spread","black 0px 0px 0px 0px"],clip:["Top Right Bottom Left","0px 0px 0px 0px"],backgroundPosition:["X Y","0% 0%"],transformOrigin:["X Y Z","50% 50% 0px"],perspectiveOrigin:["X Y","50% 50%"]},registered:{},register:function(){for(var t=0;t<T.Lists.colors.length;t++){var e="color"===T.Lists.colors[t]?"0 0 0 1":"255 255 255 1";T.Hooks.templates[T.Lists.colors[t]]=["Red Green Blue Alpha",e]}
var n,i,r;if(m)
for(n in T.Hooks.templates)
if(T.Hooks.templates.hasOwnProperty(n)){i=T.Hooks.templates[n],r=i[0].split(" ");var o=i[1].match(T.RegEx.valueSplit);"Color"===r[0]&&(r.push(r.shift()),o.push(o.shift()),T.Hooks.templates[n]=[r.join(" "),o.join(" ")])}
for(n in T.Hooks.templates)
if(T.Hooks.templates.hasOwnProperty(n)){i=T.Hooks.templates[n],r=i[0].split(" ");for(var a in r)
if(r.hasOwnProperty(a)){var s=n+r[a],l=a;T.Hooks.registered[s]=[n,l]}}},getRoot:function(t){var e=T.Hooks.registered[t];return e?e[0]:t},getUnit:function(t,e){var n=(t.substr(e||0,5).match(/^[a-z%]+/)||[])[0]||"";return n&&b(T.Lists.units,n)?n:""},fixColors:function(t){return t.replace(/(rgba?\(\s*)?(\b[a-z]+\b)/g,function(t,e,n){return T.Lists.colorNames.hasOwnProperty(n)?(e||"rgba(")+T.Lists.colorNames[n]+(e?"":",1)"):e+n})},cleanRootPropertyValue:function(t,e){return T.RegEx.valueUnwrap.test(e)&&(e=e.match(T.RegEx.valueUnwrap)[1]),T.Values.isCSSNullValue(e)&&(e=T.Hooks.templates[t][1]),e},extractValue:function(t,e){var n=T.Hooks.registered[t];if(n){var i=n[0],r=n[1];return e=T.Hooks.cleanRootPropertyValue(i,e),e.toString().match(T.RegEx.valueSplit)[r]}
return e},injectValue:function(t,e,n){var i=T.Hooks.registered[t];if(i){var r,o=i[0],a=i[1];return n=T.Hooks.cleanRootPropertyValue(o,n),r=n.toString().match(T.RegEx.valueSplit),r[a]=e,r.join(" ")}
return n}},Normalizations:{registered:{clip:function(t,e,n){switch(t){case "name":return"clip";case "extract":var i;return T.RegEx.wrappedValueAlreadyExtracted.test(n)?i=n:(i=n.toString().match(T.RegEx.valueUnwrap),i=i?i[1].replace(/,(\s+)?/g," "):n),i;case "inject":return"rect("+n+")"}},blur:function(t,e,n){switch(t){case "name":return E.State.isFirefox?"filter":"-webkit-filter";case "extract":var i=parseFloat(n);if(!i&&0!==i){var r=n.toString().match(/blur\(([0-9]+[A-z]+)\)/i);i=r?r[1]:0}
return i;case "inject":return parseFloat(n)?"blur("+n+")":"none"}},opacity:function(t,e,n){if(m<=8)switch(t){case "name":return"filter";case "extract":var i=n.toString().match(/alpha\(opacity=(.*)\)/i);return n=i?i[1]/100:1;case "inject":return e.style.zoom=1,parseFloat(n)>=1?"":"alpha(opacity="+parseInt(100*parseFloat(n),10)+")"}else switch(t){case "name":return"opacity";case "extract":case "inject":return n}}},register:function(){function t(t,e,n){if("border-box"===T.getPropertyValue(e,"boxSizing").toString().toLowerCase()===(n||!1)){var i,r,o=0,a="width"===t?["Left","Right"]:["Top","Bottom"],s=["padding"+a[0],"padding"+a[1],"border"+a[0]+"Width","border"+a[1]+"Width"];for(i=0;i<s.length;i++)r=parseFloat(T.getPropertyValue(e,s[i])),isNaN(r)||(o+=r);return n?-o:o}
return 0}
function e(e,n){return function(i,r,o){switch(i){case "name":return e;case "extract":return parseFloat(o)+t(e,r,n);case "inject":return parseFloat(o)-t(e,r,n)+"px"}}}
m&&!(m>9)||E.State.isGingerbread||(T.Lists.transformsBase=T.Lists.transformsBase.concat(T.Lists.transforms3D));for(var n=0;n<T.Lists.transformsBase.length;n++)!function(){var t=T.Lists.transformsBase[n];T.Normalizations.registered[t]=function(e,n,r){switch(e){case "name":return"transform";case "extract":return a(n)===i||a(n).transformCache[t]===i?/^scale/i.test(t)?1:0:a(n).transformCache[t].replace(/[()]/g,"");case "inject":var o=!1;switch(t.substr(0,t.length-1)){case "translate":o=!/(%|px|em|rem|vw|vh|\d)$/i.test(r);break;case "scal":case "scale":E.State.isAndroid&&a(n).transformCache[t]===i&&r<1&&(r=1),o=!/(\d)$/i.test(r);break;case "skew":case "rotate":o=!/(deg|\d)$/i.test(r)}
return o||(a(n).transformCache[t]="("+r+")"),a(n).transformCache[t]}}}();for(var r=0;r<T.Lists.colors.length;r++)!function(){var t=T.Lists.colors[r];T.Normalizations.registered[t]=function(e,n,r){switch(e){case "name":return t;case "extract":var o;if(T.RegEx.wrappedValueAlreadyExtracted.test(r))o=r;else{var a,s={black:"rgb(0, 0, 0)",blue:"rgb(0, 0, 255)",gray:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",red:"rgb(255, 0, 0)",white:"rgb(255, 255, 255)"};/^[A-z]+$/i.test(r)?a=s[r]!==i?s[r]:s.black:T.RegEx.isHex.test(r)?a="rgb("+T.Values.hexToRgb(r).join(" ")+")":/^rgba?\(/i.test(r)||(a=s.black),o=(a||r).toString().match(T.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g," ")}
return(!m||m>8)&&3===o.split(" ").length&&(o+=" 1"),o;case "inject":return/^rgb/.test(r)?r:(m<=8?4===r.split(" ").length&&(r=r.split(/\s+/).slice(0,3).join(" ")):3===r.split(" ").length&&(r+=" 1"),(m<=8?"rgb":"rgba")+"("+r.replace(/\s+/g,",").replace(/\.(\d)+(?=,)/g,"")+")")}}}();T.Normalizations.registered.innerWidth=e("width",!0),T.Normalizations.registered.innerHeight=e("height",!0),T.Normalizations.registered.outerWidth=e("width"),T.Normalizations.registered.outerHeight=e("height")}},Names:{camelCase:function(t){return t.replace(/-(\w)/g,function(t,e){return e.toUpperCase()})},SVGAttribute:function(t){var e="width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";return(m||E.State.isAndroid&&!E.State.isChrome)&&(e+="|transform"),new RegExp("^("+e+")$","i").test(t)},prefixCheck:function(t){if(E.State.prefixMatches[t])return[E.State.prefixMatches[t],!0];for(var e=["","Webkit","Moz","ms","O"],n=0,i=e.length;n<i;n++){var r;if(r=0===n?t:e[n]+t.replace(/^\w/,function(t){return t.toUpperCase()}),_.isString(E.State.prefixElement.style[r]))return E.State.prefixMatches[t]=r,[r,!0]}
return[t,!1]}},Values:{hexToRgb:function(t){var e,n=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,i=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;return t=t.replace(n,function(t,e,n,i){return e+e+n+n+i+i}),e=i.exec(t),e?[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]:[0,0,0]},isCSSNullValue:function(t){return!t||/^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(t)},getUnitType:function(t){return/^(rotate|skew)/i.test(t)?"deg":/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(t)?"":"px"},getDisplayType:function(t){var e=t&&t.tagName.toString().toLowerCase();return/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(e)?"inline":/^(li)$/i.test(e)?"list-item":/^(tr)$/i.test(e)?"table-row":/^(table)$/i.test(e)?"table":/^(tbody)$/i.test(e)?"table-row-group":"block"},addClass:function(t,e){if(t)
if(t.classList)t.classList.add(e);else if(_.isString(t.className))t.className+=(t.className.length?" ":"")+e;else{var n=t.getAttribute(m<=7?"className":"class")||"";t.setAttribute("class",n+(n?" ":"")+e)}},removeClass:function(t,e){if(t)
if(t.classList)t.classList.remove(e);else if(_.isString(t.className))t.className=t.className.toString().replace(new RegExp("(^|\\s)"+e.split(" ").join("|")+"(\\s|$)","gi")," ");else{var n=t.getAttribute(m<=7?"className":"class")||"";t.setAttribute("class",n.replace(new RegExp("(^|s)"+e.split(" ").join("|")+"(s|$)","gi")," "))}}},getPropertyValue:function(t,n,r,o){function s(t,n){var r=0;if(m<=8)r=h.css(t,n);else{var l=!1;/^(width|height)$/.test(n)&&0===T.getPropertyValue(t,"display")&&(l=!0,T.setPropertyValue(t,"display",T.Values.getDisplayType(t)));var u=function(){l&&T.setPropertyValue(t,"display","none")};if(!o){if("height"===n&&"border-box"!==T.getPropertyValue(t,"boxSizing").toString().toLowerCase()){var c=t.offsetHeight-(parseFloat(T.getPropertyValue(t,"borderTopWidth"))||0)-(parseFloat(T.getPropertyValue(t,"borderBottomWidth"))||0)-(parseFloat(T.getPropertyValue(t,"paddingTop"))||0)-(parseFloat(T.getPropertyValue(t,"paddingBottom"))||0);return u(),c}
if("width"===n&&"border-box"!==T.getPropertyValue(t,"boxSizing").toString().toLowerCase()){var f=t.offsetWidth-(parseFloat(T.getPropertyValue(t,"borderLeftWidth"))||0)-(parseFloat(T.getPropertyValue(t,"borderRightWidth"))||0)-(parseFloat(T.getPropertyValue(t,"paddingLeft"))||0)-(parseFloat(T.getPropertyValue(t,"paddingRight"))||0);return u(),f}}
var d;d=a(t)===i?e.getComputedStyle(t,null):a(t).computedStyle?a(t).computedStyle:a(t).computedStyle=e.getComputedStyle(t,null),"borderColor"===n&&(n="borderTopColor"),r=9===m&&"filter"===n?d.getPropertyValue(n):d[n],""!==r&&null!==r||(r=t.style[n]),u()}
if("auto"===r&&/^(top|right|bottom|left)$/i.test(n)){var p=s(t,"position");("fixed"===p||"absolute"===p&&/top|left/i.test(n))&&(r=h(t).position()[n]+"px")}
return r}
var l;if(T.Hooks.registered[n]){var u=n,c=T.Hooks.getRoot(u);r===i&&(r=T.getPropertyValue(t,T.Names.prefixCheck(c)[0])),T.Normalizations.registered[c]&&(r=T.Normalizations.registered[c]("extract",t,r)),l=T.Hooks.extractValue(u,r)}else if(T.Normalizations.registered[n]){var f,d;f=T.Normalizations.registered[n]("name",t),"transform"!==f&&(d=s(t,T.Names.prefixCheck(f)[0]),T.Values.isCSSNullValue(d)&&T.Hooks.templates[n]&&(d=T.Hooks.templates[n][1])),l=T.Normalizations.registered[n]("extract",t,d)}
if(!/^[\d-]/.test(l)){var p=a(t);if(p&&p.isSVG&&T.Names.SVGAttribute(n))
if(/^(height|width)$/i.test(n))try{l=t.getBBox()[n]}catch(t){l=0}else l=t.getAttribute(n);else l=s(t,T.Names.prefixCheck(n)[0])}
return T.Values.isCSSNullValue(l)&&(l=0),E.debug,l},setPropertyValue:function(t,n,i,r,o){var s=n;if("scroll"===n)o.container?o.container["scroll"+o.direction]=i:"Left"===o.direction?e.scrollTo(i,o.alternateValue):e.scrollTo(o.alternateValue,i);else if(T.Normalizations.registered[n]&&"transform"===T.Normalizations.registered[n]("name",t))T.Normalizations.registered[n]("inject",t,i),s="transform",i=a(t).transformCache[n];else{if(T.Hooks.registered[n]){var l=n,u=T.Hooks.getRoot(n);r=r||T.getPropertyValue(t,u),i=T.Hooks.injectValue(l,i,r),n=u}
if(T.Normalizations.registered[n]&&(i=T.Normalizations.registered[n]("inject",t,i),n=T.Normalizations.registered[n]("name",t)),s=T.Names.prefixCheck(n)[0],m<=8)try{t.style[s]=i}catch(t){E.debug}else{var c=a(t);c&&c.isSVG&&T.Names.SVGAttribute(n)?t.setAttribute(n,i):t.style[s]=i}
E.debug}
return[s,i]},flushTransformCache:function(t){var e="",n=a(t);if((m||E.State.isAndroid&&!E.State.isChrome)&&n&&n.isSVG){var i=function(e){return parseFloat(T.getPropertyValue(t,e))},r={translate:[i("translateX"),i("translateY")],skewX:[i("skewX")],skewY:[i("skewY")],scale:1!==i("scale")?[i("scale"),i("scale")]:[i("scaleX"),i("scaleY")],rotate:[i("rotateZ"),0,0]};h.each(a(t).transformCache,function(t){/^translate/i.test(t)?t="translate":/^scale/i.test(t)?t="scale":/^rotate/i.test(t)&&(t="rotate"),r[t]&&(e+=t+"("+r[t].join(" ")+") ",delete r[t])})}else{var o,s;h.each(a(t).transformCache,function(n){if(o=a(t).transformCache[n],"transformPerspective"===n)return s=o,!0;9===m&&"rotateZ"===n&&(n="rotate"),e+=n+o+" "}),s&&(e="perspective"+s+" "+e)}
T.setPropertyValue(t,"transform",e)}};T.Hooks.register(),T.Normalizations.register(),E.hook=function(t,e,n){var r;return t=o(t),h.each(t,function(t,o){if(a(o)===i&&E.init(o),n===i)r===i&&(r=T.getPropertyValue(o,e));else{var s=T.setPropertyValue(o,e,n);"transform"===s[0]&&E.CSS.flushTransformCache(o),r=s}}),r};var A=function t(){function r(){return m?A.promise||null:g}
function u(t,r){function o(o){var c,p;if(l.begin&&0===O)try{l.begin.call(y,y)}catch(t){setTimeout(function(){throw t},1)}
if("scroll"===N){var m,g,v,w=/^x$/i.test(l.axis)?"Left":"Top",C=parseFloat(l.offset)||0;l.container?_.isWrapped(l.container)||_.isNode(l.container)?(l.container=l.container[0]||l.container,m=l.container["scroll"+w],v=m+h(t).position()[w.toLowerCase()]+C):l.container=null:(m=E.State.scrollAnchor[E.State["scrollProperty"+w]],g=E.State.scrollAnchor[E.State["scrollProperty"+("Left"===w?"Top":"Left")]],v=h(t).offset()[w.toLowerCase()]+C),u={scroll:{rootPropertyValue:!1,startValue:m,currentValue:m,endValue:v,unitType:"",easing:l.easing,scrollData:{container:l.container,direction:w,alternateValue:g}},element:t},E.debug}else if("reverse"===N){if(!(c=a(t)))return;if(!c.tweensContainer)return void h.dequeue(t,l.queue);"none"===c.opts.display&&(c.opts.display="auto"),"hidden"===c.opts.visibility&&(c.opts.visibility="visible"),c.opts.loop=!1,c.opts.begin=null,c.opts.complete=null,S.easing||delete l.easing,S.duration||delete l.duration,l=h.extend({},c.opts,l),p=h.extend(!0,{},c?c.tweensContainer:null);for(var k in p)
if(p.hasOwnProperty(k)&&"element"!==k){var D=p[k].startValue;p[k].startValue=p[k].currentValue=p[k].endValue,p[k].endValue=D,_.isEmptyObject(S)||(p[k].easing=l.easing),E.debug}
u=p}else if("start"===N){c=a(t),c&&c.tweensContainer&&!0===c.isAnimating&&(p=c.tweensContainer);var P=function(r,o){var a,f=T.Hooks.getRoot(r),d=!1,m=o[0],g=o[1],v=o[2];if(!(c&&c.isSVG||"tween"===f||!1!==T.Names.prefixCheck(f)[1]||T.Normalizations.registered[f]!==i))return void E.debug;(l.display!==i&&null!==l.display&&"none"!==l.display||l.visibility!==i&&"hidden"!==l.visibility)&&/opacity|filter/.test(r)&&!v&&0!==m&&(v=0),l._cacheValues&&p&&p[r]?(v===i&&(v=p[r].endValue+p[r].unitType),d=c.rootPropertyValueCache[f]):T.Hooks.registered[r]?v===i?(d=T.getPropertyValue(t,f),v=T.getPropertyValue(t,r,d)):d=T.Hooks.templates[f][1]:v===i&&(v=T.getPropertyValue(t,r));var y,b,x,w=!1,S=function(t,e){var n,i;return i=(e||"0").toString().toLowerCase().replace(/[%A-z]+$/,function(t){return n=t,""}),n||(n=T.Values.getUnitType(t)),[i,n]};if(v!==m&&_.isString(v)&&_.isString(m)){a="";var C=0,A=0,I=[],O=[],k=0,D=0,N=0;for(v=T.Hooks.fixColors(v),m=T.Hooks.fixColors(m);C<v.length&&A<m.length;){var P=v[C],L=m[A];if(/[\d\.-]/.test(P)&&/[\d\.-]/.test(L)){for(var j=P,B=L,V=".",R=".";++C<v.length;){if((P=v[C])===V)V="..";else if(!/\d/.test(P))break;j+=P}
for(;++A<m.length;){if((L=m[A])===R)R="..";else if(!/\d/.test(L))break;B+=L}
var M=T.Hooks.getUnit(v,C),H=T.Hooks.getUnit(m,A);if(C+=M.length,A+=H.length,M===H)j===B?a+=j+M:(a+="{"+I.length+(D?"!":"")+"}"+M,I.push(parseFloat(j)),O.push(parseFloat(B)));else{var W=parseFloat(j),U=parseFloat(B);a+=(k<5?"calc":"")+"("+(W?"{"+I.length+(D?"!":"")+"}":"0")+M+" + "+(U?"{"+(I.length+(W?1:0))+(D?"!":"")+"}":"0")+H+")",W&&(I.push(W),O.push(0)),U&&(I.push(0),O.push(U))}}else{if(P!==L){k=0;break}
a+=P,C++,A++,0===k&&"c"===P||1===k&&"a"===P||2===k&&"l"===P||3===k&&"c"===P||k>=4&&"("===P?k++:(k&&k<5||k>=4&&")"===P&&--k<5)&&(k=0),0===D&&"r"===P||1===D&&"g"===P||2===D&&"b"===P||3===D&&"a"===P||D>=3&&"("===P?(3===D&&"a"===P&&(N=1),D++):N&&","===P?++N>3&&(D=N=0):(N&&D<(N?5:4)||D>=(N?4:3)&&")"===P&&--D<(N?5:4))&&(D=N=0)}}
C===v.length&&A===m.length||(E.debug,a=i),a&&(I.length?(E.debug,v=I,m=O,b=x=""):a=i)}
a||(y=S(r,v),v=y[0],x=y[1],y=S(r,m),m=y[0].replace(/^([+-\/*])=/,function(t,e){return w=e,""}),b=y[1],v=parseFloat(v)||0,m=parseFloat(m)||0,"%"===b&&(/^(fontSize|lineHeight)$/.test(r)?(m/=100,b="em"):/^scale/.test(r)?(m/=100,b=""):/(Red|Green|Blue)$/i.test(r)&&(m=m/100*255,b="")));if(/[\/*]/.test(w))b=x;else if(x!==b&&0!==v)
if(0===m)b=x;else{s=s||function(){var i={myParent:t.parentNode||n.body,position:T.getPropertyValue(t,"position"),fontSize:T.getPropertyValue(t,"fontSize")},r=i.position===F.lastPosition&&i.myParent===F.lastParent,o=i.fontSize===F.lastFontSize;F.lastParent=i.myParent,F.lastPosition=i.position,F.lastFontSize=i.fontSize;var a={};if(o&&r)a.emToPx=F.lastEmToPx,a.percentToPxWidth=F.lastPercentToPxWidth,a.percentToPxHeight=F.lastPercentToPxHeight;else{var s=c&&c.isSVG?n.createElementNS("http://www.w3.org/2000/svg","rect"):n.createElement("div");E.init(s),i.myParent.appendChild(s),h.each(["overflow","overflowX","overflowY"],function(t,e){E.CSS.setPropertyValue(s,e,"hidden")}),E.CSS.setPropertyValue(s,"position",i.position),E.CSS.setPropertyValue(s,"fontSize",i.fontSize),E.CSS.setPropertyValue(s,"boxSizing","content-box"),h.each(["minWidth","maxWidth","width","minHeight","maxHeight","height"],function(t,e){E.CSS.setPropertyValue(s,e,"100%")}),E.CSS.setPropertyValue(s,"paddingLeft","100em"),a.percentToPxWidth=F.lastPercentToPxWidth=(parseFloat(T.getPropertyValue(s,"width",null,!0))||1)/100,a.percentToPxHeight=F.lastPercentToPxHeight=(parseFloat(T.getPropertyValue(s,"height",null,!0))||1)/100,a.emToPx=F.lastEmToPx=(parseFloat(T.getPropertyValue(s,"paddingLeft"))||1)/100,i.myParent.removeChild(s)}
return null===F.remToPx&&(F.remToPx=parseFloat(T.getPropertyValue(n.body,"fontSize"))||16),null===F.vwToPx&&(F.vwToPx=parseFloat(e.innerWidth)/100,F.vhToPx=parseFloat(e.innerHeight)/100),a.remToPx=F.remToPx,a.vwToPx=F.vwToPx,a.vhToPx=F.vhToPx,E.debug,a}();var q=/margin|padding|left|right|width|text|word|letter/i.test(r)||/X$/.test(r)||"x"===r?"x":"y";switch(x){case "%":v*="x"===q?s.percentToPxWidth:s.percentToPxHeight;break;case "px":break;default:v*=s[x+"ToPx"]}
switch(b){case "%":v*=1/("x"===q?s.percentToPxWidth:s.percentToPxHeight);break;case "px":break;default:v*=1/s[b+"ToPx"]}}
switch(w){case "+":m=v+m;break;case "-":m=v-m;break;case "*":m*=v;break;case "/":m=v/m}
u[r]={rootPropertyValue:d,startValue:v,currentValue:v,endValue:m,unitType:b,easing:g},a&&(u[r].pattern=a),E.debug};for(var L in x)
if(x.hasOwnProperty(L)){var j=T.Names.camelCase(L),B=function(e,n){var i,o,a;return _.isFunction(e)&&(e=e.call(t,r,I)),_.isArray(e)?(i=e[0],!_.isArray(e[1])&&/^[\d-]/.test(e[1])||_.isFunction(e[1])||T.RegEx.isHex.test(e[1])?a=e[1]:_.isString(e[1])&&!T.RegEx.isHex.test(e[1])&&E.Easings[e[1]]||_.isArray(e[1])?(o=n?e[1]:f(e[1],l.duration),a=e[2]):a=e[1]||e[2]):i=e,n||(o=o||l.easing),_.isFunction(i)&&(i=i.call(t,r,I)),_.isFunction(a)&&(a=a.call(t,r,I)),[i||0,o,a]}(x[L]);if(b(T.Lists.colors,j)){var V=B[0],M=B[1],H=B[2];if(T.RegEx.isHex.test(V)){for(var W=["Red","Green","Blue"],U=T.Values.hexToRgb(V),q=H?T.Values.hexToRgb(H):i,z=0;z<W.length;z++){var $=[U[z]];M&&$.push(M),q!==i&&$.push(q[z]),P(j+W[z],$)}
continue}}
P(j,B)}
u.element=t}
u.element&&(T.Values.addClass(t,"velocity-animating"),R.push(u),c=a(t),c&&(""===l.queue&&(c.tweensContainer=u,c.opts=l),c.isAnimating=!0),O===I-1?(E.State.calls.push([R,y,l,null,A.resolver,null,0]),!1===E.State.isTicking&&(E.State.isTicking=!0,d())):O++)}
var s,l=h.extend({},E.defaults,S),u={};switch(a(t)===i&&E.init(t),parseFloat(l.delay)&&!1!==l.queue&&h.queue(t,l.queue,function(e){E.velocityQueueEntryFlag=!0;var n=E.State.delayedElements.count++;E.State.delayedElements[n]=t;var i=function(t){return function(){E.State.delayedElements[t]=!1,e()}}(n);a(t).delayBegin=(new Date).getTime(),a(t).delay=parseFloat(l.delay),a(t).delayTimer={setTimeout:setTimeout(e,parseFloat(l.delay)),next:i}}),l.duration.toString().toLowerCase()){case "fast":l.duration=200;break;case "normal":l.duration=w;break;case "slow":l.duration=600;break;default:l.duration=parseFloat(l.duration)||1}
if(!1!==E.mock&&(!0===E.mock?l.duration=l.delay=1:(l.duration*=parseFloat(E.mock)||1,l.delay*=parseFloat(E.mock)||1)),l.easing=f(l.easing,l.duration),l.begin&&!_.isFunction(l.begin)&&(l.begin=null),l.progress&&!_.isFunction(l.progress)&&(l.progress=null),l.complete&&!_.isFunction(l.complete)&&(l.complete=null),l.display!==i&&null!==l.display&&(l.display=l.display.toString().toLowerCase(),"auto"===l.display&&(l.display=E.CSS.Values.getDisplayType(t))),l.visibility!==i&&null!==l.visibility&&(l.visibility=l.visibility.toString().toLowerCase()),l.mobileHA=l.mobileHA&&E.State.isMobile&&!E.State.isGingerbread,!1===l.queue)
if(l.delay){var c=E.State.delayedElements.count++;E.State.delayedElements[c]=t;var p=function(t){return function(){E.State.delayedElements[t]=!1,o()}}(c);a(t).delayBegin=(new Date).getTime(),a(t).delay=parseFloat(l.delay),a(t).delayTimer={setTimeout:setTimeout(o,parseFloat(l.delay)),next:p}}else o();else h.queue(t,l.queue,function(t,e){if(!0===e)return A.promise&&A.resolver(y),!0;E.velocityQueueEntryFlag=!0,o(t)});""!==l.queue&&"fx"!==l.queue||"inprogress"===h.queue(t)[0]||h.dequeue(t)}
var c,m,g,v,y,x,S,C=arguments[0]&&(arguments[0].p||h.isPlainObject(arguments[0].properties)&&!arguments[0].properties.names||_.isString(arguments[0].properties));_.isWrapped(this)?(m=!1,v=0,y=this,g=this):(m=!0,v=1,y=C?arguments[0].elements||arguments[0].e:arguments[0]);var A={promise:null,resolver:null,rejecter:null};if(m&&E.Promise&&(A.promise=new E.Promise(function(t,e){A.resolver=t,A.rejecter=e})),C?(x=arguments[0].properties||arguments[0].p,S=arguments[0].options||arguments[0].o):(x=arguments[v],S=arguments[v+1]),!(y=o(y)))return void(A.promise&&(x&&S&&!1===S.promiseRejectEmpty?A.resolver():A.rejecter()));var I=y.length,O=0;if(!/^(stop|finish|finishAll|pause|resume)$/i.test(x)&&!h.isPlainObject(S)){var k=v+1;S={};for(var D=k;D<arguments.length;D++)_.isArray(arguments[D])||!/^(fast|normal|slow)$/i.test(arguments[D])&&!/^\d/.test(arguments[D])?_.isString(arguments[D])||_.isArray(arguments[D])?S.easing=arguments[D]:_.isFunction(arguments[D])&&(S.complete=arguments[D]):S.duration=arguments[D]}
var N;switch(x){case "scroll":N="scroll";break;case "reverse":N="reverse";break;case "pause":var P=(new Date).getTime();return h.each(y,function(t,e){s(e,P)}),h.each(E.State.calls,function(t,e){var n=!1;e&&h.each(e[1],function(t,r){var o=S===i?"":S;return!0!==o&&e[2].queue!==o&&(S!==i||!1!==e[2].queue)||(h.each(y,function(t,i){if(i===r)return e[5]={resume:!1},n=!0,!1}),!n&&void 0)})}),r();case "resume":return h.each(y,function(t,e){l(e,P)}),h.each(E.State.calls,function(t,e){var n=!1;e&&h.each(e[1],function(t,r){var o=S===i?"":S;return!0!==o&&e[2].queue!==o&&(S!==i||!1!==e[2].queue)||(!e[5]||(h.each(y,function(t,i){if(i===r)return e[5].resume=!0,n=!0,!1}),!n&&void 0))})}),r();case "finish":case "finishAll":case "stop":h.each(y,function(t,e){a(e)&&a(e).delayTimer&&(clearTimeout(a(e).delayTimer.setTimeout),a(e).delayTimer.next&&a(e).delayTimer.next(),delete a(e).delayTimer),"finishAll"!==x||!0!==S&&!_.isString(S)||(h.each(h.queue(e,_.isString(S)?S:""),function(t,e){_.isFunction(e)&&e()}),h.queue(e,_.isString(S)?S:"",[]))});var L=[];return h.each(E.State.calls,function(t,e){e&&h.each(e[1],function(n,r){var o=S===i?"":S;if(!0!==o&&e[2].queue!==o&&(S!==i||!1!==e[2].queue))return!0;h.each(y,function(n,i){if(i===r)
if((!0===S||_.isString(S))&&(h.each(h.queue(i,_.isString(S)?S:""),function(t,e){_.isFunction(e)&&e(null,!0)}),h.queue(i,_.isString(S)?S:"",[])),"stop"===x){var s=a(i);s&&s.tweensContainer&&!1!==o&&h.each(s.tweensContainer,function(t,e){e.endValue=e.currentValue}),L.push(t)}else "finish"!==x&&"finishAll"!==x||(e[2].duration=1)})})}),"stop"===x&&(h.each(L,function(t,e){p(e,!0)}),A.promise&&A.resolver(y)),r();default:if(!h.isPlainObject(x)||_.isEmptyObject(x)){if(_.isString(x)&&E.Redirects[x]){c=h.extend({},S);var j=c.duration,B=c.delay||0;return!0===c.backwards&&(y=h.extend(!0,[],y).reverse()),h.each(y,function(t,e){parseFloat(c.stagger)?c.delay=B+parseFloat(c.stagger)*t:_.isFunction(c.stagger)&&(c.delay=B+c.stagger.call(e,t,I)),c.drag&&(c.duration=parseFloat(j)||(/^(callout|transition)/.test(x)?1e3:w),c.duration=Math.max(c.duration*(c.backwards?1-t/I:(t+1)/I),.75*c.duration,200)),E.Redirects[x].call(e,e,c||{},t,I,y,A.promise?A:i)}),r()}
var V="Velocity: First argument ("+x+") was not a property map, a known action, or a registered redirect. Aborting.";return A.promise?A.rejecter(new Error(V)):e.console,r()}
N="start"}
var F={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPx:null,vwToPx:null,vhToPx:null},R=[];h.each(y,function(t,e){_.isNode(e)&&u(e,t)}),c=h.extend({},E.defaults,S),c.loop=parseInt(c.loop,10);var M=2*c.loop-1;if(c.loop)
for(var H=0;H<M;H++){var W={delay:c.delay,progress:c.progress};H===M-1&&(W.display=c.display,W.visibility=c.visibility,W.complete=c.complete),t(y,"reverse",W)}
return r()};E=h.extend(A,E),E.animate=A;var I=e.requestAnimationFrame||g;if(!E.State.isMobile&&n.hidden!==i){var O=function(){n.hidden?(I=function(t){return setTimeout(function(){t(!0)},16)},d()):I=e.requestAnimationFrame||g};O(),n.addEventListener("visibilitychange",O)}
return t.Velocity=E,t!==e&&(t.fn.velocity=A,t.fn.velocity.defaults=E.defaults),h.each(["Down","Up"],function(t,e){E.Redirects["slide"+e]=function(t,n,r,o,a,s){var l=h.extend({},n),u=l.begin,c=l.complete,f={},d={height:"",marginTop:"",marginBottom:"",paddingTop:"",paddingBottom:""};l.display===i&&(l.display="Down"===e?"inline"===E.CSS.Values.getDisplayType(t)?"inline-block":"block":"none"),l.begin=function(){0===r&&u&&u.call(a,a);for(var n in d)
if(d.hasOwnProperty(n)){f[n]=t.style[n];var i=T.getPropertyValue(t,n);d[n]="Down"===e?[i,0]:[0,i]}
f.overflow=t.style.overflow,t.style.overflow="hidden"},l.complete=function(){for(var e in f)f.hasOwnProperty(e)&&(t.style[e]=f[e]);r===o-1&&(c&&c.call(a,a),s&&s.resolver(a))},E(t,d,l)}}),h.each(["In","Out"],function(t,e){E.Redirects["fade"+e]=function(t,n,r,o,a,s){var l=h.extend({},n),u=l.complete,c={opacity:"In"===e?1:0};0!==r&&(l.begin=null),l.complete=r!==o-1?null:function(){u&&u.call(a,a),s&&s.resolver(a)},l.display===i&&(l.display="In"===e?"auto":"none"),E(this,c,l)}}),E}(window.jQuery||window.Zepto||window,window,window?window.document:void 0)})},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}
n(25),n(20),n(22),n(19),n(18),n(8),n(13),n(16),n(17),n(7);var r=n(2),o=i(r),a=n(10),s=i(a),l=n(3),u=i(l),c=n(11),f=i(c),d=n(12),p=i(d),h=n(1),m=i(h),g=n(21),v=i(g);n(14),n(15),n(9);for(var y in v.default.prototype)m.default[y]=v.default.prototype[y];$(document).ready(function(){var t=$(".js-dropdown"),e=new s.default,n=$('.js-top-menu ul[data-depth="0"]'),i=new o.default(t),r=new p.default(n),a=new u.default,l=new f.default;i.init(),e.init(),r.init(),a.init(),l.init()})},function(t,e){},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}
function r(){a.default.each((0,a.default)(u),function(t,e){(0,a.default)(e).TouchSpin({verticalbuttons:!0,verticalupclass:"material-icons touchspin-up",verticaldownclass:"material-icons touchspin-down",buttondown_class:"btn btn-touchspin js-touchspin js-increase-product-quantity",buttonup_class:"btn btn-touchspin js-touchspin js-decrease-product-quantity",min:parseInt((0,a.default)(e).attr("min"),10),max:1e6})}),p.switchErrorStat()}
var o=n(0),a=i(o),s=n(1),l=i(s);l.default.cart=l.default.cart||{},l.default.cart.active_inputs=null;var u='input[name="product-quantity-spin"]',c=!1,f=!1,d="";(0,a.default)(document).ready(function(){function t(t){return"on.startupspin"===t||"on.startdownspin"===t}
function e(t){return"on.startupspin"===t}
function n(t){var e=t.parents(".bootstrap-touchspin").find(h);return e.is(":focus")?null:e}
function i(t){var e=t.split("-"),n=void 0,i=void 0,r="";for(n=0;n<e.length;n++)i=e[n],0!==n&&(i=i.substring(0,1).toUpperCase()+i.substring(1)),r+=i;return r}
function o(r,o){if(!t(o))return{url:r.attr("href"),type:i(r.data("link-action"))};var a=n(r);if(a){return e(o)?{url:a.data("up-url"),type:"increaseProductQuantity"}:{url:a.data("down-url"),type:"decreaseProductQuantity"}}}
function s(t,e,n){return v(),a.default.ajax({url:t,method:"POST",data:e,dataType:"json",beforeSend:function(t){m.push(t)}}).then(function(t){p.checkUpdateOpertation(t),n.val(t.quantity);var e;e=n&&n.dataset?n.dataset:t,l.default.emit("updateCart",{reason:e})}).fail(function(t){l.default.emit("handleError",{eventType:"updateProductQuantityInCart",resp:t})})}
function c(t){return{ajax:"1",qty:Math.abs(t),action:"update",op:f(t)}}
function f(t){return t>0?"up":"down"}
function d(t){var e=(0,a.default)(t.currentTarget),n=e.data("update-url"),i=e.attr("value"),r=e.val();if(r!=parseInt(r)||r<0||isNaN(r))return void e.val(i);var o=r-i;0!==o&&(e.attr("value",r),s(n,c(o),e))}
var h=".js-cart-line-product-quantity",m=[];l.default.on("updateCart",function(){(0,a.default)(".quickview").modal("hide")}),l.default.on("updatedCart",function(){r()}),r();var g=(0,a.default)("body"),v=function(){for(var t;m.length>0;)t=m.pop(),t.abort()},y=function(t){return(0,a.default)(t.parents(".bootstrap-touchspin").find("input"))},b=function(t){t.preventDefault();var e=(0,a.default)(t.currentTarget),n=t.currentTarget.dataset,i=o(e,t.namespace),r={ajax:"1",action:"update"};void 0!==i&&(v(),a.default.ajax({url:i.url,method:"POST",data:r,dataType:"json",beforeSend:function(t){m.push(t)}}).then(function(t){p.checkUpdateOpertation(t),y(e).val(t.quantity),l.default.emit("updateCart",{reason:n})}).fail(function(t){l.default.emit("handleError",{eventType:"updateProductInCart",resp:t,cartAction:i.type})}))};g.on("click",'[data-link-action="delete-from-cart"], [data-link-action="remove-voucher"]',b),g.on("touchspin.on.startdownspin",u,b),g.on("touchspin.on.startupspin",u,b),g.on("focusout keyup",h,function(t){if("keyup"===t.type)return 13===t.keyCode&&d(t),!1;d(t)}),g.on("click",".js-discount .code",function(t){t.stopPropagation();var e=(0,a.default)(t.currentTarget);return(0,a.default)("[name=discount_name]").val(e.text()),!1})});var p={switchErrorStat:function(){var t=(0,a.default)(".checkout a");if(((0,a.default)("#notifications article.alert-danger").length||""!==d&&!c)&&t.addClass("disabled"),""!==d){var e=' <article class="alert alert-danger" role="alert" data-alert="danger"><ul><li>'+d+"</li></ul></article>";(0,a.default)("#notifications .container").html(e),d="",f=!1,c&&t.removeClass("disabled")}else!c&&f&&(c=!1,f=!1,(0,a.default)("#notifications .container").html(""),t.removeClass("disabled"))},checkUpdateOpertation:function(t){c=t.hasOwnProperty("hasError");var e=t.errors||"";d=e instanceof Array?e.join(" "):e,f=!0}}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}
function r(){0!==(0,a.default)(".js-cancel-address").length&&(0,a.default)(".checkout-step:not(.js-current-step) .step-title").addClass("not-allowed"),(0,a.default)(".js-terms a").on("click",function(t){t.preventDefault();var e=(0,a.default)(t.target).attr("href");e&&(e+="?content_only=1",a.default.get(e,function(t){(0,a.default)("#modal").find(".js-modal-content").html((0,a.default)(t).find(".page-cms").contents())}).fail(function(t){l.default.emit("handleError",{eventType:"clickTerms",resp:t})})),(0,a.default)("#modal").modal("show")}),(0,a.default)(".js-gift-checkbox").on("click",function(t){(0,a.default)("#gift").collapse("toggle")})}
var o=n(0),a=i(o),s=n(1),l=i(s);(0,a.default)(document).ready(function(){1===(0,a.default)("body#checkout").length&&r(),l.default.on("updatedDeliveryForm",function(t){void 0!==t.deliveryOption&&0!==t.deliveryOption.length&&((0,a.default)(".carrier-extra-content").hide(),t.deliveryOption.next(".carrier-extra-content").slideDown())})})},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}
var r=n(1),o=i(r),a=n(0),s=i(a);o.default.blockcart=o.default.blockcart||{},o.default.blockcart.showModal=function(t){function e(){return(0,s.default)("#blockcart-modal")}
var n=e();n.length&&n.remove(),(0,s.default)("body").append(t),n=e(),n.modal("show").on("hidden.bs.modal",function(t){o.default.emit("updateProduct",{reason:t.currentTarget.dataset,event:t})})}},function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}
Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value" in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}
return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),o=n(0),a=function(t){return t&&t.__esModule?t:{default:t}}(o),s=function(){function t(){i(this,t)}
return r(t,[{key:"init",value:function(){this.parentFocus(),this.togglePasswordVisibility()}},{key:"parentFocus",value:function(){(0,a.default)(".js-child-focus").focus(function(){(0,a.default)(this).closest(".js-parent-focus").addClass("focus")}),(0,a.default)(".js-child-focus").focusout(function(){(0,a.default)(this).closest(".js-parent-focus").removeClass("focus")})}},{key:"togglePasswordVisibility",value:function(){(0,a.default)('button[data-action="show-password"]').on("click",function(){var t=(0,a.default)(this).closest(".input-group").children("input.js-visible-password");"password"===t.attr("type")?(t.attr("type","text"),(0,a.default)(this).text((0,a.default)(this).data("textHide"))):(t.attr("type","password"),(0,a.default)(this).text((0,a.default)(this).data("textShow")))})}}]),t}();e.default=s,t.exports=e.default},function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}
Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value" in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}
return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),o=n(0),a=function(t){return t&&t.__esModule?t:{default:t}}(o);n(4);var s=function(){function t(){i(this,t)}
return r(t,[{key:"init",value:function(){var t=this,e=(0,a.default)(".js-modal-arrows"),n=(0,a.default)(".js-modal-product-images"),i=(0,a.default)(".on-sale");(0,a.default)("body").on("click",".js-modal-thumb",function(t){(0,a.default)(".js-modal-thumb").hasClass("selected")&&(0,a.default)(".js-modal-thumb").removeClass("selected"),(0,a.default)(t.currentTarget).addClass("selected"),(0,a.default)(".js-modal-product-cover").attr("src",(0,a.default)(t.target).data("image-large-src")),(0,a.default)(".js-modal-product-cover").attr("title",(0,a.default)(t.target).attr("title")),(0,a.default)(".js-modal-product-cover").attr("alt",(0,a.default)(t.target).attr("alt"))}).on("click","aside#thumbnails",function(t){"thumbnails"==t.target.id&&(0,a.default)("#product-modal").modal("hide")}),i.length&&(0,a.default)("#product").length&&(0,a.default)(".new").css("top",i.height()+10),(0,a.default)(".js-modal-product-images li").length<=5?e.css("opacity",".2"):e.on("click",function(e){(0,a.default)(e.target).hasClass("arrow-up")&&n.position().top<0?(t.move("up"),(0,a.default)(".js-modal-arrow-down").css("opacity","1")):(0,a.default)(e.target).hasClass("arrow-down")&&n.position().top+n.height()>(0,a.default)(".js-modal-mask").height()&&(t.move("down"),(0,a.default)(".js-modal-arrow-up").css("opacity","1"))})}},{key:"move",value:function(t){var e=(0,a.default)(".js-modal-product-images"),n=(0,a.default)(".js-modal-product-images li img").height()+10,i=e.position().top;e.velocity({translateY:"up"===t?i+n:i-n},function(){e.position().top>=0?(0,a.default)(".js-modal-arrow-up").css("opacity",".2"):e.position().top+e.height()<=(0,a.default)(".js-modal-mask").height()&&(0,a.default)(".js-modal-arrow-down").css("opacity",".2")})}}]),t}();e.default=s,t.exports=e.default},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}
function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}
function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}
Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value" in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}
return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),s=function(t,e,n){for(var i=!0;i;){var r=t,o=e,a=n;i=!1,null===r&&(r=Function.prototype);var s=Object.getOwnPropertyDescriptor(r,o);if(void 0!==s){if("value" in s)return s.value;var l=s.get;if(void 0===l)return;return l.call(a)}
var u=Object.getPrototypeOf(r);if(null===u)return;t=u,e=o,n=a,i=!0,s=u=void 0}},l=n(0),u=i(l),c=n(2),f=i(c),d=function(t){function e(){r(this,e),s(Object.getPrototypeOf(e.prototype),"constructor",this).apply(this,arguments)}
return o(e,t),a(e,[{key:"init",value:function(){var t=this,n=void 0,i=this;this.el.find("li").hover(function(e){t.el.parent().hasClass("mobile")||(n!==(0,u.default)(e.currentTarget).attr("id")&&(0===(0,u.default)(e.target).data("depth")&&(0,u.default)("#"+n+" .js-sub-menu").hide(),n=(0,u.default)(e.currentTarget).attr("id")),n&&0===(0,u.default)(e.target).data("depth")&&(0,u.default)("#"+n+" .js-sub-menu").css({top:(0,u.default)("#"+n).height()+(0,u.default)("#"+n).position().top}))}),(0,u.default)("#menu-icon").on("click",function(){(0,u.default)("#mobile_top_menu_wrapper").toggle(),i.toggleMobileMenu()}),(0,u.default)(".js-top-menu .category").mouseleave(function(){t.el.parent().hasClass("mobile")}),this.el.on("click",function(e){t.el.parent().hasClass("mobile")||e.stopPropagation()}),prestashop.on("responsive update",function(t){(0,u.default)(".js-sub-menu").removeAttr("style"),i.toggleMobileMenu()}),s(Object.getPrototypeOf(e.prototype),"init",this).call(this)}},{key:"toggleMobileMenu",value:function(){(0,u.default)("#header").toggleClass("is-open"),(0,u.default)("#mobile_top_menu_wrapper").is(":visible")?(0,u.default)("#notifications, #wrapper, #footer").hide():(0,u.default)("#notifications, #wrapper, #footer").show()}}]),e}(f.default);e.default=d,t.exports=e.default},function(t,e,n){"use strict";function i(){(0,a.default)("#order-return-form table thead input[type=checkbox]").on("click",function(){var t=(0,a.default)(this).prop("checked");(0,a.default)("#order-return-form table tbody input[type=checkbox]").each(function(e,n){(0,a.default)(n).prop("checked",t)})})}
function r(){(0,a.default)("body#order-detail")&&i()}
var o=n(0),a=function(t){return t&&t.__esModule?t:{default:t}}(o);(0,a.default)(document).ready(r)},function(t,e,n){"use strict";!function(t){var e=0,n=function(e,n){this.options=n,this.$elementFilestyle=[],this.$element=t(e)};n.prototype={clear:function(){this.$element.val(""),this.$elementFilestyle.find(":text").val(""),this.$elementFilestyle.find(".badge").remove()},destroy:function(){this.$element.removeAttr("style").removeData("filestyle"),this.$elementFilestyle.remove()},disabled:function(t){if(!0===t)this.options.disabled||(this.$element.attr("disabled","true"),this.$elementFilestyle.find("label").attr("disabled","true"),this.options.disabled=!0);else{if(!1!==t)return this.options.disabled;this.options.disabled&&(this.$element.removeAttr("disabled"),this.$elementFilestyle.find("label").removeAttr("disabled"),this.options.disabled=!1)}},buttonBefore:function(t){if(!0===t)this.options.buttonBefore||(this.options.buttonBefore=!0,this.options.input&&(this.$elementFilestyle.remove(),this.constructor(),this.pushNameFiles()));else{if(!1!==t)return this.options.buttonBefore;this.options.buttonBefore&&(this.options.buttonBefore=!1,this.options.input&&(this.$elementFilestyle.remove(),this.constructor(),this.pushNameFiles()))}},icon:function(t){if(!0===t)this.options.icon||(this.options.icon=!0,this.$elementFilestyle.find("label").prepend(this.htmlIcon()));else{if(!1!==t)return this.options.icon;this.options.icon&&(this.options.icon=!1,this.$elementFilestyle.find(".icon-span-filestyle").remove())}},input:function(t){if(!0===t)this.options.input||(this.options.input=!0,this.options.buttonBefore?this.$elementFilestyle.append(this.htmlInput()):this.$elementFilestyle.prepend(this.htmlInput()),this.$elementFilestyle.find(".badge").remove(),this.pushNameFiles(),this.$elementFilestyle.find(".group-span-filestyle").addClass("input-group-btn"));else{if(!1!==t)return this.options.input;if(this.options.input){this.options.input=!1,this.$elementFilestyle.find(":text").remove();var e=this.pushNameFiles();e.length>0&&this.options.badge&&this.$elementFilestyle.find("label").append(' <span class="badge">'+e.length+"</span>"),this.$elementFilestyle.find(".group-span-filestyle").removeClass("input-group-btn")}}},size:function(t){if(void 0===t)return this.options.size;var e=this.$elementFilestyle.find("label"),n=this.$elementFilestyle.find("input");e.removeClass("btn-lg btn-sm"),n.removeClass("input-lg input-sm"),"nr"!=t&&(e.addClass("btn-"+t),n.addClass("input-"+t))},placeholder:function(t){if(void 0===t)return this.options.placeholder;this.options.placeholder=t,this.$elementFilestyle.find("input").attr("placeholder",t)},buttonText:function(t){if(void 0===t)return this.options.buttonText;this.options.buttonText=t,this.$elementFilestyle.find("label .buttonText").html(this.options.buttonText)},buttonName:function(t){if(void 0===t)return this.options.buttonName;this.options.buttonName=t,this.$elementFilestyle.find("label").attr({class:"btn "+this.options.buttonName})},iconName:function(t){if(void 0===t)return this.options.iconName;this.$elementFilestyle.find(".icon-span-filestyle").attr({class:"icon-span-filestyle "+this.options.iconName})},htmlIcon:function(){return this.options.icon?'<span class="icon-span-filestyle '+this.options.iconName+'"></span> ':""},htmlInput:function(){return this.options.input?'<input type="text" class="form-control '+("nr"==this.options.size?"":"input-"+this.options.size)+'" placeholder="'+this.options.placeholder+'" disabled> ':""},pushNameFiles:function(){var t="",e=[];void 0===this.$element[0].files?e[0]={name:this.$element[0]&&this.$element[0].value}:e=this.$element[0].files;for(var n=0;n<e.length;n++)t+=e[n].name.split("\\").pop()+", ";return""!==t?this.$elementFilestyle.find(":text").val(t.replace(/\, $/g,"")):this.$elementFilestyle.find(":text").val(""),e},constructor:function(){var n=this,i="",r=n.$element.attr("id"),o="";""!==r&&r||(r="filestyle-"+e,n.$element.attr({id:r}),e++),o='<span class="group-span-filestyle '+(n.options.input?"input-group-btn":"")+'"><label for="'+r+'" class="btn '+n.options.buttonName+" "+("nr"==n.options.size?"":"btn-"+n.options.size)+'" '+(n.options.disabled?'disabled="true"':"")+">"+n.htmlIcon()+'<span class="buttonText">'+n.options.buttonText+"</span></label></span>",i=n.options.buttonBefore?o+n.htmlInput():n.htmlInput()+o,n.$elementFilestyle=t('<div class="bootstrap-filestyle input-group">'+i+"</div>"),n.$elementFilestyle.find(".group-span-filestyle").attr("tabindex","0").keypress(function(t){if(13===t.keyCode||32===t.charCode)return n.$elementFilestyle.find("label").click(),!1}),n.$element.css({position:"absolute",clip:"rect(0px 0px 0px 0px)"}).attr("tabindex","-1").after(n.$elementFilestyle),n.options.disabled&&n.$element.attr("disabled","true"),n.$element.change(function(){var t=n.pushNameFiles();0==n.options.input&&n.options.badge?0==n.$elementFilestyle.find(".badge").length?n.$elementFilestyle.find("label").append(' <span class="badge">'+t.length+"</span>"):0==t.length?n.$elementFilestyle.find(".badge").remove():n.$elementFilestyle.find(".badge").html(t.length):n.$elementFilestyle.find(".badge").remove()}),window.navigator.userAgent.search(/firefox/i)>-1&&n.$elementFilestyle.find("label").click(function(){return n.$element.click(),!1})}};var i=t.fn.filestyle;t.fn.filestyle=function(e,i){var r="",o=this.each(function(){if("file"===t(this).attr("type")){var o=t(this),a=o.data("filestyle"),s=t.extend({},t.fn.filestyle.defaults,e,"object"==typeof e&&e);a||(o.data("filestyle",a=new n(this,s)),a.constructor()),"string"==typeof e&&(r=a[e](i))}});return void 0!==typeof r?r:o},t.fn.filestyle.defaults={buttonText:"Choose file",iconName:"glyphicon glyphicon-folder-open",buttonName:"btn-default",size:"nr",input:!0,badge:!0,icon:!0,buttonBefore:!1,disabled:!1,placeholder:""},t.fn.filestyle.noConflict=function(){return t.fn.filestyle=i,this},t(function(){t(".filestyle").each(function(){var e=t(this),n={input:"false"!==e.attr("data-input"),icon:"false"!==e.attr("data-icon"),buttonBefore:"true"===e.attr("data-buttonBefore"),disabled:"true"===e.attr("data-disabled"),size:e.attr("data-size"),buttonText:e.attr("data-buttonText"),buttonName:e.attr("data-buttonName"),iconName:e.attr("data-iconName"),badge:"false"!==e.attr("data-badge"),placeholder:e.attr("data-placeholder")};e.filestyle(n)})})}(window.jQuery)},function(t,e,n){"use strict";!function(t){t.fn.scrollbox=function(e){var n={linear:!1,startDelay:2,delay:3,step:5,speed:32,switchItems:1,direction:"vertical",distance:"auto",autoPlay:!0,onMouseOverPause:!0,paused:!1,queue:null,listElement:"ul",listItemElement:"li",infiniteLoop:!0,switchAmount:0,afterForward:null,afterBackward:null,triggerStackable:!1};return e=t.extend(n,e),e.scrollOffset="vertical"===e.direction?"scrollTop":"scrollLeft",e.queue&&(e.queue=t("#"+e.queue)),this.each(function(){var n,i,r,o,a,s,l,u,c,f=t(this),d=null,p=null,h=!1,m=0,g=0;e.onMouseOverPause&&(f.bind("mouseover",function(){h=!0}),f.bind("mouseout",function(){h=!1})),n=f.children(e.listElement+":first-child"),!1===e.infiniteLoop&&0===e.switchAmount&&(e.switchAmount=n.children().length),s=function(){if(!h){var r,a,s,l,u;if(r=n.children(e.listItemElement+":first-child"),l="auto"!==e.distance?e.distance:"vertical"===e.direction?r.outerHeight(!0):r.outerWidth(!0),e.linear?s=Math.min(f[0][e.scrollOffset]+e.step,l):(u=Math.max(3,parseInt(.3*(l-f[0][e.scrollOffset]),10)),s=Math.min(f[0][e.scrollOffset]+u,l)),f[0][e.scrollOffset]=s,s>=l){for(a=0;a<e.switchItems;a++)e.queue&&e.queue.find(e.listItemElement).length>0?(n.append(e.queue.find(e.listItemElement)[0]),n.children(e.listItemElement+":first-child").remove()):n.append(n.children(e.listItemElement+":first-child")),++m;if(f[0][e.scrollOffset]=0,clearInterval(d),d=null,t.isFunction(e.afterForward)&&e.afterForward.call(f,{switchCount:m,currentFirstChild:n.children(e.listItemElement+":first-child")}),e.triggerStackable&&0!==g)return void i();if(!1===e.infiniteLoop&&m>=e.switchAmount)return;e.autoPlay&&(p=setTimeout(o,1e3*e.delay))}}},l=function(){if(!h){var r,a,s,l,u;if(0===f[0][e.scrollOffset]){for(a=0;a<e.switchItems;a++)n.children(e.listItemElement+":last-child").insertBefore(n.children(e.listItemElement+":first-child"));r=n.children(e.listItemElement+":first-child"),l="auto"!==e.distance?e.distance:"vertical"===e.direction?r.height():r.width(),f[0][e.scrollOffset]=l}
if(e.linear?s=Math.max(f[0][e.scrollOffset]-e.step,0):(u=Math.max(3,parseInt(.3*f[0][e.scrollOffset],10)),s=Math.max(f[0][e.scrollOffset]-u,0)),f[0][e.scrollOffset]=s,0===s){if(--m,clearInterval(d),d=null,t.isFunction(e.afterBackward)&&e.afterBackward.call(f,{switchCount:m,currentFirstChild:n.children(e.listItemElement+":first-child")}),e.triggerStackable&&0!==g)return void i();e.autoPlay&&(p=setTimeout(o,1e3*e.delay))}}},i=function(){0!==g&&(g>0?(g--,p=setTimeout(o,0)):(g++,p=setTimeout(r,0)))},o=function(){clearInterval(d),d=setInterval(s,e.speed)},r=function(){clearInterval(d),d=setInterval(l,e.speed)},u=function(){e.autoPlay=!0,h=!1,clearInterval(d),d=setInterval(s,e.speed)},c=function(){h=!0},a=function(t){e.delay=t||e.delay,clearTimeout(p),e.autoPlay&&(p=setTimeout(o,1e3*e.delay))},e.autoPlay&&(p=setTimeout(o,1e3*e.startDelay)),f.bind("resetClock",function(t){a(t)}),f.bind("forward",function(){e.triggerStackable?null!==d?g++:o():(clearTimeout(p),o())}),f.bind("backward",function(){e.triggerStackable?null!==d?g--:r():(clearTimeout(p),r())}),f.bind("pauseHover",function(){c()}),f.bind("forwardHover",function(){u()}),f.bind("speedUp",function(t,n){"undefined"===n&&(n=Math.max(1,parseInt(e.speed/2,10))),e.speed=n}),f.bind("speedDown",function(t,n){"undefined"===n&&(n=2*e.speed),e.speed=n}),f.bind("updateConfig",function(n,i){e=t.extend(e,i)})})}}(jQuery)},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}
function r(t){(0,a.default)("#search_filters").replaceWith(t.rendered_facets),(0,a.default)("#js-active-search-filters").replaceWith(t.rendered_active_filters),(0,a.default)("#js-product-list-top").replaceWith(t.rendered_products_top),(0,a.default)("#js-product-list").replaceWith(t.rendered_products),(0,a.default)("#js-product-list-bottom").replaceWith(t.rendered_products_bottom),t.rendered_products_header&&(0,a.default)("#js-product-list-header").replaceWith(t.rendered_products_header),(new c.default).init()}
var o=n(0),a=i(o),s=n(1),l=i(s);n(4);var u=n(3),c=i(u);(0,a.default)(document).ready(function(){l.default.on("clickQuickView",function(e){var n={action:"quickview",id_product:e.dataset.idProduct,id_product_attribute:e.dataset.idProductAttribute};a.default.post(l.default.urls.pages.product,n,null,"json").then(function(e){(0,a.default)("body").append(e.quickview_html);var n=(0,a.default)("#quickview-modal-"+e.product.id+"-"+e.product.id_product_attribute);n.modal("show"),t(n),n.on("hidden.bs.modal",function(){n.remove()})}).fail(function(t){l.default.emit("handleError",{eventType:"clickQuickView",resp:t})})});var t=function(t){var n=(0,a.default)(".js-arrows"),i=t.find(".js-qv-product-images");(0,a.default)(".js-thumb").on("click",function(t){(0,a.default)(".js-thumb").hasClass("selected")&&(0,a.default)(".js-thumb").removeClass("selected"),(0,a.default)(t.currentTarget).addClass("selected"),(0,a.default)(".js-qv-product-cover").attr("src",(0,a.default)(t.target).data("image-large-src"))}),i.find("li").length<=4?n.hide():n.on("click",function(t){(0,a.default)(t.target).hasClass("arrow-up")&&(0,a.default)(".js-qv-product-images").position().top<0?(e("up"),(0,a.default)(".arrow-down").css("opacity","1")):(0,a.default)(t.target).hasClass("arrow-down")&&i.position().top+i.height()>(0,a.default)(".js-qv-mask").height()&&(e("down"),(0,a.default)(".arrow-up").css("opacity","1"))}),t.find("#quantity_wanted").TouchSpin({verticalbuttons:!0,verticalupclass:"material-icons touchspin-up",verticaldownclass:"material-icons touchspin-down",buttondown_class:"btn btn-touchspin js-touchspin",buttonup_class:"btn btn-touchspin js-touchspin",min:1,max:1e6})},e=function(t){var e=(0,a.default)(".js-qv-product-images"),n=(0,a.default)(".js-qv-product-images li img").height()+20,i=e.position().top;e.velocity({translateY:"up"===t?i+n:i-n},function(){e.position().top>=0?(0,a.default)(".arrow-up").css("opacity",".2"):e.position().top+e.height()<=(0,a.default)(".js-qv-mask").height()&&(0,a.default)(".arrow-down").css("opacity",".2")})};(0,a.default)("body").on("click","#search_filter_toggler",function(){(0,a.default)("#search_filters_wrapper").removeClass("hidden-sm-down"),(0,a.default)("#content-wrapper").addClass("hidden-sm-down"),(0,a.default)("#footer").addClass("hidden-sm-down")}),(0,a.default)("#search_filter_controls .clear").on("click",function(){(0,a.default)("#search_filters_wrapper").addClass("hidden-sm-down"),(0,a.default)("#content-wrapper").removeClass("hidden-sm-down"),(0,a.default)("#footer").removeClass("hidden-sm-down")}),(0,a.default)("#search_filter_controls .ok").on("click",function(){(0,a.default)("#search_filters_wrapper").addClass("hidden-sm-down"),(0,a.default)("#content-wrapper").removeClass("hidden-sm-down"),(0,a.default)("#footer").removeClass("hidden-sm-down")});var n=function(t){if(void 0!==t.target.dataset.searchUrl)return t.target.dataset.searchUrl;if(void 0===(0,a.default)(t.target).parent()[0].dataset.searchUrl)throw new Error("Can not parse search URL");return(0,a.default)(t.target).parent()[0].dataset.searchUrl};(0,a.default)("body").on("change","#search_filters input[data-search-url]",function(t){l.default.emit("updateFacets",n(t))}),(0,a.default)("body").on("click",".js-search-filters-clear-all",function(t){l.default.emit("updateFacets",n(t))}),(0,a.default)("body").on("click",".js-search-link",function(t){t.preventDefault(),l.default.emit("updateFacets",(0,a.default)(t.target).closest("a").get(0).href)}),(0,a.default)("body").on("change","#search_filters select",function(t){var e=(0,a.default)(t.target).closest("form");l.default.emit("updateFacets","?"+e.serialize())}),l.default.on("updateProductList",function(t){r(t)})})},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}
var r=n(0),o=i(r),a=n(1),s=i(a);(0,o.default)(document).ready(function(){function t(){(0,o.default)(".js-thumb").on("click",function(t){(0,o.default)(".js-modal-product-cover").attr("src",(0,o.default)(t.target).data("image-large-src")),(0,o.default)(".selected").removeClass("selected"),(0,o.default)(t.target).addClass("selected"),(0,o.default)(".js-qv-product-cover").prop("src",(0,o.default)(t.currentTarget).data("image-large-src"))})}
function e(){(0,o.default)("#main .js-qv-product-images li").length>2?((0,o.default)("#main .js-qv-mask").addClass("scroll"),(0,o.default)(".scroll-box-arrows").addClass("scroll"),(0,o.default)("#main .js-qv-mask").scrollbox({direction:"h",distance:113,autoPlay:!1}),(0,o.default)(".scroll-box-arrows .left").click(function(){(0,o.default)("#main .js-qv-mask").trigger("backward")}),(0,o.default)(".scroll-box-arrows .right").click(function(){(0,o.default)("#main .js-qv-mask").trigger("forward")})):((0,o.default)("#main .js-qv-mask").removeClass("scroll"),(0,o.default)(".scroll-box-arrows").removeClass("scroll"))}
function n(){(0,o.default)(".js-file-input").on("change",function(t){var e=void 0,n=void 0;(e=(0,o.default)(t.currentTarget)[0])&&(n=e.files[0])&&(0,o.default)(e).prev().text(n.name)})}!function(){var t=(0,o.default)("#quantity_wanted");t.TouchSpin({verticalbuttons:!0,verticalupclass:"material-icons touchspin-up",verticaldownclass:"material-icons touchspin-down",buttondown_class:"btn btn-touchspin js-touchspin",buttonup_class:"btn btn-touchspin js-touchspin",min:parseInt(t.attr("min"),10),max:1e6}),(0,o.default)("body").on("change keyup","#quantity_wanted",function(t){(0,o.default)(t.currentTarget).trigger("touchspin.stopspin"),s.default.emit("updateProduct",{eventType:"updatedProductQuantity",event:t})})}(),n(),t(),e(),s.default.on("updatedProduct",function(i){if(n(),t(),i&&i.product_minimal_quantity){var r=parseInt(i.product_minimal_quantity,10);(0,o.default)("#quantity_wanted").trigger("touchspin.updatesettings",{min:r})}
e(),(0,o.default)((0,o.default)(".tabs .nav-link.active").attr("href")).addClass("active").removeClass("fade"),(0,o.default)(".js-product-images-modal").replaceWith(i.product_images_modal)})})},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}
function r(t,e){var n=e.children().detach();e.empty().append(t.children().detach()),t.append(n)}
function o(){u.default.responsive.mobile?(0,s.default)("*[id^='_desktop_']").each(function(t,e){var n=(0,s.default)("#"+e.id.replace("_desktop_","_mobile_"));n.length&&r((0,s.default)(e),n)}):(0,s.default)("*[id^='_mobile_']").each(function(t,e){var n=(0,s.default)("#"+e.id.replace("_mobile_","_desktop_"));n.length&&r((0,s.default)(e),n)}),u.default.emit("responsive update",{mobile:u.default.responsive.mobile})}
var a=n(0),s=i(a),l=n(1),u=i(l);u.default.responsive=u.default.responsive||{},u.default.responsive.current_width=window.innerWidth,u.default.responsive.min_width=992,u.default.responsive.mobile=u.default.responsive.current_width<u.default.responsive.min_width,(0,s.default)(window).on("resize",function(){var t=u.default.responsive.current_width,e=u.default.responsive.min_width,n=window.innerWidth,i=t>=e&&n<e||t<e&&n>=e;u.default.responsive.current_width=n,u.default.responsive.mobile=u.default.responsive.current_width<u.default.responsive.min_width,i&&o()}),(0,s.default)(document).ready(function(){u.default.responsive.mobile&&o()})},function(t,e,n){"use strict";!function(t){function e(t,e){return t+".touchspin_"+e}
function n(n,i){return t.map(n,function(t){return e(t,i)})}
var i=0;t.fn.TouchSpin=function(e){if("destroy"===e)return void this.each(function(){var e=t(this),i=e.data();t(document).off(n(["mouseup","touchend","touchcancel","mousemove","touchmove","scroll","scrollstart"],i.spinnerid).join(" "))});var r={min:0,max:100,initval:"",replacementval:"",step:1,decimals:0,stepinterval:100,forcestepdivisibility:"round",stepintervaldelay:500,verticalbuttons:!1,verticalupclass:"glyphicon glyphicon-chevron-up",verticaldownclass:"glyphicon glyphicon-chevron-down",prefix:"",postfix:"",prefix_extraclass:"",postfix_extraclass:"",booster:!0,boostat:10,maxboostedstep:!1,mousewheel:!0,buttondown_class:"btn btn-default",buttonup_class:"btn btn-default",buttondown_txt:"-",buttonup_txt:"+"},o={min:"min",max:"max",initval:"init-val",replacementval:"replacement-val",step:"step",decimals:"decimals",stepinterval:"step-interval",verticalbuttons:"vertical-buttons",verticalupclass:"vertical-up-class",verticaldownclass:"vertical-down-class",forcestepdivisibility:"force-step-divisibility",stepintervaldelay:"step-interval-delay",prefix:"prefix",postfix:"postfix",prefix_extraclass:"prefix-extra-class",postfix_extraclass:"postfix-extra-class",booster:"booster",boostat:"boostat",maxboostedstep:"max-boosted-step",mousewheel:"mouse-wheel",buttondown_class:"button-down-class",buttonup_class:"button-up-class",buttondown_txt:"button-down-txt",buttonup_txt:"button-up-txt"};return this.each(function(){function a(){""!==T.initval&&""===L.val()&&L.val(T.initval)}
function s(t){c(t),b();var e=I.input.val();""!==e&&(e=Number(I.input.val()),I.input.val(e.toFixed(T.decimals)))}
function l(){T=t.extend({},r,j,u(),e)}
function u(){var e={};return t.each(o,function(t,n){var i="bts-"+n;L.is("[data-"+i+"]")&&(e[t]=L.data(i))}),e}
function c(e){T=t.extend({},T,e)}
function f(){var t=L.val(),e=L.parent();""!==t&&(t=Number(t).toFixed(T.decimals)),L.data("initvalue",t).val(t),L.addClass("form-control"),e.hasClass("input-group")?d(e):p()}
function d(e){e.addClass("bootstrap-touchspin");var n,i,r=L.prev(),o=L.next(),a='<span class="input-group-addon bootstrap-touchspin-prefix">'+T.prefix+"</span>",s='<span class="input-group-addon bootstrap-touchspin-postfix">'+T.postfix+"</span>";r.hasClass("input-group-btn")?(n='<button class="'+T.buttondown_class+' bootstrap-touchspin-down" type="button">'+T.buttondown_txt+"</button>",r.append(n)):(n='<span class="input-group-btn"><button class="'+T.buttondown_class+' bootstrap-touchspin-down" type="button">'+T.buttondown_txt+"</button></span>",t(n).insertBefore(L)),o.hasClass("input-group-btn")?(i='<button class="'+T.buttonup_class+' bootstrap-touchspin-up" type="button">'+T.buttonup_txt+"</button>",o.prepend(i)):(i='<span class="input-group-btn"><button class="'+T.buttonup_class+' bootstrap-touchspin-up" type="button">'+T.buttonup_txt+"</button></span>",t(i).insertAfter(L)),t(a).insertBefore(L),t(s).insertAfter(L),A=e}
function p(){var e;e=T.verticalbuttons?'<div class="input-group bootstrap-touchspin"><span class="input-group-addon bootstrap-touchspin-prefix">'+T.prefix+'</span><span class="input-group-addon bootstrap-touchspin-postfix">'+T.postfix+'</span><span class="input-group-btn-vertical"><button class="'+T.buttondown_class+' bootstrap-touchspin-up" type="button"><i class="'+T.verticalupclass+'"></i></button><button class="'+T.buttonup_class+' bootstrap-touchspin-down" type="button"><i class="'+T.verticaldownclass+'"></i></button></span></div>':'<div class="input-group bootstrap-touchspin"><span class="input-group-btn"><button class="'+T.buttondown_class+' bootstrap-touchspin-down" type="button">'+T.buttondown_txt+'</button></span><span class="input-group-addon bootstrap-touchspin-prefix">'+T.prefix+'</span><span class="input-group-addon bootstrap-touchspin-postfix">'+T.postfix+'</span><span class="input-group-btn"><button class="'+T.buttonup_class+' bootstrap-touchspin-up" type="button">'+T.buttonup_txt+"</button></span></div>",A=t(e).insertBefore(L),t(".bootstrap-touchspin-prefix",A).after(L),L.hasClass("input-sm")?A.addClass("input-group-sm"):L.hasClass("input-lg")&&A.addClass("input-group-lg")}
function h(){I={down:t(".bootstrap-touchspin-down",A),up:t(".bootstrap-touchspin-up",A),input:t("input",A),prefix:t(".bootstrap-touchspin-prefix",A).addClass(T.prefix_extraclass),postfix:t(".bootstrap-touchspin-postfix",A).addClass(T.postfix_extraclass)}}
function m(){""===T.prefix&&I.prefix.hide(),""===T.postfix&&I.postfix.hide()}
function g(){L.on("keydown",function(t){var e=t.keyCode||t.which;38===e?("up"!==V&&(x(),E()),t.preventDefault()):40===e&&("down"!==V&&(w(),S()),t.preventDefault())}),L.on("keyup",function(t){var e=t.keyCode||t.which;38===e?C():40===e&&C()}),L.on("blur",function(){b()}),I.down.on("keydown",function(t){var e=t.keyCode||t.which;32!==e&&13!==e||("down"!==V&&(w(),S()),t.preventDefault())}),I.down.on("keyup",function(t){var e=t.keyCode||t.which;32!==e&&13!==e||C()}),I.up.on("keydown",function(t){var e=t.keyCode||t.which;32!==e&&13!==e||("up"!==V&&(x(),E()),t.preventDefault())}),I.up.on("keyup",function(t){var e=t.keyCode||t.which;32!==e&&13!==e||C()}),I.down.on("mousedown.touchspin",function(t){I.down.off("touchstart.touchspin"),L.is(":disabled")||(w(),S(),t.preventDefault(),t.stopPropagation())}),I.down.on("touchstart.touchspin",function(t){I.down.off("mousedown.touchspin"),L.is(":disabled")||(w(),S(),t.preventDefault(),t.stopPropagation())}),I.up.on("mousedown.touchspin",function(t){I.up.off("touchstart.touchspin"),L.is(":disabled")||(x(),E(),t.preventDefault(),t.stopPropagation())}),I.up.on("touchstart.touchspin",function(t){I.up.off("mousedown.touchspin"),L.is(":disabled")||(x(),E(),t.preventDefault(),t.stopPropagation())}),I.up.on("mouseout touchleave touchend touchcancel",function(t){V&&(t.stopPropagation(),C())}),I.down.on("mouseout touchleave touchend touchcancel",function(t){V&&(t.stopPropagation(),C())}),I.down.on("mousemove touchmove",function(t){V&&(t.stopPropagation(),t.preventDefault())}),I.up.on("mousemove touchmove",function(t){V&&(t.stopPropagation(),t.preventDefault())}),t(document).on(n(["mouseup","touchend","touchcancel"],i).join(" "),function(t){V&&(t.preventDefault(),C())}),t(document).on(n(["mousemove","touchmove","scroll","scrollstart"],i).join(" "),function(t){V&&(t.preventDefault(),C())}),L.on("mousewheel DOMMouseScroll",function(t){if(T.mousewheel&&L.is(":focus")){var e=t.originalEvent.wheelDelta||-t.originalEvent.deltaY||-t.originalEvent.detail;t.stopPropagation(),t.preventDefault(),e<0?w():x()}})}
function v(){L.on("touchspin.uponce",function(){C(),x()}),L.on("touchspin.downonce",function(){C(),w()}),L.on("touchspin.startupspin",function(){E()}),L.on("touchspin.startdownspin",function(){S()}),L.on("touchspin.stopspin",function(){C()}),L.on("touchspin.updatesettings",function(t,e){s(e)})}
function y(t){switch(T.forcestepdivisibility){case "round":return(Math.round(t/T.step)*T.step).toFixed(T.decimals);case "floor":return(Math.floor(t/T.step)*T.step).toFixed(T.decimals);case "ceil":return(Math.ceil(t/T.step)*T.step).toFixed(T.decimals);default:return t}}
function b(){var t,e,n;if(""===(t=L.val()))return void(""!==T.replacementval&&(L.val(T.replacementval),L.trigger("change")));T.decimals>0&&"."===t||(e=parseFloat(t),isNaN(e)&&(e=""!==T.replacementval?T.replacementval:0),n=e,e.toString()!==t&&(n=e),e<T.min&&(n=T.min),e>T.max&&(n=T.max),n=y(n),Number(t).toString()!==n.toString()&&(L.val(n),L.trigger("change")))}
function _(){if(T.booster){var t=Math.pow(2,Math.floor(B/T.boostat))*T.step;return T.maxboostedstep&&t>T.maxboostedstep&&(t=T.maxboostedstep,O=Math.round(O/t)*t),Math.max(T.step,t)}
return T.step}
function x(){b(),O=parseFloat(I.input.val()),isNaN(O)&&(O=0);var t=O,e=_();O+=e,O>T.max&&(O=T.max,L.trigger("touchspin.on.max"),C()),I.input.val(Number(O).toFixed(T.decimals)),t!==O&&L.trigger("change")}
function w(){b(),O=parseFloat(I.input.val()),isNaN(O)&&(O=0);var t=O,e=_();O-=e,O<T.min&&(O=T.min,L.trigger("touchspin.on.min"),C()),I.input.val(O.toFixed(T.decimals)),t!==O&&L.trigger("change")}
function S(){C(),B=0,V="down",L.trigger("touchspin.on.startspin"),L.trigger("touchspin.on.startdownspin"),N=setTimeout(function(){k=setInterval(function(){B++,w()},T.stepinterval)},T.stepintervaldelay)}
function E(){C(),B=0,V="up",L.trigger("touchspin.on.startspin"),L.trigger("touchspin.on.startupspin"),P=setTimeout(function(){D=setInterval(function(){B++,x()},T.stepinterval)},T.stepintervaldelay)}
function C(){switch(clearTimeout(N),clearTimeout(P),clearInterval(k),clearInterval(D),V){case "up":L.trigger("touchspin.on.stopupspin"),L.trigger("touchspin.on.stopspin");break;case "down":L.trigger("touchspin.on.stopdownspin"),L.trigger("touchspin.on.stopspin")}
B=0,V=!1}
var T,A,I,O,k,D,N,P,L=t(this),j=L.data(),B=0,V=!1;!function(){L.data("alreadyinitialized")||(L.data("alreadyinitialized",!0),i+=1,L.data("spinnerid",i),L.is("input")&&(l(),a(),b(),f(),h(),m(),g(),v(),I.input.css("display","block")))}()})}}(jQuery)},function(t,e,n){"use strict";if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(t){var e=t.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1==e[0]&&9==e[1]&&e[2]<1||e[0]>=4)throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}(jQuery),function(){function t(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}
function e(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}
function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}
var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value" in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}
return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),o=function(t){function e(t){return{}.toString.call(t).match(/\s([a-zA-Z]+)/)[1].toLowerCase()}
function n(t){return(t[0]||t).nodeType}
function i(){return{bindType:a.end,delegateType:a.end,handle:function(e){if(t(e.target).is(this))return e.handleObj.handler.apply(this,arguments)}}}
function r(){if(window.QUnit)return!1;var t=document.createElement("bootstrap");for(var e in s)
if(void 0!==t.style[e])return{end:s[e]};return!1}
function o(e){var n=this,i=!1;return t(this).one(l.TRANSITION_END,function(){i=!0}),setTimeout(function(){i||l.triggerTransitionEnd(n)},e),this}
var a=!1,s={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"},l={TRANSITION_END:"bsTransitionEnd",getUID:function(t){do{t+=~~(1e6*Math.random())}while(document.getElementById(t));return t},getSelectorFromElement:function(t){var e=t.getAttribute("data-target");return e||(e=t.getAttribute("href")||"",e=/^#[a-z]/i.test(e)?e:null),e},reflow:function(t){new Function("bs","return bs")(t.offsetHeight)},triggerTransitionEnd:function(e){t(e).trigger(a.end)},supportsTransitionEnd:function(){return Boolean(a)},typeCheckConfig:function(t,i,r){for(var o in r)
if(r.hasOwnProperty(o)){var a=r[o],s=i[o],l=void 0;if(l=s&&n(s)?"element":e(s),!new RegExp(a).test(l))throw new Error(t.toUpperCase()+': Option "'+o+'" provided type "'+l+'" but expected type "'+a+'".')}}};return function(){a=r(),t.fn.emulateTransitionEnd=o,l.supportsTransitionEnd()&&(t.event.special[l.TRANSITION_END]=i())}(),l}(jQuery),a=(function(t){var e="alert",i="bs.alert",a="."+i,s=t.fn[e],l={DISMISS:'[data-dismiss="alert"]'},u={CLOSE:"close"+a,CLOSED:"closed"+a,CLICK_DATA_API:"click"+a+".data-api"},c={ALERT:"alert",FADE:"fade",IN:"in"},f=function(){function e(t){n(this,e),this._element=t}
return e.prototype.close=function(t){t=t||this._element;var e=this._getRootElement(t);this._triggerCloseEvent(e).isDefaultPrevented()||this._removeElement(e)},e.prototype.dispose=function(){t.removeData(this._element,i),this._element=null},e.prototype._getRootElement=function(e){var n=o.getSelectorFromElement(e),i=!1;return n&&(i=t(n)[0]),i||(i=t(e).closest("."+c.ALERT)[0]),i},e.prototype._triggerCloseEvent=function(e){var n=t.Event(u.CLOSE);return t(e).trigger(n),n},e.prototype._removeElement=function(e){return t(e).removeClass(c.IN),o.supportsTransitionEnd()&&t(e).hasClass(c.FADE)?void t(e).one(o.TRANSITION_END,t.proxy(this._destroyElement,this,e)).emulateTransitionEnd(150):void this._destroyElement(e)},e.prototype._destroyElement=function(e){t(e).detach().trigger(u.CLOSED).remove()},e._jQueryInterface=function(n){return this.each(function(){var r=t(this),o=r.data(i);o||(o=new e(this),r.data(i,o)),"close"===n&&o[n](this)})},e._handleDismiss=function(t){return function(e){e&&e.preventDefault(),t.close(this)}},r(e,null,[{key:"VERSION",get:function(){return"4.0.0-alpha.5"}}]),e}();t(document).on(u.CLICK_DATA_API,l.DISMISS,f._handleDismiss(new f)),t.fn[e]=f._jQueryInterface,t.fn[e].Constructor=f,t.fn[e].noConflict=function(){return t.fn[e]=s,f._jQueryInterface}}(jQuery),function(t){var e="button",i="bs.button",o="."+i,a=".data-api",s=t.fn[e],l={ACTIVE:"active",BUTTON:"btn",FOCUS:"focus"},u={DATA_TOGGLE_CARROT:'[data-toggle^="button"]',DATA_TOGGLE:'[data-toggle="buttons"]',INPUT:"input",ACTIVE:".active",BUTTON:".btn"},c={CLICK_DATA_API:"click"+o+a,FOCUS_BLUR_DATA_API:"focus"+o+a+" blur"+o+a},f=function(){function e(t){n(this,e),this._element=t}
return e.prototype.toggle=function(){var e=!0,n=t(this._element).closest(u.DATA_TOGGLE)[0];if(n){var i=t(this._element).find(u.INPUT)[0];if(i){if("radio"===i.type)
if(i.checked&&t(this._element).hasClass(l.ACTIVE))e=!1;else{var r=t(n).find(u.ACTIVE)[0];r&&t(r).removeClass(l.ACTIVE)}
e&&(i.checked=!t(this._element).hasClass(l.ACTIVE),t(this._element).trigger("change")),i.focus()}}else this._element.setAttribute("aria-pressed",!t(this._element).hasClass(l.ACTIVE));e&&t(this._element).toggleClass(l.ACTIVE)},e.prototype.dispose=function(){t.removeData(this._element,i),this._element=null},e._jQueryInterface=function(n){return this.each(function(){var r=t(this).data(i);r||(r=new e(this),t(this).data(i,r)),"toggle"===n&&r[n]()})},r(e,null,[{key:"VERSION",get:function(){return"4.0.0-alpha.5"}}]),e}();t(document).on(c.CLICK_DATA_API,u.DATA_TOGGLE_CARROT,function(e){e.preventDefault();var n=e.target;t(n).hasClass(l.BUTTON)||(n=t(n).closest(u.BUTTON)),f._jQueryInterface.call(t(n),"toggle")}).on(c.FOCUS_BLUR_DATA_API,u.DATA_TOGGLE_CARROT,function(e){var n=t(e.target).closest(u.BUTTON)[0];t(n).toggleClass(l.FOCUS,/^focus(in)?$/.test(e.type))}),t.fn[e]=f._jQueryInterface,t.fn[e].Constructor=f,t.fn[e].noConflict=function(){return t.fn[e]=s,f._jQueryInterface}}(jQuery),function(t){var e="carousel",a="bs.carousel",s="."+a,l=".data-api",u=t.fn[e],c={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0},f={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean"},d={NEXT:"next",PREVIOUS:"prev"},p={SLIDE:"slide"+s,SLID:"slid"+s,KEYDOWN:"keydown"+s,MOUSEENTER:"mouseenter"+s,MOUSELEAVE:"mouseleave"+s,LOAD_DATA_API:"load"+s+l,CLICK_DATA_API:"click"+s+l},h={CAROUSEL:"carousel",ACTIVE:"active",SLIDE:"slide",RIGHT:"right",LEFT:"left",ITEM:"carousel-item"},m={ACTIVE:".active",ACTIVE_ITEM:".active.carousel-item",ITEM:".carousel-item",NEXT_PREV:".next, .prev",INDICATORS:".carousel-indicators",DATA_SLIDE:"[data-slide], [data-slide-to]",DATA_RIDE:'[data-ride="carousel"]'},g=function(){function l(e,i){n(this,l),this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this._config=this._getConfig(i),this._element=t(e)[0],this._indicatorsElement=t(this._element).find(m.INDICATORS)[0],this._addEventListeners()}
return l.prototype.next=function(){this._isSliding||this._slide(d.NEXT)},l.prototype.nextWhenVisible=function(){document.hidden||this.next()},l.prototype.prev=function(){this._isSliding||this._slide(d.PREVIOUS)},l.prototype.pause=function(e){e||(this._isPaused=!0),t(this._element).find(m.NEXT_PREV)[0]&&o.supportsTransitionEnd()&&(o.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},l.prototype.cycle=function(e){e||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval(t.proxy(document.visibilityState?this.nextWhenVisible:this.next,this),this._config.interval))},l.prototype.to=function(e){var n=this;this._activeElement=t(this._element).find(m.ACTIVE_ITEM)[0];var i=this._getItemIndex(this._activeElement);if(!(e>this._items.length-1||e<0)){if(this._isSliding)return void t(this._element).one(p.SLID,function(){return n.to(e)});if(i===e)return this.pause(),void this.cycle();var r=e>i?d.NEXT:d.PREVIOUS;this._slide(r,this._items[e])}},l.prototype.dispose=function(){t(this._element).off(s),t.removeData(this._element,a),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},l.prototype._getConfig=function(n){return n=t.extend({},c,n),o.typeCheckConfig(e,n,f),n},l.prototype._addEventListeners=function(){this._config.keyboard&&t(this._element).on(p.KEYDOWN,t.proxy(this._keydown,this)),"hover"!==this._config.pause||"ontouchstart" in document.documentElement||t(this._element).on(p.MOUSEENTER,t.proxy(this.pause,this)).on(p.MOUSELEAVE,t.proxy(this.cycle,this))},l.prototype._keydown=function(t){if(t.preventDefault(),!/input|textarea/i.test(t.target.tagName))switch(t.which){case 37:this.prev();break;case 39:this.next();break;default:return}},l.prototype._getItemIndex=function(e){return this._items=t.makeArray(t(e).parent().find(m.ITEM)),this._items.indexOf(e)},l.prototype._getItemByDirection=function(t,e){var n=t===d.NEXT,i=t===d.PREVIOUS,r=this._getItemIndex(e),o=this._items.length-1;if((i&&0===r||n&&r===o)&&!this._config.wrap)return e;var a=t===d.PREVIOUS?-1:1,s=(r+a)%this._items.length;return-1===s?this._items[this._items.length-1]:this._items[s]},l.prototype._triggerSlideEvent=function(e,n){var i=t.Event(p.SLIDE,{relatedTarget:e,direction:n});return t(this._element).trigger(i),i},l.prototype._setActiveIndicatorElement=function(e){if(this._indicatorsElement){t(this._indicatorsElement).find(m.ACTIVE).removeClass(h.ACTIVE);var n=this._indicatorsElement.children[this._getItemIndex(e)];n&&t(n).addClass(h.ACTIVE)}},l.prototype._slide=function(e,n){var i=this,r=t(this._element).find(m.ACTIVE_ITEM)[0],a=n||r&&this._getItemByDirection(e,r),s=Boolean(this._interval),l=e===d.NEXT?h.LEFT:h.RIGHT;if(a&&t(a).hasClass(h.ACTIVE))return void(this._isSliding=!1);if(!this._triggerSlideEvent(a,l).isDefaultPrevented()&&r&&a){this._isSliding=!0,s&&this.pause(),this._setActiveIndicatorElement(a);var u=t.Event(p.SLID,{relatedTarget:a,direction:l});o.supportsTransitionEnd()&&t(this._element).hasClass(h.SLIDE)?(t(a).addClass(e),o.reflow(a),t(r).addClass(l),t(a).addClass(l),t(r).one(o.TRANSITION_END,function(){t(a).removeClass(l).removeClass(e),t(a).addClass(h.ACTIVE),t(r).removeClass(h.ACTIVE).removeClass(e).removeClass(l),i._isSliding=!1,setTimeout(function(){return t(i._element).trigger(u)},0)}).emulateTransitionEnd(600)):(t(r).removeClass(h.ACTIVE),t(a).addClass(h.ACTIVE),this._isSliding=!1,t(this._element).trigger(u)),s&&this.cycle()}},l._jQueryInterface=function(e){return this.each(function(){var n=t(this).data(a),r=t.extend({},c,t(this).data());"object"===(void 0===e?"undefined":i(e))&&t.extend(r,e);var o="string"==typeof e?e:r.slide;if(n||(n=new l(this,r),t(this).data(a,n)),"number"==typeof e)n.to(e);else if("string"==typeof o){if(void 0===n[o])throw new Error('No method named "'+o+'"');n[o]()}else r.interval&&(n.pause(),n.cycle())})},l._dataApiClickHandler=function(e){var n=o.getSelectorFromElement(this);if(n){var i=t(n)[0];if(i&&t(i).hasClass(h.CAROUSEL)){var r=t.extend({},t(i).data(),t(this).data()),s=this.getAttribute("data-slide-to");s&&(r.interval=!1),l._jQueryInterface.call(t(i),r),s&&t(i).data(a).to(s),e.preventDefault()}}},r(l,null,[{key:"VERSION",get:function(){return"4.0.0-alpha.5"}},{key:"Default",get:function(){return c}}]),l}();t(document).on(p.CLICK_DATA_API,m.DATA_SLIDE,g._dataApiClickHandler),t(window).on(p.LOAD_DATA_API,function(){t(m.DATA_RIDE).each(function(){var e=t(this);g._jQueryInterface.call(e,e.data())})}),t.fn[e]=g._jQueryInterface,t.fn[e].Constructor=g,t.fn[e].noConflict=function(){return t.fn[e]=u,g._jQueryInterface}}(jQuery),function(t){var e="collapse",a="bs.collapse",s="."+a,l=t.fn[e],u={toggle:!0,parent:""},c={toggle:"boolean",parent:"string"},f={SHOW:"show"+s,SHOWN:"shown"+s,HIDE:"hide"+s,HIDDEN:"hidden"+s,CLICK_DATA_API:"click"+s+".data-api"},d={IN:"in",COLLAPSE:"collapse",COLLAPSING:"collapsing",COLLAPSED:"collapsed"},p={WIDTH:"width",HEIGHT:"height"},h={ACTIVES:".card > .in, .card > .collapsing",DATA_TOGGLE:'[data-toggle="collapse"]'},m=function(){function s(e,i){n(this,s),this._isTransitioning=!1,this._element=e,this._config=this._getConfig(i),this._triggerArray=t.makeArray(t('[data-toggle="collapse"][href="#'+e.id+'"],[data-toggle="collapse"][data-target="#'+e.id+'"]')),this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}
return s.prototype.toggle=function(){t(this._element).hasClass(d.IN)?this.hide():this.show()},s.prototype.show=function(){var e=this;if(!this._isTransitioning&&!t(this._element).hasClass(d.IN)){var n=void 0,i=void 0;if(this._parent&&(n=t.makeArray(t(h.ACTIVES)),n.length||(n=null)),!(n&&(i=t(n).data(a))&&i._isTransitioning)){var r=t.Event(f.SHOW);if(t(this._element).trigger(r),!r.isDefaultPrevented()){n&&(s._jQueryInterface.call(t(n),"hide"),i||t(n).data(a,null));var l=this._getDimension();t(this._element).removeClass(d.COLLAPSE).addClass(d.COLLAPSING),this._element.style[l]=0,this._element.setAttribute("aria-expanded",!0),this._triggerArray.length&&t(this._triggerArray).removeClass(d.COLLAPSED).attr("aria-expanded",!0),this.setTransitioning(!0);var u=function(){t(e._element).removeClass(d.COLLAPSING).addClass(d.COLLAPSE).addClass(d.IN),e._element.style[l]="",e.setTransitioning(!1),t(e._element).trigger(f.SHOWN)};if(!o.supportsTransitionEnd())return void u();var c=l[0].toUpperCase()+l.slice(1),p="scroll"+c;t(this._element).one(o.TRANSITION_END,u).emulateTransitionEnd(600),this._element.style[l]=this._element[p]+"px"}}}},s.prototype.hide=function(){var e=this;if(!this._isTransitioning&&t(this._element).hasClass(d.IN)){var n=t.Event(f.HIDE);if(t(this._element).trigger(n),!n.isDefaultPrevented()){var i=this._getDimension(),r=i===p.WIDTH?"offsetWidth":"offsetHeight";this._element.style[i]=this._element[r]+"px",o.reflow(this._element),t(this._element).addClass(d.COLLAPSING).removeClass(d.COLLAPSE).removeClass(d.IN),this._element.setAttribute("aria-expanded",!1),this._triggerArray.length&&t(this._triggerArray).addClass(d.COLLAPSED).attr("aria-expanded",!1),this.setTransitioning(!0);var a=function(){e.setTransitioning(!1),t(e._element).removeClass(d.COLLAPSING).addClass(d.COLLAPSE).trigger(f.HIDDEN)};return this._element.style[i]="",o.supportsTransitionEnd()?void t(this._element).one(o.TRANSITION_END,a).emulateTransitionEnd(600):void a()}}},s.prototype.setTransitioning=function(t){this._isTransitioning=t},s.prototype.dispose=function(){t.removeData(this._element,a),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},s.prototype._getConfig=function(n){return n=t.extend({},u,n),n.toggle=Boolean(n.toggle),o.typeCheckConfig(e,n,c),n},s.prototype._getDimension=function(){return t(this._element).hasClass(p.WIDTH)?p.WIDTH:p.HEIGHT},s.prototype._getParent=function(){var e=this,n=t(this._config.parent)[0],i='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]';return t(n).find(i).each(function(t,n){e._addAriaAndCollapsedClass(s._getTargetFromElement(n),[n])}),n},s.prototype._addAriaAndCollapsedClass=function(e,n){if(e){var i=t(e).hasClass(d.IN);e.setAttribute("aria-expanded",i),n.length&&t(n).toggleClass(d.COLLAPSED,!i).attr("aria-expanded",i)}},s._getTargetFromElement=function(e){var n=o.getSelectorFromElement(e);return n?t(n)[0]:null},s._jQueryInterface=function(e){return this.each(function(){var n=t(this),r=n.data(a),o=t.extend({},u,n.data(),"object"===(void 0===e?"undefined":i(e))&&e);if(!r&&o.toggle&&/show|hide/.test(e)&&(o.toggle=!1),r||(r=new s(this,o),n.data(a,r)),"string"==typeof e){if(void 0===r[e])throw new Error('No method named "'+e+'"');r[e]()}})},r(s,null,[{key:"VERSION",get:function(){return"4.0.0-alpha.5"}},{key:"Default",get:function(){return u}}]),s}();t(document).on(f.CLICK_DATA_API,h.DATA_TOGGLE,function(e){e.preventDefault();var n=m._getTargetFromElement(this),i=t(n).data(a),r=i?"toggle":t(this).data();m._jQueryInterface.call(t(n),r)}),t.fn[e]=m._jQueryInterface,t.fn[e].Constructor=m,t.fn[e].noConflict=function(){return t.fn[e]=l,m._jQueryInterface}}(jQuery),function(t){var e="dropdown",i="bs.dropdown",a="."+i,s=".data-api",l=t.fn[e],u={HIDE:"hide"+a,HIDDEN:"hidden"+a,SHOW:"show"+a,SHOWN:"shown"+a,CLICK:"click"+a,CLICK_DATA_API:"click"+a+s,KEYDOWN_DATA_API:"keydown"+a+s},c={BACKDROP:"dropdown-backdrop",DISABLED:"disabled",OPEN:"open"},f={BACKDROP:".dropdown-backdrop",DATA_TOGGLE:'[data-toggle="dropdown"]',FORM_CHILD:".dropdown form",ROLE_MENU:'[role="menu"]',ROLE_LISTBOX:'[role="listbox"]',NAVBAR_NAV:".navbar-nav",VISIBLE_ITEMS:'[role="menu"] li:not(.disabled) a, [role="listbox"] li:not(.disabled) a'},d=function(){function e(t){n(this,e),this._element=t,this._addEventListeners()}
return e.prototype.toggle=function(){if(this.disabled||t(this).hasClass(c.DISABLED))return!1;var n=e._getParentFromElement(this),i=t(n).hasClass(c.OPEN);if(e._clearMenus(),i)return!1;if("ontouchstart" in document.documentElement&&!t(n).closest(f.NAVBAR_NAV).length){var r=document.createElement("div");r.className=c.BACKDROP,t(r).insertBefore(this),t(r).on("click",e._clearMenus)}
var o={relatedTarget:this},a=t.Event(u.SHOW,o);return t(n).trigger(a),!a.isDefaultPrevented()&&(this.focus(),this.setAttribute("aria-expanded","true"),t(n).toggleClass(c.OPEN),t(n).trigger(t.Event(u.SHOWN,o)),!1)},e.prototype.dispose=function(){t.removeData(this._element,i),t(this._element).off(a),this._element=null},e.prototype._addEventListeners=function(){t(this._element).on(u.CLICK,this.toggle)},e._jQueryInterface=function(n){return this.each(function(){var r=t(this).data(i);if(r||t(this).data(i,r=new e(this)),"string"==typeof n){if(void 0===r[n])throw new Error('No method named "'+n+'"');r[n].call(this)}})},e._clearMenus=function(n){if(!n||3!==n.which){var i=t(f.BACKDROP)[0];i&&i.parentNode.removeChild(i);for(var r=t.makeArray(t(f.DATA_TOGGLE)),o=0;o<r.length;o++){var a=e._getParentFromElement(r[o]),s={relatedTarget:r[o]};if(t(a).hasClass(c.OPEN)&&!(n&&"click"===n.type&&/input|textarea/i.test(n.target.tagName)&&t.contains(a,n.target))){var l=t.Event(u.HIDE,s);t(a).trigger(l),l.isDefaultPrevented()||(r[o].setAttribute("aria-expanded","false"),t(a).removeClass(c.OPEN).trigger(t.Event(u.HIDDEN,s)))}}}},e._getParentFromElement=function(e){var n=void 0,i=o.getSelectorFromElement(e);return i&&(n=t(i)[0]),n||e.parentNode},e._dataApiKeydownHandler=function(n){if(/(38|40|27|32)/.test(n.which)&&!/input|textarea/i.test(n.target.tagName)&&(n.preventDefault(),n.stopPropagation(),!this.disabled&&!t(this).hasClass(c.DISABLED))){var i=e._getParentFromElement(this),r=t(i).hasClass(c.OPEN);if(!r&&27!==n.which||r&&27===n.which){if(27===n.which){var o=t(i).find(f.DATA_TOGGLE)[0];t(o).trigger("focus")}
return void t(this).trigger("click")}
var a=t.makeArray(t(f.VISIBLE_ITEMS));if(a=a.filter(function(t){return t.offsetWidth||t.offsetHeight}),a.length){var s=a.indexOf(n.target);38===n.which&&s>0&&s--,40===n.which&&s<a.length-1&&s++,s<0&&(s=0),a[s].focus()}}},r(e,null,[{key:"VERSION",get:function(){return"4.0.0-alpha.5"}}]),e}();t(document).on(u.KEYDOWN_DATA_API,f.DATA_TOGGLE,d._dataApiKeydownHandler).on(u.KEYDOWN_DATA_API,f.ROLE_MENU,d._dataApiKeydownHandler).on(u.KEYDOWN_DATA_API,f.ROLE_LISTBOX,d._dataApiKeydownHandler).on(u.CLICK_DATA_API,d._clearMenus).on(u.CLICK_DATA_API,f.DATA_TOGGLE,d.prototype.toggle).on(u.CLICK_DATA_API,f.FORM_CHILD,function(t){t.stopPropagation()}),t.fn[e]=d._jQueryInterface,t.fn[e].Constructor=d,t.fn[e].noConflict=function(){return t.fn[e]=l,d._jQueryInterface}}(jQuery),function(t){var e="modal",a="bs.modal",s="."+a,l=t.fn[e],u={backdrop:!0,keyboard:!0,focus:!0,show:!0},c={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},f={HIDE:"hide"+s,HIDDEN:"hidden"+s,SHOW:"show"+s,SHOWN:"shown"+s,FOCUSIN:"focusin"+s,RESIZE:"resize"+s,CLICK_DISMISS:"click.dismiss"+s,KEYDOWN_DISMISS:"keydown.dismiss"+s,MOUSEUP_DISMISS:"mouseup.dismiss"+s,MOUSEDOWN_DISMISS:"mousedown.dismiss"+s,CLICK_DATA_API:"click"+s+".data-api"},d={SCROLLBAR_MEASURER:"modal-scrollbar-measure",BACKDROP:"modal-backdrop",OPEN:"modal-open",FADE:"fade",IN:"in"},p={DIALOG:".modal-dialog",DATA_TOGGLE:'[data-toggle="modal"]',DATA_DISMISS:'[data-dismiss="modal"]',FIXED_CONTENT:".navbar-fixed-top, .navbar-fixed-bottom, .is-fixed"},h=function(){function l(e,i){n(this,l),this._config=this._getConfig(i),this._element=e,this._dialog=t(e).find(p.DIALOG)[0],this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._originalBodyPadding=0,this._scrollbarWidth=0}
return l.prototype.toggle=function(t){return this._isShown?this.hide():this.show(t)},l.prototype.show=function(e){var n=this,i=t.Event(f.SHOW,{relatedTarget:e});t(this._element).trigger(i),this._isShown||i.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),t(document.body).addClass(d.OPEN),this._setEscapeEvent(),this._setResizeEvent(),t(this._element).on(f.CLICK_DISMISS,p.DATA_DISMISS,t.proxy(this.hide,this)),t(this._dialog).on(f.MOUSEDOWN_DISMISS,function(){t(n._element).one(f.MOUSEUP_DISMISS,function(e){t(e.target).is(n._element)&&(n._ignoreBackdropClick=!0)})}),this._showBackdrop(t.proxy(this._showElement,this,e)))},l.prototype.hide=function(e){e&&e.preventDefault();var n=t.Event(f.HIDE);t(this._element).trigger(n),this._isShown&&!n.isDefaultPrevented()&&(this._isShown=!1,this._setEscapeEvent(),this._setResizeEvent(),t(document).off(f.FOCUSIN),t(this._element).removeClass(d.IN),t(this._element).off(f.CLICK_DISMISS),t(this._dialog).off(f.MOUSEDOWN_DISMISS),o.supportsTransitionEnd()&&t(this._element).hasClass(d.FADE)?t(this._element).one(o.TRANSITION_END,t.proxy(this._hideModal,this)).emulateTransitionEnd(300):this._hideModal())},l.prototype.dispose=function(){t.removeData(this._element,a),t(window).off(s),t(document).off(s),t(this._element).off(s),t(this._backdrop).off(s),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._originalBodyPadding=null,this._scrollbarWidth=null},l.prototype._getConfig=function(n){return n=t.extend({},u,n),o.typeCheckConfig(e,n,c),n},l.prototype._showElement=function(e){var n=this,i=o.supportsTransitionEnd()&&t(this._element).hasClass(d.FADE);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.scrollTop=0,i&&o.reflow(this._element),t(this._element).addClass(d.IN),this._config.focus&&this._enforceFocus();var r=t.Event(f.SHOWN,{relatedTarget:e}),a=function(){n._config.focus&&n._element.focus(),t(n._element).trigger(r)};i?t(this._dialog).one(o.TRANSITION_END,a).emulateTransitionEnd(300):a()},l.prototype._enforceFocus=function(){var e=this;t(document).off(f.FOCUSIN).on(f.FOCUSIN,function(n){document===n.target||e._element===n.target||t(e._element).has(n.target).length||e._element.focus()})},l.prototype._setEscapeEvent=function(){var e=this;this._isShown&&this._config.keyboard?t(this._element).on(f.KEYDOWN_DISMISS,function(t){27===t.which&&e.hide()}):this._isShown||t(this._element).off(f.KEYDOWN_DISMISS)},l.prototype._setResizeEvent=function(){this._isShown?t(window).on(f.RESIZE,t.proxy(this._handleUpdate,this)):t(window).off(f.RESIZE)},l.prototype._hideModal=function(){var e=this;this._element.style.display="none",this._element.setAttribute("aria-hidden","true"),this._showBackdrop(function(){t(document.body).removeClass(d.OPEN),e._resetAdjustments(),e._resetScrollbar(),t(e._element).trigger(f.HIDDEN)})},l.prototype._removeBackdrop=function(){this._backdrop&&(t(this._backdrop).remove(),this._backdrop=null)},l.prototype._showBackdrop=function(e){var n=this,i=t(this._element).hasClass(d.FADE)?d.FADE:"";if(this._isShown&&this._config.backdrop){var r=o.supportsTransitionEnd()&&i;if(this._backdrop=document.createElement("div"),this._backdrop.className=d.BACKDROP,i&&t(this._backdrop).addClass(i),t(this._backdrop).appendTo(document.body),t(this._element).on(f.CLICK_DISMISS,function(t){return n._ignoreBackdropClick?void(n._ignoreBackdropClick=!1):void(t.target===t.currentTarget&&("static"===n._config.backdrop?n._element.focus():n.hide()))}),r&&o.reflow(this._backdrop),t(this._backdrop).addClass(d.IN),!e)return;if(!r)return void e();t(this._backdrop).one(o.TRANSITION_END,e).emulateTransitionEnd(150)}else if(!this._isShown&&this._backdrop){t(this._backdrop).removeClass(d.IN);var a=function(){n._removeBackdrop(),e&&e()};o.supportsTransitionEnd()&&t(this._element).hasClass(d.FADE)?t(this._backdrop).one(o.TRANSITION_END,a).emulateTransitionEnd(150):a()}else e&&e()},l.prototype._handleUpdate=function(){this._adjustDialog()},l.prototype._adjustDialog=function(){var t=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&t&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!t&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},l.prototype._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},l.prototype._checkScrollbar=function(){this._isBodyOverflowing=document.body.clientWidth<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},l.prototype._setScrollbar=function(){var e=parseInt(t(p.FIXED_CONTENT).css("padding-right")||0,10);this._originalBodyPadding=document.body.style.paddingRight||"",this._isBodyOverflowing&&(document.body.style.paddingRight=e+this._scrollbarWidth+"px")},l.prototype._resetScrollbar=function(){document.body.style.paddingRight=this._originalBodyPadding},l.prototype._getScrollbarWidth=function(){var t=document.createElement("div");t.className=d.SCROLLBAR_MEASURER,document.body.appendChild(t);var e=t.offsetWidth-t.clientWidth;return document.body.removeChild(t),e},l._jQueryInterface=function(e,n){return this.each(function(){var r=t(this).data(a),o=t.extend({},l.Default,t(this).data(),"object"===(void 0===e?"undefined":i(e))&&e);if(r||(r=new l(this,o),t(this).data(a,r)),"string"==typeof e){if(void 0===r[e])throw new Error('No method named "'+e+'"');r[e](n)}else o.show&&r.show(n)})},r(l,null,[{key:"VERSION",get:function(){return"4.0.0-alpha.5"}},{key:"Default",get:function(){return u}}]),l}();t(document).on(f.CLICK_DATA_API,p.DATA_TOGGLE,function(e){var n=this,i=void 0,r=o.getSelectorFromElement(this);r&&(i=t(r)[0]);var s=t(i).data(a)?"toggle":t.extend({},t(i).data(),t(this).data());"A"===this.tagName&&e.preventDefault();var l=t(i).one(f.SHOW,function(e){e.isDefaultPrevented()||l.one(f.HIDDEN,function(){t(n).is(":visible")&&n.focus()})});h._jQueryInterface.call(t(i),s,this)}),t.fn[e]=h._jQueryInterface,t.fn[e].Constructor=h,t.fn[e].noConflict=function(){return t.fn[e]=l,h._jQueryInterface}}(jQuery),function(t){var e="scrollspy",a="bs.scrollspy",s="."+a,l=t.fn[e],u={offset:10,method:"auto",target:""},c={offset:"number",method:"string",target:"(string|element)"},f={ACTIVATE:"activate"+s,SCROLL:"scroll"+s,LOAD_DATA_API:"load"+s+".data-api"},d={DROPDOWN_ITEM:"dropdown-item",DROPDOWN_MENU:"dropdown-menu",NAV_LINK:"nav-link",NAV:"nav",ACTIVE:"active"},p={DATA_SPY:'[data-spy="scroll"]',ACTIVE:".active",LIST_ITEM:".list-item",LI:"li",LI_DROPDOWN:"li.dropdown",NAV_LINKS:".nav-link",DROPDOWN:".dropdown",DROPDOWN_ITEMS:".dropdown-item",DROPDOWN_TOGGLE:".dropdown-toggle"},h={OFFSET:"offset",POSITION:"position"},m=function(){function l(e,i){n(this,l),this._element=e,this._scrollElement="BODY"===e.tagName?window:e,this._config=this._getConfig(i),this._selector=this._config.target+" "+p.NAV_LINKS+","+this._config.target+" "+p.DROPDOWN_ITEMS,this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,t(this._scrollElement).on(f.SCROLL,t.proxy(this._process,this)),this.refresh(),this._process()}
return l.prototype.refresh=function(){var e=this,n=this._scrollElement!==this._scrollElement.window?h.POSITION:h.OFFSET,i="auto"===this._config.method?n:this._config.method,r=i===h.POSITION?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),t.makeArray(t(this._selector)).map(function(e){var n=void 0,a=o.getSelectorFromElement(e);return a&&(n=t(a)[0]),n&&(n.offsetWidth||n.offsetHeight)?[t(n)[i]().top+r,a]:null}).filter(function(t){return t}).sort(function(t,e){return t[0]-e[0]}).forEach(function(t){e._offsets.push(t[0]),e._targets.push(t[1])})},l.prototype.dispose=function(){t.removeData(this._element,a),t(this._scrollElement).off(s),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},l.prototype._getConfig=function(n){if(n=t.extend({},u,n),"string"!=typeof n.target){var i=t(n.target).attr("id");i||(i=o.getUID(e),t(n.target).attr("id",i)),n.target="#"+i}
return o.typeCheckConfig(e,n,c),n},l.prototype._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.scrollY:this._scrollElement.scrollTop},l.prototype._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},l.prototype._process=function(){var t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),n=this._config.offset+e-this._scrollElement.offsetHeight;if(this._scrollHeight!==e&&this.refresh(),t>=n){var i=this._targets[this._targets.length-1];this._activeTarget!==i&&this._activate(i)}
if(this._activeTarget&&t<this._offsets[0])return this._activeTarget=null,void this._clear();for(var r=this._offsets.length;r--;){this._activeTarget!==this._targets[r]&&t>=this._offsets[r]&&(void 0===this._offsets[r+1]||t<this._offsets[r+1])&&this._activate(this._targets[r])}},l.prototype._activate=function(e){this._activeTarget=e,this._clear();var n=this._selector.split(",");n=n.map(function(t){return t+'[data-target="'+e+'"],'+t+'[href="'+e+'"]'});var i=t(n.join(","));i.hasClass(d.DROPDOWN_ITEM)?(i.closest(p.DROPDOWN).find(p.DROPDOWN_TOGGLE).addClass(d.ACTIVE),i.addClass(d.ACTIVE)):i.parents(p.LI).find(p.NAV_LINKS).addClass(d.ACTIVE),t(this._scrollElement).trigger(f.ACTIVATE,{relatedTarget:e})},l.prototype._clear=function(){t(this._selector).filter(p.ACTIVE).removeClass(d.ACTIVE)},l._jQueryInterface=function(e){return this.each(function(){var n=t(this).data(a),r="object"===(void 0===e?"undefined":i(e))&&e||null;if(n||(n=new l(this,r),t(this).data(a,n)),"string"==typeof e){if(void 0===n[e])throw new Error('No method named "'+e+'"');n[e]()}})},r(l,null,[{key:"VERSION",get:function(){return"4.0.0-alpha.5"}},{key:"Default",get:function(){return u}}]),l}();t(window).on(f.LOAD_DATA_API,function(){for(var e=t.makeArray(t(p.DATA_SPY)),n=e.length;n--;){var i=t(e[n]);m._jQueryInterface.call(i,i.data())}}),t.fn[e]=m._jQueryInterface,t.fn[e].Constructor=m,t.fn[e].noConflict=function(){return t.fn[e]=l,m._jQueryInterface}}(jQuery),function(t){var e="tab",i="bs.tab",a="."+i,s=t.fn[e],l={HIDE:"hide"+a,HIDDEN:"hidden"+a,SHOW:"show"+a,SHOWN:"shown"+a,CLICK_DATA_API:"click"+a+".data-api"},u={DROPDOWN_MENU:"dropdown-menu",ACTIVE:"active",FADE:"fade",IN:"in"},c={A:"a",LI:"li",DROPDOWN:".dropdown",UL:"ul:not(.dropdown-menu)",FADE_CHILD:"> .nav-item .fade, > .fade",ACTIVE:".active",ACTIVE_CHILD:"> .nav-item > .active, > .active",DATA_TOGGLE:'[data-toggle="tab"], [data-toggle="pill"]',DROPDOWN_TOGGLE:".dropdown-toggle",DROPDOWN_ACTIVE_CHILD:"> .dropdown-menu .active"},f=function(){function e(t){n(this,e),this._element=t}
return e.prototype.show=function(){var e=this;if(!this._element.parentNode||this._element.parentNode.nodeType!==Node.ELEMENT_NODE||!t(this._element).hasClass(u.ACTIVE)){var n=void 0,i=void 0,r=t(this._element).closest(c.UL)[0],a=o.getSelectorFromElement(this._element);r&&(i=t.makeArray(t(r).find(c.ACTIVE)),i=i[i.length-1]);var s=t.Event(l.HIDE,{relatedTarget:this._element}),f=t.Event(l.SHOW,{relatedTarget:i});if(i&&t(i).trigger(s),t(this._element).trigger(f),!f.isDefaultPrevented()&&!s.isDefaultPrevented()){a&&(n=t(a)[0]),this._activate(this._element,r);var d=function(){var n=t.Event(l.HIDDEN,{relatedTarget:e._element}),r=t.Event(l.SHOWN,{relatedTarget:i});t(i).trigger(n),t(e._element).trigger(r)};n?this._activate(n,n.parentNode,d):d()}}},e.prototype.dispose=function(){t.removeClass(this._element,i),this._element=null},e.prototype._activate=function(e,n,i){var r=t(n).find(c.ACTIVE_CHILD)[0],a=i&&o.supportsTransitionEnd()&&(r&&t(r).hasClass(u.FADE)||Boolean(t(n).find(c.FADE_CHILD)[0])),s=t.proxy(this._transitionComplete,this,e,r,a,i);r&&a?t(r).one(o.TRANSITION_END,s).emulateTransitionEnd(150):s(),r&&t(r).removeClass(u.IN)},e.prototype._transitionComplete=function(e,n,i,r){if(n){t(n).removeClass(u.ACTIVE);var a=t(n).find(c.DROPDOWN_ACTIVE_CHILD)[0];a&&t(a).removeClass(u.ACTIVE),n.setAttribute("aria-expanded",!1)}
if(t(e).addClass(u.ACTIVE),e.setAttribute("aria-expanded",!0),i?(o.reflow(e),t(e).addClass(u.IN)):t(e).removeClass(u.FADE),e.parentNode&&t(e.parentNode).hasClass(u.DROPDOWN_MENU)){var s=t(e).closest(c.DROPDOWN)[0];s&&t(s).find(c.DROPDOWN_TOGGLE).addClass(u.ACTIVE),e.setAttribute("aria-expanded",!0)}
r&&r()},e._jQueryInterface=function(n){return this.each(function(){var r=t(this),o=r.data(i);if(o||(o=o=new e(this),r.data(i,o)),"string"==typeof n){if(void 0===o[n])throw new Error('No method named "'+n+'"');o[n]()}})},r(e,null,[{key:"VERSION",get:function(){return"4.0.0-alpha.5"}}]),e}();t(document).on(l.CLICK_DATA_API,c.DATA_TOGGLE,function(e){e.preventDefault(),f._jQueryInterface.call(t(this),"show")}),t.fn[e]=f._jQueryInterface,t.fn[e].Constructor=f,t.fn[e].noConflict=function(){return t.fn[e]=s,f._jQueryInterface}}(jQuery),function(t){if(void 0===window.Tether)throw new Error("Bootstrap tooltips require Tether (http://tether.io/)");var e="tooltip",a="bs.tooltip",s="."+a,l=t.fn[e],u={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:"0 0",constraints:[]},c={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"string",constraints:"array"},f={TOP:"bottom center",RIGHT:"middle left",BOTTOM:"top center",LEFT:"middle right"},d={IN:"in",OUT:"out"},p={HIDE:"hide"+s,HIDDEN:"hidden"+s,SHOW:"show"+s,SHOWN:"shown"+s,INSERTED:"inserted"+s,CLICK:"click"+s,FOCUSIN:"focusin"+s,FOCUSOUT:"focusout"+s,MOUSEENTER:"mouseenter"+s,MOUSELEAVE:"mouseleave"+s},h={FADE:"fade",IN:"in"},m={TOOLTIP:".tooltip",TOOLTIP_INNER:".tooltip-inner"},g={element:!1,enabled:!1},v={HOVER:"hover",FOCUS:"focus",CLICK:"click",MANUAL:"manual"},y=function(){function l(t,e){n(this,l),this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._tether=null,this.element=t,this.config=this._getConfig(e),this.tip=null,this._setListeners()}
return l.prototype.enable=function(){this._isEnabled=!0},l.prototype.disable=function(){this._isEnabled=!1},l.prototype.toggleEnabled=function(){this._isEnabled=!this._isEnabled},l.prototype.toggle=function(e){if(e){var n=this.constructor.DATA_KEY,i=t(e.currentTarget).data(n);i||(i=new this.constructor(e.currentTarget,this._getDelegateConfig()),t(e.currentTarget).data(n,i)),i._activeTrigger.click=!i._activeTrigger.click,i._isWithActiveTrigger()?i._enter(null,i):i._leave(null,i)}else{if(t(this.getTipElement()).hasClass(h.IN))return void this._leave(null,this);this._enter(null,this)}},l.prototype.dispose=function(){clearTimeout(this._timeout),this.cleanupTether(),t.removeData(this.element,this.constructor.DATA_KEY),t(this.element).off(this.constructor.EVENT_KEY),this.tip&&t(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,this._activeTrigger=null,this._tether=null,this.element=null,this.config=null,this.tip=null},l.prototype.show=function(){var e=this,n=t.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){t(this.element).trigger(n);var i=t.contains(this.element.ownerDocument.documentElement,this.element);if(n.isDefaultPrevented()||!i)return;var r=this.getTipElement(),a=o.getUID(this.constructor.NAME);r.setAttribute("id",a),this.element.setAttribute("aria-describedby",a),this.setContent(),this.config.animation&&t(r).addClass(h.FADE);var s="function"==typeof this.config.placement?this.config.placement.call(this,r,this.element):this.config.placement,u=this._getAttachment(s);t(r).data(this.constructor.DATA_KEY,this).appendTo(document.body),t(this.element).trigger(this.constructor.Event.INSERTED),this._tether=new Tether({attachment:u,element:r,target:this.element,classes:g,classPrefix:"bs-tether",offset:this.config.offset,constraints:this.config.constraints,addTargetClasses:!1}),o.reflow(r),this._tether.position(),t(r).addClass(h.IN);var c=function(){var n=e._hoverState;e._hoverState=null,t(e.element).trigger(e.constructor.Event.SHOWN),n===d.OUT&&e._leave(null,e)};if(o.supportsTransitionEnd()&&t(this.tip).hasClass(h.FADE))return void t(this.tip).one(o.TRANSITION_END,c).emulateTransitionEnd(l._TRANSITION_DURATION);c()}},l.prototype.hide=function(e){var n=this,i=this.getTipElement(),r=t.Event(this.constructor.Event.HIDE),a=function(){n._hoverState!==d.IN&&i.parentNode&&i.parentNode.removeChild(i),n.element.removeAttribute("aria-describedby"),t(n.element).trigger(n.constructor.Event.HIDDEN),n.cleanupTether(),e&&e()};t(this.element).trigger(r),r.isDefaultPrevented()||(t(i).removeClass(h.IN),o.supportsTransitionEnd()&&t(this.tip).hasClass(h.FADE)?t(i).one(o.TRANSITION_END,a).emulateTransitionEnd(150):a(),this._hoverState="")},l.prototype.isWithContent=function(){return Boolean(this.getTitle())},l.prototype.getTipElement=function(){return this.tip=this.tip||t(this.config.template)[0]},l.prototype.setContent=function(){var e=t(this.getTipElement());this.setElementContent(e.find(m.TOOLTIP_INNER),this.getTitle()),e.removeClass(h.FADE).removeClass(h.IN),this.cleanupTether()},l.prototype.setElementContent=function(e,n){var r=this.config.html;"object"===(void 0===n?"undefined":i(n))&&(n.nodeType||n.jquery)?r?t(n).parent().is(e)||e.empty().append(n):e.text(t(n).text()):e[r?"html":"text"](n)},l.prototype.getTitle=function(){var t=this.element.getAttribute("data-original-title");return t||(t="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),t},l.prototype.cleanupTether=function(){this._tether&&this._tether.destroy()},l.prototype._getAttachment=function(t){return f[t.toUpperCase()]},l.prototype._setListeners=function(){var e=this;this.config.trigger.split(" ").forEach(function(n){if("click"===n)t(e.element).on(e.constructor.Event.CLICK,e.config.selector,t.proxy(e.toggle,e));else if(n!==v.MANUAL){var i=n===v.HOVER?e.constructor.Event.MOUSEENTER:e.constructor.Event.FOCUSIN,r=n===v.HOVER?e.constructor.Event.MOUSELEAVE:e.constructor.Event.FOCUSOUT;t(e.element).on(i,e.config.selector,t.proxy(e._enter,e)).on(r,e.config.selector,t.proxy(e._leave,e))}}),this.config.selector?this.config=t.extend({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},l.prototype._fixTitle=function(){var t=i(this.element.getAttribute("data-original-title"));(this.element.getAttribute("title")||"string"!==t)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},l.prototype._enter=function(e,n){var i=this.constructor.DATA_KEY;return n=n||t(e.currentTarget).data(i),n||(n=new this.constructor(e.currentTarget,this._getDelegateConfig()),t(e.currentTarget).data(i,n)),e&&(n._activeTrigger["focusin"===e.type?v.FOCUS:v.HOVER]=!0),t(n.getTipElement()).hasClass(h.IN)||n._hoverState===d.IN?void(n._hoverState=d.IN):(clearTimeout(n._timeout),n._hoverState=d.IN,n.config.delay&&n.config.delay.show?void(n._timeout=setTimeout(function(){n._hoverState===d.IN&&n.show()},n.config.delay.show)):void n.show())},l.prototype._leave=function(e,n){var i=this.constructor.DATA_KEY;if(n=n||t(e.currentTarget).data(i),n||(n=new this.constructor(e.currentTarget,this._getDelegateConfig()),t(e.currentTarget).data(i,n)),e&&(n._activeTrigger["focusout"===e.type?v.FOCUS:v.HOVER]=!1),!n._isWithActiveTrigger())return clearTimeout(n._timeout),n._hoverState=d.OUT,n.config.delay&&n.config.delay.hide?void(n._timeout=setTimeout(function(){n._hoverState===d.OUT&&n.hide()},n.config.delay.hide)):void n.hide()},l.prototype._isWithActiveTrigger=function(){for(var t in this._activeTrigger)
if(this._activeTrigger[t])return!0;return!1},l.prototype._getConfig=function(n){return n=t.extend({},this.constructor.Default,t(this.element).data(),n),n.delay&&"number"==typeof n.delay&&(n.delay={show:n.delay,hide:n.delay}),o.typeCheckConfig(e,n,this.constructor.DefaultType),n},l.prototype._getDelegateConfig=function(){var t={};if(this.config)
for(var e in this.config)this.constructor.Default[e]!==this.config[e]&&(t[e]=this.config[e]);return t},l._jQueryInterface=function(e){return this.each(function(){var n=t(this).data(a),r="object"===(void 0===e?"undefined":i(e))?e:null;if((n||!/dispose|hide/.test(e))&&(n||(n=new l(this,r),t(this).data(a,n)),"string"==typeof e)){if(void 0===n[e])throw new Error('No method named "'+e+'"');n[e]()}})},r(l,null,[{key:"VERSION",get:function(){return"4.0.0-alpha.5"}},{key:"Default",get:function(){return u}},{key:"NAME",get:function(){return e}},{key:"DATA_KEY",get:function(){return a}},{key:"Event",get:function(){return p}},{key:"EVENT_KEY",get:function(){return s}},{key:"DefaultType",get:function(){return c}}]),l}();return t.fn[e]=y._jQueryInterface,t.fn[e].Constructor=y,t.fn[e].noConflict=function(){return t.fn[e]=l,y._jQueryInterface},y}(jQuery));!function(o){var s="popover",l="bs.popover",u="."+l,c=o.fn[s],f=o.extend({},a.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),d=o.extend({},a.DefaultType,{content:"(string|element|function)"}),p={FADE:"fade",IN:"in"},h={TITLE:".popover-title",CONTENT:".popover-content"},m={HIDE:"hide"+u,HIDDEN:"hidden"+u,SHOW:"show"+u,SHOWN:"shown"+u,INSERTED:"inserted"+u,CLICK:"click"+u,FOCUSIN:"focusin"+u,FOCUSOUT:"focusout"+u,MOUSEENTER:"mouseenter"+u,MOUSELEAVE:"mouseleave"+u},g=function(a){function c(){return n(this,c),t(this,a.apply(this,arguments))}
return e(c,a),c.prototype.isWithContent=function(){return this.getTitle()||this._getContent()},c.prototype.getTipElement=function(){return this.tip=this.tip||o(this.config.template)[0]},c.prototype.setContent=function(){var t=o(this.getTipElement());this.setElementContent(t.find(h.TITLE),this.getTitle()),this.setElementContent(t.find(h.CONTENT),this._getContent()),t.removeClass(p.FADE).removeClass(p.IN),this.cleanupTether()},c.prototype._getContent=function(){return this.element.getAttribute("data-content")||("function"==typeof this.config.content?this.config.content.call(this.element):this.config.content)},c._jQueryInterface=function(t){return this.each(function(){var e=o(this).data(l),n="object"===(void 0===t?"undefined":i(t))?t:null;if((e||!/destroy|hide/.test(t))&&(e||(e=new c(this,n),o(this).data(l,e)),"string"==typeof t)){if(void 0===e[t])throw new Error('No method named "'+t+'"');e[t]()}})},r(c,null,[{key:"VERSION",get:function(){return"4.0.0-alpha.5"}},{key:"Default",get:function(){return f}},{key:"NAME",get:function(){return s}},{key:"DATA_KEY",get:function(){return l}},{key:"Event",get:function(){return m}},{key:"EVENT_KEY",get:function(){return u}},{key:"DefaultType",get:function(){return d}}]),c}(a);o.fn[s]=g._jQueryInterface,o.fn[s].Constructor=g,o.fn[s].noConflict=function(){return o.fn[s]=c,g._jQueryInterface}}(jQuery)}()},function(t,e,n){"use strict";function i(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}
function r(t){return"function"==typeof t}
function o(t){return"number"==typeof t}
function a(t){return"object"==typeof t&&null!==t}
function s(t){return void 0===t}
t.exports=i,i.EventEmitter=i,i.prototype._events=void 0,i.prototype._maxListeners=void 0,i.defaultMaxListeners=10,i.prototype.setMaxListeners=function(t){if(!o(t)||t<0||isNaN(t))throw TypeError("n must be a positive number");return this._maxListeners=t,this},i.prototype.emit=function(t){var e,n,i,o,l,u;if(this._events||(this._events={}),"error"===t&&(!this._events.error||a(this._events.error)&&!this._events.error.length)){if((e=arguments[1])instanceof Error)throw e;var c=new Error('Uncaught, unspecified "error" event. ('+e+")");throw c.context=e,c}
if(n=this._events[t],s(n))return!1;if(r(n))switch(arguments.length){case 1:n.call(this);break;case 2:n.call(this,arguments[1]);break;case 3:n.call(this,arguments[1],arguments[2]);break;default:o=Array.prototype.slice.call(arguments,1),n.apply(this,o)}else if(a(n))
for(o=Array.prototype.slice.call(arguments,1),u=n.slice(),i=u.length,l=0;l<i;l++)u[l].apply(this,o);return!0},i.prototype.addListener=function(t,e){var n;if(!r(e))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",t,r(e.listener)?e.listener:e),this._events[t]?a(this._events[t])?this._events[t].push(e):this._events[t]=[this._events[t],e]:this._events[t]=e,a(this._events[t])&&!this._events[t].warned&&(n=s(this._maxListeners)?i.defaultMaxListeners:this._maxListeners)&&n>0&&this._events[t].length>n&&(this._events[t].warned=!0,console.trace),this},i.prototype.on=i.prototype.addListener,i.prototype.once=function(t,e){function n(){this.removeListener(t,n),i||(i=!0,e.apply(this,arguments))}
if(!r(e))throw TypeError("listener must be a function");var i=!1;return n.listener=e,this.on(t,n),this},i.prototype.removeListener=function(t,e){var n,i,o,s;if(!r(e))throw TypeError("listener must be a function");if(!this._events||!this._events[t])return this;if(n=this._events[t],o=n.length,i=-1,n===e||r(n.listener)&&n.listener===e)delete this._events[t],this._events.removeListener&&this.emit("removeListener",t,e);else if(a(n)){for(s=o;s-->0;)
if(n[s]===e||n[s].listener&&n[s].listener===e){i=s;break}
if(i<0)return this;1===n.length?(n.length=0,delete this._events[t]):n.splice(i,1),this._events.removeListener&&this.emit("removeListener",t,e)}
return this},i.prototype.removeAllListeners=function(t){var e,n;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[t]&&delete this._events[t],this;if(0===arguments.length){for(e in this._events)"removeListener"!==e&&this.removeAllListeners(e);return this.removeAllListeners("removeListener"),this._events={},this}
if(n=this._events[t],r(n))this.removeListener(t,n);else if(n)
for(;n.length;)this.removeListener(t,n[n.length-1]);return delete this._events[t],this},i.prototype.listeners=function(t){return this._events&&this._events[t]?r(this._events[t])?[this._events[t]]:this._events[t].slice():[]},i.prototype.listenerCount=function(t){if(this._events){var e=this._events[t];if(r(e))return 1;if(e)return e.length}
return 0},i.listenerCount=function(t,e){return t.listenerCount(e)}},function(t,e,n){"use strict";var i,i;!function(e){t.exports=e()}(function(){return function t(e,n,r){function o(s,l){if(!n[s]){if(!e[s]){var u="function"==typeof i&&i;if(!l&&u)return i(s,!0);if(a)return a(s,!0);var c=new Error("Cannot find module '"+s+"'");throw c.code="MODULE_NOT_FOUND",c}
var f=n[s]={exports:{}};e[s][0].call(f.exports,function(t){var n=e[s][1][t];return o(n||t)},f,f.exports,t,e,n,r)}
return n[s].exports}
for(var a="function"==typeof i&&i,s=0;s<r.length;s++)o(r[s]);return o}({1:[function(t,e,n){e.exports=function(t){var e,n,i,r=-1;if(t.lines.length>1&&"flex-start"===t.style.alignContent)
for(e=0;i=t.lines[++r];)i.crossStart=e,e+=i.cross;else if(t.lines.length>1&&"flex-end"===t.style.alignContent)
for(e=t.flexStyle.crossSpace;i=t.lines[++r];)i.crossStart=e,e+=i.cross;else if(t.lines.length>1&&"center"===t.style.alignContent)
for(e=t.flexStyle.crossSpace/2;i=t.lines[++r];)i.crossStart=e,e+=i.cross;else if(t.lines.length>1&&"space-between"===t.style.alignContent)
for(n=t.flexStyle.crossSpace/(t.lines.length-1),e=0;i=t.lines[++r];)i.crossStart=e,e+=i.cross+n;else if(t.lines.length>1&&"space-around"===t.style.alignContent)
for(n=2*t.flexStyle.crossSpace/(2*t.lines.length),e=n/2;i=t.lines[++r];)i.crossStart=e,e+=i.cross+n;else for(n=t.flexStyle.crossSpace/t.lines.length,e=t.flexStyle.crossInnerBefore;i=t.lines[++r];)i.crossStart=e,i.cross+=n,e+=i.cross}},{}],2:[function(t,e,n){e.exports=function(t){for(var e,n=-1;line=t.lines[++n];)
for(e=-1;child=line.children[++e];){var i=child.style.alignSelf;"auto"===i&&(i=t.style.alignItems),"flex-start"===i?child.flexStyle.crossStart=line.crossStart:"flex-end"===i?child.flexStyle.crossStart=line.crossStart+line.cross-child.flexStyle.crossOuter:"center"===i?child.flexStyle.crossStart=line.crossStart+(line.cross-child.flexStyle.crossOuter)/2:(child.flexStyle.crossStart=line.crossStart,child.flexStyle.crossOuter=line.cross,child.flexStyle.cross=child.flexStyle.crossOuter-child.flexStyle.crossBefore-child.flexStyle.crossAfter)}}},{}],3:[function(t,e,n){e.exports=function(t,e){var n="row"===e||"row-reverse"===e,i=t.mainAxis;if(i){n&&"inline"===i||!n&&"block"===i||(t.flexStyle={main:t.flexStyle.cross,cross:t.flexStyle.main,mainOffset:t.flexStyle.crossOffset,crossOffset:t.flexStyle.mainOffset,mainBefore:t.flexStyle.crossBefore,mainAfter:t.flexStyle.crossAfter,crossBefore:t.flexStyle.mainBefore,crossAfter:t.flexStyle.mainAfter,mainInnerBefore:t.flexStyle.crossInnerBefore,mainInnerAfter:t.flexStyle.crossInnerAfter,crossInnerBefore:t.flexStyle.mainInnerBefore,crossInnerAfter:t.flexStyle.mainInnerAfter,mainBorderBefore:t.flexStyle.crossBorderBefore,mainBorderAfter:t.flexStyle.crossBorderAfter,crossBorderBefore:t.flexStyle.mainBorderBefore,crossBorderAfter:t.flexStyle.mainBorderAfter})}else t.flexStyle=n?{main:t.style.width,cross:t.style.height,mainOffset:t.style.offsetWidth,crossOffset:t.style.offsetHeight,mainBefore:t.style.marginLeft,mainAfter:t.style.marginRight,crossBefore:t.style.marginTop,crossAfter:t.style.marginBottom,mainInnerBefore:t.style.paddingLeft,mainInnerAfter:t.style.paddingRight,crossInnerBefore:t.style.paddingTop,crossInnerAfter:t.style.paddingBottom,mainBorderBefore:t.style.borderLeftWidth,mainBorderAfter:t.style.borderRightWidth,crossBorderBefore:t.style.borderTopWidth,crossBorderAfter:t.style.borderBottomWidth}:{main:t.style.height,cross:t.style.width,mainOffset:t.style.offsetHeight,crossOffset:t.style.offsetWidth,mainBefore:t.style.marginTop,mainAfter:t.style.marginBottom,crossBefore:t.style.marginLeft,crossAfter:t.style.marginRight,mainInnerBefore:t.style.paddingTop,mainInnerAfter:t.style.paddingBottom,crossInnerBefore:t.style.paddingLeft,crossInnerAfter:t.style.paddingRight,mainBorderBefore:t.style.borderTopWidth,mainBorderAfter:t.style.borderBottomWidth,crossBorderBefore:t.style.borderLeftWidth,crossBorderAfter:t.style.borderRightWidth},"content-box"===t.style.boxSizing&&("number"==typeof t.flexStyle.main&&(t.flexStyle.main+=t.flexStyle.mainInnerBefore+t.flexStyle.mainInnerAfter+t.flexStyle.mainBorderBefore+t.flexStyle.mainBorderAfter),"number"==typeof t.flexStyle.cross&&(t.flexStyle.cross+=t.flexStyle.crossInnerBefore+t.flexStyle.crossInnerAfter+t.flexStyle.crossBorderBefore+t.flexStyle.crossBorderAfter));t.mainAxis=n?"inline":"block",t.crossAxis=n?"block":"inline","number"==typeof t.style.flexBasis&&(t.flexStyle.main=t.style.flexBasis+t.flexStyle.mainInnerBefore+t.flexStyle.mainInnerAfter+t.flexStyle.mainBorderBefore+t.flexStyle.mainBorderAfter),t.flexStyle.mainOuter=t.flexStyle.main,t.flexStyle.crossOuter=t.flexStyle.cross,"auto"===t.flexStyle.mainOuter&&(t.flexStyle.mainOuter=t.flexStyle.mainOffset),"auto"===t.flexStyle.crossOuter&&(t.flexStyle.crossOuter=t.flexStyle.crossOffset),"number"==typeof t.flexStyle.mainBefore&&(t.flexStyle.mainOuter+=t.flexStyle.mainBefore),"number"==typeof t.flexStyle.mainAfter&&(t.flexStyle.mainOuter+=t.flexStyle.mainAfter),"number"==typeof t.flexStyle.crossBefore&&(t.flexStyle.crossOuter+=t.flexStyle.crossBefore),"number"==typeof t.flexStyle.crossAfter&&(t.flexStyle.crossOuter+=t.flexStyle.crossAfter)}},{}],4:[function(t,e,n){var i=t("../reduce");e.exports=function(t){if(t.mainSpace>0){var e=i(t.children,function(t,e){return t+parseFloat(e.style.flexGrow)},0);e>0&&(t.main=i(t.children,function(n,i){return"auto"===i.flexStyle.main?i.flexStyle.main=i.flexStyle.mainOffset+parseFloat(i.style.flexGrow)/e*t.mainSpace:i.flexStyle.main+=parseFloat(i.style.flexGrow)/e*t.mainSpace,i.flexStyle.mainOuter=i.flexStyle.main+i.flexStyle.mainBefore+i.flexStyle.mainAfter,n+i.flexStyle.mainOuter},0),t.mainSpace=0)}}},{"../reduce":12}],5:[function(t,e,n){var i=t("../reduce");e.exports=function(t){if(t.mainSpace<0){var e=i(t.children,function(t,e){return t+parseFloat(e.style.flexShrink)},0);e>0&&(t.main=i(t.children,function(n,i){return i.flexStyle.main+=parseFloat(i.style.flexShrink)/e*t.mainSpace,i.flexStyle.mainOuter=i.flexStyle.main+i.flexStyle.mainBefore+i.flexStyle.mainAfter,n+i.flexStyle.mainOuter},0),t.mainSpace=0)}}},{"../reduce":12}],6:[function(t,e,n){var i=t("../reduce");e.exports=function(t){var e;t.lines=[e={main:0,cross:0,children:[]}];for(var n,r=-1;n=t.children[++r];)"nowrap"===t.style.flexWrap||0===e.children.length||"auto"===t.flexStyle.main||t.flexStyle.main-t.flexStyle.mainInnerBefore-t.flexStyle.mainInnerAfter-t.flexStyle.mainBorderBefore-t.flexStyle.mainBorderAfter>=e.main+n.flexStyle.mainOuter?(e.main+=n.flexStyle.mainOuter,e.cross=Math.max(e.cross,n.flexStyle.crossOuter)):t.lines.push(e={main:n.flexStyle.mainOuter,cross:n.flexStyle.crossOuter,children:[]}),e.children.push(n);t.flexStyle.mainLines=i(t.lines,function(t,e){return Math.max(t,e.main)},0),t.flexStyle.crossLines=i(t.lines,function(t,e){return t+e.cross},0),"auto"===t.flexStyle.main&&(t.flexStyle.main=Math.max(t.flexStyle.mainOffset,t.flexStyle.mainLines+t.flexStyle.mainInnerBefore+t.flexStyle.mainInnerAfter+t.flexStyle.mainBorderBefore+t.flexStyle.mainBorderAfter)),"auto"===t.flexStyle.cross&&(t.flexStyle.cross=Math.max(t.flexStyle.crossOffset,t.flexStyle.crossLines+t.flexStyle.crossInnerBefore+t.flexStyle.crossInnerAfter+t.flexStyle.crossBorderBefore+t.flexStyle.crossBorderAfter)),t.flexStyle.crossSpace=t.flexStyle.cross-t.flexStyle.crossInnerBefore-t.flexStyle.crossInnerAfter-t.flexStyle.crossBorderBefore-t.flexStyle.crossBorderAfter-t.flexStyle.crossLines,t.flexStyle.mainOuter=t.flexStyle.main+t.flexStyle.mainBefore+t.flexStyle.mainAfter,t.flexStyle.crossOuter=t.flexStyle.cross+t.flexStyle.crossBefore+t.flexStyle.crossAfter}},{"../reduce":12}],7:[function(t,e,n){function i(e){for(var n,i=-1;n=e.children[++i];)t("./flex-direction")(n,e.style.flexDirection);t("./flex-direction")(e,e.style.flexDirection),t("./order")(e),t("./flexbox-lines")(e),t("./align-content")(e),i=-1;for(var r;r=e.lines[++i];)r.mainSpace=e.flexStyle.main-e.flexStyle.mainInnerBefore-e.flexStyle.mainInnerAfter-e.flexStyle.mainBorderBefore-e.flexStyle.mainBorderAfter-r.main,t("./flex-grow")(r),t("./flex-shrink")(r),t("./margin-main")(r),t("./margin-cross")(r),t("./justify-content")(r,e.style.justifyContent,e);t("./align-items")(e)}
e.exports=i},{"./align-content":1,"./align-items":2,"./flex-direction":3,"./flex-grow":4,"./flex-shrink":5,"./flexbox-lines":6,"./justify-content":8,"./margin-cross":9,"./margin-main":10,"./order":11}],8:[function(t,e,n){e.exports=function(t,e,n){var i,r,o,a=n.flexStyle.mainInnerBefore,s=-1;if("flex-end"===e)
for(i=t.mainSpace,i+=a;o=t.children[++s];)o.flexStyle.mainStart=i,i+=o.flexStyle.mainOuter;else if("center"===e)
for(i=t.mainSpace/2,i+=a;o=t.children[++s];)o.flexStyle.mainStart=i,i+=o.flexStyle.mainOuter;else if("space-between"===e)
for(r=t.mainSpace/(t.children.length-1),i=0,i+=a;o=t.children[++s];)o.flexStyle.mainStart=i,i+=o.flexStyle.mainOuter+r;else if("space-around"===e)
for(r=2*t.mainSpace/(2*t.children.length),i=r/2,i+=a;o=t.children[++s];)o.flexStyle.mainStart=i,i+=o.flexStyle.mainOuter+r;else for(i=0,i+=a;o=t.children[++s];)o.flexStyle.mainStart=i,i+=o.flexStyle.mainOuter}},{}],9:[function(t,e,n){e.exports=function(t){for(var e,n=-1;e=t.children[++n];){var i=0;"auto"===e.flexStyle.crossBefore&&++i,"auto"===e.flexStyle.crossAfter&&++i;var r=t.cross-e.flexStyle.crossOuter;"auto"===e.flexStyle.crossBefore&&(e.flexStyle.crossBefore=r/i),"auto"===e.flexStyle.crossAfter&&(e.flexStyle.crossAfter=r/i),"auto"===e.flexStyle.cross?e.flexStyle.crossOuter=e.flexStyle.crossOffset+e.flexStyle.crossBefore+e.flexStyle.crossAfter:e.flexStyle.crossOuter=e.flexStyle.cross+e.flexStyle.crossBefore+e.flexStyle.crossAfter}}},{}],10:[function(t,e,n){e.exports=function(t){for(var e,n=0,i=-1;e=t.children[++i];)"auto"===e.flexStyle.mainBefore&&++n,"auto"===e.flexStyle.mainAfter&&++n;if(n>0){for(i=-1;e=t.children[++i];)"auto"===e.flexStyle.mainBefore&&(e.flexStyle.mainBefore=t.mainSpace/n),"auto"===e.flexStyle.mainAfter&&(e.flexStyle.mainAfter=t.mainSpace/n),"auto"===e.flexStyle.main?e.flexStyle.mainOuter=e.flexStyle.mainOffset+e.flexStyle.mainBefore+e.flexStyle.mainAfter:e.flexStyle.mainOuter=e.flexStyle.main+e.flexStyle.mainBefore+e.flexStyle.mainAfter;t.mainSpace=0}}},{}],11:[function(t,e,n){var i=/^(column|row)-reverse$/;e.exports=function(t){t.children.sort(function(t,e){return t.style.order-e.style.order||t.index-e.index}),i.test(t.style.flexDirection)&&t.children.reverse()}},{}],12:[function(t,e,n){function i(t,e,n){for(var i=t.length,r=-1;++r<i;)r in t&&(n=e(n,t[r],r));return n}
e.exports=i},{}],13:[function(t,e,n){function i(t){s(a(t))}
var r=t("./read"),o=t("./write"),a=t("./readAll"),s=t("./writeAll");e.exports=i,e.exports.read=r,e.exports.write=o,e.exports.readAll=a,e.exports.writeAll=s},{"./read":15,"./readAll":16,"./write":17,"./writeAll":18}],14:[function(t,e,n){function i(t,e){var n=String(t).match(o);if(!n)return t;var i=n[1],a=n[2];return"px"===a?1*i:"cm"===a?.3937*i*96:"in"===a?96*i:"mm"===a?.3937*i*96/10:"pc"===a?12*i*96/72:"pt"===a?96*i/72:"rem"===a?16*i:r(t,e)}
function r(t,e){a.style.cssText="border:none!important;clip:rect(0 0 0 0)!important;display:block!important;font-size:1em!important;height:0!important;margin:0!important;padding:0!important;position:relative!important;width:"+t+"!important",e.parentNode.insertBefore(a,e.nextSibling);var n=a.offsetWidth;return e.parentNode.removeChild(a),n}
e.exports=i;var o=/^([-+]?\d*\.?\d+)(%|[a-z]+)$/,a=document.createElement("div")},{}],15:[function(t,e,n){function i(t){var e={alignContent:"stretch",alignItems:"stretch",alignSelf:"auto",borderBottomWidth:0,borderLeftWidth:0,borderRightWidth:0,borderTopWidth:0,boxSizing:"content-box",display:"inline",flexBasis:"auto",flexDirection:"row",flexGrow:0,flexShrink:1,flexWrap:"nowrap",justifyContent:"flex-start",height:"auto",marginTop:0,marginRight:0,marginLeft:0,marginBottom:0,paddingTop:0,paddingRight:0,paddingLeft:0,paddingBottom:0,maxHeight:"none",maxWidth:"none",minHeight:0,minWidth:0,order:0,position:"static",width:"auto"};if(t instanceof Element){var n=t.hasAttribute("data-style"),i=n?t.getAttribute("data-style"):t.getAttribute("style")||"";n||t.setAttribute("data-style",i),a(e,window.getComputedStyle&&getComputedStyle(t)||{}),r(e,t.currentStyle||{}),o(e,i);for(var s in e)e[s]=l(e[s],t);var u=t.getBoundingClientRect();e.offsetHeight=u.height||t.offsetHeight,e.offsetWidth=u.width||t.offsetWidth}
return{element:t,style:e}}
function r(t,e){for(var n in t){if(n in e)t[n]=e[n];else{var i=n.replace(/[A-Z]/g,"-$&").toLowerCase();i in e&&(t[n]=e[i])}}
"-js-display" in e&&(t.display=e["-js-display"])}
function o(t,e){for(var n;n=s.exec(e);){t[n[1].toLowerCase().replace(/-[a-z]/g,function(t){return t.slice(1).toUpperCase()})]=n[2]}}
function a(t,e){for(var n in t){n in e&&!/^(alignSelf|height|width)$/.test(n)&&(t[n]=e[n])}}
e.exports=i;var s=/([^\s:;]+)\s*:\s*([^;]+?)\s*(;|$)/g,l=t("./getComputedLength")},{"./getComputedLength":14}],16:[function(t,e,n){function i(t){var e=[];return r(t,e),e}
function r(t,e){for(var n,i=o(t),s=[],l=-1;n=t.childNodes[++l];){var u=3===n.nodeType&&!/^\s*$/.test(n.nodeValue);if(i&&u){var c=n;n=t.insertBefore(document.createElement("flex-item"),c),n.appendChild(c)}
if(n instanceof Element){var f=r(n,e);if(i){var d=n.style;d.display="inline-block",d.position="absolute",f.style=a(n).style,s.push(f)}}}
var p={element:t,children:s};return i&&(p.style=a(t).style,e.push(p)),p}
function o(t){var e=t instanceof Element,n=e&&t.getAttribute("data-style"),i=e&&t.currentStyle&&t.currentStyle["-js-display"];return s.test(n)||l.test(i)}
e.exports=i;var a=t("../read"),s=/(^|;)\s*display\s*:\s*(inline-)?flex\s*(;|$)/i,l=/^(inline-)?flex$/i},{"../read":15}],17:[function(t,e,n){function i(t){o(t);var e=t.element.style,n="inline"===t.mainAxis?["main","cross"]:["cross","main"];e.boxSizing="content-box",e.display="block",e.position="relative",e.width=r(t.flexStyle[n[0]]-t.flexStyle[n[0]+"InnerBefore"]-t.flexStyle[n[0]+"InnerAfter"]-t.flexStyle[n[0]+"BorderBefore"]-t.flexStyle[n[0]+"BorderAfter"]),e.height=r(t.flexStyle[n[1]]-t.flexStyle[n[1]+"InnerBefore"]-t.flexStyle[n[1]+"InnerAfter"]-t.flexStyle[n[1]+"BorderBefore"]-t.flexStyle[n[1]+"BorderAfter"]);for(var i,a=-1;i=t.children[++a];){var s=i.element.style,l="inline"===i.mainAxis?["main","cross"]:["cross","main"];s.boxSizing="content-box",s.display="block",s.position="absolute","auto"!==i.flexStyle[l[0]]&&(s.width=r(i.flexStyle[l[0]]-i.flexStyle[l[0]+"InnerBefore"]-i.flexStyle[l[0]+"InnerAfter"]-i.flexStyle[l[0]+"BorderBefore"]-i.flexStyle[l[0]+"BorderAfter"])),"auto"!==i.flexStyle[l[1]]&&(s.height=r(i.flexStyle[l[1]]-i.flexStyle[l[1]+"InnerBefore"]-i.flexStyle[l[1]+"InnerAfter"]-i.flexStyle[l[1]+"BorderBefore"]-i.flexStyle[l[1]+"BorderAfter"])),s.top=r(i.flexStyle[l[1]+"Start"]),s.left=r(i.flexStyle[l[0]+"Start"]),s.marginTop=r(i.flexStyle[l[1]+"Before"]),s.marginRight=r(i.flexStyle[l[0]+"After"]),s.marginBottom=r(i.flexStyle[l[1]+"After"]),s.marginLeft=r(i.flexStyle[l[0]+"Before"])}}
function r(t){return"string"==typeof t?t:Math.max(t,0)+"px"}
e.exports=i;var o=t("../flexbox")},{"../flexbox":7}],18:[function(t,e,n){function i(t){for(var e,n=-1;e=t[++n];)r(e)}
e.exports=i;var r=t("../write")},{"../write":17}]},{},[13])(13)})},function(t,e,n){"use strict";var i,r;!function(o,a){i=a,void 0!==(r="function"==typeof i?i.call(e,n,e,t):i)&&(t.exports=r)}(0,function(t,e,n){function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}
function r(t){var e=t.getBoundingClientRect(),n={};for(var i in e)n[i]=e[i];if(t.ownerDocument!==document){var o=t.ownerDocument.defaultView.frameElement;if(o){var a=r(o);n.top+=a.top,n.bottom+=a.top,n.left+=a.left,n.right+=a.left}}
return n}
function o(t){var e=getComputedStyle(t)||{},n=e.position,i=[];if("fixed"===n)return[t];for(var r=t;(r=r.parentNode)&&r&&1===r.nodeType;){var o=void 0;try{o=getComputedStyle(r)}catch(t){}
if(void 0===o||null===o)return i.push(r),i;var a=o,s=a.overflow,l=a.overflowX;/(auto|scroll)/.test(s+a.overflowY+l)&&("absolute"!==n||["relative","absolute","fixed"].indexOf(o.position)>=0)&&i.push(r)}
return i.push(t.ownerDocument.body),t.ownerDocument!==document&&i.push(t.ownerDocument.defaultView),i}
function a(){C&&document.body.removeChild(C),C=null}
function s(t){var e=void 0;t===document?(e=document,t=document.documentElement):e=t.ownerDocument;var n=e.documentElement,i=r(t),o=I();return i.top-=o.top,i.left-=o.left,void 0===i.width&&(i.width=document.body.scrollWidth-i.left-i.right),void 0===i.height&&(i.height=document.body.scrollHeight-i.top-i.bottom),i.top=i.top-n.clientTop,i.left=i.left-n.clientLeft,i.right=e.body.clientWidth-i.width-i.left,i.bottom=e.body.clientHeight-i.height-i.top,i}
function l(t){return t.offsetParent||document.documentElement}
function u(){if(O)return O;var t=document.createElement("div");t.style.width="100%",t.style.height="200px";var e=document.createElement("div");c(e.style,{position:"absolute",top:0,left:0,pointerEvents:"none",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),e.appendChild(t),document.body.appendChild(e);var n=t.offsetWidth;e.style.overflow="scroll";var i=t.offsetWidth;n===i&&(i=e.clientWidth),document.body.removeChild(e);var r=n-i;return O={width:r,height:r}}
function c(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],e=[];return Array.prototype.push.apply(e,arguments),e.slice(1).forEach(function(e){if(e)
for(var n in e)({}).hasOwnProperty.call(e,n)&&(t[n]=e[n])}),t}
function f(t,e){if(void 0!==t.classList)e.split(" ").forEach(function(e){e.trim()&&t.classList.remove(e)});else{var n=new RegExp("(^| )"+e.split(" ").join("|")+"( |$)","gi"),i=h(t).replace(n," ");m(t,i)}}
function d(t,e){if(void 0!==t.classList)e.split(" ").forEach(function(e){e.trim()&&t.classList.add(e)});else{f(t,e);var n=h(t)+" "+e;m(t,n)}}
function p(t,e){if(void 0!==t.classList)return t.classList.contains(e);var n=h(t);return new RegExp("(^| )"+e+"( |$)","gi").test(n)}
function h(t){return t.className instanceof t.ownerDocument.defaultView.SVGAnimatedString?t.className.baseVal:t.className}
function m(t,e){t.setAttribute("class",e)}
function g(t,e,n){n.forEach(function(n){-1===e.indexOf(n)&&p(t,n)&&f(t,n)}),e.forEach(function(e){p(t,e)||d(t,e)})}
function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}
function v(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}
function y(t,e){var n=arguments.length<=2||void 0===arguments[2]?1:arguments[2];return t+n>=e&&e>=t-n}
function b(){return"undefined"!=typeof performance&&void 0!==performance.now?performance.now():+new Date}
function _(){for(var t={top:0,left:0},e=arguments.length,n=Array(e),i=0;i<e;i++)n[i]=arguments[i];return n.forEach(function(e){var n=e.top,i=e.left;"string"==typeof n&&(n=parseFloat(n,10)),"string"==typeof i&&(i=parseFloat(i,10)),t.top+=n,t.left+=i}),t}
function x(t,e){return"string"==typeof t.left&&-1!==t.left.indexOf("%")&&(t.left=parseFloat(t.left,10)/100*e.width),"string"==typeof t.top&&-1!==t.top.indexOf("%")&&(t.top=parseFloat(t.top,10)/100*e.height),t}
function w(t,e){return"scrollParent"===e?e=t.scrollParents[0]:"window"===e&&(e=[pageXOffset,pageYOffset,innerWidth+pageXOffset,innerHeight+pageYOffset]),e===document&&(e=e.documentElement),void 0!==e.nodeType&&function(){var t=e,n=s(e),i=n,r=getComputedStyle(e);if(e=[i.left,i.top,n.width+i.left,n.height+i.top],t.ownerDocument!==document){var o=t.ownerDocument.defaultView;e[0]+=o.pageXOffset,e[1]+=o.pageYOffset,e[2]+=o.pageXOffset,e[3]+=o.pageYOffset}
Y.forEach(function(t,n){t=t[0].toUpperCase()+t.substr(1),"Top"===t||"Left"===t?e[n]+=parseFloat(r["border"+t+"Width"]):e[n]-=parseFloat(r["border"+t+"Width"])})}(),e}
var S=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value" in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}
return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),E=void 0;void 0===E&&(E={modules:[]});var C=null,T=function(){var t=0;return function(){return++t}}(),A={},I=function(){var t=C;t&&document.body.contains(t)||(t=document.createElement("div"),t.setAttribute("data-tether-id",T()),c(t.style,{top:0,left:0,position:"absolute"}),document.body.appendChild(t),C=t);var e=t.getAttribute("data-tether-id");return void 0===A[e]&&(A[e]=r(t),D(function(){delete A[e]})),A[e]},O=null,k=[],D=function(t){k.push(t)},N=function(){for(var t=void 0;t=k.pop();)t()},P=function(){function t(){i(this,t)}
return S(t,[{key:"on",value:function(t,e,n){var i=!(arguments.length<=3||void 0===arguments[3])&&arguments[3];void 0===this.bindings&&(this.bindings={}),void 0===this.bindings[t]&&(this.bindings[t]=[]),this.bindings[t].push({handler:e,ctx:n,once:i})}},{key:"once",value:function(t,e,n){this.on(t,e,n,!0)}},{key:"off",value:function(t,e){if(void 0!==this.bindings&&void 0!==this.bindings[t])
if(void 0===e)delete this.bindings[t];else for(var n=0;n<this.bindings[t].length;)this.bindings[t][n].handler===e?this.bindings[t].splice(n,1):++n}},{key:"trigger",value:function(t){if(void 0!==this.bindings&&this.bindings[t]){for(var e=0,n=arguments.length,i=Array(n>1?n-1:0),r=1;r<n;r++)i[r-1]=arguments[r];for(;e<this.bindings[t].length;){var o=this.bindings[t][e],a=o.handler,s=o.ctx,l=o.once,u=s;void 0===u&&(u=this),a.apply(u,i),l?this.bindings[t].splice(e,1):++e}}}}]),t}();E.Utils={getActualBoundingClientRect:r,getScrollParents:o,getBounds:s,getOffsetParent:l,extend:c,addClass:d,removeClass:f,hasClass:p,updateClasses:g,defer:D,flush:N,uniqueId:T,Evented:P,getScrollBarSize:u,removeUtilElements:a};var L=function(){function t(t,e){var n=[],i=!0,r=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(i=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);i=!0);}catch(t){r=!0,o=t}finally{try{!i&&s.return&&s.return()}finally{if(r)throw o}}
return n}
return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),S=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value" in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}
return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),j=function(t,e,n){for(var i=!0;i;){var r=t,o=e,a=n;i=!1,null===r&&(r=Function.prototype);var s=Object.getOwnPropertyDescriptor(r,o);if(void 0!==s){if("value" in s)return s.value;var l=s.get;if(void 0===l)return;return l.call(a)}
var u=Object.getPrototypeOf(r);if(null===u)return;t=u,e=o,n=a,i=!0,s=u=void 0}};if(void 0===E)throw new Error("You must include the utils.js file before tether.js");var B=E.Utils,o=B.getScrollParents,s=B.getBounds,l=B.getOffsetParent,c=B.extend,d=B.addClass,f=B.removeClass,g=B.updateClasses,D=B.defer,N=B.flush,u=B.getScrollBarSize,a=B.removeUtilElements,V=function(){if("undefined"==typeof document)return"";for(var t=document.createElement("div"),e=["transform","WebkitTransform","OTransform","MozTransform","msTransform"],n=0;n<e.length;++n){var i=e[n];if(void 0!==t.style[i])return i}}(),F=[],R=function(){F.forEach(function(t){t.position(!1)}),N()};!function(){var t=null,e=null,n=null,i=function i(){if(void 0!==e&&e>16)return e=Math.min(e-16,250),void(n=setTimeout(i,250));void 0!==t&&b()-t<10||(null!=n&&(clearTimeout(n),n=null),t=b(),R(),e=b()-t)};"undefined"!=typeof window&&void 0!==window.addEventListener&&["resize","scroll","touchmove"].forEach(function(t){window.addEventListener(t,i)})}();var M={center:"center",left:"right",right:"left"},H={middle:"middle",top:"bottom",bottom:"top"},W={top:0,left:0,middle:"50%",center:"50%",bottom:"100%",right:"100%"},U=function(t,e){var n=t.left,i=t.top;return"auto"===n&&(n=M[e.left]),"auto"===i&&(i=H[e.top]),{left:n,top:i}},q=function(t){var e=t.left,n=t.top;return void 0!==W[t.left]&&(e=W[t.left]),void 0!==W[t.top]&&(n=W[t.top]),{left:e,top:n}},z=function(t){var e=t.split(" "),n=L(e,2);return{top:n[0],left:n[1]}},$=z,Q=function(t){function e(t){var n=this;i(this,e),j(Object.getPrototypeOf(e.prototype),"constructor",this).call(this),this.position=this.position.bind(this),F.push(this),this.history=[],this.setOptions(t,!1),E.modules.forEach(function(t){void 0!==t.initialize&&t.initialize.call(n)}),this.position()}
return v(e,t),S(e,[{key:"getClass",value:function(){var t=arguments.length<=0||void 0===arguments[0]?"":arguments[0],e=this.options.classes;return void 0!==e&&e[t]?this.options.classes[t]:this.options.classPrefix?this.options.classPrefix+"-"+t:t}},{key:"setOptions",value:function(t){var e=this,n=arguments.length<=1||void 0===arguments[1]||arguments[1],i={offset:"0 0",targetOffset:"0 0",targetAttachment:"auto auto",classPrefix:"tether"};this.options=c(i,t);var r=this.options,a=r.element,s=r.target,l=r.targetModifier;if(this.element=a,this.target=s,this.targetModifier=l,"viewport"===this.target?(this.target=document.body,this.targetModifier="visible"):"scroll-handle"===this.target&&(this.target=document.body,this.targetModifier="scroll-handle"),["element","target"].forEach(function(t){if(void 0===e[t])throw new Error("Tether Error: Both element and target must be defined");void 0!==e[t].jquery?e[t]=e[t][0]:"string"==typeof e[t]&&(e[t]=document.querySelector(e[t]))}),d(this.element,this.getClass("element")),!1!==this.options.addTargetClasses&&d(this.target,this.getClass("target")),!this.options.attachment)throw new Error("Tether Error: You must provide an attachment");this.targetAttachment=$(this.options.targetAttachment),this.attachment=$(this.options.attachment),this.offset=z(this.options.offset),this.targetOffset=z(this.options.targetOffset),void 0!==this.scrollParents&&this.disable(),"scroll-handle"===this.targetModifier?this.scrollParents=[this.target]:this.scrollParents=o(this.target),!1!==this.options.enabled&&this.enable(n)}},{key:"getTargetBounds",value:function(){if(void 0===this.targetModifier)return s(this.target);if("visible"===this.targetModifier){if(this.target===document.body)return{top:pageYOffset,left:pageXOffset,height:innerHeight,width:innerWidth};var t=s(this.target),e={height:t.height,width:t.width,top:t.top,left:t.left};return e.height=Math.min(e.height,t.height-(pageYOffset-t.top)),e.height=Math.min(e.height,t.height-(t.top+t.height-(pageYOffset+innerHeight))),e.height=Math.min(innerHeight,e.height),e.height-=2,e.width=Math.min(e.width,t.width-(pageXOffset-t.left)),e.width=Math.min(e.width,t.width-(t.left+t.width-(pageXOffset+innerWidth))),e.width=Math.min(innerWidth,e.width),e.width-=2,e.top<pageYOffset&&(e.top=pageYOffset),e.left<pageXOffset&&(e.left=pageXOffset),e}
if("scroll-handle"===this.targetModifier){var t=void 0,n=this.target;n===document.body?(n=document.documentElement,t={left:pageXOffset,top:pageYOffset,height:innerHeight,width:innerWidth}):t=s(n);var i=getComputedStyle(n),r=n.scrollWidth>n.clientWidth||[i.overflow,i.overflowX].indexOf("scroll")>=0||this.target!==document.body,o=0;r&&(o=15);var a=t.height-parseFloat(i.borderTopWidth)-parseFloat(i.borderBottomWidth)-o,e={width:15,height:.975*a*(a/n.scrollHeight),left:t.left+t.width-parseFloat(i.borderLeftWidth)-15},l=0;a<408&&this.target===document.body&&(l=-11e-5*Math.pow(a,2)-.00727*a+22.58),this.target!==document.body&&(e.height=Math.max(e.height,24));var u=this.target.scrollTop/(n.scrollHeight-a);return e.top=u*(a-e.height-l)+t.top+parseFloat(i.borderTopWidth),this.target===document.body&&(e.height=Math.max(e.height,24)),e}}},{key:"clearCache",value:function(){this._cache={}}},{key:"cache",value:function(t,e){return void 0===this._cache&&(this._cache={}),void 0===this._cache[t]&&(this._cache[t]=e.call(this)),this._cache[t]}},{key:"enable",value:function(){var t=this,e=arguments.length<=0||void 0===arguments[0]||arguments[0];!1!==this.options.addTargetClasses&&d(this.target,this.getClass("enabled")),d(this.element,this.getClass("enabled")),this.enabled=!0,this.scrollParents.forEach(function(e){e!==t.target.ownerDocument&&e.addEventListener("scroll",t.position)}),e&&this.position()}},{key:"disable",value:function(){var t=this;f(this.target,this.getClass("enabled")),f(this.element,this.getClass("enabled")),this.enabled=!1,void 0!==this.scrollParents&&this.scrollParents.forEach(function(e){e.removeEventListener("scroll",t.position)})}},{key:"destroy",value:function(){var t=this;this.disable(),F.forEach(function(e,n){e===t&&F.splice(n,1)}),0===F.length&&a()}},{key:"updateAttachClasses",value:function(t,e){var n=this;t=t||this.attachment,e=e||this.targetAttachment;var i=["left","top","bottom","right","middle","center"];void 0!==this._addAttachClasses&&this._addAttachClasses.length&&this._addAttachClasses.splice(0,this._addAttachClasses.length),void 0===this._addAttachClasses&&(this._addAttachClasses=[]);var r=this._addAttachClasses;t.top&&r.push(this.getClass("element-attached")+"-"+t.top),t.left&&r.push(this.getClass("element-attached")+"-"+t.left),e.top&&r.push(this.getClass("target-attached")+"-"+e.top),e.left&&r.push(this.getClass("target-attached")+"-"+e.left);var o=[];i.forEach(function(t){o.push(n.getClass("element-attached")+"-"+t),o.push(n.getClass("target-attached")+"-"+t)}),D(function(){void 0!==n._addAttachClasses&&(g(n.element,n._addAttachClasses,o),!1!==n.options.addTargetClasses&&g(n.target,n._addAttachClasses,o),delete n._addAttachClasses)})}},{key:"position",value:function(){var t=this,e=arguments.length<=0||void 0===arguments[0]||arguments[0];if(this.enabled){this.clearCache();var n=U(this.targetAttachment,this.attachment);this.updateAttachClasses(this.attachment,n);var i=this.cache("element-bounds",function(){return s(t.element)}),r=i.width,o=i.height;if(0===r&&0===o&&void 0!==this.lastSize){var a=this.lastSize;r=a.width,o=a.height}else this.lastSize={width:r,height:o};var c=this.cache("target-bounds",function(){return t.getTargetBounds()}),f=c,d=x(q(this.attachment),{width:r,height:o}),p=x(q(n),f),h=x(this.offset,{width:r,height:o}),m=x(this.targetOffset,f);d=_(d,h),p=_(p,m);for(var g=c.left+p.left-d.left,v=c.top+p.top-d.top,y=0;y<E.modules.length;++y){var b=E.modules[y],w=b.position.call(this,{left:g,top:v,targetAttachment:n,targetPos:c,elementPos:i,offset:d,targetOffset:p,manualOffset:h,manualTargetOffset:m,scrollbarSize:A,attachment:this.attachment});if(!1===w)return!1;void 0!==w&&"object"==typeof w&&(v=w.top,g=w.left)}
var S={page:{top:v,left:g},viewport:{top:v-pageYOffset,bottom:pageYOffset-v-o+innerHeight,left:g-pageXOffset,right:pageXOffset-g-r+innerWidth}},C=this.target.ownerDocument,T=C.defaultView,A=void 0;return T.innerHeight>C.documentElement.clientHeight&&(A=this.cache("scrollbar-size",u),S.viewport.bottom-=A.height),T.innerWidth>C.documentElement.clientWidth&&(A=this.cache("scrollbar-size",u),S.viewport.right-=A.width),-1!==["","static"].indexOf(C.body.style.position)&&-1!==["","static"].indexOf(C.body.parentElement.style.position)||(S.page.bottom=C.body.scrollHeight-v-o,S.page.right=C.body.scrollWidth-g-r),void 0!==this.options.optimizations&&!1!==this.options.optimizations.moveElement&&void 0===this.targetModifier&&function(){var e=t.cache("target-offsetparent",function(){return l(t.target)}),n=t.cache("target-offsetparent-bounds",function(){return s(e)}),i=getComputedStyle(e),r=n,o={};if(["Top","Left","Bottom","Right"].forEach(function(t){o[t.toLowerCase()]=parseFloat(i["border"+t+"Width"])}),n.right=C.body.scrollWidth-n.left-r.width+o.right,n.bottom=C.body.scrollHeight-n.top-r.height+o.bottom,S.page.top>=n.top+o.top&&S.page.bottom>=n.bottom&&S.page.left>=n.left+o.left&&S.page.right>=n.right){var a=e.scrollTop,u=e.scrollLeft;S.offset={top:S.page.top-n.top+a-o.top,left:S.page.left-n.left+u-o.left}}}(),this.move(S),this.history.unshift(S),this.history.length>3&&this.history.pop(),e&&N(),!0}}},{key:"move",value:function(t){var e=this;if(void 0!==this.element.parentNode){var n={};for(var i in t){n[i]={};for(var r in t[i]){for(var o=!1,a=0;a<this.history.length;++a){var s=this.history[a];if(void 0!==s[i]&&!y(s[i][r],t[i][r])){o=!0;break}}
o||(n[i][r]=!0)}}
var u={top:"",left:"",right:"",bottom:""},f=function(t,n){if(!1!==(void 0!==e.options.optimizations?e.options.optimizations.gpu:null)){var i=void 0,r=void 0;t.top?(u.top=0,i=n.top):(u.bottom=0,i=-n.bottom),t.left?(u.left=0,r=n.left):(u.right=0,r=-n.right),window.matchMedia&&(window.matchMedia("only screen and (min-resolution: 1.3dppx)").matches||window.matchMedia("only screen and (-webkit-min-device-pixel-ratio: 1.3)").matches||(r=Math.round(r),i=Math.round(i))),u[V]="translateX("+r+"px) translateY("+i+"px)","msTransform"!==V&&(u[V]+=" translateZ(0)")}else t.top?u.top=n.top+"px":u.bottom=n.bottom+"px",t.left?u.left=n.left+"px":u.right=n.right+"px"},d=!1;if((n.page.top||n.page.bottom)&&(n.page.left||n.page.right)?(u.position="absolute",f(n.page,t.page)):(n.viewport.top||n.viewport.bottom)&&(n.viewport.left||n.viewport.right)?(u.position="fixed",f(n.viewport,t.viewport)):void 0!==n.offset&&n.offset.top&&n.offset.left?function(){u.position="absolute";var i=e.cache("target-offsetparent",function(){return l(e.target)});l(e.element)!==i&&D(function(){e.element.parentNode.removeChild(e.element),i.appendChild(e.element)}),f(n.offset,t.offset),d=!0}():(u.position="absolute",f({top:!0,left:!0},t.page)),!d)
if(this.options.bodyElement)this.options.bodyElement.appendChild(this.element);else{for(var p=!0,h=this.element.parentNode;h&&1===h.nodeType&&"BODY"!==h.tagName;){if("static"!==getComputedStyle(h).position){p=!1;break}
h=h.parentNode}
p||(this.element.parentNode.removeChild(this.element),this.element.ownerDocument.body.appendChild(this.element))}
var m={},g=!1;for(var r in u){var v=u[r];this.element.style[r]!==v&&(g=!0,m[r]=v)}
g&&D(function(){c(e.element.style,m),e.trigger("repositioned")})}}}]),e}(P);Q.modules=[],E.position=R;var G=c(Q,E),L=function(){function t(t,e){var n=[],i=!0,r=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(i=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);i=!0);}catch(t){r=!0,o=t}finally{try{!i&&s.return&&s.return()}finally{if(r)throw o}}
return n}
return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),B=E.Utils,s=B.getBounds,c=B.extend,g=B.updateClasses,D=B.defer,Y=["left","top","right","bottom"];E.modules.push({position:function(t){var e=this,n=t.top,i=t.left,r=t.targetAttachment;if(!this.options.constraints)return!0;var o=this.cache("element-bounds",function(){return s(e.element)}),a=o.height,l=o.width;if(0===l&&0===a&&void 0!==this.lastSize){var u=this.lastSize;l=u.width,a=u.height}
var f=this.cache("target-bounds",function(){return e.getTargetBounds()}),d=f.height,p=f.width,h=[this.getClass("pinned"),this.getClass("out-of-bounds")];this.options.constraints.forEach(function(t){var e=t.outOfBoundsClass,n=t.pinnedClass;e&&h.push(e),n&&h.push(n)}),h.forEach(function(t){["left","top","right","bottom"].forEach(function(e){h.push(t+"-"+e)})});var m=[],v=c({},r),y=c({},this.attachment);return this.options.constraints.forEach(function(t){var o=t.to,s=t.attachment,u=t.pin;void 0===s&&(s="");var c=void 0,f=void 0;if(s.indexOf(" ")>=0){var h=s.split(" "),g=L(h,2);f=g[0],c=g[1]}else c=f=s;var b=w(e,o);"target"!==f&&"both"!==f||(n<b[1]&&"top"===v.top&&(n+=d,v.top="bottom"),n+a>b[3]&&"bottom"===v.top&&(n-=d,v.top="top")),"together"===f&&("top"===v.top&&("bottom"===y.top&&n<b[1]?(n+=d,v.top="bottom",n+=a,y.top="top"):"top"===y.top&&n+a>b[3]&&n-(a-d)>=b[1]&&(n-=a-d,v.top="bottom",y.top="bottom")),"bottom"===v.top&&("top"===y.top&&n+a>b[3]?(n-=d,v.top="top",n-=a,y.top="bottom"):"bottom"===y.top&&n<b[1]&&n+(2*a-d)<=b[3]&&(n+=a-d,v.top="top",y.top="top")),"middle"===v.top&&(n+a>b[3]&&"top"===y.top?(n-=a,y.top="bottom"):n<b[1]&&"bottom"===y.top&&(n+=a,y.top="top"))),"target"!==c&&"both"!==c||(i<b[0]&&"left"===v.left&&(i+=p,v.left="right"),i+l>b[2]&&"right"===v.left&&(i-=p,v.left="left")),"together"===c&&(i<b[0]&&"left"===v.left?"right"===y.left?(i+=p,v.left="right",i+=l,y.left="left"):"left"===y.left&&(i+=p,v.left="right",i-=l,y.left="right"):i+l>b[2]&&"right"===v.left?"left"===y.left?(i-=p,v.left="left",i-=l,y.left="right"):"right"===y.left&&(i-=p,v.left="left",i+=l,y.left="left"):"center"===v.left&&(i+l>b[2]&&"left"===y.left?(i-=l,y.left="right"):i<b[0]&&"right"===y.left&&(i+=l,y.left="left"))),"element"!==f&&"both"!==f||(n<b[1]&&"bottom"===y.top&&(n+=a,y.top="top"),n+a>b[3]&&"top"===y.top&&(n-=a,y.top="bottom")),"element"!==c&&"both"!==c||(i<b[0]&&("right"===y.left?(i+=l,y.left="left"):"center"===y.left&&(i+=l/2,y.left="left")),i+l>b[2]&&("left"===y.left?(i-=l,y.left="right"):"center"===y.left&&(i-=l/2,y.left="right"))),"string"==typeof u?u=u.split(",").map(function(t){return t.trim()}):!0===u&&(u=["top","left","right","bottom"]),u=u||[];var _=[],x=[];n<b[1]&&(u.indexOf("top")>=0?(n=b[1],_.push("top")):x.push("top")),n+a>b[3]&&(u.indexOf("bottom")>=0?(n=b[3]-a,_.push("bottom")):x.push("bottom")),i<b[0]&&(u.indexOf("left")>=0?(i=b[0],_.push("left")):x.push("left")),i+l>b[2]&&(u.indexOf("right")>=0?(i=b[2]-l,_.push("right")):x.push("right")),_.length&&function(){var t=void 0;t=void 0!==e.options.pinnedClass?e.options.pinnedClass:e.getClass("pinned"),m.push(t),_.forEach(function(e){m.push(t+"-"+e)})}(),x.length&&function(){var t=void 0;t=void 0!==e.options.outOfBoundsClass?e.options.outOfBoundsClass:e.getClass("out-of-bounds"),m.push(t),x.forEach(function(e){m.push(t+"-"+e)})}(),(_.indexOf("left")>=0||_.indexOf("right")>=0)&&(y.left=v.left=!1),(_.indexOf("top")>=0||_.indexOf("bottom")>=0)&&(y.top=v.top=!1),v.top===r.top&&v.left===r.left&&y.top===e.attachment.top&&y.left===e.attachment.left||(e.updateAttachClasses(y,v),e.trigger("update",{attachment:y,targetAttachment:v}))}),D(function(){!1!==e.options.addTargetClasses&&g(e.target,m,h),g(e.element,m,h)}),{top:n,left:i}}});var B=E.Utils,s=B.getBounds,g=B.updateClasses,D=B.defer;E.modules.push({position:function(t){var e=this,n=t.top,i=t.left,r=this.cache("element-bounds",function(){return s(e.element)}),o=r.height,a=r.width,l=this.getTargetBounds(),u=n+o,c=i+a,f=[];n<=l.bottom&&u>=l.top&&["left","right"].forEach(function(t){var e=l[t];e!==i&&e!==c||f.push(t)}),i<=l.right&&c>=l.left&&["top","bottom"].forEach(function(t){var e=l[t];e!==n&&e!==u||f.push(t)});var d=[],p=[],h=["left","top","right","bottom"];return d.push(this.getClass("abutted")),h.forEach(function(t){d.push(e.getClass("abutted")+"-"+t)}),f.length&&p.push(this.getClass("abutted")),f.forEach(function(t){p.push(e.getClass("abutted")+"-"+t)}),D(function(){!1!==e.options.addTargetClasses&&g(e.target,p,d),g(e.element,p,d)}),!0}});var L=function(){function t(t,e){var n=[],i=!0,r=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(i=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);i=!0);}catch(t){r=!0,o=t}finally{try{!i&&s.return&&s.return()}finally{if(r)throw o}}
return n}
return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();return E.modules.push({position:function(t){var e=t.top,n=t.left;if(this.options.shift){var i=this.options.shift;"function"==typeof this.options.shift&&(i=this.options.shift.call(this,{top:e,left:n}));var r=void 0,o=void 0;if("string"==typeof i){i=i.split(" "),i[1]=i[1]||i[0];var a=i,s=L(a,2);r=s[0],o=s[1],r=parseFloat(r,10),o=parseFloat(o,10)}else r=i.top,o=i.left;return e+=r,n+=o,{top:e,left:n}}}}),G})},function(t,e,n){"use strict";var i;i=function(){return this}();try{i=i||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(i=window)}
t.exports=i},function(t,e,n){(function(e){t.exports=e.Tether=n(23)}).call(e,n(24))},function(t,e,n){n(5),t.exports=n(6)}]);jQuery(document).ready(function($){var blog=$(".blog_slider");blog.owlCarousel({autoPlay:!0,smartSpeed:1000,autoplayHoverPause:!0,nav:!0,dots:!1,responsive:{0:{items:1,},480:{items:1,},768:{items:1,},992:{items:2,},1200:{items:1,}}})});/*
* 2007-2016 PrestaShop
*
* NOTICE OF LICENSE
*
* This source file is subject to the Academic Free License (AFL 3.0)
* that is bundled with this package in the file LICENSE.txt.
* It is also available through the world-wide-web at this URL:
* http://opensource.org/licenses/afl-3.0.php
* If you did not receive a copy of the license and are unable to
* obtain it through the world-wide-web, please send an email
* to license@prestashop.com so we can send you a copy immediately.
*
* DISCLAIMER
*
* Do not edit or add to this file if you wish to upgrade PrestaShop to newer
* versions in the future. If you wish to customize PrestaShop for your
* needs please refer to http://www.prestashop.com for more information.
*
* @author PrestaShop SA <contact@prestashop.com>
* @copyright 2007-2016 PrestaShop SA
* @license http://opensource.org/licenses/afl-3.0.php Academic Free License (AFL 3.0)
* International Registered Trademark & Property of PrestaShop SA
*/
var wishlistProductsIds=[];$(document).ready(function(){$(".qty1").change(function(){var qty=$(this).val();$('.qty2').attr('value',qty)});wishlistRefreshStatus();$(document).on('change','select[name=wishlists]',function(){WishlistChangeDefault('wishlist_block_list',$(this).val())});$('.wishlist').each(function(){current=$(this);$(this).children('.wishlist_button_list').popover({html:!0,content:function(){return current.children('.popover-content').html()}})})});function WishlistCart(id,action,id_product,id_product_attribute,quantity,id_wishlist){$.ajax({type:'GET',url:baseDir+'modules/blockwishlist/cart.php?rand='+new Date().getTime(),headers:{"cache-control":"no-cache"},async:!0,cache:!1,data:'action='+action+'&id_product='+id_product+'&quantity='+quantity+'&token='+static_token+'&id_product_attribute='+id_product_attribute+'&id_wishlist='+id_wishlist,success:function(data){if(action=='add'){if(isLogged==!0){wishlistProductsIdsAdd(id_product);wishlistRefreshStatus();$('.wishtlist_top .cart-wishlist-number').html(data);if(!!$.prototype.fancybox)
$.fancybox.open('<p class="fancybox-error">'+added_to_wishlist+'</p>');else alert(added_to_wishlist)}else{if(!!$.prototype.fancybox)
$.fancybox.open('<p class="fancybox-error">'+loggin_required+'</p>');else alert(loggin_required)}}
if(action=='delete'){wishlistProductsIdsRemove(id_product);wishlistRefreshStatus()}
if($('#'+id).length!=0){$('#'+id).slideUp('normal');document.getElementById(id).innerHTML=data;$('#'+id).slideDown('normal')}
if(isLogged==!0){window.location.href=window.location.href}}})}
function WishlistChangeDefault(id,id_wishlist){$.ajax({type:'GET',url:baseDir+'modules/blockwishlist/cart.php?rand='+new Date().getTime(),headers:{"cache-control":"no-cache"},async:!0,data:'id_wishlist='+id_wishlist+'&token='+static_token,cache:!1,success:function(data){$('#'+id).slideUp('normal');document.getElementById(id).innerHTML=data;$('#'+id).slideDown('normal')}})}
function WishlistBuyProduct(token,id_product,id_product_attribute,id_quantity,button,ajax){if(ajax)
ajaxCart.add(id_product,id_product_attribute,!1,button,1,[token,id_quantity]);else{$('#'+id_quantity).val(0);WishlistAddProductCart(token,id_product,id_product_attribute,id_quantity)
document.forms['addtocart'+'_'+id_product+'_'+id_product_attribute].method='POST';document.forms['addtocart'+'_'+id_product+'_'+id_product_attribute].action=baseUri+'?controller=cart';document.forms['addtocart'+'_'+id_product+'_'+id_product_attribute].elements.token.value=static_token;document.forms['addtocart'+'_'+id_product+'_'+id_product_attribute].submit()}
return(!0)}
function WishlistAddProductCart(token,id_product,id_product_attribute,id_quantity){if($('#'+id_quantity).val()<=0)
return(!1);$.ajax({type:'GET',url:baseDir+'modules/blockwishlist/buywishlistproduct.php?rand='+new Date().getTime(),headers:{"cache-control":"no-cache"},data:'token='+token+'&static_token='+static_token+'&id_product='+id_product+'&id_product_attribute='+id_product_attribute,async:!0,cache:!1,success:function(data){if(data){if(!!$.prototype.fancybox)
$.fancybox.open('<p class="fancybox-error">'+data+'</p>');else alert(data)}else $('#'+id_quantity).val($('#'+id_quantity).val()-1)}});return(!0)}
function WishlistManage(id,id_wishlist){$.ajax({type:'GET',async:!0,url:baseDir+'modules/blockwishlist/managewishlist.php?rand='+new Date().getTime(),headers:{"cache-control":"no-cache"},data:'id_wishlist='+id_wishlist+'&refresh='+!1,cache:!1,success:function(data){$('#'+id).hide();document.getElementById(id).innerHTML=data;$('#'+id).fadeIn('slow');$('.wishlist_change_button').each(function(index){$(this).change(function(){wishlistProductChange($('option:selected',this).attr('data-id-product'),$('option:selected',this).attr('data-id-product-attribute'),$('option:selected',this).attr('data-id-old-wishlist'),$('option:selected',this).attr('data-id-new-wishlist'))})})}})}
function WishlistProductManage(id,action,id_wishlist,id_product,id_product_attribute,quantity,priority){$.ajax({type:'GET',async:!0,url:baseDir+'modules/blockwishlist/managewishlist.php?rand='+new Date().getTime(),headers:{"cache-control":"no-cache"},data:'action='+action+'&id_wishlist='+id_wishlist+'&id_product='+id_product+'&id_product_attribute='+id_product_attribute+'&quantity='+quantity+'&priority='+priority+'&refresh='+!0,cache:!1,success:function(data){if(action=='delete')
$('#wlp_'+id_product+'_'+id_product_attribute).fadeOut('fast');else if(action=='update'){$('#wlp_'+id_product+'_'+id_product_attribute).fadeOut('fast');$('#wlp_'+id_product+'_'+id_product_attribute).fadeIn('fast')}
nb_products=0;$("[id^='quantity']").each(function(index,element){nb_products+=parseInt(element.value)});$("#wishlist_"+id_wishlist).children('td').eq(1).html(nb_products)}})}
function WishlistDelete(id,id_wishlist,msg){var res=confirm(msg);if(res==!1)
return(!1);if(typeof mywishlist_url=='undefined')
return(!1);$.ajax({type:'GET',async:!0,dataType:"json",url:mywishlist_url,headers:{"cache-control":"no-cache"},cache:!1,data:{rand:new Date().getTime(),deleted:1,myajax:1,id_wishlist:id_wishlist,action:'deletelist'},success:function(data){var mywishlist_siblings_count=$('#'+id).siblings().length;$('#'+id).fadeOut('slow').remove();$("#block-order-detail").html('');if(mywishlist_siblings_count==0)
$("#block-history").remove();if(data.id_default){var td_default=$("#wishlist_"+data.id_default+" > .wishlist_default");$("#wishlist_"+data.id_default+" > .wishlist_default > a").remove();td_default.append('<p class="is_wish_list_default"><i class="icon icon-check-square"></i></p>')}}})}
function WishlistDefault(id,id_wishlist){if(typeof mywishlist_url=='undefined')
return(!1);$.ajax({type:'GET',async:!0,url:mywishlist_url,headers:{"cache-control":"no-cache"},cache:!1,data:{rand:new Date().getTime(),'default':1,id_wishlist:id_wishlist,myajax:1,action:'setdefault'},success:function(data){var old_default_id=$(".is_wish_list_default").parents("tr").attr("id");var td_check=$(".is_wish_list_default").parent();$(".is_wish_list_default").remove();td_check.append('<a href="#" onclick="javascript:event.preventDefault();(WishlistDefault(\''+old_default_id+'\', \''+old_default_id.replace("wishlist_","")+'\'));"><i class="icon icon-square"></i></a>');var td_default=$("#"+id+" > .wishlist_default");$("#"+id+" > .wishlist_default > a").remove();td_default.append('<p class="is_wish_list_default"><i class="icon icon-check-square"></i></p>')}})}
function WishlistVisibility(bought_class,id_button){if($('#hide'+id_button).is(':hidden')){$('.'+bought_class).slideDown('fast');$('#show'+id_button).hide();$('#hide'+id_button).css('display','block')}else{$('.'+bought_class).slideUp('fast');$('#hide'+id_button).hide();$('#show'+id_button).css('display','block')}}
function WishlistSend(id,id_wishlist,id_email){$.post(baseDir+'modules/blockwishlist/sendwishlist.php',{token:static_token,id_wishlist:id_wishlist,email1:$('#'+id_email+'1').val(),email2:$('#'+id_email+'2').val(),email3:$('#'+id_email+'3').val(),email4:$('#'+id_email+'4').val(),email5:$('#'+id_email+'5').val(),email6:$('#'+id_email+'6').val(),email7:$('#'+id_email+'7').val(),email8:$('#'+id_email+'8').val(),email9:$('#'+id_email+'9').val(),email10:$('#'+id_email+'10').val()},function(data){if(data){if(!!$.prototype.fancybox)
$.fancybox.open('<p class="fancybox-error">'+data+'</p>');else alert(data)}else WishlistVisibility(id,'hideSendWishlist')})}
function wishlistProductsIdsAdd(id){if($.inArray(parseInt(id),wishlistProductsIds)==-1)
wishlistProductsIds.push(parseInt(id))}
function wishlistProductsIdsRemove(id){wishlistProductsIds.splice($.inArray(parseInt(id),wishlistProductsIds),1)}
function wishlistRefreshStatus(){$('.addToWishlist').each(function(){if($.inArray(parseInt($(this).prop('rel')),wishlistProductsIds)!=-1)
$(this).addClass('checked');else $(this).removeClass('checked')})}
function wishlistProductChange(id_product,id_product_attribute,id_old_wishlist,id_new_wishlist){if(typeof mywishlist_url=='undefined')
return(!1);var quantity=$('#quantity_'+id_product+'_'+id_product_attribute).val();$.ajax({type:'GET',url:mywishlist_url,headers:{"cache-control":"no-cache"},async:!0,cache:!1,dataType:"json",data:{id_product:id_product,id_product_attribute:id_product_attribute,quantity:quantity,priority:$('#priority_'+id_product+'_'+id_product_attribute).val(),id_old_wishlist:id_old_wishlist,id_new_wishlist:id_new_wishlist,myajax:1,action:'productchangewishlist'},success:function(data){if(data.success==!0){$('#wlp_'+id_product+'_'+id_product_attribute).fadeOut('slow');$('#wishlist_'+id_old_wishlist+' td:nth-child(2)').text($('#wishlist_'+id_old_wishlist+' td:nth-child(2)').text()-quantity);$('#wishlist_'+id_new_wishlist+' td:nth-child(2)').text(+$('#wishlist_'+id_new_wishlist+' td:nth-child(2)').text()+ +quantity)}else{if(!!$.prototype.fancybox)
$.fancybox.open('<p class="fancybox-error">'+data.error+'</p>')}}})};!function(e,t,a){var l,n,s,i,o,r,c,u,h,g,f,d,p="mPageScroll2id",_="mPS2id",C=".m_PageScroll2id,a[rel~='m_PageScroll2id'],.page-scroll-to-id,a[rel~='page-scroll-to-id'],._ps2id",v={scrollSpeed:1e3,autoScrollSpeed:!0,scrollEasing:"easeInOutQuint",scrollingEasing:"easeOutQuint",pageEndSmoothScroll:!0,layout:"vertical",offset:0,highlightSelector:!1,clickedClass:_+"-clicked",targetClass:_+"-target",highlightClass:_+"-highlight",forceSingleHighlight:!1,keepHighlightUntilNext:!1,highlightByNextTarget:!1,disablePluginBelow:!1,clickEvents:!0,appendHash:!1,onStart:function(){},onComplete:function(){},defaultSelector:!1,live:!0,liveSelector:!1},m=0,S={init:function(r){var r=e.extend(!0,{},v,r);if(e(a).data(_,r),n=e(a).data(_),!this.selector){var c="__"+_;this.each(function(){var t=e(this);t.hasClass(c)||t.addClass(c)}),this.selector="."+c}n.liveSelector&&(this.selector+=","+n.liveSelector),l=l?l+","+this.selector:this.selector,n.defaultSelector&&("object"==typeof e(l)&&0!==e(l).length||(l=C)),n.clickEvents&&e(a).undelegate("."+_).delegate(l,"click."+_,function(t){if(I._isDisabled.call(null))return void I._removeClasses.call(null);var a=e(this),l=a.attr("href"),n=a.prop("href");l&&-1!==l.indexOf("#/")||(I._reset.call(null),g=a.data("ps2id-offset")||0,I._isValid.call(null,l,n)&&I._findTarget.call(null,l)&&(t.preventDefault(),i="selector",o=a,I._setClasses.call(null,!0),I._scrollTo.call(null)))}),e(t).unbind("."+_).bind("scroll."+_+" resize."+_,function(){if(I._isDisabled.call(null))return void I._removeClasses.call(null);var t=e("._"+_+"-t");t.each(function(a){var l=e(this),n=l.attr("id"),s=I._findHighlight.call(null,n);I._setClasses.call(null,!1,l,s),a==t.length-1&&I._extendClasses.call(null)})}),s=!0,I._setup.call(null),I._live.call(null)},scrollTo:function(t,a){if(I._isDisabled.call(null))return void I._removeClasses.call(null);if(t&&"undefined"!=typeof t){I._isInit.call(null);var l={layout:n.layout,offset:n.offset,clicked:!1},a=e.extend(!0,{},l,a);I._reset.call(null),u=a.layout,h=a.offset,t=-1!==t.indexOf("#")?t:"#"+t,I._isValid.call(null,t)&&I._findTarget.call(null,t)&&(i="scrollTo",o=a.clicked,o&&I._setClasses.call(null,!0),I._scrollTo.call(null))}},destroy:function(){e(t).unbind("."+_),e(a).undelegate("."+_).removeData(_),e("._"+_+"-t").removeData(_),I._removeClasses.call(null,!0)}},I={_isDisabled:function(){var e=t,l="inner",s=n.disablePluginBelow instanceof Array?[n.disablePluginBelow[0]||0,n.disablePluginBelow[1]||0]:[n.disablePluginBelow||0,0];return"innerWidth"in t||(l="client",e=a.documentElement||a.body),e[l+"Width"]<=s[0]||e[l+"Height"]<=s[1]},_isValid:function(e,a){if(e){a=a?a:e;var l=-1!==a.indexOf("#/")?a.split("#/")[0]:a.split("#")[0],n=t.location.toString().split("#")[0];return"#"!==e&&-1!==e.indexOf("#")&&(""===l||l===n)}},_setup:function(){var t=I._highlightSelector(),a=1,l=0;return e(t).each(function(){var s=e(this),i=s.attr("href"),o=s.prop("href");if(I._isValid.call(null,i,o)){var r=-1!==i.indexOf("#/")?i.split("#/")[1]:i.split("#")[1],c=e("#"+r);if(c.length>0){n.highlightByNextTarget&&c!==l&&(l?l.data(_,{tn:c}):c.data(_,{tn:"0"}),l=c),c.hasClass("_"+_+"-t")||c.addClass("_"+_+"-t"),c.data(_,{i:a}),s.hasClass("_"+_+"-h")||s.addClass("_"+_+"-h");var u=I._findHighlight.call(null,r);I._setClasses.call(null,!1,c,u),m=a,a++,a==e(t).length&&I._extendClasses.call(null)}}})},_highlightSelector:function(){return n.highlightSelector&&""!==n.highlightSelector?n.highlightSelector:l},_findTarget:function(t){var a=-1!==t.indexOf("#/")?t.split("#/")[1]:t.split("#")[1],l=e("#"+a);if(l.length<1||"fixed"===l.css("position")){if("top"!==a)return;l=e("body")}return r=l,u||(u=n.layout),h=I._setOffset.call(null),c=[(l.offset().top-h[0]).toString(),(l.offset().left-h[1]).toString()],c[0]=c[0]<0?0:c[0],c[1]=c[1]<0?0:c[1],c},_setOffset:function(){h||(h=n.offset?n.offset:0),g&&(h=g);var t,a,l,s;switch(typeof h){case"object":case"string":t=[h.y?h.y:h,h.x?h.x:h],a=[t[0]instanceof jQuery?t[0]:e(t[0]),t[1]instanceof jQuery?t[1]:e(t[1])],a[0].length>0?(l=a[0].height(),"fixed"===a[0].css("position")&&(l+=a[0][0].offsetTop)):l=!isNaN(parseFloat(t[0]))&&isFinite(t[0])?parseInt(t[0]):0,a[1].length>0?(s=a[1].width(),"fixed"===a[1].css("position")&&(s+=a[1][0].offsetLeft)):s=!isNaN(parseFloat(t[1]))&&isFinite(t[1])?parseInt(t[1]):0;break;case"function":t=h.call(null),t instanceof Array?(l=t[0],s=t[1]):l=s=t;break;default:l=s=parseInt(h)}return[l,s]},_findHighlight:function(a){var l=t.location,n=l.toString().split("#")[0],s=l.pathname;return e("._"+_+"-h[href='#"+a+"'],._"+_+"-h[href='"+n+"#"+a+"'],._"+_+"-h[href='"+s+"#"+a+"'],._"+_+"-h[href='#/"+a+"'],._"+_+"-h[href='"+n+"#/"+a+"'],._"+_+"-h[href='"+s+"#/"+a+"']")},_setClasses:function(t,a,l){var s=n.clickedClass,i=n.targetClass,r=n.highlightClass;t&&s&&""!==s?(e("."+s).removeClass(s),o.addClass(s)):a&&i&&""!==i&&l&&r&&""!==r&&(I._currentTarget.call(null,a)?(a.addClass(i),l.addClass(r)):(!n.keepHighlightUntilNext||e("."+r).length>1)&&(a.removeClass(i),l.removeClass(r)))},_extendClasses:function(){var t=n.targetClass,a=n.highlightClass,l=e("."+t),s=e("."+a),i=t+"-first",o=t+"-last",r=a+"-first",c=a+"-last";e("._"+_+"-t").removeClass(i+" "+o),e("._"+_+"-h").removeClass(r+" "+c),n.forceSingleHighlight?n.keepHighlightUntilNext&&l.length>1?(l.slice(0,1).removeClass(t),s.slice(0,1).removeClass(a)):(l.slice(1).removeClass(t),s.slice(1).removeClass(a)):(l.slice(0,1).addClass(i).end().slice(-1).addClass(o),s.slice(0,1).addClass(r).end().slice(-1).addClass(c))},_removeClasses:function(t){e("."+n.clickedClass).removeClass(n.clickedClass),e("."+n.targetClass).removeClass(n.targetClass+" "+n.targetClass+"-first "+n.targetClass+"-last"),e("."+n.highlightClass).removeClass(n.highlightClass+" "+n.highlightClass+"-first "+n.highlightClass+"-last"),t&&(e("._"+_+"-t").removeClass("_"+_+"-t"),e("._"+_+"-h").removeClass("_"+_+"-h"))},_currentTarget:function(a){var l=n["target_"+a.data(_).i],s=a.data("ps2id-target"),i=s&&e(s)[0]?e(s)[0].getBoundingClientRect():a[0].getBoundingClientRect();if("undefined"!=typeof l){var o=a.offset().top,r=a.offset().left,c=l.from?l.from+o:o,u=l.to?l.to+o:o,h=l.fromX?l.fromX+r:r,g=l.toX?l.toX+r:r;return i.top>=u&&i.top<=c&&i.left>=g&&i.left<=h}var f=e(t).height(),d=e(t).width(),p=s?e(s).height():a.height(),C=s?e(s).width():a.width(),v=1+p/f,m=v,S=f>p?v*(f/p):v,I=1+C/d,O=I,M=d>C?I*(d/C):I,b=[i.top<=f/m,i.bottom>=f/S,i.left<=d/O,i.right>=d/M];if(n.highlightByNextTarget){var y=a.data(_).tn;if(y){var w=y[0].getBoundingClientRect();"vertical"===n.layout?b=[i.top<=f/2,w.top>f/2,1,1]:"horizontal"===n.layout&&(b=[1,1,i.left<=d/2,w.left>d/2])}}return b[0]&&b[1]&&b[2]&&b[3]},_scrollTo:function(){d=I._scrollSpeed.call(null),c=n.pageEndSmoothScroll?I._pageEndSmoothScroll.call(null):c;var a=e("html,body"),l=n.autoScrollSpeed?I._autoScrollSpeed.call(null):d,s=a.is(":animated")?n.scrollingEasing:n.scrollEasing,i=e(t).scrollTop(),o=e(t).scrollLeft();switch(u){case"horizontal":o!=c[1]&&(I._callbacks.call(null,"onStart"),a.stop().animate({scrollLeft:c[1]},l,s).promise().then(function(){I._callbacks.call(null,"onComplete")}));break;case"auto":if(i!=c[0]||o!=c[1])if(I._callbacks.call(null,"onStart"),navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)){var r;a.stop().animate({pageYOffset:c[0],pageXOffset:c[1]},{duration:l,easing:s,step:function(e,a){"pageXOffset"==a.prop?r=e:"pageYOffset"==a.prop&&t.scrollTo(r,e)}}).promise().then(function(){I._callbacks.call(null,"onComplete")})}else a.stop().animate({scrollTop:c[0],scrollLeft:c[1]},l,s).promise().then(function(){I._callbacks.call(null,"onComplete")});break;default:i!=c[0]&&(I._callbacks.call(null,"onStart"),a.stop().animate({scrollTop:c[0]},l,s).promise().then(function(){I._callbacks.call(null,"onComplete")}))}},_pageEndSmoothScroll:function(){var l=e(a).height(),n=e(a).width(),s=e(t).height(),i=e(t).width();return[l-c[0]<s?l-s:c[0],n-c[1]<i?n-i:c[1]]},_scrollSpeed:function(){var t=n.scrollSpeed;return o&&o.length&&o.add(o.parent()).each(function(){var a=e(this);if(a.attr("class")){var l=a.attr("class").split(" ");for(var n in l)if(l[n].match(/^ps2id-speed-\d+$/)){t=l[n].split("ps2id-speed-")[1];break}}}),parseInt(t)},_autoScrollSpeed:function(){var l=e(t).scrollTop(),n=e(t).scrollLeft(),s=e(a).height(),i=e(a).width(),o=[d+d*Math.floor(Math.abs(c[0]-l)/s*100)/100,d+d*Math.floor(Math.abs(c[1]-n)/i*100)/100];return Math.max.apply(Math,o)},_callbacks:function(e){if(n)switch(this[_]={trigger:i,clicked:o,target:r,scrollTo:{y:c[0],x:c[1]}},e){case"onStart":if(n.appendHash&&t.history&&t.history.pushState&&o&&o.length){var a="#"+o.attr("href").split("#")[1];a!==t.location.hash&&history.pushState("","",a)}n.onStart.call(null,this[_]);break;case"onComplete":n.onComplete.call(null,this[_])}},_reset:function(){u=h=g=!1},_isInit:function(){s||S.init.apply(this)},_live:function(){f=setTimeout(function(){n.live?e(I._highlightSelector()).length!==m&&I._setup.call(null):f&&clearTimeout(f),I._live.call(null)},1e3)},_easing:function(){function t(e){var t=7.5625,a=2.75;return 1/a>e?t*e*e:2/a>e?t*(e-=1.5/a)*e+.75:2.5/a>e?t*(e-=2.25/a)*e+.9375:t*(e-=2.625/a)*e+.984375}e.easing.easeInQuad=e.easing.easeInQuad||function(e){return e*e},e.easing.easeOutQuad=e.easing.easeOutQuad||function(e){return 1-(1-e)*(1-e)},e.easing.easeInOutQuad=e.easing.easeInOutQuad||function(e){return.5>e?2*e*e:1-Math.pow(-2*e+2,2)/2},e.easing.easeInCubic=e.easing.easeInCubic||function(e){return e*e*e},e.easing.easeOutCubic=e.easing.easeOutCubic||function(e){return 1-Math.pow(1-e,3)},e.easing.easeInOutCubic=e.easing.easeInOutCubic||function(e){return.5>e?4*e*e*e:1-Math.pow(-2*e+2,3)/2},e.easing.easeInQuart=e.easing.easeInQuart||function(e){return e*e*e*e},e.easing.easeOutQuart=e.easing.easeOutQuart||function(e){return 1-Math.pow(1-e,4)},e.easing.easeInOutQuart=e.easing.easeInOutQuart||function(e){return.5>e?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2},e.easing.easeInQuint=e.easing.easeInQuint||function(e){return e*e*e*e*e},e.easing.easeOutQuint=e.easing.easeOutQuint||function(e){return 1-Math.pow(1-e,5)},e.easing.easeInOutQuint=e.easing.easeInOutQuint||function(e){return.5>e?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2},e.easing.easeInExpo=e.easing.easeInExpo||function(e){return 0===e?0:Math.pow(2,10*e-10)},e.easing.easeOutExpo=e.easing.easeOutExpo||function(e){return 1===e?1:1-Math.pow(2,-10*e)},e.easing.easeInOutExpo=e.easing.easeInOutExpo||function(e){return 0===e?0:1===e?1:.5>e?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2},e.easing.easeInSine=e.easing.easeInSine||function(e){return 1-Math.cos(e*Math.PI/2)},e.easing.easeOutSine=e.easing.easeOutSine||function(e){return Math.sin(e*Math.PI/2)},e.easing.easeInOutSine=e.easing.easeInOutSine||function(e){return-(Math.cos(Math.PI*e)-1)/2},e.easing.easeInCirc=e.easing.easeInCirc||function(e){return 1-Math.sqrt(1-Math.pow(e,2))},e.easing.easeOutCirc=e.easing.easeOutCirc||function(e){return Math.sqrt(1-Math.pow(e-1,2))},e.easing.easeInOutCirc=e.easing.easeInOutCirc||function(e){return.5>e?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2},e.easing.easeInElastic=e.easing.easeInElastic||function(e){return 0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*(2*Math.PI/3))},e.easing.easeOutElastic=e.easing.easeOutElastic||function(e){return 0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*(2*Math.PI/3))+1},e.easing.easeInOutElastic=e.easing.easeInOutElastic||function(e){return 0===e?0:1===e?1:.5>e?-(Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*(2*Math.PI/4.5)))/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*(2*Math.PI/4.5))/2+1},e.easing.easeInBack=e.easing.easeInBack||function(e){return 2.70158*e*e*e-1.70158*e*e},e.easing.easeOutBack=e.easing.easeOutBack||function(e){return 1+2.70158*Math.pow(e-1,3)+1.70158*Math.pow(e-1,2)},e.easing.easeInOutBack=e.easing.easeInOutBack||function(e){return.5>e?Math.pow(2*e,2)*(7.189819*e-2.5949095)/2:(Math.pow(2*e-2,2)*(3.5949095*(2*e-2)+2.5949095)+2)/2},e.easing.easeInBounce=e.easing.easeInBounce||function(e){return 1-t(1-e)},e.easing.easeOutBounce=e.easing.easeOutBounce||t,e.easing.easeInOutBounce=e.easing.easeInOutBounce||function(e){return.5>e?(1-t(1-2*e))/2:(1+t(2*e-1))/2}}};I._easing.call(),e.fn[p]=function(t){return S[t]?S[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?void e.error("Method "+t+" does not exist"):S.init.apply(this,arguments)},e[p]=function(t){return S[t]?S[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?void e.error("Method "+t+" does not exist"):S.init.apply(this,arguments)},e[p].defaults=v}(jQuery,window,document);(function(e){var t=function(t,n){var r=e.extend({},e.fn.nivoSlider.defaults,n);var i={currentSlide:0,currentImage:"",totalSlides:0,running:!1,paused:!1,stop:!1,controlNavEl:!1};var s=e(t);s.data("nivo:vars",i).addClass("nivoSlider");var o=s.children();o.each(function(){var t=e(this);var n="";if(!t.is("img")){if(t.is("a")){t.addClass("nivo-imageLink");n=t}t=t.find("img:first")}var r=r===0?t.attr("width"):t.width(),s=s===0?t.attr("height"):t.height();if(n!==""){n.css("display","none")}t.css("display","none");i.totalSlides++});if(r.randomStart){r.startSlide=Math.floor(Math.random()*i.totalSlides)}if(r.startSlide>0){if(r.startSlide>=i.totalSlides){r.startSlide=i.totalSlides-1}i.currentSlide=r.startSlide}if(e(o[i.currentSlide]).is("img")){i.currentImage=e(o[i.currentSlide])}else{i.currentImage=e(o[i.currentSlide]).find("img:first")}if(e(o[i.currentSlide]).is("a")){e(o[i.currentSlide]).css("display","block")}var u=e("<img/>").addClass("nivo-main-image");u.attr("src",i.currentImage.attr("src")).show();s.append(u);e(window).resize(function(){s.children("img").width(s.width());u.attr("src",i.currentImage.attr("src"));u.stop().height("auto");e(".nivo-slice").remove();e(".nivo-box").remove()});s.append(e('<div class="nivo-caption"></div>'));var a=function(t){var n=e(".nivo-caption",s);if(i.currentImage.attr("title")!=""&&i.currentImage.attr("title")!=undefined){var r=i.currentImage.attr("title");if(r.substr(0,1)=="#")r=e(r).html();if(n.css("display")=="block"){setTimeout(function(){n.html(r)},t.animSpeed)}else{n.html(r);n.stop().fadeIn(t.animSpeed)}}else{n.stop().fadeOut(t.animSpeed)}};a(r);var f=0;if(!r.manualAdvance&&o.length>1){f=setInterval(function(){d(s,o,r,!1)},r.pauseTime)}if(r.directionNav){s.append('<div class="nivo-directionNav"><a class="nivo-prevNav">'+r.prevText+'</a><a class="nivo-nextNav">'+r.nextText+"</a></div>");e(s).on("click","a.nivo-prevNav",function(){if(i.running){return!1}clearInterval(f);f="";i.currentSlide-=2;d(s,o,r,"prev")});e(s).on("click","a.nivo-nextNav",function(){if(i.running){return!1}clearInterval(f);f="";d(s,o,r,"next")})}if(r.controlNav){i.controlNavEl=e('<div class="nivo-controlNav"></div>');s.after(i.controlNavEl);for(var l=0;l<o.length;l++){if(r.controlNavThumbs){i.controlNavEl.addClass("nivo-thumbs-enabled");var c=o.eq(l);if(!c.is("img")){c=c.find("img:first")}if(c.attr("data-thumb"))i.controlNavEl.append('<a class="nivo-control" rel="'+l+'"><img src="'+c.attr("data-thumb")+'" alt="" /></a>')}else{i.controlNavEl.append('<a class="nivo-control" rel="'+l+'">'+(l+1)+"</a>")}}e("a:eq("+i.currentSlide+")",i.controlNavEl).addClass("active");e("a",i.controlNavEl).bind("click",function(){if(i.running)return!1;if(e(this).hasClass("active"))return!1;clearInterval(f);f="";u.attr("src",i.currentImage.attr("src"));i.currentSlide=e(this).attr("rel")-1;d(s,o,r,"control")})}if(r.pauseOnHover){s.hover(function(){i.paused=!0;clearInterval(f);f=""},function(){i.paused=!1;if(f===""&&!r.manualAdvance){f=setInterval(function(){d(s,o,r,!1)},r.pauseTime)}})}s.bind("nivo:animFinished",function(){u.attr("src",i.currentImage.attr("src"));i.running=!1;e(o).each(function(){if(e(this).is("a")){e(this).css("display","none")}});if(e(o[i.currentSlide]).is("a")){e(o[i.currentSlide]).css("display","block")}if(f===""&&!i.paused&&!r.manualAdvance){f=setInterval(function(){d(s,o,r,!1)},r.pauseTime)}r.afterChange.call(this)});var h=function(t,n,r){if(e(r.currentImage).parent().is("a"))e(r.currentImage).parent().css("display","block");e('img[src="'+r.currentImage.attr("src")+'"]',t).not(".nivo-main-image,.nivo-control img").width(t.width()).css("visibility","hidden").show();var i=e('img[src="'+r.currentImage.attr("src")+'"]',t).not(".nivo-main-image,.nivo-control img").parent().is("a")?e('img[src="'+r.currentImage.attr("src")+'"]',t).not(".nivo-main-image,.nivo-control img").parent().height():e('img[src="'+r.currentImage.attr("src")+'"]',t).not(".nivo-main-image,.nivo-control img").height();for(var s=0;s<n.slices;s++){var o=Math.round(t.width()/n.slices);if(s===n.slices-1){t.append(e('<div class="nivo-slice" name="'+s+'"><img src="'+r.currentImage.attr("src")+'" style="position:absolute; width:'+t.width()+"px; height:auto; display:block !important; top:0; left:-"+(o+s*o-o)+'px;" /></div>').css({left:o*s+"px",width:t.width()-o*s+"px",height:i+"px",opacity:"0",overflow:"hidden"}))}else{t.append(e('<div class="nivo-slice" name="'+s+'"><img src="'+r.currentImage.attr("src")+'" style="position:absolute; width:'+t.width()+"px; height:auto; display:block !important; top:0; left:-"+(o+s*o-o)+'px;" /></div>').css({left:o*s+"px",width:o+"px",height:i+"px",opacity:"0",overflow:"hidden"}))}}e(".nivo-slice",t).height(i);u.stop().animate({height:e(r.currentImage).height()},n.animSpeed)};var p=function(t,n,r){if(e(r.currentImage).parent().is("a"))e(r.currentImage).parent().css("display","block");e('img[src="'+r.currentImage.attr("src")+'"]',t).not(".nivo-main-image,.nivo-control img").width(t.width()).css("visibility","hidden").show();var i=Math.round(t.width()/n.boxCols),s=Math.round(e('img[src="'+r.currentImage.attr("src")+'"]',t).not(".nivo-main-image,.nivo-control img").height()/n.boxRows);for(var o=0;o<n.boxRows;o++){for(var a=0;a<n.boxCols;a++){if(a===n.boxCols-1){t.append(e('<div class="nivo-box" name="'+a+'" rel="'+o+'"><img src="'+r.currentImage.attr("src")+'" style="position:absolute; width:'+t.width()+"px; height:auto; display:block; top:-"+s*o+"px; left:-"+i*a+'px;" /></div>').css({opacity:0,left:i*a+"px",top:s*o+"px",width:t.width()-i*a+"px"}));e('.nivo-box[name="'+a+'"]',t).height(e('.nivo-box[name="'+a+'"] img',t).height()+"px")}else{t.append(e('<div class="nivo-box" name="'+a+'" rel="'+o+'"><img src="'+r.currentImage.attr("src")+'" style="position:absolute; width:'+t.width()+"px; height:auto; display:block; top:-"+s*o+"px; left:-"+i*a+'px;" /></div>').css({opacity:0,left:i*a+"px",top:s*o+"px",width:i+"px"}));e('.nivo-box[name="'+a+'"]',t).height(e('.nivo-box[name="'+a+'"] img',t).height()+"px")}}}u.stop().animate({height:e(r.currentImage).height()},n.animSpeed)};var d=function(t,n,r,i){var s=t.data("nivo:vars");if(s&&s.currentSlide===s.totalSlides-1){r.lastSlide.call(this)}if((!s||s.stop)&&!i){return!1}r.beforeChange.call(this);if(!i){u.attr("src",s.currentImage.attr("src"))}else{if(i==="prev"){u.attr("src",s.currentImage.attr("src"))}if(i==="next"){u.attr("src",s.currentImage.attr("src"))}}s.currentSlide++;if(s.currentSlide===s.totalSlides){s.currentSlide=0;r.slideshowEnd.call(this)}if(s.currentSlide<0){s.currentSlide=s.totalSlides-1}if(e(n[s.currentSlide]).is("img")){s.currentImage=e(n[s.currentSlide])}else{s.currentImage=e(n[s.currentSlide]).find("img:first")}if(r.controlNav){e("a",s.controlNavEl).removeClass("active");e("a:eq("+s.currentSlide+")",s.controlNavEl).addClass("active")}a(r);e(".nivo-slice",t).remove();e(".nivo-box",t).remove();var o=r.effect,f="";if(r.effect==="random"){f=new Array("sliceDownRight","sliceDownLeft","sliceUpRight","sliceUpLeft","sliceUpDown","sliceUpDownLeft","fold","fade","boxRandom","boxRain","boxRainReverse","boxRainGrow","boxRainGrowReverse");o=f[Math.floor(Math.random()*(f.length+1))];if(o===undefined){o="fade"}}if(r.effect.indexOf(",")!==-1){f=r.effect.split(",");o=f[Math.floor(Math.random()*f.length)];if(o===undefined){o="fade"}}if(s.currentImage.attr("data-transition")){o=s.currentImage.attr("data-transition")}s.running=!0;var l=0,c=0,d="",m="",g="",y="";if(o==="sliceDown"||o==="sliceDownRight"||o==="sliceDownLeft"){h(t,r,s);l=0;c=0;d=e(".nivo-slice",t);if(o==="sliceDownLeft"){d=e(".nivo-slice",t)._reverse()}d.each(function(){var n=e(this);n.css({top:"0px"});if(c===r.slices-1){setTimeout(function(){n.animate({opacity:"1.0"},r.animSpeed,"",function(){t.trigger("nivo:animFinished")})},100+l)}else{setTimeout(function(){n.animate({opacity:"1.0"},r.animSpeed)},100+l)}l+=50;c++})}else if(o==="sliceUp"||o==="sliceUpRight"||o==="sliceUpLeft"){h(t,r,s);l=0;c=0;d=e(".nivo-slice",t);if(o==="sliceUpLeft"){d=e(".nivo-slice",t)._reverse()}d.each(function(){var n=e(this);n.css({bottom:"0px"});if(c===r.slices-1){setTimeout(function(){n.animate({opacity:"1.0"},r.animSpeed,"",function(){t.trigger("nivo:animFinished")})},100+l)}else{setTimeout(function(){n.animate({opacity:"1.0"},r.animSpeed)},100+l)}l+=50;c++})}else if(o==="sliceUpDown"||o==="sliceUpDownRight"||o==="sliceUpDownLeft"){h(t,r,s);l=0;c=0;var b=0;d=e(".nivo-slice",t);if(o==="sliceUpDownLeft"){d=e(".nivo-slice",t)._reverse()}d.each(function(){var n=e(this);if(c===0){n.css("top","0px");c++}else{n.css("bottom","0px");c=0}if(b===r.slices-1){setTimeout(function(){n.animate({opacity:"1.0"},r.animSpeed,"",function(){t.trigger("nivo:animFinished")})},100+l)}else{setTimeout(function(){n.animate({opacity:"1.0"},r.animSpeed)},100+l)}l+=50;b++})}else if(o==="fold"){h(t,r,s);l=0;c=0;e(".nivo-slice",t).each(function(){var n=e(this);var i=n.width();n.css({top:"0px",width:"0px"});if(c===r.slices-1){setTimeout(function(){n.animate({width:i,opacity:"1.0"},r.animSpeed,"",function(){t.trigger("nivo:animFinished")})},100+l)}else{setTimeout(function(){n.animate({width:i,opacity:"1.0"},r.animSpeed)},100+l)}l+=50;c++})}else if(o==="fade"){h(t,r,s);m=e(".nivo-slice:first",t);m.css({width:t.width()+"px"});m.animate({opacity:"1.0"},r.animSpeed*2,"",function(){t.trigger("nivo:animFinished")})}else if(o==="slideInRight"){h(t,r,s);m=e(".nivo-slice:first",t);m.css({width:"0px",opacity:"1"});m.animate({width:t.width()+"px"},r.animSpeed*2,"",function(){t.trigger("nivo:animFinished")})}else if(o==="slideInLeft"){h(t,r,s);m=e(".nivo-slice:first",t);m.css({width:"0px",opacity:"1",left:"",right:"0px"});m.animate({width:t.width()+"px"},r.animSpeed*2,"",function(){m.css({left:"0px",right:""});t.trigger("nivo:animFinished")})}else if(o==="boxRandom"){p(t,r,s);g=r.boxCols*r.boxRows;c=0;l=0;y=v(e(".nivo-box",t));y.each(function(){var n=e(this);if(c===g-1){setTimeout(function(){n.animate({opacity:"1"},r.animSpeed,"",function(){t.trigger("nivo:animFinished")})},100+l)}else{setTimeout(function(){n.animate({opacity:"1"},r.animSpeed)},100+l)}l+=20;c++})}else if(o==="boxRain"||o==="boxRainReverse"||o==="boxRainGrow"||o==="boxRainGrowReverse"){p(t,r,s);g=r.boxCols*r.boxRows;c=0;l=0;var w=0;var E=0;var S=[];S[w]=[];y=e(".nivo-box",t);if(o==="boxRainReverse"||o==="boxRainGrowReverse"){y=e(".nivo-box",t)._reverse()}y.each(function(){S[w][E]=e(this);E++;if(E===r.boxCols){w++;E=0;S[w]=[]}});for(var x=0;x<r.boxCols*2;x++){var T=x;for(var N=0;N<r.boxRows;N++){if(T>=0&&T<r.boxCols){(function(n,i,s,u,a){var f=e(S[n][i]);var l=f.width();var c=f.height();if(o==="boxRainGrow"||o==="boxRainGrowReverse"){f.width(0).height(0)}if(u===a-1){setTimeout(function(){f.animate({opacity:"1",width:l,height:c},r.animSpeed/1.3,"",function(){t.trigger("nivo:animFinished")})},100+s)}else{setTimeout(function(){f.animate({opacity:"1",width:l,height:c},r.animSpeed/1.3)},100+s)}})(N,T,l,c,g);c++}T--}l+=100}}};var v=function(e){for(var t,n,r=e.length;r;t=parseInt(Math.random()*r,10),n=e[--r],e[r]=e[t],e[t]=n);return e};var m=function(e){if(this.console&&typeof console.log!=="undefined"){console.log(e)}};this.stop=function(){if(!e(t).data("nivo:vars").stop){e(t).data("nivo:vars").stop=!0;m("Stop Slider")}};this.start=function(){if(e(t).data("nivo:vars").stop){e(t).data("nivo:vars").stop=!1;m("Start Slider")}};r.afterLoad.call(this);return this};e.fn.nivoSlider=function(n){return this.each(function(r,i){var s=e(this);if(s.data("nivoslider")){return s.data("nivoslider")}var o=new t(this,n);s.data("nivoslider",o)})};e.fn.nivoSlider.defaults={effect:"random",slices:15,boxCols:8,boxRows:4,animSpeed:500,pauseTime:3e3,startSlide:0,directionNav:!0,controlNav:!0,controlNavThumbs:!1,pauseOnHover:!0,manualAdvance:!1,prevText:"Prev",nextText:"Next",randomStart:!1,beforeChange:function(){},afterChange:function(){},slideshowEnd:function(){},lastSlide:function(){},afterLoad:function(){}};e.fn._reverse=[].reverse})(jQuery);jQuery(document).ready(function($){$(document).off('mouseenter').on('mouseenter','.pos-slideshow',function(e){$('.pos-slideshow .timethai').addClass('pos_hover')});$(document).off('mouseleave').on('mouseleave','.pos-slideshow',function(e){$('.pos-slideshow .timethai').removeClass('pos_hover')});var $slideShowConf=$('.slideshow_container');var speed=parseInt($slideShowConf.attr('data-speed'));if(!speed)speed=600;var time=parseInt($slideShowConf.attr('data-time'));if(!time)time=3000;var nav=$slideShowConf.attr('data-nav');var pag=$slideShowConf.attr('data-pag');var pausehover=$slideShowConf.attr('data-pausehover');if(nav=='true'){nav=!0}else{nav=!1}
if(pag=='true'){pag=!0}else{pag=!1}
if(pausehover=='hover'){pausehover=!0}else{pausehover=!1}
$('#pos-slideshow-home').nivoSlider({effect:'random',slices:15,boxCols:8,boxRows:4,animSpeed:speed,pauseTime:time,startSlide:0,directionNav:nav,controlNav:pag,controlNavThumbs:!1,pauseOnHover:pausehover,manualAdvance:!1,prevText:'<i class="icon-chevron-thin-left"></i>',nextText:'<i class="icon-chevron-thin-right"></i>',afterLoad:function(){$('.pos-loading').css("display","none")},beforeChange:function(){$('.bannerSlideshow1').removeClass("pos_in");$('.bannerSlideshow2').removeClass("pos_in");$('.bannerSlideshow3').removeClass("pos_in")},afterChange:function(){$('.bannerSlideshow1').addClass("pos_in");$('.bannerSlideshow2').addClass("pos_in");$('.bannerSlideshow3').addClass("pos_in")}})});(function(){var initializing=!1;window.JQClass=function(){};JQClass.classes={};JQClass.extend=function extender(prop){var base=this.prototype;initializing=!0;var prototype=new this();initializing=!1;for(var name in prop){prototype[name]=typeof prop[name]=='function'&&typeof base[name]=='function'?(function(name,fn){return function(){var __super=this._super;this._super=function(args){return base[name].apply(this,args)};var ret=fn.apply(this,arguments);this._super=__super;return ret}})(name,prop[name]):prop[name]}
function JQClass(){if(!initializing&&this._init){this._init.apply(this,arguments)}}
JQClass.prototype=prototype;JQClass.prototype.constructor=JQClass;JQClass.extend=extender;return JQClass}})();(function($){JQClass.classes.JQPlugin=JQClass.extend({name:'plugin',defaultOptions:{},regionalOptions:{},_getters:[],_getMarker:function(){return'is-'+this.name},_init:function(){$.extend(this.defaultOptions,(this.regionalOptions&&this.regionalOptions[''])||{});var jqName=camelCase(this.name);$[jqName]=this;$.fn[jqName]=function(options){var otherArgs=Array.prototype.slice.call(arguments,1);if($[jqName]._isNotChained(options,otherArgs)){return $[jqName][options].apply($[jqName],[this[0]].concat(otherArgs))}
return this.each(function(){if(typeof options==='string'){if(options[0]==='_'||!$[jqName][options]){throw 'Unknown method: '+options}
$[jqName][options].apply($[jqName],[this].concat(otherArgs))}else{$[jqName]._attach(this,options)}})}},setDefaults:function(options){$.extend(this.defaultOptions,options||{})},_isNotChained:function(name,otherArgs){if(name==='option'&&(otherArgs.length===0||(otherArgs.length===1&&typeof otherArgs[0]==='string'))){return!0}
return $.inArray(name,this._getters)>-1},_attach:function(elem,options){elem=$(elem);if(elem.hasClass(this._getMarker())){return}
elem.addClass(this._getMarker());options=$.extend({},this.defaultOptions,this._getMetadata(elem),options||{});var inst=$.extend({name:this.name,elem:elem,options:options},this._instSettings(elem,options));elem.data(this.name,inst);this._postAttach(elem,inst);this.option(elem,options)},_instSettings:function(elem,options){return{}},_postAttach:function(elem,inst){},_getMetadata:function(elem){try{var data=elem.data(this.name.toLowerCase())||'';data=data.replace(/'/g,'"');data=data.replace(/([a-zA-Z0-9]+):/g,function(match,group,i){var count=data.substring(0,i).match(/"/g);return(!count||count.length%2===0?'"'+group+'":':group+':')});data=$.parseJSON('{'+data+'}');for(var name in data){var value=data[name];if(typeof value==='string'&&value.match(/^new Date\((.*)\)$/)){data[name]=eval(value)}}
return data}catch(e){return{}}},_getInst:function(elem){return $(elem).data(this.name)||{}},option:function(elem,name,value){elem=$(elem);var inst=elem.data(this.name);if(!name||(typeof name==='string'&&value==null)){var options=(inst||{}).options;return(options&&name?options[name]:options)}
if(!elem.hasClass(this._getMarker())){return}
var options=name||{};if(typeof name==='string'){options={};options[name]=value}
this._optionsChanged(elem,inst,options);$.extend(inst.options,options)},_optionsChanged:function(elem,inst,options){},destroy:function(elem){elem=$(elem);if(!elem.hasClass(this._getMarker())){return}
this._preDestroy(elem,this._getInst(elem));elem.removeData(this.name).removeClass(this._getMarker())},_preDestroy:function(elem,inst){}});function camelCase(name){return name.replace(/-([a-z])/g,function(match,group){return group.toUpperCase()})}
$.JQPlugin={createPlugin:function(superClass,overrides){if(typeof superClass==='object'){overrides=superClass;superClass='JQPlugin'}
superClass=camelCase(superClass);var className=camelCase(overrides.name);JQClass.classes[className]=JQClass.classes[superClass].extend(overrides);new JQClass.classes[className]()}}})(jQuery);(function($){var pluginName='countdown';var Y=0;var O=1;var W=2;var D=3;var H=4;var M=5;var S=6;$.JQPlugin.createPlugin({name:pluginName,defaultOptions:{until:null,since:null,timezone:null,serverSync:null,format:'dHMS',layout:'',compact:!1,padZeroes:!1,significant:0,description:'',expiryUrl:'',expiryText:'',alwaysExpire:!1,onExpiry:null,onTick:null,tickInterval:1},regionalOptions:{'':{labels:['Years','Months','Weeks','Days','Hours','Minutes','Seconds'],labels1:['Year','Month','Week','Day','Hour','Minute','Second'],compactLabels:['y','m','w','d'],whichLabels:null,digits:['0','1','2','3','4','5','6','7','8','9'],timeSeparator:':',isRTL:!1}},_getters:['getTimes'],_rtlClass:pluginName+'-rtl',_sectionClass:pluginName+'-section',_amountClass:pluginName+'-amount',_periodClass:pluginName+'-period',_rowClass:pluginName+'-row',_holdingClass:pluginName+'-holding',_showClass:pluginName+'-show',_descrClass:pluginName+'-descr',_timerElems:[],_init:function(){var self=this;this._super();this._serverSyncs=[];var now=(typeof Date.now=='function'?Date.now:function(){return new Date().getTime()});var perfAvail=(window.performance&&typeof window.performance.now=='function');function timerCallBack(timestamp){var drawStart=(timestamp<1e12?(perfAvail?(performance.now()+performance.timing.navigationStart):now()):timestamp||now());if(drawStart-animationStartTime>=1000){self._updateElems();animationStartTime=drawStart}
requestAnimationFrame(timerCallBack)}
var requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||null;var animationStartTime=0;if(!requestAnimationFrame||$.noRequestAnimationFrame){$.noRequestAnimationFrame=null;setInterval(function(){self._updateElems()},980)}else{animationStartTime=window.animationStartTime||window.webkitAnimationStartTime||window.mozAnimationStartTime||window.oAnimationStartTime||window.msAnimationStartTime||now();requestAnimationFrame(timerCallBack)}},UTCDate:function(tz,year,month,day,hours,mins,secs,ms){if(typeof year=='object'&&year.constructor==Date){ms=year.getMilliseconds();secs=year.getSeconds();mins=year.getMinutes();hours=year.getHours();day=year.getDate();month=year.getMonth();year=year.getFullYear()}
var d=new Date();d.setUTCFullYear(year);d.setUTCDate(1);d.setUTCMonth(month||0);d.setUTCDate(day||1);d.setUTCHours(hours||0);d.setUTCMinutes((mins||0)-(Math.abs(tz)<30?tz*60:tz));d.setUTCSeconds(secs||0);d.setUTCMilliseconds(ms||0);return d},periodsToSeconds:function(periods){return periods[0]*31557600+periods[1]*2629800+periods[2]*604800+periods[3]*86400+periods[4]*3600+periods[5]*60+periods[6]},_instSettings:function(elem,options){return{_periods:[0,0,0,0,0,0,0]}},_addElem:function(elem){if(!this._hasElem(elem)){this._timerElems.push(elem)}},_hasElem:function(elem){return($.inArray(elem,this._timerElems)>-1)},_removeElem:function(elem){this._timerElems=$.map(this._timerElems,function(value){return(value==elem?null:value)})},_updateElems:function(){for(var i=this._timerElems.length-1;i>=0;i--){this._updateCountdown(this._timerElems[i])}},_optionsChanged:function(elem,inst,options){if(options.layout){options.layout=options.layout.replace(/&lt;/g,'<').replace(/&gt;/g,'>')}
this._resetExtraLabels(inst.options,options);var timezoneChanged=(inst.options.timezone!=options.timezone);$.extend(inst.options,options);this._adjustSettings(elem,inst,options.until!=null||options.since!=null||timezoneChanged);var now=new Date();if((inst._since&&inst._since<now)||(inst._until&&inst._until>now)){this._addElem(elem[0])}
this._updateCountdown(elem,inst)},_updateCountdown:function(elem,inst){elem=elem.jquery?elem:$(elem);inst=inst||elem.data(this.name);if(!inst){return}
elem.html(this._generateHTML(inst)).toggleClass(this._rtlClass,inst.options.isRTL);if($.isFunction(inst.options.onTick)){var periods=inst._hold!='lap'?inst._periods:this._calculatePeriods(inst,inst._show,inst.options.significant,new Date());if(inst.options.tickInterval==1||this.periodsToSeconds(periods)%inst.options.tickInterval==0){inst.options.onTick.apply(elem[0],[periods])}}
var expired=inst._hold!='pause'&&(inst._since?inst._now.getTime()<inst._since.getTime():inst._now.getTime()>=inst._until.getTime());if(expired&&!inst._expiring){inst._expiring=!0;if(this._hasElem(elem[0])||inst.options.alwaysExpire){this._removeElem(elem[0]);if($.isFunction(inst.options.onExpiry)){inst.options.onExpiry.apply(elem[0],[])}
if(inst.options.expiryText){var layout=inst.options.layout;inst.options.layout=inst.options.expiryText;this._updateCountdown(elem[0],inst);inst.options.layout=layout}
if(inst.options.expiryUrl){window.location=inst.options.expiryUrl}}
inst._expiring=!1}else if(inst._hold=='pause'){this._removeElem(elem[0])}},_resetExtraLabels:function(base,options){var changingLabels=!1;for(var n in options){if(n!='whichLabels'&&n.match(/[Ll]abels/)){changingLabels=!0;break}}
if(changingLabels){for(var n in base){if(n.match(/[Ll]abels[02-9]|compactLabels1/)){base[n]=null}}}},_adjustSettings:function(elem,inst,recalc){var now;var serverOffset=0;var serverEntry=null;for(var i=0;i<this._serverSyncs.length;i++){if(this._serverSyncs[i][0]==inst.options.serverSync){serverEntry=this._serverSyncs[i][1];break}}
if(serverEntry!=null){serverOffset=(inst.options.serverSync?serverEntry:0);now=new Date()}else{var serverResult=($.isFunction(inst.options.serverSync)?inst.options.serverSync.apply(elem[0],[]):null);now=new Date();serverOffset=(serverResult?now.getTime()-serverResult.getTime():0);this._serverSyncs.push([inst.options.serverSync,serverOffset])}
var timezone=inst.options.timezone;timezone=(timezone==null?-now.getTimezoneOffset():timezone);if(recalc||(!recalc&&inst._until==null&&inst._since==null)){inst._since=inst.options.since;if(inst._since!=null){inst._since=this.UTCDate(timezone,this._determineTime(inst._since,null));if(inst._since&&serverOffset){inst._since.setMilliseconds(inst._since.getMilliseconds()+serverOffset)}}
inst._until=this.UTCDate(timezone,this._determineTime(inst.options.until,now));if(serverOffset){inst._until.setMilliseconds(inst._until.getMilliseconds()+serverOffset)}}
inst._show=this._determineShow(inst)},_preDestroy:function(elem,inst){this._removeElem(elem[0]);elem.empty()},pause:function(elem){this._hold(elem,'pause')},lap:function(elem){this._hold(elem,'lap')},resume:function(elem){this._hold(elem,null)},toggle:function(elem){var inst=$.data(elem,this.name)||{};this[!inst._hold?'pause':'resume'](elem)},toggleLap:function(elem){var inst=$.data(elem,this.name)||{};this[!inst._hold?'lap':'resume'](elem)},_hold:function(elem,hold){var inst=$.data(elem,this.name);if(inst){if(inst._hold=='pause'&&!hold){inst._periods=inst._savePeriods;var sign=(inst._since?'-':'+');inst[inst._since?'_since':'_until']=this._determineTime(sign+inst._periods[0]+'y'+sign+inst._periods[1]+'o'+sign+inst._periods[2]+'w'+sign+inst._periods[3]+'d'+sign+inst._periods[4]+'h'+sign+inst._periods[5]+'m'+sign+inst._periods[6]+'s');this._addElem(elem)}
inst._hold=hold;inst._savePeriods=(hold=='pause'?inst._periods:null);$.data(elem,this.name,inst);this._updateCountdown(elem,inst)}},getTimes:function(elem){var inst=$.data(elem,this.name);return(!inst?null:(inst._hold=='pause'?inst._savePeriods:(!inst._hold?inst._periods:this._calculatePeriods(inst,inst._show,inst.options.significant,new Date()))))},_determineTime:function(setting,defaultTime){var self=this;var offsetNumeric=function(offset){var time=new Date();time.setTime(time.getTime()+offset*1000);return time};var offsetString=function(offset){offset=offset.toLowerCase();var time=new Date();var year=time.getFullYear();var month=time.getMonth();var day=time.getDate();var hour=time.getHours();var minute=time.getMinutes();var second=time.getSeconds();var pattern=/([+-]?[0-9]+)\s*(s|m|h|d|w|o|y)?/g;var matches=pattern.exec(offset);while(matches){switch(matches[2]||'s'){case 's':second+=parseInt(matches[1],10);break;case 'm':minute+=parseInt(matches[1],10);break;case 'h':hour+=parseInt(matches[1],10);break;case 'd':day+=parseInt(matches[1],10);break;case 'w':day+=parseInt(matches[1],10)*7;break;case 'o':month+=parseInt(matches[1],10);day=Math.min(day,self._getDaysInMonth(year,month));break;case 'y':year+=parseInt(matches[1],10);day=Math.min(day,self._getDaysInMonth(year,month));break}
matches=pattern.exec(offset)}
return new Date(year,month,day,hour,minute,second,0)};var time=(setting==null?defaultTime:(typeof setting=='string'?offsetString(setting):(typeof setting=='number'?offsetNumeric(setting):setting)));if(time)time.setMilliseconds(0);return time},_getDaysInMonth:function(year,month){return 32-new Date(year,month,32).getDate()},_normalLabels:function(num){return num},_generateHTML:function(inst){var self=this;inst._periods=(inst._hold?inst._periods:this._calculatePeriods(inst,inst._show,inst.options.significant,new Date()));var shownNonZero=!1;var showCount=0;var sigCount=inst.options.significant;var show=$.extend({},inst._show);for(var period=Y;period<=S;period++){shownNonZero|=(inst._show[period]=='?'&&inst._periods[period]>0);show[period]=(inst._show[period]=='?'&&!shownNonZero?null:inst._show[period]);showCount+=(show[period]?1:0);sigCount-=(inst._periods[period]>0?1:0)}
var showSignificant=[!1,!1,!1,!1,!1,!1,!1];for(var period=S;period>=Y;period--){if(inst._show[period]){if(inst._periods[period]){showSignificant[period]=!0}else{showSignificant[period]=sigCount>0;sigCount--}}}
var labels=(inst.options.compact?inst.options.compactLabels:inst.options.labels);var whichLabels=inst.options.whichLabels||this._normalLabels;var showCompact=function(period){var labelsNum=inst.options['compactLabels'+whichLabels(inst._periods[period])];return(show[period]?self._translateDigits(inst,inst._periods[period])+(labelsNum?labelsNum[period]:labels[period])+' ':'')};var minDigits=(inst.options.padZeroes?2:1);var showFull=function(period){var labelsNum=inst.options['labels'+whichLabels(inst._periods[period])];return((!inst.options.significant&&show[period])||(inst.options.significant&&showSignificant[period])?'<span class="'+self._sectionClass+'">'+'<span class="'+self._amountClass+'">'+self._minDigits(inst,inst._periods[period],minDigits)+'</span>'+'<span class="'+self._periodClass+'">'+(labelsNum?labelsNum[period]:labels[period])+'</span></span>':'')};return(inst.options.layout?this._buildLayout(inst,show,inst.options.layout,inst.options.compact,inst.options.significant,showSignificant):((inst.options.compact?'<span class="'+this._rowClass+' '+this._amountClass+(inst._hold?' '+this._holdingClass:'')+'">'+showCompact(Y)+showCompact(O)+showCompact(W)+showCompact(D)+(show[H]?this._minDigits(inst,inst._periods[H],2):'')+(show[M]?(show[H]?inst.options.timeSeparator:'')+this._minDigits(inst,inst._periods[M],2):'')+(show[S]?(show[H]||show[M]?inst.options.timeSeparator:'')+this._minDigits(inst,inst._periods[S],2):''):'<span class="'+this._rowClass+' '+this._showClass+(inst.options.significant||showCount)+(inst._hold?' '+this._holdingClass:'')+'">'+showFull(Y)+showFull(O)+showFull(W)+showFull(D)+showFull(H)+showFull(M)+showFull(S))+'</span>'+(inst.options.description?'<span class="'+this._rowClass+' '+this._descrClass+'">'+inst.options.description+'</span>':'')))},_buildLayout:function(inst,show,layout,compact,significant,showSignificant){var labels=inst.options[compact?'compactLabels':'labels'];var whichLabels=inst.options.whichLabels||this._normalLabels;var labelFor=function(index){return(inst.options[(compact?'compactLabels':'labels')+whichLabels(inst._periods[index])]||labels)[index]};var digit=function(value,position){return inst.options.digits[Math.floor(value/position)%10]};var subs={desc:inst.options.description,sep:inst.options.timeSeparator,yl:labelFor(Y),yn:this._minDigits(inst,inst._periods[Y],1),ynn:this._minDigits(inst,inst._periods[Y],2),ynnn:this._minDigits(inst,inst._periods[Y],3),y1:digit(inst._periods[Y],1),y10:digit(inst._periods[Y],10),y100:digit(inst._periods[Y],100),y1000:digit(inst._periods[Y],1000),ol:labelFor(O),on:this._minDigits(inst,inst._periods[O],1),onn:this._minDigits(inst,inst._periods[O],2),onnn:this._minDigits(inst,inst._periods[O],3),o1:digit(inst._periods[O],1),o10:digit(inst._periods[O],10),o100:digit(inst._periods[O],100),o1000:digit(inst._periods[O],1000),wl:labelFor(W),wn:this._minDigits(inst,inst._periods[W],1),wnn:this._minDigits(inst,inst._periods[W],2),wnnn:this._minDigits(inst,inst._periods[W],3),w1:digit(inst._periods[W],1),w10:digit(inst._periods[W],10),w100:digit(inst._periods[W],100),w1000:digit(inst._periods[W],1000),dl:labelFor(D),dn:this._minDigits(inst,inst._periods[D],1),dnn:this._minDigits(inst,inst._periods[D],2),dnnn:this._minDigits(inst,inst._periods[D],3),d1:digit(inst._periods[D],1),d10:digit(inst._periods[D],10),d100:digit(inst._periods[D],100),d1000:digit(inst._periods[D],1000),hl:labelFor(H),hn:this._minDigits(inst,inst._periods[H],1),hnn:this._minDigits(inst,inst._periods[H],2),hnnn:this._minDigits(inst,inst._periods[H],3),h1:digit(inst._periods[H],1),h10:digit(inst._periods[H],10),h100:digit(inst._periods[H],100),h1000:digit(inst._periods[H],1000),ml:labelFor(M),mn:this._minDigits(inst,inst._periods[M],1),mnn:this._minDigits(inst,inst._periods[M],2),mnnn:this._minDigits(inst,inst._periods[M],3),m1:digit(inst._periods[M],1),m10:digit(inst._periods[M],10),m100:digit(inst._periods[M],100),m1000:digit(inst._periods[M],1000),sl:labelFor(S),sn:this._minDigits(inst,inst._periods[S],1),snn:this._minDigits(inst,inst._periods[S],2),snnn:this._minDigits(inst,inst._periods[S],3),s1:digit(inst._periods[S],1),s10:digit(inst._periods[S],10),s100:digit(inst._periods[S],100),s1000:digit(inst._periods[S],1000)};var html=layout;for(var i=Y;i<=S;i++){var period='yowdhms'.charAt(i);var re=new RegExp('\\{'+period+'<\\}([\\s\\S]*)\\{'+period+'>\\}','g');html=html.replace(re,((!significant&&show[i])||(significant&&showSignificant[i])?'$1':''))}
$.each(subs,function(n,v){var re=new RegExp('\\{'+n+'\\}','g');html=html.replace(re,v)});return html},_minDigits:function(inst,value,len){value=''+value;if(value.length>=len){return this._translateDigits(inst,value)}
value='0000000000'+value;return this._translateDigits(inst,value.substr(value.length-len))},_translateDigits:function(inst,value){return(''+value).replace(/[0-9]/g,function(digit){return inst.options.digits[digit]})},_determineShow:function(inst){var format=inst.options.format;var show=[];show[Y]=(format.match('y')?'?':(format.match('Y')?'!':null));show[O]=(format.match('o')?'?':(format.match('O')?'!':null));show[W]=(format.match('w')?'?':(format.match('W')?'!':null));show[D]=(format.match('d')?'?':(format.match('D')?'!':null));show[H]=(format.match('h')?'?':(format.match('H')?'!':null));show[M]=(format.match('m')?'?':(format.match('M')?'!':null));show[S]=(format.match('s')?'?':(format.match('S')?'!':null));return show},_calculatePeriods:function(inst,show,significant,now){inst._now=now;inst._now.setMilliseconds(0);var until=new Date(inst._now.getTime());if(inst._since){if(now.getTime()<inst._since.getTime()){inst._now=now=until}else{now=inst._since}}else{until.setTime(inst._until.getTime());if(now.getTime()>inst._until.getTime()){inst._now=now=until}}
var periods=[0,0,0,0,0,0,0];if(show[Y]||show[O]){var lastNow=this._getDaysInMonth(now.getFullYear(),now.getMonth());var lastUntil=this._getDaysInMonth(until.getFullYear(),until.getMonth());var sameDay=(until.getDate()==now.getDate()||(until.getDate()>=Math.min(lastNow,lastUntil)&&now.getDate()>=Math.min(lastNow,lastUntil)));var getSecs=function(date){return(date.getHours()*60+date.getMinutes())*60+date.getSeconds()};var months=Math.max(0,(until.getFullYear()-now.getFullYear())*12+until.getMonth()-now.getMonth()+((until.getDate()<now.getDate()&&!sameDay)||(sameDay&&getSecs(until)<getSecs(now))?-1:0));periods[Y]=(show[Y]?Math.floor(months/12):0);periods[O]=(show[O]?months-periods[Y]*12:0);now=new Date(now.getTime());var wasLastDay=(now.getDate()==lastNow);var lastDay=this._getDaysInMonth(now.getFullYear()+periods[Y],now.getMonth()+periods[O]);if(now.getDate()>lastDay){now.setDate(lastDay)}
now.setFullYear(now.getFullYear()+periods[Y]);now.setMonth(now.getMonth()+periods[O]);if(wasLastDay){now.setDate(lastDay)}}
var diff=Math.floor((until.getTime()-now.getTime())/1000);var extractPeriod=function(period,numSecs){periods[period]=(show[period]?Math.floor(diff/numSecs):0);diff-=periods[period]*numSecs};extractPeriod(W,604800);extractPeriod(D,86400);extractPeriod(H,3600);extractPeriod(M,60);extractPeriod(S,1);if(diff>0&&!inst._since){var multiplier=[1,12,4.3482,7,24,60,60];var lastShown=S;var max=1;for(var period=S;period>=Y;period--){if(show[period]){if(periods[lastShown]>=max){periods[lastShown]=0;diff=1}
if(diff>0){periods[period]++;diff=0;lastShown=period;max=1}}
max*=multiplier[period]}}
if(significant){for(var period=Y;period<=S;period++){if(significant&&periods[period]){significant--}else if(!significant){periods[period]=0}}}
return periods}})})(jQuery);function countdownproduct(){$(".time_count_down").each(function(index){var date_y=$(this).find('.time_countdown').attr('data-date-y');var date_m=$(this).find('.time_countdown').attr('data-date-m');var date_d=$(this).find('.time_countdown').attr('data-date-d');var date_h=$(this).find('.time_countdown').attr('data-date-h');var date_mi=$(this).find('.time_countdown').attr('data-date-mi');var date_s=$(this).find('.time_countdown').attr('data-date-s');var $countDownValue=$('.time_count_down');$(this).children().countdown({until:new Date(date_y,date_m-1,date_d,date_h,date_mi,date_s),labels:[$countDownValue.attr("data-years"),$countDownValue.attr("data-months"),$countDownValue.attr("data-weeks"),$countDownValue.attr("data-days"),$countDownValue.attr("data-hours"),$countDownValue.attr("data-minutes"),$countDownValue.attr("data-seconds")],labels1:[$countDownValue.attr("data-year"),$countDownValue.attr("data-month"),$countDownValue.attr("data-week"),$countDownValue.attr("data-day"),$countDownValue.attr("data-hour"),$countDownValue.attr("data-minute"),$countDownValue.attr("data-second")],})})}
$(document).ready(function(){countdownproduct()});/*
* 2007-2015 PrestaShop
*
* NOTICE OF LICENSE
*
* This source file is subject to the Academic Free License (AFL 3.0)
* that is bundled with this package in the file LICENSE.txt.
* It is also available through the world-wide-web at this URL:
* http://opensource.org/licenses/afl-3.0.php
* If you did not receive a copy of the license and are unable to
* obtain it through the world-wide-web, please send an email
* to license@prestashop.com so we can send you a copy immediately.
*
* DISCLAIMER
*
* Do not edit or add to this file if you wish to upgrade PrestaShop to newer
* versions in the future. If you wish to customize PrestaShop for your
* needs please refer to http://www.prestashop.com for more information.
*
*  @author PrestaShop SA <contact@prestashop.com>
*  @copyright  2007-2015 PrestaShop SA
*  @version  Release: $Revision$
*  @license    http://opensource.org/licenses/afl-3.0.php  Academic Free License (AFL 3.0)
*  International Registered Trademark & Property of PrestaShop SA
*/
jQuery(document).ready(function($){var logo=$(".logo-slider");logo.owlCarousel({autoplay:!0,smartSpeed:1000,autoplayHoverPause:!0,nav:!0,dots:!1,responsive:{0:{items:2,},480:{items:3,},768:{items:4,nav:!1,},992:{items:5,},1200:{items:6,},1920:{items:7,}}});checkClasses();logo.on('translated.owl.carousel',function(event){checkClasses()});function checkClasses(){var total=$('.pos_logo  .logo-slide .owl-stage .owl-item.active').length;$('.pos_logo  ').each(function(){$(this).find('.owl-item').removeClass('firstActiveItem');$(this).find('.owl-item').removeClass('lastActiveItem');$(this).find('.owl-item.active').each(function(index){if(index===0){$(this).addClass('firstActiveItem')}
if(index===total-1&&total>1){$(this).addClass('lastActiveItem')}})})}});/**
* 2007-2015 PrestaShop
*
* NOTICE OF LICENSE
*
* This source file is subject to the Academic Free License (AFL 3.0)
* that is bundled with this package in the file LICENSE.txt.
* It is also avaiposle through the world-wide-web at this URL:
* http://opensource.org/licenses/afl-3.0.php
* If you did not receive a copy of the license and are unable to
* obtain it through the world-wide-web, please send an email
* to license@prestashop.com so we can send you a copy immediately.
*
* DISCLAIMER
*
* Do not edit or add to this file if you wish to upgrade PrestaShop to newer
* versions in the future. If you wish to customize PrestaShop for your
* needs please refer to http://www.prestashop.com for more information.
*
*  @author    PrestaShop SA <contact@prestashop.com>
*  @copyright 2007-2015 PrestaShop SA
*  @license   http://opensource.org/licenses/afl-3.0.php  Academic Free License (AFL 3.0)
*  International Registered Trademark & Property of PrestaShop SA
*
* Don't forget to prefix your containers with your own identifier
* to avoid any conflicts with others containers.
*/
$(document).ready(function(){$(window).scroll(function(){var headerSpaceH=$('#header').outerHeight();var screenWidth=$(window).width();if($(this).scrollTop()>headerSpaceH&&screenWidth>=992){$(".use-sticky").parents("#header").find(".header-top").addClass("scroll-menu");$(".use-sticky").parents("#header").find(".header-top").addClass(" animated fadeInDown")}else{$(".use-sticky").parents("#header").find(".header-top").removeClass("scroll-menu");$(".use-sticky").parents("#header").find(".header-top").removeClass("animated fadeInDown")}});activeMobile();$(window).resize(function(){if($(window).width()<992){$('.pos-menu-horizontal').addClass('pos-mobile-menu');$('#_mobile_megamenu img').parent('a').addClass("img_banner");$('.pos-mobile-menu').removeClass('container')}else{$('.pos-menu-horizontal').removeClass('pos-mobile-menu');$('.pos-menu-horizontal .menu-dropdown').show()}});$('#_desktop_megamenu .pos-menu-horizontal .menu-item').hover(function(){var extraWidth=0
var wrapWidthPopup=$(this).find('.pos-sub-menu').outerWidth(!0);var wraper=$('.pos-menu-horizontal');var wWraper=wraper.outerWidth();var posWraper=wraper.offset();var pos=$(this).offset();var xLeft=pos.left-posWraper.left;if(wWraper<1270){$(this).parents("body").find('.pos-menu-horizontal').css('position','static')}else{$(this).parents("body").find('.pos-menu-horizontal').css('position','relative')}
$(this).find(' > .cat-drop-menu').css('left',xLeft);if((xLeft+wrapWidthPopup)>wWraper){$(this).find('.pos-sub-menu').css('right',0)}else{$(this).find('.pos-sub-menu').css('left',xLeft)}});$('#_desktop_megamenu img').parent('a').addClass("img_desktop");$('#_mobile_megamenu img').parent('a').addClass("img_banner")});function activeMobile(){$('.pos-menu-horizontal .menu-item > .icon-drop-mobile').on('click',function(){if($(this).hasClass('open_menu')){$('.pos-menu-horizontal .menu-item > .icon-drop-mobile').removeClass('open_menu');$(this).removeClass('open_menu');$(this).next('.pos-menu-horizontal .menu-dropdown').slideUp();$('.pos-menu-horizontal .menu-item > .icon-drop-mobile').next('.pos-menu-horizontal .menu-dropdown').slideUp()}else{$('.pos-menu-horizontal .menu-item > .icon-drop-mobile').removeClass('open_menu');$('.pos-menu-horizontal .menu-item > .icon-drop-mobile').next('.pos-menu-horizontal .menu-dropdown').slideUp();$(this).addClass('open_menu');$(this).next('.pos-menu-horizontal .menu-dropdown').slideDown()}});$('.pos-menu-horizontal .cat-drop-menu .icon-drop-mobile').on('click',function(){if($(this).hasClass('open_menu')){$(this).parent().siblings().find('.icon-drop-mobile').removeClass('open_menu');$(this).removeClass('open_menu');$(this).next('.pos-menu-horizontal .cat-drop-menu').slideUp();$(this).parent().siblings().find('.cat-drop-menu').slideUp()}else{$(this).parent().siblings().find('.icon-drop-mobile').removeClass('open_menu');$(this).parent().siblings().find('.cat-drop-menu').slideUp();$(this).addClass('open_menu');$(this).next('.pos-menu-horizontal .cat-drop-menu').slideDown()}});$('.pos-menu-horizontal .pos-menu-col > .icon-drop-mobile').on('click',function(){if($(this).hasClass('open_menu')){$('.pos-menu-horizontal .pos-menu-col > .icon-drop-mobile').removeClass('open_menu');$(this).removeClass('open_menu');$(this).next('.pos-menu-horizontal ul.ul-column').slideUp();$('.pos-menu-horizontal .pos-menu-col > .icon-drop-mobile').next('.pos-menu-horizontal ul.ul-column').slideUp()}else{$('.pos-menu-horizontal .pos-menu-col > .icon-drop-mobile').removeClass('open_menu');$('.pos-menu-horizontal .pos-menu-col > .icon-drop-mobile').next('.pos-menu-horizontal ul.ul-column').slideUp();$(this).addClass('open_menu');$(this).next('.pos-menu-horizontal ul.ul-column').slideDown()}});$('.pos-menu-horizontal .submenu-item  > .icon-drop-mobile').on('click',function(){if($(this).hasClass('open_menu')){$('.pos-menu-horizontal .submenu-item  > .icon-drop-mobile').removeClass('open_menu');$(this).removeClass('open_menu');$(this).next('.pos-menu-horizontal ul.category-sub-menu').slideUp();$('.pos-menu-horizontal .submenu-item  > .icon-drop-mobile').next('.pos-menu-horizontal ul.category-sub-menu').slideUp()}else{$('.pos-menu-horizontal .submenu-item  > .icon-drop-mobile').removeClass('open_menu');$('.pos-menu-horizontal .submenu-item  > .icon-drop-mobile').next('.pos-menu-horizontal ul.category-sub-menu').slideUp();$(this).addClass('open_menu');$(this).next('.pos-menu-horizontal ul.category-sub-menu').slideDown()}})};/**
* 2007-2015 PrestaShop
*
* NOTICE OF LICENSE
*
* This source file is subject to the Academic Free License (AFL 3.0)
* that is bundled with this package in the file LICENSE.txt.
* It is also avaiposle through the world-wide-web at this URL:
* http://opensource.org/licenses/afl-3.0.php
* If you did not receive a copy of the license and are unable to
* obtain it through the world-wide-web, please send an email
* to license@prestashop.com so we can send you a copy immediately.
*
* DISCLAIMER
*
* Do not edit or add to this file if you wish to upgrade PrestaShop to newer
* versions in the future. If you wish to customize PrestaShop for your
* needs please refer to http://www.prestashop.com for more information.
*
*  @author    PrestaShop SA <contact@prestashop.com>
*  @copyright 2007-2015 PrestaShop SA
*  @license   http://opensource.org/licenses/afl-3.0.php  Academic Free License (AFL 3.0)
*  International Registered Trademark & Property of PrestaShop SA
*
* Don't forget to prefix your containers with your own identifier
* to avoid any conflicts with others containers.
*/
$(document).ready(function(){activeMobileVetical();$(window).resize(function(){if($(window).width()<992){$('.pos-menu-vertical').addClass('pos-mobile-menu');$('#_mobile_vegamenu img').not('.img-icon').parent('a').addClass("img_banner")}else{$('.pos-menu-vertical').removeClass('pos-mobile-menu');$('.pos-menu-vertical .menu-dropdown').show()}});$('#_mobile_vegamenu img').not('.img-icon').parent('a').addClass("img_banner");$('#_desktop_vegamenu img').parent('a').addClass("img_desktop");$('#_desktop_vegamenu .pos-menu-vertical .menu-item .pos-sub-menu').each(function(){var wrapWidthPopup=840;if($(window).width()<1199){var wrapWidthPopup=720}
var colum_Width=wrapWidthPopup/12;var colum_Width_col1=colum_Width;var colum_Width_col2=colum_Width*2;var colum_Width_col3=colum_Width*3;var colum_Width_col4=colum_Width*4;var colum_Width_col5=colum_Width*5;var colum_Width_col6=colum_Width*6;var colum_Width_col7=colum_Width*7;var colum_Width_col8=colum_Width*8;var colum_Width_col9=colum_Width*9;var colum_Width_col10=colum_Width*10;var colum_Width_col11=colum_Width*11;var colum_Width_col12=colum_Width*12;$(this).find('.col-lg-1').css('width',colum_Width_col1);$(this).find('.col-lg-2').css('width',colum_Width_col2);$(this).find('.col-lg-3').css('width',colum_Width_col3);$(this).find('.col-lg-4').css('width',colum_Width_col4);$(this).find('.col-lg-5').css('width',colum_Width_col5);$(this).find('.col-lg-6').css('width',colum_Width_col6);$(this).find('.col-lg-7').css('width',colum_Width_col7);$(this).find('.col-lg-8').css('width',colum_Width_col8);$(this).find('.col-lg-9').css('width',colum_Width_col9);$(this).find('.col-lg-10').css('width',colum_Width_col10);$(this).find('.col-lg-11').css('width',colum_Width_col11);$(this).find('.col-lg-12').css('width',colum_Width_col12);var posWraper=wrapWidthPopup+60;$(this).css('width',posWraper)});$("#_desktop_vegamenu .pos-menu-vertical .title_vertical").on('click',function(e){e.stopPropagation();var vega=$("#_desktop_vegamenu .pos-menu-vertical .menu-content");if(vega.is(':hidden')){vega.slideDown()}else{vega.slideUp()}
e.preventDefault()});var count_block=$('#_desktop_vegamenu .pos-menu-vertical .menu-content li').length;var number_blocks=parseInt($('.pos-menu-vertical').attr('data-more-less'));if($(window).width()<1199){var number_blocks=10}
if(count_block<number_blocks){return!1}else{$('#_desktop_vegamenu .pos-menu-vertical .menu-item').each(function(i,n){if(i==number_blocks){$('.pos-menu-vertical .menu-content').append('<li class="menu-item"><a href="javascript:void(0)" class="view_more"><span><i class="ion-android-add-circle"></i> '+MORE+'</span></a></li>')}
if(i>(number_blocks-1)){$(this).addClass('hide_menu_block')}})
$('#_desktop_vegamenu .pos-menu-vertical .hide_menu_block').hide();$('#_desktop_vegamenu .pos-menu-vertical .view_more').click(function(){$(this).toggleClass('active');if($(this).hasClass('active')){$(this).addClass('open_menu');$(this).html('<span><em class="closed-menu"><i class="ion-android-remove-circle"></i> '+CLOSE+'</em></span>');$('.hide_menu_block').slideDown()}else{$(this).removeClass('open_menu').addClass('close_menu');$(this).html('<span><em class="closed-menu"><i class="ion-android-add-circle"></i> '+MORE+'</em></span>');$('.hide_menu_block').slideUp()}})}});function activeMobileVetical(){$('.pos-menu-vertical .menu-item > .icon-drop-mobile').on('click',function(){if($(this).hasClass('open_menu')){$('.pos-menu-vertical .menu-item > .icon-drop-mobile').removeClass('open_menu');$(this).removeClass('open_menu');$(this).next('.pos-menu-vertical .menu-dropdown').slideUp();$('.pos-menu-vertical .menu-item > .icon-drop-mobile').next('.pos-menu-vertical .menu-dropdown').slideUp()}else{$('.pos-menu-vertical .menu-item > .icon-drop-mobile').removeClass('open_menu');$('.pos-menu-vertical .menu-item > .icon-drop-mobile').next('.pos-menu-vertical .menu-dropdown').slideUp();$(this).addClass('open_menu');$(this).next('.pos-menu-vertical .menu-dropdown').slideDown()}});$('.pos-menu-vertical .cat-drop-menu .icon-drop-mobile').on('click',function(){if($(this).hasClass('open_menu')){$(this).parent().siblings().find('.icon-drop-mobile').removeClass('open_menu');$(this).removeClass('open_menu');$(this).next('.pos-menu-vertical .cat-drop-menu').slideUp();$(this).parent().siblings().find('.cat-drop-menu').slideUp()}else{$(this).parent().siblings().find('.icon-drop-mobile').removeClass('open_menu');$(this).parent().siblings().find('.cat-drop-menu').slideUp();$(this).addClass('open_menu');$(this).next('.pos-menu-vertical .cat-drop-menu').slideDown()}});$('.pos-menu-vertical .pos-menu-col > .icon-drop-mobile').on('click',function(){if($(this).hasClass('open_menu')){$('.pos-menu-vertical .pos-menu-col > .icon-drop-mobile').removeClass('open_menu');$(this).removeClass('open_menu');$(this).next('.pos-menu-vertical ul.ul-column').slideUp();$('.pos-menu-vertical .pos-menu-col > .icon-drop-mobile').next('.pos-menu-vertical ul.ul-column').slideUp()}else{$('.pos-menu-vertical .pos-menu-col > .icon-drop-mobile').removeClass('open_menu');$('.pos-menu-vertical .pos-menu-col > .icon-drop-mobile').next('.pos-menu-vertical ul.ul-column').slideUp();$(this).addClass('open_menu');$(this).next('.pos-menu-vertical ul.ul-column').slideDown()}});$('.pos-menu-vertical .submenu-item  > .icon-drop-mobile').on('click',function(){if($(this).hasClass('open_menu')){$('.pos-menu-vertical .submenu-item  > .icon-drop-mobile').removeClass('open_menu');$(this).removeClass('open_menu');$(this).next('.pos-menu-vertical ul.category-sub-menu').slideUp();$('.pos-menu-vertical .submenu-item  > .icon-drop-mobile').next('.pos-menu-vertical ul.category-sub-menu').slideUp()}else{$('.pos-menu-vertical .submenu-item  > .icon-drop-mobile').removeClass('open_menu');$('.pos-menu-vertical .submenu-item  > .icon-drop-mobile').next('.pos-menu-vertical ul.category-sub-menu').slideUp();$(this).addClass('open_menu');$(this).next('.pos-menu-vertical ul.category-sub-menu').slideDown()}})};$(document).ready(function(){var $specialSlideConf=$('.pos-special-products');var items=parseInt($specialSlideConf.attr('data-items'));var speed=parseInt($specialSlideConf.attr('data-speed'));var autoPlay=parseInt($specialSlideConf.attr('data-autoplay'));var time=parseInt($specialSlideConf.attr('data-time'));var arrow=parseInt($specialSlideConf.attr('data-arrow'));var pagination=parseInt($specialSlideConf.attr('data-pagination'));var move=parseInt($specialSlideConf.attr('data-move'));var pausehover=parseInt($specialSlideConf.attr('data-pausehover'));var lg=parseInt($specialSlideConf.attr('data-lg'));var md=parseInt($specialSlideConf.attr('data-md'));var sm=parseInt($specialSlideConf.attr('data-sm'));var xs=parseInt($specialSlideConf.attr('data-xs'));var xxs=parseInt($specialSlideConf.attr('data-xxs'));if(autoPlay==1){if(time){autoPlay=time}else{autoPlay='3000'}}else{autoPlay=!1}
if(pausehover){pausehover=!0}else{pausehover=!1}
if(move){move=!1}else{move=!0}
if(arrow){arrow=!0}else{arrow=!1}
if(pagination==1){pagination=!0}else{pagination=!1}
var specialSlide=$(".pos-special-products .special-item");specialSlide.owlCarousel({autoplay:autoPlay,smartSpeed:speed,autoplayHoverPause:pausehover,addClassActive:!0,scrollPerPage:move,nav:arrow,dots:pagination,responsiveClass:!0,responsive:{0:{items:xxs,},480:{items:xs,},576:{items:sm,},768:{items:md,},992:{items:lg,},1200:{items:items,}}});checkClasses();specialSlide.on('translated.owl.carousel',function(event){checkClasses()});function checkClasses(){var total=$('.pos-special-products .special-item .owl-stage .owl-item.active').length;$('.pos-special-products').each(function(){$(this).find('.owl-item').removeClass('firstActiveItem');$(this).find('.owl-item').removeClass('lastActiveItem');$(this).find('.owl-item.active').each(function(index){if(index===0){$(this).addClass('firstActiveItem')}
if(index===total-1&&total>1){$(this).addClass('lastActiveItem')}})})}});$(document).ready(function(){var $bestsellerSlideConf=$('.pos_bestsellers_product');var items=parseInt($bestsellerSlideConf.attr('data-items'));var speed=parseInt($bestsellerSlideConf.attr('data-speed'));var autoPlay=parseInt($bestsellerSlideConf.attr('data-autoplay'));var time=parseInt($bestsellerSlideConf.attr('data-time'));var arrow=parseInt($bestsellerSlideConf.attr('data-arrow'));var pagination=parseInt($bestsellerSlideConf.attr('data-pagination'));var move=parseInt($bestsellerSlideConf.attr('data-move'));var pausehover=parseInt($bestsellerSlideConf.attr('data-pausehover'));var lg=parseInt($bestsellerSlideConf.attr('data-lg'));var md=parseInt($bestsellerSlideConf.attr('data-md'));var sm=parseInt($bestsellerSlideConf.attr('data-sm'));var xs=parseInt($bestsellerSlideConf.attr('data-xs'));var xxs=parseInt($bestsellerSlideConf.attr('data-xxs'));if(autoPlay==1){if(time){autoPlay=time}else{autoPlay='3000'}}else{autoPlay=!1}
if(pausehover){pausehover=!0}else{pausehover=!1}
if(move){move=!1}else{move=!0}
if(arrow){arrow=!0}else{arrow=!1}
if(pagination==1){pagination=!0}else{pagination=!1}
var bestsellerSlide=$(".pos_bestsellers_product .bestsellerSlide");bestsellerSlide.owlCarousel({autoPlay:autoPlay,smartSpeed:speed,autoplayHoverPause:pausehover,scrollPerPage:move,nav:arrow,dots:pagination,responsive:{0:{items:xxs,},360:{items:xs,},576:{items:sm,},768:{items:md,},992:{items:lg,},1200:{items:items,}}});checkClasses();bestsellerSlide.on('translated.owl.carousel',function(event){checkClasses()});function checkClasses(){var total=$('.pos_bestsellers_product .bestsellerSlide .owl-stage .owl-item.active').length;$('.pos_bestsellers_product ').each(function(){$(this).find('.owl-item').removeClass('firstActiveItem');$(this).find('.owl-item').removeClass('lastActiveItem');$(this).find('.owl-item.active').each(function(index){if(index===0){$(this).addClass('firstActiveItem')}
if(index===total-1&&total>1){$(this).addClass('lastActiveItem')}})})}});$(document).ready(function(){var $listcateSlideConf=$('.poslistcateproduct');var items=parseInt($listcateSlideConf.attr('data-items'));var speed=parseInt($listcateSlideConf.attr('data-speed'));var autoPlay=parseInt($listcateSlideConf.attr('data-autoplay'));var time=parseInt($listcateSlideConf.attr('data-time'));var arrow=parseInt($listcateSlideConf.attr('data-arrow'));var pagination=parseInt($listcateSlideConf.attr('data-pagination'));var move=parseInt($listcateSlideConf.attr('data-move'));var pausehover=parseInt($listcateSlideConf.attr('data-pausehover'));var lg=parseInt($listcateSlideConf.attr('data-lg'));var md=parseInt($listcateSlideConf.attr('data-md'));var sm=parseInt($listcateSlideConf.attr('data-sm'));var xs=parseInt($listcateSlideConf.attr('data-xs'));var xxs=parseInt($listcateSlideConf.attr('data-xxs'));if(autoPlay==1){if(time){autoPlay=time}else{autoPlay='3000'}}else{autoPlay=!1}
if(pausehover){pausehover=!0}else{pausehover=!1}
if(move){move=!1}else{move=!0}
if(arrow){arrow=!0}else{arrow=!1}
if(pagination==1){pagination=!0}else{pagination=!1}
var listcateSlide=$(".poslistcateproduct .listcateSlide");listcateSlide.owlCarousel({autoPlay:autoPlay,smartSpeed:speed,autoplayHoverPause:pausehover,nav:arrow,dots:pagination,responsive:{0:{items:xxs,},360:{items:xs,},576:{items:sm,},768:{items:md,},992:{items:lg,},1200:{items:4,},1600:{items:items,}}});checkClasses();listcateSlide.on('translated.owl.carousel',function(event){checkClasses()});function checkClasses(){$('.poslistcateproduct .listcateSlide').each(function(){var total=$(this).find('.owl-item.active').length;$(this).find('.owl-item').removeClass('firstActiveItem');$(this).find('.owl-item').removeClass('lastActiveItem');$(this).find('.owl-item.active').each(function(index){if(index===0){$(this).addClass('firstActiveItem')}
if(index===total-1&&total>1){$(this).addClass('lastActiveItem')}})})}});/*! jQuery UI - v1.10.3 - 2013-05-03
* http://jqueryui.com
* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.draggable.js, jquery.ui.droppable.js, jquery.ui.resizable.js, jquery.ui.selectable.js, jquery.ui.sortable.js, jquery.ui.effect.js, jquery.ui.accordion.js, jquery.ui.autocomplete.js, jquery.ui.button.js, jquery.ui.datepicker.js, jquery.ui.dialog.js, jquery.ui.effect-blind.js, jquery.ui.effect-bounce.js, jquery.ui.effect-clip.js, jquery.ui.effect-drop.js, jquery.ui.effect-explode.js, jquery.ui.effect-fade.js, jquery.ui.effect-fold.js, jquery.ui.effect-highlight.js, jquery.ui.effect-pulsate.js, jquery.ui.effect-scale.js, jquery.ui.effect-shake.js, jquery.ui.effect-slide.js, jquery.ui.effect-transfer.js, jquery.ui.menu.js, jquery.ui.position.js, jquery.ui.progressbar.js, jquery.ui.slider.js, jquery.ui.spinner.js, jquery.ui.tabs.js, jquery.ui.tooltip.js
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
!function(a,b){function e(b,c){var d,e,g,h=b.nodeName.toLowerCase();return"area"===h?(d=b.parentNode,e=d.name,!(!b.href||!e||"map"!==d.nodeName.toLowerCase())&&(g=a("img[usemap=#"+e+"]")[0],!!g&&f(g))):(/input|select|textarea|button|object/.test(h)?!b.disabled:"a"===h?b.href||c:c)&&f(b)}function f(b){return a.expr.filters.visible(b)&&!a(b).parents().addBack().filter(function(){return"hidden"===a.css(this,"visibility")}).length}var c=0,d=/^ui-id-\d+$/;a.ui=a.ui||{},a.extend(a.ui,{version:"1.10.3",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),a.fn.extend({focus:function(b){return function(c,d){return"number"==typeof c?this.each(function(){var b=this;setTimeout(function(){a(b).focus(),d&&d.call(b)},c)}):b.apply(this,arguments)}}(a.fn.focus),scrollParent:function(){var b;return b=a.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(a.css(this,"position"))&&/(auto|scroll)/.test(a.css(this,"overflow")+a.css(this,"overflow-y")+a.css(this,"overflow-x"))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(a.css(this,"overflow")+a.css(this,"overflow-y")+a.css(this,"overflow-x"))}).eq(0),/fixed/.test(this.css("position"))||!b.length?a(document):b},zIndex:function(c){if(c!==b)return this.css("zIndex",c);if(this.length)for(var e,f,d=a(this[0]);d.length&&d[0]!==document;){if(e=d.css("position"),("absolute"===e||"relative"===e||"fixed"===e)&&(f=parseInt(d.css("zIndex"),10),!isNaN(f)&&0!==f))return f;d=d.parent()}return 0},uniqueId:function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++c)})},removeUniqueId:function(){return this.each(function(){d.test(this.id)&&a(this).removeAttr("id")})}}),a.extend(a.expr[":"],{data:a.expr.createPseudo?a.expr.createPseudo(function(b){return function(c){return!!a.data(c,b)}}):function(b,c,d){return!!a.data(b,d[3])},focusable:function(b){return e(b,!isNaN(a.attr(b,"tabindex")))},tabbable:function(b){var c=a.attr(b,"tabindex"),d=isNaN(c);return(d||c>=0)&&e(b,!d)}}),a("<a>").outerWidth(1).jquery||a.each(["Width","Height"],function(c,d){function h(b,c,d,f){return a.each(e,function(){c-=parseFloat(a.css(b,"padding"+this))||0,d&&(c-=parseFloat(a.css(b,"border"+this+"Width"))||0),f&&(c-=parseFloat(a.css(b,"margin"+this))||0)}),c}var e="Width"===d?["Left","Right"]:["Top","Bottom"],f=d.toLowerCase(),g={innerWidth:a.fn.innerWidth,innerHeight:a.fn.innerHeight,outerWidth:a.fn.outerWidth,outerHeight:a.fn.outerHeight};a.fn["inner"+d]=function(c){return c===b?g["inner"+d].call(this):this.each(function(){a(this).css(f,h(this,c)+"px")})},a.fn["outer"+d]=function(b,c){return"number"!=typeof b?g["outer"+d].call(this,b):this.each(function(){a(this).css(f,h(this,b,!0,c)+"px")})}}),a.fn.addBack||(a.fn.addBack=function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}),a("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(a.fn.removeData=function(b){return function(c){return arguments.length?b.call(this,a.camelCase(c)):b.call(this)}}(a.fn.removeData)),a.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),a.support.selectstart="onselectstart"in document.createElement("div"),a.fn.extend({disableSelection:function(){return this.bind((a.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(a){a.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),a.extend(a.ui,{plugin:{add:function(b,c,d){var e,f=a.ui[b].prototype;for(e in d)f.plugins[e]=f.plugins[e]||[],f.plugins[e].push([c,d[e]])},call:function(a,b,c){var d,e=a.plugins[b];if(e&&a.element[0].parentNode&&11!==a.element[0].parentNode.nodeType)for(d=0;d<e.length;d++)a.options[e[d][0]]&&e[d][1].apply(a.element,c)}},hasScroll:function(b,c){if("hidden"===a(b).css("overflow"))return!1;var d=c&&"left"===c?"scrollLeft":"scrollTop",e=!1;return b[d]>0||(b[d]=1,e=b[d]>0,b[d]=0,e)}})}(jQuery),function(a,b){var c=0,d=Array.prototype.slice,e=a.cleanData;a.cleanData=function(b){for(var d,c=0;null!=(d=b[c]);c++)try{a(d).triggerHandler("remove")}catch(a){}e(b)},a.widget=function(b,c,d){var e,f,g,h,i={},j=b.split(".")[0];b=b.split(".")[1],e=j+"-"+b,d||(d=c,c=a.Widget),a.expr[":"][e.toLowerCase()]=function(b){return!!a.data(b,e)},a[j]=a[j]||{},f=a[j][b],g=a[j][b]=function(a,b){return this._createWidget?void(arguments.length&&this._createWidget(a,b)):new g(a,b)},a.extend(g,f,{version:d.version,_proto:a.extend({},d),_childConstructors:[]}),h=new c,h.options=a.widget.extend({},h.options),a.each(d,function(b,d){return a.isFunction(d)?void(i[b]=function(){var a=function(){return c.prototype[b].apply(this,arguments)},e=function(a){return c.prototype[b].apply(this,a)};return function(){var f,b=this._super,c=this._superApply;return this._super=a,this._superApply=e,f=d.apply(this,arguments),this._super=b,this._superApply=c,f}}()):void(i[b]=d)}),g.prototype=a.widget.extend(h,{widgetEventPrefix:f?h.widgetEventPrefix:b},i,{constructor:g,namespace:j,widgetName:b,widgetFullName:e}),f?(a.each(f._childConstructors,function(b,c){var d=c.prototype;a.widget(d.namespace+"."+d.widgetName,g,c._proto)}),delete f._childConstructors):c._childConstructors.push(g),a.widget.bridge(b,g)},a.widget.extend=function(c){for(var h,i,e=d.call(arguments,1),f=0,g=e.length;f<g;f++)for(h in e[f])i=e[f][h],e[f].hasOwnProperty(h)&&i!==b&&(a.isPlainObject(i)?c[h]=a.isPlainObject(c[h])?a.widget.extend({},c[h],i):a.widget.extend({},i):c[h]=i);return c},a.widget.bridge=function(c,e){var f=e.prototype.widgetFullName||c;a.fn[c]=function(g){var h="string"==typeof g,i=d.call(arguments,1),j=this;return g=!h&&i.length?a.widget.extend.apply(null,[g].concat(i)):g,h?this.each(function(){var d,e=a.data(this,f);return e?a.isFunction(e[g])&&"_"!==g.charAt(0)?(d=e[g].apply(e,i),d!==e&&d!==b?(j=d&&d.jquery?j.pushStack(d.get()):d,!1):void 0):a.error("no such method '"+g+"' for "+c+" widget instance"):a.error("cannot call methods on "+c+" prior to initialization; attempted to call method '"+g+"'")}):this.each(function(){var b=a.data(this,f);b?b.option(g||{})._init():a.data(this,f,new e(g,this))}),j}},a.Widget=function(){},a.Widget._childConstructors=[],a.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(b,d){d=a(d||this.defaultElement||this)[0],this.element=a(d),this.uuid=c++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=a.widget.extend({},this.options,this._getCreateOptions(),b),this.bindings=a(),this.hoverable=a(),this.focusable=a(),d!==this&&(a.data(d,this.widgetFullName,this),this._on(!0,this.element,{remove:function(a){a.target===d&&this.destroy()}}),this.document=a(d.style?d.ownerDocument:d.document||d),this.window=a(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:a.noop,_getCreateEventData:a.noop,_create:a.noop,_init:a.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(a.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:a.noop,widget:function(){return this.element},option:function(c,d){var f,g,h,e=c;if(0===arguments.length)return a.widget.extend({},this.options);if("string"==typeof c)if(e={},f=c.split("."),c=f.shift(),f.length){for(g=e[c]=a.widget.extend({},this.options[c]),h=0;h<f.length-1;h++)g[f[h]]=g[f[h]]||{},g=g[f[h]];if(c=f.pop(),d===b)return g[c]===b?null:g[c];g[c]=d}else{if(d===b)return this.options[c]===b?null:this.options[c];e[c]=d}return this._setOptions(e),this},_setOptions:function(a){var b;for(b in a)this._setOption(b,a[b]);return this},_setOption:function(a,b){return this.options[a]=b,"disabled"===a&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!b).attr("aria-disabled",b),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(b,c,d){var e,f=this;"boolean"!=typeof b&&(d=c,c=b,b=!1),d?(c=e=a(c),this.bindings=this.bindings.add(c)):(d=c,c=this.element,e=this.widget()),a.each(d,function(d,g){function h(){if(b||f.options.disabled!==!0&&!a(this).hasClass("ui-state-disabled"))return("string"==typeof g?f[g]:g).apply(f,arguments)}"string"!=typeof g&&(h.guid=g.guid=g.guid||h.guid||a.guid++);var i=d.match(/^(\w+)\s*(.*)$/),j=i[1]+f.eventNamespace,k=i[2];k?e.delegate(k,j,h):c.bind(j,h)})},_off:function(a,b){b=(b||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,a.unbind(b).undelegate(b)},_delay:function(a,b){function c(){return("string"==typeof a?d[a]:a).apply(d,arguments)}var d=this;return setTimeout(c,b||0)},_hoverable:function(b){this.hoverable=this.hoverable.add(b),this._on(b,{mouseenter:function(b){a(b.currentTarget).addClass("ui-state-hover")},mouseleave:function(b){a(b.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(b){this.focusable=this.focusable.add(b),this._on(b,{focusin:function(b){a(b.currentTarget).addClass("ui-state-focus")},focusout:function(b){a(b.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(b,c,d){var e,f,g=this.options[b];if(d=d||{},c=a.Event(c),c.type=(b===this.widgetEventPrefix?b:this.widgetEventPrefix+b).toLowerCase(),c.target=this.element[0],f=c.originalEvent)for(e in f)e in c||(c[e]=f[e]);return this.element.trigger(c,d),!(a.isFunction(g)&&g.apply(this.element[0],[c].concat(d))===!1||c.isDefaultPrevented())}},a.each({show:"fadeIn",hide:"fadeOut"},function(b,c){a.Widget.prototype["_"+b]=function(d,e,f){"string"==typeof e&&(e={effect:e});var g,h=e?e===!0||"number"==typeof e?c:e.effect||c:b;e=e||{},"number"==typeof e&&(e={duration:e}),g=!a.isEmptyObject(e),e.complete=f,e.delay&&d.delay(e.delay),g&&a.effects&&a.effects.effect[h]?d[b](e):h!==b&&d[h]?d[h](e.duration,e.easing,f):d.queue(function(c){a(this)[b](),f&&f.call(d[0]),c()})}})}(jQuery),function(a,b){var c=!1;a(document).mouseup(function(){c=!1}),a.widget("ui.mouse",{version:"1.10.3",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var b=this;this.element.bind("mousedown."+this.widgetName,function(a){return b._mouseDown(a)}).bind("click."+this.widgetName,function(c){if(!0===a.data(c.target,b.widgetName+".preventClickEvent"))return a.removeData(c.target,b.widgetName+".preventClickEvent"),c.stopImmediatePropagation(),!1}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&a(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(b){if(!c){this._mouseStarted&&this._mouseUp(b),this._mouseDownEvent=b;var d=this,e=1===b.which,f=!("string"!=typeof this.options.cancel||!b.target.nodeName)&&a(b.target).closest(this.options.cancel).length;return!(e&&!f&&this._mouseCapture(b))||(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){d.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(b)&&this._mouseDelayMet(b)&&(this._mouseStarted=this._mouseStart(b)!==!1,!this._mouseStarted)?(b.preventDefault(),!0):(!0===a.data(b.target,this.widgetName+".preventClickEvent")&&a.removeData(b.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(a){return d._mouseMove(a)},this._mouseUpDelegate=function(a){return d._mouseUp(a)},a(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),b.preventDefault(),c=!0,!0))}},_mouseMove:function(b){return a.ui.ie&&(!document.documentMode||document.documentMode<9)&&!b.button?this._mouseUp(b):this._mouseStarted?(this._mouseDrag(b),b.preventDefault()):(this._mouseDistanceMet(b)&&this._mouseDelayMet(b)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,b)!==!1,this._mouseStarted?this._mouseDrag(b):this._mouseUp(b)),!this._mouseStarted)},_mouseUp:function(b){return a(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,b.target===this._mouseDownEvent.target&&a.data(b.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(b)),!1},_mouseDistanceMet:function(a){return Math.max(Math.abs(this._mouseDownEvent.pageX-a.pageX),Math.abs(this._mouseDownEvent.pageY-a.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}})}(jQuery),function(a,b){a.widget("ui.draggable",a.ui.mouse,{version:"1.10.3",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){"original"!==this.options.helper||/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative"),this.options.addClasses&&this.element.addClass("ui-draggable"),this.options.disabled&&this.element.addClass("ui-draggable-disabled"),this._mouseInit()},_destroy:function(){this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),this._mouseDestroy()},_mouseCapture:function(b){var c=this.options;return!(this.helper||c.disabled||a(b.target).closest(".ui-resizable-handle").length>0)&&(this.handle=this._getHandle(b),!!this.handle&&(a(c.iframeFix===!0?"iframe":c.iframeFix).each(function(){a("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1e3}).css(a(this).offset()).appendTo("body")}),!0))},_mouseStart:function(b){var c=this.options;return this.helper=this._createHelper(b),this.helper.addClass("ui-draggable-dragging"),this._cacheHelperProportions(),a.ui.ddmanager&&(a.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(),this.offsetParent=this.helper.offsetParent(),this.offsetParentCssPosition=this.offsetParent.css("position"),this.offset=this.positionAbs=this.element.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},this.offset.scroll=!1,a.extend(this.offset,{click:{left:b.pageX-this.offset.left,top:b.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.originalPosition=this.position=this._generatePosition(b),this.originalPageX=b.pageX,this.originalPageY=b.pageY,c.cursorAt&&this._adjustOffsetFromHelper(c.cursorAt),this._setContainment(),this._trigger("start",b)===!1?(this._clear(),!1):(this._cacheHelperProportions(),a.ui.ddmanager&&!c.dropBehaviour&&a.ui.ddmanager.prepareOffsets(this,b),this._mouseDrag(b,!0),a.ui.ddmanager&&a.ui.ddmanager.dragStart(this,b),!0)},_mouseDrag:function(b,c){if("fixed"===this.offsetParentCssPosition&&(this.offset.parent=this._getParentOffset()),this.position=this._generatePosition(b),this.positionAbs=this._convertPositionTo("absolute"),!c){var d=this._uiHash();if(this._trigger("drag",b,d)===!1)return this._mouseUp({}),!1;this.position=d.position}return this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),a.ui.ddmanager&&a.ui.ddmanager.drag(this,b),!1},_mouseStop:function(b){var c=this,d=!1;return a.ui.ddmanager&&!this.options.dropBehaviour&&(d=a.ui.ddmanager.drop(this,b)),this.dropped&&(d=this.dropped,this.dropped=!1),!("original"===this.options.helper&&!a.contains(this.element[0].ownerDocument,this.element[0]))&&("invalid"===this.options.revert&&!d||"valid"===this.options.revert&&d||this.options.revert===!0||a.isFunction(this.options.revert)&&this.options.revert.call(this.element,d)?a(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){c._trigger("stop",b)!==!1&&c._clear()}):this._trigger("stop",b)!==!1&&this._clear(),!1)},_mouseUp:function(b){return a("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)}),a.ui.ddmanager&&a.ui.ddmanager.dragStop(this,b),a.ui.mouse.prototype._mouseUp.call(this,b)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear(),this},_getHandle:function(b){return!this.options.handle||!!a(b.target).closest(this.element.find(this.options.handle)).length},_createHelper:function(b){var c=this.options,d=a.isFunction(c.helper)?a(c.helper.apply(this.element[0],[b])):"clone"===c.helper?this.element.clone().removeAttr("id"):this.element;return d.parents("body").length||d.appendTo("parent"===c.appendTo?this.element[0].parentNode:c.appendTo),d[0]===this.element[0]||/(fixed|absolute)/.test(d.css("position"))||d.css("position","absolute"),d},_adjustOffsetFromHelper:function(b){"string"==typeof b&&(b=b.split(" ")),a.isArray(b)&&(b={left:+b[0],top:+b[1]||0}),"left"in b&&(this.offset.click.left=b.left+this.margins.left),"right"in b&&(this.offset.click.left=this.helperProportions.width-b.right+this.margins.left),"top"in b&&(this.offset.click.top=b.top+this.margins.top),"bottom"in b&&(this.offset.click.top=this.helperProportions.height-b.bottom+this.margins.top)},_getParentOffset:function(){var b=this.offsetParent.offset();return"absolute"===this.cssPosition&&this.scrollParent[0]!==document&&a.contains(this.scrollParent[0],this.offsetParent[0])&&(b.left+=this.scrollParent.scrollLeft(),b.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===document.body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&a.ui.ie)&&(b={top:0,left:0}),{top:b.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:b.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"===this.cssPosition){var a=this.element.position();return{top:a.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:a.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var b,c,d,e=this.options;return e.containment?"window"===e.containment?void(this.containment=[a(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,a(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,a(window).scrollLeft()+a(window).width()-this.helperProportions.width-this.margins.left,a(window).scrollTop()+(a(window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]):"document"===e.containment?void(this.containment=[0,0,a(document).width()-this.helperProportions.width-this.margins.left,(a(document).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]):e.containment.constructor===Array?void(this.containment=e.containment):("parent"===e.containment&&(e.containment=this.helper[0].parentNode),c=a(e.containment),d=c[0],void(d&&(b="hidden"!==c.css("overflow"),this.containment=[(parseInt(c.css("borderLeftWidth"),10)||0)+(parseInt(c.css("paddingLeft"),10)||0),(parseInt(c.css("borderTopWidth"),10)||0)+(parseInt(c.css("paddingTop"),10)||0),(b?Math.max(d.scrollWidth,d.offsetWidth):d.offsetWidth)-(parseInt(c.css("borderRightWidth"),10)||0)-(parseInt(c.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(b?Math.max(d.scrollHeight,d.offsetHeight):d.offsetHeight)-(parseInt(c.css("borderBottomWidth"),10)||0)-(parseInt(c.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relative_container=c))):void(this.containment=null)},_convertPositionTo:function(b,c){c||(c=this.position);var d="absolute"===b?1:-1,e="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&a.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent;return this.offset.scroll||(this.offset.scroll={top:e.scrollTop(),left:e.scrollLeft()}),{top:c.top+this.offset.relative.top*d+this.offset.parent.top*d-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():this.offset.scroll.top)*d,left:c.left+this.offset.relative.left*d+this.offset.parent.left*d-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():this.offset.scroll.left)*d}},_generatePosition:function(b){var c,d,e,f,g=this.options,h="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&a.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,i=b.pageX,j=b.pageY;return this.offset.scroll||(this.offset.scroll={top:h.scrollTop(),left:h.scrollLeft()}),this.originalPosition&&(this.containment&&(this.relative_container?(d=this.relative_container.offset(),c=[this.containment[0]+d.left,this.containment[1]+d.top,this.containment[2]+d.left,this.containment[3]+d.top]):c=this.containment,b.pageX-this.offset.click.left<c[0]&&(i=c[0]+this.offset.click.left),b.pageY-this.offset.click.top<c[1]&&(j=c[1]+this.offset.click.top),b.pageX-this.offset.click.left>c[2]&&(i=c[2]+this.offset.click.left),b.pageY-this.offset.click.top>c[3]&&(j=c[3]+this.offset.click.top)),g.grid&&(e=g.grid[1]?this.originalPageY+Math.round((j-this.originalPageY)/g.grid[1])*g.grid[1]:this.originalPageY,j=c?e-this.offset.click.top>=c[1]||e-this.offset.click.top>c[3]?e:e-this.offset.click.top>=c[1]?e-g.grid[1]:e+g.grid[1]:e,f=g.grid[0]?this.originalPageX+Math.round((i-this.originalPageX)/g.grid[0])*g.grid[0]:this.originalPageX,i=c?f-this.offset.click.left>=c[0]||f-this.offset.click.left>c[2]?f:f-this.offset.click.left>=c[0]?f-g.grid[0]:f+g.grid[0]:f)),{top:j-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():this.offset.scroll.top),left:i-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():this.offset.scroll.left)}},_clear:function(){this.helper.removeClass("ui-draggable-dragging"),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1},_trigger:function(b,c,d){return d=d||this._uiHash(),a.ui.plugin.call(this,b,[c,d]),"drag"===b&&(this.positionAbs=this._convertPositionTo("absolute")),a.Widget.prototype._trigger.call(this,b,c,d)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),a.ui.plugin.add("draggable","connectToSortable",{start:function(b,c){var d=a(this).data("ui-draggable"),e=d.options,f=a.extend({},c,{item:d.element});d.sortables=[],a(e.connectToSortable).each(function(){var c=a.data(this,"ui-sortable");c&&!c.options.disabled&&(d.sortables.push({instance:c,shouldRevert:c.options.revert}),c.refreshPositions(),c._trigger("activate",b,f))})},stop:function(b,c){var d=a(this).data("ui-draggable"),e=a.extend({},c,{item:d.element});a.each(d.sortables,function(){this.instance.isOver?(this.instance.isOver=0,d.cancelHelperRemoval=!0,this.instance.cancelHelperRemoval=!1,this.shouldRevert&&(this.instance.options.revert=this.shouldRevert),this.instance._mouseStop(b),this.instance.options.helper=this.instance.options._helper,"original"===d.options.helper&&this.instance.currentItem.css({top:"auto",left:"auto"})):(this.instance.cancelHelperRemoval=!1,this.instance._trigger("deactivate",b,e))})},drag:function(b,c){var d=a(this).data("ui-draggable"),e=this;a.each(d.sortables,function(){var f=!1,g=this;this.instance.positionAbs=d.positionAbs,this.instance.helperProportions=d.helperProportions,this.instance.offset.click=d.offset.click,this.instance._intersectsWith(this.instance.containerCache)&&(f=!0,a.each(d.sortables,function(){return this.instance.positionAbs=d.positionAbs,this.instance.helperProportions=d.helperProportions,this.instance.offset.click=d.offset.click,this!==g&&this.instance._intersectsWith(this.instance.containerCache)&&a.contains(g.instance.element[0],this.instance.element[0])&&(f=!1),f})),f?(this.instance.isOver||(this.instance.isOver=1,this.instance.currentItem=a(e).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item",!0),this.instance.options._helper=this.instance.options.helper,this.instance.options.helper=function(){return c.helper[0]},b.target=this.instance.currentItem[0],this.instance._mouseCapture(b,!0),this.instance._mouseStart(b,!0,!0),this.instance.offset.click.top=d.offset.click.top,this.instance.offset.click.left=d.offset.click.left,this.instance.offset.parent.left-=d.offset.parent.left-this.instance.offset.parent.left,this.instance.offset.parent.top-=d.offset.parent.top-this.instance.offset.parent.top,d._trigger("toSortable",b),d.dropped=this.instance.element,d.currentItem=d.element,this.instance.fromOutside=d),this.instance.currentItem&&this.instance._mouseDrag(b)):this.instance.isOver&&(this.instance.isOver=0,this.instance.cancelHelperRemoval=!0,this.instance.options.revert=!1,this.instance._trigger("out",b,this.instance._uiHash(this.instance)),this.instance._mouseStop(b,!0),this.instance.options.helper=this.instance.options._helper,this.instance.currentItem.remove(),this.instance.placeholder&&this.instance.placeholder.remove(),d._trigger("fromSortable",b),d.dropped=!1)})}}),a.ui.plugin.add("draggable","cursor",{start:function(){var b=a("body"),c=a(this).data("ui-draggable").options;b.css("cursor")&&(c._cursor=b.css("cursor")),b.css("cursor",c.cursor)},stop:function(){var b=a(this).data("ui-draggable").options;b._cursor&&a("body").css("cursor",b._cursor)}}),a.ui.plugin.add("draggable","opacity",{start:function(b,c){var d=a(c.helper),e=a(this).data("ui-draggable").options;d.css("opacity")&&(e._opacity=d.css("opacity")),d.css("opacity",e.opacity)},stop:function(b,c){var d=a(this).data("ui-draggable").options;d._opacity&&a(c.helper).css("opacity",d._opacity)}}),a.ui.plugin.add("draggable","scroll",{start:function(){var b=a(this).data("ui-draggable");b.scrollParent[0]!==document&&"HTML"!==b.scrollParent[0].tagName&&(b.overflowOffset=b.scrollParent.offset())},drag:function(b){var c=a(this).data("ui-draggable"),d=c.options,e=!1;c.scrollParent[0]!==document&&"HTML"!==c.scrollParent[0].tagName?(d.axis&&"x"===d.axis||(c.overflowOffset.top+c.scrollParent[0].offsetHeight-b.pageY<d.scrollSensitivity?c.scrollParent[0].scrollTop=e=c.scrollParent[0].scrollTop+d.scrollSpeed:b.pageY-c.overflowOffset.top<d.scrollSensitivity&&(c.scrollParent[0].scrollTop=e=c.scrollParent[0].scrollTop-d.scrollSpeed)),d.axis&&"y"===d.axis||(c.overflowOffset.left+c.scrollParent[0].offsetWidth-b.pageX<d.scrollSensitivity?c.scrollParent[0].scrollLeft=e=c.scrollParent[0].scrollLeft+d.scrollSpeed:b.pageX-c.overflowOffset.left<d.scrollSensitivity&&(c.scrollParent[0].scrollLeft=e=c.scrollParent[0].scrollLeft-d.scrollSpeed))):(d.axis&&"x"===d.axis||(b.pageY-a(document).scrollTop()<d.scrollSensitivity?e=a(document).scrollTop(a(document).scrollTop()-d.scrollSpeed):a(window).height()-(b.pageY-a(document).scrollTop())<d.scrollSensitivity&&(e=a(document).scrollTop(a(document).scrollTop()+d.scrollSpeed))),d.axis&&"y"===d.axis||(b.pageX-a(document).scrollLeft()<d.scrollSensitivity?e=a(document).scrollLeft(a(document).scrollLeft()-d.scrollSpeed):a(window).width()-(b.pageX-a(document).scrollLeft())<d.scrollSensitivity&&(e=a(document).scrollLeft(a(document).scrollLeft()+d.scrollSpeed)))),e!==!1&&a.ui.ddmanager&&!d.dropBehaviour&&a.ui.ddmanager.prepareOffsets(c,b)}}),a.ui.plugin.add("draggable","snap",{start:function(){var b=a(this).data("ui-draggable"),c=b.options;b.snapElements=[],a(c.snap.constructor!==String?c.snap.items||":data(ui-draggable)":c.snap).each(function(){var c=a(this),d=c.offset();this!==b.element[0]&&b.snapElements.push({item:this,width:c.outerWidth(),height:c.outerHeight(),top:d.top,left:d.left})})},drag:function(b,c){var d,e,f,g,h,i,j,k,l,m,n=a(this).data("ui-draggable"),o=n.options,p=o.snapTolerance,q=c.offset.left,r=q+n.helperProportions.width,s=c.offset.top,t=s+n.helperProportions.height;for(l=n.snapElements.length-1;l>=0;l--)h=n.snapElements[l].left,i=h+n.snapElements[l].width,j=n.snapElements[l].top,k=j+n.snapElements[l].height,r<h-p||q>i+p||t<j-p||s>k+p||!a.contains(n.snapElements[l].item.ownerDocument,n.snapElements[l].item)?(n.snapElements[l].snapping&&n.options.snap.release&&n.options.snap.release.call(n.element,b,a.extend(n._uiHash(),{snapItem:n.snapElements[l].item})),n.snapElements[l].snapping=!1):("inner"!==o.snapMode&&(d=Math.abs(j-t)<=p,e=Math.abs(k-s)<=p,f=Math.abs(h-r)<=p,g=Math.abs(i-q)<=p,d&&(c.position.top=n._convertPositionTo("relative",{top:j-n.helperProportions.height,left:0}).top-n.margins.top),e&&(c.position.top=n._convertPositionTo("relative",{top:k,left:0}).top-n.margins.top),f&&(c.position.left=n._convertPositionTo("relative",{top:0,left:h-n.helperProportions.width}).left-n.margins.left),g&&(c.position.left=n._convertPositionTo("relative",{top:0,left:i}).left-n.margins.left)),m=d||e||f||g,"outer"!==o.snapMode&&(d=Math.abs(j-s)<=p,e=Math.abs(k-t)<=p,f=Math.abs(h-q)<=p,g=Math.abs(i-r)<=p,d&&(c.position.top=n._convertPositionTo("relative",{top:j,left:0}).top-n.margins.top),e&&(c.position.top=n._convertPositionTo("relative",{top:k-n.helperProportions.height,left:0}).top-n.margins.top),f&&(c.position.left=n._convertPositionTo("relative",{top:0,left:h}).left-n.margins.left),g&&(c.position.left=n._convertPositionTo("relative",{top:0,left:i-n.helperProportions.width}).left-n.margins.left)),!n.snapElements[l].snapping&&(d||e||f||g||m)&&n.options.snap.snap&&n.options.snap.snap.call(n.element,b,a.extend(n._uiHash(),{snapItem:n.snapElements[l].item})),n.snapElements[l].snapping=d||e||f||g||m)}}),a.ui.plugin.add("draggable","stack",{start:function(){var b,c=this.data("ui-draggable").options,d=a.makeArray(a(c.stack)).sort(function(b,c){return(parseInt(a(b).css("zIndex"),10)||0)-(parseInt(a(c).css("zIndex"),10)||0)});d.length&&(b=parseInt(a(d[0]).css("zIndex"),10)||0,a(d).each(function(c){a(this).css("zIndex",b+c)}),this.css("zIndex",b+d.length))}}),a.ui.plugin.add("draggable","zIndex",{start:function(b,c){var d=a(c.helper),e=a(this).data("ui-draggable").options;d.css("zIndex")&&(e._zIndex=d.css("zIndex")),d.css("zIndex",e.zIndex)},stop:function(b,c){var d=a(this).data("ui-draggable").options;d._zIndex&&a(c.helper).css("zIndex",d._zIndex)}})}(jQuery),function(a,b){function c(a,b,c){return a>b&&a<b+c}a.widget("ui.droppable",{version:"1.10.3",widgetEventPrefix:"drop",options:{accept:"*",activeClass:!1,addClasses:!0,greedy:!1,hoverClass:!1,scope:"default",tolerance:"intersect",activate:null,deactivate:null,drop:null,out:null,over:null},_create:function(){var b=this.options,c=b.accept;this.isover=!1,this.isout=!0,this.accept=a.isFunction(c)?c:function(a){return a.is(c)},this.proportions={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight},a.ui.ddmanager.droppables[b.scope]=a.ui.ddmanager.droppables[b.scope]||[],a.ui.ddmanager.droppables[b.scope].push(this),b.addClasses&&this.element.addClass("ui-droppable")},_destroy:function(){for(var b=0,c=a.ui.ddmanager.droppables[this.options.scope];b<c.length;b++)c[b]===this&&c.splice(b,1);this.element.removeClass("ui-droppable ui-droppable-disabled")},_setOption:function(b,c){"accept"===b&&(this.accept=a.isFunction(c)?c:function(a){return a.is(c)}),a.Widget.prototype._setOption.apply(this,arguments)},_activate:function(b){var c=a.ui.ddmanager.current;this.options.activeClass&&this.element.addClass(this.options.activeClass),c&&this._trigger("activate",b,this.ui(c))},_deactivate:function(b){var c=a.ui.ddmanager.current;this.options.activeClass&&this.element.removeClass(this.options.activeClass),c&&this._trigger("deactivate",b,this.ui(c))},_over:function(b){var c=a.ui.ddmanager.current;c&&(c.currentItem||c.element)[0]!==this.element[0]&&this.accept.call(this.element[0],c.currentItem||c.element)&&(this.options.hoverClass&&this.element.addClass(this.options.hoverClass),this._trigger("over",b,this.ui(c)))},_out:function(b){var c=a.ui.ddmanager.current;c&&(c.currentItem||c.element)[0]!==this.element[0]&&this.accept.call(this.element[0],c.currentItem||c.element)&&(this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("out",b,this.ui(c)))},_drop:function(b,c){var d=c||a.ui.ddmanager.current,e=!1;return!(!d||(d.currentItem||d.element)[0]===this.element[0])&&(this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function(){var b=a.data(this,"ui-droppable");if(b.options.greedy&&!b.options.disabled&&b.options.scope===d.options.scope&&b.accept.call(b.element[0],d.currentItem||d.element)&&a.ui.intersect(d,a.extend(b,{offset:b.element.offset()}),b.options.tolerance))return e=!0,!1}),!e&&(!!this.accept.call(this.element[0],d.currentItem||d.element)&&(this.options.activeClass&&this.element.removeClass(this.options.activeClass),this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("drop",b,this.ui(d)),this.element)))},ui:function(a){return{draggable:a.currentItem||a.element,helper:a.helper,position:a.position,offset:a.positionAbs}}}),a.ui.intersect=function(a,b,d){if(!b.offset)return!1;var e,f,g=(a.positionAbs||a.position.absolute).left,h=g+a.helperProportions.width,i=(a.positionAbs||a.position.absolute).top,j=i+a.helperProportions.height,k=b.offset.left,l=k+b.proportions.width,m=b.offset.top,n=m+b.proportions.height;switch(d){case"fit":return k<=g&&h<=l&&m<=i&&j<=n;case"intersect":return k<g+a.helperProportions.width/2&&h-a.helperProportions.width/2<l&&m<i+a.helperProportions.height/2&&j-a.helperProportions.height/2<n;case"pointer":return e=(a.positionAbs||a.position.absolute).left+(a.clickOffset||a.offset.click).left,f=(a.positionAbs||a.position.absolute).top+(a.clickOffset||a.offset.click).top,c(f,m,b.proportions.height)&&c(e,k,b.proportions.width);case"touch":return(i>=m&&i<=n||j>=m&&j<=n||i<m&&j>n)&&(g>=k&&g<=l||h>=k&&h<=l||g<k&&h>l);default:return!1}},a.ui.ddmanager={current:null,droppables:{default:[]},prepareOffsets:function(b,c){var d,e,f=a.ui.ddmanager.droppables[b.options.scope]||[],g=c?c.type:null,h=(b.currentItem||b.element).find(":data(ui-droppable)").addBack();a:for(d=0;d<f.length;d++)if(!(f[d].options.disabled||b&&!f[d].accept.call(f[d].element[0],b.currentItem||b.element))){for(e=0;e<h.length;e++)if(h[e]===f[d].element[0]){f[d].proportions.height=0;continue a}f[d].visible="none"!==f[d].element.css("display"),f[d].visible&&("mousedown"===g&&f[d]._activate.call(f[d],c),f[d].offset=f[d].element.offset(),f[d].proportions={width:f[d].element[0].offsetWidth,height:f[d].element[0].offsetHeight})}},drop:function(b,c){var d=!1;return a.each((a.ui.ddmanager.droppables[b.options.scope]||[]).slice(),function(){this.options&&(!this.options.disabled&&this.visible&&a.ui.intersect(b,this,this.options.tolerance)&&(d=this._drop.call(this,c)||d),!this.options.disabled&&this.visible&&this.accept.call(this.element[0],b.currentItem||b.element)&&(this.isout=!0,this.isover=!1,this._deactivate.call(this,c)))}),d},dragStart:function(b,c){b.element.parentsUntil("body").bind("scroll.droppable",function(){b.options.refreshPositions||a.ui.ddmanager.prepareOffsets(b,c)})},drag:function(b,c){b.options.refreshPositions&&a.ui.ddmanager.prepareOffsets(b,c),a.each(a.ui.ddmanager.droppables[b.options.scope]||[],function(){if(!this.options.disabled&&!this.greedyChild&&this.visible){var d,e,f,g=a.ui.intersect(b,this,this.options.tolerance),h=!g&&this.isover?"isout":g&&!this.isover?"isover":null;h&&(this.options.greedy&&(e=this.options.scope,f=this.element.parents(":data(ui-droppable)").filter(function(){return a.data(this,"ui-droppable").options.scope===e}),f.length&&(d=a.data(f[0],"ui-droppable"),d.greedyChild="isover"===h)),d&&"isover"===h&&(d.isover=!1,d.isout=!0,d._out.call(d,c)),this[h]=!0,this["isout"===h?"isover":"isout"]=!1,this["isover"===h?"_over":"_out"].call(this,c),d&&"isout"===h&&(d.isout=!1,d.isover=!0,d._over.call(d,c)))}})},dragStop:function(b,c){b.element.parentsUntil("body").unbind("scroll.droppable"),b.options.refreshPositions||a.ui.ddmanager.prepareOffsets(b,c)}}}(jQuery),function(a,b){function c(a){return parseInt(a,10)||0}function d(a){return!isNaN(parseInt(a,10))}a.widget("ui.resizable",a.ui.mouse,{version:"1.10.3",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_create:function(){var b,c,d,e,f,g=this,h=this.options;if(this.element.addClass("ui-resizable"),a.extend(this,{_aspectRatio:!!h.aspectRatio,aspectRatio:h.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:h.helper||h.ghost||h.animate?h.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)&&(this.element.wrap(a("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("ui-resizable",this.element.data("ui-resizable")),this.elementIsWrapper=!0,this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")}),this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0}),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css({margin:this.originalElement.css("margin")}),this._proportionallyResize()),this.handles=h.handles||(a(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se"),this.handles.constructor===String)for("all"===this.handles&&(this.handles="n,e,s,w,se,sw,ne,nw"),b=this.handles.split(","),this.handles={},c=0;c<b.length;c++)d=a.trim(b[c]),f="ui-resizable-"+d,e=a("<div class='ui-resizable-handle "+f+"'></div>"),e.css({zIndex:h.zIndex}),"se"===d&&e.addClass("ui-icon ui-icon-gripsmall-diagonal-se"),this.handles[d]=".ui-resizable-"+d,this.element.append(e);this._renderAxis=function(b){var c,d,e,f;b=b||this.element;for(c in this.handles)this.handles[c].constructor===String&&(this.handles[c]=a(this.handles[c],this.element).show()),this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)&&(d=a(this.handles[c],this.element),f=/sw|ne|nw|se|n|s/.test(c)?d.outerHeight():d.outerWidth(),e=["padding",/ne|nw|n/.test(c)?"Top":/se|sw|s/.test(c)?"Bottom":/^e$/.test(c)?"Right":"Left"].join(""),b.css(e,f),this._proportionallyResize()),a(this.handles[c]).length},this._renderAxis(this.element),this._handles=a(".ui-resizable-handle",this.element).disableSelection(),this._handles.mouseover(function(){g.resizing||(this.className&&(e=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),g.axis=e&&e[1]?e[1]:"se")}),h.autoHide&&(this._handles.hide(),a(this.element).addClass("ui-resizable-autohide").mouseenter(function(){h.disabled||(a(this).removeClass("ui-resizable-autohide"),g._handles.show())}).mouseleave(function(){h.disabled||g.resizing||(a(this).addClass("ui-resizable-autohide"),g._handles.hide())})),this._mouseInit()},_destroy:function(){this._mouseDestroy();var b,c=function(b){a(b).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};return this.elementIsWrapper&&(c(this.element),b=this.element,this.originalElement.css({position:b.css("position"),width:b.outerWidth(),height:b.outerHeight(),top:b.css("top"),left:b.css("left")}).insertAfter(b),b.remove()),this.originalElement.css("resize",this.originalResizeStyle),c(this.originalElement),this},_mouseCapture:function(b){var c,d,e=!1;for(c in this.handles)d=a(this.handles[c])[0],(d===b.target||a.contains(d,b.target))&&(e=!0);return!this.options.disabled&&e},_mouseStart:function(b){var d,e,f,g=this.options,h=this.element.position(),i=this.element;return this.resizing=!0,/absolute/.test(i.css("position"))?i.css({position:"absolute",top:i.css("top"),left:i.css("left")}):i.is(".ui-draggable")&&i.css({position:"absolute",top:h.top,left:h.left}),this._renderProxy(),d=c(this.helper.css("left")),e=c(this.helper.css("top")),g.containment&&(d+=a(g.containment).scrollLeft()||0,e+=a(g.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:d,top:e},this.size=this._helper?{width:i.outerWidth(),height:i.outerHeight()}:{width:i.width(),height:i.height()},this.originalSize=this._helper?{width:i.outerWidth(),height:i.outerHeight()}:{width:i.width(),height:i.height()},this.originalPosition={left:d,top:e},this.sizeDiff={width:i.outerWidth()-i.width(),height:i.outerHeight()-i.height()},this.originalMousePosition={left:b.pageX,top:b.pageY},this.aspectRatio="number"==typeof g.aspectRatio?g.aspectRatio:this.originalSize.width/this.originalSize.height||1,f=a(".ui-resizable-"+this.axis).css("cursor"),a("body").css("cursor","auto"===f?this.axis+"-resize":f),i.addClass("ui-resizable-resizing"),this._propagate("start",b),!0},_mouseDrag:function(b){var c,d=this.helper,e={},f=this.originalMousePosition,g=this.axis,h=this.position.top,i=this.position.left,j=this.size.width,k=this.size.height,l=b.pageX-f.left||0,m=b.pageY-f.top||0,n=this._change[g];return!!n&&(c=n.apply(this,[b,l,m]),this._updateVirtualBoundaries(b.shiftKey),(this._aspectRatio||b.shiftKey)&&(c=this._updateRatio(c,b)),c=this._respectSize(c,b),this._updateCache(c),this._propagate("resize",b),this.position.top!==h&&(e.top=this.position.top+"px"),this.position.left!==i&&(e.left=this.position.left+"px"),this.size.width!==j&&(e.width=this.size.width+"px"),this.size.height!==k&&(e.height=this.size.height+"px"),d.css(e),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),a.isEmptyObject(e)||this._trigger("resize",b,this.ui()),!1)},_mouseStop:function(b){this.resizing=!1;var c,d,e,f,g,h,i,j=this.options,k=this;return this._helper&&(c=this._proportionallyResizeElements,d=c.length&&/textarea/i.test(c[0].nodeName),e=d&&a.ui.hasScroll(c[0],"left")?0:k.sizeDiff.height,f=d?0:k.sizeDiff.width,g={width:k.helper.width()-f,height:k.helper.height()-e},h=parseInt(k.element.css("left"),10)+(k.position.left-k.originalPosition.left)||null,i=parseInt(k.element.css("top"),10)+(k.position.top-k.originalPosition.top)||null,j.animate||this.element.css(a.extend(g,{top:i,left:h})),k.helper.height(k.size.height),k.helper.width(k.size.width),this._helper&&!j.animate&&this._proportionallyResize()),a("body").css("cursor","auto"),this.element.removeClass("ui-resizable-resizing"),this._propagate("stop",b),this._helper&&this.helper.remove(),!1},_updateVirtualBoundaries:function(a){var b,c,e,f,g,h=this.options;g={minWidth:d(h.minWidth)?h.minWidth:0,maxWidth:d(h.maxWidth)?h.maxWidth:1/0,minHeight:d(h.minHeight)?h.minHeight:0,maxHeight:d(h.maxHeight)?h.maxHeight:1/0},(this._aspectRatio||a)&&(b=g.minHeight*this.aspectRatio,e=g.minWidth/this.aspectRatio,c=g.maxHeight*this.aspectRatio,f=g.maxWidth/this.aspectRatio,b>g.minWidth&&(g.minWidth=b),e>g.minHeight&&(g.minHeight=e),c<g.maxWidth&&(g.maxWidth=c),f<g.maxHeight&&(g.maxHeight=f)),this._vBoundaries=g},_updateCache:function(a){this.offset=this.helper.offset(),d(a.left)&&(this.position.left=a.left),d(a.top)&&(this.position.top=a.top),d(a.height)&&(this.size.height=a.height),d(a.width)&&(this.size.width=a.width)},_updateRatio:function(a){var b=this.position,c=this.size,e=this.axis;return d(a.height)?a.width=a.height*this.aspectRatio:d(a.width)&&(a.height=a.width/this.aspectRatio),"sw"===e&&(a.left=b.left+(c.width-a.width),a.top=null),"nw"===e&&(a.top=b.top+(c.height-a.height),a.left=b.left+(c.width-a.width)),a},_respectSize:function(a){var b=this._vBoundaries,c=this.axis,e=d(a.width)&&b.maxWidth&&b.maxWidth<a.width,f=d(a.height)&&b.maxHeight&&b.maxHeight<a.height,g=d(a.width)&&b.minWidth&&b.minWidth>a.width,h=d(a.height)&&b.minHeight&&b.minHeight>a.height,i=this.originalPosition.left+this.originalSize.width,j=this.position.top+this.size.height,k=/sw|nw|w/.test(c),l=/nw|ne|n/.test(c);return g&&(a.width=b.minWidth),h&&(a.height=b.minHeight),e&&(a.width=b.maxWidth),f&&(a.height=b.maxHeight),g&&k&&(a.left=i-b.minWidth),e&&k&&(a.left=i-b.maxWidth),h&&l&&(a.top=j-b.minHeight),f&&l&&(a.top=j-b.maxHeight),a.width||a.height||a.left||!a.top?a.width||a.height||a.top||!a.left||(a.left=null):a.top=null,a},_proportionallyResize:function(){if(this._proportionallyResizeElements.length){var a,b,c,d,e,f=this.helper||this.element;for(a=0;a<this._proportionallyResizeElements.length;a++){if(e=this._proportionallyResizeElements[a],!this.borderDif)for(this.borderDif=[],c=[e.css("borderTopWidth"),e.css("borderRightWidth"),e.css("borderBottomWidth"),e.css("borderLeftWidth")],d=[e.css("paddingTop"),e.css("paddingRight"),e.css("paddingBottom"),e.css("paddingLeft")],b=0;b<c.length;b++)this.borderDif[b]=(parseInt(c[b],10)||0)+(parseInt(d[b],10)||0);e.css({height:f.height()-this.borderDif[0]-this.borderDif[2]||0,width:f.width()-this.borderDif[1]-this.borderDif[3]||0})}}},_renderProxy:function(){var b=this.element,c=this.options;this.elementOffset=b.offset(),this._helper?(this.helper=this.helper||a("<div style='overflow:hidden;'></div>"),this.helper.addClass(this._helper).css({width:this.element.outerWidth()-1,height:this.element.outerHeight()-1,position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++c.zIndex}),this.helper.appendTo("body").disableSelection()):this.helper=this.element},_change:{e:function(a,b){return{width:this.originalSize.width+b}},w:function(a,b){var c=this.originalSize,d=this.originalPosition;return{left:d.left+b,width:c.width-b}},n:function(a,b,c){var d=this.originalSize,e=this.originalPosition;return{top:e.top+c,height:d.height-c}},s:function(a,b,c){return{height:this.originalSize.height+c}},se:function(b,c,d){return a.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[b,c,d]))},sw:function(b,c,d){return a.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[b,c,d]))},ne:function(b,c,d){return a.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[b,c,d]))},nw:function(b,c,d){return a.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[b,c,d]))}},_propagate:function(b,c){a.ui.plugin.call(this,b,[c,this.ui()]),"resize"!==b&&this._trigger(b,c,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),a.ui.plugin.add("resizable","animate",{stop:function(b){var c=a(this).data("ui-resizable"),d=c.options,e=c._proportionallyResizeElements,f=e.length&&/textarea/i.test(e[0].nodeName),g=f&&a.ui.hasScroll(e[0],"left")?0:c.sizeDiff.height,h=f?0:c.sizeDiff.width,i={width:c.size.width-h,height:c.size.height-g},j=parseInt(c.element.css("left"),10)+(c.position.left-c.originalPosition.left)||null,k=parseInt(c.element.css("top"),10)+(c.position.top-c.originalPosition.top)||null;c.element.animate(a.extend(i,k&&j?{top:k,left:j}:{}),{duration:d.animateDuration,easing:d.animateEasing,step:function(){var d={width:parseInt(c.element.css("width"),10),height:parseInt(c.element.css("height"),10),top:parseInt(c.element.css("top"),10),left:parseInt(c.element.css("left"),10)};e&&e.length&&a(e[0]).css({width:d.width,height:d.height}),c._updateCache(d),c._propagate("resize",b)}})}}),a.ui.plugin.add("resizable","containment",{start:function(){var b,d,e,f,g,h,i,j=a(this).data("ui-resizable"),k=j.options,l=j.element,m=k.containment,n=m instanceof a?m.get(0):/parent/.test(m)?l.parent().get(0):m;n&&(j.containerElement=a(n),/document/.test(m)||m===document?(j.containerOffset={left:0,top:0},j.containerPosition={left:0,top:0},j.parentData={element:a(document),left:0,top:0,width:a(document).width(),height:a(document).height()||document.body.parentNode.scrollHeight}):(b=a(n),d=[],a(["Top","Right","Left","Bottom"]).each(function(a,e){d[a]=c(b.css("padding"+e))}),j.containerOffset=b.offset(),j.containerPosition=b.position(),j.containerSize={height:b.innerHeight()-d[3],width:b.innerWidth()-d[1]},e=j.containerOffset,f=j.containerSize.height,g=j.containerSize.width,h=a.ui.hasScroll(n,"left")?n.scrollWidth:g,i=a.ui.hasScroll(n)?n.scrollHeight:f,j.parentData={element:n,left:e.left,top:e.top,width:h,height:i}))},resize:function(b){var c,d,e,f,g=a(this).data("ui-resizable"),h=g.options,i=g.containerOffset,j=g.position,k=g._aspectRatio||b.shiftKey,l={top:0,left:0},m=g.containerElement;m[0]!==document&&/static/.test(m.css("position"))&&(l=i),j.left<(g._helper?i.left:0)&&(g.size.width=g.size.width+(g._helper?g.position.left-i.left:g.position.left-l.left),k&&(g.size.height=g.size.width/g.aspectRatio),g.position.left=h.helper?i.left:0),j.top<(g._helper?i.top:0)&&(g.size.height=g.size.height+(g._helper?g.position.top-i.top:g.position.top),k&&(g.size.width=g.size.height*g.aspectRatio),g.position.top=g._helper?i.top:0),g.offset.left=g.parentData.left+g.position.left,g.offset.top=g.parentData.top+g.position.top,c=Math.abs((g._helper?g.offset.left-l.left:g.offset.left-l.left)+g.sizeDiff.width),d=Math.abs((g._helper?g.offset.top-l.top:g.offset.top-i.top)+g.sizeDiff.height),e=g.containerElement.get(0)===g.element.parent().get(0),f=/relative|absolute/.test(g.containerElement.css("position")),e&&f&&(c-=g.parentData.left),c+g.size.width>=g.parentData.width&&(g.size.width=g.parentData.width-c,k&&(g.size.height=g.size.width/g.aspectRatio)),d+g.size.height>=g.parentData.height&&(g.size.height=g.parentData.height-d,k&&(g.size.width=g.size.height*g.aspectRatio))},stop:function(){var b=a(this).data("ui-resizable"),c=b.options,d=b.containerOffset,e=b.containerPosition,f=b.containerElement,g=a(b.helper),h=g.offset(),i=g.outerWidth()-b.sizeDiff.width,j=g.outerHeight()-b.sizeDiff.height;b._helper&&!c.animate&&/relative/.test(f.css("position"))&&a(this).css({left:h.left-e.left-d.left,width:i,height:j}),b._helper&&!c.animate&&/static/.test(f.css("position"))&&a(this).css({left:h.left-e.left-d.left,width:i,height:j})}}),a.ui.plugin.add("resizable","alsoResize",{start:function(){var b=a(this).data("ui-resizable"),c=b.options,d=function(b){a(b).each(function(){var b=a(this);b.data("ui-resizable-alsoresize",{width:parseInt(b.width(),10),height:parseInt(b.height(),10),left:parseInt(b.css("left"),10),top:parseInt(b.css("top"),10)})})};"object"!=typeof c.alsoResize||c.alsoResize.parentNode?d(c.alsoResize):c.alsoResize.length?(c.alsoResize=c.alsoResize[0],d(c.alsoResize)):a.each(c.alsoResize,function(a){d(a)})},resize:function(b,c){var d=a(this).data("ui-resizable"),e=d.options,f=d.originalSize,g=d.originalPosition,h={height:d.size.height-f.height||0,width:d.size.width-f.width||0,top:d.position.top-g.top||0,left:d.position.left-g.left||0},i=function(b,d){a(b).each(function(){var b=a(this),e=a(this).data("ui-resizable-alsoresize"),f={},g=d&&d.length?d:b.parents(c.originalElement[0]).length?["width","height"]:["width","height","top","left"];a.each(g,function(a,b){var c=(e[b]||0)+(h[b]||0);c&&c>=0&&(f[b]=c||null)}),b.css(f)})};"object"!=typeof e.alsoResize||e.alsoResize.nodeType?i(e.alsoResize):a.each(e.alsoResize,function(a,b){i(a,b)})},stop:function(){a(this).removeData("resizable-alsoresize")}}),a.ui.plugin.add("resizable","ghost",{start:function(){var b=a(this).data("ui-resizable"),c=b.options,d=b.size;b.ghost=b.originalElement.clone(),b.ghost.css({opacity:.25,display:"block",position:"relative",height:d.height,width:d.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass("string"==typeof c.ghost?c.ghost:""),b.ghost.appendTo(b.helper)},resize:function(){var b=a(this).data("ui-resizable");b.ghost&&b.ghost.css({position:"relative",height:b.size.height,width:b.size.width})},stop:function(){var b=a(this).data("ui-resizable");b.ghost&&b.helper&&b.helper.get(0).removeChild(b.ghost.get(0))}}),a.ui.plugin.add("resizable","grid",{resize:function(){var b=a(this).data("ui-resizable"),c=b.options,d=b.size,e=b.originalSize,f=b.originalPosition,g=b.axis,h="number"==typeof c.grid?[c.grid,c.grid]:c.grid,i=h[0]||1,j=h[1]||1,k=Math.round((d.width-e.width)/i)*i,l=Math.round((d.height-e.height)/j)*j,m=e.width+k,n=e.height+l,o=c.maxWidth&&c.maxWidth<m,p=c.maxHeight&&c.maxHeight<n,q=c.minWidth&&c.minWidth>m,r=c.minHeight&&c.minHeight>n;c.grid=h,q&&(m+=i),r&&(n+=j),o&&(m-=i),p&&(n-=j),/^(se|s|e)$/.test(g)?(b.size.width=m,b.size.height=n):/^(ne)$/.test(g)?(b.size.width=m,b.size.height=n,b.position.top=f.top-l):/^(sw)$/.test(g)?(b.size.width=m,b.size.height=n,b.position.left=f.left-k):(b.size.width=m,b.size.height=n,b.position.top=f.top-l,b.position.left=f.left-k)}})}(jQuery),function(a,b){a.widget("ui.selectable",a.ui.mouse,{version:"1.10.3",options:{appendTo:"body",autoRefresh:!0,distance:0,filter:"*",tolerance:"touch",selected:null,selecting:null,start:null,stop:null,unselected:null,unselecting:null},_create:function(){var b,c=this;this.element.addClass("ui-selectable"),this.dragged=!1,this.refresh=function(){b=a(c.options.filter,c.element[0]),b.addClass("ui-selectee"),b.each(function(){var b=a(this),c=b.offset();a.data(this,"selectable-item",{element:this,$element:b,left:c.left,top:c.top,right:c.left+b.outerWidth(),bottom:c.top+b.outerHeight(),startselected:!1,selected:b.hasClass("ui-selected"),selecting:b.hasClass("ui-selecting"),unselecting:b.hasClass("ui-unselecting")})})},this.refresh(),this.selectees=b.addClass("ui-selectee"),this._mouseInit(),this.helper=a("<div class='ui-selectable-helper'></div>")},_destroy:function(){this.selectees.removeClass("ui-selectee").removeData("selectable-item"),this.element.removeClass("ui-selectable ui-selectable-disabled"),this._mouseDestroy()},_mouseStart:function(b){var c=this,d=this.options;this.opos=[b.pageX,b.pageY],this.options.disabled||(this.selectees=a(d.filter,this.element[0]),this._trigger("start",b),a(d.appendTo).append(this.helper),this.helper.css({left:b.pageX,top:b.pageY,width:0,height:0}),d.autoRefresh&&this.refresh(),this.selectees.filter(".ui-selected").each(function(){var d=a.data(this,"selectable-item");d.startselected=!0,b.metaKey||b.ctrlKey||(d.$element.removeClass("ui-selected"),d.selected=!1,d.$element.addClass("ui-unselecting"),d.unselecting=!0,c._trigger("unselecting",b,{unselecting:d.element}))}),a(b.target).parents().addBack().each(function(){var d,e=a.data(this,"selectable-item");if(e)return d=!b.metaKey&&!b.ctrlKey||!e.$element.hasClass("ui-selected"),e.$element.removeClass(d?"ui-unselecting":"ui-selected").addClass(d?"ui-selecting":"ui-unselecting"),e.unselecting=!d,e.selecting=d,e.selected=d,d?c._trigger("selecting",b,{selecting:e.element}):c._trigger("unselecting",b,{unselecting:e.element}),!1}))},_mouseDrag:function(b){if(this.dragged=!0,!this.options.disabled){var c,d=this,e=this.options,f=this.opos[0],g=this.opos[1],h=b.pageX,i=b.pageY;return f>h&&(c=h,h=f,f=c),g>i&&(c=i,i=g,g=c),this.helper.css({left:f,top:g,width:h-f,height:i-g}),this.selectees.each(function(){var c=a.data(this,"selectable-item"),j=!1;c&&c.element!==d.element[0]&&("touch"===e.tolerance?j=!(c.left>h||c.right<f||c.top>i||c.bottom<g):"fit"===e.tolerance&&(j=c.left>f&&c.right<h&&c.top>g&&c.bottom<i),j?(c.selected&&(c.$element.removeClass("ui-selected"),c.selected=!1),c.unselecting&&(c.$element.removeClass("ui-unselecting"),c.unselecting=!1),c.selecting||(c.$element.addClass("ui-selecting"),c.selecting=!0,d._trigger("selecting",b,{selecting:c.element}))):(c.selecting&&((b.metaKey||b.ctrlKey)&&c.startselected?(c.$element.removeClass("ui-selecting"),c.selecting=!1,c.$element.addClass("ui-selected"),c.selected=!0):(c.$element.removeClass("ui-selecting"),c.selecting=!1,c.startselected&&(c.$element.addClass("ui-unselecting"),c.unselecting=!0),d._trigger("unselecting",b,{unselecting:c.element}))),c.selected&&(b.metaKey||b.ctrlKey||c.startselected||(c.$element.removeClass("ui-selected"),c.selected=!1,c.$element.addClass("ui-unselecting"),c.unselecting=!0,d._trigger("unselecting",b,{unselecting:c.element})))))}),!1}},_mouseStop:function(b){var c=this;return this.dragged=!1,a(".ui-unselecting",this.element[0]).each(function(){var d=a.data(this,"selectable-item");d.$element.removeClass("ui-unselecting"),d.unselecting=!1,d.startselected=!1,c._trigger("unselected",b,{unselected:d.element})}),a(".ui-selecting",this.element[0]).each(function(){var d=a.data(this,"selectable-item");d.$element.removeClass("ui-selecting").addClass("ui-selected"),d.selecting=!1,d.selected=!0,d.startselected=!0,c._trigger("selected",b,{selected:d.element})}),this._trigger("stop",b),this.helper.remove(),!1}})}(jQuery),function(a,b){function c(a,b,c){return a>b&&a<b+c}function d(a){return/left|right/.test(a.css("float"))||/inline|table-cell/.test(a.css("display"))}a.widget("ui.sortable",a.ui.mouse,{version:"1.10.3",widgetEventPrefix:"sort",ready:!1,options:{appendTo:"parent",axis:!1,connectWith:!1,containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1,forceHelperSize:!1,grid:!1,handle:!1,helper:"original",items:"> *",opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1e3,activate:null,beforeStop:null,change:null,deactivate:null,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update:null},_create:function(){var a=this.options;this.containerCache={},this.element.addClass("ui-sortable"),this.refresh(),this.floating=!!this.items.length&&("x"===a.axis||d(this.items[0].item)),this.offset=this.element.offset(),this._mouseInit(),this.ready=!0},_destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled"),this._mouseDestroy();for(var a=this.items.length-1;a>=0;a--)this.items[a].item.removeData(this.widgetName+"-item");return this},_setOption:function(b,c){"disabled"===b?(this.options[b]=c,this.widget().toggleClass("ui-sortable-disabled",!!c)):a.Widget.prototype._setOption.apply(this,arguments)},_mouseCapture:function(b,c){var d=null,e=!1,f=this;return!this.reverting&&(!this.options.disabled&&"static"!==this.options.type&&(this._refreshItems(b),a(b.target).parents().each(function(){if(a.data(this,f.widgetName+"-item")===f)return d=a(this),!1}),a.data(b.target,f.widgetName+"-item")===f&&(d=a(b.target)),!!d&&(!(this.options.handle&&!c&&(a(this.options.handle,d).find("*").addBack().each(function(){this===b.target&&(e=!0)}),!e))&&(this.currentItem=d,this._removeCurrentsFromItems(),!0))))},_mouseStart:function(b,c,d){var e,f,g=this.options;if(this.currentContainer=this,this.refreshPositions(),this.helper=this._createHelper(b),this._cacheHelperProportions(),this._cacheMargins(),this.scrollParent=this.helper.scrollParent(),this.offset=this.currentItem.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},a.extend(this.offset,{click:{left:b.pageX-this.offset.left,top:b.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.helper.css("position","absolute"),this.cssPosition=this.helper.css("position"),this.originalPosition=this._generatePosition(b),this.originalPageX=b.pageX,this.originalPageY=b.pageY,g.cursorAt&&this._adjustOffsetFromHelper(g.cursorAt),this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]},this.helper[0]!==this.currentItem[0]&&this.currentItem.hide(),this._createPlaceholder(),g.containment&&this._setContainment(),g.cursor&&"auto"!==g.cursor&&(f=this.document.find("body"),this.storedCursor=f.css("cursor"),f.css("cursor",g.cursor),this.storedStylesheet=a("<style>*{ cursor: "+g.cursor+" !important; }</style>").appendTo(f)),g.opacity&&(this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity")),this.helper.css("opacity",g.opacity)),g.zIndex&&(this.helper.css("zIndex")&&(this._storedZIndex=this.helper.css("zIndex")),this.helper.css("zIndex",g.zIndex)),this.scrollParent[0]!==document&&"HTML"!==this.scrollParent[0].tagName&&(this.overflowOffset=this.scrollParent.offset()),this._trigger("start",b,this._uiHash()),this._preserveHelperProportions||this._cacheHelperProportions(),!d)for(e=this.containers.length-1;e>=0;e--)this.containers[e]._trigger("activate",b,this._uiHash(this));return a.ui.ddmanager&&(a.ui.ddmanager.current=this),a.ui.ddmanager&&!g.dropBehaviour&&a.ui.ddmanager.prepareOffsets(this,b),this.dragging=!0,this.helper.addClass("ui-sortable-helper"),this._mouseDrag(b),!0},_mouseDrag:function(b){var c,d,e,f,g=this.options,h=!1;for(this.position=this._generatePosition(b),this.positionAbs=this._convertPositionTo("absolute"),this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs),this.options.scroll&&(this.scrollParent[0]!==document&&"HTML"!==this.scrollParent[0].tagName?(this.overflowOffset.top+this.scrollParent[0].offsetHeight-b.pageY<g.scrollSensitivity?this.scrollParent[0].scrollTop=h=this.scrollParent[0].scrollTop+g.scrollSpeed:b.pageY-this.overflowOffset.top<g.scrollSensitivity&&(this.scrollParent[0].scrollTop=h=this.scrollParent[0].scrollTop-g.scrollSpeed),this.overflowOffset.left+this.scrollParent[0].offsetWidth-b.pageX<g.scrollSensitivity?this.scrollParent[0].scrollLeft=h=this.scrollParent[0].scrollLeft+g.scrollSpeed:b.pageX-this.overflowOffset.left<g.scrollSensitivity&&(this.scrollParent[0].scrollLeft=h=this.scrollParent[0].scrollLeft-g.scrollSpeed)):(b.pageY-a(document).scrollTop()<g.scrollSensitivity?h=a(document).scrollTop(a(document).scrollTop()-g.scrollSpeed):a(window).height()-(b.pageY-a(document).scrollTop())<g.scrollSensitivity&&(h=a(document).scrollTop(a(document).scrollTop()+g.scrollSpeed)),b.pageX-a(document).scrollLeft()<g.scrollSensitivity?h=a(document).scrollLeft(a(document).scrollLeft()-g.scrollSpeed):a(window).width()-(b.pageX-a(document).scrollLeft())<g.scrollSensitivity&&(h=a(document).scrollLeft(a(document).scrollLeft()+g.scrollSpeed))),h!==!1&&a.ui.ddmanager&&!g.dropBehaviour&&a.ui.ddmanager.prepareOffsets(this,b)),this.positionAbs=this._convertPositionTo("absolute"),this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),c=this.items.length-1;c>=0;c--)if(d=this.items[c],e=d.item[0],f=this._intersectsWithPointer(d),f&&d.instance===this.currentContainer&&!(e===this.currentItem[0]||this.placeholder[1===f?"next":"prev"]()[0]===e||a.contains(this.placeholder[0],e)||"semi-dynamic"===this.options.type&&a.contains(this.element[0],e))){if(this.direction=1===f?"down":"up","pointer"!==this.options.tolerance&&!this._intersectsWithSides(d))break;this._rearrange(b,d),this._trigger("change",b,this._uiHash());break}return this._contactContainers(b),a.ui.ddmanager&&a.ui.ddmanager.drag(this,b),this._trigger("sort",b,this._uiHash()),this.lastPositionAbs=this.positionAbs,!1},_mouseStop:function(b,c){if(b){if(a.ui.ddmanager&&!this.options.dropBehaviour&&a.ui.ddmanager.drop(this,b),this.options.revert){var d=this,e=this.placeholder.offset(),f=this.options.axis,g={};f&&"x"!==f||(g.left=e.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollLeft)),f&&"y"!==f||(g.top=e.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollTop)),this.reverting=!0,a(this.helper).animate(g,parseInt(this.options.revert,10)||500,function(){d._clear(b)})}else this._clear(b,c);return!1}},cancel:function(){if(this.dragging){this._mouseUp({target:null}),"original"===this.options.helper?this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper"):this.currentItem.show();for(var b=this.containers.length-1;b>=0;b--)this.containers[b]._trigger("deactivate",null,this._uiHash(this)),this.containers[b].containerCache.over&&(this.containers[b]._trigger("out",null,this._uiHash(this)),this.containers[b].containerCache.over=0)}return this.placeholder&&(this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]),"original"!==this.options.helper&&this.helper&&this.helper[0].parentNode&&this.helper.remove(),a.extend(this,{helper:null,dragging:!1,reverting:!1,_noFinalSort:null}),this.domPosition.prev?a(this.domPosition.prev).after(this.currentItem):a(this.domPosition.parent).prepend(this.currentItem)),this},serialize:function(b){var c=this._getItemsAsjQuery(b&&b.connected),d=[];return b=b||{},a(c).each(function(){var c=(a(b.item||this).attr(b.attribute||"id")||"").match(b.expression||/(.+)[\-=_](.+)/);c&&d.push((b.key||c[1]+"[]")+"="+(b.key&&b.expression?c[1]:c[2]))}),!d.length&&b.key&&d.push(b.key+"="),d.join("&")},toArray:function(b){var c=this._getItemsAsjQuery(b&&b.connected),d=[];return b=b||{},c.each(function(){d.push(a(b.item||this).attr(b.attribute||"id")||"")}),d},_intersectsWith:function(a){var b=this.positionAbs.left,c=b+this.helperProportions.width,d=this.positionAbs.top,e=d+this.helperProportions.height,f=a.left,g=f+a.width,h=a.top,i=h+a.height,j=this.offset.click.top,k=this.offset.click.left,l="x"===this.options.axis||d+j>h&&d+j<i,m="y"===this.options.axis||b+k>f&&b+k<g,n=l&&m;return"pointer"===this.options.tolerance||this.options.forcePointerForContainers||"pointer"!==this.options.tolerance&&this.helperProportions[this.floating?"width":"height"]>a[this.floating?"width":"height"]?n:f<b+this.helperProportions.width/2&&c-this.helperProportions.width/2<g&&h<d+this.helperProportions.height/2&&e-this.helperProportions.height/2<i},_intersectsWithPointer:function(a){var b="x"===this.options.axis||c(this.positionAbs.top+this.offset.click.top,a.top,a.height),d="y"===this.options.axis||c(this.positionAbs.left+this.offset.click.left,a.left,a.width),e=b&&d,f=this._getDragVerticalDirection(),g=this._getDragHorizontalDirection();return!!e&&(this.floating?g&&"right"===g||"down"===f?2:1:f&&("down"===f?2:1))},_intersectsWithSides:function(a){var b=c(this.positionAbs.top+this.offset.click.top,a.top+a.height/2,a.height),d=c(this.positionAbs.left+this.offset.click.left,a.left+a.width/2,a.width),e=this._getDragVerticalDirection(),f=this._getDragHorizontalDirection();return this.floating&&f?"right"===f&&d||"left"===f&&!d:e&&("down"===e&&b||"up"===e&&!b)},_getDragVerticalDirection:function(){var a=this.positionAbs.top-this.lastPositionAbs.top;return 0!==a&&(a>0?"down":"up")},_getDragHorizontalDirection:function(){var a=this.positionAbs.left-this.lastPositionAbs.left;return 0!==a&&(a>0?"right":"left")},refresh:function(a){return this._refreshItems(a),this.refreshPositions(),this},_connectWith:function(){var a=this.options;return a.connectWith.constructor===String?[a.connectWith]:a.connectWith},_getItemsAsjQuery:function(b){var c,d,e,f,g=[],h=[],i=this._connectWith();if(i&&b)for(c=i.length-1;c>=0;c--)for(e=a(i[c]),d=e.length-1;d>=0;d--)f=a.data(e[d],this.widgetFullName),f&&f!==this&&!f.options.disabled&&h.push([a.isFunction(f.options.items)?f.options.items.call(f.element):a(f.options.items,f.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),f]);for(h.push([a.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):a(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]),c=h.length-1;c>=0;c--)h[c][0].each(function(){g.push(this)});return a(g)},_removeCurrentsFromItems:function(){var b=this.currentItem.find(":data("+this.widgetName+"-item)");this.items=a.grep(this.items,function(a){for(var c=0;c<b.length;c++)if(b[c]===a.item[0])return!1;return!0})},_refreshItems:function(b){this.items=[],this.containers=[this];var c,d,e,f,g,h,i,j,k=this.items,l=[[a.isFunction(this.options.items)?this.options.items.call(this.element[0],b,{item:this.currentItem}):a(this.options.items,this.element),this]],m=this._connectWith();if(m&&this.ready)for(c=m.length-1;c>=0;c--)for(e=a(m[c]),d=e.length-1;d>=0;d--)f=a.data(e[d],this.widgetFullName),f&&f!==this&&!f.options.disabled&&(l.push([a.isFunction(f.options.items)?f.options.items.call(f.element[0],b,{item:this.currentItem}):a(f.options.items,f.element),f]),this.containers.push(f));for(c=l.length-1;c>=0;c--)for(g=l[c][1],h=l[c][0],d=0,j=h.length;d<j;d++)i=a(h[d]),i.data(this.widgetName+"-item",g),k.push({item:i,instance:g,width:0,height:0,left:0,top:0})},refreshPositions:function(b){this.offsetParent&&this.helper&&(this.offset.parent=this._getParentOffset());var c,d,e,f;for(c=this.items.length-1;c>=0;c--)d=this.items[c],d.instance!==this.currentContainer&&this.currentContainer&&d.item[0]!==this.currentItem[0]||(e=this.options.toleranceElement?a(this.options.toleranceElement,d.item):d.item,b||(d.width=e.outerWidth(),d.height=e.outerHeight()),f=e.offset(),d.left=f.left,d.top=f.top);if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(c=this.containers.length-1;c>=0;c--)f=this.containers[c].element.offset(),this.containers[c].containerCache.left=f.left,this.containers[c].containerCache.top=f.top,this.containers[c].containerCache.width=this.containers[c].element.outerWidth(),this.containers[c].containerCache.height=this.containers[c].element.outerHeight();return this},_createPlaceholder:function(b){b=b||this;var c,d=b.options;d.placeholder&&d.placeholder.constructor!==String||(c=d.placeholder,d.placeholder={element:function(){var d=b.currentItem[0].nodeName.toLowerCase(),e=a("<"+d+">",b.document[0]).addClass(c||b.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper");return"tr"===d?b.currentItem.children().each(function(){a("<td>&#160;</td>",b.document[0]).attr("colspan",a(this).attr("colspan")||1).appendTo(e)}):"img"===d&&e.attr("src",b.currentItem.attr("src")),c||e.css("visibility","hidden"),e},update:function(a,e){c&&!d.forcePlaceholderSize||(e.height()||e.height(b.currentItem.innerHeight()-parseInt(b.currentItem.css("paddingTop")||0,10)-parseInt(b.currentItem.css("paddingBottom")||0,10)),e.width()||e.width(b.currentItem.innerWidth()-parseInt(b.currentItem.css("paddingLeft")||0,10)-parseInt(b.currentItem.css("paddingRight")||0,10)))}}),b.placeholder=a(d.placeholder.element.call(b.element,b.currentItem)),b.currentItem.after(b.placeholder),d.placeholder.update(b,b.placeholder)},_contactContainers:function(b){var e,f,g,h,i,j,k,l,m,n,o=null,p=null;for(e=this.containers.length-1;e>=0;e--)if(!a.contains(this.currentItem[0],this.containers[e].element[0]))if(this._intersectsWith(this.containers[e].containerCache)){if(o&&a.contains(this.containers[e].element[0],o.element[0]))continue;o=this.containers[e],p=e}else this.containers[e].containerCache.over&&(this.containers[e]._trigger("out",b,this._uiHash(this)),this.containers[e].containerCache.over=0);if(o)if(1===this.containers.length)this.containers[p].containerCache.over||(this.containers[p]._trigger("over",b,this._uiHash(this)),this.containers[p].containerCache.over=1);else{for(g=1e4,h=null,n=o.floating||d(this.currentItem),i=n?"left":"top",j=n?"width":"height",k=this.positionAbs[i]+this.offset.click[i],f=this.items.length-1;f>=0;f--)a.contains(this.containers[p].element[0],this.items[f].item[0])&&this.items[f].item[0]!==this.currentItem[0]&&(n&&!c(this.positionAbs.top+this.offset.click.top,this.items[f].top,this.items[f].height)||(l=this.items[f].item.offset()[i],m=!1,Math.abs(l-k)>Math.abs(l+this.items[f][j]-k)&&(m=!0,l+=this.items[f][j]),Math.abs(l-k)<g&&(g=Math.abs(l-k),h=this.items[f],this.direction=m?"up":"down")));if(!h&&!this.options.dropOnEmpty)return;if(this.currentContainer===this.containers[p])return;h?this._rearrange(b,h,null,!0):this._rearrange(b,null,this.containers[p].element,!0),this._trigger("change",b,this._uiHash()),this.containers[p]._trigger("change",b,this._uiHash(this)),this.currentContainer=this.containers[p],this.options.placeholder.update(this.currentContainer,this.placeholder),this.containers[p]._trigger("over",b,this._uiHash(this)),this.containers[p].containerCache.over=1}},_createHelper:function(b){var c=this.options,d=a.isFunction(c.helper)?a(c.helper.apply(this.element[0],[b,this.currentItem])):"clone"===c.helper?this.currentItem.clone():this.currentItem;return d.parents("body").length||a("parent"!==c.appendTo?c.appendTo:this.currentItem[0].parentNode)[0].appendChild(d[0]),d[0]===this.currentItem[0]&&(this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}),d[0].style.width&&!c.forceHelperSize||d.width(this.currentItem.width()),d[0].style.height&&!c.forceHelperSize||d.height(this.currentItem.height()),d},_adjustOffsetFromHelper:function(b){"string"==typeof b&&(b=b.split(" ")),a.isArray(b)&&(b={left:+b[0],top:+b[1]||0}),"left"in b&&(this.offset.click.left=b.left+this.margins.left),"right"in b&&(this.offset.click.left=this.helperProportions.width-b.right+this.margins.left),"top"in b&&(this.offset.click.top=b.top+this.margins.top),"bottom"in b&&(this.offset.click.top=this.helperProportions.height-b.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var b=this.offsetParent.offset();return"absolute"===this.cssPosition&&this.scrollParent[0]!==document&&a.contains(this.scrollParent[0],this.offsetParent[0])&&(b.left+=this.scrollParent.scrollLeft(),b.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===document.body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&a.ui.ie)&&(b={top:0,left:0}),{top:b.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:b.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"===this.cssPosition){var a=this.currentItem.position();return{top:a.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:a.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var b,c,d,e=this.options;"parent"===e.containment&&(e.containment=this.helper[0].parentNode),"document"!==e.containment&&"window"!==e.containment||(this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,a("document"===e.containment?document:window).width()-this.helperProportions.width-this.margins.left,(a("document"===e.containment?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]),/^(document|window|parent)$/.test(e.containment)||(b=a(e.containment)[0],c=a(e.containment).offset(),d="hidden"!==a(b).css("overflow"),this.containment=[c.left+(parseInt(a(b).css("borderLeftWidth"),10)||0)+(parseInt(a(b).css("paddingLeft"),10)||0)-this.margins.left,c.top+(parseInt(a(b).css("borderTopWidth"),10)||0)+(parseInt(a(b).css("paddingTop"),10)||0)-this.margins.top,c.left+(d?Math.max(b.scrollWidth,b.offsetWidth):b.offsetWidth)-(parseInt(a(b).css("borderLeftWidth"),10)||0)-(parseInt(a(b).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,c.top+(d?Math.max(b.scrollHeight,b.offsetHeight):b.offsetHeight)-(parseInt(a(b).css("borderTopWidth"),10)||0)-(parseInt(a(b).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top])},_convertPositionTo:function(b,c){c||(c=this.position);var d="absolute"===b?1:-1,e="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&a.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,f=/(html|body)/i.test(e[0].tagName);return{top:c.top+this.offset.relative.top*d+this.offset.parent.top*d-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():f?0:e.scrollTop())*d,left:c.left+this.offset.relative.left*d+this.offset.parent.left*d-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():f?0:e.scrollLeft())*d}},_generatePosition:function(b){var c,d,e=this.options,f=b.pageX,g=b.pageY,h="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&a.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,i=/(html|body)/i.test(h[0].tagName);return"relative"!==this.cssPosition||this.scrollParent[0]!==document&&this.scrollParent[0]!==this.offsetParent[0]||(this.offset.relative=this._getRelativeOffset()),this.originalPosition&&(this.containment&&(b.pageX-this.offset.click.left<this.containment[0]&&(f=this.containment[0]+this.offset.click.left),b.pageY-this.offset.click.top<this.containment[1]&&(g=this.containment[1]+this.offset.click.top),b.pageX-this.offset.click.left>this.containment[2]&&(f=this.containment[2]+this.offset.click.left),b.pageY-this.offset.click.top>this.containment[3]&&(g=this.containment[3]+this.offset.click.top)),e.grid&&(c=this.originalPageY+Math.round((g-this.originalPageY)/e.grid[1])*e.grid[1],g=this.containment?c-this.offset.click.top>=this.containment[1]&&c-this.offset.click.top<=this.containment[3]?c:c-this.offset.click.top>=this.containment[1]?c-e.grid[1]:c+e.grid[1]:c,d=this.originalPageX+Math.round((f-this.originalPageX)/e.grid[0])*e.grid[0],f=this.containment?d-this.offset.click.left>=this.containment[0]&&d-this.offset.click.left<=this.containment[2]?d:d-this.offset.click.left>=this.containment[0]?d-e.grid[0]:d+e.grid[0]:d)),{top:g-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():i?0:h.scrollTop()),left:f-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():i?0:h.scrollLeft())}},_rearrange:function(a,b,c,d){c?c[0].appendChild(this.placeholder[0]):b.item[0].parentNode.insertBefore(this.placeholder[0],"down"===this.direction?b.item[0]:b.item[0].nextSibling),this.counter=this.counter?++this.counter:1;var e=this.counter;this._delay(function(){e===this.counter&&this.refreshPositions(!d)})},_clear:function(a,b){this.reverting=!1;var c,d=[];if(!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem),this._noFinalSort=null,this.helper[0]===this.currentItem[0]){for(c in this._storedCSS)"auto"!==this._storedCSS[c]&&"static"!==this._storedCSS[c]||(this._storedCSS[c]="");this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else this.currentItem.show();for(this.fromOutside&&!b&&d.push(function(a){this._trigger("receive",a,this._uiHash(this.fromOutside))}),!this.fromOutside&&this.domPosition.prev===this.currentItem.prev().not(".ui-sortable-helper")[0]&&this.domPosition.parent===this.currentItem.parent()[0]||b||d.push(function(a){this._trigger("update",a,this._uiHash())}),this!==this.currentContainer&&(b||(d.push(function(a){this._trigger("remove",a,this._uiHash())}),d.push(function(a){return function(b){a._trigger("receive",b,this._uiHash(this))}}.call(this,this.currentContainer)),d.push(function(a){return function(b){a._trigger("update",b,this._uiHash(this))}}.call(this,this.currentContainer)))),c=this.containers.length-1;c>=0;c--)b||d.push(function(a){return function(b){a._trigger("deactivate",b,this._uiHash(this))}}.call(this,this.containers[c])),this.containers[c].containerCache.over&&(d.push(function(a){return function(b){a._trigger("out",b,this._uiHash(this))}}.call(this,this.containers[c])),this.containers[c].containerCache.over=0);if(this.storedCursor&&(this.document.find("body").css("cursor",this.storedCursor),this.storedStylesheet.remove()),this._storedOpacity&&this.helper.css("opacity",this._storedOpacity),this._storedZIndex&&this.helper.css("zIndex","auto"===this._storedZIndex?"":this._storedZIndex),this.dragging=!1,this.cancelHelperRemoval){if(!b){for(this._trigger("beforeStop",a,this._uiHash()),c=0;c<d.length;c++)d[c].call(this,a);this._trigger("stop",a,this._uiHash())}return this.fromOutside=!1,!1}if(b||this._trigger("beforeStop",a,this._uiHash()),this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.helper[0]!==this.currentItem[0]&&this.helper.remove(),this.helper=null,!b){for(c=0;c<d.length;c++)d[c].call(this,a);this._trigger("stop",a,this._uiHash())}return this.fromOutside=!1,!0},_trigger:function(){a.Widget.prototype._trigger.apply(this,arguments)===!1&&this.cancel()},_uiHash:function(b){var c=b||this;return{helper:c.helper,placeholder:c.placeholder||a([]),position:c.position,originalPosition:c.originalPosition,offset:c.positionAbs,item:c.currentItem,sender:b?b.element:null}}})}(jQuery),function(a,b){var c="ui-effects-";a.effects={effect:{}},function(a,b){function m(a,b,c){var d=h[b.type]||{};return null==a?c||!b.def?null:b.def:(a=d.floor?~~a:parseFloat(a),isNaN(a)?b.def:d.mod?(a+d.mod)%d.mod:0>a?0:d.max<a?d.max:a)}function n(b){var c=f(),d=c._rgba=[];return b=b.toLowerCase(),l(e,function(a,e){var f,h=e.re.exec(b),i=h&&e.parse(h),j=e.space||"rgba";if(i)return f=c[j](i),c[g[j].cache]=f[g[j].cache],d=c._rgba=f._rgba,!1}),d.length?("0,0,0,0"===d.join()&&a.extend(d,k.transparent),c):k[b]}function o(a,b,c){return c=(c+1)%1,6*c<1?a+(b-a)*c*6:2*c<1?b:3*c<2?a+(b-a)*(2/3-c)*6:a}var k,c="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",d=/^([\-+])=\s*(\d+\.?\d*)/,e=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(a){return[a[1],a[2],a[3],a[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(a){return[2.55*a[1],2.55*a[2],2.55*a[3],a[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(a){return[parseInt(a[1],16),parseInt(a[2],16),parseInt(a[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(a){return[parseInt(a[1]+a[1],16),parseInt(a[2]+a[2],16),parseInt(a[3]+a[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(a){return[a[1],a[2]/100,a[3]/100,a[4]]}}],f=a.Color=function(b,c,d,e){return new a.Color.fn.parse(b,c,d,e)},g={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},h={byte:{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},i=f.support={},j=a("<p>")[0],l=a.each;j.style.cssText="background-color:rgba(1,1,1,.5)",i.rgba=j.style.backgroundColor.indexOf("rgba")>-1,l(g,function(a,b){b.cache="_"+a,b.props.alpha={idx:3,type:"percent",def:1}}),f.fn=a.extend(f.prototype,{parse:function(c,d,e,h){if(c===b)return this._rgba=[null,null,null,null],this;(c.jquery||c.nodeType)&&(c=a(c).css(d),d=b);var i=this,j=a.type(c),o=this._rgba=[];return d!==b&&(c=[c,d,e,h],j="array"),"string"===j?this.parse(n(c)||k._default):"array"===j?(l(g.rgba.props,function(a,b){o[b.idx]=m(c[b.idx],b)}),this):"object"===j?(c instanceof f?l(g,function(a,b){c[b.cache]&&(i[b.cache]=c[b.cache].slice())}):l(g,function(b,d){var e=d.cache;l(d.props,function(a,b){if(!i[e]&&d.to){if("alpha"===a||null==c[a])return;i[e]=d.to(i._rgba)}i[e][b.idx]=m(c[a],b,!0)}),i[e]&&a.inArray(null,i[e].slice(0,3))<0&&(i[e][3]=1,d.from&&(i._rgba=d.from(i[e])))}),this):void 0},is:function(a){var b=f(a),c=!0,d=this;return l(g,function(a,e){var f,g=b[e.cache];return g&&(f=d[e.cache]||e.to&&e.to(d._rgba)||[],l(e.props,function(a,b){if(null!=g[b.idx])return c=g[b.idx]===f[b.idx]})),c}),c},_space:function(){var a=[],b=this;return l(g,function(c,d){b[d.cache]&&a.push(c)}),a.pop()},transition:function(a,b){var c=f(a),d=c._space(),e=g[d],i=0===this.alpha()?f("transparent"):this,j=i[e.cache]||e.to(i._rgba),k=j.slice();return c=c[e.cache],l(e.props,function(a,d){var e=d.idx,f=j[e],g=c[e],i=h[d.type]||{};null!==g&&(null===f?k[e]=g:(i.mod&&(g-f>i.mod/2?f+=i.mod:f-g>i.mod/2&&(f-=i.mod)),k[e]=m((g-f)*b+f,d)))}),this[d](k)},blend:function(b){if(1===this._rgba[3])return this;var c=this._rgba.slice(),d=c.pop(),e=f(b)._rgba;return f(a.map(c,function(a,b){return(1-d)*e[b]+d*a}))},toRgbaString:function(){var b="rgba(",c=a.map(this._rgba,function(a,b){return null==a?b>2?1:0:a});return 1===c[3]&&(c.pop(),b="rgb("),b+c.join()+")"},toHslaString:function(){var b="hsla(",c=a.map(this.hsla(),function(a,b){return null==a&&(a=b>2?1:0),b&&b<3&&(a=Math.round(100*a)+"%"),a});return 1===c[3]&&(c.pop(),b="hsl("),b+c.join()+")"},toHexString:function(b){var c=this._rgba.slice(),d=c.pop();return b&&c.push(~~(255*d)),"#"+a.map(c,function(a){return a=(a||0).toString(16),1===a.length?"0"+a:a}).join("")},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()}}),f.fn.parse.prototype=f.fn,g.hsla.to=function(a){if(null==a[0]||null==a[1]||null==a[2])return[null,null,null,a[3]];var k,l,b=a[0]/255,c=a[1]/255,d=a[2]/255,e=a[3],f=Math.max(b,c,d),g=Math.min(b,c,d),h=f-g,i=f+g,j=.5*i;return k=g===f?0:b===f?60*(c-d)/h+360:c===f?60*(d-b)/h+120:60*(b-c)/h+240,l=0===h?0:j<=.5?h/i:h/(2-i),[Math.round(k)%360,l,j,null==e?1:e]},g.hsla.from=function(a){if(null==a[0]||null==a[1]||null==a[2])return[null,null,null,a[3]];var b=a[0]/360,c=a[1],d=a[2],e=a[3],f=d<=.5?d*(1+c):d+c-d*c,g=2*d-f;return[Math.round(255*o(g,f,b+1/3)),Math.round(255*o(g,f,b)),Math.round(255*o(g,f,b-1/3)),e]},l(g,function(c,e){var g=e.props,h=e.cache,i=e.to,j=e.from;f.fn[c]=function(c){if(i&&!this[h]&&(this[h]=i(this._rgba)),c===b)return this[h].slice();var d,e=a.type(c),k="array"===e||"object"===e?c:arguments,n=this[h].slice();return l(g,function(a,b){var c=k["object"===e?a:b.idx];null==c&&(c=n[b.idx]),n[b.idx]=m(c,b)}),j?(d=f(j(n)),d[h]=n,d):f(n)},l(g,function(b,e){f.fn[b]||(f.fn[b]=function(f){var k,g=a.type(f),h="alpha"===b?this._hsla?"hsla":"rgba":c,i=this[h](),j=i[e.idx];return"undefined"===g?j:("function"===g&&(f=f.call(this,j),g=a.type(f)),null==f&&e.empty?this:("string"===g&&(k=d.exec(f),k&&(f=j+parseFloat(k[2])*("+"===k[1]?1:-1))),i[e.idx]=f,this[h](i)))})})}),f.hook=function(b){var c=b.split(" ");l(c,function(b,c){a.cssHooks[c]={set:function(b,d){var e,g,h="";if("transparent"!==d&&("string"!==a.type(d)||(e=n(d)))){if(d=f(e||d),!i.rgba&&1!==d._rgba[3]){for(g="backgroundColor"===c?b.parentNode:b;(""===h||"transparent"===h)&&g&&g.style;)try{h=a.css(g,"backgroundColor"),g=g.parentNode}catch(a){}d=d.blend(h&&"transparent"!==h?h:"_default")}d=d.toRgbaString()}try{b.style[c]=d}catch(a){}}},a.fx.step[c]=function(b){b.colorInit||(b.start=f(b.elem,c),b.end=f(b.end),b.colorInit=!0),a.cssHooks[c].set(b.elem,b.start.transition(b.end,b.pos))}})},f.hook(c),a.cssHooks.borderColor={expand:function(a){var b={};return l(["Top","Right","Bottom","Left"],function(c,d){b["border"+d+"Color"]=a}),b}},k=a.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}(jQuery),function(){function e(b){var c,d,e=b.ownerDocument.defaultView?b.ownerDocument.defaultView.getComputedStyle(b,null):b.currentStyle,f={};if(e&&e.length&&e[0]&&e[e[0]])for(d=e.length;d--;)c=e[d],"string"==typeof e[c]&&(f[a.camelCase(c)]=e[c]);else for(c in e)"string"==typeof e[c]&&(f[c]=e[c]);return f}function f(b,c){var f,g,e={};for(f in c)g=c[f],b[f]!==g&&(d[f]||!a.fx.step[f]&&isNaN(parseFloat(g))||(e[f]=g));return e}var c=["add","remove","toggle"],d={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};a.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(b,c){a.fx.step[c]=function(a){("none"!==a.end&&!a.setAttr||1===a.pos&&!a.setAttr)&&(jQuery.style(a.elem,c,a.end),a.setAttr=!0)}}),a.fn.addBack||(a.fn.addBack=function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}),a.effects.animateClass=function(b,d,g,h){var i=a.speed(d,g,h);return this.queue(function(){var h,d=a(this),g=d.attr("class")||"",j=i.children?d.find("*").addBack():d;j=j.map(function(){var b=a(this);return{el:b,start:e(this)}}),h=function(){a.each(c,function(a,c){b[c]&&d[c+"Class"](b[c])})},h(),j=j.map(function(){return this.end=e(this.el[0]),this.diff=f(this.start,this.end),this}),d.attr("class",g),j=j.map(function(){var b=this,c=a.Deferred(),d=a.extend({},i,{queue:!1,complete:function(){c.resolve(b)}});return this.el.animate(this.diff,d),c.promise()}),a.when.apply(a,j.get()).done(function(){h(),a.each(arguments,function(){var b=this.el;a.each(this.diff,function(a){b.css(a,"")})}),i.complete.call(d[0])})})},a.fn.extend({addClass:function(b){return function(c,d,e,f){return d?a.effects.animateClass.call(this,{add:c},d,e,f):b.apply(this,arguments)}}(a.fn.addClass),removeClass:function(b){return function(c,d,e,f){return arguments.length>1?a.effects.animateClass.call(this,{remove:c},d,e,f):b.apply(this,arguments)}}(a.fn.removeClass),toggleClass:function(c){return function(d,e,f,g,h){return"boolean"==typeof e||e===b?f?a.effects.animateClass.call(this,e?{add:d}:{remove:d},f,g,h):c.apply(this,arguments):a.effects.animateClass.call(this,{toggle:d},e,f,g)}}(a.fn.toggleClass),switchClass:function(b,c,d,e,f){return a.effects.animateClass.call(this,{add:c,remove:b},d,e,f)}})}(),function(){function d(b,c,d,e){return a.isPlainObject(b)&&(c=b,b=b.effect),b={effect:b},null==c&&(c={}),a.isFunction(c)&&(e=c,d=null,c={}),("number"==typeof c||a.fx.speeds[c])&&(e=d,d=c,c={}),a.isFunction(d)&&(e=d,d=null),c&&a.extend(b,c),d=d||c.duration,b.duration=a.fx.off?0:"number"==typeof d?d:d in a.fx.speeds?a.fx.speeds[d]:a.fx.speeds._default,b.complete=e||c.complete,b}function e(b){return!(b&&"number"!=typeof b&&!a.fx.speeds[b])||("string"==typeof b&&!a.effects.effect[b]||(!!a.isFunction(b)||"object"==typeof b&&!b.effect))}a.extend(a.effects,{version:"1.10.3",save:function(a,b){for(var d=0;d<b.length;d++)null!==b[d]&&a.data(c+b[d],a[0].style[b[d]])},restore:function(a,d){var e,f;for(f=0;f<d.length;f++)null!==d[f]&&(e=a.data(c+d[f]),e===b&&(e=""),a.css(d[f],e))},setMode:function(a,b){return"toggle"===b&&(b=a.is(":hidden")?"show":"hide"),b},getBaseline:function(a,b){var c,d;switch(a[0]){case"top":c=0;break;case"middle":c=.5;break;case"bottom":c=1;break;default:c=a[0]/b.height}switch(a[1]){case"left":d=0;break;case"center":d=.5;break;case"right":d=1;break;default:d=a[1]/b.width}return{x:d,y:c}},createWrapper:function(b){if(b.parent().is(".ui-effects-wrapper"))return b.parent();var c={width:b.outerWidth(!0),height:b.outerHeight(!0),float:b.css("float")},d=a("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),e={width:b.width(),height:b.height()},f=document.activeElement;try{f.id}catch(a){f=document.body}return b.wrap(d),(b[0]===f||a.contains(b[0],f))&&a(f).focus(),d=b.parent(),"static"===b.css("position")?(d.css({position:"relative"}),b.css({position:"relative"})):(a.extend(c,{position:b.css("position"),zIndex:b.css("z-index")}),a.each(["top","left","bottom","right"],function(a,d){c[d]=b.css(d),isNaN(parseInt(c[d],10))&&(c[d]="auto")}),b.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),b.css(e),d.css(c).show()},removeWrapper:function(b){var c=document.activeElement;return b.parent().is(".ui-effects-wrapper")&&(b.parent().replaceWith(b),(b[0]===c||a.contains(b[0],c))&&a(c).focus()),b},setTransition:function(b,c,d,e){return e=e||{},a.each(c,function(a,c){var f=b.cssUnit(c);f[0]>0&&(e[c]=f[0]*d+f[1])}),e}}),a.fn.extend({effect:function(){function g(c){function h(){a.isFunction(e)&&e.call(d[0]),a.isFunction(c)&&c()}var d=a(this),e=b.complete,g=b.mode;(d.is(":hidden")?"hide"===g:"show"===g)?(d[g](),h()):f.call(d[0],b,h)}var b=d.apply(this,arguments),c=b.mode,e=b.queue,f=a.effects.effect[b.effect];return a.fx.off||!f?c?this[c](b.duration,b.complete):this.each(function(){b.complete&&b.complete.call(this)}):e===!1?this.each(g):this.queue(e||"fx",g)},show:function(a){return function(b){if(e(b))return a.apply(this,arguments);var c=d.apply(this,arguments);return c.mode="show",this.effect.call(this,c)}}(a.fn.show),hide:function(a){return function(b){if(e(b))return a.apply(this,arguments);var c=d.apply(this,arguments);return c.mode="hide",this.effect.call(this,c)}}(a.fn.hide),toggle:function(a){return function(b){if(e(b)||"boolean"==typeof b)return a.apply(this,arguments);var c=d.apply(this,arguments);return c.mode="toggle",this.effect.call(this,c)}}(a.fn.toggle),cssUnit:function(b){var c=this.css(b),d=[];return a.each(["em","px","%","pt"],function(a,b){c.indexOf(b)>0&&(d=[parseFloat(c),b])}),d}})}(),function(){var b={};a.each(["Quad","Cubic","Quart","Quint","Expo"],function(a,c){b[c]=function(b){return Math.pow(b,a+2)}}),a.extend(b,{Sine:function(a){return 1-Math.cos(a*Math.PI/2)},Circ:function(a){return 1-Math.sqrt(1-a*a)},Elastic:function(a){return 0===a||1===a?a:-Math.pow(2,8*(a-1))*Math.sin((80*(a-1)-7.5)*Math.PI/15)},Back:function(a){return a*a*(3*a-2)},Bounce:function(a){for(var b,c=4;a<((b=Math.pow(2,--c))-1)/11;);return 1/Math.pow(4,3-c)-7.5625*Math.pow((3*b-2)/22-a,2)}}),a.each(b,function(b,c){a.easing["easeIn"+b]=c,a.easing["easeOut"+b]=function(a){return 1-c(1-a)},a.easing["easeInOut"+b]=function(a){return a<.5?c(2*a)/2:1-c(a*-2+2)/2}})}()}(jQuery),function(a,b){var c=0,d={},e={};d.height=d.paddingTop=d.paddingBottom=d.borderTopWidth=d.borderBottomWidth="hide",e.height=e.paddingTop=e.paddingBottom=e.borderTopWidth=e.borderBottomWidth="show",a.widget("ui.accordion",{version:"1.10.3",options:{active:0,animate:{},collapsible:!1,event:"click",header:"> li > :first-child,> :not(li):even",heightStyle:"auto",icons:{activeHeader:"ui-icon-triangle-1-s",header:"ui-icon-triangle-1-e"},activate:null,beforeActivate:null},_create:function(){var b=this.options;this.prevShow=this.prevHide=a(),this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role","tablist"),b.collapsible||b.active!==!1&&null!=b.active||(b.active=0),this._processPanels(),b.active<0&&(b.active+=this.headers.length),this._refresh()},_getCreateEventData:function(){return{header:this.active,panel:this.active.length?this.active.next():a(),content:this.active.length?this.active.next():a()}},_createIcons:function(){var b=this.options.icons;b&&(a("<span>").addClass("ui-accordion-header-icon ui-icon "+b.header).prependTo(this.headers),this.active.children(".ui-accordion-header-icon").removeClass(b.header).addClass(b.activeHeader),this.headers.addClass("ui-accordion-icons"))},_destroyIcons:function(){this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()},_destroy:function(){var a;this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"),this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function(){/^ui-accordion/.test(this.id)&&this.removeAttribute("id")}),this._destroyIcons(),a=this.headers.next().css("display","").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function(){/^ui-accordion/.test(this.id)&&this.removeAttribute("id")}),"content"!==this.options.heightStyle&&a.css("height","")},_setOption:function(a,b){return"active"===a?void this._activate(b):("event"===a&&(this.options.event&&this._off(this.headers,this.options.event),this._setupEvents(b)),this._super(a,b),"collapsible"!==a||b||this.options.active!==!1||this._activate(0),"icons"===a&&(this._destroyIcons(),b&&this._createIcons()),void("disabled"===a&&this.headers.add(this.headers.next()).toggleClass("ui-state-disabled",!!b)))},_keydown:function(b){if(!b.altKey&&!b.ctrlKey){var c=a.ui.keyCode,d=this.headers.length,e=this.headers.index(b.target),f=!1;switch(b.keyCode){case c.RIGHT:case c.DOWN:f=this.headers[(e+1)%d];break;case c.LEFT:case c.UP:f=this.headers[(e-1+d)%d];break;case c.SPACE:case c.ENTER:this._eventHandler(b);break;case c.HOME:f=this.headers[0];break;case c.END:f=this.headers[d-1]}f&&(a(b.target).attr("tabIndex",-1),a(f).attr("tabIndex",0),f.focus(),b.preventDefault())}},_panelKeyDown:function(b){b.keyCode===a.ui.keyCode.UP&&b.ctrlKey&&a(b.currentTarget).prev().focus()},refresh:function(){var b=this.options;this._processPanels(),b.active===!1&&b.collapsible===!0||!this.headers.length?(b.active=!1,this.active=a()):b.active===!1?this._activate(0):this.active.length&&!a.contains(this.element[0],this.active[0])?this.headers.length===this.headers.find(".ui-state-disabled").length?(b.active=!1,this.active=a()):this._activate(Math.max(0,b.active-1)):b.active=this.headers.index(this.active),this._destroyIcons(),this._refresh()},_processPanels:function(){this.headers=this.element.find(this.options.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all"),this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide()},_refresh:function(){var b,d=this.options,e=d.heightStyle,f=this.element.parent(),g=this.accordionId="ui-accordion-"+(this.element.attr("id")||++c);this.active=this._findActive(d.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all"),this.active.next().addClass("ui-accordion-content-active").show(),this.headers.attr("role","tab").each(function(b){var c=a(this),d=c.attr("id"),e=c.next(),f=e.attr("id");d||(d=g+"-header-"+b,c.attr("id",d)),f||(f=g+"-panel-"+b,e.attr("id",f)),c.attr("aria-controls",f),e.attr("aria-labelledby",d)}).next().attr("role","tabpanel"),this.headers.not(this.active).attr({"aria-selected":"false",tabIndex:-1}).next().attr({"aria-expanded":"false","aria-hidden":"true"}).hide(),this.active.length?this.active.attr({"aria-selected":"true",tabIndex:0}).next().attr({"aria-expanded":"true","aria-hidden":"false"}):this.headers.eq(0).attr("tabIndex",0),this._createIcons(),this._setupEvents(d.event),"fill"===e?(b=f.height(),this.element.siblings(":visible").each(function(){var c=a(this),d=c.css("position");"absolute"!==d&&"fixed"!==d&&(b-=c.outerHeight(!0))}),this.headers.each(function(){b-=a(this).outerHeight(!0)}),this.headers.next().each(function(){a(this).height(Math.max(0,b-a(this).innerHeight()+a(this).height()))}).css("overflow","auto")):"auto"===e&&(b=0,this.headers.next().each(function(){b=Math.max(b,a(this).css("height","").height())}).height(b))},_activate:function(b){var c=this._findActive(b)[0];c!==this.active[0]&&(c=c||this.active[0],this._eventHandler({target:c,currentTarget:c,preventDefault:a.noop}))},_findActive:function(b){return"number"==typeof b?this.headers.eq(b):a()},_setupEvents:function(b){var c={keydown:"_keydown"};b&&a.each(b.split(" "),function(a,b){c[b]="_eventHandler"}),this._off(this.headers.add(this.headers.next())),this._on(this.headers,c),this._on(this.headers.next(),{keydown:"_panelKeyDown"}),this._hoverable(this.headers),this._focusable(this.headers)},_eventHandler:function(b){var c=this.options,d=this.active,e=a(b.currentTarget),f=e[0]===d[0],g=f&&c.collapsible,h=g?a():e.next(),i=d.next(),j={oldHeader:d,oldPanel:i,newHeader:g?a():e,newPanel:h};b.preventDefault(),f&&!c.collapsible||this._trigger("beforeActivate",b,j)===!1||(c.active=!g&&this.headers.index(e),this.active=f?a():e,this._toggle(j),d.removeClass("ui-accordion-header-active ui-state-active"),c.icons&&d.children(".ui-accordion-header-icon").removeClass(c.icons.activeHeader).addClass(c.icons.header),f||(e.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"),c.icons&&e.children(".ui-accordion-header-icon").removeClass(c.icons.header).addClass(c.icons.activeHeader),e.next().addClass("ui-accordion-content-active")))},_toggle:function(b){var c=b.newPanel,d=this.prevShow.length?this.prevShow:b.oldPanel;this.prevShow.add(this.prevHide).stop(!0,!0),this.prevShow=c,this.prevHide=d,this.options.animate?this._animate(c,d,b):(d.hide(),c.show(),this._toggleComplete(b)),d.attr({"aria-expanded":"false","aria-hidden":"true"}),d.prev().attr("aria-selected","false"),c.length&&d.length?d.prev().attr("tabIndex",-1):c.length&&this.headers.filter(function(){return 0===a(this).attr("tabIndex")}).attr("tabIndex",-1),c.attr({"aria-expanded":"true","aria-hidden":"false"}).prev().attr({"aria-selected":"true",tabIndex:0})},_animate:function(a,b,c){var f,g,h,i=this,j=0,k=a.length&&(!b.length||a.index()<b.index()),l=this.options.animate||{},m=k&&l.down||l,n=function(){i._toggleComplete(c)};return"number"==typeof m&&(h=m),"string"==typeof m&&(g=m),g=g||m.easing||l.easing,h=h||m.duration||l.duration,b.length?a.length?(f=a.show().outerHeight(),b.animate(d,{duration:h,easing:g,step:function(a,b){b.now=Math.round(a)}}),void a.hide().animate(e,{duration:h,easing:g,complete:n,step:function(a,c){c.now=Math.round(a),"height"!==c.prop?j+=c.now:"content"!==i.options.heightStyle&&(c.now=Math.round(f-b.outerHeight()-j),j=0)}})):b.animate(d,h,g,n):a.animate(e,h,g,n)},_toggleComplete:function(a){var b=a.oldPanel;b.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"),b.length&&(b.parent()[0].className=b.parent()[0].className),this._trigger("activate",null,a)}})}(jQuery),function(a,b){var c=0;a.widget("ui.autocomplete",{version:"1.10.3",defaultElement:"<input>",options:{appendTo:null,autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},pending:0,_create:function(){var b,c,d,e=this.element[0].nodeName.toLowerCase(),f="textarea"===e,g="input"===e;this.isMultiLine=!!f||!g&&this.element.prop("isContentEditable"),this.valueMethod=this.element[f||g?"val":"text"],this.isNewMenu=!0,this.element.addClass("ui-autocomplete-input").attr("autocomplete","off"),this._on(this.element,{keydown:function(e){if(this.element.prop("readOnly"))return b=!0,d=!0,void(c=!0);b=!1,d=!1,c=!1;var f=a.ui.keyCode;switch(e.keyCode){case f.PAGE_UP:b=!0,this._move("previousPage",e);break;case f.PAGE_DOWN:b=!0,this._move("nextPage",e);break;case f.UP:b=!0,this._keyEvent("previous",e);break;case f.DOWN:b=!0,this._keyEvent("next",e);break;case f.ENTER:case f.NUMPAD_ENTER:this.menu.active&&(b=!0,e.preventDefault(),this.menu.select(e));break;case f.TAB:this.menu.active&&this.menu.select(e);break;case f.ESCAPE:this.menu.element.is(":visible")&&(this._value(this.term),this.close(e),e.preventDefault());break;default:c=!0,this._searchTimeout(e)}},keypress:function(d){if(b)return b=!1,void(this.isMultiLine&&!this.menu.element.is(":visible")||d.preventDefault());if(!c){var e=a.ui.keyCode;switch(d.keyCode){case e.PAGE_UP:this._move("previousPage",d);break;case e.PAGE_DOWN:this._move("nextPage",d);break;case e.UP:this._keyEvent("previous",d);break;case e.DOWN:this._keyEvent("next",d)}}},input:function(a){return d?(d=!1,void a.preventDefault()):void this._searchTimeout(a)},focus:function(){this.selectedItem=null,this.previous=this._value()},blur:function(a){return this.cancelBlur?void delete this.cancelBlur:(clearTimeout(this.searching),this.close(a),void this._change(a))}}),this._initSource(),this.menu=a("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({role:null}).hide().data("ui-menu"),this._on(this.menu.element,{mousedown:function(b){b.preventDefault(),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur});var c=this.menu.element[0];a(b.target).closest(".ui-menu-item").length||this._delay(function(){var b=this;this.document.one("mousedown",function(d){d.target===b.element[0]||d.target===c||a.contains(c,d.target)||b.close()})})},menufocus:function(b,c){if(this.isNewMenu&&(this.isNewMenu=!1,b.originalEvent&&/^mouse/.test(b.originalEvent.type)))return this.menu.blur(),void this.document.one("mousemove",function(){a(b.target).trigger(b.originalEvent)});var d=c.item.data("ui-autocomplete-item");!1!==this._trigger("focus",b,{item:d})?b.originalEvent&&/^key/.test(b.originalEvent.type)&&this._value(d.value):this.liveRegion.text(d.value)},menuselect:function(a,b){var c=b.item.data("ui-autocomplete-item"),d=this.previous;this.element[0]!==this.document[0].activeElement&&(this.element.focus(),this.previous=d,this._delay(function(){this.previous=d,this.selectedItem=c})),!1!==this._trigger("select",a,{item:c})&&this._value(c.value),this.term=this._value(),this.close(a),this.selectedItem=c}}),this.liveRegion=a("<span>",{role:"status","aria-live":"polite"}).addClass("ui-helper-hidden-accessible").insertBefore(this.element),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_destroy:function(){clearTimeout(this.searching),this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"),this.menu.element.remove(),this.liveRegion.remove()},_setOption:function(a,b){this._super(a,b),"source"===a&&this._initSource(),"appendTo"===a&&this.menu.element.appendTo(this._appendTo()),"disabled"===a&&b&&this.xhr&&this.xhr.abort()},_appendTo:function(){var b=this.options.appendTo;return b&&(b=b.jquery||b.nodeType?a(b):this.document.find(b).eq(0)),b||(b=this.element.closest(".ui-front")),b.length||(b=this.document[0].body),b},_initSource:function(){var b,c,d=this;a.isArray(this.options.source)?(b=this.options.source,this.source=function(c,d){d(a.ui.autocomplete.filter(b,c.term))}):"string"==typeof this.options.source?(c=this.options.source,this.source=function(b,e){d.xhr&&d.xhr.abort(),d.xhr=a.ajax({url:c,data:b,dataType:"json",success:function(a){e(a)},error:function(){e([])}})}):this.source=this.options.source},_searchTimeout:function(a){clearTimeout(this.searching),this.searching=this._delay(function(){this.term!==this._value()&&(this.selectedItem=null,this.search(null,a))},this.options.delay)},search:function(a,b){return a=null!=a?a:this._value(),this.term=this._value(),a.length<this.options.minLength?this.close(b):this._trigger("search",b)!==!1?this._search(a):void 0},_search:function(a){this.pending++,this.element.addClass("ui-autocomplete-loading"),this.cancelSearch=!1,this.source({term:a},this._response())},_response:function(){var a=this,b=++c;return function(d){b===c&&a.__response(d),a.pending--,a.pending||a.element.removeClass("ui-autocomplete-loading")}},__response:function(a){a&&(a=this._normalize(a)),this._trigger("response",null,{content:a}),!this.options.disabled&&a&&a.length&&!this.cancelSearch?(this._suggest(a),this._trigger("open")):this._close()},close:function(a){this.cancelSearch=!0,this._close(a)},_close:function(a){this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.blur(),this.isNewMenu=!0,this._trigger("close",a))},_change:function(a){this.previous!==this._value()&&this._trigger("change",a,{item:this.selectedItem})},_normalize:function(b){return b.length&&b[0].label&&b[0].value?b:a.map(b,function(b){return"string"==typeof b?{label:b,value:b}:a.extend({label:b.label||b.value,value:b.value||b.label},b)})},_suggest:function(b){var c=this.menu.element.empty();this._renderMenu(c,b),this.isNewMenu=!0,this.menu.refresh(),c.show(),this._resizeMenu(),c.position(a.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next()},_resizeMenu:function(){var a=this.menu.element;a.outerWidth(Math.max(a.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(b,c){var d=this;a.each(c,function(a,c){d._renderItemData(b,c)})},_renderItemData:function(a,b){return this._renderItem(a,b).data("ui-autocomplete-item",b)},_renderItem:function(b,c){return a("<li>").append(a("<a>").text(c.label)).appendTo(b)},_move:function(a,b){return this.menu.element.is(":visible")?this.menu.isFirstItem()&&/^previous/.test(a)||this.menu.isLastItem()&&/^next/.test(a)?(this._value(this.term),void this.menu.blur()):void this.menu[a](b):void this.search(null,b)},widget:function(){return this.menu.element},_value:function(){return this.valueMethod.apply(this.element,arguments)},_keyEvent:function(a,b){this.isMultiLine&&!this.menu.element.is(":visible")||(this._move(a,b),b.preventDefault())}}),a.extend(a.ui.autocomplete,{escapeRegex:function(a){return a.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")},filter:function(b,c){var d=new RegExp(a.ui.autocomplete.escapeRegex(c),"i");return a.grep(b,function(a){return d.test(a.label||a.value||a)})}}),a.widget("ui.autocomplete",a.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(a){return a+(a>1?" results are":" result is")+" available, use up and down arrow keys to navigate."}}},__response:function(a){var b;this._superApply(arguments),this.options.disabled||this.cancelSearch||(b=a&&a.length?this.options.messages.results(a.length):this.options.messages.noResults,this.liveRegion.text(b))}})}(jQuery),function(a,b){var c,d,e,f,g="ui-button ui-widget ui-state-default ui-corner-all",h="ui-state-hover ui-state-active ",i="ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",j=function(){var b=a(this);setTimeout(function(){b.find(":ui-button").button("refresh")},1)},k=function(b){var c=b.name,d=b.form,e=a([]);return c&&(c=c.replace(/'/g,"\\'"),e=d?a(d).find("[name='"+c+"']"):a("[name='"+c+"']",b.ownerDocument).filter(function(){return!this.form})),e};a.widget("ui.button",{version:"1.10.3",defaultElement:"<button>",options:{disabled:null,text:!0,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset"+this.eventNamespace).bind("reset"+this.eventNamespace,j),"boolean"!=typeof this.options.disabled?this.options.disabled=!!this.element.prop("disabled"):this.element.prop("disabled",this.options.disabled),this._determineButtonType(),this.hasTitle=!!this.buttonElement.attr("title");var b=this,h=this.options,i="checkbox"===this.type||"radio"===this.type,l=i?"":"ui-state-active",m="ui-state-focus";null===h.label&&(h.label="input"===this.type?this.buttonElement.val():this.buttonElement.html()),this._hoverable(this.buttonElement),this.buttonElement.addClass(g).attr("role","button").bind("mouseenter"+this.eventNamespace,function(){h.disabled||this===c&&a(this).addClass("ui-state-active")}).bind("mouseleave"+this.eventNamespace,function(){h.disabled||a(this).removeClass(l)}).bind("click"+this.eventNamespace,function(a){h.disabled&&(a.preventDefault(),a.stopImmediatePropagation())}),this.element.bind("focus"+this.eventNamespace,function(){b.buttonElement.addClass(m)}).bind("blur"+this.eventNamespace,function(){b.buttonElement.removeClass(m)}),i&&(this.element.bind("change"+this.eventNamespace,function(){f||b.refresh()}),this.buttonElement.bind("mousedown"+this.eventNamespace,function(a){h.disabled||(f=!1,d=a.pageX,e=a.pageY)}).bind("mouseup"+this.eventNamespace,function(a){h.disabled||d===a.pageX&&e===a.pageY||(f=!0)})),"checkbox"===this.type?this.buttonElement.bind("click"+this.eventNamespace,function(){if(h.disabled||f)return!1}):"radio"===this.type?this.buttonElement.bind("click"+this.eventNamespace,function(){if(h.disabled||f)return!1;a(this).addClass("ui-state-active"),b.buttonElement.attr("aria-pressed","true");var c=b.element[0];k(c).not(c).map(function(){return a(this).button("widget")[0]}).removeClass("ui-state-active").attr("aria-pressed","false")}):(this.buttonElement.bind("mousedown"+this.eventNamespace,function(){return!h.disabled&&(a(this).addClass("ui-state-active"),c=this,void b.document.one("mouseup",function(){c=null}))}).bind("mouseup"+this.eventNamespace,function(){return!h.disabled&&void a(this).removeClass("ui-state-active")}).bind("keydown"+this.eventNamespace,function(b){return!h.disabled&&void(b.keyCode!==a.ui.keyCode.SPACE&&b.keyCode!==a.ui.keyCode.ENTER||a(this).addClass("ui-state-active"))}).bind("keyup"+this.eventNamespace+" blur"+this.eventNamespace,function(){a(this).removeClass("ui-state-active")}),this.buttonElement.is("a")&&this.buttonElement.keyup(function(b){b.keyCode===a.ui.keyCode.SPACE&&a(this).click()})),this._setOption("disabled",h.disabled),this._resetButton()},_determineButtonType:function(){var a,b,c;this.element.is("[type=checkbox]")?this.type="checkbox":this.element.is("[type=radio]")?this.type="radio":this.element.is("input")?this.type="input":this.type="button","checkbox"===this.type||"radio"===this.type?(a=this.element.parents().last(),b="label[for='"+this.element.attr("id")+"']",this.buttonElement=a.find(b),this.buttonElement.length||(a=a.length?a.siblings():this.element.siblings(),this.buttonElement=a.filter(b),this.buttonElement.length||(this.buttonElement=a.find(b))),this.element.addClass("ui-helper-hidden-accessible"),c=this.element.is(":checked"),c&&this.buttonElement.addClass("ui-state-active"),this.buttonElement.prop("aria-pressed",c)):this.buttonElement=this.element},widget:function(){return this.buttonElement},_destroy:function(){this.element.removeClass("ui-helper-hidden-accessible"),this.buttonElement.removeClass(g+" "+h+" "+i).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()),this.hasTitle||this.buttonElement.removeAttr("title")},_setOption:function(a,b){return this._super(a,b),"disabled"===a?void(b?this.element.prop("disabled",!0):this.element.prop("disabled",!1)):void this._resetButton()},refresh:function(){var b=this.element.is("input, button")?this.element.is(":disabled"):this.element.hasClass("ui-button-disabled");b!==this.options.disabled&&this._setOption("disabled",b),"radio"===this.type?k(this.element[0]).each(function(){a(this).is(":checked")?a(this).button("widget").addClass("ui-state-active").attr("aria-pressed","true"):a(this).button("widget").removeClass("ui-state-active").attr("aria-pressed","false")}):"checkbox"===this.type&&(this.element.is(":checked")?this.buttonElement.addClass("ui-state-active").attr("aria-pressed","true"):this.buttonElement.removeClass("ui-state-active").attr("aria-pressed","false"))},_resetButton:function(){if("input"===this.type)return void(this.options.label&&this.element.val(this.options.label));var b=this.buttonElement.removeClass(i),c=a("<span></span>",this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(b.empty()).text(),d=this.options.icons,e=d.primary&&d.secondary,f=[];d.primary||d.secondary?(this.options.text&&f.push("ui-button-text-icon"+(e?"s":d.primary?"-primary":"-secondary")),d.primary&&b.prepend("<span class='ui-button-icon-primary ui-icon "+d.primary+"'></span>"),d.secondary&&b.append("<span class='ui-button-icon-secondary ui-icon "+d.secondary+"'></span>"),this.options.text||(f.push(e?"ui-button-icons-only":"ui-button-icon-only"),this.hasTitle||b.attr("title",a.trim(c)))):f.push("ui-button-text-only"),b.addClass(f.join(" "))}}),a.widget("ui.buttonset",{version:"1.10.3",options:{items:"button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"},_create:function(){this.element.addClass("ui-buttonset")},_init:function(){this.refresh()},_setOption:function(a,b){"disabled"===a&&this.buttons.button("option",a,b),this._super(a,b)},refresh:function(){var b="rtl"===this.element.css("direction");this.buttons=this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function(){return a(this).button("widget")[0]}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(b?"ui-corner-right":"ui-corner-left").end().filter(":last").addClass(b?"ui-corner-left":"ui-corner-right").end().end()},_destroy:function(){this.element.removeClass("ui-buttonset"),this.buttons.map(function(){return a(this).button("widget")[0]}).removeClass("ui-corner-left ui-corner-right").end().button("destroy")}})}(jQuery),function(a,b){function e(){this._curInst=null,this._keyEvent=!1,this._disabledInputs=[],this._datepickerShowing=!1,this._inDialog=!1,this._mainDivId="ui-datepicker-div",this._inlineClass="ui-datepicker-inline",this._appendClass="ui-datepicker-append",this._triggerClass="ui-datepicker-trigger",this._dialogClass="ui-datepicker-dialog",this._disableClass="ui-datepicker-disabled",this._unselectableClass="ui-datepicker-unselectable",this._currentClass="ui-datepicker-current-day",this._dayOverClass="ui-datepicker-days-cell-over",this.regional=[],this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1},a.extend(this._defaults,this.regional[""]),this.dpDiv=f(a("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))}function f(b){var c="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return b.delegate(c,"mouseout",function(){a(this).removeClass("ui-state-hover"),this.className.indexOf("ui-datepicker-prev")!==-1&&a(this).removeClass("ui-datepicker-prev-hover"),this.className.indexOf("ui-datepicker-next")!==-1&&a(this).removeClass("ui-datepicker-next-hover")}).delegate(c,"mouseover",function(){a.datepicker._isDisabledDatepicker(d.inline?b.parent()[0]:d.input[0])||(a(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),a(this).addClass("ui-state-hover"),this.className.indexOf("ui-datepicker-prev")!==-1&&a(this).addClass("ui-datepicker-prev-hover"),this.className.indexOf("ui-datepicker-next")!==-1&&a(this).addClass("ui-datepicker-next-hover"))})}function g(b,c){a.extend(b,c);for(var d in c)null==c[d]&&(b[d]=c[d]);return b}a.extend(a.ui,{datepicker:{version:"1.10.3"}});var d,c="datepicker";a.extend(e.prototype,{markerClassName:"hasDatepicker",maxRows:4,_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(a){return g(this._defaults,a||{}),this},_attachDatepicker:function(b,c){var d,e,f;d=b.nodeName.toLowerCase(),e="div"===d||"span"===d,b.id||(this.uuid+=1,b.id="dp"+this.uuid),f=this._newInst(a(b),e),f.settings=a.extend({},c||{}),"input"===d?this._connectDatepicker(b,f):e&&this._inlineDatepicker(b,f)},_newInst:function(b,c){var d=b[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1");return{id:d,input:b,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:c,dpDiv:c?f(a("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")):this.dpDiv}},_connectDatepicker:function(b,d){var e=a(b);d.append=a([]),d.trigger=a([]),e.hasClass(this.markerClassName)||(this._attachments(e,d),e.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp),this._autoSize(d),a.data(b,c,d),d.settings.disabled&&this._disableDatepicker(b))},_attachments:function(b,c){var d,e,f,g=this._get(c,"appendText"),h=this._get(c,"isRTL");c.append&&c.append.remove(),g&&(c.append=a("<span class='"+this._appendClass+"'>"+g+"</span>"),b[h?"before":"after"](c.append)),b.unbind("focus",this._showDatepicker),c.trigger&&c.trigger.remove(),d=this._get(c,"showOn"),"focus"!==d&&"both"!==d||b.focus(this._showDatepicker),"button"!==d&&"both"!==d||(e=this._get(c,"buttonText"),f=this._get(c,"buttonImage"),c.trigger=a(this._get(c,"buttonImageOnly")?a("<img/>").addClass(this._triggerClass).attr({src:f,alt:e,title:e}):a("<button type='button'></button>").addClass(this._triggerClass).html(f?a("<img/>").attr({src:f,alt:e,title:e}):e)),b[h?"before":"after"](c.trigger),c.trigger.click(function(){return a.datepicker._datepickerShowing&&a.datepicker._lastInput===b[0]?a.datepicker._hideDatepicker():a.datepicker._datepickerShowing&&a.datepicker._lastInput!==b[0]?(a.datepicker._hideDatepicker(),a.datepicker._showDatepicker(b[0])):a.datepicker._showDatepicker(b[0]),!1}))},_autoSize:function(a){if(this._get(a,"autoSize")&&!a.inline){var b,c,d,e,f=new Date(2009,11,20),g=this._get(a,"dateFormat");g.match(/[DM]/)&&(b=function(a){for(c=0,d=0,e=0;e<a.length;e++)a[e].length>c&&(c=a[e].length,d=e);return d},f.setMonth(b(this._get(a,g.match(/MM/)?"monthNames":"monthNamesShort"))),f.setDate(b(this._get(a,g.match(/DD/)?"dayNames":"dayNamesShort"))+20-f.getDay())),a.input.attr("size",this._formatDate(a,f).length)}},_inlineDatepicker:function(b,d){var e=a(b);e.hasClass(this.markerClassName)||(e.addClass(this.markerClassName).append(d.dpDiv),a.data(b,c,d),this._setDate(d,this._getDefaultDate(d),!0),this._updateDatepicker(d),this._updateAlternate(d),d.settings.disabled&&this._disableDatepicker(b),d.dpDiv.css("display","block"))},_dialogDatepicker:function(b,d,e,f,h){var i,j,k,l,m,n=this._dialogInst;return n||(this.uuid+=1,i="dp"+this.uuid,this._dialogInput=a("<input type='text' id='"+i+"' style='position: absolute; top: -100px; width: 0px;'/>"),this._dialogInput.keydown(this._doKeyDown),a("body").append(this._dialogInput),n=this._dialogInst=this._newInst(this._dialogInput,!1),n.settings={},a.data(this._dialogInput[0],c,n)),g(n.settings,f||{}),d=d&&d.constructor===Date?this._formatDate(n,d):d,this._dialogInput.val(d),this._pos=h?h.length?h:[h.pageX,h.pageY]:null,this._pos||(j=document.documentElement.clientWidth,k=document.documentElement.clientHeight,l=document.documentElement.scrollLeft||document.body.scrollLeft,m=document.documentElement.scrollTop||document.body.scrollTop,this._pos=[j/2-100+l,k/2-150+m]),this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),n.settings.onSelect=e,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),a.blockUI&&a.blockUI(this.dpDiv),a.data(this._dialogInput[0],c,n),this},_destroyDatepicker:function(b){var d,e=a(b),f=a.data(b,c);e.hasClass(this.markerClassName)&&(d=b.nodeName.toLowerCase(),a.removeData(b,c),"input"===d?(f.append.remove(),f.trigger.remove(),e.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)):"div"!==d&&"span"!==d||e.removeClass(this.markerClassName).empty())},_enableDatepicker:function(b){var d,e,f=a(b),g=a.data(b,c);f.hasClass(this.markerClassName)&&(d=b.nodeName.toLowerCase(),"input"===d?(b.disabled=!1,g.trigger.filter("button").each(function(){this.disabled=!1}).end().filter("img").css({opacity:"1.0",cursor:""})):"div"!==d&&"span"!==d||(e=f.children("."+this._inlineClass),e.children().removeClass("ui-state-disabled"),e.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!1)),this._disabledInputs=a.map(this._disabledInputs,function(a){return a===b?null:a}))},_disableDatepicker:function(b){var d,e,f=a(b),g=a.data(b,c);f.hasClass(this.markerClassName)&&(d=b.nodeName.toLowerCase(),"input"===d?(b.disabled=!0,g.trigger.filter("button").each(function(){this.disabled=!0}).end().filter("img").css({opacity:"0.5",cursor:"default"})):"div"!==d&&"span"!==d||(e=f.children("."+this._inlineClass),e.children().addClass("ui-state-disabled"),e.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!0)),this._disabledInputs=a.map(this._disabledInputs,function(a){return a===b?null:a}),this._disabledInputs[this._disabledInputs.length]=b)},_isDisabledDatepicker:function(a){if(!a)return!1;for(var b=0;b<this._disabledInputs.length;b++)if(this._disabledInputs[b]===a)return!0;return!1},_getInst:function(b){try{return a.data(b,c)}catch(a){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(c,d,e){var f,h,i,j,k=this._getInst(c);return 2===arguments.length&&"string"==typeof d?"defaults"===d?a.extend({},a.datepicker._defaults):k?"all"===d?a.extend({},k.settings):this._get(k,d):null:(f=d||{},"string"==typeof d&&(f={},f[d]=e),void(k&&(this._curInst===k&&this._hideDatepicker(),h=this._getDateDatepicker(c,!0),i=this._getMinMaxDate(k,"min"),j=this._getMinMaxDate(k,"max"),g(k.settings,f),null!==i&&f.dateFormat!==b&&f.minDate===b&&(k.settings.minDate=this._formatDate(k,i)),null!==j&&f.dateFormat!==b&&f.maxDate===b&&(k.settings.maxDate=this._formatDate(k,j)),"disabled"in f&&(f.disabled?this._disableDatepicker(c):this._enableDatepicker(c)),this._attachments(a(c),k),this._autoSize(k),this._setDate(k,h),this._updateAlternate(k),this._updateDatepicker(k))))},_changeDatepicker:function(a,b,c){this._optionDatepicker(a,b,c)},_refreshDatepicker:function(a){var b=this._getInst(a);b&&this._updateDatepicker(b)},_setDateDatepicker:function(a,b){var c=this._getInst(a);c&&(this._setDate(c,b),this._updateDatepicker(c),this._updateAlternate(c))},_getDateDatepicker:function(a,b){var c=this._getInst(a);return c&&!c.inline&&this._setDateFromField(c,b),c?this._getDate(c):null},_doKeyDown:function(b){var c,d,e,f=a.datepicker._getInst(b.target),g=!0,h=f.dpDiv.is(".ui-datepicker-rtl");if(f._keyEvent=!0,a.datepicker._datepickerShowing)switch(b.keyCode){case 9:a.datepicker._hideDatepicker(),g=!1;break;case 13:return e=a("td."+a.datepicker._dayOverClass+":not(."+a.datepicker._currentClass+")",f.dpDiv),e[0]&&a.datepicker._selectDay(b.target,f.selectedMonth,f.selectedYear,e[0]),c=a.datepicker._get(f,"onSelect"),c?(d=a.datepicker._formatDate(f),c.apply(f.input?f.input[0]:null,[d,f])):a.datepicker._hideDatepicker(),!1;case 27:a.datepicker._hideDatepicker();break;case 33:a.datepicker._adjustDate(b.target,b.ctrlKey?-a.datepicker._get(f,"stepBigMonths"):-a.datepicker._get(f,"stepMonths"),"M");break;case 34:a.datepicker._adjustDate(b.target,b.ctrlKey?+a.datepicker._get(f,"stepBigMonths"):+a.datepicker._get(f,"stepMonths"),"M");break;case 35:(b.ctrlKey||b.metaKey)&&a.datepicker._clearDate(b.target),g=b.ctrlKey||b.metaKey;break;case 36:(b.ctrlKey||b.metaKey)&&a.datepicker._gotoToday(b.target),g=b.ctrlKey||b.metaKey;break;case 37:(b.ctrlKey||b.metaKey)&&a.datepicker._adjustDate(b.target,h?1:-1,"D"),g=b.ctrlKey||b.metaKey,b.originalEvent.altKey&&a.datepicker._adjustDate(b.target,b.ctrlKey?-a.datepicker._get(f,"stepBigMonths"):-a.datepicker._get(f,"stepMonths"),"M");break;case 38:(b.ctrlKey||b.metaKey)&&a.datepicker._adjustDate(b.target,-7,"D"),g=b.ctrlKey||b.metaKey;break;case 39:(b.ctrlKey||b.metaKey)&&a.datepicker._adjustDate(b.target,h?-1:1,"D"),g=b.ctrlKey||b.metaKey,b.originalEvent.altKey&&a.datepicker._adjustDate(b.target,b.ctrlKey?+a.datepicker._get(f,"stepBigMonths"):+a.datepicker._get(f,"stepMonths"),"M");break;case 40:(b.ctrlKey||b.metaKey)&&a.datepicker._adjustDate(b.target,7,"D"),g=b.ctrlKey||b.metaKey;break;default:g=!1}else 36===b.keyCode&&b.ctrlKey?a.datepicker._showDatepicker(this):g=!1;g&&(b.preventDefault(),b.stopPropagation())},_doKeyPress:function(b){var c,d,e=a.datepicker._getInst(b.target);if(a.datepicker._get(e,"constrainInput"))return c=a.datepicker._possibleChars(a.datepicker._get(e,"dateFormat")),d=String.fromCharCode(null==b.charCode?b.keyCode:b.charCode),b.ctrlKey||b.metaKey||d<" "||!c||c.indexOf(d)>-1},_doKeyUp:function(b){var c,d=a.datepicker._getInst(b.target);if(d.input.val()!==d.lastVal)try{c=a.datepicker.parseDate(a.datepicker._get(d,"dateFormat"),d.input?d.input.val():null,a.datepicker._getFormatConfig(d)),c&&(a.datepicker._setDateFromField(d),a.datepicker._updateAlternate(d),a.datepicker._updateDatepicker(d))}catch(a){}return!0},_showDatepicker:function(b){if(b=b.target||b,"input"!==b.nodeName.toLowerCase()&&(b=a("input",b.parentNode)[0]),!a.datepicker._isDisabledDatepicker(b)&&a.datepicker._lastInput!==b){var c,d,e,f,h,i,j;c=a.datepicker._getInst(b),a.datepicker._curInst&&a.datepicker._curInst!==c&&(a.datepicker._curInst.dpDiv.stop(!0,!0),c&&a.datepicker._datepickerShowing&&a.datepicker._hideDatepicker(a.datepicker._curInst.input[0])),d=a.datepicker._get(c,"beforeShow"),e=d?d.apply(b,[b,c]):{},e!==!1&&(g(c.settings,e),c.lastVal=null,a.datepicker._lastInput=b,a.datepicker._setDateFromField(c),a.datepicker._inDialog&&(b.value=""),a.datepicker._pos||(a.datepicker._pos=a.datepicker._findPos(b),a.datepicker._pos[1]+=b.offsetHeight),f=!1,a(b).parents().each(function(){return f|="fixed"===a(this).css("position"),!f}),h={left:a.datepicker._pos[0],top:a.datepicker._pos[1]},a.datepicker._pos=null,c.dpDiv.empty(),c.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),a.datepicker._updateDatepicker(c),h=a.datepicker._checkOffset(c,h,f),c.dpDiv.css({position:a.datepicker._inDialog&&a.blockUI?"static":f?"fixed":"absolute",display:"none",left:h.left+"px",top:h.top+"px"}),c.inline||(i=a.datepicker._get(c,"showAnim"),j=a.datepicker._get(c,"duration"),c.dpDiv.zIndex(a(b).zIndex()+1),a.datepicker._datepickerShowing=!0,a.effects&&a.effects.effect[i]?c.dpDiv.show(i,a.datepicker._get(c,"showOptions"),j):c.dpDiv[i||"show"](i?j:null),a.datepicker._shouldFocusInput(c)&&c.input.focus(),a.datepicker._curInst=c))}},_updateDatepicker:function(b){this.maxRows=4,d=b,b.dpDiv.empty().append(this._generateHTML(b)),this._attachHandlers(b),b.dpDiv.find("."+this._dayOverClass+" a").mouseover();var c,e=this._getNumberOfMonths(b),f=e[1],g=17;b.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),f>1&&b.dpDiv.addClass("ui-datepicker-multi-"+f).css("width",g*f+"em"),b.dpDiv[(1!==e[0]||1!==e[1]?"add":"remove")+"Class"]("ui-datepicker-multi"),b.dpDiv[(this._get(b,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),b===a.datepicker._curInst&&a.datepicker._datepickerShowing&&a.datepicker._shouldFocusInput(b)&&b.input.focus(),b.yearshtml&&(c=b.yearshtml,setTimeout(function(){c===b.yearshtml&&b.yearshtml&&b.dpDiv.find("select.ui-datepicker-year:first").replaceWith(b.yearshtml),c=b.yearshtml=null},0))},_shouldFocusInput:function(a){return a.input&&a.input.is(":visible")&&!a.input.is(":disabled")&&!a.input.is(":focus")},_checkOffset:function(b,c,d){var e=b.dpDiv.outerWidth(),f=b.dpDiv.outerHeight(),g=b.input?b.input.outerWidth():0,h=b.input?b.input.outerHeight():0,i=document.documentElement.clientWidth+(d?0:a(document).scrollLeft()),j=document.documentElement.clientHeight+(d?0:a(document).scrollTop());return c.left-=this._get(b,"isRTL")?e-g:0,c.left-=d&&c.left===b.input.offset().left?a(document).scrollLeft():0,c.top-=d&&c.top===b.input.offset().top+h?a(document).scrollTop():0,c.left-=Math.min(c.left,c.left+e>i&&i>e?Math.abs(c.left+e-i):0),c.top-=Math.min(c.top,c.top+f>j&&j>f?Math.abs(f+h):0),c},_findPos:function(b){for(var c,d=this._getInst(b),e=this._get(d,"isRTL");b&&("hidden"===b.type||1!==b.nodeType||a.expr.filters.hidden(b));)b=b[e?"previousSibling":"nextSibling"];return c=a(b).offset(),[c.left,c.top]},_hideDatepicker:function(b){var d,e,f,g,h=this._curInst;!h||b&&h!==a.data(b,c)||this._datepickerShowing&&(d=this._get(h,"showAnim"),e=this._get(h,"duration"),f=function(){a.datepicker._tidyDialog(h)},a.effects&&(a.effects.effect[d]||a.effects[d])?h.dpDiv.hide(d,a.datepicker._get(h,"showOptions"),e,f):h.dpDiv["slideDown"===d?"slideUp":"fadeIn"===d?"fadeOut":"hide"](d?e:null,f),d||f(),this._datepickerShowing=!1,g=this._get(h,"onClose"),g&&g.apply(h.input?h.input[0]:null,[h.input?h.input.val():"",h]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),a.blockUI&&(a.unblockUI(),a("body").append(this.dpDiv))),this._inDialog=!1)},_tidyDialog:function(a){a.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},_checkExternalClick:function(b){if(a.datepicker._curInst){var c=a(b.target),d=a.datepicker._getInst(c[0]);(c[0].id===a.datepicker._mainDivId||0!==c.parents("#"+a.datepicker._mainDivId).length||c.hasClass(a.datepicker.markerClassName)||c.closest("."+a.datepicker._triggerClass).length||!a.datepicker._datepickerShowing||a.datepicker._inDialog&&a.blockUI)&&(!c.hasClass(a.datepicker.markerClassName)||a.datepicker._curInst===d)||a.datepicker._hideDatepicker()}},_adjustDate:function(b,c,d){var e=a(b),f=this._getInst(e[0]);this._isDisabledDatepicker(e[0])||(this._adjustInstDate(f,c+("M"===d?this._get(f,"showCurrentAtPos"):0),d),this._updateDatepicker(f))},_gotoToday:function(b){var c,d=a(b),e=this._getInst(d[0]);this._get(e,"gotoCurrent")&&e.currentDay?(e.selectedDay=e.currentDay,e.drawMonth=e.selectedMonth=e.currentMonth,e.drawYear=e.selectedYear=e.currentYear):(c=new Date,e.selectedDay=c.getDate(),e.drawMonth=e.selectedMonth=c.getMonth(),e.drawYear=e.selectedYear=c.getFullYear()),this._notifyChange(e),this._adjustDate(d)},_selectMonthYear:function(b,c,d){var e=a(b),f=this._getInst(e[0]);f["selected"+("M"===d?"Month":"Year")]=f["draw"+("M"===d?"Month":"Year")]=parseInt(c.options[c.selectedIndex].value,10),this._notifyChange(f),this._adjustDate(e)},_selectDay:function(b,c,d,e){var f,g=a(b);a(e).hasClass(this._unselectableClass)||this._isDisabledDatepicker(g[0])||(f=this._getInst(g[0]),f.selectedDay=f.currentDay=a("a",e).html(),f.selectedMonth=f.currentMonth=c,f.selectedYear=f.currentYear=d,this._selectDate(b,this._formatDate(f,f.currentDay,f.currentMonth,f.currentYear)))},_clearDate:function(b){var c=a(b);this._selectDate(c,"")},_selectDate:function(b,c){var d,e=a(b),f=this._getInst(e[0]);c=null!=c?c:this._formatDate(f),f.input&&f.input.val(c),this._updateAlternate(f),d=this._get(f,"onSelect"),d?d.apply(f.input?f.input[0]:null,[c,f]):f.input&&f.input.trigger("change"),f.inline?this._updateDatepicker(f):(this._hideDatepicker(),this._lastInput=f.input[0],"object"!=typeof f.input[0]&&f.input.focus(),this._lastInput=null)},_updateAlternate:function(b){var c,d,e,f=this._get(b,"altField");f&&(c=this._get(b,"altFormat")||this._get(b,"dateFormat"),d=this._getDate(b),e=this.formatDate(c,d,this._getFormatConfig(b)),a(f).each(function(){a(this).val(e)}))},noWeekends:function(a){var b=a.getDay();return[b>0&&b<6,""]},iso8601Week:function(a){var b,c=new Date(a.getTime());return c.setDate(c.getDate()+4-(c.getDay()||7)),b=c.getTime(),c.setMonth(0),c.setDate(1),Math.floor(Math.round((b-c)/864e5)/7)+1},parseDate:function(b,c,d){if(null==b||null==c)throw"Invalid arguments";if(c="object"==typeof c?c.toString():c+"",""===c)return null;var e,f,g,t,h=0,i=(d?d.shortYearCutoff:null)||this._defaults.shortYearCutoff,j="string"!=typeof i?i:(new Date).getFullYear()%100+parseInt(i,10),k=(d?d.dayNamesShort:null)||this._defaults.dayNamesShort,l=(d?d.dayNames:null)||this._defaults.dayNames,m=(d?d.monthNamesShort:null)||this._defaults.monthNamesShort,n=(d?d.monthNames:null)||this._defaults.monthNames,o=-1,p=-1,q=-1,r=-1,s=!1,u=function(a){var c=e+1<b.length&&b.charAt(e+1)===a;return c&&e++,c},v=function(a){var b=u(a),d="@"===a?14:"!"===a?20:"y"===a&&b?4:"o"===a?3:2,e=new RegExp("^\\d{1,"+d+"}"),f=c.substring(h).match(e);if(!f)throw"Missing number at position "+h;return h+=f[0].length,parseInt(f[0],10)},w=function(b,d,e){var f=-1,g=a.map(u(b)?e:d,function(a,b){return[[b,a]]}).sort(function(a,b){return-(a[1].length-b[1].length)});if(a.each(g,function(a,b){var d=b[1];if(c.substr(h,d.length).toLowerCase()===d.toLowerCase())return f=b[0],h+=d.length,!1}),f!==-1)return f+1;throw"Unknown name at position "+h},x=function(){if(c.charAt(h)!==b.charAt(e))throw"Unexpected literal at position "+h;h++};for(e=0;e<b.length;e++)if(s)"'"!==b.charAt(e)||u("'")?x():s=!1;else switch(b.charAt(e)){case"d":q=v("d");break;case"D":w("D",k,l);break;case"o":r=v("o");break;case"m":p=v("m");break;case"M":p=w("M",m,n);break;case"y":o=v("y");break;case"@":t=new Date(v("@")),o=t.getFullYear(),p=t.getMonth()+1,q=t.getDate();break;case"!":t=new Date((v("!")-this._ticksTo1970)/1e4),o=t.getFullYear(),p=t.getMonth()+1,q=t.getDate();break;case"'":u("'")?x():s=!0;break;default:x()}if(h<c.length&&(g=c.substr(h),!/^\s+/.test(g)))throw"Extra/unparsed characters found in date: "+g;if(o===-1?o=(new Date).getFullYear():o<100&&(o+=(new Date).getFullYear()-(new Date).getFullYear()%100+(o<=j?0:-100)),r>-1)for(p=1,q=r;;){if(f=this._getDaysInMonth(o,p-1),q<=f)break;p++,q-=f}if(t=this._daylightSavingAdjust(new Date(o,p-1,q)),t.getFullYear()!==o||t.getMonth()+1!==p||t.getDate()!==q)throw"Invalid date";return t},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:24*(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925))*60*60*1e7,formatDate:function(a,b,c){if(!b)return"";var d,e=(c?c.dayNamesShort:null)||this._defaults.dayNamesShort,f=(c?c.dayNames:null)||this._defaults.dayNames,g=(c?c.monthNamesShort:null)||this._defaults.monthNamesShort,h=(c?c.monthNames:null)||this._defaults.monthNames,i=function(b){var c=d+1<a.length&&a.charAt(d+1)===b;return c&&d++,c},j=function(a,b,c){var d=""+b;if(i(a))for(;d.length<c;)d="0"+d;return d},k=function(a,b,c,d){return i(a)?d[b]:c[b]},l="",m=!1;if(b)for(d=0;d<a.length;d++)if(m)"'"!==a.charAt(d)||i("'")?l+=a.charAt(d):m=!1;else switch(a.charAt(d)){case"d":l+=j("d",b.getDate(),2);break;case"D":l+=k("D",b.getDay(),e,f);break;case"o":l+=j("o",Math.round((new Date(b.getFullYear(),b.getMonth(),b.getDate()).getTime()-new Date(b.getFullYear(),0,0).getTime())/864e5),3);break;case"m":l+=j("m",b.getMonth()+1,2);break;case"M":l+=k("M",b.getMonth(),g,h);break;case"y":l+=i("y")?b.getFullYear():(b.getYear()%100<10?"0":"")+b.getYear()%100;break;case"@":l+=b.getTime();break;case"!":l+=1e4*b.getTime()+this._ticksTo1970;break;case"'":i("'")?l+="'":m=!0;break;default:l+=a.charAt(d)}return l},_possibleChars:function(a){var b,c="",d=!1,e=function(c){var d=b+1<a.length&&a.charAt(b+1)===c;return d&&b++,d};for(b=0;b<a.length;b++)if(d)"'"!==a.charAt(b)||e("'")?c+=a.charAt(b):d=!1;else switch(a.charAt(b)){case"d":case"m":case"y":case"@":c+="0123456789";break;case"D":case"M":return null;case"'":e("'")?c+="'":d=!0;break;default:c+=a.charAt(b)}return c},_get:function(a,c){return a.settings[c]!==b?a.settings[c]:this._defaults[c]},_setDateFromField:function(a,b){if(a.input.val()!==a.lastVal){var c=this._get(a,"dateFormat"),d=a.lastVal=a.input?a.input.val():null,e=this._getDefaultDate(a),f=e,g=this._getFormatConfig(a);try{f=this.parseDate(c,d,g)||e}catch(a){d=b?"":d}a.selectedDay=f.getDate(),a.drawMonth=a.selectedMonth=f.getMonth(),a.drawYear=a.selectedYear=f.getFullYear(),a.currentDay=d?f.getDate():0,a.currentMonth=d?f.getMonth():0,a.currentYear=d?f.getFullYear():0,this._adjustInstDate(a)}},_getDefaultDate:function(a){return this._restrictMinMax(a,this._determineDate(a,this._get(a,"defaultDate"),new Date))},_determineDate:function(b,c,d){var e=function(a){var b=new Date;return b.setDate(b.getDate()+a),b},f=function(c){try{return a.datepicker.parseDate(a.datepicker._get(b,"dateFormat"),c,a.datepicker._getFormatConfig(b))}catch(a){}for(var d=(c.toLowerCase().match(/^c/)?a.datepicker._getDate(b):null)||new Date,e=d.getFullYear(),f=d.getMonth(),g=d.getDate(),h=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,i=h.exec(c);i;){switch(i[2]||"d"){case"d":case"D":g+=parseInt(i[1],10);break;case"w":case"W":g+=7*parseInt(i[1],10);break;case"m":case"M":f+=parseInt(i[1],10),g=Math.min(g,a.datepicker._getDaysInMonth(e,f));break;case"y":case"Y":e+=parseInt(i[1],10),g=Math.min(g,a.datepicker._getDaysInMonth(e,f))}i=h.exec(c)}return new Date(e,f,g)},g=null==c||""===c?d:"string"==typeof c?f(c):"number"==typeof c?isNaN(c)?d:e(c):new Date(c.getTime());return g=g&&"Invalid Date"===g.toString()?d:g,g&&(g.setHours(0),g.setMinutes(0),g.setSeconds(0),g.setMilliseconds(0)),this._daylightSavingAdjust(g)},_daylightSavingAdjust:function(a){return a?(a.setHours(a.getHours()>12?a.getHours()+2:0),a):null},_setDate:function(a,b,c){var d=!b,e=a.selectedMonth,f=a.selectedYear,g=this._restrictMinMax(a,this._determineDate(a,b,new Date));a.selectedDay=a.currentDay=g.getDate(),a.drawMonth=a.selectedMonth=a.currentMonth=g.getMonth(),a.drawYear=a.selectedYear=a.currentYear=g.getFullYear(),e===a.selectedMonth&&f===a.selectedYear||c||this._notifyChange(a),this._adjustInstDate(a),a.input&&a.input.val(d?"":this._formatDate(a))},_getDate:function(a){var b=!a.currentYear||a.input&&""===a.input.val()?null:this._daylightSavingAdjust(new Date(a.currentYear,a.currentMonth,a.currentDay));return b},_attachHandlers:function(b){var c=this._get(b,"stepMonths"),d="#"+b.id.replace(/\\\\/g,"\\");b.dpDiv.find("[data-handler]").map(function(){var b={prev:function(){a.datepicker._adjustDate(d,-c,"M")},next:function(){a.datepicker._adjustDate(d,+c,"M")},hide:function(){a.datepicker._hideDatepicker()},today:function(){a.datepicker._gotoToday(d)},selectDay:function(){return a.datepicker._selectDay(d,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this),!1},selectMonth:function(){return a.datepicker._selectMonthYear(d,this,"M"),!1},selectYear:function(){return a.datepicker._selectMonthYear(d,this,"Y"),!1}};a(this).bind(this.getAttribute("data-event"),b[this.getAttribute("data-handler")])})},_generateHTML:function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O=new Date,P=this._daylightSavingAdjust(new Date(O.getFullYear(),O.getMonth(),O.getDate())),Q=this._get(a,"isRTL"),R=this._get(a,"showButtonPanel"),S=this._get(a,"hideIfNoPrevNext"),T=this._get(a,"navigationAsDateFormat"),U=this._getNumberOfMonths(a),V=this._get(a,"showCurrentAtPos"),W=this._get(a,"stepMonths"),X=1!==U[0]||1!==U[1],Y=this._daylightSavingAdjust(a.currentDay?new Date(a.currentYear,a.currentMonth,a.currentDay):new Date(9999,9,9)),Z=this._getMinMaxDate(a,"min"),$=this._getMinMaxDate(a,"max"),_=a.drawMonth-V,aa=a.drawYear;if(_<0&&(_+=12,aa--),$)for(b=this._daylightSavingAdjust(new Date($.getFullYear(),$.getMonth()-U[0]*U[1]+1,$.getDate())),b=Z&&b<Z?Z:b;this._daylightSavingAdjust(new Date(aa,_,1))>b;)_--,_<0&&(_=11,aa--);for(a.drawMonth=_,a.drawYear=aa,c=this._get(a,"prevText"),c=T?this.formatDate(c,this._daylightSavingAdjust(new Date(aa,_-W,1)),this._getFormatConfig(a)):c,d=this._canAdjustMonth(a,-1,aa,_)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='"+c+"'><span class='ui-icon ui-icon-circle-triangle-"+(Q?"e":"w")+"'>"+c+"</span></a>":S?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+c+"'><span class='ui-icon ui-icon-circle-triangle-"+(Q?"e":"w")+"'>"+c+"</span></a>",e=this._get(a,"nextText"),e=T?this.formatDate(e,this._daylightSavingAdjust(new Date(aa,_+W,1)),this._getFormatConfig(a)):e,f=this._canAdjustMonth(a,1,aa,_)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='"+e+"'><span class='ui-icon ui-icon-circle-triangle-"+(Q?"w":"e")+"'>"+e+"</span></a>":S?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+e+"'><span class='ui-icon ui-icon-circle-triangle-"+(Q?"w":"e")+"'>"+e+"</span></a>",g=this._get(a,"currentText"),h=this._get(a,"gotoCurrent")&&a.currentDay?Y:P,g=T?this.formatDate(g,h,this._getFormatConfig(a)):g,i=a.inline?"":"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+this._get(a,"closeText")+"</button>",j=R?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+(Q?i:"")+(this._isInRange(a,h)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>"+g+"</button>":"")+(Q?"":i)+"</div>":"",k=parseInt(this._get(a,"firstDay"),10),k=isNaN(k)?0:k,l=this._get(a,"showWeek"),m=this._get(a,"dayNames"),n=this._get(a,"dayNamesMin"),o=this._get(a,"monthNames"),p=this._get(a,"monthNamesShort"),q=this._get(a,"beforeShowDay"),r=this._get(a,"showOtherMonths"),s=this._get(a,"selectOtherMonths"),t=this._getDefaultDate(a),u="",w=0;w<U[0];w++){for(x="",this.maxRows=4,y=0;y<U[1];y++){if(z=this._daylightSavingAdjust(new Date(aa,_,a.selectedDay)),A=" ui-corner-all",B="",X){if(B+="<div class='ui-datepicker-group",U[1]>1)switch(y){case 0:B+=" ui-datepicker-group-first",A=" ui-corner-"+(Q?"right":"left");break;case U[1]-1:B+=" ui-datepicker-group-last",A=" ui-corner-"+(Q?"left":"right");break;default:B+=" ui-datepicker-group-middle",A=""}B+="'>"}for(B+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+A+"'>"+(/all|left/.test(A)&&0===w?Q?f:d:"")+(/all|right/.test(A)&&0===w?Q?d:f:"")+this._generateMonthYearHeader(a,_,aa,Z,$,w>0||y>0,o,p)+"</div><table class='ui-datepicker-calendar'><thead><tr>",C=l?"<th class='ui-datepicker-week-col'>"+this._get(a,"weekHeader")+"</th>":"",v=0;v<7;v++)D=(v+k)%7,C+="<th"+((v+k+6)%7>=5?" class='ui-datepicker-week-end'":"")+"><span title='"+m[D]+"'>"+n[D]+"</span></th>";for(B+=C+"</tr></thead><tbody>",E=this._getDaysInMonth(aa,_),aa===a.selectedYear&&_===a.selectedMonth&&(a.selectedDay=Math.min(a.selectedDay,E)),F=(this._getFirstDayOfMonth(aa,_)-k+7)%7,G=Math.ceil((F+E)/7),H=X&&this.maxRows>G?this.maxRows:G,this.maxRows=H,I=this._daylightSavingAdjust(new Date(aa,_,1-F)),J=0;J<H;J++){for(B+="<tr>",K=l?"<td class='ui-datepicker-week-col'>"+this._get(a,"calculateWeek")(I)+"</td>":"",v=0;v<7;v++)L=q?q.apply(a.input?a.input[0]:null,[I]):[!0,""],M=I.getMonth()!==_,N=M&&!s||!L[0]||Z&&I<Z||$&&I>$,K+="<td class='"+((v+k+6)%7>=5?" ui-datepicker-week-end":"")+(M?" ui-datepicker-other-month":"")+(I.getTime()===z.getTime()&&_===a.selectedMonth&&a._keyEvent||t.getTime()===I.getTime()&&t.getTime()===z.getTime()?" "+this._dayOverClass:"")+(N?" "+this._unselectableClass+" ui-state-disabled":"")+(M&&!r?"":" "+L[1]+(I.getTime()===Y.getTime()?" "+this._currentClass:"")+(I.getTime()===P.getTime()?" ui-datepicker-today":""))+"'"+(M&&!r||!L[2]?"":" title='"+L[2].replace(/'/g,"&#39;")+"'")+(N?"":" data-handler='selectDay' data-event='click' data-month='"+I.getMonth()+"' data-year='"+I.getFullYear()+"'")+">"+(M&&!r?"&#xa0;":N?"<span class='ui-state-default'>"+I.getDate()+"</span>":"<a class='ui-state-default"+(I.getTime()===P.getTime()?" ui-state-highlight":"")+(I.getTime()===Y.getTime()?" ui-state-active":"")+(M?" ui-priority-secondary":"")+"' href='#'>"+I.getDate()+"</a>")+"</td>",I.setDate(I.getDate()+1),I=this._daylightSavingAdjust(I);B+=K+"</tr>"}_++,_>11&&(_=0,aa++),B+="</tbody></table>"+(X?"</div>"+(U[0]>0&&y===U[1]-1?"<div class='ui-datepicker-row-break'></div>":""):""),x+=B}u+=x}return u+=j,a._keyEvent=!1,u},_generateMonthYearHeader:function(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q=this._get(a,"changeMonth"),r=this._get(a,"changeYear"),s=this._get(a,"showMonthAfterYear"),t="<div class='ui-datepicker-title'>",u="";if(f||!q)u+="<span class='ui-datepicker-month'>"+g[b]+"</span>";else{for(i=d&&d.getFullYear()===c,j=e&&e.getFullYear()===c,u+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",k=0;k<12;k++)(!i||k>=d.getMonth())&&(!j||k<=e.getMonth())&&(u+="<option value='"+k+"'"+(k===b?" selected='selected'":"")+">"+h[k]+"</option>");u+="</select>"}if(s||(t+=u+(!f&&q&&r?"":"&#xa0;")),!a.yearshtml)if(a.yearshtml="",f||!r)t+="<span class='ui-datepicker-year'>"+c+"</span>";else{for(l=this._get(a,"yearRange").split(":"),m=(new Date).getFullYear(),n=function(a){var b=a.match(/c[+\-].*/)?c+parseInt(a.substring(1),10):a.match(/[+\-].*/)?m+parseInt(a,10):parseInt(a,10);return isNaN(b)?m:b},o=n(l[0]),p=Math.max(o,n(l[1]||"")),o=d?Math.max(o,d.getFullYear()):o,p=e?Math.min(p,e.getFullYear()):p,a.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";o<=p;o++)a.yearshtml+="<option value='"+o+"'"+(o===c?" selected='selected'":"")+">"+o+"</option>";a.yearshtml+="</select>",t+=a.yearshtml,a.yearshtml=null}return t+=this._get(a,"yearSuffix"),s&&(t+=(!f&&q&&r?"":"&#xa0;")+u),t+="</div>"},_adjustInstDate:function(a,b,c){var d=a.drawYear+("Y"===c?b:0),e=a.drawMonth+("M"===c?b:0),f=Math.min(a.selectedDay,this._getDaysInMonth(d,e))+("D"===c?b:0),g=this._restrictMinMax(a,this._daylightSavingAdjust(new Date(d,e,f)));a.selectedDay=g.getDate(),a.drawMonth=a.selectedMonth=g.getMonth(),a.drawYear=a.selectedYear=g.getFullYear(),"M"!==c&&"Y"!==c||this._notifyChange(a)},_restrictMinMax:function(a,b){var c=this._getMinMaxDate(a,"min"),d=this._getMinMaxDate(a,"max"),e=c&&b<c?c:b;return d&&e>d?d:e},_notifyChange:function(a){var b=this._get(a,"onChangeMonthYear");b&&b.apply(a.input?a.input[0]:null,[a.selectedYear,a.selectedMonth+1,a])},_getNumberOfMonths:function(a){var b=this._get(a,"numberOfMonths");return null==b?[1,1]:"number"==typeof b?[1,b]:b},_getMinMaxDate:function(a,b){return this._determineDate(a,this._get(a,b+"Date"),null)},_getDaysInMonth:function(a,b){return 32-this._daylightSavingAdjust(new Date(a,b,32)).getDate()},_getFirstDayOfMonth:function(a,b){return new Date(a,b,1).getDay()},_canAdjustMonth:function(a,b,c,d){var e=this._getNumberOfMonths(a),f=this._daylightSavingAdjust(new Date(c,d+(b<0?b:e[0]*e[1]),1));return b<0&&f.setDate(this._getDaysInMonth(f.getFullYear(),f.getMonth())),this._isInRange(a,f)},_isInRange:function(a,b){var c,d,e=this._getMinMaxDate(a,"min"),f=this._getMinMaxDate(a,"max"),g=null,h=null,i=this._get(a,"yearRange");return i&&(c=i.split(":"),d=(new Date).getFullYear(),g=parseInt(c[0],10),h=parseInt(c[1],10),c[0].match(/[+\-].*/)&&(g+=d),c[1].match(/[+\-].*/)&&(h+=d)),(!e||b.getTime()>=e.getTime())&&(!f||b.getTime()<=f.getTime())&&(!g||b.getFullYear()>=g)&&(!h||b.getFullYear()<=h)},_getFormatConfig:function(a){var b=this._get(a,"shortYearCutoff");return b="string"!=typeof b?b:(new Date).getFullYear()%100+parseInt(b,10),{shortYearCutoff:b,dayNamesShort:this._get(a,"dayNamesShort"),dayNames:this._get(a,"dayNames"),monthNamesShort:this._get(a,"monthNamesShort"),monthNames:this._get(a,"monthNames")}},_formatDate:function(a,b,c,d){b||(a.currentDay=a.selectedDay,a.currentMonth=a.selectedMonth,a.currentYear=a.selectedYear);var e=b?"object"==typeof b?b:this._daylightSavingAdjust(new Date(d,c,b)):this._daylightSavingAdjust(new Date(a.currentYear,a.currentMonth,a.currentDay));return this.formatDate(this._get(a,"dateFormat"),e,this._getFormatConfig(a))}}),a.fn.datepicker=function(b){if(!this.length)return this;a.datepicker.initialized||(a(document).mousedown(a.datepicker._checkExternalClick),a.datepicker.initialized=!0),0===a("#"+a.datepicker._mainDivId).length&&a("body").append(a.datepicker.dpDiv);var c=Array.prototype.slice.call(arguments,1);return"string"!=typeof b||"isDisabled"!==b&&"getDate"!==b&&"widget"!==b?"option"===b&&2===arguments.length&&"string"==typeof arguments[1]?a.datepicker["_"+b+"Datepicker"].apply(a.datepicker,[this[0]].concat(c)):this.each(function(){"string"==typeof b?a.datepicker["_"+b+"Datepicker"].apply(a.datepicker,[this].concat(c)):a.datepicker._attachDatepicker(this,b)}):a.datepicker["_"+b+"Datepicker"].apply(a.datepicker,[this[0]].concat(c))},a.datepicker=new e,a.datepicker.initialized=!1,a.datepicker.uuid=(new Date).getTime(),a.datepicker.version="1.10.3"}(jQuery),function(a,b){var c={buttons:!0,height:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,width:!0},d={maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0};a.widget("ui.dialog",{version:"1.10.3",options:{appendTo:"body",autoOpen:!0,buttons:[],closeOnEscape:!0,closeText:"close",dialogClass:"",draggable:!0,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:!1,position:{my:"center",at:"center",of:window,collision:"fit",using:function(b){var c=a(this).css(b).offset().top;c<0&&a(this).css("top",b.top-c)}},resizable:!0,show:null,title:null,width:300,beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},_create:function(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height},this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)},this.originalTitle=this.element.attr("title"),this.options.title=this.options.title||this.originalTitle,this._createWrapper(),this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog),this._createTitlebar(),this._createButtonPane(),this.options.draggable&&a.fn.draggable&&this._makeDraggable(),this.options.resizable&&a.fn.resizable&&this._makeResizable(),this._isOpen=!1},_init:function(){this.options.autoOpen&&this.open()},_appendTo:function(){var b=this.options.appendTo;return b&&(b.jquery||b.nodeType)?a(b):this.document.find(b||"body").eq(0)},_destroy:function(){var a,b=this.originalPosition;this._destroyOverlay(),this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(),this.uiDialog.stop(!0,!0).remove(),this.originalTitle&&this.element.attr("title",this.originalTitle),a=b.parent.children().eq(b.index),a.length&&a[0]!==this.element[0]?a.before(this.element):b.parent.append(this.element)},widget:function(){return this.uiDialog},disable:a.noop,enable:a.noop,close:function(b){var c=this;this._isOpen&&this._trigger("beforeClose",b)!==!1&&(this._isOpen=!1,this._destroyOverlay(),this.opener.filter(":focusable").focus().length||a(this.document[0].activeElement).blur(),this._hide(this.uiDialog,this.options.hide,function(){c._trigger("close",b)}))},isOpen:function(){return this._isOpen},moveToTop:function(){this._moveToTop()},_moveToTop:function(a,b){var c=!!this.uiDialog.nextAll(":visible").insertBefore(this.uiDialog).length;return c&&!b&&this._trigger("focus",a),c},open:function(){var b=this;return this._isOpen?void(this._moveToTop()&&this._focusTabbable()):(this._isOpen=!0,this.opener=a(this.document[0].activeElement),this._size(),this._position(),this._createOverlay(),this._moveToTop(null,!0),this._show(this.uiDialog,this.options.show,function(){b._focusTabbable(),b._trigger("focus")}),void this._trigger("open"))},_focusTabbable:function(){var a=this.element.find("[autofocus]");a.length||(a=this.element.find(":tabbable")),a.length||(a=this.uiDialogButtonPane.find(":tabbable")),a.length||(a=this.uiDialogTitlebarClose.filter(":tabbable")),a.length||(a=this.uiDialog),a.eq(0).focus()},_keepFocus:function(b){function c(){var b=this.document[0].activeElement,c=this.uiDialog[0]===b||a.contains(this.uiDialog[0],b);c||this._focusTabbable()}b.preventDefault(),c.call(this),this._delay(c)},_createWrapper:function(){this.uiDialog=a("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front "+this.options.dialogClass).hide().attr({tabIndex:-1,role:"dialog"}).appendTo(this._appendTo()),this._on(this.uiDialog,{keydown:function(b){if(this.options.closeOnEscape&&!b.isDefaultPrevented()&&b.keyCode&&b.keyCode===a.ui.keyCode.ESCAPE)return b.preventDefault(),void this.close(b);if(b.keyCode===a.ui.keyCode.TAB){var c=this.uiDialog.find(":tabbable"),d=c.filter(":first"),e=c.filter(":last");b.target!==e[0]&&b.target!==this.uiDialog[0]||b.shiftKey?b.target!==d[0]&&b.target!==this.uiDialog[0]||!b.shiftKey||(e.focus(1),b.preventDefault()):(d.focus(1),b.preventDefault())}},mousedown:function(a){this._moveToTop(a)&&this._focusTabbable()}}),this.element.find("[aria-describedby]").length||this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")})},_createTitlebar:function(){var b;this.uiDialogTitlebar=a("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog),this._on(this.uiDialogTitlebar,{mousedown:function(b){a(b.target).closest(".ui-dialog-titlebar-close")||this.uiDialog.focus()}}),this.uiDialogTitlebarClose=a("<button></button>").button({label:this.options.closeText,icons:{primary:"ui-icon-closethick"},text:!1}).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar),this._on(this.uiDialogTitlebarClose,{click:function(a){a.preventDefault(),this.close(a)}}),b=a("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar),this._title(b),this.uiDialog.attr({"aria-labelledby":b.attr("id")})},_title:function(a){this.options.title||a.html("&#160;"),a.text(this.options.title)},_createButtonPane:function(){this.uiDialogButtonPane=a("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),this.uiButtonSet=a("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane),this._createButtons()},_createButtons:function(){var b=this,c=this.options.buttons;return this.uiDialogButtonPane.remove(),this.uiButtonSet.empty(),a.isEmptyObject(c)||a.isArray(c)&&!c.length?void this.uiDialog.removeClass("ui-dialog-buttons"):(a.each(c,function(c,d){var e,f;d=a.isFunction(d)?{click:d,text:c}:d,d=a.extend({type:"button"},d),e=d.click,d.click=function(){e.apply(b.element[0],arguments)},f={icons:d.icons,text:d.showText},delete d.icons,delete d.showText,a("<button></button>",d).button(f).appendTo(b.uiButtonSet)}),this.uiDialog.addClass("ui-dialog-buttons"),void this.uiDialogButtonPane.appendTo(this.uiDialog))},_makeDraggable:function(){function d(a){return{position:a.position,offset:a.offset}}var b=this,c=this.options;this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(c,e){a(this).addClass("ui-dialog-dragging"),b._blockFrames(),b._trigger("dragStart",c,d(e))},drag:function(a,c){b._trigger("drag",a,d(c))},stop:function(e,f){c.position=[f.position.left-b.document.scrollLeft(),f.position.top-b.document.scrollTop()],a(this).removeClass("ui-dialog-dragging"),b._unblockFrames(),b._trigger("dragStop",e,d(f))}})},_makeResizable:function(){function g(a){return{originalPosition:a.originalPosition,originalSize:a.originalSize,position:a.position,size:a.size}}var b=this,c=this.options,d=c.resizable,e=this.uiDialog.css("position"),f="string"==typeof d?d:"n,e,s,w,se,sw,ne,nw";this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:c.maxWidth,maxHeight:c.maxHeight,minWidth:c.minWidth,minHeight:this._minHeight(),handles:f,start:function(c,d){a(this).addClass("ui-dialog-resizing"),b._blockFrames(),b._trigger("resizeStart",c,g(d))},resize:function(a,c){b._trigger("resize",a,g(c))},stop:function(d,e){c.height=a(this).height(),c.width=a(this).width(),a(this).removeClass("ui-dialog-resizing"),b._unblockFrames(),b._trigger("resizeStop",d,g(e))}}).css("position",e)},_minHeight:function(){var a=this.options;return"auto"===a.height?a.minHeight:Math.min(a.minHeight,a.height)},_position:function(){var a=this.uiDialog.is(":visible");a||this.uiDialog.show(),this.uiDialog.position(this.options.position),a||this.uiDialog.hide()},_setOptions:function(b){var e=this,f=!1,g={};a.each(b,function(a,b){e._setOption(a,b),a in c&&(f=!0),a in d&&(g[a]=b)}),f&&(this._size(),this._position()),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option",g)},_setOption:function(a,b){var c,d,e=this.uiDialog;"dialogClass"===a&&e.removeClass(this.options.dialogClass).addClass(b),"disabled"!==a&&(this._super(a,b),"appendTo"===a&&this.uiDialog.appendTo(this._appendTo()),"buttons"===a&&this._createButtons(),"closeText"===a&&this.uiDialogTitlebarClose.button({label:""+b}),"draggable"===a&&(c=e.is(":data(ui-draggable)"),c&&!b&&e.draggable("destroy"),!c&&b&&this._makeDraggable()),"position"===a&&this._position(),"resizable"===a&&(d=e.is(":data(ui-resizable)"),d&&!b&&e.resizable("destroy"),d&&"string"==typeof b&&e.resizable("option","handles",b),d||b===!1||this._makeResizable()),"title"===a&&this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))},_size:function(){var a,b,c,d=this.options;this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0}),d.minWidth>d.width&&(d.width=d.minWidth),a=this.uiDialog.css({height:"auto",width:d.width}).outerHeight(),b=Math.max(0,d.minHeight-a),c="number"==typeof d.maxHeight?Math.max(0,d.maxHeight-a):"none","auto"===d.height?this.element.css({minHeight:b,maxHeight:c,height:"auto"}):this.element.height(Math.max(0,d.height-a)),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())},_blockFrames:function(){this.iframeBlocks=this.document.find("iframe").map(function(){var b=a(this);return a("<div>").css({position:"absolute",width:b.outerWidth(),height:b.outerHeight()}).appendTo(b.parent()).offset(b.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_allowInteraction:function(b){return!!a(b.target).closest(".ui-dialog").length||!!a(b.target).closest(".ui-datepicker").length},_createOverlay:function(){if(this.options.modal){var b=this,c=this.widgetFullName;a.ui.dialog.overlayInstances||this._delay(function(){a.ui.dialog.overlayInstances&&this.document.bind("focusin.dialog",function(d){b._allowInteraction(d)||(d.preventDefault(),a(".ui-dialog:visible:last .ui-dialog-content").data(c)._focusTabbable())})}),this.overlay=a("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()),this._on(this.overlay,{mousedown:"_keepFocus"}),a.ui.dialog.overlayInstances++}},_destroyOverlay:function(){this.options.modal&&this.overlay&&(a.ui.dialog.overlayInstances--,a.ui.dialog.overlayInstances||this.document.unbind("focusin.dialog"),this.overlay.remove(),this.overlay=null)}}),a.ui.dialog.overlayInstances=0,a.uiBackCompat!==!1&&a.widget("ui.dialog",a.ui.dialog,{_position:function(){var e,b=this.options.position,c=[],d=[0,0];b?(("string"==typeof b||"object"==typeof b&&"0"in b)&&(c=b.split?b.split(" "):[b[0],b[1]],1===c.length&&(c[1]=c[0]),a.each(["left","top"],function(a,b){+c[a]===c[a]&&(d[a]=c[a],c[a]=b)}),b={my:c[0]+(d[0]<0?d[0]:"+"+d[0])+" "+c[1]+(d[1]<0?d[1]:"+"+d[1]),at:c.join(" ")}),b=a.extend({},a.ui.dialog.prototype.options.position,b)):b=a.ui.dialog.prototype.options.position,e=this.uiDialog.is(":visible"),e||this.uiDialog.show(),this.uiDialog.position(b),e||this.uiDialog.hide()}})}(jQuery),function(a,b){var c=/up|down|vertical/,d=/up|left|vertical|horizontal/;a.effects.effect.blind=function(b,e){var p,q,r,f=a(this),g=["position","top","bottom","left","right","height","width"],h=a.effects.setMode(f,b.mode||"hide"),i=b.direction||"up",j=c.test(i),k=j?"height":"width",l=j?"top":"left",m=d.test(i),n={},o="show"===h;f.parent().is(".ui-effects-wrapper")?a.effects.save(f.parent(),g):a.effects.save(f,g),f.show(),p=a.effects.createWrapper(f).css({overflow:"hidden"}),q=p[k](),r=parseFloat(p.css(l))||0,n[k]=o?q:0,m||(f.css(j?"bottom":"right",0).css(j?"top":"left","auto").css({position:"absolute"}),n[l]=o?r:q+r),o&&(p.css(k,0),m||p.css(l,r+q)),p.animate(n,{duration:b.duration,easing:b.easing,queue:!1,complete:function(){"hide"===h&&f.hide(),a.effects.restore(f,g),a.effects.removeWrapper(f),e()}})}}(jQuery),function(a,b){a.effects.effect.bounce=function(b,c){var q,r,s,d=a(this),e=["position","top","bottom","left","right","height","width"],f=a.effects.setMode(d,b.mode||"effect"),g="hide"===f,h="show"===f,i=b.direction||"up",j=b.distance,k=b.times||5,l=2*k+(h||g?1:0),m=b.duration/l,n=b.easing,o="up"===i||"down"===i?"top":"left",p="up"===i||"left"===i,t=d.queue(),u=t.length;for((h||g)&&e.push("opacity"),a.effects.save(d,e),d.show(),a.effects.createWrapper(d),j||(j=d["top"===o?"outerHeight":"outerWidth"]()/3),h&&(s={opacity:1},s[o]=0,d.css("opacity",0).css(o,p?2*-j:2*j).animate(s,m,n)),g&&(j/=Math.pow(2,k-1)),s={},s[o]=0,q=0;q<k;q++)r={},r[o]=(p?"-=":"+=")+j,d.animate(r,m,n).animate(s,m,n),j=g?2*j:j/2;g&&(r={opacity:0},r[o]=(p?"-=":"+=")+j,d.animate(r,m,n)),d.queue(function(){g&&d.hide(),a.effects.restore(d,e),a.effects.removeWrapper(d),c()}),u>1&&t.splice.apply(t,[1,0].concat(t.splice(u,l+1))),d.dequeue()}}(jQuery),function(a,b){a.effects.effect.clip=function(b,c){var m,n,o,d=a(this),e=["position","top","bottom","left","right","height","width"],f=a.effects.setMode(d,b.mode||"hide"),g="show"===f,h=b.direction||"vertical",i="vertical"===h,j=i?"height":"width",k=i?"top":"left",l={};a.effects.save(d,e),d.show(),m=a.effects.createWrapper(d).css({overflow:"hidden"}),n="IMG"===d[0].tagName?m:d,o=n[j](),g&&(n.css(j,0),n.css(k,o/2)),l[j]=g?o:0,l[k]=g?0:o/2,n.animate(l,{queue:!1,duration:b.duration,easing:b.easing,complete:function(){g||d.hide(),a.effects.restore(d,e),a.effects.removeWrapper(d),c()}})}}(jQuery),function(a,b){a.effects.effect.drop=function(b,c){var l,d=a(this),e=["position","top","bottom","left","right","opacity","height","width"],f=a.effects.setMode(d,b.mode||"hide"),g="show"===f,h=b.direction||"left",i="up"===h||"down"===h?"top":"left",j="up"===h||"left"===h?"pos":"neg",k={opacity:g?1:0};a.effects.save(d,e),d.show(),a.effects.createWrapper(d),l=b.distance||d["top"===i?"outerHeight":"outerWidth"](!0)/2,g&&d.css("opacity",0).css(i,"pos"===j?-l:l),k[i]=(g?"pos"===j?"+=":"-=":"pos"===j?"-=":"+=")+l,d.animate(k,{queue:!1,duration:b.duration,easing:b.easing,complete:function(){"hide"===f&&d.hide(),a.effects.restore(d,e),a.effects.removeWrapper(d),c()}})}}(jQuery),function(a,b){a.effects.effect.explode=function(b,c){function s(){l.push(this),l.length===d*e&&t()}function t(){f.css({visibility:"visible"}),a(l).remove(),h||f.hide(),c()}var m,n,o,p,q,r,d=b.pieces?Math.round(Math.sqrt(b.pieces)):3,e=d,f=a(this),g=a.effects.setMode(f,b.mode||"hide"),h="show"===g,i=f.show().css("visibility","hidden").offset(),j=Math.ceil(f.outerWidth()/e),k=Math.ceil(f.outerHeight()/d),l=[];for(m=0;m<d;m++)for(p=i.top+m*k,r=m-(d-1)/2,n=0;n<e;n++)o=i.left+n*j,q=n-(e-1)/2,f.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-n*j,top:-m*k}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:j,height:k,left:o+(h?q*j:0),top:p+(h?r*k:0),opacity:h?0:1}).animate({left:o+(h?0:q*j),top:p+(h?0:r*k),opacity:h?1:0},b.duration||500,b.easing,s)}}(jQuery),function(a,b){a.effects.effect.fade=function(b,c){var d=a(this),e=a.effects.setMode(d,b.mode||"toggle");d.animate({opacity:e},{queue:!1,duration:b.duration,easing:b.easing,complete:c})}}(jQuery),function(a,b){a.effects.effect.fold=function(b,c){var o,p,d=a(this),e=["position","top","bottom","left","right","height","width"],f=a.effects.setMode(d,b.mode||"hide"),g="show"===f,h="hide"===f,i=b.size||15,j=/([0-9]+)%/.exec(i),k=!!b.horizFirst,l=g!==k,m=l?["width","height"]:["height","width"],n=b.duration/2,q={},r={};a.effects.save(d,e),d.show(),o=a.effects.createWrapper(d).css({overflow:"hidden"}),p=l?[o.width(),o.height()]:[o.height(),o.width()],j&&(i=parseInt(j[1],10)/100*p[h?0:1]),g&&o.css(k?{height:0,width:i}:{height:i,width:0}),q[m[0]]=g?p[0]:i,r[m[1]]=g?p[1]:0,o.animate(q,n,b.easing).animate(r,n,b.easing,function(){h&&d.hide(),a.effects.restore(d,e),a.effects.removeWrapper(d),c()})}}(jQuery),function(a,b){a.effects.effect.highlight=function(b,c){var d=a(this),e=["backgroundImage","backgroundColor","opacity"],f=a.effects.setMode(d,b.mode||"show"),g={backgroundColor:d.css("backgroundColor")};"hide"===f&&(g.opacity=0),a.effects.save(d,e),d.show().css({backgroundImage:"none",backgroundColor:b.color||"#ffff99"}).animate(g,{queue:!1,duration:b.duration,easing:b.easing,complete:function(){"hide"===f&&d.hide(),a.effects.restore(d,e),c()}})}}(jQuery),function(a,b){a.effects.effect.pulsate=function(b,c){var n,d=a(this),e=a.effects.setMode(d,b.mode||"show"),f="show"===e,g="hide"===e,h=f||"hide"===e,i=2*(b.times||5)+(h?1:0),j=b.duration/i,k=0,l=d.queue(),m=l.length;for(!f&&d.is(":visible")||(d.css("opacity",0).show(),k=1),n=1;n<i;n++)d.animate({opacity:k},j,b.easing),k=1-k;d.animate({opacity:k},j,b.easing),d.queue(function(){g&&d.hide(),c()}),m>1&&l.splice.apply(l,[1,0].concat(l.splice(m,i+1))),d.dequeue()}}(jQuery),function(a,b){a.effects.effect.puff=function(b,c){var d=a(this),e=a.effects.setMode(d,b.mode||"hide"),f="hide"===e,g=parseInt(b.percent,10)||150,h=g/100,i={height:d.height(),width:d.width(),outerHeight:d.outerHeight(),outerWidth:d.outerWidth()};a.extend(b,{effect:"scale",queue:!1,fade:!0,mode:e,complete:c,percent:f?g:100,from:f?i:{height:i.height*h,width:i.width*h,outerHeight:i.outerHeight*h,outerWidth:i.outerWidth*h}}),d.effect(b)},a.effects.effect.scale=function(b,c){var d=a(this),e=a.extend(!0,{},b),f=a.effects.setMode(d,b.mode||"effect"),g=parseInt(b.percent,10)||(0===parseInt(b.percent,10)?0:"hide"===f?0:100),h=b.direction||"both",i=b.origin,j={height:d.height(),width:d.width(),outerHeight:d.outerHeight(),outerWidth:d.outerWidth()},k={y:"horizontal"!==h?g/100:1,x:"vertical"!==h?g/100:1};e.effect="size",e.queue=!1,e.complete=c,"effect"!==f&&(e.origin=i||["middle","center"],e.restore=!0),e.from=b.from||("show"===f?{height:0,width:0,outerHeight:0,outerWidth:0}:j),e.to={height:j.height*k.y,width:j.width*k.x,outerHeight:j.outerHeight*k.y,outerWidth:j.outerWidth*k.x},e.fade&&("show"===f&&(e.from.opacity=0,e.to.opacity=1),"hide"===f&&(e.from.opacity=1,e.to.opacity=0)),d.effect(e)},a.effects.effect.size=function(b,c){var d,e,f,g=a(this),h=["position","top","bottom","left","right","width","height","overflow","opacity"],i=["position","top","bottom","left","right","overflow","opacity"],j=["width","height","overflow"],k=["fontSize"],l=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],m=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],n=a.effects.setMode(g,b.mode||"effect"),o=b.restore||"effect"!==n,p=b.scale||"both",q=b.origin||["middle","center"],r=g.css("position"),s=o?h:i,t={height:0,width:0,outerHeight:0,outerWidth:0};"show"===n&&g.show(),d={height:g.height(),width:g.width(),outerHeight:g.outerHeight(),outerWidth:g.outerWidth()},"toggle"===b.mode&&"show"===n?(g.from=b.to||t,g.to=b.from||d):(g.from=b.from||("show"===n?t:d),g.to=b.to||("hide"===n?t:d)),f={from:{y:g.from.height/d.height,x:g.from.width/d.width},to:{y:g.to.height/d.height,x:g.to.width/d.width}},"box"!==p&&"both"!==p||(f.from.y!==f.to.y&&(s=s.concat(l),g.from=a.effects.setTransition(g,l,f.from.y,g.from),g.to=a.effects.setTransition(g,l,f.to.y,g.to)),f.from.x!==f.to.x&&(s=s.concat(m),g.from=a.effects.setTransition(g,m,f.from.x,g.from),g.to=a.effects.setTransition(g,m,f.to.x,g.to))),"content"!==p&&"both"!==p||f.from.y!==f.to.y&&(s=s.concat(k).concat(j),g.from=a.effects.setTransition(g,k,f.from.y,g.from),g.to=a.effects.setTransition(g,k,f.to.y,g.to)),a.effects.save(g,s),g.show(),a.effects.createWrapper(g),g.css("overflow","hidden").css(g.from),q&&(e=a.effects.getBaseline(q,d),g.from.top=(d.outerHeight-g.outerHeight())*e.y,g.from.left=(d.outerWidth-g.outerWidth())*e.x,g.to.top=(d.outerHeight-g.to.outerHeight)*e.y,g.to.left=(d.outerWidth-g.to.outerWidth)*e.x),g.css(g.from),"content"!==p&&"both"!==p||(l=l.concat(["marginTop","marginBottom"]).concat(k),m=m.concat(["marginLeft","marginRight"]),j=h.concat(l).concat(m),g.find("*[width]").each(function(){var c=a(this),d={height:c.height(),width:c.width(),outerHeight:c.outerHeight(),outerWidth:c.outerWidth()};o&&a.effects.save(c,j),c.from={height:d.height*f.from.y,width:d.width*f.from.x,outerHeight:d.outerHeight*f.from.y,outerWidth:d.outerWidth*f.from.x},c.to={height:d.height*f.to.y,width:d.width*f.to.x,outerHeight:d.height*f.to.y,outerWidth:d.width*f.to.x},f.from.y!==f.to.y&&(c.from=a.effects.setTransition(c,l,f.from.y,c.from),c.to=a.effects.setTransition(c,l,f.to.y,c.to)),f.from.x!==f.to.x&&(c.from=a.effects.setTransition(c,m,f.from.x,c.from),c.to=a.effects.setTransition(c,m,f.to.x,c.to)),c.css(c.from),c.animate(c.to,b.duration,b.easing,function(){o&&a.effects.restore(c,j)})})),g.animate(g.to,{queue:!1,duration:b.duration,easing:b.easing,complete:function(){0===g.to.opacity&&g.css("opacity",g.from.opacity),"hide"===n&&g.hide(),a.effects.restore(g,s),o||("static"===r?g.css({position:"relative",top:g.to.top,left:g.to.left}):a.each(["top","left"],function(a,b){g.css(b,function(b,c){var d=parseInt(c,10),e=a?g.to.left:g.to.top;return"auto"===c?e+"px":d+e+"px"})})),a.effects.removeWrapper(g),c()}})}}(jQuery),function(a,b){a.effects.effect.shake=function(b,c){var q,d=a(this),e=["position","top","bottom","left","right","height","width"],f=a.effects.setMode(d,b.mode||"effect"),g=b.direction||"left",h=b.distance||20,i=b.times||3,j=2*i+1,k=Math.round(b.duration/j),l="up"===g||"down"===g?"top":"left",m="up"===g||"left"===g,n={},o={},p={},r=d.queue(),s=r.length;for(a.effects.save(d,e),d.show(),a.effects.createWrapper(d),n[l]=(m?"-=":"+=")+h,o[l]=(m?"+=":"-=")+2*h,p[l]=(m?"-=":"+=")+2*h,d.animate(n,k,b.easing),q=1;q<i;q++)d.animate(o,k,b.easing).animate(p,k,b.easing);d.animate(o,k,b.easing).animate(n,k/2,b.easing).queue(function(){"hide"===f&&d.hide(),a.effects.restore(d,e),a.effects.removeWrapper(d),c()}),s>1&&r.splice.apply(r,[1,0].concat(r.splice(s,j+1))),d.dequeue()}}(jQuery),function(a,b){a.effects.effect.slide=function(b,c){var k,d=a(this),e=["position","top","bottom","left","right","width","height"],f=a.effects.setMode(d,b.mode||"show"),g="show"===f,h=b.direction||"left",i="up"===h||"down"===h?"top":"left",j="up"===h||"left"===h,l={};a.effects.save(d,e),d.show(),k=b.distance||d["top"===i?"outerHeight":"outerWidth"](!0),a.effects.createWrapper(d).css({overflow:"hidden"}),g&&d.css(i,j?isNaN(k)?"-"+k:-k:k),l[i]=(g?j?"+=":"-=":j?"-=":"+=")+k,d.animate(l,{queue:!1,duration:b.duration,easing:b.easing,complete:function(){"hide"===f&&d.hide(),a.effects.restore(d,e),a.effects.removeWrapper(d),c()}})}}(jQuery),function(a,b){a.effects.effect.transfer=function(b,c){var d=a(this),e=a(b.to),f="fixed"===e.css("position"),g=a("body"),h=f?g.scrollTop():0,i=f?g.scrollLeft():0,j=e.offset(),k={top:j.top-h,left:j.left-i,height:e.innerHeight(),width:e.innerWidth()},l=d.offset(),m=a("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(b.className).css({top:l.top-h,left:l.left-i,height:d.innerHeight(),width:d.innerWidth(),position:f?"fixed":"absolute"}).animate(k,b.duration,b.easing,function(){m.remove(),c()})}}(jQuery),function(a,b){a.widget("ui.menu",{version:"1.10.3",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-carat-1-e"},menus:"ul",position:{my:"left top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element,this.mouseHandled=!1,this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length).attr({role:this.options.role,tabIndex:0}).bind("click"+this.eventNamespace,a.proxy(function(a){this.options.disabled&&a.preventDefault()},this)),this.options.disabled&&this.element.addClass("ui-state-disabled").attr("aria-disabled","true"),this._on({"mousedown .ui-menu-item > a":function(a){a.preventDefault()},"click .ui-state-disabled > a":function(a){a.preventDefault()},"click .ui-menu-item:has(a)":function(b){var c=a(b.target).closest(".ui-menu-item");!this.mouseHandled&&c.not(".ui-state-disabled").length&&(this.mouseHandled=!0,this.select(b),c.has(".ui-menu").length?this.expand(b):this.element.is(":focus")||(this.element.trigger("focus",[!0]),this.active&&1===this.active.parents(".ui-menu").length&&clearTimeout(this.timer)))},"mouseenter .ui-menu-item":function(b){var c=a(b.currentTarget);c.siblings().children(".ui-state-active").removeClass("ui-state-active"),this.focus(b,c)},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(a,b){var c=this.active||this.element.children(".ui-menu-item").eq(0);b||this.focus(a,c)},blur:function(b){this._delay(function(){a.contains(this.element[0],this.document[0].activeElement)||this.collapseAll(b)})},keydown:"_keydown"}),this.refresh(),this._on(this.document,{click:function(b){a(b.target).closest(".ui-menu").length||this.collapseAll(b),this.mouseHandled=!1}})},_destroy:function(){this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(),this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function(){var b=a(this);b.data("ui-menu-submenu-carat")&&b.remove()}),this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")},_keydown:function(b){function i(a){return a.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}var c,d,e,f,g,h=!0;switch(b.keyCode){case a.ui.keyCode.PAGE_UP:this.previousPage(b);break;case a.ui.keyCode.PAGE_DOWN:this.nextPage(b);break;case a.ui.keyCode.HOME:this._move("first","first",b);break;case a.ui.keyCode.END:this._move("last","last",b);break;case a.ui.keyCode.UP:this.previous(b);break;case a.ui.keyCode.DOWN:this.next(b);break;case a.ui.keyCode.LEFT:this.collapse(b);break;case a.ui.keyCode.RIGHT:this.active&&!this.active.is(".ui-state-disabled")&&this.expand(b);break;case a.ui.keyCode.ENTER:case a.ui.keyCode.SPACE:this._activate(b);break;case a.ui.keyCode.ESCAPE:this.collapse(b);break;default:h=!1,d=this.previousFilter||"",e=String.fromCharCode(b.keyCode),f=!1,clearTimeout(this.filterTimer),e===d?f=!0:e=d+e,g=new RegExp("^"+i(e),"i"),c=this.activeMenu.children(".ui-menu-item").filter(function(){return g.test(a(this).children("a").text())}),c=f&&c.index(this.active.next())!==-1?this.active.nextAll(".ui-menu-item"):c,c.length||(e=String.fromCharCode(b.keyCode),g=new RegExp("^"+i(e),"i"),c=this.activeMenu.children(".ui-menu-item").filter(function(){return g.test(a(this).children("a").text())})),c.length?(this.focus(b,c),c.length>1?(this.previousFilter=e,this.filterTimer=this._delay(function(){delete this.previousFilter},1e3)):delete this.previousFilter):delete this.previousFilter}h&&b.preventDefault()},_activate:function(a){this.active.is(".ui-state-disabled")||(this.active.children("a[aria-haspopup='true']").length?this.expand(a):this.select(a))},refresh:function(){var b,c=this.options.icons.submenu,d=this.element.find(this.options.menus);d.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var b=a(this),d=b.prev("a"),e=a("<span>").addClass("ui-menu-icon ui-icon "+c).data("ui-menu-submenu-carat",!0);d.attr("aria-haspopup","true").prepend(e),b.attr("aria-labelledby",d.attr("id"))}),b=d.add(this.element),b.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role","presentation").children("a").uniqueId().addClass("ui-corner-all").attr({tabIndex:-1,role:this._itemRole()}),b.children(":not(.ui-menu-item)").each(function(){var b=a(this);/[^\-\u2014\u2013\s]/.test(b.text())||b.addClass("ui-widget-content ui-menu-divider")}),b.children(".ui-state-disabled").attr("aria-disabled","true"),this.active&&!a.contains(this.element[0],this.active[0])&&this.blur()},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]},_setOption:function(a,b){"icons"===a&&this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(b.submenu),this._super(a,b)},focus:function(a,b){var c,d;this.blur(a,a&&"focus"===a.type),this._scrollIntoView(b),this.active=b.first(),d=this.active.children("a").addClass("ui-state-focus"),this.options.role&&this.element.attr("aria-activedescendant",d.attr("id")),this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active"),a&&"keydown"===a.type?this._close():this.timer=this._delay(function(){this._close()},this.delay),c=b.children(".ui-menu"),c.length&&/^mouse/.test(a.type)&&this._startOpening(c),this.activeMenu=b.parent(),this._trigger("focus",a,{item:b})},_scrollIntoView:function(b){var c,d,e,f,g,h;this._hasScroll()&&(c=parseFloat(a.css(this.activeMenu[0],"borderTopWidth"))||0,d=parseFloat(a.css(this.activeMenu[0],"paddingTop"))||0,e=b.offset().top-this.activeMenu.offset().top-c-d,f=this.activeMenu.scrollTop(),g=this.activeMenu.height(),h=b.height(),e<0?this.activeMenu.scrollTop(f+e):e+h>g&&this.activeMenu.scrollTop(f+e-g+h))},blur:function(a,b){b||clearTimeout(this.timer),this.active&&(this.active.children("a").removeClass("ui-state-focus"),this.active=null,this._trigger("blur",a,{item:this.active}))},_startOpening:function(a){clearTimeout(this.timer),"true"===a.attr("aria-hidden")&&(this.timer=this._delay(function(){this._close(),this._open(a)},this.delay))},_open:function(b){var c=a.extend({of:this.active},this.options.position);clearTimeout(this.timer),this.element.find(".ui-menu").not(b.parents(".ui-menu")).hide().attr("aria-hidden","true"),b.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(c)},collapseAll:function(b,c){clearTimeout(this.timer),this.timer=this._delay(function(){var d=c?this.element:a(b&&b.target).closest(this.element.find(".ui-menu"));d.length||(d=this.element),this._close(d),this.blur(b),this.activeMenu=d},this.delay)},_close:function(a){a||(a=this.active?this.active.parent():this.element),a.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false").end().find("a.ui-state-active").removeClass("ui-state-active")},collapse:function(a){var b=this.active&&this.active.parent().closest(".ui-menu-item",this.element);b&&b.length&&(this._close(),this.focus(a,b))},expand:function(a){var b=this.active&&this.active.children(".ui-menu ").children(".ui-menu-item").first();b&&b.length&&(this._open(b.parent()),this._delay(function(){this.focus(a,b)}))},next:function(a){this._move("next","first",a)},previous:function(a){this._move("prev","last",a)},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},_move:function(a,b,c){var d;this.active&&(d="first"===a||"last"===a?this.active["first"===a?"prevAll":"nextAll"](".ui-menu-item").eq(-1):this.active[a+"All"](".ui-menu-item").eq(0)),d&&d.length&&this.active||(d=this.activeMenu.children(".ui-menu-item")[b]()),this.focus(c,d)},nextPage:function(b){var c,d,e;return this.active?void(this.isLastItem()||(this._hasScroll()?(d=this.active.offset().top,e=this.element.height(),this.active.nextAll(".ui-menu-item").each(function(){return c=a(this),c.offset().top-d-e<0}),this.focus(b,c)):this.focus(b,this.activeMenu.children(".ui-menu-item")[this.active?"last":"first"]()))):void this.next(b)},previousPage:function(b){var c,d,e;return this.active?void(this.isFirstItem()||(this._hasScroll()?(d=this.active.offset().top,e=this.element.height(),this.active.prevAll(".ui-menu-item").each(function(){return c=a(this),c.offset().top-d+e>0}),this.focus(b,c)):this.focus(b,this.activeMenu.children(".ui-menu-item").first()))):void this.next(b)},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")},select:function(b){this.active=this.active||a(b.target).closest(".ui-menu-item");var c={item:this.active};this.active.has(".ui-menu").length||this.collapseAll(b,!0),this._trigger("select",b,c)}})}(jQuery),function(a,b){function m(a,b,c){return[parseFloat(a[0])*(k.test(a[0])?b/100:1),parseFloat(a[1])*(k.test(a[1])?c/100:1)]}function n(b,c){return parseInt(a.css(b,c),10)||0}function o(b){var c=b[0];return 9===c.nodeType?{width:b.width(),height:b.height(),offset:{top:0,left:0}}:a.isWindow(c)?{width:b.width(),height:b.height(),offset:{top:b.scrollTop(),left:b.scrollLeft()}}:c.preventDefault?{width:0,height:0,offset:{top:c.pageY,left:c.pageX}}:{width:b.outerWidth(),height:b.outerHeight(),offset:b.offset()}}a.ui=a.ui||{};var c,d=Math.max,e=Math.abs,f=Math.round,g=/left|center|right/,h=/top|center|bottom/,i=/[\+\-]\d+(\.[\d]+)?%?/,j=/^\w+/,k=/%$/,l=a.fn.position;a.position={scrollbarWidth:function(){if(c!==b)return c;var d,e,f=a("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),g=f.children()[0];return a("body").append(f),d=g.offsetWidth,f.css("overflow","scroll"),e=g.offsetWidth,d===e&&(e=f[0].clientWidth),f.remove(),c=d-e},getScrollInfo:function(b){var c=b.isWindow?"":b.element.css("overflow-x"),d=b.isWindow?"":b.element.css("overflow-y"),e="scroll"===c||"auto"===c&&b.width<b.element[0].scrollWidth,f="scroll"===d||"auto"===d&&b.height<b.element[0].scrollHeight;return{width:f?a.position.scrollbarWidth():0,height:e?a.position.scrollbarWidth():0}},getWithinInfo:function(b){var c=a(b||window),d=a.isWindow(c[0]);return{element:c,isWindow:d,offset:c.offset()||{left:0,top:0},scrollLeft:c.scrollLeft(),scrollTop:c.scrollTop(),width:d?c.width():c.outerWidth(),height:d?c.height():c.outerHeight()}}},a.fn.position=function(b){if(!b||!b.of)return l.apply(this,arguments);b=a.extend({},b);var c,k,p,q,r,s,t=a(b.of),u=a.position.getWithinInfo(b.within),v=a.position.getScrollInfo(u),w=(b.collision||"flip").split(" "),x={};return s=o(t),t[0].preventDefault&&(b.at="left top"),k=s.width,p=s.height,q=s.offset,r=a.extend({},q),a.each(["my","at"],function(){var c,d,a=(b[this]||"").split(" ");1===a.length&&(a=g.test(a[0])?a.concat(["center"]):h.test(a[0])?["center"].concat(a):["center","center"]),a[0]=g.test(a[0])?a[0]:"center",a[1]=h.test(a[1])?a[1]:"center",c=i.exec(a[0]),d=i.exec(a[1]),x[this]=[c?c[0]:0,d?d[0]:0],b[this]=[j.exec(a[0])[0],j.exec(a[1])[0]]}),1===w.length&&(w[1]=w[0]),"right"===b.at[0]?r.left+=k:"center"===b.at[0]&&(r.left+=k/2),"bottom"===b.at[1]?r.top+=p:"center"===b.at[1]&&(r.top+=p/2),c=m(x.at,k,p),r.left+=c[0],r.top+=c[1],this.each(function(){var g,h,i=a(this),j=i.outerWidth(),l=i.outerHeight(),o=n(this,"marginLeft"),s=n(this,"marginTop"),y=j+o+n(this,"marginRight")+v.width,z=l+s+n(this,"marginBottom")+v.height,A=a.extend({},r),B=m(x.my,i.outerWidth(),i.outerHeight());"right"===b.my[0]?A.left-=j:"center"===b.my[0]&&(A.left-=j/2),"bottom"===b.my[1]?A.top-=l:"center"===b.my[1]&&(A.top-=l/2),A.left+=B[0],A.top+=B[1],a.support.offsetFractions||(A.left=f(A.left),A.top=f(A.top)),g={marginLeft:o,marginTop:s},a.each(["left","top"],function(d,e){a.ui.position[w[d]]&&a.ui.position[w[d]][e](A,{targetWidth:k,targetHeight:p,elemWidth:j,elemHeight:l,collisionPosition:g,collisionWidth:y,collisionHeight:z,offset:[c[0]+B[0],c[1]+B[1]],my:b.my,at:b.at,within:u,elem:i})}),b.using&&(h=function(a){var c=q.left-A.left,f=c+k-j,g=q.top-A.top,h=g+p-l,m={target:{element:t,left:q.left,top:q.top,width:k,height:p},element:{element:i,left:A.left,top:A.top,width:j,height:l},horizontal:f<0?"left":c>0?"right":"center",vertical:h<0?"top":g>0?"bottom":"middle"};k<j&&e(c+f)<k&&(m.horizontal="center"),p<l&&e(g+h)<p&&(m.vertical="middle"),d(e(c),e(f))>d(e(g),e(h))?m.important="horizontal":m.important="vertical",b.using.call(this,a,m)}),i.offset(a.extend(A,{using:h}))})},a.ui.position={fit:{left:function(a,b){var j,c=b.within,e=c.isWindow?c.scrollLeft:c.offset.left,f=c.width,g=a.left-b.collisionPosition.marginLeft,h=e-g,i=g+b.collisionWidth-f-e;b.collisionWidth>f?h>0&&i<=0?(j=a.left+h+b.collisionWidth-f-e,a.left+=h-j):i>0&&h<=0?a.left=e:h>i?a.left=e+f-b.collisionWidth:a.left=e:h>0?a.left+=h:i>0?a.left-=i:a.left=d(a.left-g,a.left)},top:function(a,b){var j,c=b.within,e=c.isWindow?c.scrollTop:c.offset.top,f=b.within.height,g=a.top-b.collisionPosition.marginTop,h=e-g,i=g+b.collisionHeight-f-e;b.collisionHeight>f?h>0&&i<=0?(j=a.top+h+b.collisionHeight-f-e,a.top+=h-j):i>0&&h<=0?a.top=e:h>i?a.top=e+f-b.collisionHeight:a.top=e:h>0?a.top+=h:i>0?a.top-=i:a.top=d(a.top-g,a.top)}},flip:{left:function(a,b){var n,o,c=b.within,d=c.offset.left+c.scrollLeft,f=c.width,g=c.isWindow?c.scrollLeft:c.offset.left,h=a.left-b.collisionPosition.marginLeft,i=h-g,j=h+b.collisionWidth-f-g,k="left"===b.my[0]?-b.elemWidth:"right"===b.my[0]?b.elemWidth:0,l="left"===b.at[0]?b.targetWidth:"right"===b.at[0]?-b.targetWidth:0,m=-2*b.offset[0];i<0?(n=a.left+k+l+m+b.collisionWidth-f-d,(n<0||n<e(i))&&(a.left+=k+l+m)):j>0&&(o=a.left-b.collisionPosition.marginLeft+k+l+m-g,(o>0||e(o)<j)&&(a.left+=k+l+m))},top:function(a,b){var o,p,c=b.within,d=c.offset.top+c.scrollTop,f=c.height,g=c.isWindow?c.scrollTop:c.offset.top,h=a.top-b.collisionPosition.marginTop,i=h-g,j=h+b.collisionHeight-f-g,k="top"===b.my[1],l=k?-b.elemHeight:"bottom"===b.my[1]?b.elemHeight:0,m="top"===b.at[1]?b.targetHeight:"bottom"===b.at[1]?-b.targetHeight:0,n=-2*b.offset[1];i<0?(p=a.top+l+m+n+b.collisionHeight-f-d,a.top+l+m+n>i&&(p<0||p<e(i))&&(a.top+=l+m+n)):j>0&&(o=a.top-b.collisionPosition.marginTop+l+m+n-g,a.top+l+m+n>j&&(o>0||e(o)<j)&&(a.top+=l+m+n))}},flipfit:{left:function(){a.ui.position.flip.left.apply(this,arguments),a.ui.position.fit.left.apply(this,arguments)},top:function(){a.ui.position.flip.top.apply(this,arguments),a.ui.position.fit.top.apply(this,arguments)}}},function(){var b,c,d,e,f,g=document.getElementsByTagName("body")[0],h=document.createElement("div");b=document.createElement(g?"div":"body"),d={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},g&&a.extend(d,{position:"absolute",left:"-1000px",top:"-1000px"});for(f in d)b.style[f]=d[f];b.appendChild(h),c=g||document.documentElement,c.insertBefore(b,c.firstChild),h.style.cssText="position: absolute; left: 10.7432222px;",e=a(h).offset().left,a.support.offsetFractions=e>10&&e<11,b.innerHTML="",c.removeChild(b)}()}(jQuery),function(a,b){a.widget("ui.progressbar",{version:"1.10.3",options:{max:100,value:0,change:null,complete:null},min:0,_create:function(){this.oldValue=this.options.value=this._constrainedValue(),this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role:"progressbar","aria-valuemin":this.min}),this.valueDiv=a("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element),this._refreshValue()},_destroy:function(){this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),this.valueDiv.remove()},value:function(a){return a===b?this.options.value:(this.options.value=this._constrainedValue(a),void this._refreshValue())},_constrainedValue:function(a){return a===b&&(a=this.options.value),this.indeterminate=a===!1,"number"!=typeof a&&(a=0),!this.indeterminate&&Math.min(this.options.max,Math.max(this.min,a))},_setOptions:function(a){var b=a.value;delete a.value,this._super(a),this.options.value=this._constrainedValue(b),this._refreshValue()},_setOption:function(a,b){"max"===a&&(b=Math.max(this.min,b)),this._super(a,b)},_percentage:function(){return this.indeterminate?100:100*(this.options.value-this.min)/(this.options.max-this.min)},_refreshValue:function(){var b=this.options.value,c=this._percentage();this.valueDiv.toggle(this.indeterminate||b>this.min).toggleClass("ui-corner-right",b===this.options.max).width(c.toFixed(0)+"%"),this.element.toggleClass("ui-progressbar-indeterminate",this.indeterminate),this.indeterminate?(this.element.removeAttr("aria-valuenow"),this.overlayDiv||(this.overlayDiv=a("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv))):(this.element.attr({"aria-valuemax":this.options.max,"aria-valuenow":b}),this.overlayDiv&&(this.overlayDiv.remove(),this.overlayDiv=null)),this.oldValue!==b&&(this.oldValue=b,this._trigger("change")),b===this.options.max&&this._trigger("complete")}})}(jQuery),function(a,b){var c=5;a.widget("ui.slider",a.ui.mouse,{version:"1.10.3",widgetEventPrefix:"slide",options:{animate:!1,distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},_create:function(){this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget ui-widget-content ui-corner-all"),this._refresh(),this._setOption("disabled",this.options.disabled),this._animateOff=!1},_refresh:function(){this._createRange(),this._createHandles(),this._setupEvents(),this._refreshValue()},_createHandles:function(){var b,c,d=this.options,e=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),f="<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",g=[];for(c=d.values&&d.values.length||1,e.length>c&&(e.slice(c).remove(),e=e.slice(0,c)),b=e.length;b<c;b++)g.push(f);this.handles=e.add(a(g.join("")).appendTo(this.element)),this.handle=this.handles.eq(0),this.handles.each(function(b){a(this).data("ui-slider-handle-index",b)})},_createRange:function(){var b=this.options,c="";b.range?(b.range===!0&&(b.values?b.values.length&&2!==b.values.length?b.values=[b.values[0],b.values[0]]:a.isArray(b.values)&&(b.values=b.values.slice(0)):b.values=[this._valueMin(),this._valueMin()]),this.range&&this.range.length?this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({left:"",bottom:""}):(this.range=a("<div></div>").appendTo(this.element),c="ui-slider-range ui-widget-header ui-corner-all"),this.range.addClass(c+("min"===b.range||"max"===b.range?" ui-slider-range-"+b.range:""))):this.range=a([])},_setupEvents:function(){var a=this.handles.add(this.range).filter("a");this._off(a),this._on(a,this._handleEvents),this._hoverable(a),this._focusable(a)},_destroy:function(){this.handles.remove(),this.range.remove(),this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"),this._mouseDestroy()},_mouseCapture:function(b){var c,d,e,f,g,h,i,j,k=this,l=this.options;return!l.disabled&&(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),c={x:b.pageX,y:b.pageY},d=this._normValueFromMouse(c),e=this._valueMax()-this._valueMin()+1,this.handles.each(function(b){var c=Math.abs(d-k.values(b));(e>c||e===c&&(b===k._lastChangedValue||k.values(b)===l.min))&&(e=c,f=a(this),g=b)}),h=this._start(b,g),h!==!1&&(this._mouseSliding=!0,this._handleIndex=g,f.addClass("ui-state-active").focus(),i=f.offset(),j=!a(b.target).parents().addBack().is(".ui-slider-handle"),this._clickOffset=j?{left:0,top:0}:{left:b.pageX-i.left-f.width()/2,top:b.pageY-i.top-f.height()/2-(parseInt(f.css("borderTopWidth"),10)||0)-(parseInt(f.css("borderBottomWidth"),10)||0)+(parseInt(f.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(b,g,d),this._animateOff=!0,!0))},_mouseStart:function(){return!0},_mouseDrag:function(a){var b={x:a.pageX,y:a.pageY},c=this._normValueFromMouse(b);return this._slide(a,this._handleIndex,c),!1},_mouseStop:function(a){return this.handles.removeClass("ui-state-active"),this._mouseSliding=!1,this._stop(a,this._handleIndex),this._change(a,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1},_detectOrientation:function(){this.orientation="vertical"===this.options.orientation?"vertical":"horizontal"},_normValueFromMouse:function(a){var b,c,d,e,f;return"horizontal"===this.orientation?(b=this.elementSize.width,c=a.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(b=this.elementSize.height,c=a.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),d=c/b,d>1&&(d=1),d<0&&(d=0),"vertical"===this.orientation&&(d=1-d),e=this._valueMax()-this._valueMin(),f=this._valueMin()+d*e,this._trimAlignValue(f)},_start:function(a,b){var c={handle:this.handles[b],value:this.value()};return this.options.values&&this.options.values.length&&(c.value=this.values(b),c.values=this.values()),this._trigger("start",a,c)},_slide:function(a,b,c){var d,e,f;this.options.values&&this.options.values.length?(d=this.values(b?0:1),2===this.options.values.length&&this.options.range===!0&&(0===b&&c>d||1===b&&c<d)&&(c=d),c!==this.values(b)&&(e=this.values(),e[b]=c,f=this._trigger("slide",a,{handle:this.handles[b],value:c,values:e}),d=this.values(b?0:1),f!==!1&&this.values(b,c,!0))):c!==this.value()&&(f=this._trigger("slide",a,{handle:this.handles[b],value:c}),f!==!1&&this.value(c))},_stop:function(a,b){var c={handle:this.handles[b],value:this.value()};this.options.values&&this.options.values.length&&(c.value=this.values(b),c.values=this.values()),this._trigger("stop",a,c)},_change:function(a,b){if(!this._keySliding&&!this._mouseSliding){var c={handle:this.handles[b],value:this.value()};this.options.values&&this.options.values.length&&(c.value=this.values(b),c.values=this.values()),this._lastChangedValue=b,this._trigger("change",a,c)}},value:function(a){return arguments.length?(this.options.value=this._trimAlignValue(a),this._refreshValue(),void this._change(null,0)):this._value()},values:function(b,c){var d,e,f;if(arguments.length>1)return this.options.values[b]=this._trimAlignValue(c),this._refreshValue(),void this._change(null,b);if(!arguments.length)return this._values();if(!a.isArray(arguments[0]))return this.options.values&&this.options.values.length?this._values(b):this.value();for(d=this.options.values,e=arguments[0],f=0;f<d.length;f+=1)d[f]=this._trimAlignValue(e[f]),this._change(null,f);this._refreshValue()},_setOption:function(b,c){var d,e=0;switch("range"===b&&this.options.range===!0&&("min"===c?(this.options.value=this._values(0),this.options.values=null):"max"===c&&(this.options.value=this._values(this.options.values.length-1),this.options.values=null)),a.isArray(this.options.values)&&(e=this.options.values.length),a.Widget.prototype._setOption.apply(this,arguments),b){case"orientation":this._detectOrientation(),this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation),this._refreshValue();break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":for(this._animateOff=!0,this._refreshValue(),d=0;d<e;d+=1)this._change(null,d);this._animateOff=!1;break;case"min":case"max":this._animateOff=!0,this._refreshValue(),this._animateOff=!1;break;case"range":this._animateOff=!0,this._refresh(),this._animateOff=!1}},_value:function(){var a=this.options.value;return a=this._trimAlignValue(a)},_values:function(a){var b,c,d;if(arguments.length)return b=this.options.values[a],b=this._trimAlignValue(b);if(this.options.values&&this.options.values.length){for(c=this.options.values.slice(),d=0;d<c.length;d+=1)c[d]=this._trimAlignValue(c[d]);return c}return[]},_trimAlignValue:function(a){if(a<=this._valueMin())return this._valueMin();if(a>=this._valueMax())return this._valueMax();var b=this.options.step>0?this.options.step:1,c=(a-this._valueMin())%b,d=a-c;return 2*Math.abs(c)>=b&&(d+=c>0?b:-b),parseFloat(d.toFixed(5))},_valueMin:function(){return this.options.min},_valueMax:function(){return this.options.max},_refreshValue:function(){var b,c,d,e,f,g=this.options.range,h=this.options,i=this,j=!this._animateOff&&h.animate,k={};this.options.values&&this.options.values.length?this.handles.each(function(d){c=(i.values(d)-i._valueMin())/(i._valueMax()-i._valueMin())*100,k["horizontal"===i.orientation?"left":"bottom"]=c+"%",a(this).stop(1,1)[j?"animate":"css"](k,h.animate),i.options.range===!0&&("horizontal"===i.orientation?(0===d&&i.range.stop(1,1)[j?"animate":"css"]({left:c+"%"},h.animate),1===d&&i.range[j?"animate":"css"]({width:c-b+"%"},{queue:!1,duration:h.animate})):(0===d&&i.range.stop(1,1)[j?"animate":"css"]({bottom:c+"%"},h.animate),1===d&&i.range[j?"animate":"css"]({height:c-b+"%"},{queue:!1,duration:h.animate}))),b=c}):(d=this.value(),e=this._valueMin(),f=this._valueMax(),c=f!==e?(d-e)/(f-e)*100:0,k["horizontal"===this.orientation?"left":"bottom"]=c+"%",this.handle.stop(1,1)[j?"animate":"css"](k,h.animate),"min"===g&&"horizontal"===this.orientation&&this.range.stop(1,1)[j?"animate":"css"]({width:c+"%"},h.animate),"max"===g&&"horizontal"===this.orientation&&this.range[j?"animate":"css"]({width:100-c+"%"},{queue:!1,duration:h.animate}),"min"===g&&"vertical"===this.orientation&&this.range.stop(1,1)[j?"animate":"css"]({height:c+"%"},h.animate),"max"===g&&"vertical"===this.orientation&&this.range[j?"animate":"css"]({height:100-c+"%"},{queue:!1,duration:h.animate}))},_handleEvents:{keydown:function(b){var d,e,f,g,h=a(b.target).data("ui-slider-handle-index");switch(b.keyCode){case a.ui.keyCode.HOME:case a.ui.keyCode.END:case a.ui.keyCode.PAGE_UP:case a.ui.keyCode.PAGE_DOWN:case a.ui.keyCode.UP:case a.ui.keyCode.RIGHT:case a.ui.keyCode.DOWN:case a.ui.keyCode.LEFT:if(b.preventDefault(),!this._keySliding&&(this._keySliding=!0,a(b.target).addClass("ui-state-active"),d=this._start(b,h),d===!1))return}switch(g=this.options.step,e=f=this.options.values&&this.options.values.length?this.values(h):this.value(),b.keyCode){case a.ui.keyCode.HOME:f=this._valueMin();break;case a.ui.keyCode.END:f=this._valueMax();break;case a.ui.keyCode.PAGE_UP:f=this._trimAlignValue(e+(this._valueMax()-this._valueMin())/c);break;case a.ui.keyCode.PAGE_DOWN:f=this._trimAlignValue(e-(this._valueMax()-this._valueMin())/c);break;case a.ui.keyCode.UP:case a.ui.keyCode.RIGHT:if(e===this._valueMax())return;f=this._trimAlignValue(e+g);break;case a.ui.keyCode.DOWN:case a.ui.keyCode.LEFT:if(e===this._valueMin())return;f=this._trimAlignValue(e-g)}this._slide(b,h,f)},click:function(a){a.preventDefault()},keyup:function(b){var c=a(b.target).data("ui-slider-handle-index");this._keySliding&&(this._keySliding=!1,this._stop(b,c),this._change(b,c),a(b.target).removeClass("ui-state-active"))}}})}(jQuery),function(a){function b(a){return function(){var b=this.element.val();a.apply(this,arguments),this._refresh(),b!==this.element.val()&&this._trigger("change")}}a.widget("ui.spinner",{version:"1.10.3",defaultElement:"<input>",widgetEventPrefix:"spin",options:{culture:null,icons:{down:"ui-icon-triangle-1-s",up:"ui-icon-triangle-1-n"},incremental:!0,max:null,min:null,numberFormat:null,page:10,step:1,change:null,spin:null,start:null,stop:null},_create:function(){this._setOption("max",this.options.max),this._setOption("min",this.options.min),this._setOption("step",this.options.step),this._value(this.element.val(),!0),this._draw(),this._on(this._events),this._refresh(),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_getCreateOptions:function(){var b={},c=this.element;return a.each(["min","max","step"],function(a,d){var e=c.attr(d);void 0!==e&&e.length&&(b[d]=e)}),b},_events:{keydown:function(a){this._start(a)&&this._keydown(a)&&a.preventDefault()},keyup:"_stop",focus:function(){this.previous=this.element.val()},blur:function(a){return this.cancelBlur?void delete this.cancelBlur:(this._stop(),this._refresh(),void(this.previous!==this.element.val()&&this._trigger("change",a)))},mousewheel:function(a,b){if(b){if(!this.spinning&&!this._start(a))return!1;this._spin((b>0?1:-1)*this.options.step,a),clearTimeout(this.mousewheelTimer),this.mousewheelTimer=this._delay(function(){this.spinning&&this._stop(a)},100),a.preventDefault()}},"mousedown .ui-spinner-button":function(b){function d(){var a=this.element[0]===this.document[0].activeElement;a||(this.element.focus(),this.previous=c,this._delay(function(){this.previous=c}))}var c;c=this.element[0]===this.document[0].activeElement?this.previous:this.element.val(),b.preventDefault(),d.call(this),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur,d.call(this)}),this._start(b)!==!1&&this._repeat(null,a(b.currentTarget).hasClass("ui-spinner-up")?1:-1,b)},"mouseup .ui-spinner-button":"_stop","mouseenter .ui-spinner-button":function(b){if(a(b.currentTarget).hasClass("ui-state-active"))return this._start(b)!==!1&&void this._repeat(null,a(b.currentTarget).hasClass("ui-spinner-up")?1:-1,b)},"mouseleave .ui-spinner-button":"_stop"},_draw:function(){var a=this.uiSpinner=this.element.addClass("ui-spinner-input").attr("autocomplete","off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());this.element.attr("role","spinbutton"),this.buttons=a.find(".ui-spinner-button").attr("tabIndex",-1).button().removeClass("ui-corner-all"),this.buttons.height()>Math.ceil(.5*a.height())&&a.height()>0&&a.height(a.height()),this.options.disabled&&this.disable()},_keydown:function(b){var c=this.options,d=a.ui.keyCode;switch(b.keyCode){case d.UP:return this._repeat(null,1,b),!0;case d.DOWN:return this._repeat(null,-1,b),!0;case d.PAGE_UP:return this._repeat(null,c.page,b),!0;case d.PAGE_DOWN:return this._repeat(null,-c.page,b),!0}return!1},_uiSpinnerHtml:function(){return"<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"},_buttonHtml:function(){return"<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon "+this.options.icons.up+"'>&#9650;</span></a><a class='ui-spinner-button ui-spinner-down ui-corner-br'><span class='ui-icon "+this.options.icons.down+"'>&#9660;</span></a>"},_start:function(a){return!(!this.spinning&&this._trigger("start",a)===!1)&&(this.counter||(this.counter=1),this.spinning=!0,!0)},_repeat:function(a,b,c){a=a||500,clearTimeout(this.timer),this.timer=this._delay(function(){this._repeat(40,b,c)},a),this._spin(b*this.options.step,c)},_spin:function(a,b){var c=this.value()||0;this.counter||(this.counter=1),c=this._adjustValue(c+a*this._increment(this.counter)),this.spinning&&this._trigger("spin",b,{value:c})===!1||(this._value(c),this.counter++)},_increment:function(b){var c=this.options.incremental;return c?a.isFunction(c)?c(b):Math.floor(b*b*b/5e4-b*b/500+17*b/200+1):1},_precision:function(){var a=this._precisionOf(this.options.step);return null!==this.options.min&&(a=Math.max(a,this._precisionOf(this.options.min))),a},_precisionOf:function(a){var b=a.toString(),c=b.indexOf(".");return c===-1?0:b.length-c-1},_adjustValue:function(a){var b,c,d=this.options;return b=null!==d.min?d.min:0,c=a-b,c=Math.round(c/d.step)*d.step,a=b+c,a=parseFloat(a.toFixed(this._precision())),null!==d.max&&a>d.max?d.max:null!==d.min&&a<d.min?d.min:a},_stop:function(a){this.spinning&&(clearTimeout(this.timer),clearTimeout(this.mousewheelTimer),this.counter=0,this.spinning=!1,this._trigger("stop",a))},_setOption:function(a,b){if("culture"===a||"numberFormat"===a){var c=this._parse(this.element.val());return this.options[a]=b,void this.element.val(this._format(c))}"max"!==a&&"min"!==a&&"step"!==a||"string"==typeof b&&(b=this._parse(b)),"icons"===a&&(this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(b.up),this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(b.down)),this._super(a,b),"disabled"===a&&(b?(this.element.prop("disabled",!0),this.buttons.button("disable")):(this.element.prop("disabled",!1),this.buttons.button("enable")))},_setOptions:b(function(a){this._super(a),this._value(this.element.val())}),_parse:function(a){return"string"==typeof a&&""!==a&&(a=window.Globalize&&this.options.numberFormat?Globalize.parseFloat(a,10,this.options.culture):+a),""===a||isNaN(a)?null:a},_format:function(a){return""===a?"":window.Globalize&&this.options.numberFormat?Globalize.format(a,this.options.numberFormat,this.options.culture):a},_refresh:function(){this.element.attr({"aria-valuemin":this.options.min,"aria-valuemax":this.options.max,"aria-valuenow":this._parse(this.element.val())})},_value:function(a,b){var c;""!==a&&(c=this._parse(a),null!==c&&(b||(c=this._adjustValue(c)),a=this._format(c))),this.element.val(a),this._refresh()},_destroy:function(){this.element.removeClass("ui-spinner-input").prop("disabled",!1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),this.uiSpinner.replaceWith(this.element)},stepUp:b(function(a){this._stepUp(a)}),_stepUp:function(a){this._start()&&(this._spin((a||1)*this.options.step),this._stop())},stepDown:b(function(a){this._stepDown(a)}),_stepDown:function(a){this._start()&&(this._spin((a||1)*-this.options.step),this._stop())},pageUp:b(function(a){this._stepUp((a||1)*this.options.page)}),pageDown:b(function(a){this._stepDown((a||1)*this.options.page)}),value:function(a){return arguments.length?void b(this._value).call(this,a):this._parse(this.element.val())},widget:function(){return this.uiSpinner}})}(jQuery),function(a,b){function e(){return++c}function f(a){return a.hash.length>1&&decodeURIComponent(a.href.replace(d,""))===decodeURIComponent(location.href.replace(d,""))}var c=0,d=/#.*$/;a.widget("ui.tabs",{version:"1.10.3",delay:300,options:{active:null,collapsible:!1,event:"click",heightStyle:"content",hide:null,show:null,activate:null,beforeActivate:null,beforeLoad:null,load:null},_create:function(){var b=this,c=this.options;this.running=!1,this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible",c.collapsible).delegate(".ui-tabs-nav > li","mousedown"+this.eventNamespace,function(b){a(this).is(".ui-state-disabled")&&b.preventDefault()}).delegate(".ui-tabs-anchor","focus"+this.eventNamespace,function(){a(this).closest("li").is(".ui-state-disabled")&&this.blur()}),this._processTabs(),c.active=this._initialActive(),a.isArray(c.disabled)&&(c.disabled=a.unique(c.disabled.concat(a.map(this.tabs.filter(".ui-state-disabled"),function(a){return b.tabs.index(a)}))).sort()),this.options.active!==!1&&this.anchors.length?this.active=this._findActive(c.active):this.active=a(),this._refresh(),this.active.length&&this.load(c.active)},_initialActive:function(){var b=this.options.active,c=this.options.collapsible,d=location.hash.substring(1);return null===b&&(d&&this.tabs.each(function(c,e){if(a(e).attr("aria-controls")===d)return b=c,!1}),null===b&&(b=this.tabs.index(this.tabs.filter(".ui-tabs-active"))),null!==b&&b!==-1||(b=!!this.tabs.length&&0)),b!==!1&&(b=this.tabs.index(this.tabs.eq(b)),b===-1&&(b=!c&&0)),!c&&b===!1&&this.anchors.length&&(b=0),b},_getCreateEventData:function(){return{tab:this.active,panel:this.active.length?this._getPanelForTab(this.active):a()}},_tabKeydown:function(b){var c=a(this.document[0].activeElement).closest("li"),d=this.tabs.index(c),e=!0;if(!this._handlePageNav(b)){switch(b.keyCode){case a.ui.keyCode.RIGHT:case a.ui.keyCode.DOWN:d++;break;case a.ui.keyCode.UP:case a.ui.keyCode.LEFT:e=!1,d--;break;case a.ui.keyCode.END:d=this.anchors.length-1;break;case a.ui.keyCode.HOME:d=0;break;case a.ui.keyCode.SPACE:return b.preventDefault(),clearTimeout(this.activating),void this._activate(d);case a.ui.keyCode.ENTER:return b.preventDefault(),clearTimeout(this.activating),void this._activate(d!==this.options.active&&d);default:return}b.preventDefault(),clearTimeout(this.activating),d=this._focusNextTab(d,e),b.ctrlKey||(c.attr("aria-selected","false"),this.tabs.eq(d).attr("aria-selected","true"),this.activating=this._delay(function(){this.option("active",d)},this.delay))}},_panelKeydown:function(b){this._handlePageNav(b)||b.ctrlKey&&b.keyCode===a.ui.keyCode.UP&&(b.preventDefault(),this.active.focus())},_handlePageNav:function(b){return b.altKey&&b.keyCode===a.ui.keyCode.PAGE_UP?(this._activate(this._focusNextTab(this.options.active-1,!1)),!0):b.altKey&&b.keyCode===a.ui.keyCode.PAGE_DOWN?(this._activate(this._focusNextTab(this.options.active+1,!0)),!0):void 0},_findNextTab:function(b,c){function e(){return b>d&&(b=0),b<0&&(b=d),b}for(var d=this.tabs.length-1;a.inArray(e(),this.options.disabled)!==-1;)b=c?b+1:b-1;return b},_focusNextTab:function(a,b){return a=this._findNextTab(a,b),this.tabs.eq(a).focus(),a},_setOption:function(a,b){return"active"===a?void this._activate(b):"disabled"===a?void this._setupDisabled(b):(this._super(a,b),"collapsible"===a&&(this.element.toggleClass("ui-tabs-collapsible",b),b||this.options.active!==!1||this._activate(0)),"event"===a&&this._setupEvents(b),void("heightStyle"===a&&this._setupHeightStyle(b)))},_tabId:function(a){return a.attr("aria-controls")||"ui-tabs-"+e()},_sanitizeSelector:function(a){return a?a.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$&"):""},refresh:function(){var b=this.options,c=this.tablist.children(":has(a[href])");b.disabled=a.map(c.filter(".ui-state-disabled"),function(a){return c.index(a)}),this._processTabs(),b.active!==!1&&this.anchors.length?this.active.length&&!a.contains(this.tablist[0],this.active[0])?this.tabs.length===b.disabled.length?(b.active=!1,this.active=a()):this._activate(this._findNextTab(Math.max(0,b.active-1),!1)):b.active=this.tabs.index(this.active):(b.active=!1,this.active=a()),this._refresh()},_refresh:function(){this._setupDisabled(this.options.disabled),this._setupEvents(this.options.event),this._setupHeightStyle(this.options.heightStyle),this.tabs.not(this.active).attr({"aria-selected":"false",tabIndex:-1}),this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-expanded":"false","aria-hidden":"true"}),this.active.length?(this.active.addClass("ui-tabs-active ui-state-active").attr({"aria-selected":"true",tabIndex:0}),this._getPanelForTab(this.active).show().attr({"aria-expanded":"true","aria-hidden":"false"})):this.tabs.eq(0).attr("tabIndex",0)},_processTabs:function(){var b=this;this.tablist=this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role","tablist"),this.tabs=this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({role:"tab",tabIndex:-1}),this.anchors=this.tabs.map(function(){return a("a",this)[0]}).addClass("ui-tabs-anchor").attr({role:"presentation",tabIndex:-1}),this.panels=a(),this.anchors.each(function(c,d){var e,g,h,i=a(d).uniqueId().attr("id"),j=a(d).closest("li"),k=j.attr("aria-controls");f(d)?(e=d.hash,g=b.element.find(b._sanitizeSelector(e))):(h=b._tabId(j),e="#"+h,g=b.element.find(e),g.length||(g=b._createPanel(h),g.insertAfter(b.panels[c-1]||b.tablist)),g.attr("aria-live","polite")),g.length&&(b.panels=b.panels.add(g)),k&&j.data("ui-tabs-aria-controls",k),j.attr({"aria-controls":e.substring(1),"aria-labelledby":i}),g.attr("aria-labelledby",i)}),this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role","tabpanel")},_getList:function(){return this.element.find("ol,ul").eq(0)},_createPanel:function(b){return a("<div>").attr("id",b).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy",!0)},_setupDisabled:function(b){a.isArray(b)&&(b.length?b.length===this.anchors.length&&(b=!0):b=!1);for(var d,c=0;d=this.tabs[c];c++)b===!0||a.inArray(c,b)!==-1?a(d).addClass("ui-state-disabled").attr("aria-disabled","true"):a(d).removeClass("ui-state-disabled").removeAttr("aria-disabled");this.options.disabled=b},_setupEvents:function(b){var c={click:function(a){a.preventDefault()}};b&&a.each(b.split(" "),function(a,b){c[b]="_eventHandler"}),this._off(this.anchors.add(this.tabs).add(this.panels)),this._on(this.anchors,c),this._on(this.tabs,{keydown:"_tabKeydown"}),this._on(this.panels,{keydown:"_panelKeydown"}),this._focusable(this.tabs),this._hoverable(this.tabs)},_setupHeightStyle:function(b){var c,d=this.element.parent();"fill"===b?(c=d.height(),c-=this.element.outerHeight()-this.element.height(),this.element.siblings(":visible").each(function(){var b=a(this),d=b.css("position");"absolute"!==d&&"fixed"!==d&&(c-=b.outerHeight(!0))}),this.element.children().not(this.panels).each(function(){c-=a(this).outerHeight(!0)}),this.panels.each(function(){a(this).height(Math.max(0,c-a(this).innerHeight()+a(this).height()))}).css("overflow","auto")):"auto"===b&&(c=0,this.panels.each(function(){c=Math.max(c,a(this).height("").height())}).height(c))},_eventHandler:function(b){var c=this.options,d=this.active,e=a(b.currentTarget),f=e.closest("li"),g=f[0]===d[0],h=g&&c.collapsible,i=h?a():this._getPanelForTab(f),j=d.length?this._getPanelForTab(d):a(),k={oldTab:d,oldPanel:j,newTab:h?a():f,newPanel:i};b.preventDefault(),f.hasClass("ui-state-disabled")||f.hasClass("ui-tabs-loading")||this.running||g&&!c.collapsible||this._trigger("beforeActivate",b,k)===!1||(c.active=!h&&this.tabs.index(f),this.active=g?a():f,this.xhr&&this.xhr.abort(),j.length||i.length||a.error("jQuery UI Tabs: Mismatching fragment identifier."),i.length&&this.load(this.tabs.index(f),b),this._toggle(b,k))},_toggle:function(b,c){function g(){d.running=!1,d._trigger("activate",b,c)}function h(){c.newTab.closest("li").addClass("ui-tabs-active ui-state-active"),e.length&&d.options.show?d._show(e,d.options.show,g):(e.show(),g())}var d=this,e=c.newPanel,f=c.oldPanel;this.running=!0,f.length&&this.options.hide?this._hide(f,this.options.hide,function(){c.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),h()}):(c.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),f.hide(),h()),f.attr({"aria-expanded":"false","aria-hidden":"true"}),c.oldTab.attr("aria-selected","false"),e.length&&f.length?c.oldTab.attr("tabIndex",-1):e.length&&this.tabs.filter(function(){return 0===a(this).attr("tabIndex")}).attr("tabIndex",-1),e.attr({"aria-expanded":"true","aria-hidden":"false"}),c.newTab.attr({"aria-selected":"true",tabIndex:0})},_activate:function(b){var c,d=this._findActive(b);d[0]!==this.active[0]&&(d.length||(d=this.active),c=d.find(".ui-tabs-anchor")[0],this._eventHandler({target:c,currentTarget:c,preventDefault:a.noop}))},_findActive:function(b){return b===!1?a():this.tabs.eq(b)},_getIndex:function(a){return"string"==typeof a&&(a=this.anchors.index(this.anchors.filter("[href$='"+a+"']"))),a},_destroy:function(){this.xhr&&this.xhr.abort(),this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"),this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"),this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(),this.tabs.add(this.panels).each(function(){a.data(this,"ui-tabs-destroy")?a(this).remove():a(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")}),this.tabs.each(function(){var b=a(this),c=b.data("ui-tabs-aria-controls");c?b.attr("aria-controls",c).removeData("ui-tabs-aria-controls"):b.removeAttr("aria-controls")}),this.panels.show(),"content"!==this.options.heightStyle&&this.panels.css("height","")},enable:function(c){var d=this.options.disabled;d!==!1&&(c===b?d=!1:(c=this._getIndex(c),d=a.isArray(d)?a.map(d,function(a){return a!==c?a:null}):a.map(this.tabs,function(a,b){return b!==c?b:null})),this._setupDisabled(d))},disable:function(c){var d=this.options.disabled;if(d!==!0){if(c===b)d=!0;else{if(c=this._getIndex(c),a.inArray(c,d)!==-1)return;d=a.isArray(d)?a.merge([c],d).sort():[c]}this._setupDisabled(d)}},load:function(b,c){b=this._getIndex(b);var d=this,e=this.tabs.eq(b),g=e.find(".ui-tabs-anchor"),h=this._getPanelForTab(e),i={tab:e,panel:h};f(g[0])||(this.xhr=a.ajax(this._ajaxSettings(g,c,i)),this.xhr&&"canceled"!==this.xhr.statusText&&(e.addClass("ui-tabs-loading"),h.attr("aria-busy","true"),this.xhr.success(function(a){setTimeout(function(){h.html(a),d._trigger("load",c,i)},1)}).complete(function(a,b){setTimeout(function(){"abort"===b&&d.panels.stop(!1,!0),e.removeClass("ui-tabs-loading"),h.removeAttr("aria-busy"),a===d.xhr&&delete d.xhr},1)})))},_ajaxSettings:function(b,c,d){var e=this;return{url:b.attr("href"),beforeSend:function(b,f){return e._trigger("beforeLoad",c,a.extend({jqXHR:b,ajaxSettings:f},d))}}},_getPanelForTab:function(b){var c=a(b).attr("aria-controls");return this.element.find(this._sanitizeSelector("#"+c))}})}(jQuery),function(a){function c(b,c){var d=(b.attr("aria-describedby")||"").split(/\s+/);d.push(c),b.data("ui-tooltip-id",c).attr("aria-describedby",a.trim(d.join(" ")))}function d(b){var c=b.data("ui-tooltip-id"),d=(b.attr("aria-describedby")||"").split(/\s+/),e=a.inArray(c,d);e!==-1&&d.splice(e,1),b.removeData("ui-tooltip-id"),d=a.trim(d.join(" ")),d?b.attr("aria-describedby",d):b.removeAttr("aria-describedby")}var b=0;a.widget("ui.tooltip",{version:"1.10.3",options:{content:function(){var b=a(this).attr("title")||"";return a("<a>").text(b).html()},hide:!0,items:"[title]:not([disabled])",position:{my:"left top+15",at:"left bottom",collision:"flipfit flip"},show:!0,tooltipClass:null,track:!1,close:null,open:null},_create:function(){this._on({mouseover:"open",focusin:"open"}),this.tooltips={},this.parents={},this.options.disabled&&this._disable()},_setOption:function(b,c){var d=this;return"disabled"===b?(this[c?"_disable":"_enable"](),void(this.options[b]=c)):(this._super(b,c),void("content"===b&&a.each(this.tooltips,function(a,b){d._updateContent(b)})))},_disable:function(){var b=this;a.each(this.tooltips,function(c,d){var e=a.Event("blur");e.target=e.currentTarget=d[0],b.close(e,!0)}),this.element.find(this.options.items).addBack().each(function(){var b=a(this);b.is("[title]")&&b.data("ui-tooltip-title",b.attr("title")).attr("title","")})},_enable:function(){this.element.find(this.options.items).addBack().each(function(){var b=a(this);b.data("ui-tooltip-title")&&b.attr("title",b.data("ui-tooltip-title"))})},open:function(b){var c=this,d=a(b?b.target:this.element).closest(this.options.items);d.length&&!d.data("ui-tooltip-id")&&(d.attr("title")&&d.data("ui-tooltip-title",d.attr("title")),d.data("ui-tooltip-open",!0),b&&"mouseover"===b.type&&d.parents().each(function(){var d,b=a(this);b.data("ui-tooltip-open")&&(d=a.Event("blur"),d.target=d.currentTarget=this,c.close(d,!0)),b.attr("title")&&(b.uniqueId(),c.parents[this.id]={element:this,title:b.attr("title")},b.attr("title",""))}),this._updateContent(d,b))},_updateContent:function(a,b){var c,d=this.options.content,e=this,f=b?b.type:null;return"string"==typeof d?this._open(b,a,d):(c=d.call(a[0],function(c){a.data("ui-tooltip-open")&&e._delay(function(){b&&(b.type=f),this._open(b,a,c)})}),void(c&&this._open(b,a,c)))},_open:function(b,d,e){function j(a){i.of=a,f.is(":hidden")||f.position(i)}var f,g,h,i=a.extend({},this.options.position);if(e){if(f=this._find(d),f.length)return void f.find(".ui-tooltip-content").html(e);d.is("[title]")&&(b&&"mouseover"===b.type?d.attr("title",""):d.removeAttr("title")),f=this._tooltip(d),c(d,f.attr("id")),f.find(".ui-tooltip-content").html(e),this.options.track&&b&&/^mouse/.test(b.type)?(this._on(this.document,{mousemove:j}),j(b)):f.position(a.extend({of:d},this.options.position)),f.hide(),this._show(f,this.options.show),this.options.show&&this.options.show.delay&&(h=this.delayedShow=setInterval(function(){f.is(":visible")&&(j(i.of),clearInterval(h))},a.fx.interval)),this._trigger("open",b,{tooltip:f}),g={keyup:function(b){if(b.keyCode===a.ui.keyCode.ESCAPE){var c=a.Event(b);c.currentTarget=d[0],this.close(c,!0)}},remove:function(){this._removeTooltip(f)}},b&&"mouseover"!==b.type||(g.mouseleave="close"),b&&"focusin"!==b.type||(g.focusout="close"),this._on(!0,d,g)}},close:function(b){var c=this,e=a(b?b.currentTarget:this.element),f=this._find(e);this.closing||(clearInterval(this.delayedShow),e.data("ui-tooltip-title")&&e.attr("title",e.data("ui-tooltip-title")),d(e),f.stop(!0),this._hide(f,this.options.hide,function(){c._removeTooltip(a(this))}),e.removeData("ui-tooltip-open"),this._off(e,"mouseleave focusout keyup"),e[0]!==this.element[0]&&this._off(e,"remove"),this._off(this.document,"mousemove"),b&&"mouseleave"===b.type&&a.each(this.parents,function(b,d){a(d.element).attr("title",d.title),delete c.parents[b]}),this.closing=!0,this._trigger("close",b,{tooltip:f}),this.closing=!1)},_tooltip:function(c){var d="ui-tooltip-"+b++,e=a("<div>").attr({id:d,role:"tooltip"}).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content "+(this.options.tooltipClass||""));return a("<div>").addClass("ui-tooltip-content").appendTo(e),e.appendTo(this.document[0].body),this.tooltips[d]=c,e},_find:function(b){var c=b.data("ui-tooltip-id");return c?a("#"+c):a()},_removeTooltip:function(a){a.remove(),delete this.tooltips[a.attr("id")]},_destroy:function(){var b=this;a.each(this.tooltips,function(c,d){var e=a.Event("blur");e.target=e.currentTarget=d[0],b.close(e,!0),a("#"+c).remove(),d.data("ui-tooltip-title")&&(d.attr("title",d.data("ui-tooltip-title")),d.removeData("ui-tooltip-title"))})}})}(jQuery);$(document).ready(function(){HoverCart();prestashop.blockcart=prestashop.blockcart||{};var showModal=prestashop.blockcart.showModal||function(modal){var $popup_cart=$('popup_cart');$popup_cart.append(modal);$popup_cart.one('click','#blockcart-modal',function(event){if(event.target.id==='blockcart-modal'){$(event.target).remove()}})};prestashop.on('updateCart',function(event){var refreshURL=$('.blockcart').data('refresh-url');var requestData={};if(event&&event.reason&&typeof event.resp!=='undefined'&&!event.resp.hasError){requestData={id_customization:event.reason.idCustomization,id_product_attribute:event.reason.idProductAttribute,id_product:event.reason.idProduct,action:event.reason.linkAction}}
$.post(refreshURL,requestData).then(function(resp){$('.blockcart').replaceWith(resp.preview);HoverCart();if(resp.modal){showModal(resp.modal)}}).fail(function(resp){prestashop.emit('handleError',{eventType:'updateShoppingCart',resp:resp})})})});function HoverCart(){var cart_block=new HoverWatcher('.blockcart .button_cart');var shopping_cart=new HoverWatcher('.blockcart .popup_cart');$(".blockcart .button_cart").hover(function(){if(parseInt($('.blockcart').attr('data-cartitems'))>0)
$(".blockcart .popup_cart").stop(!0,!0).slideDown(450)},function(){setTimeout(function(){if(!shopping_cart.isHoveringOver()&&!cart_block.isHoveringOver())
$(".blockcart .popup_cart").stop(!0,!0).slideUp(450)},200)});$(".blockcart .popup_cart").hover(function(){},function(){setTimeout(function(){if(!shopping_cart.isHoveringOver())
$(".blockcart .popup_cart").stop(!0,!0).slideUp(450)},200)})}
function HoverWatcher(selector){this.hovering=!1;var self=this;this.isHoveringOver=function(){return self.hovering}
$(selector).hover(function(){self.hovering=!0},function(){self.hovering=!1})};function getSearchParams(k){var p={};location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(s,k,v){p[k]=v})
return k?p[k]:p}
$(document).ready(function(){var web_url=window.location.href;var tag=getSearchParams('tag');console.log(tag);if(typeof(tag)!=='undefined'){$('.page-list .js-search-link').removeClass('js-search-link')}
var $searchBox=$('#pos_query_top');var searchURL=$('#searchbox').attr('data-search-controller-url');$.widget('prestashop.psBlockSearchAutocomplete',$.ui.autocomplete,{_renderItem:function(ul,product){if(possearch_image){return $("<li>").append($("<a href= "+product.product_link+">").append($('<img src="'+product.ajaxsearchimage+'" alt="" />')).append($("<span>").html(product.pname).addClass("product"))).appendTo(ul)}else{return $("<li>").append($("<a href= "+product.product_link+">").append($("<span>").html(product.pname).addClass("product"))).appendTo(ul)}}});$searchBox.psBlockSearchAutocomplete({source:function(query,response){$.post(searchURL,{s:query.term,resultsPerPage:possearch_number,id_lang:id_lang,id_category:$('select[name=poscats]').val()},null,'json').then(function(resp){response(resp.products)}).fail(response)},select:function(event,ui){var url=ui.item.url;window.location.href=url},})});var posCompare={addCompare:function(obj,id){$.ajax({type:'POST',url:baseDir+'module/poscompare/actions',dataType:'json',data:{action:'add',id:id,ajax:!0},success:function(data){poscompare.nbProducts++;$('#poscompare-nb').text(poscompare.nbProducts);var $notification=$('#poscompare-notification');$notification.addClass('content-show');$.fancybox.open([{src:'#poscompare-notification',type:'inline',}],{padding:0})},error:function(jqXHR,status,err){obj.addClass('cmp_added')}})},removeCompare:function(id){posCompare.blockUI('#poscompare-table');$.ajax({type:'POST',url:baseDir+'module/poscompare/actions',dataType:'json',data:{action:'remove',id:id,ajax:!0},success:function(data){console.log(data);$('.js-poscompare-product-'+id).remove();poscompare.nbProducts--;$('#poscompare-nb').text(poscompare.nbProducts);if(poscompare.nbProducts==0){$('#poscompare-table').remove();$('#poscompare-warning').removeClass('hidden-xs-up')}posCompare.unblockUI('#poscompare-table')}})},removeAllCompare:function(){posCompare.blockUI('#content');$.ajax({type:'POST',url:baseDir+'module/poscompare/actions',dataType:'json',data:{action:'removeAll',ajax:!0},success:function(data){$('#poscompare-nb').text(0);$('#poscompare-table').remove();$('#poscompare-warning').removeClass('hidden-xs-up');posCompare.unblockUI('#content')}})},checkCompare:function(){var target=$('.compare .poscompare-add');var compareList=poscompare.IdProducts;target.each(function(){var $id=$(this).data('id_product');var flag=!1;$.each(compareList,function(key,value){if($id==value){flag=!0}});if(flag){$(this).addClass('cmp_added')}})},blockUI:function(selector){$(selector).addClass('ar-blocked');$(selector).find('.ar-loading').remove();$(selector).append('<div class="ar-loading"><div class="ar-loading-inner"></div></div>')},unblockUI:function(selector){$(selector).find('.ar-loading').remove();$(selector).removeClass('ar-blocked')},};$(document).ready(function(){$('#poscompare-nb').text(poscompare.nbProducts);$('.cmp_added').css('background-color','red');posCompare.checkCompare();$('body').on('click','.js-poscompare-remove-all',function(event){posCompare.removeAllCompare();event.preventDefault()});$(".compare .poscompare-add").click(function(){$(this).addClass('cmp_added')})});!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):"undefined"!=typeof exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){"use strict";var b=window.Slick||{};b=function(){function c(c,d){var f,e=this;e.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:a(c),appendDots:a(c),arrows:!0,asNavFor:null,prevArrow:'<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',nextArrow:'<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(a,b){return'<button type="button" data-role="none" role="button" aria-required="false" tabindex="0">'+(b+1)+"</button>"},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},e.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},a.extend(e,e.initials),e.activeBreakpoint=null,e.animType=null,e.animProp=null,e.breakpoints=[],e.breakpointSettings=[],e.cssTransitions=!1,e.hidden="hidden",e.paused=!1,e.positionProp=null,e.respondTo=null,e.rowCount=1,e.shouldClick=!0,e.$slider=a(c),e.$slidesCache=null,e.transformType=null,e.transitionType=null,e.visibilityChange="visibilitychange",e.windowWidth=0,e.windowTimer=null,f=a(c).data("slick")||{},e.options=a.extend({},e.defaults,f,d),e.currentSlide=e.options.initialSlide,e.originalSettings=e.options,"undefined"!=typeof document.mozHidden?(e.hidden="mozHidden",e.visibilityChange="mozvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(e.hidden="webkitHidden",e.visibilityChange="webkitvisibilitychange"),e.autoPlay=a.proxy(e.autoPlay,e),e.autoPlayClear=a.proxy(e.autoPlayClear,e),e.changeSlide=a.proxy(e.changeSlide,e),e.clickHandler=a.proxy(e.clickHandler,e),e.selectHandler=a.proxy(e.selectHandler,e),e.setPosition=a.proxy(e.setPosition,e),e.swipeHandler=a.proxy(e.swipeHandler,e),e.dragHandler=a.proxy(e.dragHandler,e),e.keyHandler=a.proxy(e.keyHandler,e),e.autoPlayIterator=a.proxy(e.autoPlayIterator,e),e.instanceUid=b++,e.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,e.registerBreakpoints(),e.init(!0),e.checkResponsive(!0)}var b=0;return c}(),b.prototype.addSlide=b.prototype.slickAdd=function(b,c,d){var e=this;if("boolean"==typeof c)d=c,c=null;else if(0>c||c>=e.slideCount)return!1;e.unload(),"number"==typeof c?0===c&&0===e.$slides.length?a(b).appendTo(e.$slideTrack):d?a(b).insertBefore(e.$slides.eq(c)):a(b).insertAfter(e.$slides.eq(c)):d===!0?a(b).prependTo(e.$slideTrack):a(b).appendTo(e.$slideTrack),e.$slides=e.$slideTrack.children(this.options.slide),e.$slideTrack.children(this.options.slide).detach(),e.$slideTrack.append(e.$slides),e.$slides.each(function(b,c){a(c).attr("data-slick-index",b)}),e.$slidesCache=e.$slides,e.reinit()},b.prototype.animateHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.animate({height:b},a.options.speed)}},b.prototype.animateSlide=function(b,c){var d={},e=this;e.animateHeight(),e.options.rtl===!0&&e.options.vertical===!1&&(b=-b),e.transformsEnabled===!1?e.options.vertical===!1?e.$slideTrack.animate({left:b},e.options.speed,e.options.easing,c):e.$slideTrack.animate({top:b},e.options.speed,e.options.easing,c):e.cssTransitions===!1?(e.options.rtl===!0&&(e.currentLeft=-e.currentLeft),a({animStart:e.currentLeft}).animate({animStart:b},{duration:e.options.speed,easing:e.options.easing,step:function(a){a=Math.ceil(a),e.options.vertical===!1?(d[e.animType]="translate("+a+"px, 0px)",e.$slideTrack.css(d)):(d[e.animType]="translate(0px,"+a+"px)",e.$slideTrack.css(d))},complete:function(){c&&c.call()}})):(e.applyTransition(),b=Math.ceil(b),d[e.animType]=e.options.vertical===!1?"translate3d("+b+"px, 0px, 0px)":"translate3d(0px,"+b+"px, 0px)",e.$slideTrack.css(d),c&&setTimeout(function(){e.disableTransition(),c.call()},e.options.speed))},b.prototype.asNavFor=function(b){var c=this,d=c.options.asNavFor;d&&null!==d&&(d=a(d).not(c.$slider)),null!==d&&"object"==typeof d&&d.each(function(){var c=a(this).slick("getSlick");c.unslicked||c.slideHandler(b,!0)})},b.prototype.applyTransition=function(a){var b=this,c={};c[b.transitionType]=b.options.fade===!1?b.transformType+" "+b.options.speed+"ms "+b.options.cssEase:"opacity "+b.options.speed+"ms "+b.options.cssEase,b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.autoPlay=function(){var a=this;a.autoPlayTimer&&clearInterval(a.autoPlayTimer),a.slideCount>a.options.slidesToShow&&a.paused!==!0&&(a.autoPlayTimer=setInterval(a.autoPlayIterator,a.options.autoplaySpeed))},b.prototype.autoPlayClear=function(){var a=this;a.autoPlayTimer&&clearInterval(a.autoPlayTimer)},b.prototype.autoPlayIterator=function(){var a=this;a.options.infinite===!1?1===a.direction?(a.currentSlide+1===a.slideCount-1&&(a.direction=0),a.slideHandler(a.currentSlide+a.options.slidesToScroll)):(0===a.currentSlide-1&&(a.direction=1),a.slideHandler(a.currentSlide-a.options.slidesToScroll)):a.slideHandler(a.currentSlide+a.options.slidesToScroll)},b.prototype.buildArrows=function(){var b=this;b.options.arrows===!0&&(b.$prevArrow=a(b.options.prevArrow).addClass("slick-arrow"),b.$nextArrow=a(b.options.nextArrow).addClass("slick-arrow"),b.slideCount>b.options.slidesToShow?(b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),b.htmlExpr.test(b.options.prevArrow)&&b.$prevArrow.prependTo(b.options.appendArrows),b.htmlExpr.test(b.options.nextArrow)&&b.$nextArrow.appendTo(b.options.appendArrows),b.options.infinite!==!0&&b.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},b.prototype.buildDots=function(){var c,d,b=this;if(b.options.dots===!0&&b.slideCount>b.options.slidesToShow){for(d='<ul class="'+b.options.dotsClass+'">',c=0;c<=b.getDotCount();c+=1)d+="<li>"+b.options.customPaging.call(this,b,c)+"</li>";d+="</ul>",b.$dots=a(d).appendTo(b.options.appendDots),b.$dots.find("li").first().addClass("slick-active").attr("aria-hidden","false")}},b.prototype.buildOut=function(){var b=this;b.$slides=b.$slider.children(b.options.slide+":not(.slick-cloned)").addClass("slick-slide"),b.slideCount=b.$slides.length,b.$slides.each(function(b,c){a(c).attr("data-slick-index",b).data("originalStyling",a(c).attr("style")||"")}),b.$slidesCache=b.$slides,b.$slider.addClass("slick-slider"),b.$slideTrack=0===b.slideCount?a('<div class="slick-track"/>').appendTo(b.$slider):b.$slides.wrapAll('<div class="slick-track"/>').parent(),b.$list=b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(),b.$slideTrack.css("opacity",0),(b.options.centerMode===!0||b.options.swipeToSlide===!0)&&(b.options.slidesToScroll=1),a("img[data-lazy]",b.$slider).not("[src]").addClass("slick-loading"),b.setupInfinite(),b.buildArrows(),b.buildDots(),b.updateDots(),b.setSlideClasses("number"==typeof b.currentSlide?b.currentSlide:0),b.options.draggable===!0&&b.$list.addClass("draggable")},b.prototype.buildRows=function(){var b,c,d,e,f,g,h,a=this;if(e=document.createDocumentFragment(),g=a.$slider.children(),a.options.rows>1){for(h=a.options.slidesPerRow*a.options.rows,f=Math.ceil(g.length/h),b=0;f>b;b++){var i=document.createElement("div");for(c=0;c<a.options.rows;c++){var j=document.createElement("div");for(d=0;d<a.options.slidesPerRow;d++){var k=b*h+(c*a.options.slidesPerRow+d);g.get(k)&&j.appendChild(g.get(k))}i.appendChild(j)}e.appendChild(i)}a.$slider.html(e),a.$slider.children().children().children().css({width:100/a.options.slidesPerRow+"%",display:"inline-block"})}},b.prototype.checkResponsive=function(b,c){var e,f,g,d=this,h=!1,i=d.$slider.width(),j=window.innerWidth||a(window).width();if("window"===d.respondTo?g=j:"slider"===d.respondTo?g=i:"min"===d.respondTo&&(g=Math.min(j,i)),d.options.responsive&&d.options.responsive.length&&null!==d.options.responsive){f=null;for(e in d.breakpoints)d.breakpoints.hasOwnProperty(e)&&(d.originalSettings.mobileFirst===!1?g<d.breakpoints[e]&&(f=d.breakpoints[e]):g>d.breakpoints[e]&&(f=d.breakpoints[e]));null!==f?null!==d.activeBreakpoint?(f!==d.activeBreakpoint||c)&&(d.activeBreakpoint=f,"unslick"===d.breakpointSettings[f]?d.unslick(f):(d.options=a.extend({},d.originalSettings,d.breakpointSettings[f]),b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b)),h=f):(d.activeBreakpoint=f,"unslick"===d.breakpointSettings[f]?d.unslick(f):(d.options=a.extend({},d.originalSettings,d.breakpointSettings[f]),b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b)),h=f):null!==d.activeBreakpoint&&(d.activeBreakpoint=null,d.options=d.originalSettings,b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b),h=f),b||h===!1||d.$slider.trigger("breakpoint",[d,h])}},b.prototype.changeSlide=function(b,c){var f,g,h,d=this,e=a(b.target);switch(e.is("a")&&b.preventDefault(),e.is("li")||(e=e.closest("li")),h=0!==d.slideCount%d.options.slidesToScroll,f=h?0:(d.slideCount-d.currentSlide)%d.options.slidesToScroll,b.data.message){case"previous":g=0===f?d.options.slidesToScroll:d.options.slidesToShow-f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide-g,!1,c);break;case"next":g=0===f?d.options.slidesToScroll:f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide+g,!1,c);break;case"index":var i=0===b.data.index?0:b.data.index||e.index()*d.options.slidesToScroll;d.slideHandler(d.checkNavigable(i),!1,c),e.children().trigger("focus");break;default:return}},b.prototype.checkNavigable=function(a){var c,d,b=this;if(c=b.getNavigableIndexes(),d=0,a>c[c.length-1])a=c[c.length-1];else for(var e in c){if(a<c[e]){a=d;break}d=c[e]}return a},b.prototype.cleanUpEvents=function(){var b=this;b.options.dots&&null!==b.$dots&&(a("li",b.$dots).off("click.slick",b.changeSlide),b.options.pauseOnDotsHover===!0&&b.options.autoplay===!0&&a("li",b.$dots).off("mouseenter.slick",a.proxy(b.setPaused,b,!0)).off("mouseleave.slick",a.proxy(b.setPaused,b,!1))),b.options.arrows===!0&&b.slideCount>b.options.slidesToShow&&(b.$prevArrow&&b.$prevArrow.off("click.slick",b.changeSlide),b.$nextArrow&&b.$nextArrow.off("click.slick",b.changeSlide)),b.$list.off("touchstart.slick mousedown.slick",b.swipeHandler),b.$list.off("touchmove.slick mousemove.slick",b.swipeHandler),b.$list.off("touchend.slick mouseup.slick",b.swipeHandler),b.$list.off("touchcancel.slick mouseleave.slick",b.swipeHandler),b.$list.off("click.slick",b.clickHandler),a(document).off(b.visibilityChange,b.visibility),b.$list.off("mouseenter.slick",a.proxy(b.setPaused,b,!0)),b.$list.off("mouseleave.slick",a.proxy(b.setPaused,b,!1)),b.options.accessibility===!0&&b.$list.off("keydown.slick",b.keyHandler),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().off("click.slick",b.selectHandler),a(window).off("orientationchange.slick.slick-"+b.instanceUid,b.orientationChange),a(window).off("resize.slick.slick-"+b.instanceUid,b.resize),a("[draggable!=true]",b.$slideTrack).off("dragstart",b.preventDefault),a(window).off("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).off("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.cleanUpRows=function(){var b,a=this;a.options.rows>1&&(b=a.$slides.children().children(),b.removeAttr("style"),a.$slider.html(b))},b.prototype.clickHandler=function(a){var b=this;b.shouldClick===!1&&(a.stopImmediatePropagation(),a.stopPropagation(),a.preventDefault())},b.prototype.destroy=function(b){var c=this;c.autoPlayClear(),c.touchObject={},c.cleanUpEvents(),a(".slick-cloned",c.$slider).detach(),c.$dots&&c.$dots.remove(),c.$prevArrow&&c.$prevArrow.length&&(c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),c.htmlExpr.test(c.options.prevArrow)&&c.$prevArrow.remove()),c.$nextArrow&&c.$nextArrow.length&&(c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),c.htmlExpr.test(c.options.nextArrow)&&c.$nextArrow.remove()),c.$slides&&(c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){a(this).attr("style",a(this).data("originalStyling"))}),c.$slideTrack.children(this.options.slide).detach(),c.$slideTrack.detach(),c.$list.detach(),c.$slider.append(c.$slides)),c.cleanUpRows(),c.$slider.removeClass("slick-slider"),c.$slider.removeClass("slick-initialized"),c.unslicked=!0,b||c.$slider.trigger("destroy",[c])},b.prototype.disableTransition=function(a){var b=this,c={};c[b.transitionType]="",b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.fadeSlide=function(a,b){var c=this;c.cssTransitions===!1?(c.$slides.eq(a).css({zIndex:c.options.zIndex}),c.$slides.eq(a).animate({opacity:1},c.options.speed,c.options.easing,b)):(c.applyTransition(a),c.$slides.eq(a).css({opacity:1,zIndex:c.options.zIndex}),b&&setTimeout(function(){c.disableTransition(a),b.call()},c.options.speed))},b.prototype.fadeSlideOut=function(a){var b=this;b.cssTransitions===!1?b.$slides.eq(a).animate({opacity:0,zIndex:b.options.zIndex-2},b.options.speed,b.options.easing):(b.applyTransition(a),b.$slides.eq(a).css({opacity:0,zIndex:b.options.zIndex-2}))},b.prototype.filterSlides=b.prototype.slickFilter=function(a){var b=this;null!==a&&(b.unload(),b.$slideTrack.children(this.options.slide).detach(),b.$slidesCache.filter(a).appendTo(b.$slideTrack),b.reinit())},b.prototype.getCurrent=b.prototype.slickCurrentSlide=function(){var a=this;return a.currentSlide},b.prototype.getDotCount=function(){var a=this,b=0,c=0,d=0;if(a.options.infinite===!0)for(;b<a.slideCount;)++d,b=c+a.options.slidesToShow,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;else if(a.options.centerMode===!0)d=a.slideCount;else for(;b<a.slideCount;)++d,b=c+a.options.slidesToShow,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;return d-1},b.prototype.getLeft=function(a){var c,d,f,b=this,e=0;return b.slideOffset=0,d=b.$slides.first().outerHeight(!0),b.options.infinite===!0?(b.slideCount>b.options.slidesToShow&&(b.slideOffset=-1*b.slideWidth*b.options.slidesToShow,e=-1*d*b.options.slidesToShow),0!==b.slideCount%b.options.slidesToScroll&&a+b.options.slidesToScroll>b.slideCount&&b.slideCount>b.options.slidesToShow&&(a>b.slideCount?(b.slideOffset=-1*(b.options.slidesToShow-(a-b.slideCount))*b.slideWidth,e=-1*(b.options.slidesToShow-(a-b.slideCount))*d):(b.slideOffset=-1*b.slideCount%b.options.slidesToScroll*b.slideWidth,e=-1*b.slideCount%b.options.slidesToScroll*d))):a+b.options.slidesToShow>b.slideCount&&(b.slideOffset=(a+b.options.slidesToShow-b.slideCount)*b.slideWidth,e=(a+b.options.slidesToShow-b.slideCount)*d),b.slideCount<=b.options.slidesToShow&&(b.slideOffset=0,e=0),b.options.centerMode===!0&&b.options.infinite===!0?b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)-b.slideWidth:b.options.centerMode===!0&&(b.slideOffset=0,b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)),c=b.options.vertical===!1?-1*a*b.slideWidth+b.slideOffset:-1*a*d+e,b.options.variableWidth===!0&&(f=b.slideCount<=b.options.slidesToShow||b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow),c=f[0]?-1*f[0].offsetLeft:0,b.options.centerMode===!0&&(f=b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow+1),c=f[0]?-1*f[0].offsetLeft:0,c+=(b.$list.width()-f.outerWidth())/2)),c},b.prototype.getOption=b.prototype.slickGetOption=function(a){var b=this;return b.options[a]},b.prototype.getNavigableIndexes=function(){var e,a=this,b=0,c=0,d=[];for(a.options.infinite===!1?e=a.slideCount:(b=-1*a.options.slidesToScroll,c=-1*a.options.slidesToScroll,e=2*a.slideCount);e>b;)d.push(b),b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;return d},b.prototype.getSlick=function(){return this},b.prototype.getSlideCount=function(){var c,d,e,b=this;return e=b.options.centerMode===!0?b.slideWidth*Math.floor(b.options.slidesToShow/2):0,b.options.swipeToSlide===!0?(b.$slideTrack.find(".slick-slide").each(function(c,f){return f.offsetLeft-e+a(f).outerWidth()/2>-1*b.swipeLeft?(d=f,!1):void 0}),c=Math.abs(a(d).attr("data-slick-index")-b.currentSlide)||1):b.options.slidesToScroll},b.prototype.goTo=b.prototype.slickGoTo=function(a,b){var c=this;c.changeSlide({data:{message:"index",index:parseInt(a)}},b)},b.prototype.init=function(b){var c=this;a(c.$slider).hasClass("slick-initialized")||(a(c.$slider).addClass("slick-initialized"),c.buildRows(),c.buildOut(),c.setProps(),c.startLoad(),c.loadSlider(),c.initializeEvents(),c.updateArrows(),c.updateDots()),b&&c.$slider.trigger("init",[c]),c.options.accessibility===!0&&c.initADA()},b.prototype.initArrowEvents=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.on("click.slick",{message:"previous"},a.changeSlide),a.$nextArrow.on("click.slick",{message:"next"},a.changeSlide))},b.prototype.initDotEvents=function(){var b=this;b.options.dots===!0&&b.slideCount>b.options.slidesToShow&&a("li",b.$dots).on("click.slick",{message:"index"},b.changeSlide),b.options.dots===!0&&b.options.pauseOnDotsHover===!0&&b.options.autoplay===!0&&a("li",b.$dots).on("mouseenter.slick",a.proxy(b.setPaused,b,!0)).on("mouseleave.slick",a.proxy(b.setPaused,b,!1))},b.prototype.initializeEvents=function(){var b=this;b.initArrowEvents(),b.initDotEvents(),b.$list.on("touchstart.slick mousedown.slick",{action:"start"},b.swipeHandler),b.$list.on("touchmove.slick mousemove.slick",{action:"move"},b.swipeHandler),b.$list.on("touchend.slick mouseup.slick",{action:"end"},b.swipeHandler),b.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},b.swipeHandler),b.$list.on("click.slick",b.clickHandler),a(document).on(b.visibilityChange,a.proxy(b.visibility,b)),b.$list.on("mouseenter.slick",a.proxy(b.setPaused,b,!0)),b.$list.on("mouseleave.slick",a.proxy(b.setPaused,b,!1)),b.options.accessibility===!0&&b.$list.on("keydown.slick",b.keyHandler),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().on("click.slick",b.selectHandler),a(window).on("orientationchange.slick.slick-"+b.instanceUid,a.proxy(b.orientationChange,b)),a(window).on("resize.slick.slick-"+b.instanceUid,a.proxy(b.resize,b)),a("[draggable!=true]",b.$slideTrack).on("dragstart",b.preventDefault),a(window).on("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).on("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.initUI=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.show(),a.$nextArrow.show()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.show(),a.options.autoplay===!0&&a.autoPlay()},b.prototype.keyHandler=function(a){var b=this;a.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===a.keyCode&&b.options.accessibility===!0?b.changeSlide({data:{message:"previous"}}):39===a.keyCode&&b.options.accessibility===!0&&b.changeSlide({data:{message:"next"}}))},b.prototype.lazyLoad=function(){function g(b){a("img[data-lazy]",b).each(function(){var b=a(this),c=a(this).attr("data-lazy"),d=document.createElement("img");d.onload=function(){b.animate({opacity:0},100,function(){b.attr("src",c).animate({opacity:1},200,function(){b.removeAttr("data-lazy").removeClass("slick-loading")})})},d.src=c})}var c,d,e,f,b=this;b.options.centerMode===!0?b.options.infinite===!0?(e=b.currentSlide+(b.options.slidesToShow/2+1),f=e+b.options.slidesToShow+2):(e=Math.max(0,b.currentSlide-(b.options.slidesToShow/2+1)),f=2+(b.options.slidesToShow/2+1)+b.currentSlide):(e=b.options.infinite?b.options.slidesToShow+b.currentSlide:b.currentSlide,f=e+b.options.slidesToShow,b.options.fade===!0&&(e>0&&e--,f<=b.slideCount&&f++)),c=b.$slider.find(".slick-slide").slice(e,f),g(c),b.slideCount<=b.options.slidesToShow?(d=b.$slider.find(".slick-slide"),g(d)):b.currentSlide>=b.slideCount-b.options.slidesToShow?(d=b.$slider.find(".slick-cloned").slice(0,b.options.slidesToShow),g(d)):0===b.currentSlide&&(d=b.$slider.find(".slick-cloned").slice(-1*b.options.slidesToShow),g(d))},b.prototype.loadSlider=function(){var a=this;a.setPosition(),a.$slideTrack.css({opacity:1}),a.$slider.removeClass("slick-loading"),a.initUI(),"progressive"===a.options.lazyLoad&&a.progressiveLazyLoad()},b.prototype.next=b.prototype.slickNext=function(){var a=this;a.changeSlide({data:{message:"next"}})},b.prototype.orientationChange=function(){var a=this;a.checkResponsive(),a.setPosition()},b.prototype.pause=b.prototype.slickPause=function(){var a=this;a.autoPlayClear(),a.paused=!0},b.prototype.play=b.prototype.slickPlay=function(){var a=this;a.paused=!1,a.autoPlay()},b.prototype.postSlide=function(a){var b=this;b.$slider.trigger("afterChange",[b,a]),b.animating=!1,b.setPosition(),b.swipeLeft=null,b.options.autoplay===!0&&b.paused===!1&&b.autoPlay(),b.options.accessibility===!0&&b.initADA()},b.prototype.prev=b.prototype.slickPrev=function(){var a=this;a.changeSlide({data:{message:"previous"}})},b.prototype.preventDefault=function(a){a.preventDefault()},b.prototype.progressiveLazyLoad=function(){var c,d,b=this;c=a("img[data-lazy]",b.$slider).length,c>0&&(d=a("img[data-lazy]",b.$slider).first(),d.attr("src",d.attr("data-lazy")).removeClass("slick-loading").load(function(){d.removeAttr("data-lazy"),b.progressiveLazyLoad(),b.options.adaptiveHeight===!0&&b.setPosition()}).error(function(){d.removeAttr("data-lazy"),b.progressiveLazyLoad()}))},b.prototype.refresh=function(b){var c=this,d=c.currentSlide;c.destroy(!0),a.extend(c,c.initials,{currentSlide:d}),c.init(),b||c.changeSlide({data:{message:"index",index:d}},!1)},b.prototype.registerBreakpoints=function(){var c,d,e,b=this,f=b.options.responsive||null;if("array"===a.type(f)&&f.length){b.respondTo=b.options.respondTo||"window";for(c in f)if(e=b.breakpoints.length-1,d=f[c].breakpoint,f.hasOwnProperty(c)){for(;e>=0;)b.breakpoints[e]&&b.breakpoints[e]===d&&b.breakpoints.splice(e,1),e--;b.breakpoints.push(d),b.breakpointSettings[d]=f[c].settings}b.breakpoints.sort(function(a,c){return b.options.mobileFirst?a-c:c-a})}},b.prototype.reinit=function(){var b=this;b.$slides=b.$slideTrack.children(b.options.slide).addClass("slick-slide"),b.slideCount=b.$slides.length,b.currentSlide>=b.slideCount&&0!==b.currentSlide&&(b.currentSlide=b.currentSlide-b.options.slidesToScroll),b.slideCount<=b.options.slidesToShow&&(b.currentSlide=0),b.registerBreakpoints(),b.setProps(),b.setupInfinite(),b.buildArrows(),b.updateArrows(),b.initArrowEvents(),b.buildDots(),b.updateDots(),b.initDotEvents(),b.checkResponsive(!1,!0),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().on("click.slick",b.selectHandler),b.setSlideClasses(0),b.setPosition(),b.$slider.trigger("reInit",[b]),b.options.autoplay===!0&&b.focusHandler()},b.prototype.resize=function(){var b=this;a(window).width()!==b.windowWidth&&(clearTimeout(b.windowDelay),b.windowDelay=window.setTimeout(function(){b.windowWidth=a(window).width(),b.checkResponsive(),b.unslicked||b.setPosition()},50))},b.prototype.removeSlide=b.prototype.slickRemove=function(a,b,c){var d=this;return"boolean"==typeof a?(b=a,a=b===!0?0:d.slideCount-1):a=b===!0?--a:a,d.slideCount<1||0>a||a>d.slideCount-1?!1:(d.unload(),c===!0?d.$slideTrack.children().remove():d.$slideTrack.children(this.options.slide).eq(a).remove(),d.$slides=d.$slideTrack.children(this.options.slide),d.$slideTrack.children(this.options.slide).detach(),d.$slideTrack.append(d.$slides),d.$slidesCache=d.$slides,d.reinit(),void 0)},b.prototype.setCSS=function(a){var d,e,b=this,c={};b.options.rtl===!0&&(a=-a),d="left"==b.positionProp?Math.ceil(a)+"px":"0px",e="top"==b.positionProp?Math.ceil(a)+"px":"0px",c[b.positionProp]=a,b.transformsEnabled===!1?b.$slideTrack.css(c):(c={},b.cssTransitions===!1?(c[b.animType]="translate("+d+", "+e+")",b.$slideTrack.css(c)):(c[b.animType]="translate3d("+d+", "+e+", 0px)",b.$slideTrack.css(c)))},b.prototype.setDimensions=function(){var a=this;a.options.vertical===!1?a.options.centerMode===!0&&a.$list.css({padding:"0px "+a.options.centerPadding}):(a.$list.height(a.$slides.first().outerHeight(!0)*a.options.slidesToShow),a.options.centerMode===!0&&a.$list.css({padding:a.options.centerPadding+" 0px"})),a.listWidth=a.$list.width(),a.listHeight=a.$list.height(),a.options.vertical===!1&&a.options.variableWidth===!1?(a.slideWidth=Math.ceil(a.listWidth/a.options.slidesToShow),a.$slideTrack.width(Math.ceil(a.slideWidth*a.$slideTrack.children(".slick-slide").length))):a.options.variableWidth===!0?a.$slideTrack.width(5e3*a.slideCount):(a.slideWidth=Math.ceil(a.listWidth),a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0)*a.$slideTrack.children(".slick-slide").length)));var b=a.$slides.first().outerWidth(!0)-a.$slides.first().width();a.options.variableWidth===!1&&a.$slideTrack.children(".slick-slide").width(a.slideWidth-b)},b.prototype.setFade=function(){var c,b=this;b.$slides.each(function(d,e){c=-1*b.slideWidth*d,b.options.rtl===!0?a(e).css({position:"relative",right:c,top:0,zIndex:b.options.zIndex-2,opacity:0}):a(e).css({position:"relative",left:c,top:0,zIndex:b.options.zIndex-2,opacity:0})}),b.$slides.eq(b.currentSlide).css({zIndex:b.options.zIndex-1,opacity:1})},b.prototype.setHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.css("height",b)}},b.prototype.setOption=b.prototype.slickSetOption=function(b,c,d){var f,g,e=this;if("responsive"===b&&"array"===a.type(c))for(g in c)if("array"!==a.type(e.options.responsive))e.options.responsive=[c[g]];else{for(f=e.options.responsive.length-1;f>=0;)e.options.responsive[f].breakpoint===c[g].breakpoint&&e.options.responsive.splice(f,1),f--;e.options.responsive.push(c[g])}else e.options[b]=c;d===!0&&(e.unload(),e.reinit())},b.prototype.setPosition=function(){var a=this;a.setDimensions(),a.setHeight(),a.options.fade===!1?a.setCSS(a.getLeft(a.currentSlide)):a.setFade(),a.$slider.trigger("setPosition",[a])},b.prototype.setProps=function(){var a=this,b=document.body.style;a.positionProp=a.options.vertical===!0?"top":"left","top"===a.positionProp?a.$slider.addClass("slick-vertical"):a.$slider.removeClass("slick-vertical"),(void 0!==b.WebkitTransition||void 0!==b.MozTransition||void 0!==b.msTransition)&&a.options.useCSS===!0&&(a.cssTransitions=!0),a.options.fade&&("number"==typeof a.options.zIndex?a.options.zIndex<3&&(a.options.zIndex=3):a.options.zIndex=a.defaults.zIndex),void 0!==b.OTransform&&(a.animType="OTransform",a.transformType="-o-transform",a.transitionType="OTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.MozTransform&&(a.animType="MozTransform",a.transformType="-moz-transform",a.transitionType="MozTransition",void 0===b.perspectiveProperty&&void 0===b.MozPerspective&&(a.animType=!1)),void 0!==b.webkitTransform&&(a.animType="webkitTransform",a.transformType="-webkit-transform",a.transitionType="webkitTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.msTransform&&(a.animType="msTransform",a.transformType="-ms-transform",a.transitionType="msTransition",void 0===b.msTransform&&(a.animType=!1)),void 0!==b.transform&&a.animType!==!1&&(a.animType="transform",a.transformType="transform",a.transitionType="transition"),a.transformsEnabled=null!==a.animType&&a.animType!==!1},b.prototype.setSlideClasses=function(a){var c,d,e,f,b=this;d=b.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),b.$slides.eq(a).addClass("slick-current"),b.options.centerMode===!0?(c=Math.floor(b.options.slidesToShow/2),b.options.infinite===!0&&(a>=c&&a<=b.slideCount-1-c?b.$slides.slice(a-c,a+c+1).addClass("slick-active").attr("aria-hidden","false"):(e=b.options.slidesToShow+a,d.slice(e-c+1,e+c+2).addClass("slick-active").attr("aria-hidden","false")),0===a?d.eq(d.length-1-b.options.slidesToShow).addClass("slick-center"):a===b.slideCount-1&&d.eq(b.options.slidesToShow).addClass("slick-center")),b.$slides.eq(a).addClass("slick-center")):a>=0&&a<=b.slideCount-b.options.slidesToShow?b.$slides.slice(a,a+b.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):d.length<=b.options.slidesToShow?d.addClass("slick-active").attr("aria-hidden","false"):(f=b.slideCount%b.options.slidesToShow,e=b.options.infinite===!0?b.options.slidesToShow+a:a,b.options.slidesToShow==b.options.slidesToScroll&&b.slideCount-a<b.options.slidesToShow?d.slice(e-(b.options.slidesToShow-f),e+f).addClass("slick-active").attr("aria-hidden","false"):d.slice(e,e+b.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false")),"ondemand"===b.options.lazyLoad&&b.lazyLoad()},b.prototype.setupInfinite=function(){var c,d,e,b=this;if(b.options.fade===!0&&(b.options.centerMode=!1),b.options.infinite===!0&&b.options.fade===!1&&(d=null,b.slideCount>b.options.slidesToShow)){for(e=b.options.centerMode===!0?b.options.slidesToShow+1:b.options.slidesToShow,c=b.slideCount;c>b.slideCount-e;c-=1)d=c-1,a(b.$slides[d]).clone(!0).attr("id","").attr("data-slick-index",d-b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned");for(c=0;e>c;c+=1)d=c,a(b.$slides[d]).clone(!0).attr("id","").attr("data-slick-index",d+b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned");b.$slideTrack.find(".slick-cloned").find("[id]").each(function(){a(this).attr("id","")})}},b.prototype.setPaused=function(a){var b=this;b.options.autoplay===!0&&b.options.pauseOnHover===!0&&(b.paused=a,a?b.autoPlayClear():b.autoPlay())},b.prototype.selectHandler=function(b){var c=this,d=a(b.target).is(".slick-slide")?a(b.target):a(b.target).parents(".slick-slide"),e=parseInt(d.attr("data-slick-index"));return e||(e=0),c.slideCount<=c.options.slidesToShow?(c.setSlideClasses(e),c.asNavFor(e),void 0):(c.slideHandler(e),void 0)},b.prototype.slideHandler=function(a,b,c){var d,e,f,g,h=null,i=this;return b=b||!1,i.animating===!0&&i.options.waitForAnimate===!0||i.options.fade===!0&&i.currentSlide===a||i.slideCount<=i.options.slidesToShow?void 0:(b===!1&&i.asNavFor(a),d=a,h=i.getLeft(d),g=i.getLeft(i.currentSlide),i.currentLeft=null===i.swipeLeft?g:i.swipeLeft,i.options.infinite===!1&&i.options.centerMode===!1&&(0>a||a>i.getDotCount()*i.options.slidesToScroll)?(i.options.fade===!1&&(d=i.currentSlide,c!==!0?i.animateSlide(g,function(){i.postSlide(d)}):i.postSlide(d)),void 0):i.options.infinite===!1&&i.options.centerMode===!0&&(0>a||a>i.slideCount-i.options.slidesToScroll)?(i.options.fade===!1&&(d=i.currentSlide,c!==!0?i.animateSlide(g,function(){i.postSlide(d)}):i.postSlide(d)),void 0):(i.options.autoplay===!0&&clearInterval(i.autoPlayTimer),e=0>d?0!==i.slideCount%i.options.slidesToScroll?i.slideCount-i.slideCount%i.options.slidesToScroll:i.slideCount+d:d>=i.slideCount?0!==i.slideCount%i.options.slidesToScroll?0:d-i.slideCount:d,i.animating=!0,i.$slider.trigger("beforeChange",[i,i.currentSlide,e]),f=i.currentSlide,i.currentSlide=e,i.setSlideClasses(i.currentSlide),i.updateDots(),i.updateArrows(),i.options.fade===!0?(c!==!0?(i.fadeSlideOut(f),i.fadeSlide(e,function(){i.postSlide(e)})):i.postSlide(e),i.animateHeight(),void 0):(c!==!0?i.animateSlide(h,function(){i.postSlide(e)}):i.postSlide(e),void 0)))},b.prototype.startLoad=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.hide(),a.$nextArrow.hide()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.hide(),a.$slider.addClass("slick-loading")},b.prototype.swipeDirection=function(){var a,b,c,d,e=this;return a=e.touchObject.startX-e.touchObject.curX,b=e.touchObject.startY-e.touchObject.curY,c=Math.atan2(b,a),d=Math.round(180*c/Math.PI),0>d&&(d=360-Math.abs(d)),45>=d&&d>=0?e.options.rtl===!1?"left":"right":360>=d&&d>=315?e.options.rtl===!1?"left":"right":d>=135&&225>=d?e.options.rtl===!1?"right":"left":e.options.verticalSwiping===!0?d>=35&&135>=d?"left":"right":"vertical"},b.prototype.swipeEnd=function(){var c,b=this;if(b.dragging=!1,b.shouldClick=b.touchObject.swipeLength>10?!1:!0,void 0===b.touchObject.curX)return!1;if(b.touchObject.edgeHit===!0&&b.$slider.trigger("edge",[b,b.swipeDirection()]),b.touchObject.swipeLength>=b.touchObject.minSwipe)switch(b.swipeDirection()){case"left":c=b.options.swipeToSlide?b.checkNavigable(b.currentSlide+b.getSlideCount()):b.currentSlide+b.getSlideCount(),b.slideHandler(c),b.currentDirection=0,b.touchObject={},b.$slider.trigger("swipe",[b,"left"]);break;case"right":c=b.options.swipeToSlide?b.checkNavigable(b.currentSlide-b.getSlideCount()):b.currentSlide-b.getSlideCount(),b.slideHandler(c),b.currentDirection=1,b.touchObject={},b.$slider.trigger("swipe",[b,"right"])}else b.touchObject.startX!==b.touchObject.curX&&(b.slideHandler(b.currentSlide),b.touchObject={})},b.prototype.swipeHandler=function(a){var b=this;if(!(b.options.swipe===!1||"ontouchend"in document&&b.options.swipe===!1||b.options.draggable===!1&&-1!==a.type.indexOf("mouse")))switch(b.touchObject.fingerCount=a.originalEvent&&void 0!==a.originalEvent.touches?a.originalEvent.touches.length:1,b.touchObject.minSwipe=b.listWidth/b.options.touchThreshold,b.options.verticalSwiping===!0&&(b.touchObject.minSwipe=b.listHeight/b.options.touchThreshold),a.data.action){case"start":b.swipeStart(a);break;case"move":b.swipeMove(a);break;case"end":b.swipeEnd(a)}},b.prototype.swipeMove=function(a){var d,e,f,g,h,b=this;return h=void 0!==a.originalEvent?a.originalEvent.touches:null,!b.dragging||h&&1!==h.length?!1:(d=b.getLeft(b.currentSlide),b.touchObject.curX=void 0!==h?h[0].pageX:a.clientX,b.touchObject.curY=void 0!==h?h[0].pageY:a.clientY,b.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(b.touchObject.curX-b.touchObject.startX,2))),b.options.verticalSwiping===!0&&(b.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(b.touchObject.curY-b.touchObject.startY,2)))),e=b.swipeDirection(),"vertical"!==e?(void 0!==a.originalEvent&&b.touchObject.swipeLength>4&&a.preventDefault(),g=(b.options.rtl===!1?1:-1)*(b.touchObject.curX>b.touchObject.startX?1:-1),b.options.verticalSwiping===!0&&(g=b.touchObject.curY>b.touchObject.startY?1:-1),f=b.touchObject.swipeLength,b.touchObject.edgeHit=!1,b.options.infinite===!1&&(0===b.currentSlide&&"right"===e||b.currentSlide>=b.getDotCount()&&"left"===e)&&(f=b.touchObject.swipeLength*b.options.edgeFriction,b.touchObject.edgeHit=!0),b.swipeLeft=b.options.vertical===!1?d+f*g:d+f*(b.$list.height()/b.listWidth)*g,b.options.verticalSwiping===!0&&(b.swipeLeft=d+f*g),b.options.fade===!0||b.options.touchMove===!1?!1:b.animating===!0?(b.swipeLeft=null,!1):(b.setCSS(b.swipeLeft),void 0)):void 0)},b.prototype.swipeStart=function(a){var c,b=this;return 1!==b.touchObject.fingerCount||b.slideCount<=b.options.slidesToShow?(b.touchObject={},!1):(void 0!==a.originalEvent&&void 0!==a.originalEvent.touches&&(c=a.originalEvent.touches[0]),b.touchObject.startX=b.touchObject.curX=void 0!==c?c.pageX:a.clientX,b.touchObject.startY=b.touchObject.curY=void 0!==c?c.pageY:a.clientY,b.dragging=!0,void 0)},b.prototype.unfilterSlides=b.prototype.slickUnfilter=function(){var a=this;null!==a.$slidesCache&&(a.unload(),a.$slideTrack.children(this.options.slide).detach(),a.$slidesCache.appendTo(a.$slideTrack),a.reinit())},b.prototype.unload=function(){var b=this;a(".slick-cloned",b.$slider).remove(),b.$dots&&b.$dots.remove(),b.$prevArrow&&b.htmlExpr.test(b.options.prevArrow)&&b.$prevArrow.remove(),b.$nextArrow&&b.htmlExpr.test(b.options.nextArrow)&&b.$nextArrow.remove(),b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},b.prototype.unslick=function(a){var b=this;b.$slider.trigger("unslick",[b,a]),b.destroy()},b.prototype.updateArrows=function(){var b,a=this;b=Math.floor(a.options.slidesToShow/2),a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&!a.options.infinite&&(a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===a.currentSlide?(a.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):a.currentSlide>=a.slideCount-a.options.slidesToShow&&a.options.centerMode===!1?(a.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):a.currentSlide>=a.slideCount-1&&a.options.centerMode===!0&&(a.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},b.prototype.updateDots=function(){var a=this;null!==a.$dots&&(a.$dots.find("li").removeClass("slick-active").attr("aria-hidden","true"),a.$dots.find("li").eq(Math.floor(a.currentSlide/a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden","false"))},b.prototype.visibility=function(){var a=this;document[a.hidden]?(a.paused=!0,a.autoPlayClear()):a.options.autoplay===!0&&(a.paused=!1,a.autoPlay())},b.prototype.initADA=function(){var b=this;b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),b.$slideTrack.attr("role","listbox"),b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function(c){a(this).attr({role:"option","aria-describedby":"slick-slide"+b.instanceUid+c})}),null!==b.$dots&&b.$dots.attr("role","tablist").find("li").each(function(c){a(this).attr({role:"presentation","aria-selected":"false","aria-controls":"navigation"+b.instanceUid+c,id:"slick-slide"+b.instanceUid+c})}).first().attr("aria-selected","true").end().find("button").attr("role","button").end().closest("div").attr("role","toolbar"),b.activateADA()},b.prototype.activateADA=function(){var a=this,b=a.$slider.find("*").is(":focus");a.$slideTrack.find(".slick-active").attr({"aria-hidden":"false",tabindex:"0"}).find("a, input, button, select").attr({tabindex:"0"}),b&&a.$slideTrack.find(".slick-active").focus()},b.prototype.focusHandler=function(){var b=this;b.$slider.on("focus.slick blur.slick","*",function(c){c.stopImmediatePropagation();var d=a(this);setTimeout(function(){b.isPlay&&(d.is(":focus")?(b.autoPlayClear(),b.paused=!0):(b.paused=!1,b.autoPlay()))},0)})},a.fn.slick=function(){var g,a=this,c=arguments[0],d=Array.prototype.slice.call(arguments,1),e=a.length,f=0;for(f;e>f;f++)if("object"==typeof c||"undefined"==typeof c?a[f].slick=new b(a[f],c):g=a[f].slick[c].apply(a[f].slick,d),"undefined"!=typeof g)return g;return a}});jQuery(document).ready(function($){var selectSlider=$('.home_blog_post_area');if(!!$.prototype.slick)
selectSlider.find('.home_blog_post_inner.carousel').slick({infinite:!0,dots:!1,autoplay:!1,infinite:!1,slide:'.blog_post',slidesToShow:3,slidesToScroll:1,arrows:!1,responsive:[{breakpoint:1200,settings:{slidesToShow:3,}},{breakpoint:993,settings:{slidesToShow:3,}},{breakpoint:769,settings:{slidesToShow:2,}},{breakpoint:641,settings:{slidesToShow:2,}},{breakpoint:481,settings:{slidesToShow:1,}}]});var selectSlider=$('.post_thumbnail');if(!!$.prototype.slick)
selectSlider.find('.post_format_items.carousel').slick({infinite:!0,dots:!1,autoplay:!1,slide:'.item',slidesToShow:1,slidesToScroll:1,arrows:!0,nextArrow:'<i class="slick-next arrow_carrot-right"></i>',prevArrow:'<i class="slick-prev arrow_carrot-left"></i>',})});/*!
 * Validator v0.10.1 for Bootstrap 3, by @1000hz
 * Copyright 2016 Cina Saffary
 * Licensed under http://opensource.org/licenses/MIT
 *
 * https://github.com/1000hz/bootstrap-validator
 */
+function(a){"use strict";function b(b){return b.is('[type="checkbox"]')?b.prop("checked"):b.is('[type="radio"]')?!!a('[name="'+b.attr("name")+'"]:checked').length:a.trim(b.val())}function c(b){return this.each(function(){var c=a(this),e=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b),f=c.data("bs.validator");(f||"destroy"!=b)&&(f||c.data("bs.validator",f=new d(this,e)),"string"==typeof b&&f[b]())})}var d=function(c,e){this.options=e,this.$element=a(c),this.$inputs=this.$element.find(d.INPUT_SELECTOR),this.$btn=a('button[type="submit"], input[type="submit"]').filter('[form="'+this.$element.attr("id")+'"]').add(this.$element.find('input[type="submit"], button[type="submit"]')),e.errors=a.extend({},d.DEFAULTS.errors,e.errors);for(var f in e.custom)if(!e.errors[f])throw new Error("Missing default error message for custom validator: "+f);a.extend(d.VALIDATORS,e.custom),this.$element.attr("novalidate",!0),this.toggleSubmit(),this.$element.on("input.bs.validator change.bs.validator focusout.bs.validator",d.INPUT_SELECTOR,a.proxy(this.onInput,this)),this.$element.on("submit.bs.validator",a.proxy(this.onSubmit,this)),this.$element.find("[data-match]").each(function(){var c=a(this),d=c.data("match");a(d).on("input.bs.validator",function(){b(c)&&c.trigger("input.bs.validator")})})};d.INPUT_SELECTOR=':input:not([type="submit"], button):enabled:visible',d.FOCUS_OFFSET=20,d.DEFAULTS={delay:500,html:!1,disable:!0,focus:!0,custom:{},errors:{match:"Does not match",minlength:"Not long enough"},feedback:{success:"glyphicon-ok",error:"glyphicon-remove"}},d.VALIDATORS={"native":function(a){var b=a[0];return b.checkValidity?b.checkValidity():!0},match:function(b){var c=b.data("match");return!b.val()||b.val()===a(c).val()},minlength:function(a){var b=a.data("minlength");return!a.val()||a.val().length>=b}},d.prototype.onInput=function(b){var c=this,d=a(b.target),e="focusout"!==b.type;this.validateInput(d,e).done(function(){c.toggleSubmit()})},d.prototype.validateInput=function(c,d){var e=b(c),f=c.data("bs.validator.previous"),g=c.data("bs.validator.errors");if(f===e)return a.Deferred().resolve();c.data("bs.validator.previous",e),c.is('[type="radio"]')&&(c=this.$element.find('input[name="'+c.attr("name")+'"]'));var h=a.Event("validate.bs.validator",{relatedTarget:c[0]});if(this.$element.trigger(h),!h.isDefaultPrevented()){var i=this;return this.runValidators(c).done(function(b){c.data("bs.validator.errors",b),b.length?d?i.defer(c,i.showErrors):i.showErrors(c):i.clearErrors(c),g&&b.toString()===g.toString()||(h=b.length?a.Event("invalid.bs.validator",{relatedTarget:c[0],detail:b}):a.Event("valid.bs.validator",{relatedTarget:c[0],detail:g}),i.$element.trigger(h)),i.toggleSubmit(),i.$element.trigger(a.Event("validated.bs.validator",{relatedTarget:c[0]}))})}},d.prototype.runValidators=function(c){function e(a){return c.data(a+"-error")||c.data("error")||"native"==a&&c[0].validationMessage||h.errors[a]}var f=[],g=a.Deferred(),h=this.options;return c.data("bs.validator.deferred")&&c.data("bs.validator.deferred").reject(),c.data("bs.validator.deferred",g),a.each(d.VALIDATORS,a.proxy(function(a,d){if((b(c)||c.attr("required"))&&(c.data(a)||"native"==a)&&!d.call(this,c)){var g=e(a);!~f.indexOf(g)&&f.push(g)}},this)),!f.length&&b(c)&&c.data("remote")?this.defer(c,function(){var d={};d[c.attr("name")]=b(c),a.get(c.data("remote"),d).fail(function(a,b,c){f.push(e("remote")||c)}).always(function(){g.resolve(f)})}):g.resolve(f),g.promise()},d.prototype.validate=function(){var b=this;return a.when(this.$inputs.map(function(){return b.validateInput(a(this),!1)})).then(function(){b.toggleSubmit(),b.$btn.hasClass("disabled")&&b.focusError()}),this},d.prototype.focusError=function(){if(this.options.focus){var b=a(".has-error:first :input");a(document.body).animate({scrollTop:b.offset().top-d.FOCUS_OFFSET},250),b.focus()}},d.prototype.showErrors=function(b){var c=this.options.html?"html":"text",d=b.data("bs.validator.errors"),e=b.closest(".form-group"),f=e.find(".help-block.with-errors"),g=e.find(".form-control-feedback");d.length&&(d=a("<ul/>").addClass("list-unstyled").append(a.map(d,function(b){return a("<li/>")[c](b)})),void 0===f.data("bs.validator.originalContent")&&f.data("bs.validator.originalContent",f.html()),f.empty().append(d),e.addClass("has-error has-danger"),e.hasClass("has-feedback")&&g.removeClass(this.options.feedback.success)&&g.addClass(this.options.feedback.error)&&e.removeClass("has-success"))},d.prototype.clearErrors=function(a){var c=a.closest(".form-group"),d=c.find(".help-block.with-errors"),e=c.find(".form-control-feedback");d.html(d.data("bs.validator.originalContent")),c.removeClass("has-error has-danger"),c.hasClass("has-feedback")&&e.removeClass(this.options.feedback.error)&&b(a)&&e.addClass(this.options.feedback.success)&&c.addClass("has-success")},d.prototype.hasErrors=function(){function b(){return!!(a(this).data("bs.validator.errors")||[]).length}return!!this.$inputs.filter(b).length},d.prototype.isIncomplete=function(){function c(){return!b(a(this))}return!!this.$inputs.filter("[required]").filter(c).length},d.prototype.onSubmit=function(a){this.validate(),this.$btn.hasClass("disabled")&&a.preventDefault()},d.prototype.toggleSubmit=function(){this.options.disable&&this.$btn.toggleClass("disabled",this.isIncomplete()||this.hasErrors())},d.prototype.defer=function(b,c){return c=a.proxy(c,this,b),this.options.delay?(window.clearTimeout(b.data("bs.validator.timeout")),void b.data("bs.validator.timeout",window.setTimeout(c,this.options.delay))):c()},d.prototype.destroy=function(){return this.$element.removeAttr("novalidate").removeData("bs.validator").off(".bs.validator").find(".form-control-feedback").removeClass([this.options.feedback.error,this.options.feedback.success].join(" ")),this.$inputs.off(".bs.validator").removeData(["bs.validator.errors","bs.validator.deferred","bs.validator.previous"]).each(function(){var b=a(this),c=b.data("bs.validator.timeout");window.clearTimeout(c)&&b.removeData("bs.validator.timeout")}),this.$element.find(".help-block.with-errors").each(function(){var b=a(this),c=b.data("bs.validator.originalContent");b.removeData("bs.validator.originalContent").html(c)}),this.$element.find('input[type="submit"], button[type="submit"]').removeClass("disabled"),this.$element.find(".has-error, .has-danger").removeClass("has-error has-danger"),this};var e=a.fn.validator;a.fn.validator=c,a.fn.validator.Constructor=d,a.fn.validator.noConflict=function(){return a.fn.validator=e,this},a(window).on("load",function(){a('form[data-toggle="validator"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery);/* == Page scroll to id == Version: 1.5.6, License: MIT License (MIT) */
!function(e,t,a){var l,n,s,i,o,r,c,u,h,g,f,d,p="mPageScroll2id",_="mPS2id",C=".m_PageScroll2id,a[rel~='m_PageScroll2id'],.page-scroll-to-id,a[rel~='page-scroll-to-id'],._ps2id",v={scrollSpeed:1e3,autoScrollSpeed:!0,scrollEasing:"easeInOutQuint",scrollingEasing:"easeOutQuint",pageEndSmoothScroll:!0,layout:"vertical",offset:0,highlightSelector:!1,clickedClass:_+"-clicked",targetClass:_+"-target",highlightClass:_+"-highlight",forceSingleHighlight:!1,keepHighlightUntilNext:!1,highlightByNextTarget:!1,disablePluginBelow:!1,clickEvents:!0,appendHash:!1,onStart:function(){},onComplete:function(){},defaultSelector:!1,live:!0,liveSelector:!1},m=0,S={init:function(r){var r=e.extend(!0,{},v,r);if(e(a).data(_,r),n=e(a).data(_),!this.selector){var c="__"+_;this.each(function(){var t=e(this);t.hasClass(c)||t.addClass(c)}),this.selector="."+c}n.liveSelector&&(this.selector+=","+n.liveSelector),l=l?l+","+this.selector:this.selector,n.defaultSelector&&("object"==typeof e(l)&&0!==e(l).length||(l=C)),n.clickEvents&&e(a).undelegate("."+_).delegate(l,"click."+_,function(t){if(I._isDisabled.call(null))return void I._removeClasses.call(null);var a=e(this),l=a.attr("href"),n=a.prop("href");l&&-1!==l.indexOf("#/")||(I._reset.call(null),g=a.data("ps2id-offset")||0,I._isValid.call(null,l,n)&&I._findTarget.call(null,l)&&(t.preventDefault(),i="selector",o=a,I._setClasses.call(null,!0),I._scrollTo.call(null)))}),e(t).unbind("."+_).bind("scroll."+_+" resize."+_,function(){if(I._isDisabled.call(null))return void I._removeClasses.call(null);var t=e("._"+_+"-t");t.each(function(a){var l=e(this),n=l.attr("id"),s=I._findHighlight.call(null,n);I._setClasses.call(null,!1,l,s),a==t.length-1&&I._extendClasses.call(null)})}),s=!0,I._setup.call(null),I._live.call(null)},scrollTo:function(t,a){if(I._isDisabled.call(null))return void I._removeClasses.call(null);if(t&&"undefined"!=typeof t){I._isInit.call(null);var l={layout:n.layout,offset:n.offset,clicked:!1},a=e.extend(!0,{},l,a);I._reset.call(null),u=a.layout,h=a.offset,t=-1!==t.indexOf("#")?t:"#"+t,I._isValid.call(null,t)&&I._findTarget.call(null,t)&&(i="scrollTo",o=a.clicked,o&&I._setClasses.call(null,!0),I._scrollTo.call(null))}},destroy:function(){e(t).unbind("."+_),e(a).undelegate("."+_).removeData(_),e("._"+_+"-t").removeData(_),I._removeClasses.call(null,!0)}},I={_isDisabled:function(){var e=t,l="inner",s=n.disablePluginBelow instanceof Array?[n.disablePluginBelow[0]||0,n.disablePluginBelow[1]||0]:[n.disablePluginBelow||0,0];return"innerWidth"in t||(l="client",e=a.documentElement||a.body),e[l+"Width"]<=s[0]||e[l+"Height"]<=s[1]},_isValid:function(e,a){if(e){a=a?a:e;var l=-1!==a.indexOf("#/")?a.split("#/")[0]:a.split("#")[0],n=t.location.toString().split("#")[0];return"#"!==e&&-1!==e.indexOf("#")&&(""===l||l===n)}},_setup:function(){var t=I._highlightSelector(),a=1,l=0;return e(t).each(function(){var s=e(this),i=s.attr("href"),o=s.prop("href");if(I._isValid.call(null,i,o)){var r=-1!==i.indexOf("#/")?i.split("#/")[1]:i.split("#")[1],c=e("#"+r);if(c.length>0){n.highlightByNextTarget&&c!==l&&(l?l.data(_,{tn:c}):c.data(_,{tn:"0"}),l=c),c.hasClass("_"+_+"-t")||c.addClass("_"+_+"-t"),c.data(_,{i:a}),s.hasClass("_"+_+"-h")||s.addClass("_"+_+"-h");var u=I._findHighlight.call(null,r);I._setClasses.call(null,!1,c,u),m=a,a++,a==e(t).length&&I._extendClasses.call(null)}}})},_highlightSelector:function(){return n.highlightSelector&&""!==n.highlightSelector?n.highlightSelector:l},_findTarget:function(t){var a=-1!==t.indexOf("#/")?t.split("#/")[1]:t.split("#")[1],l=e("#"+a);if(l.length<1||"fixed"===l.css("position")){if("top"!==a)return;l=e("body")}return r=l,u||(u=n.layout),h=I._setOffset.call(null),c=[(l.offset().top-h[0]).toString(),(l.offset().left-h[1]).toString()],c[0]=c[0]<0?0:c[0],c[1]=c[1]<0?0:c[1],c},_setOffset:function(){h||(h=n.offset?n.offset:0),g&&(h=g);var t,a,l,s;switch(typeof h){case"object":case"string":t=[h.y?h.y:h,h.x?h.x:h],a=[t[0]instanceof jQuery?t[0]:e(t[0]),t[1]instanceof jQuery?t[1]:e(t[1])],a[0].length>0?(l=a[0].height(),"fixed"===a[0].css("position")&&(l+=a[0][0].offsetTop)):l=!isNaN(parseFloat(t[0]))&&isFinite(t[0])?parseInt(t[0]):0,a[1].length>0?(s=a[1].width(),"fixed"===a[1].css("position")&&(s+=a[1][0].offsetLeft)):s=!isNaN(parseFloat(t[1]))&&isFinite(t[1])?parseInt(t[1]):0;break;case"function":t=h.call(null),t instanceof Array?(l=t[0],s=t[1]):l=s=t;break;default:l=s=parseInt(h)}return[l,s]},_findHighlight:function(a){var l=t.location,n=l.toString().split("#")[0],s=l.pathname;return e("._"+_+"-h[href='#"+a+"'],._"+_+"-h[href='"+n+"#"+a+"'],._"+_+"-h[href='"+s+"#"+a+"'],._"+_+"-h[href='#/"+a+"'],._"+_+"-h[href='"+n+"#/"+a+"'],._"+_+"-h[href='"+s+"#/"+a+"']")},_setClasses:function(t,a,l){var s=n.clickedClass,i=n.targetClass,r=n.highlightClass;t&&s&&""!==s?(e("."+s).removeClass(s),o.addClass(s)):a&&i&&""!==i&&l&&r&&""!==r&&(I._currentTarget.call(null,a)?(a.addClass(i),l.addClass(r)):(!n.keepHighlightUntilNext||e("."+r).length>1)&&(a.removeClass(i),l.removeClass(r)))},_extendClasses:function(){var t=n.targetClass,a=n.highlightClass,l=e("."+t),s=e("."+a),i=t+"-first",o=t+"-last",r=a+"-first",c=a+"-last";e("._"+_+"-t").removeClass(i+" "+o),e("._"+_+"-h").removeClass(r+" "+c),n.forceSingleHighlight?n.keepHighlightUntilNext&&l.length>1?(l.slice(0,1).removeClass(t),s.slice(0,1).removeClass(a)):(l.slice(1).removeClass(t),s.slice(1).removeClass(a)):(l.slice(0,1).addClass(i).end().slice(-1).addClass(o),s.slice(0,1).addClass(r).end().slice(-1).addClass(c))},_removeClasses:function(t){e("."+n.clickedClass).removeClass(n.clickedClass),e("."+n.targetClass).removeClass(n.targetClass+" "+n.targetClass+"-first "+n.targetClass+"-last"),e("."+n.highlightClass).removeClass(n.highlightClass+" "+n.highlightClass+"-first "+n.highlightClass+"-last"),t&&(e("._"+_+"-t").removeClass("_"+_+"-t"),e("._"+_+"-h").removeClass("_"+_+"-h"))},_currentTarget:function(a){var l=n["target_"+a.data(_).i],s=a.data("ps2id-target"),i=s&&e(s)[0]?e(s)[0].getBoundingClientRect():a[0].getBoundingClientRect();if("undefined"!=typeof l){var o=a.offset().top,r=a.offset().left,c=l.from?l.from+o:o,u=l.to?l.to+o:o,h=l.fromX?l.fromX+r:r,g=l.toX?l.toX+r:r;return i.top>=u&&i.top<=c&&i.left>=g&&i.left<=h}var f=e(t).height(),d=e(t).width(),p=s?e(s).height():a.height(),C=s?e(s).width():a.width(),v=1+p/f,m=v,S=f>p?v*(f/p):v,I=1+C/d,O=I,M=d>C?I*(d/C):I,b=[i.top<=f/m,i.bottom>=f/S,i.left<=d/O,i.right>=d/M];if(n.highlightByNextTarget){var y=a.data(_).tn;if(y){var w=y[0].getBoundingClientRect();"vertical"===n.layout?b=[i.top<=f/2,w.top>f/2,1,1]:"horizontal"===n.layout&&(b=[1,1,i.left<=d/2,w.left>d/2])}}return b[0]&&b[1]&&b[2]&&b[3]},_scrollTo:function(){d=I._scrollSpeed.call(null),c=n.pageEndSmoothScroll?I._pageEndSmoothScroll.call(null):c;var a=e("html,body"),l=n.autoScrollSpeed?I._autoScrollSpeed.call(null):d,s=a.is(":animated")?n.scrollingEasing:n.scrollEasing,i=e(t).scrollTop(),o=e(t).scrollLeft();switch(u){case"horizontal":o!=c[1]&&(I._callbacks.call(null,"onStart"),a.stop().animate({scrollLeft:c[1]},l,s).promise().then(function(){I._callbacks.call(null,"onComplete")}));break;case"auto":if(i!=c[0]||o!=c[1])if(I._callbacks.call(null,"onStart"),navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)){var r;a.stop().animate({pageYOffset:c[0],pageXOffset:c[1]},{duration:l,easing:s,step:function(e,a){"pageXOffset"==a.prop?r=e:"pageYOffset"==a.prop&&t.scrollTo(r,e)}}).promise().then(function(){I._callbacks.call(null,"onComplete")})}else a.stop().animate({scrollTop:c[0],scrollLeft:c[1]},l,s).promise().then(function(){I._callbacks.call(null,"onComplete")});break;default:i!=c[0]&&(I._callbacks.call(null,"onStart"),a.stop().animate({scrollTop:c[0]},l,s).promise().then(function(){I._callbacks.call(null,"onComplete")}))}},_pageEndSmoothScroll:function(){var l=e(a).height(),n=e(a).width(),s=e(t).height(),i=e(t).width();return[l-c[0]<s?l-s:c[0],n-c[1]<i?n-i:c[1]]},_scrollSpeed:function(){var t=n.scrollSpeed;return o&&o.length&&o.add(o.parent()).each(function(){var a=e(this);if(a.attr("class")){var l=a.attr("class").split(" ");for(var n in l)if(l[n].match(/^ps2id-speed-\d+$/)){t=l[n].split("ps2id-speed-")[1];break}}}),parseInt(t)},_autoScrollSpeed:function(){var l=e(t).scrollTop(),n=e(t).scrollLeft(),s=e(a).height(),i=e(a).width(),o=[d+d*Math.floor(Math.abs(c[0]-l)/s*100)/100,d+d*Math.floor(Math.abs(c[1]-n)/i*100)/100];return Math.max.apply(Math,o)},_callbacks:function(e){if(n)switch(this[_]={trigger:i,clicked:o,target:r,scrollTo:{y:c[0],x:c[1]}},e){case"onStart":if(n.appendHash&&t.history&&t.history.pushState&&o&&o.length){var a="#"+o.attr("href").split("#")[1];a!==t.location.hash&&history.pushState("","",a)}n.onStart.call(null,this[_]);break;case"onComplete":n.onComplete.call(null,this[_])}},_reset:function(){u=h=g=!1},_isInit:function(){s||S.init.apply(this)},_live:function(){f=setTimeout(function(){n.live?e(I._highlightSelector()).length!==m&&I._setup.call(null):f&&clearTimeout(f),I._live.call(null)},1e3)},_easing:function(){function t(e){var t=7.5625,a=2.75;return 1/a>e?t*e*e:2/a>e?t*(e-=1.5/a)*e+.75:2.5/a>e?t*(e-=2.25/a)*e+.9375:t*(e-=2.625/a)*e+.984375}e.easing.easeInQuad=e.easing.easeInQuad||function(e){return e*e},e.easing.easeOutQuad=e.easing.easeOutQuad||function(e){return 1-(1-e)*(1-e)},e.easing.easeInOutQuad=e.easing.easeInOutQuad||function(e){return.5>e?2*e*e:1-Math.pow(-2*e+2,2)/2},e.easing.easeInCubic=e.easing.easeInCubic||function(e){return e*e*e},e.easing.easeOutCubic=e.easing.easeOutCubic||function(e){return 1-Math.pow(1-e,3)},e.easing.easeInOutCubic=e.easing.easeInOutCubic||function(e){return.5>e?4*e*e*e:1-Math.pow(-2*e+2,3)/2},e.easing.easeInQuart=e.easing.easeInQuart||function(e){return e*e*e*e},e.easing.easeOutQuart=e.easing.easeOutQuart||function(e){return 1-Math.pow(1-e,4)},e.easing.easeInOutQuart=e.easing.easeInOutQuart||function(e){return.5>e?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2},e.easing.easeInQuint=e.easing.easeInQuint||function(e){return e*e*e*e*e},e.easing.easeOutQuint=e.easing.easeOutQuint||function(e){return 1-Math.pow(1-e,5)},e.easing.easeInOutQuint=e.easing.easeInOutQuint||function(e){return.5>e?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2},e.easing.easeInExpo=e.easing.easeInExpo||function(e){return 0===e?0:Math.pow(2,10*e-10)},e.easing.easeOutExpo=e.easing.easeOutExpo||function(e){return 1===e?1:1-Math.pow(2,-10*e)},e.easing.easeInOutExpo=e.easing.easeInOutExpo||function(e){return 0===e?0:1===e?1:.5>e?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2},e.easing.easeInSine=e.easing.easeInSine||function(e){return 1-Math.cos(e*Math.PI/2)},e.easing.easeOutSine=e.easing.easeOutSine||function(e){return Math.sin(e*Math.PI/2)},e.easing.easeInOutSine=e.easing.easeInOutSine||function(e){return-(Math.cos(Math.PI*e)-1)/2},e.easing.easeInCirc=e.easing.easeInCirc||function(e){return 1-Math.sqrt(1-Math.pow(e,2))},e.easing.easeOutCirc=e.easing.easeOutCirc||function(e){return Math.sqrt(1-Math.pow(e-1,2))},e.easing.easeInOutCirc=e.easing.easeInOutCirc||function(e){return.5>e?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2},e.easing.easeInElastic=e.easing.easeInElastic||function(e){return 0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*(2*Math.PI/3))},e.easing.easeOutElastic=e.easing.easeOutElastic||function(e){return 0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*(2*Math.PI/3))+1},e.easing.easeInOutElastic=e.easing.easeInOutElastic||function(e){return 0===e?0:1===e?1:.5>e?-(Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*(2*Math.PI/4.5)))/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*(2*Math.PI/4.5))/2+1},e.easing.easeInBack=e.easing.easeInBack||function(e){return 2.70158*e*e*e-1.70158*e*e},e.easing.easeOutBack=e.easing.easeOutBack||function(e){return 1+2.70158*Math.pow(e-1,3)+1.70158*Math.pow(e-1,2)},e.easing.easeInOutBack=e.easing.easeInOutBack||function(e){return.5>e?Math.pow(2*e,2)*(7.189819*e-2.5949095)/2:(Math.pow(2*e-2,2)*(3.5949095*(2*e-2)+2.5949095)+2)/2},e.easing.easeInBounce=e.easing.easeInBounce||function(e){return 1-t(1-e)},e.easing.easeOutBounce=e.easing.easeOutBounce||t,e.easing.easeInOutBounce=e.easing.easeInOutBounce||function(e){return.5>e?(1-t(1-2*e))/2:(1+t(2*e-1))/2}}};I._easing.call(),e.fn[p]=function(t){return S[t]?S[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?void e.error("Method "+t+" does not exist"):S.init.apply(this,arguments)},e[p]=function(t){return S[t]?S[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?void e.error("Method "+t+" does not exist"):S.init.apply(this,arguments)},e[p].defaults=v}(jQuery,window,document);
// ==================================================
// fancyBox v3.5.7
//
// Licensed GPLv3 for open source use
// or fancyBox Commercial License for commercial use
//
// http://fancyapps.com/fancybox/
// Copyright 2019 fancyApps
//
// ==================================================
!function(t,e,n,o){"use strict";function i(t,e){var o,i,a,s=[],r=0;t&&t.isDefaultPrevented()||(t.preventDefault(),e=e||{},t&&t.data&&(e=h(t.data.options,e)),o=e.$target||n(t.currentTarget).trigger("blur"),(a=n.fancybox.getInstance())&&a.$trigger&&a.$trigger.is(o)||(e.selector?s=n(e.selector):(i=o.attr("data-fancybox")||"",i?(s=t.data?t.data.items:[],s=s.length?s.filter('[data-fancybox="'+i+'"]'):n('[data-fancybox="'+i+'"]')):s=[o]),r=n(s).index(o),r<0&&(r=0),a=n.fancybox.open(s,e,r),a.$trigger=o))}if(t.console=t.console||{info:function(t){}},n){if(n.fn.fancybox)return void console.info("fancyBox already initialized");var a={closeExisting:!1,loop:!1,gutter:50,keyboard:!0,preventCaptionOverlap:!0,arrows:!0,infobar:!0,smallBtn:"auto",toolbar:"auto",buttons:["zoom","slideShow","thumbs","close"],idleTime:3,protect:!1,modal:!1,image:{preload:!1},ajax:{settings:{data:{fancybox:!0}}},iframe:{tpl:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen" src=""></iframe>',preload:!0,css:{},attr:{scrolling:"auto"}},video:{tpl:'<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}"><source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!</video>',format:"",autoStart:!0},defaultType:"image",animationEffect:"zoom",animationDuration:366,zoomOpacity:"auto",transitionEffect:"fade",transitionDuration:366,slideClass:"",baseClass:"",baseTpl:'<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"><div class="fancybox-caption__body"></div></div></div></div>',spinnerTpl:'<div class="fancybox-loading"></div>',errorTpl:'<div class="fancybox-error"><p>{{ERROR}}</p></div>',btnTpl:{download:'<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg></a>',zoom:'<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg></button>',close:'<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg></button>',arrowLeft:'<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div></button>',arrowRight:'<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div></button>',smallBtn:'<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg></button>'},parentEl:"body",hideScrollbar:!0,autoFocus:!0,backFocus:!0,trapFocus:!0,fullScreen:{autoStart:!1},touch:{vertical:!0,momentum:!0},hash:null,media:{},slideShow:{autoStart:!1,speed:3e3},thumbs:{autoStart:!1,hideOnClose:!0,parentEl:".fancybox-container",axis:"y"},wheel:"auto",onInit:n.noop,beforeLoad:n.noop,afterLoad:n.noop,beforeShow:n.noop,afterShow:n.noop,beforeClose:n.noop,afterClose:n.noop,onActivate:n.noop,onDeactivate:n.noop,clickContent:function(t,e){return"image"===t.type&&"zoom"},clickSlide:"close",clickOutside:"close",dblclickContent:!1,dblclickSlide:!1,dblclickOutside:!1,mobile:{preventCaptionOverlap:!1,idleTime:!1,clickContent:function(t,e){return"image"===t.type&&"toggleControls"},clickSlide:function(t,e){return"image"===t.type?"toggleControls":"close"},dblclickContent:function(t,e){return"image"===t.type&&"zoom"},dblclickSlide:function(t,e){return"image"===t.type&&"zoom"}},lang:"en",i18n:{en:{CLOSE:"Close",NEXT:"Next",PREV:"Previous",ERROR:"The requested content cannot be loaded. <br/> Please try again later.",PLAY_START:"Start slideshow",PLAY_STOP:"Pause slideshow",FULL_SCREEN:"Full screen",THUMBS:"Thumbnails",DOWNLOAD:"Download",SHARE:"Share",ZOOM:"Zoom"},de:{CLOSE:"Schlie&szlig;en",NEXT:"Weiter",PREV:"Zur&uuml;ck",ERROR:"Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es sp&auml;ter nochmal.",PLAY_START:"Diaschau starten",PLAY_STOP:"Diaschau beenden",FULL_SCREEN:"Vollbild",THUMBS:"Vorschaubilder",DOWNLOAD:"Herunterladen",SHARE:"Teilen",ZOOM:"Vergr&ouml;&szlig;ern"}}},s=n(t),r=n(e),c=0,l=function(t){return t&&t.hasOwnProperty&&t instanceof n},d=function(){return t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame||function(e){return t.setTimeout(e,1e3/60)}}(),u=function(){return t.cancelAnimationFrame||t.webkitCancelAnimationFrame||t.mozCancelAnimationFrame||t.oCancelAnimationFrame||function(e){t.clearTimeout(e)}}(),f=function(){var t,n=e.createElement("fakeelement"),o={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(t in o)if(void 0!==n.style[t])return o[t];return"transitionend"}(),p=function(t){return t&&t.length&&t[0].offsetHeight},h=function(t,e){var o=n.extend(!0,{},t,e);return n.each(e,function(t,e){n.isArray(e)&&(o[t]=e)}),o},g=function(t){var o,i;return!(!t||t.ownerDocument!==e)&&(n(".fancybox-container").css("pointer-events","none"),o={x:t.getBoundingClientRect().left+t.offsetWidth/2,y:t.getBoundingClientRect().top+t.offsetHeight/2},i=e.elementFromPoint(o.x,o.y)===t,n(".fancybox-container").css("pointer-events",""),i)},b=function(t,e,o){var i=this;i.opts=h({index:o},n.fancybox.defaults),n.isPlainObject(e)&&(i.opts=h(i.opts,e)),n.fancybox.isMobile&&(i.opts=h(i.opts,i.opts.mobile)),i.id=i.opts.id||++c,i.currIndex=parseInt(i.opts.index,10)||0,i.prevIndex=null,i.prevPos=null,i.currPos=0,i.firstRun=!0,i.group=[],i.slides={},i.addContent(t),i.group.length&&i.init()};n.extend(b.prototype,{init:function(){var o,i,a=this,s=a.group[a.currIndex],r=s.opts;r.closeExisting&&n.fancybox.close(!0),n("body").addClass("fancybox-active"),!n.fancybox.getInstance()&&!1!==r.hideScrollbar&&!n.fancybox.isMobile&&e.body.scrollHeight>t.innerHeight&&(n("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:'+(t.innerWidth-e.documentElement.clientWidth)+"px;}</style>"),n("body").addClass("compensate-for-scrollbar")),i="",n.each(r.buttons,function(t,e){i+=r.btnTpl[e]||""}),o=n(a.translate(a,r.baseTpl.replace("{{buttons}}",i).replace("{{arrows}}",r.btnTpl.arrowLeft+r.btnTpl.arrowRight))).attr("id","fancybox-container-"+a.id).addClass(r.baseClass).data("FancyBox",a).appendTo(r.parentEl),a.$refs={container:o},["bg","inner","infobar","toolbar","stage","caption","navigation"].forEach(function(t){a.$refs[t]=o.find(".fancybox-"+t)}),a.trigger("onInit"),a.activate(),a.jumpTo(a.currIndex)},translate:function(t,e){var n=t.opts.i18n[t.opts.lang]||t.opts.i18n.en;return e.replace(/\{\{(\w+)\}\}/g,function(t,e){return void 0===n[e]?t:n[e]})},addContent:function(t){var e,o=this,i=n.makeArray(t);n.each(i,function(t,e){var i,a,s,r,c,l={},d={};n.isPlainObject(e)?(l=e,d=e.opts||e):"object"===n.type(e)&&n(e).length?(i=n(e),d=i.data()||{},d=n.extend(!0,{},d,d.options),d.$orig=i,l.src=o.opts.src||d.src||i.attr("href"),l.type||l.src||(l.type="inline",l.src=e)):l={type:"html",src:e+""},l.opts=n.extend(!0,{},o.opts,d),n.isArray(d.buttons)&&(l.opts.buttons=d.buttons),n.fancybox.isMobile&&l.opts.mobile&&(l.opts=h(l.opts,l.opts.mobile)),a=l.type||l.opts.type,r=l.src||"",!a&&r&&((s=r.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i))?(a="video",l.opts.video.format||(l.opts.video.format="video/"+("ogv"===s[1]?"ogg":s[1]))):r.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i)?a="image":r.match(/\.(pdf)((\?|#).*)?$/i)?(a="iframe",l=n.extend(!0,l,{contentType:"pdf",opts:{iframe:{preload:!1}}})):"#"===r.charAt(0)&&(a="inline")),a?l.type=a:o.trigger("objectNeedsType",l),l.contentType||(l.contentType=n.inArray(l.type,["html","inline","ajax"])>-1?"html":l.type),l.index=o.group.length,"auto"==l.opts.smallBtn&&(l.opts.smallBtn=n.inArray(l.type,["html","inline","ajax"])>-1),"auto"===l.opts.toolbar&&(l.opts.toolbar=!l.opts.smallBtn),l.$thumb=l.opts.$thumb||null,l.opts.$trigger&&l.index===o.opts.index&&(l.$thumb=l.opts.$trigger.find("img:first"),l.$thumb.length&&(l.opts.$orig=l.opts.$trigger)),l.$thumb&&l.$thumb.length||!l.opts.$orig||(l.$thumb=l.opts.$orig.find("img:first")),l.$thumb&&!l.$thumb.length&&(l.$thumb=null),l.thumb=l.opts.thumb||(l.$thumb?l.$thumb[0].src:null),"function"===n.type(l.opts.caption)&&(l.opts.caption=l.opts.caption.apply(e,[o,l])),"function"===n.type(o.opts.caption)&&(l.opts.caption=o.opts.caption.apply(e,[o,l])),l.opts.caption instanceof n||(l.opts.caption=void 0===l.opts.caption?"":l.opts.caption+""),"ajax"===l.type&&(c=r.split(/\s+/,2),c.length>1&&(l.src=c.shift(),l.opts.filter=c.shift())),l.opts.modal&&(l.opts=n.extend(!0,l.opts,{trapFocus:!0,infobar:0,toolbar:0,smallBtn:0,keyboard:0,slideShow:0,fullScreen:0,thumbs:0,touch:0,clickContent:!1,clickSlide:!1,clickOutside:!1,dblclickContent:!1,dblclickSlide:!1,dblclickOutside:!1})),o.group.push(l)}),Object.keys(o.slides).length&&(o.updateControls(),(e=o.Thumbs)&&e.isActive&&(e.create(),e.focus()))},addEvents:function(){var e=this;e.removeEvents(),e.$refs.container.on("click.fb-close","[data-fancybox-close]",function(t){t.stopPropagation(),t.preventDefault(),e.close(t)}).on("touchstart.fb-prev click.fb-prev","[data-fancybox-prev]",function(t){t.stopPropagation(),t.preventDefault(),e.previous()}).on("touchstart.fb-next click.fb-next","[data-fancybox-next]",function(t){t.stopPropagation(),t.preventDefault(),e.next()}).on("click.fb","[data-fancybox-zoom]",function(t){e[e.isScaledDown()?"scaleToActual":"scaleToFit"]()}),s.on("orientationchange.fb resize.fb",function(t){t&&t.originalEvent&&"resize"===t.originalEvent.type?(e.requestId&&u(e.requestId),e.requestId=d(function(){e.update(t)})):(e.current&&"iframe"===e.current.type&&e.$refs.stage.hide(),setTimeout(function(){e.$refs.stage.show(),e.update(t)},n.fancybox.isMobile?600:250))}),r.on("keydown.fb",function(t){var o=n.fancybox?n.fancybox.getInstance():null,i=o.current,a=t.keyCode||t.which;if(9==a)return void(i.opts.trapFocus&&e.focus(t));if(!(!i.opts.keyboard||t.ctrlKey||t.altKey||t.shiftKey||n(t.target).is("input,textarea,video,audio,select")))return 8===a||27===a?(t.preventDefault(),void e.close(t)):37===a||38===a?(t.preventDefault(),void e.previous()):39===a||40===a?(t.preventDefault(),void e.next()):void e.trigger("afterKeydown",t,a)}),e.group[e.currIndex].opts.idleTime&&(e.idleSecondsCounter=0,r.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle",function(t){e.idleSecondsCounter=0,e.isIdle&&e.showControls(),e.isIdle=!1}),e.idleInterval=t.setInterval(function(){++e.idleSecondsCounter>=e.group[e.currIndex].opts.idleTime&&!e.isDragging&&(e.isIdle=!0,e.idleSecondsCounter=0,e.hideControls())},1e3))},removeEvents:function(){var e=this;s.off("orientationchange.fb resize.fb"),r.off("keydown.fb .fb-idle"),this.$refs.container.off(".fb-close .fb-prev .fb-next"),e.idleInterval&&(t.clearInterval(e.idleInterval),e.idleInterval=null)},previous:function(t){return this.jumpTo(this.currPos-1,t)},next:function(t){return this.jumpTo(this.currPos+1,t)},jumpTo:function(t,e){var o,i,a,s,r,c,l,d,u,f=this,h=f.group.length;if(!(f.isDragging||f.isClosing||f.isAnimating&&f.firstRun)){if(t=parseInt(t,10),!(a=f.current?f.current.opts.loop:f.opts.loop)&&(t<0||t>=h))return!1;if(o=f.firstRun=!Object.keys(f.slides).length,r=f.current,f.prevIndex=f.currIndex,f.prevPos=f.currPos,s=f.createSlide(t),h>1&&((a||s.index<h-1)&&f.createSlide(t+1),(a||s.index>0)&&f.createSlide(t-1)),f.current=s,f.currIndex=s.index,f.currPos=s.pos,f.trigger("beforeShow",o),f.updateControls(),s.forcedDuration=void 0,n.isNumeric(e)?s.forcedDuration=e:e=s.opts[o?"animationDuration":"transitionDuration"],e=parseInt(e,10),i=f.isMoved(s),s.$slide.addClass("fancybox-slide--current"),o)return s.opts.animationEffect&&e&&f.$refs.container.css("transition-duration",e+"ms"),f.$refs.container.addClass("fancybox-is-open").trigger("focus"),f.loadSlide(s),void f.preload("image");c=n.fancybox.getTranslate(r.$slide),l=n.fancybox.getTranslate(f.$refs.stage),n.each(f.slides,function(t,e){n.fancybox.stop(e.$slide,!0)}),r.pos!==s.pos&&(r.isComplete=!1),r.$slide.removeClass("fancybox-slide--complete fancybox-slide--current"),i?(u=c.left-(r.pos*c.width+r.pos*r.opts.gutter),n.each(f.slides,function(t,o){o.$slide.removeClass("fancybox-animated").removeClass(function(t,e){return(e.match(/(^|\s)fancybox-fx-\S+/g)||[]).join(" ")});var i=o.pos*c.width+o.pos*o.opts.gutter;n.fancybox.setTranslate(o.$slide,{top:0,left:i-l.left+u}),o.pos!==s.pos&&o.$slide.addClass("fancybox-slide--"+(o.pos>s.pos?"next":"previous")),p(o.$slide),n.fancybox.animate(o.$slide,{top:0,left:(o.pos-s.pos)*c.width+(o.pos-s.pos)*o.opts.gutter},e,function(){o.$slide.css({transform:"",opacity:""}).removeClass("fancybox-slide--next fancybox-slide--previous"),o.pos===f.currPos&&f.complete()})})):e&&s.opts.transitionEffect&&(d="fancybox-animated fancybox-fx-"+s.opts.transitionEffect,r.$slide.addClass("fancybox-slide--"+(r.pos>s.pos?"next":"previous")),n.fancybox.animate(r.$slide,d,e,function(){r.$slide.removeClass(d).removeClass("fancybox-slide--next fancybox-slide--previous")},!1)),s.isLoaded?f.revealContent(s):f.loadSlide(s),f.preload("image")}},createSlide:function(t){var e,o,i=this;return o=t%i.group.length,o=o<0?i.group.length+o:o,!i.slides[t]&&i.group[o]&&(e=n('<div class="fancybox-slide"></div>').appendTo(i.$refs.stage),i.slides[t]=n.extend(!0,{},i.group[o],{pos:t,$slide:e,isLoaded:!1}),i.updateSlide(i.slides[t])),i.slides[t]},scaleToActual:function(t,e,o){var i,a,s,r,c,l=this,d=l.current,u=d.$content,f=n.fancybox.getTranslate(d.$slide).width,p=n.fancybox.getTranslate(d.$slide).height,h=d.width,g=d.height;l.isAnimating||l.isMoved()||!u||"image"!=d.type||!d.isLoaded||d.hasError||(l.isAnimating=!0,n.fancybox.stop(u),t=void 0===t?.5*f:t,e=void 0===e?.5*p:e,i=n.fancybox.getTranslate(u),i.top-=n.fancybox.getTranslate(d.$slide).top,i.left-=n.fancybox.getTranslate(d.$slide).left,r=h/i.width,c=g/i.height,a=.5*f-.5*h,s=.5*p-.5*g,h>f&&(a=i.left*r-(t*r-t),a>0&&(a=0),a<f-h&&(a=f-h)),g>p&&(s=i.top*c-(e*c-e),s>0&&(s=0),s<p-g&&(s=p-g)),l.updateCursor(h,g),n.fancybox.animate(u,{top:s,left:a,scaleX:r,scaleY:c},o||366,function(){l.isAnimating=!1}),l.SlideShow&&l.SlideShow.isActive&&l.SlideShow.stop())},scaleToFit:function(t){var e,o=this,i=o.current,a=i.$content;o.isAnimating||o.isMoved()||!a||"image"!=i.type||!i.isLoaded||i.hasError||(o.isAnimating=!0,n.fancybox.stop(a),e=o.getFitPos(i),o.updateCursor(e.width,e.height),n.fancybox.animate(a,{top:e.top,left:e.left,scaleX:e.width/a.width(),scaleY:e.height/a.height()},t||366,function(){o.isAnimating=!1}))},getFitPos:function(t){var e,o,i,a,s=this,r=t.$content,c=t.$slide,l=t.width||t.opts.width,d=t.height||t.opts.height,u={};return!!(t.isLoaded&&r&&r.length)&&(e=n.fancybox.getTranslate(s.$refs.stage).width,o=n.fancybox.getTranslate(s.$refs.stage).height,e-=parseFloat(c.css("paddingLeft"))+parseFloat(c.css("paddingRight"))+parseFloat(r.css("marginLeft"))+parseFloat(r.css("marginRight")),o-=parseFloat(c.css("paddingTop"))+parseFloat(c.css("paddingBottom"))+parseFloat(r.css("marginTop"))+parseFloat(r.css("marginBottom")),l&&d||(l=e,d=o),i=Math.min(1,e/l,o/d),l*=i,d*=i,l>e-.5&&(l=e),d>o-.5&&(d=o),"image"===t.type?(u.top=Math.floor(.5*(o-d))+parseFloat(c.css("paddingTop")),u.left=Math.floor(.5*(e-l))+parseFloat(c.css("paddingLeft"))):"video"===t.contentType&&(a=t.opts.width&&t.opts.height?l/d:t.opts.ratio||16/9,d>l/a?d=l/a:l>d*a&&(l=d*a)),u.width=l,u.height=d,u)},update:function(t){var e=this;n.each(e.slides,function(n,o){e.updateSlide(o,t)})},updateSlide:function(t,e){var o=this,i=t&&t.$content,a=t.width||t.opts.width,s=t.height||t.opts.height,r=t.$slide;o.adjustCaption(t),i&&(a||s||"video"===t.contentType)&&!t.hasError&&(n.fancybox.stop(i),n.fancybox.setTranslate(i,o.getFitPos(t)),t.pos===o.currPos&&(o.isAnimating=!1,o.updateCursor())),o.adjustLayout(t),r.length&&(r.trigger("refresh"),t.pos===o.currPos&&o.$refs.toolbar.add(o.$refs.navigation.find(".fancybox-button--arrow_right")).toggleClass("compensate-for-scrollbar",r.get(0).scrollHeight>r.get(0).clientHeight)),o.trigger("onUpdate",t,e)},centerSlide:function(t){var e=this,o=e.current,i=o.$slide;!e.isClosing&&o&&(i.siblings().css({transform:"",opacity:""}),i.parent().children().removeClass("fancybox-slide--previous fancybox-slide--next"),n.fancybox.animate(i,{top:0,left:0,opacity:1},void 0===t?0:t,function(){i.css({transform:"",opacity:""}),o.isComplete||e.complete()},!1))},isMoved:function(t){var e,o,i=t||this.current;return!!i&&(o=n.fancybox.getTranslate(this.$refs.stage),e=n.fancybox.getTranslate(i.$slide),!i.$slide.hasClass("fancybox-animated")&&(Math.abs(e.top-o.top)>.5||Math.abs(e.left-o.left)>.5))},updateCursor:function(t,e){var o,i,a=this,s=a.current,r=a.$refs.container;s&&!a.isClosing&&a.Guestures&&(r.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan"),o=a.canPan(t,e),i=!!o||a.isZoomable(),r.toggleClass("fancybox-is-zoomable",i),n("[data-fancybox-zoom]").prop("disabled",!i),o?r.addClass("fancybox-can-pan"):i&&("zoom"===s.opts.clickContent||n.isFunction(s.opts.clickContent)&&"zoom"==s.opts.clickContent(s))?r.addClass("fancybox-can-zoomIn"):s.opts.touch&&(s.opts.touch.vertical||a.group.length>1)&&"video"!==s.contentType&&r.addClass("fancybox-can-swipe"))},isZoomable:function(){var t,e=this,n=e.current;if(n&&!e.isClosing&&"image"===n.type&&!n.hasError){if(!n.isLoaded)return!0;if((t=e.getFitPos(n))&&(n.width>t.width||n.height>t.height))return!0}return!1},isScaledDown:function(t,e){var o=this,i=!1,a=o.current,s=a.$content;return void 0!==t&&void 0!==e?i=t<a.width&&e<a.height:s&&(i=n.fancybox.getTranslate(s),i=i.width<a.width&&i.height<a.height),i},canPan:function(t,e){var o=this,i=o.current,a=null,s=!1;return"image"===i.type&&(i.isComplete||t&&e)&&!i.hasError&&(s=o.getFitPos(i),void 0!==t&&void 0!==e?a={width:t,height:e}:i.isComplete&&(a=n.fancybox.getTranslate(i.$content)),a&&s&&(s=Math.abs(a.width-s.width)>1.5||Math.abs(a.height-s.height)>1.5)),s},loadSlide:function(t){var e,o,i,a=this;if(!t.isLoading&&!t.isLoaded){if(t.isLoading=!0,!1===a.trigger("beforeLoad",t))return t.isLoading=!1,!1;switch(e=t.type,o=t.$slide,o.off("refresh").trigger("onReset").addClass(t.opts.slideClass),e){case"image":a.setImage(t);break;case"iframe":a.setIframe(t);break;case"html":a.setContent(t,t.src||t.content);break;case"video":a.setContent(t,t.opts.video.tpl.replace(/\{\{src\}\}/gi,t.src).replace("{{format}}",t.opts.videoFormat||t.opts.video.format||"").replace("{{poster}}",t.thumb||""));break;case"inline":n(t.src).length?a.setContent(t,n(t.src)):a.setError(t);break;case"ajax":a.showLoading(t),i=n.ajax(n.extend({},t.opts.ajax.settings,{url:t.src,success:function(e,n){"success"===n&&a.setContent(t,e)},error:function(e,n){e&&"abort"!==n&&a.setError(t)}})),o.one("onReset",function(){i.abort()});break;default:a.setError(t)}return!0}},setImage:function(t){var o,i=this;setTimeout(function(){var e=t.$image;i.isClosing||!t.isLoading||e&&e.length&&e[0].complete||t.hasError||i.showLoading(t)},50),i.checkSrcset(t),t.$content=n('<div class="fancybox-content"></div>').addClass("fancybox-is-hidden").appendTo(t.$slide.addClass("fancybox-slide--image")),!1!==t.opts.preload&&t.opts.width&&t.opts.height&&t.thumb&&(t.width=t.opts.width,t.height=t.opts.height,o=e.createElement("img"),o.onerror=function(){n(this).remove(),t.$ghost=null},o.onload=function(){i.afterLoad(t)},t.$ghost=n(o).addClass("fancybox-image").appendTo(t.$content).attr("src",t.thumb)),i.setBigImage(t)},checkSrcset:function(e){var n,o,i,a,s=e.opts.srcset||e.opts.image.srcset;if(s){i=t.devicePixelRatio||1,a=t.innerWidth*i,o=s.split(",").map(function(t){var e={};return t.trim().split(/\s+/).forEach(function(t,n){var o=parseInt(t.substring(0,t.length-1),10);if(0===n)return e.url=t;o&&(e.value=o,e.postfix=t[t.length-1])}),e}),o.sort(function(t,e){return t.value-e.value});for(var r=0;r<o.length;r++){var c=o[r];if("w"===c.postfix&&c.value>=a||"x"===c.postfix&&c.value>=i){n=c;break}}!n&&o.length&&(n=o[o.length-1]),n&&(e.src=n.url,e.width&&e.height&&"w"==n.postfix&&(e.height=e.width/e.height*n.value,e.width=n.value),e.opts.srcset=s)}},setBigImage:function(t){var o=this,i=e.createElement("img"),a=n(i);t.$image=a.one("error",function(){o.setError(t)}).one("load",function(){var e;t.$ghost||(o.resolveImageSlideSize(t,this.naturalWidth,this.naturalHeight),o.afterLoad(t)),o.isClosing||(t.opts.srcset&&(e=t.opts.sizes,e&&"auto"!==e||(e=(t.width/t.height>1&&s.width()/s.height()>1?"100":Math.round(t.width/t.height*100))+"vw"),a.attr("sizes",e).attr("srcset",t.opts.srcset)),t.$ghost&&setTimeout(function(){t.$ghost&&!o.isClosing&&t.$ghost.hide()},Math.min(300,Math.max(1e3,t.height/1600))),o.hideLoading(t))}).addClass("fancybox-image").attr("src",t.src).appendTo(t.$content),(i.complete||"complete"==i.readyState)&&a.naturalWidth&&a.naturalHeight?a.trigger("load"):i.error&&a.trigger("error")},resolveImageSlideSize:function(t,e,n){var o=parseInt(t.opts.width,10),i=parseInt(t.opts.height,10);t.width=e,t.height=n,o>0&&(t.width=o,t.height=Math.floor(o*n/e)),i>0&&(t.width=Math.floor(i*e/n),t.height=i)},setIframe:function(t){var e,o=this,i=t.opts.iframe,a=t.$slide;t.$content=n('<div class="fancybox-content'+(i.preload?" fancybox-is-hidden":"")+'"></div>').css(i.css).appendTo(a),a.addClass("fancybox-slide--"+t.contentType),t.$iframe=e=n(i.tpl.replace(/\{rnd\}/g,(new Date).getTime())).attr(i.attr).appendTo(t.$content),i.preload?(o.showLoading(t),e.on("load.fb error.fb",function(e){this.isReady=1,t.$slide.trigger("refresh"),o.afterLoad(t)}),a.on("refresh.fb",function(){var n,o,s=t.$content,r=i.css.width,c=i.css.height;if(1===e[0].isReady){try{n=e.contents(),o=n.find("body")}catch(t){}o&&o.length&&o.children().length&&(a.css("overflow","visible"),s.css({width:"100%","max-width":"100%",height:"9999px"}),void 0===r&&(r=Math.ceil(Math.max(o[0].clientWidth,o.outerWidth(!0)))),s.css("width",r||"").css("max-width",""),void 0===c&&(c=Math.ceil(Math.max(o[0].clientHeight,o.outerHeight(!0)))),s.css("height",c||""),a.css("overflow","auto")),s.removeClass("fancybox-is-hidden")}})):o.afterLoad(t),e.attr("src",t.src),a.one("onReset",function(){try{n(this).find("iframe").hide().unbind().attr("src","//about:blank")}catch(t){}n(this).off("refresh.fb").empty(),t.isLoaded=!1,t.isRevealed=!1})},setContent:function(t,e){var o=this;o.isClosing||(o.hideLoading(t),t.$content&&n.fancybox.stop(t.$content),t.$slide.empty(),l(e)&&e.parent().length?((e.hasClass("fancybox-content")||e.parent().hasClass("fancybox-content"))&&e.parents(".fancybox-slide").trigger("onReset"),t.$placeholder=n("<div>").hide().insertAfter(e),e.css("display","inline-block")):t.hasError||("string"===n.type(e)&&(e=n("<div>").append(n.trim(e)).contents()),t.opts.filter&&(e=n("<div>").html(e).find(t.opts.filter))),t.$slide.one("onReset",function(){n(this).find("video,audio").trigger("pause"),t.$placeholder&&(t.$placeholder.after(e.removeClass("fancybox-content").hide()).remove(),t.$placeholder=null),t.$smallBtn&&(t.$smallBtn.remove(),t.$smallBtn=null),t.hasError||(n(this).empty(),t.isLoaded=!1,t.isRevealed=!1)}),n(e).appendTo(t.$slide),n(e).is("video,audio")&&(n(e).addClass("fancybox-video"),n(e).wrap("<div></div>"),t.contentType="video",t.opts.width=t.opts.width||n(e).attr("width"),t.opts.height=t.opts.height||n(e).attr("height")),t.$content=t.$slide.children().filter("div,form,main,video,audio,article,.fancybox-content").first(),t.$content.siblings().hide(),t.$content.length||(t.$content=t.$slide.wrapInner("<div></div>").children().first()),t.$content.addClass("fancybox-content"),t.$slide.addClass("fancybox-slide--"+t.contentType),o.afterLoad(t))},setError:function(t){t.hasError=!0,t.$slide.trigger("onReset").removeClass("fancybox-slide--"+t.contentType).addClass("fancybox-slide--error"),t.contentType="html",this.setContent(t,this.translate(t,t.opts.errorTpl)),t.pos===this.currPos&&(this.isAnimating=!1)},showLoading:function(t){var e=this;(t=t||e.current)&&!t.$spinner&&(t.$spinner=n(e.translate(e,e.opts.spinnerTpl)).appendTo(t.$slide).hide().fadeIn("fast"))},hideLoading:function(t){var e=this;(t=t||e.current)&&t.$spinner&&(t.$spinner.stop().remove(),delete t.$spinner)},afterLoad:function(t){var e=this;e.isClosing||(t.isLoading=!1,t.isLoaded=!0,e.trigger("afterLoad",t),e.hideLoading(t),!t.opts.smallBtn||t.$smallBtn&&t.$smallBtn.length||(t.$smallBtn=n(e.translate(t,t.opts.btnTpl.smallBtn)).appendTo(t.$content)),t.opts.protect&&t.$content&&!t.hasError&&(t.$content.on("contextmenu.fb",function(t){return 2==t.button&&t.preventDefault(),!0}),"image"===t.type&&n('<div class="fancybox-spaceball"></div>').appendTo(t.$content)),e.adjustCaption(t),e.adjustLayout(t),t.pos===e.currPos&&e.updateCursor(),e.revealContent(t))},adjustCaption:function(t){var e,n=this,o=t||n.current,i=o.opts.caption,a=o.opts.preventCaptionOverlap,s=n.$refs.caption,r=!1;s.toggleClass("fancybox-caption--separate",a),a&&i&&i.length&&(o.pos!==n.currPos?(e=s.clone().appendTo(s.parent()),e.children().eq(0).empty().html(i),r=e.outerHeight(!0),e.empty().remove()):n.$caption&&(r=n.$caption.outerHeight(!0)),o.$slide.css("padding-bottom",r||""))},adjustLayout:function(t){var e,n,o,i,a=this,s=t||a.current;s.isLoaded&&!0!==s.opts.disableLayoutFix&&(s.$content.css("margin-bottom",""),s.$content.outerHeight()>s.$slide.height()+.5&&(o=s.$slide[0].style["padding-bottom"],i=s.$slide.css("padding-bottom"),parseFloat(i)>0&&(e=s.$slide[0].scrollHeight,s.$slide.css("padding-bottom",0),Math.abs(e-s.$slide[0].scrollHeight)<1&&(n=i),s.$slide.css("padding-bottom",o))),s.$content.css("margin-bottom",n))},revealContent:function(t){var e,o,i,a,s=this,r=t.$slide,c=!1,l=!1,d=s.isMoved(t),u=t.isRevealed;return t.isRevealed=!0,e=t.opts[s.firstRun?"animationEffect":"transitionEffect"],i=t.opts[s.firstRun?"animationDuration":"transitionDuration"],i=parseInt(void 0===t.forcedDuration?i:t.forcedDuration,10),!d&&t.pos===s.currPos&&i||(e=!1),"zoom"===e&&(t.pos===s.currPos&&i&&"image"===t.type&&!t.hasError&&(l=s.getThumbPos(t))?c=s.getFitPos(t):e="fade"),"zoom"===e?(s.isAnimating=!0,c.scaleX=c.width/l.width,c.scaleY=c.height/l.height,a=t.opts.zoomOpacity,"auto"==a&&(a=Math.abs(t.width/t.height-l.width/l.height)>.1),a&&(l.opacity=.1,c.opacity=1),n.fancybox.setTranslate(t.$content.removeClass("fancybox-is-hidden"),l),p(t.$content),void n.fancybox.animate(t.$content,c,i,function(){s.isAnimating=!1,s.complete()})):(s.updateSlide(t),e?(n.fancybox.stop(r),o="fancybox-slide--"+(t.pos>=s.prevPos?"next":"previous")+" fancybox-animated fancybox-fx-"+e,r.addClass(o).removeClass("fancybox-slide--current"),t.$content.removeClass("fancybox-is-hidden"),p(r),"image"!==t.type&&t.$content.hide().show(0),void n.fancybox.animate(r,"fancybox-slide--current",i,function(){r.removeClass(o).css({transform:"",opacity:""}),t.pos===s.currPos&&s.complete()},!0)):(t.$content.removeClass("fancybox-is-hidden"),u||!d||"image"!==t.type||t.hasError||t.$content.hide().fadeIn("fast"),void(t.pos===s.currPos&&s.complete())))},getThumbPos:function(t){var e,o,i,a,s,r=!1,c=t.$thumb;return!(!c||!g(c[0]))&&(e=n.fancybox.getTranslate(c),o=parseFloat(c.css("border-top-width")||0),i=parseFloat(c.css("border-right-width")||0),a=parseFloat(c.css("border-bottom-width")||0),s=parseFloat(c.css("border-left-width")||0),r={top:e.top+o,left:e.left+s,width:e.width-i-s,height:e.height-o-a,scaleX:1,scaleY:1},e.width>0&&e.height>0&&r)},complete:function(){var t,e=this,o=e.current,i={};!e.isMoved()&&o.isLoaded&&(o.isComplete||(o.isComplete=!0,o.$slide.siblings().trigger("onReset"),e.preload("inline"),p(o.$slide),o.$slide.addClass("fancybox-slide--complete"),n.each(e.slides,function(t,o){o.pos>=e.currPos-1&&o.pos<=e.currPos+1?i[o.pos]=o:o&&(n.fancybox.stop(o.$slide),o.$slide.off().remove())}),e.slides=i),e.isAnimating=!1,e.updateCursor(),e.trigger("afterShow"),o.opts.video.autoStart&&o.$slide.find("video,audio").filter(":visible:first").trigger("play").one("ended",function(){Document.exitFullscreen?Document.exitFullscreen():this.webkitExitFullscreen&&this.webkitExitFullscreen(),e.next()}),o.opts.autoFocus&&"html"===o.contentType&&(t=o.$content.find("input[autofocus]:enabled:visible:first"),t.length?t.trigger("focus"):e.focus(null,!0)),o.$slide.scrollTop(0).scrollLeft(0))},preload:function(t){var e,n,o=this;o.group.length<2||(n=o.slides[o.currPos+1],e=o.slides[o.currPos-1],e&&e.type===t&&o.loadSlide(e),n&&n.type===t&&o.loadSlide(n))},focus:function(t,o){var i,a,s=this,r=["a[href]","area[href]",'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',"select:not([disabled]):not([aria-hidden])","textarea:not([disabled]):not([aria-hidden])","button:not([disabled]):not([aria-hidden])","iframe","object","embed","video","audio","[contenteditable]",'[tabindex]:not([tabindex^="-"])'].join(",");s.isClosing||(i=!t&&s.current&&s.current.isComplete?s.current.$slide.find("*:visible"+(o?":not(.fancybox-close-small)":"")):s.$refs.container.find("*:visible"),i=i.filter(r).filter(function(){return"hidden"!==n(this).css("visibility")&&!n(this).hasClass("disabled")}),i.length?(a=i.index(e.activeElement),t&&t.shiftKey?(a<0||0==a)&&(t.preventDefault(),i.eq(i.length-1).trigger("focus")):(a<0||a==i.length-1)&&(t&&t.preventDefault(),i.eq(0).trigger("focus"))):s.$refs.container.trigger("focus"))},activate:function(){var t=this;n(".fancybox-container").each(function(){var e=n(this).data("FancyBox");e&&e.id!==t.id&&!e.isClosing&&(e.trigger("onDeactivate"),e.removeEvents(),e.isVisible=!1)}),t.isVisible=!0,(t.current||t.isIdle)&&(t.update(),t.updateControls()),t.trigger("onActivate"),t.addEvents()},close:function(t,e){var o,i,a,s,r,c,l,u=this,f=u.current,h=function(){u.cleanUp(t)};return!u.isClosing&&(u.isClosing=!0,!1===u.trigger("beforeClose",t)?(u.isClosing=!1,d(function(){u.update()}),!1):(u.removeEvents(),a=f.$content,o=f.opts.animationEffect,i=n.isNumeric(e)?e:o?f.opts.animationDuration:0,f.$slide.removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"),!0!==t?n.fancybox.stop(f.$slide):o=!1,f.$slide.siblings().trigger("onReset").remove(),i&&u.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing").css("transition-duration",i+"ms"),u.hideLoading(f),u.hideControls(!0),u.updateCursor(),"zoom"!==o||a&&i&&"image"===f.type&&!u.isMoved()&&!f.hasError&&(l=u.getThumbPos(f))||(o="fade"),"zoom"===o?(n.fancybox.stop(a),s=n.fancybox.getTranslate(a),c={top:s.top,left:s.left,scaleX:s.width/l.width,scaleY:s.height/l.height,width:l.width,height:l.height},r=f.opts.zoomOpacity,
"auto"==r&&(r=Math.abs(f.width/f.height-l.width/l.height)>.1),r&&(l.opacity=0),n.fancybox.setTranslate(a,c),p(a),n.fancybox.animate(a,l,i,h),!0):(o&&i?n.fancybox.animate(f.$slide.addClass("fancybox-slide--previous").removeClass("fancybox-slide--current"),"fancybox-animated fancybox-fx-"+o,i,h):!0===t?setTimeout(h,i):h(),!0)))},cleanUp:function(e){var o,i,a,s=this,r=s.current.opts.$orig;s.current.$slide.trigger("onReset"),s.$refs.container.empty().remove(),s.trigger("afterClose",e),s.current.opts.backFocus&&(r&&r.length&&r.is(":visible")||(r=s.$trigger),r&&r.length&&(i=t.scrollX,a=t.scrollY,r.trigger("focus"),n("html, body").scrollTop(a).scrollLeft(i))),s.current=null,o=n.fancybox.getInstance(),o?o.activate():(n("body").removeClass("fancybox-active compensate-for-scrollbar"),n("#fancybox-style-noscroll").remove())},trigger:function(t,e){var o,i=Array.prototype.slice.call(arguments,1),a=this,s=e&&e.opts?e:a.current;if(s?i.unshift(s):s=a,i.unshift(a),n.isFunction(s.opts[t])&&(o=s.opts[t].apply(s,i)),!1===o)return o;"afterClose"!==t&&a.$refs?a.$refs.container.trigger(t+".fb",i):r.trigger(t+".fb",i)},updateControls:function(){var t=this,o=t.current,i=o.index,a=t.$refs.container,s=t.$refs.caption,r=o.opts.caption;o.$slide.trigger("refresh"),r&&r.length?(t.$caption=s,s.children().eq(0).html(r)):t.$caption=null,t.hasHiddenControls||t.isIdle||t.showControls(),a.find("[data-fancybox-count]").html(t.group.length),a.find("[data-fancybox-index]").html(i+1),a.find("[data-fancybox-prev]").prop("disabled",!o.opts.loop&&i<=0),a.find("[data-fancybox-next]").prop("disabled",!o.opts.loop&&i>=t.group.length-1),"image"===o.type?a.find("[data-fancybox-zoom]").show().end().find("[data-fancybox-download]").attr("href",o.opts.image.src||o.src).show():o.opts.toolbar&&a.find("[data-fancybox-download],[data-fancybox-zoom]").hide(),n(e.activeElement).is(":hidden,[disabled]")&&t.$refs.container.trigger("focus")},hideControls:function(t){var e=this,n=["infobar","toolbar","nav"];!t&&e.current.opts.preventCaptionOverlap||n.push("caption"),this.$refs.container.removeClass(n.map(function(t){return"fancybox-show-"+t}).join(" ")),this.hasHiddenControls=!0},showControls:function(){var t=this,e=t.current?t.current.opts:t.opts,n=t.$refs.container;t.hasHiddenControls=!1,t.idleSecondsCounter=0,n.toggleClass("fancybox-show-toolbar",!(!e.toolbar||!e.buttons)).toggleClass("fancybox-show-infobar",!!(e.infobar&&t.group.length>1)).toggleClass("fancybox-show-caption",!!t.$caption).toggleClass("fancybox-show-nav",!!(e.arrows&&t.group.length>1)).toggleClass("fancybox-is-modal",!!e.modal)},toggleControls:function(){this.hasHiddenControls?this.showControls():this.hideControls()}}),n.fancybox={version:"3.5.7",defaults:a,getInstance:function(t){var e=n('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),o=Array.prototype.slice.call(arguments,1);return e instanceof b&&("string"===n.type(t)?e[t].apply(e,o):"function"===n.type(t)&&t.apply(e,o),e)},open:function(t,e,n){return new b(t,e,n)},close:function(t){var e=this.getInstance();e&&(e.close(),!0===t&&this.close(t))},destroy:function(){this.close(!0),r.add("body").off("click.fb-start","**")},isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),use3d:function(){var n=e.createElement("div");return t.getComputedStyle&&t.getComputedStyle(n)&&t.getComputedStyle(n).getPropertyValue("transform")&&!(e.documentMode&&e.documentMode<11)}(),getTranslate:function(t){var e;return!(!t||!t.length)&&(e=t[0].getBoundingClientRect(),{top:e.top||0,left:e.left||0,width:e.width,height:e.height,opacity:parseFloat(t.css("opacity"))})},setTranslate:function(t,e){var n="",o={};if(t&&e)return void 0===e.left&&void 0===e.top||(n=(void 0===e.left?t.position().left:e.left)+"px, "+(void 0===e.top?t.position().top:e.top)+"px",n=this.use3d?"translate3d("+n+", 0px)":"translate("+n+")"),void 0!==e.scaleX&&void 0!==e.scaleY?n+=" scale("+e.scaleX+", "+e.scaleY+")":void 0!==e.scaleX&&(n+=" scaleX("+e.scaleX+")"),n.length&&(o.transform=n),void 0!==e.opacity&&(o.opacity=e.opacity),void 0!==e.width&&(o.width=e.width),void 0!==e.height&&(o.height=e.height),t.css(o)},animate:function(t,e,o,i,a){var s,r=this;n.isFunction(o)&&(i=o,o=null),r.stop(t),s=r.getTranslate(t),t.on(f,function(c){(!c||!c.originalEvent||t.is(c.originalEvent.target)&&"z-index"!=c.originalEvent.propertyName)&&(r.stop(t),n.isNumeric(o)&&t.css("transition-duration",""),n.isPlainObject(e)?void 0!==e.scaleX&&void 0!==e.scaleY&&r.setTranslate(t,{top:e.top,left:e.left,width:s.width*e.scaleX,height:s.height*e.scaleY,scaleX:1,scaleY:1}):!0!==a&&t.removeClass(e),n.isFunction(i)&&i(c))}),n.isNumeric(o)&&t.css("transition-duration",o+"ms"),n.isPlainObject(e)?(void 0!==e.scaleX&&void 0!==e.scaleY&&(delete e.width,delete e.height,t.parent().hasClass("fancybox-slide--image")&&t.parent().addClass("fancybox-is-scaling")),n.fancybox.setTranslate(t,e)):t.addClass(e),t.data("timer",setTimeout(function(){t.trigger(f)},o+33))},stop:function(t,e){t&&t.length&&(clearTimeout(t.data("timer")),e&&t.trigger(f),t.off(f).css("transition-duration",""),t.parent().removeClass("fancybox-is-scaling"))}},n.fn.fancybox=function(t){var e;return t=t||{},e=t.selector||!1,e?n("body").off("click.fb-start",e).on("click.fb-start",e,{options:t},i):this.off("click.fb-start").on("click.fb-start",{items:this,options:t},i),this},r.on("click.fb-start","[data-fancybox]",i),r.on("click.fb-start","[data-fancybox-trigger]",function(t){n('[data-fancybox="'+n(this).attr("data-fancybox-trigger")+'"]').eq(n(this).attr("data-fancybox-index")||0).trigger("click.fb-start",{$trigger:n(this)})}),function(){var t=null;r.on("mousedown mouseup focus blur",".fancybox-button",function(e){switch(e.type){case"mousedown":t=n(this);break;case"mouseup":t=null;break;case"focusin":n(".fancybox-button").removeClass("fancybox-focus"),n(this).is(t)||n(this).is("[disabled]")||n(this).addClass("fancybox-focus");break;case"focusout":n(".fancybox-button").removeClass("fancybox-focus")}})}()}}(window,document,jQuery),function(t){"use strict";var e={youtube:{matcher:/(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,params:{autoplay:1,autohide:1,fs:1,rel:0,hd:1,wmode:"transparent",enablejsapi:1,html5:1},paramPlace:8,type:"iframe",url:"https://www.youtube-nocookie.com/embed/$4",thumb:"https://img.youtube.com/vi/$4/hqdefault.jpg"},vimeo:{matcher:/^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,params:{autoplay:1,hd:1,show_title:1,show_byline:1,show_portrait:0,fullscreen:1},paramPlace:3,type:"iframe",url:"//player.vimeo.com/video/$2"},instagram:{matcher:/(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,type:"image",url:"//$1/p/$2/media/?size=l"},gmap_place:{matcher:/(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,type:"iframe",url:function(t){return"//maps.google."+t[2]+"/?ll="+(t[9]?t[9]+"&z="+Math.floor(t[10])+(t[12]?t[12].replace(/^\//,"&"):""):t[12]+"").replace(/\?/,"&")+"&output="+(t[12]&&t[12].indexOf("layer=c")>0?"svembed":"embed")}},gmap_search:{matcher:/(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,type:"iframe",url:function(t){return"//maps.google."+t[2]+"/maps?q="+t[5].replace("query=","q=").replace("api=1","")+"&output=embed"}}},n=function(e,n,o){if(e)return o=o||"","object"===t.type(o)&&(o=t.param(o,!0)),t.each(n,function(t,n){e=e.replace("$"+t,n||"")}),o.length&&(e+=(e.indexOf("?")>0?"&":"?")+o),e};t(document).on("objectNeedsType.fb",function(o,i,a){var s,r,c,l,d,u,f,p=a.src||"",h=!1;s=t.extend(!0,{},e,a.opts.media),t.each(s,function(e,o){if(c=p.match(o.matcher)){if(h=o.type,f=e,u={},o.paramPlace&&c[o.paramPlace]){d=c[o.paramPlace],"?"==d[0]&&(d=d.substring(1)),d=d.split("&");for(var i=0;i<d.length;++i){var s=d[i].split("=",2);2==s.length&&(u[s[0]]=decodeURIComponent(s[1].replace(/\+/g," ")))}}return l=t.extend(!0,{},o.params,a.opts[e],u),p="function"===t.type(o.url)?o.url.call(this,c,l,a):n(o.url,c,l),r="function"===t.type(o.thumb)?o.thumb.call(this,c,l,a):n(o.thumb,c),"youtube"===e?p=p.replace(/&t=((\d+)m)?(\d+)s/,function(t,e,n,o){return"&start="+((n?60*parseInt(n,10):0)+parseInt(o,10))}):"vimeo"===e&&(p=p.replace("&%23","#")),!1}}),h?(a.opts.thumb||a.opts.$thumb&&a.opts.$thumb.length||(a.opts.thumb=r),"iframe"===h&&(a.opts=t.extend(!0,a.opts,{iframe:{preload:!1,attr:{scrolling:"no"}}})),t.extend(a,{type:h,src:p,origSrc:a.src,contentSource:f,contentType:"image"===h?"image":"gmap_place"==f||"gmap_search"==f?"map":"video"})):p&&(a.type=a.opts.defaultType)});var o={youtube:{src:"https://www.youtube.com/iframe_api",class:"YT",loading:!1,loaded:!1},vimeo:{src:"https://player.vimeo.com/api/player.js",class:"Vimeo",loading:!1,loaded:!1},load:function(t){var e,n=this;if(this[t].loaded)return void setTimeout(function(){n.done(t)});this[t].loading||(this[t].loading=!0,e=document.createElement("script"),e.type="text/javascript",e.src=this[t].src,"youtube"===t?window.onYouTubeIframeAPIReady=function(){n[t].loaded=!0,n.done(t)}:e.onload=function(){n[t].loaded=!0,n.done(t)},document.body.appendChild(e))},done:function(e){var n,o,i;"youtube"===e&&delete window.onYouTubeIframeAPIReady,(n=t.fancybox.getInstance())&&(o=n.current.$content.find("iframe"),"youtube"===e&&void 0!==YT&&YT?i=new YT.Player(o.attr("id"),{events:{onStateChange:function(t){0==t.data&&n.next()}}}):"vimeo"===e&&void 0!==Vimeo&&Vimeo&&(i=new Vimeo.Player(o),i.on("ended",function(){n.next()})))}};t(document).on({"afterShow.fb":function(t,e,n){e.group.length>1&&("youtube"===n.contentSource||"vimeo"===n.contentSource)&&o.load(n.contentSource)}})}(jQuery),function(t,e,n){"use strict";var o=function(){return t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame||function(e){return t.setTimeout(e,1e3/60)}}(),i=function(){return t.cancelAnimationFrame||t.webkitCancelAnimationFrame||t.mozCancelAnimationFrame||t.oCancelAnimationFrame||function(e){t.clearTimeout(e)}}(),a=function(e){var n=[];e=e.originalEvent||e||t.e,e=e.touches&&e.touches.length?e.touches:e.changedTouches&&e.changedTouches.length?e.changedTouches:[e];for(var o in e)e[o].pageX?n.push({x:e[o].pageX,y:e[o].pageY}):e[o].clientX&&n.push({x:e[o].clientX,y:e[o].clientY});return n},s=function(t,e,n){return e&&t?"x"===n?t.x-e.x:"y"===n?t.y-e.y:Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2)):0},r=function(t){if(t.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe')||n.isFunction(t.get(0).onclick)||t.data("selectable"))return!0;for(var e=0,o=t[0].attributes,i=o.length;e<i;e++)if("data-fancybox-"===o[e].nodeName.substr(0,14))return!0;return!1},c=function(e){var n=t.getComputedStyle(e)["overflow-y"],o=t.getComputedStyle(e)["overflow-x"],i=("scroll"===n||"auto"===n)&&e.scrollHeight>e.clientHeight,a=("scroll"===o||"auto"===o)&&e.scrollWidth>e.clientWidth;return i||a},l=function(t){for(var e=!1;;){if(e=c(t.get(0)))break;if(t=t.parent(),!t.length||t.hasClass("fancybox-stage")||t.is("body"))break}return e},d=function(t){var e=this;e.instance=t,e.$bg=t.$refs.bg,e.$stage=t.$refs.stage,e.$container=t.$refs.container,e.destroy(),e.$container.on("touchstart.fb.touch mousedown.fb.touch",n.proxy(e,"ontouchstart"))};d.prototype.destroy=function(){var t=this;t.$container.off(".fb.touch"),n(e).off(".fb.touch"),t.requestId&&(i(t.requestId),t.requestId=null),t.tapped&&(clearTimeout(t.tapped),t.tapped=null)},d.prototype.ontouchstart=function(o){var i=this,c=n(o.target),d=i.instance,u=d.current,f=u.$slide,p=u.$content,h="touchstart"==o.type;if(h&&i.$container.off("mousedown.fb.touch"),(!o.originalEvent||2!=o.originalEvent.button)&&f.length&&c.length&&!r(c)&&!r(c.parent())&&(c.is("img")||!(o.originalEvent.clientX>c[0].clientWidth+c.offset().left))){if(!u||d.isAnimating||u.$slide.hasClass("fancybox-animated"))return o.stopPropagation(),void o.preventDefault();i.realPoints=i.startPoints=a(o),i.startPoints.length&&(u.touch&&o.stopPropagation(),i.startEvent=o,i.canTap=!0,i.$target=c,i.$content=p,i.opts=u.opts.touch,i.isPanning=!1,i.isSwiping=!1,i.isZooming=!1,i.isScrolling=!1,i.canPan=d.canPan(),i.startTime=(new Date).getTime(),i.distanceX=i.distanceY=i.distance=0,i.canvasWidth=Math.round(f[0].clientWidth),i.canvasHeight=Math.round(f[0].clientHeight),i.contentLastPos=null,i.contentStartPos=n.fancybox.getTranslate(i.$content)||{top:0,left:0},i.sliderStartPos=n.fancybox.getTranslate(f),i.stagePos=n.fancybox.getTranslate(d.$refs.stage),i.sliderStartPos.top-=i.stagePos.top,i.sliderStartPos.left-=i.stagePos.left,i.contentStartPos.top-=i.stagePos.top,i.contentStartPos.left-=i.stagePos.left,n(e).off(".fb.touch").on(h?"touchend.fb.touch touchcancel.fb.touch":"mouseup.fb.touch mouseleave.fb.touch",n.proxy(i,"ontouchend")).on(h?"touchmove.fb.touch":"mousemove.fb.touch",n.proxy(i,"ontouchmove")),n.fancybox.isMobile&&e.addEventListener("scroll",i.onscroll,!0),((i.opts||i.canPan)&&(c.is(i.$stage)||i.$stage.find(c).length)||(c.is(".fancybox-image")&&o.preventDefault(),n.fancybox.isMobile&&c.parents(".fancybox-caption").length))&&(i.isScrollable=l(c)||l(c.parent()),n.fancybox.isMobile&&i.isScrollable||o.preventDefault(),(1===i.startPoints.length||u.hasError)&&(i.canPan?(n.fancybox.stop(i.$content),i.isPanning=!0):i.isSwiping=!0,i.$container.addClass("fancybox-is-grabbing")),2===i.startPoints.length&&"image"===u.type&&(u.isLoaded||u.$ghost)&&(i.canTap=!1,i.isSwiping=!1,i.isPanning=!1,i.isZooming=!0,n.fancybox.stop(i.$content),i.centerPointStartX=.5*(i.startPoints[0].x+i.startPoints[1].x)-n(t).scrollLeft(),i.centerPointStartY=.5*(i.startPoints[0].y+i.startPoints[1].y)-n(t).scrollTop(),i.percentageOfImageAtPinchPointX=(i.centerPointStartX-i.contentStartPos.left)/i.contentStartPos.width,i.percentageOfImageAtPinchPointY=(i.centerPointStartY-i.contentStartPos.top)/i.contentStartPos.height,i.startDistanceBetweenFingers=s(i.startPoints[0],i.startPoints[1]))))}},d.prototype.onscroll=function(t){var n=this;n.isScrolling=!0,e.removeEventListener("scroll",n.onscroll,!0)},d.prototype.ontouchmove=function(t){var e=this;return void 0!==t.originalEvent.buttons&&0===t.originalEvent.buttons?void e.ontouchend(t):e.isScrolling?void(e.canTap=!1):(e.newPoints=a(t),void((e.opts||e.canPan)&&e.newPoints.length&&e.newPoints.length&&(e.isSwiping&&!0===e.isSwiping||t.preventDefault(),e.distanceX=s(e.newPoints[0],e.startPoints[0],"x"),e.distanceY=s(e.newPoints[0],e.startPoints[0],"y"),e.distance=s(e.newPoints[0],e.startPoints[0]),e.distance>0&&(e.isSwiping?e.onSwipe(t):e.isPanning?e.onPan():e.isZooming&&e.onZoom()))))},d.prototype.onSwipe=function(e){var a,s=this,r=s.instance,c=s.isSwiping,l=s.sliderStartPos.left||0;if(!0!==c)"x"==c&&(s.distanceX>0&&(s.instance.group.length<2||0===s.instance.current.index&&!s.instance.current.opts.loop)?l+=Math.pow(s.distanceX,.8):s.distanceX<0&&(s.instance.group.length<2||s.instance.current.index===s.instance.group.length-1&&!s.instance.current.opts.loop)?l-=Math.pow(-s.distanceX,.8):l+=s.distanceX),s.sliderLastPos={top:"x"==c?0:s.sliderStartPos.top+s.distanceY,left:l},s.requestId&&(i(s.requestId),s.requestId=null),s.requestId=o(function(){s.sliderLastPos&&(n.each(s.instance.slides,function(t,e){var o=e.pos-s.instance.currPos;n.fancybox.setTranslate(e.$slide,{top:s.sliderLastPos.top,left:s.sliderLastPos.left+o*s.canvasWidth+o*e.opts.gutter})}),s.$container.addClass("fancybox-is-sliding"))});else if(Math.abs(s.distance)>10){if(s.canTap=!1,r.group.length<2&&s.opts.vertical?s.isSwiping="y":r.isDragging||!1===s.opts.vertical||"auto"===s.opts.vertical&&n(t).width()>800?s.isSwiping="x":(a=Math.abs(180*Math.atan2(s.distanceY,s.distanceX)/Math.PI),s.isSwiping=a>45&&a<135?"y":"x"),"y"===s.isSwiping&&n.fancybox.isMobile&&s.isScrollable)return void(s.isScrolling=!0);r.isDragging=s.isSwiping,s.startPoints=s.newPoints,n.each(r.slides,function(t,e){var o,i;n.fancybox.stop(e.$slide),o=n.fancybox.getTranslate(e.$slide),i=n.fancybox.getTranslate(r.$refs.stage),e.$slide.css({transform:"",opacity:"","transition-duration":""}).removeClass("fancybox-animated").removeClass(function(t,e){return(e.match(/(^|\s)fancybox-fx-\S+/g)||[]).join(" ")}),e.pos===r.current.pos&&(s.sliderStartPos.top=o.top-i.top,s.sliderStartPos.left=o.left-i.left),n.fancybox.setTranslate(e.$slide,{top:o.top-i.top,left:o.left-i.left})}),r.SlideShow&&r.SlideShow.isActive&&r.SlideShow.stop()}},d.prototype.onPan=function(){var t=this;if(s(t.newPoints[0],t.realPoints[0])<(n.fancybox.isMobile?10:5))return void(t.startPoints=t.newPoints);t.canTap=!1,t.contentLastPos=t.limitMovement(),t.requestId&&i(t.requestId),t.requestId=o(function(){n.fancybox.setTranslate(t.$content,t.contentLastPos)})},d.prototype.limitMovement=function(){var t,e,n,o,i,a,s=this,r=s.canvasWidth,c=s.canvasHeight,l=s.distanceX,d=s.distanceY,u=s.contentStartPos,f=u.left,p=u.top,h=u.width,g=u.height;return i=h>r?f+l:f,a=p+d,t=Math.max(0,.5*r-.5*h),e=Math.max(0,.5*c-.5*g),n=Math.min(r-h,.5*r-.5*h),o=Math.min(c-g,.5*c-.5*g),l>0&&i>t&&(i=t-1+Math.pow(-t+f+l,.8)||0),l<0&&i<n&&(i=n+1-Math.pow(n-f-l,.8)||0),d>0&&a>e&&(a=e-1+Math.pow(-e+p+d,.8)||0),d<0&&a<o&&(a=o+1-Math.pow(o-p-d,.8)||0),{top:a,left:i}},d.prototype.limitPosition=function(t,e,n,o){var i=this,a=i.canvasWidth,s=i.canvasHeight;return n>a?(t=t>0?0:t,t=t<a-n?a-n:t):t=Math.max(0,a/2-n/2),o>s?(e=e>0?0:e,e=e<s-o?s-o:e):e=Math.max(0,s/2-o/2),{top:e,left:t}},d.prototype.onZoom=function(){var e=this,a=e.contentStartPos,r=a.width,c=a.height,l=a.left,d=a.top,u=s(e.newPoints[0],e.newPoints[1]),f=u/e.startDistanceBetweenFingers,p=Math.floor(r*f),h=Math.floor(c*f),g=(r-p)*e.percentageOfImageAtPinchPointX,b=(c-h)*e.percentageOfImageAtPinchPointY,m=(e.newPoints[0].x+e.newPoints[1].x)/2-n(t).scrollLeft(),v=(e.newPoints[0].y+e.newPoints[1].y)/2-n(t).scrollTop(),y=m-e.centerPointStartX,x=v-e.centerPointStartY,w=l+(g+y),$=d+(b+x),S={top:$,left:w,scaleX:f,scaleY:f};e.canTap=!1,e.newWidth=p,e.newHeight=h,e.contentLastPos=S,e.requestId&&i(e.requestId),e.requestId=o(function(){n.fancybox.setTranslate(e.$content,e.contentLastPos)})},d.prototype.ontouchend=function(t){var o=this,s=o.isSwiping,r=o.isPanning,c=o.isZooming,l=o.isScrolling;if(o.endPoints=a(t),o.dMs=Math.max((new Date).getTime()-o.startTime,1),o.$container.removeClass("fancybox-is-grabbing"),n(e).off(".fb.touch"),e.removeEventListener("scroll",o.onscroll,!0),o.requestId&&(i(o.requestId),o.requestId=null),o.isSwiping=!1,o.isPanning=!1,o.isZooming=!1,o.isScrolling=!1,o.instance.isDragging=!1,o.canTap)return o.onTap(t);o.speed=100,o.velocityX=o.distanceX/o.dMs*.5,o.velocityY=o.distanceY/o.dMs*.5,r?o.endPanning():c?o.endZooming():o.endSwiping(s,l)},d.prototype.endSwiping=function(t,e){var o=this,i=!1,a=o.instance.group.length,s=Math.abs(o.distanceX),r="x"==t&&a>1&&(o.dMs>130&&s>10||s>50);o.sliderLastPos=null,"y"==t&&!e&&Math.abs(o.distanceY)>50?(n.fancybox.animate(o.instance.current.$slide,{top:o.sliderStartPos.top+o.distanceY+150*o.velocityY,opacity:0},200),i=o.instance.close(!0,250)):r&&o.distanceX>0?i=o.instance.previous(300):r&&o.distanceX<0&&(i=o.instance.next(300)),!1!==i||"x"!=t&&"y"!=t||o.instance.centerSlide(200),o.$container.removeClass("fancybox-is-sliding")},d.prototype.endPanning=function(){var t,e,o,i=this;i.contentLastPos&&(!1===i.opts.momentum||i.dMs>350?(t=i.contentLastPos.left,e=i.contentLastPos.top):(t=i.contentLastPos.left+500*i.velocityX,e=i.contentLastPos.top+500*i.velocityY),o=i.limitPosition(t,e,i.contentStartPos.width,i.contentStartPos.height),o.width=i.contentStartPos.width,o.height=i.contentStartPos.height,n.fancybox.animate(i.$content,o,366))},d.prototype.endZooming=function(){var t,e,o,i,a=this,s=a.instance.current,r=a.newWidth,c=a.newHeight;a.contentLastPos&&(t=a.contentLastPos.left,e=a.contentLastPos.top,i={top:e,left:t,width:r,height:c,scaleX:1,scaleY:1},n.fancybox.setTranslate(a.$content,i),r<a.canvasWidth&&c<a.canvasHeight?a.instance.scaleToFit(150):r>s.width||c>s.height?a.instance.scaleToActual(a.centerPointStartX,a.centerPointStartY,150):(o=a.limitPosition(t,e,r,c),n.fancybox.animate(a.$content,o,150)))},d.prototype.onTap=function(e){var o,i=this,s=n(e.target),r=i.instance,c=r.current,l=e&&a(e)||i.startPoints,d=l[0]?l[0].x-n(t).scrollLeft()-i.stagePos.left:0,u=l[0]?l[0].y-n(t).scrollTop()-i.stagePos.top:0,f=function(t){var o=c.opts[t];if(n.isFunction(o)&&(o=o.apply(r,[c,e])),o)switch(o){case"close":r.close(i.startEvent);break;case"toggleControls":r.toggleControls();break;case"next":r.next();break;case"nextOrClose":r.group.length>1?r.next():r.close(i.startEvent);break;case"zoom":"image"==c.type&&(c.isLoaded||c.$ghost)&&(r.canPan()?r.scaleToFit():r.isScaledDown()?r.scaleToActual(d,u):r.group.length<2&&r.close(i.startEvent))}};if((!e.originalEvent||2!=e.originalEvent.button)&&(s.is("img")||!(d>s[0].clientWidth+s.offset().left))){if(s.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container"))o="Outside";else if(s.is(".fancybox-slide"))o="Slide";else{if(!r.current.$content||!r.current.$content.find(s).addBack().filter(s).length)return;o="Content"}if(i.tapped){if(clearTimeout(i.tapped),i.tapped=null,Math.abs(d-i.tapX)>50||Math.abs(u-i.tapY)>50)return this;f("dblclick"+o)}else i.tapX=d,i.tapY=u,c.opts["dblclick"+o]&&c.opts["dblclick"+o]!==c.opts["click"+o]?i.tapped=setTimeout(function(){i.tapped=null,r.isAnimating||f("click"+o)},500):f("click"+o);return this}},n(e).on("onActivate.fb",function(t,e){e&&!e.Guestures&&(e.Guestures=new d(e))}).on("beforeClose.fb",function(t,e){e&&e.Guestures&&e.Guestures.destroy()})}(window,document,jQuery),function(t,e){"use strict";e.extend(!0,e.fancybox.defaults,{btnTpl:{slideShow:'<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg></button>'},slideShow:{autoStart:!1,speed:3e3,progress:!0}});var n=function(t){this.instance=t,this.init()};e.extend(n.prototype,{timer:null,isActive:!1,$button:null,init:function(){var t=this,n=t.instance,o=n.group[n.currIndex].opts.slideShow;t.$button=n.$refs.toolbar.find("[data-fancybox-play]").on("click",function(){t.toggle()}),n.group.length<2||!o?t.$button.hide():o.progress&&(t.$progress=e('<div class="fancybox-progress"></div>').appendTo(n.$refs.inner))},set:function(t){var n=this,o=n.instance,i=o.current;i&&(!0===t||i.opts.loop||o.currIndex<o.group.length-1)?n.isActive&&"video"!==i.contentType&&(n.$progress&&e.fancybox.animate(n.$progress.show(),{scaleX:1},i.opts.slideShow.speed),n.timer=setTimeout(function(){o.current.opts.loop||o.current.index!=o.group.length-1?o.next():o.jumpTo(0)},i.opts.slideShow.speed)):(n.stop(),o.idleSecondsCounter=0,o.showControls())},clear:function(){var t=this;clearTimeout(t.timer),t.timer=null,t.$progress&&t.$progress.removeAttr("style").hide()},start:function(){var t=this,e=t.instance.current;e&&(t.$button.attr("title",(e.opts.i18n[e.opts.lang]||e.opts.i18n.en).PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause"),t.isActive=!0,e.isComplete&&t.set(!0),t.instance.trigger("onSlideShowChange",!0))},stop:function(){var t=this,e=t.instance.current;t.clear(),t.$button.attr("title",(e.opts.i18n[e.opts.lang]||e.opts.i18n.en).PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play"),t.isActive=!1,t.instance.trigger("onSlideShowChange",!1),t.$progress&&t.$progress.removeAttr("style").hide()},toggle:function(){var t=this;t.isActive?t.stop():t.start()}}),e(t).on({"onInit.fb":function(t,e){e&&!e.SlideShow&&(e.SlideShow=new n(e))},"beforeShow.fb":function(t,e,n,o){var i=e&&e.SlideShow;o?i&&n.opts.slideShow.autoStart&&i.start():i&&i.isActive&&i.clear()},"afterShow.fb":function(t,e,n){var o=e&&e.SlideShow;o&&o.isActive&&o.set()},"afterKeydown.fb":function(n,o,i,a,s){var r=o&&o.SlideShow;!r||!i.opts.slideShow||80!==s&&32!==s||e(t.activeElement).is("button,a,input")||(a.preventDefault(),r.toggle())},"beforeClose.fb onDeactivate.fb":function(t,e){var n=e&&e.SlideShow;n&&n.stop()}}),e(t).on("visibilitychange",function(){var n=e.fancybox.getInstance(),o=n&&n.SlideShow;o&&o.isActive&&(t.hidden?o.clear():o.set())})}(document,jQuery),function(t,e){"use strict";var n=function(){for(var e=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],n={},o=0;o<e.length;o++){var i=e[o];if(i&&i[1]in t){for(var a=0;a<i.length;a++)n[e[0][a]]=i[a];return n}}return!1}();if(n){var o={request:function(e){e=e||t.documentElement,e[n.requestFullscreen](e.ALLOW_KEYBOARD_INPUT)},exit:function(){t[n.exitFullscreen]()},toggle:function(e){e=e||t.documentElement,this.isFullscreen()?this.exit():this.request(e)},isFullscreen:function(){return Boolean(t[n.fullscreenElement])},enabled:function(){return Boolean(t[n.fullscreenEnabled])}};e.extend(!0,e.fancybox.defaults,{btnTpl:{fullScreen:'<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg></button>'},fullScreen:{autoStart:!1}}),e(t).on(n.fullscreenchange,function(){var t=o.isFullscreen(),n=e.fancybox.getInstance();n&&(n.current&&"image"===n.current.type&&n.isAnimating&&(n.isAnimating=!1,n.update(!0,!0,0),n.isComplete||n.complete()),n.trigger("onFullscreenChange",t),n.$refs.container.toggleClass("fancybox-is-fullscreen",t),n.$refs.toolbar.find("[data-fancybox-fullscreen]").toggleClass("fancybox-button--fsenter",!t).toggleClass("fancybox-button--fsexit",t))})}e(t).on({"onInit.fb":function(t,e){var i;if(!n)return void e.$refs.toolbar.find("[data-fancybox-fullscreen]").remove();e&&e.group[e.currIndex].opts.fullScreen?(i=e.$refs.container,i.on("click.fb-fullscreen","[data-fancybox-fullscreen]",function(t){t.stopPropagation(),t.preventDefault(),o.toggle()}),e.opts.fullScreen&&!0===e.opts.fullScreen.autoStart&&o.request(),e.FullScreen=o):e&&e.$refs.toolbar.find("[data-fancybox-fullscreen]").hide()},"afterKeydown.fb":function(t,e,n,o,i){e&&e.FullScreen&&70===i&&(o.preventDefault(),e.FullScreen.toggle())},"beforeClose.fb":function(t,e){e&&e.FullScreen&&e.$refs.container.hasClass("fancybox-is-fullscreen")&&o.exit()}})}(document,jQuery),function(t,e){"use strict";var n="fancybox-thumbs";e.fancybox.defaults=e.extend(!0,{btnTpl:{thumbs:'<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg></button>'},thumbs:{autoStart:!1,hideOnClose:!0,parentEl:".fancybox-container",axis:"y"}},e.fancybox.defaults);var o=function(t){this.init(t)};e.extend(o.prototype,{$button:null,$grid:null,$list:null,isVisible:!1,isActive:!1,init:function(t){var e=this,n=t.group,o=0;e.instance=t,e.opts=n[t.currIndex].opts.thumbs,t.Thumbs=e,e.$button=t.$refs.toolbar.find("[data-fancybox-thumbs]");for(var i=0,a=n.length;i<a&&(n[i].thumb&&o++,!(o>1));i++);o>1&&e.opts?(e.$button.removeAttr("style").on("click",function(){e.toggle()}),e.isActive=!0):e.$button.hide()},create:function(){var t,o=this,i=o.instance,a=o.opts.parentEl,s=[];o.$grid||(o.$grid=e('<div class="'+n+" "+n+"-"+o.opts.axis+'"></div>').appendTo(i.$refs.container.find(a).addBack().filter(a)),o.$grid.on("click","a",function(){i.jumpTo(e(this).attr("data-index"))})),o.$list||(o.$list=e('<div class="'+n+'__list">').appendTo(o.$grid)),e.each(i.group,function(e,n){t=n.thumb,t||"image"!==n.type||(t=n.src),s.push('<a href="javascript:;" tabindex="0" data-index="'+e+'"'+(t&&t.length?' style="background-image:url('+t+')"':'class="fancybox-thumbs-missing"')+"></a>")}),o.$list[0].innerHTML=s.join(""),"x"===o.opts.axis&&o.$list.width(parseInt(o.$grid.css("padding-right"),10)+i.group.length*o.$list.children().eq(0).outerWidth(!0))},focus:function(t){var e,n,o=this,i=o.$list,a=o.$grid;o.instance.current&&(e=i.children().removeClass("fancybox-thumbs-active").filter('[data-index="'+o.instance.current.index+'"]').addClass("fancybox-thumbs-active"),n=e.position(),"y"===o.opts.axis&&(n.top<0||n.top>i.height()-e.outerHeight())?i.stop().animate({scrollTop:i.scrollTop()+n.top},t):"x"===o.opts.axis&&(n.left<a.scrollLeft()||n.left>a.scrollLeft()+(a.width()-e.outerWidth()))&&i.parent().stop().animate({scrollLeft:n.left},t))},update:function(){var t=this;t.instance.$refs.container.toggleClass("fancybox-show-thumbs",this.isVisible),t.isVisible?(t.$grid||t.create(),t.instance.trigger("onThumbsShow"),t.focus(0)):t.$grid&&t.instance.trigger("onThumbsHide"),t.instance.update()},hide:function(){this.isVisible=!1,this.update()},show:function(){this.isVisible=!0,this.update()},toggle:function(){this.isVisible=!this.isVisible,this.update()}}),e(t).on({"onInit.fb":function(t,e){var n;e&&!e.Thumbs&&(n=new o(e),n.isActive&&!0===n.opts.autoStart&&n.show())},"beforeShow.fb":function(t,e,n,o){var i=e&&e.Thumbs;i&&i.isVisible&&i.focus(o?0:250)},"afterKeydown.fb":function(t,e,n,o,i){var a=e&&e.Thumbs;a&&a.isActive&&71===i&&(o.preventDefault(),a.toggle())},"beforeClose.fb":function(t,e){var n=e&&e.Thumbs;n&&n.isVisible&&!1!==n.opts.hideOnClose&&n.$grid.hide()}})}(document,jQuery),function(t,e){"use strict";function n(t){var e={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};return String(t).replace(/[&<>"'`=\/]/g,function(t){return e[t]})}e.extend(!0,e.fancybox.defaults,{btnTpl:{share:'<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg></button>'},share:{url:function(t,e){return!t.currentHash&&"inline"!==e.type&&"html"!==e.type&&(e.origSrc||e.src)||window.location},
tpl:'<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p></div>'}}),e(t).on("click","[data-fancybox-share]",function(){var t,o,i=e.fancybox.getInstance(),a=i.current||null;a&&("function"===e.type(a.opts.share.url)&&(t=a.opts.share.url.apply(a,[i,a])),o=a.opts.share.tpl.replace(/\{\{media\}\}/g,"image"===a.type?encodeURIComponent(a.src):"").replace(/\{\{url\}\}/g,encodeURIComponent(t)).replace(/\{\{url_raw\}\}/g,n(t)).replace(/\{\{descr\}\}/g,i.$caption?encodeURIComponent(i.$caption.text()):""),e.fancybox.open({src:i.translate(i,o),type:"html",opts:{touch:!1,animationEffect:!1,afterLoad:function(t,e){i.$refs.container.one("beforeClose.fb",function(){t.close(null,0)}),e.$content.find(".fancybox-share__button").click(function(){return window.open(this.href,"Share","width=550, height=450"),!1})},mobile:{autoFocus:!1}}}))})}(document,jQuery),function(t,e,n){"use strict";function o(){var e=t.location.hash.substr(1),n=e.split("-"),o=n.length>1&&/^\+?\d+$/.test(n[n.length-1])?parseInt(n.pop(-1),10)||1:1,i=n.join("-");return{hash:e,index:o<1?1:o,gallery:i}}function i(t){""!==t.gallery&&n("[data-fancybox='"+n.escapeSelector(t.gallery)+"']").eq(t.index-1).focus().trigger("click.fb-start")}function a(t){var e,n;return!!t&&(e=t.current?t.current.opts:t.opts,""!==(n=e.hash||(e.$orig?e.$orig.data("fancybox")||e.$orig.data("fancybox-trigger"):""))&&n)}n.escapeSelector||(n.escapeSelector=function(t){return(t+"").replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,function(t,e){return e?"\0"===t?"�":t.slice(0,-1)+"\\"+t.charCodeAt(t.length-1).toString(16)+" ":"\\"+t})}),n(function(){!1!==n.fancybox.defaults.hash&&(n(e).on({"onInit.fb":function(t,e){var n,i;!1!==e.group[e.currIndex].opts.hash&&(n=o(),(i=a(e))&&n.gallery&&i==n.gallery&&(e.currIndex=n.index-1))},"beforeShow.fb":function(n,o,i,s){var r;i&&!1!==i.opts.hash&&(r=a(o))&&(o.currentHash=r+(o.group.length>1?"-"+(i.index+1):""),t.location.hash!=="#"+o.currentHash&&(s&&!o.origHash&&(o.origHash=t.location.hash),o.hashTimer&&clearTimeout(o.hashTimer),o.hashTimer=setTimeout(function(){"replaceState"in t.history?(t.history[s?"pushState":"replaceState"]({},e.title,t.location.pathname+t.location.search+"#"+o.currentHash),s&&(o.hasCreatedHistory=!0)):t.location.hash=o.currentHash,o.hashTimer=null},300)))},"beforeClose.fb":function(n,o,i){i&&!1!==i.opts.hash&&(clearTimeout(o.hashTimer),o.currentHash&&o.hasCreatedHistory?t.history.back():o.currentHash&&("replaceState"in t.history?t.history.replaceState({},e.title,t.location.pathname+t.location.search+(o.origHash||"")):t.location.hash=o.origHash),o.currentHash=null)}}),n(t).on("hashchange.fb",function(){var t=o(),e=null;n.each(n(".fancybox-container").get().reverse(),function(t,o){var i=n(o).data("FancyBox");if(i&&i.currentHash)return e=i,!1}),e?e.currentHash===t.gallery+"-"+t.index||1===t.index&&e.currentHash==t.gallery||(e.currentHash=null,e.close()):""!==t.gallery&&i(t)}),setTimeout(function(){n.fancybox.getInstance()||i(o())},50))})}(window,document,jQuery),function(t,e){"use strict";var n=(new Date).getTime();e(t).on({"onInit.fb":function(t,e,o){e.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll",function(t){var o=e.current,i=(new Date).getTime();e.group.length<2||!1===o.opts.wheel||"auto"===o.opts.wheel&&"image"!==o.type||(t.preventDefault(),t.stopPropagation(),o.$slide.hasClass("fancybox-animated")||(t=t.originalEvent||t,i-n<250||(n=i,e[(-t.deltaY||-t.deltaX||t.wheelDelta||-t.detail)<0?"next":"previous"]())))})}})}(document,jQuery);
/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.7.1
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
/* global window, document, define, jQuery, setInterval, clearInterval */
;(function(factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports !== 'undefined') {
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery);
    }

}(function($) {
    'use strict';
    var Slick = window.Slick || {};

    Slick = (function() {

        var instanceUid = 0;

        function Slick(element, settings) {

            var _ = this, dataSettings;

            _.defaults = {
                accessibility: true,
                adaptiveHeight: false,
                appendArrows: $(element),
                appendDots: $(element),
                arrows: true,
                asNavFor: null,
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: false,
                autoplaySpeed: 3000,
                centerMode: false,
                centerPadding: '50px',
                cssEase: 'ease',
                customPaging: function(slider, i) {
                    return $('<button type="button" />').text(i + 1);
                },
                dots: false,
                dotsClass: 'slick-dots',
                draggable: true,
                easing: 'linear',
                edgeFriction: 0.35,
                fade: false,
                focusOnSelect: false,
                focusOnChange: false,
                infinite: true,
                initialSlide: 0,
                lazyLoad: 'ondemand',
                mobileFirst: false,
                pauseOnHover: true,
                pauseOnFocus: true,
                pauseOnDotsHover: false,
                respondTo: 'window',
                responsive: null,
                rows: 1,
                rtl: false,
                slide: '',
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: true,
                swipeToSlide: false,
                touchMove: true,
                touchThreshold: 5,
                useCSS: true,
                useTransform: true,
                variableWidth: false,
                vertical: false,
                verticalSwiping: false,
                waitForAnimate: true,
                zIndex: 1000
            };

            _.initials = {
                animating: false,
                dragging: false,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                scrolling: false,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: false,
                slideOffset: 0,
                swipeLeft: null,
                swiping: false,
                $list: null,
                touchObject: {},
                transformsEnabled: false,
                unslicked: false
            };

            $.extend(_, _.initials);

            _.activeBreakpoint = null;
            _.animType = null;
            _.animProp = null;
            _.breakpoints = [];
            _.breakpointSettings = [];
            _.cssTransitions = false;
            _.focussed = false;
            _.interrupted = false;
            _.hidden = 'hidden';
            _.paused = true;
            _.positionProp = null;
            _.respondTo = null;
            _.rowCount = 1;
            _.shouldClick = true;
            _.$slider = $(element);
            _.$slidesCache = null;
            _.transformType = null;
            _.transitionType = null;
            _.visibilityChange = 'visibilitychange';
            _.windowWidth = 0;
            _.windowTimer = null;

            dataSettings = $(element).data('slick') || {};

            _.options = $.extend({}, _.defaults, settings, dataSettings);

            _.currentSlide = _.options.initialSlide;

            _.originalSettings = _.options;

            if (typeof document.mozHidden !== 'undefined') {
                _.hidden = 'mozHidden';
                _.visibilityChange = 'mozvisibilitychange';
            } else if (typeof document.webkitHidden !== 'undefined') {
                _.hidden = 'webkitHidden';
                _.visibilityChange = 'webkitvisibilitychange';
            }

            _.autoPlay = $.proxy(_.autoPlay, _);
            _.autoPlayClear = $.proxy(_.autoPlayClear, _);
            _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);
            _.changeSlide = $.proxy(_.changeSlide, _);
            _.clickHandler = $.proxy(_.clickHandler, _);
            _.selectHandler = $.proxy(_.selectHandler, _);
            _.setPosition = $.proxy(_.setPosition, _);
            _.swipeHandler = $.proxy(_.swipeHandler, _);
            _.dragHandler = $.proxy(_.dragHandler, _);
            _.keyHandler = $.proxy(_.keyHandler, _);

            _.instanceUid = instanceUid++;

            // A simple way to check for HTML strings
            // Strict HTML recognition (must start with <)
            // Extracted from jQuery v1.11 source
            _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;


            _.registerBreakpoints();
            _.init(true);

        }

        return Slick;

    }());

    Slick.prototype.activateADA = function() {
        var _ = this;

        _.$slideTrack.find('.slick-active').attr({
            'aria-hidden': 'false'
        }).find('a, input, button, select').attr({
            'tabindex': '0'
        });

    };

    Slick.prototype.addSlide = Slick.prototype.slickAdd = function(markup, index, addBefore) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            addBefore = index;
            index = null;
        } else if (index < 0 || (index >= _.slideCount)) {
            return false;
        }

        _.unload();

        if (typeof(index) === 'number') {
            if (index === 0 && _.$slides.length === 0) {
                $(markup).appendTo(_.$slideTrack);
            } else if (addBefore) {
                $(markup).insertBefore(_.$slides.eq(index));
            } else {
                $(markup).insertAfter(_.$slides.eq(index));
            }
        } else {
            if (addBefore === true) {
                $(markup).prependTo(_.$slideTrack);
            } else {
                $(markup).appendTo(_.$slideTrack);
            }
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slides.each(function(index, element) {
            $(element).attr('data-slick-index', index);
        });

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.animateHeight = function() {
        var _ = this;
        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.animate({
                height: targetHeight
            }, _.options.speed);
        }
    };

    Slick.prototype.animateSlide = function(targetLeft, callback) {

        var animProps = {},
            _ = this;

        _.animateHeight();

        if (_.options.rtl === true && _.options.vertical === false) {
            targetLeft = -targetLeft;
        }
        if (_.transformsEnabled === false) {
            if (_.options.vertical === false) {
                _.$slideTrack.animate({
                    left: targetLeft
                }, _.options.speed, _.options.easing, callback);
            } else {
                _.$slideTrack.animate({
                    top: targetLeft
                }, _.options.speed, _.options.easing, callback);
            }

        } else {

            if (_.cssTransitions === false) {
                if (_.options.rtl === true) {
                    _.currentLeft = -(_.currentLeft);
                }
                $({
                    animStart: _.currentLeft
                }).animate({
                    animStart: targetLeft
                }, {
                    duration: _.options.speed,
                    easing: _.options.easing,
                    step: function(now) {
                        now = Math.ceil(now);
                        if (_.options.vertical === false) {
                            animProps[_.animType] = 'translate(' +
                                now + 'px, 0px)';
                            _.$slideTrack.css(animProps);
                        } else {
                            animProps[_.animType] = 'translate(0px,' +
                                now + 'px)';
                            _.$slideTrack.css(animProps);
                        }
                    },
                    complete: function() {
                        if (callback) {
                            callback.call();
                        }
                    }
                });

            } else {

                _.applyTransition();
                targetLeft = Math.ceil(targetLeft);

                if (_.options.vertical === false) {
                    animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
                } else {
                    animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
                }
                _.$slideTrack.css(animProps);

                if (callback) {
                    setTimeout(function() {

                        _.disableTransition();

                        callback.call();
                    }, _.options.speed);
                }

            }

        }

    };

    Slick.prototype.getNavTarget = function() {

        var _ = this,
            asNavFor = _.options.asNavFor;

        if ( asNavFor && asNavFor !== null ) {
            asNavFor = $(asNavFor).not(_.$slider);
        }

        return asNavFor;

    };

    Slick.prototype.asNavFor = function(index) {

        var _ = this,
            asNavFor = _.getNavTarget();

        if ( asNavFor !== null && typeof asNavFor === 'object' ) {
            asNavFor.each(function() {
                var target = $(this).slick('getSlick');
                if(!target.unslicked) {
                    target.slideHandler(index, true);
                }
            });
        }

    };

    Slick.prototype.applyTransition = function(slide) {

        var _ = this,
            transition = {};

        if (_.options.fade === false) {
            transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
        } else {
            transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
        }

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.autoPlay = function() {

        var _ = this;

        _.autoPlayClear();

        if ( _.slideCount > _.options.slidesToShow ) {
            _.autoPlayTimer = setInterval( _.autoPlayIterator, _.options.autoplaySpeed );
        }

    };

    Slick.prototype.autoPlayClear = function() {

        var _ = this;

        if (_.autoPlayTimer) {
            clearInterval(_.autoPlayTimer);
        }

    };

    Slick.prototype.autoPlayIterator = function() {

        var _ = this,
            slideTo = _.currentSlide + _.options.slidesToScroll;

        if ( !_.paused && !_.interrupted && !_.focussed ) {

            if ( _.options.infinite === false ) {

                if ( _.direction === 1 && ( _.currentSlide + 1 ) === ( _.slideCount - 1 )) {
                    _.direction = 0;
                }

                else if ( _.direction === 0 ) {

                    slideTo = _.currentSlide - _.options.slidesToScroll;

                    if ( _.currentSlide - 1 === 0 ) {
                        _.direction = 1;
                    }

                }

            }

            _.slideHandler( slideTo );

        }

    };

    Slick.prototype.buildArrows = function() {

        var _ = this;

        if (_.options.arrows === true ) {

            _.$prevArrow = $(_.options.prevArrow).addClass('slick-arrow');
            _.$nextArrow = $(_.options.nextArrow).addClass('slick-arrow');

            if( _.slideCount > _.options.slidesToShow ) {

                _.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
                _.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');

                if (_.htmlExpr.test(_.options.prevArrow)) {
                    _.$prevArrow.prependTo(_.options.appendArrows);
                }

                if (_.htmlExpr.test(_.options.nextArrow)) {
                    _.$nextArrow.appendTo(_.options.appendArrows);
                }

                if (_.options.infinite !== true) {
                    _.$prevArrow
                        .addClass('slick-disabled')
                        .attr('aria-disabled', 'true');
                }

            } else {

                _.$prevArrow.add( _.$nextArrow )

                    .addClass('slick-hidden')
                    .attr({
                        'aria-disabled': 'true',
                        'tabindex': '-1'
                    });

            }

        }

    };

    Slick.prototype.buildDots = function() {

        var _ = this,
            i, dot;

        if (_.options.dots === true) {

            _.$slider.addClass('slick-dotted');

            dot = $('<ul />').addClass(_.options.dotsClass);

            for (i = 0; i <= _.getDotCount(); i += 1) {
                dot.append($('<li />').append(_.options.customPaging.call(this, _, i)));
            }

            _.$dots = dot.appendTo(_.options.appendDots);

            _.$dots.find('li').first().addClass('slick-active');

        }

    };

    Slick.prototype.buildOut = function() {

        var _ = this;

        _.$slides =
            _.$slider
                .children( _.options.slide + ':not(.slick-cloned)')
                .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        _.$slides.each(function(index, element) {
            $(element)
                .attr('data-slick-index', index)
                .data('originalStyling', $(element).attr('style') || '');
        });

        _.$slider.addClass('slick-slider');

        _.$slideTrack = (_.slideCount === 0) ?
            $('<div class="slick-track"/>').appendTo(_.$slider) :
            _.$slides.wrapAll('<div class="slick-track"/>').parent();

        _.$list = _.$slideTrack.wrap(
            '<div class="slick-list"/>').parent();
        _.$slideTrack.css('opacity', 0);

        if (_.options.centerMode === true || _.options.swipeToSlide === true) {
            _.options.slidesToScroll = 1;
        }

        $('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');

        _.setupInfinite();

        _.buildArrows();

        _.buildDots();

        _.updateDots();


        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        if (_.options.draggable === true) {
            _.$list.addClass('draggable');
        }

    };

    Slick.prototype.buildRows = function() {

        var _ = this, a, b, c, newSlides, numOfSlides, originalSlides,slidesPerSection;

        newSlides = document.createDocumentFragment();
        originalSlides = _.$slider.children();

        if(_.options.rows > 1) {

            slidesPerSection = _.options.slidesPerRow * _.options.rows;
            numOfSlides = Math.ceil(
                originalSlides.length / slidesPerSection
            );

            for(a = 0; a < numOfSlides; a++){
                var slide = document.createElement('div');
                for(b = 0; b < _.options.rows; b++) {
                    var row = document.createElement('div');
                    for(c = 0; c < _.options.slidesPerRow; c++) {
                        var target = (a * slidesPerSection + ((b * _.options.slidesPerRow) + c));
                        if (originalSlides.get(target)) {
                            row.appendChild(originalSlides.get(target));
                        }
                    }
                    slide.appendChild(row);
                }
                newSlides.appendChild(slide);
            }

            _.$slider.empty().append(newSlides);
            _.$slider.children().children().children()
                .css({
                    'width':(100 / _.options.slidesPerRow) + '%',
                    'display': 'inline-block'
                });

        }

    };

    Slick.prototype.checkResponsive = function(initial, forceUpdate) {

        var _ = this,
            breakpoint, targetBreakpoint, respondToWidth, triggerBreakpoint = false;
        var sliderWidth = _.$slider.width();
        var windowWidth = window.innerWidth || $(window).width();

        if (_.respondTo === 'window') {
            respondToWidth = windowWidth;
        } else if (_.respondTo === 'slider') {
            respondToWidth = sliderWidth;
        } else if (_.respondTo === 'min') {
            respondToWidth = Math.min(windowWidth, sliderWidth);
        }

        if ( _.options.responsive &&
            _.options.responsive.length &&
            _.options.responsive !== null) {

            targetBreakpoint = null;

            for (breakpoint in _.breakpoints) {
                if (_.breakpoints.hasOwnProperty(breakpoint)) {
                    if (_.originalSettings.mobileFirst === false) {
                        if (respondToWidth < _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    } else {
                        if (respondToWidth > _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    }
                }
            }

            if (targetBreakpoint !== null) {
                if (_.activeBreakpoint !== null) {
                    if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
                        _.activeBreakpoint =
                            targetBreakpoint;
                        if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                            _.unslick(targetBreakpoint);
                        } else {
                            _.options = $.extend({}, _.originalSettings,
                                _.breakpointSettings[
                                    targetBreakpoint]);
                            if (initial === true) {
                                _.currentSlide = _.options.initialSlide;
                            }
                            _.refresh(initial);
                        }
                        triggerBreakpoint = targetBreakpoint;
                    }
                } else {
                    _.activeBreakpoint = targetBreakpoint;
                    if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                        _.unslick(targetBreakpoint);
                    } else {
                        _.options = $.extend({}, _.originalSettings,
                            _.breakpointSettings[
                                targetBreakpoint]);
                        if (initial === true) {
                            _.currentSlide = _.options.initialSlide;
                        }
                        _.refresh(initial);
                    }
                    triggerBreakpoint = targetBreakpoint;
                }
            } else {
                if (_.activeBreakpoint !== null) {
                    _.activeBreakpoint = null;
                    _.options = _.originalSettings;
                    if (initial === true) {
                        _.currentSlide = _.options.initialSlide;
                    }
                    _.refresh(initial);
                    triggerBreakpoint = targetBreakpoint;
                }
            }

            // only trigger breakpoints during an actual break. not on initialize.
            if( !initial && triggerBreakpoint !== false ) {
                _.$slider.trigger('breakpoint', [_, triggerBreakpoint]);
            }
        }

    };

    Slick.prototype.changeSlide = function(event, dontAnimate) {

        var _ = this,
            $target = $(event.currentTarget),
            indexOffset, slideOffset, unevenOffset;

        // If target is a link, prevent default action.
        if($target.is('a')) {
            event.preventDefault();
        }

        // If target is not the <li> element (ie: a child), find the <li>.
        if(!$target.is('li')) {
            $target = $target.closest('li');
        }

        unevenOffset = (_.slideCount % _.options.slidesToScroll !== 0);
        indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;

        switch (event.data.message) {

            case 'previous':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
                }
                break;

            case 'next':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
                }
                break;

            case 'index':
                var index = event.data.index === 0 ? 0 :
                    event.data.index || $target.index() * _.options.slidesToScroll;

                _.slideHandler(_.checkNavigable(index), false, dontAnimate);
                $target.children().trigger('focus');
                break;

            default:
                return;
        }

    };

    Slick.prototype.checkNavigable = function(index) {

        var _ = this,
            navigables, prevNavigable;

        navigables = _.getNavigableIndexes();
        prevNavigable = 0;
        if (index > navigables[navigables.length - 1]) {
            index = navigables[navigables.length - 1];
        } else {
            for (var n in navigables) {
                if (index < navigables[n]) {
                    index = prevNavigable;
                    break;
                }
                prevNavigable = navigables[n];
            }
        }

        return index;
    };

    Slick.prototype.cleanUpEvents = function() {

        var _ = this;

        if (_.options.dots && _.$dots !== null) {

            $('li', _.$dots)
                .off('click.slick', _.changeSlide)
                .off('mouseenter.slick', $.proxy(_.interrupt, _, true))
                .off('mouseleave.slick', $.proxy(_.interrupt, _, false));

            if (_.options.accessibility === true) {
                _.$dots.off('keydown.slick', _.keyHandler);
            }
        }

        _.$slider.off('focus.slick blur.slick');

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide);
            _.$nextArrow && _.$nextArrow.off('click.slick', _.changeSlide);

            if (_.options.accessibility === true) {
                _.$prevArrow && _.$prevArrow.off('keydown.slick', _.keyHandler);
                _.$nextArrow && _.$nextArrow.off('keydown.slick', _.keyHandler);
            }
        }

        _.$list.off('touchstart.slick mousedown.slick', _.swipeHandler);
        _.$list.off('touchmove.slick mousemove.slick', _.swipeHandler);
        _.$list.off('touchend.slick mouseup.slick', _.swipeHandler);
        _.$list.off('touchcancel.slick mouseleave.slick', _.swipeHandler);

        _.$list.off('click.slick', _.clickHandler);

        $(document).off(_.visibilityChange, _.visibility);

        _.cleanUpSlideEvents();

        if (_.options.accessibility === true) {
            _.$list.off('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().off('click.slick', _.selectHandler);
        }

        $(window).off('orientationchange.slick.slick-' + _.instanceUid, _.orientationChange);

        $(window).off('resize.slick.slick-' + _.instanceUid, _.resize);

        $('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault);

        $(window).off('load.slick.slick-' + _.instanceUid, _.setPosition);

    };

    Slick.prototype.cleanUpSlideEvents = function() {

        var _ = this;

        _.$list.off('mouseenter.slick', $.proxy(_.interrupt, _, true));
        _.$list.off('mouseleave.slick', $.proxy(_.interrupt, _, false));

    };

    Slick.prototype.cleanUpRows = function() {

        var _ = this, originalSlides;

        if(_.options.rows > 1) {
            originalSlides = _.$slides.children().children();
            originalSlides.removeAttr('style');
            _.$slider.empty().append(originalSlides);
        }

    };

    Slick.prototype.clickHandler = function(event) {

        var _ = this;

        if (_.shouldClick === false) {
            event.stopImmediatePropagation();
            event.stopPropagation();
            event.preventDefault();
        }

    };

    Slick.prototype.destroy = function(refresh) {

        var _ = this;

        _.autoPlayClear();

        _.touchObject = {};

        _.cleanUpEvents();

        $('.slick-cloned', _.$slider).detach();

        if (_.$dots) {
            _.$dots.remove();
        }

        if ( _.$prevArrow && _.$prevArrow.length ) {

            _.$prevArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css('display','');

            if ( _.htmlExpr.test( _.options.prevArrow )) {
                _.$prevArrow.remove();
            }
        }

        if ( _.$nextArrow && _.$nextArrow.length ) {

            _.$nextArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css('display','');

            if ( _.htmlExpr.test( _.options.nextArrow )) {
                _.$nextArrow.remove();
            }
        }


        if (_.$slides) {

            _.$slides
                .removeClass('slick-slide slick-active slick-center slick-visible slick-current')
                .removeAttr('aria-hidden')
                .removeAttr('data-slick-index')
                .each(function(){
                    $(this).attr('style', $(this).data('originalStyling'));
                });

            _.$slideTrack.children(this.options.slide).detach();

            _.$slideTrack.detach();

            _.$list.detach();

            _.$slider.append(_.$slides);
        }

        _.cleanUpRows();

        _.$slider.removeClass('slick-slider');
        _.$slider.removeClass('slick-initialized');
        _.$slider.removeClass('slick-dotted');

        _.unslicked = true;

        if(!refresh) {
            _.$slider.trigger('destroy', [_]);
        }

    };

    Slick.prototype.disableTransition = function(slide) {

        var _ = this,
            transition = {};

        transition[_.transitionType] = '';

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.fadeSlide = function(slideIndex, callback) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).css({
                zIndex: _.options.zIndex
            });

            _.$slides.eq(slideIndex).animate({
                opacity: 1
            }, _.options.speed, _.options.easing, callback);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 1,
                zIndex: _.options.zIndex
            });

            if (callback) {
                setTimeout(function() {

                    _.disableTransition(slideIndex);

                    callback.call();
                }, _.options.speed);
            }

        }

    };

    Slick.prototype.fadeSlideOut = function(slideIndex) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).animate({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            }, _.options.speed, _.options.easing);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            });

        }

    };

    Slick.prototype.filterSlides = Slick.prototype.slickFilter = function(filter) {

        var _ = this;

        if (filter !== null) {

            _.$slidesCache = _.$slides;

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.filter(filter).appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.focusHandler = function() {

        var _ = this;

        _.$slider
            .off('focus.slick blur.slick')
            .on('focus.slick blur.slick', '*', function(event) {

            event.stopImmediatePropagation();
            var $sf = $(this);

            setTimeout(function() {

                if( _.options.pauseOnFocus ) {
                    _.focussed = $sf.is(':focus');
                    _.autoPlay();
                }

            }, 0);

        });
    };

    Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function() {

        var _ = this;
        return _.currentSlide;

    };

    Slick.prototype.getDotCount = function() {

        var _ = this;

        var breakPoint = 0;
        var counter = 0;
        var pagerQty = 0;

        if (_.options.infinite === true) {
            if (_.slideCount <= _.options.slidesToShow) {
                 ++pagerQty;
            } else {
                while (breakPoint < _.slideCount) {
                    ++pagerQty;
                    breakPoint = counter + _.options.slidesToScroll;
                    counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
                }
            }
        } else if (_.options.centerMode === true) {
            pagerQty = _.slideCount;
        } else if(!_.options.asNavFor) {
            pagerQty = 1 + Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll);
        }else {
            while (breakPoint < _.slideCount) {
                ++pagerQty;
                breakPoint = counter + _.options.slidesToScroll;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
            }
        }

        return pagerQty - 1;

    };

    Slick.prototype.getLeft = function(slideIndex) {

        var _ = this,
            targetLeft,
            verticalHeight,
            verticalOffset = 0,
            targetSlide,
            coef;

        _.slideOffset = 0;
        verticalHeight = _.$slides.first().outerHeight(true);

        if (_.options.infinite === true) {
            if (_.slideCount > _.options.slidesToShow) {
                _.slideOffset = (_.slideWidth * _.options.slidesToShow) * -1;
                coef = -1

                if (_.options.vertical === true && _.options.centerMode === true) {
                    if (_.options.slidesToShow === 2) {
                        coef = -1.5;
                    } else if (_.options.slidesToShow === 1) {
                        coef = -2
                    }
                }
                verticalOffset = (verticalHeight * _.options.slidesToShow) * coef;
            }
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
                    if (slideIndex > _.slideCount) {
                        _.slideOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth) * -1;
                        verticalOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight) * -1;
                    } else {
                        _.slideOffset = ((_.slideCount % _.options.slidesToScroll) * _.slideWidth) * -1;
                        verticalOffset = ((_.slideCount % _.options.slidesToScroll) * verticalHeight) * -1;
                    }
                }
            }
        } else {
            if (slideIndex + _.options.slidesToShow > _.slideCount) {
                _.slideOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * _.slideWidth;
                verticalOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * verticalHeight;
            }
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.slideOffset = 0;
            verticalOffset = 0;
        }

        if (_.options.centerMode === true && _.slideCount <= _.options.slidesToShow) {
            _.slideOffset = ((_.slideWidth * Math.floor(_.options.slidesToShow)) / 2) - ((_.slideWidth * _.slideCount) / 2);
        } else if (_.options.centerMode === true && _.options.infinite === true) {
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
        } else if (_.options.centerMode === true) {
            _.slideOffset = 0;
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
        }

        if (_.options.vertical === false) {
            targetLeft = ((slideIndex * _.slideWidth) * -1) + _.slideOffset;
        } else {
            targetLeft = ((slideIndex * verticalHeight) * -1) + verticalOffset;
        }

        if (_.options.variableWidth === true) {

            if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
            } else {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);
            }

            if (_.options.rtl === true) {
                if (targetSlide[0]) {
                    targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                } else {
                    targetLeft =  0;
                }
            } else {
                targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
            }

            if (_.options.centerMode === true) {
                if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
                } else {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);
                }

                if (_.options.rtl === true) {
                    if (targetSlide[0]) {
                        targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                    } else {
                        targetLeft =  0;
                    }
                } else {
                    targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
                }

                targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
            }
        }

        return targetLeft;

    };

    Slick.prototype.getOption = Slick.prototype.slickGetOption = function(option) {

        var _ = this;

        return _.options[option];

    };

    Slick.prototype.getNavigableIndexes = function() {

        var _ = this,
            breakPoint = 0,
            counter = 0,
            indexes = [],
            max;

        if (_.options.infinite === false) {
            max = _.slideCount;
        } else {
            breakPoint = _.options.slidesToScroll * -1;
            counter = _.options.slidesToScroll * -1;
            max = _.slideCount * 2;
        }

        while (breakPoint < max) {
            indexes.push(breakPoint);
            breakPoint = counter + _.options.slidesToScroll;
            counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
        }

        return indexes;

    };

    Slick.prototype.getSlick = function() {

        return this;

    };

    Slick.prototype.getSlideCount = function() {

        var _ = this,
            slidesTraversed, swipedSlide, centerOffset;

        centerOffset = _.options.centerMode === true ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0;

        if (_.options.swipeToSlide === true) {
            _.$slideTrack.find('.slick-slide').each(function(index, slide) {
                if (slide.offsetLeft - centerOffset + ($(slide).outerWidth() / 2) > (_.swipeLeft * -1)) {
                    swipedSlide = slide;
                    return false;
                }
            });

            slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;

            return slidesTraversed;

        } else {
            return _.options.slidesToScroll;
        }

    };

    Slick.prototype.goTo = Slick.prototype.slickGoTo = function(slide, dontAnimate) {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'index',
                index: parseInt(slide)
            }
        }, dontAnimate);

    };

    Slick.prototype.init = function(creation) {

        var _ = this;

        if (!$(_.$slider).hasClass('slick-initialized')) {

            $(_.$slider).addClass('slick-initialized');

            _.buildRows();
            _.buildOut();
            _.setProps();
            _.startLoad();
            _.loadSlider();
            _.initializeEvents();
            _.updateArrows();
            _.updateDots();
            _.checkResponsive(true);
            _.focusHandler();

        }

        if (creation) {
            _.$slider.trigger('init', [_]);
        }

        if (_.options.accessibility === true) {
            _.initADA();
        }

        if ( _.options.autoplay ) {

            _.paused = false;
            _.autoPlay();

        }

    };

    Slick.prototype.initADA = function() {
        var _ = this,
                numDotGroups = Math.ceil(_.slideCount / _.options.slidesToShow),
                tabControlIndexes = _.getNavigableIndexes().filter(function(val) {
                    return (val >= 0) && (val < _.slideCount);
                });

        _.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({
            'aria-hidden': 'true',
            'tabindex': '-1'
        }).find('a, input, button, select').attr({
            'tabindex': '-1'
        });

        if (_.$dots !== null) {
            _.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function(i) {
                var slideControlIndex = tabControlIndexes.indexOf(i);

                $(this).attr({
                    'role': 'tabpanel',
                    'id': 'slick-slide' + _.instanceUid + i,
                    'tabindex': -1
                });

                if (slideControlIndex !== -1) {
                    $(this).attr({
                        'aria-describedby': 'slick-slide-control' + _.instanceUid + slideControlIndex
                    });
                }
            });

            _.$dots.attr('role', 'tablist').find('li').each(function(i) {
                var mappedSlideIndex = tabControlIndexes[i];

                $(this).attr({
                    'role': 'presentation'
                });

                $(this).find('button').first().attr({
                    'role': 'tab',
                    'id': 'slick-slide-control' + _.instanceUid + i,
                    'aria-controls': 'slick-slide' + _.instanceUid + mappedSlideIndex,
                    'aria-label': (i + 1) + ' of ' + numDotGroups,
                    'aria-selected': null,
                    'tabindex': '-1'
                });

            }).eq(_.currentSlide).find('button').attr({
                'aria-selected': 'true',
                'tabindex': '0'
            }).end();
        }

        for (var i=_.currentSlide, max=i+_.options.slidesToShow; i < max; i++) {
            _.$slides.eq(i).attr('tabindex', 0);
        }

        _.activateADA();

    };

    Slick.prototype.initArrowEvents = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow
               .off('click.slick')
               .on('click.slick', {
                    message: 'previous'
               }, _.changeSlide);
            _.$nextArrow
               .off('click.slick')
               .on('click.slick', {
                    message: 'next'
               }, _.changeSlide);

            if (_.options.accessibility === true) {
                _.$prevArrow.on('keydown.slick', _.keyHandler);
                _.$nextArrow.on('keydown.slick', _.keyHandler);
            }
        }

    };

    Slick.prototype.initDotEvents = function() {

        var _ = this;

        if (_.options.dots === true) {
            $('li', _.$dots).on('click.slick', {
                message: 'index'
            }, _.changeSlide);

            if (_.options.accessibility === true) {
                _.$dots.on('keydown.slick', _.keyHandler);
            }
        }

        if ( _.options.dots === true && _.options.pauseOnDotsHover === true ) {

            $('li', _.$dots)
                .on('mouseenter.slick', $.proxy(_.interrupt, _, true))
                .on('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

    };

    Slick.prototype.initSlideEvents = function() {

        var _ = this;

        if ( _.options.pauseOnHover ) {

            _.$list.on('mouseenter.slick', $.proxy(_.interrupt, _, true));
            _.$list.on('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

    };

    Slick.prototype.initializeEvents = function() {

        var _ = this;

        _.initArrowEvents();

        _.initDotEvents();
        _.initSlideEvents();

        _.$list.on('touchstart.slick mousedown.slick', {
            action: 'start'
        }, _.swipeHandler);
        _.$list.on('touchmove.slick mousemove.slick', {
            action: 'move'
        }, _.swipeHandler);
        _.$list.on('touchend.slick mouseup.slick', {
            action: 'end'
        }, _.swipeHandler);
        _.$list.on('touchcancel.slick mouseleave.slick', {
            action: 'end'
        }, _.swipeHandler);

        _.$list.on('click.slick', _.clickHandler);

        $(document).on(_.visibilityChange, $.proxy(_.visibility, _));

        if (_.options.accessibility === true) {
            _.$list.on('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        $(window).on('orientationchange.slick.slick-' + _.instanceUid, $.proxy(_.orientationChange, _));

        $(window).on('resize.slick.slick-' + _.instanceUid, $.proxy(_.resize, _));

        $('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault);

        $(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);
        $(_.setPosition);

    };

    Slick.prototype.initUI = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.show();
            _.$nextArrow.show();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.show();

        }

    };

    Slick.prototype.keyHandler = function(event) {

        var _ = this;
         //Dont slide if the cursor is inside the form fields and arrow keys are pressed
        if(!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
            if (event.keyCode === 37 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'next' :  'previous'
                    }
                });
            } else if (event.keyCode === 39 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'previous' : 'next'
                    }
                });
            }
        }

    };

    Slick.prototype.lazyLoad = function() {

        var _ = this,
            loadRange, cloneRange, rangeStart, rangeEnd;

        function loadImages(imagesScope) {

            $('img[data-lazy]', imagesScope).each(function() {

                var image = $(this),
                    imageSource = $(this).attr('data-lazy'),
                    imageSrcSet = $(this).attr('data-srcset'),
                    imageSizes  = $(this).attr('data-sizes') || _.$slider.attr('data-sizes'),
                    imageToLoad = document.createElement('img');

                imageToLoad.onload = function() {

                    image
                        .animate({ opacity: 0 }, 100, function() {

                            if (imageSrcSet) {
                                image
                                    .attr('srcset', imageSrcSet );

                                if (imageSizes) {
                                    image
                                        .attr('sizes', imageSizes );
                                }
                            }

                            image
                                .attr('src', imageSource)
                                .animate({ opacity: 1 }, 200, function() {
                                    image
                                        .removeAttr('data-lazy data-srcset data-sizes')
                                        .removeClass('slick-loading');
                                });
                            _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
                        });

                };

                imageToLoad.onerror = function() {

                    image
                        .removeAttr( 'data-lazy' )
                        .removeClass( 'slick-loading' )
                        .addClass( 'slick-lazyload-error' );

                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);

                };

                imageToLoad.src = imageSource;

            });

        }

        if (_.options.centerMode === true) {
            if (_.options.infinite === true) {
                rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
                rangeEnd = rangeStart + _.options.slidesToShow + 2;
            } else {
                rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
                rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
            }
        } else {
            rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
            rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow);
            if (_.options.fade === true) {
                if (rangeStart > 0) rangeStart--;
                if (rangeEnd <= _.slideCount) rangeEnd++;
            }
        }

        loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);

        if (_.options.lazyLoad === 'anticipated') {
            var prevSlide = rangeStart - 1,
                nextSlide = rangeEnd,
                $slides = _.$slider.find('.slick-slide');

            for (var i = 0; i < _.options.slidesToScroll; i++) {
                if (prevSlide < 0) prevSlide = _.slideCount - 1;
                loadRange = loadRange.add($slides.eq(prevSlide));
                loadRange = loadRange.add($slides.eq(nextSlide));
                prevSlide--;
                nextSlide++;
            }
        }

        loadImages(loadRange);

        if (_.slideCount <= _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-slide');
            loadImages(cloneRange);
        } else
        if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);
            loadImages(cloneRange);
        } else if (_.currentSlide === 0) {
            cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);
            loadImages(cloneRange);
        }

    };

    Slick.prototype.loadSlider = function() {

        var _ = this;

        _.setPosition();

        _.$slideTrack.css({
            opacity: 1
        });

        _.$slider.removeClass('slick-loading');

        _.initUI();

        if (_.options.lazyLoad === 'progressive') {
            _.progressiveLazyLoad();
        }

    };

    Slick.prototype.next = Slick.prototype.slickNext = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'next'
            }
        });

    };

    Slick.prototype.orientationChange = function() {

        var _ = this;

        _.checkResponsive();
        _.setPosition();

    };

    Slick.prototype.pause = Slick.prototype.slickPause = function() {

        var _ = this;

        _.autoPlayClear();
        _.paused = true;

    };

    Slick.prototype.play = Slick.prototype.slickPlay = function() {

        var _ = this;

        _.autoPlay();
        _.options.autoplay = true;
        _.paused = false;
        _.focussed = false;
        _.interrupted = false;

    };

    Slick.prototype.postSlide = function(index) {

        var _ = this;

        if( !_.unslicked ) {

            _.$slider.trigger('afterChange', [_, index]);

            _.animating = false;

            if (_.slideCount > _.options.slidesToShow) {
                _.setPosition();
            }

            _.swipeLeft = null;

            if ( _.options.autoplay ) {
                _.autoPlay();
            }

            if (_.options.accessibility === true) {
                _.initADA();
                
                if (_.options.focusOnChange) {
                    var $currentSlide = $(_.$slides.get(_.currentSlide));
                    $currentSlide.attr('tabindex', 0).focus();
                }
            }

        }

    };

    Slick.prototype.prev = Slick.prototype.slickPrev = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'previous'
            }
        });

    };

    Slick.prototype.preventDefault = function(event) {

        event.preventDefault();

    };

    Slick.prototype.progressiveLazyLoad = function( tryCount ) {

        tryCount = tryCount || 1;

        var _ = this,
            $imgsToLoad = $( 'img[data-lazy]', _.$slider ),
            image,
            imageSource,
            imageSrcSet,
            imageSizes,
            imageToLoad;

        if ( $imgsToLoad.length ) {

            image = $imgsToLoad.first();
            imageSource = image.attr('data-lazy');
            imageSrcSet = image.attr('data-srcset');
            imageSizes  = image.attr('data-sizes') || _.$slider.attr('data-sizes');
            imageToLoad = document.createElement('img');

            imageToLoad.onload = function() {

                if (imageSrcSet) {
                    image
                        .attr('srcset', imageSrcSet );

                    if (imageSizes) {
                        image
                            .attr('sizes', imageSizes );
                    }
                }

                image
                    .attr( 'src', imageSource )
                    .removeAttr('data-lazy data-srcset data-sizes')
                    .removeClass('slick-loading');

                if ( _.options.adaptiveHeight === true ) {
                    _.setPosition();
                }

                _.$slider.trigger('lazyLoaded', [ _, image, imageSource ]);
                _.progressiveLazyLoad();

            };

            imageToLoad.onerror = function() {

                if ( tryCount < 3 ) {

                    /**
                     * try to load the image 3 times,
                     * leave a slight delay so we don't get
                     * servers blocking the request.
                     */
                    setTimeout( function() {
                        _.progressiveLazyLoad( tryCount + 1 );
                    }, 500 );

                } else {

                    image
                        .removeAttr( 'data-lazy' )
                        .removeClass( 'slick-loading' )
                        .addClass( 'slick-lazyload-error' );

                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);

                    _.progressiveLazyLoad();

                }

            };

            imageToLoad.src = imageSource;

        } else {

            _.$slider.trigger('allImagesLoaded', [ _ ]);

        }

    };

    Slick.prototype.refresh = function( initializing ) {

        var _ = this, currentSlide, lastVisibleIndex;

        lastVisibleIndex = _.slideCount - _.options.slidesToShow;

        // in non-infinite sliders, we don't want to go past the
        // last visible index.
        if( !_.options.infinite && ( _.currentSlide > lastVisibleIndex )) {
            _.currentSlide = lastVisibleIndex;
        }

        // if less slides than to show, go to start.
        if ( _.slideCount <= _.options.slidesToShow ) {
            _.currentSlide = 0;

        }

        currentSlide = _.currentSlide;

        _.destroy(true);

        $.extend(_, _.initials, { currentSlide: currentSlide });

        _.init();

        if( !initializing ) {

            _.changeSlide({
                data: {
                    message: 'index',
                    index: currentSlide
                }
            }, false);

        }

    };

    Slick.prototype.registerBreakpoints = function() {

        var _ = this, breakpoint, currentBreakpoint, l,
            responsiveSettings = _.options.responsive || null;

        if ( $.type(responsiveSettings) === 'array' && responsiveSettings.length ) {

            _.respondTo = _.options.respondTo || 'window';

            for ( breakpoint in responsiveSettings ) {

                l = _.breakpoints.length-1;

                if (responsiveSettings.hasOwnProperty(breakpoint)) {
                    currentBreakpoint = responsiveSettings[breakpoint].breakpoint;

                    // loop through the breakpoints and cut out any existing
                    // ones with the same breakpoint number, we don't want dupes.
                    while( l >= 0 ) {
                        if( _.breakpoints[l] && _.breakpoints[l] === currentBreakpoint ) {
                            _.breakpoints.splice(l,1);
                        }
                        l--;
                    }

                    _.breakpoints.push(currentBreakpoint);
                    _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;

                }

            }

            _.breakpoints.sort(function(a, b) {
                return ( _.options.mobileFirst ) ? a-b : b-a;
            });

        }

    };

    Slick.prototype.reinit = function() {

        var _ = this;

        _.$slides =
            _.$slideTrack
                .children(_.options.slide)
                .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
            _.currentSlide = _.currentSlide - _.options.slidesToScroll;
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.currentSlide = 0;
        }

        _.registerBreakpoints();

        _.setProps();
        _.setupInfinite();
        _.buildArrows();
        _.updateArrows();
        _.initArrowEvents();
        _.buildDots();
        _.updateDots();
        _.initDotEvents();
        _.cleanUpSlideEvents();
        _.initSlideEvents();

        _.checkResponsive(false, true);

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        _.setPosition();
        _.focusHandler();

        _.paused = !_.options.autoplay;
        _.autoPlay();

        _.$slider.trigger('reInit', [_]);

    };

    Slick.prototype.resize = function() {

        var _ = this;

        if ($(window).width() !== _.windowWidth) {
            clearTimeout(_.windowDelay);
            _.windowDelay = window.setTimeout(function() {
                _.windowWidth = $(window).width();
                _.checkResponsive();
                if( !_.unslicked ) { _.setPosition(); }
            }, 50);
        }
    };

    Slick.prototype.removeSlide = Slick.prototype.slickRemove = function(index, removeBefore, removeAll) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            removeBefore = index;
            index = removeBefore === true ? 0 : _.slideCount - 1;
        } else {
            index = removeBefore === true ? --index : index;
        }

        if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
            return false;
        }

        _.unload();

        if (removeAll === true) {
            _.$slideTrack.children().remove();
        } else {
            _.$slideTrack.children(this.options.slide).eq(index).remove();
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.setCSS = function(position) {

        var _ = this,
            positionProps = {},
            x, y;

        if (_.options.rtl === true) {
            position = -position;
        }
        x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';
        y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';

        positionProps[_.positionProp] = position;

        if (_.transformsEnabled === false) {
            _.$slideTrack.css(positionProps);
        } else {
            positionProps = {};
            if (_.cssTransitions === false) {
                positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';
                _.$slideTrack.css(positionProps);
            } else {
                positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';
                _.$slideTrack.css(positionProps);
            }
        }

    };

    Slick.prototype.setDimensions = function() {

        var _ = this;

        if (_.options.vertical === false) {
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: ('0px ' + _.options.centerPadding)
                });
            }
        } else {
            _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: (_.options.centerPadding + ' 0px')
                });
            }
        }

        _.listWidth = _.$list.width();
        _.listHeight = _.$list.height();


        if (_.options.vertical === false && _.options.variableWidth === false) {
            _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
            _.$slideTrack.width(Math.ceil((_.slideWidth * _.$slideTrack.children('.slick-slide').length)));

        } else if (_.options.variableWidth === true) {
            _.$slideTrack.width(5000 * _.slideCount);
        } else {
            _.slideWidth = Math.ceil(_.listWidth);
            _.$slideTrack.height(Math.ceil((_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length)));
        }

        var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();
        if (_.options.variableWidth === false) _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);

    };

    Slick.prototype.setFade = function() {

        var _ = this,
            targetLeft;

        _.$slides.each(function(index, element) {
            targetLeft = (_.slideWidth * index) * -1;
            if (_.options.rtl === true) {
                $(element).css({
                    position: 'relative',
                    right: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            } else {
                $(element).css({
                    position: 'relative',
                    left: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            }
        });

        _.$slides.eq(_.currentSlide).css({
            zIndex: _.options.zIndex - 1,
            opacity: 1
        });

    };

    Slick.prototype.setHeight = function() {

        var _ = this;

        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.css('height', targetHeight);
        }

    };

    Slick.prototype.setOption =
    Slick.prototype.slickSetOption = function() {

        /**
         * accepts arguments in format of:
         *
         *  - for changing a single option's value:
         *     .slick("setOption", option, value, refresh )
         *
         *  - for changing a set of responsive options:
         *     .slick("setOption", 'responsive', [{}, ...], refresh )
         *
         *  - for updating multiple values at once (not responsive)
         *     .slick("setOption", { 'option': value, ... }, refresh )
         */

        var _ = this, l, item, option, value, refresh = false, type;

        if( $.type( arguments[0] ) === 'object' ) {

            option =  arguments[0];
            refresh = arguments[1];
            type = 'multiple';

        } else if ( $.type( arguments[0] ) === 'string' ) {

            option =  arguments[0];
            value = arguments[1];
            refresh = arguments[2];

            if ( arguments[0] === 'responsive' && $.type( arguments[1] ) === 'array' ) {

                type = 'responsive';

            } else if ( typeof arguments[1] !== 'undefined' ) {

                type = 'single';

            }

        }

        if ( type === 'single' ) {

            _.options[option] = value;


        } else if ( type === 'multiple' ) {

            $.each( option , function( opt, val ) {

                _.options[opt] = val;

            });


        } else if ( type === 'responsive' ) {

            for ( item in value ) {

                if( $.type( _.options.responsive ) !== 'array' ) {

                    _.options.responsive = [ value[item] ];

                } else {

                    l = _.options.responsive.length-1;

                    // loop through the responsive object and splice out duplicates.
                    while( l >= 0 ) {

                        if( _.options.responsive[l].breakpoint === value[item].breakpoint ) {

                            _.options.responsive.splice(l,1);

                        }

                        l--;

                    }

                    _.options.responsive.push( value[item] );

                }

            }

        }

        if ( refresh ) {

            _.unload();
            _.reinit();

        }

    };

    Slick.prototype.setPosition = function() {

        var _ = this;

        _.setDimensions();

        _.setHeight();

        if (_.options.fade === false) {
            _.setCSS(_.getLeft(_.currentSlide));
        } else {
            _.setFade();
        }

        _.$slider.trigger('setPosition', [_]);

    };

    Slick.prototype.setProps = function() {

        var _ = this,
            bodyStyle = document.body.style;

        _.positionProp = _.options.vertical === true ? 'top' : 'left';

        if (_.positionProp === 'top') {
            _.$slider.addClass('slick-vertical');
        } else {
            _.$slider.removeClass('slick-vertical');
        }

        if (bodyStyle.WebkitTransition !== undefined ||
            bodyStyle.MozTransition !== undefined ||
            bodyStyle.msTransition !== undefined) {
            if (_.options.useCSS === true) {
                _.cssTransitions = true;
            }
        }

        if ( _.options.fade ) {
            if ( typeof _.options.zIndex === 'number' ) {
                if( _.options.zIndex < 3 ) {
                    _.options.zIndex = 3;
                }
            } else {
                _.options.zIndex = _.defaults.zIndex;
            }
        }

        if (bodyStyle.OTransform !== undefined) {
            _.animType = 'OTransform';
            _.transformType = '-o-transform';
            _.transitionType = 'OTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.MozTransform !== undefined) {
            _.animType = 'MozTransform';
            _.transformType = '-moz-transform';
            _.transitionType = 'MozTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.webkitTransform !== undefined) {
            _.animType = 'webkitTransform';
            _.transformType = '-webkit-transform';
            _.transitionType = 'webkitTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.msTransform !== undefined) {
            _.animType = 'msTransform';
            _.transformType = '-ms-transform';
            _.transitionType = 'msTransition';
            if (bodyStyle.msTransform === undefined) _.animType = false;
        }
        if (bodyStyle.transform !== undefined && _.animType !== false) {
            _.animType = 'transform';
            _.transformType = 'transform';
            _.transitionType = 'transition';
        }
        _.transformsEnabled = _.options.useTransform && (_.animType !== null && _.animType !== false);
    };


    Slick.prototype.setSlideClasses = function(index) {

        var _ = this,
            centerOffset, allSlides, indexOffset, remainder;

        allSlides = _.$slider
            .find('.slick-slide')
            .removeClass('slick-active slick-center slick-current')
            .attr('aria-hidden', 'true');

        _.$slides
            .eq(index)
            .addClass('slick-current');

        if (_.options.centerMode === true) {

            var evenCoef = _.options.slidesToShow % 2 === 0 ? 1 : 0;

            centerOffset = Math.floor(_.options.slidesToShow / 2);

            if (_.options.infinite === true) {

                if (index >= centerOffset && index <= (_.slideCount - 1) - centerOffset) {
                    _.$slides
                        .slice(index - centerOffset + evenCoef, index + centerOffset + 1)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    indexOffset = _.options.slidesToShow + index;
                    allSlides
                        .slice(indexOffset - centerOffset + 1 + evenCoef, indexOffset + centerOffset + 2)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

                if (index === 0) {

                    allSlides
                        .eq(allSlides.length - 1 - _.options.slidesToShow)
                        .addClass('slick-center');

                } else if (index === _.slideCount - 1) {

                    allSlides
                        .eq(_.options.slidesToShow)
                        .addClass('slick-center');

                }

            }

            _.$slides
                .eq(index)
                .addClass('slick-center');

        } else {

            if (index >= 0 && index <= (_.slideCount - _.options.slidesToShow)) {

                _.$slides
                    .slice(index, index + _.options.slidesToShow)
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else if (allSlides.length <= _.options.slidesToShow) {

                allSlides
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else {

                remainder = _.slideCount % _.options.slidesToShow;
                indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;

                if (_.options.slidesToShow == _.options.slidesToScroll && (_.slideCount - index) < _.options.slidesToShow) {

                    allSlides
                        .slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    allSlides
                        .slice(indexOffset, indexOffset + _.options.slidesToShow)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

            }

        }

        if (_.options.lazyLoad === 'ondemand' || _.options.lazyLoad === 'anticipated') {
            _.lazyLoad();
        }
    };

    Slick.prototype.setupInfinite = function() {

        var _ = this,
            i, slideIndex, infiniteCount;

        if (_.options.fade === true) {
            _.options.centerMode = false;
        }

        if (_.options.infinite === true && _.options.fade === false) {

            slideIndex = null;

            if (_.slideCount > _.options.slidesToShow) {

                if (_.options.centerMode === true) {
                    infiniteCount = _.options.slidesToShow + 1;
                } else {
                    infiniteCount = _.options.slidesToShow;
                }

                for (i = _.slideCount; i > (_.slideCount -
                        infiniteCount); i -= 1) {
                    slideIndex = i - 1;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex - _.slideCount)
                        .prependTo(_.$slideTrack).addClass('slick-cloned');
                }
                for (i = 0; i < infiniteCount  + _.slideCount; i += 1) {
                    slideIndex = i;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex + _.slideCount)
                        .appendTo(_.$slideTrack).addClass('slick-cloned');
                }
                _.$slideTrack.find('.slick-cloned').find('[id]').each(function() {
                    $(this).attr('id', '');
                });

            }

        }

    };

    Slick.prototype.interrupt = function( toggle ) {

        var _ = this;

        if( !toggle ) {
            _.autoPlay();
        }
        _.interrupted = toggle;

    };

    Slick.prototype.selectHandler = function(event) {

        var _ = this;

        var targetElement =
            $(event.target).is('.slick-slide') ?
                $(event.target) :
                $(event.target).parents('.slick-slide');

        var index = parseInt(targetElement.attr('data-slick-index'));

        if (!index) index = 0;

        if (_.slideCount <= _.options.slidesToShow) {

            _.slideHandler(index, false, true);
            return;

        }

        _.slideHandler(index);

    };

    Slick.prototype.slideHandler = function(index, sync, dontAnimate) {

        var targetSlide, animSlide, oldSlide, slideLeft, targetLeft = null,
            _ = this, navTarget;

        sync = sync || false;

        if (_.animating === true && _.options.waitForAnimate === true) {
            return;
        }

        if (_.options.fade === true && _.currentSlide === index) {
            return;
        }

        if (sync === false) {
            _.asNavFor(index);
        }

        targetSlide = index;
        targetLeft = _.getLeft(targetSlide);
        slideLeft = _.getLeft(_.currentSlide);

        _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;

        if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > (_.slideCount - _.options.slidesToScroll))) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        }

        if ( _.options.autoplay ) {
            clearInterval(_.autoPlayTimer);
        }

        if (targetSlide < 0) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = _.slideCount - (_.slideCount % _.options.slidesToScroll);
            } else {
                animSlide = _.slideCount + targetSlide;
            }
        } else if (targetSlide >= _.slideCount) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = 0;
            } else {
                animSlide = targetSlide - _.slideCount;
            }
        } else {
            animSlide = targetSlide;
        }

        _.animating = true;

        _.$slider.trigger('beforeChange', [_, _.currentSlide, animSlide]);

        oldSlide = _.currentSlide;
        _.currentSlide = animSlide;

        _.setSlideClasses(_.currentSlide);

        if ( _.options.asNavFor ) {

            navTarget = _.getNavTarget();
            navTarget = navTarget.slick('getSlick');

            if ( navTarget.slideCount <= navTarget.options.slidesToShow ) {
                navTarget.setSlideClasses(_.currentSlide);
            }

        }

        _.updateDots();
        _.updateArrows();

        if (_.options.fade === true) {
            if (dontAnimate !== true) {

                _.fadeSlideOut(oldSlide);

                _.fadeSlide(animSlide, function() {
                    _.postSlide(animSlide);
                });

            } else {
                _.postSlide(animSlide);
            }
            _.animateHeight();
            return;
        }

        if (dontAnimate !== true) {
            _.animateSlide(targetLeft, function() {
                _.postSlide(animSlide);
            });
        } else {
            _.postSlide(animSlide);
        }

    };

    Slick.prototype.startLoad = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.hide();
            _.$nextArrow.hide();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.hide();

        }

        _.$slider.addClass('slick-loading');

    };

    Slick.prototype.swipeDirection = function() {

        var xDist, yDist, r, swipeAngle, _ = this;

        xDist = _.touchObject.startX - _.touchObject.curX;
        yDist = _.touchObject.startY - _.touchObject.curY;
        r = Math.atan2(yDist, xDist);

        swipeAngle = Math.round(r * 180 / Math.PI);
        if (swipeAngle < 0) {
            swipeAngle = 360 - Math.abs(swipeAngle);
        }

        if ((swipeAngle <= 45) && (swipeAngle >= 0)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle <= 360) && (swipeAngle >= 315)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle >= 135) && (swipeAngle <= 225)) {
            return (_.options.rtl === false ? 'right' : 'left');
        }
        if (_.options.verticalSwiping === true) {
            if ((swipeAngle >= 35) && (swipeAngle <= 135)) {
                return 'down';
            } else {
                return 'up';
            }
        }

        return 'vertical';

    };

    Slick.prototype.swipeEnd = function(event) {

        var _ = this,
            slideCount,
            direction;

        _.dragging = false;
        _.swiping = false;

        if (_.scrolling) {
            _.scrolling = false;
            return false;
        }

        _.interrupted = false;
        _.shouldClick = ( _.touchObject.swipeLength > 10 ) ? false : true;

        if ( _.touchObject.curX === undefined ) {
            return false;
        }

        if ( _.touchObject.edgeHit === true ) {
            _.$slider.trigger('edge', [_, _.swipeDirection() ]);
        }

        if ( _.touchObject.swipeLength >= _.touchObject.minSwipe ) {

            direction = _.swipeDirection();

            switch ( direction ) {

                case 'left':
                case 'down':

                    slideCount =
                        _.options.swipeToSlide ?
                            _.checkNavigable( _.currentSlide + _.getSlideCount() ) :
                            _.currentSlide + _.getSlideCount();

                    _.currentDirection = 0;

                    break;

                case 'right':
                case 'up':

                    slideCount =
                        _.options.swipeToSlide ?
                            _.checkNavigable( _.currentSlide - _.getSlideCount() ) :
                            _.currentSlide - _.getSlideCount();

                    _.currentDirection = 1;

                    break;

                default:


            }

            if( direction != 'vertical' ) {

                _.slideHandler( slideCount );
                _.touchObject = {};
                _.$slider.trigger('swipe', [_, direction ]);

            }

        } else {

            if ( _.touchObject.startX !== _.touchObject.curX ) {

                _.slideHandler( _.currentSlide );
                _.touchObject = {};

            }

        }

    };

    Slick.prototype.swipeHandler = function(event) {

        var _ = this;

        if ((_.options.swipe === false) || ('ontouchend' in document && _.options.swipe === false)) {
            return;
        } else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {
            return;
        }

        _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ?
            event.originalEvent.touches.length : 1;

        _.touchObject.minSwipe = _.listWidth / _.options
            .touchThreshold;

        if (_.options.verticalSwiping === true) {
            _.touchObject.minSwipe = _.listHeight / _.options
                .touchThreshold;
        }

        switch (event.data.action) {

            case 'start':
                _.swipeStart(event);
                break;

            case 'move':
                _.swipeMove(event);
                break;

            case 'end':
                _.swipeEnd(event);
                break;

        }

    };

    Slick.prototype.swipeMove = function(event) {

        var _ = this,
            edgeWasHit = false,
            curLeft, swipeDirection, swipeLength, positionOffset, touches, verticalSwipeLength;

        touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;

        if (!_.dragging || _.scrolling || touches && touches.length !== 1) {
            return false;
        }

        curLeft = _.getLeft(_.currentSlide);

        _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
        _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;

        _.touchObject.swipeLength = Math.round(Math.sqrt(
            Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));

        verticalSwipeLength = Math.round(Math.sqrt(
            Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));

        if (!_.options.verticalSwiping && !_.swiping && verticalSwipeLength > 4) {
            _.scrolling = true;
            return false;
        }

        if (_.options.verticalSwiping === true) {
            _.touchObject.swipeLength = verticalSwipeLength;
        }

        swipeDirection = _.swipeDirection();

        if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
            _.swiping = true;
            event.preventDefault();
        }

        positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);
        if (_.options.verticalSwiping === true) {
            positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
        }


        swipeLength = _.touchObject.swipeLength;

        _.touchObject.edgeHit = false;

        if (_.options.infinite === false) {
            if ((_.currentSlide === 0 && swipeDirection === 'right') || (_.currentSlide >= _.getDotCount() && swipeDirection === 'left')) {
                swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
                _.touchObject.edgeHit = true;
            }
        }

        if (_.options.vertical === false) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        } else {
            _.swipeLeft = curLeft + (swipeLength * (_.$list.height() / _.listWidth)) * positionOffset;
        }
        if (_.options.verticalSwiping === true) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        }

        if (_.options.fade === true || _.options.touchMove === false) {
            return false;
        }

        if (_.animating === true) {
            _.swipeLeft = null;
            return false;
        }

        _.setCSS(_.swipeLeft);

    };

    Slick.prototype.swipeStart = function(event) {

        var _ = this,
            touches;

        _.interrupted = true;

        if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
            _.touchObject = {};
            return false;
        }

        if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
            touches = event.originalEvent.touches[0];
        }

        _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
        _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;

        _.dragging = true;

    };

    Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function() {

        var _ = this;

        if (_.$slidesCache !== null) {

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.unload = function() {

        var _ = this;

        $('.slick-cloned', _.$slider).remove();

        if (_.$dots) {
            _.$dots.remove();
        }

        if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
            _.$prevArrow.remove();
        }

        if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
            _.$nextArrow.remove();
        }

        _.$slides
            .removeClass('slick-slide slick-active slick-visible slick-current')
            .attr('aria-hidden', 'true')
            .css('width', '');

    };

    Slick.prototype.unslick = function(fromBreakpoint) {

        var _ = this;
        _.$slider.trigger('unslick', [_, fromBreakpoint]);
        _.destroy();

    };

    Slick.prototype.updateArrows = function() {

        var _ = this,
            centerOffset;

        centerOffset = Math.floor(_.options.slidesToShow / 2);

        if ( _.options.arrows === true &&
            _.slideCount > _.options.slidesToShow &&
            !_.options.infinite ) {

            _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            if (_.currentSlide === 0) {

                _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            }

        }

    };

    Slick.prototype.updateDots = function() {

        var _ = this;

        if (_.$dots !== null) {

            _.$dots
                .find('li')
                    .removeClass('slick-active')
                    .end();

            _.$dots
                .find('li')
                .eq(Math.floor(_.currentSlide / _.options.slidesToScroll))
                .addClass('slick-active');

        }

    };

    Slick.prototype.visibility = function() {

        var _ = this;

        if ( _.options.autoplay ) {

            if ( document[_.hidden] ) {

                _.interrupted = true;

            } else {

                _.interrupted = false;

            }

        }

    };

    $.fn.slick = function() {
        var _ = this,
            opt = arguments[0],
            args = Array.prototype.slice.call(arguments, 1),
            l = _.length,
            i,
            ret;
        for (i = 0; i < l; i++) {
            if (typeof opt == 'object' || typeof opt == 'undefined')
                _[i].slick = new Slick(_[i], opt);
            else
                ret = _[i].slick[opt].apply(_[i].slick, args);
            if (typeof ret != 'undefined') return ret;
        }
        return _;
    };

}));

'use strict';
(function ($) {
    var SlickLightbox, defaults;
    SlickLightbox = function () {
        /*
  The core class.
   */
        function SlickLightbox(element, options1) {
            var slickLightbox;
            this.options = options1;
            /* Binds the plugin. */
            this.$element = $(element);
            this.didInit = false;
            slickLightbox = this;
            this.$element.on('click.slickLightbox', this.options.itemSelector, function (e) {
                var $clickedItem, $items;
                e.preventDefault();
                $clickedItem = $(this);
                $clickedItem.blur();
                if (typeof slickLightbox.options.shouldOpen === 'function') {
                    if (!slickLightbox.options.shouldOpen(slickLightbox, $clickedItem, e)) {
                        return;
                    }
                }
                $items = slickLightbox.$element.find(slickLightbox.options.itemSelector);
                if (slickLightbox.elementIsSlick()) {
                    $items = slickLightbox.filterOutSlickClones($items);
                    $clickedItem = slickLightbox.handlePossibleCloneClick($clickedItem, $items);
                }
                return slickLightbox.init($items.index($clickedItem));
            });
        }
        SlickLightbox.prototype.init = function (index) {
            /* Creates the lightbox, opens it, binds events and calls `slick`. Accepts `index` of the element, that triggered it (so that we know, on which slide to start slick). */
            this.didInit = true;
            this.detectIE();
            this.createModal();
            this.bindEvents();
            this.initSlick(index);
            return this.open();
        };
        SlickLightbox.prototype.createModalItems = function () {
            /* Creates individual slides to be used with slick. If `options.images` array is specified, it uses it's contents, otherwise loops through elements' `options.itemSelector`. */
            var $items, createItem, itemTemplate, lazyPlaceholder, length, links;
            lazyPlaceholder = this.options.lazyPlaceholder || 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
            itemTemplate = function (source, caption, lazy) {
                var imgSourceParams;
                if (lazy === true) {
                    imgSourceParams = ' data-lazy="' + source + '" src="' + lazyPlaceholder + '" ';
                } else {
                    imgSourceParams = ' src="' + source + '" ';
                }
                return '<div class="slick-lightbox-slick-item">\n  <div class="slick-lightbox-slick-item-inner">\n    <img class="slick-lightbox-slick-img" ' + imgSourceParams + ' />\n    ' + caption + '\n  </div>\n</div>';
            };
            if (this.options.images) {
                links = $.map(this.options.images, function (_this) {
                    return function (img) {
                        return itemTemplate(img, _this.options.lazy);
                    };
                }(this));
            } else {
                $items = this.filterOutSlickClones(this.$element.find(this.options.itemSelector));
                length = $items.length;
                createItem = function (_this) {
                    return function (el, index) {
                        var caption, info, src;
                        info = {
                            index: index,
                            length: length
                        };
                        caption = _this.getElementCaption(el, info);
                        src = _this.getElementSrc(el);
                        return itemTemplate(src, caption, _this.options.lazy);
                    };
                }(this);
                links = $.map($items, createItem);
            }
            return links;
        };
        SlickLightbox.prototype.createModal = function () {
            /* Creates a `slick`-friendly modal. */
            var html, links;
            links = this.createModalItems();
            html = '<div class="slick-lightbox slick-lightbox-hide-init' + (this.isIE ? ' slick-lightbox-ie' : '') + '" style="background: ' + this.options.background + ';">\n  <div class="slick-lightbox-inner">\n    <div class="slick-lightbox-slick slick-caption-' + this.options.captionPosition + '">' + links.join('') + '</div>\n  <div>\n<div>';
            this.$modalElement = $(html);
            this.$parts = {};
            this.$parts['closeButton'] = $(this.options.layouts.closeButton);
            this.$modalElement.find('.slick-lightbox-inner').append(this.$parts['closeButton']);
            return $('body').append(this.$modalElement);
        };
        SlickLightbox.prototype.initSlick = function (index) {
            /* Runs slick by default, using `options.slick` if provided. If `options.slick` is a function, it gets fired instead of us initializing slick. Merges in initialSlide option. */
            var additional;
            additional = { initialSlide: index };
            if (this.options.lazy) {
                additional.lazyLoad = 'ondemand';
            }
            if (this.options.slick != null) {
                if (typeof this.options.slick === 'function') {
                    this.slick = this.options.slick(this.$modalElement);
                } else {
                    this.slick = this.$modalElement.find('.slick-lightbox-slick').slick($.extend({}, this.options.slick, additional));
                }
            } else {
                this.slick = this.$modalElement.find('.slick-lightbox-slick').slick(additional);
            }
            return this.$modalElement.trigger('init.slickLightbox');
        };
        SlickLightbox.prototype.open = function () {
            /* Opens the lightbox. */
            if (this.options.useHistoryApi) {
                this.writeHistory();
            }
            this.$element.trigger('show.slickLightbox');
            setTimeout(function (_this) {
                return function () {
                    return _this.$element.trigger('shown.slickLightbox');
                };
            }(this), this.getTransitionDuration());
            return this.$modalElement.removeClass('slick-lightbox-hide-init');
        };
        SlickLightbox.prototype.close = function () {
            /* Closes the lightbox and destroys it, maintaining the original element bindings. */
            this.$element.trigger('hide.slickLightbox');
            setTimeout(function (_this) {
                return function () {
                    return _this.$element.trigger('hidden.slickLightbox');
                };
            }(this), this.getTransitionDuration());
            this.$modalElement.addClass('slick-lightbox-hide');
            return this.destroy();
        };
        SlickLightbox.prototype.bindEvents = function () {
            /* Binds global events. */
            var resizeSlides;
            resizeSlides = function (_this) {
                return function () {
                    var h;
                    h = _this.$modalElement.find('.slick-lightbox-inner').height();
                    _this.$modalElement.find('.slick-lightbox-slick-item').height(h);
                    return _this.$modalElement.find('.slick-lightbox-slick-img, .slick-lightbox-slick-item-inner').css('max-height', Math.round(_this.options.imageMaxHeight * h));
                };
            }(this);
            $(window).on('orientationchange.slickLightbox resize.slickLightbox', resizeSlides);
            if (this.options.useHistoryApi) {
                $(window).on('popstate.slickLightbox', function (_this) {
                    return function () {
                        return _this.close();
                    };
                }(this));
            }
            this.$modalElement.on('init.slickLightbox', resizeSlides);
            this.$modalElement.on('destroy.slickLightbox', function (_this) {
                return function () {
                    return _this.destroy();
                };
            }(this));
            this.$element.on('destroy.slickLightbox', function (_this) {
                return function () {
                    return _this.destroy(true);
                };
            }(this));
            this.$parts['closeButton'].on('click.slickLightbox touchstart.slickLightbox', function (_this) {
                return function (e) {
                    e.preventDefault();
                    return _this.close();
                };
            }(this));
            if (this.options.closeOnEscape || this.options.navigateByKeyboard) {
                $(document).on('keydown.slickLightbox', function (_this) {
                    return function (e) {
                        var code;
                        code = e.keyCode ? e.keyCode : e.which;
                        if (_this.options.navigateByKeyboard) {
                            if (code === 37) {
                                _this.slideSlick('left');
                            } else if (code === 39) {
                                _this.slideSlick('right');
                            }
                        }
                        if (_this.options.closeOnEscape) {
                            if (code === 27) {
                                return _this.close();
                            }
                        }
                    };
                }(this));
            }
            if (this.options.closeOnBackdropClick) {
                this.$modalElement.on('click.slickLightbox touchstart.slickLightbox', '.slick-lightbox-slick-img', function (e) {
                    return e.stopPropagation();
                });
                return this.$modalElement.on('click.slickLightbox', '.slick-lightbox-slick-item', function (_this) {
                    return function (e) {
                        e.preventDefault();
                        return _this.close();
                    };
                }(this));
            }
        };
        SlickLightbox.prototype.slideSlick = function (direction) {
            /* Moves the slick prev or next. */
            if (direction === 'left') {
                return this.slick.slick('slickPrev');
            } else {
                return this.slick.slick('slickNext');
            }
        };
        SlickLightbox.prototype.detectIE = function () {
            /* Detects usage of IE8 and lower. */
            var ieversion;
            this.isIE = false;
            if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)) {
                ieversion = new Number(RegExp.$1);
                if (ieversion < 9) {
                    return this.isIE = true;
                }
            }
        };
        SlickLightbox.prototype.getElementCaption = function (el, info) {
            /* Returns caption for each slide based on the type of `options.caption`. */
            var c;
            if (!this.options.caption) {
                return '';
            }
            c = function () {
                switch (typeof this.options.caption) {
                case 'function':
                    return this.options.caption(el, info);
                case 'string':
                    return $(el).data(this.options.caption);
                }
            }.call(this);
            return '<span class="slick-lightbox-slick-caption">' + c + '</span>';
        };
        SlickLightbox.prototype.getElementSrc = function (el) {
            /* Returns src for each slide image based on the type of `options.src`. */
            switch (typeof this.options.src) {
            case 'function':
                return this.options.src(el);
            case 'string':
                return $(el).attr(this.options.src);
            default:
                return el.href;
            }
        };
        SlickLightbox.prototype.unbindEvents = function () {
            /* Unbinds global events. */
            $(window).off('.slickLightbox');
            $(document).off('.slickLightbox');
            return this.$modalElement.off('.slickLightbox');
        };
        SlickLightbox.prototype.destroy = function (unbindAnchors) {
            if (unbindAnchors == null) {
                unbindAnchors = false;
            }
            /* Destroys the lightbox and unbinds global events. If `true` is passed as an argument, unbinds the original element as well. */
            if (this.didInit) {
                this.unbindEvents();
                setTimeout(function (_this) {
                    return function () {
                        return _this.$modalElement.remove();
                    };
                }(this), this.options.destroyTimeout);
            }
            if (unbindAnchors) {
                this.$element.off('.slickLightbox');
                return this.$element.off('.slickLightbox', this.options.itemSelector);
            }
        };
        SlickLightbox.prototype.destroyPrevious = function () {
            /* Destroys lightboxes currently in DOM. */
            return $('body').children('.slick-lightbox').trigger('destroy.slickLightbox');
        };
        SlickLightbox.prototype.getTransitionDuration = function () {
            /* Detects the transition duration to know when to remove stuff from DOM etc. */
            var duration;
            if (this.transitionDuration) {
                return this.transitionDuration;
            }
            duration = this.$modalElement.css('transition-duration');
            if (typeof duration === 'undefined') {
                return this.transitionDuration = 500;
            } else {
                return this.transitionDuration = duration.indexOf('ms') > -1 ? parseFloat(duration) : parseFloat(duration) * 1000;
            }
        };
        SlickLightbox.prototype.writeHistory = function () {
            /* Writes an empty state to the history API if supported. */
            return typeof history !== 'undefined' && history !== null ? typeof history.pushState === 'function' ? history.pushState(null, null, '') : void 0 : void 0;
        };
        SlickLightbox.prototype.filterOutSlickClones = function ($items) {
            /* Removes all slick clones from the set of elements. Only does so, if the target element is a slick slider. */
            if (!this.elementIsSlick()) {
                return $items;
            }
            return $items = $items.filter(function () {
                var $item;
                $item = $(this);
                return !$item.hasClass('slick-cloned') && $item.parents('.slick-cloned').length === 0;
            });
        };
        SlickLightbox.prototype.handlePossibleCloneClick = function ($clickedItem, $items) {
            var href;
            if (!this.elementIsSlick()) {
                return $clickedItem;
            }
            if (!$clickedItem.closest('.slick-slide').hasClass('slick-cloned')) {
                return $clickedItem;
            }
            href = $clickedItem.attr('href');
            return $items.filter(function () {
                return $(this).attr('href') === href;
            }).first();
        };
        SlickLightbox.prototype.elementIsSlick = function () {
            return this.$element.hasClass('slick-slider');
        };
        return SlickLightbox;
    }();
    defaults = {
        background: 'rgba(0,0,0,.8)',
        closeOnEscape: true,
        closeOnBackdropClick: true,
        destroyTimeout: 500,
        itemSelector: 'a',
        navigateByKeyboard: true,
        src: false,
        caption: false,
        captionPosition: 'dynamic',
        images: false,
        slick: {},
        useHistoryApi: false,
        layouts: { closeButton: '<button type="button" class="slick-lightbox-close"></button>' },
        shouldOpen: null,
        imageMaxHeight: 0.9,
        lazy: false
    };
    $.fn.slickLightbox = function (options) {
        /* Fires the plugin. */
        options = $.extend({}, defaults, options);
        $(this).each(function () {
            return this.slickLightbox = new SlickLightbox(this, options);
        });
        return this;
    };
    $.fn.unslickLightbox = function () {
        /* Removes everything. */
        return $(this).trigger('destroy.slickLightbox').each(function () {
            return this.slickLightbox = null;
        });
    };
}(jQuery));

/*!
 * @name        easyzoom
 * @author       <>
 * @modified    Thursday, November 22nd, 2018
 * @version     2.5.2
 */
!function(t,e){"use strict";"function"==typeof define&&define.amd?define(["jquery"],function(t){e(t)}):"object"==typeof module&&module.exports?module.exports=t.EasyZoom=e(require("jquery")):t.EasyZoom=e(t.jQuery)}(this,function(i){"use strict";var c,d,l,p,u,f,o={loadingNotice:"Loading image",errorNotice:"The image could not be loaded",errorDuration:2500,linkAttribute:"href",preventClicks:!0,beforeShow:i.noop,beforeHide:i.noop,onShow:i.noop,onHide:i.noop,onMove:i.noop};function s(t,e){this.$target=i(t),this.opts=i.extend({},o,e,this.$target.data()),void 0===this.isOpen&&this._init()}return s.prototype._init=function(){this.$link=this.$target.find("a"),this.$image=this.$target.find("img"),this.$flyout=i('<div class="easyzoom-flyout" />'),this.$notice=i('<div class="easyzoom-notice" />'),this.$target.on({"mousemove.easyzoom touchmove.easyzoom":i.proxy(this._onMove,this),"mouseleave.easyzoom touchend.easyzoom":i.proxy(this._onLeave,this),"mouseenter.easyzoom touchstart.easyzoom":i.proxy(this._onEnter,this)}),this.opts.preventClicks&&this.$target.on("click.easyzoom",function(t){t.preventDefault()})},s.prototype.show=function(t,e){var o=this;if(!1!==this.opts.beforeShow.call(this)){if(!this.isReady)return this._loadImage(this.$link.attr(this.opts.linkAttribute),function(){!o.isMouseOver&&e||o.show(t)});this.$target.append(this.$flyout);var i=this.$target.outerWidth(),s=this.$target.outerHeight(),h=this.$flyout.width(),n=this.$flyout.height(),a=this.$zoom.width(),r=this.$zoom.height();(c=a-h)<0&&(c=0),(d=r-n)<0&&(d=0),l=c/i,p=d/s,this.isOpen=!0,this.opts.onShow.call(this),t&&this._move(t)}},s.prototype._onEnter=function(t){var e=t.originalEvent.touches;this.isMouseOver=!0,e&&1!=e.length||(t.preventDefault(),this.show(t,!0))},s.prototype._onMove=function(t){this.isOpen&&(t.preventDefault(),this._move(t))},s.prototype._onLeave=function(){this.isMouseOver=!1,this.isOpen&&this.hide()},s.prototype._onLoad=function(t){t.currentTarget.width&&(this.isReady=!0,this.$notice.detach(),this.$flyout.html(this.$zoom),this.$target.removeClass("is-loading").addClass("is-ready"),t.data.call&&t.data())},s.prototype._onError=function(){var t=this;this.$notice.text(this.opts.errorNotice),this.$target.removeClass("is-loading").addClass("is-error"),this.detachNotice=setTimeout(function(){t.$notice.detach(),t.detachNotice=null},this.opts.errorDuration)},s.prototype._loadImage=function(t,e){var o=new Image;this.$target.addClass("is-loading").append(this.$notice.text(this.opts.loadingNotice)),this.$zoom=i(o).on("error",i.proxy(this._onError,this)).on("load",e,i.proxy(this._onLoad,this)),o.style.position="absolute",o.src=t},s.prototype._move=function(t){if(0===t.type.indexOf("touch")){var e=t.touches||t.originalEvent.touches;u=e[0].pageX,f=e[0].pageY}else u=t.pageX||u,f=t.pageY||f;var o=this.$target.offset(),i=f-o.top,s=u-o.left,h=Math.ceil(i*p),n=Math.ceil(s*l);if(n<0||h<0||c<n||d<h)this.hide();else{var a=-1*h,r=-1*n;this.$zoom.css({top:a,left:r}),this.opts.onMove.call(this,a,r)}},s.prototype.hide=function(){this.isOpen&&!1!==this.opts.beforeHide.call(this)&&(this.$flyout.detach(),this.isOpen=!1,this.opts.onHide.call(this))},s.prototype.swap=function(t,e,o){this.hide(),this.isReady=!1,this.detachNotice&&clearTimeout(this.detachNotice),this.$notice.parent().length&&this.$notice.detach(),this.$target.removeClass("is-loading is-ready is-error"),this.$image.attr({src:t,srcset:i.isArray(o)?o.join():o}),this.$link.attr(this.opts.linkAttribute,e)},s.prototype.teardown=function(){this.hide(),this.$target.off(".easyzoom").removeClass("is-loading is-ready is-error"),this.detachNotice&&clearTimeout(this.detachNotice),delete this.$link,delete this.$zoom,delete this.$image,delete this.$notice,delete this.$flyout,delete this.isOpen,delete this.isReady},i.fn.easyZoom=function(e){return this.each(function(){var t=i.data(this,"easyZoom");t?void 0===t.isOpen&&t._init():i.data(this,"easyZoom",new s(this,e))})},s}); 

/**
 * Owl Carousel v2.1.6
 * Copyright 2013-2016 David Deutsch
 * Licensed under MIT (https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE)
 */
/**
 * Owl carousel
 * @version 2.1.6
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 * @todo Lazy Load Icon
 * @todo prevent animationend bubling
 * @todo itemsScaleUp
 * @todo Test Zepto
 * @todo stagePadding calculate wrong active classes
 */
;(function($,window,document,undefined){/**
	 * Creates a carousel.
	 * @class The Owl Carousel.
	 * @public
	 * @param {HTMLElement|jQuery} element - The element to create the carousel for.
	 * @param {Object} [options] - The options
	 */
	function Owl(element, options) {

		/**
		 * Current settings for the carousel.
		 * @public
		 */
		this.settings = null;

		/**
		 * Current options set by the caller including defaults.
		 * @public
		 */
		this.options = $.extend({}, Owl.Defaults, options);

		/**
		 * Plugin element.
		 * @public
		 */
		this.$element = $(element);

		/**
		 * Proxied event handlers.
		 * @protected
		 */
		this._handlers = {};

		/**
		 * References to the running plugins of this carousel.
		 * @protected
		 */
		this._plugins = {};

		/**
		 * Currently suppressed events to prevent them from beeing retriggered.
		 * @protected
		 */
		this._supress = {};

		/**
		 * Absolute current position.
		 * @protected
		 */
		this._current = null;

		/**
		 * Animation speed in milliseconds.
		 * @protected
		 */
		this._speed = null;

		/**
		 * Coordinates of all items in pixel.
		 * @todo The name of this member is missleading.
		 * @protected
		 */
		this._coordinates = [];

		/**
		 * Current breakpoint.
		 * @todo Real media queries would be nice.
		 * @protected
		 */
		this._breakpoint = null;

		/**
		 * Current width of the plugin element.
		 */
		this._width = null;

		/**
		 * All real items.
		 * @protected
		 */
		this._items = [];

		/**
		 * All cloned items.
		 * @protected
		 */
		this._clones = [];

		/**
		 * Merge values of all items.
		 * @todo Maybe this could be part of a plugin.
		 * @protected
		 */
		this._mergers = [];

		/**
		 * Widths of all items.
		 */
		this._widths = [];

		/**
		 * Invalidated parts within the update process.
		 * @protected
		 */
		this._invalidated = {};

		/**
		 * Ordered list of workers for the update process.
		 * @protected
		 */
		this._pipe = [];

		/**
		 * Current state information for the drag operation.
		 * @todo #261
		 * @protected
		 */
		this._drag = {
			time: null,
			target: null,
			pointer: null,
			stage: {
				start: null,
				current: null
			},
			direction: null
		};

		/**
		 * Current state information and their tags.
		 * @type {Object}
		 * @protected
		 */
		this._states = {
			current: {},
			tags: {
				'initializing': [ 'busy' ],
				'animating': [ 'busy' ],
				'dragging': [ 'interacting' ]
			}
		};

		$.each([ 'onResize', 'onThrottledResize' ], $.proxy(function(i, handler) {
			this._handlers[handler] = $.proxy(this[handler], this);
		}, this));

		$.each(Owl.Plugins, $.proxy(function(key, plugin) {
			this._plugins[key.charAt(0).toLowerCase() + key.slice(1)]
				= new plugin(this);
		}, this));

		$.each(Owl.Workers, $.proxy(function(priority, worker) {
			this._pipe.push({
				'filter': worker.filter,
				'run': $.proxy(worker.run, this)
			});
		}, this));

		this.setup();
		this.initialize();
	}

	/**
	 * Default options for the carousel.
	 * @public
	 */
	Owl.Defaults = {
		items: 3,
		loop: false,
		center: false,
		rewind: false,

		mouseDrag: true,
		touchDrag: true,
		pullDrag: true,
		freeDrag: false,

		margin: 0,
		stagePadding: 0,

		merge: false,
		mergeFit: true,
		autoWidth: false,

		startPosition: 0,
		rtl: false,

		smartSpeed: 250,
		fluidSpeed: false,
		dragEndSpeed: false,

		responsive: {},
		responsiveRefreshRate: 200,
		responsiveBaseElement: window,

		fallbackEasing: 'swing',

		info: false,

		nestedItemSelector: false,
		itemElement: 'div',
		stageElement: 'div',

		refreshClass: 'owl-refresh',
		loadedClass: 'owl-loaded',
		loadingClass: 'owl-loading',
		rtlClass: 'owl-rtl',
		responsiveClass: 'owl-responsive',
		dragClass: 'owl-drag',
		itemClass: 'owl-item',
		stageClass: 'owl-stage',
		stageOuterClass: 'owl-stage-outer',
		grabClass: 'owl-grab'
	};

	/**
	 * Enumeration for width.
	 * @public
	 * @readonly
	 * @enum {String}
	 */
	Owl.Width = {
		Default: 'default',
		Inner: 'inner',
		Outer: 'outer'
	};

	/**
	 * Enumeration for types.
	 * @public
	 * @readonly
	 * @enum {String}
	 */
	Owl.Type = {
		Event: 'event',
		State: 'state'
	};

	/**
	 * Contains all registered plugins.
	 * @public
	 */
	Owl.Plugins = {};

	/**
	 * List of workers involved in the update process.
	 */
	Owl.Workers = [ {
		filter: [ 'width', 'settings' ],
		run: function() {
			this._width = this.$element.width();
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			cache.current = this._items && this._items[this.relative(this._current)];
		}
	}, {
		filter: [ 'items', 'settings' ],
		run: function() {
			this.$stage.children('.cloned').remove();
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			var margin = this.settings.margin || '',
				grid = !this.settings.autoWidth,
				rtl = this.settings.rtl,
				css = {
					'width': 'auto',
					'margin-left': rtl ? margin : '',
					'margin-right': rtl ? '' : margin
				};

			!grid && this.$stage.children().css(css);

			cache.css = css;
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			var width = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
				merge = null,
				iterator = this._items.length,
				grid = !this.settings.autoWidth,
				widths = [];

			cache.items = {
				merge: false,
				width: width
			};

			while (iterator--) {
				merge = this._mergers[iterator];
				merge = this.settings.mergeFit && Math.min(merge, this.settings.items) || merge;

				cache.items.merge = merge > 1 || cache.items.merge;

				widths[iterator] = !grid ? this._items[iterator].width() : width * merge;
			}

			this._widths = widths;
		}
	}, {
		filter: [ 'items', 'settings' ],
		run: function() {
			var clones = [],
				items = this._items,
				settings = this.settings,
				view = Math.max(settings.items * 2, 4),
				size = Math.ceil(items.length / 2) * 2,
				repeat = settings.loop && items.length ? settings.rewind ? view : Math.max(view, size) : 0,
				append = '',
				prepend = '';

			repeat /= 2;

			while (repeat--) {
				clones.push(this.normalize(clones.length / 2, true));
				append = append + items[clones[clones.length - 1]][0].outerHTML;
				clones.push(this.normalize(items.length - 1 - (clones.length - 1) / 2, true));
				prepend = items[clones[clones.length - 1]][0].outerHTML + prepend;
			}

			this._clones = clones;

			$(append).addClass('cloned').appendTo(this.$stage);
			$(prepend).addClass('cloned').prependTo(this.$stage);
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function() {
			var rtl = this.settings.rtl ? 1 : -1,
				size = this._clones.length + this._items.length,
				iterator = -1,
				previous = 0,
				current = 0,
				coordinates = [];

			while (++iterator < size) {
				previous = coordinates[iterator - 1] || 0;
				current = this._widths[this.relative(iterator)] + this.settings.margin;
				coordinates.push(previous + current * rtl);
			}

			this._coordinates = coordinates;
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function() {
			var padding = this.settings.stagePadding,
				coordinates = this._coordinates,
				css = {
					'width': Math.ceil(Math.abs(coordinates[coordinates.length - 1])) + padding * 2,
					'padding-left': padding || '',
					'padding-right': padding || ''
				};

			this.$stage.css(css);
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			var iterator = this._coordinates.length,
				grid = !this.settings.autoWidth,
				items = this.$stage.children();

			if (grid && cache.items.merge) {
				while (iterator--) {
					cache.css.width = this._widths[this.relative(iterator)];
					items.eq(iterator).css(cache.css);
				}
			} else if (grid) {
				cache.css.width = cache.items.width;
				items.css(cache.css);
			}
		}
	}, {
		filter: [ 'items' ],
		run: function() {
			this._coordinates.length < 1 && this.$stage.removeAttr('style');
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			cache.current = cache.current ? this.$stage.children().index(cache.current) : 0;
			cache.current = Math.max(this.minimum(), Math.min(this.maximum(), cache.current));
			this.reset(cache.current);
		}
	}, {
		filter: [ 'position' ],
		run: function() {
			this.animate(this.coordinates(this._current));
		}
	}, {
		filter: [ 'width', 'position', 'items', 'settings' ],
		run: function() {
			var rtl = this.settings.rtl ? 1 : -1,
				padding = this.settings.stagePadding * 2,
				begin = this.coordinates(this.current()) + padding,
				end = begin + this.width() * rtl,
				inner, outer, matches = [], i, n;

			for (i = 0, n = this._coordinates.length; i < n; i++) {
				inner = this._coordinates[i - 1] || 0;
				outer = Math.abs(this._coordinates[i]) + padding * rtl;

				if ((this.op(inner, '<=', begin) && (this.op(inner, '>', end)))
					|| (this.op(outer, '<', begin) && this.op(outer, '>', end))) {
					matches.push(i);
				}
			}

			this.$stage.children('.active').removeClass('active');
			this.$stage.children(':eq(' + matches.join('), :eq(') + ')').addClass('active');

			if (this.settings.center) {
				this.$stage.children('.center').removeClass('center');
				this.$stage.children().eq(this.current()).addClass('center');
			}
		}
	} ];

	/**
	 * Initializes the carousel.
	 * @protected
	 */
	Owl.prototype.initialize = function() {
		this.enter('initializing');
		this.trigger('initialize');

		this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl);

		if (this.settings.autoWidth && !this.is('pre-loading')) {
			var imgs, nestedSelector, width;
			imgs = this.$element.find('img');
			nestedSelector = this.settings.nestedItemSelector ? '.' + this.settings.nestedItemSelector : undefined;
			width = this.$element.children(nestedSelector).width();

			if (imgs.length && width <= 0) {
				this.preloadAutoWidthImages(imgs);
			}
		}

		this.$element.addClass(this.options.loadingClass);

		// create stage
		this.$stage = $('<' + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>')
			.wrap('<div class="' + this.settings.stageOuterClass + '"/>');

		// append stage
		this.$element.append(this.$stage.parent());

		// append content
		this.replace(this.$element.children().not(this.$stage.parent()));

		// check visibility
		if (this.$element.is(':visible')) {
			// update view
			this.refresh();
		} else {
			// invalidate width
			this.invalidate('width');
		}

		this.$element
			.removeClass(this.options.loadingClass)
			.addClass(this.options.loadedClass);

		// register event handlers
		this.registerEventHandlers();

		this.leave('initializing');
		this.trigger('initialized');
	};

	/**
	 * Setups the current settings.
	 * @todo Remove responsive classes. Why should adaptive designs be brought into IE8?
	 * @todo Support for media queries by using `matchMedia` would be nice.
	 * @public
	 */
	Owl.prototype.setup = function() {
		var viewport = this.viewport(),
			overwrites = this.options.responsive,
			match = -1,
			settings = null;

		if (!overwrites) {
			settings = $.extend({}, this.options);
		} else {
			$.each(overwrites, function(breakpoint) {
				if (breakpoint <= viewport && breakpoint > match) {
					match = Number(breakpoint);
				}
			});

			settings = $.extend({}, this.options, overwrites[match]);
			if (typeof settings.stagePadding === 'function') {
				settings.stagePadding = settings.stagePadding();
			}
			delete settings.responsive;

			// responsive class
			if (settings.responsiveClass) {
				this.$element.attr('class',
					this.$element.attr('class').replace(new RegExp('(' + this.options.responsiveClass + '-)\\S+\\s', 'g'), '$1' + match)
				);
			}
		}

		this.trigger('change', { property: { name: 'settings', value: settings } });
		this._breakpoint = match;
		this.settings = settings;
		this.invalidate('settings');
		this.trigger('changed', { property: { name: 'settings', value: this.settings } });
	};

	/**
	 * Updates option logic if necessery.
	 * @protected
	 */
	Owl.prototype.optionsLogic = function() {
		if (this.settings.autoWidth) {
			this.settings.stagePadding = false;
			this.settings.merge = false;
		}
	};

	/**
	 * Prepares an item before add.
	 * @todo Rename event parameter `content` to `item`.
	 * @protected
	 * @returns {jQuery|HTMLElement} - The item container.
	 */
	Owl.prototype.prepare = function(item) {
		var event = this.trigger('prepare', { content: item });

		if (!event.data) {
			event.data = $('<' + this.settings.itemElement + '/>')
				.addClass(this.options.itemClass).append(item)
		}

		this.trigger('prepared', { content: event.data });

		return event.data;
	};

	/**
	 * Updates the view.
	 * @public
	 */
	Owl.prototype.update = function() {
		var i = 0,
			n = this._pipe.length,
			filter = $.proxy(function(p) { return this[p] }, this._invalidated),
			cache = {};

		while (i < n) {
			if (this._invalidated.all || $.grep(this._pipe[i].filter, filter).length > 0) {
				this._pipe[i].run(cache);
			}
			i++;
		}

		this._invalidated = {};

		!this.is('valid') && this.enter('valid');
	};

	/**
	 * Gets the width of the view.
	 * @public
	 * @param {Owl.Width} [dimension=Owl.Width.Default] - The dimension to return.
	 * @returns {Number} - The width of the view in pixel.
	 */
	Owl.prototype.width = function(dimension) {
		dimension = dimension || Owl.Width.Default;
		switch (dimension) {
			case Owl.Width.Inner:
			case Owl.Width.Outer:
				return this._width;
			default:
				return this._width - this.settings.stagePadding * 2 + this.settings.margin;
		}
	};

	/**
	 * Refreshes the carousel primarily for adaptive purposes.
	 * @public
	 */
	Owl.prototype.refresh = function() {
		this.enter('refreshing');
		this.trigger('refresh');

		this.setup();

		this.optionsLogic();

		this.$element.addClass(this.options.refreshClass);

		this.update();

		this.$element.removeClass(this.options.refreshClass);

		this.leave('refreshing');
		this.trigger('refreshed');
	};

	/**
	 * Checks window `resize` event.
	 * @protected
	 */
	Owl.prototype.onThrottledResize = function() {
		window.clearTimeout(this.resizeTimer);
		this.resizeTimer = window.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate);
	};

	/**
	 * Checks window `resize` event.
	 * @protected
	 */
	Owl.prototype.onResize = function() {
		if (!this._items.length) {
			return false;
		}

		if (this._width === this.$element.width()) {
			return false;
		}

		if (!this.$element.is(':visible')) {
			return false;
		}

		this.enter('resizing');

		if (this.trigger('resize').isDefaultPrevented()) {
			this.leave('resizing');
			return false;
		}

		this.invalidate('width');

		this.refresh();

		this.leave('resizing');
		this.trigger('resized');
	};

	/**
	 * Registers event handlers.
	 * @todo Check `msPointerEnabled`
	 * @todo #261
	 * @protected
	 */
	Owl.prototype.registerEventHandlers = function() {
		if ($.support.transition) {
			this.$stage.on($.support.transition.end + '.owl.core', $.proxy(this.onTransitionEnd, this));
		}

		if (this.settings.responsive !== false) {
			this.on(window, 'resize', this._handlers.onThrottledResize);
		}

		if (this.settings.mouseDrag) {
			this.$element.addClass(this.options.dragClass);
			this.$stage.on('mousedown.owl.core', $.proxy(this.onDragStart, this));
			this.$stage.on('dragstart.owl.core selectstart.owl.core', function() { return false });
		}

		if (this.settings.touchDrag){
			this.$stage.on('touchstart.owl.core', $.proxy(this.onDragStart, this));
			this.$stage.on('touchcancel.owl.core', $.proxy(this.onDragEnd, this));
		}
	};

	/**
	 * Handles `touchstart` and `mousedown` events.
	 * @todo Horizontal swipe threshold as option
	 * @todo #261
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onDragStart = function(event) {
		var stage = null;

		if (event.which === 3) {
			return;
		}

		if ($.support.transform) {
			stage = this.$stage.css('transform').replace(/.*\(|\)| /g, '').split(',');
			stage = {
				x: stage[stage.length === 16 ? 12 : 4],
				y: stage[stage.length === 16 ? 13 : 5]
			};
		} else {
			stage = this.$stage.position();
			stage = {
				x: this.settings.rtl ?
					stage.left + this.$stage.width() - this.width() + this.settings.margin :
					stage.left,
				y: stage.top
			};
		}

		if (this.is('animating')) {
			$.support.transform ? this.animate(stage.x) : this.$stage.stop()
			this.invalidate('position');
		}

		this.$element.toggleClass(this.options.grabClass, event.type === 'mousedown');

		this.speed(0);

		this._drag.time = new Date().getTime();
		this._drag.target = $(event.target);
		this._drag.stage.start = stage;
		this._drag.stage.current = stage;
		this._drag.pointer = this.pointer(event);

		$(document).on('mouseup.owl.core touchend.owl.core', $.proxy(this.onDragEnd, this));

		$(document).one('mousemove.owl.core touchmove.owl.core', $.proxy(function(event) {
			var delta = this.difference(this._drag.pointer, this.pointer(event));

			$(document).on('mousemove.owl.core touchmove.owl.core', $.proxy(this.onDragMove, this));

			if (Math.abs(delta.x) < Math.abs(delta.y) && this.is('valid')) {
				return;
			}

			event.preventDefault();

			this.enter('dragging');
			this.trigger('drag');
		}, this));
	};

	/**
	 * Handles the `touchmove` and `mousemove` events.
	 * @todo #261
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onDragMove = function(event) {
		var minimum = null,
			maximum = null,
			pull = null,
			delta = this.difference(this._drag.pointer, this.pointer(event)),
			stage = this.difference(this._drag.stage.start, delta);

		if (!this.is('dragging')) {
			return;
		}

		event.preventDefault();

		if (this.settings.loop) {
			minimum = this.coordinates(this.minimum());
			maximum = this.coordinates(this.maximum() + 1) - minimum;
			stage.x = (((stage.x - minimum) % maximum + maximum) % maximum) + minimum;
		} else {
			minimum = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum());
			maximum = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum());
			pull = this.settings.pullDrag ? -1 * delta.x / 5 : 0;
			stage.x = Math.max(Math.min(stage.x, minimum + pull), maximum + pull);
		}

		this._drag.stage.current = stage;

		this.animate(stage.x);
	};

	/**
	 * Handles the `touchend` and `mouseup` events.
	 * @todo #261
	 * @todo Threshold for click event
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onDragEnd = function(event) {
		var delta = this.difference(this._drag.pointer, this.pointer(event)),
			stage = this._drag.stage.current,
			direction = delta.x > 0 ^ this.settings.rtl ? 'left' : 'right';

		$(document).off('.owl.core');

		this.$element.removeClass(this.options.grabClass);

		if (delta.x !== 0 && this.is('dragging') || !this.is('valid')) {
			this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed);
			this.current(this.closest(stage.x, delta.x !== 0 ? direction : this._drag.direction));
			this.invalidate('position');
			this.update();

			this._drag.direction = direction;

			if (Math.abs(delta.x) > 3 || new Date().getTime() - this._drag.time > 300) {
				this._drag.target.one('click.owl.core', function() { return false; });
			}
		}

		if (!this.is('dragging')) {
			return;
		}

		this.leave('dragging');
		this.trigger('dragged');
	};

	/**
	 * Gets absolute position of the closest item for a coordinate.
	 * @todo Setting `freeDrag` makes `closest` not reusable. See #165.
	 * @protected
	 * @param {Number} coordinate - The coordinate in pixel.
	 * @param {String} direction - The direction to check for the closest item. Ether `left` or `right`.
	 * @return {Number} - The absolute position of the closest item.
	 */
	Owl.prototype.closest = function(coordinate, direction) {
		var position = -1,
			pull = 30,
			width = this.width(),
			coordinates = this.coordinates();

		if (!this.settings.freeDrag) {
			// check closest item
			$.each(coordinates, $.proxy(function(index, value) {
				// on a left pull, check on current index
				if (direction === 'left' && coordinate > value - pull && coordinate < value + pull) {
					position = index;
				// on a right pull, check on previous index
				// to do so, subtract width from value and set position = index + 1
				} else if (direction === 'right' && coordinate > value - width - pull && coordinate < value - width + pull) {
					position = index + 1;
				} else if (this.op(coordinate, '<', value)
					&& this.op(coordinate, '>', coordinates[index + 1] || value - width)) {
					position = direction === 'left' ? index + 1 : index;
				}
				return position === -1;
			}, this));
		}

		if (!this.settings.loop) {
			// non loop boundries
			if (this.op(coordinate, '>', coordinates[this.minimum()])) {
				position = coordinate = this.minimum();
			} else if (this.op(coordinate, '<', coordinates[this.maximum()])) {
				position = coordinate = this.maximum();
			}
		}

		return position;
	};

	/**
	 * Animates the stage.
	 * @todo #270
	 * @public
	 * @param {Number} coordinate - The coordinate in pixels.
	 */
	Owl.prototype.animate = function(coordinate) {
		var animate = this.speed() > 0;

		this.is('animating') && this.onTransitionEnd();

		if (animate) {
			this.enter('animating');
			this.trigger('translate');
		}

		if ($.support.transform3d && $.support.transition) {
			this.$stage.css({
				transform: 'translate3d(' + coordinate + 'px,0px,0px)',
				transition: (this.speed() / 1000) + 's'
			});
		} else if (animate) {
			this.$stage.animate({
				left: coordinate + 'px'
			}, this.speed(), this.settings.fallbackEasing, $.proxy(this.onTransitionEnd, this));
		} else {
			this.$stage.css({
				left: coordinate + 'px'
			});
		}
	};

	/**
	 * Checks whether the carousel is in a specific state or not.
	 * @param {String} state - The state to check.
	 * @returns {Boolean} - The flag which indicates if the carousel is busy.
	 */
	Owl.prototype.is = function(state) {
		return this._states.current[state] && this._states.current[state] > 0;
	};

	/**
	 * Sets the absolute position of the current item.
	 * @public
	 * @param {Number} [position] - The new absolute position or nothing to leave it unchanged.
	 * @returns {Number} - The absolute position of the current item.
	 */
	Owl.prototype.current = function(position) {
		if (position === undefined) {
			return this._current;
		}

		if (this._items.length === 0) {
			return undefined;
		}

		position = this.normalize(position);

		if (this._current !== position) {
			var event = this.trigger('change', { property: { name: 'position', value: position } });

			if (event.data !== undefined) {
				position = this.normalize(event.data);
			}

			this._current = position;

			this.invalidate('position');

			this.trigger('changed', { property: { name: 'position', value: this._current } });
		}

		return this._current;
	};

	/**
	 * Invalidates the given part of the update routine.
	 * @param {String} [part] - The part to invalidate.
	 * @returns {Array.<String>} - The invalidated parts.
	 */
	Owl.prototype.invalidate = function(part) {
		if ($.type(part) === 'string') {
			this._invalidated[part] = true;
			this.is('valid') && this.leave('valid');
		}
		return $.map(this._invalidated, function(v, i) { return i });
	};

	/**
	 * Resets the absolute position of the current item.
	 * @public
	 * @param {Number} position - The absolute position of the new item.
	 */
	Owl.prototype.reset = function(position) {
		position = this.normalize(position);

		if (position === undefined) {
			return;
		}

		this._speed = 0;
		this._current = position;

		this.suppress([ 'translate', 'translated' ]);

		this.animate(this.coordinates(position));

		this.release([ 'translate', 'translated' ]);
	};

	/**
	 * Normalizes an absolute or a relative position of an item.
	 * @public
	 * @param {Number} position - The absolute or relative position to normalize.
	 * @param {Boolean} [relative=false] - Whether the given position is relative or not.
	 * @returns {Number} - The normalized position.
	 */
	Owl.prototype.normalize = function(position, relative) {
		var n = this._items.length,
			m = relative ? 0 : this._clones.length;

		if (!this.isNumeric(position) || n < 1) {
			position = undefined;
		} else if (position < 0 || position >= n + m) {
			position = ((position - m / 2) % n + n) % n + m / 2;
		}

		return position;
	};

	/**
	 * Converts an absolute position of an item into a relative one.
	 * @public
	 * @param {Number} position - The absolute position to convert.
	 * @returns {Number} - The converted position.
	 */
	Owl.prototype.relative = function(position) {
		position -= this._clones.length / 2;
		return this.normalize(position, true);
	};

	/**
	 * Gets the maximum position for the current item.
	 * @public
	 * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
	 * @returns {Number}
	 */
	Owl.prototype.maximum = function(relative) {
		var settings = this.settings,
			maximum = this._coordinates.length,
			iterator,
			reciprocalItemsWidth,
			elementWidth;

		if (settings.loop) {
			maximum = this._clones.length / 2 + this._items.length - 1;
		} else if (settings.autoWidth || settings.merge) {
			iterator = this._items.length;
			reciprocalItemsWidth = this._items[--iterator].width();
			elementWidth = this.$element.width();
			while (iterator--) {
				reciprocalItemsWidth += this._items[iterator].width() + this.settings.margin;
				if (reciprocalItemsWidth > elementWidth) {
					break;
				}
			}
			maximum = iterator + 1;
		} else if (settings.center) {
			maximum = this._items.length - 1;
		} else {
			maximum = this._items.length - settings.items;
		}

		if (relative) {
			maximum -= this._clones.length / 2;
		}

		return Math.max(maximum, 0);
	};

	/**
	 * Gets the minimum position for the current item.
	 * @public
	 * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
	 * @returns {Number}
	 */
	Owl.prototype.minimum = function(relative) {
		return relative ? 0 : this._clones.length / 2;
	};

	/**
	 * Gets an item at the specified relative position.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
	 */
	Owl.prototype.items = function(position) {
		if (position === undefined) {
			return this._items.slice();
		}

		position = this.normalize(position, true);
		return this._items[position];
	};

	/**
	 * Gets an item at the specified relative position.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
	 */
	Owl.prototype.mergers = function(position) {
		if (position === undefined) {
			return this._mergers.slice();
		}

		position = this.normalize(position, true);
		return this._mergers[position];
	};

	/**
	 * Gets the absolute positions of clones for an item.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @returns {Array.<Number>} - The absolute positions of clones for the item or all if no position was given.
	 */
	Owl.prototype.clones = function(position) {
		var odd = this._clones.length / 2,
			even = odd + this._items.length,
			map = function(index) { return index % 2 === 0 ? even + index / 2 : odd - (index + 1) / 2 };

		if (position === undefined) {
			return $.map(this._clones, function(v, i) { return map(i) });
		}

		return $.map(this._clones, function(v, i) { return v === position ? map(i) : null });
	};

	/**
	 * Sets the current animation speed.
	 * @public
	 * @param {Number} [speed] - The animation speed in milliseconds or nothing to leave it unchanged.
	 * @returns {Number} - The current animation speed in milliseconds.
	 */
	Owl.prototype.speed = function(speed) {
		if (speed !== undefined) {
			this._speed = speed;
		}

		return this._speed;
	};

	/**
	 * Gets the coordinate of an item.
	 * @todo The name of this method is missleanding.
	 * @public
	 * @param {Number} position - The absolute position of the item within `minimum()` and `maximum()`.
	 * @returns {Number|Array.<Number>} - The coordinate of the item in pixel or all coordinates.
	 */
	Owl.prototype.coordinates = function(position) {
		var multiplier = 1,
			newPosition = position - 1,
			coordinate;

		if (position === undefined) {
			return $.map(this._coordinates, $.proxy(function(coordinate, index) {
				return this.coordinates(index);
			}, this));
		}

		if (this.settings.center) {
			if (this.settings.rtl) {
				multiplier = -1;
				newPosition = position + 1;
			}

			coordinate = this._coordinates[position];
			coordinate += (this.width() - coordinate + (this._coordinates[newPosition] || 0)) / 2 * multiplier;
		} else {
			coordinate = this._coordinates[newPosition] || 0;
		}

		coordinate = Math.ceil(coordinate);

		return coordinate;
	};

	/**
	 * Calculates the speed for a translation.
	 * @protected
	 * @param {Number} from - The absolute position of the start item.
	 * @param {Number} to - The absolute position of the target item.
	 * @param {Number} [factor=undefined] - The time factor in milliseconds.
	 * @returns {Number} - The time in milliseconds for the translation.
	 */
	Owl.prototype.duration = function(from, to, factor) {
		if (factor === 0) {
			return 0;
		}

		return Math.min(Math.max(Math.abs(to - from), 1), 6) * Math.abs((factor || this.settings.smartSpeed));
	};

	/**
	 * Slides to the specified item.
	 * @public
	 * @param {Number} position - The position of the item.
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
	Owl.prototype.to = function(position, speed) {
		var current = this.current(),
			revert = null,
			distance = position - this.relative(current),
			direction = (distance > 0) - (distance < 0),
			items = this._items.length,
			minimum = this.minimum(),
			maximum = this.maximum();

		if (this.settings.loop) {
			if (!this.settings.rewind && Math.abs(distance) > items / 2) {
				distance += direction * -1 * items;
			}

			position = current + distance;
			revert = ((position - minimum) % items + items) % items + minimum;

			if (revert !== position && revert - distance <= maximum && revert - distance > 0) {
				current = revert - distance;
				position = revert;
				this.reset(current);
			}
		} else if (this.settings.rewind) {
			maximum += 1;
			position = (position % maximum + maximum) % maximum;
		} else {
			position = Math.max(minimum, Math.min(maximum, position));
		}

		this.speed(this.duration(current, position, speed));
		this.current(position);

		if (this.$element.is(':visible')) {
			this.update();
		}
	};

	/**
	 * Slides to the next item.
	 * @public
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
	Owl.prototype.next = function(speed) {
		speed = speed || false;
		this.to(this.relative(this.current()) + 1, speed);
	};

	/**
	 * Slides to the previous item.
	 * @public
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
	Owl.prototype.prev = function(speed) {
		speed = speed || false;
		this.to(this.relative(this.current()) - 1, speed);
	};

	/**
	 * Handles the end of an animation.
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onTransitionEnd = function(event) {

		// if css2 animation then event object is undefined
		if (event !== undefined) {
			event.stopPropagation();

			// Catch only owl-stage transitionEnd event
			if ((event.target || event.srcElement || event.originalTarget) !== this.$stage.get(0)) {
				return false;
			}
		}

		this.leave('animating');
		this.trigger('translated');
	};

	/**
	 * Gets viewport width.
	 * @protected
	 * @return {Number} - The width in pixel.
	 */
	Owl.prototype.viewport = function() {
		var width;
		if (this.options.responsiveBaseElement !== window) {
			width = $(this.options.responsiveBaseElement).width();
		} else if (window.innerWidth) {
			width = window.innerWidth;
		} else if (document.documentElement && document.documentElement.clientWidth) {
			width = document.documentElement.clientWidth;
		} else {
			throw 'Can not detect viewport width.';
		}
		return width;
	};

	/**
	 * Replaces the current content.
	 * @public
	 * @param {HTMLElement|jQuery|String} content - The new content.
	 */
	Owl.prototype.replace = function(content) {
		this.$stage.empty();
		this._items = [];

		if (content) {
			content = (content instanceof jQuery) ? content : $(content);
		}

		if (this.settings.nestedItemSelector) {
			content = content.find('.' + this.settings.nestedItemSelector);
		}

		content.filter(function() {
			return this.nodeType === 1;
		}).each($.proxy(function(index, item) {
			item = this.prepare(item);
			this.$stage.append(item);
			this._items.push(item);
			this._mergers.push(item.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
		}, this));

		this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0);

		this.invalidate('items');
	};

	/**
	 * Adds an item.
	 * @todo Use `item` instead of `content` for the event arguments.
	 * @public
	 * @param {HTMLElement|jQuery|String} content - The item content to add.
	 * @param {Number} [position] - The relative position at which to insert the item otherwise the item will be added to the end.
	 */
	Owl.prototype.add = function(content, position) {
		var current = this.relative(this._current);

		position = position === undefined ? this._items.length : this.normalize(position, true);
		content = content instanceof jQuery ? content : $(content);

		this.trigger('add', { content: content, position: position });

		content = this.prepare(content);

		if (this._items.length === 0 || position === this._items.length) {
			this._items.length === 0 && this.$stage.append(content);
			this._items.length !== 0 && this._items[position - 1].after(content);
			this._items.push(content);
			this._mergers.push(content.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
		} else {
			this._items[position].before(content);
			this._items.splice(position, 0, content);
			this._mergers.splice(position, 0, content.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
		}

		this._items[current] && this.reset(this._items[current].index());

		this.invalidate('items');

		this.trigger('added', { content: content, position: position });
	};

	/**
	 * Removes an item by its position.
	 * @todo Use `item` instead of `content` for the event arguments.
	 * @public
	 * @param {Number} position - The relative position of the item to remove.
	 */
	Owl.prototype.remove = function(position) {
		position = this.normalize(position, true);

		if (position === undefined) {
			return;
		}

		this.trigger('remove', { content: this._items[position], position: position });

		this._items[position].remove();
		this._items.splice(position, 1);
		this._mergers.splice(position, 1);

		this.invalidate('items');

		this.trigger('removed', { content: null, position: position });
	};

	/**
	 * Preloads images with auto width.
	 * @todo Replace by a more generic approach
	 * @protected
	 */
	Owl.prototype.preloadAutoWidthImages = function(images) {
		images.each($.proxy(function(i, element) {
			this.enter('pre-loading');
			element = $(element);
			$(new Image()).one('load', $.proxy(function(e) {
				element.attr('src', e.target.src);
				element.css('opacity', 1);
				this.leave('pre-loading');
				!this.is('pre-loading') && !this.is('initializing') && this.refresh();
			}, this)).attr('src', element.attr('src') || element.attr('data-src') || element.attr('data-src-retina'));
		}, this));
	};

	/**
	 * Destroys the carousel.
	 * @public
	 */
	Owl.prototype.destroy = function() {

		this.$element.off('.owl.core');
		this.$stage.off('.owl.core');
		$(document).off('.owl.core');

		if (this.settings.responsive !== false) {
			window.clearTimeout(this.resizeTimer);
			this.off(window, 'resize', this._handlers.onThrottledResize);
		}

		for (var i in this._plugins) {
			this._plugins[i].destroy();
		}

		this.$stage.children('.cloned').remove();

		this.$stage.unwrap();
		this.$stage.children().contents().unwrap();
		this.$stage.children().unwrap();

		this.$element
			.removeClass(this.options.refreshClass)
			.removeClass(this.options.loadingClass)
			.removeClass(this.options.loadedClass)
			.removeClass(this.options.rtlClass)
			.removeClass(this.options.dragClass)
			.removeClass(this.options.grabClass)
			.attr('class', this.$element.attr('class').replace(new RegExp(this.options.responsiveClass + '-\\S+\\s', 'g'), ''))
			.removeData('owl.carousel');
	};

	/**
	 * Operators to calculate right-to-left and left-to-right.
	 * @protected
	 * @param {Number} [a] - The left side operand.
	 * @param {String} [o] - The operator.
	 * @param {Number} [b] - The right side operand.
	 */
	Owl.prototype.op = function(a, o, b) {
		var rtl = this.settings.rtl;
		switch (o) {
			case '<':
				return rtl ? a > b : a < b;
			case '>':
				return rtl ? a < b : a > b;
			case '>=':
				return rtl ? a <= b : a >= b;
			case '<=':
				return rtl ? a >= b : a <= b;
			default:
				break;
		}
	};

	/**
	 * Attaches to an internal event.
	 * @protected
	 * @param {HTMLElement} element - The event source.
	 * @param {String} event - The event name.
	 * @param {Function} listener - The event handler to attach.
	 * @param {Boolean} capture - Wether the event should be handled at the capturing phase or not.
	 */
	Owl.prototype.on = function(element, event, listener, capture) {
		if (element.addEventListener) {
			element.addEventListener(event, listener, capture);
		} else if (element.attachEvent) {
			element.attachEvent('on' + event, listener);
		}
	};

	/**
	 * Detaches from an internal event.
	 * @protected
	 * @param {HTMLElement} element - The event source.
	 * @param {String} event - The event name.
	 * @param {Function} listener - The attached event handler to detach.
	 * @param {Boolean} capture - Wether the attached event handler was registered as a capturing listener or not.
	 */
	Owl.prototype.off = function(element, event, listener, capture) {
		if (element.removeEventListener) {
			element.removeEventListener(event, listener, capture);
		} else if (element.detachEvent) {
			element.detachEvent('on' + event, listener);
		}
	};

	/**
	 * Triggers a public event.
	 * @todo Remove `status`, `relatedTarget` should be used instead.
	 * @protected
	 * @param {String} name - The event name.
	 * @param {*} [data=null] - The event data.
	 * @param {String} [namespace=carousel] - The event namespace.
	 * @param {String} [state] - The state which is associated with the event.
	 * @param {Boolean} [enter=false] - Indicates if the call enters the specified state or not.
	 * @returns {Event} - The event arguments.
	 */
	Owl.prototype.trigger = function(name, data, namespace, state, enter) {
		var status = {
			item: { count: this._items.length, index: this.current() }
		}, handler = $.camelCase(
			$.grep([ 'on', name, namespace ], function(v) { return v })
				.join('-').toLowerCase()
		), event = $.Event(
			[ name, 'owl', namespace || 'carousel' ].join('.').toLowerCase(),
			$.extend({ relatedTarget: this }, status, data)
		);

		if (!this._supress[name]) {
			$.each(this._plugins, function(name, plugin) {
				if (plugin.onTrigger) {
					plugin.onTrigger(event);
				}
			});

			this.register({ type: Owl.Type.Event, name: name });
			this.$element.trigger(event);

			if (this.settings && typeof this.settings[handler] === 'function') {
				this.settings[handler].call(this, event);
			}
		}

		return event;
	};

	/**
	 * Enters a state.
	 * @param name - The state name.
	 */
	Owl.prototype.enter = function(name) {
		$.each([ name ].concat(this._states.tags[name] || []), $.proxy(function(i, name) {
			if (this._states.current[name] === undefined) {
				this._states.current[name] = 0;
			}

			this._states.current[name]++;
		}, this));
	};

	/**
	 * Leaves a state.
	 * @param name - The state name.
	 */
	Owl.prototype.leave = function(name) {
		$.each([ name ].concat(this._states.tags[name] || []), $.proxy(function(i, name) {
			this._states.current[name]--;
		}, this));
	};

	/**
	 * Registers an event or state.
	 * @public
	 * @param {Object} object - The event or state to register.
	 */
	Owl.prototype.register = function(object) {
		if (object.type === Owl.Type.Event) {
			if (!$.event.special[object.name]) {
				$.event.special[object.name] = {};
			}

			if (!$.event.special[object.name].owl) {
				var _default = $.event.special[object.name]._default;
				$.event.special[object.name]._default = function(e) {
					if (_default && _default.apply && (!e.namespace || e.namespace.indexOf('owl') === -1)) {
						return _default.apply(this, arguments);
					}
					return e.namespace && e.namespace.indexOf('owl') > -1;
				};
				$.event.special[object.name].owl = true;
			}
		} else if (object.type === Owl.Type.State) {
			if (!this._states.tags[object.name]) {
				this._states.tags[object.name] = object.tags;
			} else {
				this._states.tags[object.name] = this._states.tags[object.name].concat(object.tags);
			}

			this._states.tags[object.name] = $.grep(this._states.tags[object.name], $.proxy(function(tag, i) {
				return $.inArray(tag, this._states.tags[object.name]) === i;
			}, this));
		}
	};

	/**
	 * Suppresses events.
	 * @protected
	 * @param {Array.<String>} events - The events to suppress.
	 */
	Owl.prototype.suppress = function(events) {
		$.each(events, $.proxy(function(index, event) {
			this._supress[event] = true;
		}, this));
	};

	/**
	 * Releases suppressed events.
	 * @protected
	 * @param {Array.<String>} events - The events to release.
	 */
	Owl.prototype.release = function(events) {
		$.each(events, $.proxy(function(index, event) {
			delete this._supress[event];
		}, this));
	};

	/**
	 * Gets unified pointer coordinates from event.
	 * @todo #261
	 * @protected
	 * @param {Event} - The `mousedown` or `touchstart` event.
	 * @returns {Object} - Contains `x` and `y` coordinates of current pointer position.
	 */
	Owl.prototype.pointer = function(event) {
		var result = { x: null, y: null };

		event = event.originalEvent || event || window.event;

		event = event.touches && event.touches.length ?
			event.touches[0] : event.changedTouches && event.changedTouches.length ?
				event.changedTouches[0] : event;

		if (event.pageX) {
			result.x = event.pageX;
			result.y = event.pageY;
		} else {
			result.x = event.clientX;
			result.y = event.clientY;
		}

		return result;
	};

	/**
	 * Determines if the input is a Number or something that can be coerced to a Number
	 * @protected
	 * @param {Number|String|Object|Array|Boolean|RegExp|Function|Symbol} - The input to be tested
	 * @returns {Boolean} - An indication if the input is a Number or can be coerced to a Number
	 */
	Owl.prototype.isNumeric = function(number) {
		return !isNaN(parseFloat(number));
	};

	/**
	 * Gets the difference of two vectors.
	 * @todo #261
	 * @protected
	 * @param {Object} - The first vector.
	 * @param {Object} - The second vector.
	 * @returns {Object} - The difference.
	 */
	Owl.prototype.difference = function(first, second) {
		return {
			x: first.x - second.x,
			y: first.y - second.y
		};
	};

	/**
	 * The jQuery Plugin for the Owl Carousel
	 * @todo Navigation plugin `next` and `prev`
	 * @public
	 */
	$.fn.owlCarousel = function(option) {
		var args = Array.prototype.slice.call(arguments, 1);

		return this.each(function() {
			var $this = $(this),
				data = $this.data('owl.carousel');

			if (!data) {
				data = new Owl(this, typeof option == 'object' && option);
				$this.data('owl.carousel', data);

				$.each([
					'next', 'prev', 'to', 'destroy', 'refresh', 'replace', 'add', 'remove'
				], function(i, event) {
					data.register({ type: Owl.Type.Event, name: event });
					data.$element.on(event + '.owl.carousel.core', $.proxy(function(e) {
						if (e.namespace && e.relatedTarget !== this) {
							this.suppress([ event ]);
							data[event].apply(this, [].slice.call(arguments, 1));
							this.release([ event ]);
						}
					}, data));
				});
			}

			if (typeof option == 'string' && option.charAt(0) !== '_') {
				data[option].apply(data, args);
			}
		});
	};

	/**
	 * The constructor for the jQuery Plugin
	 * @public
	 */
	$.fn.owlCarousel.Constructor = Owl;

})(window.Zepto || window.jQuery, window, document);

/**
 * AutoRefresh Plugin
 * @version 2.1.0
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($,window,document,undefined){/**
	 * Creates the auto refresh plugin.
	 * @class The Auto Refresh Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var AutoRefresh = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Refresh interval.
		 * @protected
		 * @type {number}
		 */
		this._interval = null;

		/**
		 * Whether the element is currently visible or not.
		 * @protected
		 * @type {Boolean}
		 */
		this._visible = null;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoRefresh) {
					this.watch();
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, AutoRefresh.Defaults, this._core.options);

		// register event handlers
		this._core.$element.on(this._handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	AutoRefresh.Defaults = {
		autoRefresh: true,
		autoRefreshInterval: 500
	};

	/**
	 * Watches the element.
	 */
	AutoRefresh.prototype.watch = function() {
		if (this._interval) {
			return;
		}

		this._visible = this._core.$element.is(':visible');
		this._interval = window.setInterval($.proxy(this.refresh, this), this._core.settings.autoRefreshInterval);
	};

	/**
	 * Refreshes the element.
	 */
	AutoRefresh.prototype.refresh = function() {
		if (this._core.$element.is(':visible') === this._visible) {
			return;
		}

		this._visible = !this._visible;

		this._core.$element.toggleClass('owl-hidden', !this._visible);

		this._visible && (this._core.invalidate('width') && this._core.refresh());
	};

	/**
	 * Destroys the plugin.
	 */
	AutoRefresh.prototype.destroy = function() {
		var handler, property;

		window.clearInterval(this._interval);

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.AutoRefresh = AutoRefresh;

})(window.Zepto || window.jQuery, window, document);

/**
 * Lazy Plugin
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($,window,document,undefined){/**
	 * Creates the lazy plugin.
	 * @class The Lazy Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var Lazy = function(carousel) {

		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Already loaded items.
		 * @protected
		 * @type {Array.<jQuery>}
		 */
		this._loaded = [];

		/**
		 * Event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel change.owl.carousel resized.owl.carousel': $.proxy(function(e) {
				if (!e.namespace) {
					return;
				}

				if (!this._core.settings || !this._core.settings.lazyLoad) {
					return;
				}

				if ((e.property && e.property.name == 'position') || e.type == 'initialized') {
					var settings = this._core.settings,
						n = (settings.center && Math.ceil(settings.items / 2) || settings.items),
						i = ((settings.center && n * -1) || 0),
						position = (e.property && e.property.value !== undefined ? e.property.value : this._core.current()) + i,
						clones = this._core.clones().length,
						load = $.proxy(function(i, v) { this.load(v) }, this);

					while (i++ < n) {
						this.load(clones / 2 + this._core.relative(position));
						clones && $.each(this._core.clones(this._core.relative(position)), load);
						position++;
					}
				}
			}, this)
		};

		// set the default options
		this._core.options = $.extend({}, Lazy.Defaults, this._core.options);

		// register event handler
		this._core.$element.on(this._handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	Lazy.Defaults = {
		lazyLoad: false
	};

	/**
	 * Loads all resources of an item at the specified position.
	 * @param {Number} position - The absolute position of the item.
	 * @protected
	 */
	Lazy.prototype.load = function(position) {
		var $item = this._core.$stage.children().eq(position),
			$elements = $item && $item.find('.owl-lazy');

		if (!$elements || $.inArray($item.get(0), this._loaded) > -1) {
			return;
		}

		$elements.each($.proxy(function(index, element) {
			var $element = $(element), image,
				url = (window.devicePixelRatio > 1 && $element.attr('data-src-retina')) || $element.attr('data-src');

			this._core.trigger('load', { element: $element, url: url }, 'lazy');

			if ($element.is('img')) {
				$element.one('load.owl.lazy', $.proxy(function() {
					$element.css('opacity', 1);
					this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
				}, this)).attr('src', url);
			} else {
				image = new Image();
				image.onload = $.proxy(function() {
					$element.css({
						'background-image': 'url(' + url + ')',
						'opacity': '1'
					});
					this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
				}, this);
				image.src = url;
			}
		}, this));

		this._loaded.push($item.get(0));
	};

	/**
	 * Destroys the plugin.
	 * @public
	 */
	Lazy.prototype.destroy = function() {
		var handler, property;

		for (handler in this.handlers) {
			this._core.$element.off(handler, this.handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Lazy = Lazy;

})(window.Zepto || window.jQuery, window, document);

/**
 * AutoHeight Plugin
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($,window,document,undefined){/**
	 * Creates the auto height plugin.
	 * @class The Auto Height Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var AutoHeight = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel refreshed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoHeight) {
					this.update();
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoHeight && e.property.name == 'position'){
					this.update();
				}
			}, this),
			'loaded.owl.lazy': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoHeight
					&& e.element.closest('.' + this._core.settings.itemClass).index() === this._core.current()) {
					this.update();
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, AutoHeight.Defaults, this._core.options);

		// register event handlers
		this._core.$element.on(this._handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	AutoHeight.Defaults = {
		autoHeight: false,
		autoHeightClass: 'owl-height'
	};

	/**
	 * Updates the view.
	 */
	AutoHeight.prototype.update = function() {
		var start = this._core._current,
			end = start + this._core.settings.items,
			visible = this._core.$stage.children().toArray().slice(start, end),
			heights = [],
			maxheight = 0;

		$.each(visible, function(index, item) {
			heights.push($(item).height());
		});

		maxheight = Math.max.apply(null, heights);

		this._core.$stage.parent()
			.height(maxheight)
			.addClass(this._core.settings.autoHeightClass);
	};

	AutoHeight.prototype.destroy = function() {
		var handler, property;

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.AutoHeight = AutoHeight;

})(window.Zepto || window.jQuery, window, document);

/**
 * Video Plugin
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($,window,document,undefined){/**
	 * Creates the video plugin.
	 * @class The Video Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var Video = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Cache all video URLs.
		 * @protected
		 * @type {Object}
		 */
		this._videos = {};

		/**
		 * Current playing item.
		 * @protected
		 * @type {jQuery}
		 */
		this._playing = null;

		/**
		 * All event handlers.
		 * @todo The cloned content removale is too late
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace) {
					this._core.register({ type: 'state', name: 'playing', tags: [ 'interacting' ] });
				}
			}, this),
			'resize.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.video && this.isInFullScreen()) {
					e.preventDefault();
				}
			}, this),
			'refreshed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.is('resizing')) {
					this._core.$stage.find('.cloned .owl-video-frame').remove();
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name === 'position' && this._playing) {
					this.stop();
				}
			}, this),
			'prepared.owl.carousel': $.proxy(function(e) {
				if (!e.namespace) {
					return;
				}

				var $element = $(e.content).find('.owl-video');

				if ($element.length) {
					$element.css('display', 'none');
					this.fetch($element, $(e.content));
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Video.Defaults, this._core.options);

		// register event handlers
		this._core.$element.on(this._handlers);

		this._core.$element.on('click.owl.video', '.owl-video-play-icon', $.proxy(function(e) {
			this.play(e);
		}, this));
	};

	/**
	 * Default options.
	 * @public
	 */
	Video.Defaults = {
		video: false,
		videoHeight: false,
		videoWidth: false
	};

	/**
	 * Gets the video ID and the type (YouTube/Vimeo/vzaar only).
	 * @protected
	 * @param {jQuery} target - The target containing the video data.
	 * @param {jQuery} item - The item containing the video.
	 */
	Video.prototype.fetch = function(target, item) {
			var type = (function() {
					if (target.attr('data-vimeo-id')) {
						return 'vimeo';
					} else if (target.attr('data-vzaar-id')) {
						return 'vzaar'
					} else {
						return 'youtube';
					}
				})(),
				id = target.attr('data-vimeo-id') || target.attr('data-youtube-id') || target.attr('data-vzaar-id'),
				width = target.attr('data-width') || this._core.settings.videoWidth,
				height = target.attr('data-height') || this._core.settings.videoHeight,
				url = target.attr('href');

		if (url) {

			/*
					Parses the id's out of the following urls (and probably more):
					https://www.youtube.com/watch?v=:id
					https://youtu.be/:id
					https://vimeo.com/:id
					https://vimeo.com/channels/:channel/:id
					https://vimeo.com/groups/:group/videos/:id
					https://app.vzaar.com/videos/:id

					Visual example: https://regexper.com/#(http%3A%7Chttps%3A%7C)%5C%2F%5C%2F(player.%7Cwww.%7Capp.)%3F(vimeo%5C.com%7Cyoutu(be%5C.com%7C%5C.be%7Cbe%5C.googleapis%5C.com)%7Cvzaar%5C.com)%5C%2F(video%5C%2F%7Cvideos%5C%2F%7Cembed%5C%2F%7Cchannels%5C%2F.%2B%5C%2F%7Cgroups%5C%2F.%2B%5C%2F%7Cwatch%5C%3Fv%3D%7Cv%5C%2F)%3F(%5BA-Za-z0-9._%25-%5D*)(%5C%26%5CS%2B)%3F
			*/

			id = url.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/);

			if (id[3].indexOf('youtu') > -1) {
				type = 'youtube';
			} else if (id[3].indexOf('vimeo') > -1) {
				type = 'vimeo';
			} else if (id[3].indexOf('vzaar') > -1) {
				type = 'vzaar';
			} else {
				throw new Error('Video URL not supported.');
			}
			id = id[6];
		} else {
			throw new Error('Missing video URL.');
		}

		this._videos[url] = {
			type: type,
			id: id,
			width: width,
			height: height
		};

		item.attr('data-video', url);

		this.thumbnail(target, this._videos[url]);
	};

	/**
	 * Creates video thumbnail.
	 * @protected
	 * @param {jQuery} target - The target containing the video data.
	 * @param {Object} info - The video info object.
	 * @see `fetch`
	 */
	Video.prototype.thumbnail = function(target, video) {
		var tnLink,
			icon,
			path,
			dimensions = video.width && video.height ? 'style="width:' + video.width + 'px;height:' + video.height + 'px;"' : '',
			customTn = target.find('img'),
			srcType = 'src',
			lazyClass = '',
			settings = this._core.settings,
			create = function(path) {
				icon = '<div class="owl-video-play-icon"></div>';

				if (settings.lazyLoad) {
					tnLink = '<div class="owl-video-tn ' + lazyClass + '" ' + srcType + '="' + path + '"></div>';
				} else {
					tnLink = '<div class="owl-video-tn" style="opacity:1;background-image:url(' + path + ')"></div>';
				}
				target.after(tnLink);
				target.after(icon);
			};

		// wrap video content into owl-video-wrapper div
		target.wrap('<div class="owl-video-wrapper"' + dimensions + '></div>');

		if (this._core.settings.lazyLoad) {
			srcType = 'data-src';
			lazyClass = 'owl-lazy';
		}

		// custom thumbnail
		if (customTn.length) {
			create(customTn.attr(srcType));
			customTn.remove();
			return false;
		}

		if (video.type === 'youtube') {
			path = "//img.youtube.com/vi/" + video.id + "/hqdefault.jpg";
			create(path);
		} else if (video.type === 'vimeo') {
			$.ajax({
				type: 'GET',
				url: '//vimeo.com/api/v2/video/' + video.id + '.json',
				jsonp: 'callback',
				dataType: 'jsonp',
				success: function(data) {
					path = data[0].thumbnail_large;
					create(path);
				}
			});
		} else if (video.type === 'vzaar') {
			$.ajax({
				type: 'GET',
				url: '//vzaar.com/api/videos/' + video.id + '.json',
				jsonp: 'callback',
				dataType: 'jsonp',
				success: function(data) {
					path = data.framegrab_url;
					create(path);
				}
			});
		}
	};

	/**
	 * Stops the current video.
	 * @public
	 */
	Video.prototype.stop = function() {
		this._core.trigger('stop', null, 'video');
		this._playing.find('.owl-video-frame').remove();
		this._playing.removeClass('owl-video-playing');
		this._playing = null;
		this._core.leave('playing');
		this._core.trigger('stopped', null, 'video');
	};

	/**
	 * Starts the current video.
	 * @public
	 * @param {Event} event - The event arguments.
	 */
	Video.prototype.play = function(event) {
		var target = $(event.target),
			item = target.closest('.' + this._core.settings.itemClass),
			video = this._videos[item.attr('data-video')],
			width = video.width || '100%',
			height = video.height || this._core.$stage.height(),
			html;

		if (this._playing) {
			return;
		}

		this._core.enter('playing');
		this._core.trigger('play', null, 'video');

		item = this._core.items(this._core.relative(item.index()));

		this._core.reset(item.index());

		if (video.type === 'youtube') {
			html = '<iframe width="' + width + '" height="' + height + '" src="//www.youtube.com/embed/' +
				video.id + '?autoplay=1&v=' + video.id + '" frameborder="0" allowfullscreen></iframe>';
		} else if (video.type === 'vimeo') {
			html = '<iframe src="//player.vimeo.com/video/' + video.id +
				'?autoplay=1" width="' + width + '" height="' + height +
				'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
		} else if (video.type === 'vzaar') {
			html = '<iframe frameborder="0"' + 'height="' + height + '"' + 'width="' + width +
				'" allowfullscreen mozallowfullscreen webkitAllowFullScreen ' +
				'src="//view.vzaar.com/' + video.id + '/player?autoplay=true"></iframe>';
		}

		$('<div class="owl-video-frame">' + html + '</div>').insertAfter(item.find('.owl-video'));

		this._playing = item.addClass('owl-video-playing');
	};

	/**
	 * Checks whether an video is currently in full screen mode or not.
	 * @todo Bad style because looks like a readonly method but changes members.
	 * @protected
	 * @returns {Boolean}
	 */
	Video.prototype.isInFullScreen = function() {
		var element = document.fullscreenElement || document.mozFullScreenElement ||
				document.webkitFullscreenElement;

		return element && $(element).parent().hasClass('owl-video-frame');
	};

	/**
	 * Destroys the plugin.
	 */
	Video.prototype.destroy = function() {
		var handler, property;

		this._core.$element.off('click.owl.video');

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Video = Video;

})(window.Zepto || window.jQuery, window, document);

/**
 * Animate Plugin
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($,window,document,undefined){/**
	 * Creates the animate plugin.
	 * @class The Navigation Plugin
	 * @param {Owl} scope - The Owl Carousel
	 */
	var Animate = function(scope) {
		this.core = scope;
		this.core.options = $.extend({}, Animate.Defaults, this.core.options);
		this.swapping = true;
		this.previous = undefined;
		this.next = undefined;

		this.handlers = {
			'change.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name == 'position') {
					this.previous = this.core.current();
					this.next = e.property.value;
				}
			}, this),
			'drag.owl.carousel dragged.owl.carousel translated.owl.carousel': $.proxy(function(e) {
				if (e.namespace) {
					this.swapping = e.type == 'translated';
				}
			}, this),
			'translate.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn)) {
					this.swap();
				}
			}, this)
		};

		this.core.$element.on(this.handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	Animate.Defaults = {
		animateOut: false,
		animateIn: false
	};

	/**
	 * Toggles the animation classes whenever an translations starts.
	 * @protected
	 * @returns {Boolean|undefined}
	 */
	Animate.prototype.swap = function() {

		if (this.core.settings.items !== 1) {
			return;
		}

		if (!$.support.animation || !$.support.transition) {
			return;
		}

		this.core.speed(0);

		var left,
			clear = $.proxy(this.clear, this),
			previous = this.core.$stage.children().eq(this.previous),
			next = this.core.$stage.children().eq(this.next),
			incoming = this.core.settings.animateIn,
			outgoing = this.core.settings.animateOut;

		if (this.core.current() === this.previous) {
			return;
		}

		if (outgoing) {
			left = this.core.coordinates(this.previous) - this.core.coordinates(this.next);
			previous.one($.support.animation.end, clear)
				.css( { 'left': left + 'px' } )
				.addClass('animated owl-animated-out')
				.addClass(outgoing);
		}

		if (incoming) {
			next.one($.support.animation.end, clear)
				.addClass('animated owl-animated-in')
				.addClass(incoming);
		}
	};

	Animate.prototype.clear = function(e) {
		$(e.target).css( { 'left': '' } )
			.removeClass('animated owl-animated-out owl-animated-in')
			.removeClass(this.core.settings.animateIn)
			.removeClass(this.core.settings.animateOut);
		this.core.onTransitionEnd();
	};

	/**
	 * Destroys the plugin.
	 * @public
	 */
	Animate.prototype.destroy = function() {
		var handler, property;

		for (handler in this.handlers) {
			this.core.$element.off(handler, this.handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Animate = Animate;

})(window.Zepto || window.jQuery, window, document);

/**
 * Autoplay Plugin
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($,window,document,undefined){/**
	 * Creates the autoplay plugin.
	 * @class The Autoplay Plugin
	 * @param {Owl} scope - The Owl Carousel
	 */
	var Autoplay = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * The autoplay timeout.
		 * @type {Timeout}
		 */
		this._timeout = null;

		/**
		 * Indicates whenever the autoplay is paused.
		 * @type {Boolean}
		 */
		this._paused = false;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name === 'settings') {
					if (this._core.settings.autoplay) {
						this.play();
					} else {
						this.stop();
					}
				} else if (e.namespace && e.property.name === 'position') {
					//console.log('play?', e);
					if (this._core.settings.autoplay) {
						this._setAutoPlayInterval();
					}
				}
			}, this),
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoplay) {
					this.play();
				}
			}, this),
			'play.owl.autoplay': $.proxy(function(e, t, s) {
				if (e.namespace) {
					this.play(t, s);
				}
			}, this),
			'stop.owl.autoplay': $.proxy(function(e) {
				if (e.namespace) {
					this.stop();
				}
			}, this),
			'mouseover.owl.autoplay': $.proxy(function() {
				if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
					this.pause();
				}
			}, this),
			'mouseleave.owl.autoplay': $.proxy(function() {
				if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
					this.play();
				}
			}, this),
			'touchstart.owl.core': $.proxy(function() {
				if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
					this.pause();
				}
			}, this),
			'touchend.owl.core': $.proxy(function() {
				if (this._core.settings.autoplayHoverPause) {
					this.play();
				}
			}, this)
		};

		// register event handlers
		this._core.$element.on(this._handlers);

		// set default options
		this._core.options = $.extend({}, Autoplay.Defaults, this._core.options);
	};

	/**
	 * Default options.
	 * @public
	 */
	Autoplay.Defaults = {
		autoplay: false,
		autoplayTimeout: 5000,
		autoplayHoverPause: false,
		autoplaySpeed: false
	};

	/**
	 * Starts the autoplay.
	 * @public
	 * @param {Number} [timeout] - The interval before the next animation starts.
	 * @param {Number} [speed] - The animation speed for the animations.
	 */
	Autoplay.prototype.play = function(timeout, speed) {
		this._paused = false;

		if (this._core.is('rotating')) {
			return;
		}

		this._core.enter('rotating');

		this._setAutoPlayInterval();
	};

	/**
	 * Gets a new timeout
	 * @private
	 * @param {Number} [timeout] - The interval before the next animation starts.
	 * @param {Number} [speed] - The animation speed for the animations.
	 * @return {Timeout}
	 */
	Autoplay.prototype._getNextTimeout = function(timeout, speed) {
		if ( this._timeout ) {
			window.clearTimeout(this._timeout);
		}
		return window.setTimeout($.proxy(function() {
			if (this._paused || this._core.is('busy') || this._core.is('interacting') || document.hidden) {
				return;
			}
			this._core.next(speed || this._core.settings.autoplaySpeed);
		}, this), timeout || this._core.settings.autoplayTimeout);
	};

	/**
	 * Sets autoplay in motion.
	 * @private
	 */
	Autoplay.prototype._setAutoPlayInterval = function() {
		this._timeout = this._getNextTimeout();
	};

	/**
	 * Stops the autoplay.
	 * @public
	 */
	Autoplay.prototype.stop = function() {
		if (!this._core.is('rotating')) {
			return;
		}

		window.clearTimeout(this._timeout);
		this._core.leave('rotating');
	};

	/**
	 * Stops the autoplay.
	 * @public
	 */
	Autoplay.prototype.pause = function() {
		if (!this._core.is('rotating')) {
			return;
		}

		this._paused = true;
	};

	/**
	 * Destroys the plugin.
	 */
	Autoplay.prototype.destroy = function() {
		var handler, property;

		this.stop();

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.autoplay = Autoplay;

})(window.Zepto || window.jQuery, window, document);

/**
 * Navigation Plugin
 * @version 2.1.0
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($,window,document,undefined){'use strict';/**
	 * Creates the navigation plugin.
	 * @class The Navigation Plugin
	 * @param {Owl} carousel - The Owl Carousel.
	 */
	var Navigation = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Indicates whether the plugin is initialized or not.
		 * @protected
		 * @type {Boolean}
		 */
		this._initialized = false;

		/**
		 * The current paging indexes.
		 * @protected
		 * @type {Array}
		 */
		this._pages = [];

		/**
		 * All DOM elements of the user interface.
		 * @protected
		 * @type {Object}
		 */
		this._controls = {};

		/**
		 * Markup for an indicator.
		 * @protected
		 * @type {Array.<String>}
		 */
		this._templates = [];

		/**
		 * The carousel element.
		 * @type {jQuery}
		 */
		this.$element = this._core.$element;

		/**
		 * Overridden methods of the carousel.
		 * @protected
		 * @type {Object}
		 */
		this._overrides = {
			next: this._core.next,
			prev: this._core.prev,
			to: this._core.to
		};

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'prepared.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.dotsData) {
					this._templates.push('<div class="' + this._core.settings.dotClass + '">' +
						$(e.content).find('[data-dot]').addBack('[data-dot]').attr('data-dot') + '</div>');
				}
			}, this),
			'added.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.dotsData) {
					this._templates.splice(e.position, 0, this._templates.pop());
				}
			}, this),
			'remove.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.dotsData) {
					this._templates.splice(e.position, 1);
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name == 'position') {
					this.draw();
				}
			}, this),
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace && !this._initialized) {
					this._core.trigger('initialize', null, 'navigation');
					this.initialize();
					this.update();
					this.draw();
					this._initialized = true;
					this._core.trigger('initialized', null, 'navigation');
				}
			}, this),
			'refreshed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._initialized) {
					this._core.trigger('refresh', null, 'navigation');
					this.update();
					this.draw();
					this._core.trigger('refreshed', null, 'navigation');
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Navigation.Defaults, this._core.options);

		// register event handlers
		this.$element.on(this._handlers);
	};

	/**
	 * Default options.
	 * @public
	 * @todo Rename `slideBy` to `navBy`
	 */
	Navigation.Defaults = {
		nav: false,
		navText: [ 'prev', 'next' ],
		navSpeed: false,
		navElement: 'div',
		navContainer: false,
		navContainerClass: 'owl-nav',
		navClass: [ 'owl-prev', 'owl-next' ],
		slideBy: 1,
		dotClass: 'owl-dot',
		dotsClass: 'owl-dots',
		dots: true,
		dotsEach: false,
		dotsData: false,
		dotsSpeed: false,
		dotsContainer: false
	};

	/**
	 * Initializes the layout of the plugin and extends the carousel.
	 * @protected
	 */
	Navigation.prototype.initialize = function() {
		var override,
			settings = this._core.settings;

		// create DOM structure for relative navigation
		this._controls.$relative = (settings.navContainer ? $(settings.navContainer)
			: $('<div>').addClass(settings.navContainerClass).appendTo(this.$element)).addClass('disabled');

		this._controls.$previous = $('<' + settings.navElement + '>')
			.addClass(settings.navClass[0])
			.html(settings.navText[0])
			.prependTo(this._controls.$relative)
			.on('click', $.proxy(function(e) {
				this.prev(settings.navSpeed);
			}, this));
		this._controls.$next = $('<' + settings.navElement + '>')
			.addClass(settings.navClass[1])
			.html(settings.navText[1])
			.appendTo(this._controls.$relative)
			.on('click', $.proxy(function(e) {
				this.next(settings.navSpeed);
			}, this));

		// create DOM structure for absolute navigation
		if (!settings.dotsData) {
			this._templates = [ $('<div>')
				.addClass(settings.dotClass)
				.append($('<span>'))
				.prop('outerHTML') ];
		}

		this._controls.$absolute = (settings.dotsContainer ? $(settings.dotsContainer)
			: $('<div>').addClass(settings.dotsClass).appendTo(this.$element)).addClass('disabled');

		this._controls.$absolute.on('click', 'div', $.proxy(function(e) {
			var index = $(e.target).parent().is(this._controls.$absolute)
				? $(e.target).index() : $(e.target).parent().index();

			e.preventDefault();

			this.to(index, settings.dotsSpeed);
		}, this));

		// override public methods of the carousel
		for (override in this._overrides) {
			this._core[override] = $.proxy(this[override], this);
		}
	};

	/**
	 * Destroys the plugin.
	 * @protected
	 */
	Navigation.prototype.destroy = function() {
		var handler, control, property, override;

		for (handler in this._handlers) {
			this.$element.off(handler, this._handlers[handler]);
		}
		for (control in this._controls) {
			this._controls[control].remove();
		}
		for (override in this.overides) {
			this._core[override] = this._overrides[override];
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	/**
	 * Updates the internal state.
	 * @protected
	 */
	Navigation.prototype.update = function() {
		var i, j, k,
			lower = this._core.clones().length / 2,
			upper = lower + this._core.items().length,
			maximum = this._core.maximum(true),
			settings = this._core.settings,
			size = settings.center || settings.autoWidth || settings.dotsData
				? 1 : settings.dotsEach || settings.items;

		if (settings.slideBy !== 'page') {
			settings.slideBy = Math.min(settings.slideBy, settings.items);
		}

		if (settings.dots || settings.slideBy == 'page') {
			this._pages = [];

			for (i = lower, j = 0, k = 0; i < upper; i++) {
				if (j >= size || j === 0) {
					this._pages.push({
						start: Math.min(maximum, i - lower),
						end: i - lower + size - 1
					});
					if (Math.min(maximum, i - lower) === maximum) {
						break;
					}
					j = 0, ++k;
				}
				j += this._core.mergers(this._core.relative(i));
			}
		}
	};

	/**
	 * Draws the user interface.
	 * @todo The option `dotsData` wont work.
	 * @protected
	 */
	Navigation.prototype.draw = function() {
		var difference,
			settings = this._core.settings,
			disabled = this._core.items().length <= settings.items,
			index = this._core.relative(this._core.current()),
			loop = settings.loop || settings.rewind;

		this._controls.$relative.toggleClass('disabled', !settings.nav || disabled);

		if (settings.nav) {
			this._controls.$previous.toggleClass('disabled', !loop && index <= this._core.minimum(true));
			this._controls.$next.toggleClass('disabled', !loop && index >= this._core.maximum(true));
		}

		this._controls.$absolute.toggleClass('disabled', !settings.dots || disabled);

		if (settings.dots) {
			difference = this._pages.length - this._controls.$absolute.children().length;

			if (settings.dotsData && difference !== 0) {
				this._controls.$absolute.html(this._templates.join(''));
			} else if (difference > 0) {
				this._controls.$absolute.append(new Array(difference + 1).join(this._templates[0]));
			} else if (difference < 0) {
				this._controls.$absolute.children().slice(difference).remove();
			}

			this._controls.$absolute.find('.active').removeClass('active');
			this._controls.$absolute.children().eq($.inArray(this.current(), this._pages)).addClass('active');
		}
	};

	/**
	 * Extends event data.
	 * @protected
	 * @param {Event} event - The event object which gets thrown.
	 */
	Navigation.prototype.onTrigger = function(event) {
		var settings = this._core.settings;

		event.page = {
			index: $.inArray(this.current(), this._pages),
			count: this._pages.length,
			size: settings && (settings.center || settings.autoWidth || settings.dotsData
				? 1 : settings.dotsEach || settings.items)
		};
	};

	/**
	 * Gets the current page position of the carousel.
	 * @protected
	 * @returns {Number}
	 */
	Navigation.prototype.current = function() {
		var current = this._core.relative(this._core.current());
		return $.grep(this._pages, $.proxy(function(page, index) {
			return page.start <= current && page.end >= current;
		}, this)).pop();
	};

	/**
	 * Gets the current succesor/predecessor position.
	 * @protected
	 * @returns {Number}
	 */
	Navigation.prototype.getPosition = function(successor) {
		var position, length,
			settings = this._core.settings;

		if (settings.slideBy == 'page') {
			position = $.inArray(this.current(), this._pages);
			length = this._pages.length;
			successor ? ++position : --position;
			position = this._pages[((position % length) + length) % length].start;
		} else {
			position = this._core.relative(this._core.current());
			length = this._core.items().length;
			successor ? position += settings.slideBy : position -= settings.slideBy;
		}

		return position;
	};

	/**
	 * Slides to the next item or page.
	 * @public
	 * @param {Number} [speed=false] - The time in milliseconds for the transition.
	 */
	Navigation.prototype.next = function(speed) {
		$.proxy(this._overrides.to, this._core)(this.getPosition(true), speed);
	};

	/**
	 * Slides to the previous item or page.
	 * @public
	 * @param {Number} [speed=false] - The time in milliseconds for the transition.
	 */
	Navigation.prototype.prev = function(speed) {
		$.proxy(this._overrides.to, this._core)(this.getPosition(false), speed);
	};

	/**
	 * Slides to the specified item or page.
	 * @public
	 * @param {Number} position - The position of the item or page.
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 * @param {Boolean} [standard=false] - Whether to use the standard behaviour or not.
	 */
	Navigation.prototype.to = function(position, speed, standard) {
		var length;

		if (!standard && this._pages.length) {
			length = this._pages.length;
			$.proxy(this._overrides.to, this._core)(this._pages[((position % length) + length) % length].start, speed);
		} else {
			$.proxy(this._overrides.to, this._core)(position, speed);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Navigation = Navigation;

})(window.Zepto || window.jQuery, window, document);

/**
 * Hash Plugin
 * @version 2.1.0
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($,window,document,undefined){'use strict';/**
	 * Creates the hash plugin.
	 * @class The Hash Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var Hash = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Hash index for the items.
		 * @protected
		 * @type {Object}
		 */
		this._hashes = {};

		/**
		 * The carousel element.
		 * @type {jQuery}
		 */
		this.$element = this._core.$element;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.startPosition === 'URLHash') {
					$(window).trigger('hashchange.owl.navigation');
				}
			}, this),
			'prepared.owl.carousel': $.proxy(function(e) {
				if (e.namespace) {
					var hash = $(e.content).find('[data-hash]').addBack('[data-hash]').attr('data-hash');

					if (!hash) {
						return;
					}

					this._hashes[hash] = e.content;
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name === 'position') {
					var current = this._core.items(this._core.relative(this._core.current())),
						hash = $.map(this._hashes, function(item, hash) {
							return item === current ? hash : null;
						}).join();

					if (!hash || window.location.hash.slice(1) === hash) {
						return;
					}

					window.location.hash = hash;
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Hash.Defaults, this._core.options);

		// register the event handlers
		this.$element.on(this._handlers);

		// register event listener for hash navigation
		$(window).on('hashchange.owl.navigation', $.proxy(function(e) {
			var hash = window.location.hash.substring(1),
				items = this._core.$stage.children(),
				position = this._hashes[hash] && items.index(this._hashes[hash]);

			if (position === undefined || position === this._core.current()) {
				return;
			}

			this._core.to(this._core.relative(position), false, true);
		}, this));
	};

	/**
	 * Default options.
	 * @public
	 */
	Hash.Defaults = {
		URLhashListener: false
	};

	/**
	 * Destroys the plugin.
	 * @public
	 */
	Hash.prototype.destroy = function() {
		var handler, property;

		$(window).off('hashchange.owl.navigation');

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Hash = Hash;

})(window.Zepto || window.jQuery, window, document);

/**
 * Support Plugin
 *
 * @version 2.1.0
 * @author Vivid Planet Software GmbH
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($,window,document,undefined){var style=$('<support>').get(0).style,prefixes='Webkit Moz O ms'.split(' '),events={transition:{end:{WebkitTransition:'webkitTransitionEnd',MozTransition:'transitionend',OTransition:'oTransitionEnd',transition:'transitionend'}},animation:{end:{WebkitAnimation:'webkitAnimationEnd',MozAnimation:'animationend',OAnimation:'oAnimationEnd',animation:'animationend'}}},tests={csstransforms:function(){return!!test('transform')},csstransforms3d:function(){return!!test('perspective')},csstransitions:function(){return!!test('transition')},cssanimations:function(){return!!test('animation')}};function test(property,prefixed){var result=!1,upper=property.charAt(0).toUpperCase()+property.slice(1);$.each((property+' '+prefixes.join(upper+' ')+upper).split(' '),function(i,property){if(style[property]!==undefined){result=prefixed?property:!0;return!1}});return result}
function prefixed(property){return test(property,!0)}
if(tests.csstransitions()){$.support.transition=new String(prefixed('transition'))
$.support.transition.end=events.transition.end[$.support.transition]}
if(tests.cssanimations()){$.support.animation=new String(prefixed('animation'))
$.support.animation.end=events.animation.end[$.support.animation]}
if(tests.csstransforms()){$.support.transform=new String(prefixed('transform'));$.support.transform3d=tests.csstransforms3d()}})(window.Zepto||window.jQuery,window,document);$(".back-top").hide();$(function(){$(window).scroll(function(){if($(this).scrollTop()>150){$('.back-top').fadeIn()}else{$('.back-top').fadeOut()}});$('.back-top').click(function(){$('body,html').animate({scrollTop:0},1000);return!1})});$('#menu-icon').click(function(){$(this).toggleClass('open-menu');var hClass=$(this).hasClass('open-menu');if(hClass){$(window).resize(function(){if($(window).width()<992){$(this).parents('body').css('overflow','hidden')}});$(this).parents('body').find('#mobile_top_menu_wrapper').addClass('box-menu')}else{$(this).parents('body').css('overflow','visible');$(this).parents('body').find('#mobile_top_menu_wrapper').removeClass('box-menu')}});$('.menu-close').click(function(){$(this).parents('body').css('overflow','visible');$(this).parents('body').find('#mobile_top_menu_wrapper').removeClass('box-menu');$(this).parents('body').find('#menu-icon').removeClass('open-menu')});$(document).ajaxComplete(function(event,request,settings){$('.show_list').click(function(){document.cookie="show_list=true; expires=Thu, 30 Jan 2100 12:00:00 UTC; path=/";$('#js-product-list .product_content').addClass('list')});$('.show_grid').click(function(){document.cookie="show_list=; expires=Thu, 30 Jan 1970 12:00:00 UTC; path=/";$('#js-product-list .product_content').removeClass('list')});bindGrid()});$(document).ready(function(){$('.show_list').click(function(){document.cookie="show_list=true; expires=Thu, 30 Jan 2100 12:00:00 UTC; path=/";$('#js-product-list .product_content').addClass('list')});$('.show_grid').click(function(){document.cookie="show_list=; expires=Thu, 30 Jan 1970 12:00:00 UTC; path=/";$('#js-product-list .product_content').removeClass('list')});prestashop.on('updateProductList',function(event){$('.show_list').click(function(){$('#js-product-list .product_content ').addClass('list')});$('.show_grid').click(function(){$('#js-product-list .product_content').removeClass('list')})});bindGrid();var categoryslide=$(".product_categoryslide");categoryslide.owlCarousel({autoPlay:!1,smartSpeed:1000,autoplayHoverPause:!0,nav:!0,dots:!1,responsive:{0:{items:1,},360:{items:2,},576:{items:2,},768:{items:3,},992:{items:4,},1200:{items:6,}}});checkClasses();categoryslide.on('translated.owl.carousel',function(event){checkClasses()});function checkClasses(){var total=$('.categoryproducts .product_categoryslide .owl-stage .owl-item.active').length;$('.categoryproducts ').each(function(){$(this).find('.owl-item').removeClass('firstActiveItem');$(this).find('.owl-item').removeClass('lastActiveItem');$(this).find('.owl-item.active').each(function(index){if(index===0){$(this).addClass('firstActiveItem')}
if(index===total-1&&total>1){$(this).addClass('lastActiveItem')}})})}
var accessoriesslide=$(".product_accessoriesslide");accessoriesslide.owlCarousel({autoPlay:!1,smartSpeed:1000,autoplayHoverPause:!0,nav:!0,dots:!1,responsive:{0:{items:1,},360:{items:2,},576:{items:2,},768:{items:3,nav:!1,},992:{items:4,},1200:{items:6,}}});checkClasses();accessoriesslide.on('translated.owl.carousel',function(event){checkClasses()});function checkClasses(){var total=$('.products-accessories .product_accessoriesslide .owl-stage .owl-item.active').length;$('.products-accessories ').each(function(){$(this).find('.owl-item').removeClass('firstActiveItem');$(this).find('.owl-item').removeClass('lastActiveItem');$(this).find('.owl-item.active').each(function(index){if(index===0){$(this).addClass('firstActiveItem')}
if(index===total-1&&total>1){$(this).addClass('lastActiveItem')}})})}});(function($){var ls=window.localStorage;var supported;if(typeof ls=='undefined'||typeof window.JSON=='undefined'){supported=!1}else{supported=!0}
$.totalStorage=function(key,value,options){return $.totalStorage.impl.init(key,value)}
$.totalStorage.setItem=function(key,value){return $.totalStorage.impl.setItem(key,value)}
$.totalStorage.getItem=function(key){return $.totalStorage.impl.getItem(key)}
$.totalStorage.getAll=function(){return $.totalStorage.impl.getAll()}
$.totalStorage.deleteItem=function(key){return $.totalStorage.impl.deleteItem(key)}
$.totalStorage.impl={init:function(key,value){if(typeof value!='undefined'){return this.setItem(key,value)}else{return this.getItem(key)}},setItem:function(key,value){if(!supported){try{$.cookie(key,value);return value}catch(e){console.log('Local Storage not supported by this browser. Install the cookie plugin on your site to take advantage of the same functionality. You can get it at https://github.com/carhartl/jquery-cookie')}}
var saver=JSON.stringify(value);ls.setItem(key,saver);return this.parseResult(saver)},getItem:function(key){if(!supported){try{return this.parseResult($.cookie(key))}catch(e){return null}}
return this.parseResult(ls.getItem(key))},deleteItem:function(key){if(!supported){try{$.cookie(key,null);return!0}catch(e){return!1}}
ls.removeItem(key);return!0},getAll:function(){var items=new Array();if(!supported){try{var pairs=document.cookie.split(";");for(var i=0;i<pairs.length;i++){var pair=pairs[i].split('=');var key=pair[0];items.push({key:key,value:this.parseResult($.cookie(key))})}}catch(e){return null}}else{for(var i in ls){if(i.length){items.push({key:i,value:this.parseResult(ls.getItem(i))})}}}
return items},parseResult:function(res){var ret;try{ret=JSON.parse(res);if(ret=='true'){ret=!0}
if(ret=='false'){ret=!1}
if(parseFloat(ret)==ret&&typeof ret!="object"){ret=parseFloat(ret)}}catch(e){}
return ret}}})(jQuery);function bindGrid(){var view=$.totalStorage('display');if(!view&&(typeof displayList!='undefined')&&displayList)
view='list';if(view&&view!='grid')
display(view);else $('.display').find('li#grid').addClass('selected');$(document).on('click','#grid',function(e){e.preventDefault();display('grid');$(this).parents("#products-list").find(".grid .item-product").removeClass("fadeInRight");$(this).parents("#products-list").find(".grid .item-product").addClass(" animated zoomIn")});$(document).on('click','#list',function(e){e.preventDefault();display('list');$(this).parents("#products-list").find(".list .item-product").addClass(" animated fadeInRight");$(this).parents("#products-list").find(".list .item-product").removeClass(" zoomIn")})}
function display(view){var productslist=$('#js-product-list');var cate_row=parseInt(productslist.attr('data-cate'));var cate_type=parseInt(productslist.attr('data-type'));var cate_list=parseInt(productslist.attr('data-list'));if(view=='grid'){$('#js-product-list .product_content').removeClass('list').addClass('grid row');if(cate_row==1){$('.product_content .item-product').removeClass('col-xs-12').addClass('product_per_3 col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4')}else if(cate_row==2){$('.product_content .item-product').removeClass('col-xs-12').addClass('product_per_4 col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3')}else if(cate_row==3){$('.product_content .item-product').removeClass('col-xs-12').addClass('product_per_5 col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3')}
$('.product_content .item-product').each(function(index,element){var html='';var id_product=$(this).children('article.js-product-miniature').attr('data-id-product');var id_product_attr=$(this).children('article.js-product-miniature').attr('data-id-product-attribute');if(cate_type==0){html+='<article class="js-product-miniature style_product_default" data-id-product="'+id_product+'" data-id-product-attribute="'+id_product_attr+'" itemscope itemtype="http://schema.org/Product">';html+='<div class="img_block">'+$(element).find('.img_block').html()+'</div>';html+='<div class="product_desc">';html+='<div class="inner_desc">';html+='<div class="manufacturer">'+$(element).find('.manufacturer').html()+'</div>';html+='<h3>'+$(element).find('h3').html()+'</h3>';var hookReviews=$(element).find('.hook-reviews');if(hookReviews.length){html+=hookReviews.clone().wrap('<div>').parent().html()}
var price=$(element).find('.product-price-and-shipping').html();if(price!=null){html+='<div class="product-price-and-shipping">'+price+'</div>'}
html+='<ul class="add-to-links">'+$(element).find('.add-to-links').html()+'</ul>';html+='</div>';html+='<div class="availability">'+$(element).find('.availability').html()+'</div>';html+='<div itemprop="description" class="product-desc">'+$(element).find('.product-desc').html()+'</div>';html+='<div class="variant-links">'+$(element).find('.variant-links').html()+'</div>';html+='</div>';html+='</article>'}else if(cate_type==1){html+='<article class="js-product-miniature style_product1" data-id-product="'+id_product+'" data-id-product-attribute="'+id_product_attr+'" itemscope itemtype="http://schema.org/Product">';html+='<div class="img_block">'+$(element).find('.img_block').html()+'</div>';html+='<div class="product_desc">';html+='<div class="inner_desc">';html+='<div class="manufacturer">'+$(element).find('.manufacturer').html()+'</div>';html+='<h3>'+$(element).find('h3').html()+'</h3>';var hookReviews=$(element).find('.hook-reviews');if(hookReviews.length){html+=hookReviews.clone().wrap('<div>').parent().html()}
var price=$(element).find('.product-price-and-shipping').html();if(price!=null){html+='<div class="product-price-and-shipping">'+price+'</div>'}
html+='<div class="cart">'+$(element).find('.cart').html()+'</div>';html+='</div>';html+='<div class="availability">'+$(element).find('.availability').html()+'</div>';html+='<div itemprop="description" class="product-desc">'+$(element).find('.product-desc').html()+'</div>';html+='<div class="variant-links">'+$(element).find('.variant-links').html()+'</div>';html+='</div>';html+='</article>'}else if(cate_type==2){html+='<article class="js-product-miniature style_product2" data-id-product="'+id_product+'" data-id-product-attribute="'+id_product_attr+'" itemscope itemtype="http://schema.org/Product">';html+='<div class="img_block">'+$(element).find('.img_block').html()+'</div>';html+='<div class="product_desc">';html+='<div class="manufacturer">'+$(element).find('.manufacturer').html()+'</div>';html+='<h3>'+$(element).find('h3').html()+'</h3>';var hookReviews=$(element).find('.hook-reviews');if(hookReviews.length){html+=hookReviews.clone().wrap('<div>').parent().html()}
var price=$(element).find('.product-price-and-shipping').html();if(price!=null){html+='<div class="product-price-and-shipping">'+price+'</div>'}
html+='<div class="availability">'+$(element).find('.availability').html()+'</div>';html+='<div itemprop="description" class="product-desc">'+$(element).find('.product-desc').html()+'</div>';html+='<div class="variant-links">'+$(element).find('.variant-links').html()+'</div>';html+='</div>';html+='</article>'}else if(cate_type==3){html+='<article class="js-product-miniature style_product3" data-id-product="'+id_product+'" data-id-product-attribute="'+id_product_attr+'" itemscope itemtype="http://schema.org/Product">';html+='<div class="img_block">'+$(element).find('.img_block').html()+'</div>';html+='<div class="product_desc">';html+='<div class="manufacturer">'+$(element).find('.manufacturer').html()+'</div>';html+='<h3>'+$(element).find('h3').html()+'</h3>';var hookReviews=$(element).find('.hook-reviews');if(hookReviews.length){html+=hookReviews.clone().wrap('<div>').parent().html()}
var price=$(element).find('.product-price-and-shipping').html();if(price!=null){html+='<div class="product-price-and-shipping">'+price+'</div>'}
html+='<div class="availability">'+$(element).find('.availability').html()+'</div>';html+='<div itemprop="description" class="product-desc">'+$(element).find('.product-desc').html()+'</div>';html+='<div class="variant-links">'+$(element).find('.variant-links').html()+'</div>';html+='</div>';html+='</article>'}
$(element).html(html)});$('.display').find('li#grid').addClass('selected');$('.display').find('li#list').removeAttr('class');$.totalStorage('display','grid')}else{$('#js-product-list .product_content').removeClass('grid').addClass('list row');$('.product_content .item-product').removeClass('col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4').addClass('col-xs-12');if(cate_row==1){$('.product_content .item-product').removeClass('product_per_3 col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 ').addClass('col-xs-12')}else if(cate_row==2){$('.product_content .item-product').removeClass('product_per_4 col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 ').addClass('col-xs-12')}else if(cate_row==3){$('.product_content .item-product').removeClass('product_per_5 col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3').addClass('col-xs-12')}
$('.product_content .item-product').each(function(index,element){var html='';var id_product=$(this).children('article.js-product-miniature').attr('data-id-product');var id_product_attr=$(this).children('article.js-product-miniature').attr('data-id-product-attribute');if(cate_type==0){html='<article class="js-product-miniature style_product_default" data-id-product="'+id_product+'" data-id-product-attribute="'+id_product_attr+'" itemscope itemtype="http://schema.org/Product"><div class="row">';html+='<div class="img_block col-xs-4 col-sm-4 col-md-4 col-lg-4">'+$(element).find('.img_block').html()+'</div>';html+='<div class="product_desc col-xs-8 col-sm-8 col-md-8 col-lg-8">';html+='<div class="manufacturer">'+$(element).find('.manufacturer').html()+'</div>';html+='<h3>'+$(element).find('h3').html()+'</h3>';var hookReviews=$(element).find('.hook-reviews');if(hookReviews.length){html+=hookReviews.clone().wrap('<div>').parent().html()}
var price=$(element).find('.product-price-and-shipping').html();if(price!=null){html+='<div class="product-price-and-shipping">'+price+'</div>'}
html+='<div itemprop="description" class="product-desc">'+$(element).find('.product-desc').html()+'</div>';html+='<div class="availability">'+$(element).find('.availability').html()+'</div>';html+='<ul class="add-to-links">'+$(element).find('.add-to-links').html()+'</ul>';html+='<div class="variant-links">'+$(element).find('.variant-links').html()+'</div>';html+='</div></article>'}else if(cate_type==1){html='<article class="js-product-miniature style_product1" data-id-product="'+id_product+'" data-id-product-attribute="'+id_product_attr+'" itemscope itemtype="http://schema.org/Product"><div class="row">';html+='<div class="img_block col-xs-4 col-sm-4 col-md-4 col-lg-4">'+$(element).find('.img_block').html()+'</div>';html+='<div class="product_desc col-xs-8 col-sm-8 col-md-8 col-lg-8">';html+='<div class="manufacturer">'+$(element).find('.manufacturer').html()+'</div>';html+='<h3>'+$(element).find('h3').html()+'</h3>';var hookReviews=$(element).find('.hook-reviews');if(hookReviews.length){html+=hookReviews.clone().wrap('<div>').parent().html()}
var price=$(element).find('.product-price-and-shipping').html();if(price!=null){html+='<div class="product-price-and-shipping">'+price+'</div>'}
html+='<div itemprop="description" class="product-desc">'+$(element).find('.product-desc').html()+'</div>';html+='<div class="availability">'+$(element).find('.availability').html()+'</div>';html+='<div class="cart">'+$(element).find('.cart').html()+'</div>';html+='<div class="variant-links">'+$(element).find('.variant-links').html()+'</div>';html+='</div></article>'}else if(cate_type==2){html='<article class="js-product-miniature style_product2" data-id-product="'+id_product+'" data-id-product-attribute="'+id_product_attr+'" itemscope itemtype="http://schema.org/Product"><div class="row">';html+='<div class="img_block col-xs-4 col-sm-4 col-md-4 col-lg-4">'+$(element).find('.img_block').html()+'</div>';html+='<div class="product_desc col-xs-8 col-sm-8 col-md-8 col-lg-8">';html+='<div class="manufacturer">'+$(element).find('.manufacturer').html()+'</div>';html+='<h3>'+$(element).find('h3').html()+'</h3>';var hookReviews=$(element).find('.hook-reviews');if(hookReviews.length){html+=hookReviews.clone().wrap('<div>').parent().html()}
var price=$(element).find('.product-price-and-shipping').html();if(price!=null){html+='<div class="product-price-and-shipping">'+price+'</div>'}
html+='<div itemprop="description" class="product-desc">'+$(element).find('.product-desc').html()+'</div>';html+='<div class="availability">'+$(element).find('.availability').html()+'</div>';html+='<div class="variant-links">'+$(element).find('.variant-links').html()+'</div>';html+='</div></article>'}else if(cate_type==3){html='<article class="js-product-miniature style_product3" data-id-product="'+id_product+'" data-id-product-attribute="'+id_product_attr+'" itemscope itemtype="http://schema.org/Product"><div class="row">';html+='<div class="img_block col-xs-4 col-sm-4 col-md-4 col-lg-4">'+$(element).find('.img_block').html()+'</div>';html+='<div class="product_desc col-xs-8 col-sm-8 col-md-8 col-lg-8">';html+='<div class="manufacturer">'+$(element).find('.manufacturer').html()+'</div>';html+='<h3>'+$(element).find('h3').html()+'</h3>';var hookReviews=$(element).find('.hook-reviews');if(hookReviews.length){html+=hookReviews.clone().wrap('<div>').parent().html()}
var price=$(element).find('.product-price-and-shipping').html();if(price!=null){html+='<div class="product-price-and-shipping">'+price+'</div>'}
html+='<div itemprop="description" class="product-desc">'+$(element).find('.product-desc').html()+'</div>';html+='<div class="availability">'+$(element).find('.availability').html()+'</div>';html+='<div class="variant-links">'+$(element).find('.variant-links').html()+'</div>';html+='</div></article>'}
$(element).html(html)});$('.display').find('li#list').addClass('selected');$('.display').find('li#grid').removeAttr('class');$.totalStorage('display','list')}}(function(){$(window).ready(function(){$("#search_filter_toggler ").mPageScroll2id({offset:50,})})})(jQuery);var matchHeight=function(pos_content=null){function init(pos_content){eventListeners(pos_content);matchHeight(pos_content)}
function eventListeners(pos_content){$(window).on('resize',function(){matchHeight(pos_content)})}
function matchHeight(pos_content){var groupName=pos_content.find('.match_height');var groupHeights=[];groupName.css('min-height','auto');groupName.each(function(){groupHeights.push($(this).outerHeight())});var maxHeight=Math.max.apply(null,groupHeights);groupName.css('min-height',maxHeight)};return{init:init}}();$(document).ready(function(){$('.pos_content,.product_content.grid').each(function(){$(this).find('.js-product-miniature .product_desc').addClass('match_height');matchHeight.init($(this));var matchHeightowl=$(this).find('.owl-carousel');matchHeightowl.on('resized.owl.carousel.owl.carousel',function(event){matchHeight.init($(this))})})})