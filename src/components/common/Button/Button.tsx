import React from 'react'
import styled from 'styled-components/macro'

interface ButtonProps {
  children: any
  component?: string | undefined
  href?: string
  as?: React.ElementType
  onClick?: Function
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
  background-color: #007bf5;
  border-radius: 60px;
  border: none;
  color: white;
  font-weight: 400;
  padding: 12px 30%;
`
