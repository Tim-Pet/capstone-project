import Slider from '@material-ui/core/Slider'
import styled from 'styled-components/macro'

interface SliderProps {
  title: string
  startValue: number
  min: number
  max: number
  step: number
  onChange: Function
}

const SliderComponent = ({
  title,
  startValue,
  min,
  max,
  step,
  onChange,
}: SliderProps) => {
  return (
    <div>
      <h3>{title}</h3>
      <StyledSlider
        defaultValue={startValue}
        min={min}
        max={max}
        step={step}
        onChange={(event: React.ChangeEvent<{}>, value: number | number[]) =>
          onChange(value as number)
        }
        aria-labelledby="range-slider"
      />
    </div>
  )
}

export default SliderComponent

const StyledSlider = styled(Slider)`
  .MuiSlider-track {
    color: var(--color-text);
  }
  .MuiSlider-rail {
    color: var(--color-accent);
  }
  .MuiSlider-thumb {
    color: var(--color-text);
  }
`
