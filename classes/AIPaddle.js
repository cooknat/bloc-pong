class AIPaddle extends Paddle {
	constructor(ball, invisiBall){
		super(ball);
		this.invisiBall = invisiBall;
		this.speed = this.getSpeed();
		this.xPos = 885;
    this.yPos = 250;  
    this.ball = ball;      
	}

	update(){
		//if the ball is not at rest, waiting for a serve		
		if(this.ball.yPos !== 250){ 
		//if the invisible ball has been served - ie if the player has just hit the ball, track it instead of normal ball			
			if(this.invisiBall.inPlay === true){			
				if(this.yPos > (this.invisiBall.yPos-50) && this.yPos > 0){
					this.move("up", this.speed);					
				}  
				else if(this.yPos < 400){
					this.move("down", this.speed);
				}	
			}
			else{
				if(this.yPos > (this.ball.yPos-50) && this.yPos > 0){
					this.move("up", this.speed);					
				}  
				else if(this.yPos < 400){
					this.move("down", this.speed);
				}		
			}
		}		  
	}

	getSpeed(){//between 3 and 6
		return Math.floor((Math.random() * 4) + 3);
	}

}


			
		
	 