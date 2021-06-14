import { fireEvent, render, screen } from '@testing-library/react'
import Slider from './Slider'

jest.mock('@material-ui/core/Slider', () => (props: any) => {
  const { startValue, min, max, step, onChange } = props
  return (
    <input
      type="range"
      defaultValue={startValue}
      min={min}
      max={max}
      step={step}
      onChange={event => onChange(event.target.value)}
    />
  )
})

describe('Slider', (): void => {
  it('Gets rendered', (): void => {
    render(
      <Slider
        title={'testSlider'}
        startValue={0}
        min={0}
        max={1}
        step={0.01}
        onChange={jest.fn()}
      />
    )
    const slider: HTMLElement = screen.getByRole('slider')
    expect(slider).toBeInTheDocument()
  })
  it('Calls onChange', (): void => {
    const handleChange: Function = jest.fn()
    render(
      <Slider
        title={'testSlider'}
        startValue={0.3}
        min={0}
        max={1}
        step={0.01}
        onChange={handleChange}
      />
    )
    const slider: HTMLElement = screen.getByRole('slider')
    fireEvent.change(slider, 0.1)
    expect(handleChange).toBeCalledTimes(1)
  })
})
