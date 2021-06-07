import styled from 'styled-components/macro'
import Button from './common/Button'
import heroImg from '../assets/images/Login-hero.jpg'

interface LoginProps {}

const Login = (props: LoginProps) => {
  return (
    <LoginContainer>
      <StyledImg src={heroImg} />
      <ContentContainer>
        <Title>Recofy</Title>
        <Description>
          Login with Spotify to get access to your personal reommendations
        </Description>
        <LoginButton component={`a`} primary={true} link={'#'}>
          Login
        </LoginButton>
        <RegisterLink href="#">Don't have a Spotify account?</RegisterLink>
      </ContentContainer>
    </LoginContainer>
  )
}

export default Login

const LoginContainer = styled.div`
  height: 100vh;
  max-height: 100vh;
  overflow: hidden;
  overflow-y: hidden;
`
const StyledImg = styled.img`
  height: 40%;
  width: 100%;
  object-fit: cover;
  object-position: 100% top;
`

const ContentContainer = styled.div`
  position: absolute;
  bottom: 0;
  height: 65%;
  background: var(--color-background);
  border-radius: 40px 40px 0 0;
  box-shadow: 0 3px 16px #50525450;
  padding: 10px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Title = styled.h1`
  margin-top: 30px;
`

const Description = styled.p`
  text-align: center;
  margin-bottom: 40px;
`

const LoginButton = styled(Button)`
  width: 100%;
  text-align: center;
`
const RegisterLink = styled.a`
  margin-top: 25px;
  text-align: center;
  font-size: 16px;
`
