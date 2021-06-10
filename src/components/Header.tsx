import styled from 'styled-components'

interface Props {
  children: string
}

const Header = ({ children }: Props) => {
  return <StyledTitle>{children}</StyledTitle>
}

export default Header

const StyledTitle = styled.h2`
  justify-self: center;
  position: relative;
  width: fit-content;

  &::after {
    content: '';
    height: 1px;
    width: 110%;
    position: absolute;
    bottom: 0;
    left: -5%;
    background-color: var(--color-text);
  }
`
