document.addEventListener('DOMContentLoaded', () => {

  //maybe add some global positioning constants? and scoreboard?

  //ref to canvas
	var canvas = document.getElementById("pong-table");
	var context = canvas.getContext("2d");
	var scoreboard = document.getElementById("scores");
	var serveButton = document.getElementById("serve-button");
  
 
  //create paddles and balls  
  var ball = new Ball();  
  var invisiBall = new InvisibleBall(ball);
  var player = new Paddle(ball);
  var computer = new AIPaddle(ball, invisiBall);  
  ball.setPlayers(player, computer, invisiBall); 

  var visuals = [player, computer, ball, invisiBall];  

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
	   checkScore();
		 scoreboard.innerHTML = `You: ${player.score}, Computer: ${computer.score}`;
		 if(invisiBall.inPlay === true){
		 		invisiBall.move();
		  }
		  ball.move();
		  computer.update();
		  render(visuals);
		  animate(step);
		};  

		function checkScore(){			
			var gameover = document.getElementById("game-over");
			var winner = document.getElementById("winner");
			var finalScore = document.getElementById("final-score");

			if(player.score === 11){
				gameover.classList.remove('hidden');
				winner.innerHTML = "YOU WON!!!";
				finalScore.innerHTML = `You: ${player.score}, Computer: ${computer.score}`;
				player.score = 0;
				computer.score = 0;				
			}
			if(computer.score === 11){
				gameover.classList.remove('hidden');
				winner.innerHTML = "YOU LOST :(";
				finalScore.innerHTML = `You: ${player.score}, Computer: ${computer.score}`;
				player.score = 0;
				computer.score = 0;
			}
		}

   
	  window.onload = function() {	  	
	  	animate(step);
		};
     
		window.addEventListener('keydown', function(e){ 
																										if(e.keyCode === 32){
																											ball.serve() 
																										}
																									});


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


