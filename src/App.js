import React, {useState}from 'react'
import './App.css';

function App() {
  const [firstName, setFirstName] = useState("")
  const [email, setEmail] = useState("")
  const [people, setPeople] =useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    if(firstName && email){
      const person = {firstName, email}
    }else{
      alert("Please fill the form")
    }
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
          onChange={(e) => setFirstName(() => e.target.value)}
        />
        <input
          name='email'
          type='text'
          placeholder='Type email here'
          id='email'
          value={email}
          onChange={(e) => setEmail(() => e.target.value)}
        />
        <button type='submit' onClick={handleSubmit}>
          Add People
        </button>
      </form>
      <h2>People's List</h2>
    </div>
  )
}

export default App;
