import React from 'react'
import styled from 'styled-components/macro'

interface ButtonProps {
  children: string

  component?: string | undefined
  href?: string
  as?: React.ElementType
}

const Button = ({ children, component = 'button', ...props }: ButtonProps) => {
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
