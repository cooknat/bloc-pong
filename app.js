document.addEventListener('DOMContentLoaded', () => {



  //ref to canvas
	var canvas = document.getElementById("pong-table");
	var context = canvas.getContext("2d");
  
 
  //create paddles
  var player = new Paddle(10, 150);
  var computer = new Paddle(885, 250);
  var ball = new Ball();

  var visuals = [player, computer, ball];  

  function render(objectArray){
  	context.clearRect(0, 0, canvas.width, canvas.height);
  	//create net
  	context.fillStyle = "black";
  	context.fillRect(450, 0, 3, 500);
  	objectArray.forEach(function(obj){
  		obj.render(context);
  	});
  }

  var animate = window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame    ||
        window.oRequestAnimationFrame      ||
        window.msRequestAnimationFrame     ||
        function(callback) { window.setTimeout(callback, 1000/60) };

		var step = function() {
		  //update();
		  ball.move();
		  render(visuals);
		  animate(step);
		};  
  
	  window.onload = function() {
	  	animate(step);
		};
    window.addEventListener('keydown', 
    												function(e) {
    														player.move(e);	    														
    												});


});	

/*

  function animate() {  
  	window.requestAnimationFrame ||
      function(callback) { window.setTimeout(callback, 1000/60) }
  }

  function step() {  	
  console.log("stepping");  	
  	render(visuals);
  	//animate(step);
  }  
  */


