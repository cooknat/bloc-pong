class Paddle {
	constructor(xPos, yPos) {
  	this.height = 100;
  	this.width = 5;
  	this.xPos = xPos;
  	this.yPos = yPos; 	
  	this.speed = 25;//in pixels per key press - no idea if this is a reasonable number
 
  }	
	
	render(context){	 
	  context.fillStyle = "white";
      context.fillRect(this.xPos, this.yPos, this.width, this.height);
	}	

	move(e){
	  //up and down arrows control the paddle
	  if(e.keyCode === 38 && this.yPos > 0){ //move up
	  	this.yPos-=this.speed;	  	
	  }	
	  else if(e.keyCode === 40 && this.yPos < (500 - this.height)){ //move down
	  	this.yPos+=this.speed;
	  	
	  }	
	}


}


