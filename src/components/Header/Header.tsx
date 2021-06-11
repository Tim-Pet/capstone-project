import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import Button from '../common/Button/Button'

interface HeaderProps {
  withBack?: Boolean
  children: string
}

function Header({ withBack = false, children }: HeaderProps): JSX.Element {
  const { goBack } = useHistory()

  return (
    <Container>
      {withBack && (
        <StrippedButton onClick={goBack}>
          <ArrowBackIosIcon /> back
        </StrippedButton>
      )}
      <StyledTitle>{children}</StyledTitle>
    </Container>
  )
}

export default Header

const Container = styled.header`
  display: flex;
  justify-content: center;
  position: relative;

  &::after {
    background-image: linear-gradient(#5c5c5c33, transparent);
    content: '';
    height: 4px;
    left: 0;
    position: absolute;
    top: 100%;
    width: 100%;
  }
`
const StrippedButton = styled(Button)`
  align-items: center;
  background-color: transparent;
  border-radius: 0;
  border: none;
  color: var(--color-text);
  display: flex;
  font-size: 1.5rem;
  left: 16px;
  padding: 0;
  position: absolute;
  top: 0;
`

const StyledTitle = styled.h2`
  justify-self: center;
  margin-bottom: 16px;
  margin-top: 32px;
  position: relative;
  width: fit-content;

  &::after {
    background-color: var(--color-text);
    bottom: 0;
    content: '';
    height: 1px;
    left: -5%;
    position: absolute;
    width: 110%;
  }
`
