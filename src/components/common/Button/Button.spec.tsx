import { render, screen } from '@testing-library/react'
import Button from './Button'

describe('Button', (): void => {
  it('contains a text', (): void => {
    render(<Button>Click me</Button>)

    const button: HTMLElement = screen.getByRole('button', { name: 'Click me' })
    expect(button).toBeInTheDocument()
  })
})
