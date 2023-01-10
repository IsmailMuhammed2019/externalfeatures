import { type } from '@testing-library/user-event/dist/type'
import React, {useState} from 'react'
import './App.css'


const App = () => {
  const [person, setPerson] = useState({firstName:"", email: "", id: new Date().getTime().toString()})
  const [people, setPeople] = useState([])

  const handleChange = (e) => {
              const { name, value } = e.target
    setPerson((prev) => {
      return {
          ...prev, 
          [name]: value
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (person.firstName && person.email){
      setPeople((prev) => {
        return [...prev, person]
      })
    }else {
      alert("Please fill form")
    }

    setPerson(prev => {
      return (
        {...prev, firstName: '', email:''}
      )
    })
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='firstName'
          value={person.firstName}
          placeholder='Type name here'
          onChange={handleChange}
        />
        <input
          type='email'
          name='email'
          value={person.email}
          placeholder='Type email here'
          onChange={handleChange}
        />
        <button type='submit'>Submit</button>
      </form>
      <h2>List of People</h2>
      {people.map((person) => {
        const {id, firstName, email} = person
        return (
          <div key={id}>
            <h3>{firstName}</h3>
            <p>{email}</p>
          </div>
        )
      })}
    </div>
  )
}

export default App