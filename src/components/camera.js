Crafty.c("Camera",{
	init: function() {  },
	camera: function(obj) {
		this.set(obj);
		var that = this;
		obj.bind("Moved",function(location) { that.set(location); });
	},
	set: function(obj) {
		Crafty.viewport.x = -obj.x + Crafty.viewport.width / 2;
//		console.log(Crafty.viewport.y);
//		Crafty.viewport.y = -obj.y + Crafty.viewport.height / 2;
	},
	checkShake: function(number) {
		//if player has fallen, shake screen
		if(obj.y > 500) {
			Crafty.viewport.y++;
		}
	}
});