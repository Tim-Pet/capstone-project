import Div100vh from 'react-div-100vh'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components/macro'
import Button from '../components/common/Button/Button'
import Header from '../components/Header/Header'
import SongEntry from '../components/SongEntry/SongEntry'
interface Props {
  tracks: SpotifyApi.TrackObjectSimplified[] | undefined
}

function RecommendationPage({ tracks }: Props): JSX.Element {
  const history = useHistory()
  return (
    <Container>
      <Header withBack={true}>Your Songs</Header>
      <SongList>
        {tracks?.map(({ id, name, artists }) => (
          <SongEntry key={id} name={name} artists={artists} />
        ))}
      </SongList>
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
const SongList = styled.div`
  margin: 0;
  overflow-y: auto;
  padding: 10px 24px 0 24px;
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 10px 0 10px;
`
