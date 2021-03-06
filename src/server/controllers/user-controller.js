const bcrypt = require('bcrypt')
const User = require('../models/user-models')

exports.add = async (req, res, next) => {
  try {
    const { username, name, password, avatar, biography, phone, email } =
      req.body
    const userVerify = await User.find({ email: email })
    console.log('user post: ' + req.body + 'username: ', userVerify)
    if (!userVerify.length) {
      const passwordHash = await bcrypt.hash(password, 10)
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
    } else {
      res.json('este usuario ya exite')
    }
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
  if (id) {
    const newUser = req.body
    User.findByIdAndUpdate(id, newUser)
      .then((user) => {
        res.status(200).send(user)
      })
      .catch((error) => {
        next(error)
      })
  } else {
    next()
  }
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
