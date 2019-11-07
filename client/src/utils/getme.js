import axios from 'axios'

const getMe = async () => {
    const res = await axios.get('http://localhost:9000/user/me', {
        headers: {
            'content-type': 'application/json',
            'authorization': localStorage.getItem('jwt')
        }
    })

    console.log(res)
    
    return res.data.user
}

export default getMe