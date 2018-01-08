require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var FontPicker = require('react-font-picker');

var App = React.createClass({
	displayName: 'App',

	onFontChange: function onFontChange(font) {
		this.setState({ font: font });
	},

	getInitialState: function getInitialState() {
		return { font: "Arial" };
	},

	componentDidUpdate: function componentDidUpdate() {
		console.log(this.state);
	},

	render: function render() {

		return React.createElement(
			'div',
			null,
			React.createElement(
				'b',
				null,
				'With local component state:'
			),
			React.createElement('br', null),
			React.createElement('br', null),
			React.createElement('br', null),
			React.createElement('br', null),
			React.createElement(FontPicker, {
				label: 'Select Font',
				value: '',
				previews: true,
				onChange: function (font) {
					return console.log(font);
				}
			}),
			React.createElement('br', null),
			React.createElement('br', null),
			React.createElement('br', null),
			React.createElement(
				'b',
				null,
				'With parent state:'
			),
			React.createElement('br', null),
			React.createElement('br', null),
			React.createElement('br', null),
			React.createElement('br', null),
			React.createElement(FontPicker, {
				label: 'Select Font',
				value: this.state.font,
				previews: true,
				onChange: this.onFontChange
			})
		);
	}
});

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));

},{"react":undefined,"react-dom":undefined,"react-font-picker":undefined}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvY3BvbGxvY2svUHJvamVjdHMvZm9ya2VkLXJlcG9zL3JlYWN0LWZvbnQtcGlja2VyL2V4YW1wbGUvc3JjL2V4YW1wbGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUM3QixJQUFJLFFBQVEsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDcEMsSUFBSSxVQUFVLEdBQUcsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7O0FBRTlDLElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7OztBQUUzQixhQUFZLEVBQUUsc0JBQVMsSUFBSSxFQUFDO0FBQzNCLE1BQUksQ0FBQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztFQUM1Qjs7QUFFRCxnQkFBZSxFQUFFLDJCQUFVO0FBQzFCLFNBQU8sRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFDLENBQUE7RUFDdEI7O0FBRUQsbUJBQWtCLEVBQUUsOEJBQVc7QUFDOUIsU0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7RUFDdkI7O0FBRUQsT0FBTSxFQUFFLGtCQUFVOztBQUVqQixTQUNDOzs7R0FFQzs7OztJQUFrQztHQUNsQywrQkFBSztHQUFBLCtCQUFLO0dBQUEsK0JBQUs7R0FBQSwrQkFBSztHQUVwQixvQkFBQyxVQUFVO0FBQ1YsU0FBSyxFQUFDLGFBQWE7QUFDbkIsU0FBSyxFQUFDLEVBQUU7QUFDUixZQUFRLEVBQUUsSUFBSSxBQUFDO0FBQ2YsWUFBUSxFQUFFLFVBQUMsSUFBSTtZQUFLLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDO0tBQUEsQUFBQztLQUNyQztHQUVGLCtCQUFLO0dBQUEsK0JBQUs7R0FBQSwrQkFBSztHQUNmOzs7O0lBQXlCO0dBQ3pCLCtCQUFLO0dBQUEsK0JBQUs7R0FBQSwrQkFBSztHQUFBLCtCQUFLO0dBRXBCLG9CQUFDLFVBQVU7QUFDVixTQUFLLEVBQUMsYUFBYTtBQUNuQixTQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEFBQUM7QUFDdkIsWUFBUSxFQUFFLElBQUksQUFBQztBQUNmLFlBQVEsRUFBRSxJQUFJLENBQUMsWUFBWSxBQUFDO0tBQzNCO0dBQ0csQ0FDTDtFQUNGO0NBQ0QsQ0FBQyxDQUFDOztBQUVILFFBQVEsQ0FBQyxNQUFNLENBQUMsb0JBQUMsR0FBRyxPQUFHLEVBQUUsUUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgUmVhY3RET00gPSByZXF1aXJlKCdyZWFjdC1kb20nKTtcbnZhciBGb250UGlja2VyID0gcmVxdWlyZSgncmVhY3QtZm9udC1waWNrZXInKTtcblxudmFyIEFwcCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblxuXHRvbkZvbnRDaGFuZ2U6IGZ1bmN0aW9uKGZvbnQpe1xuXHRcdHRoaXMuc2V0U3RhdGUoe2ZvbnQ6IGZvbnR9KTtcblx0fSxcblxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIHtmb250OiBcIkFyaWFsXCJ9XG5cdH0sXG5cblx0Y29tcG9uZW50RGlkVXBkYXRlOiBmdW5jdGlvbigpIHtcblx0XHRjb25zb2xlLmxvZyh0aGlzLnN0YXRlKVxuXHR9LFxuXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2PlxuXG5cdFx0XHRcdDxiPldpdGggbG9jYWwgY29tcG9uZW50IHN0YXRlOjwvYj5cblx0XHRcdFx0PGJyLz48YnIvPjxici8+PGJyLz5cblxuXHRcdFx0XHQ8Rm9udFBpY2tlclxuXHRcdFx0XHRcdGxhYmVsPVwiU2VsZWN0IEZvbnRcIlxuXHRcdFx0XHRcdHZhbHVlPVwiXCJcblx0XHRcdFx0XHRwcmV2aWV3cz17dHJ1ZX1cblx0XHRcdFx0XHRvbkNoYW5nZT17KGZvbnQpID0+IGNvbnNvbGUubG9nKGZvbnQpfVxuXHRcdFx0XHQvPlxuXG5cdFx0XHRcdDxici8+PGJyLz48YnIvPlxuXHRcdFx0XHQ8Yj5XaXRoIHBhcmVudCBzdGF0ZTo8L2I+XG5cdFx0XHRcdDxici8+PGJyLz48YnIvPjxici8+XG5cblx0XHRcdFx0PEZvbnRQaWNrZXJcblx0XHRcdFx0XHRsYWJlbD1cIlNlbGVjdCBGb250XCJcblx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS5mb250fVxuXHRcdFx0XHRcdHByZXZpZXdzPXt0cnVlfVxuXHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLm9uRm9udENoYW5nZX1cblx0XHRcdFx0Lz5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pO1xuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcbiJdfQ==
