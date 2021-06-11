import styled from 'styled-components/macro'
import heroImg from '../assets/images/Login-hero.jpg'
import Button from './common/Button/Button'

function Login(): JSX.Element {
  const authEndpoint: string = 'https://accounts.spotify.com/authorize'
  const redirectUri: string = process.env.REACT_APP_REDIRECT_URI as string
  const clientId: string = process.env.REACT_APP_CLIENT_ID as string
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
        <RegisterLink
          href="https://www.spotify.com/de/signup/"
          target="_blank"
          rel="noopener noreferrer"
        >
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
  box-shadow: 0 4px 16px #50525450;
  display: flex;
  flex-direction: column;
  height: 65%;
  padding: 12px 40px;
  position: absolute;
  width: 100%;
`
const Title = styled.h1`
  margin-top: 32px;
`

const Description = styled.p`
  margin-bottom: 40px;
  text-align: center;
`

const LoginButton = styled(Button)`
  text-align: center;
  width: 100%;
`
const RegisterLink = styled.a`
  font-size: 16px;
  margin-top: 24px;
  text-align: center;
`
