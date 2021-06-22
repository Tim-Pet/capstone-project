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

function MoodSelector({ moods, preselectedMoodId }: Props): JSX.Element {
  const [currentMood, setCurrentMood] = useState(0) // will get taken out to higher order component

  const moodListRef = useRef<HTMLUListElement>(null)
  const variables = useRef<Variables | null>(null)

  useLayoutEffect(() => {
    if (moodListRef.current !== null) {
      const moodItems = [...moodListRef.current.children] as Array<HTMLElement>
      const moodItemCenter = moodItems[0].offsetHeight / 2
      const boxCenter = moodListRef.current.offsetHeight / 2
      const bottomLine = boxCenter + 15 // 11px below center
      const topLine = boxCenter - 25 // 21px above center --> 40px(2.5rem) in total

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
    <Wrapper>
      <OuterContainer>
        <InnerContainer onScroll={handleScroll} ref={moodListRef}>
          {moods.map(({ name, id }) => (
            <MoodItem key={id} data-id={id}>
              {name}
            </MoodItem>
          ))}
        </InnerContainer>
        <Button onClick={handleClick}>Done</Button>
      </OuterContainer>
    </Wrapper>
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
const Wrapper = styled(Div100vh)`
  position: fixed;
  display: grid;
  place-items: center;
  width: 100vw;
  padding: 0 15px;
  background-color: transparent;
`
const OuterContainer = styled.div`
  height: 350px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 36px;
  box-shadow: -2px 2px 16px var(--color-text-light);
`
const InnerContainer = styled.ul`
  height: 150px;
  width: 300px;
  border: 1px solid var(--color-text-light);
  border-radius: 24px;
  overflow-y: scroll;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  list-style: none;
  text-align: center;
  padding: 2.5rem 0;
  line-height: 2.5rem;
  ::-webkit-scrollbar {
    display: none;
  }
`
