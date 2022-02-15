const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/user-models')

exports.login = async (req, res, next) => {
  const { password, email } = req.body
  console.log(password, email)
  try {
    const user = await User.findOne({ email })
    console.log(user)
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
