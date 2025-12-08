const cor = require('cors');
const exp = require('express');
const apk = exp();

apk.use(cor({
	origin: [
		'http://localhost:4000',
		'http://192.168.1.139:4400'
	]
}));

apk.get('/', (req, res) => {
	res.send('This is my last test really?');
});

apk.get('/about', (req, res) => {
	res.send('This is the about Page');
});

const serv = [
		{id: 11, name: 'test', description: 'Testing lng'},
		{id: 12, name: 'result', description: 'May Result na'}
	];

apk.get('/services', (req, res) => {
	res.send(serv);
});

apk.get('/services/:id', (req, res) => {
	const ids = Number(req.params.id);

	const reqServ = serv.find((service) => service.id === ids);

	if(!reqServ){
		// return res.json({ message: 'No such thing'});
		return res.status(404).send('No such services here');
	};

	res.json(reqServ);
});

apk.get('/message', (req, res) => {
	res.json({message: 'I am so Pogi'});
});

apk.listen(4000, () => {
	console.log('Server is now running');
});