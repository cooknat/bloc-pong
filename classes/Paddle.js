class Paddle {
	constructor(ball) {
  	this.height = 100;
  	this.width = 5;
  	this.xPos = 10;
  	this.yPos = 150; 	
  	this.speed = 30;//in pixels per key press - no idea if this is a reasonable number
  	this.score = 0;
  	this.ball = ball;
 
  }	
	
	render(context){	 
	  context.fillStyle = "white";
      context.fillRect(this.xPos, this.yPos, this.width, this.height);
	}	

	update(e){
		if(e.keyCode === 38 && this.yPos > 0){ //move up
	  	//this.yPos-=this.speed;	
	  	this.move("up", this.speed);  	
	  }	
	  else if(e.keyCode === 40 && this.yPos < (500 - this.height)){ //move down
	  	//this.yPos+=this.speed;
	  	this.move("down", this.speed);
	  	
	  }	
	}

	score(){
		if(this.ball.xPos > 885){			
			this.score++;
			console.log(score);
		}		
	}	

	move(direction, speed){
	  //up and down arrows control the paddle
	  if(direction === "up"){ //move up
	  	this.yPos-=speed;	  	
	  }	
	  else if(direction === "down"){ //move down
	  	this.yPos+=speed;
	  	
	  }	
	}


}


