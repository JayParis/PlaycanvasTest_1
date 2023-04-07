var UpdateBind = pc.createScript('updateScript');

UpdateBind.prototype.initialize = function(){
    this.local = false;
    console.log("This script is init");

    this.app.keyboard.on(pc.EVENT_KEYDOWN, this.onKeyDown, this);
    this.app.keyboard.on(pc.EVENT_KEYUP, this.onKeyUp, this);

    this.app.mouse.on(pc.EVENT_MOUSEDOWN, this.onMouseDown, this);

    // Only register touch events if the device supports touch
    var touch = this.app.touch;
    if (touch) {
        touch.on(pc.EVENT_TOUCHSTART, this.onTouchStart, this);
        touch.on(pc.EVENT_TOUCHMOVE, this.onTouchMove, this);
        touch.on(pc.EVENT_TOUCHEND, this.onTouchEnd, this);
        touch.on(pc.EVENT_TOUCHCANCEL, this.onTouchCancel, this);
    }

    this.on('destroy', function() {
        touch.off(pc.EVENT_TOUCHSTART, this.onTouchStart, this);
        touch.off(pc.EVENT_TOUCHMOVE, this.onTouchMove, this);
        touch.off(pc.EVENT_TOUCHEND, this.onTouchEnd, this);
        touch.off(pc.EVENT_TOUCHCANCEL, this.onTouchCancel, this);       
    }, this);
};

UpdateBind.prototype.update = function(dt){
    this.entity.rotate(0,20 * dt, 0);

    if (this.app.keyboard.wasPressed(pc.KEY_LEFT)) {
        console.log('Left Key Pressed');
        this.entity.translate(-0.05,0,0);
    }

    if(this.app.mouse.wasPressed(pc.MOUSEBUTTON_LEFT)){
        console.log('Mouse 1 Pressed');
    }
};

UpdateBind.prototype.onMouseDown = function(event){
        this.entity.translate(0,0.1,0);
        console.log("Generic mouse down event");
}

UpdateBind.prototype.onTouchStart = function(event){
    this.entity.translate(0,-0.1,0);
    console.log("Generic touch down event");
    app.resizeCanvas()
}