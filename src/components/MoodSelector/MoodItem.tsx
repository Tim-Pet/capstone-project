import styled from 'styled-components/macro'

interface Props {
  children: any
}

const MoodItem = ({ children, ...props }: Props) => {
  return <StyledItem {...props}>{children}</StyledItem>
}

export default MoodItem

const StyledItem = styled.li`
  margin: 0;
`
