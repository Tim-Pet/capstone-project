import { render, screen } from '@testing-library/react'
import SongEntry from './SongEntry'

const artistsArray: SpotifyApi.ArtistObjectSimplified[] = [
  {
    external_urls: { spotify: 'test.external.de' },
    href: 'test.href.de',
    id: '1',
    name: 'John Doe',
    type: 'artist',
    uri: 'test.uri.de',
  },
  {
    external_urls: { spotify: 'testTwo.external.de' },
    href: 'testTwo.href.de',
    id: '2',
    name: 'Jane Doe',
    type: 'artist',
    uri: 'testTwo.uri.de',
  },
]

describe('SongEntry', (): void => {
  it('Renders with name', (): void => {
    render(<SongEntry name={'Castle of glass'} artists={artistsArray} />)
    const song: HTMLElement = screen.getByText('Castle of glass')
    expect(song).toBeInTheDocument()
  })

  it('Renders with artists in schema <*, *>', (): void => {
    render(<SongEntry name={'Castle of glass'} artists={artistsArray} />)
    const songArtists: HTMLElement = screen.getByText('John Doe, Jane Doe')
    expect(songArtists).toBeInTheDocument()
  })
})
