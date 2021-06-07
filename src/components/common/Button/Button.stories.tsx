import Button from './Button'
import { Story } from '@storybook/react'

export default {
  title: 'Button',
  component: Button,
}

interface ButtonProps {
  children: string
  component?: string | undefined
  href?: string
  as?: React.ElementType
}

const Template: Story<ButtonProps> = args => <Button {...args} />

export const DefaultButton = Template.bind({})
DefaultButton.args = {
  children: 'Start',
}
