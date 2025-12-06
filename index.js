const cors = require('cors');
const exp = require('express');
const ap = exp();

ap.use(cors({
	origin: ['http://localhost:']
}))

ap.get('/', (req, res) => {
	res.send('Check this out on browser')
});

ap.get('/about', (req, res) => {
	res.send('now this is just about')
});

const serv = [
		{ id: 1, name: 'PCB Design', description: 'We will create the design for you'},
		{ id: 2, name: 'PCB Layout', description: 'This is done after design'}
	];

ap.get('/services', (req, res) => {
	res.json(serv);
});

ap.get('/services/:name', (req, res) => {
	const name = req.params.name.toLowerCase();
	const reqServ = serv.find((service) => service.name.toLowerCase() === name);
	res.json(reqServ);
});

ap.get('/message', (req, res) => {
	res.json(message: 'Hello From Mr. Pogi');
});

ap.listen(3000, () => {
	console.log('Test if it wil run');
});