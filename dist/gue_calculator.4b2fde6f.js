parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"qWa+":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.createElement=exports.h=r,exports.cloneElement=a,exports.Component=A,exports.render=H,exports.rerender=u,exports.options=exports.default=void 0;var e=function(){},t={};exports.options=t;var n=[],o=[];function r(r,i){var l,a,s,p,c=o;for(p=arguments.length;p-- >2;)n.push(arguments[p]);for(i&&null!=i.children&&(n.length||n.push(i.children),delete i.children);n.length;)if((a=n.pop())&&void 0!==a.pop)for(p=a.length;p--;)n.push(a[p]);else"boolean"==typeof a&&(a=null),(s="function"!=typeof r)&&(null==a?a="":"number"==typeof a?a=String(a):"string"!=typeof a&&(s=!1)),s&&l?c[c.length-1]+=a:c===o?c=[a]:c.push(a),l=s;var u=new e;return u.nodeName=r,u.children=c,u.attributes=null==i?void 0:i,u.key=null==i?void 0:i.key,void 0!==t.vnode&&t.vnode(u),u}function i(e,t){for(var n in t)e[n]=t[n];return e}var l="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout;function a(e,t){return r(e.nodeName,i(i({},e.attributes),t),arguments.length>2?[].slice.call(arguments,2):e.children)}var s=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,p=[];function c(e){!e._dirty&&(e._dirty=!0)&&1==p.push(e)&&(t.debounceRendering||l)(u)}function u(){var e,t=p;for(p=[];e=t.pop();)e._dirty&&W(e)}function d(e,t,n){return"string"==typeof t||"number"==typeof t?void 0!==e.splitText:"string"==typeof t.nodeName?!e._componentConstructor&&f(e,t.nodeName):n||e._componentConstructor===t.nodeName}function f(e,t){return e.normalizedNodeName===t||e.nodeName.toLowerCase()===t.toLowerCase()}function v(e){var t=i({},e.attributes);t.children=e.children;var n=e.nodeName.defaultProps;if(void 0!==n)for(var o in n)void 0===t[o]&&(t[o]=n[o]);return t}function _(e,t){var n=t?document.createElementNS("http://www.w3.org/2000/svg",e):document.createElement(e);return n.normalizedNodeName=e,n}function m(e){var t=e.parentNode;t&&t.removeChild(e)}function h(e,t,n,o,r){if("className"===t&&(t="class"),"key"===t);else if("ref"===t)n&&n(null),o&&o(e);else if("class"!==t||r)if("style"===t){if(o&&"string"!=typeof o&&"string"!=typeof n||(e.style.cssText=o||""),o&&"object"==typeof o){if("string"!=typeof n)for(var i in n)i in o||(e.style[i]="");for(var i in o)e.style[i]="number"==typeof o[i]&&!1===s.test(i)?o[i]+"px":o[i]}}else if("dangerouslySetInnerHTML"===t)o&&(e.innerHTML=o.__html||"");else if("o"==t[0]&&"n"==t[1]){var l=t!==(t=t.replace(/Capture$/,""));t=t.toLowerCase().substring(2),o?n||e.addEventListener(t,y,l):e.removeEventListener(t,y,l),(e._listeners||(e._listeners={}))[t]=o}else if("list"!==t&&"type"!==t&&!r&&t in e){try{e[t]=null==o?"":o}catch(p){}null!=o&&!1!==o||"spellcheck"==t||e.removeAttribute(t)}else{var a=r&&t!==(t=t.replace(/^xlink:?/,""));null==o||!1===o?a?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.removeAttribute(t):"function"!=typeof o&&(a?e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),o):e.setAttribute(t,o))}else e.className=o||""}function y(e){return this._listeners[e.type](t.event&&t.event(e)||e)}var b=[],x=0,g=!1,C=!1;function N(){for(var e;e=b.pop();)t.afterMount&&t.afterMount(e),e.componentDidMount&&e.componentDidMount()}function w(e,t,n,o,r,i){x++||(g=null!=r&&void 0!==r.ownerSVGElement,C=null!=e&&!("__preactattr_"in e));var l=k(e,t,n,o,i);return r&&l.parentNode!==r&&r.appendChild(l),--x||(C=!1,i||N()),l}function k(e,t,n,o,r){var i=e,l=g;if(null!=t&&"boolean"!=typeof t||(t=""),"string"==typeof t||"number"==typeof t)return e&&void 0!==e.splitText&&e.parentNode&&(!e._component||r)?e.nodeValue!=t&&(e.nodeValue=t):(i=document.createTextNode(t),e&&(e.parentNode&&e.parentNode.replaceChild(i,e),U(e,!0))),i.__preactattr_=!0,i;var a=t.nodeName;if("function"==typeof a)return D(e,t,n,o);if(g="svg"===a||"foreignObject"!==a&&g,a=String(a),(!e||!f(e,a))&&(i=_(a,g),e)){for(;e.firstChild;)i.appendChild(e.firstChild);e.parentNode&&e.parentNode.replaceChild(i,e),U(e,!0)}var s=i.firstChild,p=i.__preactattr_,c=t.children;if(null==p){p=i.__preactattr_={};for(var u=i.attributes,d=u.length;d--;)p[u[d].name]=u[d].value}return!C&&c&&1===c.length&&"string"==typeof c[0]&&null!=s&&void 0!==s.splitText&&null==s.nextSibling?s.nodeValue!=c[0]&&(s.nodeValue=c[0]):(c&&c.length||null!=s)&&S(i,c,n,o,C||null!=p.dangerouslySetInnerHTML),B(i,t.attributes,p),g=l,i}function S(e,t,n,o,r){var i,l,a,s,p,c=e.childNodes,u=[],f={},v=0,_=0,h=c.length,y=0,b=t?t.length:0;if(0!==h)for(var x=0;x<h;x++){var g=c[x],C=g.__preactattr_;null!=(N=b&&C?g._component?g._component.__key:C.key:null)?(v++,f[N]=g):(C||(void 0!==g.splitText?!r||g.nodeValue.trim():r))&&(u[y++]=g)}if(0!==b)for(x=0;x<b;x++){var N;if(p=null,null!=(N=(s=t[x]).key))v&&void 0!==f[N]&&(p=f[N],f[N]=void 0,v--);else if(_<y)for(i=_;i<y;i++)if(void 0!==u[i]&&d(l=u[i],s,r)){p=l,u[i]=void 0,i===y-1&&y--,i===_&&_++;break}p=k(p,s,n,o),a=c[x],p&&p!==e&&p!==a&&(null==a?e.appendChild(p):p===a.nextSibling?m(a):e.insertBefore(p,a))}if(v)for(var x in f)void 0!==f[x]&&U(f[x],!1);for(;_<=y;)void 0!==(p=u[y--])&&U(p,!1)}function U(e,t){var n=e._component;n?V(n):(null!=e.__preactattr_&&e.__preactattr_.ref&&e.__preactattr_.ref(null),!1!==t&&null!=e.__preactattr_||m(e),P(e))}function P(e){for(e=e.lastChild;e;){var t=e.previousSibling;U(e,!0),e=t}}function B(e,t,n){var o;for(o in n)t&&null!=t[o]||null==n[o]||h(e,o,n[o],n[o]=void 0,g);for(o in t)"children"===o||"innerHTML"===o||o in n&&t[o]===("value"===o||"checked"===o?e[o]:n[o])||h(e,o,n[o],n[o]=t[o],g)}var L=[];function M(e,t,n){var o,r=L.length;for(e.prototype&&e.prototype.render?(o=new e(t,n),A.call(o,t,n)):((o=new A(t,n)).constructor=e,o.render=T);r--;)if(L[r].constructor===e)return o.nextBase=L[r].nextBase,L.splice(r,1),o;return o}function T(e,t,n){return this.constructor(e,n)}function E(e,n,o,r,i){e._disable||(e._disable=!0,e.__ref=n.ref,e.__key=n.key,delete n.ref,delete n.key,void 0===e.constructor.getDerivedStateFromProps&&(!e.base||i?e.componentWillMount&&e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps(n,r)),r&&r!==e.context&&(e.prevContext||(e.prevContext=e.context),e.context=r),e.prevProps||(e.prevProps=e.props),e.props=n,e._disable=!1,0!==o&&(1!==o&&!1===t.syncComponentUpdates&&e.base?c(e):W(e,1,i)),e.__ref&&e.__ref(e))}function W(e,n,o,r){if(!e._disable){var l,a,s,p=e.props,c=e.state,u=e.context,d=e.prevProps||p,f=e.prevState||c,_=e.prevContext||u,m=e.base,h=e.nextBase,y=m||h,g=e._component,C=!1,k=_;if(e.constructor.getDerivedStateFromProps&&(c=i(i({},c),e.constructor.getDerivedStateFromProps(p,c)),e.state=c),m&&(e.props=d,e.state=f,e.context=_,2!==n&&e.shouldComponentUpdate&&!1===e.shouldComponentUpdate(p,c,u)?C=!0:e.componentWillUpdate&&e.componentWillUpdate(p,c,u),e.props=p,e.state=c,e.context=u),e.prevProps=e.prevState=e.prevContext=e.nextBase=null,e._dirty=!1,!C){l=e.render(p,c,u),e.getChildContext&&(u=i(i({},u),e.getChildContext())),m&&e.getSnapshotBeforeUpdate&&(k=e.getSnapshotBeforeUpdate(d,f));var S,P,B=l&&l.nodeName;if("function"==typeof B){var L=v(l);(a=g)&&a.constructor===B&&L.key==a.__key?E(a,L,1,u,!1):(S=a,e._component=a=M(B,L,u),a.nextBase=a.nextBase||h,a._parentComponent=e,E(a,L,0,u,!1),W(a,1,o,!0)),P=a.base}else s=y,(S=g)&&(s=e._component=null),(y||1===n)&&(s&&(s._component=null),P=w(s,l,u,o||!m,y&&y.parentNode,!0));if(y&&P!==y&&a!==g){var T=y.parentNode;T&&P!==T&&(T.replaceChild(P,y),S||(y._component=null,U(y,!1)))}if(S&&V(S),e.base=P,P&&!r){for(var D=e,A=e;A=A._parentComponent;)(D=A).base=P;P._component=D,P._componentConstructor=D.constructor}}for(!m||o?b.unshift(e):C||(e.componentDidUpdate&&e.componentDidUpdate(d,f,k),t.afterUpdate&&t.afterUpdate(e));e._renderCallbacks.length;)e._renderCallbacks.pop().call(e);x||r||N()}}function D(e,t,n,o){for(var r=e&&e._component,i=r,l=e,a=r&&e._componentConstructor===t.nodeName,s=a,p=v(t);r&&!s&&(r=r._parentComponent);)s=r.constructor===t.nodeName;return r&&s&&(!o||r._component)?(E(r,p,3,n,o),e=r.base):(i&&!a&&(V(i),e=l=null),r=M(t.nodeName,p,n),e&&!r.nextBase&&(r.nextBase=e,l=null),E(r,p,1,n,o),e=r.base,l&&e!==l&&(l._component=null,U(l,!1))),e}function V(e){t.beforeUnmount&&t.beforeUnmount(e);var n=e.base;e._disable=!0,e.componentWillUnmount&&e.componentWillUnmount(),e.base=null;var o=e._component;o?V(o):n&&(n.__preactattr_&&n.__preactattr_.ref&&n.__preactattr_.ref(null),e.nextBase=n,m(n),L.push(e),P(n)),e.__ref&&e.__ref(null)}function A(e,t){this._dirty=!0,this.context=t,this.props=e,this.state=this.state||{},this._renderCallbacks=[]}function H(e,t,n){return w(n,e,{},!1,t,!1)}i(A.prototype,{setState:function(e,t){this.prevState||(this.prevState=this.state),this.state=i(i({},this.state),"function"==typeof e?e(this.state,this.props):e),t&&this._renderCallbacks.push(t),c(this)},forceUpdate:function(e){e&&this._renderCallbacks.push(e),W(this,2)},render:function(){}});var j={h:r,createElement:r,cloneElement:a,Component:A,render:H,rerender:u,options:t},z=j;exports.default=z;
},{}],"xIE1":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e={AllAvailable:"All Available",RuleOfHalf:"Rule of Half",RuleOfThird:"Rule of Third"};exports.default=e;
},{}],"Dprk":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t={h1:{fontSize:"26px",fontFamily:"Arial",margin:"10px 0 0 0"},h2:{fontSize:"22px",fontFamily:"Arial",margin:"10px 0 0 0",color:"#dcdbc7"},text:{fontSize:"18px",fontFamily:"Arial",margin:"0 0 2px 0"},textSmall:{fontSize:"14px",fontFamily:"Arial",margin:"0 0 2px 0"}};exports.default=t;
},{}],"bZTS":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("preact"),t=a(require("./gas-strategy")),r=a(require("../typography/typography"));function a(e){return e&&e.__esModule?e:{default:e}}function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function l(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}function u(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?o(e):t}function o(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=function(a){function i(e){var t;return s(this,i),(t=u(this,h(i).call(this,e))).totalAscentTime=0,t.litersNeeded=0,t.amountOfDivers=2,t.calculate(e),t}return d(i,e.Component),l(i,[{key:"shouldComponentUpdate",value:function(e,t){return!isNaN(e.maxDepth)}},{key:"componentWillUpdate",value:function(e,t){this.calculate(e)}},{key:"calculate",value:function(e){this.calculateAscentTime(e),this.calculateMinimumGasLiters(e),this.calculateGas(e)}},{key:"calculateAscentTime",value:function(e){var t=e.maxDepth;if(t<=3)this.totalAscentTime=2*this.amountOfDivers;else if(t<=6)this.totalAscentTime=3*this.amountOfDivers;else if(t<=12)this.totalAscentTime=4*this.amountOfDivers;else if(t<=15)this.totalAscentTime=5*this.amountOfDivers;else if(t>15){var r=t-15,a=Math.ceil(r/9);this.totalAscentTime=(1+a+4)*this.amountOfDivers}else;}},{key:"calculateMinimumGasLiters",value:function(e){var t=Math.floor(e.maxDepth/2)/10+1;this.litersNeeded=40*this.totalAscentTime*t}},{key:"calculateGas",value:function(e){var t=this.getMinBar(24),r=this.getMinBar(12),a=this.getMinBar(22),i=this.getMinBar(11),s=this.getMinBar(20),n=this.getMinBar(10);this.minimumBarNeeded={d12:{minBar:t,usableGas:this.getUsableBar(e,t)},s12:{minBar:r,usableGas:this.getUsableBar(e,r)},d11:{minBar:a,usableGas:this.getUsableBar(e,a)},s11:{minBar:i,usableGas:this.getUsableBar(e,i)},d10:{minBar:s,usableGas:this.getUsableBar(e,s)},s10:{minBar:n,usableGas:this.getUsableBar(e,n)}}}},{key:"getMinBar",value:function(e){var t=Math.floor(this.litersNeeded/e);return t>40?t:40}},{key:"getUsableBar",value:function(e,t){var r=e.cylinderBarCapacity-t;return r>t?r:0}},{key:"render",value:function(){return this.props.tooDeep||"number"!=typeof this.props.maxDepth||this.props.maxDepth<1||"number"!=typeof this.props.cylinderBarCapacity||this.props.cylinderBarCapacity<1?null:(0,e.h)("div",{style:f.container},(0,e.h)("p",{style:r.default.text},"Ascent time from ",(0,e.h)("strong",null,this.props.maxDepth,"m = ",this.totalAscentTime," minutes")),(0,e.h)("p",{style:r.default.text},(0,e.h)("strong",null,this.litersNeeded," L")," minimum gas needed."),(0,e.h)("h2",{style:r.default.h2},"Double 12L cylinders:"),this.renderMinGasText(this.minimumBarNeeded.d12.minBar),this.renderUsableGasText(this.minimumBarNeeded.d12.usableGas),(0,e.h)("h2",{style:r.default.h2},"Single 12L cylinder:"),this.renderMinGasText(this.minimumBarNeeded.s12.minBar),this.renderUsableGasText(this.minimumBarNeeded.s12.usableGas),(0,e.h)("h2",{style:r.default.h2},"Double 11L cylinders:"),this.renderMinGasText(this.minimumBarNeeded.d11.minBar),this.renderUsableGasText(this.minimumBarNeeded.d11.usableGas),(0,e.h)("h2",{style:r.default.h2},"Single 11L cylinder:"),this.renderMinGasText(this.minimumBarNeeded.s11.minBar),this.renderUsableGasText(this.minimumBarNeeded.s11.usableGas),(0,e.h)("h2",{style:r.default.h2},"Double 10L cylinders:"),this.renderMinGasText(this.minimumBarNeeded.d10.minBar),this.renderUsableGasText(this.minimumBarNeeded.d10.usableGas),(0,e.h)("h2",{style:r.default.h2},"Single 10L cylinder:"),this.renderMinGasText(this.minimumBarNeeded.s10.minBar),this.renderUsableGasText(this.minimumBarNeeded.s10.usableGas))}},{key:"renderMinGasText",value:function(t){return(0,e.h)("p",{style:r.default.text},"Minimum gas (for ",this.amountOfDivers," divers): ",(0,e.h)("strong",null,t," BAR"))}},{key:"renderUsableGasText",value:function(a){if(this.props.gasStrategy===t.default.AllAvailable)return(0,e.h)("p",{style:r.default.text},"Usable gas (",this.props.gasStrategy,"): ",(0,e.h)("strong",null,a," BAR"));if(this.props.gasStrategy===t.default.RuleOfHalf){var i=Math.floor(a/2),s=this.props.cylinderBarCapacity-i;return(0,e.h)("p",{style:r.default.text},"Usable gas (",this.props.gasStrategy,"): ",(0,e.h)("strong",null,a," BAR"),(0,e.h)("br",null),"Turn pressure: ",s)}if(this.props.gasStrategy===t.default.RuleOfThird){var n=Math.floor(a/3),l=this.props.cylinderBarCapacity-n;return(0,e.h)("p",{style:r.default.text},"Usable gas (",this.props.gasStrategy,"): ",(0,e.h)("strong",null,a," BAR"),(0,e.h)("br",null),"Turn pressure: ",l,(0,e.h)("br",null),"Emergency gas: ",n)}return null}}]),i}();exports.default=m;var f={container:{backgroundColor:"#08689b",padding:"10px",borderRadius:"10px"}};
},{"preact":"qWa+","./gas-strategy":"xIE1","../typography/typography":"Dprk"}],"2WF+":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("preact"),t=r(require("./result")),a=r(require("./gas-strategy")),n=r(require("../typography/typography"));function r(e){return e&&e.__esModule?e:{default:e}}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.forEach(function(t){o(e,t,a[t])})}return e}function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,t,a){return t&&s(e.prototype,t),a&&s(e,a),e}function y(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?f(e):t}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var g=function(r){function i(e){var t;u(this,i);return(t=y(this,c(i).call(this,e))).gasMix=.32,t.allowedMaxDepth=Math.floor(10*(1.4/t.gasMix-1)),t.state={maxDepth:0,tooDeep:!1,cylinderBarCapacity:200,gasStrategy:a.default.AllAvailable},t.onDepthChange=t.onDepthChange.bind(f(f(t))),t.onCylinderBarCapacityChange=t.onCylinderBarCapacityChange.bind(f(f(t))),t.onGasStrategyChange=t.onGasStrategyChange.bind(f(f(t))),t}return h(i,e.Component),p(i,[{key:"onDepthChange",value:function(e){var t=0;try{t=parseInt(e.target.value)}catch(a){t=0}this.setState({maxDepth:t,tooDeep:t>=this.allowedMaxDepth})}},{key:"onCylinderBarCapacityChange",value:function(e){var t=0;try{t=parseInt(e.target.value)}catch(a){t=0}this.setState({cylinderBarCapacity:t})}},{key:"onGasStrategyChange",value:function(e){this.setState({gasStrategy:e.target.value})}},{key:"render",value:function(){return(0,e.h)("div",{style:b.container},(0,e.h)("h1",{style:n.default.h1},"GUE dive calculator"),(0,e.h)("h2",{style:n.default.h2},"EAN",100*this.gasMix),(0,e.h)("div",{style:b.warning},"This tool is just meant to be used as a guideline and takes no responsibility for your dive. Always make your own personal calculations!"),(0,e.h)("section",{style:b.fields},(0,e.h)("div",{style:b.inputContainer},(0,e.h)("label",{style:b.label,for:"maxdepth"},"Max depth:"),(0,e.h)("input",{id:"maxdepth",style:b.input,type:"number",value:this.state.maxDepth,onKeyUp:this.onDepthChange})),(0,e.h)("div",{style:b.inputContainer},(0,e.h)("label",{style:b.label,for:"capacity"},"Cylinder bar capacity:"),(0,e.h)("input",{id:"capacity",style:b.input,type:"number",value:this.state.cylinderBarCapacity,onKeyUp:this.onCylinderBarCapacityChange})),(0,e.h)("div",{style:b.inputContainer},(0,e.h)("label",{style:b.label,for:"strategy"},"Gas strategy:"),(0,e.h)("select",{id:"strategy",style:b.select,value:this.state.gasStrategy,onChange:this.onGasStrategyChange},(0,e.h)("option",{value:a.default.AllAvailable},a.default.AllAvailable),(0,e.h)("option",{value:a.default.RuleOfHalf},a.default.RuleOfHalf),(0,e.h)("option",{value:a.default.RuleOfThird},a.default.RuleOfThird,"*")))),this.renderWarning(),(0,e.h)(t.default,{maxDepth:this.state.maxDepth,tooDeep:this.state.tooDeep,cylinderBarCapacity:this.state.cylinderBarCapacity,gasStrategy:this.state.gasStrategy}))}},{key:"renderWarning",value:function(){var t="WARNING! To deep for EAN".concat(100*this.gasMix),n=this.state.maxDepth>=this.allowedMaxDepth?(0,e.h)("strong",null,t):null;return this.state.gasStrategy===a.default.RuleOfThird?(0,e.h)("div",{style:b.warning},n,"* GUE Recreational Level 1 divers should always REFRAIN from planning and conducting any dive that requires using the one‐third of usable gas strategy"):(0,e.h)("div",{style:b.warning},n)}}]),i}();exports.default=g;var b={container:{backgroundColor:"#08689b",color:"white",padding:"10px",borderRadius:"10px"},fields:{display:"flex",justifyContent:"space-between"},inputContainer:i({},n.default.textSmall,{border:"1px dotted white",borderRadius:"10px",padding:"4px",marginRight:"4px",minHeight:"50px",display:"inline-flex",flexDirection:"column",justifyContent:"space-between",flex:1}),label:{paddingBottom:"4px"},input:i({},n.default.textSmall,{padding:"4px",border:"1px solid gray",maxWidth:"48px",marginRight:"10px",borderRadius:"6px"}),select:i({},n.default.textSmall,{border:"1px solid gray",marginRight:"10px",minHeight:"31px"}),warning:i({},n.default.textSmall,{margin:"10px 0",color:"#daf260"})};
},{"preact":"qWa+","./result":"bZTS","./gas-strategy":"xIE1","../typography/typography":"Dprk"}],"Focm":[function(require,module,exports) {
"use strict";var t=require("preact"),e=n(require("./components/ascent/ascent"));function n(t){return t&&t.__esModule?t:{default:t}}function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(t,e,n){return e&&u(t.prototype,e),n&&u(t,n),t}function i(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?f(t):e}function f(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&p(t,e)}function p(t,e){return(p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var y=function(n){function r(){return o(this,r),i(this,l(r).apply(this,arguments))}return a(r,t.Component),c(r,[{key:"render",value:function(){return(0,t.h)(e.default,null)}}]),r}();(0,t.render)((0,t.h)(y,null),document.getElementById("gue-app"));
},{"preact":"qWa+","./components/ascent/ascent":"2WF+"}]},{},["Focm"], null)
//# sourceMappingURL=/gue_calculator/dist/gue_calculator.4b2fde6f.map