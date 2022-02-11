const bcrypt = require('bcrypt')
const User = require('../models/user-models')

exports.add = async (req, res, next) => {
  try {
    const { username, name, password, avatar, biography, phone, email } =
      req.body

    const passwordHash = await bcrypt.hash(password, 10)
    console.log('que pasho' + ' ' + passwordHash)
    const user = new User({
      username,
      name,
      passwordHash,
      avatar,
      biography,
      phone,
      email,
    })

    const savedUser = await user.save()

    res.json(savedUser)
  } catch (error) {
    next(error)
  }
}

exports.show = (req, res, next) => {
  User.find({})
    .then((response) => {
      res.status(200).json(response)
    })
    .catch((error) => {
      next(error)
    })
}

exports.showById = (req, res, next) => {
  const id = req.params.id
  User.findById(id)
    .then((response) => {
      res.status(200).json(response)
    })
    .catch((error) => {
      next(error)
    })
}

exports.update = (req, res, next) => {
  const id = req.params.id
  const newUser = req.body
  User.findByIdAndUpdate(id, newUser)
    .then((user) => {
      res.status(200).send(user)
    })
    .catch((error) => {
      next(error)
    })
}

exports.delete = (req, res, next) => {
  const id = req.params.id

  User.findByIdAndDelete(id)
    .then((user) => {
      res.status(204).send(user)
    })
    .catch((error) => {
      next(error)
    })
}
