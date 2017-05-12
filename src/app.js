require('./utils/math_poly');
require('./utils/img_poly');
var API = require('./api').default;
var Plant = require('./entities').default.Plant;
var ToolBox = require('./entities').default.ToolBox;
var Geom = require('./geom').default;
var Auth = new API.Auth("http://localhost:3000");
Auth.load()
Auth.save("cred",{trees:[],time:981234});
var plantProps1 = {
    new: true,
    pos: new Geom.Point(250,400),
    growthRate: 0.03,
    branchRate: 0.1,
    curlRate:2.5,
    stem: {
        length: 10,
        width: 10,
        max: null
    },
    leaf: {
        length: 20,
        width: 40,
        sharpness: 2,
        max: null
    },
    meristem: {
        max: 10
    },
    joint: {
        length: 10,
        width: 10,
        angle:30,
        max: null
    },
    flower: {
        radius: 8,
        max: null
    }
}
var plantProps2 = {
    new: true,
    pos: new Geom.Point(700,400),
    growthRate: 0.02,
    branchRate: 0.1,
    curlRate:1.0,
    stem: {
        length: 8,
        width: 15,
        max: null
    },
    leaf: {
        length: 60,
        width: 20,
        sharpness: 2.2,
        max: null
    },
    meristem: {
        max: 20
    },
    joint: {
        length: 8,
        width: 15,
        angle:45,
        max: null
    },
    flower: {
        radius: 8,
        max: null
    }
}
var plantProps3 = {
    new: true,
    pos: new Geom.Point(1250,400),
    growthRate: 0.02,
    branchRate: 0.1,
    curlRate:0.3,
    stem: {
        length: 12,
        width: 5,
        max: null
    },
    leaf: {
        length: 15,
        width: 60,
        sharpness: 1,
        max: null
    },
    meristem: {
        max: 15
    },
    joint: {
        length: 20,
        width: 5,
        angle:10,
        max: null
    },
    flower: {
        radius: 8,
        max: null
    }
}

global.plants = [];

global.plants.push(new Plant(plantProps1));
global.plants.push(new Plant(plantProps2));
global.plants.push(new Plant(plantProps3));

var toolbox = new ToolBox();

gameInfo.FAST_TICK = function(){
    plants.forEach(p=>{
        p.tick();
    })
}
gameInfo.TICK = function(){
    plants.forEach(p=>{
        p.grow();
    })
}
gameInfo.RENDER = function(){
    var ctx = gameInfo.CANVAS.getContext("2d");
    ctx.clearRect(0,0,gameInfo.WIDTH,gameInfo.HEIGHT);
    ctx.fillStyle="#af8e2f";
    ctx.fillRect(0,400,gameInfo.WIDTH,150)
    plants.forEach(p=>{
        p.render(ctx);
    })
    toolbox.render(ctx)
}

window.newPlant = function(n){
    //new plant
}
window.storeJson = function(n){
    //store
}
window.loadJson = function(n){
    //var pulled = JSON.parse(localStorage.getItem("plant"+n));
}

window.startGame = function(cb){
    gameInfo.RUNNING = true;
    gameInfo.tickLoop = setInterval(function(){
        gameInfo.TICK();
    },Math.floor(gameInfo.TICK_INT/gameInfo.SPEED));
    gameInfo.fasttickLoop = setInterval(function(){
        gameInfo.FAST_TICK();
    },gameInfo.FAST_TICK_INT);
    gameInfo.renderLoop = setInterval(function(){
        gameInfo.RENDER();
    },gameInfo.RENDER_INT);
}
startGame();
window.stopGame = function(cb){
    gameInfo.RUNNING = false;
    if(!!gameInfo.tickLoop)clearInterval(gameInfo.tickLoop);
    if(!!gameInfo.renderLoop)clearInterval(gameInfo.renderLoop);
}