export interface Mood {
  name: string
  id: number
  options: SpotifyApi.RecommendationsOptionsObject
}

export interface User {
  _id: string
  name: string
  playlists: Playlist[]
}

export interface Playlist {
  _id: string
  title: string
  description: string
  tracks: Track[]
}

export interface Track {
  _id: string
  name: string
  artists: SpotifyApi.ArtistObjectSimplified[]
}
