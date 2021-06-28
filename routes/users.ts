import express from 'express'
const router = express.Router()
const User = require('../models/User')

router.get('/', async (req, res) => {
  res.json(await User.find())
})

router.get('/:name', async (req, res, next) => {
  const { name } = req.params
  res.json(await User.findOne({ name: name }))
})

router.patch('/:name', async (req, res) => {
  const { name } = req.params
  res.json(await User.findOneAndUpdate({ name: name }, req.body, { new: true }))
})

module.exports = router
