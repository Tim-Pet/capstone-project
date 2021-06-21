import styled from 'styled-components/macro'

interface Props {
  children: any
}

const MoodItem = ({ children }: Props) => {
  return <StyledItem>{children}</StyledItem>
}

export default MoodItem

const StyledItem = styled.li`
  margin: 0;
`
