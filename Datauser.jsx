import React from 'react'
import { useLoaderData } from 'react-router-dom'

const hendeldelete = id => {
    console.log('delete hbe ai id ta ', id)
    fetch(`http://localhost:5001/pruser/${id}`, {
        method: "DELETE"
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)

            if (data.deletedCount > 0) {
                alert('delete done')
            }
        })
}

export default function Datauser() {
    const dataload = useLoaderData()
    return (
        <div>
            <h1>data number:{dataload.length}</h1>
            {
                dataload.map(data => <p>{data._id}-------{data.email} : {data.name}
                    <button onClick={() => hendeldelete(data._id)}>X</button></p>)
            }
        </div>
    )
}
