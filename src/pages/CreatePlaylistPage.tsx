import React from 'react'
import { DefaultCreatePlaylistForm } from '../components/CreatePlaylistForm/CreatePlaylistForm.stories'
import Header from '../components/Header/Header'

interface Props {}

const CreatePlaylistPage = (props: Props) => {
  return (
    <div>
      <Header withBack={true}>Create Playlist</Header>
      <DefaultCreatePlaylistForm
        titleLabel="Title"
        textLabel="Description"
        buttonText="Create Playlist"
        onSubmit={handleSubmit}
      />
    </div>
  )
  function handleSubmit(input: { title: string; description?: string }): void {
    console.log(input)
    //Create Playlist
    //Add Titles
  }
}

export default CreatePlaylistPage
