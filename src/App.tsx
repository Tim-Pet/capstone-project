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

  const moods = [
    {
      name: 'Testitem 1',
      id: 1,
    },
    {
      name: 'Testitem 2',
      id: 2,
    },
    {
      name: 'Testitem 3',
      id: 3,
    },
    {
      name: 'Testitem 4',
      id: 4,
    },
    {
      name: 'Testitem 5',
      id: 5,
    },
    {
      name: 'Testitem 6',
      id: 6,
    },
    {
      name: 'Testitem 7',
      id: 7,
    },
    {
      name: 'Testitem 8',
      id: 8,
    },
    {
      name: 'Testitem 9',
      id: 9,
    },
    {
      name: 'Testitem 10',
      id: 10,
    },
  ]

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
      <MoodSelector moods={moods} preselectedMoodId={1} />
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
