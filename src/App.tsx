import { useEffect, useState, useMemo } from 'react'
import SpotifyWebApi from 'spotify-web-api-js'
import Login from './components/Login'
import MainPage, { UserData } from './components/pages/MainPage/MainPage'
import { getTokenFromUrl } from './helper/spotify'

function App(): JSX.Element {
  const [userData, setUserData] = useState<UserData | null>(null)
  const [tracks, setTracks] = useState<SpotifyApi.TrackObjectSimplified[]>()

  useEffect(() => {
    tracks?.forEach(track => console.log(track.name))
  }, [tracks])

  const token = useMemo(getTokenFromUrl, [])

  const spotify: SpotifyWebApi.SpotifyWebApiJs = new SpotifyWebApi()

  useEffect((): void => {
    if (token) {
      removeHash()
      spotify.setAccessToken(token)
      fetchUserData()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token])

  return (
    <div>
      {token ? (
        <MainPage userData={userData} spotify={spotify} setTracks={setTracks} />
      ) : (
        <Login />
      )}
    </div>
  )

  function removeHash(): void {
    window.history.pushState(
      '',
      document.title,
      window.location.pathname + window.location.search
    )
  }

  function fetchUserData(): void {
    spotify.getMe().then(user => {
      const data: UserData = {
        country: user.country,
        display_name: user.display_name,
        product: user.product,
      }
      setUserData(data)
    })
  }
}

export default App
