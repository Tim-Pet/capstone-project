import { useState } from 'react'
import Div100vh from 'react-div-100vh'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components/macro'
import Button from '../components/common/Button/Button'
import Header from '../components/Header/Header'
import SongList from '../components/SongList/SongList'
import History from '../components/History/History'
interface RecommendationPageProps {
  tracks: SpotifyApi.TrackObjectSimplified[] | undefined
  user: any
}
function RecommendationPage({
  tracks,
  user,
}: RecommendationPageProps): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [showsRecommendations, setshowsRecommendations] = useState(false)
  const history = useHistory()

  return (
    <Container>
      <Header withBack={true}>Your Songs</Header>
      {showsRecommendations ? (
        <SongList tracks={tracks} />
      ) : (
        <History user={user} />
      )}
      <ButtonWrapper>
        <Button onClick={handleClick}>Create Playlist</Button>
      </ButtonWrapper>
    </Container>
  )
  function handleClick(): void {
    history.push('create')
  }
}

export default RecommendationPage
const Container = styled(Div100vh)`
  display: grid;
  grid-template-rows: auto 1fr auto;
  padding: 12px 0;
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 10px 0 10px;
`
