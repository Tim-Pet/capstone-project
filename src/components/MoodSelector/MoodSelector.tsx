import styled from 'styled-components/macro'
import { useState } from 'react'
import MoodItem from './MoodItem'
import Button from '../common/Button/Button'
import React from 'react'
import Div100vh from 'react-div-100vh'

interface Props {}

const MoodSelector = (props: Props) => {
  const [currentMood, setCurrentMood] = useState('Testitem 1')

  let activeMood = 'Testitem 1'

  const moods = [
    'Testitem 1',
    'Testitem 2',
    'Testitem 3',
    'Testitem 4',
    'Testitem 5',
    'Testitem 6',
    'Testitem 7',
    'Testitem 8',
    'Testitem 9',
    'Testitem 10',
  ]
  return (
    <TmpContainer>
      <InnerContainer onScroll={handleScroll}>
        {moods.map(mood => (
          <MoodItem key={mood}>{mood}</MoodItem>
        ))}
      </InnerContainer>
      <Button onClick={handleClick}>Done</Button>
    </TmpContainer>
  )
  function handleScroll(event: React.UIEvent<HTMLUListElement>) {
    const moodList = event.target as HTMLUListElement
    const moodItems = [...moodList.children] as Array<HTMLElement>
    const moodItemCenter = moodItems[0].offsetHeight / 2 // Generic center of a single listItem
    const boxCenter = moodList.offsetHeight / 2

    const botLine = boxCenter + 11 // 10px below center
    const topLine = boxCenter - 21 // 20px above center --> 32px(2rem) in total

    moodItems.forEach(moodItem => {
      // Distance to container top
      const position =
        moodItem.getBoundingClientRect().top +
        moodItemCenter -
        moodList.getBoundingClientRect().top

      // true if Element below topline & above botLine
      if (position > topLine && position < botLine) {
        setActiveMood(moodItem)
      } else {
        moodItem.style.color = 'inherit'
        moodItem.style.transform = 'scale(1)'
      }
    })
  }

  function setActiveMood(moodItem: HTMLElement) {
    moodItem.style.color = 'blue'
    moodItem.style.transform = 'scale(1.2)'
    activeMood = moodItem.innerText
  }

  function handleClick() {
    setCurrentMood(activeMood)
    console.log(activeMood)
  }
}

export default MoodSelector
const TmpContainer = styled(Div100vh)`
  width: 100vw;
  display: grid;
  place-items: center;
`
const InnerContainer = styled.ul`
  height: 100px;
  width: 300px;
  border: 1px solid black;
  overflow-y: scroll;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
  list-style: none;
  text-align: center;
  padding: 2rem 0;
  line-height: 2rem;
`
