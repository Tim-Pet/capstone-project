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
    <StyledForm onSubmit={handleSubmit}>
      <ContentContainer>
        <StyledInputLabel htmlFor="title">{titleLabel}</StyledInputLabel>
        <StyledInput
          type="text"
          name="title"
          id="title"
          placeholder="Title of your Playlist (required)"
          onChange={handleChange}
        />
        <StyledTextareaLabel htmlFor="description">
          {textLabel}
        </StyledTextareaLabel>
        <StyledTextarea
          name="description"
          id="description"
          cols={24}
          rows={8}
          placeholder="Description of your Playlist (optional)"
          onChange={handleChange}
        ></StyledTextarea>
      </ContentContainer>
      <ButtonWrapper>
        <Button disabled={isDisabled}>{buttonText}</Button>
      </ButtonWrapper>
    </StyledForm>
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
  grid-template-rows: 1fr 50px;
  padding: 0 10px;
`
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const StyledInputLabel = styled.label`
  margin-bottom: 8px;
  margin-top: 24px;
`
const StyledInput = styled.input`
  border: none;
  border-bottom: 1px solid var(--color-text);
  margin-bottom: 20px;
  padding: 4px 8px;

  :focus {
    border-bottom: 1px solid var(--color-accent);
    outline: none;
  }

  ::placeholder {
    color: var(--color-text);
  }
`
const StyledTextareaLabel = styled.label`
  margin-bottom: 8px;
  margin-top: 12px;
`
const StyledTextarea = styled.textarea`
  border-radius: 4px;
  border: 1px solid var(--color-text);
  padding: 4px 8px;
  resize: none;

  :focus {
    border: 1px solid var(--color-accent);
    outline: none;
  }

  ::placeholder {
    color: var(--color-text);
  }
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
