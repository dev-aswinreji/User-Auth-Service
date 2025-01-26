import axios from "axios"
import { useState } from "react"
import { backendEntrypointLogin, backendLocator, backendPort } from "../utils/url"

export default function SignIn() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    async function HandleSignin(e: any) {
        e.preventDefault()
        const result = await axios.post(`${backendLocator}+${backendPort}+${backendEntrypointLogin}`, {
            email: email,
            password: password
        })

        console.log(result, 'result is showing here in login page');
    }
    return (
        <>
            <div>
                <label htmlFor="email">Email</label>
                <br />
                <input type="email"
                    name="email"
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email"
                />
                <br />
                <label htmlFor="password">Password</label>
                <br />
                <input type="password"
                    name="password"
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Your password"
                />
                <br />
                <button onClick={HandleSignin}>Submit</button>
            </div>
        </>
    )
}