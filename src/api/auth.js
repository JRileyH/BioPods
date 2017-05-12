export default class Auth {
    constructor(domain) {
        this.domain = domain;
        this.saving = false;
    }
    save(cred, jsonifiedPlants){
        this.saving = true;
        $.ajax({
            url:this.domain+'/save',
            method:"POST",
            success: function(r){console.log(r)},
            data: {
                username:cred.username,
                password:cred.password,
                payload:{
                    plants:jsonifiedPlants,
                    time: new Date().getTime()
                }
            }
        });
    }
}