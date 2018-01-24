class Ball {
  constructor() {
  	this.radius = 10;
  	this.xPos = 20;
  	this.yPos = 20;
  	this.speed = 90; //pixels per second
  	this.vX = this.getVector(); 
  	this.vY = this.getVector();
  }	

  render(context){	  
	  context.fillStyle = "red";
      context.beginPath();
      context.arc(this.xPos, this.yPos, this.radius, 0, 2*Math.PI, false);		
	  context.fill();
	}	

	move(e){       
	  this.xPos+=this.vX;
	  this.yPos+=this.vY;

		if (this.yPos + this.vY > 495 || this.yPos + this.vY < 0) {
		  this.vY = -this.vY;
		}
		/*if (this.xPos + this.vX > 895 || this.xPos + this.vX < 0) {
		  this.vX = -this.vX;
		}*/
	}

	getVector(){		
		return Math.floor((Math.random() * 5) + 1);
	
	}

	

}
