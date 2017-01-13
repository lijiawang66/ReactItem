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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _header = __webpack_require__(1);
	
	var _header2 = _interopRequireDefault(_header);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	__webpack_require__(2);
	var Layout = __webpack_require__(6);
	var Section = __webpack_require__(7);
	var Footer = __webpack_require__(8);
	
	ReactDOM.render(React.createElement(Layout, null), document.getElementById("app"));
	ReactDOM.render(React.createElement(_header2.default, null), document.getElementById('header'));
	ReactDOM.render(React.createElement(Section, null), document.getElementById('section'));
	ReactDOM.render(React.createElement(Footer, null), document.getElementById('footer'));

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Header = function (_React$Component) {
		_inherits(Header, _React$Component);
	
		function Header() {
			_classCallCheck(this, Header);
	
			return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
		}
	
		_createClass(Header, [{
			key: "render",
			value: function render() {
				return React.createElement(
					"div",
					null,
					React.createElement(
						"div",
						{ className: "headBanner" },
						React.createElement(
							"div",
							{ className: "swiper-container" },
							React.createElement(
								"div",
								{ className: "swiper-wrapper" },
								React.createElement(
									"div",
									{ className: "swiper-slide" },
									React.createElement("img", { src: "https://ps.sfbest.com/mapp/resource/6f/6fb57cb4e284fe66f59c0f41f88e2e59.jpg" })
								),
								React.createElement(
									"div",
									{ className: "swiper-slide" },
									React.createElement("img", { src: "https://ps.sfbest.com/mapp/resource/6f/6fb57cb4e284fe66f59c0f41f88e2e59.jpg" })
								),
								React.createElement(
									"div",
									{ className: "swiper-slide" },
									React.createElement("img", { src: "https://ps.sfbest.com/mapp/resource/6f/6fb57cb4e284fe66f59c0f41f88e2e59.jpg" })
								)
							),
							React.createElement("div", { className: "swiper-pagination" })
						)
					)
				);
			}
		}, {
			key: "componentDidMount",
			value: function componentDidMount() {
				var swiper = new Swiper('.swiper-container', {
					pagination: '.swiper-pagination',
					autoplay: 3000,
					autoplayDisableOnInteraction: true
				});
			}
		}]);
	
		return Header;
	}(React.Component);
	
	exports.default = Header;

/***/ },
/* 2 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ function(module, exports) {

	"use strict";
	
	var Layout = React.createClass({
		displayName: "Layout",
	
		render: function render() {
			return React.createElement(
				"div",
				null,
				React.createElement("div", { id: "header" }),
				React.createElement("div", { id: "section" }),
				React.createElement("div", { id: "footer" })
			);
		}
	});
	
	module.exports = Layout;

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";
	
	var Section = React.createClass({
		displayName: "Section",
	
		getDefaultProps: function getDefaultProps() {
			return {
				"url": "http://datainfo.duapp.com/shopdata/getBanner.php"
			};
		},
		getInitialState: function getInitialState() {
			return {
				"reset": ""
			};
		},
		componentWillMount: function componentWillMount() {
			var This = this;
			$.ajax({
				url: this.props.url,
				dataType: "jsonp",
				success: function success(res) {
					This.setState({
						"reset": res
					});
				}
			});
		},
		render: function render() {
			// console.log(this.state.reset);
			var arr = [];
			var reset = this.state.reset;
			if (reset) {
				for (var i = 0; i < reset.length; i++) {
					console.log(reset[i].goodsName);
					arr.push(React.createElement(
						"p",
						null,
						reset[i].goodsName
					));
				}
			}
			return React.createElement(
				"div",
				null,
				React.createElement(
					"div",
					null,
					arr
				)
			);
		}
	});
	
	module.exports = Section;

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";
	
	var Footer = React.createClass({
		displayName: "Footer",
	
		render: function render() {
			return React.createElement(
				"div",
				null,
				"\u6211\u662Ffooter"
			);
		}
	});
	
	module.exports = Footer;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map