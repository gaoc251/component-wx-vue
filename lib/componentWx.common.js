module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");

// CONCATENATED MODULE: ./node_modules/vue-loader-v16/dist/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./packages/button/src/Btn.vue?vue&type=template&id=c9677da0&bindings={"loading":"props","type":"props","size":"props","loadingBtn":"data","typeBtn":"data","btnSize":"data","sss":"data","init":"options","initBtnType":"options","initBtnSize":"options","initBtnHoverType":"options","itemHover":"options","removeHover":"options","clickBtn":"options"}


const _hoisted_1 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])("按钮")

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", null, [
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
      class: ["btn", [ {'btnClick': $data.loadingBtn},  $data.btnSize  ]],
      style: $data.typeBtn,
      onMouseover: _cache[1] || (_cache[1] = (...args) => ($options.itemHover(...args))),
      onMouseout: _cache[2] || (_cache[2] = (...args) => ($options.removeHover(...args))),
      onClick: _cache[3] || (_cache[3] = (...args) => ($options.clickBtn(...args)))
    }, [
      Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default", {}, () => [
        _hoisted_1
      ])
    ], 38)
  ]))
}
// CONCATENATED MODULE: ./packages/button/src/Btn.vue?vue&type=template&id=c9677da0&bindings={"loading":"props","type":"props","size":"props","loadingBtn":"data","typeBtn":"data","btnSize":"data","sss":"data","init":"options","initBtnType":"options","initBtnSize":"options","initBtnHoverType":"options","itemHover":"options","removeHover":"options","clickBtn":"options"}

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./packages/button/src/Btn.vue?vue&type=script&lang=js

/* harmony default export */ var Btnvue_type_script_lang_js = ({
  name: 'wx-button',
  props: {
    loading: Boolean,
    type: String,
    size: String
  },
  data () {
    return {
      loadingBtn: this.loading,
      typeBtn: {
        background: '#409EFF'
      },
      btnSize: 'btnSize',
      sss: 'aaa'
    }
  },
  watch: {
    loading (data) {
      this.loadingBtn = data
    },
    type (data) {
      // this.type = data
      this.initBtnType()
    },
    size (data) {
      // this.size = data
      this.initBtnSize()
    }
  },
  methods: {
    init () {
      this.initBtnType()
      this.initBtnSize()
    },
    initBtnType () {
      switch (this.type) {
        case 'primary':
          this.typeBtn.background = '#409EFF'
          break
        case 'success':
          this.typeBtn.background = '#67C23A'
          break
        case 'info':
          this.typeBtn.background = '#909399'
          break
        case 'warning':
          this.typeBtn.background = '#e6a23c'
          break
        case 'danger':
          this.typeBtn.background = '#f56c6c'
          break
        default:
          this.typeBtn.background = '#409EFF'
      }
    },
    initBtnSize () {
      switch (this.size) {
        case 'medium':
          this.btnSize = 'btnSize-medium'
          break
        case 'small':
          this.btnSize = 'btnSize-small'
          break
        case 'mini':
          this.btnSize = 'btnSize-mini'
          break
        default:
          this.btnSize = 'btnSize'
      }
    },
    initBtnHoverType () {
      switch (this.type) {
        case 'primary':
          this.typeBtn.background = '#66b1ff'
          break
        case 'success':
          this.typeBtn.background = '#85ce61'
          break
        case 'info':
          this.typeBtn.background = '#a6a9ad'
          break
        case 'warning':
          this.typeBtn.background = '#ebb563'
          break
        case 'danger':
          this.typeBtn.background = '#f78989'
          break
        default:
          this.typeBtn.background = '#409EFF'
      }
    },
    itemHover () {
      this.initBtnHoverType()
    },
    removeHover () {
      this.initBtnType()
    },
    clickBtn () {
      this.$emit('click', true)
    }
  },
  mounted () {
    this.init()
  }
});

// CONCATENATED MODULE: ./packages/button/src/Btn.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./packages/button/src/Btn.vue



Btnvue_type_script_lang_js.render = render

/* harmony default export */ var Btn = (Btnvue_type_script_lang_js);
// CONCATENATED MODULE: ./packages/button/index.js


// 为组件提供 install 安装方法，供按需引入
Btn.install = function (Vue) {
  Vue.component(Btn.name, Btn)
}

// 默认导出组件
/* harmony default export */ var packages_button = (Btn);

// CONCATENATED MODULE: ./packages/index.js


// 存储组件列表
const components = [
  packages_button
]

// 定义install方法，接收vue 作为参数，如果使用use注册插件，则所有的组件都会被注册
const install = function (Vue) {
  // 判断是否安装
  if (install.installed) return

  // 遍历注册全局组件
  components.map(component => Vue.component(component.name, component))
}

// 判断是否成功引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

/* harmony default export */ var packages_0 = ({
  // 导出对象必须具有install方法，才能使用
  install,
  // 组件
  wxButton: packages_button
});

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (packages_0);



/***/ })

/******/ });
//# sourceMappingURL=componentWx.common.js.map