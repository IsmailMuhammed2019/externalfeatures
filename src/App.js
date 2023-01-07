import React, {}from 'react'
import './App.css';

function App() {
  const [firstName, setFirstName] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className='App'>
      <form>
        <input 
        name='firstName' 
        type='text' 
        placeholder='Type name here'
        id='firstname'
        value={firstName}
        onChange={handleChange}
        />
        <input 
        name='email'
        type='text'
        placeholder='Type email here'
        id='email' 
        value={email}
        onChange={handleChange}
        />
        <button type='submit' onClick={handleSubmit}>Add People</button>
      </form>
      <h2>People's List</h2>
    </div>
  )
}

export default App;
