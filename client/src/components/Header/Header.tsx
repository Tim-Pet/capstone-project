import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import Button from '../common/Button/Button'

interface HeaderProps {
  withBack?: boolean
  children: string
  withSwitch?: boolean
  onClickLeft?: any
  onClickRight?: any
  leftText?: string
  rightText?: string
  activeSwitch?: string
}

function Header({
  withBack = false,
  children,
  withSwitch = false,
  onClickLeft,
  onClickRight,
  leftText,
  rightText,
  activeSwitch,
}: HeaderProps): JSX.Element {
  const { goBack } = useHistory()

  return (
    <Container>
      {withBack && (
        <StrippedButton onClick={goBack}>
          <ArrowBackIosIcon /> back
        </StrippedButton>
      )}
      <StyledTitle withMarginTop={withBack}>{children}</StyledTitle>
      {withSwitch && (
        <SwitchContainer>
          <SwitchLeft
            onClick={onClickLeft}
            isActive={activeSwitch === 'left' ? true : false}
          >
            {leftText}
          </SwitchLeft>
          <SwitchRight
            onClick={onClickRight}
            isActive={activeSwitch === 'right' ? true : false}
          >
            {rightText}
          </SwitchRight>
        </SwitchContainer>
      )}
    </Container>
  )
}

export default Header

const Container = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  background: transparent !important;
  border-radius: 0;
  border: none;
  color: var(--color-text);
  display: flex;
  font-size: 1.5rem;
  left: 16px;
  padding: 0;
  position: absolute;
  top: 0;
  box-shadow: none;
`

const StyledTitle = styled.h2<{ withMarginTop: boolean }>`
  justify-self: center;
  margin-bottom: 16px;
  margin-top: ${({ withMarginTop }) => (withMarginTop ? '40px' : '16px')};
  position: relative;
  width: fit-content;
`

const SwitchContainer = styled.div`
  width: 200px;
  display: flex;
  border-radius: 24px;
  overflow: hidden;
  margin-bottom: 10px;
  box-shadow: 5px 5px 12px #ebebeb, -5px -5px 12px #ffffffda;
`
const SwitchLeft = styled(Button)`
  background: ${({ isActive }) =>
    isActive
      ? 'linear-gradient(145deg, #0084ff, #0070e1)'
      : 'linear-gradient(145deg, #ebebeb, #d4d4d4)'};
  color: ${({ isActive }) => (isActive ? 'white' : 'var(--color-text)')};
  box-shadow: ${({ isActive }) =>
    isActive ? 'inset -5px 0px 49px -16px rgba(58, 58, 58, 0.125)' : 'none'};
  padding: 10px 0;
  margin: 0;
  width: 50%;
  border-radius: 0;
  border-right: 1px solid var(--color-text-light);
`
const SwitchRight = styled(Button)`
  background: ${({ isActive }) =>
    isActive
      ? 'linear-gradient(145deg, #0070e1, #0084ff)'
      : 'linear-gradient(145deg, #ebebeb, #d4d4d4)'};
  color: ${({ isActive }) => (isActive ? 'white' : 'var(--color-text)')};
  box-shadow: ${({ isActive }) =>
    isActive ? 'inset 5px 0px 49px -16px rgba(58, 58, 58, 0.125)' : 'none'};
  padding: 10px 0;
  margin: 0;
  width: 50%;
  border-radius: 0;
  border-left: 1px solid var(--color-text-light);
`
