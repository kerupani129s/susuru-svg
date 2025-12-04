(async () => {

	const canvas = document.getElementById('output');
	const context = canvas.getContext('2d');

	const image = new Image();
	image.src = 'susuru.svg';
	await image.decode();

	context.drawImage(image, 0, 0);

})();
