import styled from 'styled-components/macro'
import MoodItem from './MoodItem'
import { useState } from 'react'
import Button from '../common/Button/Button'

interface Props {}

const MoodSelector = (props: Props) => {
  let currentMood: string | null = null

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
      <Button onClick={() => console.log(currentMood)}>Done</Button>
    </TmpContainer>
  )
  function handleScroll(event: any) {
    const moodList = event.target
    const moodItems: Array<HTMLElement> = [...moodList.children]
    const moodItemCenter = moodItems[0].offsetHeight / 2 // Generic center of a single listItem
    const boxCenter = moodList.offsetHeight / 2

    const botLine = boxCenter + 10 // 10px below center
    const topLine = boxCenter - 20 // 30px above center
    // moodList.scrollTop gives scroll position -60 to 253 at the moment (due to bounce)
    // moodList.getBoundingClientRect().top --> Distance Browser window to Container
    // moodItem.getBoundingClientRect().top --> Distance to browser window to ListItem
    moodItems.forEach(moodItem => {
      // Distance to containers top
      const position =
        moodItem.getBoundingClientRect().top +
        moodItemCenter -
        moodList.getBoundingClientRect().top

      // if (Element below topline & above botLine)
      if (position > topLine && position < botLine) {
        setActiveMood(moodItem)
      } else {
        moodItem.style.color = 'var(--color-black)'
        moodItem.style.transform = 'scale(1)'
      }
    })
  }

  function setActiveMood(moodItem: any) {
    moodItem.style.color = 'blue'
    moodItem.style.transform = 'scale(1.2)'
    currentMood = moodItem.innerText
  }
}

export default MoodSelector
const TmpContainer = styled.div`
  height: 100vh;
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
