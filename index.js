const cor = require('cors');
const exp = require('express');
const serviceRouter = require('./services');
const apk = exp();


// middleware < < <
apk.use(cor({
	origin: [
		'http://localhost:4000',
		'http://192.168.1.139:4400'
	]
}));

apk.use('/services', serviceRouter);

apk.use(exp.json());

apk.get('/', (req, res) => {
	res.send('This is my last test really?');
});

apk.get('/about', (req, res) => {
	res.send('This is the about Page');
});


apk.get('/message', (req, res) => {
	res.json({message: 'I am so Pogi'});
});

apk.post('/message', (req, res) => {
	const { name, message } = req.body
	console.log('New message: ', name, message)
	res.json({ message: 'Thank you for your message'})
})

apk.listen(4000, () => {
	console.log('Server is now running');
});