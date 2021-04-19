const {Schema, model}= require('mongoose')

let MovieSchema = new Schema({
    title: String, 
   genre: String, 
   plot: String, 
   cast: [{
    type: Schema.Types.ObjectId,
    ref:'celebrity'
   }]
  })
  
  let MovieModel = model('movie', MovieSchema)
  
  module.exports = MovieModel
