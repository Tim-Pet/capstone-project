import React from 'react'
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
  return (
    <div>
      <StyledForm onSubmit={handleSubmit}>
        <label htmlFor="title">{titleLabel}</label>
        <input type="text" name="" id="title" />
        <label htmlFor="description">{textLabel}</label>
        <textarea name="" id="description" cols={30} rows={4}></textarea>
        <Button>{buttonText}</Button>
      </StyledForm>
    </div>
  )

  function validateForm(): void {
    //Validate onChange
  }

  function handleSubmit(event: React.FormEvent<{}>) {
    event.preventDefault()
    //pass Title & Description
    const title = 'test'
    const description = 'test'
    onSubmit(title, description)
  }
}

export default PlaylistForm

const StyledForm = styled.form`
  display: grid;
`
