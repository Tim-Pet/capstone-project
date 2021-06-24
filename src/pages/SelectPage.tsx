import { useEffect, useState } from 'react'
import Div100vh from 'react-div-100vh'
import { useHistory } from 'react-router-dom'
import SpotifyWebApi from 'spotify-web-api-js'
import styled from 'styled-components/macro'
import moodSets from '../assets/data/moodSets.json'
import Button from '../components/common/Button/Button'
import Header from '../components/Header/Header'
import MoodShowcase from '../components/MoodSelector/MoodShowcase'
import { Mood } from '../interfaces/SpotifyExtensions'

interface SelectPageProps {
  spotify: SpotifyWebApi.SpotifyWebApiJs
  setTracks: React.Dispatch<
    React.SetStateAction<SpotifyApi.TrackObjectSimplified[] | undefined>
  >
}

const SelectPage = ({ spotify, setTracks }: SelectPageProps): JSX.Element => {
  const baseSeedObject: SpotifyApi.RecommendationsOptionsObject = {
    limit: 20,
    seed_genres: 'classical',
  }
  const [
    seedObject,
    setSeedObject,
  ] = useState<SpotifyApi.RecommendationsOptionsObject>(baseSeedObject)

  const moods: Mood[] = moodSets
  const [currentMood, setCurrentMood] = useState(moods[0])

  useEffect(() => {
    adjustSeedObject()
  }, [currentMood])

  const history = useHistory()

  return (
    <Container>
      <Header withBack={false}>Choose your kind</Header>
      <StyledForm onSubmit={handleSubmit}>
        <MoodShowcase
          moods={moods}
          setCurrentMood={setCurrentMood}
          currentMood={currentMood}
        />

        <ButtonWrapper>
          <Button>Get your Playlist</Button>
        </ButtonWrapper>
      </StyledForm>
    </Container>
  )

  function adjustSeedObject() {
    const { options } = currentMood
    setSeedObject({ ...baseSeedObject, ...options })
  }
  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
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

export default SelectPage

const Container = styled(Div100vh)`
  display: grid;
  grid-template-rows: auto 1fr;
  padding: 12px 0;
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  padding: 20px 24px 0 24px;
`
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
