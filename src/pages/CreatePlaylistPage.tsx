import SpotifyWebApi from 'spotify-web-api-js'
import { DefaultCreatePlaylistForm } from '../components/CreatePlaylistForm/CreatePlaylistForm.stories'
import Header from '../components/Header/Header'

interface CreatePlaylistPageProps {
  spotify: SpotifyWebApi.SpotifyWebApiJs
  userId: string
  tracks: SpotifyApi.TrackObjectSimplified[] | undefined
}

const CreatePlaylistPage = ({
  spotify,
  userId,
  tracks,
}: CreatePlaylistPageProps) => {
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
    const trackUris = tracks?.map(({ uri }) => uri) as string[]
    spotify.createPlaylist(
      userId,
      { name: title, description: description },
      (err, resp) => {
        if (err !== null) {
          console.log('Error while creating Playlist:', err)
        } else {
          spotify.addTracksToPlaylist(
            resp.id,
            trackUris,
            undefined,
            (err, resp) => {
              if (err !== null) {
                console.log('Error while adding Tracks to the playlist:', err)
              } else {
                console.log(resp)
              }
            }
          )
        }
      }
    )
  }
}

export default CreatePlaylistPage
