import { Meta, Story } from '@storybook/react'
import SongEntry from './SongEntry'

export default {
  title: 'SongEntry',
  component: SongEntry,
} as Meta

interface SongEntryProps {
  name: string
  artists: SpotifyApi.ArtistObjectSimplified[]
}

const Template: Story<SongEntryProps> = args => <SongEntry {...args} />

export const DefaultSongEntry: Story<SongEntryProps> = Template.bind({})
DefaultSongEntry.args = {
  name: 'Castle of glass',
  artists: [
    {
      external_urls: { spotify: 'test.external.de' },
      href: 'test.href.de',
      id: '1',
      name: 'John Doe',
      type: 'artist',
      uri: 'test.uri.de',
    },
  ],
}
