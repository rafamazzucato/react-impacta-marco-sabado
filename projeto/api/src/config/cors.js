module.exports = (request, response, next) => {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    response.header("Access-Control-Allow-Headers", "Origin,X-Requested-With,x-access-token,Content-Type,Accept");
    next();
};