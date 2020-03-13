class Ball{
	
	constructor(x,y,w,h){
		this.x=x
		this.y=y
		this.w=w
		this.h=h
		this.speedX= 2 * this.direction()
		this.speedY= 2 * this.direction()
	}


	draw(){
		push()
		noStroke()
		fill('red')
		ellipse(this.x,this.y,this.w,this.h)
		pop()
	}

	move(){
		this.x+=this.speedX
		this.y+=this.speedY
	}

	direction(){
		return floor(random(2))* 2 - 1
	}
}