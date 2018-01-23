document.addEventListener('DOMContentLoaded', () => {

  //ref to canvas
	var canvas = document.getElementById("pong-table");
	var context = canvas.getContext("2d");
	//create net
  context.fillRect(450, 0, 3, 500);
 
  //create paddles
  var player = new Paddle(10, 10);
  var computer = new Paddle(885, 10);
  var ball = new Ball(450, 50);


  player.render(context);
  computer.render(context);  
  ball.render(context);


});	