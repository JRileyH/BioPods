require('./utils/math_poly');
var Plant = require('./entities').default.Plant;
var ToolBox = require('./entities').default.ToolBox;
var Geom = require('./geom').default;

var plantProps1 = {
    new: true,
    leafLength: 20,
    leafSharpness: 2,
    leafWidth:40,
    segmentLength: 10,
    trunkWidth: 10,
    growthRate: 0.03,
    branchRate: 0.1,
    maxMeristem: 10,
    pos: new Geom.Point(250,400)
}
var plantProps2 = {
    new: true,
    leafLength: 60,
    leafSharpness: 2.2,
    leafWidth:20,
    segmentLength: 8,
    trunkWidth: 15,
    growthRate: 0.02,
    branchRate: 0.1,
    maxMeristem: 20,
    pos: new Geom.Point(700,400)
}
var plantProps3 = {
    new: true,
    leafLength: 15,
    leafSharpness: 1,
    leafWidth:60,
    segmentLength: 20,
    trunkWidth: 5,
    growthRate: 0.06,
    branchRate: 0.3,
    maxMeristem: 15,
    pos: new Geom.Point(1250,400)
}
global.plant1 = new Plant(plantProps1);
global.plant2 = new Plant(plantProps2);
global.plant3 = new Plant(plantProps3);

var toolbox = new ToolBox();

gameInfo.FAST_TICK = function(){
    plant1.tick();
    plant2.tick();
    plant3.tick();
}
gameInfo.TICK = function(){
    plant1.grow();
    plant2.grow();
    plant3.grow();
}
gameInfo.RENDER = function(){
    var ctx = gameInfo.CANVAS.getContext("2d");
    ctx.clearRect(0,0,gameInfo.WIDTH,gameInfo.HEIGHT);
    ctx.fillStyle="#af8e2f";
    ctx.fillRect(0,400,gameInfo.WIDTH,150)
    plant1.render(ctx);
    plant2.render(ctx);
    plant3.render(ctx);
    toolbox.render(ctx)
}

window.newPlant = function(n){
    var newProps = {
        new: true,
        leafLength: parseInt(document.getElementById('leafLength'+n).value),
        leafSharpness: parseInt(document.getElementById('leafSharpness'+n).value),
        leafWidth: parseInt(document.getElementById('leafWidth'+n).value),
        segmentLength: parseInt(document.getElementById('segmentLength'+n).value),
        trunkWidth: parseInt(document.getElementById('trunkWidth'+n).value),
        growthRate: parseFloat(document.getElementById('growthRate'+n).value),
        branchRate: parseFloat(document.getElementById('branchRate'+n).value),
        maxMeristem: parseInt(document.getElementById('maxMeristem'+n).value),
    }
    switch(n){
        case 1:
            newProps.pos = new Geom.Point(250,400);
            global.plant1 = new Plant(newProps);
        break;
        case 2:
            newProps.pos = new Geom.Point(700,400);
            global.plant2 = new Plant(newProps);
        break;
        case 3:
            newProps.pos = new Geom.Point(1250,400);
            global.plant3 = new Plant(newProps);
        break;
    }
}
window.storeJson = function(n){
    switch(n){
        case 1:
            localStorage.setItem("plant"+n, JSON.stringify(plant1.jsonify()));
        break;
        case 2:
            localStorage.setItem("plant"+n, JSON.stringify(plant2.jsonify()));
        break;
        case 3:
            localStorage.setItem("plant"+n, JSON.stringify(plant3.jsonify()));
        break;
    }
}
window.loadJson = function(n){
    var pulled = JSON.parse(localStorage.getItem("plant"+n));
    if(pulled){
        switch(n){
            case 1:
                global.plant1 = new Plant(pulled);
            break;
            case 2:
                global.plant2 = new Plant(pulled);
            break;
            case 3:
                global.plant3 = new Plant(pulled);
            break;
        }
    }else{
        alert("No plant "+n+" stored");
    }
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