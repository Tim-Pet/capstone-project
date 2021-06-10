import styled from 'styled-components/macro'

interface Props {
  name: string
  artists: SpotifyApi.ArtistObjectSimplified[]
}

const SongEntry = ({ name, artists }: Props): JSX.Element => {
  let allArtists: string = artists.map(artist => artist.name).join(', ')

  return (
    <Container>
      <SongName>{name}</SongName>
      <ArtistName>{allArtists}</ArtistName>
    </Container>
  )
}

export default SongEntry

const Container = styled.li`
  position: relative;
  width: 100%;
  margin-bottom: 15px;
  overflow: auto;

  &::before {
    content: '';
    height: 1px;
    width: 60%;
    position: absolute;
    bottom: 0;
    left: 20%;
    background-color: var(--color-text-light);
  }
`

const SongName = styled.span`
  display: block;
  font-size: 0.875rem;
  margin-bottom: 5px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`

const ArtistName = styled.span`
  text-overflow: ellipsis;
  display: block;
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  font-size: 0.75rem;
  padding-bottom: 15px;
`
