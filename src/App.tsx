import { useEffect, useMemo, useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import SpotifyWebApi from 'spotify-web-api-js'
import Login from './components/Login'
import MoodSelector from './components/MoodSelector/MoodSelector'
import { getTokenFromUrl } from './helper/spotify'
import CreatePlaylistPage from './pages/CreatePlaylistPage'
import RecommendationPage from './pages/RecommendationPage'
import SelectPage from './pages/SelectPage'

function App(): JSX.Element {
  const [tracks, setTracks] = useState<SpotifyApi.TrackObjectSimplified[]>()
  const [userId, setUserId] = useState<string>('')

  const token: string | undefined = useMemo(getTokenFromUrl, [])

  const spotify: SpotifyWebApi.SpotifyWebApiJs = new SpotifyWebApi()

  useEffect((): void => {
    if (token) {
      removeHash()
      spotify.setAccessToken(token)
      fetchUserId()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token])

  return (
    <div>
      {/* {token ? (
        <Switch>
          <Route exact path="/">
            <SelectPage spotify={spotify} setTracks={setTracks} />
          </Route>
          <Route path="/recommendations">
            <RecommendationPage tracks={tracks} />
          </Route>
          <Route path="/create">
            <CreatePlaylistPage
              spotify={spotify}
              userId={userId}
              tracks={tracks}
            />
          </Route>
        </Switch>
      ) : (
        <Login />
      )} */}
      <MoodSelector />
    </div>
  )

  function removeHash(): void {
    window.history.pushState(
      '',
      document.title,
      window.location.pathname + window.location.search
    )
  }

  function fetchUserId(): void {
    spotify.getMe().then(({ id }) => {
      const data: string = id
      setUserId(data)
    })
  }
}

export default App
