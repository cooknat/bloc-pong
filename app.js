document.addEventListener('DOMContentLoaded', () => {

  //maybe add some global positioning constants? and scoreboard?

  //ref to canvas
	var canvas = document.getElementById("pong-table");
	var context = canvas.getContext("2d");
	var scoreboard = document.getElementById("scores");
	var serveButton = document.getElementById("serve-button");
  
 
  //create paddles and ball
  var ball = new Ball();
  var player = new Paddle();
  var computer = new AIPaddle(ball);

  

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
		 // console.log("stepping");
		  ball.move();
		  computer.update();
		  render(visuals);
		  animate(step);
		};  

   
	  window.onload = function() {
	  	scoreboard.innerHTML = "scores will go here";
	  	animate(step);
		};

		serveButton.addEventListener('click', function() { ball.serve() });


    window.addEventListener('keydown', 
    												function(e) {
    														player.update(e);	    														
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


