import styled from 'styled-components/macro'
import Button from './common/Button/Button'
import heroImg from '../assets/images/Login-hero.jpg'

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
  width: 100%;
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
