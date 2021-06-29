import { useEffect, useState } from 'react'

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
    <div>
      {playlists?.map(playlist => (
        <p>{playlist.title}</p>
      ))}
    </div>
  )
}

export default History
