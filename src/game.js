window.onload = function() {
        
    var version = null, // Variable is not used anywhere in the current program - James
    today = new Date(); 
	
	var screenWidth = 1000;
	var screenHeight = 600;
	
	// Fix for cache
    if(gameContainer.env == 'dev') {
		version = today.getDay()+"_"+ today.getHours() +"_"+today.getSeconds();
	} else {
		version = gameContainer.gameVersion;
	};
    
	//start Crafty
	Crafty.init(screenWidth, screenHeight);
//	Crafty.canvas.init();
	
	require([
	         "src/sprites.js?v="+version+"",
	         "src/config.js?v="+version+"",
	], function() {
		// Create Sprites
		var sprites = new Sprites();
		sprites.create();

		// Load config
		gameContainer['conf'] = new Config({});
		
		//the loading screen - that will be display while assets loaded
		Crafty.scene("loading", function() {
            // clear scene and interface
            sc = []; infc = [];   

			var loadingText = Crafty.e("2D, "+gameContainer.conf.get('renderType')+", Text")
					.attr({w: 500, h: 20, x: ((Crafty.viewport.width) / 2), y: (Crafty.viewport.height / 2), z: 2})
					.text('Loading...')
					.textColor('#000')
					.textFont({'size' : '24px', 'family': 'Arial'});
		
			// load takes an array of assets and a callback when complete
			Crafty.load(sprites.getPaths(), function() {
				// array with local components
                var elements = [
                    "src/components/MouseHover.js?v="+version+"",
                    "src/components/tiledLevel.js?v="+version+"",
//					"src/components/Box2d.js?v="+version+"",
//					"src/components/customControls.js?v="+version+"",
                    "src/entities/base/BaseEntity.js?v="+version+"",
                    "src/components/camera.js?v="+version+"",
//                    "src/components/bmViewport.js?v="+version+"",
	    		];

    			//when everything is loaded, run the main scene
    			require(elements, function() {	   
    				loadingText.destroy();
    				if (gameContainer.scene != undefined) {
    					Crafty.scene(gameContainer.scene);
    				}
    			});
    		},
			function(e) {
				loadingText.text('Loading ('+(e.percent.toFixed(0))+'%)');
			});
		});
		
		// declare all scenes
		var scenes = [
			"src/scenes/main.js?v="+version+"",
		];
		
		require(scenes, function(){});
		
		Crafty.audio.play('drive', -1);

		//automatically play the loading scene
		Crafty.scene("loading");
	});
};