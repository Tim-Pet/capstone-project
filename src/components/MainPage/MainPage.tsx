import styled from 'styled-components/macro'
import Button from '../common/Button/Button'
import Slider from '../common/Slider/Slider'
import SpotifyWebApi from 'spotify-web-api-js'
import { useEffect, useState } from 'react'
interface Props {
  userData: UserData | null
  spotify: SpotifyWebApi.SpotifyWebApiJs
}

export interface UserData {
  country: string
  display_name: string | undefined
  product: string
}

const MainPage = ({ userData, spotify }: Props) => {
  const [tracks, setTracks] = useState<SpotifyApi.TrackObjectSimplified[]>()
  const [
    seedObject,
    setSeedObject,
  ] = useState<SpotifyApi.RecommendationsOptionsObject>({
    limit: 2,
    seed_genres: 'classical',
  })

  useEffect(() => {
    console.log('Given seed: ', seedObject)
    tracks?.forEach(track => console.log(track.name))
  }, [tracks])

  return (
    <Container>
      <StyledForm onSubmit={handleSubmit}>
        <Slider
          title={'liveness'}
          startValue={0.1}
          min={0}
          max={1}
          step={0.01}
          onChange={handleLivenessChange}
        />
        <Button>Get your Playlist</Button>
      </StyledForm>
    </Container>
  )
  function handleLivenessChange(value: number): void {
    setSeedObject({ ...seedObject, target_liveness: value })
  }

  function handleSubmit(event: React.FormEvent<{}>): void {
    event.preventDefault()
    spotify.getRecommendations(
      seedObject,
      (
        error: SpotifyWebApi.ErrorObject,
        resp: SpotifyApi.RecommendationsFromSeedsResponse
      ) => {
        if (error !== null) {
          console.log(error)
        } else {
          setTracks(resp.tracks)
        }
      }
    )
  }
}

export default MainPage

const Container = styled.div`
  padding: 12px 24px;
  height: 100vh;
`
const StyledForm = styled.form`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
// interface RecommendationsOptionsObject {
//   limit?: number
//   market?: string
//   max_acousticness?: number
//   max_danceability?: number
//   max_duration_ms?: number
//   max_energy?: number
//   max_instrumentalness?: number
//   max_key?: number
//   max_liveness?: number
//   max_loudness?: number
//   max_mode?: number
//   max_popularity?: number
//   max_speechiness?: number
//   max_tempo?: number
//   max_time_signature?: number
//   max_valence?: number
//   min_acousticness?: number
//   min_danceability?: number
//   min_duration_ms?: number
//   min_energy?: number
//   min_instrumentalness?: number
//   min_key?: number
//   min_liveness?: number
//   min_loudness?: number
//   min_mode?: number
//   min_popularity?: number
//   min_speechiness?: number
//   min_tempo?: number
//   min_time_signature?: number
//   min_valence?: number
//   seed_artists?: string[] | string // Array of strings or Comma separated string
//   seed_genres?: string[] | string // Array of strings or Comma separated string
//   seed_tracks?: string[] | string // Array of strings or Comma separated string
//   target_acousticness?: number
//   target_danceability?: number
//   target_duration_ms?: number
//   target_energy?: number
//   target_instrumentalness?: number
//   target_key?: number
//   target_liveness?: number
//   target_loudness?: number
//   target_mode?: number
//   target_popularity?: number
//   target_speechiness?: number
//   target_tempo?: number
//   target_time_signature?: number
//   target_valence?: number
// }

// /**
//  * Create a playlist-style listening experience based on seed artists, tracks and genres.
//  * See [Get Recommendations Based on Seeds](https://developer.spotify.com/web-api/get-recommendations/) on
//  * the Spotify Developer site for more information about the endpoint.
//  *
//  * @param {Object} options A JSON object with options that can be passed
//  * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
//  * one is the error object (null if no error), and the second is the value if the request succeeded.
//  * @return {Object} Null if a callback is provided, a `Promise` object otherwise
//  */
// Constr.prototype.getRecommendations = function (options, callback) {
//   var requestData = {
//     url: _baseUri + '/recommendations',
//   }
//   return _checkParamsAndPerformRequest(requestData, options, callback)
// }

// interface TrackObjectSimplified {
//   artists: ArtistObjectSimplified[];
//   available_markets?: string[];
//   disc_number: number;
//   duration_ms: number;
//   explicit: boolean;
//   external_urls: ExternalUrlObject;
//   href: string;
//   id: string;
//   is_playable?: boolean;
//   linked_from?: TrackLinkObject;
//   name: string;
//   preview_url: string;
//   track_number: number;
//   type: 'track';
//   uri: string;
// }
