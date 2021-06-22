import { useState } from 'react'
import MoodSelector from './MoodSelector'

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
      <span>Mood: </span>{' '}
      <button onClick={() => setShowMoodSelector(true)}>
        {currentMood.name}
      </button>
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
}

export default MoodShowcase
