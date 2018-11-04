// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"node_modules/preact/dist/preact.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createElement = exports.h = h;
exports.cloneElement = cloneElement;
exports.Component = Component;
exports.render = render;
exports.rerender = rerender;
exports.options = exports.default = void 0;

var VNode = function VNode() {};

var options = {};
exports.options = options;
var stack = [];
var EMPTY_CHILDREN = [];

function h(nodeName, attributes) {
  var children = EMPTY_CHILDREN,
      lastSimple,
      child,
      simple,
      i;

  for (i = arguments.length; i-- > 2;) {
    stack.push(arguments[i]);
  }

  if (attributes && attributes.children != null) {
    if (!stack.length) stack.push(attributes.children);
    delete attributes.children;
  }

  while (stack.length) {
    if ((child = stack.pop()) && child.pop !== undefined) {
      for (i = child.length; i--;) {
        stack.push(child[i]);
      }
    } else {
      if (typeof child === 'boolean') child = null;

      if (simple = typeof nodeName !== 'function') {
        if (child == null) child = '';else if (typeof child === 'number') child = String(child);else if (typeof child !== 'string') simple = false;
      }

      if (simple && lastSimple) {
        children[children.length - 1] += child;
      } else if (children === EMPTY_CHILDREN) {
        children = [child];
      } else {
        children.push(child);
      }

      lastSimple = simple;
    }
  }

  var p = new VNode();
  p.nodeName = nodeName;
  p.children = children;
  p.attributes = attributes == null ? undefined : attributes;
  p.key = attributes == null ? undefined : attributes.key;
  if (options.vnode !== undefined) options.vnode(p);
  return p;
}

function extend(obj, props) {
  for (var i in props) {
    obj[i] = props[i];
  }

  return obj;
}

var defer = typeof Promise == 'function' ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout;

function cloneElement(vnode, props) {
  return h(vnode.nodeName, extend(extend({}, vnode.attributes), props), arguments.length > 2 ? [].slice.call(arguments, 2) : vnode.children);
}

var IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;
var items = [];

function enqueueRender(component) {
  if (!component._dirty && (component._dirty = true) && items.push(component) == 1) {
    (options.debounceRendering || defer)(rerender);
  }
}

function rerender() {
  var p,
      list = items;
  items = [];

  while (p = list.pop()) {
    if (p._dirty) renderComponent(p);
  }
}

function isSameNodeType(node, vnode, hydrating) {
  if (typeof vnode === 'string' || typeof vnode === 'number') {
    return node.splitText !== undefined;
  }

  if (typeof vnode.nodeName === 'string') {
    return !node._componentConstructor && isNamedNode(node, vnode.nodeName);
  }

  return hydrating || node._componentConstructor === vnode.nodeName;
}

function isNamedNode(node, nodeName) {
  return node.normalizedNodeName === nodeName || node.nodeName.toLowerCase() === nodeName.toLowerCase();
}

function getNodeProps(vnode) {
  var props = extend({}, vnode.attributes);
  props.children = vnode.children;
  var defaultProps = vnode.nodeName.defaultProps;

  if (defaultProps !== undefined) {
    for (var i in defaultProps) {
      if (props[i] === undefined) {
        props[i] = defaultProps[i];
      }
    }
  }

  return props;
}

function createNode(nodeName, isSvg) {
  var node = isSvg ? document.createElementNS('http://www.w3.org/2000/svg', nodeName) : document.createElement(nodeName);
  node.normalizedNodeName = nodeName;
  return node;
}

function removeNode(node) {
  var parentNode = node.parentNode;
  if (parentNode) parentNode.removeChild(node);
}

function setAccessor(node, name, old, value, isSvg) {
  if (name === 'className') name = 'class';

  if (name === 'key') {} else if (name === 'ref') {
    if (old) old(null);
    if (value) value(node);
  } else if (name === 'class' && !isSvg) {
    node.className = value || '';
  } else if (name === 'style') {
    if (!value || typeof value === 'string' || typeof old === 'string') {
      node.style.cssText = value || '';
    }

    if (value && typeof value === 'object') {
      if (typeof old !== 'string') {
        for (var i in old) {
          if (!(i in value)) node.style[i] = '';
        }
      }

      for (var i in value) {
        node.style[i] = typeof value[i] === 'number' && IS_NON_DIMENSIONAL.test(i) === false ? value[i] + 'px' : value[i];
      }
    }
  } else if (name === 'dangerouslySetInnerHTML') {
    if (value) node.innerHTML = value.__html || '';
  } else if (name[0] == 'o' && name[1] == 'n') {
    var useCapture = name !== (name = name.replace(/Capture$/, ''));
    name = name.toLowerCase().substring(2);

    if (value) {
      if (!old) node.addEventListener(name, eventProxy, useCapture);
    } else {
      node.removeEventListener(name, eventProxy, useCapture);
    }

    (node._listeners || (node._listeners = {}))[name] = value;
  } else if (name !== 'list' && name !== 'type' && !isSvg && name in node) {
    try {
      node[name] = value == null ? '' : value;
    } catch (e) {}

    if ((value == null || value === false) && name != 'spellcheck') node.removeAttribute(name);
  } else {
    var ns = isSvg && name !== (name = name.replace(/^xlink:?/, ''));

    if (value == null || value === false) {
      if (ns) node.removeAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase());else node.removeAttribute(name);
    } else if (typeof value !== 'function') {
      if (ns) node.setAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase(), value);else node.setAttribute(name, value);
    }
  }
}

function eventProxy(e) {
  return this._listeners[e.type](options.event && options.event(e) || e);
}

var mounts = [];
var diffLevel = 0;
var isSvgMode = false;
var hydrating = false;

function flushMounts() {
  var c;

  while (c = mounts.pop()) {
    if (options.afterMount) options.afterMount(c);
    if (c.componentDidMount) c.componentDidMount();
  }
}

function diff(dom, vnode, context, mountAll, parent, componentRoot) {
  if (!diffLevel++) {
    isSvgMode = parent != null && parent.ownerSVGElement !== undefined;
    hydrating = dom != null && !('__preactattr_' in dom);
  }

  var ret = idiff(dom, vnode, context, mountAll, componentRoot);
  if (parent && ret.parentNode !== parent) parent.appendChild(ret);

  if (! --diffLevel) {
    hydrating = false;
    if (!componentRoot) flushMounts();
  }

  return ret;
}

function idiff(dom, vnode, context, mountAll, componentRoot) {
  var out = dom,
      prevSvgMode = isSvgMode;
  if (vnode == null || typeof vnode === 'boolean') vnode = '';

  if (typeof vnode === 'string' || typeof vnode === 'number') {
    if (dom && dom.splitText !== undefined && dom.parentNode && (!dom._component || componentRoot)) {
      if (dom.nodeValue != vnode) {
        dom.nodeValue = vnode;
      }
    } else {
      out = document.createTextNode(vnode);

      if (dom) {
        if (dom.parentNode) dom.parentNode.replaceChild(out, dom);
        recollectNodeTree(dom, true);
      }
    }

    out['__preactattr_'] = true;
    return out;
  }

  var vnodeName = vnode.nodeName;

  if (typeof vnodeName === 'function') {
    return buildComponentFromVNode(dom, vnode, context, mountAll);
  }

  isSvgMode = vnodeName === 'svg' ? true : vnodeName === 'foreignObject' ? false : isSvgMode;
  vnodeName = String(vnodeName);

  if (!dom || !isNamedNode(dom, vnodeName)) {
    out = createNode(vnodeName, isSvgMode);

    if (dom) {
      while (dom.firstChild) {
        out.appendChild(dom.firstChild);
      }

      if (dom.parentNode) dom.parentNode.replaceChild(out, dom);
      recollectNodeTree(dom, true);
    }
  }

  var fc = out.firstChild,
      props = out['__preactattr_'],
      vchildren = vnode.children;

  if (props == null) {
    props = out['__preactattr_'] = {};

    for (var a = out.attributes, i = a.length; i--;) {
      props[a[i].name] = a[i].value;
    }
  }

  if (!hydrating && vchildren && vchildren.length === 1 && typeof vchildren[0] === 'string' && fc != null && fc.splitText !== undefined && fc.nextSibling == null) {
    if (fc.nodeValue != vchildren[0]) {
      fc.nodeValue = vchildren[0];
    }
  } else if (vchildren && vchildren.length || fc != null) {
    innerDiffNode(out, vchildren, context, mountAll, hydrating || props.dangerouslySetInnerHTML != null);
  }

  diffAttributes(out, vnode.attributes, props);
  isSvgMode = prevSvgMode;
  return out;
}

function innerDiffNode(dom, vchildren, context, mountAll, isHydrating) {
  var originalChildren = dom.childNodes,
      children = [],
      keyed = {},
      keyedLen = 0,
      min = 0,
      len = originalChildren.length,
      childrenLen = 0,
      vlen = vchildren ? vchildren.length : 0,
      j,
      c,
      f,
      vchild,
      child;

  if (len !== 0) {
    for (var i = 0; i < len; i++) {
      var _child = originalChildren[i],
          props = _child['__preactattr_'],
          key = vlen && props ? _child._component ? _child._component.__key : props.key : null;

      if (key != null) {
        keyedLen++;
        keyed[key] = _child;
      } else if (props || (_child.splitText !== undefined ? isHydrating ? _child.nodeValue.trim() : true : isHydrating)) {
        children[childrenLen++] = _child;
      }
    }
  }

  if (vlen !== 0) {
    for (var i = 0; i < vlen; i++) {
      vchild = vchildren[i];
      child = null;
      var key = vchild.key;

      if (key != null) {
        if (keyedLen && keyed[key] !== undefined) {
          child = keyed[key];
          keyed[key] = undefined;
          keyedLen--;
        }
      } else if (min < childrenLen) {
        for (j = min; j < childrenLen; j++) {
          if (children[j] !== undefined && isSameNodeType(c = children[j], vchild, isHydrating)) {
            child = c;
            children[j] = undefined;
            if (j === childrenLen - 1) childrenLen--;
            if (j === min) min++;
            break;
          }
        }
      }

      child = idiff(child, vchild, context, mountAll);
      f = originalChildren[i];

      if (child && child !== dom && child !== f) {
        if (f == null) {
          dom.appendChild(child);
        } else if (child === f.nextSibling) {
          removeNode(f);
        } else {
          dom.insertBefore(child, f);
        }
      }
    }
  }

  if (keyedLen) {
    for (var i in keyed) {
      if (keyed[i] !== undefined) recollectNodeTree(keyed[i], false);
    }
  }

  while (min <= childrenLen) {
    if ((child = children[childrenLen--]) !== undefined) recollectNodeTree(child, false);
  }
}

function recollectNodeTree(node, unmountOnly) {
  var component = node._component;

  if (component) {
    unmountComponent(component);
  } else {
    if (node['__preactattr_'] != null && node['__preactattr_'].ref) node['__preactattr_'].ref(null);

    if (unmountOnly === false || node['__preactattr_'] == null) {
      removeNode(node);
    }

    removeChildren(node);
  }
}

function removeChildren(node) {
  node = node.lastChild;

  while (node) {
    var next = node.previousSibling;
    recollectNodeTree(node, true);
    node = next;
  }
}

function diffAttributes(dom, attrs, old) {
  var name;

  for (name in old) {
    if (!(attrs && attrs[name] != null) && old[name] != null) {
      setAccessor(dom, name, old[name], old[name] = undefined, isSvgMode);
    }
  }

  for (name in attrs) {
    if (name !== 'children' && name !== 'innerHTML' && (!(name in old) || attrs[name] !== (name === 'value' || name === 'checked' ? dom[name] : old[name]))) {
      setAccessor(dom, name, old[name], old[name] = attrs[name], isSvgMode);
    }
  }
}

var recyclerComponents = [];

function createComponent(Ctor, props, context) {
  var inst,
      i = recyclerComponents.length;

  if (Ctor.prototype && Ctor.prototype.render) {
    inst = new Ctor(props, context);
    Component.call(inst, props, context);
  } else {
    inst = new Component(props, context);
    inst.constructor = Ctor;
    inst.render = doRender;
  }

  while (i--) {
    if (recyclerComponents[i].constructor === Ctor) {
      inst.nextBase = recyclerComponents[i].nextBase;
      recyclerComponents.splice(i, 1);
      return inst;
    }
  }

  return inst;
}

function doRender(props, state, context) {
  return this.constructor(props, context);
}

function setComponentProps(component, props, renderMode, context, mountAll) {
  if (component._disable) return;
  component._disable = true;
  component.__ref = props.ref;
  component.__key = props.key;
  delete props.ref;
  delete props.key;

  if (typeof component.constructor.getDerivedStateFromProps === 'undefined') {
    if (!component.base || mountAll) {
      if (component.componentWillMount) component.componentWillMount();
    } else if (component.componentWillReceiveProps) {
      component.componentWillReceiveProps(props, context);
    }
  }

  if (context && context !== component.context) {
    if (!component.prevContext) component.prevContext = component.context;
    component.context = context;
  }

  if (!component.prevProps) component.prevProps = component.props;
  component.props = props;
  component._disable = false;

  if (renderMode !== 0) {
    if (renderMode === 1 || options.syncComponentUpdates !== false || !component.base) {
      renderComponent(component, 1, mountAll);
    } else {
      enqueueRender(component);
    }
  }

  if (component.__ref) component.__ref(component);
}

function renderComponent(component, renderMode, mountAll, isChild) {
  if (component._disable) return;
  var props = component.props,
      state = component.state,
      context = component.context,
      previousProps = component.prevProps || props,
      previousState = component.prevState || state,
      previousContext = component.prevContext || context,
      isUpdate = component.base,
      nextBase = component.nextBase,
      initialBase = isUpdate || nextBase,
      initialChildComponent = component._component,
      skip = false,
      snapshot = previousContext,
      rendered,
      inst,
      cbase;

  if (component.constructor.getDerivedStateFromProps) {
    state = extend(extend({}, state), component.constructor.getDerivedStateFromProps(props, state));
    component.state = state;
  }

  if (isUpdate) {
    component.props = previousProps;
    component.state = previousState;
    component.context = previousContext;

    if (renderMode !== 2 && component.shouldComponentUpdate && component.shouldComponentUpdate(props, state, context) === false) {
      skip = true;
    } else if (component.componentWillUpdate) {
      component.componentWillUpdate(props, state, context);
    }

    component.props = props;
    component.state = state;
    component.context = context;
  }

  component.prevProps = component.prevState = component.prevContext = component.nextBase = null;
  component._dirty = false;

  if (!skip) {
    rendered = component.render(props, state, context);

    if (component.getChildContext) {
      context = extend(extend({}, context), component.getChildContext());
    }

    if (isUpdate && component.getSnapshotBeforeUpdate) {
      snapshot = component.getSnapshotBeforeUpdate(previousProps, previousState);
    }

    var childComponent = rendered && rendered.nodeName,
        toUnmount,
        base;

    if (typeof childComponent === 'function') {
      var childProps = getNodeProps(rendered);
      inst = initialChildComponent;

      if (inst && inst.constructor === childComponent && childProps.key == inst.__key) {
        setComponentProps(inst, childProps, 1, context, false);
      } else {
        toUnmount = inst;
        component._component = inst = createComponent(childComponent, childProps, context);
        inst.nextBase = inst.nextBase || nextBase;
        inst._parentComponent = component;
        setComponentProps(inst, childProps, 0, context, false);
        renderComponent(inst, 1, mountAll, true);
      }

      base = inst.base;
    } else {
      cbase = initialBase;
      toUnmount = initialChildComponent;

      if (toUnmount) {
        cbase = component._component = null;
      }

      if (initialBase || renderMode === 1) {
        if (cbase) cbase._component = null;
        base = diff(cbase, rendered, context, mountAll || !isUpdate, initialBase && initialBase.parentNode, true);
      }
    }

    if (initialBase && base !== initialBase && inst !== initialChildComponent) {
      var baseParent = initialBase.parentNode;

      if (baseParent && base !== baseParent) {
        baseParent.replaceChild(base, initialBase);

        if (!toUnmount) {
          initialBase._component = null;
          recollectNodeTree(initialBase, false);
        }
      }
    }

    if (toUnmount) {
      unmountComponent(toUnmount);
    }

    component.base = base;

    if (base && !isChild) {
      var componentRef = component,
          t = component;

      while (t = t._parentComponent) {
        (componentRef = t).base = base;
      }

      base._component = componentRef;
      base._componentConstructor = componentRef.constructor;
    }
  }

  if (!isUpdate || mountAll) {
    mounts.unshift(component);
  } else if (!skip) {
    if (component.componentDidUpdate) {
      component.componentDidUpdate(previousProps, previousState, snapshot);
    }

    if (options.afterUpdate) options.afterUpdate(component);
  }

  while (component._renderCallbacks.length) {
    component._renderCallbacks.pop().call(component);
  }

  if (!diffLevel && !isChild) flushMounts();
}

function buildComponentFromVNode(dom, vnode, context, mountAll) {
  var c = dom && dom._component,
      originalComponent = c,
      oldDom = dom,
      isDirectOwner = c && dom._componentConstructor === vnode.nodeName,
      isOwner = isDirectOwner,
      props = getNodeProps(vnode);

  while (c && !isOwner && (c = c._parentComponent)) {
    isOwner = c.constructor === vnode.nodeName;
  }

  if (c && isOwner && (!mountAll || c._component)) {
    setComponentProps(c, props, 3, context, mountAll);
    dom = c.base;
  } else {
    if (originalComponent && !isDirectOwner) {
      unmountComponent(originalComponent);
      dom = oldDom = null;
    }

    c = createComponent(vnode.nodeName, props, context);

    if (dom && !c.nextBase) {
      c.nextBase = dom;
      oldDom = null;
    }

    setComponentProps(c, props, 1, context, mountAll);
    dom = c.base;

    if (oldDom && dom !== oldDom) {
      oldDom._component = null;
      recollectNodeTree(oldDom, false);
    }
  }

  return dom;
}

function unmountComponent(component) {
  if (options.beforeUnmount) options.beforeUnmount(component);
  var base = component.base;
  component._disable = true;
  if (component.componentWillUnmount) component.componentWillUnmount();
  component.base = null;
  var inner = component._component;

  if (inner) {
    unmountComponent(inner);
  } else if (base) {
    if (base['__preactattr_'] && base['__preactattr_'].ref) base['__preactattr_'].ref(null);
    component.nextBase = base;
    removeNode(base);
    recyclerComponents.push(component);
    removeChildren(base);
  }

  if (component.__ref) component.__ref(null);
}

function Component(props, context) {
  this._dirty = true;
  this.context = context;
  this.props = props;
  this.state = this.state || {};
  this._renderCallbacks = [];
}

extend(Component.prototype, {
  setState: function setState(state, callback) {
    if (!this.prevState) this.prevState = this.state;
    this.state = extend(extend({}, this.state), typeof state === 'function' ? state(this.state, this.props) : state);
    if (callback) this._renderCallbacks.push(callback);
    enqueueRender(this);
  },
  forceUpdate: function forceUpdate(callback) {
    if (callback) this._renderCallbacks.push(callback);
    renderComponent(this, 2);
  },
  render: function render() {}
});

function render(vnode, parent, merge) {
  return diff(merge, vnode, {}, false, parent, false);
}

var preact = {
  h: h,
  createElement: h,
  cloneElement: cloneElement,
  Component: Component,
  render: render,
  rerender: rerender,
  options: options
};
var _default = preact;
exports.default = _default;
},{}],"components/ascent/gas-strategy.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  AllAvailable: "All Available",
  RuleOfHalf: "Rule of Half",
  RuleOfThird: "Rule of Third"
};
exports.default = _default;
},{}],"components/typography/typography.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  h1: {
    fontSize: "26px",
    fontFamily: "Arial",
    margin: "10px 0 0 0"
  },
  h2: {
    fontSize: "22px",
    fontFamily: "Arial",
    margin: "10px 0 0 0",
    color: "#dcdbc7"
  },
  text: {
    fontSize: "18px",
    fontFamily: "Arial",
    margin: "0 0 2px 0"
  },
  textSmall: {
    fontSize: "14px",
    fontFamily: "Arial",
    margin: "0 0 2px 0"
  }
};
exports.default = _default;
},{}],"components/ascent/result.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _preact = require("preact");

var _gasStrategy = _interopRequireDefault(require("./gas-strategy"));

var _typography = _interopRequireDefault(require("../typography/typography"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Result =
/*#__PURE__*/
function (_Component) {
  _inherits(Result, _Component);

  function Result(props) {
    var _this;

    _classCallCheck(this, Result);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Result).call(this, props));
    _this.totalAscentTime = 0;
    _this.litersNeeded = 0;
    _this.amountOfDivers = 2; //Always count total time for 2 divers

    _this.calculate(props);

    return _this;
  }

  _createClass(Result, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      return !isNaN(nextProps.maxDepth);
    }
  }, {
    key: "componentWillUpdate",
    value: function componentWillUpdate(nextProps, nextState) {
      this.calculate(nextProps);
    }
  }, {
    key: "calculate",
    value: function calculate(props) {
      this.calculateAscentTime(props);
      this.calculateMinimumGasLiters(props);
      this.calculateGas(props);
    }
  }, {
    key: "calculateAscentTime",
    value: function calculateAscentTime(props) {
      var maxDepth = props.maxDepth;
      var minutesToHandleProblems = 1;

      if (maxDepth <= 3) {
        this.totalAscentTime = (minutesToHandleProblems + 1) * this.amountOfDivers;
        return;
      }

      if (maxDepth <= 6) {
        this.totalAscentTime = (minutesToHandleProblems + 2) * this.amountOfDivers;
        return;
      }

      if (maxDepth <= 12) {
        this.totalAscentTime = (minutesToHandleProblems + 3) * this.amountOfDivers;
        return;
      }

      if (maxDepth <= 15) {
        this.totalAscentTime = (minutesToHandleProblems + 4) * this.amountOfDivers;
        return;
      }

      if (maxDepth > 15) {
        var metresUpTo15 = maxDepth - 15;
        var timeTo15 = Math.ceil(metresUpTo15 / 9); // 9metres / min up to 15m level

        this.totalAscentTime = (minutesToHandleProblems + timeTo15 + 4) * this.amountOfDivers; //4min extra for 15m-12m, 12m-6m, 6m-3m, 3m-surface

        return;
      }
    }
  }, {
    key: "calculateMinimumGasLiters",
    value: function calculateMinimumGasLiters(props) {
      var averageDepthATA = Math.floor(props.maxDepth / 2) / 10 + 1;
      var scr = 40; //40L/min: to accommodate conservatism, and to account for the increased breathing rate from encountering an issue on the dive.

      this.litersNeeded = this.totalAscentTime * scr * averageDepthATA;
    }
  }, {
    key: "calculateGas",
    value: function calculateGas(props) {
      var d12 = this.getMinBar(24);
      var s12 = this.getMinBar(12);
      var d11 = this.getMinBar(22);
      var s11 = this.getMinBar(11);
      var d10 = this.getMinBar(20);
      var s10 = this.getMinBar(10);
      this.minimumBarNeeded = {
        d12: {
          minBar: d12,
          usableGas: this.getUsableBar(props, d12)
        },
        s12: {
          minBar: s12,
          usableGas: this.getUsableBar(props, s12)
        },
        d11: {
          minBar: d11,
          usableGas: this.getUsableBar(props, d11)
        },
        s11: {
          minBar: s11,
          usableGas: this.getUsableBar(props, s11)
        },
        d10: {
          minBar: d10,
          usableGas: this.getUsableBar(props, d10)
        },
        s10: {
          minBar: s10,
          usableGas: this.getUsableBar(props, s10)
        }
      };
    }
  }, {
    key: "getMinBar",
    value: function getMinBar(cylinderLitres) {
      var minimumBars = Math.floor(this.litersNeeded / cylinderLitres);
      return minimumBars > 40 ? minimumBars : 40; //Minimum Gas can NEVER be less than 40 BAR due to the possible SPG inaccuracy at the lower ranges
    }
  }, {
    key: "getUsableBar",
    value: function getUsableBar(props, minBar) {
      var ug = props.cylinderBarCapacity - minBar;
      return ug > minBar ? ug : 0;
    }
  }, {
    key: "render",
    value: function render() {
      if (this.props.tooDeep || typeof this.props.maxDepth !== "number" || this.props.maxDepth < 1 || typeof this.props.cylinderBarCapacity !== "number" || this.props.cylinderBarCapacity < 1) return null;
      return (0, _preact.h)("div", {
        style: style.container
      }, (0, _preact.h)("p", {
        style: _typography.default.text
      }, "Ascent time from\xA0", (0, _preact.h)("strong", null, this.props.maxDepth, "m = ", this.totalAscentTime, " minutes")), (0, _preact.h)("p", {
        style: _typography.default.text
      }, (0, _preact.h)("strong", null, this.litersNeeded, " L"), " minimum gas needed."), (0, _preact.h)("h2", {
        style: _typography.default.h2
      }, "Double 12L cylinders:"), this.renderMinGasText(this.minimumBarNeeded.d12.minBar), this.renderUsableGasText(this.minimumBarNeeded.d12.usableGas), (0, _preact.h)("h2", {
        style: _typography.default.h2
      }, "Single 12L cylinder:"), this.renderMinGasText(this.minimumBarNeeded.s12.minBar), this.renderUsableGasText(this.minimumBarNeeded.s12.usableGas), (0, _preact.h)("h2", {
        style: _typography.default.h2
      }, "Double 11L cylinders:"), this.renderMinGasText(this.minimumBarNeeded.d11.minBar), this.renderUsableGasText(this.minimumBarNeeded.d11.usableGas), (0, _preact.h)("h2", {
        style: _typography.default.h2
      }, "Single 11L cylinder:"), this.renderMinGasText(this.minimumBarNeeded.s11.minBar), this.renderUsableGasText(this.minimumBarNeeded.s11.usableGas), (0, _preact.h)("h2", {
        style: _typography.default.h2
      }, "Double 10L cylinders:"), this.renderMinGasText(this.minimumBarNeeded.d10.minBar), this.renderUsableGasText(this.minimumBarNeeded.d10.usableGas), (0, _preact.h)("h2", {
        style: _typography.default.h2
      }, "Single 10L cylinder:"), this.renderMinGasText(this.minimumBarNeeded.s10.minBar), this.renderUsableGasText(this.minimumBarNeeded.s10.usableGas));
    }
  }, {
    key: "renderMinGasText",
    value: function renderMinGasText(minBarValue) {
      return (0, _preact.h)("p", {
        style: _typography.default.text
      }, "Minimum gas (for ", this.amountOfDivers, " divers):\xA0", (0, _preact.h)("strong", null, minBarValue, " BAR"));
    }
  }, {
    key: "renderUsableGasText",
    value: function renderUsableGasText(usableGasValue) {
      if (this.props.gasStrategy === _gasStrategy.default.AllAvailable) {
        return (0, _preact.h)("p", {
          style: _typography.default.text
        }, "Usable gas (", this.props.gasStrategy, "):\xA0", (0, _preact.h)("strong", null, usableGasValue, " BAR"));
      }

      if (this.props.gasStrategy === _gasStrategy.default.RuleOfHalf) {
        var modifiedUsableGas = Math.floor(usableGasValue / 2);
        var turnPressure = this.props.cylinderBarCapacity - modifiedUsableGas;
        return (0, _preact.h)("p", {
          style: _typography.default.text
        }, "Usable gas (", this.props.gasStrategy, "):\xA0", (0, _preact.h)("strong", null, usableGasValue, " BAR"), (0, _preact.h)("br", null), "Turn pressure: ", turnPressure);
      }

      if (this.props.gasStrategy === _gasStrategy.default.RuleOfThird) {
        var _modifiedUsableGas = Math.floor(usableGasValue / 3);

        var _turnPressure = this.props.cylinderBarCapacity - _modifiedUsableGas;

        return (0, _preact.h)("p", {
          style: _typography.default.text
        }, "Usable gas (", this.props.gasStrategy, "):\xA0", (0, _preact.h)("strong", null, usableGasValue, " BAR"), (0, _preact.h)("br", null), "Turn pressure: ", _turnPressure, (0, _preact.h)("br", null), "Emergency gas: ", _modifiedUsableGas);
      }

      return null;
    }
  }]);

  return Result;
}(_preact.Component);

exports.default = Result;
var style = {
  container: {
    backgroundColor: "#08689b",
    padding: "10px",
    borderRadius: "10px"
  }
};
},{"preact":"node_modules/preact/dist/preact.mjs","./gas-strategy":"components/ascent/gas-strategy.js","../typography/typography":"components/typography/typography.js"}],"components/ascent/ascent.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _preact = require("preact");

var _result = _interopRequireDefault(require("./result"));

var _gasStrategy = _interopRequireDefault(require("./gas-strategy"));

var _typography = _interopRequireDefault(require("../typography/typography"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var Ascent =
/*#__PURE__*/
function (_Component) {
  _inherits(Ascent, _Component);

  function Ascent(props) {
    var _this;

    _classCallCheck(this, Ascent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Ascent).call(this, props));
    var partialPressure = 1.4;
    _this.gasMix = 0.32;
    _this.allowedMaxDepth = Math.floor((partialPressure / _this.gasMix - 1) * 10);
    _this.state = {
      maxDepth: 0,
      tooDeep: false,
      cylinderBarCapacity: 200,
      gasStrategy: _gasStrategy.default.AllAvailable
    };
    _this.onDepthChange = _this.onDepthChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onCylinderBarCapacityChange = _this.onCylinderBarCapacityChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onGasStrategyChange = _this.onGasStrategyChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Ascent, [{
    key: "onDepthChange",
    value: function onDepthChange(event) {
      var parsedInput = 0;

      try {
        parsedInput = parseInt(event.target.value);
      } catch (e) {
        parsedInput = 0;
      }

      this.setState({
        maxDepth: parsedInput,
        tooDeep: parsedInput >= this.allowedMaxDepth
      });
    }
  }, {
    key: "onCylinderBarCapacityChange",
    value: function onCylinderBarCapacityChange(event) {
      var parsedInput = 0;

      try {
        parsedInput = parseInt(event.target.value);
      } catch (e) {
        parsedInput = 0;
      }

      this.setState({
        cylinderBarCapacity: parsedInput
      });
    }
  }, {
    key: "onGasStrategyChange",
    value: function onGasStrategyChange(event) {
      this.setState({
        gasStrategy: event.target.value
      });
    }
  }, {
    key: "render",
    value: function render() {
      return (0, _preact.h)("div", {
        style: style.container
      }, (0, _preact.h)("h1", {
        style: _typography.default.h1
      }, "GUE dive calculator"), (0, _preact.h)("h2", {
        style: _typography.default.h2
      }, "EAN", this.gasMix * 100), (0, _preact.h)("div", {
        style: style.warning
      }, "This tool is just meant to be used as a guideline and takes no responsibility for your dive. Always make your own personal calculations!"), (0, _preact.h)("section", {
        style: style.fields
      }, (0, _preact.h)("div", {
        style: style.inputContainer
      }, (0, _preact.h)("label", {
        style: style.label,
        for: "maxdepth"
      }, "Max depth:"), (0, _preact.h)("input", {
        id: "maxdepth",
        style: style.input,
        type: "number",
        value: this.state.maxDepth,
        onKeyUp: this.onDepthChange
      })), (0, _preact.h)("div", {
        style: style.inputContainer
      }, (0, _preact.h)("label", {
        style: style.label,
        for: "capacity"
      }, "Cylinder bar capacity:"), (0, _preact.h)("input", {
        id: "capacity",
        style: style.input,
        type: "number",
        value: this.state.cylinderBarCapacity,
        onKeyUp: this.onCylinderBarCapacityChange
      })), (0, _preact.h)("div", {
        style: style.inputContainer
      }, (0, _preact.h)("label", {
        style: style.label,
        for: "strategy"
      }, "Gas strategy:"), (0, _preact.h)("select", {
        id: "strategy",
        style: style.select,
        value: this.state.gasStrategy,
        onChange: this.onGasStrategyChange
      }, (0, _preact.h)("option", {
        value: _gasStrategy.default.AllAvailable
      }, _gasStrategy.default.AllAvailable), (0, _preact.h)("option", {
        value: _gasStrategy.default.RuleOfHalf
      }, _gasStrategy.default.RuleOfHalf), (0, _preact.h)("option", {
        value: _gasStrategy.default.RuleOfThird
      }, _gasStrategy.default.RuleOfThird, "*")))), this.renderWarning(), (0, _preact.h)(_result.default, {
        maxDepth: this.state.maxDepth,
        tooDeep: this.state.tooDeep,
        cylinderBarCapacity: this.state.cylinderBarCapacity,
        gasStrategy: this.state.gasStrategy
      }));
    }
  }, {
    key: "renderWarning",
    value: function renderWarning() {
      var depthWarningText = "WARNING! To deep for EAN".concat(this.gasMix * 100);
      var depthWarning = this.state.maxDepth >= this.allowedMaxDepth ? (0, _preact.h)("strong", null, depthWarningText) : null;
      return this.state.gasStrategy === _gasStrategy.default.RuleOfThird ? (0, _preact.h)("div", {
        style: style.warning
      }, depthWarning, "* GUE Recreational Level 1 divers should always REFRAIN from planning and conducting any dive that requires using the one\u2010third of usable gas strategy") : (0, _preact.h)("div", {
        style: style.warning
      }, depthWarning);
    }
  }]);

  return Ascent;
}(_preact.Component);

exports.default = Ascent;
var style = {
  container: {
    backgroundColor: "#08689b",
    color: "white",
    padding: "10px",
    borderRadius: "10px"
  },
  fields: {
    display: "flex",
    justifyContent: "space-between"
  },
  inputContainer: _objectSpread({}, _typography.default.textSmall, {
    border: "1px dotted white",
    borderRadius: "10px",
    padding: "4px",
    marginRight: "4px",
    minHeight: "50px",
    display: "inline-flex",
    flexDirection: "column",
    justifyContent: "space-between",
    flex: 1
  }),
  label: {
    paddingBottom: "4px"
  },
  input: _objectSpread({}, _typography.default.textSmall, {
    padding: "4px",
    border: "1px solid gray",
    maxWidth: "48px",
    marginRight: "10px",
    borderRadius: "6px"
  }),
  select: _objectSpread({}, _typography.default.textSmall, {
    border: "1px solid gray",
    marginRight: "10px",
    minHeight: "31px"
  }),
  warning: _objectSpread({}, _typography.default.textSmall, {
    margin: "10px 0",
    color: "#daf260"
  })
};
},{"preact":"node_modules/preact/dist/preact.mjs","./result":"components/ascent/result.js","./gas-strategy":"components/ascent/gas-strategy.js","../typography/typography":"components/typography/typography.js"}],"index.js":[function(require,module,exports) {
"use strict";

var _preact = require("preact");

var _ascent = _interopRequireDefault(require("./components/ascent/ascent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var GueApp =
/*#__PURE__*/
function (_Component) {
  _inherits(GueApp, _Component);

  function GueApp() {
    _classCallCheck(this, GueApp);

    return _possibleConstructorReturn(this, _getPrototypeOf(GueApp).apply(this, arguments));
  }

  _createClass(GueApp, [{
    key: "render",
    value: function render() {
      return (0, _preact.h)(_ascent.default, null);
    }
  }]);

  return GueApp;
}(_preact.Component);

(0, _preact.render)((0, _preact.h)(GueApp, null), document.getElementById("gue-app"));
},{"preact":"node_modules/preact/dist/preact.mjs","./components/ascent/ascent":"components/ascent/ascent.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "56176" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/gue/gue_calculator.e31bb0bc.map