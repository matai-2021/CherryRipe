const path = require('path')
const express = require('express')
const hbs = require('express-handlebars')

const routes = require('./routes')

const server = express()

module.exports = server

server.use(express.urlencoded({extended: false}))

server.engine('hbs', hbs({ extname: 'hbs'}))
server.set('view engine', 'hbs')

// these two lines need to be here to use static folder (public, images etc)
const staticPath = path.join(__dirname, 'public')
server.use(express.static(staticPath))

server.use('/', routes)