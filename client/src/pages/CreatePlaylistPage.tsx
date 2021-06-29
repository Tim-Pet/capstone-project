import Div100vh from 'react-div-100vh'
import { useState } from 'react'
import SpotifyWebApi from 'spotify-web-api-js'
import styled from 'styled-components/macro'
import PlaylistForm from '../components/PlaylistForm/PlaylistForm'
import Header from '../components/Header/Header'
import { updateUser } from '../helper/backendRequests'

interface CreatePlaylistPageProps {
  spotify: SpotifyWebApi.SpotifyWebApiJs
  user: any
  tracks: SpotifyApi.TrackObjectSimplified[] | undefined
}

const CreatePlaylistPage = ({
  spotify,
  user,
  tracks,
}: CreatePlaylistPageProps): JSX.Element => {
  const [serverError, setServerError] = useState(false)

  return (
    <Container>
      <Header withBack={true}>Create Playlist</Header>
      <PlaylistForm
        titleLabel="Title"
        textLabel="Description"
        buttonText="Create Playlist"
        serverError={serverError}
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
    createSpotifyPlaylist(title, description).then(resp => {
      createBackendPlaylist(resp!.id, title, description, tracks!)
      addTracksToSpotifyPlaylist(resp!.id, trackUris)
    })
  }

  function createSpotifyPlaylist(title: string, description: string) {
    return spotify
      .createPlaylist(user._id, { name: title, description: description })
      .catch(err => handleError('Error while creating Playlist:', err))
  }

  function createBackendPlaylist(
    id: string,
    title: string,
    description: string,
    tracksRaw: SpotifyApi.TrackObjectSimplified[]
  ) {
    const tracks = tracksRaw.map(({ id, artists, name }) => ({
      _id: id,
      name,
      artists,
    }))
    const playlists = [...user.playlists]
    playlists.push({
      _id: id,
      title: title,
      description: description,
      tracks: tracks,
    })
    updateUser(user._id, playlists)
  }

  function addTracksToSpotifyPlaylist(id: string, trackUris: string[]) {
    spotify
      .addTracksToPlaylist(id, trackUris)
      .catch(err =>
        handleError('Error while adding Tracks to the playlist:', err)
      )
  }

  function handleError(msg = 'Error: ', err: SpotifyWebApi.ErrorObject) {
    console.log(msg, err)
    setServerError(true)
    setTimeout(() => setServerError(false), 5000)
  }
}

export default CreatePlaylistPage

const Container = styled(Div100vh)`
  display: grid;
  grid-template-rows: auto 1fr;
  padding: 12px 0;
`
