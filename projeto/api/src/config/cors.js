module.exports = (_, response, next) => {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
    response.header("Access-Control-Allow-Headers", "Origin,X-Requested-With,Content-Type,Accept,x-access-token");
    next();
};