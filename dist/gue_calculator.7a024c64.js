parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"qWa+":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.createElement=exports.h=r,exports.cloneElement=a,exports.Component=A,exports.render=H,exports.rerender=u,exports.options=exports.default=void 0;var e=function(){},t={};exports.options=t;var n=[],o=[];function r(r,i){var l,a,s,p,c=o;for(p=arguments.length;p-- >2;)n.push(arguments[p]);for(i&&null!=i.children&&(n.length||n.push(i.children),delete i.children);n.length;)if((a=n.pop())&&void 0!==a.pop)for(p=a.length;p--;)n.push(a[p]);else"boolean"==typeof a&&(a=null),(s="function"!=typeof r)&&(null==a?a="":"number"==typeof a?a=String(a):"string"!=typeof a&&(s=!1)),s&&l?c[c.length-1]+=a:c===o?c=[a]:c.push(a),l=s;var u=new e;return u.nodeName=r,u.children=c,u.attributes=null==i?void 0:i,u.key=null==i?void 0:i.key,void 0!==t.vnode&&t.vnode(u),u}function i(e,t){for(var n in t)e[n]=t[n];return e}var l="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout;function a(e,t){return r(e.nodeName,i(i({},e.attributes),t),arguments.length>2?[].slice.call(arguments,2):e.children)}var s=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,p=[];function c(e){!e._dirty&&(e._dirty=!0)&&1==p.push(e)&&(t.debounceRendering||l)(u)}function u(){var e,t=p;for(p=[];e=t.pop();)e._dirty&&W(e)}function d(e,t,n){return"string"==typeof t||"number"==typeof t?void 0!==e.splitText:"string"==typeof t.nodeName?!e._componentConstructor&&f(e,t.nodeName):n||e._componentConstructor===t.nodeName}function f(e,t){return e.normalizedNodeName===t||e.nodeName.toLowerCase()===t.toLowerCase()}function v(e){var t=i({},e.attributes);t.children=e.children;var n=e.nodeName.defaultProps;if(void 0!==n)for(var o in n)void 0===t[o]&&(t[o]=n[o]);return t}function _(e,t){var n=t?document.createElementNS("http://www.w3.org/2000/svg",e):document.createElement(e);return n.normalizedNodeName=e,n}function m(e){var t=e.parentNode;t&&t.removeChild(e)}function h(e,t,n,o,r){if("className"===t&&(t="class"),"key"===t);else if("ref"===t)n&&n(null),o&&o(e);else if("class"!==t||r)if("style"===t){if(o&&"string"!=typeof o&&"string"!=typeof n||(e.style.cssText=o||""),o&&"object"==typeof o){if("string"!=typeof n)for(var i in n)i in o||(e.style[i]="");for(var i in o)e.style[i]="number"==typeof o[i]&&!1===s.test(i)?o[i]+"px":o[i]}}else if("dangerouslySetInnerHTML"===t)o&&(e.innerHTML=o.__html||"");else if("o"==t[0]&&"n"==t[1]){var l=t!==(t=t.replace(/Capture$/,""));t=t.toLowerCase().substring(2),o?n||e.addEventListener(t,y,l):e.removeEventListener(t,y,l),(e._listeners||(e._listeners={}))[t]=o}else if("list"!==t&&"type"!==t&&!r&&t in e){try{e[t]=null==o?"":o}catch(p){}null!=o&&!1!==o||"spellcheck"==t||e.removeAttribute(t)}else{var a=r&&t!==(t=t.replace(/^xlink:?/,""));null==o||!1===o?a?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.removeAttribute(t):"function"!=typeof o&&(a?e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),o):e.setAttribute(t,o))}else e.className=o||""}function y(e){return this._listeners[e.type](t.event&&t.event(e)||e)}var b=[],x=0,g=!1,C=!1;function N(){for(var e;e=b.pop();)t.afterMount&&t.afterMount(e),e.componentDidMount&&e.componentDidMount()}function w(e,t,n,o,r,i){x++||(g=null!=r&&void 0!==r.ownerSVGElement,C=null!=e&&!("__preactattr_"in e));var l=k(e,t,n,o,i);return r&&l.parentNode!==r&&r.appendChild(l),--x||(C=!1,i||N()),l}function k(e,t,n,o,r){var i=e,l=g;if(null!=t&&"boolean"!=typeof t||(t=""),"string"==typeof t||"number"==typeof t)return e&&void 0!==e.splitText&&e.parentNode&&(!e._component||r)?e.nodeValue!=t&&(e.nodeValue=t):(i=document.createTextNode(t),e&&(e.parentNode&&e.parentNode.replaceChild(i,e),U(e,!0))),i.__preactattr_=!0,i;var a=t.nodeName;if("function"==typeof a)return D(e,t,n,o);if(g="svg"===a||"foreignObject"!==a&&g,a=String(a),(!e||!f(e,a))&&(i=_(a,g),e)){for(;e.firstChild;)i.appendChild(e.firstChild);e.parentNode&&e.parentNode.replaceChild(i,e),U(e,!0)}var s=i.firstChild,p=i.__preactattr_,c=t.children;if(null==p){p=i.__preactattr_={};for(var u=i.attributes,d=u.length;d--;)p[u[d].name]=u[d].value}return!C&&c&&1===c.length&&"string"==typeof c[0]&&null!=s&&void 0!==s.splitText&&null==s.nextSibling?s.nodeValue!=c[0]&&(s.nodeValue=c[0]):(c&&c.length||null!=s)&&S(i,c,n,o,C||null!=p.dangerouslySetInnerHTML),B(i,t.attributes,p),g=l,i}function S(e,t,n,o,r){var i,l,a,s,p,c=e.childNodes,u=[],f={},v=0,_=0,h=c.length,y=0,b=t?t.length:0;if(0!==h)for(var x=0;x<h;x++){var g=c[x],C=g.__preactattr_;null!=(N=b&&C?g._component?g._component.__key:C.key:null)?(v++,f[N]=g):(C||(void 0!==g.splitText?!r||g.nodeValue.trim():r))&&(u[y++]=g)}if(0!==b)for(x=0;x<b;x++){var N;if(p=null,null!=(N=(s=t[x]).key))v&&void 0!==f[N]&&(p=f[N],f[N]=void 0,v--);else if(_<y)for(i=_;i<y;i++)if(void 0!==u[i]&&d(l=u[i],s,r)){p=l,u[i]=void 0,i===y-1&&y--,i===_&&_++;break}p=k(p,s,n,o),a=c[x],p&&p!==e&&p!==a&&(null==a?e.appendChild(p):p===a.nextSibling?m(a):e.insertBefore(p,a))}if(v)for(var x in f)void 0!==f[x]&&U(f[x],!1);for(;_<=y;)void 0!==(p=u[y--])&&U(p,!1)}function U(e,t){var n=e._component;n?V(n):(null!=e.__preactattr_&&e.__preactattr_.ref&&e.__preactattr_.ref(null),!1!==t&&null!=e.__preactattr_||m(e),P(e))}function P(e){for(e=e.lastChild;e;){var t=e.previousSibling;U(e,!0),e=t}}function B(e,t,n){var o;for(o in n)t&&null!=t[o]||null==n[o]||h(e,o,n[o],n[o]=void 0,g);for(o in t)"children"===o||"innerHTML"===o||o in n&&t[o]===("value"===o||"checked"===o?e[o]:n[o])||h(e,o,n[o],n[o]=t[o],g)}var L=[];function M(e,t,n){var o,r=L.length;for(e.prototype&&e.prototype.render?(o=new e(t,n),A.call(o,t,n)):((o=new A(t,n)).constructor=e,o.render=T);r--;)if(L[r].constructor===e)return o.nextBase=L[r].nextBase,L.splice(r,1),o;return o}function T(e,t,n){return this.constructor(e,n)}function E(e,n,o,r,i){e._disable||(e._disable=!0,e.__ref=n.ref,e.__key=n.key,delete n.ref,delete n.key,void 0===e.constructor.getDerivedStateFromProps&&(!e.base||i?e.componentWillMount&&e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps(n,r)),r&&r!==e.context&&(e.prevContext||(e.prevContext=e.context),e.context=r),e.prevProps||(e.prevProps=e.props),e.props=n,e._disable=!1,0!==o&&(1!==o&&!1===t.syncComponentUpdates&&e.base?c(e):W(e,1,i)),e.__ref&&e.__ref(e))}function W(e,n,o,r){if(!e._disable){var l,a,s,p=e.props,c=e.state,u=e.context,d=e.prevProps||p,f=e.prevState||c,_=e.prevContext||u,m=e.base,h=e.nextBase,y=m||h,g=e._component,C=!1,k=_;if(e.constructor.getDerivedStateFromProps&&(c=i(i({},c),e.constructor.getDerivedStateFromProps(p,c)),e.state=c),m&&(e.props=d,e.state=f,e.context=_,2!==n&&e.shouldComponentUpdate&&!1===e.shouldComponentUpdate(p,c,u)?C=!0:e.componentWillUpdate&&e.componentWillUpdate(p,c,u),e.props=p,e.state=c,e.context=u),e.prevProps=e.prevState=e.prevContext=e.nextBase=null,e._dirty=!1,!C){l=e.render(p,c,u),e.getChildContext&&(u=i(i({},u),e.getChildContext())),m&&e.getSnapshotBeforeUpdate&&(k=e.getSnapshotBeforeUpdate(d,f));var S,P,B=l&&l.nodeName;if("function"==typeof B){var L=v(l);(a=g)&&a.constructor===B&&L.key==a.__key?E(a,L,1,u,!1):(S=a,e._component=a=M(B,L,u),a.nextBase=a.nextBase||h,a._parentComponent=e,E(a,L,0,u,!1),W(a,1,o,!0)),P=a.base}else s=y,(S=g)&&(s=e._component=null),(y||1===n)&&(s&&(s._component=null),P=w(s,l,u,o||!m,y&&y.parentNode,!0));if(y&&P!==y&&a!==g){var T=y.parentNode;T&&P!==T&&(T.replaceChild(P,y),S||(y._component=null,U(y,!1)))}if(S&&V(S),e.base=P,P&&!r){for(var D=e,A=e;A=A._parentComponent;)(D=A).base=P;P._component=D,P._componentConstructor=D.constructor}}for(!m||o?b.unshift(e):C||(e.componentDidUpdate&&e.componentDidUpdate(d,f,k),t.afterUpdate&&t.afterUpdate(e));e._renderCallbacks.length;)e._renderCallbacks.pop().call(e);x||r||N()}}function D(e,t,n,o){for(var r=e&&e._component,i=r,l=e,a=r&&e._componentConstructor===t.nodeName,s=a,p=v(t);r&&!s&&(r=r._parentComponent);)s=r.constructor===t.nodeName;return r&&s&&(!o||r._component)?(E(r,p,3,n,o),e=r.base):(i&&!a&&(V(i),e=l=null),r=M(t.nodeName,p,n),e&&!r.nextBase&&(r.nextBase=e,l=null),E(r,p,1,n,o),e=r.base,l&&e!==l&&(l._component=null,U(l,!1))),e}function V(e){t.beforeUnmount&&t.beforeUnmount(e);var n=e.base;e._disable=!0,e.componentWillUnmount&&e.componentWillUnmount(),e.base=null;var o=e._component;o?V(o):n&&(n.__preactattr_&&n.__preactattr_.ref&&n.__preactattr_.ref(null),e.nextBase=n,m(n),L.push(e),P(n)),e.__ref&&e.__ref(null)}function A(e,t){this._dirty=!0,this.context=t,this.props=e,this.state=this.state||{},this._renderCallbacks=[]}function H(e,t,n){return w(n,e,{},!1,t,!1)}i(A.prototype,{setState:function(e,t){this.prevState||(this.prevState=this.state),this.state=i(i({},this.state),"function"==typeof e?e(this.state,this.props):e),t&&this._renderCallbacks.push(t),c(this)},forceUpdate:function(e){e&&this._renderCallbacks.push(e),W(this,2)},render:function(){}});var j={h:r,createElement:r,cloneElement:a,Component:A,render:H,rerender:u,options:t},z=j;exports.default=z;
},{}],"bZTS":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("preact");function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function r(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),e}function o(e,i){return!i||"object"!==t(i)&&"function"!=typeof i?s(e):i}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var c=function(t){function n(e){var t;return i(this,n),(t=o(this,l(n).call(this,e))).totalAscentTime=0,t.litersNeeded=0,t.amountOfDivers=2,t.calculate(e),t}return a(n,e.Component),r(n,[{key:"shouldComponentUpdate",value:function(e,t){return!isNaN(e.maxDepth)}},{key:"componentWillUpdate",value:function(e,t){this.calculate(e)}},{key:"calculate",value:function(e){this.calculateAscentTime(e),this.calculateMinimumGasLiters(e),this.calculateMinimumGasBar()}},{key:"calculateAscentTime",value:function(e){var t=e.maxDepth;if(t<=3)this.totalAscentTime=2*this.amountOfDivers;else if(t<=6)this.totalAscentTime=3*this.amountOfDivers;else if(t<=12)this.totalAscentTime=4*this.amountOfDivers;else if(t<=15)this.totalAscentTime=5*this.amountOfDivers;else if(t>15){var i=t-15,n=Math.ceil(i/9);this.totalAscentTime=(1+n+4)*this.amountOfDivers}else;}},{key:"calculateMinimumGasLiters",value:function(e){var t=Math.ceil(e.maxDepth/2)/10+1;this.litersNeeded=40*this.totalAscentTime*t}},{key:"calculateMinimumGasBar",value:function(){this.barNeeded={d12:Math.ceil(this.litersNeeded/24),s12:Math.ceil(this.litersNeeded/12),d11:Math.ceil(this.litersNeeded/22),s11:Math.ceil(this.litersNeeded/11),d10:Math.ceil(this.litersNeeded/20),s10:Math.ceil(this.litersNeeded/10)}}},{key:"render",value:function(){return"number"!=typeof this.props.maxDepth||this.props.maxDepth<1?null:(0,e.h)("div",{style:h.container},(0,e.h)("h2",null,"Ascent time"),(0,e.h)("p",{style:h.text},"From ",this.props.maxDepth,"m = ",this.totalAscentTime," minutes"),(0,e.h)("h2",null,"Minimum gas enough for ",this.amountOfDivers," divers"),(0,e.h)("p",{style:h.text},this.litersNeeded," L total gas."),(0,e.h)("p",{style:h.text},"Double 12L cylinders: ",this.barNeeded.d12," BAR"),(0,e.h)("p",{style:h.text},"Single 12L cylinder: ",this.barNeeded.s12," BAR"),(0,e.h)("p",{style:h.text},"Double 11L cylinders: ",this.barNeeded.d11," BAR"),(0,e.h)("p",{style:h.text},"Single 11L cylinder: ",this.barNeeded.s11," BAR"),(0,e.h)("p",{style:h.text},"Double 10L cylinders: ",this.barNeeded.d10," BAR"),(0,e.h)("p",{style:h.text},"Single 10L cylinder: ",this.barNeeded.s10," BAR"))}}]),n}();exports.default=c;var h={container:{backgroundColor:"#08689b",padding:"10px",borderRadius:"10px"},text:{fontSize:"18px",fontFamily:"Arial"}};
},{"preact":"qWa+"}],"2WF+":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=require("preact"),e=n(require("./result"));function n(t){return t&&t.__esModule?t:{default:t}}function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e,n){return e&&u(t.prototype,e),n&&u(t,n),t}function a(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?f(t):e}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var s=function(n){function r(t){var e;return o(this,r),(e=a(this,p(r).call(this,t))).state={maxDepth:0},e.onDepthChange=e.onDepthChange.bind(f(f(e))),e}return c(r,t.Component),i(r,[{key:"onDepthChange",value:function(t){var e=0;try{e=parseInt(t.target.value)}catch(n){}this.setState({maxDepth:e})}},{key:"render",value:function(){return(0,t.h)("div",{style:h.container},(0,t.h)("h1",null,"Ascent calculator"),(0,t.h)("input",{style:h.input,type:"number",min:"0",max:"40",value:this.state.maxDepth,placeholder:"Max depth metres?",onKeyUp:this.onDepthChange}),(0,t.h)(e.default,{maxDepth:this.state.maxDepth}))}}]),r}();exports.default=s;var h={container:{backgroundColor:"#08689b",color:"white",padding:"10px",borderRadius:"10px"},input:{fontSize:"18px",fontFamily:"Arial",padding:"4px",border:"1px solid gray",minWidth:"80px"}};
},{"preact":"qWa+","./result":"bZTS"}],"Focm":[function(require,module,exports) {
"use strict";var t=require("preact"),e=n(require("./components/ascent/ascent"));function n(t){return t&&t.__esModule?t:{default:t}}function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(t,e,n){return e&&u(t.prototype,e),n&&u(t,n),t}function i(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?f(t):e}function f(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&p(t,e)}function p(t,e){return(p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var y=function(n){function r(){return o(this,r),i(this,l(r).apply(this,arguments))}return a(r,t.Component),c(r,[{key:"render",value:function(){return(0,t.h)(e.default,null)}}]),r}();(0,t.render)((0,t.h)(y,null),document.getElementById("gue-app"));
},{"preact":"qWa+","./components/ascent/ascent":"2WF+"}]},{},["Focm"], null)
//# sourceMappingURL=/gue_calculator/dist/gue_calculator.7a024c64.map