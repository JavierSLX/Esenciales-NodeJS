const prueba = (app) => {
    app.get('/test', (request, response) => {
        response.send('Estoy probando las rutas con Glob');
    });
}

module.exports = prueba;