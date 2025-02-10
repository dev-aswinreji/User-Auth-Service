import axios from "axios"
import { useEffect, useState } from "react"
import { backendHomeEntrypoint, backendLocator, backendPort } from "../utils/url"
import { useNavigate } from "react-router-dom"

export default function Home() {
    const [home, setHome] = useState("")
    const navigator = useNavigate()
    async function GetHome() {
        const { data, status } = await axios.get(`${backendLocator}${backendPort}${backendHomeEntrypoint}`)
        if (status !== 200) {
            navigator("/signup")
        }
        setHome(data.message)
    }

    useEffect(() => {
        GetHome()
    }, [home])

    return (

        <>
            <h1>Home is here</h1>
            <h2>
                {home}
            </h2>
        </>
    )
}