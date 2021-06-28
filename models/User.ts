import { ObjectId } from 'mongodb'
import { model, Schema } from 'mongoose'

interface User {
  name: string
  playlists: {
    name: string
    id: string
    tracks: { id: string; name: string; artist: string }[]
  }[]
}

const userSchema = new Schema<User>({
  name: String,
  playlists: [
    {
      name: String,
      id: String,
      tracks: [{ id: String, name: String, artist: String }],
    },
  ],
})

module.exports = model('User', userSchema)
