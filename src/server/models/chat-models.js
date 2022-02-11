const { Schema, model } = require('mongoose')

const chatSchema = new Schema({
  message: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  chatRoom: {
    type: Schema.Types.ObjectId,
    ref: 'Chat Room',
  },
})

chatSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
  },
})

const Chat = model('Chat', chatSchema)

module.exports = Chat
