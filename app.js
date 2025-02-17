require('dotenv').config({path:'.env'});

const path = require('node:path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const indexRouter = require('./routes/indexRouter');
const registerRouter= require('./routes/registerRouter');


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true })); 

app.use('/register', registerRouter);
app.use('/', indexRouter);



console.log(process.env.PORT);  // Check the value of PORT


app.listen(PORT, ()=>{
    console.log(`listenting on ${PORT}`)
})
