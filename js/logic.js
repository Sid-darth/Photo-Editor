const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');	//rendering context - allows to access a range of drawing functions


const reader = new FileReader(); //file reader variable allowing you to read any uploaded files
const img = new Image(); 


// img.onload = () => {
// 	canvas.width = img.width;
// 	canvas.height = img.height;
// 	context.drawImage(img, 0, 0);
// }


const uploadImage = e => {	//uploaded file stored in variable 'e'
	reader.onload = () => {
		img.onload = () => {
		canvas.width = img.width;
		canvas.height = img.height;	//canvas width and height = image width and height
		context.drawImage(img, 0, 0);
		}
		img.src = reader.result; //image source set as file result which will be the file
	}
	reader.readAsDataURL(e.target.files[0]) //file info passed to file reader using .readAsDataURL
	// console.log(reader);
}


const imgUpLoader = document.getElementById('uploader'); 
imgUpLoader.addEventListener('change', uploadImage); //listens for any changes and then goes and triggers a function
