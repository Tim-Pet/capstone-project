import React from 'react'
import Button from '../common/Button/Button'

interface PlaylistFormProps {
  titleLabel: string
  textLabel: string
  buttonText: string
  onSubmit: React.FormEventHandler<HTMLFormElement>
}

const PlaylistForm = ({
  titleLabel,
  textLabel,
  buttonText,
  onSubmit,
}: PlaylistFormProps) => {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="title">{titleLabel}</label>
        <input type="text" name="" id="title" />
        <label htmlFor="">{textLabel}</label>
        <textarea name="" id="" cols={30} rows={4}></textarea>
        <Button>{buttonText}</Button>
      </form>
    </div>
  )

  function validateForm(): void {}
}

export default PlaylistForm
