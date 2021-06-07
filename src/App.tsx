import { useState, useEffect } from 'react'
import Login from './components/Login'
import { getTokenFromUrl } from './helper/spotify'
import SpotifyWebApi from 'spotify-web-api-js'
import Select from './components/Select'
import { UserData } from './components/Select'

function App() {
  const spotify = new SpotifyWebApi()

  const fallbackUserData: UserData = {
    country: 'DE',
    display_name: 'John Doe',
    product: 'premium',
  }

  const [token, setToken] = useState<string | null>(null)
  const [userData, setUserData] = useState<UserData>(fallbackUserData)

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

  return <div>{token ? <Select userData={userData} /> : <Login></Login>}</div>

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
