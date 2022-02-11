const ChatRoom = require('../models/chatRoom-models')
const User = require('../models/user-models')

exports.add = (req, res, next) => {
  const { users, isOpen } = req.body
  users.map((user) => {
    User.findById(user)
      .then((response) => console.log(response))
      .catch((error) => next(error))
  })

  const chatRoom = new ChatRoom({
    users,
    isOpen,
  })

  chatRoom
    .save()
    .then((response) => {
      res.status(201).json({ mensaje: response })
      users.map((user) => {
        User.findById(user)
          .then((userVerify) => {
            userVerify.chatRoom.push(response._id)
            userVerify.save()
          })
          .catch((error) => {
            next(error)
          })
      })
    })
    .catch((error) => {
      next(error)
    })
}

exports.show = (req, res, next) => {
  ChatRoom.find({})
    .then((response) => {
      res.status(200).json(response)
    })
    .catch((error) => {
      next(error)
    })
}

exports.showById = (req, res, next) => {
  const id = req.params.id
  ChatRoom.findById(id)
    .populate('Chat')
    .then((response) => {
      res.status(200).json(response)
    })
    .catch((error) => {
      next(error)
    })
}
