import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import SpotifyWebApi from 'spotify-web-api-js'
import styled from 'styled-components/macro'
import Button from '../../components/common/Button/Button'
import Slider from '../../components/common/Slider/Slider'
import Header from '../../components/Header'

interface Props {
  spotify: SpotifyWebApi.SpotifyWebApiJs
  setTracks: React.Dispatch<
    React.SetStateAction<SpotifyApi.TrackObjectSimplified[] | undefined>
  >
}

const MainPage = ({ spotify, setTracks }: Props): JSX.Element => {
  const [
    seedObject,
    setSeedObject,
  ] = useState<SpotifyApi.RecommendationsOptionsObject>({
    limit: 20,
    seed_genres: 'classical',
  })

  const history = useHistory()

  return (
    <Container>
      <Header withBack={false}>Choose your kind</Header>
      <StyledForm onSubmit={handleSubmit}>
        <Slider
          title={'liveness'}
          startValue={0.1}
          min={0}
          max={1}
          step={0.01}
          onChange={handleLivenessChange}
        />
        <Button>Get your Playlist</Button>
      </StyledForm>
    </Container>
  )
  function handleLivenessChange(value: number): void {
    setSeedObject({ ...seedObject, target_liveness: value })
  }

  function handleSubmit(event: React.FormEvent<{}>): void {
    event.preventDefault()
    spotify.getRecommendations(
      seedObject,
      (
        error: SpotifyWebApi.ErrorObject,
        resp: SpotifyApi.RecommendationsFromSeedsResponse
      ) => {
        if (error !== null) {
          console.log(error)
        } else {
          setTracks(resp.tracks)
        }
      }
    )
    history.push('recommendations')
  }
}

export default MainPage

const Container = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  height: 100vh;
  padding: 12px 0;
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  padding: 20px 24px 0 24px;
`
