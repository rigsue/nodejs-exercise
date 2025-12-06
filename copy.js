const exp = require('express');
const ap = exp();

ap.get('/', (req, res) => {
	res.send("This is the initial?")
});

ap.get('/about', (req, res) => {
	res.send('This is the sample about page')
});
ap.get('/home', (req, res) => {
	res.send('This is the sample home page')
});

const products = [
	{ id: 1, name: 'Brush', description: 'Healing brush' },
	{ id: 2, name: 'paint', description: 'imaginative paint' }
];

ap.get('/products', (req, res) => {
	res.json(products);
})

ap.get('/products/:id', (req, res) => {
	const id = Number(req.params.id);

	const reqProduct = products.find((product) => product.id === id);
	res.json(reqProduct);
});

ap.listen(4000, () => {
	console.log('Now I am running the server');
});