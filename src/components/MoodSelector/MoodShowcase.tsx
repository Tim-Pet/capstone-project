import { useState } from 'react'
import MoodSelector from './MoodSelector'
import styled from 'styled-components/macro'
import Button from '../common/Button/Button'

// interface Props {}

function MoodShowcase(): JSX.Element {
  const [showMoodSelector, setShowMoodSelector] = useState(false)
  const moods = [
    {
      name: 'Testitem 1',
      id: 1,
    },
    {
      name: 'Testitem 2',
      id: 2,
    },
    {
      name: 'Testitem 3',
      id: 3,
    },
    {
      name: 'Testitem 4',
      id: 4,
    },
    {
      name: 'Testitem 5',
      id: 5,
    },
    {
      name: 'Testitem 6',
      id: 6,
    },
    {
      name: 'Testitem 7',
      id: 7,
    },
    {
      name: 'Testitem 8',
      id: 8,
    },
    {
      name: 'Testitem 9',
      id: 9,
    },
    {
      name: 'Testitem 10',
      id: 10,
    },
  ]
  const [currentMood, setCurrentMood] = useState(moods[0])

  return (
    <div>
      <MoodLabel>Mood: </MoodLabel>
      <StyledButton onClick={handleClick}>{currentMood.name}</StyledButton>
      {showMoodSelector && (
        <MoodSelector
          moods={moods}
          preselectedMoodId={1}
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
