class Ball {
  constructor() {
  	this.radius = 10;
  	this.xPos = 450;
  	this.yPos = 250;
  	this.speed = this.getSpeed(); //pixels per second
  	this.vX = this.getVector(); 
  	this.vY = this.getVector();
  	this.player = null;
  	this.computer = null;  	
  	this.invisiBall = null;
  }	

  render(context){	  
	  context.fillStyle = "red";
      context.beginPath();
      context.arc(this.xPos, this.yPos, this.radius, 0, 2*Math.PI, false);		
	  context.fill();
	}	

	setPlayers(player, computer, invisiBall){
		this.player = player;
		this.computer = computer;
		this.invisiBall = invisiBall;
	}

	getPosition(){
		return [this.xPos, this.yPos];
	}

	move(){       
	  this.xPos+=this.vX;
	  this.yPos+=this.vY;

    //bounce off the walls
		if (this.yPos + this.vY > 490 || this.yPos + this.vY < 10) {
		  this.vY = -this.vY;
		}
		//bounce off the paddles
    else if ((this.yPos > this.player.yPos) && (this.yPos < (this.player.yPos + 100)) && (this.xPos > 23 && this.xPos < 27) 
					|| (this.yPos > this.computer.yPos) && (this.yPos < (this.computer.yPos + 100)) && (this.xPos > 873 && this.xPos < 877)) {  
					console.log("HIT");     
    	this.vX = (-this.vX);
    //at this point launch invisible ball if it has come off the player's paddle      
	    if(this.xPos < 30){
		    this.invisiBall.setPosition();
		    this.invisiBall.inPlay = true;
		  }
    }
		//if the ball leaves the board on the x-axis
		else if (this.xPos + this.vX > 895 || this.xPos + this.vX < 0) {
			this.invisiBall.inPlay = false;
		  this.endRound(this.xPos);
		}
	}

	endRound(pos){			
			this.reset();			
			if(pos < 15){        
        this.computer.score++;        
			}
			if(pos > 885){				
				this.player.score++;				
			}
	}		

	serve(){
		this.speed = this.getSpeed();
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

	getSpeed(){//between 90 and 120
		return Math.floor((Math.random() * 31) + 90);

	}

}
