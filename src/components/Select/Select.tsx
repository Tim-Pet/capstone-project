import styled from 'styled-components/macro'

interface Props {
  userData: UserData
}

export interface UserData {
  country: string
  display_name: string | undefined
  product: string
}

const Select = ({ userData }: Props) => {
  return (
    <Container>
      <dt>Country:</dt>
      <dd>{userData.country}</dd>
      <dt>Name:</dt>
      <dd>{userData.display_name}</dd>
      <dt>Product:</dt>
      <dd>{userData.product}</dd>
    </Container>
  )
}

export default Select

const Container = styled.dl`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 10px 20px;
`
