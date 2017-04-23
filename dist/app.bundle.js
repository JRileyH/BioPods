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

__webpack_require__(4);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(5);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(6);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(2)
__webpack_require__(0)
__webpack_require__(1)

var pod = Crafty.s("Pod").build();

function test(){
    console.log("Test run")
}

var audio =  {
        "beep": ["beep.wav", "beep.mp3"],
        "meep": ["meep.wav", "meep.mp3"],
        "berp": ["berp.wav", "berp.mp3"]
    }
Crafty.paths({audio:"res/audio/", images:""})
Crafty.load({audio, function(){

}});

/***/ }),
/* 4 */
/***/ (function(module, exports) {

Crafty.c("Block", {
    required: "2D, DOM",
    init: function() {

    },
    events: {

    },
    create: function(id, info) {
        if(id!=undefined)
        this.addComponent("block-"+id.type+"-"+id.config);
        this.w = this.layout.dim.tw;
        this.h = this.layout.dim.th;
        this.x = info.x * this.w;
        this.y = info.y * this.h;
    }
});

/***/ }),
/* 5 */
/***/ (function(module, exports) {

Crafty.sprite(32, "res/blocks/debug.png", {
    'block-0-0':[0,0],//blank
    'block-0-1':[1,0],//full
    'block-0-2':[0,1],//top right
    'block-0-3':[1,1],//bottom right
    'block-0-4':[2,1],//bottom left
    'block-0-5':[3,1] //top left
});

/***/ }),
/* 6 */
/***/ (function(module, exports) {

//Ship System Definition
Crafty.s("Pod", {
    init: function() {
        this.layout = null;
    },
    events: {

    },

    _outline: function(w, h) {
        for(let y = 0; y < h; y++) {
            for(let x = 0; x < w; x++) {
                if(y===0 || x===0 || y===h-1 || x===w-1){
                    this.layout.blocks.push({type: 0, config: 1})
                } else {
                    this.layout.blocks.push({type: 0, config: 0})
                }
            }
        }
        return this;
    },
    _speckle: function(w, h, c){
        for(let y = 1; y < h-1; y++) {
            for(let x = 1; x < w-1; x++) {
                let chance = c;
                if(Math.random()<chance) this.layout.blocks[(y*w)+x].config = 1;
            }
        }
        return this;
    },
    _fillout: function(w, h, n){
        for(let i = 0; i < n; i++){
            for(let y = 1; y < h-1; y++) {
                for(let x = 1; x < w-1; x++) {
                    let chance = 0;
                    if(this.layout.blocks[((y-1)*w)+(x-1)].config>0) chance+=0.125;
                    if(this.layout.blocks[((y-1)*w)+(x+1)].config>0) chance+=0.125;
                    if(this.layout.blocks[((y+1)*w)+(x-1)].config>0) chance+=0.125;
                    if(this.layout.blocks[((y+1)*w)+(x+1)].config>0) chance+=0.125;

                    if(this.layout.blocks[((y-1)*w)+(x)].config>0) chance+=0.125;
                    if(this.layout.blocks[((y+1)*w)+(x)].config>0) chance+=0.125;
                    if(this.layout.blocks[((y)*w)+(x-1)].config>0) chance+=0.125;
                    if(this.layout.blocks[((y)*w)+(x+1)].config>0) chance+=0.125;

                    if(Math.random()<chance) this.layout.blocks[(y*w)+x].config = 1;
                }
            }
        }
        return this;
    },
    _fillin: function(w, h) {
        for(let y = 1; y < h-1; y++) {
            for(let x = 1; x < w-1; x++) {
                var borders = {t: false, b: false, l: false, r:false, total: 0};
                if(this.layout.blocks[((y)*w)+(x)].config==1) continue;
                if(this.layout.blocks[((y-1)*w)+(x)].config==1) {borders.total++; borders.t = true;}
                if(this.layout.blocks[((y+1)*w)+(x)].config==1) {borders.total++; borders.b = true;}
                if(this.layout.blocks[((y)*w)+(x-1)].config==1) {borders.total++; borders.l = true;}
                if(this.layout.blocks[((y)*w)+(x+1)].config==1) {borders.total++; borders.r = true;}

                if(borders.total>2) {
                    this.layout.blocks[(y*w)+x].config = 1;
                } else if(borders.total===2) {
                    switch(true){
                        case (borders.t&&borders.l):
                            this.layout.blocks[(y*w)+x].config = 2;
                        break;
                        case (borders.b&&borders.r):
                            this.layout.blocks[(y*w)+x].config = 3;
                        break;
                        case (borders.b&&borders.l):
                            this.layout.blocks[(y*w)+x].config = 4;
                        break;
                        case (borders.t&&borders.r):
                            this.layout.blocks[(y*w)+x].config = 5;
                        break;
                    }
                }
                
            }
        }
        return this;
    },

    generateBlocks: function(w, h) {
        return this.
            _outline(w, h).
            _speckle(w, h, 0.01).
            _fillout(w, h, 4).
            _fillin(w, h);
    },

    generateLayout: function(){
        this.layout = {
            dim: {
                w: Math.floor(gameInfo.WIDTH/gameInfo.TILE_WIDTH),
                h: Math.floor(gameInfo.HEIGHT/gameInfo.TILE_HEIGHT),
                tw: gameInfo.TILE_WIDTH,
                th: gameInfo.TILE_HEIGHT
            },
            blocks: []
        }
        return this.
            generateBlocks(this.layout.dim.w, this.layout.dim.h);
    },
    build: function(layout){
        return this.
            generateLayout().
            buildBlocks(this.layout)

    },
    buildBlocks: function(layout) {
        var info = {x: 0, y: 0};
        console.log(layout)
        for(let id of layout.blocks) {
            this.layout.blocks.push(Crafty.e("Block").attr({layout: layout}).create(id, info));
            if(info.x >= layout.dim.w-1) {
                info.x = 0;
                info.y++;
            } else if (info.y < layout.dim.h){
                info.x++;
            } else {
                console.log(info);
                break;
            }
        }
        return this;
    }
});

/***/ })
/******/ ]);