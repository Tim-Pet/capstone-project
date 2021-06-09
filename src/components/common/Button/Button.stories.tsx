import { Story, Meta } from '@storybook/react'
import Button from './Button'

export default {
  title: 'Button',
  component: Button,
  argTypes: { onClick: { action: 'clicked' } },
} as Meta

interface ButtonProps {
  children: string
  component?: string | undefined
  href?: string
  as?: React.ElementType
}

const Template: Story<ButtonProps> = args => <Button {...args} />

export const DefaultButton: Story<ButtonProps> = Template.bind({})
DefaultButton.args = {
  children: 'Start',
}
