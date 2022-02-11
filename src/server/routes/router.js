const express = require('express')
const router = express.Router()

const userController = require('../controllers/user-controller')
const chatRoomController = require('../controllers/chatRoom-controller')
const chatController = require('../controllers/chat-controller')

module.exports = function () {
  /*****************  USER  ********************/
  router.post('/user', userController.add)
  router.get('/user', userController.show)
  router.get('/user/:id', userController.showById)
  router.delete('/user/:id', userController.delete)
  router.put('/user/:id', userController.update)

  /*****************  CHAT ********************/

  router.post('/chat', chatController.add)
  router.get('/chat', chatController.show)
  router.get('/chat/:id', chatController.showById)

  /*****************  CHAT ROOM ********************/

  router.post('/chat-room', chatRoomController.add)
  router.get('/chat-room', chatRoomController.show)
  router.get('/chat-room/:id', chatRoomController.showById)

  return router
}
