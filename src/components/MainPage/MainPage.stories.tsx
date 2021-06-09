import { Story, Meta } from '@storybook/react'
import MainPage from './MainPage'
import SpotifyWebApi from 'spotify-web-api-js'

export default {
  title: 'MainPage',
  component: MainPage,
} as Meta
interface MainPageProps {
  userData: UserData
  spotify: SpotifyWebApi.SpotifyWebApiJs
}

interface UserData {
  country: string
  display_name: string | undefined
  product: string
}

const Template: Story<MainPageProps> = args => <MainPage {...args} />

export const DefaultMainPage = Template.bind({})
DefaultMainPage.args = {
  userData: {
    country: 'DE',
    display_name: 'John Doe',
    product: 'premium',
  },
  spotify: new SpotifyWebApi(),
}
