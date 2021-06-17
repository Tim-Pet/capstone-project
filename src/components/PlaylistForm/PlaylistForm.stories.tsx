import { Meta, Story } from '@storybook/react'
import PlaylistForm from './PlaylistForm'

export default {
  title: 'PlaylistForm',
  component: PlaylistForm,
  argTypes: { onSubmit: { action: 'submitted' } },
} as Meta

interface PlaylistFormProps {
  titleLabel: string
  textLabel: string
  buttonText: string
  serverError: Boolean
  onSubmit: Function
}

const Template: Story<PlaylistFormProps> = args => <PlaylistForm {...args} />

export const DefaultPlaylistForm: Story<PlaylistFormProps> = Template.bind({})
DefaultPlaylistForm.args = {
  titleLabel: 'Title',
  textLabel: 'Description',
  buttonText: 'Create playlist',
  serverError: false,
}

export const ErrorPlaylistForm: Story<PlaylistFormProps> = Template.bind({})
ErrorPlaylistForm.args = {
  titleLabel: 'Title',
  textLabel: 'Description',
  buttonText: 'Create playlist',
  serverError: true,
}
