import Select from './Select'
import { Story } from '@storybook/react'

export default {
  title: 'Select',
  component: Select,
}
interface SelectProps {
  userData: UserData
}

interface UserData {
  country: string
  display_name: string | undefined
  product: string
}

const Template: Story<SelectProps> = args => <Select {...args} />

export const DefaultSelect = Template.bind({})
DefaultSelect.args = {
  userData: {
    country: 'DE',
    display_name: 'John Doe',
    product: 'premium',
  },
}
