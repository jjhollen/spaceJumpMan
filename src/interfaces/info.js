Info = BaseEntity.extend({
	defaults: {
        'text' : "Ricky and Karrie, this is Space Jump Guinea Pigster!"
    },
    initialize: function(){
    	var model = this;
    	var entity = Crafty.e("2D, DOM, Text");
		var hero = new Hero;
		
		var counter = 0;
		
//		var camera = Crafty.e("Camera").camera(player);
//		Crafty.viewport.follow(hero, 0, 0);

    	entity
            .attr({x: 650, y: 50, z: 1000, w: 600})
            .text(function () { return model.get('text')})
            .textColor('#000')
            .textFont({'size' : '24px', 'family': 'Arial'})
            .bind('Click', function(){
                                
            })

    	model.set({'entity' : entity });
    }
});