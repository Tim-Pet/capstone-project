import { useEffect, useState } from 'react'
import SpotifyWebApi from 'spotify-web-api-js'
import Login from './components/Login'
import MainPage, { UserData } from './components/MainPage/MainPage'
import { getTokenFromUrl } from './helper/spotify'

function App() {
  const fallbackUserData: UserData = {
    country: 'DE',
    display_name: 'John Doe',
    product: 'premium',
  }

  const [token, setToken] = useState<string | null>(null)
  const [userData, setUserData] = useState<UserData>(fallbackUserData)

  const spotify = new SpotifyWebApi()

  useEffect(() => {
    setToken(getTokenFromUrl())
  }, [])

  useEffect(() => {
    if (token) {
      window.location.hash = ''
      spotify.setAccessToken(token)
      fetchUserData()
    }
  }, [token])

  return <div>{token ? <MainPage userData={userData} /> : <Login></Login>}</div>

  function fetchUserData() {
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
