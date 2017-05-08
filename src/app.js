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
    pos: new Geom.Point(300,400)
}
global.plant1 = new Plant(plantProps1);

var toolbox = new ToolBox();

gameInfo.TICK = function(){
    plant1.grow();
}
gameInfo.RENDER = function(){
    var ctx = gameInfo.CANVAS.getContext("2d");
    ctx.clearRect(0,0,gameInfo.WIDTH,gameInfo.HEIGHT);
    ctx.fillStyle="#af8e2f";
    ctx.fillRect(0,400,700,150)
    plant1.render(ctx);
    toolbox.render(ctx)
}

window.newPlant = function(){
    global.plant1 = new Plant(plantProps1);
}
window.storeJson = function(){
    localStorage.setItem("plant", JSON.stringify(plant1.jsonify()));
}
window.loadJson = function(){
    var pulled = JSON.parse(localStorage.getItem("plant"));
    if(pulled){
        global.plant1 = new Plant(pulled);
    }else{
        alert("No plant stored");
    }
}

window.startGame = function(cb){
    gameInfo.RUNNING = true;
    gameInfo.tickLoop = setInterval(function(){
        gameInfo.TICK();
    },Math.floor(gameInfo.TICK_INT/gameInfo.SPEED));
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