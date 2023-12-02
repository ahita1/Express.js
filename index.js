const startUpDebugger = require('debug')('app:startup')
const path = require('path');
const dbDebugger = require('debug')('app:db')
require('dotenv').config();     
const config = require('config')
const express = require('express')
const helmet = require('helmet')
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
const courses = [
    { id: 1, name: 'C++' },
    { id: 2, name: 'JavaScript' },
    { id: 3, name: 'Python' },
]
app.get('/', (req, res) => {
    res.render('index', { title: 'My Express App', message: 'Hello Ahita haha' });
});

app.get('/api/courses', (req, res) => {
    res.send(courses)
})

app.post('/api/courses', (req, res) => {
    const { error } = validate(req.body)
    if (error)
        return res.status(400).send(error.details[0].message);
    const course = {
        id: courses.length + 1,
        name: req.body.name
    }
    courses.push(course)
    res.send(course)
})

app.get('/api/posts/:year/:month', (req, res) => {
    res.send(req.query)
})
app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(u => u.id === parseInt(req.params.id))
    if (!course)
        return res.status(404).send("a course with this id was not found haha")
    res.send(course)
})
app.put('/api/courses/:id', (req, res) => {

    const course = courses.find(u => u.id === parseInt(req.params.id))
    if (!course)
        return res.status(404).send("a course with the given is was not found!!!")

    const { error } = validate(req.body)
    if (error)
        return res.status(400).send(error.details[0].message)
    course.name = req.body.name
    res.send(course)
})
app.delete('/api/courses/:id', (req, res) => {
    const course = courses.find((u) => u.id === parseInt(req.params.id))
    if (!course)
        return res.status(404).send('A Course With The Given Id Was Not Found haha!!!')
    const index = courses.indexOf(course)
  courses.splice(index, 1)
  res.send(course)
})
const validate = (course) => {
    const schema = Joi.object({
        name: Joi.string().min(3).required()
    })
    return schema.validate(course)
}
const port  = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`server is listening on port ${port}...`);
})