import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Button from './Button'

describe('Button', (): void => {
  it('contains children & gets rendered', (): void => {
    render(<Button>Click me</Button>)

    const button: HTMLElement = screen.getByRole('button', { name: 'Click me' })
    expect(button).toBeInTheDocument()
  })

  it('calls `onClick` upon click', (): void => {
    const handleClick: () => void = jest.fn()
    render(<Button onClick={handleClick}>Click me</Button>)

    const button: HTMLElement = screen.getByRole('button', { name: 'Click me' })
    userEvent.click(button)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
