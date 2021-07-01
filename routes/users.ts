export {} //needed due to module.exports to fix TS2451
const express = require('express')
const router = express.Router()
const User = require('../models/User')

router.get('/', async (req: any, res: any) => {
  res.json(await User.find())
})

router.get('/:id', async (req: any, res: any, next: any) => {
  const { id } = req.params
  res.json(await User.findById(id))
})

router.patch('/:id', async (req: any, res: any) => {
  const { id } = req.params
  res.json(await User.findByIdAndUpdate(id, req.body, { new: true }))
})

router.post('/', async (req: any, res: any) => {
  res.status(201).json(await User.create(req.body))
})

module.exports = router
