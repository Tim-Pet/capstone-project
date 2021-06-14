import Header from '../components/Header/Header'
import styled from 'styled-components/macro'
import SongEntry from '../components/SongEntry/SongEntry'

interface Props {
  tracks: SpotifyApi.TrackObjectSimplified[] | undefined
}

function RecommendationPage({ tracks }: Props): JSX.Element {
  return (
    <Container>
      <Header withBack={true}>Your Songs</Header>
      <SongList>
        {tracks?.map(({ id, name, artists }) => (
          <SongEntry key={id} name={name} artists={artists} />
        ))}
      </SongList>
    </Container>
  )
}

export default RecommendationPage
const Container = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  height: 100vh;
  padding: 12px 0;
`
const SongList = styled.div`
  margin: 0;
  overflow-y: auto;
  padding: 10px 24px 0 24px;
`
