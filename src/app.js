var Plant = require('./entities').default.Plant;
var plant1 = new Plant(300,400);

window.grow = function(){
    plant1.grow();
}
window.render = function(){
    plant1.render();
}
window.startGrowth = function(){
    window.growLoop = setInterval(function(){
        plant1.grow();
    },1000)
    window.renderLoop = setInterval(function(){
        plant1.render();
    },10)
    
}
window.stopGrowth = function(){
    if(!!window.growLoop)clearInterval(growLoop);
    if(!!window.renderLoop)clearInterval(renderLoop);
}