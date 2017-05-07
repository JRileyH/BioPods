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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
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
    Math: __webpack_require__(14).default,
    Point: __webpack_require__(15).default,
    Line: __webpack_require__(13).default
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    Plant: __webpack_require__(8).default,
    ToolBox: __webpack_require__(12).default
};

/***/ }),
/* 2 */
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
        key: "traverse_bfs",
        value: function traverse_bfs(callback) {
            var queue = [this];
            var n;
            while (queue.length > 0) {
                n = queue.shift();
                callback(n);
                if (!n.children.length) {
                    continue;
                }
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = n.children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var child = _step.value;

                        queue.push(child);
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
            return this;
        }
    }, {
        key: "traverse_bfs_shuffle",
        value: function traverse_bfs_shuffle(callback) {
            var queue = [this];
            var n;
            while (queue.length > 0) {
                n = queue.shift();
                callback(n);
                if (!n.children.length) {
                    continue;
                }
                var _iteratorNormalCompletion2 = true;
                var _didIteratorError2 = false;
                var _iteratorError2 = undefined;

                try {
                    for (var _iterator2 = n.children[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                        var child = _step2.value;

                        queue.push(child);
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
            return this;
        }
    }, {
        key: "destroyChild",
        value: function destroyChild(id) {
            this.children = this.children.filter(function (x) {
                return x.id != id;
            });

            return this;
        }
    }, {
        key: "destroy",
        value: function destroy() {
            var _this = this;

            if (this.id === 0) {
                return this; //this is root
            } else {
                this.parent.destroyChild(this.id);
                //reestablish tree stats
                this.traverse_bfs(function (n) {
                    _this.plant.counts[n.type]--;
                });
                return this.parent;
            }
        }
    }, {
        key: "grow",
        value: function grow() {
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
                for (var _iterator3 = this.children[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var child = _step3.value;

                    child.grow();
                }
            } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
                        _iterator3.return();
                    }
                } finally {
                    if (_didIteratorError3) {
                        throw _iteratorError3;
                    }
                }
            }

            return this;
        }
    }, {
        key: "render",
        value: function render(ctx) {
            var _iteratorNormalCompletion4 = true;
            var _didIteratorError4 = false;
            var _iteratorError4 = undefined;

            try {
                for (var _iterator4 = this.children[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                    var child = _step4.value;

                    child.render(ctx);
                }
            } catch (err) {
                _didIteratorError4 = true;
                _iteratorError4 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion4 && _iterator4.return) {
                        _iterator4.return();
                    }
                } finally {
                    if (_didIteratorError4) {
                        throw _iteratorError4;
                    }
                }
            }

            return this;
        }
    }]);

    return PlantPart;
}();

exports.default = PlantPart;

/***/ }),
/* 3 */
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
        _this.plant.counts.meristem++;
        _this._ctb = null; //stored chance to branch to save processing
        return _this;
    }

    _createClass(Meristem, [{
        key: "_chanceToBranch",
        value: function _chanceToBranch() {
            if (!!this._ctb) return this._ctb;
            var node = this.parent;
            var chance = 0.0;
            while (node.type === "stem") {
                node = node.parent;
                chance += this.plant.branchRate;
            }
            this._ctb = chance;
            return chance;
        }
    }, {
        key: "grow",
        value: function grow() {
            _get(Meristem.prototype.__proto__ || Object.getPrototypeOf(Meristem.prototype), "grow", this).call(this);
            if (Math.chance(1 - this.plant.growthRate * this.level)) {
                this._ctb = null;
                //create new stem or joint
                var newStem = Math.chance(this._chanceToBranch()) ? new (__webpack_require__(7).default)(this.plant, this.parent, { pos: this.pos.copy(), dir: this.dir }) : new (__webpack_require__(4).default)(this.plant, this.parent, { pos: this.pos.copy(), dir: this.dir });
                //rearrange parents and children
                this.parent.destroyChild(this.id);
                this.parent.children.push(newStem);
                this.parent = newStem;
                this.parent.children.push(this);
                this.level++;
                //alter self
                this.pos.slide(Math.floor(this.plant.segmentLength * Math.sin(Math.toRad(this.dir))), -Math.floor(this.plant.segmentLength * Math.cos(Math.toRad(this.dir))));
                this.dir = this.dir + Math.span(-this.level, this.level);
            }
        }
    }]);

    return Meristem;
}(__webpack_require__(2).default);

exports.default = Meristem;

/***/ }),
/* 4 */
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

var Stem = function (_require$default) {
    _inherits(Stem, _require$default);

    function Stem(plant, source, props) {
        _classCallCheck(this, Stem);

        var _this = _possibleConstructorReturn(this, (Stem.__proto__ || Object.getPrototypeOf(Stem)).call(this, plant, source, props));

        _this.type = "stem";
        _this.plant.counts.stem++;
        return _this;
    }

    _createClass(Stem, [{
        key: "render",
        value: function render(ctx) {
            _get(Stem.prototype.__proto__ || Object.getPrototypeOf(Stem.prototype), "render", this).call(this, ctx);
        }
    }]);

    return Stem;
}(__webpack_require__(18).default);

exports.default = Stem;

/***/ }),
/* 5 */
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var Plant = __webpack_require__(1).default.Plant;
var ToolBox = __webpack_require__(1).default.ToolBox;
var Geom = __webpack_require__(0).default;

var plantProps1 = {
    new: true,
    leafLength: 20,
    leafSharpness: 2,
    leafWidth: 40,
    segmentLength: 10,
    growthRate: 0.03,
    branchRate: 0.1,
    pos: new Geom.Point(300, 400)
};
global.plant1 = new Plant(plantProps1);

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

window.newPlant = function () {
    global.plant1 = new Plant(plantProps1);
};
window.storeJson = function () {
    console.log(plant1.jsonify());
};
window.loadJson = function () {
    $.getJSON('data/tree.json').then(function (props) {
        global.plant1 = new Plant(props);
    });
};

window.startGame = function (cb) {
    gameInfo.RUNNING = true;
    gameInfo.tickLoop = setInterval(function () {
        gameInfo.TICK();
    }, Math.floor(gameInfo.TICK_INT / gameInfo.SPEED));
    gameInfo.renderLoop = setInterval(function () {
        gameInfo.RENDER();
    }, gameInfo.RENDER_INT);
    $('#playButton').hide();
    $('#stopButton').show();
};
startGame();
window.stopGame = function (cb) {
    gameInfo.RUNNING = false;
    if (!!gameInfo.tickLoop) clearInterval(gameInfo.tickLoop);
    if (!!gameInfo.renderLoop) clearInterval(gameInfo.renderLoop);
    $('#playButton').show();
    $('#stopButton').hide();
};
window.slowGame = function () {
    if (gameInfo.SPEED > 0.25) {
        console.log('wha');
        gameInfo.SPEED /= 2;
        $('#speedModifier').text(gameInfo.SPEED + 'x');
        if (gameInfo.RUNNING) startGame();
    }
};
window.speedGame = function () {
    if (gameInfo.SPEED < 4) {
        gameInfo.SPEED *= 2;
        $('#speedModifier').text(gameInfo.SPEED + 'x');
        if (gameInfo.RUNNING) startGame();
    }
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 7 */
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

var Joint = function (_require$default) {
    _inherits(Joint, _require$default);

    function Joint(plant, source, props) {
        _classCallCheck(this, Joint);

        var _this = _possibleConstructorReturn(this, (Joint.__proto__ || Object.getPrototypeOf(Joint)).call(this, plant, source, props));

        _this.type = "joint";
        _this.plant.counts.joint++;
        var leafDir = Math.chance(0.5) ? _this.dir + 30 : _this.dir - 30;
        _this.children.push(new (__webpack_require__(17).default)(_this.plant, _this, { pos: _this.pos.copy(Math.floor(_this.plant.segmentLength * Math.sin(Math.toRad(leafDir))), -Math.floor(_this.plant.segmentLength * Math.cos(Math.toRad(leafDir)))), dir: leafDir }));
        return _this;
    }

    _createClass(Joint, [{
        key: '_chanceToBranch',
        value: function _chanceToBranch() {
            var closestMaristem = 999;
            this.traverse_bfs(function (n) {
                if (n.type === "meristem") {
                    closestMaristem = Math.min(closestMaristem, n.level);
                }
            });
            return Math.chance(0.01 * closestMaristem);
        }
    }, {
        key: 'grow',
        value: function grow() {
            _get(Joint.prototype.__proto__ || Object.getPrototypeOf(Joint.prototype), 'grow', this).call(this);
            if (this.plant.counts.meristem < 10 && this._chanceToBranch()) {
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = this.children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var c = _step.value;

                        if (c.type === "leaf") c.destroy();
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

                this.children.push(new (__webpack_require__(3).default)(this.plant, this, { pos: this.pos.copy(0, -this.plant.segmentLength), dir: Math.chance(0.5) ? this.dir + 30 : this.dir - 30 }));
            }
        }
    }]);

    return Joint;
}(__webpack_require__(18).default);

exports.default = Joint;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Point = __webpack_require__(0).default.Point;

var Plant = function () {
    function Plant(props) {
        _classCallCheck(this, Plant);

        this.availableId = 0;
        this.segmentLength = props.segmentLength;
        this.leafLength = props.leafLength;
        this.leafSharpness = props.leafSharpness;
        this.leafWidth = props.leafWidth;
        this.growthRate = props.growthRate;
        this.branchRate = props.branchRate;
        this.counts = { stem: 0, meristem: 0, joint: 0, leaf: 0 };
        if (props.new) {
            this.pos = props.pos;
            this.seed = new (__webpack_require__(9).default)(this, null, { pos: this.pos.copy(), dir: 0 });
            this.seed.children.push(new (__webpack_require__(3).default)(this, this.seed, { pos: this.seed.pos.copy(0, -this.segmentLength), dir: 0 }));
        } else {
            this.pos = new Point(props.x, props.y);
            this.seed = this._nodifyJson(props.seed, null);
        }
    }

    _createClass(Plant, [{
        key: '_nodifyJson',
        value: function _nodifyJson(j, p) {
            var node = new (__webpack_require__(16)("./" + j.type).default)(this, p, { pos: new Point(j.x, j.y), dir: j.dir });
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = j.children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var c = _step.value;

                    node.children.push(this._nodifyJson(c, node));
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

            return node;
        }
    }, {
        key: '_jsonifyNode',
        value: function _jsonifyNode(n) {
            var json = {
                type: n.type,
                x: n.pos.x,
                y: n.pos.y,
                dir: n.dir,
                children: []
            };
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = n.children[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var c = _step2.value;

                    json.children.push(this._jsonifyNode(c));
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

            return json;
        }
    }, {
        key: 'jsonify',
        value: function jsonify() {
            var plant = {
                new: false,
                x: this.pos.x,
                y: this.pos.y,
                availableId: this.availableId,
                segmentLength: this.segmentLength,
                leafLength: this.leafLength,
                leafSharpness: this.leafSharpness,
                leafWidth: this.leafWidth,
                growthRate: this.growthRate,
                branchRate: this.branchRate,
                seed: {
                    type: "seed",
                    x: this.seed.pos.x,
                    y: this.seed.pos.y,
                    dir: this.seed.dir,
                    children: []
                }
            };
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
                for (var _iterator3 = this.seed.children[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var n = _step3.value;

                    plant.seed.children.push(this._jsonifyNode(n));
                }
            } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
                        _iterator3.return();
                    }
                } finally {
                    if (_didIteratorError3) {
                        throw _iteratorError3;
                    }
                }
            }

            return plant;
        }
    }, {
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
        return _this;
    }

    _createClass(Seed, [{
        key: "render",
        value: function render(ctx) {
            _get(Seed.prototype.__proto__ || Object.getPrototypeOf(Seed.prototype), "render", this).call(this, ctx);
            this.pos.render(ctx);
        }
    }]);

    return Seed;
}(__webpack_require__(2).default);

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

var Geom = __webpack_require__(0).default;

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
}(__webpack_require__(11).default);

exports.default = Pruner;

/***/ }),
/* 11 */
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
/* 12 */
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

        this.pruner = new (__webpack_require__(10).default)();
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
/* 13 */
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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {};

/***/ }),
/* 15 */
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

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./joint": 7,
	"./joint.js": 7,
	"./leaf": 17,
	"./leaf.js": 17,
	"./meristem": 3,
	"./meristem.js": 3,
	"./part": 2,
	"./part.js": 2,
	"./plant": 8,
	"./plant.js": 8,
	"./seed": 9,
	"./seed.js": 9,
	"./segment": 18,
	"./segment.js": 18,
	"./stem": 4,
	"./stem.js": 4
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
webpackContext.id = 16;

/***/ }),
/* 17 */
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

var Leaf = function (_require$default) {
    _inherits(Leaf, _require$default);

    function Leaf(plant, source, props) {
        _classCallCheck(this, Leaf);

        var _this = _possibleConstructorReturn(this, (Leaf.__proto__ || Object.getPrototypeOf(Leaf)).call(this, plant, source, props));

        _this.type = "leaf";
        _this.plant.counts.leaf++;
        _this.tip = _this.pos.copy(Math.floor(_this.plant.leafLength * Math.sin(Math.toRad(_this.dir))), -Math.floor(_this.plant.leafLength * Math.cos(Math.toRad(_this.dir))));
        _this.edge1 = _this.pos.copy(Math.floor(_this.plant.leafLength / _this.plant.leafSharpness * Math.sin(Math.toRad(_this.dir + _this.plant.leafWidth))), -Math.floor(_this.plant.leafLength / _this.plant.leafSharpness * Math.cos(Math.toRad(_this.dir + _this.plant.leafWidth))));
        _this.edge2 = _this.pos.copy(Math.floor(_this.plant.leafLength / _this.plant.leafSharpness * Math.sin(Math.toRad(_this.dir - _this.plant.leafWidth))), -Math.floor(_this.plant.leafLength / _this.plant.leafSharpness * Math.cos(Math.toRad(_this.dir - _this.plant.leafWidth))));
        return _this;
    }

    _createClass(Leaf, [{
        key: "destroy",
        value: function destroy() {
            _get(Leaf.prototype.__proto__ || Object.getPrototypeOf(Leaf.prototype), "destroy", this).call(this);
            //do some fall to earth animation?
        }
    }, {
        key: "grow",
        value: function grow() {
            //do some photosynthesis!
        }
    }, {
        key: "render",
        value: function render(ctx) {
            _get(Leaf.prototype.__proto__ || Object.getPrototypeOf(Leaf.prototype), "render", this).call(this, ctx);
            ctx.beginPath();
            ctx.moveTo(this.pos.x, this.pos.y);
            ctx.quadraticCurveTo(this.edge1.x, this.edge1.y, this.tip.x, this.tip.y);
            ctx.quadraticCurveTo(this.edge2.x, this.edge2.y, this.pos.x, this.pos.y);
            ctx.stroke();
        }
    }]);

    return Leaf;
}(__webpack_require__(18).default);

exports.default = Leaf;

/***/ }),
/* 18 */
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

var Line = __webpack_require__(0).default.Line;

var Segment = function (_require$default) {
    _inherits(Segment, _require$default);

    function Segment(plant, source, props) {
        _classCallCheck(this, Segment);

        var _this = _possibleConstructorReturn(this, (Segment.__proto__ || Object.getPrototypeOf(Segment)).call(this, plant, source, props));

        _this.line = new Line(_this.parent.pos, _this.pos);
        return _this;
    }

    _createClass(Segment, [{
        key: 'render',
        value: function render(ctx) {
            _get(Segment.prototype.__proto__ || Object.getPrototypeOf(Segment.prototype), 'render', this).call(this, ctx);
            this.line.render(ctx);
        }
    }]);

    return Segment;
}(__webpack_require__(2).default);

exports.default = Segment;

/***/ })
/******/ ]);