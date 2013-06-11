Crafty.scene("main", function() {

	var elements = [
        "src/entities/ufo.js",
        "src/entities/hero.js",
        "src/interfaces/info.js"
	];
	
	//when everything is loaded, run the main scene
	require(elements, function() {	   
//		sc['ufo'] = new Ufo();
		sc['hero'] = new Hero();
		infc['info'] = new Info();
	});	
	
	
    Crafty.audio.add("drive", "web/music/Drive.mp3");
	
//	Crafty.viewport.mouselook(true);
	var map = Crafty.e("TiledLevel"); //Creates an entity with the "TiledLevel" component
//	map.tiledLevel("./web/levels/level.json", "Canvas"); //Draw the level	
	map.tiledLevel("./web/levels/extendedL1.json", "DOM"); //Draw the level	
	
	
	//for gravity -- box2d is what I will be using -- 
	//reference from http://michieldemey.be/blog/create-a-basic-html5-platformer-with-crafty-and-box2d-part-2-5/	
	//first is the gravity along the x-axis. In this case 0, otherwise we would be pulled to the side.
	//second is the gravity along the y-axis. I’ve set it to 10. This will make all physics objects fall down.
	//third is the “pixel-to-meter” ratio. I’ve set it to 32. That means that 32 pixels = 1 meter in the game.
	//fourth will allow bodies to “sleep” when they are inactive. It’s best to leave this to true for performance.
//	Crafty.box2D.init(0, 10, 32, true);
	
//	Crafty.e("2D, Collision").collision(
//		new Crafty.polygon([50,0], [100,100], [0,100])
//	);

	// Create the floor
//	var floor = Crafty.e("2D, Canvas, Box2D, death")
	var floor = Crafty.e("2D, DOM, death")
	    .attr({
		    isFloor: true
	    })
	;
	
	//give background image
	Crafty.e("2D, Canvas, Image").image("./web/images/outdoor1.jpg");
	
	
//	Crafty.viewport.mouselook(true);
//	Crafty.viewport.init([Crafty.DOM.window.width, Crafty.DOM.window.height])		
//	    .setName("Box2D Floor")
//	    .box2d({
//		    bodyType: 'static',
//          shape: [[0, Crafty.viewport.height], [Crafty.viewport.width, Crafty.viewport.height]]
//		    shape: [[0, Crafty.viewport.height], [Crafty.viewport.width, Crafty.viewport.height]]
//	});
	
//	Crafty.viewport.follow("Hero", 0, 0);
//	Crafty.viewport.zoom(2, 'hero'.x, 'hero'.y, 0.5);
  //this is for showing which objects have physics applied to them
//	  Crafty.box2D.showDebugInfo();
});