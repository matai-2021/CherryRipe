const server = require("./server")
const express = require('express')
const routes = express.Router()

module.exports = routes

routes.get('/', (req, res) => {
  res.render('home')
})

routes.get('/result', (req, res) => {
  res.render('result')
})

routes.post('/', (req, res) => {
  console.log(Object.values(req.body))
  res.redirect('/result')
  // res.send('this is a post')
})