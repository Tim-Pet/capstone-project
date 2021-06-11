import styled from 'styled-components/macro'

interface SongEntryProps {
  name: string
  artists: SpotifyApi.ArtistObjectSimplified[]
}

function SongEntry({ name, artists }: SongEntryProps): JSX.Element {
  const allArtists: string = artists.map(artist => artist.name).join(', ')

  return (
    <Container>
      <SongName>{name}</SongName>
      <ArtistName>{allArtists}</ArtistName>
    </Container>
  )
}

export default SongEntry

const Container = styled.li`
  margin-bottom: 15px;
  overflow: auto;
  position: relative;
  width: 100%;

  &::before {
    background-color: var(--color-text-light);
    bottom: 0;
    content: '';
    height: 1px;
    left: 20%;
    position: absolute;
    width: 60%;
  }
`

const SongName = styled.span`
  display: block;
  font-size: 0.875rem;
  margin-bottom: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const ArtistName = styled.span`
  display: block;
  font-size: 0.75rem;
  max-width: 100%;
  overflow: hidden;
  padding-bottom: 15px;
  text-overflow: ellipsis;
  white-space: nowrap;
`
