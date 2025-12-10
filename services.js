const express = require('express');
const router = express.Router();

const serv = [
		{id: 11, name: 'test', description: 'Testing lng'},
		{id: 12, name: 'result', description: 'May Result na'}
	];

router.get('/', (req, res) => {
	res.send(serv);
});

router.get('/:id', (req, res) => {
	const ids = Number(req.params.id);

	const reqServ = serv.find((service) => service.id === ids);

	if(!reqServ){
		// return res.json({ message: 'No such thing'});
		return res.status(404).send('No such services here');
	};

	res.json(reqServ);
});

router.post('/', (req, res) => {
	const { name, price } = req.body
	const newService = {
		name,
		price
	}
	console.log(newService)
	res.json({ message: "New Service was added", serv: newService })
})

module.exports = router