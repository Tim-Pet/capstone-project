import React from 'react'
import styled from 'styled-components/macro'

interface ButtonProps {
  children: React.ReactNode
  component?: string | undefined
  href?: string
  as?: React.ElementType
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  disabled?: boolean
  isActive?: boolean
}

const Button = ({
  children,
  component = 'button',
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <StyledButton as={component} {...props}>
      {children}
    </StyledButton>
  )
}

export default Button

const StyledButton = styled.button`
  background-color: #007bf5;
  border-radius: 60px;
  border: none;
  color: white;
  font-weight: 400;
  padding: 12px 30%;
  width: fit-content;

  :disabled {
    background-color: var(--color-text-light);
    color: var(--color-text);
  }
`
