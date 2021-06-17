import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import PlaylistForm from './PlaylistForm'

describe('PlaylistForm', (): void => {
  it('renders passed props', (): void => {
    render(
      <PlaylistForm
        titleLabel={'Title'}
        textLabel={'Text'}
        buttonText={'Click me'}
        onSubmit={jest.fn()}
      />
    )
    const inputLabel: HTMLElement = screen.getByRole('textbox', {
      name: 'Title',
    })
    expect(inputLabel).toBeInTheDocument()
    const textareaLabel: HTMLElement = screen.getByRole('textbox', {
      name: 'Text',
    })
    expect(textareaLabel).toBeInTheDocument()
    const button: HTMLElement = screen.getByRole('button', { name: 'Click me' })
    expect(button).toBeInTheDocument()
  })

  it("onClick doesn't get called with an empty title", async () => {
    const handleSubmit = jest.fn()
    render(
      <PlaylistForm
        titleLabel={'Title'}
        textLabel={'Text'}
        buttonText={'Click me'}
        onSubmit={handleSubmit}
      />
    )
    const button: HTMLElement = screen.getByRole('button', { name: 'Click me' })
    expect(button).toBeDisabled()

    const textareaLabel: HTMLElement = screen.getByRole('textbox', {
      name: 'Text',
    })
    userEvent.type(textareaLabel, 'Testtext')
    expect(button).toBeDisabled()

    const inputLabel: HTMLElement = screen.getByRole('textbox', {
      name: 'Title',
    })
    userEvent.type(inputLabel, 'Testtitle')
    expect(button).not.toBeDisabled()
  })

  it('OnClick resets the form', async () => {
    const handleSubmit = jest.fn()
    render(
      <PlaylistForm
        titleLabel={'Title'}
        textLabel={'Text'}
        buttonText={'Click me'}
        onSubmit={handleSubmit}
      />
    )
    const button: HTMLElement = screen.getByRole('button', { name: 'Click me' })
    const inputLabel: HTMLElement = screen.getByRole('textbox', {
      name: 'Title',
    })

    userEvent.type(inputLabel, 'Testtitle')
    expect(button).not.toBeDisabled()

    userEvent.click(button)
    expect(button).toBeDisabled()
  })
})
