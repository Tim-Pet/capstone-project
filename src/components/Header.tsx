import styled from 'styled-components'
import Button from './common/Button/Button'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import { useHistory } from 'react-router'

interface Props {
  withBack: Boolean
  children: string
}

const Header = ({ withBack, children }: Props) => {
  const history = useHistory()

  const goBack = () => {
    history.goBack()
  }

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

const Container = styled.div`
  display: flex;
  justify-content: center;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 100%;
    height: 4px;
    left: 0;
    width: 100%;
    background-image: linear-gradient(#5c5c5c33, transparent);
  }
`
const StrippedButton = styled(Button)`
  display: flex;
  align-items: center;
  position: absolute;
  background-color: transparent;
  border: none;
  border-radius: 0;
  padding: 0;
  left: 5%;
  top: 0;
  color: var(--color-text);
  font-size: 1.5rem;
  cursor: pointer;
`

const StyledTitle = styled.h2`
  justify-self: center;
  position: relative;
  width: fit-content;
  margin-bottom: 16px;
  margin-top: 32px;

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
