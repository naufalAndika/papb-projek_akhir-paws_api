const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
  photo: {
    type: Buffer
  },
  desc: {
    type: String
  },
  sex: {
    type: Number
  },
  foundAt: {
    lat: {
      type: Number
    },
    long: {
      type: Number
    }
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  location: {
    lat: {
      type: String
    },
    long: {
      type: String
    }
  },
  adpoted: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
})

const Post = mongoose.model('Post', postSchema)

module.exports = Post
