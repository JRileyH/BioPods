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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    Plant: __webpack_require__(13).default,
    Part: __webpack_require__(5).default,
    Seed: __webpack_require__(9).default,
    Meristem: __webpack_require__(10).default,
    Stem: __webpack_require__(11).default
};

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Plant = __webpack_require__(0).default.Plant;
var plant1 = new Plant(300, 400);

window.grow = function () {
    plant1.grow();
};
window.render = function () {
    plant1.render();
};
window.startGrowth = function () {
    window.growLoop = setInterval(function () {
        plant1.grow();
    }, 1000);
    window.renderLoop = setInterval(function () {
        plant1.render();
    }, 10);
};
window.stopGrowth = function () {
    if (!!window.growLoop) clearInterval(growLoop);
    if (!!window.renderLoop) clearInterval(renderLoop);
};

/***/ }),
/* 4 */,
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PlantPart = function () {
    function PlantPart(plant, source, props) {
        _classCallCheck(this, PlantPart);

        this.type = "untyped";
        this.plant = plant;
        this.id = this.plant.availableId++;
        this.parent = source;
        this.children = [];
        this.level = !!source ? source.level + 1 : 0;
        if (this._verifyProps(props)) {
            this.x = props.x;
            this.y = props.y;
            this.dir = this._clampDir(props.dir);
        }
    }

    _createClass(PlantPart, [{
        key: "_verifyProps",
        value: function _verifyProps(props) {
            if (!props.hasOwnProperty('x')) {
                console.error("MISSING PROPS.X");return false;
            }
            if (!props.hasOwnProperty('y')) {
                console.error("MISSING PROPS.Y");return false;
            }
            if (!props.hasOwnProperty('dir')) {
                console.error("sMISSING PROPS.DIR");return false;
            }
            return true;
        }
    }, {
        key: "_clampDir",
        value: function _clampDir(dir) {
            var clamped = dir % 360;
            if (clamped < 0) clamped += 360;
            return clamped;
        }
    }, {
        key: "removeChild",
        value: function removeChild(id) {
            this.children = this.children.filter(function (x) {
                return x.id != id;
            });
        }
    }, {
        key: "grow",
        value: function grow() {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var child = _step.value;

                    child.grow();
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
    }, {
        key: "render",
        value: function render(ctx) {
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = this.children[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var child = _step2.value;

                    child.render(ctx);
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }

            if (!!this.parent) {
                ctx.beginPath();
                ctx.moveTo(this.parent.x, this.parent.y);
                ctx.lineTo(this.x, this.y);
                ctx.stroke();
            }
        }
    }]);

    return PlantPart;
}();

exports.default = PlantPart;

/***/ }),
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Seed = function (_require$default) {
    _inherits(Seed, _require$default);

    function Seed(plant, source, props) {
        _classCallCheck(this, Seed);

        var _this = _possibleConstructorReturn(this, (Seed.__proto__ || Object.getPrototypeOf(Seed)).call(this, plant, source, props));

        _this.type = "seed";
        _this.children.push(new (__webpack_require__(10).default)(_this.plant, _this, { x: _this.x, y: _this.y - _this.plant.segmentLength, dir: 0 }));
        return _this;
    }

    return Seed;
}(__webpack_require__(5).default);

exports.default = Seed;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Meristem = function (_require$default) {
    _inherits(Meristem, _require$default);

    function Meristem(plant, source, props) {
        _classCallCheck(this, Meristem);

        var _this = _possibleConstructorReturn(this, (Meristem.__proto__ || Object.getPrototypeOf(Meristem)).call(this, plant, source, props));

        _this.type = "meristem";
        return _this;
    }

    _createClass(Meristem, [{
        key: 'grow',
        value: function grow() {
            _get(Meristem.prototype.__proto__ || Object.getPrototypeOf(Meristem.prototype), 'grow', this).call(this);
            //create new stem
            var newStem = new (__webpack_require__(11).default)(this.plant, this.parent, { x: this.x, y: this.y, dir: this.dir });
            //rearrange parents and children
            this.parent.removeChild(this.id);
            this.parent.children.push(newStem);
            this.parent = newStem;
            this.parent.children.push(this);
            this.level++;
            //alter self
            this.y -= Math.floor(this.plant.segmentLength * Math.cos(Math.toRad(this.dir)));
            this.x += Math.floor(this.plant.segmentLength * Math.sin(Math.toRad(this.dir)));
            this.dir = this.dir + Math.span(-this.level, this.level);
            //add a maristem?
            if (Math.chance(0.1)) this.parent.children.push(new (__webpack_require__(10).default)(this.plant, this.parent, { x: this.x, y: this.y, dir: Math.chance(0.5) ? this.dir + 30 : this.dir - 30 }));
        }
    }]);

    return Meristem;
}(__webpack_require__(5).default);

exports.default = Meristem;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Stem = function (_require$default) {
    _inherits(Stem, _require$default);

    function Stem(plant, source, props) {
        _classCallCheck(this, Stem);

        var _this = _possibleConstructorReturn(this, (Stem.__proto__ || Object.getPrototypeOf(Stem)).call(this, plant, source, props));

        _this.type = "stem";
        return _this;
    }

    return Stem;
}(__webpack_require__(5).default);

exports.default = Stem;

/***/ }),
/* 12 */,
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Plant = function () {
    function Plant(x, y) {
        _classCallCheck(this, Plant);

        this.availableId = 0;
        this.segmentLength = 10;
        this.x = x;
        this.y = y;
        this.seed = new (__webpack_require__(9).default)(this, null, { x: this.x, y: this.y, dir: 0 });
    }

    _createClass(Plant, [{
        key: "grow",
        value: function grow() {
            this.seed.grow();
        }
    }, {
        key: "render",
        value: function render() {
            var ctx = gameInfo.CANVAS.getContext("2d");
            ctx.clearRect(0, 0, gameInfo.WIDTH, gameInfo.HEIGHT);
            this.seed.render(ctx);
        }
    }]);

    return Plant;
}();

exports.default = Plant;

/***/ })
/******/ ]);