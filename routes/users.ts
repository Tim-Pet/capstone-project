import express from 'express'
const router = express.Router()
const User = require('../models/User')

router.get('/', async (req, res) => {
  res.json(await User.find())
})

router.get('/:id', async (req, res, next) => {
  const { id } = req.params
  res.json(await User.findById(id))
})

router.patch('/:id', async (req, res) => {
  const { id } = req.params
  res.json(await User.findByIdAndUpdate(id, req.body, { new: true }))
})

router.post('/', async (req, res) => {
  res.status(201).json(await User.create(req.body))
})

module.exports = router
