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
  const [activeSwitch, setActiveSwitch] = useState('left')
  const history = useHistory()

  return (
    <Container>
      <Header
        withBack={true}
        withSwitch={true}
        leftText={'Songs'}
        rightText={'Playlists'}
        activeSwitch={activeSwitch}
        onClickLeft={handleClickLeft}
        onClickRight={handleClickRight}
      >
        {activeSwitch === 'left' ? 'Your Songs' : 'Your Playlists'}
      </Header>
      {activeSwitch === 'left' ? (
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

  function handleClickLeft() {
    setActiveSwitch('left')
  }
  function handleClickRight() {
    setActiveSwitch('right')
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
