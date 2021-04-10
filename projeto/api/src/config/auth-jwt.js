const jwt = require('jsonwebtoken');

const SECRET_KEY = 'my-super-importante-secret';

const notRestrictedEndpoints = [
    { url: '/api/login', method: 'POST' },
    { url: '/api/cursos', method: 'GET' },
    { url: '/api/contatos', method: 'POST' },
];

module.exports = server => {
    const tratamentoJwt = (req, res, next) => {
        if (!req || !req.headers) {
            return res.status(400).send({ auth: false, message: 'Não foi possível validar token de acesso.' });
        }

        if (notRestrictedEndpoints.find(item => item.url === req.url && item.method === req.method)) {
            next();
        } else {
            var token = req.headers['x-access-token'];
            if (!token) {
                return res.status(401).send({ auth: false, message: 'Nenhum token de acesso informado' });
            }

            jwt.verify(token, SECRET_KEY, function (err, decoded) {
                console.log(err);
                if (err) {
                    return res.status(400).send({ auth: false, message: 'Não foi possível validar token de acesso.' });
                }

                next();
            });
        }
    }

    server.use(tratamentoJwt);

    server.post('/api/login', (req, res) => {
        if (req && req.body) {
            const { user, password } = req.body;

            if (user === 'admin' && password === 'Admin@123') {
                const idUsuario = '3211f0h1736ac4c612d00ff4';

                const token = jwt.sign({ idUsuario, user }, SECRET_KEY, {
                    expiresIn: 3000 //expira em 1m
                });

                res.status(200).send({ token });
                return;
            }
        }

        res.status(400).send({ error: 'Parametros de entrada inválidos' });
    });
}