const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');	//rendering context - allows to access a range of drawing functions

context.fillText("Canvas",100,100);

// context.strokeRect(0,0, canvas.width, canvas.height);
context.fillStyle = '#900';
context.fillRect(0,0, 50,50);

context.fillStyle = 'red';
context.beginPath(); 
context.moveTo(canvas.width/2, canvas.height/2); //moving canvas to the center of the screen;
context.lineTo(250,50);
context.lineTo(250,100);
context.closePath();
// context.stroke(); //draw line on path specified
context.fill(); //fill paths specified with specified .fillStyle()

