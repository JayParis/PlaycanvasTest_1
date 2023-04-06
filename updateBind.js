var UpdateBind = pc.createScript('updateScript');

UpdateBind.prototype.initialize = function(){
    this.local = false;
    console.log("This script is init");

    
};

UpdateBind.prototype.update = function(dt){
    this.entity.rotate(0,20 * dt, 0);
};