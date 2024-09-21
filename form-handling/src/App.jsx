import { useState } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    firstName:"",
    lastName: "",
    email: "",
    textArea: "",
    isVisible: false,
    isLoggedIn: false,
    mode: "",
    favCar: ""
  })
  function changeHandler(e){
    const {name, value, type, checked} = e.target;
    setFormData(prev => (
      {
        ...prev,
        [name]: type==="checkbox"? checked :  value
      })
    )
    
  }
  function submitHandler(e){
    e.preventDefault();
    console.log(formData)
  }
  return (
    <>
      <form onSubmit={submitHandler}>
          <input
            placeholder='First Name'
            type='text'
            name='firstName'
            onChange={changeHandler}
            value={formData.firstName}
          />
          <br />
          <input
            placeholder='Last name'
            type='text'
            name='lastName'
            onChange={changeHandler}
            value={formData.lastName}
          />
          <br />
          <input
            placeholder='Email'
            type='email'
            name='email'
            onChange={changeHandler}
            value={formData.email}
          />
          <br />
          <textarea
            placeholder='Enter toy comments'
            name='textArea'
            onChange={changeHandler}
            value={formData.textArea}
           />

          <br />
          <input
            type='checkbox'
            onChange={changeHandler}
            name='isVisible'
            id='isVisible'
            checked={formData.isVisible}
          />
          <label htmlFor='isVisible'>Checked 1</label>

          <br />
          <input
            type='checkbox'
            onChange={changeHandler}
            name='isLoggedIn'
            id='isLoggedIn'
            checked={formData.isLoggedIn}
          />
          <label htmlFor='isLoggedIn'>Checked 2</label>
          <br />
          <input
            type='radio' 
            onChange={changeHandler}
            name='mode'
            id='mode2'
            value="Mode 1"
            checked={formData.mode === "Mode 1" ? true: false}
          />
          <label htmlFor='mode1'>Mode 1</label>

          <br />
          <input
            type='radio' 
            onChange={changeHandler}
            name='mode'
            id='mode2'
            value="Mode 2"
            checked={formData.mode === "Mode 2" ? true: false}
          />
          <label htmlFor='mode2'>Mode 2</label>

          <br />
          <label htmlFor="favCar">Choose One</label>
          <select 
            onChange={changeHandler}
            value={formData.favCar}
            name='favCar'
            id='favCar'
          >
            <option value="">Select..</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
          </select>

          <br/>
          <button>Submit</button>
      </form>
    </>
  )
}

export default App