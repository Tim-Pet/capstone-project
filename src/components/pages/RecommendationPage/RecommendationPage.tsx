import Header from '../../Header'
import styled from 'styled-components/macro'
import SongEntry from '../../SongEntry'

interface Props {
  tracks: SpotifyApi.TrackObjectSimplified[] | undefined
}

const RecommendationPage = ({ tracks }: Props) => {
  return (
    <Container>
      <Header>Your Songs</Header>
      <SongList>
        {tracks?.map(track => (
          <SongEntry name={track.name} artists={track.artists} />
        ))}
      </SongList>
    </Container>
  )
}

export default RecommendationPage
const Container = styled.div`
  padding: 12px 24px;
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;
`
const SongList = styled.ul`
  overflow-y: Auto;
  list-style: none;
  padding: 0;
  margin: 0;
`
