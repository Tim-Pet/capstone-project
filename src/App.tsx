import { useEffect, useState, useMemo } from 'react'
import SpotifyWebApi from 'spotify-web-api-js'
import Login from './components/Login'
import MainPage, { UserData } from './components/MainPage/MainPage'
import { getTokenFromUrl } from './helper/spotify'

function App(): JSX.Element {
  const [userData, setUserData] = useState<UserData | null>(null)

  const token = useMemo(getTokenFromUrl, [])

  const spotify: SpotifyWebApi.SpotifyWebApiJs = new SpotifyWebApi()

  useEffect((): void => {
    if (token) {
      removeHash()
      spotify.setAccessToken(token)
      fetchUserData()
    }
  }, [token])

  return (
    <div>
      {token ? <MainPage userData={userData} spotify={spotify} /> : <Login />}
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
