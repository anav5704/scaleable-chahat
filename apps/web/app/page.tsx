"use client"

import { useSocket } from "./context/SocketProvider"
import { useState } from "react"

export default function HomePage() {
    const { sendMessage, messages } = useSocket()
    const [username, setUsername] = useState("")
    const [user, setUser] = useState(false)
    const [message, setMessage] = useState<string>("")

    return (
        <main>
            { !user ? (
                <div>
                    <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" type="text" name="" id="" />
                    <button onClick={() => setUser(true)}>Continue</button>
                </div>
            ) : (
                <>
                    <div>
                        {messages.map((message, index) => (
                            <div key={index}>
                            <p>{message.username}</p>
                            <p>{message.message}</p>
                            </div>
                        ))}
                    </div>
                    {username}
                    <input value={message} onChange={(e) => setMessage(e.target.value)} type="text" name="" id="" />
                    <button onClick={() => sendMessage(message, username)}>Send</button>

                </>
            )}
        </main>
    )
}