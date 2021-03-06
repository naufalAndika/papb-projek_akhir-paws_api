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
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Shelter'
  },
  adopted: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
})

postSchema.methods.adopt = async function () {
  const post = this
  post.adopted = true
  await post.save()
}

postSchema.methods.setLocation = async function (location) {
  const post = this
  post.location = location
  await post.save()
}

postSchema.methods.toJSON = function () {
  const post = this
  const postObject = post.toObject()

  delete postObject.photo
  return postObject
}

const Post = mongoose.model('Post', postSchema)

module.exports = Post
