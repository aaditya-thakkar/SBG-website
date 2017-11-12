require("source-map-support").install();
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  var _regenerator = __webpack_require__(1);
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _toConsumableArray2 = __webpack_require__(2);
  
  var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);
  
  var _set = __webpack_require__(3);
  
  var _set2 = _interopRequireDefault(_set);
  
  var _asyncToGenerator2 = __webpack_require__(4);
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  __webpack_require__(5);
  
  var _path = __webpack_require__(6);
  
  var _path2 = _interopRequireDefault(_path);
  
  var _express = __webpack_require__(7);
  
  var _express2 = _interopRequireDefault(_express);
  
  var _cookieParser = __webpack_require__(8);
  
  var _cookieParser2 = _interopRequireDefault(_cookieParser);
  
  var _bodyParser = __webpack_require__(9);
  
  var _bodyParser2 = _interopRequireDefault(_bodyParser);
  
  var _expressJwt = __webpack_require__(10);
  
  var _expressJwt2 = _interopRequireDefault(_expressJwt);
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _server = __webpack_require__(12);
  
  var _server2 = _interopRequireDefault(_server);
  
  var _universalRouter = __webpack_require__(13);
  
  var _universalRouter2 = _interopRequireDefault(_universalRouter);
  
  var _prettyError = __webpack_require__(14);
  
  var _prettyError2 = _interopRequireDefault(_prettyError);
  
  var _Html = __webpack_require__(15);
  
  var _Html2 = _interopRequireDefault(_Html);
  
  var _ErrorPage = __webpack_require__(17);
  
  var _ErrorPage2 = __webpack_require__(19);
  
  var _ErrorPage3 = _interopRequireDefault(_ErrorPage2);
  
  var _routes = __webpack_require__(27);
  
  var _routes2 = _interopRequireDefault(_routes);
  
  var _assets = __webpack_require__(185);
  
  var _assets2 = _interopRequireDefault(_assets);
  
  var _config = __webpack_require__(16);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  // import expressGraphQL from 'express-graphql';
  // import jwt from 'jsonwebtoken';
  var app = (0, _express2.default)();
  
  //
  // Tell any CSS tooling (such as Material UI) to use all vendor prefixes if the
  // user agent is not known.
  // -----------------------------------------------------------------------------
  // eslint-disable-line import/no-unresolved
  
  // import passport from './core/passport';
  // import models from './data/models';
  // import schema from './data/schema';
  global.navigator = global.navigator || {};
  global.navigator.userAgent = global.navigator.userAgent || 'all';
  
  //
  // Register Node.js middleware
  // -----------------------------------------------------------------------------
  app.use(_express2.default.static(_path2.default.join(__dirname, 'public')));
  app.use((0, _cookieParser2.default)());
  app.use(_bodyParser2.default.urlencoded({ extended: true }));
  app.use(_bodyParser2.default.json());
  
  //
  // Authentication
  // -----------------------------------------------------------------------------
  app.use((0, _expressJwt2.default)({
    secret: _config.auth.jwt.secret,
    credentialsRequired: false,
    getToken: function getToken(req) {
      return req.cookies.id_token;
    }
  }));
  
  // Register server-side rendering middleware
  // -----------------------------------------------------------------------------
  app.get('*', function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res, next) {
      var css, statusCode, data, html;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              css = new _set2.default();
              statusCode = 200;
              data = { title: '', description: '', style: '', script: _assets2.default.main.js, children: '' };
              _context.next = 6;
              return _universalRouter2.default.resolve(_routes2.default, {
                path: req.path,
                query: req.query,
                hash: req.hash,
                context: {
                  insertCss: function insertCss() {
                    for (var _len = arguments.length, styles = Array(_len), _key = 0; _key < _len; _key++) {
                      styles[_key] = arguments[_key];
                    }
  
                    styles.forEach(function (style) {
                      return css.add(style._getCss());
                    }); // eslint-disable-line no-underscore-dangle, max-len
                  },
                  setTitle: function setTitle(value) {
                    return data.title = value;
                  },
                  setMeta: function setMeta(key, value) {
                    return data[key] = value;
                  }
                },
                render: function render(component) {
                  var status = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;
  
                  // console.log('inside render of UniversalRouter', component);
                  css = new _set2.default();
                  statusCode = status;
                  data.children = _server2.default.renderToString(component);
                  data.style = [].concat((0, _toConsumableArray3.default)(css)).join('');
                  return true;
                }
              });
  
            case 6:
  
              // console.log('outside render func of UniversalRouter with statusCode', statusCode);
              html = _server2.default.renderToStaticMarkup(_react2.default.createElement(_Html2.default, data));
  
  
              res.status(statusCode);
              res.send('<!doctype html>' + html);
              _context.next = 14;
              break;
  
            case 11:
              _context.prev = 11;
              _context.t0 = _context['catch'](0);
  
              // console.log('some error occured', err);
              next(_context.t0);
  
            case 14:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined, [[0, 11]]);
    }));
  
    return function (_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }());
  
  //
  // Error handling
  // -----------------------------------------------------------------------------
  var pe = new _prettyError2.default();
  pe.skipNodeFiles();
  pe.skipPackage('express');
  
  app.use(function (err, req, res, next) {
    // eslint-disable-line no-unused-vars
    console.log(pe.render(err)); // eslint-disable-line no-console
    var statusCode = err.status || 500;
    var html = _server2.default.renderToStaticMarkup(_react2.default.createElement(
      _Html2.default,
      {
        title: 'Internal Server Error',
        description: err.message,
        style: _ErrorPage3.default._getCss() // eslint-disable-line no-underscore-dangle
      },
      _server2.default.renderToString(_react2.default.createElement(_ErrorPage.ErrorPageWithoutStyle, { error: err }))
    ));
    res.status(statusCode);
    res.send('<!doctype html>' + html);
  });
  
  app.listen(_config.port, function () {
    console.log('The server is running at http://localhost:' + _config.port + '/');
  });

/***/ }),
/* 1 */
/***/ (function(module, exports) {

  module.exports = require("babel-runtime/regenerator");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

  module.exports = require("babel-runtime/helpers/toConsumableArray");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

  module.exports = require("babel-runtime/core-js/set");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

  module.exports = require("babel-runtime/helpers/asyncToGenerator");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

  module.exports = require("babel-polyfill");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

  module.exports = require("path");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

  module.exports = require("express");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

  module.exports = require("cookie-parser");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

  module.exports = require("body-parser");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

  module.exports = require("express-jwt");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

  module.exports = require("react");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

  module.exports = require("react-dom/server");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

  module.exports = require("universal-router");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

  module.exports = require("pretty-error");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _config = __webpack_require__(16);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function Html(_ref) {
    var title = _ref.title,
        description = _ref.description,
        style = _ref.style,
        script = _ref.script,
        children = _ref.children;
  
    return _react2.default.createElement(
      'html',
      { className: 'no-js', lang: 'en' },
      _react2.default.createElement(
        'head',
        null,
        _react2.default.createElement('meta', { charSet: 'utf-8' }),
        _react2.default.createElement('meta', { httpEquiv: 'x-ua-compatible', content: 'ie=edge' }),
        _react2.default.createElement(
          'title',
          null,
          title
        ),
        _react2.default.createElement('link', { rel: 'shortcut icon', href: 'favicon.ico', type: 'image/x-icon' }),
        _react2.default.createElement('meta', { name: 'description', content: description }),
        _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }),
        _react2.default.createElement('link', { rel: 'stylesheet', href: '/css/bootstrap.min.css' }),
        _react2.default.createElement('link', { rel: 'apple-touch-icon', href: 'apple-touch-icon.png' }),
        _react2.default.createElement('link', { rel: 'stylesheet', href: '/css/bootstrap-social.css' }),
        _react2.default.createElement('link', { rel: 'stylesheet', href: '/css/font-awesome.min.css' }),
        _react2.default.createElement('link', { rel: 'stylesheet', href: '/css/sb-admin.css' }),
        _react2.default.createElement('link', { rel: 'stylesheet', href: '/css/react-big-calendar.css' }),
        _react2.default.createElement('style', { id: 'css', dangerouslySetInnerHTML: { __html: style } })
      ),
      _react2.default.createElement(
        'body',
        null,
        _react2.default.createElement('div', { id: 'app', dangerouslySetInnerHTML: { __html: children } }),
        script && _react2.default.createElement('script', { src: script }),
        _config.analytics.google.trackingId && _react2.default.createElement('script', {
          dangerouslySetInnerHTML: { __html: 'window.ga=function(){ga.q.push(arguments)};ga.q=[];ga.l=+new Date;' + ('ga(\'create\',\'' + _config.analytics.google.trackingId + '\',\'auto\');ga(\'send\',\'pageview\')') }
        }),
        _config.analytics.google.trackingId && _react2.default.createElement('script', { src: 'https://www.google-analytics.com/analytics.js', async: true, defer: true })
      )
    );
  }
  
  Html.propTypes = {
    title: _react.PropTypes.string.isRequired,
    description: _react.PropTypes.string.isRequired,
    style: _react.PropTypes.string.isRequired,
    script: _react.PropTypes.string,
    children: _react.PropTypes.string
  };
  
  exports.default = Html;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  /* eslint-disable max-len */
  
  var port = exports.port = process.env.PORT || 3000;
  var host = exports.host = process.env.WEBSITE_HOSTNAME || 'localhost:' + port;
  
  var databaseUrl = exports.databaseUrl = process.env.DATABASE_URL || 'sqlite:database.sqlite';
  
  var analytics = exports.analytics = {
  
    // https://analytics.google.com/
    google: {
      trackingId: process.env.GOOGLE_TRACKING_ID // UA-XXXXX-X
    }
  
  };
  
  var auth = exports.auth = {
  
    jwt: { secret: process.env.JWT_SECRET || 'React Starter Kit' },
  
    // https://developers.facebook.com/
    facebook: {
      id: process.env.FACEBOOK_APP_ID || '186244551745631',
      secret: process.env.FACEBOOK_APP_SECRET || 'a970ae3240ab4b9b8aae0f9f0661c6fc'
    },
  
    // https://cloud.google.com/console/project
    google: {
      id: process.env.GOOGLE_CLIENT_ID || '251410730550-ahcg0ou5mgfhl8hlui1urru7jn5s12km.apps.googleusercontent.com',
      secret: process.env.GOOGLE_CLIENT_SECRET || 'Y8yR9yZAhm9jQ8FKAL8QIEcd'
    },
  
    // https://apps.twitter.com/
    twitter: {
      key: process.env.TWITTER_CONSUMER_KEY || 'Ie20AZvLJI2lQD5Dsgxgjauns',
      secret: process.env.TWITTER_CONSUMER_SECRET || 'KTZ6cxoKnEakQCeSpZlaUCJWGAlTEBJj0y2EMkUBujA7zWSvaQ'
    }
  
  };

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ErrorPageWithoutStyle = undefined;
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(18);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _ErrorPage = __webpack_require__(19);
  
  var _ErrorPage2 = _interopRequireDefault(_ErrorPage);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function ErrorPage(_ref, context) {
    var error = _ref.error;
  
    var title = 'Error';
    var content = 'Sorry, a critical error occurred on this page.';
    var errorMessage = null;
  
    if (error.status === 404) {
      title = 'Page Not Found';
      content = 'Sorry, the page you were trying to view does not exist.';
    } else if (true) {
      errorMessage = _react2.default.createElement(
        'pre',
        null,
        error.stack
      );
    }
  
    if (context.setTitle) {
      context.setTitle(title);
    }
  
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'h1',
        null,
        title
      ),
      _react2.default.createElement(
        'p',
        null,
        content
      ),
      errorMessage
    );
  } /**
     * React Starter Kit (https://www.reactstarterkit.com/)
     *
     * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE.txt file in the root directory of this source tree.
     */
  
  ErrorPage.propTypes = { error: _react.PropTypes.object.isRequired };
  ErrorPage.contextTypes = { setTitle: _react.PropTypes.func.isRequired };
  
  exports.ErrorPageWithoutStyle = ErrorPage;
  exports.default = (0, _withStyles2.default)(_ErrorPage2.default)(ErrorPage);

/***/ }),
/* 18 */
/***/ (function(module, exports) {

  module.exports = require("isomorphic-style-loader/lib/withStyles");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(20);
      var insertCss = __webpack_require__(22);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!../../../node_modules/postcss-loader/index.js?pack=default!./ErrorPage.css", function() {
          content = require("!!../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!../../../node_modules/postcss-loader/index.js?pack=default!./ErrorPage.css");
  
          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }
  
          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(21)();
  // imports
  
  
  // module
  exports.push([module.id, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n* {\n  line-height: 1.2;\n  margin: 0;\n}\n\nhtml {\n  color: #888;\n  display: table;\n  font-family: sans-serif;\n  height: 100%;\n  text-align: center;\n  width: 100%;\n}\n\nbody {\n  display: table-cell;\n  vertical-align: middle;\n  /* stylelint-disable */\n  margin: 2em auto;\n  /* stylelint-enable */\n}\n\nh1 {\n  color: #555;\n  font-size: 2em;\n  font-weight: 400;\n}\n\np {\n  margin: 0 auto;\n  width: 280px;\n}\n\npre {\n  text-align: left;\n  margin-top: 32px;\n  margin-top: 2rem;\n}\n\n@media only screen and (max-width: 280px) {\n  body,\n  p {\n    width: 95%;\n  }\n\n  h1 {\n    font-size: 1.5em;\n    margin: 0 0 0.3em;\n  }\n}\n", "", {"version":3,"sources":["/./routes/error/ErrorPage.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;AAEH;EACE,iBAAiB;EACjB,UAAU;CACX;;AAED;EACE,YAAY;EACZ,eAAe;EACf,wBAAwB;EACxB,aAAa;EACb,mBAAmB;EACnB,YAAY;CACb;;AAED;EACE,oBAAoB;EACpB,uBAAuB;EACvB,uBAAuB;EACvB,iBAAiB;EACjB,sBAAsB;CACvB;;AAED;EACE,YAAY;EACZ,eAAe;EACf,iBAAiB;CAClB;;AAED;EACE,eAAe;EACf,aAAa;CACd;;AAED;EACE,iBAAiB;EACjB,iBAAiB;EAAjB,iBAAiB;CAClB;;AAED;EACE;;IAEE,WAAW;GACZ;;EAED;IACE,iBAAiB;IACjB,kBAAkB;GACnB;CACF","file":"ErrorPage.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n* {\n  line-height: 1.2;\n  margin: 0;\n}\n\nhtml {\n  color: #888;\n  display: table;\n  font-family: sans-serif;\n  height: 100%;\n  text-align: center;\n  width: 100%;\n}\n\nbody {\n  display: table-cell;\n  vertical-align: middle;\n  /* stylelint-disable */\n  margin: 2em auto;\n  /* stylelint-enable */\n}\n\nh1 {\n  color: #555;\n  font-size: 2em;\n  font-weight: 400;\n}\n\np {\n  margin: 0 auto;\n  width: 280px;\n}\n\npre {\n  text-align: left;\n  margin-top: 2rem;\n}\n\n@media only screen and (max-width: 280px) {\n  body,\n  p {\n    width: 95%;\n  }\n\n  h1 {\n    font-size: 1.5em;\n    margin: 0 0 0.3em;\n  }\n}\n"],"sourceRoot":"webpack://"}]);
  
  // exports


/***/ }),
/* 21 */
/***/ (function(module, exports) {

  /*
  	MIT License http://www.opensource.org/licenses/mit-license.php
  	Author Tobias Koppers @sokra
  */
  // css base code, injected by the css-loader
  module.exports = function() {
  	var list = [];
  
  	// return the list of modules as css string
  	list.toString = function toString() {
  		var result = [];
  		for(var i = 0; i < this.length; i++) {
  			var item = this[i];
  			if(item[2]) {
  				result.push("@media " + item[2] + "{" + item[1] + "}");
  			} else {
  				result.push(item[1]);
  			}
  		}
  		return result.join("");
  	};
  
  	// import a list of modules into the list
  	list.i = function(modules, mediaQuery) {
  		if(typeof modules === "string")
  			modules = [[null, modules, ""]];
  		var alreadyImportedModules = {};
  		for(var i = 0; i < this.length; i++) {
  			var id = this[i][0];
  			if(typeof id === "number")
  				alreadyImportedModules[id] = true;
  		}
  		for(i = 0; i < modules.length; i++) {
  			var item = modules[i];
  			// skip already imported module
  			// this implementation is not 100% perfect for weird media query combinations
  			//  when a module is imported multiple times with different media queries.
  			//  I hope this will never occur (Hey this way we have smaller bundles)
  			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
  				if(mediaQuery && !item[2]) {
  					item[2] = mediaQuery;
  				} else if(mediaQuery) {
  					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
  				}
  				list.push(item);
  			}
  		}
  	};
  	return list;
  };


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  var _assign = __webpack_require__(23);
  
  var _assign2 = _interopRequireDefault(_assign);
  
  var _stringify = __webpack_require__(24);
  
  var _stringify2 = _interopRequireDefault(_stringify);
  
  var _slicedToArray2 = __webpack_require__(25);
  
  var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);
  
  var _getIterator2 = __webpack_require__(26);
  
  var _getIterator3 = _interopRequireDefault(_getIterator2);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * Isomorphic CSS style loader for Webpack
   *
   * Copyright © 2015-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var prefix = 's';
  var inserted = {};
  
  // Base64 encoding and decoding - The "Unicode Problem"
  // https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#The_Unicode_Problem
  function b64EncodeUnicode(str) {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
      return String.fromCharCode('0x' + p1);
    }));
  }
  
  /**
   * Remove style/link elements for specified node IDs
   * if they are no longer referenced by UI components.
   */
  function removeCss(ids) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;
  
    try {
      for (var _iterator = (0, _getIterator3.default)(ids), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var id = _step.value;
  
        if (--inserted[id] <= 0) {
          var elem = document.getElementById(prefix + id);
          if (elem) {
            elem.parentNode.removeChild(elem);
          }
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }
  
  /**
   * Example:
   *   // Insert CSS styles object generated by `css-loader` into DOM
   *   var removeCss = insertCss([[1, 'body { color: red; }']]);
   *
   *   // Remove it from the DOM
   *   removeCss();
   */
  function insertCss(styles, options) {
    var _Object$assign = (0, _assign2.default)({
      replace: false,
      prepend: false
    }, options);
  
    var replace = _Object$assign.replace;
    var prepend = _Object$assign.prepend;
  
  
    var ids = [];
    for (var i = 0; i < styles.length; i++) {
      var _styles$i = (0, _slicedToArray3.default)(styles[i], 4);
  
      var moduleId = _styles$i[0];
      var css = _styles$i[1];
      var media = _styles$i[2];
      var sourceMap = _styles$i[3];
  
      var id = moduleId + '-' + i;
  
      ids.push(id);
  
      if (inserted[id]) {
        if (!replace) {
          inserted[id]++;
          continue;
        }
      }
  
      inserted[id] = 1;
  
      var elem = document.getElementById(prefix + id);
      var create = false;
  
      if (!elem) {
        create = true;
  
        elem = document.createElement('style');
        elem.setAttribute('type', 'text/css');
        elem.id = prefix + id;
  
        if (media) {
          elem.setAttribute('media', media);
        }
      }
  
      var cssText = css;
      if (sourceMap) {
        cssText += '\n/*# sourceMappingURL=data:application/json;base64,' + b64EncodeUnicode((0, _stringify2.default)(sourceMap)) + '*/';
        cssText += '\n/*# sourceURL=' + sourceMap.file + '*/';
      }
  
      if ('textContent' in elem) {
        elem.textContent = cssText;
      } else {
        elem.styleSheet.cssText = cssText;
      }
  
      if (create) {
        if (prepend) {
          document.head.insertBefore(elem, document.head.childNodes[0]);
        } else {
          document.head.appendChild(elem);
        }
      }
    }
  
    return removeCss.bind(null, ids);
  }
  
  module.exports = insertCss;

/***/ }),
/* 23 */
/***/ (function(module, exports) {

  module.exports = require("babel-runtime/core-js/object/assign");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

  module.exports = require("babel-runtime/core-js/json/stringify");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

  module.exports = require("babel-runtime/helpers/slicedToArray");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

  module.exports = require("babel-runtime/core-js/get-iterator");

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _regenerator = __webpack_require__(1);
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _asyncToGenerator2 = __webpack_require__(4);
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _App = __webpack_require__(28);
  
  var _App2 = _interopRequireDefault(_App);
  
  var _home = __webpack_require__(46);
  
  var _home2 = _interopRequireDefault(_home);
  
  var _icons = __webpack_require__(104);
  
  var _icons2 = _interopRequireDefault(_icons);
  
  var _sbgTeam = __webpack_require__(108);
  
  var _sbgTeam2 = _interopRequireDefault(_sbgTeam);
  
  var _constitution = __webpack_require__(114);
  
  var _constitution2 = _interopRequireDefault(_constitution);
  
  var _committees = __webpack_require__(118);
  
  var _committees2 = _interopRequireDefault(_committees);
  
  var _clubs = __webpack_require__(122);
  
  var _clubs2 = _interopRequireDefault(_clubs);
  
  var _annualfests = __webpack_require__(126);
  
  var _annualfests2 = _interopRequireDefault(_annualfests);
  
  var _minutes = __webpack_require__(131);
  
  var _minutes2 = _interopRequireDefault(_minutes);
  
  var _events = __webpack_require__(133);
  
  var _events2 = _interopRequireDefault(_events);
  
  var _achievements = __webpack_require__(138);
  
  var _achievements2 = _interopRequireDefault(_achievements);
  
  var _gallery = __webpack_require__(140);
  
  var _gallery2 = _interopRequireDefault(_gallery);
  
  var _error = __webpack_require__(184);
  
  var _error2 = _interopRequireDefault(_error);
  
  var _Header = __webpack_require__(37);
  
  var _Header2 = _interopRequireDefault(_Header);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = [{
    path: '/',
  
    // keep in mind, routes are evaluated in order
    children: [_home2.default,
    // contact,
    _icons2.default,
    // register,
    _sbgTeam2.default, _constitution2.default, _committees2.default, _clubs2.default, _annualfests2.default, _minutes2.default, _events2.default, _achievements2.default, _gallery2.default,
    // place new routes before...
    // content,
    _error2.default],
  
    action: function action(_ref) {
      var _this = this;
  
      var next = _ref.next,
          render = _ref.render,
          context = _ref.context;
      return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var component;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return next();
  
              case 2:
                component = _context.sent;
  
                if (!(component === undefined)) {
                  _context.next = 5;
                  break;
                }
  
                return _context.abrupt('return', component);
  
              case 5:
                return _context.abrupt('return', render(_react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement(_Header2.default, null),
                  _react2.default.createElement(
                    'div',
                    { id: 'page-wrapper', className: 'page-wrapper' },
                    _react2.default.createElement(
                      _App2.default,
                      { context: context },
                      component
                    )
                  )
                )));
  
              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
  }, {
    path: '/error',
    children: [_error2.default],
    action: function action(_ref2) {
      var _this2 = this;
  
      var next = _ref2.next,
          render = _ref2.render,
          context = _ref2.context;
      return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
        var component;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return next();
  
              case 2:
                component = _context2.sent;
  
                if (!(component === undefined)) {
                  _context2.next = 5;
                  break;
                }
  
                return _context2.abrupt('return', component);
  
              case 5:
                return _context2.abrupt('return', render(_react2.default.createElement(
                  _App2.default,
                  { context: context },
                  component
                )));
  
              case 6:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }))();
    }
  }];
  
  // Child routes
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _getPrototypeOf = __webpack_require__(29);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(30);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(31);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(32);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(33);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _emptyFunction = __webpack_require__(34);
  
  var _emptyFunction2 = _interopRequireDefault(_emptyFunction);
  
  var _App = __webpack_require__(35);
  
  var _App2 = _interopRequireDefault(_App);
  
  var _Header = __webpack_require__(37);
  
  var _Header2 = _interopRequireDefault(_Header);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  // import Feedback from '../Feedback';
  // import Footer from '../Footer';
  
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var App = function (_Component) {
    (0, _inherits3.default)(App, _Component);
  
    function App() {
      (0, _classCallCheck3.default)(this, App);
      return (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).apply(this, arguments));
    }
  
    (0, _createClass3.default)(App, [{
      key: 'getChildContext',
      value: function getChildContext() {
        var context = this.props.context;
        return {
          insertCss: context.insertCss || _emptyFunction2.default,
          setTitle: context.setTitle || _emptyFunction2.default,
          setMeta: context.setMeta || _emptyFunction2.default
        };
      }
    }, {
      key: 'componentWillMount',
      value: function componentWillMount() {
        var insertCss = this.props.context.insertCss;
  
        this.removeCss = insertCss(_App2.default);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
  
        this.removeCss();
      }
    }, {
      key: 'render',
      value: function render() {
        // console.log('\n********\n', this.props, '\n********12334\n');
        return this.props.children;
      }
    }]);
    return App;
  }(_react.Component);
  
  App.propTypes = {
    context: _react.PropTypes.shape({
      insertCss: _react.PropTypes.func,
      setTitle: _react.PropTypes.func,
      setMeta: _react.PropTypes.func
    }),
    children: _react.PropTypes.element.isRequired,
    error: _react.PropTypes.object
  };
  App.childContextTypes = {
    insertCss: _react.PropTypes.func.isRequired,
    setTitle: _react.PropTypes.func.isRequired,
    setMeta: _react.PropTypes.func.isRequired
  };
  exports.default = App;

/***/ }),
/* 29 */
/***/ (function(module, exports) {

  module.exports = require("babel-runtime/core-js/object/get-prototype-of");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

  module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

  module.exports = require("babel-runtime/helpers/createClass");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

  module.exports = require("babel-runtime/helpers/possibleConstructorReturn");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

  module.exports = require("babel-runtime/helpers/inherits");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

  module.exports = require("fbjs/lib/emptyFunction");

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(36);
      var insertCss = __webpack_require__(22);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!../../../node_modules/postcss-loader/index.js?pack=default!./App.css", function() {
          content = require("!!../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!../../../node_modules/postcss-loader/index.js?pack=default!./App.css");
  
          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }
  
          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(21)();
  // imports
  
  
  // module
  exports.push([module.id, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/*! normalize.css v4.1.1 | MIT License | github.com/necolas/normalize.css */\n\n/**\n * 1. Change the default font family in all browsers (opinionated).\n * 2. Correct the line height in all browsers.\n * 3. Prevent adjustments of font size after orientation changes in IE and iOS.\n */\n\nhtml {\n  font-family: sans-serif; /* 1 */\n  line-height: 1.15; /* 2 */\n  -ms-text-size-adjust: 100%; /* 3 */\n  -webkit-text-size-adjust: 100%; /* 3 */\n}\n\n/**\n * Remove the margin in all browsers (opinionated).\n */\n\nbody {\n  margin: 0;\n}\n\n/* HTML5 display definitions\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n * 2. Add the correct display in IE.\n */\n\narticle,\naside,\ndetails, /* 1 */\nfigcaption,\nfigure,\nfooter,\nheader,\nmain, /* 2 */\nmenu,\nnav,\nsection,\nsummary { /* 1 */\n  display: block;\n}\n\n/**\n * Add the correct display in IE 9-.\n */\n\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in iOS 4-7.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Add the correct display in IE 10-.\n * 1. Add the correct display in IE.\n */\n\ntemplate, /* 1 */\n[hidden] {\n  display: none;\n}\n\n/* Links\n   ========================================================================== */\n\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\n\na {\n  background-color: transparent; /* 1 */\n  -webkit-text-decoration-skip: objects; /* 2 */\n}\n\n/**\n * Remove the outline on focused links when they are also active or hovered\n * in all browsers (opinionated).\n */\n\na:active,\na:hover {\n  outline-width: 0;\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * 1. Remove the bottom border in Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\n\nb,\nstrong {\n  font-weight: inherit;\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * Add the correct font style in Android 4.3-.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/**\n * Add the correct background and color in IE 9-.\n */\n\nmark {\n  background-color: #ff0;\n  color: #000;\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10-.\n */\n\nimg {\n  border-style: none;\n}\n\n/**\n * Hide the overflow in IE.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct margin in IE 8.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change font properties to `inherit` in all browsers (opinionated).\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font: inherit; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Restore the font weight unset by the previous rule.\n */\n\noptgroup {\n  font-weight: bold;\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\nhtml [type=\"button\"], /* 1 */\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; /* 2 */\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Change the border, margin, and padding in all browsers (opinionated).\n */\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Remove the default vertical scrollbar in IE.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on OS X.\n */\n\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * Correct the text style of placeholders in Chrome, Edge, and Safari.\n */\n\n::-webkit-input-placeholder {\n  color: inherit;\n  opacity: 0.54;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*! React Starter Kit | MIT License | https://www.reactstarterkit.com/ */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n}\n\n/*\n * Base styles\n * ========================================================================== */\n\nhtml {\n  color: #222;\n  font-size: 1em; /* ~16px; */\n  font-family: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n  line-height: 1.375; /* ~22px */\n}\n\na {\n  color: #0074c2;\n}\n\n/*\n * Remove text-shadow in selection highlight:\n * https://twitter.com/miketaylr/status/12228805301\n *\n * These selection rule sets have to be separate.\n * Customize the background color to match your design.\n */\n\n::-moz-selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n\n::selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n\n/*\n * A better looking default horizontal rule\n */\n\nhr {\n  display: block;\n  height: 1px;\n  border: 0;\n  border-top: 1px solid #ccc;\n  margin: 1em 0;\n  padding: 0;\n}\n\n/*\n * Remove the gap between audio, canvas, iframes,\n * images, videos and the bottom of their containers:\n * https://github.com/h5bp/html5-boilerplate/issues/440\n */\n\naudio,\ncanvas,\niframe,\nimg,\nsvg,\nvideo {\n  vertical-align: middle;\n}\n\n/*\n * Remove default fieldset styles.\n */\n\nfieldset {\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\n\n/*\n * Allow only vertical resizing of textareas.\n */\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n * Browser upgrade prompt\n * ========================================================================== */\n\n.browserupgrade {\n  margin: 0.2em 0;\n  background: #ccc;\n  color: #000;\n  padding: 0.2em 0;\n}\n\n/*\n * Print styles\n * Inlined to avoid the additional HTTP request:\n * http://www.phpied.com/delay-loading-your-print-css/\n * ========================================================================== */\n\n@media print {\n  *,\n  *::before,\n  *::after {\n    background: transparent !important;\n    color: #000 !important; /* Black prints faster: http://www.sanbeiji.com/archives/953 */\n    -webkit-box-shadow: none !important;\n            box-shadow: none !important;\n    text-shadow: none !important;\n  }\n\n  a,\n  a:visited {\n    text-decoration: underline;\n  }\n\n  a[href]::after {\n    content: ' (' attr(href) ')';\n  }\n\n  abbr[title]::after {\n    content: ' (' attr(title) ')';\n  }\n\n  /*\n   * Don't show links that are fragment identifiers,\n   * or use the `javascript:` pseudo protocol\n   */\n\n  a[href^='#']::after,\n  a[href^='javascript:']::after {\n    content: '';\n  }\n\n  pre,\n  blockquote {\n    border: 1px solid #999;\n    page-break-inside: avoid;\n  }\n\n  /*\n   * Printing Tables:\n   * http://css-discuss.incutio.com/wiki/Printing_Tables\n   */\n\n  thead {\n    display: table-header-group;\n  }\n\n  tr,\n  img {\n    page-break-inside: avoid;\n  }\n\n  img {\n    max-width: 100% !important;\n  }\n\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3;\n  }\n\n  h2,\n  h3 {\n    page-break-after: avoid;\n  }\n}\n", "", {"version":3,"sources":["/./components/App/App.css","/../node_modules/normalize.css/normalize.css","/./components/variables.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;ACPH,4EAA4E;;AAE5E;;;;GAIG;;AAEH;EACE,wBAAwB,CAAC,OAAO;EAChC,kBAAkB,CAAC,OAAO;EAC1B,2BAA2B,CAAC,OAAO;EACnC,+BAA+B,CAAC,OAAO;CACxC;;AAED;;GAEG;;AAEH;EACE,UAAU;CACX;;AAED;gFACgF;;AAEhF;;;;GAIG;;AAEH;;;;;;;;;;;UAWU,OAAO;EACf,eAAe;CAChB;;AAED;;GAEG;;AAEH;;;;EAIE,sBAAsB;CACvB;;AAED;;GAEG;;AAEH;EACE,cAAc;EACd,UAAU;CACX;;AAED;;GAEG;;AAEH;EACE,yBAAyB;CAC1B;;AAED;;;GAGG;;AAEH;;EAEE,cAAc;CACf;;AAED;gFACgF;;AAEhF;;;GAGG;;AAEH;EACE,8BAA8B,CAAC,OAAO;EACtC,sCAAsC,CAAC,OAAO;CAC/C;;AAED;;;GAGG;;AAEH;;EAEE,iBAAiB;CAClB;;AAED;gFACgF;;AAEhF;;;GAGG;;AAEH;EACE,oBAAoB,CAAC,OAAO;EAC5B,2BAA2B,CAAC,OAAO;EACnC,kCAAkC,CAAC,OAAO;CAC3C;;AAED;;GAEG;;AAEH;;EAEE,qBAAqB;CACtB;;AAED;;GAEG;;AAEH;;EAEE,oBAAoB;CACrB;;AAED;;GAEG;;AAEH;EACE,mBAAmB;CACpB;;AAED;;;GAGG;;AAEH;EACE,eAAe;EACf,iBAAiB;CAClB;;AAED;;GAEG;;AAEH;EACE,uBAAuB;EACvB,YAAY;CACb;;AAED;;GAEG;;AAEH;EACE,eAAe;CAChB;;AAED;;;GAGG;;AAEH;;EAEE,eAAe;EACf,eAAe;EACf,mBAAmB;EACnB,yBAAyB;CAC1B;;AAED;EACE,gBAAgB;CACjB;;AAED;EACE,YAAY;CACb;;AAED;gFACgF;;AAEhF;;GAEG;;AAEH;EACE,mBAAmB;CACpB;;AAED;;GAEG;;AAEH;EACE,iBAAiB;CAClB;;AAED;gFACgF;;AAEhF;;;GAGG;;AAEH;;;;EAIE,kCAAkC,CAAC,OAAO;EAC1C,eAAe,CAAC,OAAO;CACxB;;AAED;;GAEG;;AAEH;EACE,iBAAiB;CAClB;;AAED;;;GAGG;;AAEH;EACE,gCAAwB;UAAxB,wBAAwB,CAAC,OAAO;EAChC,UAAU,CAAC,OAAO;EAClB,kBAAkB,CAAC,OAAO;CAC3B;;AAED;gFACgF;;AAEhF;;;GAGG;;AAEH;;;;;EAKE,cAAc,CAAC,OAAO;EACtB,UAAU,CAAC,OAAO;CACnB;;AAED;;GAEG;;AAEH;EACE,kBAAkB;CACnB;;AAED;;;GAGG;;AAEH;QACQ,OAAO;EACb,kBAAkB;CACnB;;AAED;;;GAGG;;AAEH;SACS,OAAO;EACd,qBAAqB;CACtB;;AAED;;;;GAIG;;AAEH;;;;EAIE,2BAA2B,CAAC,OAAO;CACpC;;AAED;;GAEG;;AAEH;;;;EAIE,mBAAmB;EACnB,WAAW;CACZ;;AAED;;GAEG;;AAEH;;;;EAIE,+BAA+B;CAChC;;AAED;;GAEG;;AAEH;EACE,0BAA0B;EAC1B,cAAc;EACd,+BAA+B;CAChC;;AAED;;;;;GAKG;;AAEH;EACE,+BAAuB;UAAvB,uBAAuB,CAAC,OAAO;EAC/B,eAAe,CAAC,OAAO;EACvB,eAAe,CAAC,OAAO;EACvB,gBAAgB,CAAC,OAAO;EACxB,WAAW,CAAC,OAAO;EACnB,oBAAoB,CAAC,OAAO;CAC7B;;AAED;;GAEG;;AAEH;EACE,eAAe;CAChB;;AAED;;;GAGG;;AAEH;;EAEE,+BAAuB;UAAvB,uBAAuB,CAAC,OAAO;EAC/B,WAAW,CAAC,OAAO;CACpB;;AAED;;GAEG;;AAEH;;EAEE,aAAa;CACd;;AAED;;;GAGG;;AAEH;EACE,8BAA8B,CAAC,OAAO;EACtC,qBAAqB,CAAC,OAAO;CAC9B;;AAED;;GAEG;;AAEH;;EAEE,yBAAyB;CAC1B;;AAED;;GAEG;;AAEH;EACE,eAAe;EACf,cAAc;CACf;;AAED;;;GAGG;;AAEH;EACE,2BAA2B,CAAC,OAAO;EACnC,cAAc,CAAC,OAAO;CACvB;;AD1ZD,yEAAyE;;AEXzE;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;;EAI9E;;gFAE8E;;EAI9E;;gFAE8E,EAErD,gCAAgC,EAChC,2BAA2B,EAC3B,6BAA6B,CAC7B,iCAAiC;CAC3D;;AFfD;;gFAEgF;;AAEhF;EACE,YAAY;EACZ,eAAe,CAAC,YAAY;EAC5B,2DAAqC;EACrC,mBAAmB,CAAC,WAAW;CAChC;;AAED;EACE,eAAe;CAChB;;AAED;;;;;;GAMG;;AAEH;EACE,oBAAoB;EACpB,kBAAkB;CACnB;;AAED;EACE,oBAAoB;EACpB,kBAAkB;CACnB;;AAED;;GAEG;;AAEH;EACE,eAAe;EACf,YAAY;EACZ,UAAU;EACV,2BAA2B;EAC3B,cAAc;EACd,WAAW;CACZ;;AAED;;;;GAIG;;AAEH;;;;;;EAME,uBAAuB;CACxB;;AAED;;GAEG;;AAEH;EACE,UAAU;EACV,UAAU;EACV,WAAW;CACZ;;AAED;;GAEG;;AAEH;EACE,iBAAiB;CAClB;;AAED;;gFAEgF;;AAEhF;EACE,gBAAgB;EAChB,iBAAiB;EACjB,YAAY;EACZ,iBAAiB;CAClB;;AAED;;;;gFAIgF;;AAEhF;EACE;;;IAGE,mCAAmC;IACnC,uBAAuB,CAAC,+DAA+D;IACvF,oCAA4B;YAA5B,4BAA4B;IAC5B,6BAA6B;GAC9B;;EAED;;IAEE,2BAA2B;GAC5B;;EAED;IACE,6BAA6B;GAC9B;;EAED;IACE,8BAA8B;GAC/B;;EAED;;;KAGG;;EAEH;;IAEE,YAAY;GACb;;EAED;;IAEE,uBAAuB;IACvB,yBAAyB;GAC1B;;EAED;;;KAGG;;EAEH;IACE,4BAA4B;GAC7B;;EAED;;IAEE,yBAAyB;GAC1B;;EAED;IACE,2BAA2B;GAC5B;;EAED;;;IAGE,WAAW;IACX,UAAU;GACX;;EAED;;IAEE,wBAAwB;GACzB;CACF","file":"App.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n@import '../../../node_modules/normalize.css/normalize.css';\n\n/*! React Starter Kit | MIT License | https://www.reactstarterkit.com/ */\n\n@import '../variables.css';\n\n/*\n * Base styles\n * ========================================================================== */\n\nhtml {\n  color: #222;\n  font-size: 1em; /* ~16px; */\n  font-family: var(--font-family-base);\n  line-height: 1.375; /* ~22px */\n}\n\na {\n  color: #0074c2;\n}\n\n/*\n * Remove text-shadow in selection highlight:\n * https://twitter.com/miketaylr/status/12228805301\n *\n * These selection rule sets have to be separate.\n * Customize the background color to match your design.\n */\n\n::-moz-selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n\n::selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n\n/*\n * A better looking default horizontal rule\n */\n\nhr {\n  display: block;\n  height: 1px;\n  border: 0;\n  border-top: 1px solid #ccc;\n  margin: 1em 0;\n  padding: 0;\n}\n\n/*\n * Remove the gap between audio, canvas, iframes,\n * images, videos and the bottom of their containers:\n * https://github.com/h5bp/html5-boilerplate/issues/440\n */\n\naudio,\ncanvas,\niframe,\nimg,\nsvg,\nvideo {\n  vertical-align: middle;\n}\n\n/*\n * Remove default fieldset styles.\n */\n\nfieldset {\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\n\n/*\n * Allow only vertical resizing of textareas.\n */\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n * Browser upgrade prompt\n * ========================================================================== */\n\n:global(.browserupgrade) {\n  margin: 0.2em 0;\n  background: #ccc;\n  color: #000;\n  padding: 0.2em 0;\n}\n\n/*\n * Print styles\n * Inlined to avoid the additional HTTP request:\n * http://www.phpied.com/delay-loading-your-print-css/\n * ========================================================================== */\n\n@media print {\n  *,\n  *::before,\n  *::after {\n    background: transparent !important;\n    color: #000 !important; /* Black prints faster: http://www.sanbeiji.com/archives/953 */\n    box-shadow: none !important;\n    text-shadow: none !important;\n  }\n\n  a,\n  a:visited {\n    text-decoration: underline;\n  }\n\n  a[href]::after {\n    content: ' (' attr(href) ')';\n  }\n\n  abbr[title]::after {\n    content: ' (' attr(title) ')';\n  }\n\n  /*\n   * Don't show links that are fragment identifiers,\n   * or use the `javascript:` pseudo protocol\n   */\n\n  a[href^='#']::after,\n  a[href^='javascript:']::after {\n    content: '';\n  }\n\n  pre,\n  blockquote {\n    border: 1px solid #999;\n    page-break-inside: avoid;\n  }\n\n  /*\n   * Printing Tables:\n   * http://css-discuss.incutio.com/wiki/Printing_Tables\n   */\n\n  thead {\n    display: table-header-group;\n  }\n\n  tr,\n  img {\n    page-break-inside: avoid;\n  }\n\n  img {\n    max-width: 100% !important;\n  }\n\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3;\n  }\n\n  h2,\n  h3 {\n    page-break-after: avoid;\n  }\n}\n","/*! normalize.css v4.1.1 | MIT License | github.com/necolas/normalize.css */\n\n/**\n * 1. Change the default font family in all browsers (opinionated).\n * 2. Correct the line height in all browsers.\n * 3. Prevent adjustments of font size after orientation changes in IE and iOS.\n */\n\nhtml {\n  font-family: sans-serif; /* 1 */\n  line-height: 1.15; /* 2 */\n  -ms-text-size-adjust: 100%; /* 3 */\n  -webkit-text-size-adjust: 100%; /* 3 */\n}\n\n/**\n * Remove the margin in all browsers (opinionated).\n */\n\nbody {\n  margin: 0;\n}\n\n/* HTML5 display definitions\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n * 2. Add the correct display in IE.\n */\n\narticle,\naside,\ndetails, /* 1 */\nfigcaption,\nfigure,\nfooter,\nheader,\nmain, /* 2 */\nmenu,\nnav,\nsection,\nsummary { /* 1 */\n  display: block;\n}\n\n/**\n * Add the correct display in IE 9-.\n */\n\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in iOS 4-7.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Add the correct display in IE 10-.\n * 1. Add the correct display in IE.\n */\n\ntemplate, /* 1 */\n[hidden] {\n  display: none;\n}\n\n/* Links\n   ========================================================================== */\n\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\n\na {\n  background-color: transparent; /* 1 */\n  -webkit-text-decoration-skip: objects; /* 2 */\n}\n\n/**\n * Remove the outline on focused links when they are also active or hovered\n * in all browsers (opinionated).\n */\n\na:active,\na:hover {\n  outline-width: 0;\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * 1. Remove the bottom border in Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\n\nb,\nstrong {\n  font-weight: inherit;\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * Add the correct font style in Android 4.3-.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/**\n * Add the correct background and color in IE 9-.\n */\n\nmark {\n  background-color: #ff0;\n  color: #000;\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10-.\n */\n\nimg {\n  border-style: none;\n}\n\n/**\n * Hide the overflow in IE.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct margin in IE 8.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change font properties to `inherit` in all browsers (opinionated).\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font: inherit; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Restore the font weight unset by the previous rule.\n */\n\noptgroup {\n  font-weight: bold;\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\nhtml [type=\"button\"], /* 1 */\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; /* 2 */\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Change the border, margin, and padding in all browsers (opinionated).\n */\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Remove the default vertical scrollbar in IE.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on OS X.\n */\n\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * Correct the text style of placeholders in Chrome, Edge, and Safari.\n */\n\n::-webkit-input-placeholder {\n  color: inherit;\n  opacity: 0.54;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n","/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n"],"sourceRoot":"webpack://"}]);
  
  // exports


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Navbar = __webpack_require__(38);
  
  var _Navbar2 = _interopRequireDefault(_Navbar);
  
  var _reactBootstrap = __webpack_require__(39);
  
  var _Sidebar = __webpack_require__(40);
  
  var _Sidebar2 = _interopRequireDefault(_Sidebar);
  
  var _history = __webpack_require__(41);
  
  var _history2 = _interopRequireDefault(_history);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var logo = __webpack_require__(45); /**
                                     * React Starter Kit (https://www.reactstarterkit.com/)
                                     *
                                     * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                     *
                                     * This source code is licensed under the MIT license found in the
                                     * LICENSE.txt file in the root directory of this source tree.
                                     */
  
  function Header() {
    return _react2.default.createElement(
      'div',
      { id: 'wrapper', className: 'content' },
      _react2.default.createElement(
        _Navbar2.default,
        { fluid: true, style: { margin: 0 } },
        _react2.default.createElement(
          _reactBootstrap.ButtonToolbar,
          { className: 'dropdown-home', style: { marginTop: 10 } },
          _react2.default.createElement(
            _reactBootstrap.DropdownButton,
            { bsStyle: 'default', noCaret: true, title: _react2.default.createElement(
                'span',
                null,
                _react2.default.createElement('i', { className: 'fa fa-th-list' })
              ), id: 'dropdown-size-large' },
            _react2.default.createElement(
              _reactBootstrap.MenuItem,
              { href: '', onClick: function onClick(e) {
                  e.preventDefault();_history2.default.push('/');
                }, eventKey: '1' },
              'Home'
            ),
            _react2.default.createElement(_reactBootstrap.MenuItem, { divider: true }),
            _react2.default.createElement(
              _reactBootstrap.MenuItem,
              { href: '', onClick: function onClick(e) {
                  e.preventDefault();_history2.default.push('/sbgTeam');
                }, eventKey: '2' },
              'Core Team'
            ),
            _react2.default.createElement(_reactBootstrap.MenuItem, { divider: true }),
            _react2.default.createElement(
              _reactBootstrap.MenuItem,
              { href: '', onClick: function onClick(e) {
                  e.preventDefault();_history2.default.push('/constitution');
                }, eventKey: '3' },
              'Constitution'
            ),
            _react2.default.createElement(_reactBootstrap.MenuItem, { divider: true }),
            _react2.default.createElement(
              _reactBootstrap.MenuItem,
              { href: '', onClick: function onClick(e) {
                  e.preventDefault();_history2.default.push('/committees');
                }, eventKey: '4' },
              'Committees'
            ),
            _react2.default.createElement(_reactBootstrap.MenuItem, { divider: true }),
            _react2.default.createElement(
              _reactBootstrap.MenuItem,
              { href: '', onClick: function onClick(e) {
                  e.preventDefault();_history2.default.push('/clubs');
                }, eventKey: '5' },
              'Clubs'
            ),
            _react2.default.createElement(_reactBootstrap.MenuItem, { divider: true }),
            _react2.default.createElement(
              _reactBootstrap.MenuItem,
              { href: '', onClick: function onClick(e) {
                  e.preventDefault();_history2.default.push('/minutes');
                }, eventKey: '7' },
              'Minutes'
            ),
            _react2.default.createElement(_reactBootstrap.MenuItem, { divider: true }),
            _react2.default.createElement(
              _reactBootstrap.MenuItem,
              { href: '', onClick: function onClick(e) {
                  e.preventDefault();_history2.default.push('/events');
                }, eventKey: '8' },
              'Events'
            ),
            _react2.default.createElement(_reactBootstrap.MenuItem, { divider: true }),
            _react2.default.createElement(
              _reactBootstrap.MenuItem,
              { href: '', onClick: function onClick(e) {
                  e.preventDefault();_history2.default.push('/achievements');
                }, eventKey: '9' },
              'Achievements'
            ),
            _react2.default.createElement(_reactBootstrap.MenuItem, { divider: true }),
            _react2.default.createElement(
              _reactBootstrap.MenuItem,
              { href: '', onClick: function onClick(e) {
                  e.preventDefault();_history2.default.push('/gallery');
                }, eventKey: '10' },
              'DA-Gallery'
            )
          )
        ),
        _react2.default.createElement(
          _Navbar.Brand,
          null,
          _react2.default.createElement(
            'span',
            null,
            _react2.default.createElement('img', { src: logo, alt: 'Student Body Government', title: 'Student Body Government' }),
            _react2.default.createElement(
              'span',
              null,
              '\xA0Student Body Government, DA-IICT'
            )
          )
        ),
        _react2.default.createElement(_Sidebar2.default, null),
        _react2.default.createElement(
          'p',
          { style: { float: 'right', top: 0, right: 0, fontSize: 8 } },
          'Created and Maintained by Aaditya Thakkar'
        )
      )
    );
  }
  
  exports.default = Header;

/***/ }),
/* 38 */
/***/ (function(module, exports) {

  module.exports = require("react-bootstrap/lib/Navbar");

/***/ }),
/* 39 */
/***/ (function(module, exports) {

  module.exports = require("react-bootstrap");

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _getPrototypeOf = __webpack_require__(29);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(30);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(31);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(32);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(33);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _history = __webpack_require__(41);
  
  var _history2 = _interopRequireDefault(_history);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var Sidebar = function (_Component) {
    (0, _inherits3.default)(Sidebar, _Component);
  
    function Sidebar(props) {
      (0, _classCallCheck3.default)(this, Sidebar);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (Sidebar.__proto__ || (0, _getPrototypeOf2.default)(Sidebar)).call(this, props));
  
      _this.state = {
        uiElementsCollapsed: true,
        chartsElementsCollapsed: true,
        multiLevelDropdownCollapsed: true,
        thirdLevelDropdownCollapsed: true,
        samplePagesCollapsed: true
      };
      return _this;
    }
  
    (0, _createClass3.default)(Sidebar, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          { className: 'navbar-default sidebar', style: { marginLeft: '-20px' }, role: 'navigation' },
          _react2.default.createElement(
            'div',
            { className: 'sidebar-nav navbar-collapse collapse' },
            _react2.default.createElement(
              'ul',
              { className: 'nav in', id: 'side-menu' },
              _react2.default.createElement(
                'li',
                { className: 'sidebar-search' },
                _react2.default.createElement(
                  'div',
                  { className: 'input-group custom-search-form' },
                  _react2.default.createElement('input', { type: 'text', className: 'form-control', placeholder: 'Search...' }),
                  _react2.default.createElement(
                    'span',
                    { className: 'input-group-btn' },
                    _react2.default.createElement(
                      'button',
                      { className: 'btn btn-default', type: 'button' },
                      _react2.default.createElement('i', { className: 'fa fa-search' })
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'a',
                  { href: '', onClick: function onClick(e) {
                      e.preventDefault();_history2.default.push('/');
                    } },
                  _react2.default.createElement('i', { className: 'fa fa-home fa-fw' }),
                  ' \xA0Home'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'a',
                  { href: '', onClick: function onClick(e) {
                      e.preventDefault();_history2.default.push('/sbgTeam');
                    } },
                  _react2.default.createElement('i', { className: 'fa fa-group fa-fw' }),
                  ' \xA0SBG Core Team'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'a',
                  { href: '', onClick: function onClick(e) {
                      e.preventDefault();_history2.default.push('/constitution');
                    } },
                  _react2.default.createElement('i', { className: 'fa fa-book fa-fw' }),
                  ' \xA0SBG Constitution'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'a',
                  { href: '', onClick: function onClick(e) {
                      e.preventDefault();_history2.default.push('/committees');
                    } },
                  _react2.default.createElement('i', { className: 'fa fa-dashboard fa-fw' }),
                  ' \xA0Committees'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'a',
                  { href: '', onClick: function onClick(e) {
                      e.preventDefault();_history2.default.push('/clubs');
                    } },
                  _react2.default.createElement('i', { className: 'fa fa-gears fa-fw' }),
                  ' \xA0Clubs'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'a',
                  { href: '', onClick: function onClick(e) {
                      e.preventDefault();_history2.default.push('/minutes');
                    } },
                  _react2.default.createElement('i', { className: 'fa fa-clock-o fa-fw' }),
                  ' \xA0Minutes of Meetings'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'a',
                  { href: '', onClick: function onClick(e) {
                      e.preventDefault();_history2.default.push('/events');
                    } },
                  _react2.default.createElement('i', { className: 'fa fa-calendar fa-fw' }),
                  ' \xA0Events Calender'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'a',
                  { href: '', onClick: function onClick(e) {
                      e.preventDefault();_history2.default.push('/achievements');
                    } },
                  _react2.default.createElement('i', { className: 'fa fa-trophy fa-fw' }),
                  ' \xA0Achievements'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'a',
                  { href: '', onClick: function onClick(e) {
                      e.preventDefault();_history2.default.push('/gallery');
                    } },
                  _react2.default.createElement('i', { className: 'fa fa-camera-retro fa-fw' }),
                  ' \xA0DA-Gallery'
                )
              )
            )
          )
        );
      }
    }]);
    return Sidebar;
  }(_react.Component);
  
  exports.default = Sidebar;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _createBrowserHistory = __webpack_require__(42);
  
  var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);
  
  var _createMemoryHistory = __webpack_require__(43);
  
  var _createMemoryHistory2 = _interopRequireDefault(_createMemoryHistory);
  
  var _useQueries = __webpack_require__(44);
  
  var _useQueries2 = _interopRequireDefault(_useQueries);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var history = (0, _useQueries2.default)( false ? _createBrowserHistory2.default : _createMemoryHistory2.default)(); /**
                                                                                                                                    * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                                                                    *
                                                                                                                                    * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                                                                    *
                                                                                                                                    * This source code is licensed under the MIT license found in the
                                                                                                                                    * LICENSE.txt file in the root directory of this source tree.
                                                                                                                                    */
  
  exports.default = history;

/***/ }),
/* 42 */
/***/ (function(module, exports) {

  module.exports = require("history/lib/createBrowserHistory");

/***/ }),
/* 43 */
/***/ (function(module, exports) {

  module.exports = require("history/lib/createMemoryHistory");

/***/ }),
/* 44 */
/***/ (function(module, exports) {

  module.exports = require("history/lib/useQueries");

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "components/Header/logo.png?b6f19ce630069d05c4196ff5ec91893a";

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _regenerator = __webpack_require__(1);
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _asyncToGenerator2 = __webpack_require__(4);
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Home = __webpack_require__(47);
  
  var _Home2 = _interopRequireDefault(_Home);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  // import fetch from '../../core/fetch';
  
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  exports.default = {
  
    path: '/',
  
    action: function action() {
      var _this = this;
  
      return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt('return', _react2.default.createElement(_Home2.default, null));
  
              case 1:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
  };

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _getPrototypeOf = __webpack_require__(29);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(30);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(31);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(32);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(33);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _extends2 = __webpack_require__(48);
  
  var _extends3 = _interopRequireDefault(_extends2);
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(18);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _reactBootstrap = __webpack_require__(39);
  
  var _lodash = __webpack_require__(49);
  
  var _lodash2 = _interopRequireDefault(_lodash);
  
  var _reactGraphVis = __webpack_require__(50);
  
  var _reactGraphVis2 = _interopRequireDefault(_reactGraphVis);
  
  var _reactYoutube = __webpack_require__(51);
  
  var _reactYoutube2 = _interopRequireDefault(_reactYoutube);
  
  var _history = __webpack_require__(41);
  
  var _history2 = _interopRequireDefault(_history);
  
  var _Home = __webpack_require__(52);
  
  var _Home2 = _interopRequireDefault(_Home);
  
  var _Widget = __webpack_require__(54);
  
  var _Widget2 = _interopRequireDefault(_Widget);
  
  var _Donut = __webpack_require__(58);
  
  var _Donut2 = _interopRequireDefault(_Donut);
  
  var _LabeledPie = __webpack_require__(102);
  
  var _LabeledPie2 = _interopRequireDefault(_LabeledPie);
  
  var _recentUpdates = __webpack_require__(103);
  
  var _recentUpdates2 = _interopRequireDefault(_recentUpdates);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var title = 'SBG | DA-IICT';
  
  var donutUGData = [{ name: 'Academic Committee', value: 8 }, { name: 'Cultural Committee', value: 11 }, { name: 'Annual Festival Committee', value: 13 }, { name: 'Student Placement Cell', value: 20 }, { name: 'Cafeteia Management Committee', value: 4 }, { name: 'ICT Committee', value: 6 }, { name: 'Sports Committee', value: 8 }, { name: 'Hostel Management Committee', value: 29 }];
  
  var donutPGData = [{ name: 'Academic Committee', value: 2 }, { name: 'Cultural Committee', value: 2 }, { name: 'Annual Festival Committee', value: 2 }, { name: 'Student Placement Cell', value: 11 }, { name: 'Cafeteia Management Committee', value: 2 }, { name: 'ICT Committee', value: 2 }, { name: 'Sports Committee', value: 2 }, { name: 'Hostel Management Committee', value: 1 }];
  
  var culturalEvents = [{
    name: 'Cultural Events every year',
    value: 27
  }];
  
  var weeklySession = [{
    name: 'Weekly Club Activities and Sessions',
    value: 10
  }];
  
  var AnnualFests = [{
    name: 'One of the India\'s biggest Annual Festivals',
    value: 3
  }];
  
  var sbgBudget = [{
    name: 'SBG Budget provided by DA-IICT for yearly planned activities',
    value: 1085000
  }];
  
  var graph = {
    nodes: [{ id: 1, label: 'Student Body', color: '#7be041', shape: 'box', shadow: true, size: 50, heightConstraint: { minimum: 30 }, widthConstraint: { minimum: 150 } }, { id: 2, label: 'SBG Members', color: '#e09c41', shape: 'box', shadow: true, size: 50, heightConstraint: { minimum: 30 }, widthConstraint: { minimum: 150 } }, { id: 3, label: 'SBG Core', color: '#41e0c9', shape: 'box', shadow: true, size: 50, heightConstraint: { minimum: 30 }, widthConstraint: { minimum: 150 } }],
    edges: [{ from: 1, to: 2, label: 'Elections', length: 200, shadow: true }, { from: 2, to: 3, label: 'Elections', length: 200, shadow: true }]
  };
  
  var opts = {
    height: '200',
    width: '420',
    playerVars: {
      autoplay: 0
    }
  };
  
  var options = {
    layout: {
      randomSeed: 29,
      hierarchical: {
        enabled: false,
        direction: 'DU'
      }
    },
    edges: {
      color: '#000000'
    },
    width: '400px',
    height: '450px'
  };
  
  var events = {
    select: function select(event) {
      var nodes = event.nodes,
          edges = event.edges;
    }
  };
  
  var otherBodies = {
    AR: {
      header: 'Anti-Ragging Committee',
      body: _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'ul',
          null,
          _react2.default.createElement(
            'li',
            null,
            'Ragging is strictly forbidden at DA-IICT'
          ),
          _react2.default.createElement(
            'li',
            null,
            'Strict measures are taken to ensure ragging-free campus'
          ),
          _react2.default.createElement(
            'li',
            null,
            'ZERO TOLERANCE policy for ragging at DA-IICT'
          ),
          _react2.default.createElement(
            'li',
            null,
            'We assign an Anti-Ragging committee member from senior year on each floor of every wing in HoR to take care of juniors and take appropriate steps if some unwanted activity is going on.'
          ),
          _react2.default.createElement(
            'li',
            null,
            'There are a total of 10 wings and 30 floors in the HoR, hence there are ',
            _react2.default.createElement(
              'strong',
              null,
              '30 Anti-Ragging Members assigned by the SBG Core.'
            )
          )
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'center',
          null,
          _react2.default.createElement(
            _reactBootstrap.Button,
            { href: 'https://docs.google.com/spreadsheets/d/1SZ9OkaZUQciEyMlevUHL8qAXlf30Qw8cuyk9WWZS00k/edit?usp=sharing', target: '_blank' },
            _react2.default.createElement(
              'b',
              null,
              'Anti-Ragging Committee 2017-18'
            )
          )
        )
      )
    },
    SM: {
      header: 'Student Mentorship Programme',
      body: _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h4',
          null,
          'Student Body'
        ),
        _react2.default.createElement(
          'ul',
          null,
          _react2.default.createElement(
            'li',
            null,
            'It is essential that we as seniors take up the responsibility of helping out our juniors in whatever way possible and be role models to whom they can look up to.This is the main aim of the Student Mentorship Program at DA-IICT.  '
          ),
          _react2.default.createElement(
            'li',
            null,
            'The program has been aimed at making the freshers feel comfortable and at the same time motivated to take part in various extracurricular activities going on in the campus.'
          ),
          _react2.default.createElement(
            'li',
            null,
            'It is necessary that we make them understand the importance of overall development. Under the program, mentors are being assigned for a set of freshers. There is a mentor assigned to each floor in each wing.'
          ),
          _react2.default.createElement(
            'li',
            null,
            'There are a total of 10 wings and 30 floors in the HoR, hence there are ',
            _react2.default.createElement(
              'strong',
              null,
              '30 Student Mentors assigned by the SBG Core.'
            )
          )
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'h4',
          null,
          'Student Counsellors'
        ),
        _react2.default.createElement(
          'ol',
          null,
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement(
                'b',
                null,
                'Dr. Nandini Banerjee'
              )
            ),
            _react2.default.createElement(
              'p',
              null,
              'Office: Room No. 2108 (Ground Floor, Faculty Block \u2013 2)'
            ),
            _react2.default.createElement(
              'p',
              null,
              'Phone: 079-30510620 (Off.) & 9327010243 (M)'
            ),
            _react2.default.createElement(
              'p',
              null,
              'Available at DA-IICT on two days in a week (on Tuesday and Thursday)'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement(
                'b',
                null,
                'Dr. Nitu Singh'
              )
            ),
            _react2.default.createElement(
              'p',
              null,
              'Organizes regular student activities and ice-breaking sessions for freshers batch'
            ),
            _react2.default.createElement(
              'p',
              null,
              'Phone: 9723611689 (M)'
            )
          )
        )
      )
    },
    DAC: {
      header: 'Disciplinary Action Committee',
      body: _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h4',
          null,
          'DAC Committee'
        ),
        _react2.default.createElement(
          'ul',
          null,
          _react2.default.createElement(
            'li',
            null,
            'DAC (Disciplinary Action Committee) takes strict action (expulsion of the student(s) from the Hostel or from the Institute) for any undisciplined activity.'
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'b',
              null,
              'Dean (students)'
            ),
            ' is the ',
            _react2.default.createElement(
              'b',
              null,
              'Ex Officio Convener'
            ),
            ' of the DAC.'
          ),
          _react2.default.createElement(
            'li',
            null,
            'Both Wardens, Dy. Registrar, Student Counsellor and ',
            _react2.default.createElement(
              'b',
              null,
              '2 students (nominated)'
            ),
            ' are the Members of the DAC'
          )
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'h4',
          null,
          'DAC Warnings'
        ),
        _react2.default.createElement(
          'ul',
          null,
          _react2.default.createElement(
            'li',
            null,
            'Consumption of alcoholic drinks, smoking, usages of any form of intoxicating materials and all forms of gambling are strictly prohibited in the campus'
          ),
          _react2.default.createElement(
            'li',
            null,
            'In any case, prohibition is enforced in the state of Gujarat. Any student found guilty of the same, would face strict disciplinary action (expulsion from the HoR / Institute). '
          ),
          _react2.default.createElement(
            'li',
            null,
            'No four-wheelers are allowed in the campus.'
          ),
          _react2.default.createElement(
            'li',
            null,
            'if any student would like to have a two-wheeler, he/she need to get it registered with the Hostel supervisor; he/she is also expected to park it in designated area(s) only and follow traffic rules.'
          ),
          _react2.default.createElement(
            'li',
            null,
            'Violation of HoR rules is never tolerated.'
          )
        )
      )
    },
    GC: {
      header: 'Gender Cell',
      body: _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h4',
          null,
          'Gender Cell Student Representatives'
        ),
        _react2.default.createElement(
          'ol',
          null,
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement(
                'b',
                null,
                'Kritika Somani'
              )
            ),
            _react2.default.createElement(
              'p',
              null,
              'Contact: +91 8141246869'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement(
                'b',
                null,
                'Akshay Miterani'
              )
            ),
            _react2.default.createElement(
              'p',
              null,
              'Contact: +91 9586594944'
            )
          )
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'h4',
          null,
          'Gender Studies Group'
        ),
        _react2.default.createElement(
          'ul',
          null,
          _react2.default.createElement(
            'li',
            null,
            'The Gender Studies group in DA-IICT has been active since 2015. The group meets regularly for literary discussions and conducts gender sensitization sessions for newly admitted students since then. It now consists of committed volunteers interested in social change.'
          ),
          _react2.default.createElement(
            'li',
            null,
            'The Gender Studies is a space for DA-IICT community to understand gender as it is practised in the society today .The intention of the group is to forward sensitization in the community and to engage in discussions on the aspects of gender in art, literature, media, science and technology.'
          ),
          _react2.default.createElement(
            'li',
            null,
            'The group strives for inclusivity within the campus and the outside world. Apart from conducting sessions for the new batch, we conduct various activities throughout the year to discuss about the changes in the society and DA-IICT\'s culture in itself. '
          ),
          _react2.default.createElement(
            'li',
            null,
            'The group also spread awareness by performing a play that raises some questions on the sensitive issues mentioned above. The script has been written by ',
            _react2.default.createElement(
              'b',
              null,
              'Prof Shweta Garg'
            ),
            ' and enacted by ',
            _react2.default.createElement(
              'b',
              null,
              'members of DA-IICT Theatre Group'
            ),
            '.'
          )
        )
      )
    }
  };
  
  var MySmallModal = _react2.default.createClass({
    displayName: 'MySmallModal',
    render: function render() {
      return _react2.default.createElement(
        _reactBootstrap.Modal,
        (0, _extends3.default)({}, this.props, { bsSize: 'large', 'aria-labelledby': 'contained-modal-title-lg' }),
        _react2.default.createElement(
          _reactBootstrap.Modal.Header,
          { closeButton: true },
          _react2.default.createElement(
            _reactBootstrap.Modal.Title,
            { id: 'contained-modal-title-lg' },
            this.props.heading
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.Modal.Body,
          null,
          this.props.body
        ),
        _react2.default.createElement(
          _reactBootstrap.Modal.Footer,
          null,
          _react2.default.createElement(
            _reactBootstrap.Button,
            { onClick: this.props.onHide },
            'Close'
          )
        )
      );
    }
  });
  
  var Home = function (_React$Component) {
    (0, _inherits3.default)(Home, _React$Component);
  
    function Home(props, context) {
      (0, _classCallCheck3.default)(this, Home);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (Home.__proto__ || (0, _getPrototypeOf2.default)(Home)).call(this, props));
  
      context.setTitle(title);
      _this.state = {
        modalShow: false,
        header: '',
        body: ''
      };
      _this.modalClose = _this.modalClose.bind(_this);
      _this.onClickAR = _this.onClickAR.bind(_this);
      _this.onClickSM = _this.onClickSM.bind(_this);
      _this.onClickDAC = _this.onClickDAC.bind(_this);
      _this.onClickGC = _this.onClickGC.bind(_this);
      _this.onReady = _this.onReady.bind(_this);
      return _this;
    }
  
    (0, _createClass3.default)(Home, [{
      key: 'onClickAR',
      value: function onClickAR() {
        this.setState({
          modalShow: true,
          header: otherBodies.AR.header,
          body: otherBodies.AR.body
        });
      }
    }, {
      key: 'onClickSM',
      value: function onClickSM() {
        this.setState({
          modalShow: true,
          header: otherBodies.SM.header,
          body: otherBodies.SM.body
        });
      }
    }, {
      key: 'onClickDAC',
      value: function onClickDAC() {
        this.setState({
          modalShow: true,
          header: otherBodies.DAC.header,
          body: otherBodies.DAC.body
        });
      }
    }, {
      key: 'onClickGC',
      value: function onClickGC() {
        this.setState({
          modalShow: true,
          header: otherBodies.GC.header,
          body: otherBodies.GC.body
        });
      }
    }, {
      key: 'modalClose',
      value: function modalClose() {
        this.setState({
          modalShow: false
        });
      }
    }, {
      key: 'onReady',
      value: function onReady(event) {
        event.target.pauseVideo();
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-lg-12' },
              _react2.default.createElement(
                _reactBootstrap.PageHeader,
                null,
                _react2.default.createElement('i', { className: 'fa fa-home' }),
                '\xA0\xA0Home - SBG, DA-IICT'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-lg-3 col-md-4' },
              _react2.default.createElement(_Widget2.default, {
                style: 'panel-primary',
                icon: 'fa fa-user fa-4x',
                count: '4',
                headerText: 'SBG Core Members',
                footerText: 'View Details',
                linkTo: '/sbgTeam'
              })
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-lg-3 col-md-4' },
              _react2.default.createElement(_Widget2.default, {
                style: 'panel-green',
                icon: 'fa fa-dashboard fa-4x',
                count: '8',
                headerText: 'Committees',
                footerText: 'View Details',
                linkTo: '/committees'
              })
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-lg-3 col-md-4' },
              _react2.default.createElement(_Widget2.default, {
                style: 'panel-red',
                icon: 'fa fa-gears fa-4x',
                count: '22',
                headerText: 'Hobby Driven Clubs',
                footerText: 'View Details',
                linkTo: '/clubs'
              })
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-lg-3 col-md-4' },
              _react2.default.createElement(_Widget2.default, {
                style: 'panel-yellow',
                icon: 'fa fa-group fa-4x',
                count: '122',
                headerText: 'Elected Members',
                footerText: 'View Details',
                href: 'https://docs.google.com/spreadsheets/d/1pOG6HOdyIJZkVVJIn9Sg_sPScM39fyDPlAVZVxpwFRw/edit?usp=sharing'
              })
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-lg-7' },
              _react2.default.createElement(
                _reactBootstrap.Panel,
                {
                  header: _react2.default.createElement(
                    'span',
                    null,
                    _react2.default.createElement(
                      'h4',
                      null,
                      _react2.default.createElement('i', { className: 'fa fa-shield fa-fw' }),
                      '\xA0\xA0Student Body Government Vision'
                    )
                  )
                },
                _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement(
                    'p',
                    null,
                    'We, the students of DA-IICT, resolve to constitute a self governing democratic organization called DA-IICT Student Body Government for the purposes of:'
                  ),
                  _react2.default.createElement(
                    'ul',
                    null,
                    _react2.default.createElement(
                      'li',
                      null,
                      'Monitoring and regulation of all student activities'
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      'Ensuring justice and equality in all aspects of student life and'
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      'Enhancing the overall development of students'
                    )
                  ),
                  _react2.default.createElement(
                    'a',
                    { style: { float: 'right' }, href: '', onClick: function onClick(e) {
                        e.preventDefault();_history2.default.push('/constitution');
                      } },
                    'Constitution'
                  )
                )
              ),
              _react2.default.createElement(
                _reactBootstrap.Panel,
                {
                  header: _react2.default.createElement(
                    'span',
                    null,
                    _react2.default.createElement(
                      'h4',
                      null,
                      _react2.default.createElement('i', { className: 'fa fa-bar-chart-o fa-fw' }),
                      ' Activities Statistics'
                    )
                  )
                },
                _react2.default.createElement(
                  'div',
                  { className: 'row' },
                  _react2.default.createElement(
                    'div',
                    { className: 'col-md-6' },
                    _react2.default.createElement(_LabeledPie2.default, { data: AnnualFests, color: '#8884d8', innerRadius: '50%', outerRadius: '90%' }),
                    _react2.default.createElement(
                      'h5',
                      { style: { color: '#8884d8' } },
                      _react2.default.createElement(
                        'center',
                        null,
                        AnnualFests[0].name
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'col-md-6' },
                    _react2.default.createElement(_LabeledPie2.default, { data: culturalEvents, color: '#f39c12', outerRadius: '90%', innerRadius: '50%' }),
                    _react2.default.createElement(
                      'h5',
                      { style: { color: '#f39c12' } },
                      _react2.default.createElement(
                        'center',
                        null,
                        culturalEvents[0].name
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'row' },
                  _react2.default.createElement(
                    'div',
                    { className: 'col-md-6' },
                    _react2.default.createElement(_LabeledPie2.default, { moreThan: true, data: weeklySession, color: '#008080', innerRadius: '50%', outerRadius: '90%' }),
                    _react2.default.createElement(
                      'h5',
                      { style: { color: '#008080' } },
                      _react2.default.createElement(
                        'center',
                        null,
                        weeklySession[0].name
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'col-md-6' },
                    _react2.default.createElement(_LabeledPie2.default, { data: sbgBudget, color: '#f15854', innerRadius: '50%', outerRadius: '90%' }),
                    _react2.default.createElement(
                      'h5',
                      { style: { color: '#f15854' } },
                      _react2.default.createElement(
                        'center',
                        null,
                        sbgBudget[0].name
                      )
                    )
                  )
                )
              ),
              _react2.default.createElement(
                _reactBootstrap.Panel,
                {
                  header: _react2.default.createElement(
                    'span',
                    null,
                    _react2.default.createElement(
                      'h4',
                      null,
                      _react2.default.createElement('i', { className: 'fa fa-shield fa-fw' }),
                      ' The Election Commission'
                    )
                  )
                },
                _react2.default.createElement(
                  'p',
                  null,
                  'The Election Commission resolves to'
                ),
                _react2.default.createElement(
                  'ul',
                  null,
                  _react2.default.createElement(
                    'li',
                    null,
                    'be an independent and autonomous body, responsible for organising and conducting fair elections.'
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    'ensure that the election management is transparent with no scope of partiality.'
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    'deal with any grievances and issues raised during the process nonetheless.'
                  )
                ),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                  'h5',
                  null,
                  'Election Commissioners'
                ),
                _react2.default.createElement(
                  'ol',
                  null,
                  _react2.default.createElement(
                    'li',
                    null,
                    'Piyushi Pawan'
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    'Aashini Soni'
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    'Gaurav Sofat'
                  )
                ),
                _react2.default.createElement(
                  'a',
                  { style: { float: 'right' }, target: '_blank', href: 'https://docs.google.com/document/d/1sHfnu0Tpv6xn-VXDvZIyjVl1UYrmP_8JGJG-42AKP5E/edit?usp=sharing' },
                  'Constitution (First Draft)'
                )
              ),
              _react2.default.createElement(
                _reactBootstrap.Panel,
                {
                  header: _react2.default.createElement(
                    'span',
                    null,
                    _react2.default.createElement(
                      'h4',
                      null,
                      _react2.default.createElement('i', { className: 'fa fa-group fa-fw' }),
                      ' Other Active Student Bodies'
                    )
                  )
                },
                _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement(
                    'ul',
                    { className: 'timeline' },
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        'div',
                        { className: 'timeline-badge' },
                        _react2.default.createElement('i', { className: 'fa fa-check' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'timeline-panel' },
                        _react2.default.createElement(
                          'div',
                          { className: 'timeline-heading' },
                          _react2.default.createElement(
                            'h4',
                            { className: 'timeline-title' },
                            'Anti-Ragging Committee'
                          )
                        ),
                        _react2.default.createElement(
                          'div',
                          { className: 'timeline-body' },
                          _react2.default.createElement(
                            'a',
                            { style: { fontSize: 12 }, onClick: this.onClickAR },
                            'View Details'
                          )
                        )
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      { className: 'timeline-inverted' },
                      _react2.default.createElement(
                        'div',
                        { className: 'timeline-badge success' },
                        _react2.default.createElement('i', { className: 'fa fa-check' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'timeline-panel' },
                        _react2.default.createElement(
                          'div',
                          { className: 'timeline-heading' },
                          _react2.default.createElement(
                            'h4',
                            { className: 'timeline-title' },
                            'Student Mentorship Programme'
                          )
                        ),
                        _react2.default.createElement(
                          'div',
                          { className: 'timeline-body' },
                          _react2.default.createElement(
                            'a',
                            { style: { fontSize: 12 }, onClick: this.onClickSM },
                            'View Details'
                          )
                        )
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        'div',
                        { className: 'timeline-badge danger' },
                        _react2.default.createElement('i', { className: 'fa fa-check' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'timeline-panel' },
                        _react2.default.createElement(
                          'div',
                          { className: 'timeline-heading' },
                          _react2.default.createElement(
                            'h4',
                            { className: 'timeline-title' },
                            'Disciplinary Action Committee'
                          )
                        ),
                        _react2.default.createElement(
                          'div',
                          { className: 'timeline-body' },
                          _react2.default.createElement(
                            'a',
                            { style: { fontSize: 12 }, onClick: this.onClickDAC },
                            'View Details'
                          )
                        )
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      { className: 'timeline-inverted' },
                      _react2.default.createElement(
                        'div',
                        { className: 'timeline-badge warning' },
                        _react2.default.createElement('i', { className: 'fa fa-check' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'timeline-panel' },
                        _react2.default.createElement(
                          'div',
                          { className: 'timeline-heading' },
                          _react2.default.createElement(
                            'h4',
                            { className: 'timeline-title' },
                            'Gender Cell'
                          )
                        ),
                        _react2.default.createElement(
                          'div',
                          { className: 'timeline-body' },
                          _react2.default.createElement(
                            'a',
                            { style: { fontSize: 12 }, onClick: this.onClickGC },
                            'View Details'
                          )
                        )
                      )
                    )
                  ),
                  _react2.default.createElement(MySmallModal, { heading: this.state.header, body: this.state.body, show: this.state.modalShow, onHide: this.modalClose })
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-lg-5' },
              _react2.default.createElement(
                _reactBootstrap.Panel,
                {
                  header: _react2.default.createElement(
                    'span',
                    null,
                    _react2.default.createElement(
                      'h4',
                      null,
                      _react2.default.createElement('i', { className: 'fa fa-sun-o fa-fw' }),
                      ' A Day in DA-IICT'
                    )
                  )
                },
                _react2.default.createElement(_reactYoutube2.default, {
                  videoId: 'XuGtAeEHKwI',
                  opts: opts,
                  onReady: this.onReady
                })
              ),
              _react2.default.createElement(
                _reactBootstrap.Panel,
                {
                  header: _react2.default.createElement(
                    'span',
                    null,
                    _react2.default.createElement(
                      'h4',
                      null,
                      _react2.default.createElement('i', { className: 'fa fa-pencil-square-o fa-fw' }),
                      ' Notable Activities'
                    )
                  )
                },
                _react2.default.createElement(
                  _reactBootstrap.ListGroup,
                  null,
                  _lodash2.default.filter(_recentUpdates2.default, function (o) {
                    return o.active;
                  }).map(function (o) {
                    var timestamp = 'Today';
                    var today = new Date();
                    var dd = today.getDate() === o.date.getDate();
                    var mm = today.getMonth() === o.date.getMonth();
                    var yyyy = today.getFullYear() === o.date.getFullYear();
                    var diff = Math.floor((today.getTime() - o.date.getTime()) / 86400000);
                    if (!dd || !mm || !yyyy) {
                      if (diff === 1) {
                        timestamp = diff + ' day ago';
                      } else {
                        timestamp = diff + ' days ago';
                      }
                    }
                    return _react2.default.createElement(
                      _reactBootstrap.ListGroupItem,
                      { href: o.link, target: '_blank' },
                      _react2.default.createElement('i', { className: 'fa  fa-angle-double-right fa-fw' }),
                      ' ',
                      o.title,
                      _react2.default.createElement(
                        'span',
                        { className: 'pull-right text-muted small' },
                        _react2.default.createElement(
                          'em',
                          null,
                          timestamp
                        )
                      )
                    );
                  })
                )
              ),
              _react2.default.createElement(
                _reactBootstrap.Panel,
                {
                  header: _react2.default.createElement(
                    'span',
                    null,
                    _react2.default.createElement(
                      'h4',
                      null,
                      _react2.default.createElement('i', { className: 'fa fa-signal fa-fw' }),
                      ' SBG Hierarchy'
                    )
                  )
                },
                _react2.default.createElement(_reactGraphVis2.default, { graph: graph, options: options, events: events })
              ),
              _react2.default.createElement(
                _reactBootstrap.Panel,
                {
                  header: _react2.default.createElement(
                    'span',
                    null,
                    _react2.default.createElement(
                      'h4',
                      null,
                      _react2.default.createElement('i', { className: 'fa fa-info-circle fa-fw' }),
                      ' Committee wise Members\' Count'
                    )
                  )
                },
                _react2.default.createElement(
                  _reactBootstrap.Tabs,
                  { id: 'tabs11', defaultActiveKey: 1 },
                  _react2.default.createElement(
                    _reactBootstrap.Tab,
                    { eventKey: 1, title: 'Under Graduate (98)' },
                    _react2.default.createElement(
                      'div',
                      null,
                      _react2.default.createElement(_Donut2.default, { data: donutUGData, color: '#2c3e50', innerRadius: '70%', outerRadius: '90%' })
                    )
                  ),
                  _react2.default.createElement(
                    _reactBootstrap.Tab,
                    { eventKey: 2, title: 'Post Graduate (24)' },
                    _react2.default.createElement(_Donut2.default, { data: donutPGData, color: '#2c3e50', innerRadius: '70%', outerRadius: '90%' })
                  )
                )
              )
            )
          )
        );
      }
    }]);
    return Home;
  }(_react2.default.Component);
  
  Home.contextTypes = { setTitle: _react.PropTypes.func.isRequired };
  
  exports.default = (0, _withStyles2.default)(_Home2.default)(Home);

/***/ }),
/* 48 */
/***/ (function(module, exports) {

  module.exports = require("babel-runtime/helpers/extends");

/***/ }),
/* 49 */
/***/ (function(module, exports) {

  module.exports = require("lodash");

/***/ }),
/* 50 */
/***/ (function(module, exports) {

  module.exports = require("react-graph-vis");

/***/ }),
/* 51 */
/***/ (function(module, exports) {

  module.exports = require("react-youtube");

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(53);
      var insertCss = __webpack_require__(22);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!../../../node_modules/postcss-loader/index.js?pack=default!./Home.css", function() {
          content = require("!!../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!../../../node_modules/postcss-loader/index.js?pack=default!./Home.css");
  
          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }
  
          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(21)();
  // imports
  
  
  // module
  exports.push([module.id, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n}\n\n.Home_root_2IM {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.Home_container_2Ye {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: 1000px;\n}\n\n.Home_news_oTy {\n  padding: 0;\n}\n\n.Home_newsItem_3Ob {\n  list-style-type: none;\n  padding-bottom: 6px;\n}\n\n.Home_newsTitle_1yW {\n  font-size: 1.125em;\n}\n\n.Home_newsTitle_1yW,\n.Home_newsDesc_21L {\n  display: block;\n}\n", "", {"version":3,"sources":["/./routes/home/Home.css","/./components/variables.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;ACPH;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;;EAI9E;;gFAE8E;;EAI9E;;gFAE8E,EAErD,gCAAgC,EAChC,2BAA2B,EAC3B,6BAA6B,CAC7B,iCAAiC;CAC3D;;ADnBD;EACE,mBAAmB;EACnB,oBAAoB;CACrB;;AAED;EACE,eAAe;EACf,kBAAkB;EAClB,kBAAoC;CACrC;;AAED;EACE,WAAW;CACZ;;AAED;EACE,sBAAsB;EACtB,oBAAoB;CACrB;;AAED;EACE,mBAAmB;CACpB;;AAED;;EAEE,eAAe;CAChB","file":"Home.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n@import '../../components/variables.css';\n\n.root {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: var(--max-content-width);\n}\n\n.news {\n  padding: 0;\n}\n\n.newsItem {\n  list-style-type: none;\n  padding-bottom: 6px;\n}\n\n.newsTitle {\n  font-size: 1.125em;\n}\n\n.newsTitle,\n.newsDesc {\n  display: block;\n}\n","/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n"],"sourceRoot":"webpack://"}]);
  
  // exports
  exports.locals = {
  	"root": "Home_root_2IM",
  	"container": "Home_container_2Ye",
  	"news": "Home_news_oTy",
  	"newsItem": "Home_newsItem_3Ob",
  	"newsTitle": "Home_newsTitle_1yW",
  	"newsDesc": "Home_newsDesc_21L"
  };

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _defineProperty2 = __webpack_require__(55);
  
  var _defineProperty3 = _interopRequireDefault(_defineProperty2);
  
  var _getPrototypeOf = __webpack_require__(29);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(30);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(31);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(32);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(33);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactBootstrap = __webpack_require__(39);
  
  var _Link = __webpack_require__(56);
  
  var _Link2 = _interopRequireDefault(_Link);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var StatWidget = function (_Component) {
    (0, _inherits3.default)(StatWidget, _Component);
  
    function StatWidget() {
      (0, _classCallCheck3.default)(this, StatWidget);
      return (0, _possibleConstructorReturn3.default)(this, (StatWidget.__proto__ || (0, _getPrototypeOf2.default)(StatWidget)).apply(this, arguments));
    }
  
    (0, _createClass3.default)(StatWidget, [{
      key: 'render',
      value: function render() {
        var _React$createElement;
  
        return _react2.default.createElement(_reactBootstrap.Panel, (_React$createElement = {
          className: 'stat'
        }, (0, _defineProperty3.default)(_React$createElement, 'className', this.props.style), (0, _defineProperty3.default)(_React$createElement, 'header', _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-xs-3' },
            _react2.default.createElement('i', {
              className: this.props.icon
            })
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-xs-9 text-right' },
            _react2.default.createElement(
              'div',
              { className: 'huge' },
              this.props.count
            ),
            _react2.default.createElement(
              'div',
              null,
              this.props.headerText
            )
          )
        )), (0, _defineProperty3.default)(_React$createElement, 'footer', this.props.linkTo ? _react2.default.createElement(
          _Link2.default // eslint-disable-line
          ,
          { to: this.props.linkTo // eslint-disable-line
  
          },
          _react2.default.createElement(
            'span',
            { className: 'pull-left' },
            this.props.footerText
          ),
          _react2.default.createElement(
            'span',
            { className: 'pull-right' },
            _react2.default.createElement('i', { className: 'fa fa-arrow-circle-right' })
          ),
          _react2.default.createElement('div', { className: 'clearfix' })
        ) : _react2.default.createElement(
          'a',
          { href: this.props.href, target: '_blank' },
          _react2.default.createElement(
            'span',
            { className: 'pull-left' },
            this.props.footerText
          ),
          _react2.default.createElement(
            'span',
            { className: 'pull-right' },
            _react2.default.createElement('i', { className: 'fa fa-arrow-circle-right' })
          ),
          _react2.default.createElement('div', { className: 'clearfix' })
        )), _React$createElement));
      } // eslint-disable-line
  
    }]);
    return StatWidget;
  }(_react.Component);
  
  StatWidget.propTypes = {
    style: _react2.default.PropTypes.string,
    count: _react2.default.PropTypes.string,
    headerText: _react2.default.PropTypes.string,
    icon: _react2.default.PropTypes.string,
    footerText: _react2.default.PropTypes.string
  };
  exports.default = StatWidget;

/***/ }),
/* 55 */
/***/ (function(module, exports) {

  module.exports = require("babel-runtime/helpers/defineProperty");

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _extends2 = __webpack_require__(48);
  
  var _extends3 = _interopRequireDefault(_extends2);
  
  var _objectWithoutProperties2 = __webpack_require__(57);
  
  var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
  
  var _getPrototypeOf = __webpack_require__(29);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(30);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(31);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(32);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(33);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _history = __webpack_require__(41);
  
  var _history2 = _interopRequireDefault(_history);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  function isLeftClickEvent(event) {
    return event.button === 0;
  }
  
  function isModifiedEvent(event) {
    return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
  }
  
  var Link = function (_Component) {
    (0, _inherits3.default)(Link, _Component);
  
    function Link() {
      var _ref;
  
      var _temp, _this, _ret;
  
      (0, _classCallCheck3.default)(this, Link);
  
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
  
      return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Link.__proto__ || (0, _getPrototypeOf2.default)(Link)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function (event) {
        var allowTransition = true;
  
        if (_this.props.onClick) {
          _this.props.onClick(event);
        }
  
        if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
          return;
        }
  
        if (event.defaultPrevented === true) {
          allowTransition = false;
        }
  
        event.preventDefault();
  
        if (allowTransition) {
          if (_this.props.to) {
            _history2.default.push(_this.props.to);
          } else {
            _history2.default.push({
              pathname: event.currentTarget.pathname,
              search: event.currentTarget.search
            });
          }
        }
      }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    } // eslint-disable-line react/prefer-stateless-function
  
    (0, _createClass3.default)(Link, [{
      key: 'render',
      value: function render() {
        var _props = this.props,
            to = _props.to,
            props = (0, _objectWithoutProperties3.default)(_props, ['to']); // eslint-disable-line no-use-before-define
  
        return _react2.default.createElement('a', (0, _extends3.default)({ href: _history2.default.createHref(to) }, props, { onClick: this.handleClick }));
      }
    }]);
    return Link;
  }(_react.Component);
  
  Link.propTypes = {
    to: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.object]).isRequired,
    onClick: _react.PropTypes.func
  };
  exports.default = Link;

/***/ }),
/* 57 */
/***/ (function(module, exports) {

  module.exports = require("babel-runtime/helpers/objectWithoutProperties");

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _getPrototypeOf = __webpack_require__(29);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(30);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(31);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(32);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(33);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _PieChart = __webpack_require__(59);
  
  var _PieChart2 = _interopRequireDefault(_PieChart);
  
  var _Pie = __webpack_require__(87);
  
  var _Pie2 = _interopRequireDefault(_Pie);
  
  var _Sector = __webpack_require__(90);
  
  var _Sector2 = _interopRequireDefault(_Sector);
  
  var _ResponsiveContainer = __webpack_require__(99);
  
  var _ResponsiveContainer2 = _interopRequireDefault(_ResponsiveContainer);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  // import { PieCharts, Pie, Sector, ResponsiveContainer } from '../../vendor/recharts';
  var renderActiveShape = function renderActiveShape(props) {
    var RADIAN = Math.PI / 180;
    var cx = props.cx,
        cy = props.cy,
        midAngle = props.midAngle,
        innerRadius = props.innerRadius,
        outerRadius = props.outerRadius,
        startAngle = props.startAngle,
        endAngle = props.endAngle,
        fill = props.fill,
        payload = props.payload,
        percent = props.percent,
        value = props.value;
  
    var sin = Math.sin(-RADIAN * midAngle);
    var cos = Math.cos(-RADIAN * midAngle);
    var sx = cx + (outerRadius + 5) * cos;
    var sy = cy + (outerRadius + 5) * sin;
    var mx = cx + (outerRadius + 10) * cos;
    var my = cy + (outerRadius + 10) * sin;
    var ex = mx + (cos >= 0 ? 1 : -1) * 11;
    var ey = my;
    var textAnchor = cos >= 0 ? 'start' : 'end';
  
    return _react2.default.createElement(
      'g',
      null,
      _react2.default.createElement(
        'text',
        { x: cx, y: cy, dy: 8, textAnchor: 'middle', fontWeight: 'bold', fill: fill },
        payload.name
      ),
      _react2.default.createElement(_Sector2.default, {
        cx: cx,
        cy: cy,
        innerRadius: innerRadius,
        outerRadius: outerRadius,
        startAngle: startAngle,
        endAngle: endAngle,
        fill: fill
      }),
      _react2.default.createElement(_Sector2.default, {
        cx: cx,
        cy: cy,
        startAngle: startAngle,
        endAngle: endAngle,
        innerRadius: outerRadius + 6,
        outerRadius: outerRadius + 10,
        fill: fill
      }),
      _react2.default.createElement('path', { d: 'M' + sx + ',' + sy + 'L' + mx + ',' + my + 'L' + ex + ',' + ey, stroke: fill, fill: 'none' }),
      _react2.default.createElement('circle', { cx: ex, cy: ey, r: 2, fill: fill, stroke: 'none' }),
      _react2.default.createElement(
        'text',
        {
          x: ex + (cos >= 0 ? 1 : -1) * 12,
          y: ey,
          textAnchor: textAnchor,
          fill: '#333',
          fontWeight: 'bold'
        },
        value
      )
    );
  };
  
  var Donut = function (_Component) {
    (0, _inherits3.default)(Donut, _Component);
  
    function Donut(props) {
      (0, _classCallCheck3.default)(this, Donut);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (Donut.__proto__ || (0, _getPrototypeOf2.default)(Donut)).call(this, props));
  
      _this.state = {
        activeIndex: 0
      };
      // this.onPieEnter = this.onPieEnter.bind(this);
      return _this;
    }
  
    (0, _createClass3.default)(Donut, [{
      key: 'onPieEnter',
      value: function onPieEnter(data, index) {
        this.setState({
          activeIndex: index
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;
  
        return _react2.default.createElement(
          _ResponsiveContainer2.default,
          { width: '100%', aspect: 1 },
          _react2.default.createElement(
            _PieChart2.default,
            {
              margin: { top: 10, right: 50, left: 30, bottom: 0 },
              onMouseEnter: function onMouseEnter(data, index) {
                _this2.onPieEnter(data, index);
              }
            },
            _react2.default.createElement(_Pie2.default, {
              activeIndex: this.state.activeIndex,
              activeShape: renderActiveShape,
              data: this.props.data,
              innerRadius: this.props.innerRadius,
              outerRadius: this.props.outerRadius,
              fill: this.props.color
            })
          )
        );
      }
    }]);
    return Donut;
  }(_react.Component);
  
  Donut.propTypes = {
    data: _react2.default.PropTypes.array,
    innerRadius: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]),
    outerRadius: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]),
    color: _react2.default.PropTypes.string
  };
  exports.default = Donut;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  var _getPrototypeOf = __webpack_require__(29);
  
  var _getPrototypeOf2 = _interopRequireDefault2(_getPrototypeOf);
  
  var _setPrototypeOf = __webpack_require__(60);
  
  var _setPrototypeOf2 = _interopRequireDefault2(_setPrototypeOf);
  
  var _create = __webpack_require__(61);
  
  var _create2 = _interopRequireDefault2(_create);
  
  var _typeof2 = __webpack_require__(62);
  
  var _typeof3 = _interopRequireDefault2(_typeof2);
  
  var _defineProperty = __webpack_require__(63);
  
  var _defineProperty2 = _interopRequireDefault2(_defineProperty);
  
  var _assign = __webpack_require__(23);
  
  var _assign2 = _interopRequireDefault2(_assign);
  
  function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _extends = _assign2.default || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };
  
  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;(0, _defineProperty2.default)(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }();
  
  var _class, _class2, _temp2; /**
                                * @fileOverview Pie Chart
                                */
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _classnames = __webpack_require__(64);
  
  var _classnames2 = _interopRequireDefault(_classnames);
  
  var _Surface = __webpack_require__(65);
  
  var _Surface2 = _interopRequireDefault(_Surface);
  
  var _Legend = __webpack_require__(73);
  
  var _Legend2 = _interopRequireDefault(_Legend);
  
  var _Tooltip = __webpack_require__(84);
  
  var _Tooltip2 = _interopRequireDefault(_Tooltip);
  
  var _Pie = __webpack_require__(87);
  
  var _Pie2 = _interopRequireDefault(_Pie);
  
  var _Cell = __webpack_require__(97);
  
  var _Cell2 = _interopRequireDefault(_Cell);
  
  var _DataUtils = __webpack_require__(98);
  
  var _ReactUtils = __webpack_require__(66);
  
  var _PolarUtils = __webpack_require__(91);
  
  var _PureRender = __webpack_require__(74);
  
  var _PureRender2 = _interopRequireDefault(_PureRender);
  
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  
  function _objectWithoutProperties(obj, keys) {
    var target = {};for (var i in obj) {
      if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
    }return target;
  }
  
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  
  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
  }
  
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
    }subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
  }
  
  var PieChart = (0, _PureRender2.default)(_class = (_temp2 = _class2 = function (_Component) {
    _inherits(PieChart, _Component);
  
    function PieChart() {
      var _ref;
  
      var _temp, _this, _ret;
  
      _classCallCheck(this, PieChart);
  
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
  
      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PieChart.__proto__ || (0, _getPrototypeOf2.default)(PieChart)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        activeTooltipLabel: '',
        activeTooltipCoord: { x: 0, y: 0 },
        activeTooltipPayload: [],
        isTooltipActive: false
      }, _this.handleMouseEnter = function (el, index, e) {
        var _this$props = _this.props;
        var children = _this$props.children;
        var onMouseEnter = _this$props.onMouseEnter;
        var cx = el.cx;
        var cy = el.cy;
        var outerRadius = el.outerRadius;
        var midAngle = el.midAngle;
  
        var tooltipItem = (0, _ReactUtils.findChildByType)(children, _Tooltip2.default);
  
        if (tooltipItem) {
          _this.setState({
            isTooltipActive: true,
            activeTooltipCoord: (0, _PolarUtils.polarToCartesian)(cx, cy, outerRadius, midAngle),
            activeTooltipPayload: [el]
          }, function () {
            if (onMouseEnter) {
              onMouseEnter(el, index, e);
            }
          });
        } else if (onMouseEnter) {
          onMouseEnter(el, index, e);
        }
      }, _this.handleMouseLeave = function (el, index, e) {
        var _this$props2 = _this.props;
        var children = _this$props2.children;
        var onMouseLeave = _this$props2.onMouseLeave;
  
        var tooltipItem = (0, _ReactUtils.findChildByType)(children, _Tooltip2.default);
  
        if (tooltipItem) {
          _this.setState({
            isTooltipActive: false
          }, function () {
            if (onMouseLeave) {
              onMouseLeave(el, index, e);
            }
          });
        } else if (onMouseLeave) {
          onMouseLeave(el, index, e);
        }
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }
  
    _createClass(PieChart, [{
      key: 'getComposedData',
      value: function getComposedData(item) {
        var _item$props = item.props;
        var data = _item$props.data;
        var children = _item$props.children;
  
        var props = (0, _ReactUtils.getPresentationAttributes)(item.props);
        var cells = (0, _ReactUtils.findAllByType)(children, _Cell2.default);
  
        if (data && data.length) {
          return data.map(function (entry, index) {
            return _extends({}, props, entry, cells && cells[index] && cells[index].props);
          });
        }
  
        if (cells && cells.length) {
          return cells.map(function (cell) {
            return _extends({}, props, cell.props);
          });
        }
  
        return [];
      }
    }, {
      key: 'renderLegend',
  
      /**
       * Draw legend
       * @param  {Array} items             The instances of Pie
       * @return {ReactElement}            The instance of Legend
       */
      value: function renderLegend(items) {
        var _this2 = this;
  
        var children = this.props.children;
  
        var legendItem = (0, _ReactUtils.findChildByType)(children, _Legend2.default);
        if (!legendItem) {
          return null;
        }
  
        var _props = this.props;
        var width = _props.width;
        var height = _props.height;
        var margin = _props.margin;
  
        var legendData = legendItem.props && legendItem.props.payload || items.reduce(function (result, child) {
          var nameKey = child.props.nameKey;
  
          var data = _this2.getComposedData(child);
  
          return result.concat(data.map(function (entry) {
            return _extends({}, entry, { type: child.props.legendType, value: entry[nameKey],
              color: entry.fill
            });
          }));
        }, []);
  
        return _react2.default.cloneElement(legendItem, _extends({}, _Legend2.default.getWithHeight(legendItem, width, height), {
          payload: legendData,
          chartWidth: width,
          chartHeight: height,
          margin: margin
        }));
      }
    }, {
      key: 'renderTooltip',
      value: function renderTooltip() {
        var children = this.props.children;
  
        var tooltipItem = (0, _ReactUtils.findChildByType)(children, _Tooltip2.default);
  
        if (!tooltipItem) {
          return null;
        }
  
        var _props2 = this.props;
        var width = _props2.width;
        var height = _props2.height;
        var _state = this.state;
        var isTooltipActive = _state.isTooltipActive;
        var activeTooltipLabel = _state.activeTooltipLabel;
        var activeTooltipCoord = _state.activeTooltipCoord;
        var activeTooltipPayload = _state.activeTooltipPayload;
  
        var viewBox = { x: 0, y: 0, width: width, height: height };
  
        return _react2.default.cloneElement(tooltipItem, {
          viewBox: viewBox,
          active: isTooltipActive,
          label: activeTooltipLabel,
          payload: activeTooltipPayload,
          coordinate: activeTooltipCoord
        });
      }
  
      /**
       * Draw the main part of bar chart
       * @param  {Array} items    All the instance of Pie
       * @return {ReactComponent} All the instance of Pie
       */
  
    }, {
      key: 'renderItems',
      value: function renderItems(items) {
        var _this3 = this;
  
        var _props3 = this.props;
        var width = _props3.width;
        var height = _props3.height;
        var margin = _props3.margin;
        var onClick = _props3.onClick;
  
        return items.map(function (child, i) {
          var _child$props = child.props;
          var innerRadius = _child$props.innerRadius;
          var outerRadius = _child$props.outerRadius;
          var data = _child$props.data;
  
          var cx = (0, _DataUtils.getPercentValue)(child.props.cx, width, width / 2);
          var cy = (0, _DataUtils.getPercentValue)(child.props.cy, height, height / 2);
          var maxRadius = (0, _PolarUtils.getMaxRadius)(width, height, margin);
  
          return _react2.default.cloneElement(child, {
            key: 'recharts-pie-' + i,
            cx: cx,
            cy: cy,
            maxRadius: child.props.maxRadius || Math.sqrt(width * width + height * height) / 2,
            innerRadius: (0, _DataUtils.getPercentValue)(innerRadius, maxRadius, 0),
            outerRadius: (0, _DataUtils.getPercentValue)(outerRadius, maxRadius, maxRadius * 0.8),
            composedData: _this3.getComposedData(child),
            onMouseEnter: _this3.handleMouseEnter,
            onMouseLeave: _this3.handleMouseLeave,
            onClick: onClick
          });
        });
      }
    }, {
      key: 'render',
      value: function render() {
        if (!(0, _ReactUtils.validateWidthHeight)(this)) {
          return null;
        }
  
        var _props4 = this.props;
        var style = _props4.style;
        var children = _props4.children;
        var className = _props4.className;
        var width = _props4.width;
        var height = _props4.height;
  
        var others = _objectWithoutProperties(_props4, ['style', 'children', 'className', 'width', 'height']);
  
        var items = (0, _ReactUtils.findAllByType)(children, _Pie2.default);
        var attrs = (0, _ReactUtils.getPresentationAttributes)(others);
  
        return _react2.default.createElement('div', {
          className: (0, _classnames2.default)('recharts-wrapper', className),
          style: _extends({}, style, { position: 'relative', cursor: 'default', width: width, height: height })
        }, _react2.default.createElement(_Surface2.default, _extends({}, attrs, { width: width, height: height }), this.renderItems(items), (0, _ReactUtils.filterSvgElements)(children)), this.renderLegend(items), this.renderTooltip());
      }
    }]);
  
    return PieChart;
  }(_react.Component), _class2.displayName = 'PieChart', _class2.propTypes = {
    width: _react.PropTypes.number,
    height: _react.PropTypes.number,
    margin: _react.PropTypes.shape({
      top: _react.PropTypes.number,
      right: _react.PropTypes.number,
      bottom: _react.PropTypes.number,
      left: _react.PropTypes.number
    }),
    title: _react.PropTypes.string,
    style: _react.PropTypes.object,
    children: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.node), _react.PropTypes.node]),
    className: _react.PropTypes.string,
    onMouseEnter: _react.PropTypes.func,
    onMouseLeave: _react.PropTypes.func,
    onClick: _react.PropTypes.func
  }, _class2.defaultProps = {
    style: {},
    margin: { top: 0, right: 0, bottom: 0, left: 0 }
  }, _temp2)) || _class;
  
  exports.default = PieChart;

/***/ }),
/* 60 */
/***/ (function(module, exports) {

  module.exports = require("babel-runtime/core-js/object/set-prototype-of");

/***/ }),
/* 61 */
/***/ (function(module, exports) {

  module.exports = require("babel-runtime/core-js/object/create");

/***/ }),
/* 62 */
/***/ (function(module, exports) {

  module.exports = require("babel-runtime/helpers/typeof");

/***/ }),
/* 63 */
/***/ (function(module, exports) {

  module.exports = require("babel-runtime/core-js/object/define-property");

/***/ }),
/* 64 */
/***/ (function(module, exports) {

  module.exports = require("classnames");

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  var _assign = __webpack_require__(23);
  
  var _assign2 = _interopRequireDefault2(_assign);
  
  function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _extends = _assign2.default || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _classnames = __webpack_require__(64);
  
  var _classnames2 = _interopRequireDefault(_classnames);
  
  var _ReactUtils = __webpack_require__(66);
  
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  
  function _objectWithoutProperties(obj, keys) {
    var target = {};for (var i in obj) {
      if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
    }return target;
  } /**
     * @fileOverview Surface
     */
  
  var propTypes = {
    width: _react.PropTypes.number.isRequired,
    height: _react.PropTypes.number.isRequired,
    viewBox: _react.PropTypes.shape({
      x: _react.PropTypes.number,
      y: _react.PropTypes.number,
      width: _react.PropTypes.number,
      height: _react.PropTypes.number
    }),
    className: _react.PropTypes.string,
    style: _react.PropTypes.object,
    children: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.node), _react.PropTypes.node])
  };
  function Surface(props) {
    var children = props.children;
    var width = props.width;
    var height = props.height;
    var viewBox = props.viewBox;
    var className = props.className;
    var style = props.style;
  
    var others = _objectWithoutProperties(props, ['children', 'width', 'height', 'viewBox', 'className', 'style']);
  
    var svgView = viewBox || { width: width, height: height, x: 0, y: 0 };
    var layerClass = (0, _classnames2.default)('recharts-surface', className);
    var attrs = (0, _ReactUtils.getPresentationAttributes)(others);
  
    return _react2.default.createElement('svg', _extends({}, attrs, {
      className: layerClass,
      width: width,
      height: height,
      style: style,
      viewBox: svgView.x + ' ' + svgView.y + ' ' + svgView.width + ' ' + svgView.height,
      version: '1.1'
    }), children);
  }
  
  Surface.propTypes = propTypes;
  
  exports.default = Surface;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  var _keys = __webpack_require__(67);
  
  var _keys2 = _interopRequireDefault2(_keys);
  
  var _defineProperty2 = __webpack_require__(63);
  
  var _defineProperty3 = _interopRequireDefault2(_defineProperty2);
  
  var _assign = __webpack_require__(23);
  
  var _assign2 = _interopRequireDefault2(_assign);
  
  function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.filterSvgElements = exports.isSsr = exports.validateWidthHeight = exports.filterEventsOfChild = exports.filterEventAttributes = exports.getPresentationAttributes = exports.withoutType = exports.findChildByType = exports.findAllByType = exports.getDisplayName = exports.PRESENTATION_ATTRIBUTES = undefined;
  
  var _isString2 = __webpack_require__(68);
  
  var _isString3 = _interopRequireDefault(_isString2);
  
  var _isNumber2 = __webpack_require__(69);
  
  var _isNumber3 = _interopRequireDefault(_isNumber2);
  
  var _isObject2 = __webpack_require__(70);
  
  var _isObject3 = _interopRequireDefault(_isObject2);
  
  var _isFunction2 = __webpack_require__(71);
  
  var _isFunction3 = _interopRequireDefault(_isFunction2);
  
  var _isArray2 = __webpack_require__(72);
  
  var _isArray3 = _interopRequireDefault(_isArray2);
  
  var _extends = _assign2.default || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      (0, _defineProperty3.default)(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
    } else {
      obj[key] = value;
    }return obj;
  }
  
  var PRESENTATION_ATTRIBUTES = exports.PRESENTATION_ATTRIBUTES = {
    alignmentBaseline: _react.PropTypes.string,
    baselineShift: _react.PropTypes.string,
    clip: _react.PropTypes.string,
    clipPath: _react.PropTypes.string,
    clipRule: _react.PropTypes.string,
    color: _react.PropTypes.string,
    colorInterpolation: _react.PropTypes.string,
    colorInterpolationFilters: _react.PropTypes.string,
    colorProfile: _react.PropTypes.string,
    colorRendering: _react.PropTypes.string,
    cursor: _react.PropTypes.string,
    direction: _react.PropTypes.oneOf(['ltr', 'rtl', 'inherit']),
    display: _react.PropTypes.string,
    dominantBaseline: _react.PropTypes.string,
    enableBackground: _react.PropTypes.string,
    fill: _react.PropTypes.string,
    fillOpacity: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
    fillRule: _react.PropTypes.oneOf(['nonzero', 'evenodd', 'inherit']),
    filter: _react.PropTypes.string,
    floodColor: _react.PropTypes.string,
    floodOpacity: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
    font: _react.PropTypes.string,
    fontFamily: _react.PropTypes.string,
    fontSize: _react.PropTypes.number,
    fontSizeAdjust: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
    fontStretch: _react.PropTypes.oneOf(['normal', 'wider', 'narrower', 'ultra-condensed', 'extra-condensed', 'condensed', 'semi-condensed', 'semi-expanded', 'expanded', 'extra-expanded', 'ultra-expanded', 'inherit']),
    fontStyle: _react.PropTypes.oneOf(['normal', 'italic', 'oblique', 'inherit']),
    fontVariant: _react.PropTypes.oneOf(['normal', 'small-caps', 'inherit']),
    fontWeight: _react.PropTypes.oneOf(['normal', 'bold', 'bolder', 'lighter', 100, 200, 300, 400, 500, 600, 700, 800, 900, 'inherit']),
    glyphOrientationHorizontal: _react.PropTypes.string,
    glyphOrientationVertical: _react.PropTypes.string,
    imageRendering: _react.PropTypes.oneOf(['auto', 'optimizeSpeed', 'optimizeQuality', 'inherit']),
    kerning: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
    letterSpacing: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
    lightingColor: _react.PropTypes.string,
    markerEnd: _react.PropTypes.string,
    markerMid: _react.PropTypes.string,
    markerStart: _react.PropTypes.string,
    mask: _react.PropTypes.string,
    opacity: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
    overflow: _react.PropTypes.oneOf(['visible', 'hidden', 'scroll', 'auto', 'inherit']),
    pointerEvents: _react.PropTypes.oneOf(['visiblePainted', 'visibleFill', 'visibleStroke', 'visible', 'painted', 'fill', 'stroke', 'all', 'none', 'inherit']),
    shapeRendering: _react.PropTypes.oneOf(['auto', 'optimizeSpeed', 'crispEdges', 'geometricPrecision', 'inherit']),
    stopColor: _react.PropTypes.string,
    stopOpacity: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
    stroke: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
    strokeDasharray: _react.PropTypes.string,
    strokeDashoffset: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
    strokeLinecap: _react.PropTypes.oneOf(['butt', 'round', 'square', 'inherit']),
    strokeLinejoin: _react.PropTypes.oneOf(['miter', 'round', 'bevel', 'inherit']),
    strokeMiterlimit: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
    strokeOpacity: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
    strokeWidth: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
    textAnchor: _react.PropTypes.oneOf(['start', 'middle', 'end', 'inherit']),
    textDecoration: _react.PropTypes.oneOf(['none', 'underline', 'overline', 'line-through', 'blink', 'inherit']),
    textRendering: _react.PropTypes.oneOf(['auto', 'optimizeSpeed', 'optimizeLegibility', 'geometricPrecision', 'inherit']),
    unicodeBidi: _react.PropTypes.oneOf(['normal', 'embed', 'bidi-override', 'inherit']),
    visibility: _react.PropTypes.oneOf(['visible', 'hidden', 'collapse', 'inherit']),
    wordSpacing: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
    writingMode: _react.PropTypes.oneOf(['lr-tb', 'rl-tb', 'tb-rl', 'lr', 'rl', 'tb', 'inherit']),
    transform: _react.PropTypes.string,
    style: _react.PropTypes.object,
  
    width: _react.PropTypes.number,
    height: _react.PropTypes.number,
    dx: _react.PropTypes.number,
    dy: _react.PropTypes.number,
    x: _react.PropTypes.number,
    y: _react.PropTypes.number,
    r: _react.PropTypes.number
  };
  
  var EVENT_ATTRIBUTES = {
    onClick: _react.PropTypes.func,
    onMouseDown: _react.PropTypes.func,
    onMouseUp: _react.PropTypes.func,
    onMouseOver: _react.PropTypes.func,
    onMouseMove: _react.PropTypes.func,
    onMouseOut: _react.PropTypes.func,
    onMouseEnter: _react.PropTypes.func,
    onMouseLeave: _react.PropTypes.func
  };
  /**
   * Get the display name of a component
   * @param  {Object} Comp Specified Component
   * @return {String}      Display name of Component
   */
  var getDisplayName = exports.getDisplayName = function getDisplayName(Comp) {
    if (!Comp) {
      return '';
    }
    if (typeof Comp === 'string') {
      return Comp;
    }
    return Comp.displayName || Comp.name || 'Component';
  };
  
  /*
   * Find and return all matched children by type. `type` can be a React element class or
   * string
   */
  var findAllByType = exports.findAllByType = function findAllByType(children, type) {
    var result = [];
    var types = [];
  
    if ((0, _isArray3.default)(type)) {
      types = type.map(function (t) {
        return getDisplayName(t);
      });
    } else {
      types = [getDisplayName(type)];
    }
  
    _react2.default.Children.forEach(children, function (child) {
      var childType = child && child.type && (child.type.displayName || child.type.name);
      if (types.indexOf(childType) !== -1) {
        result.push(child);
      }
    });
  
    return result;
  };
  /*
   * Return the first matched child by type, return null otherwise.
   * `type` can be a React element class or string.
   */
  var findChildByType = exports.findChildByType = function findChildByType(children, type) {
    var result = findAllByType(children, type);
  
    return result && result[0];
  };
  
  /*
   * Create a new array of children excluding the ones matched the type
   */
  var withoutType = exports.withoutType = function withoutType(children, type) {
    var newChildren = [];
    var types = void 0;
  
    if ((0, _isArray3.default)(type)) {
      types = type.map(function (t) {
        return getDisplayName(t);
      });
    } else {
      types = [getDisplayName(type)];
    }
  
    _react2.default.Children.forEach(children, function (child) {
      if (child && child.type && child.type.displayName && types.indexOf(child.type.displayName) !== -1) {
        return;
      }
      newChildren.push(child);
    });
  
    return newChildren;
  };
  
  /**
   * get all the presentation attribute of svg element
   * @param  {Object} el A react element or the props of a react element
   * @return {Object}    attributes or null
   */
  var getPresentationAttributes = exports.getPresentationAttributes = function getPresentationAttributes(el) {
    if (!el || (0, _isFunction3.default)(el)) {
      return null;
    }
  
    var props = _react2.default.isValidElement(el) ? el.props : el;
  
    if (!(0, _isObject3.default)(props)) {
      return null;
    }
  
    var keys = (0, _keys2.default)(props).filter(function (k) {
      return PRESENTATION_ATTRIBUTES[k];
    });
  
    return keys && keys.length ? keys.reduce(function (result, k) {
      return _extends({}, result, _defineProperty({}, k, props[k]));
    }, {}) : null;
  };
  
  /**
   * get all the event attribute of svg element
   * @param  {Object} el A react element or the props of a react element
   * @return {Object}    attributes or null
   */
  var filterEventAttributes = exports.filterEventAttributes = function filterEventAttributes(el) {
    if (!el || (0, _isFunction3.default)(el)) {
      return null;
    }
  
    var props = _react2.default.isValidElement(el) ? el.props : el;
  
    if (!(0, _isObject3.default)(props)) {
      return null;
    }
  
    var keys = (0, _keys2.default)(props).filter(function (k) {
      return EVENT_ATTRIBUTES[k];
    });
  
    return keys && keys.length ? keys.reduce(function (result, k) {
      return _extends({}, result, _defineProperty({}, k, props[k]));
    }, {}) : null;
  };
  
  var getEventHandler = function getEventHandler(originalHandler, data, index) {
    return function (e) {
      originalHandler(data, index, e);
  
      return null;
    };
  };
  
  var filterEventsOfChild = exports.filterEventsOfChild = function filterEventsOfChild(props, data, index) {
    if (!(0, _isObject3.default)(props)) {
      return null;
    }
  
    var events = (0, _keys2.default)(props).filter(function (k) {
      return EVENT_ATTRIBUTES[k] && (0, _isFunction3.default)(props[k]);
    });
  
    return events && events.length ? events.reduce(function (result, e) {
      return _extends({}, result, _defineProperty({}, e, getEventHandler(props[e], data, index)));
    }, {}) : null;
  };
  
  /**
   * validate the width and height props of a chart element
   * @param  {Object} el A chart element
   * @return {Boolean}   true If the props width and height are number, and greater than 0
   */
  var validateWidthHeight = exports.validateWidthHeight = function validateWidthHeight(el) {
    if (!el || !el.props) {
      return false;
    }
    var _el$props = el.props;
    var width = _el$props.width;
    var height = _el$props.height;
  
    if (!(0, _isNumber3.default)(width) || width <= 0 || !(0, _isNumber3.default)(height) || height <= 0) {
      return false;
    }
  
    return true;
  };
  
  var isSsr = exports.isSsr = function isSsr() {
    return typeof document === 'undefined';
  };
  
  var SVG_TAGS = ['a', 'altGlyph', 'altGlyphDef', 'altGlyphItem', 'animate', 'animateColor', 'animateMotion', 'animateTransform', 'circle', 'clipPath', 'color-profile', 'cursor', 'defs', 'desc', 'ellipse', 'feBlend', 'feColormatrix', 'feComponentTransfer', 'feComposite', 'feConvolveMatrix', 'feDiffuseLighting', 'feDisplacementMap', 'feDistantLight', 'feFlood', 'feFuncA', 'feFuncB', 'feFuncG', 'feFuncR', 'feGaussianBlur', 'feImage', 'feMerge', 'feMergeNode', 'feMorphology', 'feOffset', 'fePointLight', 'feSpecularLighting', 'feSpotLight', 'feTile', 'feTurbulence', 'filter', 'font', 'font-face', 'font-face-format', 'font-face-name', 'font-face-url', 'foreignObject', 'g', 'glyph', 'glyphRef', 'hkern', 'image', 'line', 'lineGradient', 'marker', 'mask', 'metadata', 'missing-glyph', 'mpath', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'script', 'set', 'stop', 'style', 'svg', 'switch', 'symbol', 'text', 'textPath', 'title', 'tref', 'tspan', 'use', 'view', 'vkern'];
  /**
   * Filter all the svg elements of children
   * @param  {Array} children The children of a react element
   * @return {Array}          All the svg elements
   */
  var filterSvgElements = exports.filterSvgElements = function filterSvgElements(children) {
    var svgElements = [];
  
    _react2.default.Children.forEach(children, function (entry) {
      if (entry && entry.type && (0, _isString3.default)(entry.type) && SVG_TAGS.indexOf(entry.type) >= 0) {
        svgElements.push(entry);
      }
    });
  
    return svgElements;
  };

/***/ }),
/* 67 */
/***/ (function(module, exports) {

  module.exports = require("babel-runtime/core-js/object/keys");

/***/ }),
/* 68 */
/***/ (function(module, exports) {

  module.exports = require("lodash/isString");

/***/ }),
/* 69 */
/***/ (function(module, exports) {

  module.exports = require("lodash/isNumber");

/***/ }),
/* 70 */
/***/ (function(module, exports) {

  module.exports = require("lodash/isObject");

/***/ }),
/* 71 */
/***/ (function(module, exports) {

  module.exports = require("lodash/isFunction");

/***/ }),
/* 72 */
/***/ (function(module, exports) {

  module.exports = require("lodash/isArray");

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  var _getPrototypeOf = __webpack_require__(29);
  
  var _getPrototypeOf2 = _interopRequireDefault2(_getPrototypeOf);
  
  var _setPrototypeOf = __webpack_require__(60);
  
  var _setPrototypeOf2 = _interopRequireDefault2(_setPrototypeOf);
  
  var _create = __webpack_require__(61);
  
  var _create2 = _interopRequireDefault2(_create);
  
  var _typeof2 = __webpack_require__(62);
  
  var _typeof3 = _interopRequireDefault2(_typeof2);
  
  var _defineProperty = __webpack_require__(63);
  
  var _defineProperty2 = _interopRequireDefault2(_defineProperty);
  
  var _assign = __webpack_require__(23);
  
  var _assign2 = _interopRequireDefault2(_assign);
  
  function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _isNumber2 = __webpack_require__(69);
  
  var _isNumber3 = _interopRequireDefault(_isNumber2);
  
  var _isFunction2 = __webpack_require__(71);
  
  var _isFunction3 = _interopRequireDefault(_isFunction2);
  
  var _extends = _assign2.default || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };
  
  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;(0, _defineProperty2.default)(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }();
  
  var _class, _class2, _temp; /**
                               * @fileOverview Legend
                               */
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _PureRender = __webpack_require__(74);
  
  var _PureRender2 = _interopRequireDefault(_PureRender);
  
  var _server = __webpack_require__(12);
  
  var _server2 = _interopRequireDefault(_server);
  
  var _Surface = __webpack_require__(65);
  
  var _Surface2 = _interopRequireDefault(_Surface);
  
  var _DefaultLegendContent = __webpack_require__(79);
  
  var _DefaultLegendContent2 = _interopRequireDefault(_DefaultLegendContent);
  
  var _DOMUtils = __webpack_require__(82);
  
  var _ReactUtils = __webpack_require__(66);
  
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  
  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === 'undefined' ? 'undefined' : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
  }
  
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : (0, _typeof3.default)(superClass)));
    }subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
  }
  
  var SIZE = 32;
  
  var renderContent = function renderContent(content, props) {
    if (_react2.default.isValidElement(content)) {
      return _react2.default.cloneElement(content, props);
    } else if ((0, _isFunction3.default)(content)) {
      return content(props);
    }
  
    return _react2.default.createElement(_DefaultLegendContent2.default, props);
  };
  
  var Legend = (0, _PureRender2.default)(_class = (_temp = _class2 = function (_Component) {
    _inherits(Legend, _Component);
  
    function Legend() {
      _classCallCheck(this, Legend);
  
      return _possibleConstructorReturn(this, (Legend.__proto__ || (0, _getPrototypeOf2.default)(Legend)).apply(this, arguments));
    }
  
    _createClass(Legend, [{
      key: 'getDefaultPosition',
      value: function getDefaultPosition(style) {
        var _props = this.props;
        var layout = _props.layout;
        var align = _props.align;
        var verticalAlign = _props.verticalAlign;
        var margin = _props.margin;
        var chartWidth = _props.chartWidth;
        var chartHeight = _props.chartHeight;
  
        var hPos = void 0;
        var vPos = void 0;
  
        if (!style || (style.left === undefined || style.left === null) && (style.right === undefined || style.right === null)) {
          if (align === 'center' && layout === 'vertical') {
            var box = Legend.getLegendBBox(this.props) || { width: 0 };
            hPos = { left: ((chartWidth || 0) - box.width) / 2 };
          } else {
            hPos = align === 'right' ? { right: margin && margin.right || 0 } : { left: margin && margin.left || 0 };
          }
        }
  
        if (!style || (style.top === undefined || style.top === null) && (style.bottom === undefined || style.bottom === null)) {
          if (verticalAlign === 'middle') {
            var _box = Legend.getLegendBBox(this.props) || { height: 0 };
            vPos = { top: ((chartHeight || 0) - _box.height) / 2 };
          } else {
            vPos = verticalAlign === 'bottom' ? { bottom: margin && margin.bottom || 0 } : { top: margin && margin.top || 0 };
          }
        }
  
        return _extends({}, hPos, vPos);
      }
    }, {
      key: 'render',
      value: function render() {
        var _props2 = this.props;
        var content = _props2.content;
        var width = _props2.width;
        var height = _props2.height;
        var layout = _props2.layout;
        var wrapperStyle = _props2.wrapperStyle;
  
        var outerStyle = _extends({
          position: 'absolute',
          width: width || 'auto',
          height: height || 'auto'
        }, this.getDefaultPosition(wrapperStyle), wrapperStyle);
  
        return _react2.default.createElement('div', { className: 'recharts-legend-wrapper', style: outerStyle }, renderContent(content, this.props));
      }
    }], [{
      key: 'getWithHeight',
      value: function getWithHeight(item, chartWidth, chartHeight) {
        var layout = item.props.layout;
  
        if (layout === 'vertical' && (0, _isNumber3.default)(item.props.height)) {
          return {
            height: item.props.height
          };
        } else if (layout === 'horizontal') {
          return {
            width: item.props.width || chartWidth
          };
        }
  
        return null;
      }
    }, {
      key: 'getLegendBBox',
      value: function getLegendBBox(props) {
        if (!(0, _ReactUtils.isSsr)()) {
          var content = props.content;
          var width = props.width;
          var height = props.height;
          var wrapperStyle = props.wrapperStyle;
  
          var contentHtml = _server2.default.renderToStaticMarkup(renderContent(content, props));
          var style = _extends({
            // solve the problem temporarily that the width and height will be affect by the global css
            fontSize: 12,
            position: 'absolute',
            width: width || 'auto',
            height: height || 'auto'
          }, wrapperStyle, {
            top: -20000,
            left: 0,
            display: 'block'
          });
          var wrapper = document.createElement('div');
  
          wrapper.setAttribute('style', (0, _DOMUtils.getStyleString)(style));
          wrapper.innerHTML = contentHtml;
          document.body.appendChild(wrapper);
          var box = wrapper.getBoundingClientRect();
  
          document.body.removeChild(wrapper);
  
          return box;
        }
  
        return null;
      }
    }]);
  
    return Legend;
  }(_react.Component), _class2.displayName = 'Legend', _class2.propTypes = {
    content: _react.PropTypes.oneOfType([_react.PropTypes.element, _react.PropTypes.func]),
    wrapperStyle: _react.PropTypes.object,
    chartWidth: _react.PropTypes.number,
    chartHeight: _react.PropTypes.number,
    width: _react.PropTypes.number,
    height: _react.PropTypes.number,
    iconSize: _react.PropTypes.number,
    layout: _react.PropTypes.oneOf(['horizontal', 'vertical']),
    align: _react.PropTypes.oneOf(['center', 'left', 'right']),
    verticalAlign: _react.PropTypes.oneOf(['top', 'bottom', 'middle']),
    margin: _react.PropTypes.shape({
      top: _react.PropTypes.number,
      left: _react.PropTypes.number,
      bottom: _react.PropTypes.number,
      right: _react.PropTypes.number
    }),
    payload: _react.PropTypes.arrayOf(_react.PropTypes.shape({
      value: _react.PropTypes.any,
      id: _react.PropTypes.any,
      type: _react.PropTypes.oneOf(['line', 'square', 'rect', 'circle', 'cross', 'diamond', 'square', 'star', 'triangle', 'wye'])
    }))
  }, _class2.defaultProps = {
    iconSize: 14,
    layout: 'horizontal',
    align: 'center',
    verticalAlign: 'bottom'
  }, _temp)) || _class;
  
  exports.default = Legend;

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  var _keys = __webpack_require__(67);
  
  var _keys2 = _interopRequireDefault2(_keys);
  
  var _iterator = __webpack_require__(75);
  
  var _iterator2 = _interopRequireDefault2(_iterator);
  
  var _typeof3 = __webpack_require__(62);
  
  var _typeof4 = _interopRequireDefault2(_typeof3);
  
  var _symbol = __webpack_require__(76);
  
  var _symbol2 = _interopRequireDefault2(_symbol);
  
  function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.shallowEqual = undefined;
  
  var _isPlainObject2 = __webpack_require__(77);
  
  var _isPlainObject3 = _interopRequireDefault(_isPlainObject2);
  
  var _isEqual2 = __webpack_require__(78);
  
  var _isEqual3 = _interopRequireDefault(_isEqual2);
  
  var _isArray2 = __webpack_require__(72);
  
  var _isArray3 = _interopRequireDefault(_isArray2);
  
  var _typeof = typeof _symbol2.default === "function" && (0, _typeof4.default)(_iterator2.default) === "symbol" ? function (obj) {
    return typeof obj === 'undefined' ? 'undefined' : (0, _typeof4.default)(obj);
  } : function (obj) {
    return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj === 'undefined' ? 'undefined' : (0, _typeof4.default)(obj);
  };
  
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  
  function shallowEqual(objA, objB) {
    if (objA === objB) {
      return true;
    }
  
    if ((typeof objA === 'undefined' ? 'undefined' : _typeof(objA)) !== 'object' || objA === null || (typeof objB === 'undefined' ? 'undefined' : _typeof(objB)) !== 'object' || objB === null) {
      return false;
    }
  
    var keysA = (0, _keys2.default)(objA);
    var keysB = (0, _keys2.default)(objB);
  
    if (keysA.length !== keysB.length) {
      return false;
    }
  
    var bHasOwnProperty = hasOwnProperty.bind(objB);
    for (var i = 0; i < keysA.length; i++) {
      var keyA = keysA[i];
  
      if (objA[keyA] === objB[keyA]) {
        continue;
      }
  
      // special diff with Array or Object
      if ((0, _isArray3.default)(objA[keyA])) {
        if (!(0, _isArray3.default)(objB[keyA]) || objA[keyA].length !== objB[keyA].length) {
          return false;
        } else if (!(0, _isEqual3.default)(objA[keyA], objB[keyA])) {
          return false;
        }
      } else if ((0, _isPlainObject3.default)(objA[keyA])) {
        if (!(0, _isPlainObject3.default)(objB[keyA]) || !(0, _isEqual3.default)(objA[keyA], objB[keyA])) {
          return false;
        }
      } else if (!bHasOwnProperty(keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
        return false;
      }
    }
  
    return true;
  }
  
  function shallowCompare(instance, nextProps, nextState) {
    return !shallowEqual(instance.props, nextProps) || !shallowEqual(instance.state, nextState);
  }
  
  function shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }
  /* eslint-disable no-param-reassign */
  function pureRenderDecorator(component) {
    component.prototype.shouldComponentUpdate = shouldComponentUpdate;
  }
  exports.shallowEqual = shallowEqual;
  exports.default = pureRenderDecorator;

/***/ }),
/* 75 */
/***/ (function(module, exports) {

  module.exports = require("babel-runtime/core-js/symbol/iterator");

/***/ }),
/* 76 */
/***/ (function(module, exports) {

  module.exports = require("babel-runtime/core-js/symbol");

/***/ }),
/* 77 */
/***/ (function(module, exports) {

  module.exports = require("lodash/isPlainObject");

/***/ }),
/* 78 */
/***/ (function(module, exports) {

  module.exports = require("lodash/isEqual");

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  var _getPrototypeOf = __webpack_require__(29);
  
  var _getPrototypeOf2 = _interopRequireDefault2(_getPrototypeOf);
  
  var _setPrototypeOf = __webpack_require__(60);
  
  var _setPrototypeOf2 = _interopRequireDefault2(_setPrototypeOf);
  
  var _create = __webpack_require__(61);
  
  var _create2 = _interopRequireDefault2(_create);
  
  var _typeof2 = __webpack_require__(62);
  
  var _typeof3 = _interopRequireDefault2(_typeof2);
  
  var _defineProperty = __webpack_require__(63);
  
  var _defineProperty2 = _interopRequireDefault2(_defineProperty);
  
  function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;(0, _defineProperty2.default)(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }();
  
  var _class, _class2, _temp; /**
                               * @fileOverview Default Legend Content
                               */
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _PureRender = __webpack_require__(74);
  
  var _PureRender2 = _interopRequireDefault(_PureRender);
  
  var _Surface = __webpack_require__(65);
  
  var _Surface2 = _interopRequireDefault(_Surface);
  
  var _Symbols = __webpack_require__(80);
  
  var _Symbols2 = _interopRequireDefault(_Symbols);
  
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  
  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
  }
  
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
    }subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
  }
  
  var PI = Math.PI;
  var SIZE = 32;
  
  var DefaultLegendContent = (0, _PureRender2.default)(_class = (_temp = _class2 = function (_Component) {
    _inherits(DefaultLegendContent, _Component);
  
    function DefaultLegendContent() {
      _classCallCheck(this, DefaultLegendContent);
  
      return _possibleConstructorReturn(this, (DefaultLegendContent.__proto__ || (0, _getPrototypeOf2.default)(DefaultLegendContent)).apply(this, arguments));
    }
  
    _createClass(DefaultLegendContent, [{
      key: 'renderIcon',
  
      /**
       * Render the path of icon
       * @param {Object} data Data of each legend item
       * @return {String} Path element
       */
      value: function renderIcon(data) {
        var color = data.color;
  
        var halfSize = SIZE / 2;
        var sixthSize = SIZE / 6;
        var thirdSize = SIZE / 3;
  
        if (data.type === 'line') {
          return _react2.default.createElement('path', {
            strokeWidth: 4,
            fill: 'none',
            stroke: color,
            d: 'M0,' + halfSize + 'h' + thirdSize + '\n            A' + sixthSize + ',' + sixthSize + ',0,1,1,' + 2 * thirdSize + ',' + halfSize + '\n            H' + SIZE + 'M' + 2 * thirdSize + ',' + halfSize + '\n            A' + sixthSize + ',' + sixthSize + ',0,1,1,' + thirdSize + ',' + halfSize,
            className: 'recharts-legend-icon'
          });
        } else if (data.type === 'rect') {
          return _react2.default.createElement('path', {
            stroke: 'none',
            fill: color,
            d: 'M0,' + SIZE / 8 + 'h' + SIZE + 'v' + SIZE * 3 / 4 + 'h' + -SIZE + 'z',
            className: 'recharts-legend-icon'
          });
        }
  
        return _react2.default.createElement(_Symbols2.default, {
          fill: color,
          cx: halfSize,
          cy: halfSize,
          size: SIZE,
          sizeType: 'diameter',
          type: data.type
        });
      }
  
      /**
       * Draw items of legend
       * @return {ReactElement} Items
       */
  
    }, {
      key: 'renderItems',
      value: function renderItems() {
        var _this2 = this;
  
        var _props = this.props;
        var payload = _props.payload;
        var iconSize = _props.iconSize;
        var layout = _props.layout;
  
        var viewBox = { x: 0, y: 0, width: SIZE, height: SIZE };
        var itemStyle = {
          display: layout === 'horizontal' ? 'inline-block' : 'block',
          marginRight: 10
        };
        var svgStyle = { display: 'inline-block', verticalAlign: 'middle', marginRight: 4 };
  
        return payload.map(function (entry, i) {
          return _react2.default.createElement('li', {
            className: 'recharts-legend-item legend-item-' + i,
            style: itemStyle,
            key: 'legend-item-' + i
          }, _react2.default.createElement(_Surface2.default, { width: iconSize, height: iconSize, viewBox: viewBox, style: svgStyle }, _this2.renderIcon(entry, iconSize)), _react2.default.createElement('span', { className: 'recharts-legend-item-text' }, entry.value));
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var _props2 = this.props;
        var payload = _props2.payload;
        var layout = _props2.layout;
        var align = _props2.align;
  
        if (!payload || !payload.length) {
          return null;
        }
  
        var finalStyle = {
          padding: 0,
          margin: 0,
          textAlign: layout === 'horizontal' ? align : 'left'
        };
  
        return _react2.default.createElement('ul', { className: 'recharts-default-legend', style: finalStyle }, this.renderItems());
      }
    }]);
  
    return DefaultLegendContent;
  }(_react.Component), _class2.displayName = 'Legend', _class2.propTypes = {
    content: _react.PropTypes.element,
    iconSize: _react.PropTypes.number,
    layout: _react.PropTypes.oneOf(['horizontal', 'vertical']),
    align: _react.PropTypes.oneOf(['center', 'left', 'right']),
    verticalAlign: _react.PropTypes.oneOf(['top', 'bottom', 'middle']),
    payload: _react.PropTypes.arrayOf(_react.PropTypes.shape({
      value: _react.PropTypes.any,
      id: _react.PropTypes.any,
      type: _react.PropTypes.oneOf(['line', 'square', 'rect', 'circle', 'cross', 'diamond', 'square', 'star', 'triangle', 'wye'])
    }))
  }, _class2.defaultProps = {
    iconSize: 14,
    layout: 'horizontal',
    align: 'center',
    verticalAlign: 'middle'
  }, _temp)) || _class;
  
  exports.default = DefaultLegendContent;

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  var _getPrototypeOf = __webpack_require__(29);
  
  var _getPrototypeOf2 = _interopRequireDefault2(_getPrototypeOf);
  
  var _setPrototypeOf = __webpack_require__(60);
  
  var _setPrototypeOf2 = _interopRequireDefault2(_setPrototypeOf);
  
  var _create = __webpack_require__(61);
  
  var _create2 = _interopRequireDefault2(_create);
  
  var _typeof2 = __webpack_require__(62);
  
  var _typeof3 = _interopRequireDefault2(_typeof2);
  
  var _defineProperty = __webpack_require__(63);
  
  var _defineProperty2 = _interopRequireDefault2(_defineProperty);
  
  var _assign = __webpack_require__(23);
  
  var _assign2 = _interopRequireDefault2(_assign);
  
  function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _extends = _assign2.default || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };
  
  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;(0, _defineProperty2.default)(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }();
  
  var _class, _class2, _temp; /**
                               * @fileOverview Curve
                               */
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _d3Shape = __webpack_require__(81);
  
  var _PureRender = __webpack_require__(74);
  
  var _PureRender2 = _interopRequireDefault(_PureRender);
  
  var _classnames = __webpack_require__(64);
  
  var _classnames2 = _interopRequireDefault(_classnames);
  
  var _ReactUtils = __webpack_require__(66);
  
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  
  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
  }
  
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
    }subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
  }
  
  var SYMBOL_FACTORIES = {
    symbolCircle: _d3Shape.symbolCircle, symbolCross: _d3Shape.symbolCross, symbolDiamond: _d3Shape.symbolDiamond,
    symbolSquare: _d3Shape.symbolSquare, symbolStar: _d3Shape.symbolStar, symbolTriangle: _d3Shape.symbolTriangle, symbolWye: _d3Shape.symbolWye
  };
  var RADIAN = Math.PI / 180;
  
  var getSymbolFactory = function getSymbolFactory(type) {
    var name = 'symbol' + type.slice(0, 1).toUpperCase() + type.slice(1);
  
    return SYMBOL_FACTORIES[name] || _d3Shape.symbolCircle;
  };
  
  var calculateAreaSize = function calculateAreaSize(size, sizeType, type) {
    if (sizeType === 'area') {
      return size;
    }
  
    switch (type) {
      case 'cross':
        return 5 * size * size / 9;
      case 'diamond':
        return 0.5 * size * size / Math.sqrt(3);
      case 'square':
        return size * size;
      case 'star':
        {
          var angle = 18 * RADIAN;
  
          return 1.25 * size * size * (Math.tan(angle) - Math.tan(angle * 2) * Math.pow(Math.tan(angle), 2));
        }
      case 'triangle':
        return Math.sqrt(3) * size * size / 4;
      case 'wye':
        return (21 - 10 * Math.sqrt(3)) * size * size / 8;
      default:
        return Math.PI * size * size / 4;
    }
  };
  
  var Symbols = (0, _PureRender2.default)(_class = (_temp = _class2 = function (_Component) {
    _inherits(Symbols, _Component);
  
    function Symbols() {
      _classCallCheck(this, Symbols);
  
      return _possibleConstructorReturn(this, (Symbols.__proto__ || (0, _getPrototypeOf2.default)(Symbols)).apply(this, arguments));
    }
  
    _createClass(Symbols, [{
      key: 'getPath',
  
      /**
       * Calculate the path of curve
       * @return {String} path
       */
      value: function getPath() {
        var _props = this.props;
        var size = _props.size;
        var sizeType = _props.sizeType;
        var type = _props.type;
  
        var symbolFactory = getSymbolFactory(type);
        var symbol = (0, _d3Shape.symbol)().type(symbolFactory).size(calculateAreaSize(size, sizeType, type));
  
        return symbol();
      }
    }, {
      key: 'render',
      value: function render() {
        var _props2 = this.props;
        var className = _props2.className;
        var cx = _props2.cx;
        var cy = _props2.cy;
        var size = _props2.size;
  
        if (cx === +cx && cy === +cy && size === +size) {
  
          return _react2.default.createElement('path', _extends({}, (0, _ReactUtils.getPresentationAttributes)(this.props), (0, _ReactUtils.filterEventAttributes)(this.props), {
            className: (0, _classnames2.default)('recharts-symbols', className),
            transform: 'translate(' + cx + ', ' + cy + ')',
            d: this.getPath()
          }));
        }
  
        return null;
      }
    }]);
  
    return Symbols;
  }(_react.Component), _class2.displayName = 'Symbols', _class2.propTypes = _extends({}, _ReactUtils.PRESENTATION_ATTRIBUTES, {
    className: _react.PropTypes.string,
    type: _react.PropTypes.oneOf(['circle', 'cross', 'diamond', 'square', 'star', 'triangle', 'wye']),
    cx: _react.PropTypes.number,
    cy: _react.PropTypes.number,
    size: _react.PropTypes.number,
    sizeType: _react.PropTypes.oneOf(['area', 'diameter'])
  }), _class2.defaultProps = {
    type: 'circle',
    stroke: 'none',
    fill: '#000',
    size: 64,
    sizeType: 'area'
  }, _temp)) || _class;
  
  exports.default = Symbols;

/***/ }),
/* 81 */
/***/ (function(module, exports) {

  module.exports = require("d3-shape");

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  var _keys = __webpack_require__(67);
  
  var _keys2 = _interopRequireDefault(_keys);
  
  var _from = __webpack_require__(83);
  
  var _from2 = _interopRequireDefault(_from);
  
  var _assign = __webpack_require__(23);
  
  var _assign2 = _interopRequireDefault(_assign);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.calculateChartCoordinate = exports.getOffset = exports.getStringSize = exports.getStyleString = undefined;
  
  var _extends = _assign2.default || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };
  
  var _ReactUtils = __webpack_require__(66);
  
  function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }return arr2;
    } else {
      return (0, _from2.default)(arr);
    }
  }
  
  var stringCache = {
    widthCache: {},
    cacheCount: 0
  };
  var MAX_CACHE_NUM = 2000;
  var SPAN_STYLE = {
    position: 'absolute',
    top: '-20000px',
    left: 0,
    padding: 0,
    margin: 0,
    border: 'none',
    whiteSpace: 'pre'
  };
  var STYLE_LIST = ['minWidth', 'maxWidth', 'width', 'minHeight', 'maxHeight', 'height', 'top', 'left', 'fontSize', 'lineHeight', 'padding', 'margin', 'paddingLeft', 'paddingRight', 'paddingTop', 'paddingBottom', 'marginLeft', 'marginRight', 'marginTop', 'marginBottom'];
  var MEASUREMENT_SPAN_ID = 'recharts_measurement_span';
  
  function autoCompleteStyle(name, value) {
    if (STYLE_LIST.indexOf(name) >= 0 && value === +value) {
      return value + 'px';
    }
  
    return value;
  }
  
  function camelToMiddleLine(text) {
    var strs = text.split('');
  
    var formatStrs = strs.reduce(function (result, entry) {
      if (entry === entry.toUpperCase()) {
        return [].concat(_toConsumableArray(result), ['-', entry.toLowerCase()]);
      }
  
      return [].concat(_toConsumableArray(result), [entry]);
    }, []);
  
    return formatStrs.join('');
  }
  
  function getComputedStyles(el) {
    return el.ownerDocument.defaultView.getComputedStyle(el, null);
  }
  
  var getStyleString = exports.getStyleString = function getStyleString(style) {
    return (0, _keys2.default)(style).reduce(function (result, s) {
      return '' + result + camelToMiddleLine(s) + ':' + autoCompleteStyle(s, style[s]) + ';';
    }, '');
  };
  
  var getStringSize = exports.getStringSize = function getStringSize(text) {
    var style = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
  
    if (text === undefined || text === null || (0, _ReactUtils.isSsr)()) {
      return 0;
    }
  
    var str = '' + text;
    var styleString = getStyleString(style);
    var cacheKey = str + '-' + styleString;
  
    if (stringCache.widthCache[cacheKey]) {
      return stringCache.widthCache[cacheKey];
    }
  
    var measurementSpan = document.getElementById(MEASUREMENT_SPAN_ID);
    if (!measurementSpan) {
      measurementSpan = document.createElement('span');
      measurementSpan.setAttribute('id', MEASUREMENT_SPAN_ID);
      document.body.appendChild(measurementSpan);
    }
  
    measurementSpan.setAttribute('style', getStyleString(_extends({}, SPAN_STYLE, style)));
    measurementSpan.textContent = str;
  
    var rect = measurementSpan.getBoundingClientRect();
    var result = { width: rect.width, height: rect.height };
  
    stringCache.widthCache[cacheKey] = result;
  
    if (++stringCache.cacheCount > MAX_CACHE_NUM) {
      stringCache.cacheCount = 0;
      stringCache.widthCache = {};
    }
  
    return result;
  };
  
  var getOffset = exports.getOffset = function getOffset(el) {
    var html = el.ownerDocument.documentElement;
    var box = { top: 0, left: 0 };
  
    // If we don't have gBCR, just use 0,0 rather than error
    // BlackBerry 5, iOS 3 (original iPhone)
    if (typeof el.getBoundingClientRect !== 'undefined') {
      box = el.getBoundingClientRect();
    }
  
    return {
      top: box.top + window.pageYOffset - html.clientTop,
      left: box.left + window.pageXOffset - html.clientLeft
    };
  };
  
  /**
   * Calculate coordinate of cursor in chart
   * @param  {Object} event  Event object
   * @param  {Object} offset The offset of main part in the svg element
   * @return {Object}        {chartX, chartY}
   */
  var calculateChartCoordinate = exports.calculateChartCoordinate = function calculateChartCoordinate(event, offset) {
    return {
      chartX: Math.round(event.pageX - offset.left),
      chartY: Math.round(event.pageY - offset.top)
    };
  };

/***/ }),
/* 83 */
/***/ (function(module, exports) {

  module.exports = require("babel-runtime/core-js/array/from");

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  var _getPrototypeOf = __webpack_require__(29);
  
  var _getPrototypeOf2 = _interopRequireDefault2(_getPrototypeOf);
  
  var _setPrototypeOf = __webpack_require__(60);
  
  var _setPrototypeOf2 = _interopRequireDefault2(_setPrototypeOf);
  
  var _create = __webpack_require__(61);
  
  var _create2 = _interopRequireDefault2(_create);
  
  var _typeof2 = __webpack_require__(62);
  
  var _typeof3 = _interopRequireDefault2(_typeof2);
  
  var _assign = __webpack_require__(23);
  
  var _assign2 = _interopRequireDefault2(_assign);
  
  var _defineProperty = __webpack_require__(63);
  
  var _defineProperty2 = _interopRequireDefault2(_defineProperty);
  
  function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _isString2 = __webpack_require__(68);
  
  var _isString3 = _interopRequireDefault(_isString2);
  
  var _isNumber2 = __webpack_require__(69);
  
  var _isNumber3 = _interopRequireDefault(_isNumber2);
  
  var _isFunction2 = __webpack_require__(71);
  
  var _isFunction3 = _interopRequireDefault(_isFunction2);
  
  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;(0, _defineProperty2.default)(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }();
  
  var _class, _temp;
  
  var _extends = _assign2.default || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  }; /**
      * @fileOverview Tooltip
      */
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _PureRender = __webpack_require__(74);
  
  var _PureRender2 = _interopRequireDefault(_PureRender);
  
  var _server = __webpack_require__(12);
  
  var _server2 = _interopRequireDefault(_server);
  
  var _DefaultTooltipContent = __webpack_require__(85);
  
  var _DefaultTooltipContent2 = _interopRequireDefault(_DefaultTooltipContent);
  
  var _DOMUtils = __webpack_require__(82);
  
  var _ReactUtils = __webpack_require__(66);
  
  var _reactSmooth = __webpack_require__(86);
  
  var _reactSmooth2 = _interopRequireDefault(_reactSmooth);
  
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  
  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === 'undefined' ? 'undefined' : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
  }
  
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : (0, _typeof3.default)(superClass)));
    }subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
  }
  
  var propTypes = {
    content: _react.PropTypes.oneOfType([_react.PropTypes.element, _react.PropTypes.func]),
    viewBox: _react.PropTypes.shape({
      x: _react.PropTypes.number,
      y: _react.PropTypes.number,
      width: _react.PropTypes.number,
      height: _react.PropTypes.number
    }),
  
    active: _react.PropTypes.bool,
    separator: _react.PropTypes.string,
    formatter: _react.PropTypes.func,
    offset: _react.PropTypes.number,
  
    itemStyle: _react.PropTypes.object,
    labelStyle: _react.PropTypes.object,
    wrapperStyle: _react.PropTypes.object,
    cursor: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.element, _react.PropTypes.object]),
  
    coordinate: _react.PropTypes.shape({
      x: _react.PropTypes.number,
      y: _react.PropTypes.number
    }),
  
    label: _react.PropTypes.any,
    payload: _react.PropTypes.arrayOf(_react.PropTypes.shape({
      name: _react.PropTypes.any,
      value: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
      unit: _react.PropTypes.any
    })),
  
    isAnimationActive: _react.PropTypes.bool,
    animationDuration: _react.PropTypes.number,
    animationEasing: _react.PropTypes.oneOf(['ease', 'ease-in', 'ease-out', 'ease-in-out', 'linear']),
    itemSorter: _react.PropTypes.func
  };
  
  var defaultProps = {
    active: false,
    offset: 10,
    viewBox: { x1: 0, x2: 0, y1: 0, y2: 0 },
    coordinate: { x: 0, y: 0 },
    cursorStyle: {},
    separator: ' : ',
    wrapperStyle: {},
    itemStyle: {},
    labelStyle: {},
    cursor: true,
    isAnimationActive: true,
    animationEasing: 'ease',
    animationDuration: 400,
    itemSorter: function itemSorter(item1, item2) {
      return -1;
    }
  };
  
  var getTooltipBBox = function getTooltipBBox(wrapperStyle, contentItem) {
    if (!(0, _ReactUtils.isSsr)()) {
      var contentHtml = _server2.default.renderToStaticMarkup(contentItem);
      var style = _extends({
        // solve the problem temporarily that the width and height will be affect by the global css
        fontSize: 12
      }, wrapperStyle, {
        top: -20000,
        left: 0,
        display: 'block'
      });
  
      var wrapper = document.createElement('div');
  
      wrapper.setAttribute('style', (0, _DOMUtils.getStyleString)(style));
      wrapper.innerHTML = contentHtml;
      document.body.appendChild(wrapper);
      var box = wrapper.getBoundingClientRect();
  
      document.body.removeChild(wrapper);
  
      return box;
    }
  
    return null;
  };
  
  var renderContent = function renderContent(content, props) {
    if (_react2.default.isValidElement(content)) {
      return _react2.default.cloneElement(content, props);
    } else if ((0, _isFunction3.default)(content)) {
      return content(props);
    }
  
    return _react2.default.createElement(_DefaultTooltipContent2.default, props);
  };
  
  var Tooltip = (_temp = _class = function (_Component) {
    _inherits(Tooltip, _Component);
  
    function Tooltip() {
      _classCallCheck(this, Tooltip);
  
      return _possibleConstructorReturn(this, (Tooltip.__proto__ || (0, _getPrototypeOf2.default)(Tooltip)).apply(this, arguments));
    }
  
    _createClass(Tooltip, [{
      key: 'render',
      value: function render() {
        var _props = this.props;
        var payload = _props.payload;
        var isAnimationActive = _props.isAnimationActive;
        var animationDuration = _props.animationDuration;
        var animationEasing = _props.animationEasing;
  
        if (!payload || !payload.length || !payload.filter(function (entry) {
          return (0, _isNumber3.default)(entry.value) || (0, _isString3.default)(entry.value);
        }).length) {
          return null;
        }
  
        var _props2 = this.props;
        var content = _props2.content;
        var viewBox = _props2.viewBox;
        var coordinate = _props2.coordinate;
        var active = _props2.active;
        var offset = _props2.offset;
        var wrapperStyle = _props2.wrapperStyle;
  
        var outerStyle = _extends({
          pointerEvents: 'none',
          display: active ? 'block' : 'none',
          position: 'absolute',
          top: 0
        }, wrapperStyle);
        var contentItem = renderContent(content, this.props);
        var box = getTooltipBBox(outerStyle, contentItem);
  
        if (!box) {
          return null;
        }
        var translateX = Math.max(coordinate.x + box.width + offset > viewBox.x + viewBox.width ? coordinate.x - box.width - offset : coordinate.x + offset, viewBox.x);
  
        var translateY = Math.max(coordinate.y + box.height + offset > viewBox.y + viewBox.height ? coordinate.y - box.height - offset : coordinate.y + offset, viewBox.y);
  
        return _react2.default.createElement(_reactSmooth2.default, {
          from: 'translate(' + translateX + 'px, ' + translateY + 'px)',
          to: 'translate(' + translateX + 'px, ' + translateY + 'px)',
          duration: animationDuration,
          isActive: isAnimationActive,
          easing: animationEasing,
          attributeName: 'transform'
        }, _react2.default.createElement('div', {
          className: 'recharts-tooltip-wrapper',
          style: outerStyle
        }, contentItem));
      }
    }]);
  
    return Tooltip;
  }(_react.Component), _class.displayName = 'Tooltip', _class.propTypes = propTypes, _class.defaultProps = defaultProps, _temp);
  exports.default = Tooltip;

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  var _getPrototypeOf = __webpack_require__(29);
  
  var _getPrototypeOf2 = _interopRequireDefault2(_getPrototypeOf);
  
  var _setPrototypeOf = __webpack_require__(60);
  
  var _setPrototypeOf2 = _interopRequireDefault2(_setPrototypeOf);
  
  var _create = __webpack_require__(61);
  
  var _create2 = _interopRequireDefault2(_create);
  
  var _typeof2 = __webpack_require__(62);
  
  var _typeof3 = _interopRequireDefault2(_typeof2);
  
  var _defineProperty = __webpack_require__(63);
  
  var _defineProperty2 = _interopRequireDefault2(_defineProperty);
  
  var _assign = __webpack_require__(23);
  
  var _assign2 = _interopRequireDefault2(_assign);
  
  function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _isString2 = __webpack_require__(68);
  
  var _isString3 = _interopRequireDefault(_isString2);
  
  var _isNumber2 = __webpack_require__(69);
  
  var _isNumber3 = _interopRequireDefault(_isNumber2);
  
  var _extends = _assign2.default || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };
  
  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;(0, _defineProperty2.default)(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }();
  
  var _class, _class2, _temp; /**
                               * @fileOverview Default Tooltip Content
                               */
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _PureRender = __webpack_require__(74);
  
  var _PureRender2 = _interopRequireDefault(_PureRender);
  
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  
  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === 'undefined' ? 'undefined' : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
  }
  
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : (0, _typeof3.default)(superClass)));
    }subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
  }
  
  var DefaultTooltipContent = (0, _PureRender2.default)(_class = (_temp = _class2 = function (_Component) {
    _inherits(DefaultTooltipContent, _Component);
  
    function DefaultTooltipContent() {
      _classCallCheck(this, DefaultTooltipContent);
  
      return _possibleConstructorReturn(this, (DefaultTooltipContent.__proto__ || (0, _getPrototypeOf2.default)(DefaultTooltipContent)).apply(this, arguments));
    }
  
    _createClass(DefaultTooltipContent, [{
      key: 'renderContent',
      value: function renderContent() {
        var _props = this.props;
        var payload = _props.payload;
        var separator = _props.separator;
        var formatter = _props.formatter;
        var itemStyle = _props.itemStyle;
        var itemSorter = _props.itemSorter;
  
        if (payload && payload.length) {
          var listStyle = { padding: 0, margin: 0 };
  
          var items = payload.filter(function (entry) {
            return (0, _isNumber3.default)(entry.value) || (0, _isString3.default)(entry.value);
          }).sort(itemSorter).map(function (entry, i) {
            var finalItemStyle = _extends({
              display: 'block',
              paddingTop: 4,
              paddingBottom: 4,
              color: entry.color || '#000'
            }, itemStyle);
            var finalFormatter = entry.formatter || formatter;
  
            return _react2.default.createElement('li', { className: 'recharts-tooltip-item', key: 'tooltip-item-' + i, style: finalItemStyle }, _react2.default.createElement('span', { className: 'recharts-tooltip-item-name' }, entry.name), _react2.default.createElement('span', { className: 'recharts-tooltip-item-separator' }, separator), _react2.default.createElement('span', { className: 'recharts-tooltip-item-value' }, finalFormatter ? finalFormatter(entry.value, entry.name, entry) : entry.value), _react2.default.createElement('span', { className: 'recharts-tooltip-item-unit' }, entry.unit || ''));
          });
  
          return _react2.default.createElement('ul', { className: 'recharts-tooltip-item-list', style: listStyle }, items);
        }
  
        return null;
      }
    }, {
      key: 'render',
      value: function render() {
        var _props2 = this.props;
        var labelStyle = _props2.labelStyle;
        var label = _props2.label;
        var labelFormatter = _props2.labelFormatter;
        var wrapperStyle = _props2.wrapperStyle;
  
        var finalStyle = _extends({
          margin: 0,
          padding: 10,
          backgroundColor: '#fff',
          border: '1px solid #ccc',
          whiteSpace: 'nowrap'
        }, wrapperStyle);
        var finalLabelStyle = _extends({
          margin: 0
        }, labelStyle);
        var hasLabel = (0, _isNumber3.default)(label) || (0, _isString3.default)(label);
        var finalLabel = hasLabel ? label : '';
  
        if (hasLabel && labelFormatter) {
          finalLabel = labelFormatter(label);
        }
  
        return _react2.default.createElement('div', { className: 'recharts-default-tooltip', style: finalStyle }, _react2.default.createElement('p', { className: 'recharts-tooltip-label', style: finalLabelStyle }, finalLabel), this.renderContent());
      }
    }]);
  
    return DefaultTooltipContent;
  }(_react.Component), _class2.displayName = 'DefaultTooltipContent', _class2.propTypes = {
    separator: _react.PropTypes.string,
    formatter: _react.PropTypes.func,
    wrapperStyle: _react.PropTypes.object,
    itemStyle: _react.PropTypes.object,
    labelStyle: _react.PropTypes.object,
    labelFormatter: _react.PropTypes.func,
    label: _react.PropTypes.any,
    payload: _react.PropTypes.arrayOf(_react.PropTypes.shape({
      name: _react.PropTypes.any,
      value: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
      unit: _react.PropTypes.any
    })),
    itemSorter: _react.PropTypes.func
  }, _class2.defaultProps = {
    separator: ' : ',
    itemStyle: {},
    labelStyle: {}
  }, _temp)) || _class;
  
  exports.default = DefaultTooltipContent;

/***/ }),
/* 86 */
/***/ (function(module, exports) {

  module.exports = require("react-smooth");

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  var _sign = __webpack_require__(88);
  
  var _sign2 = _interopRequireDefault2(_sign);
  
  var _getPrototypeOf = __webpack_require__(29);
  
  var _getPrototypeOf2 = _interopRequireDefault2(_getPrototypeOf);
  
  var _setPrototypeOf = __webpack_require__(60);
  
  var _setPrototypeOf2 = _interopRequireDefault2(_setPrototypeOf);
  
  var _create = __webpack_require__(61);
  
  var _create2 = _interopRequireDefault2(_create);
  
  var _typeof2 = __webpack_require__(62);
  
  var _typeof3 = _interopRequireDefault2(_typeof2);
  
  var _defineProperty = __webpack_require__(63);
  
  var _defineProperty2 = _interopRequireDefault2(_defineProperty);
  
  var _assign = __webpack_require__(23);
  
  var _assign2 = _interopRequireDefault2(_assign);
  
  function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _isNumber2 = __webpack_require__(69);
  
  var _isNumber3 = _interopRequireDefault(_isNumber2);
  
  var _isPlainObject2 = __webpack_require__(77);
  
  var _isPlainObject3 = _interopRequireDefault(_isPlainObject2);
  
  var _isFunction2 = __webpack_require__(71);
  
  var _isFunction3 = _interopRequireDefault(_isFunction2);
  
  var _extends = _assign2.default || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };
  
  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;(0, _defineProperty2.default)(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }();
  
  var _class, _class2, _temp; /**
                               * @fileOverview Render sectors of a pie
                               */
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _PureRender = __webpack_require__(74);
  
  var _PureRender2 = _interopRequireDefault(_PureRender);
  
  var _classnames = __webpack_require__(64);
  
  var _classnames2 = _interopRequireDefault(_classnames);
  
  var _Layer = __webpack_require__(89);
  
  var _Layer2 = _interopRequireDefault(_Layer);
  
  var _Sector = __webpack_require__(90);
  
  var _Sector2 = _interopRequireDefault(_Sector);
  
  var _Curve = __webpack_require__(92);
  
  var _Curve2 = _interopRequireDefault(_Curve);
  
  var _Text = __webpack_require__(93);
  
  var _Text2 = _interopRequireDefault(_Text);
  
  var _reactSmooth = __webpack_require__(86);
  
  var _reactSmooth2 = _interopRequireDefault(_reactSmooth);
  
  var _ReactUtils = __webpack_require__(66);
  
  var _PolarUtils = __webpack_require__(91);
  
  var _AnimationDecorator = __webpack_require__(96);
  
  var _AnimationDecorator2 = _interopRequireDefault(_AnimationDecorator);
  
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  
  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === 'undefined' ? 'undefined' : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
  }
  
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : (0, _typeof3.default)(superClass)));
    }subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
  }
  
  var Pie = (0, _AnimationDecorator2.default)(_class = (0, _PureRender2.default)(_class = (_temp = _class2 = function (_Component) {
    _inherits(Pie, _Component);
  
    function Pie(props, ctx) {
      _classCallCheck(this, Pie);
  
      var _this = _possibleConstructorReturn(this, (Pie.__proto__ || (0, _getPrototypeOf2.default)(Pie)).call(this, props, ctx));
  
      _this.handleAnimationEnd = function () {
        _this.setState({
          isAnimationFinished: true
        });
      };
  
      _this.state = {
        isAnimationFinished: false
      };
  
      if (!_this.id) {
        _this.id = 'clipPath' + Date.now();
      }
      return _this;
    }
  
    _createClass(Pie, [{
      key: 'getDeltaAngle',
      value: function getDeltaAngle() {
        var _props = this.props;
        var startAngle = _props.startAngle;
        var endAngle = _props.endAngle;
  
        var sign = (0, _sign2.default)(endAngle - startAngle);
        var deltaAngle = Math.min(Math.abs(endAngle - startAngle), 360);
  
        return sign * deltaAngle;
      }
    }, {
      key: 'getSectors',
      value: function getSectors(data) {
        var _props2 = this.props;
        var cx = _props2.cx;
        var cy = _props2.cy;
        var innerRadius = _props2.innerRadius;
        var outerRadius = _props2.outerRadius;
        var startAngle = _props2.startAngle;
        var paddingAngle = _props2.paddingAngle;
        var minAngle = _props2.minAngle;
        var endAngle = _props2.endAngle;
        var nameKey = _props2.nameKey;
        var valueKey = _props2.valueKey;
  
        var len = data.length;
        var deltaAngle = this.getDeltaAngle();
        var absDeltaAngle = Math.abs(deltaAngle);
        var totalPadingAngle = (absDeltaAngle >= 360 ? len : len - 1) * paddingAngle;
        var sum = data.reduce(function (result, entry) {
          return result + entry[valueKey];
        }, 0);
  
        var sectors = [];
        var prev = void 0;
  
        if (sum > 0) {
          sectors = data.map(function (entry, i) {
            var percent = entry[valueKey] / sum;
            var tempStartAngle = void 0;
  
            if (i) {
              tempStartAngle = (deltaAngle < 0 ? prev.endAngle : prev.startAngle) + (0, _sign2.default)(deltaAngle) * paddingAngle;
            } else {
              tempStartAngle = startAngle;
            }
  
            var tempEndAngle = tempStartAngle + (0, _sign2.default)(deltaAngle) * (minAngle + percent * (absDeltaAngle - len * minAngle - totalPadingAngle));
  
            prev = _extends({
              percent: percent
            }, entry, {
              cx: cx,
              cy: cy,
              innerRadius: innerRadius,
              outerRadius: outerRadius,
              name: entry[nameKey],
              value: entry[valueKey],
              startAngle: deltaAngle < 0 ? tempStartAngle : tempEndAngle,
              endAngle: deltaAngle < 0 ? tempEndAngle : tempStartAngle,
              payload: entry,
              midAngle: (tempStartAngle + tempEndAngle) / 2
            });
  
            return prev;
          });
        }
  
        return sectors;
      }
    }, {
      key: 'getTextAnchor',
      value: function getTextAnchor(x, cx) {
        if (x > cx) {
          return 'start';
        } else if (x < cx) {
          return 'end';
        }
  
        return 'middle';
      }
    }, {
      key: 'isActiveIndex',
      value: function isActiveIndex(i) {
        var activeIndex = this.props.activeIndex;
  
        if (Array.isArray(activeIndex)) {
          return activeIndex.indexOf(i) !== -1;
        }
  
        return i === activeIndex;
      }
    }, {
      key: 'renderClipPath',
      value: function renderClipPath() {
        var _props3 = this.props;
        var cx = _props3.cx;
        var cy = _props3.cy;
        var maxRadius = _props3.maxRadius;
        var startAngle = _props3.startAngle;
        var isAnimationActive = _props3.isAnimationActive;
        var animationDuration = _props3.animationDuration;
        var animationEasing = _props3.animationEasing;
        var animationBegin = _props3.animationBegin;
        var animationId = _props3.animationId;
  
        return _react2.default.createElement('defs', null, _react2.default.createElement('clipPath', { id: this.id }, _react2.default.createElement(_reactSmooth2.default, {
          easing: animationEasing,
          isActive: isAnimationActive,
          duration: animationDuration,
          key: animationId,
          animationBegin: animationBegin,
          onAnimationEnd: this.handleAnimationEnd,
          from: {
            endAngle: startAngle
          },
          to: {
            outerRadius: Math.max(this.props.outerRadius, maxRadius || 0),
            innerRadius: 0,
            endAngle: this.props.endAngle
          }
        }, function (_ref) {
          var outerRadius = _ref.outerRadius;
          var innerRadius = _ref.innerRadius;
          var endAngle = _ref.endAngle;
          return _react2.default.createElement(_Sector2.default, {
            cx: cx,
            cy: cy,
            outerRadius: outerRadius,
            innerRadius: innerRadius,
            startAngle: startAngle,
            endAngle: endAngle
          });
        })));
      }
    }, {
      key: 'renderLabelLineItem',
      value: function renderLabelLineItem(option, props) {
        if (_react2.default.isValidElement(option)) {
          return _react2.default.cloneElement(option, props);
        } else if ((0, _isFunction3.default)(option)) {
          return option(props);
        }
  
        return _react2.default.createElement(_Curve2.default, _extends({}, props, { type: 'linear', className: 'recharts-pie-label-line' }));
      }
    }, {
      key: 'renderLabelItem',
      value: function renderLabelItem(option, props, value) {
        if (_react2.default.isValidElement(option)) {
          return _react2.default.cloneElement(option, props);
        }
        var label = value;
        if ((0, _isFunction3.default)(option)) {
          label = option(props);
          if (_react2.default.isValidElement(label)) {
            return label;
          }
        }
  
        return _react2.default.createElement(_Text2.default, _extends({}, props, {
          alignmentBaseline: 'middle',
          className: 'recharts-pie-label-text'
        }), label);
      }
    }, {
      key: 'renderLabels',
      value: function renderLabels(sectors) {
        var _this2 = this;
  
        var isAnimationActive = this.props.isAnimationActive;
  
        if (isAnimationActive && !this.state.isAnimationFinished) {
          return null;
        }
        var _props4 = this.props;
        var label = _props4.label;
        var labelLine = _props4.labelLine;
        var valueKey = _props4.valueKey;
  
        var pieProps = (0, _ReactUtils.getPresentationAttributes)(this.props);
        var customLabelProps = (0, _ReactUtils.getPresentationAttributes)(label);
        var customLabelLineProps = (0, _ReactUtils.getPresentationAttributes)(labelLine);
        var offsetRadius = label && label.offsetRadius || 20;
  
        var labels = sectors.map(function (entry, i) {
          var midAngle = (entry.startAngle + entry.endAngle) / 2;
          var endPoint = (0, _PolarUtils.polarToCartesian)(entry.cx, entry.cy, entry.outerRadius + offsetRadius, midAngle);
          var labelProps = _extends({}, pieProps, entry, {
            stroke: 'none'
          }, customLabelProps, {
            index: i,
            textAnchor: _this2.getTextAnchor(endPoint.x, entry.cx)
          }, endPoint);
          var lineProps = _extends({}, pieProps, entry, {
            fill: 'none',
            stroke: entry.fill
          }, customLabelLineProps, {
            points: [(0, _PolarUtils.polarToCartesian)(entry.cx, entry.cy, entry.outerRadius, midAngle), endPoint]
          });
  
          return _react2.default.createElement(_Layer2.default, { key: 'label-' + i }, labelLine && _this2.renderLabelLineItem(labelLine, lineProps), _this2.renderLabelItem(label, labelProps, entry[valueKey]));
        });
  
        return _react2.default.createElement(_Layer2.default, { className: 'recharts-pie-labels' }, labels);
      }
    }, {
      key: 'renderSectorItem',
      value: function renderSectorItem(option, props) {
        if (_react2.default.isValidElement(option)) {
          return _react2.default.cloneElement(option, props);
        } else if ((0, _isFunction3.default)(option)) {
          return option(props);
        } else if ((0, _isPlainObject3.default)(option)) {
          return _react2.default.createElement(_Sector2.default, _extends({}, props, option));
        }
  
        return _react2.default.createElement(_Sector2.default, props);
      }
    }, {
      key: 'renderSectors',
      value: function renderSectors(sectors) {
        var _this3 = this;
  
        var activeShape = this.props.activeShape;
  
        return sectors.map(function (entry, i) {
          return _react2.default.createElement(_Layer2.default, _extends({
            className: 'recharts-pie-sector'
          }, (0, _ReactUtils.filterEventsOfChild)(_this3.props, entry, i), {
            key: 'sector-' + i
          }), _this3.renderSectorItem(_this3.isActiveIndex(i) ? activeShape : null, entry));
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var _props5 = this.props;
        var data = _props5.data;
        var composedData = _props5.composedData;
        var className = _props5.className;
        var label = _props5.label;
        var cx = _props5.cx;
        var cy = _props5.cy;
        var innerRadius = _props5.innerRadius;
        var outerRadius = _props5.outerRadius;
  
        var pieData = composedData || data;
  
        if (!pieData || !pieData.length || !(0, _isNumber3.default)(cx) || !(0, _isNumber3.default)(cy) || !(0, _isNumber3.default)(innerRadius) || !(0, _isNumber3.default)(outerRadius)) {
          return null;
        }
  
        var sectors = this.getSectors(pieData);
        var layerClass = (0, _classnames2.default)('recharts-pie', className);
  
        return _react2.default.createElement(_Layer2.default, { className: layerClass }, this.renderClipPath(), _react2.default.createElement('g', { clipPath: 'url(#' + this.id + ')' }, this.renderSectors(sectors)), label && this.renderLabels(sectors));
      }
    }]);
  
    return Pie;
  }(_react.Component), _class2.displayName = 'Pie', _class2.propTypes = _extends({}, _ReactUtils.PRESENTATION_ATTRIBUTES, {
    className: _react.PropTypes.string,
    cx: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
    cy: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
    startAngle: _react.PropTypes.number,
    endAngle: _react.PropTypes.number,
    paddingAngle: _react.PropTypes.number,
    innerRadius: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
    outerRadius: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
    nameKey: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
    valueKey: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
    data: _react.PropTypes.arrayOf(_react.PropTypes.object),
    composedData: _react.PropTypes.arrayOf(_react.PropTypes.object),
    minAngle: _react.PropTypes.number,
    legendType: _react.PropTypes.oneOf(['line', 'square', 'rect', 'circle', 'cross', 'diamond', 'square', 'star', 'triangle', 'wye']),
    maxRadius: _react.PropTypes.number,
  
    labelLine: _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.func, _react.PropTypes.element, _react.PropTypes.bool]),
    label: _react.PropTypes.oneOfType([_react.PropTypes.shape({
      offsetRadius: _react.PropTypes.number
    }), _react.PropTypes.func, _react.PropTypes.element, _react.PropTypes.bool]),
    activeShape: _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.func, _react.PropTypes.element]),
    activeIndex: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.arrayOf(_react.PropTypes.number)]),
  
    onMouseEnter: _react.PropTypes.func,
    onMouseLeave: _react.PropTypes.func,
    onClick: _react.PropTypes.func,
    isAnimationActive: _react.PropTypes.bool,
    animationBegin: _react.PropTypes.number,
    animationDuration: _react.PropTypes.number,
    animationEasing: _react.PropTypes.oneOf(['ease', 'ease-in', 'ease-out', 'ease-in-out', 'spring', 'linear'])
  }), _class2.defaultProps = {
    stroke: '#fff',
    fill: '#808080',
    legendType: 'rect',
    // The abscissa of pole
    cx: '50%',
    // The ordinate of pole
    cy: '50%',
    // The start angle of first sector
    startAngle: 0,
    // The direction of drawing sectors
    endAngle: 360,
    // The inner radius of sectors
    innerRadius: 0,
    // The outer radius of sectors
    outerRadius: '80%',
    paddingAngle: 0,
    nameKey: 'name',
    valueKey: 'value',
    labelLine: true,
    data: [],
    minAngle: 0,
    animationId: _react.PropTypes.number,
    isAnimationActive: true,
    animationBegin: 400,
    animationDuration: 1500,
    animationEasing: 'ease'
  }, _temp)) || _class) || _class;
  
  exports.default = Pie;

/***/ }),
/* 88 */
/***/ (function(module, exports) {

  module.exports = require("babel-runtime/core-js/math/sign");

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  var _assign = __webpack_require__(23);
  
  var _assign2 = _interopRequireDefault2(_assign);
  
  function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _extends = _assign2.default || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _classnames = __webpack_require__(64);
  
  var _classnames2 = _interopRequireDefault(_classnames);
  
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  
  function _objectWithoutProperties(obj, keys) {
    var target = {};for (var i in obj) {
      if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
    }return target;
  } /**
     * @fileOverview Layer
     */
  
  var propTypes = {
    className: _react.PropTypes.string,
    children: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.node), _react.PropTypes.node])
  };
  
  function Layer(props) {
    var children = props.children;
    var className = props.className;
  
    var others = _objectWithoutProperties(props, ['children', 'className']);
  
    var layerClass = (0, _classnames2.default)('recharts-layer', className);
  
    return _react2.default.createElement('g', _extends({ className: layerClass }, others), children);
  }
  
  Layer.propTypes = propTypes;
  
  exports.default = Layer;

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  var _getPrototypeOf = __webpack_require__(29);
  
  var _getPrototypeOf2 = _interopRequireDefault2(_getPrototypeOf);
  
  var _sign = __webpack_require__(88);
  
  var _sign2 = _interopRequireDefault2(_sign);
  
  var _setPrototypeOf = __webpack_require__(60);
  
  var _setPrototypeOf2 = _interopRequireDefault2(_setPrototypeOf);
  
  var _create = __webpack_require__(61);
  
  var _create2 = _interopRequireDefault2(_create);
  
  var _typeof2 = __webpack_require__(62);
  
  var _typeof3 = _interopRequireDefault2(_typeof2);
  
  var _defineProperty = __webpack_require__(63);
  
  var _defineProperty2 = _interopRequireDefault2(_defineProperty);
  
  var _assign = __webpack_require__(23);
  
  var _assign2 = _interopRequireDefault2(_assign);
  
  function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _extends = _assign2.default || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };
  
  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;(0, _defineProperty2.default)(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }();
  
  var _class, _class2, _temp; /**
                               * @fileOverview Sector
                               */
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _PureRender = __webpack_require__(74);
  
  var _PureRender2 = _interopRequireDefault(_PureRender);
  
  var _classnames = __webpack_require__(64);
  
  var _classnames2 = _interopRequireDefault(_classnames);
  
  var _ReactUtils = __webpack_require__(66);
  
  var _PolarUtils = __webpack_require__(91);
  
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  
  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
  }
  
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
    }subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
  }
  
  var getDeltaAngle = function getDeltaAngle(startAngle, endAngle) {
    var sign = (0, _sign2.default)(endAngle - startAngle);
    var deltaAngle = Math.min(Math.abs(endAngle - startAngle), 359.999);
  
    return sign * deltaAngle;
  };
  
  var getSectorPath = function getSectorPath(_ref) {
    var cx = _ref.cx;
    var cy = _ref.cy;
    var innerRadius = _ref.innerRadius;
    var outerRadius = _ref.outerRadius;
    var startAngle = _ref.startAngle;
    var endAngle = _ref.endAngle;
  
    var angle = getDeltaAngle(startAngle, endAngle);
  
    // When the angle of sector equals to 360, star point and end point coincide
    var tempEndAngle = startAngle + angle;
    var outerStartPoint = (0, _PolarUtils.polarToCartesian)(cx, cy, outerRadius, startAngle);
    var outerEndPoint = (0, _PolarUtils.polarToCartesian)(cx, cy, outerRadius, tempEndAngle);
  
    var path = void 0;
  
    if (innerRadius > 0) {
      var innerStartPoint = (0, _PolarUtils.polarToCartesian)(cx, cy, innerRadius, startAngle);
      var innerEndPoint = (0, _PolarUtils.polarToCartesian)(cx, cy, innerRadius, tempEndAngle);
      path = 'M ' + outerStartPoint.x + ',' + outerStartPoint.y + '\n            A ' + outerRadius + ',' + outerRadius + ',0,\n            ' + +(Math.abs(angle) > 180) + ',' + +(startAngle > tempEndAngle) + ',\n            ' + outerEndPoint.x + ',' + outerEndPoint.y + '\n            L ' + innerEndPoint.x + ',' + innerEndPoint.y + '\n            A ' + innerRadius + ',' + innerRadius + ',0,\n            ' + +(Math.abs(angle) > 180) + ',' + +(startAngle <= tempEndAngle) + ',\n            ' + innerStartPoint.x + ',' + innerStartPoint.y + ' Z';
    } else {
      path = 'M ' + outerStartPoint.x + ',' + outerStartPoint.y + '\n            A ' + outerRadius + ',' + outerRadius + ',0,\n            ' + +(Math.abs(angle) > 180) + ',' + +(startAngle > tempEndAngle) + ',\n            ' + outerEndPoint.x + ',' + outerEndPoint.y + '\n            L ' + cx + ',' + cy + ' Z';
    }
  
    return path;
  };
  
  var Sector = (0, _PureRender2.default)(_class = (_temp = _class2 = function (_Component) {
    _inherits(Sector, _Component);
  
    function Sector() {
      _classCallCheck(this, Sector);
  
      return _possibleConstructorReturn(this, (Sector.__proto__ || (0, _getPrototypeOf2.default)(Sector)).apply(this, arguments));
    }
  
    _createClass(Sector, [{
      key: 'render',
      value: function render() {
        var _props = this.props;
        var cx = _props.cx;
        var cy = _props.cy;
        var innerRadius = _props.innerRadius;
        var outerRadius = _props.outerRadius;
        var startAngle = _props.startAngle;
        var endAngle = _props.endAngle;
        var className = _props.className;
  
        if (outerRadius < innerRadius || startAngle === endAngle) {
          return null;
        }
  
        var layerClass = (0, _classnames2.default)('recharts-sector', className);
  
        return _react2.default.createElement('path', _extends({}, (0, _ReactUtils.getPresentationAttributes)(this.props), (0, _ReactUtils.filterEventAttributes)(this.props), {
          className: layerClass,
          d: getSectorPath({ cx: cx, cy: cy, innerRadius: innerRadius, outerRadius: outerRadius, startAngle: startAngle, endAngle: endAngle })
        }));
      }
    }]);
  
    return Sector;
  }(_react.Component), _class2.displayName = 'Sector', _class2.propTypes = _extends({}, _ReactUtils.PRESENTATION_ATTRIBUTES, {
    className: _react.PropTypes.string,
    cx: _react.PropTypes.number,
    cy: _react.PropTypes.number,
    innerRadius: _react.PropTypes.number,
    outerRadius: _react.PropTypes.number,
    startAngle: _react.PropTypes.number,
    endAngle: _react.PropTypes.number
  }), _class2.defaultProps = {
    cx: 0,
    cy: 0,
    innerRadius: 0,
    outerRadius: 0,
    startAngle: 0,
    endAngle: 0
  }, _temp)) || _class;
  
  exports.default = Sector;

/***/ }),
/* 91 */
/***/ (function(module, exports) {

  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var RADIAN = Math.PI / 180;
  
  var polarToCartesian = exports.polarToCartesian = function polarToCartesian(cx, cy, radius, angle) {
    return {
      x: cx + Math.cos(-RADIAN * angle) * radius,
      y: cy + Math.sin(-RADIAN * angle) * radius
    };
  };
  
  var getMaxRadius = exports.getMaxRadius = function getMaxRadius(width, height) {
    var margin = arguments.length <= 2 || arguments[2] === undefined ? {
      top: 0, right: 0, bottom: 0, left: 0
    } : arguments[2];
    return Math.min(Math.abs(width - (margin.left || 0) - (margin.right || 0)), Math.abs(height - (margin.left || 0) - (margin.right || 0))) / 2;
  };

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  var _getPrototypeOf = __webpack_require__(29);
  
  var _getPrototypeOf2 = _interopRequireDefault2(_getPrototypeOf);
  
  var _setPrototypeOf = __webpack_require__(60);
  
  var _setPrototypeOf2 = _interopRequireDefault2(_setPrototypeOf);
  
  var _create = __webpack_require__(61);
  
  var _create2 = _interopRequireDefault2(_create);
  
  var _typeof2 = __webpack_require__(62);
  
  var _typeof3 = _interopRequireDefault2(_typeof2);
  
  var _defineProperty = __webpack_require__(63);
  
  var _defineProperty2 = _interopRequireDefault2(_defineProperty);
  
  var _assign = __webpack_require__(23);
  
  var _assign2 = _interopRequireDefault2(_assign);
  
  function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _isNumber2 = __webpack_require__(69);
  
  var _isNumber3 = _interopRequireDefault(_isNumber2);
  
  var _isArray2 = __webpack_require__(72);
  
  var _isArray3 = _interopRequireDefault(_isArray2);
  
  var _isFunction2 = __webpack_require__(71);
  
  var _isFunction3 = _interopRequireDefault(_isFunction2);
  
  var _extends = _assign2.default || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };
  
  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;(0, _defineProperty2.default)(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }();
  
  var _class, _class2, _temp; /**
                               * @fileOverview Curve
                               */
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _d3Shape = __webpack_require__(81);
  
  var _PureRender = __webpack_require__(74);
  
  var _PureRender2 = _interopRequireDefault(_PureRender);
  
  var _classnames = __webpack_require__(64);
  
  var _classnames2 = _interopRequireDefault(_classnames);
  
  var _ReactUtils = __webpack_require__(66);
  
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  
  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === 'undefined' ? 'undefined' : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
  }
  
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : (0, _typeof3.default)(superClass)));
    }subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
  }
  
  var CURVE_FACTORIES = {
    curveBasisClosed: _d3Shape.curveBasisClosed, curveBasisOpen: _d3Shape.curveBasisOpen, curveBasis: _d3Shape.curveBasis, curveLinearClosed: _d3Shape.curveLinearClosed, curveLinear: _d3Shape.curveLinear,
    curveMonotoneX: _d3Shape.curveMonotoneX, curveMonotoneY: _d3Shape.curveMonotoneY, curveNatural: _d3Shape.curveNatural, curveStep: _d3Shape.curveStep, curveStepAfter: _d3Shape.curveStepAfter,
    curveStepBefore: _d3Shape.curveStepBefore
  };
  
  var defined = function defined(p) {
    return p.x === +p.x && p.y === +p.y;
  };
  var getX = function getX(p) {
    return p.x;
  };
  var getY = function getY(p) {
    return p.y;
  };
  
  var getCurveFactory = function getCurveFactory(type, layout) {
    if ((0, _isFunction3.default)(type)) {
      return type;
    }
  
    var name = 'curve' + type.slice(0, 1).toUpperCase() + type.slice(1);
  
    if (name === 'curveMonotone' && layout) {
      return CURVE_FACTORIES['' + name + (layout === 'vertical' ? 'Y' : 'X')];
    }
    return CURVE_FACTORIES[name] || _d3Shape.curveLinear;
  };
  
  var Curve = (0, _PureRender2.default)(_class = (_temp = _class2 = function (_Component) {
    _inherits(Curve, _Component);
  
    function Curve() {
      _classCallCheck(this, Curve);
  
      return _possibleConstructorReturn(this, (Curve.__proto__ || (0, _getPrototypeOf2.default)(Curve)).apply(this, arguments));
    }
  
    _createClass(Curve, [{
      key: 'getPath',
  
      /**
       * Calculate the path of curve
       * @return {String} path
       */
      value: function getPath() {
        var _props = this.props;
        var type = _props.type;
        var points = _props.points;
        var baseLine = _props.baseLine;
        var layout = _props.layout;
        var connectNulls = _props.connectNulls;
  
        var curveFactory = getCurveFactory(type, layout);
        var formatPoints = connectNulls ? points.filter(function (entry) {
          return defined(entry);
        }) : points;
        var lineFunction = void 0;
  
        if ((0, _isArray3.default)(baseLine)) {
          var areaPoints = formatPoints.map(function (entry, index) {
            return _extends({}, entry, { base: baseLine[index] });
          });
          if (layout === 'vertical') {
            lineFunction = (0, _d3Shape.area)().y(getY).x1(getX).x0(function (d) {
              return d.base.x;
            });
          } else {
            lineFunction = (0, _d3Shape.area)().x(getX).y1(getY).y0(function (d) {
              return d.base.y;
            });
          }
          lineFunction.defined(defined).curve(curveFactory);
  
          return lineFunction(areaPoints);
        } else if (layout === 'vertical' && (0, _isNumber3.default)(baseLine)) {
          lineFunction = (0, _d3Shape.area)().y(getY).x1(getX).x0(baseLine);
        } else if ((0, _isNumber3.default)(baseLine)) {
          lineFunction = (0, _d3Shape.area)().x(getX).y1(getY).y0(baseLine);
        } else {
          lineFunction = (0, _d3Shape.line)().x(getX).y(getY);
        }
  
        lineFunction.defined(defined).curve(curveFactory);
  
        return lineFunction(formatPoints);
      }
    }, {
      key: 'render',
      value: function render() {
        var _props2 = this.props;
        var className = _props2.className;
        var points = _props2.points;
        var type = _props2.type;
  
        if (!points || !points.length) {
          return null;
        }
  
        return _react2.default.createElement('path', _extends({}, (0, _ReactUtils.getPresentationAttributes)(this.props), (0, _ReactUtils.filterEventAttributes)(this.props), {
          className: (0, _classnames2.default)('recharts-curve', className),
          d: this.getPath()
        }));
      }
    }]);
  
    return Curve;
  }(_react.Component), _class2.displayName = 'Curve', _class2.propTypes = _extends({}, _ReactUtils.PRESENTATION_ATTRIBUTES, {
    className: _react.PropTypes.string,
    type: _react.PropTypes.oneOfType([_react.PropTypes.oneOf(['basis', 'basisClosed', 'basisOpen', 'linear', 'linearClosed', 'natural', 'monotoneX', 'monotoneY', 'monotone', 'step', 'stepBefore', 'stepAfter']), _react.PropTypes.func]),
    layout: _react.PropTypes.oneOf(['horizontal', 'vertical']),
    baseLine: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.array]),
    points: _react.PropTypes.arrayOf(_react.PropTypes.object),
    connectNulls: _react.PropTypes.bool
  }), _class2.defaultProps = {
    type: 'linear',
    stroke: '#000',
    fill: 'none',
    strokeWidth: 1,
    strokeDasharray: 'none',
    points: [],
    connectNulls: false
  }, _temp)) || _class;
  
  exports.default = Curve;

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  var _getPrototypeOf = __webpack_require__(29);
  
  var _getPrototypeOf2 = _interopRequireDefault2(_getPrototypeOf);
  
  var _setPrototypeOf = __webpack_require__(60);
  
  var _setPrototypeOf2 = _interopRequireDefault2(_setPrototypeOf);
  
  var _create = __webpack_require__(61);
  
  var _create2 = _interopRequireDefault2(_create);
  
  var _typeof2 = __webpack_require__(62);
  
  var _typeof3 = _interopRequireDefault2(_typeof2);
  
  var _defineProperty = __webpack_require__(63);
  
  var _defineProperty2 = _interopRequireDefault2(_defineProperty);
  
  var _assign = __webpack_require__(23);
  
  var _assign4 = _interopRequireDefault2(_assign);
  
  function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _assign2 = __webpack_require__(94);
  
  var _assign3 = _interopRequireDefault(_assign2);
  
  var _extends = _assign4.default || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };
  
  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;(0, _defineProperty2.default)(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }();
  
  var _class, _temp2;
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reduceCssCalc = __webpack_require__(95);
  
  var _reduceCssCalc2 = _interopRequireDefault(_reduceCssCalc);
  
  var _classnames = __webpack_require__(64);
  
  var _classnames2 = _interopRequireDefault(_classnames);
  
  var _ReactUtils = __webpack_require__(66);
  
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  
  function _objectWithoutProperties(obj, keys) {
    var target = {};for (var i in obj) {
      if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
    }return target;
  }
  
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  
  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === 'undefined' ? 'undefined' : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
  }
  
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : (0, _typeof3.default)(superClass)));
    }subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
  }
  
  var Text = (_temp2 = _class = function (_Component) {
    _inherits(Text, _Component);
  
    function Text() {
      var _ref;
  
      var _temp, _this, _ret;
  
      _classCallCheck(this, Text);
  
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
  
      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Text.__proto__ || (0, _getPrototypeOf2.default)(Text)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        wordsByLines: []
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }
  
    _createClass(Text, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this.updateWordsByLines(this.props, true);
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        var calculateWordWidths = this.props.children !== nextProps.children || this.props.style !== nextProps.style;
        this.updateWordsByLines(nextProps, calculateWordWidths);
      }
    }, {
      key: 'updateWordsByLines',
      value: function updateWordsByLines(props, calculateWordWidths) {
        // Only perform calculations if using features that require them (multiline, scaleToFit)
        if (props.width || props.scaleToFit) {
          if (calculateWordWidths) {
            var _calculateWordWidths = this.calculateWordWidths(props);
  
            var wordsWithComputedWidth = _calculateWordWidths.wordsWithComputedWidth;
            var spaceWidth = _calculateWordWidths.spaceWidth;
  
            this.wordsWithComputedWidth = wordsWithComputedWidth;
            this.spaceWidth = spaceWidth;
          }
  
          var wordsByLines = this.calculateWordsByLines(this.wordsWithComputedWidth, this.spaceWidth, props.width);
          this.setState({ wordsByLines: wordsByLines });
        } else {
          var words = props.children ? props.children.toString().split(/\s+/) : [];
          this.setState({ wordsByLines: [{ words: words }] });
        }
      }
    }, {
      key: 'calculateWordWidths',
      value: function calculateWordWidths(props) {
        // Calculate length of each word to be used to determine number of words per line
        var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        var text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        (0, _assign3.default)(text.style, props.style);
        svg.appendChild(text);
        document.body.appendChild(svg);
  
        var words = props.children ? props.children.toString().split(/\s+/) : [];
        var wordsWithComputedWidth = words.map(function (word) {
          text.textContent = word;
          return { word: word, width: text.getComputedTextLength() };
        });
  
        text.textContent = ' '; // Unicode space
        var spaceWidth = text.getComputedTextLength();
  
        document.body.removeChild(svg);
  
        return { wordsWithComputedWidth: wordsWithComputedWidth, spaceWidth: spaceWidth };
      }
    }, {
      key: 'calculateWordsByLines',
      value: function calculateWordsByLines(wordsWithComputedWidth, spaceWidth, lineWidth) {
        var scaleToFit = this.props.scaleToFit;
  
        return wordsWithComputedWidth.reduce(function (result, _ref2) {
          var word = _ref2.word;
          var width = _ref2.width;
  
          var currentLine = result[result.length - 1];
  
          if (currentLine && (lineWidth == null || scaleToFit || currentLine.width + width + spaceWidth < lineWidth)) {
            // Word can be added to an existing line
            currentLine.words.push(word);
            currentLine.width += width + spaceWidth;
          } else {
            // Add first word to line or word is too long to scaleToFit on existing line
            var newLine = { words: [word], width: width };
            result.push(newLine);
          }
  
          return result;
        }, []);
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props;
        var textAnchor = _props.textAnchor;
        var verticalAnchor = _props.verticalAnchor;
        var scaleToFit = _props.scaleToFit;
        var angle = _props.angle;
        var lineHeight = _props.lineHeight;
        var capHeight = _props.capHeight;
        var className = _props.className;
  
        var textProps = _objectWithoutProperties(_props, ['textAnchor', 'verticalAnchor', 'scaleToFit', 'angle', 'lineHeight', 'capHeight', 'className']);
  
        var wordsByLines = this.state.wordsByLines;
        var x = textProps.x;
        var y = textProps.y;
  
        var startDy = void 0;
        switch (verticalAnchor) {
          case 'start':
            startDy = (0, _reduceCssCalc2.default)('calc(' + capHeight + ')');
            break;
          case 'middle':
            startDy = (0, _reduceCssCalc2.default)('calc(' + (wordsByLines.length - 1) / 2 + ' * -' + lineHeight + ' + (' + capHeight + ' / 2))');
            break;
          default:
            startDy = (0, _reduceCssCalc2.default)('calc(' + (wordsByLines.length - 1) + ' * -' + lineHeight + ')');
            break;
        }
  
        var transforms = [];
        if (scaleToFit) {
          var lineWidth = wordsByLines[0].width;
          transforms.push('scale(' + this.props.width / lineWidth + ')');
        }
        if (angle) {
          transforms.push('rotate(' + angle + ', ' + x + ', ' + y + ')');
        }
        if (transforms.length) {
          textProps.transform = transforms.join(' ');
        }
  
        return _react2.default.createElement('text', _extends({}, (0, _ReactUtils.getPresentationAttributes)(textProps), {
          className: (0, _classnames2.default)('recharts-text', className),
          textAnchor: textAnchor
        }), wordsByLines.map(function (line, index) {
          return _react2.default.createElement('tspan', { x: x, dy: index === 0 ? startDy : lineHeight, key: index }, line.words.join(' '));
        }));
      }
    }]);
  
    return Text;
  }(_react.Component), _class.propTypes = _extends({}, _ReactUtils.PRESENTATION_ATTRIBUTES, {
    scaleToFit: _react.PropTypes.bool,
    angle: _react.PropTypes.number,
    textAnchor: _react.PropTypes.oneOf(['start', 'middle', 'end', 'inherit']),
    verticalAnchor: _react.PropTypes.oneOf(['start', 'middle', 'end'])
  }), _class.defaultProps = {
    x: 0,
    y: 0,
    lineHeight: '1em',
    capHeight: '0.71em', // Magic number from d3
    scaleToFit: false,
    textAnchor: 'start',
    verticalAnchor: 'end' }, _temp2);
  exports.default = Text;

/***/ }),
/* 94 */
/***/ (function(module, exports) {

  module.exports = require("lodash/assign");

/***/ }),
/* 95 */
/***/ (function(module, exports) {

  module.exports = require("reduce-css-calc");

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  var _setPrototypeOf = __webpack_require__(60);
  
  var _setPrototypeOf2 = _interopRequireDefault2(_setPrototypeOf);
  
  var _create = __webpack_require__(61);
  
  var _create2 = _interopRequireDefault2(_create);
  
  var _typeof2 = __webpack_require__(62);
  
  var _typeof3 = _interopRequireDefault2(_typeof2);
  
  var _getPrototypeOf = __webpack_require__(29);
  
  var _getPrototypeOf2 = _interopRequireDefault2(_getPrototypeOf);
  
  var _defineProperty = __webpack_require__(63);
  
  var _defineProperty2 = _interopRequireDefault2(_defineProperty);
  
  var _assign = __webpack_require__(23);
  
  var _assign2 = _interopRequireDefault2(_assign);
  
  function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _extends = _assign2.default || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };
  
  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;(0, _defineProperty2.default)(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }();
  
  exports.default = function (WrappedComponent) {
    var _class, _temp2;
  
    var AnimationDecorator = (_temp2 = _class = function (_Component) {
      _inherits(AnimationDecorator, _Component);
  
      function AnimationDecorator() {
        var _ref;
  
        var _temp, _this, _ret;
  
        _classCallCheck(this, AnimationDecorator);
  
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
  
        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AnimationDecorator.__proto__ || (0, _getPrototypeOf2.default)(AnimationDecorator)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
          animationId: 0
        }, _temp), _possibleConstructorReturn(_this, _ret);
      }
  
      _createClass(AnimationDecorator, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
          var animationId = this.state.animationId;
  
          if (this.props.data !== nextProps.data) {
            this.setState({
              animationId: animationId + 1
            });
          }
        }
      }, {
        key: 'render',
        value: function render() {
          return _react2.default.createElement(WrappedComponent, _extends({}, this.props, { animationId: this.state.animationId }));
        }
      }]);
  
      return AnimationDecorator;
    }(_react.Component), _class.displayName = 'AnimationDecorator(' + (0, _ReactUtils.getDisplayName)(WrappedComponent) + ')', _class.propTypes = _extends({}, WrappedComponent.propTypes, {
      data: _react.PropTypes.array
    }), _class.WrappedComponent = WrappedComponent, _class.defaultProps = WrappedComponent.defaultProps, _temp2);
  
    return AnimationDecorator;
  };
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _ReactUtils = __webpack_require__(66);
  
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  
  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
  }
  
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
    }subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
  }

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  var _getPrototypeOf = __webpack_require__(29);
  
  var _getPrototypeOf2 = _interopRequireDefault2(_getPrototypeOf);
  
  var _setPrototypeOf = __webpack_require__(60);
  
  var _setPrototypeOf2 = _interopRequireDefault2(_setPrototypeOf);
  
  var _create = __webpack_require__(61);
  
  var _create2 = _interopRequireDefault2(_create);
  
  var _typeof2 = __webpack_require__(62);
  
  var _typeof3 = _interopRequireDefault2(_typeof2);
  
  var _defineProperty = __webpack_require__(63);
  
  var _defineProperty2 = _interopRequireDefault2(_defineProperty);
  
  function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;(0, _defineProperty2.default)(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }();
  
  var _class, _class2, _temp; /**
                               * @fileOverview Cross
                               */
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _PureRender = __webpack_require__(74);
  
  var _PureRender2 = _interopRequireDefault(_PureRender);
  
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  
  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
  }
  
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
    }subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
  }
  
  var Cell = (0, _PureRender2.default)(_class = (_temp = _class2 = function (_Component) {
    _inherits(Cell, _Component);
  
    function Cell() {
      _classCallCheck(this, Cell);
  
      return _possibleConstructorReturn(this, (Cell.__proto__ || (0, _getPrototypeOf2.default)(Cell)).apply(this, arguments));
    }
  
    _createClass(Cell, [{
      key: 'render',
      value: function render() {
        return null;
      }
    }]);
  
    return Cell;
  }(_react.Component), _class2.displayName = 'Cell', _temp)) || _class;
  
  exports.default = Cell;

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  var _keys = __webpack_require__(67);
  
  var _keys2 = _interopRequireDefault2(_keys);
  
  function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.hasDuplicate = exports.getAnyElementOfObject = exports.getBandSizeOfScale = exports.validateCoordinateInRange = exports.parseSpecifiedDomain = exports.getPercentValue = exports.isPercent = undefined;
  
  var _isArray2 = __webpack_require__(72);
  
  var _isArray3 = _interopRequireDefault(_isArray2);
  
  var _isNumber2 = __webpack_require__(69);
  
  var _isNumber3 = _interopRequireDefault(_isNumber2);
  
  var _isString2 = __webpack_require__(68);
  
  var _isString3 = _interopRequireDefault(_isString2);
  
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  
  var isPercent = exports.isPercent = function isPercent(value) {
    return (0, _isString3.default)(value) && value.indexOf('%') === value.length - 1;
  };
  /**
   * Get percent value of a total value
   * @param {Number|String} percent A percent
   * @param {Number} totalValue     Total value
   * @param {NUmber} defaultValue   The value returned when percent is undefined or invalid
   * @param {Boolean} validate      If set to be true, the result will be validated
   * @return {Number} value
   */
  var getPercentValue = exports.getPercentValue = function getPercentValue(percent, totalValue) {
    var defaultValue = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];
    var validate = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];
  
    if (!(0, _isNumber3.default)(percent) && !(0, _isString3.default)(percent)) {
      return defaultValue;
    }
  
    var value = void 0;
  
    if (isPercent(percent)) {
      var index = percent.indexOf('%');
      value = totalValue * parseFloat(percent.slice(0, index)) / 100;
    } else {
      value = +percent;
    }
  
    if (isNaN(value)) {
      value = defaultValue;
    }
  
    if (validate && value > totalValue) {
      value = totalValue;
    }
  
    return value;
  };
  
  var MIN_VALUE_REG = /^dataMin[\s]*-[\s]*([\d]+)$/;
  var MAX_VALUE_REG = /^dataMax[\s]*\+[\s]*([\d]+)$/;
  
  var parseSpecifiedDomain = exports.parseSpecifiedDomain = function parseSpecifiedDomain(specifiedDomain, dataDomain, allowDataOverflow) {
    if (!(0, _isArray3.default)(specifiedDomain)) {
      return dataDomain;
    }
  
    var domain = [];
  
    if ((0, _isNumber3.default)(specifiedDomain[0])) {
      domain[0] = allowDataOverflow ? specifiedDomain[0] : Math.min(specifiedDomain[0], dataDomain[0]);
    } else if (MIN_VALUE_REG.test(specifiedDomain[0])) {
      var value = +MIN_VALUE_REG.exec(specifiedDomain[0])[1];
  
      domain[0] = dataDomain[0] - value;
    } else {
      domain[0] = dataDomain[0];
    }
  
    if ((0, _isNumber3.default)(specifiedDomain[1])) {
      domain[1] = allowDataOverflow ? specifiedDomain[1] : Math.max(specifiedDomain[1], dataDomain[1]);
    } else if (MAX_VALUE_REG.test(specifiedDomain[1])) {
      var _value = +MAX_VALUE_REG.exec(specifiedDomain[1])[1];
  
      domain[1] = dataDomain[1] + _value;
    } else {
      domain[1] = dataDomain[1];
    }
  
    return domain;
  };
  
  var validateCoordinateInRange = exports.validateCoordinateInRange = function validateCoordinateInRange(coordinate, scale) {
    if (!scale) {
      return false;
    }
  
    var range = scale.range();
    var first = range[0];
    var last = range[range.length - 1];
    var isValidate = first <= last ? coordinate >= first && coordinate <= last : coordinate >= last && coordinate <= first;
  
    return isValidate;
  };
  
  /**
   * Calculate the size between two category
   * @param  {Function} scale Scale function
   * @return {Number} Size
   */
  var getBandSizeOfScale = exports.getBandSizeOfScale = function getBandSizeOfScale(scale) {
    if (scale && scale.bandwidth) {
      return scale.bandwidth();
    }
    return 0;
  };
  
  var getAnyElementOfObject = exports.getAnyElementOfObject = function getAnyElementOfObject(obj) {
    if (!obj) {
      return null;
    }
  
    var keys = (0, _keys2.default)(obj);
  
    if (keys && keys.length) {
      return obj[keys[0]];
    }
  
    return null;
  };
  
  var hasDuplicate = exports.hasDuplicate = function hasDuplicate(ary) {
    if (!(0, _isArray3.default)(ary)) {
      return false;
    }
  
    var len = ary.length;
    var cache = {};
  
    for (var i = 0; i < len; i++) {
      if (!cache[ary[i]]) {
        cache[ary[i]] = true;
      } else {
        return true;
      }
    }
  
    return false;
  };

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  var _assign = __webpack_require__(23);
  
  var _assign2 = _interopRequireDefault2(_assign);
  
  function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _extends = _assign2.default || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  }; /**
      * @fileOverview Wrapper component to make charts adapt to the size of parent * DOM
      */
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactContainerDimensions = __webpack_require__(100);
  
  var _reactContainerDimensions2 = _interopRequireDefault(_reactContainerDimensions);
  
  var _PureRender = __webpack_require__(74);
  
  var _PureRender2 = _interopRequireDefault(_PureRender);
  
  var _DataUtils = __webpack_require__(98);
  
  var _LogUtils = __webpack_require__(101);
  
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  
  var render = function render(_ref) {
    var aspect = _ref.aspect;
    var width = _ref.width;
    var height = _ref.height;
    var minWidth = _ref.minWidth;
    var minHeight = _ref.minHeight;
    var container = _ref.container;
    var children = _ref.children;
  
    (0, _LogUtils.warn)((0, _DataUtils.isPercent)(width) || (0, _DataUtils.isPercent)(height), 'The width(%s) and height(%s) are both fixed numbers,\n     maybe you don\'t need to use a ResponsiveContainer.', width, height);
  
    (0, _LogUtils.warn)(!aspect || aspect > 0, 'The aspect(%s) must be greater than zero.', aspect);
  
    var calculatedWidth = (0, _DataUtils.isPercent)(width) ? container.width : width;
    var calculatedHeight = (0, _DataUtils.isPercent)(height) ? container.height : height;
  
    if (aspect && aspect > 0) {
      // Preserve the desired aspect ratio
      calculatedHeight = calculatedWidth / aspect;
    }
  
    (0, _LogUtils.warn)(calculatedWidth > 0 && calculatedHeight > 0, 'The width(%s) and height(%s) of chart should be greater than 0,\n     please check the style of container, or the props width(%s) and height(%s),\n     or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the\n     height and width.', calculatedWidth, calculatedHeight, width, height, minWidth, minHeight, aspect);
  
    return _react2.default.cloneElement(children, {
      width: calculatedWidth,
      height: calculatedHeight
    });
  };
  
  var ResponsiveContainer = function ResponsiveContainer(props) {
    var minWidth = props.minWidth;
    var minHeight = props.minHeight;
    var width = props.width;
    var height = props.height;
  
    var style = { width: width, height: height, minWidth: minWidth, minHeight: minHeight };
    return _react2.default.createElement('div', { className: 'recharts-responsive-container', style: style }, _react2.default.createElement(_reactContainerDimensions2.default, null, function (container) {
      return render(_extends({
        container: container
      }, props));
    }));
  };
  
  ResponsiveContainer.displayName = 'ResponsiveContainer';
  ResponsiveContainer.propTypes = {
    aspect: _react.PropTypes.number,
    width: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
    height: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
    minHeight: _react.PropTypes.number,
    minWidth: _react.PropTypes.number,
    children: _react.PropTypes.node.isRequired
  };
  
  ResponsiveContainer.defaultProps = {
    width: '100%',
    height: '100%'
  };
  
  exports.default = ResponsiveContainer;

/***/ }),
/* 100 */
/***/ (function(module, exports) {

  module.exports = require("react-container-dimensions");

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  /* eslint no-console: 0 */
  var isDev = ("development") !== 'production';
  
  var warn = exports.warn = function warn(condition, format, a, b, c, d, e, f) {
    if (isDev && typeof console !== 'undefined' && console.warn) {
      if (format === undefined) {
        console.warn('LogUtils requires an error message argument');
      }
  
      if (!condition) {
        if (format === undefined) {
          console.warn('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
        } else {
          (function () {
            var args = [a, b, c, d, e, f];
            var argIndex = 0;
  
            console.warn(format.replace(/%s/g, function () {
              return args[argIndex++];
            }));
          })();
        }
      }
    }
  };

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _getPrototypeOf = __webpack_require__(29);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(30);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(31);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(32);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(33);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _PieChart = __webpack_require__(59);
  
  var _PieChart2 = _interopRequireDefault(_PieChart);
  
  var _Pie = __webpack_require__(87);
  
  var _Pie2 = _interopRequireDefault(_Pie);
  
  var _Sector = __webpack_require__(90);
  
  var _Sector2 = _interopRequireDefault(_Sector);
  
  var _ResponsiveContainer = __webpack_require__(99);
  
  var _ResponsiveContainer2 = _interopRequireDefault(_ResponsiveContainer);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  // import { PieCharts, Pie, Sector, ResponsiveContainer } from '../../vendor/recharts';
  var renderActiveShape = function renderActiveShape(props) {
    var RADIAN = Math.PI / 180;
    var cx = props.cx,
        cy = props.cy,
        midAngle = props.midAngle,
        innerRadius = props.innerRadius,
        outerRadius = props.outerRadius,
        startAngle = props.startAngle,
        endAngle = props.endAngle,
        fill = props.fill,
        payload = props.payload,
        percent = props.percent,
        value = props.value;
  
    var sin = Math.sin(-RADIAN * midAngle);
    var cos = Math.cos(-RADIAN * midAngle);
    var sx = cx + (outerRadius + 5) * cos;
    var sy = cy + (outerRadius + 5) * sin;
    var mx = cx + (outerRadius + 10) * cos;
    var my = cy + (outerRadius + 10) * sin;
    var ex = mx + (cos >= 0 ? 1 : -1) * 11;
    var ey = my;
    var textAnchor = cos >= 0 ? 'start' : 'end';
  
    return _react2.default.createElement(
      'g',
      null,
      _react2.default.createElement(
        'text',
        { x: cx, fontSize: 24, fontWeight: 'bold', y: cy, dy: 8, textAnchor: 'middle', fill: fill },
        value
      ),
      _react2.default.createElement(_Sector2.default, {
        cx: cx,
        cy: cy,
        innerRadius: innerRadius,
        outerRadius: outerRadius,
        startAngle: startAngle,
        endAngle: endAngle,
        fill: fill
      })
    );
  };
  
  var renderActiveShapeMore = function renderActiveShapeMore(props) {
    var RADIAN = Math.PI / 180;
    var cx = props.cx,
        cy = props.cy,
        midAngle = props.midAngle,
        innerRadius = props.innerRadius,
        outerRadius = props.outerRadius,
        startAngle = props.startAngle,
        endAngle = props.endAngle,
        fill = props.fill,
        payload = props.payload,
        percent = props.percent,
        value = props.value;
  
    var sin = Math.sin(-RADIAN * midAngle);
    var cos = Math.cos(-RADIAN * midAngle);
    var sx = cx + (outerRadius + 5) * cos;
    var sy = cy + (outerRadius + 5) * sin;
    var mx = cx + (outerRadius + 10) * cos;
    var my = cy + (outerRadius + 10) * sin;
    var ex = mx + (cos >= 0 ? 1 : -1) * 11;
    var ey = my;
    var textAnchor = cos >= 0 ? 'start' : 'end';
  
    return _react2.default.createElement(
      'g',
      null,
      _react2.default.createElement(
        'text',
        { x: cx, fontSize: 24, fontWeight: 'bold', y: cy, dy: 8, textAnchor: 'middle', fill: fill },
        value + ' +'
      ),
      _react2.default.createElement(_Sector2.default, {
        cx: cx,
        cy: cy,
        innerRadius: innerRadius,
        outerRadius: outerRadius,
        startAngle: startAngle,
        endAngle: endAngle,
        fill: fill
      })
    );
  };
  
  var LabeledPie = function (_Component) {
    (0, _inherits3.default)(LabeledPie, _Component);
  
    function LabeledPie(props) {
      (0, _classCallCheck3.default)(this, LabeledPie);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (LabeledPie.__proto__ || (0, _getPrototypeOf2.default)(LabeledPie)).call(this, props));
  
      _this.state = {
        activeIndex: 0
      };
      // this.onPieEnter = this.onPieEnter.bind(this);
      return _this;
    }
  
    (0, _createClass3.default)(LabeledPie, [{
      key: 'onPieEnter',
      value: function onPieEnter(data, index) {
        this.setState({
          activeIndex: index
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;
  
        return _react2.default.createElement(
          _ResponsiveContainer2.default,
          { width: '100%', aspect: 1.5 },
          _react2.default.createElement(
            _PieChart2.default,
            {
              onMouseEnter: function onMouseEnter(data, index) {
                _this2.onPieEnter(data, index);
              }
            },
            _react2.default.createElement(_Pie2.default, {
              activeIndex: this.state.activeIndex,
              activeShape: this.props.moreThan ? renderActiveShapeMore : renderActiveShape,
              data: this.props.data,
              innerRadius: this.props.innerRadius,
              outerRadius: this.props.outerRadius,
              fill: this.props.color
            })
          )
        );
      }
    }]);
    return LabeledPie;
  }(_react.Component);
  
  LabeledPie.propTypes = {
    data: _react2.default.PropTypes.array,
    innerRadius: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]),
    outerRadius: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]),
    color: _react2.default.PropTypes.string
  };
  exports.default = LabeledPie;

/***/ }),
/* 103 */
/***/ (function(module, exports) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = [{
    title: 'Visit to an Old Age Home',
    date: new Date(2017, 9, 31),
    link: 'https://docs.google.com/document/d/1ZaBfd6CQ5eE3x-gEXcNEf3J8XKGtDOt9HJPHoIzeVfU/edit',
    active: true
  }, {
    title: 'Manual Robotics Workshop',
    date: new Date(2017, 9, 31),
    link: '',
    active: true
  }, {
    title: 'Mosaic of Albert Einstein by The Cubing Club during I.Fest 2017',
    date: new Date(2017, 9, 26),
    link: 'https://drive.google.com/open?id=0BzhQRE0vs1ndYkl4dkQ5cldjb1U',
    active: true
  }, {
    title: 'Blood Donation Camp',
    date: new Date(2017, 9, 3),
    link: 'https://docs.google.com/document/d/1ZfPWLrXBrfrZFTu61AgJQAdNEGNDSOAQ0q7MYMtdnY8/edit',
    active: true
  }, {
    title: 'HoR Cleanliness Drive',
    date: new Date(2017, 8, 27),
    link: 'https://docs.google.com/document/d/1E8QEIatubCZsWoY8Ylg1TE3SvuzaG0Ckn53YE7e9BQc/edit',
    active: true
  }, {
    title: 'Intra DA-IICT MUN',
    date: new Date(2017, 8, 24),
    link: 'https://drive.google.com/file/d/0B7018vFkJgoXcTRobldXeEFrS0U/view?usp=sharing',
    active: true
  }, {
    title: 'Educational visit to ISRO Labs, Ahmedabad',
    date: new Date(2017, 8, 20),
    link: 'https://docs.google.com/document/d/1AsJUMJzjQkDUtkH6oZfjCL63UCY0ngvNBYwp7G5MkPw/edit',
    active: true
  }, {
    title: 'Abhijit Ghodgaonkar got second rank on "Multiple Blind Folded" category in the Cubing Competition "SCMU 2017" (WCA) held in Mumbai.',
    date: new Date(2017, 8, 6),
    link: ' https://www.youtube.com/watch?v=AHtNa2H2sWM',
    active: true
  }, {
    title: 'Mosaic of Dr. Sarvepalli Radhakrishnan by The Cubing Club during Teacher\'s Day 2017',
    date: new Date(2017, 8, 5),
    link: 'https://www.youtube.com/watch?v=YBe4Sh9g3jI',
    active: true
  }, {
    title: 'Three members of MSTC selected as Microsoft Student Partner (2017-18)',
    date: new Date(2017, 7, 18),
    link: '',
    active: false
  }, {
    title: 'Team FruitSalad in ACM-ICPC World Finals',
    date: new Date(2017, 4, 27),
    link: '',
    active: false
  }, {
    title: 'Yash Kumar (B.Tech 3rd Year) and Karan Thakkar (B.Tech 3rd Year) secured runners up position at TCS Codevita, 2016, held at TCS Siruseri campus, Chennai',
    date: new Date(2017, 3, 7),
    link: '',
    active: false
  }, {
    title: 'Visit to an Old Age Home',
    date: new Date(2017, 9, 31),
    link: '',
    active: false
  }];

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Icons = __webpack_require__(105);
  
  var _Icons2 = _interopRequireDefault(_Icons);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = {
  
    path: '/icons',
  
    action: function action() {
      return _react2.default.createElement(_Icons2.default, null);
    }
  };

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Panel = __webpack_require__(106);
  
  var _Panel2 = _interopRequireDefault(_Panel);
  
  var _PageHeader = __webpack_require__(107);
  
  var _PageHeader2 = _interopRequireDefault(_PageHeader);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var title = 'Icons';
  
  function displayIcons(props, context) {
    context.setTitle(title);
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'div',
        { className: 'col-lg-12' },
        _react2.default.createElement(
          _PageHeader2.default,
          null,
          'Icons'
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'col-lg-12' },
        _react2.default.createElement(
          _Panel2.default,
          { header: _react2.default.createElement(
              'span',
              null,
              'All available icons'
            ) },
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'fa col-lg-3' },
              _react2.default.createElement(
                'p',
                { className: 'fa fa-glass' },
                ' fa-glass '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-music' },
                ' fa-music '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-search' },
                ' fa-search '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-envelope-o' },
                ' fa-envelope-o '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-heart' },
                ' fa-heart '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-star' },
                ' fa-star '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-star-o' },
                ' fa-star-o '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-user' },
                ' fa-user '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-film' },
                ' fa-film '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-th-large' },
                ' fa-th-large '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-th' },
                ' fa-th '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-th-list' },
                ' fa-th-list '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-check' },
                ' fa-check '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-times' },
                ' fa-times '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-search-plus' },
                ' fa-search-plus '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-search-minus' },
                ' fa-search-minus '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-power-off' },
                ' fa-power-off '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-signal' },
                ' fa-signal '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-gear' },
                ' fa-gear '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-cog' },
                ' fa-cog '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-trash-o' },
                ' fa-trash-o '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-home' },
                ' fa-home '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-file-o' },
                ' fa-file-o '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-clock-o' },
                ' fa-clock-o '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-road' },
                ' fa-road '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-download' },
                ' fa-download '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-arrow-circle-o-down' },
                ' fa-arrow-circle-o-down '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-arrow-circle-o-up' },
                ' fa-arrow-circle-o-up '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-inbox' },
                ' fa-inbox '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-play-circle-o' },
                ' fa-play-circle-o '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-rotate-right' },
                ' fa-rotate-right '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-repeat' },
                ' fa-repeat '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-refresh' },
                ' fa-refresh '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-list-alt' },
                ' fa-list-alt '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-lock' },
                ' fa-lock '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-flag' },
                ' fa-flag '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-headphones' },
                ' fa-headphones '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-volume-off' },
                ' fa-volume-off '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-volume-down' },
                ' fa-volume-down '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-volume-up' },
                ' fa-volume-up '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-qrcode' },
                ' fa-qrcode '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-barcode' },
                ' fa-barcode '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-tag' },
                ' fa-tag '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-tags' },
                ' fa-tags '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-book' },
                ' fa-book '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-bookmark' },
                ' fa-bookmark '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-print' },
                ' fa-print '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-camera' },
                ' fa-camera '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-font' },
                ' fa-font '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-bold' },
                ' fa-bold '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-italic' },
                ' fa-italic '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-text-height' },
                ' fa-text-height '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-text-width' },
                ' fa-text-width '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-align-left' },
                ' fa-align-left '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-align-center' },
                ' fa-align-center '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-align-right' },
                ' fa-align-right '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-align-justify' },
                ' fa-align-justify '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-list' },
                ' fa-list '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-dedent' },
                ' fa-dedent '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-outdent' },
                ' fa-outdent '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-indent' },
                ' fa-indent '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-video-camera' },
                ' fa-video-camera '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-photo' },
                ' fa-photo '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-image' },
                ' fa-image '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-picture-o' },
                ' fa-picture-o '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-pencil' },
                ' fa-pencil '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-map-marker' },
                ' fa-map-marker '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-adjust' },
                ' fa-adjust '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-tint' },
                ' fa-tint '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-edit' },
                ' fa-edit '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-pencil-square-o' },
                ' fa-pencil-square-o '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-share-square-o' },
                ' fa-share-square-o '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-check-square-o' },
                ' fa-check-square-o '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-arrows' },
                ' fa-arrows '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-step-backward' },
                ' fa-step-backward '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-fast-backward' },
                ' fa-fast-backward '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-backward' },
                ' fa-backward '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-play' },
                ' fa-play '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-pause' },
                ' fa-pause '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-stop' },
                ' fa-stop '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-forward' },
                ' fa-forward '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-fast-forward' },
                ' fa-fast-forward '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-step-forward' },
                ' fa-step-forward '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-eject' },
                ' fa-eject '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-chevron-left' },
                ' fa-chevron-left '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-chevron-right' },
                ' fa-chevron-right '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-plus-circle' },
                ' fa-plus-circle '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-minus-circle' },
                ' fa-minus-circle '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-times-circle' },
                ' fa-times-circle '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-check-circle' },
                ' fa-check-circle '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-question-circle' },
                ' fa-question-circle '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-info-circle' },
                ' fa-info-circle '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-crosshairs' },
                ' fa-crosshairs '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-times-circle-o' },
                ' fa-times-circle-o '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-check-circle-o' },
                ' fa-check-circle-o '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-ban' },
                ' fa-ban '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-arrow-left' },
                ' fa-arrow-left '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-arrow-right' },
                ' fa-arrow-right '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-arrow-up' },
                ' fa-arrow-up '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-arrow-down' },
                ' fa-arrow-down '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-mail-forward' },
                ' fa-mail-forward '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-share' },
                ' fa-share '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-expand' },
                ' fa-expand '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-compress' },
                ' fa-compress '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-plus' },
                ' fa-plus '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-minus' },
                ' fa-minus '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-asterisk' },
                ' fa-asterisk '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-exclamation-circle' },
                ' fa-exclamation-circle '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-gift' },
                ' fa-gift '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-leaf' },
                ' fa-leaf '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-fire' },
                ' fa-fire '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-eye' },
                ' fa-eye '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-eye-slash' },
                ' fa-eye-slash '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-warning' },
                ' fa-warning '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-exclamation-triangle' },
                ' fa-exclamation-triangle '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-plane' },
                ' fa-plane '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-calendar' },
                ' fa-calendar '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-random' },
                ' fa-random '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-comment' },
                ' fa-comment '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-magnet' },
                ' fa-magnet '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-chevron-up' },
                ' fa-chevron-up '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-chevron-down' },
                ' fa-chevron-down '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-retweet' },
                ' fa-retweet '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-shopping-cart' },
                ' fa-shopping-cart '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-folder' },
                ' fa-folder '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-folder-open' },
                ' fa-folder-open '
              ),
              _react2.default.createElement('br', null),
              ' '
            ),
            _react2.default.createElement(
              'div',
              { className: 'fa col-lg-3' },
              _react2.default.createElement(
                'p',
                { className: 'fa fa-arrows-v' },
                ' fa-arrows-v '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-arrows-h' },
                ' fa-arrows-h '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-bar-chart-o' },
                ' fa-bar-chart-o '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-twitter-square' },
                ' fa-twitter-square '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-facebook-square' },
                ' fa-facebook-square '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-camera-retro' },
                ' fa-camera-retro '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-key' },
                ' fa-key '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-gears' },
                ' fa-gears '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-cogs' },
                ' fa-cogs '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-comments' },
                ' fa-comments '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-thumbs-o-up' },
                ' fa-thumbs-o-up '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-thumbs-o-down' },
                ' fa-thumbs-o-down '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-star-half' },
                ' fa-star-half '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-heart-o' },
                ' fa-heart-o '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-sign-out' },
                ' fa-sign-out '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-linkedin-square' },
                ' fa-linkedin-square '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-thumb-tack' },
                ' fa-thumb-tack '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-external-link' },
                ' fa-external-link '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-sign-in' },
                ' fa-sign-in '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-trophy' },
                ' fa-trophy '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-github-square' },
                ' fa-github-square '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-upload' },
                ' fa-upload '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-lemon-o' },
                ' fa-lemon-o '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-phone' },
                ' fa-phone '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-square-o' },
                ' fa-square-o '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-bookmark-o' },
                ' fa-bookmark-o '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-phone-square' },
                ' fa-phone-square '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-twitter' },
                ' fa-twitter '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-facebook' },
                ' fa-facebook '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-github' },
                ' fa-github '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-unlock' },
                ' fa-unlock '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-credit-card' },
                ' fa-credit-card '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-rss' },
                ' fa-rss '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-hdd-o' },
                ' fa-hdd-o '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-bullhorn' },
                ' fa-bullhorn '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-bell' },
                ' fa-bell '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-certificate' },
                ' fa-certificate '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-hand-o-right' },
                ' fa-hand-o-right '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-hand-o-left' },
                ' fa-hand-o-left '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-hand-o-up' },
                ' fa-hand-o-up '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-hand-o-down' },
                ' fa-hand-o-down '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-arrow-circle-left' },
                ' fa-arrow-circle-left '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-arrow-circle-right' },
                ' fa-arrow-circle-right '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-arrow-circle-up' },
                ' fa-arrow-circle-up '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-arrow-circle-down' },
                ' fa-arrow-circle-down '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-globe' },
                ' fa-globe '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-wrench' },
                ' fa-wrench '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-tasks' },
                ' fa-tasks '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-filter' },
                ' fa-filter '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-briefcase' },
                ' fa-briefcase '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-arrows-alt' },
                ' fa-arrows-alt '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-group' },
                ' fa-group '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-users' },
                ' fa-users '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-chain' },
                ' fa-chain '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-link' },
                ' fa-link '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-cloud' },
                ' fa-cloud '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-flask' },
                ' fa-flask '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-cut' },
                ' fa-cut '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-scissors' },
                ' fa-scissors '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-copy' },
                ' fa-copy '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-files-o' },
                ' fa-files-o '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-paperclip' },
                ' fa-paperclip '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-save' },
                ' fa-save '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-floppy-o' },
                ' fa-floppy-o '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-square' },
                ' fa-square '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-navicon' },
                ' fa-navicon '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-reorder' },
                ' fa-reorder '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-bars' },
                ' fa-bars '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-list-ul' },
                ' fa-list-ul '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-list-ol' },
                ' fa-list-ol '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-strikethrough' },
                ' fa-strikethrough '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-underline' },
                ' fa-underline '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-table' },
                ' fa-table '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-magic' },
                ' fa-magic '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-truck' },
                ' fa-truck '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-pinterest' },
                ' fa-pinterest '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-pinterest-square' },
                ' fa-pinterest-square '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-google-plus-square' },
                ' fa-google-plus-square '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-google-plus' },
                ' fa-google-plus '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-money' },
                ' fa-money '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-caret-down' },
                ' fa-caret-down '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-caret-up' },
                ' fa-caret-up '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-caret-left' },
                ' fa-caret-left '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-caret-right' },
                ' fa-caret-right '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-columns' },
                ' fa-columns '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-unsorted' },
                ' fa-unsorted '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-sort' },
                ' fa-sort '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-sort-down' },
                ' fa-sort-down '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-sort-desc' },
                ' fa-sort-desc '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-sort-up' },
                ' fa-sort-up '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-sort-asc' },
                ' fa-sort-asc '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-envelope' },
                ' fa-envelope '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-linkedin' },
                ' fa-linkedin '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-rotate-left' },
                ' fa-rotate-left '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-undo' },
                ' fa-undo '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-legal' },
                ' fa-legal '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-gavel' },
                ' fa-gavel '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-dashboard' },
                ' fa-dashboard '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-tachometer' },
                ' fa-tachometer '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-comment-o' },
                ' fa-comment-o '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-comments-o' },
                ' fa-comments-o '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-flash' },
                ' fa-flash '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-bolt' },
                ' fa-bolt '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-sitemap' },
                ' fa-sitemap '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-umbrella' },
                ' fa-umbrella '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-paste' },
                ' fa-paste '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-clipboard' },
                ' fa-clipboard '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-lightbulb-o' },
                ' fa-lightbulb-o '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-exchange' },
                ' fa-exchange '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-cloud-download' },
                ' fa-cloud-download '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-cloud-upload' },
                ' fa-cloud-upload '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-user-md' },
                ' fa-user-md '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-stethoscope' },
                ' fa-stethoscope '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-suitcase' },
                ' fa-suitcase '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-bell-o' },
                ' fa-bell-o '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-coffee' },
                ' fa-coffee '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-cutlery' },
                ' fa-cutlery '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-file-text-o' },
                ' fa-file-text-o '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-building-o' },
                ' fa-building-o '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-hospital-o' },
                ' fa-hospital-o '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-ambulance' },
                ' fa-ambulance '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-medkit' },
                ' fa-medkit '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-fighter-jet' },
                ' fa-fighter-jet '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-beer' },
                ' fa-beer '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-h-square' },
                ' fa-h-square '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-plus-square' },
                ' fa-plus-square '
              ),
              _react2.default.createElement('br', null)
            ),
            _react2.default.createElement(
              'div',
              { className: 'fa col-lg-3' },
              _react2.default.createElement(
                'p',
                { className: 'fa fa-angle-double-left' },
                ' fa-angle-double-left '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-angle-double-right' },
                ' fa-angle-double-right '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-angle-double-up' },
                ' fa-angle-double-up '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-angle-double-down' },
                ' fa-angle-double-down '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-angle-left' },
                ' fa-angle-left '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-angle-right' },
                ' fa-angle-right '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-angle-up' },
                ' fa-angle-up '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-angle-down' },
                ' fa-angle-down '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-desktop' },
                ' fa-desktop '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-laptop' },
                ' fa-laptop '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-tablet' },
                ' fa-tablet '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-mobile-phone' },
                ' fa-mobile-phone '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-mobile' },
                ' fa-mobile '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-circle-o' },
                ' fa-circle-o '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-quote-left' },
                ' fa-quote-left '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-quote-right' },
                ' fa-quote-right '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-spinner' },
                ' fa-spinner '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-circle' },
                ' fa-circle '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-mail-reply' },
                ' fa-mail-reply '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-reply' },
                ' fa-reply '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-github-alt' },
                ' fa-github-alt '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-folder-o' },
                ' fa-folder-o '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-folder-open-o' },
                ' fa-folder-open-o '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-smile-o' },
                ' fa-smile-o '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-frown-o' },
                ' fa-frown-o '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-meh-o' },
                ' fa-meh-o '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-gamepad' },
                ' fa-gamepad '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-keyboard-o' },
                ' fa-keyboard-o '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-flag-o' },
                ' fa-flag-o '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-flag-checkered' },
                ' fa-flag-checkered '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-terminal' },
                ' fa-terminal '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-code' },
                ' fa-code '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-mail-reply-all' },
                ' fa-mail-reply-all '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-reply-all' },
                ' fa-reply-all '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-star-half-empty' },
                ' fa-star-half-empty '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-star-half-full' },
                ' fa-star-half-full '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-star-half-o' },
                ' fa-star-half-o '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-location-arrow' },
                ' fa-location-arrow '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-crop' },
                ' fa-crop '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-code-fork' },
                ' fa-code-fork '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-unlink' },
                ' fa-unlink '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-chain-broken' },
                ' fa-chain-broken '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-question' },
                ' fa-question '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-info' },
                ' fa-info '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-exclamation' },
                ' fa-exclamation '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-superscript' },
                ' fa-superscript '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-subscript' },
                ' fa-subscript '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-eraser' },
                ' fa-eraser '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-puzzle-piece' },
                ' fa-puzzle-piece '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-microphone' },
                ' fa-microphone '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-microphone-slash' },
                ' fa-microphone-slash '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-shield' },
                ' fa-shield '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-calendar-o' },
                ' fa-calendar-o '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-fire-extinguisher' },
                ' fa-fire-extinguisher '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-rocket' },
                ' fa-rocket '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-maxcdn' },
                ' fa-maxcdn '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-chevron-circle-left' },
                ' fa-chevron-circle-left '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-chevron-circle-right' },
                ' fa-chevron-circle-right '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-chevron-circle-up' },
                ' fa-chevron-circle-up '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-chevron-circle-down' },
                ' fa-chevron-circle-down '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-html5' },
                ' fa-html5 '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-css3' },
                ' fa-css3 '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-anchor' },
                ' fa-anchor '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-unlock-alt' },
                ' fa-unlock-alt '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-bullseye' },
                ' fa-bullseye '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-ellipsis-h' },
                ' fa-ellipsis-h '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-ellipsis-v' },
                ' fa-ellipsis-v '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-rss-square' },
                ' fa-rss-square '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-play-circle' },
                ' fa-play-circle '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-ticket' },
                ' fa-ticket '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-minus-square' },
                ' fa-minus-square '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-minus-square-o' },
                ' fa-minus-square-o '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-level-up' },
                ' fa-level-up '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-level-down' },
                ' fa-level-down '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-check-square' },
                ' fa-check-square '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-pencil-square' },
                ' fa-pencil-square '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-external-link-square' },
                ' fa-external-link-square '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-share-square' },
                ' fa-share-square '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-compass' },
                ' fa-compass '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-toggle-down' },
                ' fa-toggle-down '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-caret-square-o-down' },
                ' fa-caret-square-o-down '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-toggle-up' },
                ' fa-toggle-up '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-caret-square-o-up' },
                ' fa-caret-square-o-up '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-toggle-right' },
                ' fa-toggle-right '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-caret-square-o-right' },
                ' fa-caret-square-o-right '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-euro' },
                ' fa-euro '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-eur' },
                ' fa-eur '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-gbp' },
                ' fa-gbp '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-dollar' },
                ' fa-dollar '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-usd' },
                ' fa-usd '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-rupee' },
                ' fa-rupee '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-inr' },
                ' fa-inr '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-cny' },
                ' fa-cny '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-rmb' },
                ' fa-rmb '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-yen' },
                ' fa-yen '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-jpy' },
                ' fa-jpy '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-ruble' },
                ' fa-ruble '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-rouble' },
                ' fa-rouble '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-rub' },
                ' fa-rub '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-won' },
                ' fa-won '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-krw' },
                ' fa-krw '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-bitcoin' },
                ' fa-bitcoin '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-btc' },
                ' fa-btc '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-file' },
                ' fa-file '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-file-text' },
                ' fa-file-text '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-sort-alpha-asc' },
                ' fa-sort-alpha-asc '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-sort-alpha-desc' },
                ' fa-sort-alpha-desc '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-sort-amount-asc' },
                ' fa-sort-amount-asc '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-sort-amount-desc' },
                ' fa-sort-amount-desc '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-sort-numeric-asc' },
                ' fa-sort-numeric-asc '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-sort-numeric-desc' },
                ' fa-sort-numeric-desc '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-thumbs-up' },
                ' fa-thumbs-up '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-thumbs-down' },
                ' fa-thumbs-down '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-youtube-square' },
                ' fa-youtube-square '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-youtube' },
                ' fa-youtube '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-xing' },
                ' fa-xing '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-xing-square' },
                ' fa-xing-square '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-youtube-play' },
                ' fa-youtube-play '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-dropbox' },
                ' fa-dropbox '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-stack-overflow' },
                ' fa-stack-overflow '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-instagram' },
                ' fa-instagram '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-flickr' },
                ' fa-flickr '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-adn' },
                ' fa-adn '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-bitbucket' },
                ' fa-bitbucket '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-bitbucket-square' },
                ' fa-bitbucket-square '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-tumblr' },
                ' fa-tumblr '
              ),
              _react2.default.createElement('br', null),
              ' '
            ),
            _react2.default.createElement(
              'div',
              { className: 'fa col-lg-3' },
              _react2.default.createElement(
                'p',
                { className: 'fa fa-tumblr-square' },
                ' fa-tumblr-square '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-long-arrow-down' },
                ' fa-long-arrow-down '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-long-arrow-up' },
                ' fa-long-arrow-up '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-long-arrow-left' },
                ' fa-long-arrow-left '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-long-arrow-right' },
                ' fa-long-arrow-right '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-apple' },
                ' fa-apple '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-windows' },
                ' fa-windows '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-android' },
                ' fa-android '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-linux' },
                ' fa-linux '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-dribbble' },
                ' fa-dribbble '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-skype' },
                ' fa-skype '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-foursquare' },
                ' fa-foursquare '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-trello' },
                ' fa-trello '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-female' },
                ' fa-female '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-male' },
                ' fa-male '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-gittip' },
                ' fa-gittip '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-sun-o' },
                ' fa-sun-o '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-moon-o' },
                ' fa-moon-o '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-archive' },
                ' fa-archive '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-bug' },
                ' fa-bug '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-vk' },
                ' fa-vk '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-weibo' },
                ' fa-weibo '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-renren' },
                ' fa-renren '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-pagelines' },
                ' fa-pagelines '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-stack-exchange' },
                ' fa-stack-exchange '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-arrow-circle-o-right' },
                ' fa-arrow-circle-o-right '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-arrow-circle-o-left' },
                ' fa-arrow-circle-o-left '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-toggle-left' },
                ' fa-toggle-left '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-caret-square-o-left' },
                ' fa-caret-square-o-left '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-dot-circle-o' },
                ' fa-dot-circle-o '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-wheelchair' },
                ' fa-wheelchair '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-vimeo-square' },
                ' fa-vimeo-square '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-turkish-lira' },
                ' fa-turkish-lira '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-try' },
                ' fa-try '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-plus-square-o' },
                ' fa-plus-square-o '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-space-shuttle' },
                ' fa-space-shuttle '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-slack' },
                ' fa-slack '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-envelope-square' },
                ' fa-envelope-square '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-wordpress' },
                ' fa-wordpress '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-openid' },
                ' fa-openid '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-institution' },
                ' fa-institution '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-bank' },
                ' fa-bank '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-university' },
                ' fa-university '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-mortar-board' },
                ' fa-mortar-board '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-graduation-cap' },
                ' fa-graduation-cap '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-yahoo' },
                ' fa-yahoo '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-google' },
                ' fa-google '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-reddit' },
                ' fa-reddit '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-reddit-square' },
                ' fa-reddit-square '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-stumbleupon-circle' },
                ' fa-stumbleupon-circle '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-stumbleupon' },
                ' fa-stumbleupon '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-delicious' },
                ' fa-delicious '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-digg' },
                ' fa-digg '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-pied-piper-square' },
                ' fa-pied-piper-square '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-pied-piper' },
                ' fa-pied-piper '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-pied-piper-alt' },
                ' fa-pied-piper-alt '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-drupal' },
                ' fa-drupal '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-joomla' },
                ' fa-joomla '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-language' },
                ' fa-language '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-fax' },
                ' fa-fax '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-building' },
                ' fa-building '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-child' },
                ' fa-child '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-paw' },
                ' fa-paw '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-spoon' },
                ' fa-spoon '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-cube' },
                ' fa-cube '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-cubes' },
                ' fa-cubes '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-behance' },
                ' fa-behance '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-behance-square' },
                ' fa-behance-square '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-steam' },
                ' fa-steam '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-steam-square' },
                ' fa-steam-square '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-recycle' },
                ' fa-recycle '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-automobile' },
                ' fa-automobile '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-car' },
                ' fa-car '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-cab' },
                ' fa-cab '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-taxi' },
                ' fa-taxi '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-tree' },
                ' fa-tree '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-spotify' },
                ' fa-spotify '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-deviantart' },
                ' fa-deviantart '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-soundcloud' },
                ' fa-soundcloud '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-database' },
                ' fa-database '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-file-pdf-o' },
                ' fa-file-pdf-o '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-file-word-o' },
                ' fa-file-word-o '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-file-excel-o' },
                ' fa-file-excel-o '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-file-powerpoint-o' },
                ' fa-file-powerpoint-o '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-file-photo-o' },
                ' fa-file-photo-o '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-file-picture-o' },
                ' fa-file-picture-o '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-file-image-o' },
                ' fa-file-image-o '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-file-zip-o' },
                ' fa-file-zip-o '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-file-archive-o' },
                ' fa-file-archive-o '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-file-sound-o' },
                ' fa-file-sound-o '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-file-audio-o' },
                ' fa-file-audio-o '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-file-movie-o' },
                ' fa-file-movie-o '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-file-video-o' },
                ' fa-file-video-o '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-file-code-o' },
                ' fa-file-code-o '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-vine' },
                ' fa-vine '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-codepen' },
                ' fa-codepen '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-jsfiddle' },
                ' fa-jsfiddle '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-life-bouy' },
                ' fa-life-bouy '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-life-saver' },
                ' fa-life-saver '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-support' },
                ' fa-support '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-life-ring' },
                ' fa-life-ring '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-circle-o-notch' },
                ' fa-circle-o-notch '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-ra' },
                ' fa-ra '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-rebel' },
                ' fa-rebel '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-ge' },
                ' fa-ge '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-empire' },
                ' fa-empire '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-git-square' },
                ' fa-git-square '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-git' },
                ' fa-git '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-hacker-news' },
                ' fa-hacker-news '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-tencent-weibo' },
                ' fa-tencent-weibo '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-qq' },
                ' fa-qq '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-wechat' },
                ' fa-wechat '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-weixin' },
                ' fa-weixin '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-send' },
                ' fa-send '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-paper-plane' },
                ' fa-paper-plane '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-send-o' },
                ' fa-send-o '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-paper-plane-o' },
                ' fa-paper-plane-o '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-history' },
                ' fa-history '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-circle-thin' },
                ' fa-circle-thin '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-header' },
                ' fa-header '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-paragraph' },
                ' fa-paragraph '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-sliders' },
                ' fa-sliders '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-share-alt' },
                ' fa-share-alt '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-share-alt-square' },
                ' fa-share-alt-square '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-bomb' },
                ' fa-bomb '
              ),
              _react2.default.createElement('br', null)
            )
          )
        )
      )
    );
  }
  
  displayIcons.contextTypes = { setTitle: _react.PropTypes.func.isRequired };
  
  exports.default = displayIcons;

/***/ }),
/* 106 */
/***/ (function(module, exports) {

  module.exports = require("react-bootstrap/lib/Panel");

/***/ }),
/* 107 */
/***/ (function(module, exports) {

  module.exports = require("react-bootstrap/lib/PageHeader");

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _sbgTeam = __webpack_require__(109);
  
  var _sbgTeam2 = _interopRequireDefault(_sbgTeam);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = {
    path: '/sbgTeam',
  
    action: function action() {
      return _react2.default.createElement(_sbgTeam2.default, null);
    }
  };

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _getPrototypeOf = __webpack_require__(29);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(30);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(31);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(32);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(33);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactBootstrap = __webpack_require__(39);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var title = 'SBG Core Team';
  var smPp = __webpack_require__(110);
  var jnPp = __webpack_require__(111);
  var nlPp = __webpack_require__(112);
  var bmPp = __webpack_require__(113);
  
  var displayBlank = function (_React$Component) {
    (0, _inherits3.default)(displayBlank, _React$Component);
  
    function displayBlank(props, context) {
      (0, _classCallCheck3.default)(this, displayBlank);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (displayBlank.__proto__ || (0, _getPrototypeOf2.default)(displayBlank)).call(this, props));
  
      _this.state = {
        index: 0,
        direction: null
      };
      context.setTitle(title);
      _this.handleSelect = _this.handleSelect.bind(_this);
      return _this;
    }
  
    (0, _createClass3.default)(displayBlank, [{
      key: 'handleSelect',
      value: function handleSelect(selectedIndex, direction) {
        this.setState({
          index: selectedIndex,
          direction: direction
        });
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-lg-12' },
              _react2.default.createElement(
                _reactBootstrap.PageHeader,
                null,
                _react2.default.createElement('i', { className: 'fa fa-group' }),
                '\xA0\xA0SBG Core Team'
              )
            )
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            _reactBootstrap.Carousel,
            { className: 'carousel-int', activeIndex: this.state.index, direction: this.state.direction, onSelect: this.handleSelect },
            _react2.default.createElement(
              _reactBootstrap.Carousel.Item,
              null,
              _react2.default.createElement('img', { width: 600, height: 200, alt: '500x300', src: smPp }),
              _react2.default.createElement(
                _reactBootstrap.Carousel.Caption,
                null,
                _react2.default.createElement(
                  'h3',
                  null,
                  'Convener'
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  'Samarth Parikh, B.Tech 4th year (+91 94281 09090).'
                )
              )
            ),
            _react2.default.createElement(
              _reactBootstrap.Carousel.Item,
              null,
              _react2.default.createElement('img', { width: 600, height: 200, alt: '500x300', src: jnPp }),
              _react2.default.createElement(
                _reactBootstrap.Carousel.Caption,
                null,
                _react2.default.createElement(
                  'h3',
                  null,
                  'Deputy Convener'
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  'Jinesh Shah, B.Tech 4th year (+91 89807 79867).'
                )
              )
            ),
            _react2.default.createElement(
              _reactBootstrap.Carousel.Item,
              null,
              _react2.default.createElement('img', { width: 600, height: 200, alt: '500x300', src: nlPp }),
              _react2.default.createElement(
                _reactBootstrap.Carousel.Caption,
                null,
                _react2.default.createElement(
                  'h3',
                  null,
                  'Treasurer'
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  'Nilay Shrimali, B.Tech 4th year (+91 70462 95423).'
                )
              )
            ),
            _react2.default.createElement(
              _reactBootstrap.Carousel.Item,
              null,
              _react2.default.createElement('img', { width: 600, height: 200, alt: '500x300', src: bmPp }),
              _react2.default.createElement(
                _reactBootstrap.Carousel.Caption,
                null,
                _react2.default.createElement(
                  'h3',
                  null,
                  'Secretary'
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  'Bhargav Makwana, B.Tech 3rd year (+91 91737 70828).'
                )
              )
            )
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'center',
            null,
            _react2.default.createElement(
              'p',
              null,
              'We are open to feedback and suggestions. Just drop us an email at ',
              _react2.default.createElement(
                'a',
                { href: 'mailto:#' },
                'sbg@daiict.ac.in'
              ),
              '.'
            )
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement('br', null),
          _react2.default.createElement('br', null)
        );
      }
    }]);
    return displayBlank;
  }(_react2.default.Component);
  
  displayBlank.contextTypes = { setTitle: _react.PropTypes.func.isRequired };
  exports.default = displayBlank;

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "routes/dashboardPages/sbgTeam/sm_pp.jpeg?8f93c58808057d22f40ca343a93b4db4";

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "routes/dashboardPages/sbgTeam/jn.jpeg?8e912dddae1c6866e44e85c2f0def569";

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "routes/dashboardPages/sbgTeam/nl_pp.jpg?90550af9c02dbcd735e04a04c4bcb7d3";

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "routes/dashboardPages/sbgTeam/bm_pp.jpg?af05da872ed5949963b7e5a9e5549ead";

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _constitution = __webpack_require__(115);
  
  var _constitution2 = _interopRequireDefault(_constitution);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = {
    path: '/constitution',
  
    action: function action() {
      return _react2.default.createElement(_constitution2.default, null);
    }
  };

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _getPrototypeOf = __webpack_require__(29);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(30);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(31);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(32);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(33);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactBootstrap = __webpack_require__(39);
  
  var _reactPdfJs = __webpack_require__(116);
  
  var _reactPdfJs2 = _interopRequireDefault(_reactPdfJs);
  
  var _Constitution = __webpack_require__(117);
  
  var _Constitution2 = _interopRequireDefault(_Constitution);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var title = 'SBG Constitution';
  
  var Constitution = function (_React$Component) {
    (0, _inherits3.default)(Constitution, _React$Component);
  
    function Constitution(props, context) {
      (0, _classCallCheck3.default)(this, Constitution);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (Constitution.__proto__ || (0, _getPrototypeOf2.default)(Constitution)).call(this, props));
  
      _this.onDocumentComplete = function (pages) {
        _this.setState({ page: 1, pages: pages });
      };
  
      _this.onPageComplete = function (page) {
        _this.setState({ page: page });
      };
  
      _this.handlePrevious = function () {
        _this.setState({ page: _this.state.page - 1 });
      };
  
      _this.handleNext = function () {
        _this.setState({ page: _this.state.page + 1 });
      };
  
      _this.renderPagination = function (page, pages) {
        var previousButton = _react2.default.createElement(
          'li',
          { className: 'previous', onClick: _this.handlePrevious },
          _react2.default.createElement(
            'a',
            { href: '#' },
            _react2.default.createElement('i', { className: 'fa fa-arrow-left' }),
            ' Previous'
          )
        );
        if (page === 1) {
          previousButton = _react2.default.createElement(
            'li',
            { className: 'previous disabled' },
            _react2.default.createElement(
              'a',
              { href: '#' },
              _react2.default.createElement('i', { className: 'fa fa-arrow-left' }),
              ' Previous'
            )
          );
        }
        var nextButton = _react2.default.createElement(
          'li',
          { className: 'next', onClick: _this.handleNext },
          _react2.default.createElement(
            'a',
            { href: '#' },
            'Next ',
            _react2.default.createElement('i', { className: 'fa fa-arrow-right' })
          )
        );
        if (page === pages) {
          nextButton = _react2.default.createElement(
            'li',
            { className: 'next disabled' },
            _react2.default.createElement(
              'a',
              { href: '#' },
              'Next ',
              _react2.default.createElement('i', { className: 'fa fa-arrow-right' })
            )
          );
        }
        return _react2.default.createElement(
          'nav',
          null,
          _react2.default.createElement(
            'ul',
            { className: 'pager' },
            previousButton,
            nextButton
          )
        );
      };
  
      context.setTitle(title);
      _this.onDocumentComplete = _this.onDocumentComplete.bind(_this);
      _this.onPageComplete = _this.onPageComplete.bind(_this);
      _this.handlePrevious = _this.handlePrevious.bind(_this);
      _this.handleNext = _this.handleNext.bind(_this);
      _this.renderPagination = _this.renderPagination.bind(_this);
      _this.state = {
        pages: null,
        page: null
      };
      return _this;
    }
  
    (0, _createClass3.default)(Constitution, [{
      key: 'render',
      value: function render() {
        var pagination = null;
        if (this.state.pages) {
          pagination = this.renderPagination(this.state.page, this.state.pages);
        }
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-lg-12' },
              _react2.default.createElement(
                _reactBootstrap.PageHeader,
                null,
                _react2.default.createElement('i', { className: 'fa fa-book' }),
                '\xA0\xA0SBG Constitution'
              )
            )
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'div',
            null,
            pagination,
            _react2.default.createElement(
              'center',
              null,
              _react2.default.createElement(_reactPdfJs2.default, {
                file: _Constitution2.default,
                onDocumentComplete: this.onDocumentComplete,
                onPageComplete: this.onPageComplete,
                page: this.state.page
              })
            )
          )
        );
      }
    }]);
    return Constitution;
  }(_react2.default.Component);
  
  Constitution.contextTypes = { setTitle: _react.PropTypes.func.isRequired };
  exports.default = Constitution;

/***/ }),
/* 116 */
/***/ (function(module, exports) {

  module.exports = require("react-pdf-js");

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "routes/dashboardPages/constitution/Constitution.pdf";

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _committees = __webpack_require__(119);
  
  var _committees2 = _interopRequireDefault(_committees);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = {
    path: '/committees',
  
    action: function action() {
      return _react2.default.createElement(_committees2.default, null);
    }
  };

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _getPrototypeOf = __webpack_require__(29);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(30);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(31);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(32);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(33);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactBootstrap = __webpack_require__(39);
  
  var _committeesInfo = __webpack_require__(120);
  
  var _committeesInfo2 = _interopRequireDefault(_committeesInfo);
  
  var _CommitteePanel = __webpack_require__(121);
  
  var _CommitteePanel2 = _interopRequireDefault(_CommitteePanel);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var title = 'Committees';
  
  var Committees = function (_React$Component) {
    (0, _inherits3.default)(Committees, _React$Component);
  
    function Committees(props, context) {
      (0, _classCallCheck3.default)(this, Committees);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (Committees.__proto__ || (0, _getPrototypeOf2.default)(Committees)).call(this, props));
  
      context.setTitle(title);
      return _this;
    }
  
    (0, _createClass3.default)(Committees, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-lg-12' },
              _react2.default.createElement(
                _reactBootstrap.PageHeader,
                null,
                _react2.default.createElement('i', { className: 'fa fa-dashboard' }),
                '\xA0\xA0SBG Committees'
              )
            )
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            _reactBootstrap.PanelGroup,
            null,
            _committeesInfo2.default.map(function (item) {
              return _react2.default.createElement(_CommitteePanel2.default, {
                header: item.header,
                role: item.role,
                contact: item.contact,
                reports: _.get(item, 'reports', null),
                bsStyle: item.style
              });
            })
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement('br', null)
        );
      }
    }]);
    return Committees;
  }(_react2.default.Component);
  
  Committees.contextTypes = { setTitle: _react.PropTypes.func.isRequired };
  exports.default = Committees;

/***/ }),
/* 120 */
/***/ (function(module, exports) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = [{
    header: 'Academic Committee',
    style: 'success',
    role: 'The Academic Committee works as an interface between the student community and the administration of the institute (including Dean Academics, Registrar, Institute committees, and the Director) for the development of the academic environment, and enhancement of academic life in DA-IICT.Their primary function is to convey the views, concerns, and problems, related to academics, of the student community to the institute administration (specifically, the various academic related committees of the institute) so as to enhance the quality of academic life and programs, and foster a conducive academic environment in the institute. Also, to organize activities that will enhance the academic aspects of student life in any and every possible way.',
    contact: {
      c_name: 'Jinesh Shah',
      dc_name: 'Kelay Shah',
      c_num: '+91 8980779867',
      dc_num: '+91 8000971501',
      webmail_id: 'sbg_academics@daiict.ac.in'
    }
  }, {
    header: 'Annual Festival Committee',
    style: 'info',
    role: 'The Annual Festival Committee of DA-IICT works to provide a platform for students around the country to compete and showcase their talent. We are the proud organizers of the annual techno-cultural festival of DA-IICT – Synapse.\nSynapse is a celebration – a celebration of culture, technology and life. It is about realizing the underlying inherent junction of the three in an electrifying atmosphere. One of the most prominent college fests of Gujarat, it is a spectacle of our talent, aspirations, creativity and vision. Through exciting workshops, impressive events, and mesmerizing pro-nights, Synapse is a medium through which the youth can express their views; be it through art, culture, technological skills, knowledge or entertainment. It is a time when the student community comes forward to show its intensity, passion and enthusiasm. \nWe, at Synapse, hope to create the best four days at DA-IICT in an effort to give back to the DA-IICT community, students and faculty alike, for all their love, hard work, and dedication.',
    contact: {
      c_name: 'Chirang Malviya',
      dc_name: 'Aashay Binaykia',
      c_num: '+91 8128697799',
      dc_num: '+91 8981641460',
      webmail_id: 'synapse@daiict.ac.in',
      website: 'http://synapse.daiict.ac.in',
      youtube: 'https://www.youtube.com/user/SynapseDAIICT',
      facebook: 'https://www.instagram.com/synapsedaiict/'
    },
    reports: [{
      event: 'Synapse 2017 Glimpses',
      link: 'https://drive.google.com/drive/folders/1kkku0RBDUzXTDhbJo2MDg_UVGy4MftNI',
      date: '23th to 26th February, 2017'
    }]
  }, {
    header: 'Cafeteria Management Committee',
    style: 'default',
    role: 'Cafeteria Management Committee (CMC) addresses the issues related to cafeteria of DA-IICT. It does regular inspection of all the counters in the cafeteria and ensure that proper hygienic standards are maintained. It works as an intermediate body between the students and the administration of DA-IICT. It resolves issues raised by the students regarding cafeteria. They convey problems related to hygiene and quality of food available at DA-IICT cafeteria. Along with SBG Core and administration department of DA-IICT, they play an active role in deciding the price of food items and make sure that neither students nor the vendors are at loss. They also ensure proper working of night cafeteria of HOR-Women.',
    contact: {
      c_name: 'Adit Shah',
      dc_name: 'Vikas Parmar',
      c_num: '+91 7383441771',
      dc_num: '+91 7405546301',
      webmail_id: 'cmc@daiict.ac.in'
    }
  }, {
    header: 'Cultural Committee',
    style: 'danger',
    role: 'The Cultural Committee is responsible for keeping the student community of DA-IICT culturally alive, the college life happening and simultaneously preserving our culture amongst the students. It also promotes various cultural activities like music, drama and dance amongst the student community. The Cultural Committee organises various big events all year round the academic calendar, thus creating an aura of excitement and enjoyment along with providing a platform for students to showcase their talent in front of the college. Some of the main OAT events include the Dance Nite, the Drama Nite, etc. Apart from these, the Cultural Committee also takes upon its onus, the celebrations of various festivals throughout the year including Janmashtami, Eid and, one of the most popular one, Navratri. With this, it makes an attempt to promote the significance of these festivals as well as generate a homely feeling for the students. The Cultural Committee recognises itself as an important aspect of the soul of a student’s life and strives to make the college life a colourful and memorable one.',
    contact: {
      c_name: 'Aaditya Thakkar',
      dc_name: 'Sravani Kalangi',
      c_num: '+91 9537791815',
      dc_num: '+91 9909659174',
      webmail_id: 'cultural@daiict.ac.in',
      facebook: 'https://www.facebook.com/DaiictCulturalCommittee/'
    },
    reports: [{
      event: 'Diwali',
      link: 'https://docs.google.com/document/d/1tEYPfFfcsov8twInesH0kYvWiGZkgseW9XT61OtYgxw/edit?usp=sharing',
      date: '19th October, 2017'
    }, {
      event: 'Dussehra and Raavan Dahan',
      link: 'https://docs.google.com/document/d/1MGzlmmOA159SilnX3kjgvnaxC9qFYwwkEpe35xUWebU/edit?usp=sharing',
      date: '30th September, 2017'
    }, {
      event: 'Ramleela',
      link: 'https://docs.google.com/document/d/1iDgTEaaq2_JKS4AQwNCN0WpBextYTEXmFLhWExyGaE4/edit?usp=sharing',
      date: '28th September, 2017'
    }, {
      event: 'Garba Night',
      link: 'https://docs.google.com/document/d/1NXKaRVK-Uw4XMRCzio8FKRnDlLGDPbweJuun_SslaI4/edit?usp=sharing',
      date: '25th September, 2017'
    }, {
      event: 'Maniere - The Fashion Night',
      link: 'https://docs.google.com/document/d/12d02l5SAOCPo3dPDmWM3vrfXz0jFoxbAY5cEC-xh7vc/edit?usp=sharing',
      date: '18th September, 2017'
    }, {
      event: 'Teachers\' Day',
      link: 'https://docs.google.com/document/d/1r_XMKGiwMFLBeHZeb-QaofDqxfVG0yV5yEbrPuSWaqs/edit?usp=sharing',
      date: '5th September, 2017'
    }, {
      event: 'Eid',
      link: 'https://docs.google.com/document/d/1_Ple1syMA5XJTFuH8I9dNdbYBBZ0R3l13FWnctOY1AE/edit?usp=sharing',
      date: '2nd September, 2017'
    }, {
      event: 'Ganesh Chaturthi',
      link: 'https://docs.google.com/document/d/1Yt4Tme9idNKBrHJiv2toF2wmonPfhaGALAgi5RRh1Ik/edit?usp=sharing',
      date: '25th - 27th August, 2017'
    }, {
      event: 'Janmashtami',
      link: 'https://docs.google.com/document/d/1SS05LL2RACYiEelDMt_hGujmw8uH2g7ZIxJc0Cb7ec4/edit?usp=sharing',
      date: '15th August, 2017'
    }, {
      event: 'Cultural Weekend',
      link: 'https://docs.google.com/document/d/1_OvTMlIp5UFBApLVxib8HHq3H3gC1xeklqk0-xGc1ss/edit?usp=sharing',
      date: '11th - 13th August, 2017'
    }]
  }, {
    header: 'Hostel Management Committee',
    style: 'warning',
    role: 'Hostel Management Committee works for peaceful, clean and student friendly environment in the hostel of DA-IICT. The purpose of the HMC is to develop a healthier environment in the hostel lives of all the students and induce the interaction between the students of the Hostel by various activity and events. The Committee should carry out all the jobs of hostel management when required, under the supervision of wardens and hostel supervisor, thus increasing the efficiency of the hostel management. It also works as intermediate body between students and Administration, so we provide you platform to raise your request, concern, problems and complain so we can solve it or put it up to the concerned authorities. The most important duty of the HMC members is to identify the problems faced by their respective floor residents, and present them for follow-up to the Committee.  We also ensure the efficient use of the hostel resources by all hostel residents. Apart from these, we carry out several survey to solve the problems related to electrician, carpenter and plumber. We also maintain the TV Room and issue chess and carom to kill the leisure time of the students. We, at HMC , hope to create environment with peace and cleanliness in Hostel. Thus enhancing the quality life of the residents of the hostel by support of student community and Administration.',
    contact: {
      c_name: 'Harmish Ganatra',
      dc_name: 'Agam Shah',
      c_num: '+91 9428890707',
      dc_num: '+91 8866225667',
      webmail_id: 'hmc@daiict.ac.in'
    },
    reports: [{
      event: 'Cleanliness Drive',
      link: 'https://docs.google.com/document/d/1E8QEIatubCZsWoY8Ylg1TE3SvuzaG0Ckn53YE7e9BQc/edit?usp=sharing',
      date: '27th September - October, 2017'
    }, {
      event: 'Mosquito Net Installation Drive',
      link: 'https://docs.google.com/document/d/1mhQRg5Wu4JMncBC-ANsHtbfqwdydXavSvaUcp2ECBIQ/edit?usp=sharing',
      date: '20th September, 2017'
    }, {
      event: 'Fumigation',
      link: 'https://docs.google.com/document/d/1BSJ8EB7-xT0HYCx9tczdN8IwfNqzJJ_s0otCc01R5CY/edit?usp=sharing',
      date: '9th September, 2017'
    }, {
      event: 'Newspaper Facility',
      link: 'https://docs.google.com/document/d/128TIzpHKj6i7BXgXqVuHPhihhOJY46Sm09e7wdp0k20/edit?usp=sharing',
      date: 'Since Semester beginning'
    }]
  }, {
    header: 'ICT Committee',
    style: 'danger',
    role: 'The primary role of the ICT Committee is to represent student views and issues related to ICT resources to the concerned authorities (Help Desk, System Admin, Web Committee and ICT Convener) and vice versa. Also, to conduct and/or coordinate sessions over various tools and technologies (eg. Moo- dle) which are used in daily life by the DAIICT community. Further, they play an active role in all the technical assistance required for all the events on campus including sound setup and pack up, maintenance of the technical inventory.',
    contact: {
      c_name: 'Jay Bhuva',
      dc_name: 'Ishan Changela',
      c_num: '+91 9033063062',
      dc_num: '+91 8460238396',
      webmail_id: 'ict_sbg@daiict.ac.in'
    }
  }, {
    header: 'Sports Committee',
    style: 'info',
    role: 'The Sports Committee of DA-IICT aims to showcase athletic intelligence and foster a positive and friendly environment among student community. Also, we are proud organizers of the annual inter-college sports festival of DA-IICT, “CONCOURS”. Concours is a celebration of sportsmanship and teamwork. One of the most prominent college festivals of Gujarat, it is a spectacle of out sporting culture and talent. We also organize sporting events like Athletic Meet, IBT (Inter Batch Tournaments), DCL (Da-iict Cricket League) and Outstation Trip to nurture the sporting spirit of the students. These are the times, when student community comes forward to show its passion and enthusiasm for sports. We, at Sports Committee, hope to create positive environment towards sports at DA-IICT with the hard work and dedication of faculties and student community.',
    contact: {
      c_name: 'Samarth Parikh',
      dc_name: 'Piyush Ajmeria',
      c_num: '+91 9428109090',
      dc_num: '+91 8109715078',
      webmail_id: 'sports@daiict.ac.in',
      website: 'http://concours.daiict.ac.in'
    }
  }, {
    header: 'Student Placement Cell',
    style: 'success',
    role: 'The Placement Cell at DA-IICT is a concept in its own form. It works professionally abiding the hierarchy of the placement officer followed by the placement secretary, the faculty members and finally the student representatives from each stream. The hierarchy aims at touching all the aspects required for the smooth functioning of placement body of the reputed ICT forerunner Institution DA-IICT. The Placement Cell in DA-IICT works professionally with the Industry to explore opportunities for DA-IICT graduates for placement. The Cell makes its best efforts to reach out to all sub-sectors of the industry in order to ensure that DA-IICT graduates spread across the industry. The role of the Student Placement Cell, DA-IICT is to act just as an interface between the student community and the recruiters in order to organize and smoothen on-campus placements. An important function of SPC is to formulate the placement policy along with Placement Cell. It also works to compile requisite data –Student-related and company-related information. The main burden on the Student Placement Cell, DA-IICT is to ensure the best placements for the student community in both ways, qualitatively and quantitatively.',
    contact: {
      c_name: 'Akshay Miterani',
      dc_name: 'Sai Teja',
      c_num: '+91 8849377746',
      dc_num: '+91 7600637566',
      webmail_id: 'spc@daiict.ac.in',
      website: 'http://placement.daiict.ac.in'
    }
  }];

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _getPrototypeOf = __webpack_require__(29);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(30);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(31);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(32);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(33);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactBootstrap = __webpack_require__(39);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var tooltip = _react2.default.createElement(
    _reactBootstrap.Tooltip,
    { id: 'tooltip' },
    _react2.default.createElement(
      'strong',
      null,
      'Click to view the report!'
    )
  );
  
  var CommitteePanel = function (_React$Component) {
    (0, _inherits3.default)(CommitteePanel, _React$Component);
  
    function CommitteePanel() {
      (0, _classCallCheck3.default)(this, CommitteePanel);
      return (0, _possibleConstructorReturn3.default)(this, (CommitteePanel.__proto__ || (0, _getPrototypeOf2.default)(CommitteePanel)).apply(this, arguments));
    }
  
    (0, _createClass3.default)(CommitteePanel, [{
      key: 'render',
      value: function render() {
        var mail = this.props.contact.webmail_id && _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'a',
            { href: 'mailto:#', target: '_blank', rel: 'noopener noreferrer', className: 'fa fa-envelope black-link' },
            '  ' + this.props.contact.webmail_id
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement('br', null)
        );
        var fb = this.props.contact.facebook && _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'a',
            { href: this.props.contact.facebook, target: '_blank', rel: 'noopener noreferrer', className: 'fa fa-facebook-square black-link' },
            '  ' + this.props.contact.facebook
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement('br', null)
        );
        var youtube = this.props.contact.youtube && _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'a',
            { href: this.props.contact.youtube, target: '_blank', rel: 'noopener noreferrer', className: 'fa fa-youtube-play black-link' },
            '  ' + this.props.contact.youtube
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement('br', null)
        );
        var website = this.props.contact.website && _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'a',
            { href: this.props.contact.website, target: '_blank', rel: 'noopener noreferrer', className: 'fa fa-link black-link' },
            '  ' + this.props.contact.website
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement('br', null)
        );
        return _react2.default.createElement(
          _reactBootstrap.Panel,
          { bsStyle: this.props.bsStyle, collapsible: true, header: this.props.header, eventKey: '1' },
          _react2.default.createElement(
            _reactBootstrap.Tabs,
            { id: 'tabs1', defaultActiveKey: 1 },
            _react2.default.createElement(
              _reactBootstrap.Tab,
              { eventKey: 1, title: 'Role' },
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                null,
                this.props.role
              )
            ),
            _react2.default.createElement(
              _reactBootstrap.Tab,
              { eventKey: 2, title: 'Contact Details' },
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              mail,
              website,
              fb,
              youtube,
              _react2.default.createElement(
                'p',
                { className: 'fa fa-phone' },
                '  ' + this.props.contact.c_num + '  (' + this.props.contact.c_name + ', Convener)'
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                { className: 'fa fa-phone' },
                '  ' + this.props.contact.dc_num + ' (' + this.props.contact.dc_name + ', Deputy Convener)'
              ),
              _react2.default.createElement('br', null)
            ),
            this.props.reports && _react2.default.createElement(
              _reactBootstrap.Tab,
              { eventKey: 3, title: 'Activities' },
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                _reactBootstrap.ListGroup,
                null,
                this.props.reports.map(function (item) {
                  return _react2.default.createElement(
                    _reactBootstrap.OverlayTrigger,
                    { placement: 'top', overlay: tooltip },
                    _react2.default.createElement(
                      _reactBootstrap.ListGroupItem,
                      { header: item.event, href: item.link, target: '_blank' },
                      _react2.default.createElement(
                        'p',
                        null,
                        _react2.default.createElement('br', null),
                        _react2.default.createElement('i', { className: 'fa fa-clock-o grey' }),
                        ' ' + item.date
                      )
                    )
                  );
                })
              )
            )
          )
        );
      }
    }]);
    return CommitteePanel;
  }(_react2.default.Component);
  
  exports.default = CommitteePanel;

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _clubs = __webpack_require__(123);
  
  var _clubs2 = _interopRequireDefault(_clubs);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = {
    path: '/clubs',
  
    action: function action() {
      return _react2.default.createElement(_clubs2.default, null);
    }
  };

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _getPrototypeOf = __webpack_require__(29);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(30);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(31);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(32);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(33);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactBootstrap = __webpack_require__(39);
  
  var _lodash = __webpack_require__(49);
  
  var _lodash2 = _interopRequireDefault(_lodash);
  
  var _clubsInfo = __webpack_require__(124);
  
  var _clubsInfo2 = _interopRequireDefault(_clubsInfo);
  
  var _ClubsPanel = __webpack_require__(125);
  
  var _ClubsPanel2 = _interopRequireDefault(_ClubsPanel);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var title = 'Clubs';
  
  var Clubs = function (_React$Component) {
    (0, _inherits3.default)(Clubs, _React$Component);
  
    function Clubs(props, context) {
      (0, _classCallCheck3.default)(this, Clubs);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (Clubs.__proto__ || (0, _getPrototypeOf2.default)(Clubs)).call(this, props));
  
      context.setTitle(title);
      _this.handleClick = _this.handleClick.bind(_this);
      return _this;
    }
  
    (0, _createClass3.default)(Clubs, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-lg-12' },
              _react2.default.createElement(
                _reactBootstrap.PageHeader,
                null,
                _react2.default.createElement('i', { className: 'fa fa-gears' }),
                '\xA0\xA0SBG Clubs'
              )
            )
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            _reactBootstrap.PanelGroup,
            null,
            _clubsInfo2.default.map(function (item) {
              return _react2.default.createElement(_ClubsPanel2.default, {
                header: item.header,
                role: item.role,
                contact: item.contact,
                reports: _lodash2.default.get(item, 'reports', null),
                bsStyle: item.style
              });
            })
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement('br', null)
        );
      }
    }, {
      key: 'handleClick',
      value: function handleClick() {}
    }]);
    return Clubs;
  }(_react2.default.Component);
  
  Clubs.contextTypes = { setTitle: _react.PropTypes.func.isRequired };
  exports.default = Clubs;

/***/ }),
/* 124 */
/***/ (function(module, exports) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = [{
    header: 'Press Club',
    style: 'success',
    role: 'As the journalism cell of DAIICT, The Press Club strives to give voice to the student community and aspires to be a podium to lodge campus musings in all its moods. To achieve its maxim, The Press Club engages in a number of  journalistic undertakings in the campus. Its principal product is Entelechy, DAIICT’s only campus magazine. Entelechy, the student-run magazine of DA, has over the years and over its editions, morphed into a voice, a power, a passion and an endeavor in the verve of those it envelops, and that is what makes Entelechy more than a magazine. Entelechy is, to us, a concept of volition; it is the autonomy of thought and an enticement to ingenuity. We, at the Press Club, aspire to make a difference in the littlest way we can; if not in the big, wide world yet, in the world around you and me.',
    contact: {
      c_name: 'Kevin Vegda',
      c_num: '+91 7405587871',
      webmail_id: 'pressclub@daiict.ac.in',
      website: 'http://entelechy.daiict.ac.in'
    },
    reports: [{
      event: 'Freshers’ Creative Writing Contest',
      link: 'https://docs.google.com/document/d/1G5CJyp8UePGGUwoabyV4co1iB885YFz7y6D59B0len0/edit',
      date: '19th October, 2017'
    }]
  }, {
    header: 'Debate Club',
    style: 'info',
    role: 'We are a group of people who like to talk, who believe in the power of words to bring about change, who promote dissent and discussion. We do this by conducting weekly sessions of Parliamentary Debating and Group Discussions on all kinds of topics ranging from politics to movies to morality and ethics. We also have Open Forum Discussions, a platform for the faculty and students to interact on topics affecting both as well as MUNs (Model United Nations). The Debate Club strives to inculcate a culture of dissension while everyone has a good time.',
    contact: {
      c_name: 'Aarushi Sanghani',
      c_num: '+91 9099080251',
      webmail_id: 'debate_club@daiict.ac.in'
    }
  }, {
    header: 'Dance Club',
    style: 'default',
    role: 'Dance Club or DADC as it is popularly known, tries to cater to all kind of dancing instincts of students. We are not professional dancers, just amateurs trying to shake a leg here and there. We have grown over the years with our regional and national level wins. We also organize workshops from time to time to engage students and make them feel the exhilarating effects of dancing. We at Dance Club, choreograph, dance, practice hard and put our best foot forward.',
    contact: {
      c_name: 'Geolangsat Narzary',
      c_num: '+91 8638278998',
      webmail_id: 'danceclub@daiict.ac.in'
    },
    reports: [{
      event: 'Dance Club Orientation',
      link: 'https://drive.google.com/file/d/0B26hyu0ToHtcTWwwdGQ1bEdQVW8/view',
      date: '18th August, 2017'
    }]
  }, {
    header: 'Music Club',
    style: 'danger',
    role: 'Dance Club or DADC as it is popularly known, tries to cater to all kind of dancing instincts of students. We are not professional dancers, just amateurs trying to shake a leg here and there. We have grown over the years with our regional and national level wins. We also organize workshops from time to time to engage students and make them feel the exhilarating effects of dancing. We at Dance Club, choreograph, dance, practice hard and put our best foot forward.',
    contact: {
      c_name: 'Rudra Chandak',
      c_num: '+91 9173244011',
      webmail_id: 'music_club@daiict.ac.in',
      facebook: 'https://www.facebook.com/musicclubdaiict/',
      youtube: 'http://www.youtube.com/channel/UC688bugvcKm8A2tFklL0U-A'
    },
    reports: [{
      event: 'Random Jams',
      link: 'https://docs.google.com/document/d/12IuXG6xUIcTZx8ym8Q4_eWWp-y0oUNlEuXvoRSzoIX0/edit',
      date: '26th October, 2017'
    }, {
      event: 'Auditions for Outstation (Antaragni 2017)',
      link: 'https://docs.google.com/document/d/1PzjtcRtAqKnoWWY8bUWfrmQ_r1BrIM4vevBGQLnqo58/edit',
      date: '7th - 8th September, 2017'
    }, {
      event: 'Teacher’s Day Music Club Auditions',
      link: 'https://docs.google.com/document/d/1yDTg4Uf-TwK1SQpZnGyMLHl8I3x7mxR75ag-b6ruBZU/edit',
      date: '20th August, 2017'
    }, {
      event: 'Music Club Orientation and Music Nite Live',
      link: 'https://docs.google.com/document/d/1JF95VZmY8Wzi9jiCEqJOU2pklQ_8WgUT6LDVHexSoG8/edit',
      date: '18th August, 2017'
    }]
  }, {
    header: 'DA-IICT Theatre Group',
    style: 'warning',
    role: 'DAIICT Theatre Group, aka DTG, is a club that conducts and administers theatrics events of DAIICT. There are no bounds to the form of theatre that we perform, having ventured through stage plays, nukkad natak, mime, mono-acting, mimicries, musical plays, and what not, for which numerous learning and performing workshops are regularly conducted. We don’t only have performers, but also wonderful script writers, directors, composers, etc., but first, we are a group of crazy and dedicated learners. We live our  hearts out on the stage. The club has always been equally enthusiastic to welcome the new faces as it is with present members. In fact the main essence of DTG is being an open club and thus it is a family to us rather than just a club. Life\'s a stage and we all are actors.',
    contact: {
      c_name: 'Labdhi Shah',
      c_num: '+91 9429028809',
      webmail_id: 'theatres@daiict.ac.in'
    },
    reports: [{
      event: 'Ramleela Play & Spoken-word',
      link: 'https://docs.google.com/document/d/11_15BbvU-xWt9nTjHceKT68A_MFNjoawA7_2M0-Qxco/edit?usp=sharing',
      date: '28th September, 2017'
    }, {
      event: 'Stories (2nd performance with Gender Studies Group)',
      link: 'https://docs.google.com/document/d/1x4-u6xi7MwVXPsmVpiIRhfn9GG1hW6_SF0bIJpgkFvU/edit?usp=sharing',
      date: '14th September, 2017'
    }, {
      event: 'Teachers’ Day Play',
      link: 'https://docs.google.com/document/d/1JsVk71PX3XOQpLFXiunG68fwl8JYnpMhsyYwyjxrWow/edit?usp=sharing',
      date: '5th September, 2017'
    }, {
      event: 'DTG Orientation',
      link: 'https://docs.google.com/document/d/1oTLUwRqWyG4fwnS_a77Wv2tG3hxn9mmemgJ-fHHfM7M/edit?usp=sharing',
      date: '16th August, 2017'
    }, {
      event: 'Gender Sensitization Play',
      link: 'https://docs.google.com/document/d/1eVWcJIeEHnISR4b1E4skTQsdUX6Vr9Y--YnyspTHkx0/edit?usp=sharing',
      date: '10th August, 2017'
    }]
  }, {
    header: 'Research Club',
    style: 'danger',
    role: 'DA-IICT boasts of being a research-oriented institute and the Research Club aims to work to foster a community within the college for those interested in research. It works to help those interested in research, particularly starting at the Bachelor level; be it to find others working in similar areas or to organize on-campus seminars and other opportunities for students to get to know the kind of research that is prevalent. The Research Club would eventually like to be a small cog that enables the functioning of an active and interdisciplinary research community within DA-IICT.',
    contact: {
      c_name: 'Vaibhav Patel',
      c_num: '+91 7874038883',
      webmail_id: 'research_club@daiict.ac.in',
      google: 'https://groups.google.com/forum/?utm_medium=email&utm_source=footer#!forum/research-club-daiict'
    },
    reports: [{
      event: 'Introduction to Rygbee Challenge',
      link: 'https://docs.google.com/document/d/1VTvsFV8Mm2lXbb1Q0goOXfCk417nsP5v3zoEOAi4SJo/edit',
      date: '3rd October, 2017'
    }, {
      event: 'Visit to ISRO, Ahmedabad',
      link: 'https://docs.google.com/document/d/1AsJUMJzjQkDUtkH6oZfjCL63UCY0ngvNBYwp7G5MkPw/edit',
      date: '20th September, 2017'
    }, {
      event: 'Intel AI academy workshop on artificial intelligence',
      link: 'https://docs.google.com/document/d/15P3HtAHPqKXN3eZGQ5iVtDW4i7msJMOTnU5i9jduTnM/edit',
      date: '12th September, 2017'
    }, {
      event: 'Google Faculty Research Award',
      link: 'https://docs.google.com/document/d/1MFwyTABYTLIYaKvh6BSZmTLbG1r-A5e2gMw1ZIlJRWQ/edit',
      date: '12th September, 2017'
    }, {
      event: 'General introduction session',
      link: 'https://docs.google.com/document/d/1Bvte_Y_1RTLPnHtVu4UY7e_xU0mEsy_egoYDrwTUm60/edit',
      date: '23rd August, 2017'
    }]
  }, {
    header: 'Chess Club',
    style: 'info',
    role: 'Chess club focuses on enhancing the skills of the students having interest in chess. We provide them proper guidance about tactics and other aspects of the game ,We  encourage them to develop their skills and provide them platform by conducting various tournaments and making them participate in inter college tournaments. Chess club focuses on enhancing the skills of the interested members having interest in chess.',
    contact: {
      c_name: 'Akar Sheth',
      c_num: '+91 9724164467',
      webmail_id: 'chess_club@daiict.ac.in'
    }
  }, {
    header: 'Sambhav',
    style: 'success',
    role: '"Sambhav means possible. Sambhav, at DA-IICT is a group of students with a motive or interest or urge to bring about some positive change in the society. Sambhav organises various activities throughout the year. Book Sale is one of our prime activities where we sell old unused books at heavily discounted prices to students who wish to purchase them. We organise visits to nearby Orphanage and Deaf and Dumb School. These visits make students aware of the society they live in, making them more attached to various sections of the society as well as generate a sense of responsibility and connectedness. Another major event which we organise is the Blood Donation Camp where we organise a camp in the college premise itself, giving an opportunity the young budding youth of today a chance to serve the society. Sambhav strives to develop a positive and empathetic attitude in students towards the society which they are or will be a part of. Sambhav grows, adopts and adapts dynamically, thus attaining the sense of \'We Make It Sambhav\'."',
    contact: {
      c_name: 'Rudra Chandak',
      c_num: '+91 9173244011',
      webmail_id: 'sambhav@daiict.ac.in'
    },
    reports: [{
      event: 'Visit to Old Age Home',
      link: 'https://docs.google.com/document/d/1ZaBfd6CQ5eE3x-gEXcNEf3J8XKGtDOt9HJPHoIzeVfU/edit',
      date: '31st October, 2017'
    }, {
      event: 'Blood Donation Camp',
      link: 'https://docs.google.com/document/d/1ZfPWLrXBrfrZFTu61AgJQAdNEGNDSOAQ0q7MYMtdnY8/edit?usp=sharing',
      date: '3rd October, 2017'
    }]
  }, {
    header: 'Programming Club',
    style: 'success',
    role: 'Programming Club has been working to help people explore their hidden passion for programming. We help students understand some basic concepts and few who stick around enjoy and master the art competitive programming. This includes solving complex problems under some time and space constraints, which is a valued skill in the field of computer science. Our philosophy is to make programming a fun activity where students come up with problems and discuss solutions out of their interest. We regularly organize contests and discussion sessions to encourage participation of the student community. We actively promote students to participate in algorithmically challenging competitions like ACM ICPC, Facebook Hacker-cup, Google Code Jam, Codechef Snackdown, TCS Codevita, Hackerearth Collegiate Cup and various others. Students of our club have represented DA-IICT at various such competitions. Programming club continuously strives to uphold and further raise the bar for the programming capabilities of students at DA-IICT.',
    contact: {
      c_name: 'Smit Patel',
      c_num: '+91 9512679129',
      webmail_id: 'programming-club@daiict.ac.in'
    }
  }, {
    header: 'Film Club',
    style: 'info',
    role: 'By far the most celebrated club, the Film Club occupies a special place in every student\'s heart. The club was started by a few ardent movie enthusiasts with the aim of providing regular entertainment to DA-IICTians in the form of interesting as well as enlightening cinema. The club screens a movie the night before every regular holiday (Saturdays and Sundays) and Screens Matches(Cricket, Football,etc) at the Open Air Theatre (OAT). The Film Club has a wide range of movies - 250 English, 170 Hindi and 25 Other, and is also continually being increased regularly. Bears ample testimony to the fact that the club can boast not only of quantity, but also of quality. Keeping all interests in mind, the club has something for each student of DAIICT. From \'Shutter Island\' to \'Guide\', from \'3 Idiots\' to \'Devdas\', the movies cater to multiple and varied backgrounds. DA-IICT students are not merely spectators but knowledgeable about cinema.',
    contact: {
      c_name: 'Vikas Parmar',
      c_num: '+91 7405546301',
      webmail_id: 'film_club@daiict.ac.in'
    }
  }, {
    header: 'Google Developers\' Group',
    style: 'default',
    role: 'We\'re a chapter of Google Developer Groups, which has numerous chapters all over the globe. DA-IICT is one of the very few colleges in India which has its own chapter. We are a group of technology enthusiasts who aim to inculcate a healthy developer culture in our college community, by acquainting people with the most essential and also the latest Tools and Technologies. Albeit our focus primarily revolves around technologies developed by Google, we do swim into other open source technologies such as Git and Beautiful Soup. We at GDG, welcome people who have passion for technology and want to develop something tangible.',
    contact: {
      c_name: 'Rishi Shah',
      c_num: '+91 9824513046',
      webmail_id: 'gdg@daiict.ac.in',
      facebook: 'https://www.facebook.com/gdgdaiict/'
    }
  }, {
    header: 'IEEE Student Branch',
    style: 'danger',
    role: 'IEEE student branch of DAIICT focuses on enhancing the learning experience of the student community. IEEE\'s main focus is to foster technological innovation and excellence for the benefit of humanity. We focus on conducting social and technical activities for students and encourage them to take full advantage of IEEE membership like scholarships, competitions, seminar and conference grants. We have 2 Special Interest Groups (SIG): SIG- Moblie Apps and SIG- Embedded. SIG- Moblie Apps conduct weekly workshops on Android application development and SIG- Embedded conducts weekly sessions on embedded hardware like Arduino. We IEEE SB members at DA-IICT regularly conduct workshops such as line follower and manual robotics workshop. Women in Engineering(WIE) is also a part of IEEE. It is dedicated to promoting women engineers and scientists. It is a platform where men and women collectively use their diverse talents to innovate for the benefit of humanity. Industrial applications society is a global society of IEEE, which provides industrial exposure to students. We boast our technical fest called i.Fest which we organize every year. It consists of various challenging and competitive events where students from in and around DA-IICT come to participate. We strive at creating technology for people and people for technology.',
    contact: {
      c_name: 'Harsh Thakkar',
      c_num: '+91 8866821682',
      webmail_id: 'ieee@daiict.ac.in',
      website: 'http://ieee.daiict.ac.in/ieee2017/'
    }
  }, {
    header: 'Khelaiya Club',
    style: 'warning',
    role: '"Folk dance is where the culture breaths." Khelaiya club- DAIICT provides a medium and platform to express through the art of folk dance and thus strives to keep the culture of folk dance alive. The khelaiya club organises workshops for the Garba enthusiasts to engage them in the subtle art of Garba during Navratri. The Khelaiya club also participates in various events throughout the year. We at Khelaiya club, desire to bring together people and help them live their dance dream.',
    contact: {
      c_name: 'Vaidehi Darji',
      c_num: '+91 9974048310',
      webmail_id: 'khelaiya_club@daiict.ac.in'
    },
    reports: [{
      event: 'Salsa Garba 2017',
      link: 'https://docs.google.com/document/d/1uSK9bx61G7OQBldcpaPORbdqaVWDEu3Ei57GQsNcJUI/edit',
      date: '6th September, 2017'
    }, {
      event: 'Orientation',
      link: 'https://docs.google.com/document/d/1zVNoPUxs7o0hBoTo5wsso1DYcnT8apB_f0E-dhRdF2U/edit',
      date: '5th September, 2017'
    }]
  }, {
    header: 'Cubing Club',
    style: 'danger',
    role: 'It is a community by and for people interested in solving Rubik’s Cube and its other cubic and non-cubic variants. We promote cubing by speedcubing sessions and organizing various competitions(general and WCA affiliated).',
    contact: {
      c_name: 'Abhijeet Ghodgaonkar',
      c_num: '+91 9962648741',
      webmail_id: 'cubing_club@daiict.ac.in',
      facebook: 'https://www.facebook.com/cube221013/',
      youtube: 'https://m.youtube.com/#/channel/UCOf-53BLafYq09Nti81azjw'
    },
    reports: [{
      event: 'Rubik’s Cube Mosaic',
      link: 'https://docs.google.com/document/d/1YpauC92Abl3yEnjGBgI9KpgVUwxF4jccYflO5xQpiLU/edit?usp=sharing',
      date: '5th September, 2017'
    }]
  }, {
    header: 'Webkit Club',
    style: 'info',
    role: 'The WebKit club is  a student community of  Web development enthusiasts, interested both in creating and maintaining codes as well as building and expanding a stronger community of like minded students. As the name suggests ,we are about  "all things web". The club motivates budding  Web developers by organizing technical sessions and camps to introduce and help them learn new Web Technologies like HTML5, CSS3, JavaScript, ReactJS, VueJS, Firebase and many more. Our premier event, The WebDev Camp, is organized every semester for students interested in learning Web Development by helping them build a production ready application from scratch.',
    contact: {
      c_name: 'Ananmika Modi',
      c_num: '+91 9826187735',
      webmail_id: '201401045@daiict.ac.in'
    }
  }, {
    header: 'Electronics Hobby Club',
    style: 'success',
    role: 'We, the EHC, as a group of enthusiastic electronics\' students aim to maintain and  grow the culture of electronics in the campus of DA-IICT. We believe that for excellence in any field, it is necessary that student has strong roots in terms of knowledge. With this idea, we assume basic electronic sessions for freshers in electronics. These hands on sessions, not only help students to have a thorough understanding of the subject, but also help them developing better understanding of what they are studying in the lectures. For students, who are thrilled by electronics or have amazing innovative ideas for projects, we support them for their adventures, in terms of resources, and guidance. We also have our won teams keep working on interesting projects. Apart from these ventures, we prepare freshers to participate in various university electronics competitions. With all these efforts, we thrive to motivate students, as a whole community to develop a fresh perspective for electronics.',
    contact: {
      c_name: 'Harshul Vaishnav',
      c_num: '+91 7600369397',
      webmail_id: 'ehc@daiict.ac.in'
    },
    reports: [{
      event: 'EHC Activities and Sessions',
      link: 'https://docs.google.com/document/d/1CAGEmaIVExsyZH5mtgia38uMsvXiUsyrnKtxwxjXhP8/edit?usp=sharing',
      date: '4th September - 1st October, 2017'
    }]
  }, {
    header: 'Heritage Club',
    style: 'success',
    role: 'Our mission is to “Have every child, experience the inspiration and mysticism embodied in Indian and world heritage”. We organize different events, categorized into two parts: local events and other events. Local events include workshops, training, demonstrations and other techniques to get the student an idea on the cultural part of art forms. We believe every child has the capability of some or the other art form. We not only include events on singing and dancing, but also take into consideration the other art forms such as painting, pottery, poetry etc.',
    contact: {
      c_name: 'Medha Mehta',
      c_num: '+91 8460707991',
      webmail_id: 'heritage@daiict.ac.in'
    },
    reports: [{
      event: 'Gotipua',
      link: 'https://drive.google.com/file/d/0B-GiJBFUW_NNZFhQMXRpQnJ4b0U/view',
      date: '17th August, 2017'
    }]
  }, {
    header: 'Excursion Club',
    style: 'info',
    role: 'Excursions are the activities which every engineering student is most awaited of. These become the most memorable moments of one’s life when we travel with our friends. We, the Excursion club of DA-IICT plan and organise such trips for you and gives you a stack of unforgettable moments you have spent with your pals.',
    contact: {
      c_name: 'Paramjeet Desai',
      c_num: '+91 8866526650',
      webmail_id: 'excursion_club@daiict.ac.in'
    }
  }, {
    header: 'Microsoft Student Technical Club',
    style: 'default',
    role: 'We are individuals who come together and share common interest putting our ideas into existence in order to contribute to the Microsoft Community. Many people have genuine ideas related to app and web development but there is no proper platform provided to them. We, as MSTC, come here and help them give the right environment to inculcate their ideas and develop for Microsoft. We aim to do this in as exciting and simplified manner as possible. If you want to find answers to your questions, share ideas, solve problems, or whatever may be your goal, MSTC is here to help you get more out of your ideas and technology. If you need help browse our club, or post a question and our community members and volunteers can help you understand the problem with advice or step by-step instructions. We will also come up with various events and competitions which would help you to create a strong foundation for your dream competitions like those of Imagine Cup. So basically, we are here to make you experience the windows development environment and encourage you to develop and contribute towards the same.',
    contact: {
      c_name: 'Darsh Vajaria',
      c_num: '+91 7228899400',
      webmail_id: 'microsoftclub@daiict.ac.in',
      website: 'http://microsoftclubdaiict.azurewebsites.net',
      facebook: 'https://www.facebook.com/mstcatdaiict'
    },
    reports: [{
      event: 'Cloud Computing Session',
      link: 'https://1drv.ms/w/s!AnpGtjqhunmngltTC8e7anVavYiF',
      date: '6th September, 2017'
    }, {
      event: 'Cognitive Service Workshop',
      link: 'https://1drv.ms/w/s!AnpGtjqhunmngx67N_UIwQmErCnp',
      date: '5th September, 2017'
    }]
  }, {
    header: 'Photography and Movie Making Club',
    style: 'danger',
    role: 'PMMC or Photography and moviemaking club as the name suggest we are the photographer and video makers. We, as the members of the club, seek to display our love of photography through capturing our college’s events and festivals. To encourage people we organize Photo and Design Exhibitions, Photography walks, sessions on photography and film making, also tries to provide hands on sessions. PMMC strives to capture the happiest moments of our college life.',
    contact: {
      c_name: 'Kishan Patel',
      c_num: '+91 9714953058',
      webmail_id: 'moviemaking.daiict@gmail.com',
      youtube: 'https://www.youtube.com/user/MovieMakinClubDAIICT',
      facebook: 'https://www.facebook.com/PMMCDaiict'
    }
  }, {
    header: 'Headrush - Quizzing Club',
    style: 'default',
    role: 'Headrush is the quizzing club of DA-IICT. We are a group of quizzing enthusiasts that aim to not only maintain but perpetually ascertain the growth of the level of comepetitive quizzing in the college while providing a platform for leisurely quizzers to enjoy intense and entertataining weekly quiz sessions ranging across a plethora of topics like ent, music, lit, sci-tech, biz etc.',
    contact: {
      c_name: 'Aniket Gajjar',
      c_num: '+91 9099939989',
      webmail_id: 'quizzing@daiict.ac.in'
    },
    reports: [{
      event: 'Mega Quiz 2',
      link: 'https://drive.google.com/open?id=0B_dv82_sblOKX1FZREh0eGdiSnM',
      date: '5th October, 2017'
    }, {
      event: 'Mega Quiz 1',
      link: 'https://drive.google.com/file/d/0B_dv82_sblOKSU5ySlVKd0VZMVk/view?usp=drivesdk',
      date: '21st September, 2017'
    }]
  }, {
    header: 'Radio Club',
    style: 'danger',
    role: 'Radio Club is a small group of people, who collectively try to emulate the real life radio shows, allowing people to speak their minds and have fun meanwhile. We have a few RJs, who talk about different topics and current events going on in the college. We also control the cafeteria music system, and stream live music 24*7 on our IP so people can stream it.',
    contact: {
      c_name: 'Kunal Gohel',
      c_num: '+91 9714827200',
      webmail_id: 'radio@daiict.ac.in'
    }
  }];

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _getPrototypeOf = __webpack_require__(29);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(30);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(31);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(32);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(33);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactBootstrap = __webpack_require__(39);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var tooltip = _react2.default.createElement(
    _reactBootstrap.Tooltip,
    { id: 'tooltip' },
    _react2.default.createElement(
      'strong',
      null,
      'Click to view the report!'
    )
  );
  
  var ClubsPanel = function (_React$Component) {
    (0, _inherits3.default)(ClubsPanel, _React$Component);
  
    function ClubsPanel() {
      (0, _classCallCheck3.default)(this, ClubsPanel);
      return (0, _possibleConstructorReturn3.default)(this, (ClubsPanel.__proto__ || (0, _getPrototypeOf2.default)(ClubsPanel)).apply(this, arguments));
    }
  
    (0, _createClass3.default)(ClubsPanel, [{
      key: 'render',
      value: function render() {
        var mail = this.props.contact.webmail_id && _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'a',
            { href: 'mailto:#', target: '_blank', rel: 'noopener noreferrer', className: 'fa fa-envelope black-link' },
            '  ' + this.props.contact.webmail_id
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement('br', null)
        );
        var google = this.props.contact.google && _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'a',
            { href: this.props.contact.google, target: '_blank', rel: 'noopener noreferrer', className: 'fa fa-google black-link' },
            '  ' + this.props.contact.google
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement('br', null)
        );
        var fb = this.props.contact.facebook && _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'a',
            { href: this.props.contact.facebook, target: '_blank', rel: 'noopener noreferrer', className: 'fa fa-facebook-square black-link' },
            '  ' + this.props.contact.facebook
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement('br', null)
        );
        var youtube = this.props.contact.youtube && _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'a',
            { href: this.props.contact.youtube, target: '_blank', rel: 'noopener noreferrer', className: 'fa fa-youtube-play black-link' },
            '  ' + this.props.contact.youtube
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement('br', null)
        );
        var website = this.props.contact.website && _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'a',
            { href: this.props.contact.website, target: '_blank', className: 'fa fa-link black-link' },
            '  ' + this.props.contact.website
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement('br', null)
        );
  
        return _react2.default.createElement(
          _reactBootstrap.Panel,
          { bsStyle: this.props.bsStyle, collapsible: true, header: this.props.header, eventKey: '1' },
          _react2.default.createElement(
            _reactBootstrap.Tabs,
            { id: 'tabs1', defaultActiveKey: 1 },
            _react2.default.createElement(
              _reactBootstrap.Tab,
              { eventKey: 1, title: 'Role' },
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                null,
                this.props.role
              )
            ),
            _react2.default.createElement(
              _reactBootstrap.Tab,
              { eventKey: 2, title: 'Contact Details' },
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              mail,
              website,
              google,
              fb,
              youtube,
              _react2.default.createElement(
                'p',
                { className: 'fa fa-phone' },
                '  ' + this.props.contact.c_num + '  (' + this.props.contact.c_name + ', Convener)'
              ),
              _react2.default.createElement('br', null)
            ),
            this.props.reports && _react2.default.createElement(
              _reactBootstrap.Tab,
              { eventKey: 3, title: 'Activities' },
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                _reactBootstrap.ListGroup,
                null,
                this.props.reports.map(function (item) {
                  return _react2.default.createElement(
                    _reactBootstrap.OverlayTrigger,
                    { placement: 'top', overlay: tooltip },
                    _react2.default.createElement(
                      _reactBootstrap.ListGroupItem,
                      { header: item.event, href: item.link, target: '_blank' },
                      _react2.default.createElement(
                        'p',
                        null,
                        _react2.default.createElement('br', null),
                        _react2.default.createElement('i', { className: 'fa fa-clock-o grey' }),
                        ' ' + item.date
                      )
                    )
                  );
                })
              )
            )
          )
        );
      }
    }]);
    return ClubsPanel;
  }(_react2.default.Component);
  
  exports.default = ClubsPanel;

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _annualfests = __webpack_require__(127);
  
  var _annualfests2 = _interopRequireDefault(_annualfests);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = {
    path: '/annualfests',
  
    action: function action() {
      return _react2.default.createElement(_annualfests2.default, null);
    }
  };

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _getPrototypeOf = __webpack_require__(29);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(30);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(31);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(32);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(33);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactBootstrap = __webpack_require__(39);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var title = 'Annual Fests';
  var synapse = __webpack_require__(128);
  var concours = __webpack_require__(129);
  var ifest = __webpack_require__(130);
  
  var displayBlank = function (_React$Component) {
    (0, _inherits3.default)(displayBlank, _React$Component);
  
    function displayBlank(props, context) {
      (0, _classCallCheck3.default)(this, displayBlank);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (displayBlank.__proto__ || (0, _getPrototypeOf2.default)(displayBlank)).call(this, props));
  
      context.setTitle(title);
      _this.handleClickConcours = _this.handleClickConcours.bind(_this);
      _this.handleClickIfest = _this.handleClickIfest.bind(_this);
      _this.handleClickSynapse = _this.handleClickSynapse.bind(_this);
      return _this;
    }
  
    (0, _createClass3.default)(displayBlank, [{
      key: 'handleClickIfest',
      value: function handleClickIfest() {
        window.open('http://http://ieee.daiict.ac.in/ifest17', '_blank');
      }
    }, {
      key: 'handleClickConcours',
      value: function handleClickConcours() {
        window.open('http://concours.daiict.ac.in', '_blank');
      }
    }, {
      key: 'handleClickSynapse',
      value: function handleClickSynapse() {
        window.open('http://synapse.daiict.ac.in', '_blank');
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-lg-12' },
              _react2.default.createElement(
                _reactBootstrap.PageHeader,
                null,
                _react2.default.createElement('i', { className: 'fa fa-heart' }),
                '\xA0\xA0Annual Fests'
              )
            )
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            _reactBootstrap.Carousel,
            { className: 'carousel-ext' },
            _react2.default.createElement(
              _reactBootstrap.Carousel.Item,
              null,
              _react2.default.createElement(
                _reactBootstrap.Carousel.Caption,
                null,
                _react2.default.createElement(
                  'h2',
                  null,
                  'Synapse'
                ),
                _react2.default.createElement(
                  'h3',
                  null,
                  'Annual Cultural Fest'
                ),
                _react2.default.createElement('br', null),
                _react2.default.createElement('br', null),
                _react2.default.createElement('br', null),
                _react2.default.createElement('br', null),
                _react2.default.createElement('br', null),
                _react2.default.createElement('br', null),
                _react2.default.createElement('br', null),
                _react2.default.createElement('br', null),
                _react2.default.createElement('br', null),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                  _reactBootstrap.Button,
                  { onClick: this.handleClickSynapse },
                  'Explore More'
                ),
                _react2.default.createElement('br', null),
                _react2.default.createElement('br', null),
                _react2.default.createElement('br', null)
              ),
              _react2.default.createElement('img', { width: 1120, height: 500, alt: '1120x500', src: synapse })
            ),
            _react2.default.createElement(
              _reactBootstrap.Carousel.Item,
              null,
              _react2.default.createElement(
                _reactBootstrap.Carousel.Caption,
                null,
                _react2.default.createElement(
                  'h2',
                  null,
                  'Concours'
                ),
                _react2.default.createElement(
                  'h3',
                  null,
                  'Annual Sports Fest'
                ),
                _react2.default.createElement('br', null),
                _react2.default.createElement('br', null),
                _react2.default.createElement('br', null),
                _react2.default.createElement('br', null),
                _react2.default.createElement('br', null),
                _react2.default.createElement('br', null),
                _react2.default.createElement('br', null),
                _react2.default.createElement('br', null),
                _react2.default.createElement('br', null),
                _react2.default.createElement('br', null),
                _react2.default.createElement('br', null),
                _react2.default.createElement('br', null),
                _react2.default.createElement('br', null),
                _react2.default.createElement('br', null),
                _react2.default.createElement('br', null),
                _react2.default.createElement('br', null),
                _react2.default.createElement('br', null),
                _react2.default.createElement('br', null),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                  _reactBootstrap.Button,
                  { onClick: this.handleClickConcours },
                  'Explore More'
                ),
                _react2.default.createElement('br', null),
                _react2.default.createElement('br', null),
                _react2.default.createElement('br', null)
              ),
              _react2.default.createElement('img', { width: 1120, height: 500, alt: '1120x500', src: concours })
            ),
            _react2.default.createElement(
              _reactBootstrap.Carousel.Item,
              null,
              _react2.default.createElement(
                _reactBootstrap.Carousel.Caption,
                null,
                _react2.default.createElement(
                  'h2',
                  null,
                  'I.Fest'
                ),
                _react2.default.createElement(
                  'h3',
                  null,
                  'Annual Technical Fest'
                ),
                _react2.default.createElement('br', null),
                _react2.default.createElement('br', null),
                _react2.default.createElement('br', null),
                _react2.default.createElement('br', null),
                _react2.default.createElement('br', null),
                _react2.default.createElement('br', null),
                _react2.default.createElement('br', null),
                _react2.default.createElement('br', null),
                _react2.default.createElement('br', null),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                  _reactBootstrap.Button,
                  { onClick: this.handleClickIfest },
                  'Explore More'
                ),
                _react2.default.createElement('br', null),
                _react2.default.createElement('br', null)
              ),
              _react2.default.createElement('img', { width: 1120, height: 500, alt: '1120x500', src: ifest })
            )
          ),
          _react2.default.createElement('br', null)
        );
      }
    }]);
    return displayBlank;
  }(_react2.default.Component);
  
  displayBlank.contextTypes = { setTitle: _react.PropTypes.func.isRequired };
  exports.default = displayBlank;

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "routes/dashboardPages/annualfests/synapse.jpg?4bcbff009f4ec32c2ae1fd3630c47305";

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "routes/dashboardPages/annualfests/concours.jpg?00d7b1c0053e5200aa3d5f2fa26fe0bc";

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "routes/dashboardPages/annualfests/ifest.jpg?a245d69e69c0dbee044fc38f97d4875e";

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _minutes = __webpack_require__(132);
  
  var _minutes2 = _interopRequireDefault(_minutes);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = {
    path: '/minutes',
  
    action: function action() {
      return _react2.default.createElement(_minutes2.default, null);
    }
  };

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _getPrototypeOf = __webpack_require__(29);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(30);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(31);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(32);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(33);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactBootstrap = __webpack_require__(39);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var title = 'Minutes of Meetings';
  
  var Minutes = function (_React$Component) {
    (0, _inherits3.default)(Minutes, _React$Component);
  
    function Minutes(props, context) {
      (0, _classCallCheck3.default)(this, Minutes);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (Minutes.__proto__ || (0, _getPrototypeOf2.default)(Minutes)).call(this, props));
  
      context.setTitle(title);
      return _this;
    }
  
    (0, _createClass3.default)(Minutes, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-lg-12' },
              _react2.default.createElement(
                _reactBootstrap.PageHeader,
                null,
                _react2.default.createElement('i', { className: 'fa fa-clock-o' }),
                '\xA0\xA0Minutes of Meetings'
              )
            )
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            _reactBootstrap.Panel,
            {
              header: _react2.default.createElement(
                'span',
                null,
                _react2.default.createElement(
                  'h4',
                  null,
                  _react2.default.createElement('i', { className: 'fa fa-clock-o fa-fw' }),
                  ' Timeline'
                )
              )
            },
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'ul',
                { className: 'timeline' },
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    'div',
                    { className: 'timeline-badge success' },
                    _react2.default.createElement('i', { className: 'fa fa-check' })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'timeline-panel' },
                    _react2.default.createElement(
                      'div',
                      { className: 'timeline-heading' },
                      _react2.default.createElement(
                        'h4',
                        { className: 'timeline-title' },
                        'SBG General Meet 1 (2017-18)'
                      ),
                      _react2.default.createElement(
                        'p',
                        null,
                        _react2.default.createElement(
                          'small',
                          { className: 'text-muted' },
                          _react2.default.createElement('i', { className: 'fa fa-clock-o' }),
                          ' 19th September, 2017'
                        )
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'timeline-body' },
                      _react2.default.createElement(
                        'a',
                        { target: '_blank', rel: 'noopener norefferer', href: 'https://docs.google.com/document/d/1dnZZpukHTwIMxsyYRd04_HJPysc72d1Zpk-EBKemwVw/edit?usp=sharing' },
                        'Click to view the minutes'
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  'li',
                  { className: 'timeline-inverted' },
                  _react2.default.createElement(
                    'div',
                    { className: 'timeline-badge danger' },
                    _react2.default.createElement('i', { className: 'fa fa-check' })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'timeline-panel' },
                    _react2.default.createElement(
                      'div',
                      { className: 'timeline-heading' },
                      _react2.default.createElement(
                        'h4',
                        { className: 'timeline-title' },
                        'SBG General Meet 3 (2016-17)'
                      ),
                      _react2.default.createElement(
                        'p',
                        null,
                        _react2.default.createElement(
                          'small',
                          { className: 'text-muted' },
                          _react2.default.createElement('i', { className: 'fa fa-clock-o' }),
                          ' 31st January, 2017'
                        )
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'timeline-body' },
                      _react2.default.createElement(
                        'a',
                        { target: '_blank', rel: 'noopener norefferer', href: 'https://drive.google.com/open?id=1mmSIBA_-tXB4cucQwvh9JBab_nmOh4ExR_vPXMTTte8' },
                        'Click to view the minutes'
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    'div',
                    { className: 'timeline-badge warning' },
                    _react2.default.createElement('i', { className: 'fa fa-check' })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'timeline-panel' },
                    _react2.default.createElement(
                      'div',
                      { className: 'timeline-heading' },
                      _react2.default.createElement(
                        'h4',
                        { className: 'timeline-title' },
                        'SBG General Meet 1 (2016-17)'
                      ),
                      _react2.default.createElement(
                        'p',
                        null,
                        _react2.default.createElement(
                          'small',
                          { className: 'text-muted' },
                          _react2.default.createElement('i', { className: 'fa fa-clock-o' }),
                          ' 26th August, 2016'
                        )
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'timeline-body' },
                      _react2.default.createElement(
                        'a',
                        { target: '_blank', rel: 'noopener norefferer', href: 'https://docs.google.com/document/d/1dyjhdQIXdi9QVgYq5oHUf4PAxaDkx5gtM1vRWWvbvmE' },
                        'Click to view the minutes'
                      )
                    )
                  )
                )
              )
            )
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement('br', null)
        );
      }
    }]);
    return Minutes;
  }(_react2.default.Component);
  
  Minutes.contextTypes = { setTitle: _react.PropTypes.func.isRequired };
  exports.default = Minutes;

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _events = __webpack_require__(134);
  
  var _events2 = _interopRequireDefault(_events);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = {
    path: '/events',
  
    action: function action() {
      return _react2.default.createElement(_events2.default, null);
    }
  };

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _extends2 = __webpack_require__(48);
  
  var _extends3 = _interopRequireDefault(_extends2);
  
  var _getPrototypeOf = __webpack_require__(29);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(30);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(31);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(32);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(33);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactBootstrap = __webpack_require__(39);
  
  var _reactBigCalendar = __webpack_require__(135);
  
  var _reactBigCalendar2 = _interopRequireDefault(_reactBigCalendar);
  
  var _moment = __webpack_require__(136);
  
  var _moment2 = _interopRequireDefault(_moment);
  
  var _eventsSchedule = __webpack_require__(137);
  
  var _eventsSchedule2 = _interopRequireDefault(_eventsSchedule);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  _reactBigCalendar2.default.setLocalizer(_reactBigCalendar2.default.momentLocalizer(_moment2.default)); // or globalizeLocalizer
  
  var title = 'Events Calendar';
  
  var Events = function (_React$Component) {
    (0, _inherits3.default)(Events, _React$Component);
  
    function Events(props, context) {
      (0, _classCallCheck3.default)(this, Events);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (Events.__proto__ || (0, _getPrototypeOf2.default)(Events)).call(this, props));
  
      context.setTitle(title);
      return _this;
    }
  
    (0, _createClass3.default)(Events, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-lg-12' },
              _react2.default.createElement(
                _reactBootstrap.PageHeader,
                null,
                _react2.default.createElement('i', { className: 'fa fa-calendar' }),
                '\xA0\xA0Events Calendar'
              )
            )
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'div',
            (0, _extends3.default)({ className: 'calender-div' }, this.props),
            _react2.default.createElement(_reactBigCalendar2.default, {
              selectable: true,
              popup: true,
              events: _eventsSchedule2.default,
              defaultDate: new Date(),
              onSelectEvent: function onSelectEvent(event) {
                return alert(event.title);
              }
            })
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement('br', null)
        );
      }
    }]);
    return Events;
  }(_react2.default.Component);
  
  Events.contextTypes = { setTitle: _react.PropTypes.func.isRequired };
  exports.default = Events;

/***/ }),
/* 135 */
/***/ (function(module, exports) {

  module.exports = require("react-big-calendar");

/***/ }),
/* 136 */
/***/ (function(module, exports) {

  module.exports = require("moment");

/***/ }),
/* 137 */
/***/ (function(module, exports) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = [{
    title: 'Dance Nite OAT',
    start: new Date(2017, 10, 13, 19, 0, 0),
    end: new Date(2017, 10, 13, 21, 30, 0)
  }, {
    title: 'Cultural Event For NAAC OAT',
    start: new Date(2017, 10, 14, 17, 0, 0),
    end: new Date(2017, 10, 14, 20, 0, 0)
  }, {
    title: 'MSTC LAB 004, 005',
    start: new Date(2017, 10, 14, 21, 0, 0),
    end: new Date(2017, 10, 14, 23, 55, 0)
  }, {
    title: 'Debate',
    start: new Date(2017, 10, 15, 18, 0, 0),
    end: new Date(2017, 10, 15, 21, 0, 0)
  }, {
    title: 'Headrush CEP 110',
    start: new Date(2017, 10, 16, 18, 0, 0),
    end: new Date(2017, 10, 16, 21, 0, 0)
  }, {
    title: 'Intro to GSOC CEP 110',
    start: new Date(2017, 10, 16, 21, 0, 0),
    end: new Date(2017, 10, 16, 23, 55, 0)
  }, {
    title: 'MSTC Session',
    start: new Date(2017, 10, 9, 21, 0, 0),
    end: new Date(2017, 10, 9, 23, 55, 0)
  }, {
    title: 'Headrush: CEP 110',
    start: new Date(2017, 10, 9, 18, 0, 0),
    end: new Date(2017, 10, 9, 21, 0, 0)
  }, {
    title: 'AIESEC: CEP 108',
    start: new Date(2017, 10, 8, 21, 0, 0),
    end: new Date(2017, 10, 8, 23, 55, 0)
  }, {
    title: 'GDG Lab',
    start: new Date(2017, 10, 8, 18, 0, 0),
    end: new Date(2017, 10, 8, 21, 0, 0)
  }, {
    title: 'Programming Club Lab',
    start: new Date(2017, 10, 7, 21, 0, 0),
    end: new Date(2017, 10, 7, 23, 55, 0)
  }, {
    title: 'Debate: CEP 104, 105, 106, 108',
    start: new Date(2017, 10, 7, 18, 0, 0),
    end: new Date(2017, 10, 7, 21, 0, 0)
  }, {
    title: 'Concours',
    start: new Date(2017, 10, 3, 17, 0, 0),
    end: new Date(2017, 10, 5, 23, 55, 0)
  }, {
    title: 'Debate: CEP 103, 106, 108',
    start: new Date(2017, 10, 1, 17, 30, 0),
    end: new Date(2017, 10, 1, 21, 0, 0)
  }, {
    title: 'Headrush: CEP 110',
    start: new Date(2017, 9, 31, 20, 30, 0),
    end: new Date(2017, 9, 31, 23, 55, 0)
  }, {
    title: 'GDG: Women Tech Makers for the girls CEP 110',
    start: new Date(2017, 9, 31, 18, 0, 0),
    end: new Date(2017, 9, 31, 20, 0, 0)
  }, {
    title: 'EHC Manual Robotics workshop',
    start: new Date(2017, 9, 31, 8, 30, 0),
    end: new Date(2017, 9, 31, 17, 55, 0)
  }, {
    title: 'Press Club: CEP 108',
    start: new Date(2017, 9, 30, 21, 0, 0),
    end: new Date(2017, 9, 30, 23, 55, 0)
  }, {
    title: 'AIESEC Session: CEP 110',
    start: new Date(2017, 9, 30, 18, 0, 0),
    end: new Date(2017, 9, 30, 20, 0, 0)
  }, {
    title: 'i.Fest',
    start: new Date(2017, 9, 27, 20, 0, 0),
    end: new Date(2017, 9, 29, 23, 55, 0)
  }, {
    title: 'IEEE volunteer meet: CEP 110',
    start: new Date(2017, 9, 26, 21, 40, 0),
    end: new Date(2017, 9, 26, 23, 55, 0)
  }, {
    title: 'Headrush: CEP 110',
    start: new Date(2017, 9, 26, 17, 0, 0),
    end: new Date(2017, 9, 26, 21, 30, 0)
  }, {
    title: 'Pre-event i.Fest',
    start: new Date(2017, 9, 25, 18, 30, 0),
    end: new Date(2017, 9, 25, 22, 30, 0)
  }, {
    title: 'Debate: CEP 103, 105, 106, 108',
    start: new Date(2017, 9, 24, 17, 0, 0),
    end: new Date(2017, 9, 24, 21, 0, 0)
  }, {
    title: 'Headrush: CEP 110',
    start: new Date(2017, 9, 5, 21, 0, 0),
    end: new Date(2017, 9, 5, 23, 55, 0)
  }, {
    title: 'Drama by students of course Introduction to Drama: OAT',
    start: new Date(2017, 9, 5, 18, 0, 0),
    end: new Date(2017, 9, 5, 21, 0, 0)
  }, {
    title: 'i.Decipher',
    start: new Date(2017, 9, 4, 20, 0, 0),
    end: new Date(2017, 9, 4, 23, 55, 0)
  }, {
    title: 'Research Club: CEP 108',
    start: new Date(2017, 9, 4, 17, 0, 0),
    end: new Date(2017, 9, 4, 20, 0, 0)
  }, {
    title: 'Debate: CEP 103, 106, 108',
    start: new Date(2017, 9, 3, 21, 0, 0),
    end: new Date(2017, 9, 3, 23, 55, 0)
  }, {
    title: 'Concours: CEP 110',
    start: new Date(2017, 9, 3, 20, 0, 0),
    end: new Date(2017, 9, 3, 21, 0, 0)
  }, {
    title: 'Rygbee : CEP 108',
    start: new Date(2017, 9, 3, 18, 0, 0),
    end: new Date(2017, 9, 3, 20, 0, 0)
  }, {
    title: 'PHP Session: CEP 110',
    start: new Date(2017, 8, 29, 21, 0, 0),
    end: new Date(2017, 8, 29, 23, 30, 0)
  }, {
    title: 'Headrush: CEP 110',
    start: new Date(2017, 8, 28, 21, 0, 0),
    end: new Date(2017, 8, 28, 23, 55, 0)
  }, {
    title: 'GDG Recruitment drive: CEP 106 (passive)',
    start: new Date(2017, 8, 28, 19, 30, 0),
    end: new Date(2017, 8, 28, 23, 55, 0)
  }, {
    title: 'Ramleela: OAT',
    start: new Date(2017, 8, 28, 18, 0, 0),
    end: new Date(2017, 8, 28, 21, 0, 0)
  }, {
    title: 'SIG Embedded',
    start: new Date(2017, 8, 27, 21, 0, 0),
    end: new Date(2017, 8, 27, 23, 55, 0)
  }, {
    title: 'IEEE PR meet: CEP 110',
    start: new Date(2017, 8, 27, 20, 0, 0),
    end: new Date(2017, 8, 27, 21, 0, 0)
  }, {
    title: 'Concours Coordinator meet: CEP 108',
    start: new Date(2017, 8, 27, 19, 0, 0),
    end: new Date(2017, 8, 27, 21, 0, 0)
  }, {
    title: 'Concours: Design Meet',
    start: new Date(2017, 8, 27, 18, 0, 0),
    end: new Date(2017, 8, 27, 19, 0, 0)
  }, {
    title: 'Debate: CEP 103, 106, 108',
    start: new Date(2017, 8, 26, 21, 0, 0),
    end: new Date(2017, 8, 26, 23, 55, 0)
  }, {
    title: 'Elections for Secretary, SBG',
    start: new Date(2017, 8, 26, 18, 0, 0),
    end: new Date(2017, 8, 26, 21, 0, 0)
  }, {
    title: 'EHC: First year-only',
    start: new Date(2017, 8, 26, 17, 0, 0),
    end: new Date(2017, 8, 26, 21, 0, 0)
  }, {
    title: 'Garba Night: SAC',
    start: new Date(2017, 8, 25, 19, 0, 0),
    end: new Date(2017, 8, 25, 23, 55, 0)
  }, {
    title: 'IEEE Workshop',
    start: new Date(2017, 8, 24, 10, 0, 0),
    end: new Date(2017, 8, 24, 19, 0, 0)
  }, {
    title: 'MUN Day 2',
    start: new Date(2017, 8, 24, 8, 0, 0),
    end: new Date(2017, 8, 24, 20, 0, 0)
  }, {
    title: 'IEEE workshop',
    start: new Date(2017, 8, 23, 10, 0, 0),
    end: new Date(2017, 8, 23, 19, 0, 0)
  }, {
    title: 'MUN',
    start: new Date(2017, 8, 23, 8, 0, 0),
    end: new Date(2017, 8, 23, 19, 0, 0)
  }, {
    title: 'Khelaiya: SALSA',
    start: new Date(2017, 8, 22, 22, 0, 0),
    end: new Date(2017, 8, 22, 23, 55, 0)
  }, {
    title: 'GDG',
    start: new Date(2017, 8, 22, 19, 45, 0),
    end: new Date(2017, 8, 22, 21, 45, 0)
  }, {
    title: 'Chess: CEP 110',
    start: new Date(2017, 8, 22, 17, 0, 0),
    end: new Date(2017, 8, 22, 19, 45, 0)
  }, {
    title: 'SIG Mobile: CEP 108 (ONLY MSc. IT)',
    start: new Date(2017, 8, 22, 17, 0, 0),
    end: new Date(2017, 8, 22, 19, 45, 0)
  }, {
    title: 'Khelaiya',
    start: new Date(2017, 8, 21, 21, 30, 0),
    end: new Date(2017, 8, 21, 23, 55, 0)
  }, {
    title: 'ACM style programming contest (B. Tech only) Non-First year',
    start: new Date(2017, 8, 21, 21, 0, 0),
    end: new Date(2017, 8, 21, 23, 55, 0)
  }, {
    title: 'Press Club pre-Diwali meet: CEP 108',
    start: new Date(2017, 8, 21, 20, 30, 0),
    end: new Date(2017, 8, 21, 21, 30, 0)
  }, {
    title: 'Headrush: CEP 110',
    start: new Date(2017, 8, 21, 17, 0, 0),
    end: new Date(2017, 8, 21, 20, 30, 0)
  }, {
    title: 'MSTC Workshop: Cognitive Services',
    start: new Date(2017, 8, 20, 19, 0, 0),
    end: new Date(2017, 8, 20, 23, 55, 0)
  }, {
    title: 'Webkit: CEP 108',
    start: new Date(2017, 8, 20, 18, 0, 0),
    end: new Date(2017, 8, 20, 19, 15, 0)
  }, {
    title: 'SBG Meet: CEP 110',
    start: new Date(2017, 8, 19, 20, 15, 0),
    end: new Date(2017, 8, 19, 23, 55, 0)
  }, {
    title: 'Renaissance Session: CEP 110',
    start: new Date(2017, 8, 19, 17, 0, 0),
    end: new Date(2017, 8, 19, 20, 15, 0)
  }, {
    title: 'Maniere: OAT',
    start: new Date(2017, 8, 18, 18, 0, 0),
    end: new Date(2017, 8, 18, 22, 0, 0)
  }, {
    title: 'Economic Discussions with Alka Ma’am',
    start: new Date(2017, 8, 18, 17, 0, 0),
    end: new Date(2017, 8, 18, 18, 0, 0)
  }, {
    title: 'Freshers’ party MSc. IT',
    start: new Date(2017, 8, 16, 18, 0, 0),
    end: new Date(2017, 8, 16, 23, 0, 0)
  }, {
    title: 'Athletics meet: SAC',
    start: new Date(2017, 8, 16, 8, 0, 0),
    end: new Date(2017, 8, 17, 20, 0, 0)
  }, {
    title: 'Artificial Intelligence Workshop: LT',
    start: new Date(2017, 8, 16, 8, 0, 0),
    end: new Date(2017, 8, 17, 19, 0, 0)
  }, {
    title: 'B. Tech Freshers’',
    start: new Date(2017, 8, 15, 18, 0, 0),
    end: new Date(2017, 8, 15, 23, 0, 0)
  }, {
    title: 'Economic Discussion with Alka Ma’am',
    start: new Date(2017, 8, 15, 17, 0, 0),
    end: new Date(2017, 8, 15, 18, 30, 0)
  }, {
    title: 'Cubing Club: CEP 108',
    start: new Date(2017, 8, 14, 20, 0, 0),
    end: new Date(2017, 8, 14, 21, 15, 0)
  }, {
    title: 'Endeavor Session',
    start: new Date(2017, 8, 14, 18, 0, 0),
    end: new Date(2017, 8, 14, 20, 0, 0)
  }, {
    title: 'Programming Club, Masters Orientation: CEP 108',
    start: new Date(2017, 8, 14, 17, 30, 0),
    end: new Date(2017, 8, 14, 20, 0, 0)
  }, {
    title: 'Programming first session',
    start: new Date(2017, 8, 13, 21, 0, 0),
    end: new Date(2017, 8, 13, 23, 55, 0)
  }, {
    title: 'Open Forum Debate',
    start: new Date(2017, 8, 13, 17, 0, 0),
    end: new Date(2017, 8, 13, 21, 0, 0)
  }, {
    title: 'B.Tech LT Round',
    start: new Date(2017, 8, 12, 19, 30, 0),
    end: new Date(2017, 8, 12, 22, 55, 0)
  }, {
    title: 'Research club',
    start: new Date(2017, 8, 12, 17, 30, 0),
    end: new Date(2017, 8, 12, 19, 30, 0)
  }, {
    title: 'Debate Club Session: CEP 108',
    start: new Date(2017, 8, 11, 20, 45, 0),
    end: new Date(2017, 8, 11, 23, 55, 0)
  }, {
    title: 'MSc. IT LT Round',
    start: new Date(2017, 8, 11, 19, 30, 0),
    end: new Date(2017, 8, 11, 22, 30, 0)
  }, {
    title: 'MSTC: Azure',
    start: new Date(2017, 8, 11, 17, 30, 0),
    end: new Date(2017, 8, 11, 19, 30, 0)
  }, {
    title: 'M.Tech. Freshers',
    start: new Date(2017, 8, 8, 19, 0, 0),
    end: new Date(2017, 8, 8, 23, 55, 0)
  }, {
    title: 'GDG: Orientation',
    start: new Date(2017, 8, 7, 21, 0, 0),
    end: new Date(2017, 8, 7, 23, 55, 0)
  }, {
    title: 'Programming Contest Non-First year',
    start: new Date(2017, 8, 7, 21, 0, 0),
    end: new Date(2017, 8, 7, 23, 55, 0)
  }, {
    title: 'SIG EMBEDDED: LAB 104',
    start: new Date(2017, 8, 7, 18, 0, 0),
    end: new Date(2017, 8, 7, 21, 0, 0)
  }, {
    title: 'SIG MOBILE: CEP 110 FOR MScIT',
    start: new Date(2017, 8, 7, 17, 45, 0),
    end: new Date(2017, 8, 7, 21, 0, 0)
  }, {
    title: 'KHELAIYA ORIENTATION: OAT',
    start: new Date(2017, 8, 6, 21, 0, 0),
    end: new Date(2017, 8, 6, 23, 55, 0)
  }, {
    title: 'DEBATE CLUB',
    start: new Date(2017, 8, 6, 17, 30, 0),
    end: new Date(2017, 8, 6, 20, 45, 0)
  }, {
    title: 'Synapse Orientation: CEP 110',
    start: new Date(2017, 8, 5, 22, 30, 0),
    end: new Date(2017, 8, 5, 23, 55, 0)
  }, {
    title: 'TEACHER’S DAY: OAT',
    start: new Date(2017, 8, 5, 17, 0, 0),
    end: new Date(2017, 8, 5, 23, 55, 0)
  }, {
    title: 'CONCOURS: CEP 110',
    start: new Date(2017, 8, 4, 21, 0, 0),
    end: new Date(2017, 8, 4, 22, 0, 0)
  }, {
    title: 'Radio Club orientation CEP 108',
    start: new Date(2017, 8, 4, 18, 0, 0),
    end: new Date(2017, 8, 4, 19, 45, 0)
  }, {
    title: 'Cubing Orientation : CEP 108',
    start: new Date(2017, 7, 24, 21, 30, 0),
    end: new Date(2017, 7, 24, 23, 55, 0)
  }, {
    title: 'HeadRush: Session CEP 110',
    start: new Date(2017, 7, 24, 18, 30, 0),
    end: new Date(2017, 7, 24, 21, 0, 0)
  }, {
    title: 'Webkit: Orientation CEP 110',
    start: new Date(2017, 7, 24, 17, 30, 0),
    end: new Date(2017, 7, 24, 18, 30, 0)
  }, {
    title: 'SBG Budget Meet 2017-18 CEP 110',
    start: new Date(2017, 7, 23, 19, 0, 0),
    end: new Date(2017, 7, 23, 23, 55, 0)
  }, {
    title: 'Research : Non First year CEP 108',
    start: new Date(2017, 7, 23, 18, 0, 0),
    end: new Date(2017, 7, 23, 19, 45, 0)
  }, {
    title: 'EHC : Orientation LT1',
    start: new Date(2017, 7, 23, 17, 0, 0),
    end: new Date(2017, 7, 23, 19, 45, 0)
  }, {
    title: 'SBG Budget Meet 2017-18 CEP 110',
    start: new Date(2017, 7, 22, 19, 0, 0),
    end: new Date(2017, 7, 22, 23, 55, 0)
  }, {
    title: 'GDG : Orientation CEP 110',
    start: new Date(2017, 7, 22, 17, 0, 0),
    end: new Date(2017, 7, 22, 18, 30, 0)
  }, {
    title: 'Khelaiya : Orientation OAT',
    start: new Date(2017, 7, 21, 21, 30, 0),
    end: new Date(2017, 7, 21, 23, 55, 0)
  }, {
    title: 'Chess Club : Orientation CEP108',
    start: new Date(2017, 7, 21, 20, 30, 0),
    end: new Date(2017, 7, 21, 21, 30, 0)
  }, {
    title: 'IEEE coordinator meet CEP 108 , 106',
    start: new Date(2017, 7, 21, 18, 0, 0),
    end: new Date(2017, 7, 21, 22, 0, 0)
  }, {
    title: 'IEEE Volunteer Meet : CEP 110',
    start: new Date(2017, 7, 21, 18, 0, 0),
    end: new Date(2017, 7, 21, 20, 0, 0)
  }, {
    title: 'Film Screening: OAT',
    start: new Date(2017, 7, 19, 21, 0, 0),
    end: new Date(2017, 7, 19, 23, 55, 0)
  }, {
    title: 'DTG Workshop : OAT',
    start: new Date(2017, 7, 19, 17, 0, 0),
    end: new Date(2017, 7, 19, 20, 45, 0)
  }, {
    title: 'AISEC : Orientation CEP 110',
    start: new Date(2017, 7, 19, 14, 0, 0),
    end: new Date(2017, 7, 19, 15, 0, 0)
  }, {
    title: 'Music Club: OAT',
    start: new Date(2017, 7, 18, 21, 0, 0),
    end: new Date(2017, 7, 18, 23, 55, 0)
  }, {
    title: 'PDPU DRAMA TEAM',
    start: new Date(2017, 7, 18, 19, 30, 0),
    end: new Date(2017, 7, 18, 20, 50, 0)
  }, {
    title: 'MSc.I.T. Ice Breaking Session CEP 110',
    start: new Date(2017, 7, 18, 18, 0, 0),
    end: new Date(2017, 7, 18, 20, 0, 0)
  }, {
    title: 'DTG: Auditions',
    start: new Date(2017, 7, 17, 21, 30, 0),
    end: new Date(2017, 7, 17, 23, 55, 0)
  }, {
    title: 'Sambhav: Orientation CEP 110',
    start: new Date(2017, 7, 17, 20, 30, 0),
    end: new Date(2017, 7, 17, 21, 30, 0)
  }, {
    title: 'Ml SIG – Non first year CEP 105',
    start: new Date(2017, 7, 17, 18, 0, 0),
    end: new Date(2017, 7, 17, 21, 0, 0)
  }, {
    title: 'SPIC MACAY – Dance performance by Gotipua: OAT',
    start: new Date(2017, 7, 17, 16, 0, 0),
    end: new Date(2017, 7, 17, 20, 40, 0)
  }, {
    title: 'PMMC: Orientation CEP 110',
    start: new Date(2017, 7, 16, 21, 30, 0),
    end: new Date(2017, 7, 16, 23, 0, 0)
  }, {
    title: 'Programming Club: Non First year session CEP 108',
    start: new Date(2017, 7, 16, 21, 0, 0),
    end: new Date(2017, 7, 16, 23, 55, 0)
  }, {
    title: 'Reaserch Club: Orientation CEP 110',
    start: new Date(2017, 7, 16, 19, 30, 0),
    end: new Date(2017, 7, 16, 21, 0, 0)
  }, {
    title: 'DTG : Orientation',
    start: new Date(2017, 7, 16, 17, 0, 0),
    end: new Date(2017, 7, 16, 19, 30, 0)
  }, {
    title: 'Debate:Non First year 108 and 106',
    start: new Date(2017, 7, 15, 18, 0, 0),
    end: new Date(2017, 7, 15, 21, 0, 0)
  }, {
    title: 'DADC : OAT',
    start: new Date(2017, 7, 15, 18, 0, 0),
    end: new Date(2017, 7, 15, 20, 45, 0)
  }, {
    title: 'Headrush Orientation: CEP 110',
    start: new Date(2017, 7, 14, 20, 0, 0),
    end: new Date(2017, 7, 14, 23, 30, 0)
  }, {
    title: 'MSTC: Orientation',
    start: new Date(2017, 7, 14, 18, 30, 0),
    end: new Date(2017, 7, 14, 20, 0, 0)
  }, {
    title: 'Cultural weekend',
    start: new Date(2017, 7, 13, 17, 0, 0),
    end: new Date(2017, 7, 13, 21, 0, 0)
  }, {
    title: 'Cultural weekend',
    start: new Date(2017, 7, 12, 17, 0, 0),
    end: new Date(2017, 7, 12, 21, 0, 0)
  }, {
    title: 'Treasure Hunt: CAFE',
    start: new Date(2017, 7, 11, 20, 30, 0),
    end: new Date(2017, 7, 11, 23, 55, 0)
  }, {
    title: 'Programming Club Orientation: CEP 110',
    start: new Date(2017, 7, 11, 18, 30, 0),
    end: new Date(2017, 7, 11, 20, 30, 0)
  }, {
    title: 'Debate Orientation: CEP 110',
    start: new Date(2017, 7, 10, 21, 0, 0),
    end: new Date(2017, 7, 10, 23, 55, 0)
  }, {
    title: 'DADC Orientation: outside LT',
    start: new Date(2017, 7, 10, 18, 30, 0),
    end: new Date(2017, 7, 10, 21, 0, 0)
  }, {
    title: 'IEEE Orientation: CEP 110',
    start: new Date(2017, 7, 10, 17, 0, 0),
    end: new Date(2017, 7, 10, 18, 30, 0)
  }, {
    title: 'Press Club Orientation: CEP 110',
    start: new Date(2017, 7, 9, 21, 0, 0),
    end: new Date(2017, 7, 9, 23, 55, 0)
  }, {
    title: 'Cultural Orientation: CEP 110',
    start: new Date(2017, 7, 9, 19, 0, 0),
    end: new Date(2017, 7, 9, 20, 30, 0)
  }, {
    title: 'Sports Selections',
    start: new Date(2017, 7, 9, 17, 0, 0),
    end: new Date(2017, 7, 9, 18, 45, 0)
  }];

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _achievements = __webpack_require__(139);
  
  var _achievements2 = _interopRequireDefault(_achievements);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = {
    path: '/achievements',
  
    action: function action() {
      return _react2.default.createElement(_achievements2.default, null);
    }
  };

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _getPrototypeOf = __webpack_require__(29);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(30);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(31);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(32);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(33);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactBootstrap = __webpack_require__(39);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var title = 'Achievements';
  
  var Achievements = function (_React$Component) {
    (0, _inherits3.default)(Achievements, _React$Component);
  
    function Achievements(props, context) {
      (0, _classCallCheck3.default)(this, Achievements);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (Achievements.__proto__ || (0, _getPrototypeOf2.default)(Achievements)).call(this, props));
  
      context.setTitle(title);
      _this.state = {
        activePage: 1
      };
      _this.handleSelect = _this.handleSelect.bind(_this);
      return _this;
    }
  
    (0, _createClass3.default)(Achievements, [{
      key: 'handleSelect',
      value: function handleSelect(eventKey) {
        this.setState({
          activePage: eventKey
        });
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-lg-12' },
              _react2.default.createElement(
                _reactBootstrap.PageHeader,
                null,
                _react2.default.createElement('i', { className: 'fa fa-trophy' }),
                '\xA0\xA0Achievements'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement(
              _reactBootstrap.Tabs,
              { id: 'tabs1', defaultActiveKey: 1 },
              _react2.default.createElement(
                _reactBootstrap.Tab,
                { eventKey: 1, title: '2017' },
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                  _reactBootstrap.ListGroup,
                  { componentClass: 'ul' },
                  _react2.default.createElement(
                    'li',
                    { className: 'list-group-item' },
                    _react2.default.createElement(
                      'p',
                      null,
                      _react2.default.createElement(
                        _reactBootstrap.Label,
                        null,
                        'New'
                      ),
                      '\xA0',
                      _react2.default.createElement(
                        'span',
                        null,
                        _react2.default.createElement(
                          'strong',
                          null,
                          'Abhijeet Ghodgaonkar'
                        ),
                        ' (M.Tech first year student and convener of the Cubing Club DA-IICT) got 2nd rank on ',
                        _react2.default.createElement(
                          'strong',
                          null,
                          'Multiple Blind Folded'
                        ),
                        ' category by solving ',
                        _react2.default.createElement(
                          'strong',
                          null,
                          '19 out of 21 Rubik\'s Cubes in 53 minutes'
                        ),
                        ' in the Cubing Competition "SCMU 2017" (WCA) held in Mumbai. ',
                        _react2.default.createElement(
                          'a',
                          { style: { color: '#333333' }, href: 'https://www.youtube.com/watch?v=AHtNa2H2sWM', target: '_blank' },
                          'Click to see the video'
                        ),
                        '\xA0'
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      null,
                      _react2.default.createElement(
                        'a',
                        { target: '_blank', href: 'https://drive.google.com/file/d/1quq0epjAGBPEhPXRM-vJpovL4PooNr4B/view?usp=sharing' },
                        'Photo'
                      ),
                      _react2.default.createElement(
                        'div',
                        { style: { float: 'right' } },
                        _react2.default.createElement('i', { className: 'fa fa-clock-o grey' }),
                        ' 6th September, 2017'
                      ),
                      _react2.default.createElement('br', null)
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: 'list-group-item' },
                    _react2.default.createElement(
                      'p',
                      null,
                      _react2.default.createElement(
                        _reactBootstrap.Label,
                        null,
                        'New'
                      ),
                      '\xA0',
                      _react2.default.createElement(
                        'span',
                        { style: { color: '#333333' } },
                        'Three of ',
                        _react2.default.createElement(
                          'strong',
                          null,
                          'MSTC(Microsoft Student Technical Club)'
                        ),
                        ' members have been selected as ',
                        _react2.default.createElement(
                          'strong',
                          null,
                          'Microsoft Student Partner(MSP) 2017-18:'
                        )
                      )
                    ),
                    _react2.default.createElement(
                      'ol',
                      null,
                      _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement(
                          'span',
                          { style: { color: '#333333' } },
                          'Hardik Modi'
                        )
                      ),
                      _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement(
                          'span',
                          { style: { color: '#333333' } },
                          'Amey Ghate'
                        )
                      ),
                      _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement(
                          'span',
                          { style: { color: '#333333' } },
                          'Roshani'
                        )
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { style: { float: 'right' } },
                      _react2.default.createElement('i', { className: 'fa fa-clock-o grey' }),
                      ' 18th August, 2017'
                    ),
                    _react2.default.createElement('br', null)
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: 'list-group-item' },
                    _react2.default.createElement(
                      'p',
                      null,
                      _react2.default.createElement(
                        _reactBootstrap.Label,
                        null,
                        'New'
                      ),
                      '\xA0',
                      _react2.default.createElement(
                        'span',
                        { style: { color: '#333333' } },
                        _react2.default.createElement(
                          'strong',
                          null,
                          'Rajat Garg (B.Tech 3d Year)'
                        ),
                        ' received the award for Best Delegate of the DISEC committee of the HLCC MUN. He also received an Honourable Mention in the same committee of the AYMUN.\xA0'
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { style: { float: 'right' } },
                      _react2.default.createElement('i', { className: 'fa fa-clock-o grey' }),
                      ' 14th August, 2017'
                    ),
                    _react2.default.createElement('br', null)
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: 'list-group-item' },
                    _react2.default.createElement(
                      'p',
                      null,
                      _react2.default.createElement(
                        _reactBootstrap.Label,
                        null,
                        'New'
                      ),
                      '\xA0',
                      _react2.default.createElement(
                        'span',
                        { style: { color: '#333333' } },
                        _react2.default.createElement(
                          'strong',
                          null,
                          'Rajdeep Pinge (B.Tech 4th Year)'
                        ),
                        ' won High Commendation in the UN Development Programme of the AYMUN.\xA0'
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { style: { float: 'right' } },
                      _react2.default.createElement('i', { className: 'fa fa-clock-o grey' }),
                      ' 14th August, 2017'
                    ),
                    _react2.default.createElement('br', null)
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: 'list-group-item' },
                    _react2.default.createElement(
                      'p',
                      null,
                      _react2.default.createElement(
                        _reactBootstrap.Label,
                        null,
                        'New'
                      ),
                      '\xA0',
                      _react2.default.createElement(
                        'span',
                        { style: { color: '#333333' } },
                        _react2.default.createElement(
                          'strong',
                          null,
                          'Bishesh Oram (B.Tech 2nd Year)'
                        ),
                        ' received a Special Mention in the Ecofin of the HLCC MUN.\xA0'
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { style: { float: 'right' } },
                      _react2.default.createElement('i', { className: 'fa fa-clock-o grey' }),
                      ' 14th August, 2017'
                    ),
                    _react2.default.createElement('br', null)
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: 'list-group-item' },
                    _react2.default.createElement(
                      'p',
                      null,
                      _react2.default.createElement(
                        _reactBootstrap.Label,
                        null,
                        'New'
                      ),
                      '\xA0',
                      _react2.default.createElement(
                        'span',
                        { style: { color: '#333333' } },
                        _react2.default.createElement(
                          'strong',
                          null,
                          'Rajat Garg (B.Tech 3rd Year)'
                        ),
                        ' at Jodhpur and winning the High Commendation at the Thar MUN. He was a part of the UNSC and represented the delegate of Iran in the committee. \xA0'
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { style: { float: 'right' } },
                      _react2.default.createElement('i', { className: 'fa fa-clock-o grey' }),
                      ' 3rd July, 2017'
                    ),
                    _react2.default.createElement('br', null)
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: 'list-group-item' },
                    _react2.default.createElement(
                      'p',
                      null,
                      _react2.default.createElement(
                        'span',
                        { style: { color: '#333333' } },
                        _react2.default.createElement(
                          'strong',
                          null,
                          'Rahul Saranjame (B.Tech 4th year)'
                        ),
                        ', bagged the Global Leadership Award at the PDPU MUN held last weekend. The committee was the Special Political and Decolonization Committee with the agenda of International cooperation in peaceful uses of outer space. \xA0'
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { style: { float: 'right' } },
                      _react2.default.createElement('i', { className: 'fa fa-clock-o grey' }),
                      ' 12th April, 2017'
                    ),
                    _react2.default.createElement('br', null)
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: 'list-group-item' },
                    _react2.default.createElement(
                      'p',
                      null,
                      _react2.default.createElement(
                        'span',
                        { style: { color: '#333333' } },
                        _react2.default.createElement(
                          'strong',
                          null,
                          'Yash Kumar (B.Tech 3rd Year) '
                        ),
                        'and ',
                        _react2.default.createElement(
                          'strong',
                          null,
                          'Karan Thakkar (B.Tech 3rd Year)'
                        ),
                        ' secured runners up position at TCS Codevita, 2016. This event was held at TCS Siruseri campus, Chennai, where 15 teams selected from all over India were invited.'
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { style: { float: 'right' } },
                      _react2.default.createElement('i', { className: 'fa fa-clock-o grey' }),
                      ' 16th April, 2017'
                    ),
                    _react2.default.createElement('br', null)
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: 'list-group-item' },
                    _react2.default.createElement(
                      'p',
                      null,
                      _react2.default.createElement(
                        'span',
                        { style: { color: '#333333' } },
                        _react2.default.createElement(
                          'strong',
                          null,
                          'DTG (DA-IICT Theatres Group)'
                        ),
                        ' bagged 2nd prize in street play competition ',
                        _react2.default.createElement(
                          'strong',
                          null,
                          'Aahvaan'
                        ),
                        ' held at PDPU as a part of their annual cultural fest, Flare.'
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { style: { float: 'right' } },
                      _react2.default.createElement('i', { className: 'fa fa-clock-o grey' }),
                      ' 7th April, 2017'
                    ),
                    _react2.default.createElement('br', null)
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: 'list-group-item' },
                    _react2.default.createElement(
                      'p',
                      null,
                      _react2.default.createElement(
                        'span',
                        { style: { color: '#333333' } },
                        _react2.default.createElement(
                          'strong',
                          null,
                          'Music Club'
                        ),
                        ' bagged the first prize in the Livewire/Battle of the bands event at Spectrum, NIFT.'
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { style: { float: 'right' } },
                      _react2.default.createElement('i', { className: 'fa fa-clock-o grey' }),
                      ' 12th February, 2017'
                    ),
                    _react2.default.createElement('br', null)
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: 'list-group-item' },
                    _react2.default.createElement(
                      'p',
                      null,
                      _react2.default.createElement(
                        'span',
                        { style: { color: '#333333' } },
                        _react2.default.createElement(
                          'strong',
                          null,
                          'DADC (DA-IICT Dance Club)'
                        ),
                        ' bagged second prize at Reprise\'17, the techno-cultural fest of SPM, PDPU.'
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { style: { float: 'right' } },
                      _react2.default.createElement('i', { className: 'fa fa-clock-o grey' }),
                      ' 27th January, 2017'
                    ),
                    _react2.default.createElement('br', null)
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: 'list-group-item' },
                    _react2.default.createElement(
                      'p',
                      null,
                      _react2.default.createElement(
                        'span',
                        { style: { color: '#333333' } },
                        _react2.default.createElement(
                          'strong',
                          null,
                          'Team FruitSalad'
                        ),
                        ' of our college has qualified for ',
                        _react2.default.createElement(
                          'strong',
                          null,
                          'ACM-ICPC World Finals'
                        ),
                        '. This is the first time in the history of our college that a team has achieved this feat.'
                      ),
                      _react2.default.createElement(
                        'span',
                        { style: { color: '#333333' } },
                        ' They stood 1st in Kharagpur Regionals and 2nd in Kolkata Regionals and would be representing India alongside 6 other top teams at the World Finals to be held in United States in May 2017.'
                      ),
                      _react2.default.createElement(
                        'span',
                        { style: { color: '#333333' } },
                        ' Team FruitSalad:'
                      )
                    ),
                    _react2.default.createElement(
                      'ol',
                      null,
                      _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement(
                          'span',
                          { style: { color: '#333333' } },
                          'Sumeet Varma (B.Tech. 4th Year)'
                        )
                      ),
                      _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement(
                          'span',
                          { style: { color: '#333333' } },
                          'Kuldeep Patel (B.Tech. 4th Year)'
                        )
                      ),
                      _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement(
                          'span',
                          { style: { color: '#333333' } },
                          'Yash Kumar (B.Tech. 3rd Year)'
                        )
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      null,
                      _react2.default.createElement(
                        'a',
                        { target: '_blank', href: 'https://drive.google.com/file/d/14SEVNEyDw3Yo9U2oPtyemqqd4UiAI8vm/view?usp=sharing' },
                        'Photo'
                      ),
                      _react2.default.createElement(
                        'div',
                        { style: { float: 'right' } },
                        _react2.default.createElement('i', { className: 'fa fa-clock-o grey' }),
                        ' 26th January, 2017'
                      ),
                      _react2.default.createElement('br', null)
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: 'list-group-item' },
                    _react2.default.createElement(
                      'p',
                      null,
                      _react2.default.createElement(
                        'span',
                        null,
                        _react2.default.createElement(
                          'strong',
                          null,
                          'Ms Malvika Singh'
                        ),
                        ', a B.Tech 2014 batch student, has been selected for ',
                        _react2.default.createElement(
                          'strong',
                          null,
                          'PennApps XV'
                        ),
                        ', a application development competition to be held at Penn Engineering, University of Pennsylvania during January 20 to 22nd 2017.'
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { style: { float: 'right' } },
                      _react2.default.createElement('i', { className: 'fa fa-clock-o grey' }),
                      ' 20th January, 2017'
                    ),
                    _react2.default.createElement('br', null)
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: 'list-group-item' },
                    _react2.default.createElement(
                      'p',
                      null,
                      _react2.default.createElement(
                        'span',
                        null,
                        'PhD student ',
                        _react2.default.createElement(
                          'strong',
                          null,
                          'Mr. Nirmesh J. Shah'
                        ),
                        ' has been awarded a travel grant of 1000 US dollars by IEEE Signal Processing Society to present his two papers at ',
                        _react2.default.createElement(
                          'strong',
                          null,
                          'ICASSP 2017'
                        ),
                        ', New Orleans USA.The papers are in collaboration with his PhD supervisor Prof. Hemant Patil.'
                      )
                    )
                  )
                )
              ),
              _react2.default.createElement(
                _reactBootstrap.Tab,
                { eventKey: 2, title: '2016' },
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                  _reactBootstrap.ListGroup,
                  { componentClass: 'ul' },
                  _react2.default.createElement(
                    'li',
                    { className: 'list-group-item' },
                    _react2.default.createElement(
                      'p',
                      null,
                      _react2.default.createElement(
                        'span',
                        null,
                        'Research paper titled ',
                        _react2.default.createElement(
                          'strong',
                          null,
                          '"Accelerated Fluid Simulation of Low Temperature Plasmas on Intel Xeon Phi MIC Architecture"'
                        ),
                        ' authored by B.Tech (2013 batch) students ',
                        _react2.default.createElement(
                          'strong',
                          null,
                          'Henil Shah, Anurag Gupta, Saumya Bhadani and Prof. Bhaskar Chaudhury'
                        ),
                        ' received the ',
                        _react2.default.createElement(
                          'strong',
                          null,
                          'Best Poster Award (SRS)'
                        ),
                        ' at the 23rd IEEE International Conference on HPC, Data and Analytics (HiPC, 2016).'
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { style: { float: 'right' } },
                      _react2.default.createElement('i', { className: 'fa fa-clock-o grey' }),
                      ' 25th December, 2016'
                    ),
                    _react2.default.createElement('br', null)
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: 'list-group-item' },
                    _react2.default.createElement(
                      'p',
                      null,
                      _react2.default.createElement(
                        'span',
                        { style: { color: '#333333' } },
                        'In a recent competition held on Hackerrank to determine the best universities in terms of coders, students from DA-IICT gave a great performance. Over 5,500 students from 126 schools from around the world participated in the event. DA-IICT stood as the ',
                        _react2.default.createElement(
                          'strong',
                          null,
                          '3rd best college in India'
                        ),
                        ' and ',
                        _react2.default.createElement(
                          'strong',
                          null,
                          '11th best in world'
                        ),
                        ' in terms of active best coders.'
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { style: { float: 'right' } },
                      _react2.default.createElement('i', { className: 'fa fa-clock-o grey' }),
                      ' 8th December, 2016'
                    ),
                    _react2.default.createElement('br', null)
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: 'list-group-item' },
                    _react2.default.createElement(
                      'p',
                      null,
                      _react2.default.createElement(
                        'span',
                        { style: { color: '#333333' } },
                        _react2.default.createElement(
                          'strong',
                          null,
                          'Tejasv Gupta'
                        ),
                        ' secured 398th rank in the world in the Pre-Final round of ',
                        _react2.default.createElement(
                          'strong',
                          null,
                          'Google Distributed Code Jam'
                        ),
                        '. He is one of the two Indians who reached till Semi-Final round in both the tracks.'
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { style: { float: 'right' } },
                      _react2.default.createElement('i', { className: 'fa fa-clock-o grey' }),
                      ' 3rd December, 2016'
                    ),
                    _react2.default.createElement('br', null)
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: 'list-group-item' },
                    _react2.default.createElement(
                      'p',
                      null,
                      _react2.default.createElement(
                        'span',
                        { style: { color: '#333333' } },
                        _react2.default.createElement(
                          'strong',
                          null,
                          'Sumeet Varma'
                        ),
                        ' secured 3rd rank in India and 189th rank in the world in the Pre-Final round of ',
                        _react2.default.createElement(
                          'strong',
                          null,
                          'Google Code Jam'
                        ),
                        '.'
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { style: { float: 'right' } },
                      _react2.default.createElement('i', { className: 'fa fa-clock-o grey' }),
                      ' 3rd December, 2016'
                    ),
                    _react2.default.createElement('br', null)
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: 'list-group-item' },
                    _react2.default.createElement(
                      'p',
                      null,
                      _react2.default.createElement(
                        'span',
                        { style: { color: '#333333' } },
                        _react2.default.createElement(
                          'strong',
                          null,
                          'Tejasv Gupta'
                        ),
                        ' secured 7th rank in India and 294th rank in the world in the Pre-Final round of ',
                        _react2.default.createElement(
                          'strong',
                          null,
                          'Google Code Jam'
                        ),
                        '.'
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { style: { float: 'right' } },
                      _react2.default.createElement('i', { className: 'fa fa-clock-o grey' }),
                      ' 3rd December, 2016'
                    ),
                    _react2.default.createElement('br', null)
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: 'list-group-item' },
                    _react2.default.createElement(
                      'p',
                      null,
                      _react2.default.createElement(
                        'span',
                        { style: { color: '#333333' } },
                        'The following teams of DA-IICT under the guidance of ',
                        _react2.default.createElement(
                          'strong',
                          null,
                          'Professor Bhaskar Chaudhury'
                        ),
                        ' have stood second and ',
                        _react2.default.createElement(
                          'strong',
                          null,
                          'third'
                        ),
                        ' at the HiPC Student Programming Challenge which is a national level parallel programming competition organized for students enrolled in Indian Universities as a part of High Performance Computing (HiPC) conference 2016 (',
                        _react2.default.createElement(
                          'a',
                          { style: { color: '#333333' }, href: 'http://www.hipc.org', target: '_blank' },
                          'http://www.hipc.org'
                        ),
                        ').'
                      )
                    ),
                    _react2.default.createElement(
                      'ol',
                      null,
                      _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement(
                          'span',
                          { style: { color: '#333333' } },
                          _react2.default.createElement(
                            'strong',
                            null,
                            'Yashwant Keswani and Akshar Varma stood 2nd'
                          ),
                          ' (both BTech 2013 batch)'
                        )
                      ),
                      _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement(
                          'span',
                          { style: { color: '#333333' } },
                          _react2.default.createElement(
                            'strong',
                            null,
                            'Keval Shah, Abhi Shah and Parshwa Shah stood 3rd '
                          ),
                          '(all three BTech 2014 batch)'
                        )
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      null,
                      _react2.default.createElement(
                        'a',
                        { target: '_blank', href: 'https://drive.google.com/file/d/16G7MG-6xAbjJRcbM8xZruHj_Li9xZo4R/view?usp=sharing' },
                        'Photo'
                      ),
                      _react2.default.createElement(
                        'div',
                        { style: { float: 'right' } },
                        _react2.default.createElement('i', { className: 'fa fa-clock-o grey' }),
                        ' 2nd December, 2016'
                      ),
                      _react2.default.createElement('br', null)
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: 'list-group-item' },
                    _react2.default.createElement(
                      'p',
                      null,
                      _react2.default.createElement(
                        'span',
                        { style: { color: '#333333' } },
                        'Team Epsilon-42, Music Club bagged a prize as the second runner-up of the ',
                        _react2.default.createElement(
                          'strong',
                          null,
                          'Indian Rock event amidst hefty competition. '
                        )
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { style: { float: 'right' } },
                      _react2.default.createElement('i', { className: 'fa fa-clock-o grey' }),
                      ' 14th November, 2016'
                    ),
                    _react2.default.createElement('br', null)
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: 'list-group-item' },
                    _react2.default.createElement(
                      'p',
                      null,
                      _react2.default.createElement(
                        'span',
                        { style: { color: '#333333' } },
                        'Our institute\'s team stood second in ',
                        _react2.default.createElement(
                          'strong',
                          null,
                          'Hackerearth Collegiate Cup,'
                        ),
                        ' whose final round was held at Bangalore. Top 15 colleges of India were shortlisted based on 3 online elimination rounds.'
                      )
                    ),
                    _react2.default.createElement(
                      'span',
                      { style: { color: '#333333' } },
                      _react2.default.createElement(
                        'strong',
                        null,
                        'Team members:'
                      )
                    ),
                    _react2.default.createElement(
                      'ol',
                      null,
                      _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement(
                          'span',
                          { style: { color: '#333333' } },
                          'Sumeet Varma (B.Tech 4th Year)'
                        )
                      ),
                      _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement(
                          'span',
                          { style: { color: '#333333' } },
                          'Kuldeep Patel (B.Tech 4th Year)'
                        )
                      ),
                      _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement(
                          'span',
                          { style: { color: '#333333' } },
                          'Yash Kumar (B.Tech 3rd Year)'
                        )
                      )
                    ),
                    _react2.default.createElement('br', null),
                    _react2.default.createElement(
                      'span',
                      { style: { color: '#333333' } },
                      ' Also 5 students from our college were shortlisted for Sears Dots and Arrows - Hackerrank through online eliminations.'
                    ),
                    _react2.default.createElement('br', null),
                    _react2.default.createElement(
                      'span',
                      { style: { color: '#333333' } },
                      ' ',
                      _react2.default.createElement(
                        'strong',
                        null,
                        '3rd Rank - Sumeet Varma (B.Tech 4th Year) - 1 lakh INR',
                        _react2.default.createElement('br', null),
                        '9th Rank - Yash Kumar (B.Tech 3rd Year) - iPad'
                      )
                    ),
                    _react2.default.createElement('br', null),
                    _react2.default.createElement('br', null),
                    _react2.default.createElement(
                      'span',
                      { style: { color: '#333333' } },
                      _react2.default.createElement(
                        'strong',
                        null,
                        'Honourable Mentions'
                      )
                    ),
                    _react2.default.createElement(
                      'ol',
                      null,
                      _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement(
                          'span',
                          null,
                          'Mohib Manva (B.Tech 3rd Year)'
                        )
                      ),
                      _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement(
                          'span',
                          { style: { color: '#333333' } },
                          'Tanmay Patel (B.Tech 3rd Year)'
                        )
                      ),
                      _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement(
                          'span',
                          { style: { color: '#333333' } },
                          'Deepit Patel (B.Tech 3rd Year)'
                        )
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { style: { float: 'right' } },
                      _react2.default.createElement('i', { className: 'fa fa-clock-o grey' }),
                      ' 10th November, 2016'
                    ),
                    _react2.default.createElement('br', null)
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: 'list-group-item' },
                    _react2.default.createElement(
                      'p',
                      null,
                      _react2.default.createElement(
                        'span',
                        { style: { color: '#333333' } },
                        'In IIM-A\'s Sports Fest, ',
                        _react2.default.createElement(
                          'strong',
                          null,
                          'Shaurya'
                        ),
                        ' (October 20 2016), our Cricket Team finished at ',
                        _react2.default.createElement(
                          'strong',
                          null,
                          'Runner\'s Up'
                        ),
                        ' position in the fest. Football (Boys), Volleyball (Boys), Lawn Tennis, Table Tennis (Boys), Badminton (Girls), Chess and Carom teams reached the semi-finals in Shaurya:'
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { style: { float: 'right' } },
                      _react2.default.createElement('i', { className: 'fa fa-clock-o grey' }),
                      ' 20th October, 2016'
                    ),
                    _react2.default.createElement('br', null)
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: 'list-group-item' },
                    _react2.default.createElement(
                      'p',
                      null,
                      _react2.default.createElement(
                        'span',
                        { style: { color: '#333333' } },
                        'Selected for the ',
                        _react2.default.createElement(
                          'strong',
                          null,
                          'Booking.com Passions Hacked on-site Hackathon'
                        ),
                        '. It held at Booking.com HQ i.e. Amsterdam, Netherlands from 13th - 15th Oct, 2016 and was an all-expenses-paid trip. In order to qualify, they had to solve 6 algorithmic problems and also one open ended question in their respective categories.'
                      )
                    ),
                    _react2.default.createElement(
                      'span',
                      { style: { color: '#333333' } },
                      ' Results of Qualification Round held on HackerRank:'
                    ),
                    _react2.default.createElement('br', null),
                    _react2.default.createElement('br', null),
                    _react2.default.createElement(
                      'span',
                      { style: { color: '#333333' } },
                      ' ',
                      _react2.default.createElement(
                        'strong',
                        null,
                        'Tejasv Gupta - 5th rank in World'
                      ),
                      ' (',
                      _react2.default.createElement(
                        'em',
                        null,
                        'Mobile Codesprint'
                      ),
                      ')'
                    ),
                    _react2.default.createElement('br', null),
                    _react2.default.createElement(
                      'span',
                      { style: { color: '#333333' } },
                      ' ',
                      _react2.default.createElement(
                        'strong',
                        null,
                        'Sumeet Varma -15th rank in World'
                      ),
                      ' (',
                      _react2.default.createElement(
                        'em',
                        null,
                        'Backend Codesprint'
                      ),
                      ')'
                    ),
                    _react2.default.createElement('br', null),
                    _react2.default.createElement('br', null),
                    _react2.default.createElement(
                      'span',
                      { style: { color: '#333333' } },
                      ' The contest was open for people of all age groups. Overall 50 people from all over the world inclusive of all the three categories i.e Backend, Frontend and Mobile are invited for the on-site event. \xA0'
                    ),
                    _react2.default.createElement(
                      'div',
                      { style: { float: 'right' } },
                      _react2.default.createElement('i', { className: 'fa fa-clock-o grey' }),
                      ' 6th October, 2016'
                    ),
                    _react2.default.createElement('br', null)
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: 'list-group-item' },
                    _react2.default.createElement(
                      'p',
                      null,
                      _react2.default.createElement(
                        'span',
                        { style: { color: '#333333' } },
                        'In the GNLU Debate 2016, a team comprising of ',
                        _react2.default.createElement(
                          'strong',
                          null,
                          'Aashay Binaykia'
                        ),
                        ' ( B.Tech 2015) and ',
                        _react2.default.createElement(
                          'strong',
                          null,
                          'Labdhi Shah'
                        ),
                        ' (B.Tech 2015) won the British Parliamentary Debating competition in the Novice category.'
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { style: { float: 'right' } },
                      _react2.default.createElement('i', { className: 'fa fa-clock-o grey' }),
                      ' 3rd October, 2016'
                    ),
                    _react2.default.createElement('br', null)
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: 'list-group-item' },
                    _react2.default.createElement(
                      'p',
                      null,
                      _react2.default.createElement(
                        'span',
                        { style: { color: '#333333' } },
                        _react2.default.createElement(
                          'a',
                          { style: { color: '#333333' }, href: 'http://www.daiict.ac.in/daiict/images/DIP_8307.JPG', target: '_blank' },
                          _react2.default.createElement(
                            'strong',
                            null,
                            '"TCS Best Student Award"'
                          ),
                          ' was presented to ',
                          _react2.default.createElement(
                            'strong',
                            null,
                            'Ms. Lavanya Gupta (B.Tech 2012 batch)'
                          ),
                          ' by Shri Anomitra Das (Regional Head HR) TCS in a function held at DA-IICT on 13th September 2016.'
                        )
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { style: { float: 'right' } },
                      _react2.default.createElement('i', { className: 'fa fa-clock-o grey' }),
                      ' 13th September 2016'
                    ),
                    _react2.default.createElement('br', null)
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: 'list-group-item' },
                    _react2.default.createElement(
                      'p',
                      null,
                      _react2.default.createElement(
                        'span',
                        { style: { color: '#333333' } },
                        'A team from DA-IICT bagged the first prize at the ',
                        _react2.default.createElement(
                          'strong',
                          null,
                          'InOut hackathon, Surat.'
                        )
                      )
                    ),
                    _react2.default.createElement(
                      'span',
                      null,
                      _react2.default.createElement(
                        'strong',
                        null,
                        'Team members:'
                      )
                    ),
                    _react2.default.createElement(
                      'ol',
                      null,
                      _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement(
                          'span',
                          null,
                          'Sahil Jain'
                        )
                      ),
                      _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement(
                          'span',
                          null,
                          'Ankit Muchhala'
                        )
                      ),
                      _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement(
                          'span',
                          null,
                          'Kushan Joshi'
                        )
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      null,
                      _react2.default.createElement(
                        'a',
                        { target: '_blank', href: 'https://drive.google.com/file/d/1EpRbx9nJSAsSv5oNVrm5JsdptxD3j7ai/view?usp=sharing' },
                        'Photo'
                      ),
                      _react2.default.createElement(
                        'div',
                        { style: { float: 'right' } },
                        _react2.default.createElement('i', { className: 'fa fa-clock-o grey' }),
                        ' 16th August, 2016'
                      ),
                      _react2.default.createElement('br', null)
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: 'list-group-item' },
                    _react2.default.createElement(
                      'p',
                      null,
                      _react2.default.createElement(
                        'span',
                        null,
                        'A total of ',
                        _react2.default.createElement(
                          'strong',
                          null,
                          '11'
                        ),
                        ' students were selected as interns for various mentoring organizations of ',
                        _react2.default.createElement(
                          'strong',
                          null,
                          'Google Summer of Code 2016'
                        ),
                        ' under the Google umbrella'
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      null,
                      _react2.default.createElement(
                        'a',
                        { target: '_blank', href: 'https://drive.google.com/file/d/1VJxjxz4odpLPHIP5IkdZWYCmhlQAlkdO/view?usp=sharing' },
                        'Photo'
                      ),
                      _react2.default.createElement(
                        'div',
                        { style: { float: 'right' } },
                        _react2.default.createElement('i', { className: 'fa fa-clock-o grey' }),
                        ' 28th April, 2016'
                      ),
                      _react2.default.createElement('br', null)
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: 'list-group-item' },
                    _react2.default.createElement(
                      'p',
                      null,
                      _react2.default.createElement(
                        'span',
                        null,
                        _react2.default.createElement(
                          'strong',
                          null,
                          'DTG(DA-IICT Theatres Group) Mime Team'
                        ),
                        ' bagged the ',
                        _react2.default.createElement(
                          'strong',
                          null,
                          '2nd Prize'
                        ),
                        ' in the Mime competition held during Flare\'16 at PDPU!'
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { style: { float: 'right' } },
                      _react2.default.createElement('i', { className: 'fa fa-clock-o grey' }),
                      ' 21st April, 2016'
                    ),
                    _react2.default.createElement('br', null)
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: 'list-group-item' },
                    _react2.default.createElement(
                      'p',
                      null,
                      _react2.default.createElement(
                        'span',
                        { style: { color: '#333333' } },
                        'M.Tech student ',
                        _react2.default.createElement(
                          'strong',
                          null,
                          'Ms. Bhavika Bathiya'
                        ),
                        ' received best paper award at ',
                        _react2.default.createElement(
                          'strong',
                          null,
                          'ACM WiECON-ECE 2016'
                        ),
                        '. The paper is based on her thesis which was guided by ',
                        _react2.default.createElement(
                          'strong',
                          null,
                          'Prof. Sanjay Srivastava and Prof. Biswajit Mishra.'
                        )
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: 'list-group-item' },
                    _react2.default.createElement(
                      'p',
                      null,
                      _react2.default.createElement(
                        'span',
                        { style: { color: '#333333' } },
                        'B.Tech student ',
                        _react2.default.createElement(
                          'strong',
                          null,
                          'Nidhi Vyas'
                        ),
                        ' form Information Retrieval Lab, DA-IICT got an offer from The Center for Language and Speech Processing, ',
                        _react2.default.createElement(
                          'strong',
                          null,
                          'Johns Hopkins University'
                        ),
                        ' for her BTP.'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: 'list-group-item' },
                    _react2.default.createElement(
                      'p',
                      null,
                      _react2.default.createElement(
                        'span',
                        { style: { color: '#333333' } },
                        'PhD student ',
                        _react2.default.createElement(
                          'strong',
                          null,
                          'Sarita Agrawal'
                        ),
                        ' has earned the ',
                        _react2.default.createElement(
                          'strong',
                          null,
                          '\'Best Paper Award (PhD Forum Track)\''
                        ),
                        ' from the IEEE Advanced Networks and Telecommunications Systems (ANTS) 2016.'
                      )
                    )
                  )
                )
              )
            )
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement('br', null)
        );
      }
    }]);
    return Achievements;
  }(_react2.default.Component);
  
  Achievements.contextTypes = { setTitle: _react.PropTypes.func.isRequired };
  exports.default = Achievements;

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _gallery = __webpack_require__(141);
  
  var _gallery2 = _interopRequireDefault(_gallery);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = {
    path: '/gallery',
  
    action: function action() {
      return _react2.default.createElement(_gallery2.default, null);
    }
  };

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _getPrototypeOf = __webpack_require__(29);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(30);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(31);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(32);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(33);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactBootstrap = __webpack_require__(39);
  
  var _reactImages = __webpack_require__(142);
  
  var _reactImages2 = _interopRequireDefault(_reactImages);
  
  var _reactPhotoGallery = __webpack_require__(143);
  
  var _reactPhotoGallery2 = _interopRequireDefault(_reactPhotoGallery);
  
  var _ = __webpack_require__(144);
  
  var _2 = _interopRequireDefault(_);
  
  var _3 = __webpack_require__(145);
  
  var _4 = _interopRequireDefault(_3);
  
  var _5 = __webpack_require__(146);
  
  var _6 = _interopRequireDefault(_5);
  
  var _7 = __webpack_require__(147);
  
  var _8 = _interopRequireDefault(_7);
  
  var _9 = __webpack_require__(148);
  
  var _10 = _interopRequireDefault(_9);
  
  var _11 = __webpack_require__(149);
  
  var _12 = _interopRequireDefault(_11);
  
  var _13 = __webpack_require__(150);
  
  var _14 = _interopRequireDefault(_13);
  
  var _15 = __webpack_require__(151);
  
  var _16 = _interopRequireDefault(_15);
  
  var _17 = __webpack_require__(152);
  
  var _18 = _interopRequireDefault(_17);
  
  var _19 = __webpack_require__(153);
  
  var _20 = _interopRequireDefault(_19);
  
  var _21 = __webpack_require__(154);
  
  var _22 = _interopRequireDefault(_21);
  
  var _23 = __webpack_require__(155);
  
  var _24 = _interopRequireDefault(_23);
  
  var _25 = __webpack_require__(156);
  
  var _26 = _interopRequireDefault(_25);
  
  var _27 = __webpack_require__(157);
  
  var _28 = _interopRequireDefault(_27);
  
  var _29 = __webpack_require__(158);
  
  var _30 = _interopRequireDefault(_29);
  
  var _31 = __webpack_require__(159);
  
  var _32 = _interopRequireDefault(_31);
  
  var _33 = __webpack_require__(160);
  
  var _34 = _interopRequireDefault(_33);
  
  var _35 = __webpack_require__(161);
  
  var _36 = _interopRequireDefault(_35);
  
  var _37 = __webpack_require__(162);
  
  var _38 = _interopRequireDefault(_37);
  
  var _39 = __webpack_require__(163);
  
  var _40 = _interopRequireDefault(_39);
  
  var _41 = __webpack_require__(164);
  
  var _42 = _interopRequireDefault(_41);
  
  var _43 = __webpack_require__(165);
  
  var _44 = _interopRequireDefault(_43);
  
  var _45 = __webpack_require__(166);
  
  var _46 = _interopRequireDefault(_45);
  
  var _47 = __webpack_require__(167);
  
  var _48 = _interopRequireDefault(_47);
  
  var _49 = __webpack_require__(168);
  
  var _50 = _interopRequireDefault(_49);
  
  var _51 = __webpack_require__(169);
  
  var _52 = _interopRequireDefault(_51);
  
  var _53 = __webpack_require__(170);
  
  var _54 = _interopRequireDefault(_53);
  
  var _55 = __webpack_require__(171);
  
  var _56 = _interopRequireDefault(_55);
  
  var _57 = __webpack_require__(172);
  
  var _58 = _interopRequireDefault(_57);
  
  var _59 = __webpack_require__(173);
  
  var _60 = _interopRequireDefault(_59);
  
  var _61 = __webpack_require__(174);
  
  var _62 = _interopRequireDefault(_61);
  
  var _63 = __webpack_require__(175);
  
  var _64 = _interopRequireDefault(_63);
  
  var _65 = __webpack_require__(176);
  
  var _66 = _interopRequireDefault(_65);
  
  var _67 = __webpack_require__(177);
  
  var _68 = _interopRequireDefault(_67);
  
  var _69 = __webpack_require__(178);
  
  var _70 = _interopRequireDefault(_69);
  
  var _71 = __webpack_require__(179);
  
  var _72 = _interopRequireDefault(_71);
  
  var _73 = __webpack_require__(180);
  
  var _74 = _interopRequireDefault(_73);
  
  var _75 = __webpack_require__(181);
  
  var _76 = _interopRequireDefault(_75);
  
  var _77 = __webpack_require__(182);
  
  var _78 = _interopRequireDefault(_77);
  
  var _79 = __webpack_require__(183);
  
  var _80 = _interopRequireDefault(_79);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var title = 'DA-IICT Gallery';
  
  var images = [{ src: _2.default, width: 4, height: 3 }, { src: _4.default, width: 4, height: 3 }, { src: _6.default, width: 4, height: 3 }, { src: _8.default, width: 4, height: 3 }, { src: _10.default, width: 4, height: 3 }, { src: _12.default, width: 4, height: 3 }, { src: _14.default, width: 4, height: 3 }, { src: _16.default, width: 4, height: 3 }, { src: _18.default, width: 4, height: 3 }, { src: _20.default, width: 4, height: 3 }, { src: _22.default, width: 4, height: 3 }, { src: _24.default, width: 4, height: 3 }, { src: _26.default, width: 4, height: 3 }, { src: _28.default, width: 4, height: 3 }, { src: _30.default, width: 4, height: 3 }, { src: _32.default, width: 4, height: 3 }, { src: _34.default, width: 4, height: 3 }, { src: _36.default, width: 4, height: 3 }, { src: _38.default, width: 4, height: 3 }, { src: _40.default, width: 4, height: 3 }, { src: _42.default, width: 4, height: 3 }, { src: _44.default, width: 4, height: 3 }, { src: _46.default, width: 4, height: 3 }, { src: _48.default, width: 4, height: 3 }, { src: _50.default, width: 4, height: 3 }, { src: _52.default, width: 4, height: 3 }, { src: _54.default, width: 4, height: 3 }, { src: _56.default, width: 4, height: 3 }, { src: _58.default, width: 4, height: 3 }, { src: _60.default, width: 4, height: 3 }, { src: _62.default, width: 4, height: 3 }, { src: _64.default, width: 4, height: 3 }, { src: _66.default, width: 4, height: 3 }, { src: _68.default, width: 4, height: 3 }, { src: _70.default, width: 4, height: 3 }, { src: _72.default, width: 4, height: 3 }, { src: _74.default, width: 4, height: 3 }, { src: _76.default, width: 4, height: 3 }, { src: _78.default, width: 4, height: 3 }, { src: _80.default, width: 4, height: 3 }];
  
  var DAGallery = function (_React$Component) {
    (0, _inherits3.default)(DAGallery, _React$Component);
  
    function DAGallery(props, context) {
      (0, _classCallCheck3.default)(this, DAGallery);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (DAGallery.__proto__ || (0, _getPrototypeOf2.default)(DAGallery)).call(this, props));
  
      context.setTitle(title);
      _this.state = { currentImage: 0 };
      _this.closeLightbox = _this.closeLightbox.bind(_this);
      _this.openLightbox = _this.openLightbox.bind(_this);
      _this.gotoNext = _this.gotoNext.bind(_this);
      _this.gotoPrevious = _this.gotoPrevious.bind(_this);
      return _this;
    }
  
    (0, _createClass3.default)(DAGallery, [{
      key: 'openLightbox',
      value: function openLightbox(event, obj) {
        this.setState({
          currentImage: obj.index,
          lightboxIsOpen: true
        });
      }
    }, {
      key: 'closeLightbox',
      value: function closeLightbox() {
        this.setState({
          currentImage: 0,
          lightboxIsOpen: false
        });
      }
    }, {
      key: 'gotoPrevious',
      value: function gotoPrevious() {
        this.setState({
          currentImage: this.state.currentImage - 1
        });
      }
    }, {
      key: 'gotoNext',
      value: function gotoNext() {
        this.setState({
          currentImage: this.state.currentImage + 1
        });
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-lg-12' },
              _react2.default.createElement(
                _reactBootstrap.PageHeader,
                null,
                _react2.default.createElement('i', { className: 'fa fa-camera-retro' }),
                '\xA0\xA0DA-IICT Gallery'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_reactPhotoGallery2.default, { photos: images, onClick: this.openLightbox }),
            _react2.default.createElement(_reactImages2.default, {
              images: images,
              onClose: this.closeLightbox,
              onClickPrev: this.gotoPrevious,
              onClickNext: this.gotoNext,
              currentImage: this.state.currentImage,
              isOpen: this.state.lightboxIsOpen
            })
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement('br', null)
        );
      }
    }]);
    return DAGallery;
  }(_react2.default.Component);
  
  DAGallery.contextTypes = { setTitle: _react.PropTypes.func.isRequired };
  exports.default = DAGallery;

/***/ }),
/* 142 */
/***/ (function(module, exports) {

  module.exports = require("react-images");

/***/ }),
/* 143 */
/***/ (function(module, exports) {

  module.exports = require("react-photo-gallery");

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "public/gallary/1.jpg?72cc118fef8ad6990510bc1ec3d8188b";

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "public/gallary/2.jpg?3531270ce5ec843d01e930ad70294523";

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "public/gallary/3.jpg?d862bde4e0e2068cbdbb590f788c8e14";

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "public/gallary/4.jpg?5ed6da81cc060f256067789ac5f3094b";

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "public/gallary/5.jpg?42f2247e0a476f844b63cbc443125a94";

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "public/gallary/6.jpg?7e6ab7d5558a671dab80f6997ea13643";

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "public/gallary/7.jpg?52bf2e5a74eb366c2599a94317f554c4";

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "public/gallary/8.jpg?63a8799f9ad2b4ea5e9aeabab46827a7";

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "public/gallary/9.jpg?4f2337eeac8e1858d6a64ea8a0022df8";

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "public/gallary/10.jpg?97b6f516cca2bbc79db11834693b9d19";

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "public/gallary/11.jpg?c9be9e94e01c1ec5610facf05352c0ab";

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "public/gallary/12.jpg?e3c29a4a2e6961f08322b6052a66a2c4";

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "public/gallary/13.jpg?13c046a0d356a599f5d0dd09192bc70f";

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "public/gallary/14.jpg?4b75eea33f926eb8d80f191bce476c83";

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "public/gallary/15.jpg?3d2a92a916f84b91731d3bd5cf987ad3";

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "public/gallary/16.jpg?ba45ee8c242bc5a9322266f16da9654f";

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "public/gallary/17.png?060801d0b340148c8032a116c623c627";

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "public/gallary/18.jpg?85628d02b4f951ef4a297ff1f8344621";

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "public/gallary/19.jpg?9c02ed1e61f6ac11e244340ff893aee1";

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "public/gallary/20.jpg?db20099ff76482b44c79f813aca8834f";

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "public/gallary/21.jpg?760838e06cab939bdb57d40586a6c564";

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "public/gallary/22.jpg?ed682aaa17b507ab19b5a0446bf9c59e";

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "public/gallary/23.jpg?6317797ef95018409aee16be6c0edf2c";

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "public/gallary/24.jpg?25a1322f54ef976cb39a90c043c363b8";

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "public/gallary/25.jpg?b1d9ee71fe40609d066c966bb3a21404";

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "public/gallary/26.jpg?c9d1d3f0e4a8daebb1e599c7447f5450";

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "public/gallary/27.jpg?553012afcb2499252f34fab1ce46c8c3";

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "public/gallary/28.jpg?4d1aab32be9d6b336f8c168e242ea482";

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "public/gallary/29.jpg?12dc14e779fa1a40da5aae8b3f345f4e";

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "public/gallary/30.jpg?640174f986df51d4bce90a14fc963f5b";

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "public/gallary/31.jpg?0b990edfcc7cf2b75a994c6d5823e3cd";

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "public/gallary/32.jpg?3ef153adf9b25baa3739171d1156af6d";

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "public/gallary/33.jpg?b9ed08ac400e9c7a526dda43e368a9ff";

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "public/gallary/34.jpg?557795074f8c7af7743363c2abba90d6";

/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "public/gallary/35.jpg?81838b4112b18bf593fe130a4bf931c8";

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "public/gallary/36.jpg?afcf4fa0b62ebd28c4d651dfc5fa4451";

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "public/gallary/37.jpg?02457036aaeff0d7aea6b70dfce02477";

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "public/gallary/38.jpg?3aa8d5aafd74b990e403440cf989340d";

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "public/gallary/39.jpg?71e617103e136a37bfe93a805b3627ff";

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "public/gallary/40.jpg?f35894d45086eab7404fc1154cdb4a1d";

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _App = __webpack_require__(28);
  
  var _App2 = _interopRequireDefault(_App);
  
  var _ErrorPage = __webpack_require__(17);
  
  var _ErrorPage2 = _interopRequireDefault(_ErrorPage);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = {
  
    path: '/error',
  
    action: function action(_ref) {
      var render = _ref.render,
          context = _ref.context,
          error = _ref.error;
  
      // console.log('error obj inside error index.js', error);
      return render(_react2.default.createElement(
        _App2.default,
        { context: context, error: error },
        _react2.default.createElement(_ErrorPage2.default, { error: error })
      ), error.status || 500);
    }
  }; /**
      * React Starter Kit (https://www.reactstarterkit.com/)
      *
      * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
      *
      * This source code is licensed under the MIT license found in the
      * LICENSE.txt file in the root directory of this source tree.
      */

/***/ }),
/* 185 */
/***/ (function(module, exports) {

  module.exports = require("./assets");

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map