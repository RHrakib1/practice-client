import React from 'react'
import { useLoaderData } from 'react-router-dom'

export default function Update() {
    const loaddata = useLoaderData()
    return (
        <div>
            <input type="text" name='name' defaultValue={loaddata.name} /><br /><br />
            <input type="email" name='email' defaultValue={loaddata.email} /><br /><br />
            <input type="submit" value='Update data' />
        </div>
    )
}
