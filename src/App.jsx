import { useState } from "react"
import "./TwitterFollowCard.css"
import { TwitterFollowCard } from "./TwitterFollowCard.jsx"

const users = [
    {
        userName: "midudev",
        name: "Miguel Angel Duran",
        initialIsFollowing: true,
    },
    {
        userName: "Dicrey",
        name: "Cristian David Arrieta",
        initialIsFollowing: true,
    },
    {
        userName: "Pacohdezs",
        name: "Paco Hdezs",
        initialIsFollowing: false,
    },
    {
        userName: "TMchein",
        name: "Tomas",
        initialIsFollowing: false,
    },
]
export function App(){
    return (
        <>
        {
            users.map((user) => {
                const {userName , name, initialIsFollowing} = user
                return (
                    <TwitterFollowCard username={userName} initialIsFollowing={initialIsFollowing}>
                        { name }
                    </TwitterFollowCard>
                )
            })
        }
        </>
    )
}