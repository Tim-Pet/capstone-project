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
const Container = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100vh;
  padding: 12px 0;
`
const SongList = styled.div`
  margin: 0;
  overflow-y: auto;
  padding: 10px 24px 0 24px;
`

const ButtonWrapper = styled.div`
  display: grid;
  place-items: center;
  padding: 5px 10px 0 10px;
`
