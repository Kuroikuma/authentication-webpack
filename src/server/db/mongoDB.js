const mongoose = require('mongoose')
const connectionString = `mongodb+srv://Odiseo:Mapamapa84@cluster0.cpnkf.mongodb.net/chat-group?retryWrites=true&w=majority`

mongoose
  .connect(connectionString)
  .then(() => {
    console.log('data connected')
  })
  .catch((err) => {
    console.error(err)
  })

exports.module = mongoose
