class Ball {
  constructor() {
  	this.radius = 10;
  	this.xPos = 450;
  	this.yPos = 250;
  	this.speed = 90; //pixels per second
  	this.vX = this.getVector(); 
  	this.vY = this.getVector();
  	this.player = null;
  	this.computer = null;
  }	

  render(context){	  
	  context.fillStyle = "red";
      context.beginPath();
      context.arc(this.xPos, this.yPos, this.radius, 0, 2*Math.PI, false);		
	  context.fill();
	}	

	setPlayers(player, computer){
		this.player = player;
		this.computer = computer;
	}

	getPosition(){
		return [this.xPos, this.yPos];
	}

	move(e){       
	  this.xPos+=this.vX;
	  this.yPos+=this.vY;
    //bounce off the walls
		if (this.yPos + this.vY > 495 || this.yPos + this.vY < 0) {
		  this.vY = -this.vY;
		}
		//bounce off the paddles
    else if ((((this.yPos + this.vY) > this.computer.yPos && (this.yPos + this.vY) < (this.computer.yPos+100)) && this.xPos === 880)
    	       ||  (((this.yPos + this.vY) > this.player.yPos) && ((this.yPos + this.vY) < (this.player.yPos+100)) && this.xPos === 20)){
    	console.log("hit");
    	this.vX = -this.vX;
    }




		//if the ball leaves the board on the x-axis
		else if (this.xPos + this.vX > 895 || this.xPos + this.vX < 0) {
		  this.endRound(this.xPos);
		}
	}

	endRound(pos){
			console.log("ENDED" + pos);	
			this.reset();
			
			if(pos < 15){
        console.log("computer won");
			}
			if(pos > 885){
				console.log("player won");
			}
	}		

	serve(){
		this.speed = 90;
    this.vX = this.getVector(); 
  	this.vY = this.getVector();

	}

	reset(){
		this.xPos = 450;
		this.yPos = 250;
		this.speed = 0;
		this.vX = 0;
  	this.vY = 0;
	}

	getVector(){		
		var v = Math.floor((Math.random() * 10) - 5);	
			if (v === 0){				
				return this.getVector();
			}
			else{
				return v;
  	 }
	}

	

}
