import React from 'react'
import { useLoaderData } from 'react-router-dom'

export default function Datauser() {
    const dataload = useLoaderData()
    return (
        <div>
            <h1>data number:{dataload.length}</h1>
            {
                dataload.map(data => <p>{data.email} : {data.name}</p>)
            }
        </div>
    )
}
