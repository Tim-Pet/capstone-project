import { ObjectId } from 'mongodb'
import { model, Schema } from 'mongoose'

interface User {
  _id: string
  name: string
  playlists: {
    title: string
    _id: string
    description: string
    tracks: {
      _id: string
      name: string
      artists: {
        external_urls: {
          spotify: string
        }
        href: string
        id: string
        name: string
        uri: string
      }[]
    }[]
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
      tracks: [
        {
          _id: String,
          name: String,
          artists: [
            {
              external_urls: {
                spotify: String,
              },
              href: String,
              id: String,
              name: String,
              uri: String,
            },
          ],
        },
      ],
    },
  ],
})

module.exports = model('User', userSchema)
