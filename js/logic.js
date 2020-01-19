const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');	//rendering context - allows to access a range of drawing functions


const reader = new FileReader(); //file reader variable allowing you to read any uploaded files
const img = new Image(); 



const uploadImage = e => {	//uploaded file stored in variable 'e'
	reader.onload = () => {
		img.onload = () => {
		canvas.width = img.width;
		canvas.height = img.height;	//canvas width and height = image width and height
		context.drawImage(img, 0, 0);

		// const imgData = context.getImageData(0,0,canvas.width, canvas.height);
		// console.log(imgData);	//getting pixel data of uploaded image
		}
		img.src = reader.result; //image source set as file result which will be the file
	}
	reader.readAsDataURL(e.target.files[0]) //file info passed to file reader using .readAsDataURL
	// console.log(reader);
}




const imgUpLoader = document.getElementById('uploader'); 
imgUpLoader.addEventListener('change', uploadImage); //listens for any changes and then goes and triggers a function

//function to edit rgba values of pixels
const edit = () => {
	const imgData = context.getImageData(0,0,canvas.width, canvas.height);
	const data = imgData.data; //storing image data of uploaded image

	for( let i = 0; i<data.length; i += 4){	//incrementing by four since each pixel has 4 values - rgba
		data[i] = 50; //i-red, i+1-green, i+2-blue, i+3-alpha channel or opacity
		data[i+1] = 50;
		// data[i+2] = 200;

	}
	context.putImageData(imgData,0,0);
	// console.log(imgData);
	
}

const greyscale = () => {
	const imgData = context.getImageData(0,0, canvas.width, canvas.height);
	const data = imgData.data;

	for( let i = 0; i<data.length;i+=4){
		const greyCol = data[i]*0.51 + data[i+1]*0.71 + data[i+2]*0.07; 
		data[i] = greyCol;
		data[i+1] = greyCol;
		data[i+2] = greyCol;
	}
	context.putImageData(imgData,0,0);
}

const sepia = () => {
	const imgData = context.getImageData(0,0, canvas.width, canvas.height);
	const data = imgData.data;

	for( let i = 0; i<data.length;i+=4){
		const sepiaCol = data[i]*0.51 + data[i+1]*0.71 + data[i+2]*0.07; 
		data[i] = sepiaCol + 50;
		data[i+1] = sepiaCol + 30;
		data[i+2] = sepiaCol;
	}
	context.putImageData(imgData,0,0);
}

const invert = () => {
	const imgData = context.getImageData(0,0, canvas.width, canvas.height);
	const data = imgData.data;

	for( let i = 0; i<data.length;i+=4){
		
		data[i] = 255 - data[i];
		data[i+1] = 255 - data[i-1];
		data[i+2] = 255 - data[i-2];
	}
	context.putImageData(imgData,0,0);
}

const rbg = () => {
	const imgData = context.getImageData(0,0, canvas.width, canvas.height);
	const data = imgData.data;
	var posArr = [] ; 
	for( let i = 0; i<data.length;i+=4){
		
		posArr = [data[i],data[i+1],data[i+2]]; 
		data[i+1] = posArr[2];
		data[i+2] = posArr[1];
	}
	context.putImageData(imgData,0,0);
}

const bgr = () => {
	const imgData = context.getImageData(0,0, canvas.width, canvas.height);
	const data = imgData.data;
	var posArr = [] ; 
	for( let i = 0; i<data.length;i+=4){
		
		posArr = [data[i],data[i+1],data[i+2]];
		data[i] = posArr[2]; 
		data[i+1] = posArr[1];
		data[i+2] = posArr[0];
	}
	context.putImageData(imgData,0,0);
}

const gbr = () => {
	const imgData = context.getImageData(0,0, canvas.width, canvas.height);
	const data = imgData.data;
	var posArr = [] ; 
	for( let i = 0; i<data.length;i+=4){
		
		posArr = [data[i],data[i+1],data[i+2]];
		data[i] = posArr[1]; 
		data[i+1] = posArr[2];
		data[i+2] = posArr[0];

	}
	context.putImageData(imgData,0,0);
}

const grb = () => {
	const imgData = context.getImageData(0,0, canvas.width, canvas.height);
	const data = imgData.data;
	var posArr = [] ; 
	for( let i = 0; i<data.length;i+=4){
		
		posArr = [data[i],data[i+1],data[i+2]];
		data[i] = posArr[1]; 
		data[i+1] = posArr[0];
		
	}
	context.putImageData(imgData,0,0);
}

// const imgClear = () => {
// 	const data = edit; 

// 	const imgData = context.getImageData(0,0, canvas.width, canvas.height);
// 	const data = imgData.data;
// 	context.putImageData(imgData,0,0);
// }
const clearButton = () => {
	img.src = reader.result;
}
//document.querySelectorAll('button')[0].addEventListener('click', edit); //selecting first button and listening for any change i.e., when the button is clicked

document.querySelectorAll('button')[0].addEventListener('click', greyscale);
document.querySelectorAll('button')[1].addEventListener('click', sepia);
document.querySelectorAll('button')[2].addEventListener('click', invert);
document.querySelectorAll('button')[3].addEventListener('click',rbg);
document.querySelectorAll('button')[4].addEventListener('click',bgr);
document.querySelectorAll('button')[5].addEventListener('click',gbr);
document.querySelectorAll('button')[6].addEventListener('click',grb);
document.querySelectorAll('button')[7].addEventListener('click',clearButton);