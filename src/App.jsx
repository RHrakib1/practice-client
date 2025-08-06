
import './App.css'

function App() {

  const hendlefrom = event => {
    event.preventDefault()
    const shortData = event.target
    const name = shortData.name.value
    const email = shortData.email.value
    const dataObj = { name, email }
    console.log("from a data add hoyese", dataObj)


    fetch('http://localhost:5001/pruser', {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(dataObj)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.insertedId) {
          alert('data add hoise')
        }
      })
  }

  return (
    <>
      <form onSubmit={hendlefrom}>
        <input type="text" name='name' placeholder='enter your name' /><br /><br />
        <input type="email" name='email' placeholder='enter your email' /><br /><br />
        <input type="submit" value='Go to database' />
      </form>
    </>
  )
}

export default App
