import styled from 'styled-components/macro'
import Slider from '@material-ui/core/Slider'

interface Props {
  title: string
  min: number
  max: number
  startValue: number
  onChange: Function
}

const SliderComponent = ({ title, min, max, startValue, onChange }: Props) => {
  return (
    <div>
      <h3>{title}</h3>
      <StyledSlider
        defaultValue={startValue}
        min={min}
        max={max}
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
