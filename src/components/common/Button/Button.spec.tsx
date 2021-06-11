import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Button from './Button'

describe('Button', (): void => {
  it('contains children & gets rendered', (): void => {
    render(<Button>Click me</Button>)

    const button: HTMLElement = screen.getByRole('button', { name: 'Click me' })
    expect(button).toBeInTheDocument()
  })

  it('Passed onClick gets called', (): void => {
    const handleClick: Function = jest.fn()
    render(<Button onClick={handleClick}>Click me</Button>)

    const button: HTMLElement = screen.getByRole('button', { name: 'Click me' })
    userEvent.click(button)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
