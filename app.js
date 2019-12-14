// Para que esta aplicación funcione, vamos a necesitar los módulos express y ejs

// Requerimos express
const express = require('express');
// Ejecutamos express y lo asignamos a la constante app
// Esto nos permite luego utilizar toda la funcionalidad de express
const app = express();

// Configuramos el motor de vistas, en este caso ejs
app.set('view engine', 'ejs');

// Configuramos la carpeta de contenido estático
// Todo el contenido de esa carpeta se mostrará tal cual está
// no pasará por el filtro de Express
app.use(express.static('public'));

// Configuramos nuestras rutas, podemos tener tantas como necesitemos
app.get('/', (req, res) => {
    // El método render utilizará el motor de vistas definido anteriormente
    // La carpeta por defecto será views, no es necesario escribir la extensión
    // del archivo.
    res.render('index', {pageName: 'Inicio'});

    // El segundo parámetro de render recibe un objeto literal {...}, 
    // ahí podemos enviar a la vista la información que necesitemos

});

app.get('/acerca', (req, res) => {
    res.render('index', {pageName: 'Acerca de'});
});

// Esta línea es la que finalmente levanta el servidor en el puerto 3000.
app.listen(3000);