import { useEffect, useState } from 'react'
import styled from 'styled-components/macro'

interface HistoryProps {
  user: any
}

const History = ({ user }: HistoryProps) => {
  const [playlists, setPlaylists] = useState<any[] | null>(null)
  useEffect(() => {
    setPlaylists(user.playlists)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Container>
      {playlists?.map(playlist => (
        <Wrapper>
          <PlaylistName key={playlist._id}>{playlist.title}</PlaylistName>
        </Wrapper>
      ))}
    </Container>
  )
}

export default History

const Container = styled.section`
  margin: 0;
  overflow-y: auto;
  padding: 10px 24px 0 24px;
`
const Wrapper = styled.div`
  padding: 15px 0;
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

const PlaylistName = styled.span`
  display: block;
  font-size: 1.25rem;
  margin-bottom: 5px;
  overflow: hidden;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
`
