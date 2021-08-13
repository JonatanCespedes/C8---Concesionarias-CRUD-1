let express = require('express');
let app = express();
let path = require('path');

/* Enrutadores */
let homeRouter = require('./routes/home');
let autosRouter = require('./routes/autos');
let marcasRouter = require('./routes/marcas');
let sucursalesRouter = require('./routes/sucursales')

/* VIEWS */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

/* Middlewares */
app.use(express.static('public'));
app.use(express.urlencoded({ extended : false }));
app.use(express.json())

/* RUTAS */
app.use('/', homeRouter);
app.use('/sucursales', sucursalesRouter);
app.use('/marcas', marcasRouter);
app.use('/autos', autosRouter)

app.listen(3000, () => console.log("Servidor levantado"));