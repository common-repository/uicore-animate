var dummy =
uianimJsonp([1],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_select_vue__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_color__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_color___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue_color__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'App',
  components: {
    SelectComponent: __WEBPACK_IMPORTED_MODULE_0__components_select_vue__["a" /* default */],
    colorPicker: __WEBPACK_IMPORTED_MODULE_1_vue_color__["Chrome"]
  },
  data() {
    return {
      disable: window.uianim.disable == 'true' ? true : false,
      style: window.uianim.style,
      debounce: null,
      scroll: window.uianim.scroll == 'true' ? true : false,
      connect: '',
      notification: '',
      animations_page: window.uianim.animations_page,
      animations_page_duration: window.uianim.animations_page_duration,
      animations_page_color: window.uianim.animations_page_color,
      animations_page_color_picker: window.uianim.animations_page_color,
      animations_preloader: window.uianim.animations_preloader,
      animations_preloader_text: window.uianim.animations_preloader_text,
      animations_preloader_color: window.uianim.animations_preloader_color,
      animations_preloader_text_color: window.uianim.animations_preloader_text_color,
      animations_preloader_words: window.uianim.animations_preloader_words,
      isError: false,
      durations: [{
        name: 'Normal',
        value: 'normal'
      }, {
        name: 'Fast',
        value: 'fast'
      }, {
        name: 'Slow',
        value: 'slow'
      }],
      preloaderList: window.uianim.preloaderList,
      pageTransitions: [{
        name: 'None',
        value: 'none'
      }, {
        name: 'Fade',
        value: 'fade'
      }, {
        name: 'Fade In',
        value: 'fade in'
      }, {
        name: 'Reveal',
        value: 'reveal'
      }, {
        name: 'Fade and Reveal',
        value: 'fade and reveal'
      }, {
        name: 'Columns',
        value: 'columns'
      }, {
        name: 'Multilayer',
        value: 'multilayer'
      }],
      styleList: [{
        name: 'Default',
        value: ''
      }, {
        name: 'Creative',
        value: 'style1'
      }, {
        name: 'Snappy',
        value: 'style2'
      }, {
        name: 'Soft',
        value: 'style3'
      }, {
        name: 'Laser',
        value: 'style4'
      }, {
        name: 'Elastic',
        value: 'style5'
      }, {
        name: 'Linear',
        value: 'style6'
      }, {
        name: 'Magic',
        value: 'style7'
      }, {
        name: 'SCI-FI',
        value: 'style8'
      }]
    };
  },
  beforeMount() {
    if (this.animations_page_color == 'Primary') {
      this.animations_page_color = '#262529'; //
    }
  },
  watch: {
    disable: function (val) {
      this.updateSettings('uianim_disable', val);
    },
    style: function (val) {
      this.updateSettings('uianim_style', val);
    },
    scroll: function (val) {
      this.updateSettings('uianim_scroll', val);
    },
    animations_page: function (val) {
      this.updateSettings('animations_page', val);
    },
    animations_page_duration: function (val) {
      this.updateSettings('animations_page_duration', val);
    },
    animations_page_color: function (val) {
      this.updateSettings('animations_page_color', val);
    }
  },

  methods: {
    updateFromPicker(color) {
      let val = null;
      if (color.rgba.a == 1) {
        val = color.hex;
      } else {
        val = 'rgba(' + color.rgba.r + ', ' + color.rgba.g + ', ' + color.rgba.b + ', ' + color.rgba.a + ')';
      }
      //set the value but with a custom debounce that will save the value after 5 seconds
      clearTimeout(this.debounce);
      this.debounce = setTimeout(() => {
        this.animations_page_color = val;
      }, 500);
    },
    updateSettings(setName, setVal) {
      var finalValue = setVal;
      //transform boolean to string
      if (typeof setVal === 'boolean') {
        finalValue = setVal ? 'true' : 'false';
      }
      this.notification = 'Your settings are being saved...';
      const requestData = {
        headers: {
          'Content-Type': 'application/json',
          'X-WP-Nonce': uianim.nonce
        },
        method: 'POST',
        body: JSON.stringify({
          name: setName,
          value: finalValue
        })
      };

      fetch(uianim.rest, requestData).then(res => res.json()).then(res => {
        this.notification = '';
        this.notification = res.message;
        if (!res.success) {
          this.isError = true;
        }
        setTimeout(() => {
          this.notification = '';
          this.isError = false;
        }, 5000);
      }).catch(err => {
        this.notification = '';
        this.notification = 'Something went wrong!';
        this.isError = true;
        setTimeout(() => {
          this.notification = '';
        }, 5000);
      });
    },
    connectToUiCoreAnimate() {
      window.location.href = 'https://my.uicore.co/connect/?ui_connect=true&ui_connect_url=' + uianim.root + '&ui_free_prod=Animate';
    }
  }
});

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    options: {
      type: Array,
      required: true
    },
    mode: {
      type: String,
      default: 'pair'
    },
    value: {
      type: Object, // Adjust the type according to your needs
      default: null
    }
  },
  data() {
    return {
      selectedValue: this.mode == 'value' ? this.value : this.value.value
    };
  },
  watch: {
    selectedValue(e) {
      console.log(e);
      const selectedOption = this.options.find(option => option.value === e);
      if (this.mode == 'value') {
        this.$emit('input', e);
      } else {
        this.$emit('input', selectedOption);
      }
    }
  },
  mounted() {
    console.log(this.value);
    // if (this.value) {
    //   this.selectedValue = this.value.value;
    // }
  }
});

/***/ }),
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(2);

var _vue2 = _interopRequireDefault(_vue);

var _App = __webpack_require__(13);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import router from './router'

_vue2.default.config.productionTip = false;

/* eslint-disable no-new */
new _vue2.default({
    el: '#uianim-settings',
    render: function render(h) {
        return h(_App2.default);
    }
});

/***/ }),
/* 11 */,
/* 12 */,
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(4);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6acfb55b_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__ = __webpack_require__(19);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(14)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6acfb55b_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "assets\\src\\settings\\App.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6acfb55b", Component.options)
  } else {
    hotAPI.reload("data-v-6acfb55b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 14 */
/***/ (function(module, exports) {

throw new Error("Module build failed: ModuleBuildError: Module build failed: Error: Node Sass does not yet support your current environment: Windows 64-bit with Unsupported runtime (115)\nFor more information on which environments are supported please see:\nhttps://github.com/sass/node-sass/releases/tag/v4.14.1\n    at module.exports (C:\\Users\\Andrei\\Documents\\UiCore\\dev\\app\\public\\wp-content\\plugins\\uicore-animate\\node_modules\\node-sass\\lib\\binding.js:13:13)\n    at Object.<anonymous> (C:\\Users\\Andrei\\Documents\\UiCore\\dev\\app\\public\\wp-content\\plugins\\uicore-animate\\node_modules\\node-sass\\lib\\index.js:14:35)\n    at Module._compile (node:internal/modules/cjs/loader:1376:14)\n    at Module._extensions..js (node:internal/modules/cjs/loader:1435:10)\n    at Module.load (node:internal/modules/cjs/loader:1207:32)\n    at Module._load (node:internal/modules/cjs/loader:1023:12)\n    at Module.require (node:internal/modules/cjs/loader:1235:19)\n    at require (node:internal/modules/helpers:176:18)\n    at getDefaultSassImpl (C:\\Users\\Andrei\\Documents\\UiCore\\dev\\app\\public\\wp-content\\plugins\\uicore-animate\\node_modules\\sass-loader\\dist\\index.js:198:10)\n    at Object.loader (C:\\Users\\Andrei\\Documents\\UiCore\\dev\\app\\public\\wp-content\\plugins\\uicore-animate\\node_modules\\sass-loader\\dist\\index.js:80:29)\n    at C:\\Users\\Andrei\\Documents\\UiCore\\dev\\app\\public\\wp-content\\plugins\\uicore-animate\\node_modules\\webpack\\lib\\NormalModule.js:195:19\n    at C:\\Users\\Andrei\\Documents\\UiCore\\dev\\app\\public\\wp-content\\plugins\\uicore-animate\\node_modules\\loader-runner\\lib\\LoaderRunner.js:364:11\n    at C:\\Users\\Andrei\\Documents\\UiCore\\dev\\app\\public\\wp-content\\plugins\\uicore-animate\\node_modules\\loader-runner\\lib\\LoaderRunner.js:230:18\n    at runSyncOrAsync (C:\\Users\\Andrei\\Documents\\UiCore\\dev\\app\\public\\wp-content\\plugins\\uicore-animate\\node_modules\\loader-runner\\lib\\LoaderRunner.js:143:3)\n    at iterateNormalLoaders (C:\\Users\\Andrei\\Documents\\UiCore\\dev\\app\\public\\wp-content\\plugins\\uicore-animate\\node_modules\\loader-runner\\lib\\LoaderRunner.js:229:2)\n    at iterateNormalLoaders (C:\\Users\\Andrei\\Documents\\UiCore\\dev\\app\\public\\wp-content\\plugins\\uicore-animate\\node_modules\\loader-runner\\lib\\LoaderRunner.js:218:10)\n    at C:\\Users\\Andrei\\Documents\\UiCore\\dev\\app\\public\\wp-content\\plugins\\uicore-animate\\node_modules\\loader-runner\\lib\\LoaderRunner.js:233:3\n    at context.callback (C:\\Users\\Andrei\\Documents\\UiCore\\dev\\app\\public\\wp-content\\plugins\\uicore-animate\\node_modules\\loader-runner\\lib\\LoaderRunner.js:111:13)\n    at module.exports (C:\\Users\\Andrei\\Documents\\UiCore\\dev\\app\\public\\wp-content\\plugins\\uicore-animate\\node_modules\\vue-loader\\lib\\selector.js:21:8)");

/***/ }),
/* 15 */,
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_select_vue__ = __webpack_require__(5);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_463ba7dc_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_select_vue__ = __webpack_require__(17);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_select_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_463ba7dc_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_select_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "assets\\src\\settings\\components\\select.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-463ba7dc", Component.options)
  } else {
    hotAPI.reload("data-v-463ba7dc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "select",
    {
      directives: [
        {
          name: "model",
          rawName: "v-model",
          value: _vm.selectedValue,
          expression: "selectedValue"
        }
      ],
      on: {
        change: function($event) {
          var $$selectedVal = Array.prototype.filter
            .call($event.target.options, function(o) {
              return o.selected
            })
            .map(function(o) {
              var val = "_value" in o ? o._value : o.value
              return val
            })
          _vm.selectedValue = $event.target.multiple
            ? $$selectedVal
            : $$selectedVal[0]
        }
      }
    },
    _vm._l(_vm.options, function(option, index) {
      return _c("option", { key: index, domProps: { value: option.value } }, [
        _vm._v("\n    " + _vm._s(option.name) + "\n  ")
      ])
    })
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-463ba7dc", esExports)
  }
}

/***/ }),
/* 18 */,
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "uicore-animate" } }, [
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.notification,
            expression: "notification"
          }
        ],
        staticClass: "uianim-notification",
        class: [{ "uianim-error": _vm.isError }]
      },
      [_vm._v("\n      " + _vm._s(_vm.notification) + "\n    ")]
    ),
    _vm._v(" "),
    _vm._m(0),
    _vm._v(" "),
    _vm.connect === "none"
      ? _c("div", [
          _c("h5", [_vm._v("Connect to UiCore Animate")]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "Connect to UiCore Animate to get access to all the features."
            )
          ]),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "uianim-btn",
              on: { click: _vm.connectToUiCoreAnimate }
            },
            [_vm._v("Connect")]
          )
        ])
      : _c(
          "div",
          { staticClass: "uianim-settings" },
          [
            _c("label", { attrs: { for: "uianim_split_type" } }, [
              _vm._v("Animation style")
            ]),
            _vm._v(" "),
            _c("select-component", {
              attrs: { id: "uianim_split_type", options: _vm.styleList },
              model: {
                value: _vm.style,
                callback: function($$v) {
                  _vm.style = $$v
                },
                expression: "style"
              }
            }),
            _vm._v(" "),
            _c("label", { staticClass: "uianim-checkbox" }, [
              _vm._v("\n        Disable UiCore Animate from Editor\n        "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.disable,
                    expression: "disable"
                  }
                ],
                attrs: { type: "checkbox", id: "disable" },
                domProps: {
                  checked: Array.isArray(_vm.disable)
                    ? _vm._i(_vm.disable, null) > -1
                    : _vm.disable
                },
                on: {
                  change: function($event) {
                    var $$a = _vm.disable,
                      $$el = $event.target,
                      $$c = $$el.checked ? true : false
                    if (Array.isArray($$a)) {
                      var $$v = null,
                        $$i = _vm._i($$a, $$v)
                      if ($$el.checked) {
                        $$i < 0 && (_vm.disable = $$a.concat([$$v]))
                      } else {
                        $$i > -1 &&
                          (_vm.disable = $$a
                            .slice(0, $$i)
                            .concat($$a.slice($$i + 1)))
                      }
                    } else {
                      _vm.disable = $$c
                    }
                  }
                }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "uianim-check" })
            ]),
            _vm._v(" "),
            _c("label", { staticClass: "uianim-checkbox" }, [
              _vm._v("\n        Enable Smooth Scroll\n        "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.scroll,
                    expression: "scroll"
                  }
                ],
                attrs: { type: "checkbox", id: "disable" },
                domProps: {
                  checked: Array.isArray(_vm.scroll)
                    ? _vm._i(_vm.scroll, null) > -1
                    : _vm.scroll
                },
                on: {
                  change: function($event) {
                    var $$a = _vm.scroll,
                      $$el = $event.target,
                      $$c = $$el.checked ? true : false
                    if (Array.isArray($$a)) {
                      var $$v = null,
                        $$i = _vm._i($$a, $$v)
                      if ($$el.checked) {
                        $$i < 0 && (_vm.scroll = $$a.concat([$$v]))
                      } else {
                        $$i > -1 &&
                          (_vm.scroll = $$a
                            .slice(0, $$i)
                            .concat($$a.slice($$i + 1)))
                      }
                    } else {
                      _vm.scroll = $$c
                    }
                  }
                }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "uianim-check" })
            ]),
            _vm._v(" "),
            _c("label", { attrs: { for: "uianim_pt" } }, [
              _vm._v("Page Transition")
            ]),
            _vm._v(" "),
            _c("select-component", {
              attrs: {
                id: "uianim_pt",
                options: _vm.pageTransitions,
                mode: "value"
              },
              model: {
                value: _vm.animations_page,
                callback: function($$v) {
                  _vm.animations_page = $$v
                },
                expression: "animations_page"
              }
            }),
            _vm._v(" "),
            _vm.animations_page != "none"
              ? _c(
                  "div",
                  [
                    _c("label", { attrs: { for: "uianim_ptd" } }, [
                      _vm._v("Page Transition Duration")
                    ]),
                    _vm._v(" "),
                    _c("select-component", {
                      attrs: {
                        id: "uianim_ptd",
                        options: _vm.durations,
                        mode: "value"
                      },
                      model: {
                        value: _vm.animations_page_duration,
                        callback: function($$v) {
                          _vm.animations_page_duration = $$v
                        },
                        expression: "animations_page_duration"
                      }
                    }),
                    _vm._v(" "),
                    _c("label", [_vm._v("Page Transition Color")]),
                    _vm._v(" "),
                    _c("color-picker", {
                      on: { input: _vm.updateFromPicker },
                      model: {
                        value: _vm.animations_page_color_picker,
                        callback: function($$v) {
                          _vm.animations_page_color_picker = $$v
                        },
                        expression: "animations_page_color_picker"
                      }
                    }),
                    _vm._v(" "),
                    _c("label", { attrs: { for: "uiadmin_preloader" } }, [
                      _vm._v("Preloader")
                    ]),
                    _vm._v(" "),
                    _c("select-component", {
                      attrs: {
                        id: "uiadmin_preloader",
                        options: _vm.preloaderList
                      },
                      model: {
                        value: _vm.animations_preloader,
                        callback: function($$v) {
                          _vm.animations_preloader = $$v
                        },
                        expression: "animations_preloader"
                      }
                    }),
                    _vm._v(" "),
                    _vm.animations_preloader != "none"
                      ? _c(
                          "div",
                          [
                            _c("label", [_vm._v("Preloader Color")]),
                            _vm._v(" "),
                            _c("color-picker", {
                              on: { input: _vm.updateFromPicker },
                              model: {
                                value: _vm.animations_preloader_color,
                                callback: function($$v) {
                                  _vm.animations_preloader_color = $$v
                                },
                                expression: "animations_preloader_color"
                              }
                            }),
                            _vm._v(" "),
                            _vm.animations_preloader.indexOf("text") !== -1
                              ? _c(
                                  "div",
                                  [
                                    _c(
                                      "label",
                                      {
                                        attrs: { for: "uiadmin_preloader_text" }
                                      },
                                      [_vm._v("Preloader Text")]
                                    ),
                                    _vm._v(" "),
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.animations_preloader_text,
                                          expression:
                                            "animations_preloader_text"
                                        }
                                      ],
                                      attrs: {
                                        type: "text",
                                        id: "uiadmin_preloader_text"
                                      },
                                      domProps: {
                                        value: _vm.animations_preloader_text
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.animations_preloader_text =
                                            $event.target.value
                                        }
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("label", [
                                      _vm._v("Preloader Text Color")
                                    ]),
                                    _vm._v(" "),
                                    _c("color-picker", {
                                      on: { input: _vm.updateFromPicker },
                                      model: {
                                        value:
                                          _vm.animations_preloader_text_color,
                                        callback: function($$v) {
                                          _vm.animations_preloader_text_color = $$v
                                        },
                                        expression:
                                          "animations_preloader_text_color"
                                      }
                                    })
                                  ],
                                  1
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.animations_preloader == "intro-words"
                              ? _c("div", [
                                  _c(
                                    "label",
                                    {
                                      attrs: { for: "uiadmin_preloader_words" }
                                    },
                                    [_vm._v("Preloader Words")]
                                  ),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.animations_preloader_words,
                                        expression: "animations_preloader_words"
                                      }
                                    ],
                                    attrs: {
                                      type: "text",
                                      id: "uiadmin_preloader_words"
                                    },
                                    domProps: {
                                      value: _vm.animations_preloader_words
                                    },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.animations_preloader_words =
                                          $event.target.value
                                      }
                                    }
                                  })
                                ])
                              : _vm._e()
                          ],
                          1
                        )
                      : _vm._e()
                  ],
                  1
                )
              : _vm._e()
          ],
          1
        ),
    _vm._v(" "),
    _c("h3", [_vm._v("Faq")]),
    _vm._v(" "),
    _c("p", { staticStyle: { "margin-bottom": "20px" } }, [
      _vm._v(
        "\n      If you can’t find what you’re looking for, please don’t hesitate to contact our customer support team. We’re always here to help.\n    "
      )
    ]),
    _vm._v(" "),
    _vm._m(1),
    _vm._v(" "),
    _c("p", [
      _vm._v(
        "Not at all. The plugin only replaces the CSS animations from Elementor so it has zero impact on performance."
      )
    ]),
    _vm._v(" "),
    _vm._m(2),
    _vm._v(" "),
    _c("p", [
      _vm._v(
        "Yes, you can use it with any theme that supports Elementor Page Builder."
      )
    ]),
    _vm._v(" "),
    _vm._m(3),
    _vm._v(" "),
    _c("p", [_vm._v("No. You cannot use UiCore Animate without Elementor.")]),
    _vm._v(" "),
    _vm._m(4),
    _vm._v(" "),
    _c("p", [_vm._v("Yes, absolutely.")]),
    _vm._v(" "),
    _vm._m(5),
    _vm._v(" "),
    _c("p", { staticStyle: { "margin-bottom": "0" } }, [
      _vm._v(
        "No. This is a lightweight plugin and the chances of affecting the site are minimal."
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "uianim-header-title" }, [
      _c("h2", [_vm._v("UiCore Animate")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "UiCore Animate is a plugin that allows you to add animation to your website."
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _c("b", [_vm._v("Does UiCore Animate affect my website performance?")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _c("b", [_vm._v("Can I use UiCore Animate with any theme?")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [_c("b", [_vm._v("Is this a standalone plugin?")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [_c("b", [_vm._v("Does it work with Elementor PRO?")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _c("b", [_vm._v("Will UiCore Animate break my site after an update?")])
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6acfb55b", esExports)
  }
}

/***/ })
],[10]);