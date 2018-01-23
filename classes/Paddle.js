class Paddle {
	constructor(xPos, yPos) {
  	this.height = 80;
  	this.width = 5;
  	this.xPos = xPos;
  	this.yPos = yPos; 	
 
  }	
	
	 render(context){
	 console.log("drawing paddle");
	  context.fillStyle = "white";
      context.fillRect(this.xPos, this.yPos, this.width, this.height);
	}	

}