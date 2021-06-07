import { render, screen } from '@testing-library/react'
import Button from './Button'

describe('Button', () => {
  it('contains a text', () => {
    render(<Button>Click me</Button>)

    const button: HTMLElement = screen.getByRole('button', { name: 'Click me' })
    expect(button).toBeInTheDocument()
  })
})
