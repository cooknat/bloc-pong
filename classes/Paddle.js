class Paddle {
	constructor(ball) {
  	this.height = 100;
  	this.width = 5;
  	this.xPos = 10;
  	this.yPos = 150; 	
  	this.speed = 50;//in pixels per key press 
  	this.score = 0; 
  	this.ball = ball;
 
  }	
	
	render(context){	 
	  context.fillStyle = "white";
    context.fillRect(this.xPos, this.yPos, this.width, this.height);
	}	

	update(e){
		//up and down arrows control the paddle
		if(e.keyCode === 38 && this.yPos > 0){ //move up	  		
	  	this.move("up", this.speed);  	
	  }	
	  else if(e.keyCode === 40 && this.yPos < (500 - this.height)){ //move down	
	  	this.move("down", this.speed);	  	
	  }	
	}

	move(direction, speed){	  
	  if(direction === "up"){ //move up
	  	this.yPos-=speed;		  		
	  }	
	  else if(direction === "down"){ //move down
	  	this.yPos+=speed;  	
	  	
	  }	
	}


}


