var Plant = require('./entities').default.Plant;
var ToolBox = require('./entities').default.ToolBox;
var Geom = require('./geom').default;

global.plant1 = new Plant(new Geom.Point(300,400));
var toolbox = new ToolBox();

gameInfo.TICK = function(){
    plant1.grow();
}
gameInfo.RENDER = function(){
    var ctx = gameInfo.CANVAS.getContext("2d");
    ctx.clearRect(0,0,gameInfo.WIDTH,gameInfo.HEIGHT);
    plant1.render(ctx);
    toolbox.render(ctx)
}


window.grow = function(){
    plant1.grow();
}
window.render = function(){
    gameInfo.RENDER();
}

window.startGame = function(){
    gameInfo.tickLoop = setInterval(function(){
        gameInfo.TICK();
    },gameInfo.TICK_INT);
    gameInfo.renderLoop = setInterval(function(){
        gameInfo.RENDER();
    },gameInfo.RENDER_INT);
    
}
window.stopGame = function(){
    if(!!gameInfo.tickLoop)clearInterval(gameInfo.tickLoop);
    if(!!gameInfo.renderLoop)clearInterval(gameInfo.renderLoop);
}