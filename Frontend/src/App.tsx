import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Signup from './pages/signup'

function App() {

  const [loginData, setLoginData] = useState("no data found \n")

  useEffect(() => {
    getLoginData()
  })

  const getLoginData = async () => {
    console.log('Hello world');
    const result = await axios.post("http://localhost:4000/login",{
      email:"ananya@gmail.com"
    })
    console.log(result, 'result is here ');

    setLoginData(result.data.message)
  }
  console.log(loginData);


  return (
    <>
      <p>
        {loginData}
      </p>
      <h1>
        Hello world
      </h1>
      <Signup />
    </>
  )
}

export default App
