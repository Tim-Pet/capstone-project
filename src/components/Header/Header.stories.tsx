import { Meta, Story } from '@storybook/react'
import Header from './Header'

export default {
  title: 'Header',
  component: Header,
} as Meta

interface HeaderProps {
  withBack: boolean
  children: string
}

const Template: Story<HeaderProps> = args => <Header {...args} />

export const DefaultHeader: Story<HeaderProps> = Template.bind({})
DefaultHeader.args = {
  children: 'Your Title',
}

export const HeaderWithBack: Story<HeaderProps> = Template.bind({})
HeaderWithBack.args = {
  children: 'Your Title',
  withBack: true,
}
