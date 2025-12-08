const exp = require('express');
const apk = exp();

apk.get('/', (req, res) => {
	res.send('This is a test message for front end');
});

apk.get('/about', (req, res) => {
	res.send('This is the about page');
});

const serv = [
		{ id: 1, name: 'Brush', description: 'Healing brush' },
		{ id: 2, name: 'paint', description: 'imaginative paint' }
	]; 

apk.get('/products', (req, res) => {
	res.send(serv);
});

apk.get('/products/:id', (req, res) => {
	const ids = Number(req.params.id);

	const idProduct = serv.find((product) => product.id === ids);
	
	if (!idProduct) {
	  return res.status(404).send('Product not found');
	};
	res.json(idProduct);


})

apk.listen(3000, () => {
	console.log('Start the server');
});