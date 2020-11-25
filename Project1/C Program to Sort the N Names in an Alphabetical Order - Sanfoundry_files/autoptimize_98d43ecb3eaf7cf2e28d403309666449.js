/*! jQuery v1.11.3 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l="1.11.3",m=function(a,b){return new m.fn.init(a,b)},n=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,o=/^-ms-/,p=/-([\da-z])/gi,q=function(a,b){return b.toUpperCase()};m.fn=m.prototype={jquery:l,constructor:m,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=m.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return m.each(this,a,b)},map:function(a){return this.pushStack(m.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},m.extend=m.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||m.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(m.isPlainObject(c)||(b=m.isArray(c)))?(b?(b=!1,f=a&&m.isArray(a)?a:[]):f=a&&m.isPlainObject(a)?a:{},g[d]=m.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},m.extend({expando:"jQuery"+(l+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===m.type(a)},isArray:Array.isArray||function(a){return"array"===m.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!m.isArray(a)&&a-parseFloat(a)+1>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==m.type(a)||a.nodeType||m.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(k.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&m.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(o,"ms-").replace(p,q)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=r(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(n,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(r(Object(a))?m.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=r(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),m.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||m.guid++,e):void 0},now:function(){return+new Date},support:k}),m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function r(a){var b="length"in a&&a.length,c=m.type(a);return"function"===c||m.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var s=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ea=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+ra(o[l]);w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:oa(function(){return[0]}),last:oa(function(a,b){return[b-1]}),eq:oa(function(a,b,c){return[0>c?c+b:c]}),even:oa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:oa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function ra(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function ta(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ua(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b},h,!0),l=sa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sa(ta(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))}m.push(c)}return ta(m)}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=va(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,ya(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);m.find=s,m.expr=s.selectors,m.expr[":"]=m.expr.pseudos,m.unique=s.uniqueSort,m.text=s.getText,m.isXMLDoc=s.isXML,m.contains=s.contains;var t=m.expr.match.needsContext,u=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,v=/^.[^:#\[\.,]*$/;function w(a,b,c){if(m.isFunction(b))return m.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return m.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(v.test(b))return m.filter(b,a,c);b=m.filter(b,a)}return m.grep(a,function(a){return m.inArray(a,b)>=0!==c})}m.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?m.find.matchesSelector(d,a)?[d]:[]:m.find.matches(a,m.grep(b,function(a){return 1===a.nodeType}))},m.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(m(a).filter(function(){for(b=0;e>b;b++)if(m.contains(d[b],this))return!0}));for(b=0;e>b;b++)m.find(a,d[b],c);return c=this.pushStack(e>1?m.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(w(this,a||[],!1))},not:function(a){return this.pushStack(w(this,a||[],!0))},is:function(a){return!!w(this,"string"==typeof a&&t.test(a)?m(a):a||[],!1).length}});var x,y=a.document,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=m.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||x).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof m?b[0]:b,m.merge(this,m.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:y,!0)),u.test(c[1])&&m.isPlainObject(b))for(c in b)m.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=y.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return x.find(a);this.length=1,this[0]=d}return this.context=y,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):m.isFunction(a)?"undefined"!=typeof x.ready?x.ready(a):a(m):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),m.makeArray(a,this))};A.prototype=m.fn,x=m(y);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};m.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!m(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),m.fn.extend({has:function(a){var b,c=m(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(m.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=t.test(a)||"string"!=typeof a?m(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&m.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?m.unique(f):f)},index:function(a){return a?"string"==typeof a?m.inArray(this[0],m(a)):m.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(m.unique(m.merge(this.get(),m(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}m.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return m.dir(a,"parentNode")},parentsUntil:function(a,b,c){return m.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return m.dir(a,"nextSibling")},prevAll:function(a){return m.dir(a,"previousSibling")},nextUntil:function(a,b,c){return m.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return m.dir(a,"previousSibling",c)},siblings:function(a){return m.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return m.sibling(a.firstChild)},contents:function(a){return m.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:m.merge([],a.childNodes)}},function(a,b){m.fn[a]=function(c,d){var e=m.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=m.filter(d,e)),this.length>1&&(C[a]||(e=m.unique(e)),B.test(a)&&(e=e.reverse())),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return m.each(a.match(E)||[],function(a,c){b[c]=!0}),b}m.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):m.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){m.each(b,function(b,c){var d=m.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&m.each(arguments,function(a,c){var d;while((d=m.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?m.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},m.extend({Deferred:function(a){var b=[["resolve","done",m.Callbacks("once memory"),"resolved"],["reject","fail",m.Callbacks("once memory"),"rejected"],["notify","progress",m.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return m.Deferred(function(c){m.each(b,function(b,f){var g=m.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&m.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?m.extend(a,d):d}},e={};return d.pipe=d.then,m.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&m.isFunction(a.promise)?e:0,g=1===f?a:m.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&m.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;m.fn.ready=function(a){return m.ready.promise().done(a),this},m.extend({isReady:!1,readyWait:1,holdReady:function(a){a?m.readyWait++:m.ready(!0)},ready:function(a){if(a===!0?!--m.readyWait:!m.isReady){if(!y.body)return setTimeout(m.ready);m.isReady=!0,a!==!0&&--m.readyWait>0||(H.resolveWith(y,[m]),m.fn.triggerHandler&&(m(y).triggerHandler("ready"),m(y).off("ready")))}}});function I(){y.addEventListener?(y.removeEventListener("DOMContentLoaded",J,!1),a.removeEventListener("load",J,!1)):(y.detachEvent("onreadystatechange",J),a.detachEvent("onload",J))}function J(){(y.addEventListener||"load"===event.type||"complete"===y.readyState)&&(I(),m.ready())}m.ready.promise=function(b){if(!H)if(H=m.Deferred(),"complete"===y.readyState)setTimeout(m.ready);else if(y.addEventListener)y.addEventListener("DOMContentLoaded",J,!1),a.addEventListener("load",J,!1);else{y.attachEvent("onreadystatechange",J),a.attachEvent("onload",J);var c=!1;try{c=null==a.frameElement&&y.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!m.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}I(),m.ready()}}()}return H.promise(b)};var K="undefined",L;for(L in m(k))break;k.ownLast="0"!==L,k.inlineBlockNeedsLayout=!1,m(function(){var a,b,c,d;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",k.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(d))}),function(){var a=y.createElement("div");if(null==k.deleteExpando){k.deleteExpando=!0;try{delete a.test}catch(b){k.deleteExpando=!1}}a=null}(),m.acceptData=function(a){var b=m.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var M=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,N=/([A-Z])/g;function O(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(N,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:M.test(c)?m.parseJSON(c):c}catch(e){}m.data(a,b,c)}else c=void 0}return c}function P(a){var b;for(b in a)if(("data"!==b||!m.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function Q(a,b,d,e){if(m.acceptData(a)){var f,g,h=m.expando,i=a.nodeType,j=i?m.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||m.guid++:h),j[k]||(j[k]=i?{}:{toJSON:m.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=m.extend(j[k],b):j[k].data=m.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[m.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[m.camelCase(b)])):f=g,f}}function R(a,b,c){if(m.acceptData(a)){var d,e,f=a.nodeType,g=f?m.cache:a,h=f?a[m.expando]:m.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){m.isArray(b)?b=b.concat(m.map(b,m.camelCase)):b in d?b=[b]:(b=m.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!P(d):!m.isEmptyObject(d))return}(c||(delete g[h].data,P(g[h])))&&(f?m.cleanData([a],!0):k.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}m.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?m.cache[a[m.expando]]:a[m.expando],!!a&&!P(a)},data:function(a,b,c){return Q(a,b,c)},removeData:function(a,b){return R(a,b)},_data:function(a,b,c){return Q(a,b,c,!0)},_removeData:function(a,b){return R(a,b,!0)}}),m.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=m.data(f),1===f.nodeType&&!m._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=m.camelCase(d.slice(5)),O(f,d,e[d])));m._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){m.data(this,a)}):arguments.length>1?this.each(function(){m.data(this,a,b)}):f?O(f,a,m.data(f,a)):void 0},removeData:function(a){return this.each(function(){m.removeData(this,a)})}}),m.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=m._data(a,b),c&&(!d||m.isArray(c)?d=m._data(a,b,m.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=m.queue(a,b),d=c.length,e=c.shift(),f=m._queueHooks(a,b),g=function(){m.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return m._data(a,c)||m._data(a,c,{empty:m.Callbacks("once memory").add(function(){m._removeData(a,b+"queue"),m._removeData(a,c)})})}}),m.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?m.queue(this[0],a):void 0===b?this:this.each(function(){var c=m.queue(this,a,b);m._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&m.dequeue(this,a)})},dequeue:function(a){return this.each(function(){m.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=m.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=m._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=["Top","Right","Bottom","Left"],U=function(a,b){return a=b||a,"none"===m.css(a,"display")||!m.contains(a.ownerDocument,a)},V=m.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===m.type(c)){e=!0;for(h in c)m.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,m.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(m(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},W=/^(?:checkbox|radio)$/i;!function(){var a=y.createElement("input"),b=y.createElement("div"),c=y.createDocumentFragment();if(b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",k.leadingWhitespace=3===b.firstChild.nodeType,k.tbody=!b.getElementsByTagName("tbody").length,k.htmlSerialize=!!b.getElementsByTagName("link").length,k.html5Clone="<:nav></:nav>"!==y.createElement("nav").cloneNode(!0).outerHTML,a.type="checkbox",a.checked=!0,c.appendChild(a),k.appendChecked=a.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,c.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,k.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){k.noCloneEvent=!1}),b.cloneNode(!0).click()),null==k.deleteExpando){k.deleteExpando=!0;try{delete b.test}catch(d){k.deleteExpando=!1}}}(),function(){var b,c,d=y.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(k[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),k[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var X=/^(?:input|select|textarea)$/i,Y=/^key/,Z=/^(?:mouse|pointer|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=/^([^.]*)(?:\.(.+)|)$/;function aa(){return!0}function ba(){return!1}function ca(){try{return y.activeElement}catch(a){}}m.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=m.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof m===K||a&&m.event.triggered===a.type?void 0:m.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(E)||[""],h=b.length;while(h--)f=_.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=m.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=m.event.special[o]||{},l=m.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&m.expr.match.needsContext.test(e),namespace:p.join(".")},i),(n=g[o])||(n=g[o]=[],n.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?n.splice(n.delegateCount++,0,l):n.push(l),m.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m.hasData(a)&&m._data(a);if(r&&(k=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=_.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=m.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,n=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=n.length;while(f--)g=n[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(n.splice(f,1),g.selector&&n.delegateCount--,l.remove&&l.remove.call(a,g));i&&!n.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||m.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)m.event.remove(a,o+b[j],c,d,!0);m.isEmptyObject(k)&&(delete r.handle,m._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,o=[d||y],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||y,3!==d.nodeType&&8!==d.nodeType&&!$.test(p+m.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[m.expando]?b:new m.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:m.makeArray(c,[b]),k=m.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!m.isWindow(d)){for(i=k.delegateType||p,$.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||y)&&o.push(l.defaultView||l.parentWindow||a)}n=0;while((h=o[n++])&&!b.isPropagationStopped())b.type=n>1?i:k.bindType||p,f=(m._data(h,"events")||{})[b.type]&&m._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&m.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&m.acceptData(d)&&g&&d[p]&&!m.isWindow(d)){l=d[g],l&&(d[g]=null),m.event.triggered=p;try{d[p]()}catch(r){}m.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=m.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(m._data(this,"events")||{})[a.type]||[],k=m.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=m.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((m.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?m(c,this).index(i)>=0:m.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[m.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=Z.test(e)?this.mouseHooks:Y.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new m.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||y),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||y,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==ca()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===ca()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return m.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return m.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=m.extend(new m.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?m.event.trigger(e,null,b):m.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},m.removeEvent=y.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===K&&(a[d]=null),a.detachEvent(d,c))},m.Event=function(a,b){return this instanceof m.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?aa:ba):this.type=a,b&&m.extend(this,b),this.timeStamp=a&&a.timeStamp||m.now(),void(this[m.expando]=!0)):new m.Event(a,b)},m.Event.prototype={isDefaultPrevented:ba,isPropagationStopped:ba,isImmediatePropagationStopped:ba,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=aa,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=aa,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=aa,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},m.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){m.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!m.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.submitBubbles||(m.event.special.submit={setup:function(){return m.nodeName(this,"form")?!1:void m.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=m.nodeName(b,"input")||m.nodeName(b,"button")?b.form:void 0;c&&!m._data(c,"submitBubbles")&&(m.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),m._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&m.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return m.nodeName(this,"form")?!1:void m.event.remove(this,"._submit")}}),k.changeBubbles||(m.event.special.change={setup:function(){return X.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(m.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),m.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),m.event.simulate("change",this,a,!0)})),!1):void m.event.add(this,"beforeactivate._change",function(a){var b=a.target;X.test(b.nodeName)&&!m._data(b,"changeBubbles")&&(m.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||m.event.simulate("change",this.parentNode,a,!0)}),m._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return m.event.remove(this,"._change"),!X.test(this.nodeName)}}),k.focusinBubbles||m.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){m.event.simulate(b,a.target,m.event.fix(a),!0)};m.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=m._data(d,b);e||d.addEventListener(a,c,!0),m._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=m._data(d,b)-1;e?m._data(d,b,e):(d.removeEventListener(a,c,!0),m._removeData(d,b))}}}),m.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=ba;else if(!d)return this;return 1===e&&(g=d,d=function(a){return m().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=m.guid++)),this.each(function(){m.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,m(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=ba),this.each(function(){m.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){m.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?m.event.trigger(a,b,c,!0):void 0}});function da(a){var b=ea.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var ea="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",fa=/ jQuery\d+="(?:null|\d+)"/g,ga=new RegExp("<(?:"+ea+")[\\s/>]","i"),ha=/^\s+/,ia=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ja=/<([\w:]+)/,ka=/<tbody/i,la=/<|&#?\w+;/,ma=/<(?:script|style|link)/i,na=/checked\s*(?:[^=]|=\s*.checked.)/i,oa=/^$|\/(?:java|ecma)script/i,pa=/^true\/(.*)/,qa=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ra={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:k.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},sa=da(y),ta=sa.appendChild(y.createElement("div"));ra.optgroup=ra.option,ra.tbody=ra.tfoot=ra.colgroup=ra.caption=ra.thead,ra.th=ra.td;function ua(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==K?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==K?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||m.nodeName(d,b)?f.push(d):m.merge(f,ua(d,b));return void 0===b||b&&m.nodeName(a,b)?m.merge([a],f):f}function va(a){W.test(a.type)&&(a.defaultChecked=a.checked)}function wa(a,b){return m.nodeName(a,"table")&&m.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function xa(a){return a.type=(null!==m.find.attr(a,"type"))+"/"+a.type,a}function ya(a){var b=pa.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function za(a,b){for(var c,d=0;null!=(c=a[d]);d++)m._data(c,"globalEval",!b||m._data(b[d],"globalEval"))}function Aa(a,b){if(1===b.nodeType&&m.hasData(a)){var c,d,e,f=m._data(a),g=m._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)m.event.add(b,c,h[c][d])}g.data&&(g.data=m.extend({},g.data))}}function Ba(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!k.noCloneEvent&&b[m.expando]){e=m._data(b);for(d in e.events)m.removeEvent(b,d,e.handle);b.removeAttribute(m.expando)}"script"===c&&b.text!==a.text?(xa(b).text=a.text,ya(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),k.html5Clone&&a.innerHTML&&!m.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&W.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}m.extend({clone:function(a,b,c){var d,e,f,g,h,i=m.contains(a.ownerDocument,a);if(k.html5Clone||m.isXMLDoc(a)||!ga.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(ta.innerHTML=a.outerHTML,ta.removeChild(f=ta.firstChild)),!(k.noCloneEvent&&k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||m.isXMLDoc(a)))for(d=ua(f),h=ua(a),g=0;null!=(e=h[g]);++g)d[g]&&Ba(e,d[g]);if(b)if(c)for(h=h||ua(a),d=d||ua(f),g=0;null!=(e=h[g]);g++)Aa(e,d[g]);else Aa(a,f);return d=ua(f,"script"),d.length>0&&za(d,!i&&ua(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,l,n=a.length,o=da(b),p=[],q=0;n>q;q++)if(f=a[q],f||0===f)if("object"===m.type(f))m.merge(p,f.nodeType?[f]:f);else if(la.test(f)){h=h||o.appendChild(b.createElement("div")),i=(ja.exec(f)||["",""])[1].toLowerCase(),l=ra[i]||ra._default,h.innerHTML=l[1]+f.replace(ia,"<$1></$2>")+l[2],e=l[0];while(e--)h=h.lastChild;if(!k.leadingWhitespace&&ha.test(f)&&p.push(b.createTextNode(ha.exec(f)[0])),!k.tbody){f="table"!==i||ka.test(f)?"<table>"!==l[1]||ka.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)m.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}m.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),k.appendChecked||m.grep(ua(p,"input"),va),q=0;while(f=p[q++])if((!d||-1===m.inArray(f,d))&&(g=m.contains(f.ownerDocument,f),h=ua(o.appendChild(f),"script"),g&&za(h),c)){e=0;while(f=h[e++])oa.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=m.expando,j=m.cache,l=k.deleteExpando,n=m.event.special;null!=(d=a[h]);h++)if((b||m.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)n[e]?m.event.remove(d,e):m.removeEvent(d,e,g.handle);j[f]&&(delete j[f],l?delete d[i]:typeof d.removeAttribute!==K?d.removeAttribute(i):d[i]=null,c.push(f))}}}),m.fn.extend({text:function(a){return V(this,function(a){return void 0===a?m.text(this):this.empty().append((this[0]&&this[0].ownerDocument||y).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wa(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wa(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?m.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||m.cleanData(ua(c)),c.parentNode&&(b&&m.contains(c.ownerDocument,c)&&za(ua(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&m.cleanData(ua(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&m.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return m.clone(this,a,b)})},html:function(a){return V(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(fa,""):void 0;if(!("string"!=typeof a||ma.test(a)||!k.htmlSerialize&&ga.test(a)||!k.leadingWhitespace&&ha.test(a)||ra[(ja.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(ia,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(m.cleanData(ua(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,m.cleanData(ua(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,n=this,o=l-1,p=a[0],q=m.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&na.test(p))return this.each(function(c){var d=n.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(i=m.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=m.map(ua(i,"script"),xa),f=g.length;l>j;j++)d=i,j!==o&&(d=m.clone(d,!0,!0),f&&m.merge(g,ua(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,m.map(g,ya),j=0;f>j;j++)d=g[j],oa.test(d.type||"")&&!m._data(d,"globalEval")&&m.contains(h,d)&&(d.src?m._evalUrl&&m._evalUrl(d.src):m.globalEval((d.text||d.textContent||d.innerHTML||"").replace(qa,"")));i=c=null}return this}}),m.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){m.fn[a]=function(a){for(var c,d=0,e=[],g=m(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),m(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Ca,Da={};function Ea(b,c){var d,e=m(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:m.css(e[0],"display");return e.detach(),f}function Fa(a){var b=y,c=Da[a];return c||(c=Ea(a,b),"none"!==c&&c||(Ca=(Ca||m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Ca[0].contentWindow||Ca[0].contentDocument).document,b.write(),b.close(),c=Ea(a,b),Ca.detach()),Da[a]=c),c}!function(){var a;k.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,d;return c=y.getElementsByTagName("body")[0],c&&c.style?(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(y.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(d),a):void 0}}();var Ga=/^margin/,Ha=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ia,Ja,Ka=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ia=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)},Ja=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ia(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||m.contains(a.ownerDocument,a)||(g=m.style(a,b)),Ha.test(g)&&Ga.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):y.documentElement.currentStyle&&(Ia=function(a){return a.currentStyle},Ja=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ia(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Ha.test(g)&&!Ka.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function La(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h;if(b=y.createElement("div"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=d&&d.style){c.cssText="float:left;opacity:.5",k.opacity="0.5"===c.opacity,k.cssFloat=!!c.cssFloat,b.style.backgroundClip="content-box",b.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===b.style.backgroundClip,k.boxSizing=""===c.boxSizing||""===c.MozBoxSizing||""===c.WebkitBoxSizing,m.extend(k,{reliableHiddenOffsets:function(){return null==g&&i(),g},boxSizingReliable:function(){return null==f&&i(),f},pixelPosition:function(){return null==e&&i(),e},reliableMarginRight:function(){return null==h&&i(),h}});function i(){var b,c,d,i;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),b.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",e=f=!1,h=!0,a.getComputedStyle&&(e="1%"!==(a.getComputedStyle(b,null)||{}).top,f="4px"===(a.getComputedStyle(b,null)||{width:"4px"}).width,i=b.appendChild(y.createElement("div")),i.style.cssText=b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",i.style.marginRight=i.style.width="0",b.style.width="1px",h=!parseFloat((a.getComputedStyle(i,null)||{}).marginRight),b.removeChild(i)),b.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=b.getElementsByTagName("td"),i[0].style.cssText="margin:0;border:0;padding:0;display:none",g=0===i[0].offsetHeight,g&&(i[0].style.display="",i[1].style.display="none",g=0===i[0].offsetHeight),c.removeChild(d))}}}(),m.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Ma=/alpha\([^)]*\)/i,Na=/opacity\s*=\s*([^)]*)/,Oa=/^(none|table(?!-c[ea]).+)/,Pa=new RegExp("^("+S+")(.*)$","i"),Qa=new RegExp("^([+-])=("+S+")","i"),Ra={position:"absolute",visibility:"hidden",display:"block"},Sa={letterSpacing:"0",fontWeight:"400"},Ta=["Webkit","O","Moz","ms"];function Ua(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Ta.length;while(e--)if(b=Ta[e]+c,b in a)return b;return d}function Va(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=m._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&U(d)&&(f[g]=m._data(d,"olddisplay",Fa(d.nodeName)))):(e=U(d),(c&&"none"!==c||!e)&&m._data(d,"olddisplay",e?c:m.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Wa(a,b,c){var d=Pa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Xa(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=m.css(a,c+T[f],!0,e)),d?("content"===c&&(g-=m.css(a,"padding"+T[f],!0,e)),"margin"!==c&&(g-=m.css(a,"border"+T[f]+"Width",!0,e))):(g+=m.css(a,"padding"+T[f],!0,e),"padding"!==c&&(g+=m.css(a,"border"+T[f]+"Width",!0,e)));return g}function Ya(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ia(a),g=k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Ja(a,b,f),(0>e||null==e)&&(e=a.style[b]),Ha.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Xa(a,b,c||(g?"border":"content"),d,f)+"px"}m.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Ja(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":k.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=m.camelCase(b),i=a.style;if(b=m.cssProps[h]||(m.cssProps[h]=Ua(i,h)),g=m.cssHooks[b]||m.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Qa.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(m.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||m.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=m.camelCase(b);return b=m.cssProps[h]||(m.cssProps[h]=Ua(a.style,h)),g=m.cssHooks[b]||m.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Ja(a,b,d)),"normal"===f&&b in Sa&&(f=Sa[b]),""===c||c?(e=parseFloat(f),c===!0||m.isNumeric(e)?e||0:f):f}}),m.each(["height","width"],function(a,b){m.cssHooks[b]={get:function(a,c,d){return c?Oa.test(m.css(a,"display"))&&0===a.offsetWidth?m.swap(a,Ra,function(){return Ya(a,b,d)}):Ya(a,b,d):void 0},set:function(a,c,d){var e=d&&Ia(a);return Wa(a,c,d?Xa(a,b,d,k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,e),e):0)}}}),k.opacity||(m.cssHooks.opacity={get:function(a,b){return Na.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=m.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===m.trim(f.replace(Ma,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Ma.test(f)?f.replace(Ma,e):f+" "+e)}}),m.cssHooks.marginRight=La(k.reliableMarginRight,function(a,b){return b?m.swap(a,{display:"inline-block"},Ja,[a,"marginRight"]):void 0}),m.each({margin:"",padding:"",border:"Width"},function(a,b){m.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+T[d]+b]=f[d]||f[d-2]||f[0];return e}},Ga.test(a)||(m.cssHooks[a+b].set=Wa)}),m.fn.extend({css:function(a,b){return V(this,function(a,b,c){var d,e,f={},g=0;if(m.isArray(b)){for(d=Ia(a),e=b.length;e>g;g++)f[b[g]]=m.css(a,b[g],!1,d);return f}return void 0!==c?m.style(a,b,c):m.css(a,b)},a,b,arguments.length>1)},show:function(){return Va(this,!0)},hide:function(){return Va(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){U(this)?m(this).show():m(this).hide()})}});function Za(a,b,c,d,e){return new Za.prototype.init(a,b,c,d,e)}m.Tween=Za,Za.prototype={constructor:Za,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(m.cssNumber[c]?"":"px")},cur:function(){var a=Za.propHooks[this.prop];return a&&a.get?a.get(this):Za.propHooks._default.get(this)},run:function(a){var b,c=Za.propHooks[this.prop];return this.options.duration?this.pos=b=m.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Za.propHooks._default.set(this),this}},Za.prototype.init.prototype=Za.prototype,Za.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=m.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){m.fx.step[a.prop]?m.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[m.cssProps[a.prop]]||m.cssHooks[a.prop])?m.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Za.propHooks.scrollTop=Za.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},m.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},m.fx=Za.prototype.init,m.fx.step={};var $a,_a,ab=/^(?:toggle|show|hide)$/,bb=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),cb=/queueHooks$/,db=[ib],eb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=bb.exec(b),f=e&&e[3]||(m.cssNumber[a]?"":"px"),g=(m.cssNumber[a]||"px"!==f&&+d)&&bb.exec(m.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,m.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function fb(){return setTimeout(function(){$a=void 0}),$a=m.now()}function gb(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=T[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function hb(a,b,c){for(var d,e=(eb[b]||[]).concat(eb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ib(a,b,c){var d,e,f,g,h,i,j,l,n=this,o={},p=a.style,q=a.nodeType&&U(a),r=m._data(a,"fxshow");c.queue||(h=m._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,n.always(function(){n.always(function(){h.unqueued--,m.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=m.css(a,"display"),l="none"===j?m._data(a,"olddisplay")||Fa(a.nodeName):j,"inline"===l&&"none"===m.css(a,"float")&&(k.inlineBlockNeedsLayout&&"inline"!==Fa(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",k.shrinkWrapBlocks()||n.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],ab.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||m.style(a,d)}else j=void 0;if(m.isEmptyObject(o))"inline"===("none"===j?Fa(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=m._data(a,"fxshow",{}),f&&(r.hidden=!q),q?m(a).show():n.done(function(){m(a).hide()}),n.done(function(){var b;m._removeData(a,"fxshow");for(b in o)m.style(a,b,o[b])});for(d in o)g=hb(q?r[d]:0,d,n),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function jb(a,b){var c,d,e,f,g;for(c in a)if(d=m.camelCase(c),e=b[d],f=a[c],m.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=m.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kb(a,b,c){var d,e,f=0,g=db.length,h=m.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=$a||fb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:m.extend({},b),opts:m.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:$a||fb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=m.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jb(k,j.opts.specialEasing);g>f;f++)if(d=db[f].call(j,a,k,j.opts))return d;return m.map(k,hb,j),m.isFunction(j.opts.start)&&j.opts.start.call(a,j),m.fx.timer(m.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}m.Animation=m.extend(kb,{tweener:function(a,b){m.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],eb[c]=eb[c]||[],eb[c].unshift(b)},prefilter:function(a,b){b?db.unshift(a):db.push(a)}}),m.speed=function(a,b,c){var d=a&&"object"==typeof a?m.extend({},a):{complete:c||!c&&b||m.isFunction(a)&&a,duration:a,easing:c&&b||b&&!m.isFunction(b)&&b};return d.duration=m.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in m.fx.speeds?m.fx.speeds[d.duration]:m.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){m.isFunction(d.old)&&d.old.call(this),d.queue&&m.dequeue(this,d.queue)},d},m.fn.extend({fadeTo:function(a,b,c,d){return this.filter(U).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=m.isEmptyObject(a),f=m.speed(b,c,d),g=function(){var b=kb(this,m.extend({},a),f);(e||m._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=m.timers,g=m._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&cb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&m.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=m._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=m.timers,g=d?d.length:0;for(c.finish=!0,m.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),m.each(["toggle","show","hide"],function(a,b){var c=m.fn[b];m.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gb(b,!0),a,d,e)}}),m.each({slideDown:gb("show"),slideUp:gb("hide"),slideToggle:gb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){m.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),m.timers=[],m.fx.tick=function(){var a,b=m.timers,c=0;for($a=m.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||m.fx.stop(),$a=void 0},m.fx.timer=function(a){m.timers.push(a),a()?m.fx.start():m.timers.pop()},m.fx.interval=13,m.fx.start=function(){_a||(_a=setInterval(m.fx.tick,m.fx.interval))},m.fx.stop=function(){clearInterval(_a),_a=null},m.fx.speeds={slow:600,fast:200,_default:400},m.fn.delay=function(a,b){return a=m.fx?m.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e;b=y.createElement("div"),b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=y.createElement("select"),e=c.appendChild(y.createElement("option")),a=b.getElementsByTagName("input")[0],d.style.cssText="top:1px",k.getSetAttribute="t"!==b.className,k.style=/top/.test(d.getAttribute("style")),k.hrefNormalized="/a"===d.getAttribute("href"),k.checkOn=!!a.value,k.optSelected=e.selected,k.enctype=!!y.createElement("form").enctype,c.disabled=!0,k.optDisabled=!e.disabled,a=y.createElement("input"),a.setAttribute("value",""),k.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),k.radioValue="t"===a.value}();var lb=/\r/g;m.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=m.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,m(this).val()):a,null==e?e="":"number"==typeof e?e+="":m.isArray(e)&&(e=m.map(e,function(a){return null==a?"":a+""})),b=m.valHooks[this.type]||m.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=m.valHooks[e.type]||m.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(lb,""):null==c?"":c)}}}),m.extend({valHooks:{option:{get:function(a){var b=m.find.attr(a,"value");return null!=b?b:m.trim(m.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&m.nodeName(c.parentNode,"optgroup"))){if(b=m(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=m.makeArray(b),g=e.length;while(g--)if(d=e[g],m.inArray(m.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),m.each(["radio","checkbox"],function(){m.valHooks[this]={set:function(a,b){return m.isArray(b)?a.checked=m.inArray(m(a).val(),b)>=0:void 0}},k.checkOn||(m.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var mb,nb,ob=m.expr.attrHandle,pb=/^(?:checked|selected)$/i,qb=k.getSetAttribute,rb=k.input;m.fn.extend({attr:function(a,b){return V(this,m.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){m.removeAttr(this,a)})}}),m.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===K?m.prop(a,b,c):(1===f&&m.isXMLDoc(a)||(b=b.toLowerCase(),d=m.attrHooks[b]||(m.expr.match.bool.test(b)?nb:mb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=m.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void m.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=m.propFix[c]||c,m.expr.match.bool.test(c)?rb&&qb||!pb.test(c)?a[d]=!1:a[m.camelCase("default-"+c)]=a[d]=!1:m.attr(a,c,""),a.removeAttribute(qb?c:d)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&m.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),nb={set:function(a,b,c){return b===!1?m.removeAttr(a,c):rb&&qb||!pb.test(c)?a.setAttribute(!qb&&m.propFix[c]||c,c):a[m.camelCase("default-"+c)]=a[c]=!0,c}},m.each(m.expr.match.bool.source.match(/\w+/g),function(a,b){var c=ob[b]||m.find.attr;ob[b]=rb&&qb||!pb.test(b)?function(a,b,d){var e,f;return d||(f=ob[b],ob[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,ob[b]=f),e}:function(a,b,c){return c?void 0:a[m.camelCase("default-"+b)]?b.toLowerCase():null}}),rb&&qb||(m.attrHooks.value={set:function(a,b,c){return m.nodeName(a,"input")?void(a.defaultValue=b):mb&&mb.set(a,b,c)}}),qb||(mb={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},ob.id=ob.name=ob.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},m.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:mb.set},m.attrHooks.contenteditable={set:function(a,b,c){mb.set(a,""===b?!1:b,c)}},m.each(["width","height"],function(a,b){m.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),k.style||(m.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var sb=/^(?:input|select|textarea|button|object)$/i,tb=/^(?:a|area)$/i;m.fn.extend({prop:function(a,b){return V(this,m.prop,a,b,arguments.length>1)},removeProp:function(a){return a=m.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),m.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!m.isXMLDoc(a),f&&(b=m.propFix[b]||b,e=m.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=m.find.attr(a,"tabindex");return b?parseInt(b,10):sb.test(a.nodeName)||tb.test(a.nodeName)&&a.href?0:-1}}}}),k.hrefNormalized||m.each(["href","src"],function(a,b){m.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),k.optSelected||(m.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),m.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){m.propFix[this.toLowerCase()]=this}),k.enctype||(m.propFix.enctype="encoding");var ub=/[\t\r\n\f]/g;m.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ub," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=m.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ub," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?m.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(m.isFunction(a)?function(c){m(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=m(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===K||"boolean"===c)&&(this.className&&m._data(this,"__className__",this.className),this.className=this.className||a===!1?"":m._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ub," ").indexOf(b)>=0)return!0;return!1}}),m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){m.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),m.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var vb=m.now(),wb=/\?/,xb=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;m.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=m.trim(b+"");return e&&!m.trim(e.replace(xb,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():m.error("Invalid JSON: "+b)},m.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||m.error("Invalid XML: "+b),c};var yb,zb,Ab=/#.*$/,Bb=/([?&])_=[^&]*/,Cb=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Db=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Eb=/^(?:GET|HEAD)$/,Fb=/^\/\//,Gb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Hb={},Ib={},Jb="*/".concat("*");try{zb=location.href}catch(Kb){zb=y.createElement("a"),zb.href="",zb=zb.href}yb=Gb.exec(zb.toLowerCase())||[];function Lb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(m.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Mb(a,b,c,d){var e={},f=a===Ib;function g(h){var i;return e[h]=!0,m.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Nb(a,b){var c,d,e=m.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&m.extend(!0,a,c),a}function Ob(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Pb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}m.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:zb,type:"GET",isLocal:Db.test(yb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Jb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":m.parseJSON,"text xml":m.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Nb(Nb(a,m.ajaxSettings),b):Nb(m.ajaxSettings,a)},ajaxPrefilter:Lb(Hb),ajaxTransport:Lb(Ib),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=m.ajaxSetup({},b),l=k.context||k,n=k.context&&(l.nodeType||l.jquery)?m(l):m.event,o=m.Deferred(),p=m.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Cb.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||zb)+"").replace(Ab,"").replace(Fb,yb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=m.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(c=Gb.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===yb[1]&&c[2]===yb[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(yb[3]||("http:"===yb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=m.param(k.data,k.traditional)),Mb(Hb,k,b,v),2===t)return v;h=m.event&&k.global,h&&0===m.active++&&m.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Eb.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(wb.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Bb.test(e)?e.replace(Bb,"$1_="+vb++):e+(wb.test(e)?"&":"?")+"_="+vb++)),k.ifModified&&(m.lastModified[e]&&v.setRequestHeader("If-Modified-Since",m.lastModified[e]),m.etag[e]&&v.setRequestHeader("If-None-Match",m.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Jb+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Mb(Ib,k,b,v)){v.readyState=1,h&&n.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Ob(k,v,c)),u=Pb(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(m.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(m.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&n.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(n.trigger("ajaxComplete",[v,k]),--m.active||m.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return m.get(a,b,c,"json")},getScript:function(a,b){return m.get(a,void 0,b,"script")}}),m.each(["get","post"],function(a,b){m[b]=function(a,c,d,e){return m.isFunction(c)&&(e=e||d,d=c,c=void 0),m.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),m._evalUrl=function(a){return m.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},m.fn.extend({wrapAll:function(a){if(m.isFunction(a))return this.each(function(b){m(this).wrapAll(a.call(this,b))});if(this[0]){var b=m(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(m.isFunction(a)?function(b){m(this).wrapInner(a.call(this,b))}:function(){var b=m(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=m.isFunction(a);return this.each(function(c){m(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){m.nodeName(this,"body")||m(this).replaceWith(this.childNodes)}).end()}}),m.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!k.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||m.css(a,"display"))},m.expr.filters.visible=function(a){return!m.expr.filters.hidden(a)};var Qb=/%20/g,Rb=/\[\]$/,Sb=/\r?\n/g,Tb=/^(?:submit|button|image|reset|file)$/i,Ub=/^(?:input|select|textarea|keygen)/i;function Vb(a,b,c,d){var e;if(m.isArray(b))m.each(b,function(b,e){c||Rb.test(a)?d(a,e):Vb(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==m.type(b))d(a,b);else for(e in b)Vb(a+"["+e+"]",b[e],c,d)}m.param=function(a,b){var c,d=[],e=function(a,b){b=m.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=m.ajaxSettings&&m.ajaxSettings.traditional),m.isArray(a)||a.jquery&&!m.isPlainObject(a))m.each(a,function(){e(this.name,this.value)});else for(c in a)Vb(c,a[c],b,e);return d.join("&").replace(Qb,"+")},m.fn.extend({serialize:function(){return m.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=m.prop(this,"elements");return a?m.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!m(this).is(":disabled")&&Ub.test(this.nodeName)&&!Tb.test(a)&&(this.checked||!W.test(a))}).map(function(a,b){var c=m(this).val();return null==c?null:m.isArray(c)?m.map(c,function(a){return{name:b.name,value:a.replace(Sb,"\r\n")}}):{name:b.name,value:c.replace(Sb,"\r\n")}}).get()}}),m.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&Zb()||$b()}:Zb;var Wb=0,Xb={},Yb=m.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Xb)Xb[a](void 0,!0)}),k.cors=!!Yb&&"withCredentials"in Yb,Yb=k.ajax=!!Yb,Yb&&m.ajaxTransport(function(a){if(!a.crossDomain||k.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Wb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Xb[g],b=void 0,f.onreadystatechange=m.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Xb[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function Zb(){try{return new a.XMLHttpRequest}catch(b){}}function $b(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}m.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return m.globalEval(a),a}}}),m.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),m.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=y.head||m("head")[0]||y.documentElement;return{send:function(d,e){b=y.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var _b=[],ac=/(=)\?(?=&|$)|\?\?/;m.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=_b.pop()||m.expando+"_"+vb++;return this[a]=!0,a}}),m.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(ac.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&ac.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=m.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(ac,"$1"+e):b.jsonp!==!1&&(b.url+=(wb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||m.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,_b.push(e)),g&&m.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),m.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||y;var d=u.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=m.buildFragment([a],b,e),e&&e.length&&m(e).remove(),m.merge([],d.childNodes))};var bc=m.fn.load;m.fn.load=function(a,b,c){if("string"!=typeof a&&bc)return bc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=m.trim(a.slice(h,a.length)),a=a.slice(0,h)),m.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&m.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?m("<div>").append(m.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},m.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){m.fn[b]=function(a){return this.on(b,a)}}),m.expr.filters.animated=function(a){return m.grep(m.timers,function(b){return a===b.elem}).length};var cc=a.document.documentElement;function dc(a){return m.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}m.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=m.css(a,"position"),l=m(a),n={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=m.css(a,"top"),i=m.css(a,"left"),j=("absolute"===k||"fixed"===k)&&m.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),m.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(n.top=b.top-h.top+g),null!=b.left&&(n.left=b.left-h.left+e),"using"in b?b.using.call(a,n):l.css(n)}},m.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){m.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,m.contains(b,e)?(typeof e.getBoundingClientRect!==K&&(d=e.getBoundingClientRect()),c=dc(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===m.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),m.nodeName(a[0],"html")||(c=a.offset()),c.top+=m.css(a[0],"borderTopWidth",!0),c.left+=m.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-m.css(d,"marginTop",!0),left:b.left-c.left-m.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||cc;while(a&&!m.nodeName(a,"html")&&"static"===m.css(a,"position"))a=a.offsetParent;return a||cc})}}),m.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);m.fn[a]=function(d){return V(this,function(a,d,e){var f=dc(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?m(f).scrollLeft():e,c?e:m(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),m.each(["top","left"],function(a,b){m.cssHooks[b]=La(k.pixelPosition,function(a,c){return c?(c=Ja(a,b),Ha.test(c)?m(a).position()[b]+"px":c):void 0})}),m.each({Height:"height",Width:"width"},function(a,b){m.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){m.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return V(this,function(b,c,d){var e;return m.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?m.css(b,c,g):m.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),m.fn.size=function(){return this.length},m.fn.andSelf=m.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return m});var ec=a.jQuery,fc=a.$;return m.noConflict=function(b){return a.$===m&&(a.$=fc),b&&a.jQuery===m&&(a.jQuery=ec),m},typeof b===K&&(a.jQuery=a.$=m),m});jQuery.noConflict();
/*! jQuery Migrate v1.2.1 | (c) 2005, 2013 jQuery Foundation, Inc. and other contributors | jquery.org/license */
jQuery.migrateMute===void 0&&(jQuery.migrateMute=!0),function(e,t,n){function r(n){var r=t.console;i[n]||(i[n]=!0,e.migrateWarnings.push(n),r&&r.warn&&!e.migrateMute&&(r.warn("JQMIGRATE: "+n),e.migrateTrace&&r.trace&&r.trace()))}function a(t,a,i,o){if(Object.defineProperty)try{return Object.defineProperty(t,a,{configurable:!0,enumerable:!0,get:function(){return r(o),i},set:function(e){r(o),i=e}}),n}catch(s){}e._definePropertyBroken=!0,t[a]=i}var i={};e.migrateWarnings=[],!e.migrateMute&&t.console&&t.console.log&&t.console.log("JQMIGRATE: Logging is active"),e.migrateTrace===n&&(e.migrateTrace=!0),e.migrateReset=function(){i={},e.migrateWarnings.length=0},"BackCompat"===document.compatMode&&r("jQuery is not compatible with Quirks Mode");var o=e("<input/>",{size:1}).attr("size")&&e.attrFn,s=e.attr,u=e.attrHooks.value&&e.attrHooks.value.get||function(){return null},c=e.attrHooks.value&&e.attrHooks.value.set||function(){return n},l=/^(?:input|button)$/i,d=/^[238]$/,p=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,f=/^(?:checked|selected)$/i;a(e,"attrFn",o||{},"jQuery.attrFn is deprecated"),e.attr=function(t,a,i,u){var c=a.toLowerCase(),g=t&&t.nodeType;return u&&(4>s.length&&r("jQuery.fn.attr( props, pass ) is deprecated"),t&&!d.test(g)&&(o?a in o:e.isFunction(e.fn[a])))?e(t)[a](i):("type"===a&&i!==n&&l.test(t.nodeName)&&t.parentNode&&r("Can't change the 'type' of an input or button in IE 6/7/8"),!e.attrHooks[c]&&p.test(c)&&(e.attrHooks[c]={get:function(t,r){var a,i=e.prop(t,r);return i===!0||"boolean"!=typeof i&&(a=t.getAttributeNode(r))&&a.nodeValue!==!1?r.toLowerCase():n},set:function(t,n,r){var a;return n===!1?e.removeAttr(t,r):(a=e.propFix[r]||r,a in t&&(t[a]=!0),t.setAttribute(r,r.toLowerCase())),r}},f.test(c)&&r("jQuery.fn.attr('"+c+"') may use property instead of attribute")),s.call(e,t,a,i))},e.attrHooks.value={get:function(e,t){var n=(e.nodeName||"").toLowerCase();return"button"===n?u.apply(this,arguments):("input"!==n&&"option"!==n&&r("jQuery.fn.attr('value') no longer gets properties"),t in e?e.value:null)},set:function(e,t){var a=(e.nodeName||"").toLowerCase();return"button"===a?c.apply(this,arguments):("input"!==a&&"option"!==a&&r("jQuery.fn.attr('value', val) no longer sets properties"),e.value=t,n)}};var g,h,v=e.fn.init,m=e.parseJSON,y=/^([^<]*)(<[\w\W]+>)([^>]*)$/;e.fn.init=function(t,n,a){var i;return t&&"string"==typeof t&&!e.isPlainObject(n)&&(i=y.exec(e.trim(t)))&&i[0]&&("<"!==t.charAt(0)&&r("$(html) HTML strings must start with '<' character"),i[3]&&r("$(html) HTML text after last tag is ignored"),"#"===i[0].charAt(0)&&(r("HTML string cannot start with a '#' character"),e.error("JQMIGRATE: Invalid selector string (XSS)")),n&&n.context&&(n=n.context),e.parseHTML)?v.call(this,e.parseHTML(i[2],n,!0),n,a):v.apply(this,arguments)},e.fn.init.prototype=e.fn,e.parseJSON=function(e){return e||null===e?m.apply(this,arguments):(r("jQuery.parseJSON requires a valid JSON string"),null)},e.uaMatch=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||0>e.indexOf("compatible")&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},e.browser||(g=e.uaMatch(navigator.userAgent),h={},g.browser&&(h[g.browser]=!0,h.version=g.version),h.chrome?h.webkit=!0:h.webkit&&(h.safari=!0),e.browser=h),a(e,"browser",e.browser,"jQuery.browser is deprecated"),e.sub=function(){function t(e,n){return new t.fn.init(e,n)}e.extend(!0,t,this),t.superclass=this,t.fn=t.prototype=this(),t.fn.constructor=t,t.sub=this.sub,t.fn.init=function(r,a){return a&&a instanceof e&&!(a instanceof t)&&(a=t(a)),e.fn.init.call(this,r,a,n)},t.fn.init.prototype=t.fn;var n=t(document);return r("jQuery.sub() is deprecated"),t},e.ajaxSetup({converters:{"text json":e.parseJSON}});var b=e.fn.data;e.fn.data=function(t){var a,i,o=this[0];return!o||"events"!==t||1!==arguments.length||(a=e.data(o,t),i=e._data(o,t),a!==n&&a!==i||i===n)?b.apply(this,arguments):(r("Use of jQuery.fn.data('events') is deprecated"),i)};var j=/\/(java|ecma)script/i,w=e.fn.andSelf||e.fn.addBack;e.fn.andSelf=function(){return r("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),w.apply(this,arguments)},e.clean||(e.clean=function(t,a,i,o){a=a||document,a=!a.nodeType&&a[0]||a,a=a.ownerDocument||a,r("jQuery.clean() is deprecated");var s,u,c,l,d=[];if(e.merge(d,e.buildFragment(t,a).childNodes),i)for(c=function(e){return!e.type||j.test(e.type)?o?o.push(e.parentNode?e.parentNode.removeChild(e):e):i.appendChild(e):n},s=0;null!=(u=d[s]);s++)e.nodeName(u,"script")&&c(u)||(i.appendChild(u),u.getElementsByTagName!==n&&(l=e.grep(e.merge([],u.getElementsByTagName("script")),c),d.splice.apply(d,[s+1,0].concat(l)),s+=l.length));return d});var Q=e.event.add,x=e.event.remove,k=e.event.trigger,N=e.fn.toggle,T=e.fn.live,M=e.fn.die,S="ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",C=RegExp("\\b(?:"+S+")\\b"),H=/(?:^|\s)hover(\.\S+|)\b/,A=function(t){return"string"!=typeof t||e.event.special.hover?t:(H.test(t)&&r("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"),t&&t.replace(H,"mouseenter$1 mouseleave$1"))};e.event.props&&"attrChange"!==e.event.props[0]&&e.event.props.unshift("attrChange","attrName","relatedNode","srcElement"),e.event.dispatch&&a(e.event,"handle",e.event.dispatch,"jQuery.event.handle is undocumented and deprecated"),e.event.add=function(e,t,n,a,i){e!==document&&C.test(t)&&r("AJAX events should be attached to document: "+t),Q.call(this,e,A(t||""),n,a,i)},e.event.remove=function(e,t,n,r,a){x.call(this,e,A(t)||"",n,r,a)},e.fn.error=function(){var e=Array.prototype.slice.call(arguments,0);return r("jQuery.fn.error() is deprecated"),e.splice(0,0,"error"),arguments.length?this.bind.apply(this,e):(this.triggerHandler.apply(this,e),this)},e.fn.toggle=function(t,n){if(!e.isFunction(t)||!e.isFunction(n))return N.apply(this,arguments);r("jQuery.fn.toggle(handler, handler...) is deprecated");var a=arguments,i=t.guid||e.guid++,o=0,s=function(n){var r=(e._data(this,"lastToggle"+t.guid)||0)%o;return e._data(this,"lastToggle"+t.guid,r+1),n.preventDefault(),a[r].apply(this,arguments)||!1};for(s.guid=i;a.length>o;)a[o++].guid=i;return this.click(s)},e.fn.live=function(t,n,a){return r("jQuery.fn.live() is deprecated"),T?T.apply(this,arguments):(e(this.context).on(t,this.selector,n,a),this)},e.fn.die=function(t,n){return r("jQuery.fn.die() is deprecated"),M?M.apply(this,arguments):(e(this.context).off(t,this.selector||"**",n),this)},e.event.trigger=function(e,t,n,a){return n||C.test(e)||r("Global events are undocumented and deprecated"),k.call(this,e,t,n||document,a)},e.each(S.split("|"),function(t,n){e.event.special[n]={setup:function(){var t=this;return t!==document&&(e.event.add(document,n+"."+e.guid,function(){e.event.trigger(n,null,t,!0)}),e._data(this,n,e.guid++)),!1},teardown:function(){return this!==document&&e.event.remove(document,n+"."+e._data(this,n)),!1}}})}(jQuery,window);
jQuery(document).ready(function(){jQuery(".gallery-icon a").each(function(){var e=jQuery(this).children().attr("src");var t=e.lastIndexOf("-");var n=e.lastIndexOf(".");var r=e.substring(t,n);var i=e.replace(r,"");jQuery(this).attr("rel","cyberchimps-lightbox");jQuery(this).attr("href",i)})});
(function(e){function L(){var n=t.scrollLeft(),r=t.width();e([b,T]).css("left",n+r/2);if(a){e(y).css({left:n,top:t.scrollTop(),width:r,height:t.height()})}}function A(n){if(n){e("object").add(h?"select":"embed").each(function(e,t){p[e]=[t,t.style.visibility];t.style.visibility="hidden"})}else{e.each(p,function(e,t){t[0].style.visibility=t[1]});p=[]}var r=n?"bind":"unbind";t[r]("scroll resize",L);e(document)[r]("keydown",O)}function O(t){var r=t.which,i=e.inArray;return i(r,n.closeKeys)>=0?j():i(r,n.nextKeys)>=0?_():i(r,n.previousKeys)>=0?M():null}function M(){return D(o)}function _(){return D(u)}function D(e){if(e>=0){i=e;s=r[i][0];o=(i||(n.loop?r.length:0))-1;u=(i+1)%r.length||(n.loop?0:-1);B();b.className="lbLoading";v=new Image;v.onload=P;v.src=s}return false}function P(){b.className="";e(w).css({backgroundImage:"url("+s+")",visibility:"hidden",display:""});e(E).width(v.width);e([E,S,x]).height(v.height);e(C).html(r[i][1]||"");e(k).html((r.length>1&&n.counterText||"").replace(/{x}/,i+1).replace(/{y}/,r.length));if(o>=0){m.src=r[o][0]}if(u>=0){g.src=r[u][0]}l=w.offsetWidth;c=w.offsetHeight;var t=Math.max(0,f-c/2);if(b.offsetHeight!=c){e(b).animate({height:c,top:t},n.resizeDuration,n.resizeEasing)}if(b.offsetWidth!=l){e(b).animate({width:l,marginLeft:-l/2},n.resizeDuration,n.resizeEasing)}e(b).queue(function(){e(T).css({width:l,top:t+c,marginLeft:-l/2,visibility:"hidden",display:""});e(w).css({display:"none",visibility:"",opacity:""}).fadeIn(n.imageFadeDuration,H)})}function H(){if(o>=0){e(S).show()}if(u>=0){e(x).show()}e(N).css("marginTop",-N.offsetHeight).animate({marginTop:0},n.captionAnimationDuration);T.style.visibility=""}function B(){v.onload=null;v.src=m.src=g.src=s;e([b,w,N]).stop(true);e([S,x,w,T]).hide()}function j(){if(i>=0){B();i=o=u=-1;e(b).hide();e(y).stop().fadeOut(n.overlayFadeDuration,A)}return false}var t=e(window),n,r,i=-1,s,o,u,a,f,l,c,h=!window.XMLHttpRequest,p=[],d=document.documentElement,v={},m=new Image,g=new Image,y,b,w,E,S,x,T,N,C,k;e(function(){e("body").append(e([y=e('<div id="lbOverlay" />').click(j)[0],b=e('<div id="lbCenter" />')[0],T=e('<div id="lbBottomContainer" />')[0]]).css("display","none"));w=e('<div id="lbImage" />').appendTo(b).append(E=e('<div style="position: relative;" />').append([S=e('<a id="lbPrevLink" href="#" />').click(M)[0],x=e('<a id="lbNextLink" href="#" />').click(_)[0]])[0])[0];N=e('<div id="lbBottom" />').appendTo(T).append([e('<a id="lbCloseLink" href="#" />').click(j)[0],C=e('<div id="lbCaption" />')[0],k=e('<div id="lbNumber" />')[0],e('<div style="clear: both;" />')[0]])[0]});e.slimbox=function(i,s,o){n=e.extend({loop:false,overlayOpacity:.8,overlayFadeDuration:400,resizeDuration:400,resizeEasing:"swing",initialWidth:250,initialHeight:250,imageFadeDuration:400,captionAnimationDuration:400,counterText:"Image {x} of {y}",closeKeys:[27,88,67],previousKeys:[37,80],nextKeys:[39,78]},o);if(typeof i=="string"){i=[[i,s]];s=0}f=t.scrollTop()+t.height()/2;l=n.initialWidth;c=n.initialHeight;e(b).css({top:Math.max(0,f-c/2),width:l,height:c,marginLeft:-l/2}).show();a=h||y.currentStyle&&y.currentStyle.position!="fixed";if(a){y.style.position="absolute"}e(y).css("opacity",n.overlayOpacity).fadeIn(n.overlayFadeDuration);L();A(1);r=i;n.loop=n.loop&&r.length>1;return D(s)};e.fn.slimbox=function(t,n,r){n=n||function(e){return[e.href,e.title]};r=r||function(){return true};var i=this;return i.unbind("click").click(function(){var s=this,o=0,u,a=0,f;u=e.grep(i,function(e,t){return r.call(s,e,t)});for(f=u.length;a<f;++a){if(u[a]==s){o=a}u[a]=n(u[a],a)}return e.slimbox(u,o,t)})}})(jQuery);if(!/android|iphone|ipod|series60|symbian|windows ce|blackberry/i.test(navigator.userAgent)){jQuery(function(e){e("a[rel^='cyberchimps-lightbox']").slimbox({},null,function(e){return this==e||this.rel.length>8&&this.rel==e.rel})})}else{jQuery(function(e){e("a[rel^='cyberchimps-lightbox']").click(function(e){e.preventDefault()});e("a[rel^='cyberchimps-lightbox']").click(function(t){var n=e(this).attr("href");var r=n.lastIndexOf(".");var i=n.substring(r+1);var s=["jpg","png","gif","jpeg"];if(e.inArray(i,s)>=0){t.preventDefault()}})})}
(function(e){"use strict";var t=e.jCarousel={};t.version="0.3.0-beta.5";var n=/^([+\-]=)?(.+)$/;t.parseTarget=function(e){var t=!1,r="object"!=typeof e?n.exec(e):null;return r?(e=parseInt(r[2],10)||0,r[1]&&(t=!0,"-="===r[1]&&(e*=-1))):"object"!=typeof e&&(e=parseInt(e,10)||0),{target:e,relative:t}},t.detectCarousel=function(e){for(var t;e.size()>0;){if(t=e.filter("[data-jcarousel]"),t.size()>0)return t;if(t=e.find("[data-jcarousel]"),t.size()>0)return t;e=e.parent()}return null},t.base=function(n){return{version:t.version,_options:{},_element:null,_carousel:null,_init:e.noop,_create:e.noop,_destroy:e.noop,_reload:e.noop,create:function(){return this._element.attr("data-"+n.toLowerCase(),!0).data(n,this),!1===this._trigger("create")?this:(this._create(),this._trigger("createend"),this)},destroy:function(){return!1===this._trigger("destroy")?this:(this._destroy(),this._trigger("destroyend"),this._element.removeData(n).removeAttr("data-"+n.toLowerCase()),this)},reload:function(e){return!1===this._trigger("reload")?this:(e&&this.options(e),this._reload(),this._trigger("reloadend"),this)},element:function(){return this._element},options:function(t,n){if(0===arguments.length)return e.extend({},this._options);if("string"==typeof t){if(n===void 0)return this._options[t]===void 0?null:this._options[t];this._options[t]=n}else this._options=e.extend({},this._options,t);return this},carousel:function(){return this._carousel||(this._carousel=t.detectCarousel(this.options("carousel")||this._element),this._carousel||e.error('Could not detect carousel for plugin "'+n+'"')),this._carousel},_trigger:function(t,r,i){var o,u=!1;return i=[this].concat(i||[]),(r||this._element).each(function(){o=e.Event((t+"."+n).toLowerCase()),e(this).trigger(o,i),o.isDefaultPrevented()&&(u=!0)}),!u}}},t.plugin=function(n,r){var s=e[n]=function(t,n){this._element=e(t),this.options(n),this._init(),this.create()};return s.fn=s.prototype=e.extend({},t.base(n),r),e.fn[n]=function(t){var r=Array.prototype.slice.call(arguments,1),i=this;return"string"==typeof t?this.each(function(){var s=e(this).data(n);if(!s)return e.error("Cannot call methods on "+n+" prior to initialization; "+'attempted to call method "'+t+'"');if(!e.isFunction(s[t])||"_"===t.charAt(0))return e.error('No such method "'+t+'" for '+n+" instance");var o=s[t].apply(s,r);return o!==s&&o!==void 0?(i=o,!1):void 0}):this.each(function(){var r=e(this).data(n);r instanceof s?r.reload(t):new s(this,t)}),i},s}})(jQuery),function(e,t){"use strict";var n=function(e){return parseFloat(e)||0};e.jCarousel.plugin("jcarousel",{animating:!1,tail:0,inTail:!1,resizeTimer:null,lt:null,vertical:!1,rtl:!1,circular:!1,underflow:!1,_options:{list:function(){return this.element().children().eq(0)},items:function(){return this.list().children()},animation:400,transitions:!1,wrap:null,vertical:null,rtl:null,center:!1},_list:null,_items:null,_target:null,_first:null,_last:null,_visible:null,_fullyvisible:null,_init:function(){var e=this;return this.onWindowResize=function(){e.resizeTimer&&clearTimeout(e.resizeTimer),e.resizeTimer=setTimeout(function(){e.reload()},100)},this},_create:function(){this._reload(),e(t).on("resize.jcarousel",this.onWindowResize)},_destroy:function(){e(t).off("resize.jcarousel",this.onWindowResize)},_reload:function(){this.vertical=this.options("vertical"),null==this.vertical&&(this.vertical=this.list().height()>this.list().width()),this.rtl=this.options("rtl"),null==this.rtl&&(this.rtl=function(t){if("rtl"===(""+t.attr("dir")).toLowerCase())return!0;var n=!1;return t.parents("[dir]").each(function(){return/rtl/i.test(e(this).attr("dir"))?(n=!0,!1):void 0}),n}(this._element)),this.lt=this.vertical?"top":"left",this._items=null;var t=this._target&&this.index(this._target)>=0?this._target:this.closest();this.circular="circular"===this.options("wrap"),this.underflow=!1;var n={left:0,top:0};return t.size()>0&&(this._prepare(t),this.list().find("[data-jcarousel-clone]").remove(),this._items=null,this.underflow=this._fullyvisible.size()>=this.items().size(),this.circular=this.circular&&!this.underflow,n[this.lt]=this._position(t)+"px"),this.move(n),this},list:function(){if(null===this._list){var t=this.options("list");this._list=e.isFunction(t)?t.call(this):this._element.find(t)}return this._list},items:function(){if(null===this._items){var t=this.options("items");this._items=(e.isFunction(t)?t.call(this):this.list().find(t)).not("[data-jcarousel-clone]")}return this._items},index:function(e){return this.items().index(e)},closest:function(){var t,r=this,i=this.list().position()[this.lt],o=e(),u=!1,a=this.vertical?"bottom":this.rtl?"left":"right";return this.rtl&&!this.vertical&&(i=-1*(i+this.list().width()-this.clipping())),this.items().each(function(){if(o=e(this),u)return!1;var f=r.dimension(o);if(i+=f,i>=0){if(t=f-n(o.css("margin-"+a)),!(0>=Math.abs(i)-f+t/2))return!1;u=!0}}),o},target:function(){return this._target},first:function(){return this._first},last:function(){return this._last},visible:function(){return this._visible},fullyvisible:function(){return this._fullyvisible},hasNext:function(){if(!1===this._trigger("hasnext"))return!0;var e=this.options("wrap"),t=this.items().size()-1;return t>=0&&(e&&"first"!==e||t>this.index(this._last)||this.tail&&!this.inTail)?!0:!1},hasPrev:function(){if(!1===this._trigger("hasprev"))return!0;var e=this.options("wrap");return this.items().size()>0&&(e&&"last"!==e||this.index(this._first)>0||this.tail&&this.inTail)?!0:!1},clipping:function(){return this._element["inner"+(this.vertical?"Height":"Width")]()},dimension:function(e){return e["outer"+(this.vertical?"Height":"Width")](!0)},scroll:function(t,r,i){if(this.animating)return this;if(!1===this._trigger("scroll",null,[t,r]))return this;e.isFunction(r)&&(i=r,r=!0);var o=e.jCarousel.parseTarget(t);if(o.relative){var u,a,f,l,c,h,p,d,v=this.items().size()-1,m=Math.abs(o.target),g=this.options("wrap");if(o.target>0){var y=this.index(this._last);if(y>=v&&this.tail)this.inTail?"both"===g||"last"===g?this._scroll(0,r,i):this._scroll(Math.min(this.index(this._target)+m,v),r,i):this._scrollTail(r,i);else if(u=this.index(this._target),this.underflow&&u===v&&("circular"===g||"both"===g||"last"===g)||!this.underflow&&y===v&&("both"===g||"last"===g))this._scroll(0,r,i);else if(f=u+m,this.circular&&f>v){for(d=v,c=this.items().get(-1);f>d++;)c=this.items().eq(0),h=this._visible.index(c)>=0,h&&c.after(c.clone(!0).attr("data-jcarousel-clone",!0)),this.list().append(c),h||(p={},p[this.lt]=this.dimension(c)*(this.rtl?-1:1),this.moveBy(p)),this._items=null;this._scroll(c,r,i)}else this._scroll(Math.min(f,v),r,i)}else if(this.inTail)this._scroll(Math.max(this.index(this._first)-m+1,0),r,i);else if(a=this.index(this._first),u=this.index(this._target),l=this.underflow?u:a,f=l-m,0>=l&&(this.underflow&&"circular"===g||"both"===g||"first"===g))this._scroll(v,r,i);else if(this.circular&&0>f){for(d=f,c=this.items().get(0);0>d++;){c=this.items().eq(-1),h=this._visible.index(c)>=0,h&&c.after(c.clone(!0).attr("data-jcarousel-clone",!0)),this.list().prepend(c),this._items=null;var b=n(this.list().position()[this.lt]),w=this.dimension(c);this.rtl&&!this.vertical?b+=w:b-=w,p={},p[this.lt]=b+"px",this.move(p)}this._scroll(c,r,i)}else this._scroll(Math.max(f,0),r,i)}else this._scroll(o.target,r,i);return this._trigger("scrollend"),this},moveBy:function(e,t){var r=this.list().position();return e.left&&(e.left=r.left+n(e.left)+"px"),e.top&&(e.top=r.top+n(e.top)+"px"),this.move(e,t)},move:function(t,n){n=n||{};var r=this.options("transitions"),i=!!r,s=!!r.transforms,o=!!r.transforms3d,u=n.duration||0,a=this.list();if(!i&&u>0)return a.animate(t,n),void 0;var f=n.complete||e.noop,l={};if(i){var c=a.css(["transitionDuration","transitionTimingFunction","transitionProperty"]),h=f;f=function(){e(this).css(c),h.call(this)},l={transitionDuration:(u>0?u/1e3:0)+"s",transitionTimingFunction:r.easing||n.easing,transitionProperty:u>0?function(){return s||o?"all":t.left?"left":"top"}():"none",transform:"none"}}o?l.transform="translate3d("+(t.left||0)+","+(t.top||0)+",0)":s?l.transform="translate("+(t.left||0)+","+(t.top||0)+")":e.extend(l,t),i&&u>0&&a.one("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd",f),a.css(l),0>=u&&a.each(function(){f.call(this)})},_scroll:function(t,r,i){if(this.animating)return e.isFunction(i)&&i.call(this,!1),this;if("object"!=typeof t?t=this.items().eq(t):t.jquery===void 0&&(t=e(t)),0===t.size())return e.isFunction(i)&&i.call(this,!1),this;this.inTail=!1,this._prepare(t);var o=this._position(t),u=n(this.list().position()[this.lt]);if(o===u)return e.isFunction(i)&&i.call(this,!1),this;var a={};return a[this.lt]=o+"px",this._animate(a,r,i),this},_scrollTail:function(t,n){if(this.animating||!this.tail)return e.isFunction(n)&&n.call(this,!1),this;var r=this.list().position()[this.lt];this.rtl?r+=this.tail:r-=this.tail,this.inTail=!0;var i={};return i[this.lt]=r+"px",this._update({target:this._target.next(),fullyvisible:this._fullyvisible.slice(1).add(this._visible.last())}),this._animate(i,t,n),this},_animate:function(t,n,r){if(r=r||e.noop,!1===this._trigger("animate"))return r.call(this,!1),this;this.animating=!0;var i=this.options("animation"),s=e.proxy(function(){this.animating=!1;var e=this.list().find("[data-jcarousel-clone]");e.size()>0&&(e.remove(),this._reload()),this._trigger("animateend"),r.call(this,!0)},this),o="object"==typeof i?e.extend({},i):{duration:i},u=o.complete||e.noop;return n===!1?o.duration=0:e.fx.speeds[o.duration]!==void 0&&(o.duration=e.fx.speeds[o.duration]),o.complete=function(){s(),u.call(this)},this.move(t,o),this},_prepare:function(t){var r,i,o,u=this.index(t),a=u,f=this.dimension(t),l=this.clipping(),c=this.vertical?"bottom":this.rtl?"left":"right",h=this.options("center"),p={target:t,first:t,last:t,visible:t,fullyvisible:l>=f?t:e()};if(h&&(f/=2,l/=2),l>f)for(;;){if(r=this.items().eq(++a),0===r.size()){if(!this.circular)break;if(r=this.items().eq(0),i=this._visible.index(r)>=0,t.get(0)===r.get(0))break;if(i&&r.after(r.clone(!0).attr("data-jcarousel-clone",!0)),this.list().append(r),!i){var d={};d[this.lt]=this.dimension(r)*(this.rtl?-1:1),this.moveBy(d)}this._items=null}if(f+=this.dimension(r),p.last=r,p.visible=p.visible.add(r),o=n(r.css("margin-"+c)),l>=f-o&&(p.fullyvisible=p.fullyvisible.add(r)),f>=l)break}if(!this.circular&&!h&&l>f)for(a=u;;){if(0>--a)break;if(r=this.items().eq(a),0===r.size())break;if(f+=this.dimension(r),p.first=r,p.visible=p.visible.add(r),o=n(r.css("margin-"+c)),l>=f-o&&(p.fullyvisible=p.fullyvisible.add(r)),f>=l)break}return this._update(p),this.tail=0,h||"circular"===this.options("wrap")||"custom"===this.options("wrap")||this.index(p.last)!==this.items().size()-1||(f-=n(p.last.css("margin-"+c)),f>l&&(this.tail=f-l)),this},_position:function(e){var t=this._first,n=t.position()[this.lt],r=this.options("center"),i=r?this.clipping()/2-this.dimension(t)/2:0;return this.rtl&&!this.vertical?(n-=this.clipping()-this.dimension(t),n+=i):n-=i,!r&&(this.index(e)>this.index(t)||this.inTail)&&this.tail?(n=this.rtl?n-this.tail:n+this.tail,this.inTail=!0):this.inTail=!1,-n},_update:function(t){var n,r=this,i={target:this._target||e(),first:this._first||e(),last:this._last||e(),visible:this._visible||e(),fullyvisible:this._fullyvisible||e()},s=this.index(t.first||i.first)<this.index(i.first),o=function(n){var o=[],u=[];t[n].each(function(){0>i[n].index(this)&&o.push(this)}),i[n].each(function(){0>t[n].index(this)&&u.push(this)}),s?o=o.reverse():u=u.reverse(),r._trigger("item"+n+"in",e(o)),r._trigger("item"+n+"out",e(u)),r["_"+n]=t[n]};for(n in t)o(n);return this}})}(jQuery,window),function(e){"use strict";e.jcarousel.fn.scrollIntoView=function(n,r,i){var s,o=e.jCarousel.parseTarget(n),u=this.index(this._fullyvisible.first()),a=this.index(this._fullyvisible.last());if(s=o.relative?0>o.target?Math.max(0,u+o.target):a+o.target:"object"!=typeof o.target?o.target:this.index(o.target),u>s)return this.scroll(s,r,i);if(s>=u&&a>=s)return e.isFunction(i)&&i.call(this,!1),this;for(var f,l=this.items(),c=this.clipping(),h=this.vertical?"bottom":this.rtl?"left":"right",p=0;;){if(f=l.eq(s),0===f.size())break;if(p+=this.dimension(f),p>=c){var d=parseFloat(f.css("margin-"+h))||0;p-d!==c&&s++;break}if(0>=s)break;s--}return this.scroll(s,r,i)}}(jQuery),function(e){"use strict";e.jCarousel.plugin("jcarouselControl",{_options:{target:"+=1",event:"click",method:"scroll"},_active:null,_init:function(){this.onDestroy=e.proxy(function(){this._destroy(),this.carousel().one("createend.jcarousel",e.proxy(this._create,this))},this),this.onReload=e.proxy(this._reload,this),this.onEvent=e.proxy(function(n){n.preventDefault();var r=this.options("method");e.isFunction(r)?r.call(this):this.carousel().jcarousel(this.options("method"),this.options("target"))},this)},_create:function(){this.carousel().one("destroy.jcarousel",this.onDestroy).on("reloadend.jcarousel scrollend.jcarousel",this.onReload),this._element.on(this.options("event")+".jcarouselcontrol",this.onEvent),this._reload()},_destroy:function(){this._element.off(".jcarouselcontrol",this.onEvent),this.carousel().off("destroy.jcarousel",this.onDestroy).off("reloadend.jcarousel scrollend.jcarousel",this.onReload)},_reload:function(){var n,r=e.jCarousel.parseTarget(this.options("target")),i=this.carousel();if(r.relative)n=i.jcarousel(r.target>0?"hasNext":"hasPrev");else{var s="object"!=typeof r.target?i.jcarousel("items").eq(r.target):r.target;n=i.jcarousel("target").index(s)>=0}return this._active!==n&&(this._trigger(n?"active":"inactive"),this._active=n),this}})}(jQuery),function(e){"use strict";e.jCarousel.plugin("jcarouselPagination",{_options:{perPage:null,item:function(e){return'<a href="#'+e+'">'+e+"</a>"},event:"click",method:"scroll"},_pages:{},_items:{},_currentPage:null,_init:function(){this.onDestroy=e.proxy(function(){this._destroy(),this.carousel().one("createend.jcarousel",e.proxy(this._create,this))},this),this.onReload=e.proxy(this._reload,this),this.onScroll=e.proxy(this._update,this)},_create:function(){this.carousel().one("destroy.jcarousel",this.onDestroy).on("reloadend.jcarousel",this.onReload).on("scrollend.jcarousel",this.onScroll),this._reload()},_destroy:function(){this._clear(),this.carousel().off("destroy.jcarousel",this.onDestroy).off("reloadend.jcarousel",this.onReload).off("scrollend.jcarousel",this.onScroll)},_reload:function(){var n=this.options("perPage");if(this._pages={},this._items={},e.isFunction(n)&&(n=n.call(this)),null==n)this._pages=this._calculatePages();else for(var r,i=parseInt(n,10)||0,s=this.carousel().jcarousel("items"),o=1,u=0;;){if(r=s.eq(u++),0===r.size())break;this._pages[o]=this._pages[o]?this._pages[o].add(r):r,0===u%i&&o++}this._clear();var a=this,f=this.carousel().data("jcarousel"),l=this._element,c=this.options("item");e.each(this._pages,function(n,r){var i=a._items[n]=e(c.call(a,n,r));i.on(a.options("event")+".jcarouselpagination",e.proxy(function(){var e=r.eq(0);if(f.circular){var t=f.index(f.target()),i=f.index(e);parseFloat(n)>parseFloat(a._currentPage)?t>i&&(e="+="+(f.items().size()-t+i)):i>t&&(e="-="+(t+(f.items().size()-i)))}f[this.options("method")](e)},a)),l.append(i)}),this._update()},_update:function(){var n,r=this.carousel().jcarousel("target");e.each(this._pages,function(e,t){return t.each(function(){return r.is(this)?(n=e,!1):void 0}),n?!1:void 0}),this._currentPage!==n&&(this._trigger("inactive",this._items[this._currentPage]),this._trigger("active",this._items[n])),this._currentPage=n},items:function(){return this._items},_clear:function(){this._element.empty(),this._currentPage=null},_calculatePages:function(){for(var e,t=this.carousel().data("jcarousel"),n=t.items(),r=t.clipping(),i=0,s=0,o=1,u={};;){if(e=n.eq(s++),0===e.size())break;u[o]=u[o]?u[o].add(e):e,i+=t.dimension(e),i>=r&&(o++,i=0)}return u}})}(jQuery),function(e){"use strict";e.jCarousel.plugin("jcarouselAutoscroll",{_options:{target:"+=1",interval:3e3,autostart:!0},_timer:null,_init:function(){this.onDestroy=e.proxy(function(){this._destroy(),this.carousel().one("createend.jcarousel",e.proxy(this._create,this))},this),this.onAnimateEnd=e.proxy(this.start,this)},_create:function(){this.carousel().one("destroy.jcarousel",this.onDestroy),this.options("autostart")&&this.start()},_destroy:function(){this.stop(),this.carousel().off("destroy.jcarousel",this.onDestroy)},start:function(){return this.stop(),this.carousel().one("animateend.jcarousel",this.onAnimateEnd),this._timer=setTimeout(e.proxy(function(){this.carousel().jcarousel("scroll",this.options("target"))},this),this.options("interval")),this},stop:function(){return this._timer&&(this._timer=clearTimeout(this._timer)),this.carousel().off("animateend.jcarousel",this.onAnimateEnd),this}})}(jQuery);
(function(e,t,n){typeof define=="function"&&define.amd?define(["jquery"],function(r){return n(r,e,t),r.mobile}):n(e.jQuery,e,t)})(this,document,function(e,t,n,r){(function(e,t){var r={touch:"ontouchend"in n};e.mobile=e.mobile||{},e.mobile.support=e.mobile.support||{},e.extend(e.support,r),e.extend(e.mobile.support,r)})(e),function(e,t,n,r){function i(e){while(e&&typeof e.originalEvent!="undefined")e=e.originalEvent;return e}function s(t,n){var s=t.type,o,u,a,f,l,c,h,p,d;t=e.Event(t),t.type=n,o=t.originalEvent,u=e.event.props,s.search(/^(mouse|click)/)>-1&&(u=L);if(o)for(h=u.length,f;h;)f=u[--h],t[f]=o[f];s.search(/mouse(down|up)|click/)>-1&&!t.which&&(t.which=1);if(s.search(/^touch/)!==-1){a=i(o),s=a.touches,l=a.changedTouches,c=s&&s.length?s[0]:l&&l.length?l[0]:r;if(c)for(p=0,d=C.length;p<d;p++)f=C[p],t[f]=c[f]}return t}function o(t){var n={},r,i;while(t){r=e.data(t,x);for(i in r)r[i]&&(n[i]=n.hasVirtualBinding=!0);t=t.parentNode}return n}function u(t,n){var r;while(t){r=e.data(t,x);if(r&&(!n||r[n]))return t;t=t.parentNode}return null}function a(){B=!1}function f(){B=!0}function l(){q=0,P.length=0,H=!1,f()}function c(){a()}function h(){p(),O=setTimeout(function(){O=0,l()},e.vmouse.resetTimerDuration)}function p(){O&&(clearTimeout(O),O=0)}function d(t,n,r){var i;if(r&&r[t]||!r&&u(n.target,t))i=s(n,t),e(n.target).trigger(i);return i}function v(t){var n=e.data(t.target,T);if(!H&&(!q||q!==n)){var r=d("v"+t.type,t);r&&(r.isDefaultPrevented()&&t.preventDefault(),r.isPropagationStopped()&&t.stopPropagation(),r.isImmediatePropagationStopped()&&t.stopImmediatePropagation())}}function m(t){var n=i(t).touches,r,s;if(n&&n.length===1){r=t.target,s=o(r);if(s.hasVirtualBinding){q=I++,e.data(r,T,q),p(),c(),D=!1;var u=i(t).touches[0];M=u.pageX,_=u.pageY,d("vmouseover",t,s),d("vmousedown",t,s)}}}function g(e){if(B)return;D||d("vmousecancel",e,o(e.target)),D=!0,h()}function y(t){if(B)return;var n=i(t).touches[0],r=D,s=e.vmouse.moveDistanceThreshold,u=o(t.target);D=D||Math.abs(n.pageX-M)>s||Math.abs(n.pageY-_)>s,D&&!r&&d("vmousecancel",t,u),d("vmousemove",t,u),h()}function b(e){if(B)return;f();var t=o(e.target),n;d("vmouseup",e,t);if(!D){var r=d("vclick",e,t);r&&r.isDefaultPrevented()&&(n=i(e).changedTouches[0],P.push({touchID:q,x:n.clientX,y:n.clientY}),H=!0)}d("vmouseout",e,t),D=!1,h()}function w(t){var n=e.data(t,x),r;if(n)for(r in n)if(n[r])return!0;return!1}function E(){}function S(t){var n=t.substr(1);return{setup:function(r,i){w(this)||e.data(this,x,{});var s=e.data(this,x);s[t]=!0,A[t]=(A[t]||0)+1,A[t]===1&&F.bind(n,v),e(this).bind(n,E),j&&(A.touchstart=(A.touchstart||0)+1,A.touchstart===1&&F.bind("touchstart",m).bind("touchend",b).bind("touchmove",y).bind("scroll",g))},teardown:function(r,i){--A[t],A[t]||F.unbind(n,v),j&&(--A.touchstart,A.touchstart||F.unbind("touchstart",m).unbind("touchmove",y).unbind("touchend",b).unbind("scroll",g));var s=e(this),o=e.data(this,x);o&&(o[t]=!1),s.unbind(n,E),w(this)||s.removeData(x)}}}var x="virtualMouseBindings",T="virtualTouchID",N="vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split(" "),C="clientX clientY pageX pageY screenX screenY".split(" "),k=e.event.mouseHooks?e.event.mouseHooks.props:[],L=e.event.props.concat(k),A={},O=0,M=0,_=0,D=!1,P=[],H=!1,B=!1,j="addEventListener"in n,F=e(n),I=1,q=0,R;e.vmouse={moveDistanceThreshold:10,clickDistanceThreshold:10,resetTimerDuration:1500};for(var U=0;U<N.length;U++)e.event.special[N[U]]=S(N[U]);j&&n.addEventListener("click",function(t){var n=P.length,r=t.target,i,s,o,u,a,f;if(n){i=t.clientX,s=t.clientY,R=e.vmouse.clickDistanceThreshold,o=r;while(o){for(u=0;u<n;u++){a=P[u],f=0;if(o===r&&Math.abs(a.x-i)<R&&Math.abs(a.y-s)<R||e.data(o,T)===a.touchID){t.preventDefault(),t.stopPropagation();return}}o=o.parentNode}}},!0)}(e,t,n),function(e,t,r){function i(t,n,r){var i=r.type;r.type=n,e.event.handle.call(t,r),r.type=i}e.each("touchstart touchmove touchend tap taphold swipe swipeleft swiperight scrollstart scrollstop".split(" "),function(t,n){e.fn[n]=function(e){return e?this.bind(n,e):this.trigger(n)},e.attrFn&&(e.attrFn[n]=!0)});var s=e.mobile.support.touch,o="touchmove scroll",u=s?"touchstart":"mousedown",a=s?"touchend":"mouseup",f=s?"touchmove":"mousemove";e.event.special.scrollstart={enabled:!0,setup:function(){function t(e,t){s=t,i(n,s?"scrollstart":"scrollstop",e)}var n=this,r=e(n),s,u;r.bind(o,function(n){if(!e.event.special.scrollstart.enabled)return;s||t(n,!0),clearTimeout(u),u=setTimeout(function(){t(n,!1)},50)})}},e.event.special.tap={tapholdThreshold:750,setup:function(){var t=this,r=e(t);r.bind("vmousedown",function(s){function o(){clearTimeout(h)}function u(){o(),r.unbind("vclick",a).unbind("vmouseup",o),e(n).unbind("vmousecancel",u)}function a(e){u(),f===e.target&&i(t,"tap",e)}if(s.which&&s.which!==1)return!1;var f=s.target,l=s.originalEvent,h;r.bind("vmouseup",o).bind("vclick",a),e(n).bind("vmousecancel",u),h=setTimeout(function(){i(t,"taphold",e.Event("taphold",{target:f}))},e.event.special.tap.tapholdThreshold)})}},e.event.special.swipe={scrollSupressionThreshold:30,durationThreshold:1e3,horizontalDistanceThreshold:30,verticalDistanceThreshold:75,setup:function(){var t=this,n=e(t);n.bind(u,function(t){function i(t){if(!o)return;var n=t.originalEvent.touches?t.originalEvent.touches[0]:t;u={time:(new Date).getTime(),coords:[n.pageX,n.pageY]},Math.abs(o.coords[0]-u.coords[0])>e.event.special.swipe.scrollSupressionThreshold&&t.preventDefault()}var s=t.originalEvent.touches?t.originalEvent.touches[0]:t,o={time:(new Date).getTime(),coords:[s.pageX,s.pageY],origin:e(t.target)},u;n.bind(f,i).one(a,function(t){n.unbind(f,i),o&&u&&u.time-o.time<e.event.special.swipe.durationThreshold&&Math.abs(o.coords[0]-u.coords[0])>e.event.special.swipe.horizontalDistanceThreshold&&Math.abs(o.coords[1]-u.coords[1])<e.event.special.swipe.verticalDistanceThreshold&&o.origin.trigger("swipe").trigger(o.coords[0]>u.coords[0]?"swipeleft":"swiperight"),o=u=r})})}},e.each({scrollstop:"scrollstart",taphold:"tap",swipeleft:"swipe",swiperight:"swipe"},function(t,n){e.event.special[t]={setup:function(){e(this).bind(n,e.noop)}}})}(e,this)});
jQuery(document).ready(function(e){e("#slider_lite").swiperight(function(){e("#slider_lite").carousel("prev")});e("#slider_lite").swipeleft(function(){e("#slider_lite").carousel("next")});e("#slider").swiperight(function(){e("#slider").carousel("prev")});e("#slider").swipeleft(function(){e("#slider").carousel("next")})});
jQuery(document).ready(function(){jQuery("html").click(function(){if(jQuery(".nav-collapse").hasClass("in")){jQuery(".nav-collapse").collapse("toggle")}});jQuery("#navigation .search-query").click(function(e){e.stopPropagation()})});
;
/*!
 * Collapse-O-Matic JavaSctipt v1.5.18
 * http://plugins.twinpictures.de/plugins/collapse-o-matic/
 *
 * Copyright 2015, Twinpictures
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, blend, trade,
 * bake, hack, scramble, difiburlate, digest and/or sell copies of the Software,
 * and to permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
function collapse_init(){jQuery('.force_content_collapse').each(function(index){jQuery(this).css('display','none');});jQuery('.collapseomatic:not(.colomat-close)').each(function(index){var thisid=jQuery(this).attr('id');jQuery('#target-'+thisid).css('display','none');});jQuery('.collapseomatic.colomat-close').each(function(index){var thisid=jQuery(this).attr('id');if(jQuery("#swap-"+thisid).length>0){swapTitle(this,"#swap-"+thisid);}
if(jQuery("#swapexcerpt-"+thisid).length>0){swapTitle("#excerpt-"+thisid,"#swapexcerpt-"+thisid);}});}
function swapTitle(origObj,swapObj){var orightml=jQuery(origObj).html();var swaphtml=jQuery(swapObj).html();jQuery(origObj).html(swaphtml);jQuery(swapObj).html(orightml);if(swaphtml.indexOf("<cufon")!=-1){var trigelem=jQuery(this).get(0).tagName;Cufon.replace(trigelem);}}
function toggleState(obj,id,maptastic,trig_id){if(maptastic&&jQuery('[id^=target][id$='+id+']').hasClass('maptastic')){jQuery('[id^=target][id$='+id+']').removeClass('maptastic');}
if(colomatslideEffect=='slideToggle'){jQuery('[id^=target][id$='+id+']').slideToggle(colomatduration,function(){if(jQuery(this).hasClass('colomat-inline')&&jQuery(this).is(':visible')){jQuery(this).css('display','inline');}
if(trig_id&&jQuery('#'+trig_id).is('.find-me.colomat-close')){offset_top=jQuery('#find-'+trig_id).attr('name');if(!offset_top){target_offset=jQuery('#'+trig_id).offset();offset_top=target_offset.top;}
jQuery('html, body').animate({scrollTop:offset_top},500);}});}
else if(colomatslideEffect=='slideFade'){jQuery('[id^=target][id$='+id+']').animate({height:"toggle",opacity:"toggle"},colomatduration,function(){if(jQuery(this).hasClass('colomat-inline')&&jQuery(this).is(':visible')){jQuery(this).css('display','inline');}
if(trig_id&&jQuery('#'+trig_id).is('.find-me.colomat-close')){offset_top=jQuery('#find-'+trig_id).attr('name');if(!offset_top){target_offset=jQuery('#'+trig_id).offset();offset_top=target_offset.top;}
jQuery('html, body').animate({scrollTop:offset_top},500);}});}
if(jQuery('#'+id).hasClass('colomat-close')){jQuery('.google-maps-builder').each(function(index){map=jQuery(".google-maps-builder")[index];google.maps.event.trigger(map,'resize');});}}
function closeOtherGroups(rel){jQuery('.collapseomatic[rel!="'+rel+'"]').each(function(index){if(jQuery(this).hasClass('colomat-expand-only')&&jQuery(this).hasClass('colomat-close')){return;}
if(jQuery(this).hasClass('colomat-close')&&jQuery(this).attr('rel')!==undefined){jQuery(this).removeClass('colomat-close');var id=jQuery(this).attr('id');jQuery('#parent-'+id).removeClass('colomat-parent-highlight');if(jQuery("#swap-"+id).length>0){swapTitle(this,"#swap-"+id);}
if(jQuery("#swapexcerpt-"+id).length>0){swapTitle("#exerpt-"+id,"#swapexcerpt-"+id);}
toggleState(jQuery(this),id,false,false);var ancestors=jQuery('.collapseomatic','#target-'+id);ancestors.each(function(index){jQuery(this).removeClass('colomat-close');var thisid=jQuery(this).attr('id');jQuery('#target-'+thisid).css('display','none');})}});}
function closeOtherMembers(rel,id){jQuery('.collapseomatic[rel="'+rel+'"]').each(function(index){if(jQuery(this).hasClass('colomat-expand-only')&&jQuery(this).hasClass('colomat-close')){return;}
if(jQuery(this).attr('id')!=id&&jQuery(this).hasClass('colomat-close')&&jQuery(this).attr('rel')!==undefined){jQuery(this).removeClass('colomat-close');var thisid=jQuery(this).attr('id');jQuery('#parent-'+thisid).removeClass('colomat-parent-highlight');if(jQuery("#swap-"+thisid).length>0){swapTitle(this,"#swap-"+thisid);}
if(jQuery("#swapexcerpt-"+thisid).length>0){swapTitle("#excerpt-"+thisid,"#swapexcerpt-"+thisid);}
if(!jQuery(this).hasClass('colomat-close')&&jQuery(this).hasClass('snap-shut')){jQuery('#target-'+thisid).hide();}
else{toggleState(jQuery(this),thisid,false,false);}
var ancestors=jQuery('.collapseomatic','#target-'+id);ancestors.each(function(index){if(jQuery(this).hasClass('colomat-expand-only')&&jQuery(this).hasClass('colomat-close')){return;}
var pre_id=id.split('-');if(pre_id[0].indexOf('extra')!='-1'){pre=pre_id.splice(0,1);id=pre_id.join('-');if(jQuery(this).hasClass('scroll-to-trigger')){var target_offset=jQuery('#'+id).offset();offset_top=target_offset.top;}
if(jQuery('#'+id).hasClass('scroll-to-trigger')){offset_top=jQuery('#scrollonclose-'+id).attr('name');if(offset_top=='auto'){var target_offset=jQuery('#'+id).offset();offset_top=target_offset.top;}}
jQuery('#'+id).toggleClass('colomat-close');jQuery('[id^=extra][id$='+id+']').toggleClass('colomat-close');}
if(jQuery(this).attr('id').indexOf('bot-')=='-1'){jQuery(this).removeClass('colomat-close');var thisid=jQuery(this).attr('id');if(jQuery("#swap-"+thisid).length>0){swapTitle(this,"#swap-"+thisid);}
if(jQuery("#swapexcerpt-"+thisid).length>0){swapTitle("#excerpt-"+thisid,"#swapexcerpt-"+thisid);}
jQuery('#target-'+thisid).css('display','none');}})}});}
function colomat_expandall(loop_items){if(!loop_items){loop_items=jQuery('.collapseomatic:not(.colomat-close)');}
loop_items.each(function(index){jQuery(this).addClass('colomat-close');var thisid=jQuery(this).attr('id');jQuery('#parent-'+thisid).addClass('colomat-parent-highlight');if(jQuery("#swap-"+thisid).length>0){swapTitle(this,"#swap-"+thisid);}
if(jQuery("#swapexcerpt-"+thisid).length>0){swapTitle("#excerpt-"+thisid,"#swapexcerpt-"+thisid);}
toggleState(jQuery(this),thisid,false,false);});}
function colomat_collapseall(loop_items){if(!loop_items){loop_items=jQuery('.collapseomatic.colomat-close');}
loop_items.each(function(index){if(jQuery(this).hasClass('colomat-expand-only')&&jQuery(this).hasClass('colomat-close')){return;}
jQuery(this).removeClass('colomat-close');var thisid=jQuery(this).attr('id');jQuery('#parent-'+thisid).removeClass('colomat-parent-highlight');if(jQuery("#swap-"+thisid).length>0){swapTitle(this,"#swap-"+thisid);}
if(jQuery("#swapexcerpt-"+thisid).length>0){swapTitle("#excerpt-"+thisid,"#swapexcerpt-"+thisid);}
toggleState(jQuery(this),thisid,false,false);});}
jQuery(document).ready(function(){collapse_init();jQuery(document.body).on('post-load',function(){collapse_init();});jQuery('.content_collapse_wrapper').each(function(index){jQuery(this).css('display','inline');});jQuery(document).on({mouseenter:function(){jQuery(this).addClass('colomat-hover');},mouseleave:function(){jQuery(this).removeClass('colomat-hover');},focusin:function(){jQuery(this).addClass('colomat-hover');},focusout:function(){jQuery(this).removeClass('colomat-hover');}},'.collapseomatic');jQuery(document).on('keypress','.collapseomatic',function(event){if(event.which==13){event.currentTarget.click();};});jQuery(document).on('click','.collapseomatic',function(event){var offset_top;if(jQuery(this).hasClass('colomat-expand-only')&&jQuery(this).hasClass('colomat-close')){return;}
var id=jQuery(this).attr('id');if(jQuery(this).hasClass('colomat-close')&&jQuery(this).hasClass('scroll-to-trigger')){offset_top=jQuery('#scrollonclose-'+id).attr('name');if(offset_top=='auto'){var target_offset=jQuery('#'+id).offset();offset_top=target_offset.top;}}
var id_arr=id.split('-');if(id_arr[0].indexOf('extra')!='-1'){pre=id_arr.splice(0,1);id=id_arr.join('-');if(jQuery(this).hasClass('scroll-to-trigger')){var target_offset=jQuery('#'+id).offset();offset_top=target_offset.top;}
if(jQuery('#'+id).hasClass('scroll-to-trigger')){offset_top=jQuery('#scrollonclose-'+id).attr('name');if(offset_top=='auto'){var target_offset=jQuery('#'+id).offset();offset_top=target_offset.top;}}
jQuery('#'+id).toggleClass('colomat-close');jQuery('[id^=extra][id$='+id+']').toggleClass('colomat-close');}
else if(id.indexOf('bot-')!='-1'){id=id.substr(4);jQuery('#'+id).toggleClass('colomat-close');if(jQuery(this).hasClass('scroll-to-trigger')){var target_offset=jQuery('#'+id).offset();offset_top=target_offset.top;}
if(jQuery('#'+id).hasClass('scroll-to-trigger')){offset_top=jQuery('#scrollonclose-'+id).attr('name');if(offset_top=='auto'){var target_offset=jQuery('#'+id).offset();offset_top=target_offset.top;}}}
else{jQuery(this).toggleClass('colomat-close');jQuery('[id^=extra][id$='+id+']').toggleClass('colomat-close');}
if(jQuery("#swap-"+id).length>0){swapTitle(jQuery('#'+id),"#swap-"+id);}
if(jQuery("#swapexcerpt-"+id).length>0){swapTitle("#excerpt-"+id,"#swapexcerpt-"+id);}
jQuery(this).addClass('colomat-visited');var parentID='parent-'+id;jQuery('#'+parentID).toggleClass('colomat-parent-highlight');if(!jQuery(this).hasClass('colomat-close')&&jQuery(this).hasClass('snap-shut')){jQuery('#target-'+id).hide();}
else{toggleState(jQuery(this),id,true,id);}
if(jQuery(this).attr('rel')!==undefined){var rel=jQuery(this).attr('rel');if(rel.indexOf('-highlander')!='-1'){closeOtherMembers(rel,id);}
else{closeOtherGroups(rel);}}
if(offset_top){jQuery('html, body').animate({scrollTop:offset_top},500);}});jQuery(document).on('click','.expandall',function(event){if(jQuery(this).attr('rel')!==undefined){var rel=jQuery(this).attr('rel');var loop_items=jQuery('.collapseomatic:not(.colomat-close)[rel="'+rel+'"]');}
else{var loop_items=jQuery('.collapseomatic:not(.colomat-close)');}
colomat_expandall(loop_items);});jQuery(document).on('click','.collapseall',function(event){if(jQuery(this).attr('rel')!==undefined){var rel=jQuery(this).attr('rel');var loop_items=jQuery('.collapseomatic.colomat-close[rel="'+rel+'"]');}
else{var loop_items=jQuery('.collapseomatic.colomat-close');}
colomat_collapseall(loop_items);});var fullurl=document.location.toString();if(fullurl.match('#(?!\!)')){var anchor_arr=fullurl.split(/#(?!\!)/);if(anchor_arr.length>1){junk=anchor_arr.splice(0,1);anchor=anchor_arr.join('#');}
else{anchor=anchor_arr[0];}
if(jQuery('#'+anchor).length){if(!jQuery('#'+anchor).hasClass('colomat-close')){jQuery('#'+anchor).click();}
jQuery('#'+anchor).parents('.collapseomatic_content').each(function(index){parent_arr=jQuery(this).attr('id').split('-');junk=parent_arr.splice(0,1);parent=parent_arr.join('-');jQuery('#'+parent).click();})
if(typeof colomatoffset!=='undefined'){var anchor_offset=jQuery('#'+anchor).offset();colomatoffset=colomatoffset+anchor_offset.top;jQuery('html, body').animate({scrollTop:colomatoffset},50);}}}
jQuery(document).on('click','a.expandanchor',function(event){var fullurl=jQuery(this).attr('href');if(fullurl.match('#(?!\!)')){var anchor_arr=fullurl.split(/#(?!\!)/);if(anchor_arr.length>1){junk=anchor_arr.splice(0,1);anchor=anchor_arr.join('#');}
else{anchor=anchor_arr[0];}
if(jQuery('#'+anchor).length){if(!jQuery('#'+anchor).hasClass('colomat-close')){jQuery('#'+anchor).click();}
jQuery('#'+anchor).parents('.collapseomatic_content').each(function(index){parent_arr=jQuery(this).attr('id').split('-');junk=parent_arr.splice(0,1);parent=parent_arr.join('-');if(!jQuery('#'+parent).hasClass('colomat-close')){jQuery('#'+parent).click();}})}}});jQuery(document).on('click','a.colomat-nolink',function(event){event.preventDefault();});});
function q2w3_sidebar_init(){for(var a=0;a<q2w3_sidebar_options.length;a++)q2w3_sidebar(q2w3_sidebar_options[a]);jQuery(window).on("resize",function(){for(var a=0;a<q2w3_sidebar_options.length;a++)q2w3_sidebar(q2w3_sidebar_options[a])});var b=function(){for(var a=["WebKit","Moz","O","Ms",""],b=0;b<a.length;b++)if(a[b]+"MutationObserver"in window)return window[a[b]+"MutationObserver"];return!1}();if(0==q2w3_sidebar_options[0].disable_mo_api&&b){q2w3Refresh=!1;var c=new b(function(a){a.forEach(function(a){q2w3_exclude_mutations_array(q2w3_sidebar_options).indexOf(a.target.id)==-1&&a.target.className.indexOf("q2w3-fixed-widget-container")==-1&&(q2w3Refresh=!0)})});c.observe(document.body,{childList:!0,attributes:!0,attributeFilter:["style","class"],subtree:!0}),setInterval(function(){if(q2w3Refresh){for(var a=0;a<q2w3_sidebar_options.length;a++)q2w3_sidebar(q2w3_sidebar_options[a]);q2w3Refresh=!1}},300)}else console.log("MutationObserver not supported or disabled!"),q2w3_sidebar_options[0].refresh_interval>0&&setInterval(function(){for(var a=0;a<q2w3_sidebar_options.length;a++)q2w3_sidebar(q2w3_sidebar_options[a])},q2w3_sidebar_options[0].refresh_interval)}function q2w3_exclude_mutations_array(a){for(var b=new Array,c=0;c<a.length;c++)if(a[c].widgets.length>0)for(var d=0;d<a[c].widgets.length;d++)b.push(a[c].widgets[d]),b.push(a[c].widgets[d]+"_clone");return b}function q2w3_sidebar(a){function b(){}function j(b){var c=b.offset_top-b.fixed_margin_top,f=e-a.margin_bottom;a.stop_id&&jQuery("#"+a.stop_id).length&&(f=jQuery("#"+a.stop_id).offset().top-a.margin_bottom);var g;g=a.width_inherit?"inherit":b.obj.css("width");var h=!1,i=!1,j=!1;jQuery(window).on("scroll."+a.sidebar,function(e){if(jQuery(window).width()<=a.screen_max_width||jQuery(window).height()<=a.screen_max_height)j||(b.obj.css("position",""),b.obj.css("top",""),b.obj.css("bottom",""),b.obj.css("width",""),b.obj.css("margin",""),b.obj.css("padding",""),widget_obj.parent().css("height",""),jQuery("#"+b.clone_id).length>0&&jQuery("#"+b.clone_id).remove(),j=!0,h=!1,i=!1);else{var k=jQuery(this).scrollTop();k+b.fixed_margin_bottom>=f?(i||(b.obj.css("position","fixed"),b.obj.css("top",""),b.obj.css("width",g),jQuery("#"+b.clone_id).length<=0&&b.obj.before(b.clone),i=!0,h=!1,j=!1),b.obj.css("bottom",k+d+b.next_widgets_height-f)):k>=c?h||(b.obj.css("position","fixed"),b.obj.css("top",b.fixed_margin_top),b.obj.css("bottom",""),b.obj.css("width",g),jQuery("#"+b.clone_id).length<=0&&b.obj.before(b.clone),h=!0,i=!1,j=!1):j||(b.obj.css("position",""),b.obj.css("top",""),b.obj.css("bottom",""),b.obj.css("width",""),jQuery("#"+b.clone_id).length>0&&jQuery("#"+b.clone_id).remove(),j=!0,h=!1,i=!1)}}).trigger("scroll."+a.sidebar)}if(!a)return!1;if(!a.widgets)return!1;if(a.widgets.length<1)return!1;a.sidebar||(a.sidebar="q2w3-default-sidebar");var c=new Array,d=jQuery(window).height(),e=jQuery(document).height(),f=a.margin_top;jQuery("#wpadminbar").length&&(f=a.margin_top+jQuery("#wpadminbar").height()),jQuery(".q2w3-widget-clone-"+a.sidebar).remove();for(var g=0;g<a.widgets.length;g++)widget_obj=jQuery("#"+a.widgets[g]),widget_obj.css("position",""),widget_obj.attr("id")?(c[g]=new b,c[g].obj=widget_obj,c[g].clone=widget_obj.clone(),c[g].clone.children().remove(),c[g].clone_id=widget_obj.attr("id")+"_clone",c[g].clone.addClass("q2w3-widget-clone-"+a.sidebar),c[g].clone.attr("id",c[g].clone_id),c[g].clone.css("height",widget_obj.height()),c[g].clone.css("visibility","hidden"),c[g].offset_top=widget_obj.offset().top,c[g].fixed_margin_top=f,c[g].height=widget_obj.outerHeight(!0),c[g].fixed_margin_bottom=f+c[g].height,f+=c[g].height):c[g]=!1;for(var i,h=0,g=c.length-1;g>=0;g--)c[g]&&(c[g].next_widgets_height=h,c[g].fixed_margin_bottom+=h,h+=c[g].height,i||(i=widget_obj.parent(),i.addClass("q2w3-fixed-widget-container"),i.css("height",""),i.height(i.height())));jQuery(window).off("scroll."+a.sidebar);for(var g=0;g<c.length;g++)c[g]&&j(c[g])}"undefined"!=typeof q2w3_sidebar_options&&q2w3_sidebar_options.length>0?window.jQuery?q2w3_sidebar_options[0].window_load_hook?jQuery(window).load(q2w3_sidebar_init()):jQuery(document).ready(q2w3_sidebar_init()):console.log("jQuery is not loaded!"):console.log("q2w3_sidebar_options not found!");
(function(e,t,n){t.fn.touchwipe=function(e){var n={min_move_x:20,min_move_y:20,wipeLeft:function(){},wipeRight:function(){},wipeUp:function(){},wipeDown:function(){},preventDefaultEvents:true};if(e)t.extend(n,e);this.each(function(){function i(){this.removeEventListener("touchmove",s);e=null;r=false}function s(s){if(n.preventDefaultEvents){s.preventDefault()}if(r){var o=s.touches[0].pageX;var u=s.touches[0].pageY;var a=e-o;var f=t-u;if(Math.abs(a)>=n.min_move_x){i();if(a>0){n.wipeLeft()}else{n.wipeRight()}}else if(Math.abs(f)>=n.min_move_y){i();if(f>0){n.wipeDown()}else{n.wipeUp()}}}}function o(n){if(n.touches.length==1){e=n.touches[0].pageX;t=n.touches[0].pageY;r=true;this.addEventListener("touchmove",s,false)}}var e;var t;var r=false;if("ontouchstart"in document.documentElement){this.addEventListener("touchstart",o,false)}});return this};t.elastislide=function(e,n){this.$el=t(n);this._init(e)};t.elastislide.defaults={speed:450,easing:"",imageW:190,margin:3,border:2,minItems:1,current:0,onClick:function(){return false}};t.elastislide.prototype={_init:function(e){this.options=t.extend(true,{},t.elastislide.defaults,e);this.$slider=this.$el.find("ul");this.$items=this.$slider.children("li");this.itemsCount=this.$items.length;this.$esCarousel=this.$slider.parent();this._validateOptions();this._configure();this._addControls();this._initEvents();this.$slider.show();this._slideToCurrent(false)},_validateOptions:function(){if(this.options.speed<0)this.options.speed=450;if(this.options.margin<0)this.options.margin=4;if(this.options.border<0)this.options.border=1;if(this.options.minItems<1||this.options.minItems>this.itemsCount)this.options.minItems=1;if(this.options.current>this.itemsCount-1)this.options.current=0},_configure:function(){this.current=this.options.current;this.visibleWidth=this.$esCarousel.width();if(this.visibleWidth<this.options.minItems*(this.options.imageW+2*this.options.border)+(this.options.minItems-1)*this.options.margin){this._setDim((this.visibleWidth-(this.options.minItems-1)*this.options.margin)/this.options.minItems);this._setCurrentValues();this.fitCount=this.options.minItems}else{this._setDim();this._setCurrentValues()}this.$slider.css({width:this.sliderW})},_setDim:function(e){this.$items.css({marginRight:this.options.margin,width:e?e:this.options.imageW+2*this.options.border}).children("a").css({borderWidth:this.options.border})},_setCurrentValues:function(){this.itemW=this.$items.outerWidth(true);this.sliderW=this.itemW*this.itemsCount;this.visibleWidth=this.$esCarousel.width();this.fitCount=Math.floor(this.visibleWidth/this.itemW)},_addControls:function(){this.$navNext=t('<span class="es-nav-next">Next</span>');this.$navPrev=t('<span class="es-nav-prev">Previous</span>');t('<div class="es-nav"/>').append(this.$navPrev).append(this.$navNext).appendTo(this.$el)},_toggleControls:function(e,t){if(e&&t){if(t===1)e==="right"?this.$navNext.show():this.$navPrev.show();else e==="right"?this.$navNext.hide():this.$navPrev.hide()}else if(this.current===this.itemsCount-1||this.fitCount>=this.itemsCount)this.$navNext.hide()},_initEvents:function(){var n=this;t(e).bind("resize.elastislide",function(e){n._setCurrentValues();if(n.visibleWidth<n.options.minItems*(n.options.imageW+2*n.options.border)+(n.options.minItems-1)*n.options.margin){n._setDim((n.visibleWidth-(n.options.minItems-1)*n.options.margin)/n.options.minItems);n._setCurrentValues();n.fitCount=n.options.minItems}else{n._setDim();n._setCurrentValues()}n.$slider.css({width:n.sliderW+10});clearTimeout(n.resetTimeout);n.resetTimeout=setTimeout(function(){n._slideToCurrent()},200)});this.$navNext.bind("click.elastislide",function(e){n._slide("right")});this.$navPrev.bind("click.elastislide",function(e){n._slide("left")});this.$items.bind("click.elastislide",function(e){n.options.onClick(t(this))});n.$slider.touchwipe({wipeLeft:function(){n._slide("right")},wipeRight:function(){n._slide("left")}})},_slide:function(e,r,i,s){if(this.$slider.is(":animated"))return false;var o=parseFloat(this.$slider.css("margin-left"));if(r===n){var u=this.fitCount*this.itemW,r;if(u<0)return false;if(e==="right"&&this.sliderW-(Math.abs(o)+u)<this.visibleWidth){u=this.sliderW-(Math.abs(o)+this.visibleWidth)-this.options.margin;this._toggleControls("right",-1);this._toggleControls("left",1)}else if(e==="left"&&Math.abs(o)-u<0){u=Math.abs(o);this._toggleControls("left",-1);this._toggleControls("right",1)}else{var a;e==="right"?a=Math.abs(o)+this.options.margin+Math.abs(u):a=Math.abs(o)-this.options.margin-Math.abs(u);if(a>0)this._toggleControls("left",1);else this._toggleControls("left",-1);if(a<this.sliderW-this.visibleWidth)this._toggleControls("right",1);else this._toggleControls("right",-1)}e==="right"?r="-="+u:r="+="+u}else{var a=Math.abs(r);if(Math.max(this.sliderW,this.visibleWidth)-a<this.visibleWidth){r=-(Math.max(this.sliderW,this.visibleWidth)-this.visibleWidth);if(r!==0)r+=this.options.margin;this._toggleControls("right",-1);a=Math.abs(r)}if(a>0)this._toggleControls("left",1);else this._toggleControls("left",-1);if(Math.max(this.sliderW,this.visibleWidth)-this.visibleWidth>a+this.options.margin)this._toggleControls("right",1);else this._toggleControls("right",-1)}t.fn.applyStyle=i===n?t.fn.animate:t.fn.css;var f={marginLeft:r};var l=this;this.$slider.applyStyle(f,t.extend(true,[],{duration:this.options.speed,easing:this.options.easing,complete:function(){if(s)s.call()}}))},_slideToCurrent:function(e){var t=this.current*this.itemW;this._slide("",-t,e)},add:function(e,t){this.$items=this.$items.add(e);this.itemsCount=this.$items.length;this._setDim();this._setCurrentValues();this.$slider.css({width:this.sliderW});this._slideToCurrent();if(t)t.call(e)},destroy:function(e){this._destroy(e)},_destroy:function(n){this.$el.unbind(".elastislide").removeData("elastislide");t(e).unbind(".elastislide");if(n)n.call()}};var r=function(e){if(this.console){console.error(e)}};t.fn.elastislide=function(e){if(typeof e==="string"){var n=Array.prototype.slice.call(arguments,1);this.each(function(){var i=t.data(this,"elastislide");if(!i){r("cannot call methods on elastislide prior to initialization; "+"attempted to call method '"+e+"'");return}if(!t.isFunction(i[e])||e.charAt(0)==="_"){r("no such method '"+e+"' for elastislide instance");return}i[e].apply(i,n)})}else{this.each(function(){var n=t.data(this,"elastislide");if(!n){t.data(this,"elastislide",new t.elastislide(e,this))}})}return this}})(window,jQuery);
function mycarousel_initCallback(e){e.buttonNext.bind("click",function(){e.startAuto(0)});e.buttonPrev.bind("click",function(){e.startAuto(0)});e.clip.hover(function(){e.stopAuto()},function(){e.startAuto()})}jQuery(window).ready(function(e){if(e(window).width()>767){setTimeout(function(){e("#boxes_container .boxes").each(function(){e(this).children(".box").css("height",e(this).height()-20)})},500)}});jQuery(document).ready(function(){jQuery("#mycarousel").jcarousel({vertical:true,auto:2,wrap:"last",initCallback:mycarousel_initCallback})});jQuery(document).ready(function(){jQuery("#featured_post ul li:first").show();jQuery("#featured_list ul li").click(function(e){var t=jQuery(this).attr("id");jQuery("#featured_post li").css("display","none");jQuery("#featured_post li."+t).fadeIn("slow")})});jQuery(document).ready(function(e){e("#carousel").elastislide({imageW:140,margin:20,minItems:2});e(window).triggerHandler("resize.elastislide");e("#carousel").elastislide({imageW:140});e(window).triggerHandler("resize.elastislide")});
!function (a) {
	a(function () {
		a.support.transition = (function () {
			var b = (function () {
				var e = document.createElement("bootstrap"), d = {WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend"}, c;
				for (c in d) {
					if (e.style[c] !== undefined) {
						return d[c]
					}
				}
			}());
			return b && {end: b}
		})()
	})
}(window.jQuery);
!function (d) {
	var c = '[data-dismiss="alert"]', b = function (e) {
		d(e).on("click", c, this.close)
	};
	b.prototype.close = function (j) {
		var i = d(this), g = i.attr("data-target"), h;
		if (!g) {
			g = i.attr("href");
			g = g && g.replace(/.*(?=#[^\s]*$)/, "")
		}
		h = d(g);
		j && j.preventDefault();
		h.length || (h = i.hasClass("alert") ? i : i.parent());
		h.trigger(j = d.Event("close"));
		if (j.isDefaultPrevented()) {
			return
		}
		h.removeClass("in");
		function f() {
			h.trigger("closed").remove()
		}
		d.support.transition && h.hasClass("fade") ? h.on(d.support.transition.end, f) : f()
	};
	var a = d.fn.alert;
	d.fn.alert = function (e) {
		return this.each(function () {
			var g = d(this), f = g.data("alert");
			if (!f) {
				g.data("alert", (f = new b(this)))
			}
			if (typeof e == "string") {
				f[e].call(g)
			}
		})
	};
	d.fn.alert.Constructor = b;
	d.fn.alert.noConflict = function () {
		d.fn.alert = a;
		return this
	};
	d(document).on("click.alert.data-api", c, b.prototype.close)
}(window.jQuery);
!function (c) {
	var b = function (e, d) {
		this.$element = c(e);
		this.options = c.extend({}, c.fn.button.defaults, d)
	};
	b.prototype.setState = function (g) {
		var i = "disabled", e = this.$element, f = e.data(), h = e.is("input") ? "val" : "html";
		g = g + "Text";
		f.resetText || e.data("resetText", e[h]());
		e[h](f[g] || this.options[g]);
		setTimeout(function () {
			g == "loadingText" ? e.addClass(i).attr(i, i) : e.removeClass(i).removeAttr(i)
		}, 0)
	};
	b.prototype.toggle = function () {
		var d = this.$element.closest('[data-toggle="buttons-radio"]');
		d && d.find(".active").removeClass("active");
		this.$element.toggleClass("active")
	};
	var a = c.fn.button;
	c.fn.button = function (d) {
		return this.each(function () {
			var g = c(this), f = g.data("button"), e = typeof d == "object" && d;
			if (!f) {
				g.data("button", (f = new b(this, e)))
			}
			if (d == "toggle") {
				f.toggle()
			} else {
				if (d) {
					f.setState(d)
				}
			}
		})
	};
	c.fn.button.defaults = {loadingText: "loading..."};
	c.fn.button.Constructor = b;
	c.fn.button.noConflict = function () {
		c.fn.button = a;
		return this
	};
	c(document).on("click.button.data-api", "[data-toggle^=button]", function (f) {
		var d = c(f.target);
		if (!d.hasClass("btn")) {
			d = d.closest(".btn")
		}
		d.button("toggle")
	})
}(window.jQuery);
!function (b) {
	var c = function (e, d) {
		this.$element = b(e);
		this.options = d;
		this.options.pause == "hover" && this.$element.on("mouseenter", b.proxy(this.pause, this)).on("mouseleave", b.proxy(this.cycle, this))
	};
	c.prototype = {cycle: function (d) {
		if (!d) {
			this.paused = false
		}
		this.options.interval && !this.paused && (this.interval = setInterval(b.proxy(this.next, this), this.options.interval));
		return this
	}, to: function (h) {
		var d = this.$element.find(".item.active"), e = d.parent().children(), f = e.index(d), g = this;
		if (h > (e.length - 1) || h < 0) {
			return
		}
		if (this.sliding) {
			return this.$element.one("slid", function () {
				g.to(h)
			})
		}
		if (f == h) {
			return this.pause().cycle()
		}
		return this.slide(h > f ? "next" : "prev", b(e[h]))
	}, pause: function (d) {
		if (!d) {
			this.paused = true
		}
		if (this.$element.find(".next, .prev").length && b.support.transition.end) {
			this.$element.trigger(b.support.transition.end);
			this.cycle()
		}
		clearInterval(this.interval);
		this.interval = null;
		return this
	}, next: function () {
		if (this.sliding) {
			return
		}
		return this.slide("next")
	}, prev: function () {
		if (this.sliding) {
			return
		}
		return this.slide("prev")
	}, slide: function (k, f) {
		if (!b.support.transition && this.$element.hasClass("slide")) {
			this.$element.find(".item").stop(true, true)
		}
		var m = this.$element.find(".item.active"), d = f || m[k](), j = this.interval, l = k == "next" ? "left" : "right", g = k == "next" ? "first" : "last", h = this, i;
		this.sliding = true;
		j && this.pause();
		d = d.length ? d : this.$element.find(".item")[g]();
		i = b.Event("slide", {relatedTarget: d[0]});
		if (d.hasClass("active")) {
			return
		}
		if (b.support.transition && this.$element.hasClass("slide")) {
			this.$element.trigger(i);
			if (i.isDefaultPrevented()) {
				return
			}
			d.addClass(k);
			d[0].offsetWidth;
			m.addClass(l);
			d.addClass(l);
			this.$element.one(b.support.transition.end, function () {
				d.removeClass([k, l].join(" ")).addClass("active");
				m.removeClass(["active", l].join(" "));
				h.sliding = false;
				setTimeout(function () {
					h.$element.trigger("slid")
				}, 0)
			})
		} else {
			if (!b.support.transition && this.$element.hasClass("slide")) {
				this.$element.trigger(i);
				if (i.isDefaultPrevented()) {
					return
				}
				m.animate({left: (l == "right" ? "100%" : "-100%")}, 600, function () {
					m.removeClass("active");
					h.sliding = false;
					setTimeout(function () {
						h.$element.trigger("slid")
					}, 0)
				});
				d.addClass(k).css({left: (l == "right" ? "-100%" : "100%")}).animate({left: "0"}, 600, function () {
					d.removeClass(k).addClass("active")
				})
			} else {
				this.$element.trigger(i);
				if (i.isDefaultPrevented()) {
					return
				}
				m.removeClass("active");
				d.addClass("active");
				this.sliding = false;
				this.$element.trigger("slid")
			}
		}
		j && this.cycle();
		return this
	}};
	var a = b.fn.carousel;
	b.fn.carousel = function (d) {
		return this.each(function () {
			var h = b(this), g = h.data("carousel"), e = b.extend({}, b.fn.carousel.defaults, typeof d == "object" && d), f = typeof d == "string" ? d : e.slide;
			if (!g) {
				h.data("carousel", (g = new c(this, e)))
			}
			if (typeof d == "number") {
				g.to(d)
			} else {
				if (f) {
					g[f]()
				} else {
					if (e.interval) {
						g.cycle()
					}
				}
			}
		})
	};
	b.fn.carousel.defaults = {interval: 5000, pause: "hover"};
	b.fn.carousel.Constructor = c;
	b.fn.carousel.noConflict = function () {
		b.fn.carousel = a;
		return this
	};
	b(document).on("click.carousel.data-api", "[data-slide]", function (i) {
		var h = b(this), f, d = b(h.attr("data-target") || (f = h.attr("href")) && f.replace(/.*(?=#[^\s]+$)/, "")), g = b.extend({}, d.data(), h.data());
		d.carousel(g);
		i.preventDefault()
	})
}(window.jQuery);
!function (b) {
	var c = function (e, d) {
		this.$element = b(e);
		this.options = b.extend({}, b.fn.collapse.defaults, d);
		if (this.options.parent) {
			this.$parent = b(this.options.parent)
		}
		this.options.toggle && this.toggle()
	};
	c.prototype = {constructor: c, dimension: function () {
		var d = this.$element.hasClass("width");
		return d ? "width" : "height"
	}, show: function () {
		var g, d, f, e;
		if (this.transitioning) {
			return
		}
		g = this.dimension();
		d = b.camelCase(["scroll", g].join("-"));
		f = this.$parent && this.$parent.find("> .accordion-group > .in");
		if (f && f.length) {
			e = f.data("collapse");
			if (e && e.transitioning) {
				return
			}
			f.collapse("hide");
			e || f.data("collapse", null)
		}
		this.$element[g](0);
		this.transition("addClass", b.Event("show"), "shown");
		b.support.transition && this.$element[g](this.$element[0][d])
	}, hide: function () {
		var d;
		if (this.transitioning) {
			return
		}
		d = this.dimension();
		this.reset(this.$element[d]());
		this.transition("removeClass", b.Event("hide"), "hidden");
		this.$element[d](0)
	}, reset: function (d) {
		var e = this.dimension();
		this.$element.removeClass("collapse")[e](d || "auto")[0].offsetWidth;
		this.$element[d !== null ? "addClass" : "removeClass"]("collapse");
		return this
	}, transition: function (h, e, f) {
		var g = this, d = function () {
			if (e.type == "show") {
				g.reset()
			}
			g.transitioning = 0;
			g.$element.trigger(f)
		};
		this.$element.trigger(e);
		if (e.isDefaultPrevented()) {
			return
		}
		this.transitioning = 1;
		this.$element[h]("in");
		b.support.transition && this.$element.hasClass("collapse") ? this.$element.one(b.support.transition.end, d) : d()
	}, toggle: function () {
		this[this.$element.hasClass("in") ? "hide" : "show"]()
	}};
	var a = b.fn.collapse;
	b.fn.collapse = function (d) {
		return this.each(function () {
			var g = b(this), f = g.data("collapse"), e = typeof d == "object" && d;
			if (!f) {
				g.data("collapse", (f = new c(this, e)))
			}
			if (typeof d == "string") {
				f[d]()
			}
		})
	};
	b.fn.collapse.defaults = {toggle: true};
	b.fn.collapse.Constructor = c;
	b.fn.collapse.noConflict = function () {
		b.fn.collapse = a;
		return this
	};
	b(document).on("click.collapse.data-api", "[data-toggle=collapse]", function (i) {
		var h = b(this), d, g = h.attr("data-target") || i.preventDefault() || (d = h.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""), f = b(g).data("collapse") ? "toggle" : h.data();
		h[b(g).hasClass("in") ? "addClass" : "removeClass"]("collapsed");
		b(g).collapse(f)
	})
}(window.jQuery);
!function (f) {
	var b = "[data-toggle=dropdown]", a = function (h) {
		var g = f(h).on("click.dropdown.data-api", this.toggle);
		f("html").on("click.dropdown.data-api", function () {
			g.parent().removeClass("open")
		})
	};
	a.prototype = {constructor: a, toggle: function (j) {
		var i = f(this), h, g;
		if (i.is(".disabled, :disabled")) {
			return
		}
		h = e(i);
		g = h.hasClass("open");
		d();
		if (!g) {
			h.toggleClass("open")
		}
		i.focus();
		return false
	}, keydown: function (l) {
		var k, m, g, j, i, h;
		if (!/(38|40|27)/.test(l.keyCode)) {
			return
		}
		k = f(this);
		l.preventDefault();
		l.stopPropagation();
		if (k.is(".disabled, :disabled")) {
			return
		}
		j = e(k);
		i = j.hasClass("open");
		if (!i || (i && l.keyCode == 27)) {
			return k.click()
		}
		m = f("[role=menu] li:not(.divider):visible a", j);
		if (!m.length) {
			return
		}
		h = m.index(m.filter(":focus"));
		if (l.keyCode == 38 && h > 0) {
			h--
		}
		if (l.keyCode == 40 && h < m.length - 1) {
			h++
		}
		if (!~h) {
			h = 0
		}
		m.eq(h).focus()
	}};
	function d() {
		f(b).each(function () {
			e(f(this)).removeClass("open")
		})
	}
	function e(i) {
		var g = i.attr("data-target"), h;
		if (!g) {
			g = i.attr("href");
			g = g && /#/.test(g) && g.replace(/.*(?=#[^\s]*$)/, "")
		}
		h = f(g);
		h.length || (h = i.parent());
		return h
	}
	var c = f.fn.dropdown;
	f.fn.dropdown = function (g) {
		return this.each(function () {
			var i = f(this), h = i.data("dropdown");
			if (!h) {
				i.data("dropdown", (h = new a(this)))
			}
			if (typeof g == "string") {
				h[g].call(i)
			}
		})
	};
	f.fn.dropdown.Constructor = a;
	f.fn.dropdown.noConflict = function () {
		f.fn.dropdown = c;
		return this
	};
	f(document).on("click.dropdown.data-api touchstart.dropdown.data-api", d).on("click.dropdown touchstart.dropdown.data-api", ".dropdown form",function (g) {
		g.stopPropagation()
	}).on("touchstart.dropdown.data-api", ".dropdown-menu",function (g) {
			g.stopPropagation()
		}).on("click.dropdown.data-api touchstart.dropdown.data-api", b, a.prototype.toggle).on("keydown.dropdown.data-api touchstart.dropdown.data-api", b + ", [role=menu]", a.prototype.keydown)
}(window.jQuery);
!function (c) {
	var b = function (e, d) {
		this.options = d;
		this.$element = c(e).delegate('[data-dismiss="modal"]', "click.dismiss.modal", c.proxy(this.hide, this));
		this.options.remote && this.$element.find(".modal-body").load(this.options.remote)
	};
	b.prototype = {constructor: b, toggle: function () {
		return this[!this.isShown ? "show" : "hide"]()
	}, show: function () {
		var d = this, f = c.Event("show");
		this.$element.trigger(f);
		if (this.isShown || f.isDefaultPrevented()) {
			return
		}
		this.isShown = true;
		this.escape();
		this.backdrop(function () {
			var e = c.support.transition && d.$element.hasClass("fade");
			if (!d.$element.parent().length) {
				d.$element.appendTo(document.body)
			}
			d.$element.show();
			if (e) {
				d.$element[0].offsetWidth
			}
			d.$element.addClass("in").attr("aria-hidden", false);
			d.enforceFocus();
			e ? d.$element.one(c.support.transition.end, function () {
				d.$element.focus().trigger("shown")
			}) : d.$element.focus().trigger("shown")
		})
	}, hide: function (f) {
		f && f.preventDefault();
		var d = this;
		f = c.Event("hide");
		this.$element.trigger(f);
		if (!this.isShown || f.isDefaultPrevented()) {
			return
		}
		this.isShown = false;
		this.escape();
		c(document).off("focusin.modal");
		this.$element.removeClass("in").attr("aria-hidden", true);
		c.support.transition && this.$element.hasClass("fade") ? this.hideWithTransition() : this.hideModal()
	}, enforceFocus: function () {
		var d = this;
		c(document).on("focusin.modal", function (f) {
			if (d.$element[0] !== f.target && !d.$element.has(f.target).length) {
				d.$element.focus()
			}
		})
	}, escape: function () {
		var d = this;
		if (this.isShown && this.options.keyboard) {
			this.$element.on("keyup.dismiss.modal", function (f) {
				f.which == 27 && d.hide()
			})
		} else {
			if (!this.isShown) {
				this.$element.off("keyup.dismiss.modal")
			}
		}
	}, hideWithTransition: function () {
		var d = this, e = setTimeout(function () {
			d.$element.off(c.support.transition.end);
			d.hideModal()
		}, 500);
		this.$element.one(c.support.transition.end, function () {
			clearTimeout(e);
			d.hideModal()
		})
	}, hideModal: function (d) {
		this.$element.hide().trigger("hidden");
		this.backdrop()
	}, removeBackdrop: function () {
		this.$backdrop.remove();
		this.$backdrop = null
	}, backdrop: function (g) {
		var f = this, e = this.$element.hasClass("fade") ? "fade" : "";
		if (this.isShown && this.options.backdrop) {
			var d = c.support.transition && e;
			this.$backdrop = c('<div class="modal-backdrop ' + e + '" />').appendTo(document.body);
			this.$backdrop.click(this.options.backdrop == "static" ? c.proxy(this.$element[0].focus, this.$element[0]) : c.proxy(this.hide, this));
			if (d) {
				this.$backdrop[0].offsetWidth
			}
			this.$backdrop.addClass("in");
			d ? this.$backdrop.one(c.support.transition.end, g) : g()
		} else {
			if (!this.isShown && this.$backdrop) {
				this.$backdrop.removeClass("in");
				c.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(c.support.transition.end, c.proxy(this.removeBackdrop, this)) : this.removeBackdrop()
			} else {
				if (g) {
					g()
				}
			}
		}
	}};
	var a = c.fn.modal;
	c.fn.modal = function (d) {
		return this.each(function () {
			var g = c(this), f = g.data("modal"), e = c.extend({}, c.fn.modal.defaults, g.data(), typeof d == "object" && d);
			if (!f) {
				g.data("modal", (f = new b(this, e)))
			}
			if (typeof d == "string") {
				f[d]()
			} else {
				if (e.show) {
					f.show()
				}
			}
		})
	};
	c.fn.modal.defaults = {backdrop: true, keyboard: true, show: true};
	c.fn.modal.Constructor = b;
	c.fn.modal.noConflict = function () {
		c.fn.modal = a;
		return this
	};
	c(document).on("click.modal.data-api", '[data-toggle="modal"]', function (i) {
		var h = c(this), f = h.attr("href"), d = c(h.attr("data-target") || (f && f.replace(/.*(?=#[^\s]+$)/, ""))), g = d.data("modal") ? "toggle" : c.extend({remote: !/#/.test(f) && f}, d.data(), h.data());
		i.preventDefault();
		d.modal(g).one("hide", function () {
			h.focus()
		})
	})
}(window.jQuery);
!function (c) {
	var b = function (e, d) {
		this.init("tooltip", e, d)
	};
	b.prototype = {constructor: b, init: function (g, f, e) {
		var h, d;
		this.type = g;
		this.$element = c(f);
		this.options = this.getOptions(e);
		this.enabled = true;
		if (this.options.trigger == "click") {
			this.$element.on("click." + this.type, this.options.selector, c.proxy(this.toggle, this))
		} else {
			if (this.options.trigger != "manual") {
				h = this.options.trigger == "hover" ? "mouseenter" : "focus";
				d = this.options.trigger == "hover" ? "mouseleave" : "blur";
				this.$element.on(h + "." + this.type, this.options.selector, c.proxy(this.enter, this));
				this.$element.on(d + "." + this.type, this.options.selector, c.proxy(this.leave, this))
			}
		}
		this.options.selector ? (this._options = c.extend({}, this.options, {trigger: "manual", selector: ""})) : this.fixTitle()
	}, getOptions: function (d) {
		d = c.extend({}, c.fn[this.type].defaults, d, this.$element.data());
		if (d.delay && typeof d.delay == "number") {
			d.delay = {show: d.delay, hide: d.delay}
		}
		return d
	}, enter: function (f) {
		var d = c(f.currentTarget)[this.type](this._options).data(this.type);
		if (!d.options.delay || !d.options.delay.show) {
			return d.show()
		}
		clearTimeout(this.timeout);
		d.hoverState = "in";
		this.timeout = setTimeout(function () {
			if (d.hoverState == "in") {
				d.show()
			}
		}, d.options.delay.show)
	}, leave: function (f) {
		var d = c(f.currentTarget)[this.type](this._options).data(this.type);
		if (this.timeout) {
			clearTimeout(this.timeout)
		}
		if (!d.options.delay || !d.options.delay.hide) {
			return d.hide()
		}
		d.hoverState = "out";
		this.timeout = setTimeout(function () {
			if (d.hoverState == "out") {
				d.hide()
			}
		}, d.options.delay.hide)
	}, show: function () {
		var h, d, j, f, i, e, g;
		if (this.hasContent() && this.enabled) {
			h = this.tip();
			this.setContent();
			if (this.options.animation) {
				h.addClass("fade")
			}
			e = typeof this.options.placement == "function" ? this.options.placement.call(this, h[0], this.$element[0]) : this.options.placement;
			d = /in/.test(e);
			h.detach().css({top: 0, left: 0, display: "block"}).insertAfter(this.$element);
			j = this.getPosition(d);
			f = h[0].offsetWidth;
			i = h[0].offsetHeight;
			switch (d ? e.split(" ")[1] : e) {
				case"bottom":
					g = {top: j.top + j.height, left: j.left + j.width / 2 - f / 2};
					break;
				case"top":
					g = {top: j.top - i, left: j.left + j.width / 2 - f / 2};
					break;
				case"left":
					g = {top: j.top + j.height / 2 - i / 2, left: j.left - f};
					break;
				case"right":
					g = {top: j.top + j.height / 2 - i / 2, left: j.left + j.width};
					break
			}
			h.offset(g).addClass(e).addClass("in")
		}
	}, setContent: function () {
		var e = this.tip(), d = this.getTitle();
		e.find(".tooltip-inner")[this.options.html ? "html" : "text"](d);
		e.removeClass("fade in top bottom left right")
	}, hide: function () {
		var d = this, e = this.tip();
		e.removeClass("in");
		function f() {
			var g = setTimeout(function () {
				e.off(c.support.transition.end).detach()
			}, 500);
			e.one(c.support.transition.end, function () {
				clearTimeout(g);
				e.detach()
			})
		}
		c.support.transition && this.$tip.hasClass("fade") ? f() : e.detach();
		return this
	}, fixTitle: function () {
		var d = this.$element;
		if (d.attr("title") || typeof(d.attr("data-original-title")) != "string") {
			d.attr("data-original-title", d.attr("title") || "").removeAttr("title")
		}
	}, hasContent: function () {
		return this.getTitle()
	}, getPosition: function (d) {
		return c.extend({}, (d ? {top: 0, left: 0} : this.$element.offset()), {width: this.$element[0].offsetWidth, height: this.$element[0].offsetHeight})
	}, getTitle: function () {
		var f, d = this.$element, e = this.options;
		f = d.attr("data-original-title") || (typeof e.title == "function" ? e.title.call(d[0]) : e.title);
		return f
	}, tip: function () {
		return this.$tip = this.$tip || c(this.options.template)
	}, validate: function () {
		if (!this.$element[0].parentNode) {
			this.hide();
			this.$element = null;
			this.options = null
		}
	}, enable: function () {
		this.enabled = true
	}, disable: function () {
		this.enabled = false
	}, toggleEnabled: function () {
		this.enabled = !this.enabled
	}, toggle: function (f) {
		var d = c(f.currentTarget)[this.type](this._options).data(this.type);
		d[d.tip().hasClass("in") ? "hide" : "show"]()
	}, destroy: function () {
		this.hide().$element.off("." + this.type).removeData(this.type)
	}};
	var a = c.fn.tooltip;
	c.fn.tooltip = function (d) {
		return this.each(function () {
			var g = c(this), f = g.data("tooltip"), e = typeof d == "object" && d;
			if (!f) {
				g.data("tooltip", (f = new b(this, e)))
			}
			if (typeof d == "string") {
				f[d]()
			}
		})
	};
	c.fn.tooltip.Constructor = b;
	c.fn.tooltip.defaults = {animation: true, placement: "top", selector: false, template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover", title: "", delay: 0, html: false};
	c.fn.tooltip.noConflict = function () {
		c.fn.tooltip = a;
		return this
	}
}(window.jQuery);
!function (c) {
	var b = function (e, d) {
		this.init("popover", e, d)
	};
	b.prototype = c.extend({}, c.fn.tooltip.Constructor.prototype, {constructor: b, setContent: function () {
		var f = this.tip(), e = this.getTitle(), d = this.getContent();
		f.find(".popover-title")[this.options.html ? "html" : "text"](e);
		f.find(".popover-content")[this.options.html ? "html" : "text"](d);
		f.removeClass("fade top bottom left right in")
	}, hasContent: function () {
		return this.getTitle() || this.getContent()
	}, getContent: function () {
		var e, d = this.$element, f = this.options;
		e = d.attr("data-content") || (typeof f.content == "function" ? f.content.call(d[0]) : f.content);
		return e
	}, tip: function () {
		if (!this.$tip) {
			this.$tip = c(this.options.template)
		}
		return this.$tip
	}, destroy: function () {
		this.hide().$element.off("." + this.type).removeData(this.type)
	}});
	var a = c.fn.popover;
	c.fn.popover = function (d) {
		return this.each(function () {
			var g = c(this), f = g.data("popover"), e = typeof d == "object" && d;
			if (!f) {
				g.data("popover", (f = new b(this, e)))
			}
			if (typeof d == "string") {
				f[d]()
			}
		})
	};
	c.fn.popover.Constructor = b;
	c.fn.popover.defaults = c.extend({}, c.fn.tooltip.defaults, {placement: "right", trigger: "click", content: "", template: '<div class="popover"><div class="arrow"></div><div class="popover-inner"><h3 class="popover-title"></h3><div class="popover-content"></div></div></div>'});
	c.fn.popover.noConflict = function () {
		c.fn.popover = a;
		return this
	}
}(window.jQuery);
!function (c) {
	function b(g, f) {
		var h = c.proxy(this.process, this), d = c(g).is("body") ? c(window) : c(g), e;
		this.options = c.extend({}, c.fn.scrollspy.defaults, f);
		this.$scrollElement = d.on("scroll.scroll-spy.data-api", h);
		this.selector = (this.options.target || ((e = c(g).attr("href")) && e.replace(/.*(?=#[^\s]+$)/, "")) || "") + " .nav li > a";
		this.$body = c("body");
		this.refresh();
		this.process()
	}
	b.prototype = {constructor: b, refresh: function () {
		var d = this, e;
		this.offsets = c([]);
		this.targets = c([]);
		e = this.$body.find(this.selector).map(function () {
			var g = c(this), f = g.data("target") || g.attr("href"), h = /^#\w/.test(f) && c(f);
			return(h && h.length && [
				[h.position().top + d.$scrollElement.scrollTop(), f]
			]) || null
		}).sort(function (g, f) {
				return g[0] - f[0]
			}).each(function () {
				d.offsets.push(this[0]);
				d.targets.push(this[1])
			})
	}, process: function () {
		var j = this.$scrollElement.scrollTop() + this.options.offset, f = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight, h = f - this.$scrollElement.height(), g = this.offsets, d = this.targets, k = this.activeTarget, e;
		if (j >= h) {
			return k != (e = d.last()[0]) && this.activate(e)
		}
		for (e = g.length; e--;) {
			k != d[e] && j >= g[e] && (!g[e + 1] || j <= g[e + 1]) && this.activate(d[e])
		}
	}, activate: function (f) {
		var e, d;
		this.activeTarget = f;
		c(this.selector).parent(".active").removeClass("active");
		d = this.selector + '[data-target="' + f + '"],' + this.selector + '[href="' + f + '"]';
		e = c(d).parent("li").addClass("active");
		if (e.parent(".dropdown-menu").length) {
			e = e.closest("li.dropdown").addClass("active")
		}
		e.trigger("activate")
	}};
	var a = c.fn.scrollspy;
	c.fn.scrollspy = function (d) {
		return this.each(function () {
			var g = c(this), f = g.data("scrollspy"), e = typeof d == "object" && d;
			if (!f) {
				g.data("scrollspy", (f = new b(this, e)))
			}
			if (typeof d == "string") {
				f[d]()
			}
		})
	};
	c.fn.scrollspy.Constructor = b;
	c.fn.scrollspy.defaults = {offset: 10};
	c.fn.scrollspy.noConflict = function () {
		c.fn.scrollspy = a;
		return this
	};
	c(window).on("load", function () {
		c('[data-spy="scroll"]').each(function () {
			var d = c(this);
			d.scrollspy(d.data())
		})
	})
}(window.jQuery);
!function (c) {
	var b = function (d) {
		this.element = c(d)
	};
	b.prototype = {constructor: b, show: function () {
		var j = this.element, g = j.closest("ul:not(.dropdown-menu)"), f = j.attr("data-target"), h, d, i;
		if (!f) {
			f = j.attr("href");
			f = f && f.replace(/.*(?=#[^\s]*$)/, "")
		}
		if (j.parent("li").hasClass("active")) {
			return
		}
		h = g.find(".active:last a")[0];
		i = c.Event("show", {relatedTarget: h});
		j.trigger(i);
		if (i.isDefaultPrevented()) {
			return
		}
		d = c(f);
		this.activate(j.parent("li"), g);
		this.activate(d, d.parent(), function () {
			j.trigger({type: "shown", relatedTarget: h})
		})
	}, activate: function (f, e, i) {
		var d = e.find("> .active"), h = i && c.support.transition && d.hasClass("fade");
		function g() {
			d.removeClass("active").find("> .dropdown-menu > .active").removeClass("active");
			f.addClass("active");
			if (h) {
				f[0].offsetWidth;
				f.addClass("in")
			} else {
				f.removeClass("fade")
			}
			if (f.parent(".dropdown-menu")) {
				f.closest("li.dropdown").addClass("active")
			}
			i && i()
		}
		h ? d.one(c.support.transition.end, g) : g();
		d.removeClass("in")
	}};
	var a = c.fn.tab;
	c.fn.tab = function (d) {
		return this.each(function () {
			var f = c(this), e = f.data("tab");
			if (!e) {
				f.data("tab", (e = new b(this)))
			}
			if (typeof d == "string") {
				e[d]()
			}
		})
	};
	c.fn.tab.Constructor = b;
	c.fn.tab.noConflict = function () {
		c.fn.tab = a;
		return this
	};
	c(document).on("click.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function (d) {
		d.preventDefault();
		c(this).tab("show")
	})
}(window.jQuery);
!function (b) {
	var c = function (e, d) {
		this.$element = b(e);
		this.options = b.extend({}, b.fn.typeahead.defaults, d);
		this.matcher = this.options.matcher || this.matcher;
		this.sorter = this.options.sorter || this.sorter;
		this.highlighter = this.options.highlighter || this.highlighter;
		this.updater = this.options.updater || this.updater;
		this.source = this.options.source;
		this.$menu = b(this.options.menu);
		this.shown = false;
		this.listen()
	};
	c.prototype = {constructor: c, select: function () {
		var d = this.$menu.find(".active").attr("data-value");
		this.$element.val(this.updater(d)).change();
		return this.hide()
	}, updater: function (d) {
		return d
	}, show: function () {
		var d = b.extend({}, this.$element.position(), {height: this.$element[0].offsetHeight});
		this.$menu.insertAfter(this.$element).css({top: d.top + d.height, left: d.left}).show();
		this.shown = true;
		return this
	}, hide: function () {
		this.$menu.hide();
		this.shown = false;
		return this
	}, lookup: function (e) {
		var d;
		this.query = this.$element.val();
		if (!this.query || this.query.length < this.options.minLength) {
			return this.shown ? this.hide() : this
		}
		d = b.isFunction(this.source) ? this.source(this.query, b.proxy(this.process, this)) : this.source;
		return d ? this.process(d) : this
	}, process: function (d) {
		var e = this;
		d = b.grep(d, function (f) {
			return e.matcher(f)
		});
		d = this.sorter(d);
		if (!d.length) {
			return this.shown ? this.hide() : this
		}
		return this.render(d.slice(0, this.options.items)).show()
	}, matcher: function (d) {
		return ~d.toLowerCase().indexOf(this.query.toLowerCase())
	}, sorter: function (f) {
		var g = [], e = [], d = [], h;
		while (h = f.shift()) {
			if (!h.toLowerCase().indexOf(this.query.toLowerCase())) {
				g.push(h)
			} else {
				if (~h.indexOf(this.query)) {
					e.push(h)
				} else {
					d.push(h)
				}
			}
		}
		return g.concat(e, d)
	}, highlighter: function (d) {
		var e = this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
		return d.replace(new RegExp("(" + e + ")", "ig"), function (f, g) {
			return"<strong>" + g + "</strong>"
		})
	}, render: function (d) {
		var e = this;
		d = b(d).map(function (f, g) {
			f = b(e.options.item).attr("data-value", g);
			f.find("a").html(e.highlighter(g));
			return f[0]
		});
		d.first().addClass("active");
		this.$menu.html(d);
		return this
	}, next: function (e) {
		var f = this.$menu.find(".active").removeClass("active"), d = f.next();
		if (!d.length) {
			d = b(this.$menu.find("li")[0])
		}
		d.addClass("active")
	}, prev: function (e) {
		var f = this.$menu.find(".active").removeClass("active"), d = f.prev();
		if (!d.length) {
			d = this.$menu.find("li").last()
		}
		d.addClass("active")
	}, listen: function () {
		this.$element.on("blur", b.proxy(this.blur, this)).on("keypress", b.proxy(this.keypress, this)).on("keyup", b.proxy(this.keyup, this));
		if (this.eventSupported("keydown")) {
			this.$element.on("keydown", b.proxy(this.keydown, this))
		}
		this.$menu.on("click", b.proxy(this.click, this)).on("mouseenter", "li", b.proxy(this.mouseenter, this))
	}, eventSupported: function (d) {
		var e = d in this.$element;
		if (!e) {
			this.$element.setAttribute(d, "return;");
			e = typeof this.$element[d] === "function"
		}
		return e
	}, move: function (d) {
		if (!this.shown) {
			return
		}
		switch (d.keyCode) {
			case 9:
			case 13:
			case 27:
				d.preventDefault();
				break;
			case 38:
				d.preventDefault();
				this.prev();
				break;
			case 40:
				d.preventDefault();
				this.next();
				break
		}
		d.stopPropagation()
	}, keydown: function (d) {
		this.suppressKeyPressRepeat = ~b.inArray(d.keyCode, [40, 38, 9, 13, 27]);
		this.move(d)
	}, keypress: function (d) {
		if (this.suppressKeyPressRepeat) {
			return
		}
		this.move(d)
	}, keyup: function (d) {
		switch (d.keyCode) {
			case 40:
			case 38:
			case 16:
			case 17:
			case 18:
				break;
			case 9:
			case 13:
				if (!this.shown) {
					return
				}
				this.select();
				break;
			case 27:
				if (!this.shown) {
					return
				}
				this.hide();
				break;
			default:
				this.lookup()
		}
		d.stopPropagation();
		d.preventDefault()
	}, blur: function (f) {
		var d = this;
		setTimeout(function () {
			d.hide()
		}, 150)
	}, click: function (d) {
		d.stopPropagation();
		d.preventDefault();
		this.select()
	}, mouseenter: function (d) {
		this.$menu.find(".active").removeClass("active");
		b(d.currentTarget).addClass("active")
	}};
	var a = b.fn.typeahead;
	b.fn.typeahead = function (d) {
		return this.each(function () {
			var g = b(this), f = g.data("typeahead"), e = typeof d == "object" && d;
			if (!f) {
				g.data("typeahead", (f = new c(this, e)))
			}
			if (typeof d == "string") {
				f[d]()
			}
		})
	};
	b.fn.typeahead.defaults = {source: [], items: 8, menu: '<ul class="typeahead dropdown-menu"></ul>', item: '<li><a href="#"></a></li>', minLength: 1};
	b.fn.typeahead.Constructor = c;
	b.fn.typeahead.noConflict = function () {
		b.fn.typeahead = a;
		return this
	};
	b(document).on("focus.typeahead.data-api", '[data-provide="typeahead"]', function (f) {
		var d = b(this);
		if (d.data("typeahead")) {
			return
		}
		f.preventDefault();
		d.typeahead(d.data())
	})
}(window.jQuery);
!function (c) {
	var b = function (e, d) {
		this.options = c.extend({}, c.fn.affix.defaults, d);
		this.$window = c(window).on("scroll.affix.data-api", c.proxy(this.checkPosition, this)).on("click.affix.data-api", c.proxy(function () {
			setTimeout(c.proxy(this.checkPosition, this), 1)
		}, this));
		this.$element = c(e);
		this.checkPosition()
	};
	b.prototype.checkPosition = function () {
		if (!this.$element.is(":visible")) {
			return
		}
		var h = c(document).height(), j = this.$window.scrollTop(), d = this.$element.offset(), k = this.options.offset, f = k.bottom, g = k.top, i = "affix affix-top affix-bottom", e;
		if (typeof k != "object") {
			f = g = k
		}
		if (typeof g == "function") {
			g = k.top()
		}
		if (typeof f == "function") {
			f = k.bottom()
		}
		e = this.unpin != null && (j + this.unpin <= d.top) ? false : f != null && (d.top + this.$element.height() >= h - f) ? "bottom" : g != null && j <= g ? "top" : false;
		if (this.affixed === e) {
			return
		}
		this.affixed = e;
		this.unpin = e == "bottom" ? d.top - j : null;
		this.$element.removeClass(i).addClass("affix" + (e ? "-" + e : ""))
	};
	var a = c.fn.affix;
	c.fn.affix = function (d) {
		return this.each(function () {
			var g = c(this), f = g.data("affix"), e = typeof d == "object" && d;
			if (!f) {
				g.data("affix", (f = new b(this, e)))
			}
			if (typeof d == "string") {
				f[d]()
			}
		})
	};
	c.fn.affix.Constructor = b;
	c.fn.affix.defaults = {offset: 0};
	c.fn.affix.noConflict = function () {
		c.fn.affix = a;
		return this
	};
	c(window).on("load", function () {
		c('[data-spy="affix"]').each(function () {
			var e = c(this), d = e.data();
			d.offset = d.offset || {};
			d.offsetBottom && (d.offset.bottom = d.offsetBottom);
			d.offsetTop && (d.offset.top = d.offsetTop);
			e.affix(d)
		})
	})
}(window.jQuery);
/*!
 * Retina.js v1.1.0
 *
 * Copyright 2013 Imulus, LLC
 * Released under the MIT license
 *
 * Retina.js is an open source script that makes it easy to serve
 * high-resolution images to devices with retina displays.
 */
(function(){var b=(typeof exports=="undefined"?window:exports);var c={check_mime_type:true};b.Retina=a;function a(){}a.configure=function(f){if(f==null){f={}}for(var g in f){c[g]=f[g]}};a.init=function(f){if(f==null){f=b}var g=f.onload||new Function;f.onload=function(){var h=document.getElementsByTagName("img"),j=[],k,l;for(k=0;k<h.length;k++){l=h[k];j.push(new d(l))}g()}};a.isRetina=function(){var f="(-webkit-min-device-pixel-ratio: 1.5),                      (min--moz-device-pixel-ratio: 1.5),                      (-o-min-device-pixel-ratio: 3/2),                      (min-resolution: 1.5dppx)";if(b.devicePixelRatio>1){return true}if(b.matchMedia&&b.matchMedia(f).matches){return true}return false};b.RetinaImagePath=e;function e(g,f){this.path=g;if(typeof f!=="undefined"&&f!==null){this.at_2x_path=f;this.perform_check=false}else{this.at_2x_path=g.replace(/\.\w+$/,function(h){return"@2x"+h});this.perform_check=true}}e.confirmed_paths=[];e.prototype.is_external=function(){return !!(this.path.match(/^https?\:/i)&&!this.path.match("//"+document.domain))};e.prototype.check_2x_variant=function(h){var f,g=this;if(this.is_external()){return h(false)}else{if(!this.perform_check&&typeof this.at_2x_path!=="undefined"&&this.at_2x_path!==null){return h(true)}else{if(this.at_2x_path in e.confirmed_paths){return h(true)}else{f=new XMLHttpRequest;f.open("HEAD",this.at_2x_path);f.onreadystatechange=function(){if(f.readyState!=4){return h(false)}if(f.status>=200&&f.status<=399){if(c.check_mime_type){var i=f.getResponseHeader("Content-Type");if(i==null||!i.match(/^image/i)){return h(false)}}e.confirmed_paths.push(g.at_2x_path);return h(true)}else{return h(false)}};f.send()}}}};function d(f){this.el=f;this.path=new e(this.el.getAttribute("src"),this.el.getAttribute("data-at2x"));var g=this;this.path.check_2x_variant(function(h){if(h){g.swap()}})}b.RetinaImage=d;d.prototype.swap=function(h){if(typeof h=="undefined"){h=this.path.at_2x_path}var f=this;function g(){if(!f.el.complete){setTimeout(g,5)}else{f.el.setAttribute("width",f.el.offsetWidth);f.el.setAttribute("height",f.el.offsetHeight);f.el.setAttribute("src",h)}}g()};if(a.isRetina()){a.init(b)}})();
var addComment={moveForm:function(a,b,c,d){var e,f=this,g=f.I(a),h=f.I(c),i=f.I("cancel-comment-reply-link"),j=f.I("comment_parent"),k=f.I("comment_post_ID");if(g&&h&&i&&j){f.respondId=c,d=d||!1,f.I("wp-temp-form-div")||(e=document.createElement("div"),e.id="wp-temp-form-div",e.style.display="none",h.parentNode.insertBefore(e,h)),g.parentNode.insertBefore(h,g.nextSibling),k&&d&&(k.value=d),j.value=b,i.style.display="",i.onclick=function(){var a=addComment,b=a.I("wp-temp-form-div"),c=a.I(a.respondId);if(b&&c)return a.I("comment_parent").value="0",b.parentNode.insertBefore(c,b),b.parentNode.removeChild(b),this.style.display="none",this.onclick=null,!1};try{f.I("comment").focus()}catch(l){}return!1}},I:function(a){return document.getElementById(a)}};