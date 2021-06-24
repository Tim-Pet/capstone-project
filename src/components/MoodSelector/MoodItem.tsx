import styled from 'styled-components/macro'

interface Props {
  children: React.ReactNode
}

const MoodItem = ({ children, ...props }: Props): JSX.Element => {
  return (
    <Wrapper {...props}>
      <StyledItem>{children}</StyledItem>
    </Wrapper>
  )
}

export default MoodItem

const Wrapper = styled.li`
  height: 2.5rem;
`
const StyledItem = styled.p`
  margin: 0;
`
