import { useEffect, useState, useMemo } from 'react'
import SpotifyWebApi from 'spotify-web-api-js'
import Login from './components/Login'
import MainPage from './pages/MainPage/MainPage'
import { getTokenFromUrl } from './helper/spotify'
import { Route, Switch } from 'react-router-dom'
import RecommendationPage from './pages/RecommendationPage/RecommendationPage'

function App(): JSX.Element {
  const [tracks, setTracks] = useState<SpotifyApi.TrackObjectSimplified[]>()

  const token: string | undefined = useMemo(getTokenFromUrl, [])

  const spotify: SpotifyWebApi.SpotifyWebApiJs = new SpotifyWebApi()

  useEffect((): void => {
    if (token) {
      removeHash()
      spotify.setAccessToken(token)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token])

  return (
    <div>
      {token ? (
        <Switch>
          <Route exact path="/">
            <MainPage spotify={spotify} setTracks={setTracks} />
          </Route>
          <Route path="/recommendations">
            <RecommendationPage tracks={tracks} />
          </Route>
        </Switch>
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
}

export default App
