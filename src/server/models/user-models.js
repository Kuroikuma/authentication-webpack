const { Schema, model } = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const userSchema = new Schema({
  username: { type: String, unique: true },
  name: { type: String, unique: true },
  passwordHash: String,
  avatar: String,
  biography: String,
  phone: Number,
  email: { type: String, unique: true },
  chatRoom: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Chat Room',
    },
  ],
})

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v

    delete returnedObject.passwordHash
  },
})

userSchema.plugin(uniqueValidator)

const User = model('User', userSchema)

module.exports = User
