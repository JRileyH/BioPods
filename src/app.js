require('./systems')
require('./entities')
require('./sprites')

//var pod = Crafty.s("Pod").build();

var vine = Crafty.s("Vine");

window.test = function(){
    console.log('Testing...');
    vine.grow();
}

var audio =  {
        "beep": ["beep.wav", "beep.mp3"],
        "meep": ["meep.wav", "meep.mp3"],
        "berp": ["berp.wav", "berp.mp3"]
    }
Crafty.paths({audio:"res/audio/", images:""})
Crafty.load({audio, function(){

}});