import mongoose from 'mongoose'

const NextJsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a title'],
  },
  imgURL: {
    type: String,
    required: [true, 'Please add a title'],
  },
  gitHubLink: {
    type: String,
    required: [true, 'Please add a GitHub link'],
  },
  webLink: {
    type: String,
    required: [true, 'Please add a web link'],
  },
  myRole: {
    type: String,
    required: [true, 'Please add my role'],
  },
  projectDif: {
    type: String,
    required: [true, 'Please add project difficulty'],
  },
  mySolution: {
    type: String,
    required: [true, 'Please add my solution'],
  },
  techUsed: [String],
})

module.exports =
  mongoose.models.NextjsProject || mongoose.model('NextjsProject', NextJsSchema)
