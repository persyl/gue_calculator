parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"S5m4":[function(require,module,exports) {
var define;
var global = arguments[3];
var e,t=arguments[3];!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof e&&e.amd?e(["exports"],n):n(t.preact={})}(this,function(e){"use strict";var t=function(){},n={},o=[],r=[];function i(e,i){var l=r,a=void 0,s=void 0,p=void 0,u=void 0;for(u=arguments.length;u-- >2;)o.push(arguments[u]);for(i&&null!=i.children&&(o.length||o.push(i.children),delete i.children);o.length;)if((s=o.pop())&&void 0!==s.pop)for(u=s.length;u--;)o.push(s[u]);else"boolean"==typeof s&&(s=null),(p="function"!=typeof e)&&(null==s?s="":"number"==typeof s?s=String(s):"string"!=typeof s&&(p=!1)),p&&a?l[l.length-1]+=s:l===r?l=[s]:l.push(s),a=p;var c=new t;return c.nodeName=e,c.children=l,c.attributes=null==i?void 0:i,c.key=null==i?void 0:i.key,void 0!==n.vnode&&n.vnode(c),c}function l(e,t){for(var n in t)e[n]=t[n];return e}function a(e,t){e&&("function"==typeof e?e(t):e.current=t)}var s="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout;function p(e,t){return i(e.nodeName,l(l({},e.attributes),t),arguments.length>2?[].slice.call(arguments,2):e.children)}var u=0,c=1,d=2,f=3,v="__preactattr_",m=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,h=[];function _(e){!e._dirty&&(e._dirty=!0)&&1==h.push(e)&&(n.debounceRendering||s)(y)}function y(){for(var e=void 0;e=h.pop();)e._dirty&&A(e)}function b(e,t){return e.normalizedNodeName===t||e.nodeName.toLowerCase()===t.toLowerCase()}function g(e){var t=l({},e.attributes);t.children=e.children;var n=e.nodeName.defaultProps;if(void 0!==n)for(var o in n)void 0===t[o]&&(t[o]=n[o]);return t}function C(e){var t=e.parentNode;t&&t.removeChild(e)}function x(e,t,n,o,r){if("className"===t&&(t="class"),"key"===t);else if("ref"===t)a(n,null),a(o,e);else if("class"!==t||r)if("style"===t){if(o&&"string"!=typeof o&&"string"!=typeof n||(e.style.cssText=o||""),o&&"object"==typeof o){if("string"!=typeof n)for(var i in n)i in o||(e.style[i]="");for(var l in o)e.style[l]="number"==typeof o[l]&&!1===m.test(l)?o[l]+"px":o[l]}}else if("dangerouslySetInnerHTML"===t)o&&(e.innerHTML=o.__html||"");else if("o"==t[0]&&"n"==t[1]){var s=t!==(t=t.replace(/Capture$/,""));t=t.toLowerCase().substring(2),o?n||e.addEventListener(t,N,s):e.removeEventListener(t,N,s),(e._listeners||(e._listeners={}))[t]=o}else if("list"!==t&&"type"!==t&&!r&&t in e){try{e[t]=null==o?"":o}catch(u){}null!=o&&!1!==o||"spellcheck"==t||e.removeAttribute(t)}else{var p=r&&t!==(t=t.replace(/^xlink:?/,""));null==o||!1===o?p?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.removeAttribute(t):"function"!=typeof o&&(p?e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),o):e.setAttribute(t,o))}else e.className=o||""}function N(e){return this._listeners[e.type](n.event&&n.event(e)||e)}var w=[],k=0,S=!1,U=!1;function P(){for(var e=void 0;e=w.shift();)n.afterMount&&n.afterMount(e),e.componentDidMount&&e.componentDidMount()}function B(e,t,n,o,r,i){k++||(S=null!=r&&void 0!==r.ownerSVGElement,U=null!=e&&!(v in e));var l=L(e,t,n,o,i);return r&&l.parentNode!==r&&r.appendChild(l),--k||(U=!1,i||P()),l}function L(e,t,n,o,r){var i=e,l=S;if(null!=t&&"boolean"!=typeof t||(t=""),"string"==typeof t||"number"==typeof t)return e&&void 0!==e.splitText&&e.parentNode&&(!e._component||r)?e.nodeValue!=t&&(e.nodeValue=t):(i=document.createTextNode(t),e&&(e.parentNode&&e.parentNode.replaceChild(i,e),M(e,!0))),i[v]=!0,i;var a,s,p=t.nodeName;if("function"==typeof p)return function(e,t,n,o){var r=e&&e._component,i=r,l=e,a=r&&e._componentConstructor===t.nodeName,s=a,p=g(t);for(;r&&!s&&(r=r._parentComponent);)s=r.constructor===t.nodeName;r&&s&&(!o||r._component)?(V(r,p,f,n,o),e=r.base):(i&&!a&&(R(i),e=l=null),r=W(t.nodeName,p,n),e&&!r.nextBase&&(r.nextBase=e,l=null),V(r,p,c,n,o),e=r.base,l&&e!==l&&(l._component=null,M(l,!1)));return e}(e,t,n,o);if(S="svg"===p||"foreignObject"!==p&&S,p=String(p),(!e||!b(e,p))&&(a=p,(s=S?document.createElementNS("http://www.w3.org/2000/svg",a):document.createElement(a)).normalizedNodeName=a,i=s,e)){for(;e.firstChild;)i.appendChild(e.firstChild);e.parentNode&&e.parentNode.replaceChild(i,e),M(e,!0)}var u=i.firstChild,d=i[v],m=t.children;if(null==d){d=i[v]={};for(var h=i.attributes,_=h.length;_--;)d[h[_].name]=h[_].value}return!U&&m&&1===m.length&&"string"==typeof m[0]&&null!=u&&void 0!==u.splitText&&null==u.nextSibling?u.nodeValue!=m[0]&&(u.nodeValue=m[0]):(m&&m.length||null!=u)&&function(e,t,n,o,r){var i=e.childNodes,l=[],a={},s=0,p=0,u=i.length,c=0,d=t?t.length:0,f=void 0,m=void 0,h=void 0,_=void 0,y=void 0;if(0!==u)for(var g=0;g<u;g++){var x=i[g],N=x[v],w=d&&N?x._component?x._component.__key:N.key:null;null!=w?(s++,a[w]=x):(N||(void 0!==x.splitText?!r||x.nodeValue.trim():r))&&(l[c++]=x)}if(0!==d)for(var k=0;k<d;k++){_=t[k],y=null;var S=_.key;if(null!=S)s&&void 0!==a[S]&&(y=a[S],a[S]=void 0,s--);else if(p<c)for(f=p;f<c;f++)if(void 0!==l[f]&&(U=m=l[f],B=r,"string"==typeof(P=_)||"number"==typeof P?void 0!==U.splitText:"string"==typeof P.nodeName?!U._componentConstructor&&b(U,P.nodeName):B||U._componentConstructor===P.nodeName)){y=m,l[f]=void 0,f===c-1&&c--,f===p&&p++;break}y=L(y,_,n,o),h=i[k],y&&y!==e&&y!==h&&(null==h?e.appendChild(y):y===h.nextSibling?C(h):e.insertBefore(y,h))}var U,P,B;if(s)for(var T in a)void 0!==a[T]&&M(a[T],!1);for(;p<=c;)void 0!==(y=l[c--])&&M(y,!1)}(i,m,n,o,U||null!=d.dangerouslySetInnerHTML),function(e,t,n){var o=void 0;for(o in n)t&&null!=t[o]||null==n[o]||x(e,o,n[o],n[o]=void 0,S);for(o in t)"children"===o||"innerHTML"===o||o in n&&t[o]===("value"===o||"checked"===o?e[o]:n[o])||x(e,o,n[o],n[o]=t[o],S)}(i,t.attributes,d),S=l,i}function M(e,t){var n=e._component;n?R(n):(null!=e[v]&&a(e[v].ref,null),!1!==t&&null!=e[v]||C(e),T(e))}function T(e){for(e=e.lastChild;e;){var t=e.previousSibling;M(e,!0),e=t}}var E=[];function W(e,t,n){var o=void 0,r=E.length;for(e.prototype&&e.prototype.render?(o=new e(t,n),j.call(o,t,n)):((o=new j(t,n)).constructor=e,o.render=D);r--;)if(E[r].constructor===e)return o.nextBase=E[r].nextBase,E.splice(r,1),o;return o}function D(e,t,n){return this.constructor(e,n)}function V(e,t,o,r,i){e._disable||(e._disable=!0,e.__ref=t.ref,e.__key=t.key,delete t.ref,delete t.key,void 0===e.constructor.getDerivedStateFromProps&&(!e.base||i?e.componentWillMount&&e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps(t,r)),r&&r!==e.context&&(e.prevContext||(e.prevContext=e.context),e.context=r),e.prevProps||(e.prevProps=e.props),e.props=t,e._disable=!1,o!==u&&(o!==c&&!1===n.syncComponentUpdates&&e.base?_(e):A(e,c,i)),a(e.__ref,e))}function A(e,t,o,r){if(!e._disable){var i=e.props,a=e.state,s=e.context,p=e.prevProps||i,f=e.prevState||a,v=e.prevContext||s,m=e.base,h=e.nextBase,_=m||h,y=e._component,b=!1,C=v,x=void 0,N=void 0,S=void 0;if(e.constructor.getDerivedStateFromProps&&(a=l(l({},a),e.constructor.getDerivedStateFromProps(i,a)),e.state=a),m&&(e.props=p,e.state=f,e.context=v,t!==d&&e.shouldComponentUpdate&&!1===e.shouldComponentUpdate(i,a,s)?b=!0:e.componentWillUpdate&&e.componentWillUpdate(i,a,s),e.props=i,e.state=a,e.context=s),e.prevProps=e.prevState=e.prevContext=e.nextBase=null,e._dirty=!1,!b){x=e.render(i,a,s),e.getChildContext&&(s=l(l({},s),e.getChildContext())),m&&e.getSnapshotBeforeUpdate&&(C=e.getSnapshotBeforeUpdate(p,f));var U=x&&x.nodeName,L=void 0,T=void 0;if("function"==typeof U){var E=g(x);(N=y)&&N.constructor===U&&E.key==N.__key?V(N,E,c,s,!1):(L=N,e._component=N=W(U,E,s),N.nextBase=N.nextBase||h,N._parentComponent=e,V(N,E,u,s,!1),A(N,c,o,!0)),T=N.base}else S=_,(L=y)&&(S=e._component=null),(_||t===c)&&(S&&(S._component=null),T=B(S,x,s,o||!m,_&&_.parentNode,!0));if(_&&T!==_&&N!==y){var D=_.parentNode;D&&T!==D&&(D.replaceChild(T,_),L||(_._component=null,M(_,!1)))}if(L&&R(L),e.base=T,T&&!r){for(var j=e,H=e;H=H._parentComponent;)(j=H).base=T;T._component=j,T._componentConstructor=j.constructor}}for(!m||o?w.push(e):b||(e.componentDidUpdate&&e.componentDidUpdate(p,f,C),n.afterUpdate&&n.afterUpdate(e));e._renderCallbacks.length;)e._renderCallbacks.pop().call(e);k||r||P()}}function R(e){n.beforeUnmount&&n.beforeUnmount(e);var t=e.base;e._disable=!0,e.componentWillUnmount&&e.componentWillUnmount(),e.base=null;var o=e._component;o?R(o):t&&(null!=t[v]&&a(t[v].ref,null),e.nextBase=t,C(t),E.push(e),T(t)),a(e.__ref,null)}function j(e,t){this._dirty=!0,this.context=t,this.props=e,this.state=this.state||{},this._renderCallbacks=[]}function H(e,t,n){return B(n,e,{},!1,t,!1)}function z(){return{}}l(j.prototype,{setState:function(e,t){this.prevState||(this.prevState=this.state),this.state=l(l({},this.state),"function"==typeof e?e(this.state,this.props):e),t&&this._renderCallbacks.push(t),_(this)},forceUpdate:function(e){e&&this._renderCallbacks.push(e),A(this,d)},render:function(){}});var F={h:i,createElement:i,cloneElement:p,createRef:z,Component:j,render:H,rerender:y,options:n};e.default=F,e.h=i,e.createElement=i,e.cloneElement=p,e.createRef=z,e.Component=j,e.render=H,e.rerender=y,e.options=n,Object.defineProperty(e,"__esModule",{value:!0})});
},{}],"xIE1":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e={AllAvailable:"All Available",RuleOfHalf:"Rule of Half",RuleOfThird:"Rule of Third"};exports.default=e;
},{}],"Dprk":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t={h1:{fontSize:"26px",fontFamily:"Arial",margin:"10px 0 0 0"},h2:{fontSize:"22px",fontFamily:"Arial",margin:"10px 0 0 0",color:"#dcdbc7"},text:{fontSize:"18px",fontFamily:"Arial",margin:"0 0 2px 0"},textSmall:{fontSize:"14px",fontFamily:"Arial",margin:"0 0 2px 0"}};exports.default=t;
},{}],"bZTS":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("preact"),t=s(require("./gas-strategy")),r=s(require("../typography/typography"));function s(e){return e&&e.__esModule?e:{default:e}}function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var r=0;r<t.length;r++){var s=t[r];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function l(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}function u(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?o(e):t}function o(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var c=function(s){function i(e){var t;return a(this,i),(t=u(this,h(i).call(this,e))).breathingRate=40,t.minutesToHandleProblems=1,t.totalAscentTime=0,t.litersNeeded=0,t.amountOfDivers=2,t.calculate(e),t}return m(i,e.Component),l(i,[{key:"shouldComponentUpdate",value:function(e,t){return!isNaN(e.maxDepth)}},{key:"componentWillUpdate",value:function(e,t){this.calculate(e)}},{key:"calculate",value:function(e){this.calculateAscentTime(e),this.calculateMinimumGasLiters(e),this.calculateGas(e)}},{key:"calculateAscentTime",value:function(e){var t=e.maxDepth;if(t<=3)this.totalAscentTime=(this.minutesToHandleProblems+1)*this.amountOfDivers;else if(t<=6)this.totalAscentTime=(this.minutesToHandleProblems+2)*this.amountOfDivers;else if(t<=12)this.totalAscentTime=(this.minutesToHandleProblems+3)*this.amountOfDivers;else if(t<=15)this.totalAscentTime=(minutesToHandleProblems+4)*this.amountOfDivers;else if(t>15){var r=t-15,s=Math.ceil(r/9);this.totalAscentTime=(this.minutesToHandleProblems+s+4)*this.amountOfDivers}else;}},{key:"calculateMinimumGasLiters",value:function(e){var t=Math.floor(e.maxDepth/2)/10+1;this.litersNeeded=this.totalAscentTime*this.breathingRate*t}},{key:"calculateGas",value:function(e){var t=this.getMinBar(24),r=this.getMinBar(12),s=this.getMinBar(22),i=this.getMinBar(11),a=this.getMinBar(20),n=this.getMinBar(10);this.minimumBarNeeded={d12:{minBar:t,usableGas:this.getUsableBar(e,t)},s12:{minBar:r,usableGas:this.getUsableBar(e,r)},d11:{minBar:s,usableGas:this.getUsableBar(e,s)},s11:{minBar:i,usableGas:this.getUsableBar(e,i)},d10:{minBar:a,usableGas:this.getUsableBar(e,a)},s10:{minBar:n,usableGas:this.getUsableBar(e,n)}}}},{key:"getMinBar",value:function(e){var t=Math.floor(this.litersNeeded/e);return t>40?t:40}},{key:"getUsableBar",value:function(e,t){var r=e.cylinderBarCapacity-t;return r>t?r:0}},{key:"render",value:function(){return this.props.tooDeep||"number"!=typeof this.props.maxDepth||this.props.maxDepth<1||"number"!=typeof this.props.cylinderBarCapacity||this.props.cylinderBarCapacity<1?null:(0,e.h)("div",{style:f.container},(0,e.h)("p",{style:r.default.text},"Ascent time from ",(0,e.h)("strong",null,this.props.maxDepth,"m = ",this.totalAscentTime," minutes")),(0,e.h)("p",{style:r.default.text},(0,e.h)("strong",null,this.litersNeeded," L")," minimum gas needed (for 2 divers), breathing rate ",this.breathingRate,"L/min"),(0,e.h)("h2",{style:r.default.h2},"Double 12L cylinders:"),this.renderMinGasText(this.minimumBarNeeded.d12.minBar),this.renderUsableGasText(this.minimumBarNeeded.d12.usableGas),(0,e.h)("h2",{style:r.default.h2},"Single 12L cylinder:"),this.renderMinGasText(this.minimumBarNeeded.s12.minBar),this.renderUsableGasText(this.minimumBarNeeded.s12.usableGas),(0,e.h)("h2",{style:r.default.h2},"Double 11L cylinders:"),this.renderMinGasText(this.minimumBarNeeded.d11.minBar),this.renderUsableGasText(this.minimumBarNeeded.d11.usableGas),(0,e.h)("h2",{style:r.default.h2},"Single 11L cylinder:"),this.renderMinGasText(this.minimumBarNeeded.s11.minBar),this.renderUsableGasText(this.minimumBarNeeded.s11.usableGas),(0,e.h)("h2",{style:r.default.h2},"Double 10L cylinders:"),this.renderMinGasText(this.minimumBarNeeded.d10.minBar),this.renderUsableGasText(this.minimumBarNeeded.d10.usableGas),(0,e.h)("h2",{style:r.default.h2},"Single 10L cylinder:"),this.renderMinGasText(this.minimumBarNeeded.s10.minBar),this.renderUsableGasText(this.minimumBarNeeded.s10.usableGas))}},{key:"renderMinGasText",value:function(t){return(0,e.h)("p",{style:r.default.text},"Minimum gas (for ",this.amountOfDivers," divers): ",(0,e.h)("strong",null,t," BAR"))}},{key:"renderUsableGasText",value:function(s){if(this.props.gasStrategy===t.default.AllAvailable)return(0,e.h)("p",{style:r.default.text},"Usable gas (",this.props.gasStrategy,"): ",(0,e.h)("strong",null,s," BAR"));if(this.props.gasStrategy===t.default.RuleOfHalf){var i=Math.floor(s/2),a=this.props.cylinderBarCapacity-i;return(0,e.h)("p",{style:r.default.text},"Usable gas (",this.props.gasStrategy,"): ",(0,e.h)("strong",null,s," BAR"),(0,e.h)("br",null),"Turn pressure: ",a)}if(this.props.gasStrategy===t.default.RuleOfThird){var n=Math.floor(s/3),l=this.props.cylinderBarCapacity-n;return(0,e.h)("p",{style:r.default.text},"Usable gas (",this.props.gasStrategy,"): ",(0,e.h)("strong",null,s," BAR"),(0,e.h)("br",null),"Turn pressure: ",l,(0,e.h)("br",null),"Emergency gas: ",n)}return null}}]),i}();exports.default=c;var f={container:{backgroundColor:"#08689b",padding:"10px",borderRadius:"10px"}};
},{"preact":"S5m4","./gas-strategy":"xIE1","../typography/typography":"Dprk"}],"2WF+":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("preact"),t=r(require("./result")),a=r(require("./gas-strategy")),n=r(require("../typography/typography"));function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(a,!0).forEach(function(t){l(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function c(e,t,a){return t&&p(e.prototype,t),a&&p(e,a),e}function y(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?f(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var b=function(r){function i(e){var t;s(this,i);return(t=y(this,h(i).call(this,e))).gasMix=.32,t.allowedMaxDepth=Math.floor(10*(1.4/t.gasMix-1)),t.state={maxDepth:0,tooDeep:!1,cylinderBarCapacity:200,gasStrategy:a.default.AllAvailable},t.onDepthChange=t.onDepthChange.bind(f(t)),t.onCylinderBarCapacityChange=t.onCylinderBarCapacityChange.bind(f(t)),t.onGasStrategyChange=t.onGasStrategyChange.bind(f(t)),t}return d(i,e.Component),c(i,[{key:"onDepthChange",value:function(e){var t=0;try{t=parseInt(e.target.value)}catch(a){t=0}this.setState({maxDepth:t,tooDeep:t>=this.allowedMaxDepth})}},{key:"onCylinderBarCapacityChange",value:function(e){var t=0;try{t=parseInt(e.target.value)}catch(a){t=0}this.setState({cylinderBarCapacity:t})}},{key:"onGasStrategyChange",value:function(e){this.setState({gasStrategy:e.target.value})}},{key:"render",value:function(){return(0,e.h)("div",{style:v.container},(0,e.h)("h1",{style:n.default.h1},"GUE dive calculator"),(0,e.h)("h2",{style:n.default.h2},"EAN",100*this.gasMix),(0,e.h)("div",{style:v.warning},"This tool is just meant to be used as a guideline and takes no responsibility for your dive. Always make your own personal calculations!"),(0,e.h)("section",{style:v.fields},(0,e.h)("div",{style:v.inputContainer},(0,e.h)("label",{style:v.label,for:"maxdepth"},"Max depth:"),(0,e.h)("input",{id:"maxdepth",style:v.input,type:"number",value:this.state.maxDepth,onKeyUp:this.onDepthChange})),(0,e.h)("div",{style:v.inputContainer},(0,e.h)("label",{style:v.label,for:"capacity"},"Cylinder bar capacity:"),(0,e.h)("input",{id:"capacity",style:v.input,type:"number",value:this.state.cylinderBarCapacity,onKeyUp:this.onCylinderBarCapacityChange})),(0,e.h)("div",{style:v.inputContainer},(0,e.h)("label",{style:v.label,for:"strategy"},"Gas strategy:"),(0,e.h)("select",{id:"strategy",style:v.select,value:this.state.gasStrategy,onChange:this.onGasStrategyChange},(0,e.h)("option",{value:a.default.AllAvailable},a.default.AllAvailable),(0,e.h)("option",{value:a.default.RuleOfHalf},a.default.RuleOfHalf),(0,e.h)("option",{value:a.default.RuleOfThird},a.default.RuleOfThird,"*")))),this.renderWarning(),(0,e.h)(t.default,{maxDepth:this.state.maxDepth,tooDeep:this.state.tooDeep,cylinderBarCapacity:this.state.cylinderBarCapacity,gasStrategy:this.state.gasStrategy}))}},{key:"renderWarning",value:function(){var t="WARNING! To deep for EAN".concat(100*this.gasMix),n=this.state.maxDepth>=this.allowedMaxDepth?(0,e.h)("strong",null,t):null;return this.state.gasStrategy===a.default.RuleOfThird?(0,e.h)("div",{style:v.warning},n,"* GUE Recreational Level 1 divers should always REFRAIN from planning and conducting any dive that requires using the one‐third of usable gas strategy"):(0,e.h)("div",{style:v.warning},n)}}]),i}();exports.default=b;var v={container:{backgroundColor:"#08689b",color:"white",padding:"10px",borderRadius:"10px"},fields:{display:"flex",justifyContent:"space-between"},inputContainer:o({},n.default.textSmall,{border:"1px dotted white",borderRadius:"10px",padding:"4px",marginRight:"4px",minHeight:"50px",display:"inline-flex",flexDirection:"column",justifyContent:"space-between",flex:1}),label:{paddingBottom:"4px"},input:o({},n.default.textSmall,{padding:"4px",border:"1px solid gray",maxWidth:"48px",marginRight:"10px",borderRadius:"6px"}),select:o({},n.default.textSmall,{border:"1px solid gray",marginRight:"10px",minHeight:"31px"}),warning:o({},n.default.textSmall,{margin:"10px 0",color:"#daf260"})};
},{"preact":"S5m4","./result":"bZTS","./gas-strategy":"xIE1","../typography/typography":"Dprk"}],"Focm":[function(require,module,exports) {
"use strict";var t=require("preact"),e=n(require("./components/ascent/ascent"));function n(t){return t&&t.__esModule?t:{default:t}}function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(t,e,n){return e&&u(t.prototype,e),n&&u(t,n),t}function i(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?f(t):e}function f(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&p(t,e)}function p(t,e){return(p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var y=function(n){function r(){return o(this,r),i(this,l(r).apply(this,arguments))}return a(r,t.Component),c(r,[{key:"render",value:function(){return(0,t.h)(e.default,null)}}]),r}();(0,t.render)((0,t.h)(y,null),document.getElementById("gue-app"));
},{"preact":"S5m4","./components/ascent/ascent":"2WF+"}]},{},["Focm"], null)
//# sourceMappingURL=/gue_calculator/dist/gue_calculator.28c8e320.js.map