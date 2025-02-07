import axios from "axios"
import { useEffect, useState } from "react"
import { backendHomeEntrypoint, backendLocator, backendPort } from "../utils/url"

export default function Home() {
    const [home, setHome] = useState("")
    async function GetHome() {
        const { data } = await axios.get(`${backendLocator}${backendPort}${backendHomeEntrypoint}`)
        setHome(data.message)
    }
    console.log(home, 'home is shoeing');
    useEffect(() => {
        GetHome()
    }, [home])
    return (

        <>
            <h1>Home is here</h1>
            {home}
        </>
    )
}