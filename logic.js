const canvas = document.getElementbyId('canvas');
const context = canvas.getContext('2d');	//rendering context - allows to access a range of drawing functions

context.fillText("Canvas");

context.strokeRect(0,0, canvas.width, canvas.height)