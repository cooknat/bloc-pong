class AIPaddle extends Paddle {
	constructor(ball){
		super(ball);
		this.speed = 5;
		this.xPos = 885;
    this.yPos = 250;  
    this.ball = ball;  
	}


	update(){//rearrange the logic here to get rid of the empty else if
		if(this.ball.yPos < (this.yPos+50)){//add a bit more randomness to the way this moves - currently unbeatable?
			this.move("up", this.speed);
		}
		else if(this.ball.yPos === (this.yPos)){
			//stay still!
		}
		else{
			this.move("down", this.speed);
		}

	}

}