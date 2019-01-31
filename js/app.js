const navMenu = document.querySelector('.navigation-menu');

function hamburgerAnimate(x) {
    x.classList.toggle("change");
}

function showNav() {
	//navMenu.style.display = 'block';
	navMenu.classList.toggle("show")
}

/*const readMore = document.querySelector('.read-more');
const remainingText = document.querySelector('.remainder');

readMore.addEventListener('Click', function showReadMore() {
	remainingText.classList.remove("continuation");
});*/

const summaryOne = document.querySelector('.sum-one');
const readMore = document.querySelector('.read-more');
const showLess = document.querySelector('.show-less');

if(summaryOne){
	summaryOne.addEventListener("toggle", function() {
		if (summaryOne.open) {
			readMore.style.display = 'none';
			showLess.style.display = 'block';
		} else {
		readMore.style.display = 'block';
		showLess.style.display = 'none';
	}
}, false);
}
let canvas, context;
canvas = document.getElementById('canvas');

if(canvas && canvas.getContext) {
	context = canvas.getContext('2d');
	context.beginPath();
	context.moveTo(75, 50);
	context.lineTo(75, 100);
	context.lineTo(25, 100);
	context.closePath();
	context.fillStyle = '#0099ff';
	context.fill();
	context.lineWidth = 6;
	context.lineJoin = 'round';
	context.strokeStyle = '#cccccc';
	context.stroke();
}

if(canvas && canvas.getContext) {
	context.fillStyle = '#0099ff';
	context.fillRect(
		140,
		160,
		90,
		100);

	context.fillStyle = '#ff99008c';
	context.fillRect(
		185,
		210,
		90,
		100);
	context.clearRect(
		195,
		220,
		20,
		20)
}