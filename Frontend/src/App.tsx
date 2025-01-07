import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {

  const [loginData, setLoginData] = useState("no data found \n")

  useEffect(() => {
    getLoginData()
  })

  const getLoginData = async () => {
    const result = await axios.get("http://localhost:4000/login")
    console.log(result);

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
    </>
  )
}

export default App
