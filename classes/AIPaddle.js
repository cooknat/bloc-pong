class AIPaddle extends Paddle {
	constructor(ball){
		super(ball);
		this.speed = 5;
		this.xPos = 885;
    this.yPos = 250;  
    this.ball = ball;  
	}


	update(){//rearrange the logic here to get rid of the empty else if
		if(this.ball.yPos < (this.yPos-10)){
			this.move("up", this.speed);
		}
		else if(this.ball.yPos === (this.yPos+10)){
			//stay still!
		}
		else{
			this.move("down", this.speed);
		}

	}

}