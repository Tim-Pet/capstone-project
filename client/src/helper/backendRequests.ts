import axios from 'axios'

export async function getUser(id: string) {
  return await axios.get(`/api/users/${id}`)
}

//inhalte mitgeben
export async function createUser(id: string, name: string) {
  return await axios({
    method: 'post',
    url: `/api/users`,
    headers: {},
    data: {
      _id: id,
      name: name,
    },
  })
}

export async function patchUser(id: string, playlists: any[]) {
  return await axios({
    method: 'patch',
    url: `/api/users/${id}`,
    headers: {},
    data: { playlists: playlists },
  })
}
