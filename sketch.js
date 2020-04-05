let Height
let Width

let p1
let p2

let p3
let p4

let p5
let p6

let p7
let p8



function setup() {
	createCanvas(windowWidth, windowHeight);
	p1= {x:0, y:0}
	p2= {x:floor(windowWidth), y:floor(windowHeight)}
	
	p3= {x:0, y:floor(windowHeight)}
	p4= {x:floor(windowWidth), y:0}

	p5= {x:0, y:floor(windowHeight/2)}
	p6= {x:windowWidth, y:floor(windowHeight/2)}

	p7= {x:floor(windowWidth/2), y:0}
	p8= {x:floor(windowWidth/2), y:floor(windowHeight)}
}

function draw() {
	//line(p1.x,p1.y,p2.x,p2.y)
	diagonal(p1,p2)
	diagonal(p3,p4)
	diagonal(p5,p6)
	rectaV(p7,p8)
	
	point(20,20)

}

function diagonal(p1,p2){
	const dx = p2.x - p1.x
	const dy = p2.y - p1.y

	const m = dy / dx

	b = p1.y - m * p1.x

	point(p1.x, p1.y)

	let x = p1.x + 1
	let y 
	while(x != p2.x){
		y= m*x+b
		point(x,y)
		x++
	}
	
}

function rectaV(p1,p2){
	const dx=p1.x
	const dy=p1.y

	let y= dy

	while(y != p2.y){
		 
		point(dx,y)
		y++
	}

}
/////pelotas al azar
/*let board
let p1
let p2
let ball
let ballp
let colicion
let color
let id=0
var lista=[];

function setup() {
	createCanvas(windowWidth, windowHeight);
	board = new Board(windowWidth, windowHeight, '#1c1605')
	let pw = 30
	let ph = 100
	let py = floor(windowHeight / 2) - floor(ph / 2)
	p1 = new Paddle(0, py, pw, ph, 'red')
	p2 = new Paddle(windowWidth - pw, py, pw, ph, 'blue')
	
}

function draw() {
	//sboard.draw()
	p1.draw()
	p2.draw()
	
	background('white')
	
	lista.forEach(function(i){
    	ballp=i;
    	ballp.draw();
    	ballp.move();
    	
    	lista.forEach(function(i){
			colicion=i;

			if (ballp.getId != colicion.getId) {
				
				if ((ballp.posX>=colicion.posX && ballp.posX<=colicion.posX+20) && (ballp.posY>=colicion.posY && ballp.posY<=colicion.posY+20)) {
    				ballp.cambiarDireccion();
    				colicion.cambiarDireccion()
    				console.log('coliciono id= '+ ballp.getId + 'con id= ' + colicion.getId)
    				console.log('coliciono x= '+ ballp.posX + 'con y= ' + ballp.posY + '//// x= '+ colicion.posX + 'con y= ' + colicion.posY)
    			
    			}else{

    			}
			}else{

			}
    		
    	
    	
		});
    	
	});
}

function keyPressed () {
	if(keyCode === 87) {
		p1.moveUp()

	} else if(keyCode === 83) {
		p1.moveDown()
	} else if(keyCode === UP_ARROW) {
		p2.moveUp()
	}  else if(keyCode === DOWN_ARROW) {
		p2.moveDown()
	}
	
	
}

function mousePressed () {
	
	ball = new Ball(floor(Math.random() * windowWidth),floor(Math.random() * windowHeight),getRandomColor(),floor(windowWidth),floor(windowHeight ),id)
	lista.push(ball);
	
	id+=1
	
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
*/