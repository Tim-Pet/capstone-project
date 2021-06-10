import Header from '../../Header'
import styled from 'styled-components/macro'
import SongEntry from '../../SongEntry'

interface Props {
  tracks: SpotifyApi.TrackObjectSimplified[] | undefined
}

const RecommendationPage = ({ tracks }: Props) => {
  return (
    <Container>
      <Header withBack={true}>Your Songs</Header>
      <SongList>
        {tracks?.map(track => (
          <SongEntry
            key={track.name}
            name={track.name}
            artists={track.artists}
          />
        ))}
      </SongList>
    </Container>
  )
}

export default RecommendationPage
const Container = styled.div`
  padding: 12px 0;
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;
`
const SongList = styled.ul`
  padding: 10px 24px 0 24px;
  overflow-y: Auto;
  list-style: none;
  margin: 0;
`
