(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Client_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Client.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Client.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_DataServices__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/DataServices */ "./resources/js/services/DataServices.js");
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Client",
  data: function data() {
    return {
      client: [],
      currentPage: 1,
      perPage: 3,
      rows: 2
    };
  },
  mounted: function mounted() {
    var _this = this;

    _services_DataServices__WEBPACK_IMPORTED_MODULE_0__.default.getClient().then(function (response) {
      _this.client = response.data;
      console.log(response.data);
    });
  },
  methods: {
    goToHome: function goToHome() {
      this.$router.push('/');
    }
  }
});

/***/ }),

/***/ "./resources/js/Http/http-common.js":
/*!******************************************!*\
  !*** ./resources/js/Http/http-common.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  baseURL: "http://localhost:8000/api",
  headers: {
    "Content-type": "application/json"
  }
}));

/***/ }),

/***/ "./resources/js/services/DataServices.js":
/*!***********************************************!*\
  !*** ./resources/js/services/DataServices.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Http_http_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Http/http-common */ "./resources/js/Http/http-common.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var DataService = /*#__PURE__*/function () {
  function DataService() {
    _classCallCheck(this, DataService);
  }

  _createClass(DataService, [{
    key: "createClient",
    value: // for storing client to csv file
    function createClient(data) {
      return _Http_http_common__WEBPACK_IMPORTED_MODULE_0__.default.post("/createClient", data);
    } // fetching  All client from csv file

  }, {
    key: "getClient",
    value: function getClient() {
      return _Http_http_common__WEBPACK_IMPORTED_MODULE_0__.default.get("/getClient");
    } // fetching particular client from csv file

  }, {
    key: "getClientDetail",
    value: function getClientDetail(id) {
      return _Http_http_common__WEBPACK_IMPORTED_MODULE_0__.default.get("/getClient/".concat(id));
    }
  }]);

  return DataService;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new DataService());

/***/ }),

/***/ "./resources/js/components/Client.vue":
/*!********************************************!*\
  !*** ./resources/js/components/Client.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Client_vue_vue_type_template_id_87947714___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Client.vue?vue&type=template&id=87947714& */ "./resources/js/components/Client.vue?vue&type=template&id=87947714&");
/* harmony import */ var _Client_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Client.vue?vue&type=script&lang=js& */ "./resources/js/components/Client.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Client_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Client_vue_vue_type_template_id_87947714___WEBPACK_IMPORTED_MODULE_0__.render,
  _Client_vue_vue_type_template_id_87947714___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Client.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Client.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/components/Client.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Client_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Client.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Client.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Client_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Client.vue?vue&type=template&id=87947714&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Client.vue?vue&type=template&id=87947714& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Client_vue_vue_type_template_id_87947714___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Client_vue_vue_type_template_id_87947714___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Client_vue_vue_type_template_id_87947714___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Client.vue?vue&type=template&id=87947714& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Client.vue?vue&type=template&id=87947714&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Client.vue?vue&type=template&id=87947714&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Client.vue?vue&type=template&id=87947714& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "container" },
    [
      _c("h3", { staticClass: "p-3 text-center" }, [_vm._v("All client")]),
      _vm._v(" "),
      _c(
        "button",
        {
          on: {
            click: function($event) {
              return _vm.goToHome()
            }
          }
        },
        [_vm._v(" Create Client ")]
      ),
      _vm._v(" "),
      _c("table", { staticClass: "table table-striped table-bordered" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "tbody",
          _vm._l(_vm.client, function(clients) {
            return _c("tr", { key: clients.id }, [
              _c("td", [_vm._v(_vm._s(clients[0]))]),
              _vm._v(" "),
              _c("td", [_vm._v(_vm._s(clients[1]))]),
              _vm._v(" "),
              _c("td", [_vm._v(_vm._s(clients[2]))]),
              _vm._v(" "),
              _c("td", [_vm._v(_vm._s(clients[3]))]),
              _vm._v(" "),
              _c("td", [_vm._v(_vm._s(clients[4]))]),
              _vm._v(" "),
              _c("td", [_vm._v(_vm._s(clients[5]))]),
              _vm._v(" "),
              _c("td", [_vm._v(_vm._s(clients[6]))]),
              _vm._v(" "),
              _c("td", [_vm._v(_vm._s(clients[7]))]),
              _vm._v(" "),
              _c(
                "td",
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "btn btn-primary",
                      attrs: {
                        to: { name: "clientdetail", params: { id: clients[0] } }
                      }
                    },
                    [_vm._v("View Detail")]
                  )
                ],
                1
              )
            ])
          }),
          0
        )
      ]),
      _vm._v(" "),
      _c("pagination", {
        directives: [{ name: "ref", rawName: "v-ref:table", arg: "table" }],
        attrs: { for: "table", "per-page": _vm.PerPage, records: _vm.Records }
      })
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("S.N")]),
        _vm._v(" "),
        _c("th", [_vm._v("Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Email")]),
        _vm._v(" "),
        _c("th", [_vm._v("Phone")]),
        _vm._v(" "),
        _c("th", [_vm._v("DOB")]),
        _vm._v(" "),
        _c("th", [_vm._v("Gender")]),
        _vm._v(" "),
        _c("th", [_vm._v("Nationality")]),
        _vm._v(" "),
        _c("th", [_vm._v("Education")]),
        _vm._v(" "),
        _c("th", [_vm._v("View Detail ")])
      ])
    ])
  }
]
render._withStripped = true



/***/ })

}]);