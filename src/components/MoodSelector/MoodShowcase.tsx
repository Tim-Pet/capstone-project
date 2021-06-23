import { useState } from 'react'
import MoodSelector from './MoodSelector'
import styled from 'styled-components/macro'
import Button from '../common/Button/Button'
import { Mood } from '../../interfaces/SpotifyExtensions'

interface Props {
  moods: Mood[]
  setCurrentMood: React.Dispatch<React.SetStateAction<Mood>>
  currentMood: { name: string; id: number }
}

function MoodShowcase({
  moods,
  setCurrentMood,
  currentMood,
}: Props): JSX.Element {
  const [showMoodSelector, setShowMoodSelector] = useState(false)

  return (
    <div>
      <MoodLabel>Mood: </MoodLabel>
      <StyledButton onClick={handleClick}>{currentMood.name}</StyledButton>
      {showMoodSelector && (
        <MoodSelector
          moods={moods}
          preselectedMoodId={0}
          setShowMoodSelector={setShowMoodSelector}
          setCurrentMood={setCurrentMood}
        />
      )}
    </div>
  )
  function handleClick(event: any) {
    event.preventDefault()
    setShowMoodSelector(true)
  }
}

export default MoodShowcase

const MoodLabel = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
  letter-spacing: 0.125rem;
  line-height: 2rem;
  margin: 0 0 10px 0;
`
const StyledButton = styled(Button)`
  background: transparent;
  color: var(--color-text);
  box-shadow: inset 1px 1px 8px #00000040;
  width: 300px;
  padding: 10px 0;
  font-size: 1.25rem;
`
