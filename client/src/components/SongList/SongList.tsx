import styled from 'styled-components/macro'
import SongEntry from '../SongEntry/SongEntry'

interface Props {
  tracks: SpotifyApi.TrackObjectSimplified[] | undefined
}

const SongList = ({ tracks }: Props) => {
  return (
    <Container>
      {tracks?.map(({ id, name, artists }) => (
        <SongEntry key={id} name={name} artists={artists} />
      ))}
    </Container>
  )
}

export default SongList

const Container = styled.div`
  margin: 0;
  overflow-y: auto;
  padding: 10px 24px 0 24px;
`
