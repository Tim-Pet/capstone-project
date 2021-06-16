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
  padding: 0 10px;
  grid-template-rows: 1fr 50px;
`
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const StyledInputLabel = styled.label`
  margin-top: 24px;
  margin-bottom: 8px;
`
const StyledInput = styled.input`
  border: none;
  border-bottom: 1px solid var(--color-text);
  margin-bottom: 20px;

  :focus {
    border-bottom: 1px solid var(--color-accent-light);
    outline: none;
  }
`
const StyledTextareaLabel = styled.label`
  margin-bottom: 8px;
  margin-top: 12px;
`
const StyledTextarea = styled.textarea`
  border-radius: 4px;
  border: 1px solid var(--color-text);
  resize: none;
  padding: 4px 8px;

  :focus {
    border: 1px solid var(--color-accent);
    outline: none;
  }
`

const ButtonWrapper = styled.div`
  display: grid;
  place-items: center;
`
