import axios from "axios"
import { useEffect, useState } from "react"

export default function Home() {
    const [home, setHome] = useState("")
    async function GetHome() {
        const data = await axios.get('http://localhost:4000/home')
        setHome(data.data.message)
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