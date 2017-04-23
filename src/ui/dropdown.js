var CREATION_DROPDOWN = 0;

Crafty.s("DropDown", {
    init: function() {

    },
    build: function(type, coords, options){
        options = options || [];
        switch(type){
            case CREATION_DROPDOWN:
                
            break;
            default:
            console.error("DropDownBuildError: build type doesn't exist");
        }
    }
});