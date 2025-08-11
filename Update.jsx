import { data, useLoaderData } from 'react-router-dom'

export default function Update() {
    const loaddata = useLoaderData()
    const hendleclick = e => {
        e.preventDefault()
        const datastore = e.target
        const name = datastore.name.value
        const email = datastore.email.value
        const dataobj = { name, email }
        console.log(dataobj)
        fetch(`http://localhost:5001/pruser/${loaddata._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(dataobj)
        }
        )
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    alert('data update hoyese')
                }
            })
    }
    return (
        <div>
            <form onSubmit={hendleclick}>
                <input type="text" name='name' defaultValue={loaddata.name} /><br /><br />
                <input type="email" name='email' defaultValue={loaddata.email} /><br /><br />
                <input type="submit" value='Update data' />
            </form>
        </div>
    )
}
