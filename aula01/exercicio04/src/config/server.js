const express = require('express');
var jwt = require('jsonwebtoken');

const port = 3200;
const server = express();

server.use(express.urlencoded({ extended: true }));
server.use(express.json());

server.listen(port, () => console.log(`Servidor no ar na porta ${port}`));

const notRestrictedUrls = [
    {url :'/api/login', method : 'POST' }
]

const verifyJWT = (req, res, next) => {
    console.log(req.method);
    if(notRestrictedUrls.find(e => e.url === req.url && e.method === req.method)){
        next();
        return;
    }

    var token = req.headers['x-access-token'];
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });

    jwt.verify(token, 'my-super-important-secret', function (err, decoded) {
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        
        next();
    });
}
server.use(verifyJWT);

server.post('/api/login', (req, res) => {
    const { user, password } = req.body;

    if (user === 'admin' && password === 'Admin@123') {
        const id = 1; //esse id viria do banco de dados
        var token = jwt.sign({ id, user }, 'my-super-important-secret', {
            expiresIn: 3000 // expires in 50min
        });
        res.status(200).send({ auth: true, token: token });
        return;
    }

    res.status(400).send('Usuário e senha inválidos');
});

module.exports = server;