import { Meta, Story } from '@storybook/react'
import Slider from './Slider'

export default {
  title: 'Slider',
  component: Slider,
  argTypes: { onChange: { action: 'changed' } },
} as Meta

interface SliderProps {
  title: string
  startValue: number
  min: number
  max: number
  step: number
  onChange: Function
}

const Template: Story<SliderProps> = args => <Slider {...args} />

export const DefaultSlider: Story<SliderProps> = Template.bind({})
DefaultSlider.args = {
  title: 'Liveness',
  startValue: 0.2,
  min: 0,
  max: 1,
  step: 0.01,
}
