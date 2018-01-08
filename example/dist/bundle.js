require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"react-font-picker":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var FontPicker = (function (_Component) {
	_inherits(FontPicker, _Component);

	function FontPicker(props) {
		_classCallCheck(this, FontPicker);

		_get(Object.getPrototypeOf(FontPicker.prototype), 'constructor', this).call(this, props);

		// Bind component methods to this context
		this.onWrapperClick = this.onWrapperClick.bind(this);
		this.onOptionClick = this.onOptionClick.bind(this);
		this.onRipple = this.onRipple.bind(this);

		this.state = {
			isOptionsVisible: false,
			selectedFont: this.props.value
		};
	}

	_createClass(FontPicker, [{
		key: 'componentDidMount',
		value: function componentDidMount() {

			// Check if stylesheet already exists
			for (var i = 0; i < document.styleSheets.length; i++) {

				var styleSheet = document.styleSheets[i];
				var parser = document.createElement('a');
				parser.href = styleSheet.href;
				if (window.location.hostname === parser.hostname) {
					var cssRules = styleSheet.rules ? styleSheet.rules : styleSheet.cssRules;

					if (typeof cssRule !== "undefined" && cssRule !== null) {
						for (var j = 0; j < cssRules.length; ++j) {
							if (cssRules[j].selectorText == ".ReactFontPicker") return;
						}
					}
				}
			}

			// Create stylesheet on the fly
			var styles = document.createElement("style");

			styles.innerHTML = '\n\t\t\t.ReactFontPicker_Wrapper {\n\t\t\t\tposition: relative;\n\t\t\t\twidth: 100%;\n\t\t\t\theight: 30px;\n\t\t\t\tborder-bottom: 1px solid #ddd;\n\t\t\t}\n\t\t\t.ReactFontPicker_Wrapper:hover {\n\t\t\t\tcursor: pointer;\n\t\t\t}\n\t\t\t.ReactFontPicker_Label {\n\t\t\t\tposition: absolute;\n\t\t\t\tbottom: 8px;\n\t\t\t\tfont-size: 15px;\n\t\t\t\tcolor: #a0a0a0;\n\t\t\t}\n\t\t\t.ReactFontPicker_LabelFloat {\n\t\t\t\tposition: absolute;\n\t\t\t\tfont-size: 11px;\n\t\t\t\tbottom: 27px;\n\t\t\t\tcolor: #888;\n\t\t\t\t-webkit-transition: .2s all ease-in-out;\n\t\t\t\t-moz-transition: .2s all ease-in-out;\n\t\t\t\t-ms-transition: .2s all ease-in-out;\n\t\t\t\t-o-transition: .2s all ease-in-out;\n\t\t\t\ttransition: .2s all ease-in-out;\n\t\t\t}\n\t\t\t.ReactFontPicker_SelectedOption {\n\t\t\t\tposition: absolute;\n\t\t\t\theight: 25px;\n\t\t\t\tline-height: 35px;\n\t\t\t\tfont-size: 15px;\n\t\t\t}\n\t\t\t.ReactFontPicker_Button {\n\t\t\t\tposition: absolute;\n\t\t\t\tright: 5px;\n\t\t\t\ttop: 12px;\n\t\t\t\twidth: 0;\n\t\t\t\theight: 0;\n\t\t\t\tborder-style: solid;\n\t\t\t\tborder-width: 5px 6px 0 6px;\n\t\t\t\tborder-color: #dddddd transparent transparent transparent;\n\t\t\t}\n\t\t\t.ReactFontPicker_Button:hover {\n\t\t\t\tcursor: pointer;\n\t\t\t}\n\t\t\t.ReactFontPicker_Options {\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: -7.5px;\n\t\t\t\twidth: 100%;\n\t\t\t\theight: auto;\n\t\t\t\tmax-height: 200px;\n\t\t\t\toverflow-y: scroll;\n\t\t\t\tpadding-bottom: 15px;\n\t\t\t\tpadding-top: 15px;\n\t\t\t\tfloat: left;\n\t\t\t\tbackground-color: #fff;\n\n\t\t\t\tbox-shadow: 0px 0px 6px #ddd;\n\t\t\t\tz-index: 999;\n\n\t\t\t\t-webkit-transition: .15s all ease-in-out;\n\t\t\t\t-moz-transition: .15s all ease-in-out;\n\t\t\t\t-ms-transition: .15s all ease-in-out;\n\t\t\t\t-o-transition: .15s all ease-in-out;\n\t\t\t\ttransition: .15s all ease-in-out;\n\t\t\t}\n\t\t\t.ReactFontPicker_OptionsHidden {\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: -7.5px;\n\t\t\t\twidth: 100%;\n\t\t\t\theight: 0px;\n\t\t\t\tpadding-bottom: 0;\n\t\t\t\tpadding-top: 0;\n\t\t\t\tbackground-color: #fff;\n\t\t\t\toverflow: hidden;\n\n\t\t\t\tbox-shadow: 0px 0px 6px #ddd;\n\n\t\t\t\t-webkit-transition: .15s all ease-in-out;\n\t\t\t\t-moz-transition: .15s all ease-in-out;\n\t\t\t\t-ms-transition: .15s all ease-in-out;\n\t\t\t\t-o-transition: .15s all ease-in-out;\n\t\t\t\ttransition: .15s all ease-in-out;\n\t\t\t}\n\t\t\t.ReactFontPicker_Option {\n\t\t\t\tdisplay: block;\n\t\t\t\twidth: calc(100% - 20px);\n\t\t\t\tpadding-left: 10px;\n\t\t\t\tpadding-right: 10px;\n\t\t\t\theight: 30px;\n\t\t\t\tline-height: 30px;\n\t\t\t\tfloat: left;\n\n\t\t\t\t-webkit-transition: .1s all ease-in-out;\n\t\t\t\t-moz-transition: .1s all ease-in-out;\n\t\t\t\t-ms-transition: .1s all ease-in-out;\n\t\t\t\t-o-transition: .1s all ease-in-out;\n\t\t\t\ttransition: .1s all ease-in-out;\n\t\t\t}\n\t\t\t.ReactFontPicker_Option:hover {\n\t\t\t\tbackground-color: #eee;\n\t\t\t}\n\t\t\tdiv.ReactFontPicker_Wrapper .ripple {\n\t\t\t\tposition: relative;\n\t\t\t\toverflow: hidden;\n\t\t\t}\n\t\t\tdiv.ReactFontPicker_Wrapper .ripple-effect{\n\t\t\t\tposition: absolute;\n\t\t\t\tborder-radius: 50%;\n\t\t\t\twidth: 50px;\n\t\t\t\theight: 50px;\n\t\t\t\tbackground: white;\n\t\t\t\tanimation: ripple-animation 1.8s;\n\t\t\t}\n\t\t\t@keyframes ripple-animation {\n\t\t\t\tfrom {\n\t\t\t\t\ttransform: scale(1);\n\t\t\t\t\topacity: 0.4;\n\t\t\t\t}\n\t\t\t\tto {\n\t\t\t\t\ttransform: scale(100);\n\t\t\t\t\topacity: 0;\n\t\t\t\t}\n\t\t\t}\n\t\t\t.ReactFontPicker {\n\t\t\t\tdisplay: block;\n\t\t\t}\n\t\t';
			document.getElementsByTagName("head")[0].appendChild(styles);
		}
	}, {
		key: 'onWrapperClick',
		value: function onWrapperClick() {
			this.setState({ isOptionsVisible: !this.state.isOptionsVisible });
		}
	}, {
		key: 'onOptionClick',
		value: function onOptionClick(e, font) {
			e.stopPropagation();

			if (this.state.isOptionsVisible == false) return;

			if (typeof this.props.onChange == "function") this.props.onChange(font);

			this.setState({ isOptionsVisible: false, selectedFont: font });
		}
	}, {
		key: 'onRipple',
		value: function onRipple(e) {
			// Material UI ripple effect
			// e.preventDefault();
			e.stopPropagation();

			var target = e.target;

			var div = document.createElement("div"),
			    targetOffset = target.getBoundingClientRect(),
			    xPos = e.pageX - targetOffset.left,
			    yPos = e.pageY - targetOffset.top;

			div.classList.add('ripple-effect');
			div.style.top = parseInt(yPos - targetOffset.height / 2) + "px";
			div.style.left = parseInt(xPos - targetOffset.height) + "px";

			target.appendChild(div);

			setTimeout(function () {
				target.removeChild(div);
			}, 500);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this = this;

			var _props = this.props;
			var label = _props.label;
			var fonts = _props.fonts;
			var previews = _props.previews;
			var activeColor = _props.activeColor;

			// Get select font (value) from props or local state if props not given
			var value = this.props.value || this.state.selectedFont;

			return _react2['default'].createElement(
				'div',
				{ className: 'ReactFontPicker' },
				_react2['default'].createElement(
					'div',
					{ className: 'ReactFontPicker_Wrapper', onClick: this.onWrapperClick },
					_react2['default'].createElement(
						'div',
						{ className: value === "" ? "ReactFontPicker_Label" : "ReactFontPicker_LabelFloat" },
						label
					),
					_react2['default'].createElement(
						'div',
						{ className: 'ReactFontPicker_SelectedOption' },
						value
					),
					_react2['default'].createElement('div', { className: 'ReactFontPicker_Button' }),
					_react2['default'].createElement(
						'div',
						{ className: this.state.isOptionsVisible ? "ReactFontPicker_Options" : "ReactFontPicker_OptionsHidden" },
						fonts.map(function (n, i) {

							var style = {};

							if (value == n) style.color = activeColor;

							if (previews) style.fontFamily = n;

							return _react2['default'].createElement(
								'div',
								{ className: 'ReactFontPicker_Option ripple',
									style: style,
									key: i,
									onMouseDown: function (e) {
										return _this.onRipple(e);
									},
									onMouseUp: function (e) {
										return _this.onOptionClick(e, n);
									},
									onClick: function (e) {
										return _this.onOptionClick(e, n);
									}
								},
								n
							);
						})
					)
				)
			);
		}
	}]);

	return FontPicker;
})(_react.Component);

exports['default'] = FontPicker;

FontPicker.propTypes = {
	fonts: _react.PropTypes.array,
	label: _react.PropTypes.string,
	previews: _react.PropTypes.bool,
	activeColor: _react.PropTypes.string,
	value: _react.PropTypes.string,
	onChange: _react.PropTypes.func
};

FontPicker.defaultProps = {
	label: "",
	previews: true,
	fonts: ["Arial", "Arial Narrow", "Arial Black", "Courier New", "Georgia", "Lucida Console", "Lucida Sans Unicode", "Tahoma", "Times New Roman", "Verdana"],
	activeColor: "#64B5F6",
	value: "",
	onChange: function onChange(font) {
		console.log("FontPicker: " + font);
	}
};

exports['default'] = FontPicker;
module.exports = exports['default'];
/* Wrapper */ /* Floating label text */ /* Selected option */ /* Downdown button */ /* Options list */

},{"react":undefined}]},{},[])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvY3BvbGxvY2svUHJvamVjdHMvZm9ya2VkLXJlcG9zL3JlYWN0LWZvbnQtcGlja2VyL3NyYy9SZWFjdEZvbnRQaWNrZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O3FCQ0E0QyxPQUFPOzs7O0lBRTlCLFVBQVU7V0FBVixVQUFVOztBQUVuQixVQUZTLFVBQVUsQ0FFbEIsS0FBSyxFQUFFO3dCQUZDLFVBQVU7O0FBRzNCLDZCQUhpQixVQUFVLDZDQUdyQixLQUFLLEVBQUU7OztBQUdmLE1BQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDckQsTUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNuRCxNQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDOztBQUV6QyxNQUFJLENBQUMsS0FBSyxHQUFHO0FBQ1osbUJBQWdCLEVBQUUsS0FBSztBQUN2QixlQUFZLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLO0dBQzlCLENBQUE7RUFDQTs7Y0Fka0IsVUFBVTs7U0FnQmIsNkJBQUc7OztBQUduQixRQUFLLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7O0FBRW5ELFFBQUksVUFBVSxHQUFHLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdEMsUUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN6QyxVQUFNLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQyxJQUFJLENB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UUFDRyxDQUNMO09BQ0YsQ0FBQztNQUNHO0tBQ0Q7SUFDRCxDQUNMO0dBQ0Y7OztRQXJRbUIsVUFBVTs7O3FCQUFWLFVBQVU7O0FBd1EvQixVQUFVLENBQUMsU0FBUyxHQUFHO0FBQ3RCLE1BQUssRUFBRSxpQkFBVSxLQUFLO0FBQ3RCLE1BQUssRUFBRSxpQkFBVSxNQUFNO0FBQ3ZCLFNBQVEsRUFBRSxpQkFBVSxJQUFJO0FBQ3hCLFlBQVcsRUFBRSxpQkFBVSxNQUFNO0FBQzdCLE1BQUssRUFBRSxpQkFBVSxNQUFNO0FBQ3ZCLFNBQVEsRUFBRSxpQkFBVSxJQUFJO0NBQ3hCLENBQUE7O0FBRUQsVUFBVSxDQUFDLFlBQVksR0FBRztBQUN6QixNQUFLLEVBQUUsRUFBRTtBQUNULFNBQVEsRUFBRSxJQUFJO0FBQ2QsTUFBSyxFQUFFLENBQ04sT0FBTyxFQUNQLGNBQWMsRUFDZCxhQUFhLEVBQ2IsYUFBYSxFQUNiLFNBQVMsRUFDVCxnQkFBZ0IsRUFDaEIscUJBQXFCLEVBQ3JCLFFBQVEsRUFDUixpQkFBaUIsRUFDakIsU0FBUyxDQUNUO0FBQ0QsWUFBVyxFQUFFLFNBQVM7QUFDdEIsTUFBSyxFQUFFLEVBQUU7QUFDVCxTQUFRLEVBQUUsa0JBQVMsSUFBSSxFQUFFO0FBQ3hCLFNBQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxDQUFDO0VBQ25DO0NBQ0QsQ0FBQTs7cUJBRWMsVUFBVSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzLCBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvbnRQaWNrZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG5cdFx0Ly8gQmluZCBjb21wb25lbnQgbWV0aG9kcyB0byB0aGlzIGNvbnRleHRcblx0XHR0aGlzLm9uV3JhcHBlckNsaWNrID0gdGhpcy5vbldyYXBwZXJDbGljay5iaW5kKHRoaXMpO1xuXHRcdHRoaXMub25PcHRpb25DbGljayA9IHRoaXMub25PcHRpb25DbGljay5iaW5kKHRoaXMpO1xuXHRcdHRoaXMub25SaXBwbGUgPSB0aGlzLm9uUmlwcGxlLmJpbmQodGhpcyk7XG5cblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0aXNPcHRpb25zVmlzaWJsZTogZmFsc2UsXG5cdFx0XHRzZWxlY3RlZEZvbnQ6IHRoaXMucHJvcHMudmFsdWVcblx0XHR9XG4gIH1cblxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblxuXHRcdC8vIENoZWNrIGlmIHN0eWxlc2hlZXQgYWxyZWFkeSBleGlzdHNcblx0XHRmb3IgKHZhciBpPTA7IGkgPCBkb2N1bWVudC5zdHlsZVNoZWV0cy5sZW5ndGg7IGkrKykge1xuXG5cdFx0XHR2YXIgc3R5bGVTaGVldCA9IGRvY3VtZW50LnN0eWxlU2hlZXRzW2ldO1xuICAgICAgbGV0IHBhcnNlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgIHBhcnNlci5ocmVmID0gc3R5bGVTaGVldC5ocmVmO1xuICAgICAgaWYod2luZG93LmxvY2F0aW9uLmhvc3RuYW1lID09PSBwYXJzZXIuaG9zdG5hbWUpe1xuICAgICAgICB2YXIgY3NzUnVsZXMgPSBzdHlsZVNoZWV0LnJ1bGVzID8gc3R5bGVTaGVldC5ydWxlcyA6IHN0eWxlU2hlZXQuY3NzUnVsZXM7XG5cbiAgXHRcdFx0aWYgKHR5cGVvZiBjc3NSdWxlICE9PSBcInVuZGVmaW5lZFwiICYmIGNzc1J1bGUgIT09IG51bGwpIHtcbiAgXHRcdCAgICBmb3IgKHZhciBqID0gMDsgaiA8IGNzc1J1bGVzLmxlbmd0aDsgKytqKSB7XG4gIFx0XHQgICAgICAgIGlmKGNzc1J1bGVzW2pdLnNlbGVjdG9yVGV4dCA9PSBcIi5SZWFjdEZvbnRQaWNrZXJcIikgcmV0dXJuO1xuICBcdCAgICBcdH1cbiAgXHRcdFx0fVxuICAgICAgfVxuXHRcdH1cblxuXHRcdC8vIENyZWF0ZSBzdHlsZXNoZWV0IG9uIHRoZSBmbHlcblx0XHR2YXIgc3R5bGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdFx0c3R5bGVzLmlubmVySFRNTCA9IGBcblx0XHRcdC5SZWFjdEZvbnRQaWNrZXJfV3JhcHBlciB7XG5cdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdGhlaWdodDogMzBweDtcblx0XHRcdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG5cdFx0XHR9XG5cdFx0XHQuUmVhY3RGb250UGlja2VyX1dyYXBwZXI6aG92ZXIge1xuXHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0XHR9XG5cdFx0XHQuUmVhY3RGb250UGlja2VyX0xhYmVsIHtcblx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRib3R0b206IDhweDtcblx0XHRcdFx0Zm9udC1zaXplOiAxNXB4O1xuXHRcdFx0XHRjb2xvcjogI2EwYTBhMDtcblx0XHRcdH1cblx0XHRcdC5SZWFjdEZvbnRQaWNrZXJfTGFiZWxGbG9hdCB7XG5cdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0Zm9udC1zaXplOiAxMXB4O1xuXHRcdFx0XHRib3R0b206IDI3cHg7XG5cdFx0XHRcdGNvbG9yOiAjODg4O1xuXHRcdFx0XHQtd2Via2l0LXRyYW5zaXRpb246IC4ycyBhbGwgZWFzZS1pbi1vdXQ7XG5cdFx0XHRcdC1tb3otdHJhbnNpdGlvbjogLjJzIGFsbCBlYXNlLWluLW91dDtcblx0XHRcdFx0LW1zLXRyYW5zaXRpb246IC4ycyBhbGwgZWFzZS1pbi1vdXQ7XG5cdFx0XHRcdC1vLXRyYW5zaXRpb246IC4ycyBhbGwgZWFzZS1pbi1vdXQ7XG5cdFx0XHRcdHRyYW5zaXRpb246IC4ycyBhbGwgZWFzZS1pbi1vdXQ7XG5cdFx0XHR9XG5cdFx0XHQuUmVhY3RGb250UGlja2VyX1NlbGVjdGVkT3B0aW9uIHtcblx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRoZWlnaHQ6IDI1cHg7XG5cdFx0XHRcdGxpbmUtaGVpZ2h0OiAzNXB4O1xuXHRcdFx0XHRmb250LXNpemU6IDE1cHg7XG5cdFx0XHR9XG5cdFx0XHQuUmVhY3RGb250UGlja2VyX0J1dHRvbiB7XG5cdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0cmlnaHQ6IDVweDtcblx0XHRcdFx0dG9wOiAxMnB4O1xuXHRcdFx0XHR3aWR0aDogMDtcblx0XHRcdFx0aGVpZ2h0OiAwO1xuXHRcdFx0XHRib3JkZXItc3R5bGU6IHNvbGlkO1xuXHRcdFx0XHRib3JkZXItd2lkdGg6IDVweCA2cHggMCA2cHg7XG5cdFx0XHRcdGJvcmRlci1jb2xvcjogI2RkZGRkZCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcblx0XHRcdH1cblx0XHRcdC5SZWFjdEZvbnRQaWNrZXJfQnV0dG9uOmhvdmVyIHtcblx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdFx0fVxuXHRcdFx0LlJlYWN0Rm9udFBpY2tlcl9PcHRpb25zIHtcblx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHR0b3A6IC03LjVweDtcblx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdGhlaWdodDogYXV0bztcblx0XHRcdFx0bWF4LWhlaWdodDogMjAwcHg7XG5cdFx0XHRcdG92ZXJmbG93LXk6IHNjcm9sbDtcblx0XHRcdFx0cGFkZGluZy1ib3R0b206IDE1cHg7XG5cdFx0XHRcdHBhZGRpbmctdG9wOiAxNXB4O1xuXHRcdFx0XHRmbG9hdDogbGVmdDtcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcblxuXHRcdFx0XHRib3gtc2hhZG93OiAwcHggMHB4IDZweCAjZGRkO1xuXHRcdFx0XHR6LWluZGV4OiA5OTk7XG5cblx0XHRcdFx0LXdlYmtpdC10cmFuc2l0aW9uOiAuMTVzIGFsbCBlYXNlLWluLW91dDtcblx0XHRcdFx0LW1vei10cmFuc2l0aW9uOiAuMTVzIGFsbCBlYXNlLWluLW91dDtcblx0XHRcdFx0LW1zLXRyYW5zaXRpb246IC4xNXMgYWxsIGVhc2UtaW4tb3V0O1xuXHRcdFx0XHQtby10cmFuc2l0aW9uOiAuMTVzIGFsbCBlYXNlLWluLW91dDtcblx0XHRcdFx0dHJhbnNpdGlvbjogLjE1cyBhbGwgZWFzZS1pbi1vdXQ7XG5cdFx0XHR9XG5cdFx0XHQuUmVhY3RGb250UGlja2VyX09wdGlvbnNIaWRkZW4ge1xuXHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdHRvcDogLTcuNXB4O1xuXHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0aGVpZ2h0OiAwcHg7XG5cdFx0XHRcdHBhZGRpbmctYm90dG9tOiAwO1xuXHRcdFx0XHRwYWRkaW5nLXRvcDogMDtcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcblx0XHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblxuXHRcdFx0XHRib3gtc2hhZG93OiAwcHggMHB4IDZweCAjZGRkO1xuXG5cdFx0XHRcdC13ZWJraXQtdHJhbnNpdGlvbjogLjE1cyBhbGwgZWFzZS1pbi1vdXQ7XG5cdFx0XHRcdC1tb3otdHJhbnNpdGlvbjogLjE1cyBhbGwgZWFzZS1pbi1vdXQ7XG5cdFx0XHRcdC1tcy10cmFuc2l0aW9uOiAuMTVzIGFsbCBlYXNlLWluLW91dDtcblx0XHRcdFx0LW8tdHJhbnNpdGlvbjogLjE1cyBhbGwgZWFzZS1pbi1vdXQ7XG5cdFx0XHRcdHRyYW5zaXRpb246IC4xNXMgYWxsIGVhc2UtaW4tb3V0O1xuXHRcdFx0fVxuXHRcdFx0LlJlYWN0Rm9udFBpY2tlcl9PcHRpb24ge1xuXHRcdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdFx0d2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xuXHRcdFx0XHRwYWRkaW5nLWxlZnQ6IDEwcHg7XG5cdFx0XHRcdHBhZGRpbmctcmlnaHQ6IDEwcHg7XG5cdFx0XHRcdGhlaWdodDogMzBweDtcblx0XHRcdFx0bGluZS1oZWlnaHQ6IDMwcHg7XG5cdFx0XHRcdGZsb2F0OiBsZWZ0O1xuXG5cdFx0XHRcdC13ZWJraXQtdHJhbnNpdGlvbjogLjFzIGFsbCBlYXNlLWluLW91dDtcblx0XHRcdFx0LW1vei10cmFuc2l0aW9uOiAuMXMgYWxsIGVhc2UtaW4tb3V0O1xuXHRcdFx0XHQtbXMtdHJhbnNpdGlvbjogLjFzIGFsbCBlYXNlLWluLW91dDtcblx0XHRcdFx0LW8tdHJhbnNpdGlvbjogLjFzIGFsbCBlYXNlLWluLW91dDtcblx0XHRcdFx0dHJhbnNpdGlvbjogLjFzIGFsbCBlYXNlLWluLW91dDtcblx0XHRcdH1cblx0XHRcdC5SZWFjdEZvbnRQaWNrZXJfT3B0aW9uOmhvdmVyIHtcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogI2VlZTtcblx0XHRcdH1cblx0XHRcdGRpdi5SZWFjdEZvbnRQaWNrZXJfV3JhcHBlciAucmlwcGxlIHtcblx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXHRcdFx0fVxuXHRcdFx0ZGl2LlJlYWN0Rm9udFBpY2tlcl9XcmFwcGVyIC5yaXBwbGUtZWZmZWN0e1xuXHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0XHRcdFx0d2lkdGg6IDUwcHg7XG5cdFx0XHRcdGhlaWdodDogNTBweDtcblx0XHRcdFx0YmFja2dyb3VuZDogd2hpdGU7XG5cdFx0XHRcdGFuaW1hdGlvbjogcmlwcGxlLWFuaW1hdGlvbiAxLjhzO1xuXHRcdFx0fVxuXHRcdFx0QGtleWZyYW1lcyByaXBwbGUtYW5pbWF0aW9uIHtcblx0XHRcdFx0ZnJvbSB7XG5cdFx0XHRcdFx0dHJhbnNmb3JtOiBzY2FsZSgxKTtcblx0XHRcdFx0XHRvcGFjaXR5OiAwLjQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0dG8ge1xuXHRcdFx0XHRcdHRyYW5zZm9ybTogc2NhbGUoMTAwKTtcblx0XHRcdFx0XHRvcGFjaXR5OiAwO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQuUmVhY3RGb250UGlja2VyIHtcblx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHR9XG5cdFx0YDtcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF0uYXBwZW5kQ2hpbGQoc3R5bGVzKTtcblx0fVxuXG5cdG9uV3JhcHBlckNsaWNrKCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoe2lzT3B0aW9uc1Zpc2libGU6ICF0aGlzLnN0YXRlLmlzT3B0aW9uc1Zpc2libGV9KTtcblx0fVxuXG5cdG9uT3B0aW9uQ2xpY2soZSwgZm9udCkge1xuXHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cblx0XHRpZiAodGhpcy5zdGF0ZS5pc09wdGlvbnNWaXNpYmxlID09IGZhbHNlKVxuXHRcdFx0cmV0dXJuO1xuXG5cdFx0aWYgKHR5cGVvZiB0aGlzLnByb3BzLm9uQ2hhbmdlID09IFwiZnVuY3Rpb25cIilcblx0XHRcdHRoaXMucHJvcHMub25DaGFuZ2UoZm9udCk7XG5cblx0XHR0aGlzLnNldFN0YXRlKHtpc09wdGlvbnNWaXNpYmxlOiBmYWxzZSwgc2VsZWN0ZWRGb250OiBmb250fSk7XG5cdH1cblxuXHRvblJpcHBsZShlKSB7XG5cdFx0Ly8gTWF0ZXJpYWwgVUkgcmlwcGxlIGVmZmVjdFxuXHRcdC8vIGUucHJldmVudERlZmF1bHQoKTtcblx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG5cdFx0bGV0IHRhcmdldCA9IGUudGFyZ2V0O1xuXG5cdFx0dmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXG5cdFx0XHRcdHRhcmdldE9mZnNldCA9IHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcblx0XHRcdFx0eFBvcyA9IGUucGFnZVggLSB0YXJnZXRPZmZzZXQubGVmdCxcblx0XHRcdFx0eVBvcyA9IGUucGFnZVkgLSB0YXJnZXRPZmZzZXQudG9wO1xuXG5cdFx0ZGl2LmNsYXNzTGlzdC5hZGQoJ3JpcHBsZS1lZmZlY3QnKTtcblx0XHRkaXYuc3R5bGUudG9wID0gcGFyc2VJbnQoeVBvcyAtIHRhcmdldE9mZnNldC5oZWlnaHQgLyAyKSArIFwicHhcIjtcblx0XHRkaXYuc3R5bGUubGVmdCA9IHBhcnNlSW50KHhQb3MgLSB0YXJnZXRPZmZzZXQuaGVpZ2h0KSArIFwicHhcIlxuXG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKGRpdik7XG5cblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG5cdFx0XHR0YXJnZXQucmVtb3ZlQ2hpbGQoZGl2KTtcblx0XHR9LCA1MDApO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXG5cdFx0Y29uc3QgeyBsYWJlbCwgZm9udHMsIHByZXZpZXdzLCBhY3RpdmVDb2xvciB9ID0gdGhpcy5wcm9wcztcblxuXHRcdC8vIEdldCBzZWxlY3QgZm9udCAodmFsdWUpIGZyb20gcHJvcHMgb3IgbG9jYWwgc3RhdGUgaWYgcHJvcHMgbm90IGdpdmVuXG5cdFx0Y29uc3QgdmFsdWUgPSB0aGlzLnByb3BzLnZhbHVlIHx8IHRoaXMuc3RhdGUuc2VsZWN0ZWRGb250O1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiUmVhY3RGb250UGlja2VyXCI+XG5cblx0XHRcdFx0ey8qIFdyYXBwZXIgKi99XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiUmVhY3RGb250UGlja2VyX1dyYXBwZXJcIiBvbkNsaWNrPXt0aGlzLm9uV3JhcHBlckNsaWNrfT5cblxuXHRcdFx0XHRcdHsvKiBGbG9hdGluZyBsYWJlbCB0ZXh0ICovfVxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXt2YWx1ZSA9PT0gXCJcIiA/IFwiUmVhY3RGb250UGlja2VyX0xhYmVsXCIgOiBcIlJlYWN0Rm9udFBpY2tlcl9MYWJlbEZsb2F0XCJ9PntsYWJlbH08L2Rpdj5cblxuXHRcdFx0XHRcdHsvKiBTZWxlY3RlZCBvcHRpb24gKi99XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJSZWFjdEZvbnRQaWNrZXJfU2VsZWN0ZWRPcHRpb25cIj5cblx0XHRcdFx0XHRcdHt2YWx1ZX1cblx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdHsvKiBEb3duZG93biBidXR0b24gKi99XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJSZWFjdEZvbnRQaWNrZXJfQnV0dG9uXCI+PC9kaXY+XG5cblx0XHRcdFx0XHR7LyogT3B0aW9ucyBsaXN0ICovfVxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmlzT3B0aW9uc1Zpc2libGUgPyBcIlJlYWN0Rm9udFBpY2tlcl9PcHRpb25zXCIgOiBcIlJlYWN0Rm9udFBpY2tlcl9PcHRpb25zSGlkZGVuXCJ9PlxuXHRcdFx0XHRcdFx0e2ZvbnRzLm1hcCgobiwgaSkgPT4ge1xuXG5cdFx0XHRcdFx0XHRcdHZhciBzdHlsZSA9IHt9O1xuXG5cdFx0XHRcdFx0XHRcdGlmICh2YWx1ZSA9PSBuKVxuXHRcdFx0XHRcdFx0XHRcdHN0eWxlLmNvbG9yID0gYWN0aXZlQ29sb3I7XG5cblx0XHRcdFx0XHRcdFx0aWYgKHByZXZpZXdzKVxuXHRcdFx0XHRcdFx0XHRcdHN0eWxlLmZvbnRGYW1pbHkgPSBuO1xuXG5cdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJSZWFjdEZvbnRQaWNrZXJfT3B0aW9uIHJpcHBsZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCBzdHlsZT17c3R5bGV9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCBrZXk9e2l9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCBvbk1vdXNlRG93bj17KGUpID0+IHRoaXMub25SaXBwbGUoZSl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCBvbk1vdXNlVXA9eyhlKSA9PiB0aGlzLm9uT3B0aW9uQ2xpY2soZSwgbil9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCBvbkNsaWNrPXsoZSkgPT4gdGhpcy5vbk9wdGlvbkNsaWNrKGUsIG4pfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgPlxuXHRcdFx0XHRcdFx0XHRcdFx0e259XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59XG5cbkZvbnRQaWNrZXIucHJvcFR5cGVzID0ge1xuXHRmb250czogUHJvcFR5cGVzLmFycmF5LFxuXHRsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcblx0cHJldmlld3M6IFByb3BUeXBlcy5ib29sLFxuXHRhY3RpdmVDb2xvcjogUHJvcFR5cGVzLnN0cmluZyxcblx0dmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cdG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbn1cblxuRm9udFBpY2tlci5kZWZhdWx0UHJvcHMgPSB7XG5cdGxhYmVsOiBcIlwiLFxuXHRwcmV2aWV3czogdHJ1ZSxcblx0Zm9udHM6IFtcblx0XHRcIkFyaWFsXCIsXG5cdFx0XCJBcmlhbCBOYXJyb3dcIixcblx0XHRcIkFyaWFsIEJsYWNrXCIsXG5cdFx0XCJDb3VyaWVyIE5ld1wiLFxuXHRcdFwiR2VvcmdpYVwiLFxuXHRcdFwiTHVjaWRhIENvbnNvbGVcIixcblx0XHRcIkx1Y2lkYSBTYW5zIFVuaWNvZGVcIixcblx0XHRcIlRhaG9tYVwiLFxuXHRcdFwiVGltZXMgTmV3IFJvbWFuXCIsXG5cdFx0XCJWZXJkYW5hXCJcblx0XSxcblx0YWN0aXZlQ29sb3I6IFwiIzY0QjVGNlwiLFxuXHR2YWx1ZTogXCJcIixcblx0b25DaGFuZ2U6IGZ1bmN0aW9uKGZvbnQpIHtcblx0XHRjb25zb2xlLmxvZyhcIkZvbnRQaWNrZXI6IFwiICsgZm9udCk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9udFBpY2tlcjtcbiJdfQ==
