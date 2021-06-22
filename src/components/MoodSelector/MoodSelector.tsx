import { useLayoutEffect, useRef, useState } from 'react'
import Div100vh from 'react-div-100vh'
import styled from 'styled-components/macro'
import Button from '../common/Button/Button'
import MoodItem from './MoodItem'

interface Props {
  moods: { name: string; id: number }[]
  preselectedMoodId: number
}

interface Variables {
  moodList: HTMLUListElement
  moodItems: Array<HTMLElement>
  moodItemCenter: number
  boxCenter: number
  bottomLine: number
  topLine: number
}

const MoodSelector = ({ moods, preselectedMoodId }: Props) => {
  const [currentMood, setCurrentMood] = useState(0) // will get taken out to higher order component

  const moodListRef = useRef<HTMLUListElement>(null)
  const variables = useRef<Variables | null>(null)

  useLayoutEffect(() => {
    if (moodListRef.current !== null) {
      const moodItems = [...moodListRef.current.children] as Array<HTMLElement>
      const moodItemCenter = moodItems[0].offsetHeight / 2
      const boxCenter = moodListRef.current.offsetHeight / 2
      const bottomLine = boxCenter + 11 // 11px below center
      const topLine = boxCenter - 21 // 21px above center --> 32px(2rem) in total

      variables.current = {
        moodList: moodListRef.current,
        moodItems,
        moodItemCenter,
        boxCenter,
        bottomLine,
        topLine,
      }
      setInitialMood(preselectedMoodId)
    }
  }, [])

  let activeMood: number

  return (
    <TmpContainer>
      <InnerContainer onScroll={handleScroll} ref={moodListRef}>
        {moods.map(({ name, id }) => (
          <MoodItem key={id} data-id={id}>
            {name}
          </MoodItem>
        ))}
      </InnerContainer>
      <Button onClick={handleClick}>Done</Button>
    </TmpContainer>
  )

  function setInitialMood(initialMoodId: number) {
    const initialMoodElement = variables.current!.moodItems.find(
      moodItem => Number(moodItem.getAttribute('data-id')) === initialMoodId
    )
    if (initialMoodElement) {
      setActiveMood(initialMoodElement)
    }
  }

  function handleScroll() {
    const {
      moodItems,
      moodItemCenter,
      moodList,
      topLine,
      bottomLine,
    } = variables.current!

    moodItems.forEach(moodItem => {
      // Distance to container top
      const position =
        moodItem.getBoundingClientRect().top +
        moodItemCenter -
        moodList.getBoundingClientRect().top

      // true if Element below topline & above botLine
      if (position > topLine && position < bottomLine) {
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
    activeMood = Number(moodItem.getAttribute('data-id'))
  }

  function handleClick() {
    setCurrentMood(activeMood) // will call setState action from higher Order component
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
