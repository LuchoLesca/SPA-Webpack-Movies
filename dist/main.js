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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/styles/styles.css */ \"./src/styles/styles.css\");\n/* harmony import */ var _src_styles_styles_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_styles_styles_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_routing_routing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/routing/routing */ \"./src/routing/routing.js\");\n\n\nwindow.addEventListener('load', () => {\n  Object(_src_routing_routing__WEBPACK_IMPORTED_MODULE_1__[\"loadIndex\"])();\n  Object(_src_routing_routing__WEBPACK_IMPORTED_MODULE_1__[\"router\"])();\n});\nwindow.addEventListener('hashchange', _src_routing_routing__WEBPACK_IMPORTED_MODULE_1__[\"router\"]);\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./src/pages/Error404.js":
/*!*******************************!*\
  !*** ./src/pages/Error404.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Error404 = () => {\n  var view = \"\\n        <div class=\\\"error-container\\\">\\n            <h1 class=\\\"error-msg\\\"> Error 404 </h1>\\n         </div>   \\n    \";\n  return view;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Error404);\n\n//# sourceURL=webpack:///./src/pages/Error404.js?");

/***/ }),

/***/ "./src/pages/Film.js":
/*!***************************!*\
  !*** ./src/pages/Film.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_getHash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/getHash */ \"./src/utils/getHash.js\");\n/* harmony import */ var _utils_getData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/getData */ \"./src/utils/getData.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\nvar Film = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator(function* () {\n    var id = Object(_utils_getHash__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().slice(1);\n    var film = yield Object(_utils_getData__WEBPACK_IMPORTED_MODULE_1__[\"getDataFilm\"])(id);\n    var cast = yield Object(_utils_getData__WEBPACK_IMPORTED_MODULE_1__[\"getCast\"])(id);\n    var view = \"\\n        <div class=\\\"film-view\\\">\\n            <div class=\\\"film_bg-img-container\\\">\\n                <img src=\\\"http://image.tmdb.org/t/p/original\".concat(film.backdrop_path, \"\\\" class=\\\"film_bg-img\\\">\\n            </div>\\n            <div class=\\\"film-content\\\">\\n                <div class=\\\"poster-wrapper\\\">\\n                    <div class=\\\"poster\\\">\\n                        <img src=\\\"https://image.tmdb.org/t/p/original\").concat(film.poster_path, \"\\\" class=\\\"poster_img\\\">\\n                    </div>\\n                    <div class=\\\"poster-bottom\\\">\\n                    </div>\\n                </div>\\n                <div class=\\\"header-poster-wrapper\\\">\\n                    <section class=\\\"header-poster\\\">\\n                        <div class=\\\"title-content\\\">\\n                            <h1 class=\\\"title\\\">\").concat(film.title, \"(2019)</h1>\\n                            <h2 class=\\\"facts\\\">TV-MA Sci-Fi & Fantasy, Action & Adventure * 1h</h2>\\n                        </div>\\n                        <div class=\\\"chart-content\\\">\\n                            <h1 class=\\\"score\\\">\").concat(film.vote_average * 10, \"%</h1>\\n                            <h2 class=\\\"score-text\\\">User score</h2>\\n                        </div>\\n                        <div class=\\\"header_info\\\">\\n                            <h3 class=\\\"tagname\\\">\").concat(film.tagline, \"</h3>\\n                            <h1 class=\\\"info-title\\\">General view</h1>\\n                            <p class=\\\"overview\\\">\").concat(film.overview, \"</p>\\n                            <p class=\\\"film_genres-title\\\">Genres</p>\\n                            <p class=\\\"film_genres\\\">\").concat(film.genres.map(genre => genre.name).join(', '), \"</p>\\n                        </div>\\n                    </section>\\n                </div>\\n            </div>\\n        </div>\\n        <section class=\\\"cast\\\">\\n            <h2 class=\\\"cast_title\\\">Main Actors</h2>\\n            <div class=\\\"cast_actors\\\">\\n            \").concat(cast.cast.map(actor => {\n      var urlImg = actor.profile_path ? \"http://image.tmdb.org/t/p/w138_and_h175_face/\".concat(actor.profile_path) : \"https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg\";\n      return \"\\n            <article class=\\\"actor-card\\\">\\n                    <img src=\\\"\".concat(urlImg, \"\\\" class=\\\"actor_img\\\">\\n                    <div class=\\\"actor-card_texts\\\">\\n                        <h1 class=\\\"actor_name\\\">\").concat(actor.name, \"</h1>\\n                        <h2 class=\\\"actor_character\\\">\").concat(actor.character, \"</h2>\\n                    </div>\\n                </article>\");\n    }).join(''), \"\\n            </div>\\n        </section>\");\n    return view;\n  });\n\n  return function Film() {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Film);\n/* \r\ncast: Array(40)\r\n0: {cast_id: 12, character: \"The Protagonist\", credit_id: \"5cab21a50e0a264c7df637a6\", gender: 2, id: 1117313, …}\r\n1: {cast_id: 13, character: \"Neil\", credit_id: \"5cab21b70e0a264c80f63b9c\", gender: 2, id: 11288, …} */\n\n//# sourceURL=webpack:///./src/pages/Film.js?");

/***/ }),

/***/ "./src/pages/Home.js":
/*!***************************!*\
  !*** ./src/pages/Home.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/getData */ \"./src/utils/getData.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\nvar Home = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator(function* () {\n    var films = yield Object(_utils_getData__WEBPACK_IMPORTED_MODULE_0__[\"getFilms\"])();\n    var view = \"<section class=\\\"films-container\\\">\\n                    <div class=\\\"films\\\">\\n                     \".concat(films.results.map(film => \"\\n                        <div class=\\\"film-card\\\">\\n                            <a href=\\\"#/:\".concat(film.id, \"\\\">\\n                                <img src=\\\"https://image.tmdb.org/t/p/original\").concat(film.poster_path, \"\\\" class=\\\"film_img\\\">\\n                                <div class=\\\"film_texts\\\">\\n                                    <h1 class=\\\"film_title\\\">\").concat(film.title, \"</h1>\\n                                    <h2 class=\\\"film_release-date\\\">\").concat(film.release_date, \"</h2>\\n                                </div>\\n                            </a>\\n                        </div>\\n                        \")).join(''), \"                   \\n                    </div>\\n                </section>\\n                \");\n    return view;\n  });\n\n  return function Home() {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\n//# sourceURL=webpack:///./src/pages/Home.js?");

/***/ }),

/***/ "./src/routing/routing.js":
/*!********************************!*\
  !*** ./src/routing/routing.js ***!
  \********************************/
/*! exports provided: loadIndex, router */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadIndex\", function() { return loadIndex; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"router\", function() { return router; });\n/* harmony import */ var _templates_Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../templates/Header */ \"./src/templates/Header.js\");\n/* harmony import */ var _pages_Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/Home */ \"./src/pages/Home.js\");\n/* harmony import */ var _pages_Film__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/Film */ \"./src/pages/Film.js\");\n/* harmony import */ var _pages_Error404__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/Error404 */ \"./src/pages/Error404.js\");\n/* harmony import */ var _utils_getHash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/getHash */ \"./src/utils/getHash.js\");\n/* harmony import */ var _utils_getResolveRoutes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/getResolveRoutes */ \"./src/utils/getResolveRoutes.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\n\n\n\nvar routes = {\n  '/': _pages_Home__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  '/:id': _pages_Film__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n};\n\nvar loadIndex = () => {\n  var header = document.querySelector('#header');\n  header.innerHTML = Object(_templates_Header__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n};\n\nvar router = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator(function* () {\n    var content = document.querySelector('#main-content');\n    var hash = Object(_utils_getHash__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n    /* Recorta el hash y devuelve / o lo que sigue de /, ej.: /about */\n\n    var route = Object(_utils_getResolveRoutes__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(hash);\n    /* Ruta que se a a buscar en objeto routes de arriba. Con el hash pasado, lo arregla para que se pueda emparejar a alguna de los atrib de routes */\n\n    var render = routes[route] ? routes[route] : _pages_Error404__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\n    content.innerHTML = yield render();\n  });\n\n  return function router() {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n\n\n//# sourceURL=webpack:///./src/routing/routing.js?");

/***/ }),

/***/ "./src/styles/styles.css":
/*!*******************************!*\
  !*** ./src/styles/styles.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/styles/styles.css?");

/***/ }),

/***/ "./src/templates/Header.js":
/*!*********************************!*\
  !*** ./src/templates/Header.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Header = () => {\n  var view = \"\\n    <div class=\\\"nav\\\">\\n        <div class=\\\"logo\\\">\\n            <h1 class=\\\"logo_name\\\">MOVIES</h1>\\n        </div>\\n        <ul class=\\\"links\\\">\\n            <li><a href=\\\"#/\\\" class=\\\"link\\\">Home</a></li>\\n            <li><a href=\\\"#/about\\\" class=\\\"link\\\">About</a></li>\\n        </ul>\\n    </div>\\n    \";\n  return view;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\n//# sourceURL=webpack:///./src/templates/Header.js?");

/***/ }),

/***/ "./src/utils/getData.js":
/*!******************************!*\
  !*** ./src/utils/getData.js ***!
  \******************************/
/*! exports provided: getFilms, getDataFilm, getCast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getFilms\", function() { return getFilms; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getDataFilm\", function() { return getDataFilm; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCast\", function() { return getCast; });\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar apiKey = \"8ed083af465ff4938a2b7222511a9336\";\n\nvar getFilms = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator(function* () {\n    var url = \"https://api.themoviedb.org/3/movie/now_playing?api_key=\".concat(apiKey, \"&language=en-US\");\n\n    try {\n      var response = yield fetch(url);\n      var json = yield response.json();\n      return json;\n    } catch (err) {\n      console.log(\"Error\" + error);\n    }\n  });\n\n  return function getFilms() {\n    return _ref.apply(this, arguments);\n  };\n}(); // https://api.themoviedb.org/3/movie/${id}?api_key=https://api.themoviedb.org/3/movie/${id}?api_key=8ed083af465ff4938a2b7222511a9336&language=en-US&language=en-US\n\n\nvar getDataFilm = /*#__PURE__*/function () {\n  var _ref2 = _asyncToGenerator(function* (id) {\n    var url = \"https://api.themoviedb.org/3/movie/\".concat(id, \"?api_key=\").concat(apiKey, \"&language=en-US\");\n\n    try {\n      var response = yield fetch(url);\n      var json = yield response.json();\n      return json;\n    } catch (err) {\n      console.log(\"Error\" + error);\n    }\n  });\n\n  return function getDataFilm(_x) {\n    return _ref2.apply(this, arguments);\n  };\n}();\n\nvar getCast = /*#__PURE__*/function () {\n  var _ref3 = _asyncToGenerator(function* (id) {\n    var url = \"https://api.themoviedb.org/3/movie/\".concat(id, \"/credits?api_key=\").concat(apiKey);\n\n    try {\n      var response = yield fetch(url);\n      var json = yield response.json();\n      return json;\n    } catch (err) {\n      console.log(\"Error\" + error);\n    }\n  });\n\n  return function getCast(_x2) {\n    return _ref3.apply(this, arguments);\n  };\n}();\n\n\n\n//# sourceURL=webpack:///./src/utils/getData.js?");

/***/ }),

/***/ "./src/utils/getHash.js":
/*!******************************!*\
  !*** ./src/utils/getHash.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar getHash = () => {\n  return location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/';\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (getHash);\n\n//# sourceURL=webpack:///./src/utils/getHash.js?");

/***/ }),

/***/ "./src/utils/getResolveRoutes.js":
/*!***************************************!*\
  !*** ./src/utils/getResolveRoutes.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar resolveRoutes = route => {\n  switch (route[0]) {\n    case '/':\n      return \"\".concat(route);\n\n    case ':':\n      return '/:id';\n\n    default:\n      return false;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (resolveRoutes);\n\n//# sourceURL=webpack:///./src/utils/getResolveRoutes.js?");

/***/ })

/******/ });