const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')
const log = require('./middleware/logger')
const Joi = require('joi')
require('dotenv').config();



const app = express()

// console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
// console.log(`app: ${app.get('env')}`);

app.use(express.json())
app.use(express.static('public'))
app.use(helmet())
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('tiny'))
    console.log('morgan enabled haha!!!');
}


app.use(log)

// const port = 3000
const courses = [
    { id: 1, name: 'C++' },
    { id: 2, name: 'JavaScript' },
    { id: 3, name: 'Python' },
]
app.get('/', (req, res) => {
    res.send("hello Ahita, how are you haha, don't worry everything is gonna be alright owkay haha")
})

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