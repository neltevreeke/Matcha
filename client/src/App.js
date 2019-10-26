import React from 'react'
import LandingPage from './components/pages/landingpage/landingpage'

export default () => {
  // const [response, setResponse] = useState();

  // const callApi = () => {
  //   fetch('http://localhost:9000/users')
  //     .then(res => res.text())
  //     .then(res => setResponse(res))
  //     .catch(err => err)
  // }

  // useEffect(() => {
  //   callApi();
  // }, [])

  return (
    <>
      <LandingPage />
    </>
  )
}
