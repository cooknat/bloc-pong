class Ball {
  constructor(xPos, yPos) {
  	this.radius = 15;
  	this.xPos = xPos;
  	this.yPos = yPos;
  }	

  render(context){
	  console.log("drawing ball");
	  context.fillStyle = "red";
      context.beginPath();
      context.arc(this.xPos, this.yPos, this.radius, 0, 2*Math.PI, false);		
	  context.fill();
	}	

}
