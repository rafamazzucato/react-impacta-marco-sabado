// REQUISITAMOS O MÓDULO HTTP NATIVO DO NODE.JS
const http = require('http');

// CRIAMOS UMA FUNÇÃO QUE TRATA AS REQUISIÇÕES DO SERVIDOR
// E DEFINE UMA RESPOSTA PADRÃO PARA ESTE SERVIDOR
const tratarRequisicoes = (_, resposta) => {
    resposta.writeHead(200, {"Content-Type" : "text/html"});
    resposta.write('<h1>Bem vindo, site Cursos Impacta em desenvolvimento, lancamento oficial 31/05</h1>');
    resposta.end();
}

// CRIA O SERVIDOR ATRAVÉS DO CREATESERVER DO HTTP
// PASSANDO A FUNÇÃO QUE VAI TRATAR AS REQUISIÇÕES
const servidor = http.createServer(tratarRequisicoes);

// SOBRE O SERVIDOR NA PORTA DESEJADA E AVISA NO CONSOLE AO SUBIR
servidor.listen(3000, () => console.log('Servidor no ar na porta 3000'));