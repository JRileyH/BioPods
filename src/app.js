var Plant = require('./entities').default.Plant;
var ToolBox = require('./entities').default.ToolBox;
var Geom = require('./geom').default;

var plantProps1 = {
    new: true,
    segmentLength: 10,
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
    plant1.render(ctx);
    toolbox.render(ctx)
}

window.newPlant = function(){
    global.plant1 = new Plant(plantProps1);
}
window.storeJson = function(){
    console.log(plant1.jsonify())
}
window.loadJson = function(){
    $.getJSON('data/tree.json').then(function(props){
        global.plant1 = new Plant(props);
    });
}

window.startGame = function(cb){
    gameInfo.RUNNING = true;
    gameInfo.tickLoop = setInterval(function(){
        gameInfo.TICK();
    },Math.floor(gameInfo.TICK_INT/gameInfo.SPEED));
    gameInfo.renderLoop = setInterval(function(){
        gameInfo.RENDER();
    },gameInfo.RENDER_INT);
    $('#playButton').hide();
    $('#stopButton').show();
}
startGame();
window.stopGame = function(cb){
    gameInfo.RUNNING = false;
    if(!!gameInfo.tickLoop)clearInterval(gameInfo.tickLoop);
    if(!!gameInfo.renderLoop)clearInterval(gameInfo.renderLoop);
    $('#playButton').show();
    $('#stopButton').hide();
}
window.slowGame = function(){
    if(gameInfo.SPEED>0.25) {
        console.log('wha')
        gameInfo.SPEED/=2;
        $('#speedModifier').text(gameInfo.SPEED+'x');
        if(gameInfo.RUNNING)startGame();
    }
}
window.speedGame = function(){
    if(gameInfo.SPEED<4) {
        gameInfo.SPEED*=2;
        $('#speedModifier').text(gameInfo.SPEED+'x');
        if(gameInfo.RUNNING)startGame();
    }
}