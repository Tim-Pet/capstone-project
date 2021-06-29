import axios from 'axios'
const baseUrl = 'http://localhost:4000'

export async function getUser(id: string) {
  return await axios.get(`${baseUrl}/api/users/${id}`)
}

//inhalte mitgeben
export async function createUser(id: string, name: string) {
  return await axios({
    method: 'post',
    url: `${baseUrl}/api/users`,
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
    url: `${baseUrl}/api/users/${id}`,
    headers: {},
    data: { playlists: playlists },
  })
}
