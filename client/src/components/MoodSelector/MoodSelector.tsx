import CloseIcon from '@material-ui/icons/Close'
import { useLayoutEffect, useRef } from 'react'
import Div100vh from 'react-div-100vh'
import styled from 'styled-components/macro'
import { Mood } from '../../interfaces/SpotifyExtensions'
import Button from '../common/Button/Button'
import MoodItem from './MoodItem'

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
      const bottomLine = boxCenter + 20 // 15px below center
      const topLine = boxCenter - 20 // 25px above center --> 40px(2.5rem) in total to set an 'active area' for an entry

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        const moodItemContent = moodItem.children[0] as HTMLElement //Selects the content of the li and scales it to prevent layout shifts
        moodItemContent.style.color = 'inherit'
        moodItemContent.style.transform = 'scale(1)'
      }
    })
  }

  function setActiveMood(moodItem: HTMLElement) {
    const moodItemContent = moodItem.children[0] as HTMLElement //Selects the content of the li and scales it to prevent layout shifts
    moodItemContent.style.color = 'var(--color-accent)'
    moodItemContent.style.transform = 'scale(1.2)'
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
  backdrop-filter: blur(1px);
  background-color: #00000030;
  display: grid;
  left: 0;
  padding: 0 15px;
  place-items: center;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 100;
`

const PopUpContainer = styled.div`
  align-items: center;
  background: var(--color-background);
  border-radius: 28px;
  box-shadow: -2px 2px 16px var(--color-text-light);
  display: flex;
  flex-direction: column;
  height: 325px;
  justify-content: space-around;
  padding: 10px 5px;
  width: 100%;
`
const Head = styled.div`
  position: relative;
  text-align: center;
  width: 100%;
`

const Title = styled.h3`
  margin: 10px 0;
`

const IconWrapper = styled.div`
  font-size: 40px;
  position: absolute;
  right: 20px;
  top: 5px;
`

const ListContainer = styled.ul`
  -webkit-overflow-scrolling: touch;
  border-radius: 18px;
  border: 1px solid var(--color-text-light);
  height: 150px;
  line-height: 2.5rem;
  list-style: none;
  margin-top: 0;
  overflow-x: hidden;
  overflow-y: scroll;
  padding: 2.5rem 0;
  scrollbar-width: none;
  text-align: center;
  width: 300px;
  box-shadow: inset 0px 11px 20px -10px #c9c9c9,
    inset 0px -11px 20px -10px #c9c9c9;
  ::-webkit-scrollbar {
    display: none;
  }
`
