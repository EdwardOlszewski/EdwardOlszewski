import mongoose from 'mongoose'

const GraphicsProjectsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a title'],
  },
  imgURL: {
    type: String,
    required: [true, 'Please add a imgURL'],
  },
})

module.exports =
  mongoose.models.Graphics || mongoose.model('Graphics', GraphicsProjectsSchema)
