const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/user-models')

exports.add = async (req, res, next) => {
  try {
    const { username, name, password, avatar, biography, phone, email } =
      req.body

    const userVerify = await User.find({ email: email })

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

      next()
    } else {
      next()
    }
  } catch (error) {
    next(error)
  }
}

exports.login = async (req, res, next) => {
  const { password, username, email } = req.body
  try {
    const user = await User.findOne({ email })

    const passwordCorrect =
      user === null ? false : await bcrypt.compare(password, user.passwordHash)

    if (!(user && passwordCorrect)) {
      res.status(401).json({ error: 'invalid user or password' })
    }
    const userForToken = {
      id: user._id,
      username: user.username,
    }

    const token = jwt.sign(userForToken, 'Kuroikuma')

    res.send({ user, token })
  } catch (error) {
    next(error)
  }
}
