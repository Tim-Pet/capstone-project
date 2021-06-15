import SpotifyWebApi from 'spotify-web-api-js'
import { DefaultCreatePlaylistForm } from '../components/CreatePlaylistForm/CreatePlaylistForm.stories'
import Header from '../components/Header/Header'

interface CreatePlaylistPageProps {
  spotify: SpotifyWebApi.SpotifyWebApiJs
  userId: string
}

const CreatePlaylistPage = ({ spotify, userId }: CreatePlaylistPageProps) => {
  return (
    <div>
      <Header withBack={true}>Create Playlist</Header>
      <DefaultCreatePlaylistForm
        titleLabel="Title"
        textLabel="Description"
        buttonText="Create Playlist"
        onSubmit={handleSubmit}
      />
    </div>
  )
  function handleSubmit({
    title,
    description,
  }: {
    title: string
    description: string
  }): void {
    spotify.createPlaylist(userId, { name: title }, (err, resp) => {
      if (err !== null) {
        console.log(err)
      } else {
        // Add Tracks to Playlist
        // spotify.addTracksToPlaylist(resp.id, trackUris, )
        // Playlist ID = resp.id
        // Track uris
        // options
        // callback (err, resp)
        console.log(resp)
      }
    })
  }
}

export default CreatePlaylistPage
