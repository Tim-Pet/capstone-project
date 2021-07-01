import Slider from '@material-ui/core/Slider'
import styled from 'styled-components/macro'

interface SliderProps {
  title: string
  startValue: number
  min: number
  max: number
  step: number
  onChange: (value: number) => void
}

const SliderComponent = ({
  title,
  startValue,
  min,
  max,
  step,
  onChange,
}: SliderProps): JSX.Element => {
  return (
    <label>
      <CriteriaName>{title}</CriteriaName>
      <StyledSlider
        defaultValue={startValue}
        min={min}
        max={max}
        step={step}
        onChange={(
          // eslint-disable-next-line @typescript-eslint/ban-types
          event: React.ChangeEvent<{}>, //Linter disabled due to materialUi accepted types (<{}> needed for materialUi)
          value: number | number[]
        ): void => onChange(value as number)}
      />
    </label>
  )
}

export default SliderComponent

const CriteriaName = styled.span`
  font-size: 1.5rem;
  font-weight: 400;
  letter-spacing: 0.125rem;
  line-height: 2rem;
  margin: 0;
`

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

// To Add slider values to the seed element use this function:
// function handleLivenessChange(value: number): void {
//  setSeedObject({ ...seedObject, target_liveness: value })
// }
