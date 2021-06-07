import React from 'react'
import styled from 'styled-components/macro'

interface ButtonProps {
  children: string
  primary: Boolean
  link: string
  component: any
}

const Button = ({ children, component, primary, ...props }: ButtonProps) => {
  return (
    <BtnWrapper as={component} {...props}>
      {children}
    </BtnWrapper>
  )
}

export default Button

const BtnWrapper = styled.button`
  border: none;
  background-color: #007bf5;
  font-weight: 400;
  color: white;
  padding: 10px 30%;
  border-radius: 60px;
`
