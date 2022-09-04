const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const sqsql = require('mysql2');
const path = require('path');
const moment = require('moment')

// require('dotenv').config();


const app = express();
app.use(bodyParser.json());

//passing middleware
//parse application
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.engine('handlebars',exphbs.engine(
    {defaultLayout:'main'}
    //like index.html is defaultLayout
));

//set static folder
//set static folder
app.use(express.static('public'));

//Sets our app to use the handlebars engine
app.set('view engine','handlebars');

const userRoute = require('./routes/userRoutes')
app.use('/',userRoute);


//creating route to render
// app.get('',(req,res)=>{
//     res.render('home');
// });

module.exports = app;