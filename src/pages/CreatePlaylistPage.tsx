import { useHistory } from 'react-router-dom'
import SpotifyWebApi from 'spotify-web-api-js'
import styled from 'styled-components/macro'
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
  const { goBack } = useHistory()
  return (
    <Container>
      <Header withBack={true}>Create Playlist</Header>
      <DefaultCreatePlaylistForm
        titleLabel="Title"
        textLabel="Description"
        buttonText="Create Playlist"
        onSubmit={handleSubmit}
      />
    </Container>
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
    goBack()
  }
}

export default CreatePlaylistPage

const Container = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  height: 100vh;
  padding: 12px 0;
`
