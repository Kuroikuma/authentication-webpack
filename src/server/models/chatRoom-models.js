const { Schema, model } = require('mongoose')

const chatRoomSchema = new Schema({
  chats: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Chat',
    },
  ],
  users: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  isOpen: Boolean,
})

chatRoomSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
  },
})

const ChatRoom = model('Chat Room', chatRoomSchema)

module.exports = ChatRoom
