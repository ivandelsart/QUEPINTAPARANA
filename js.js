


//---------------SPLASHSCREEN > TEXT ANIMATION---------------
const spans = document.querySelectorAll('.word span');

spans.forEach((span, idx) => {
	span.addEventListener('onmouseenter', (e) => {
		e.target.classList.add('active');
	});
	span.addEventListener('animationend', (e) => {
		e.target.classList.remove('active');
	});
	
	// Initial animation
	setTimeout(() => {
		span.classList.add('active');
	}, 750 * (idx+1))
});

//--------------------MENU RESPONSIVE-----------------

const toggleMenuElement = document.querySelector('.toggle-menu');
const menuElement = document.querySelector('.main-menu');

toggleMenuElement.addEventListener('click', () => {

	menuElement.classList.toggle('main-menu-show')
	console.log('prueba')
});

