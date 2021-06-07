import styled from 'styled-components/macro'
import heroImg from '../assets/images/Login-hero.jpg'
import Button from './common/Button/Button'

const Login = () => {
  const authEndpoint: string = 'https://accounts.spotify.com/authorize'
  const redirectUri: string = 'http://localhost:3000/'
  const clientId: string = 'ce11cc084edb46788a28b35de4f32f65'
  const scope: string = 'user-read-private'

  return (
    <LoginContainer>
      <StyledImg src={heroImg} />
      <ContentContainer>
        <Title>Recofy</Title>
        <Description>
          Login with Spotify to get access to your personal reommendations
        </Description>
        <LoginButton
          component={'a'}
          href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=token&show_dialog=true`}
        >
          Login
        </LoginButton>
        <RegisterLink href="https://www.spotify.com/de/signup/">
          Don't have a Spotify account?
        </RegisterLink>
      </ContentContainer>
    </LoginContainer>
  )
}

export default Login

const LoginContainer = styled.div`
  height: 100vh;
  max-height: 100vh;
  overflow-y: hidden;
  overflow: hidden;
`
const StyledImg = styled.img`
  height: 40%;
  object-fit: cover;
  object-position: 100% top;
  width: 100%;
`

const ContentContainer = styled.div`
  align-items: center;
  background: var(--color-background);
  border-radius: 40px 40px 0 0;
  bottom: 0;
  box-shadow: 0 3px 16px #50525450;
  display: flex;
  flex-direction: column;
  height: 65%;
  padding: 10px 40px;
  position: absolute;
  width: 100%;
`
const Title = styled.h1`
  margin-top: 30px;
`

const Description = styled.p`
  margin-bottom: 40px;
  text-align: center;
`

const LoginButton = styled(Button)`
  width: 100%;
  text-align: center;
`
const RegisterLink = styled.a`
  font-size: 16px;
  margin-top: 25px;
  text-align: center;
`
