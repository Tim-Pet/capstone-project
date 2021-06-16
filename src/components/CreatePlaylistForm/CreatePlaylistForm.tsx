import { useState, useEffect } from 'react'
import Button from '../common/Button/Button'
import styled from 'styled-components/macro'

interface PlaylistFormProps {
  titleLabel: string
  textLabel: string
  buttonText: string
  onSubmit: Function
}

const PlaylistForm = ({
  titleLabel,
  textLabel,
  buttonText,
  onSubmit,
}: PlaylistFormProps) => {
  const [isDisabled, setIsDisabled] = useState(true)
  const [inputStates, setInputStates] = useState({ title: '', description: '' })

  useEffect(() => {
    validateForm()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputStates])

  return (
    <div>
      <StyledForm onSubmit={handleSubmit}>
        <label htmlFor="title">{titleLabel}</label>
        <input type="text" name="title" id="title" onChange={handleChange} />
        <label htmlFor="description">{textLabel}</label>
        <textarea
          name="description"
          id="description"
          cols={30}
          rows={4}
          onChange={handleChange}
        ></textarea>
        <Button disabled={isDisabled}>{buttonText}</Button>
      </StyledForm>
    </div>
  )

  function validateForm(): void {
    setIsDisabled(inputStates.title.trim().length === 0)
  }

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void {
    const { name, value } = event.target
    setInputStates({ ...inputStates, [name]: value })
  }

  function handleSubmit(event: React.FormEvent<{}>) {
    event.preventDefault()
    if (isDisabled) return //early out for Safari
    onSubmit(inputStates)
    setInputStates({ title: '', description: '' })
  }
}

export default PlaylistForm

const StyledForm = styled.form`
  display: grid;
`
