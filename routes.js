const server = require("./server")
const express = require('express')
const routes = express.Router()
const utils = require('./utils.js')
const { router } = require("./server")

module.exports = routes

routes.get('/', (req, res) => {
  res.render('home')
})

routes.get('/result/:name', (req, res) => {
  res.render('result')
})

routes.post('/', (req, res) => {
  console.log('post route object body', Object.values(req.body))
  const value = utils.decideResult(Object.values(req.body))
  res.redirect(`/result/${value}`)
})
