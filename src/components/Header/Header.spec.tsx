import { render, screen } from '@testing-library/react'
import Header from './Header'

describe('Header', (): void => {
  it('Header contains children & gets rendered', (): void => {
    render(<Header>Your title</Header>)
    const button: HTMLElement = screen.getByRole('heading', {
      name: 'Your title',
    })
    expect(button).toBeInTheDocument()
  })
  it('Header gets rendered with back-button', (): void => {
    render(<Header withBack={true}>Your title</Header>)
    const backBtn: HTMLElement = screen.getByRole('button', { name: 'back' })
    expect(backBtn).toBeInTheDocument()
  })
})
