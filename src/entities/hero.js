Hero = BaseEntity.extend({
	defaults: {
	    'speed' : 5,
		//the less you make the width, you cut off the right side of the sprite with DOM -- make this below 70 to fall down the holes
		'widthHero' : 80,
		'heightHero' : 56
//		__move: {left: false, right: false, up: false, down: false},    
	},
	initialize: function(){
//		var isKeyUp = .this('KeyUp');
		var model = this;
//		var entity = Crafty.e("2D, " + gameContainer.conf.get('renderType') + ", Twoway, Keyboard, hero	, SpriteAnimation, Mouse, Collision, MouseHover, Gravity, death, ViewportFollow	");
 		var entity = Crafty.e("2D, " + gameContainer.conf.get('renderType') + ", Twoway, Keyboard, hero	, SpriteAnimation, Mouse, MouseHover, Gravity, Collision, death");
// console.log(entity.w);
		entity
//			.customControls(1)
//			.attr({x: ((Crafty.viewport.width/2) - (entity.w/2)), y: 0, z: 300, w: model.get('widthHero'), h: model.get('heightHero')})
			.attr({x: 80, y: 0, z: 300, w: model.get('widthHero'), h: model.get('heightHero')})
			.animate("walking", 0, 0, 2)
//            .multiway(model.get('speed'))
//            .viewportFollow(32, new Crafty.polygon(
//                [0,0], [20, 0],
//                [20, 40], [0, 40]))
            .twoway(model.get('speed'))
			.gravity("platform")
//			.gravity()
			.gravityConst(.5)
//			.onhit("platform", function(obj) {
//				console.log("hit something")
//			})
//            .viewportFollow(32, new Crafty.polygon( [0,0], [200, 0], [200, 400], [0, 400] ))

//			.onhit("Item", model.collectItem)
			
			//List of binds == EnterFrame, Click, MouseOver, KeyDown, KeyUp, RemoveComponent, Draw


//			.bind('EnterFrame', function(e){
//				if (move.right) this.x += this._speed; 
//				else if (move.left) this.x -= this._speed; 
//				else if (move.up) this.y -= this._speed;
//			}
		  
/*		  .bind('enterframe', function() {
			// Move the player in a direction depending on the booleans
			// Only move the player in one direction at a time (up/down/left/right)
			if (move.right) this.x += this._speed; 
			else if (move.left) this.x -= this._speed; 
//			else if (move.up) this.y -= this._speed;
//			else if (move.down) this.y += this._speed;
		  })
		  
/*		  .bind('keydown', function(e) {
			// Default movement booleans to false
			move.right = move.left = move.down = move.up = false;

			// If keys are down, set the direction
			if (e.keyCode === Crafty.keys.RA) move.right = true;
			if (e.keyCode === Crafty.keys.LA) move.left = true;
//			if (e.keyCode === Crafty.keys.UA) move.up = true;
//			if (e.keyCode === Crafty.keys.DA) move.down = true;

			this.preventTypeaheadFind(e);
		  })
		  
		  .bind('keyup', function(e) {
			// If key is released, stop moving
			if (e.keyCode === Crafty.keys.RA) move.right = false;
			if (e.keyCode === Crafty.keys.LA) move.left = false;
//			if (e.keyCode === Crafty.keys.UA) move.up = false;
//			if (e.keyCode === Crafty.keys.DA) move.down = false;

			this.preventTypeaheadFind(e);
		  });
*/
			.bind('Draw', function(e){
//				if(Keyboard.KeyDown){
				this.animate("walking", 20);
//				}
			})

			.bind('Click', function(){
//                ms
            })
			
			.bind('Moved', function(from) {
				console.log(this.y);
				if (this.hit('platform')) {
					this.attr({x: from.x, y:from.y});
				}
			})
			
			.setName('Hero');
 
		var camera = Crafty.e("Camera").camera(entity);
 
		entity.origin(entity.w/2, entity.h/2);
 
		model.set({'entity' : entity });
	},
	collectItem: function(data) {
		item = data[0].obj;
		item.collect();
	},
	
	collect: function() {
		this.destroy();
	},

});