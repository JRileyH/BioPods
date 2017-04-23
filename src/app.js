require('./systems')
require('./entities')
require('./sprites')

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