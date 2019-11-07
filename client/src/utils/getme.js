import axios from 'axios'

const getMe = async () => {
  const res = await axios.get('http://localhost:9000/user/me', {
    headers: {
      'content-type': 'application/json',
      authorization: localStorage.getItem('jwt')
    }
  })

  return res
}

export default getMe
