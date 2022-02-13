const bcrypt = require('bcrypt')
const User = require('../models/user-models')

exports.add = async (req, res, next) => {
  try {
    const { username, name, password, avatar, biography, phone, email } =
      req.body
    console.log(req.body)
    const userVerify = await User.find({ email: email })
    console.log(userVerify)
    if (!userVerify.length) {
      console.log(5)
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
      console.log(3)
      console.log(email)
      console.log(savedUser)
      next()
    } else {
      next()
    }
  } catch (error) {
    next(error)
  }
}

exports.showById = (req, res, next) => {
  const { username, name, password, avatar, biography, phone, email } = req.body
  console.log(2)
  User.find({ email: email })
    .then((response) => {
      res.status(200).json(response)
    })
    .catch((error) => {
      next(error)
    })
}
