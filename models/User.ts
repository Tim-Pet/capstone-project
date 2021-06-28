import { ObjectId } from 'mongodb'
import { model, Schema } from 'mongoose'

interface User {
  _id: string
  name: string
  playlists: {
    title: string
    _id: string
    description: string
    tracks: { _id: string; name: string; artist: string }[]
  }[]
}

const userSchema = new Schema<User>({
  _id: String,
  name: String,
  playlists: [
    {
      title: String,
      _id: String,
      description: String,
      tracks: [{ _id: String, name: String, artist: String }],
    },
  ],
})

module.exports = model('User', userSchema)
