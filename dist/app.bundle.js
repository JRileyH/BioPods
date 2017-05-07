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
    ToolBox: __webpack_require__(17).default
};

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var Plant = __webpack_require__(0).default.Plant;
var ToolBox = __webpack_require__(0).default.ToolBox;
var Geom = __webpack_require__(19).default;

global.plant1 = new Plant(new Geom.Point(300, 400));
var toolbox = new ToolBox();

gameInfo.TICK = function () {
    plant1.grow();
};
gameInfo.RENDER = function () {
    var ctx = gameInfo.CANVAS.getContext("2d");
    ctx.clearRect(0, 0, gameInfo.WIDTH, gameInfo.HEIGHT);
    plant1.render(ctx);
    toolbox.render(ctx);
};

window.grow = function () {
    plant1.grow();
};
window.render = function () {
    gameInfo.RENDER();
};

window.startGame = function () {
    gameInfo.tickLoop = setInterval(function () {
        gameInfo.TICK();
    }, gameInfo.TICK_INT);
    gameInfo.renderLoop = setInterval(function () {
        gameInfo.RENDER();
    }, gameInfo.RENDER_INT);
};
window.stopGame = function () {
    if (!!gameInfo.tickLoop) clearInterval(gameInfo.tickLoop);
    if (!!gameInfo.renderLoop) clearInterval(gameInfo.renderLoop);
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(18)))

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
            this.pos = props.pos;
            this.dir = this._clampDir(props.dir);
        }
    }

    _createClass(PlantPart, [{
        key: "_verifyProps",
        value: function _verifyProps(props) {
            if (!props.hasOwnProperty('pos') && props.pos.geom === "point") {
                console.error("MISSING PROPS.POS");return false;
            }
            if (!props.hasOwnProperty('dir')) {
                console.error("MISSING PROPS.DIR");return false;
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
        key: "destroyChild",
        value: function destroyChild(id) {
            this.children = this.children.filter(function (x) {
                return x.id != id;
            });
        }
    }, {
        key: "destroy",
        value: function destroy() {
            if (this.id === 0) {
                return this; //this is root
            } else {
                this.parent.destroyChild(this.id);
                return this.parent;
            }
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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Seed = function (_require$default) {
    _inherits(Seed, _require$default);

    function Seed(plant, source, props) {
        _classCallCheck(this, Seed);

        var _this = _possibleConstructorReturn(this, (Seed.__proto__ || Object.getPrototypeOf(Seed)).call(this, plant, source, props));

        _this.type = "seed";
        _this.children.push(new (__webpack_require__(10).default)(_this.plant, _this, { pos: _this.pos.copy(0, -_this.plant.segmentLength), dir: 0 }));
        return _this;
    }

    _createClass(Seed, [{
        key: 'render',
        value: function render(ctx) {
            _get(Seed.prototype.__proto__ || Object.getPrototypeOf(Seed.prototype), 'render', this).call(this, ctx);
            this.pos.render(ctx);
        }
    }]);

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
            if (Math.chance(1 - 0.02 * this.level)) {
                //create new stem
                var newStem = new (__webpack_require__(11).default)(this.plant, this.parent, { pos: this.pos.copy(), dir: this.dir });
                //rearrange parents and children
                this.parent.destroyChild(this.id);
                this.parent.children.push(newStem);
                this.parent = newStem;
                this.parent.children.push(this);
                this.level++;
                //alter self
                this.pos.slide(Math.floor(this.plant.segmentLength * Math.sin(Math.toRad(this.dir))), -Math.floor(this.plant.segmentLength * Math.cos(Math.toRad(this.dir))));
                this.dir = this.dir + Math.span(-this.level, this.level);
                //add a maristem?
                if (Math.chance(0.1)) this.parent.children.push(new (__webpack_require__(10).default)(this.plant, this.parent, { pos: this.pos.copy(), dir: Math.chance(0.5) ? this.dir + 30 : this.dir - 30 }));
            }
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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Line = __webpack_require__(19).default.Line;

var Stem = function (_require$default) {
    _inherits(Stem, _require$default);

    function Stem(plant, source, props) {
        _classCallCheck(this, Stem);

        var _this = _possibleConstructorReturn(this, (Stem.__proto__ || Object.getPrototypeOf(Stem)).call(this, plant, source, props));

        _this.type = "stem";
        _this.line = new Line(_this.parent.pos, _this.pos);
        return _this;
    }

    _createClass(Stem, [{
        key: 'render',
        value: function render(ctx) {
            _get(Stem.prototype.__proto__ || Object.getPrototypeOf(Stem.prototype), 'render', this).call(this, ctx);
            this.line.render(ctx);
        }
    }]);

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
    function Plant(pos) {
        _classCallCheck(this, Plant);

        this.availableId = 0;
        this.segmentLength = 10;
        this.pos = pos;
        this.seed = new (__webpack_require__(9).default)(this, null, { pos: this.pos.copy(), dir: 0 });
    }

    _createClass(Plant, [{
        key: 'grow',
        value: function grow() {
            this.seed.grow();
        }
    }, {
        key: 'render',
        value: function render(ctx) {
            this.seed.render(ctx);
        }
    }]);

    return Plant;
}();

exports.default = Plant;

/***/ }),
/* 14 */
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

var Geom = __webpack_require__(19).default;

var Pruner = function (_require$default) {
    _inherits(Pruner, _require$default);

    function Pruner() {
        _classCallCheck(this, Pruner);

        var _this = _possibleConstructorReturn(this, (Pruner.__proto__ || Object.getPrototypeOf(Pruner)).call(this));

        _this.line = new Geom.Line(new Geom.Point(0, 0), new Geom.Point(0.0));
        _this.length = 20;
        _this.active = false;
        return _this;
    }

    _createClass(Pruner, [{
        key: 'mousedown',
        value: function mousedown(event) {
            _get(Pruner.prototype.__proto__ || Object.getPrototypeOf(Pruner.prototype), 'mousedown', this).call(this, event);
            this.line.p1.move(event.layerX, event.layerY);
            this.line.p2.move(event.layerX, event.layerY);
            this.active = true;
        }
    }, {
        key: 'mouseup',
        value: function mouseup(event) {
            _get(Pruner.prototype.__proto__ || Object.getPrototypeOf(Pruner.prototype), 'mouseup', this).call(this, event);
            //find and cut a branch
            this.line.p2.move(event.layerX, event.layerY);
            this.searchSegments(plant1.seed);
            this.active = false;
        }
    }, {
        key: 'mousedrag',
        value: function mousedrag(event) {
            _get(Pruner.prototype.__proto__ || Object.getPrototypeOf(Pruner.prototype), 'mousedrag', this).call(this, event);
            var angle = Math.atan2(event.layerY - this.line.p1.y, event.layerX - this.line.p1.x);
            this.line.p2.move(this.line.p1.x + Math.floor(this.length * Math.cos(angle)), this.line.p1.y + Math.floor(this.length * Math.sin(angle)));
        }
    }, {
        key: 'searchSegments',
        value: function searchSegments(parent) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = parent.children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var segment = _step.value;

                    if (segment.type === "stem") {
                        if (this.line.intersects(segment.line)) {
                            segment.destroy();
                            return;
                        }
                    }
                    this.searchSegments(segment);
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
        key: 'render',
        value: function render(ctx) {
            _get(Pruner.prototype.__proto__ || Object.getPrototypeOf(Pruner.prototype), 'render', this).call(this, ctx);
            if (this.active) {
                this.line.render(ctx);
            }
        }
    }]);

    return Pruner;
}(__webpack_require__(15).default);

exports.default = Pruner;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tool = function () {
    function Tool() {
        _classCallCheck(this, Tool);
    }

    _createClass(Tool, [{
        key: "mousedown",
        value: function mousedown(event) {}
    }, {
        key: "mouseup",
        value: function mouseup(event) {}
    }, {
        key: "mousedrag",
        value: function mousedrag(event) {}
    }, {
        key: "render",
        value: function render(ctx) {}
    }]);

    return Tool;
}();

exports.default = Tool;

/***/ }),
/* 16 */,
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ToolBox = function () {
    function ToolBox() {
        _classCallCheck(this, ToolBox);

        this.pruner = new (__webpack_require__(14).default)();
        this.clicked = false;
        this.select("pruner");
    }

    _createClass(ToolBox, [{
        key: "select",
        value: function select(tool) {
            var _this = this;

            switch (tool) {
                case "pruner":
                    this.selected = this.pruner;
                    break;
                default:
                    console.error("Unknown tool selected: " + tool);
            }
            gameInfo.CANVAS.addEventListener("mousedown", function (e) {
                _this.clicked = true;_this.selected.mousedown(e);
            });
            gameInfo.CANVAS.addEventListener("mouseup", function (e) {
                _this.clicked = false;_this.selected.mouseup(e);
            });
            gameInfo.CANVAS.addEventListener("mousemove", function (e) {
                if (_this.clicked) _this.selected.mousedrag(e);
            });
        }
    }, {
        key: "render",
        value: function render(ctx) {
            this.selected.render(ctx);
        }
    }]);

    return ToolBox;
}();

exports.default = ToolBox;

/***/ }),
/* 18 */
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
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    Math: __webpack_require__(21).default,
    Point: __webpack_require__(22).default,
    Line: __webpack_require__(20).default
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Line = function () {
    function Line(p1, p2) {
        _classCallCheck(this, Line);

        if ((!!p1 || !!p2) && (p1.geom !== 'point' || p2.geom !== 'point')) console.error("Geom.Line must accept two Geom.Points!!!");
        this.geom = "line";
        this.p1 = p1;
        this.p2 = p2;
    }

    _createClass(Line, [{
        key: 'slope',
        value: function slope() {
            return Math.atan2(p2.y - p1.y, p2.x - p1.x);
        }
    }, {
        key: 'intersects',
        value: function intersects(other) {
            var s1_x = this.p2.x - this.p1.x;
            var s1_y = this.p2.y - this.p1.y;
            var s2_x = other.p2.x - other.p1.x;
            var s2_y = other.p2.y - other.p1.y;
            var s = (-s1_y * (this.p1.x - other.p1.x) + s1_x * (this.p1.y - other.p1.y)) / (-s2_x * s1_y + s1_x * s2_y);
            var t = (s2_x * (this.p1.y - other.p1.y) - s2_y * (this.p1.x - other.p1.x)) / (-s2_x * s1_y + s1_x * s2_y);
            return s >= 0 && s <= 1 && t >= 0 && t <= 1;
        }
    }, {
        key: 'render',
        value: function render(ctx) {
            ctx.beginPath();
            ctx.moveTo(this.p1.x, this.p1.y);
            ctx.lineTo(this.p2.x, this.p2.y);
            ctx.stroke();
        }
    }]);

    return Line;
}();

exports.default = Line;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Point = function () {
    function Point(x, y) {
        _classCallCheck(this, Point);

        this.geom = "point";
        this.x = x;
        this.y = y;
    }

    _createClass(Point, [{
        key: "copy",
        value: function copy(x, y) {
            x = x || 0;
            y = y || 0;
            return new Point(this.x + x, this.y + y);
        }
    }, {
        key: "move",
        value: function move(x, y) {
            this.x = x;
            this.y = y;
            return this;
        }
    }, {
        key: "slide",
        value: function slide(x, y) {
            this.x += x;
            this.y += y;
            return this;
        }
    }, {
        key: "render",
        value: function render(ctx) {
            ctx.fillRect(this.x - 2, this.y - 2, 4, 4);
        }
    }]);

    return Point;
}();

exports.default = Point;

/***/ })
/******/ ]);