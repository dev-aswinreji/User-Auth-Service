import axios from "axios"
import { useEffect, useState } from "react"

export default function Signup() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [submit,setSubmit] = useState("")


  async function HandleSignup(e:Event){
    e.preventDefault()
    const result = await axios.post("http://localhost:4000/login",{
      email:email,
      name:name,
      password:password
    })
    console.log(result,'result is showing here is it working properly')
  }

  return (
    <>
      <h1>Sign Up Page Header</h1>
      <div>
        <label htmlFor="">Name</label>
        <br />
        <input type="text"
          name="name"
          value={name}
          onChange={(e) => { setName(e.target.value) }}
          placeholder="your nameadf"
          id="" />
        <br />
        <label htmlFor="">Email</label>
        <br />
        <input type="email"
          name="email"
          value={email}
          onChange={(e) => { setEmail(e.target.value) }}
          placeholder="your email"
          id="" />
        <br />
        <label htmlFor="">Password</label>
        <br />
        <input type="password"
          name="password"
          value={password}
          onChange={(e) => { setPassword(e.target.value) }}
          placeholder="your password"
          id="" />
        <br />
        <input type="button" name="" onClick={(e)=>HandleSignup} value={"Submit"} />
      </div>
    </>
  )
}
