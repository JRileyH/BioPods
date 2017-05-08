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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _createClass=function(){function a(b,c){for(var e,d=0;d<c.length;d++)e=c[d],e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(b,e.key,e)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}();Object.defineProperty(exports,"__esModule",{value:!0});function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var PlantPart=function(){function a(b,c,d){_classCallCheck(this,a),this.type="untyped",this.plant=b,this.id=this.plant.availableId++,this.parent=c,this.children=[],this.level=c?c.level+1:0,this._verifyProps(d)&&(this.pos=d.pos,this.dir=this._clampDir(d.dir))}return _createClass(a,[{key:"_verifyProps",value:function _verifyProps(b){return b.hasOwnProperty("pos")||"point"!==b.pos.geom?!!b.hasOwnProperty("dir")||(console.error("MISSING PROPS.DIR"),!1):(console.error("MISSING PROPS.POS"),!1)}},{key:"_clampDir",value:function _clampDir(b){var c=b%360;return 0>c&&(c+=360),c}},{key:"traverse_bfs",value:function traverse_bfs(b){for(var d,c=[this];0<c.length;)if(d=c.shift(),b(d),!!d.children.length){var e=!0,f=!1,g=void 0;try{for(var j,k,h=d.children[Symbol.iterator]();!(e=(j=h.next()).done);e=!0)k=j.value,c.push(k)}catch(k){f=!0,g=k}finally{try{!e&&h.return&&h.return()}finally{if(f)throw g}}}return this}},{key:"traverse_bfs_shuffle",value:function traverse_bfs_shuffle(b){for(var d,c=[this];0<c.length;)if(d=c.shift(),b(d),!!d.children.length){var e=!0,f=!1,g=void 0;try{for(var j,k,h=d.children[Symbol.iterator]();!(e=(j=h.next()).done);e=!0)k=j.value,c.push(k)}catch(k){f=!0,g=k}finally{try{!e&&h.return&&h.return()}finally{if(f)throw g}}}return this}},{key:"destroyChild",value:function destroyChild(b){return this.children=this.children.filter(function(c){return c.id!=b}),this}},{key:"destroy",value:function destroy(){var b=this;return 0===this.id?this:(this.parent.destroyChild(this.id),this.traverse_bfs(function(c){b.plant.counts[c.type]--}),this.parent)}},{key:"grow",value:function grow(){var b=!0,c=!1,d=void 0;try{for(var f,g,e=this.children[Symbol.iterator]();!(b=(f=e.next()).done);b=!0)g=f.value,g.grow()}catch(g){c=!0,d=g}finally{try{!b&&e.return&&e.return()}finally{if(c)throw d}}return this}},{key:"render",value:function render(b){var c=!0,d=!1,e=void 0;try{for(var g,h,f=this.children[Symbol.iterator]();!(c=(g=f.next()).done);c=!0)h=g.value,h.render(b)}catch(h){d=!0,e=h}finally{try{!c&&f.return&&f.return()}finally{if(d)throw e}}return this}}]),a}();exports.default=PlantPart;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _createClass=function(){function a(b,c){for(var e,d=0;d<c.length;d++)e=c[d],e.enumerable=e.enumerable||!1,e.configurable=!0,'value'in e&&(e.writable=!0),Object.defineProperty(b,e.key,e)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),_get=function a(b,c,d){null===b&&(b=Function.prototype);var e=Object.getOwnPropertyDescriptor(b,c);if(e===void 0){var f=Object.getPrototypeOf(b);return null===f?void 0:a(f,c,d)}if('value'in e)return e.value;var g=e.get;return void 0===g?void 0:g.call(d)};Object.defineProperty(exports,'__esModule',{value:!0});function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError('Cannot call a class as a function')}function _possibleConstructorReturn(a,b){if(!a)throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return b&&('object'==typeof b||'function'==typeof b)?b:a}function _inherits(a,b){if('function'!=typeof b&&null!==b)throw new TypeError('Super expression must either be null or a function, not '+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}var Line=__webpack_require__(2).default.Line,Segment=function(a){function b(c,d,e){_classCallCheck(this,b);var f=_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,c,d,e));return f.line=new Line(f.parent.pos,f.pos),f.width=1,f}return _inherits(b,a),_createClass(b,[{key:'grow',value:function grow(){_get(b.prototype.__proto__||Object.getPrototypeOf(b.prototype),'grow',this).call(this),this.width=this.plant.maxLevel/this.trunkWidth*this.level}},{key:'render',value:function render(c){_get(b.prototype.__proto__||Object.getPrototypeOf(b.prototype),'render',this).call(this,c),this.line.render(c,2>=this.width?'#64873a':'#5b4f3b',this.width)}}]),b}(__webpack_require__(0).default);exports.default=Segment;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,'__esModule',{value:!0}),exports.default={Math:__webpack_require__(16).default,Point:__webpack_require__(17).default,Line:__webpack_require__(15).default};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _createClass=function(){function a(b,c){for(var e,d=0;d<c.length;d++)e=c[d],e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(b,e.key,e)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),_get=function a(b,c,d){null===b&&(b=Function.prototype);var e=Object.getOwnPropertyDescriptor(b,c);if(e===void 0){var f=Object.getPrototypeOf(b);return null===f?void 0:a(f,c,d)}if("value"in e)return e.value;var g=e.get;return void 0===g?void 0:g.call(d)};var _Mathfloor=Math.floor,_MathtoRad=Math.toRad,_Mathchance=Math.chance;Object.defineProperty(exports,"__esModule",{value:!0});function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return b&&("object"==typeof b||"function"==typeof b)?b:a}function _inherits(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}var Meristem=function(a){function b(c,d,e){_classCallCheck(this,b);var f=_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,c,d,e));return f.type="meristem",f.plant.counts.meristem++,f._ctb=null,f}return _inherits(b,a),_createClass(b,[{key:"_chanceToBranch",value:function _chanceToBranch(){if(!!this._ctb)return this._ctb;for(var c=this.parent,d=0;"stem"===c.type;)c=c.parent,d+=this.plant.branchRate;return this._ctb=d,d}},{key:"grow",value:function grow(){if(_get(b.prototype.__proto__||Object.getPrototypeOf(b.prototype),"grow",this).call(this),_Mathchance(1-this.plant.growthRate*this.level)){this._ctb=null;var c=_Mathchance(this._chanceToBranch())?new(__webpack_require__(5).default)(this.plant,this.parent,{pos:this.pos.copy(),dir:this.dir}):new(__webpack_require__(9).default)(this.plant,this.parent,{pos:this.pos.copy(),dir:this.dir});this.parent.destroyChild(this.id),this.parent.children.push(c),this.parent=c,this.parent.children.push(this),this.level++,this.level>this.plant.maxLevel&&(this.plant.maxLevel=this.level),this.pos.slide(_Mathfloor(this.plant.segmentLength*Math.sin(_MathtoRad(this.dir))),-_Mathfloor(this.plant.segmentLength*Math.cos(_MathtoRad(this.dir)))),this.dir+=Math.span(-this.level,this.level)}}}]),b}(__webpack_require__(0).default);exports.default=Meristem;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,'__esModule',{value:!0}),exports.default={Plant:__webpack_require__(7).default,ToolBox:__webpack_require__(14).default};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _createClass=function(){function a(b,d){for(var f,e=0;e<d.length;e++)f=d[e],f.enumerable=f.enumerable||!1,f.configurable=!0,'value'in f&&(f.writable=!0),Object.defineProperty(b,f.key,f)}return function(b,d,e){return d&&a(b.prototype,d),e&&a(b,e),b}}(),_get=function a(b,d,e){null===b&&(b=Function.prototype);var f=Object.getOwnPropertyDescriptor(b,d);if(f===void 0){var g=Object.getPrototypeOf(b);return null===g?void 0:a(g,d,e)}if('value'in f)return f.value;var h=f.get;return void 0===h?void 0:h.call(e)};var _Mathfloor=Math.floor,_MathtoRad=Math.toRad,_Mathchance=Math.chance;Object.defineProperty(exports,'__esModule',{value:!0});function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError('Cannot call a class as a function')}function _possibleConstructorReturn(a,b){if(!a)throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return b&&('object'==typeof b||'function'==typeof b)?b:a}function _inherits(a,b){if('function'!=typeof b&&null!==b)throw new TypeError('Super expression must either be null or a function, not '+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}var Joint=function(a){function b(d,e,f){_classCallCheck(this,b);var g=_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,d,e,f));g.type='joint',g.plant.counts.joint++;var h=_Mathchance(0.5)?g.dir+30:g.dir-30;return g.children.push(new(__webpack_require__(6).default)(g.plant,g,{pos:g.pos.copy(_Mathfloor(g.plant.segmentLength*Math.sin(_MathtoRad(h))),-_Mathfloor(g.plant.segmentLength*Math.cos(_MathtoRad(h)))),dir:h})),g}return _inherits(b,a),_createClass(b,[{key:'_chanceToBranch',value:function _chanceToBranch(){var d=999;return this.traverse_bfs(function(e){'meristem'===e.type&&(d=Math.min(d,e.level))}),_Mathchance(0.01*d)}},{key:'grow',value:function grow(){if(_get(b.prototype.__proto__||Object.getPrototypeOf(b.prototype),'grow',this).call(this),10>this.plant.counts.meristem&&this._chanceToBranch()){var d=!0,e=!1,f=void 0;try{for(var h,j,g=this.children[Symbol.iterator]();!(d=(h=g.next()).done);d=!0)j=h.value,'leaf'===j.type&&j.destroy()}catch(j){e=!0,f=j}finally{try{!d&&g.return&&g.return()}finally{if(e)throw f}}this.children.push(new(__webpack_require__(3).default)(this.plant,this,{pos:this.pos.copy(0,-this.plant.segmentLength),dir:_Mathchance(0.5)?this.dir+30:this.dir-30}))}}}]),b}(__webpack_require__(1).default);exports.default=Joint;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _createClass=function(){function a(b,c){for(var e,d=0;d<c.length;d++)e=c[d],e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(b,e.key,e)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),_get=function a(b,c,d){null===b&&(b=Function.prototype);var e=Object.getOwnPropertyDescriptor(b,c);if(e===void 0){var f=Object.getPrototypeOf(b);return null===f?void 0:a(f,c,d)}if("value"in e)return e.value;var g=e.get;return void 0===g?void 0:g.call(d)};var _Mathcos=Math.cos,_Mathfloor=Math.floor,_Mathsin=Math.sin,_MathtoRad=Math.toRad;Object.defineProperty(exports,"__esModule",{value:!0});function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return b&&("object"==typeof b||"function"==typeof b)?b:a}function _inherits(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}var Leaf=function(a){function b(c,d,e){_classCallCheck(this,b);var f=_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,c,d,e));return f.type="leaf",f.plant.counts.leaf++,f.tip=f.pos.copy(_Mathfloor(f.plant.leafLength*_Mathsin(_MathtoRad(f.dir))),-_Mathfloor(f.plant.leafLength*_Mathcos(_MathtoRad(f.dir)))),f.edge1=f.pos.copy(_Mathfloor(f.plant.leafLength/f.plant.leafSharpness*_Mathsin(_MathtoRad(f.dir+f.plant.leafWidth))),-_Mathfloor(f.plant.leafLength/f.plant.leafSharpness*_Mathcos(_MathtoRad(f.dir+f.plant.leafWidth)))),f.edge2=f.pos.copy(_Mathfloor(f.plant.leafLength/f.plant.leafSharpness*_Mathsin(_MathtoRad(f.dir-f.plant.leafWidth))),-_Mathfloor(f.plant.leafLength/f.plant.leafSharpness*_Mathcos(_MathtoRad(f.dir-f.plant.leafWidth)))),f}return _inherits(b,a),_createClass(b,[{key:"destroy",value:function destroy(){_get(b.prototype.__proto__||Object.getPrototypeOf(b.prototype),"destroy",this).call(this)}},{key:"grow",value:function grow(){}},{key:"render",value:function render(c){_get(b.prototype.__proto__||Object.getPrototypeOf(b.prototype),"render",this).call(this,c),c.beginPath(),c.moveTo(this.pos.x,this.pos.y),c.quadraticCurveTo(this.edge1.x,this.edge1.y,this.tip.x,this.tip.y),c.quadraticCurveTo(this.edge2.x,this.edge2.y,this.pos.x,this.pos.y),c.fillStyle="#1fa339",c.fill(),c.fillStyle="#000000"}}]),b}(__webpack_require__(1).default);exports.default=Leaf;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _createClass=function(){function a(b,d){for(var f,e=0;e<d.length;e++)f=d[e],f.enumerable=f.enumerable||!1,f.configurable=!0,'value'in f&&(f.writable=!0),Object.defineProperty(b,f.key,f)}return function(b,d,e){return d&&a(b.prototype,d),e&&a(b,e),b}}();Object.defineProperty(exports,'__esModule',{value:!0});function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError('Cannot call a class as a function')}var Point=__webpack_require__(2).default.Point,Plant=function(){function a(b){_classCallCheck(this,a),this.availableId=0,this.maxLevel=1,this.segmentLength=b.segmentLength,this.leafLength=b.leafLength,this.leafSharpness=b.leafSharpness,this.leafWidth=b.leafWidth,this.trunkWidth=b.trunkWidth,this.growthRate=b.growthRate,this.branchRate=b.branchRate,this.counts={stem:0,meristem:0,joint:0,leaf:0},b.new?(this.pos=b.pos,this.seed=new(__webpack_require__(8).default)(this,null,{pos:this.pos.copy(),dir:0}),this.seed.children.push(new(__webpack_require__(3).default)(this,this.seed,{pos:this.seed.pos.copy(0,-this.segmentLength),dir:0}))):(this.pos=new Point(b.x,b.y),this.seed=this._nodifyJson(b.seed,null))}return _createClass(a,[{key:'_nodifyJson',value:function _nodifyJson(b,d){var e=new(__webpack_require__(18)("./"+b.type).default)(this,d,{pos:new Point(b.x,b.y),dir:b.dir}),f=!0,g=!1,h=void 0;try{for(var l,m,k=b.children[Symbol.iterator]();!(f=(l=k.next()).done);f=!0)m=l.value,e.children.push(this._nodifyJson(m,e))}catch(m){g=!0,h=m}finally{try{!f&&k.return&&k.return()}finally{if(g)throw h}}return e}},{key:'_jsonifyNode',value:function _jsonifyNode(b){var d={type:b.type,x:b.pos.x,y:b.pos.y,dir:b.dir,children:[]},e=!0,f=!1,g=void 0;try{for(var k,l,h=b.children[Symbol.iterator]();!(e=(k=h.next()).done);e=!0)l=k.value,d.children.push(this._jsonifyNode(l))}catch(l){f=!0,g=l}finally{try{!e&&h.return&&h.return()}finally{if(f)throw g}}return d}},{key:'jsonify',value:function jsonify(){var b={new:!1,x:this.pos.x,y:this.pos.y,availableId:this.availableId,maxLevel:this.maxLevel,segmentLength:this.segmentLength,leafLength:this.leafLength,leafSharpness:this.leafSharpness,leafWidth:this.leafWidth,trunkWidth:this.trunkWidth,growthRate:this.growthRate,branchRate:this.branchRate,seed:{type:'seed',x:this.seed.pos.x,y:this.seed.pos.y,dir:this.seed.dir,children:[]}},d=!0,e=!1,f=void 0;try{for(var h,k,g=this.seed.children[Symbol.iterator]();!(d=(h=g.next()).done);d=!0)k=h.value,b.seed.children.push(this._jsonifyNode(k))}catch(k){e=!0,f=k}finally{try{!d&&g.return&&g.return()}finally{if(e)throw f}}return b}},{key:'grow',value:function grow(){this.seed.grow()}},{key:'render',value:function render(b){this.seed.render(b)}}]),a}();exports.default=Plant;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _createClass=function(){function a(b,c){for(var e,d=0;d<c.length;d++)e=c[d],e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(b,e.key,e)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),_get=function a(b,c,d){null===b&&(b=Function.prototype);var e=Object.getOwnPropertyDescriptor(b,c);if(e===void 0){var f=Object.getPrototypeOf(b);return null===f?void 0:a(f,c,d)}if("value"in e)return e.value;var g=e.get;return void 0===g?void 0:g.call(d)};Object.defineProperty(exports,"__esModule",{value:!0});function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return b&&("object"==typeof b||"function"==typeof b)?b:a}function _inherits(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}var Seed=function(a){function b(c,d,e){_classCallCheck(this,b);var f=_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,c,d,e));return f.type="seed",f}return _inherits(b,a),_createClass(b,[{key:"render",value:function render(c){_get(b.prototype.__proto__||Object.getPrototypeOf(b.prototype),"render",this).call(this,c),this.pos.render(c)}}]),b}(__webpack_require__(0).default);exports.default=Seed;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _createClass=function(){function a(b,c){for(var e,d=0;d<c.length;d++)e=c[d],e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(b,e.key,e)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),_get=function a(b,c,d){null===b&&(b=Function.prototype);var e=Object.getOwnPropertyDescriptor(b,c);if(e===void 0){var f=Object.getPrototypeOf(b);return null===f?void 0:a(f,c,d)}if("value"in e)return e.value;var g=e.get;return void 0===g?void 0:g.call(d)};Object.defineProperty(exports,"__esModule",{value:!0});function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return b&&("object"==typeof b||"function"==typeof b)?b:a}function _inherits(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}var Stem=function(a){function b(c,d,e){_classCallCheck(this,b);var f=_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,c,d,e));return f.type="stem",f.plant.counts.stem++,f}return _inherits(b,a),_createClass(b,[{key:"render",value:function render(c){_get(b.prototype.__proto__||Object.getPrototypeOf(b.prototype),"render",this).call(this,c)}}]),b}(__webpack_require__(1).default);exports.default=Stem;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {var Plant=__webpack_require__(4).default.Plant,ToolBox=__webpack_require__(4).default.ToolBox,Geom=__webpack_require__(2).default,plantProps1={new:!0,leafLength:20,leafSharpness:2,leafWidth:40,segmentLength:10,trunkWidth:10,growthRate:0.03,branchRate:0.1,pos:new Geom.Point(300,400)};global.plant1=new Plant(plantProps1);var toolbox=new ToolBox;gameInfo.TICK=function(){plant1.grow()},gameInfo.RENDER=function(){var a=gameInfo.CANVAS.getContext('2d');a.clearRect(0,0,gameInfo.WIDTH,gameInfo.HEIGHT),plant1.render(a),toolbox.render(a)},window.newPlant=function(){global.plant1=new Plant(plantProps1)},window.storeJson=function(){localStorage.setItem('plant',JSON.stringify(plant1.jsonify()))},window.loadJson=function(){var a=JSON.parse(localStorage.getItem('plant'));a?global.plant1=new Plant(a):alert('No plant stored')},window.startGame=function(){gameInfo.RUNNING=!0,gameInfo.tickLoop=setInterval(function(){gameInfo.TICK()},Math.floor(gameInfo.TICK_INT/gameInfo.SPEED)),gameInfo.renderLoop=setInterval(function(){gameInfo.RENDER()},gameInfo.RENDER_INT)},startGame(),window.stopGame=function(){gameInfo.RUNNING=!1,!gameInfo.tickLoop||clearInterval(gameInfo.tickLoop),!gameInfo.renderLoop||clearInterval(gameInfo.renderLoop)};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _createClass=function(){function a(b,c){for(var e,d=0;d<c.length;d++)e=c[d],e.enumerable=e.enumerable||!1,e.configurable=!0,'value'in e&&(e.writable=!0),Object.defineProperty(b,e.key,e)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),_get=function a(b,c,d){null===b&&(b=Function.prototype);var e=Object.getOwnPropertyDescriptor(b,c);if(e===void 0){var f=Object.getPrototypeOf(b);return null===f?void 0:a(f,c,d)}if('value'in e)return e.value;var g=e.get;return void 0===g?void 0:g.call(d)};var _Mathfloor=Math.floor;Object.defineProperty(exports,'__esModule',{value:!0});function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError('Cannot call a class as a function')}function _possibleConstructorReturn(a,b){if(!a)throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return b&&('object'==typeof b||'function'==typeof b)?b:a}function _inherits(a,b){if('function'!=typeof b&&null!==b)throw new TypeError('Super expression must either be null or a function, not '+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}var Geom=__webpack_require__(2).default,Pruner=function(a){function b(){_classCallCheck(this,b);var c=_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).call(this));return c.line=new Geom.Line(new Geom.Point(0,0),new Geom.Point(0)),c.length=20,c.active=!1,c}return _inherits(b,a),_createClass(b,[{key:'mousedown',value:function mousedown(c){_get(b.prototype.__proto__||Object.getPrototypeOf(b.prototype),'mousedown',this).call(this,c),this.line.p1.move(c.layerX,c.layerY),this.line.p2.move(c.layerX,c.layerY),this.active=!0}},{key:'mouseup',value:function mouseup(c){_get(b.prototype.__proto__||Object.getPrototypeOf(b.prototype),'mouseup',this).call(this,c),this.line.p2.move(c.layerX,c.layerY),this.searchSegments(plant1.seed),this.active=!1}},{key:'mousedrag',value:function mousedrag(c){_get(b.prototype.__proto__||Object.getPrototypeOf(b.prototype),'mousedrag',this).call(this,c);var d=Math.atan2(c.layerY-this.line.p1.y,c.layerX-this.line.p1.x);this.line.p2.move(this.line.p1.x+_Mathfloor(this.length*Math.cos(d)),this.line.p1.y+_Mathfloor(this.length*Math.sin(d)))}},{key:'searchSegments',value:function searchSegments(c){var d=!0,e=!1,f=void 0;try{for(var h,j,g=c.children[Symbol.iterator]();!(d=(h=g.next()).done);d=!0){if(j=h.value,'stem'===j.type&&this.line.intersects(j.line))return void j.destroy();this.searchSegments(j)}}catch(j){e=!0,f=j}finally{try{!d&&g.return&&g.return()}finally{if(e)throw f}}}},{key:'render',value:function render(c){_get(b.prototype.__proto__||Object.getPrototypeOf(b.prototype),'render',this).call(this,c),this.active&&this.line.render(c)}}]),b}(__webpack_require__(13).default);exports.default=Pruner;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _createClass=function(){function a(b,c){for(var e,d=0;d<c.length;d++)e=c[d],e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(b,e.key,e)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}();Object.defineProperty(exports,"__esModule",{value:!0});function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var Tool=function(){function a(){_classCallCheck(this,a)}return _createClass(a,[{key:"mousedown",value:function mousedown(){}},{key:"mouseup",value:function mouseup(){}},{key:"mousedrag",value:function mousedrag(){}},{key:"render",value:function render(){}}]),a}();exports.default=Tool;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _createClass=function(){function a(b,c){for(var f,d=0;d<c.length;d++)f=c[d],f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(b,f.key,f)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}();Object.defineProperty(exports,"__esModule",{value:!0});function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var ToolBox=function(){function a(){_classCallCheck(this,a),this.pruner=new(__webpack_require__(12).default),this.clicked=!1,this.select("pruner")}return _createClass(a,[{key:"select",value:function select(b){var c=this;"pruner"===b?this.selected=this.pruner:console.error("Unknown tool selected: "+b),gameInfo.CANVAS.addEventListener("mousedown",function(d){c.clicked=!0,c.selected.mousedown(d)}),gameInfo.CANVAS.addEventListener("mouseup",function(d){c.clicked=!1,c.selected.mouseup(d)}),gameInfo.CANVAS.addEventListener("mousemove",function(d){c.clicked&&c.selected.mousedrag(d)})}},{key:"render",value:function render(b){this.selected.render(b)}}]),a}();exports.default=ToolBox;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _createClass=function(){function a(b,c){for(var e,d=0;d<c.length;d++)e=c[d],e.enumerable=e.enumerable||!1,e.configurable=!0,'value'in e&&(e.writable=!0),Object.defineProperty(b,e.key,e)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}();Object.defineProperty(exports,'__esModule',{value:!0});function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError('Cannot call a class as a function')}var Line=function(){function a(b,c){_classCallCheck(this,a),!b&&!c||'point'===b.geom&&'point'===c.geom||console.error('Geom.Line must accept two Geom.Points!!!'),this.geom='line',this.p1=b,this.p2=c}return _createClass(a,[{key:'slope',value:function slope(){return Math.atan2(p2.y-p1.y,p2.x-p1.x)}},{key:'intersects',value:function intersects(b){var c=this.p2.x-this.p1.x,d=this.p2.y-this.p1.y,e=b.p2.x-b.p1.x,f=b.p2.y-b.p1.y,g=(-d*(this.p1.x-b.p1.x)+c*(this.p1.y-b.p1.y))/(-e*d+c*f),h=(e*(this.p1.y-b.p1.y)-f*(this.p1.x-b.p1.x))/(-e*d+c*f);return 0<=g&&1>=g&&0<=h&&1>=h}},{key:'render',value:function render(b,c,d){b.beginPath(),b.moveTo(this.p1.x,this.p1.y),b.lineTo(this.p2.x,this.p2.y),b.strokeStyle=c||'#000000',b.lineWidth=d||1,b.stroke(),b.strokeStyle='#000000',b.lineWidth=1}}]),a}();exports.default=Line;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:!0}),exports.default={};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _createClass=function(){function a(b,c){for(var e,d=0;d<c.length;d++)e=c[d],e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(b,e.key,e)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}();Object.defineProperty(exports,"__esModule",{value:!0});function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var Point=function(){function a(b,c){_classCallCheck(this,a),this.geom="point",this.x=b,this.y=c}return _createClass(a,[{key:"copy",value:function copy(b,c){return b=b||0,c=c||0,new a(this.x+b,this.y+c)}},{key:"move",value:function move(b,c){return this.x=b,this.y=c,this}},{key:"slide",value:function slide(b,c){return this.x+=b,this.y+=c,this}},{key:"render",value:function render(b,c){b.fillStyle=c||"#000000",b.fillRect(this.x-2,this.y-2,4,4),b.fillStyle="#000000"}}]),a}();exports.default=Point;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./joint": 5,
	"./joint.js": 5,
	"./leaf": 6,
	"./leaf.js": 6,
	"./meristem": 3,
	"./meristem.js": 3,
	"./part": 0,
	"./part.js": 0,
	"./plant": 7,
	"./plant.js": 7,
	"./seed": 8,
	"./seed.js": 8,
	"./segment": 1,
	"./segment.js": 1,
	"./stem": 9,
	"./stem.js": 9
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 18;

/***/ })
/******/ ]);