const express = require('express')
const path = require('path')
const hbs = require('hbs')
const app = express();

//port 
const port = 4000

// paths
const static_path = path.join(__dirname, '../public')
const templates_path = path.join(__dirname, '../templates/views')
const partials_path = path.join(__dirname, '../templates/partials')

// use static website
app.use(express.static(static_path));



// setting up template engine
app.set('view engine', 'hbs')
app.set('views', templates_path)

//registering app partials
hbs.registerPartials(partials_path)

app.get('/', (req, res) => {

    res.render('index')
})

app.get('/weather', (req, res) => {

    res.render('weather')
})

app.get('/contact', (req, res) => {

    res.render('contact')
})

app.get('/contact/*', (req, res) => {

    res.render('Error404')
})
app.get('*', (req, res) => {

    res.render('Error404')
})

app.listen(port,()=>{
    console.log(`server is listening on port ${port}`)
})