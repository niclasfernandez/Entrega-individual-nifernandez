const path = require('path');
const express = require('express');
const app = express();
const methodOverride = require('method-override');

const indexRouter = require('./routers/indexRouter');
const detailRouter = require('./routers/detailRouter');

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'))

app.use(express.json())
app.use(express.urlencoded({ extended:true }))
app.use(methodOverride('_method'));

// app.use(express.static(path.resolve(__dirname, '../public')))
app.use(express.static(path.join(__dirname, '../public')));

app.use('/', indexRouter);
app.use('/detail', detailRouter);

app.listen(3000, function() {
    console.log("Servidor corriendo en el puerto 3000")
    console.log("http://localhost:3000")
})