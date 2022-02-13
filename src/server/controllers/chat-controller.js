const Chat = require('../models/chat-models')
const ChatRoom = require('../models/chatRoom-models')
const User = require('../models/user-models')

exports.add = async (req, res, next) => {
  const { user, message, chatRoom } = req.body


  ChatRoom.findById(chatRoom)
    .then((response) => console.log(response))
    .catch((error) => {
      next(error)
    })
  User.findById(user)
    .then((response) => console.log(response))
    .catch((error) => {
      next(error)
    })

  const chat = new Chat({
    user,
    message,
    chatRoom,
  })

  try {
    const newChat = await chat.save()

    const chatRoomVerify = await ChatRoom.findById(chatRoom)
    chatRoomVerify.chats.push(newChat._id)

    res.json(newChat)

    chatRoomVerify.save()
  } catch (error) {
    next(error)
  }
}

exports.show = (req, res, next) => {
  Chat.find({})
    .then((response) => {
      res.status(200).json(response)
    })
    .catch((error) => {
      next(error)
    })
}

exports.showById = (req, res, next) => {
  const id = req.params.id
  Chat.findById(id)
    .then((response) => {
      res.status(200).json(response)
    })
    .catch((error) => {
      next(error)
    })
}
