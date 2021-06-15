import { Meta, Story } from '@storybook/react'
import CreatePlaylistForm from './CreatePlaylistForm'

export default {
  title: 'CreatePlaylistForm',
  component: CreatePlaylistForm,
  argTypes: { onClick: { action: 'clicked' } },
} as Meta

interface CreatePlaylistFormProps {
  titleLabel: string
  textLabel: string
  buttonText: string
  onSubmit: Function
}

const Template: Story<CreatePlaylistFormProps> = args => (
  <CreatePlaylistForm {...args} />
)

export const DefaultCreatePlaylistForm: Story<CreatePlaylistFormProps> = Template.bind(
  {}
)
DefaultCreatePlaylistForm.args = {
  titleLabel: 'Title',
  textLabel: 'Description',
  buttonText: 'Create playlist',
}
