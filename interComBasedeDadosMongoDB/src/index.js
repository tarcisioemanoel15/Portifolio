//  inicializando a aplicação

const express = require('express');
const app = express();
const porta = process.env.PORT || 3000;

// ????
const bodyParser = require('body-parser');
const path = require('path');

const flash = require('req-flash');
const session = require('express-session');

app.use(session({ secret: '123', resave: true, saveUninitialized: true }))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(flash());

app.set('view engine', 'ejs');
app.set('views', '.src/views');

app.use(express.static(path.join('src', 'public')));
// herokuTty159'

app.listen(porta)