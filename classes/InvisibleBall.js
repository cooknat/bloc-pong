/* i've tried a few ways of getting the computer paddle to be less accurate, 
including only moving it every few refreshes, a really slow speed, a short delay before
allowing th paddle to move, and changing the area on the paddle that the ball is aiming for.

I found this idea on stack exchange. Each time the ball is hit by the Player paddle, 
an invisible ball will be launched at the same time, that moves at a slightly different angle to the visible
ball. The computer paddle will aim for this instead. On some turns, the angle will mean 
that it still hits, but on others will miss*/

class InvisibleBall extends Ball{
	constructor(mainBall){
		super();
		this.mainBall = mainBall;		
		this.inPlay = false;
  	this.computer = mainBall.computer;    		
		this.radius = 0;
	}


	setPosition(){	
		this.xPos = this.mainBall.xPos;
		this.yPos = this.mainBall.yPos;		
		this.vX = this.mainBall.vX;
		this.vY = this.mainBall.vY+0.5;
		this.speed = this.mainBall.speed-25;
	}	
	
	move(){  
	  this.xPos+=this.vX;
	  this.yPos+=this.vY;

	  //bounce off the walls
		if (this.yPos + this.vY > 490 || this.yPos + this.vY < 10) {
		  this.vY = -this.vY;
		}
      //if it goes off the stage set inPlay to false so it tracks the other ball again
	  else if (this.xPos + this.vX > 880 || this.xPos + this.vX < 20) {
			this.inPlay = false;		  
		}
	 

	}

}


