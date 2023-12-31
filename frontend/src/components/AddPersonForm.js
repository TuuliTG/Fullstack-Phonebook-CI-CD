import React from 'react'

const Form = (props) => {
  const addName = (event) => {
    event.preventDefault()
    props.addPersons()

  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    props.setName(event.target.value)
  }

  const handleNumberChange = (event) => {
    props.setNewNumber(event.target.value)
  }
  return (
    <div>
      <form onSubmit={addName}>
        <div>
                name: <input id="nameForm" value={props.newName} onChange={handleNameChange}/>
        </div>
        <div>
                number: <input id="numberForm" value={props.newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button id="submit" type="submit">add</button>
        </div>
      </form>
    </div>
  )
}

export default Form