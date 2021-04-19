const {Schema, model}= require('mongoose')

let CelebSchema = new Schema({
    name: String, 
   occupation: String, 
   catchPhrase: String, 
  })
  
  let CelebModel = model('celebrity', CelebSchema)
  
  module.exports = CelebModel

  