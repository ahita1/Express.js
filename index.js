const startUpDebugger = require('debug')('app:startup')
const path = require('path');
const dbDebugger = require('debug')('app:db')
require('dotenv').config();     
const config = require('config')
const express = require('express')
const helmet = require('helmet')


const courses = require('./routes/courses')
const home = require('./routes/home')


const morgan = require('morgan')
const log = require('./middleware/logger')
const Joi = require('joi')
const app = express()

app.set('view engine', 'pug')
app.set('views', './views')          //default haha
// console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
// console.log(`app: ${app.get('env')}`);
app.use(express.json())
app.use(express.static('public'))
app.use(helmet())
app.use('/api/courses' , courses)
app.use('/' , home)

console.log("Application Name: " + config.get('name'));
console.log("Mail Server : " + config.get('mail.host'));
console.log('Mail Password:', config.get('mail.password'));

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('tiny'))
    startUpDebugger('morgan enabled haha!!!');
}

dbDebugger('connected to the database...')
app.use(log)

// const port = 3000


const port  = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`server is listening on port ${port}...`);
})