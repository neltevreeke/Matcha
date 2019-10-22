import React, { useState, useEffect } from 'react'
import Navbar from './components/navbar/navbar'
import Header from './components/header/header'

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
      <Navbar />
      <Header />
    </>
  )
}
