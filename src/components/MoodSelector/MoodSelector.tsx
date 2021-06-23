import { useLayoutEffect, useRef, useState } from 'react'
import Div100vh from 'react-div-100vh'
import styled from 'styled-components/macro'
import Button from '../common/Button/Button'
import MoodItem from './MoodItem'
import CloseIcon from '@material-ui/icons/Close'
import { Mood } from '../../interfaces/SpotifyExtensions'

interface Props {
  moods: Mood[]
  preselectedMoodId: number
  setShowMoodSelector: React.Dispatch<React.SetStateAction<boolean>>
  setCurrentMood: React.Dispatch<React.SetStateAction<Mood>>
}

interface Variables {
  moodList: HTMLUListElement
  moodItems: Array<HTMLElement>
  moodItemCenter: number
  boxCenter: number
  bottomLine: number
  topLine: number
}

function MoodSelector({
  moods,
  preselectedMoodId,
  setShowMoodSelector,
  setCurrentMood,
}: Props): JSX.Element {
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

  let activeMood: Mood | undefined

  return (
    <Wrapper>
      <PopUpContainer>
        <Head>
          <Title>Your Mood</Title>
          <IconWrapper onClick={handleClose}>
            <CloseIcon fontSize="inherit" color="inherit" />
          </IconWrapper>
        </Head>
        <ListContainer onScroll={handleScroll} ref={moodListRef}>
          {moods.map(({ name, id }) => (
            <MoodItem key={id} data-id={id}>
              {name}
            </MoodItem>
          ))}
        </ListContainer>
        <Button onClick={handleClick}>Done</Button>
      </PopUpContainer>
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
    activeMood = moods.find(
      mood => Number(moodItem.getAttribute('data-id')) === mood.id
    )
  }

  function handleClick() {
    if (activeMood) setCurrentMood(activeMood)
    setShowMoodSelector(false)
  }

  function handleClose() {
    setShowMoodSelector(false)
  }
}

export default MoodSelector
const Wrapper = styled(Div100vh)`
  position: fixed;
  top: 0;
  left: 0;
  display: grid;
  place-items: center;
  width: 100vw;
  padding: 0 15px;
  backdrop-filter: blur(1px);
  background-color: #00000030;
  z-index: 100;
`

const PopUpContainer = styled.div`
  height: 325px;
  width: 100%;
  padding: 10px 5px;
  display: flex;
  background: var(--color-background);
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 36px;
  box-shadow: -2px 2px 16px var(--color-text-light);
`
const Head = styled.div`
  width: 100%;
  position: relative;
  text-align: center;
`

const Title = styled.h3`
  margin: 10px 0;
`

const IconWrapper = styled.div`
  position: absolute;
  right: 20px;
  top: 5px;
  font-size: 40px;
`

const ListContainer = styled.ul`
  height: 150px;
  width: 300px;
  border: 1px solid var(--color-text-light);
  border-radius: 24px;
  overflow-y: scroll;
  overflow-x: hidden;
  margin-top: 0;

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
