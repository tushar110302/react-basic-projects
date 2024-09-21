import { useState } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    country: "",
    state: "",
    zip: "",
    comments: false,
    candidates: false,
    offers: false,
    notification: ""
  })

  function changeHandler(e){
    const {name, value, checked, type} = e.target;
    setFormData(prev => (
      {...prev,
        [name]: type==="checkbox" ? checked : value
      }
    ))
  }

  function submitHandler(e){
    e.preventDefault();
    console.log(formData);
  }
  return (
    <>
      <div className='card'>
        <form className='form' onSubmit={submitHandler}>
          <label htmlFor='firstName'>First Name</label>
          <input className='input' type='text' id='firstName' placeholder='Tushar' name='firstName' value={formData.firstName} onChange={changeHandler}
          />

          <label htmlFor='lastName'>Last Name</label>
          <input className='input' type='text' id='lastName' placeholder='Ranjan' name='lastName' value={formData.lastName} onChange={changeHandler}/>

          <label htmlFor='email'>Email</label>
          <input className='input' type='email' id='email' placeholder='abc@abc.com' name='email' value={formData.email} onChange={changeHandler}/>

          <label htmlFor='country'>Country</label>
          <select className='input' id='country' onChange={changeHandler} value={formData.country} name='country'>
            <option value="">Choose</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="China">China</option>
          </select>

          <label htmlFor='address'>Street Address</label>
          <input className='input' type='text' id='address' placeholder='1234 Main Street' name='address' value={formData.address} onChange={changeHandler}/>

          <label htmlFor='city'>City</label>
          <input className='input' type='text' id='city' placeholder='Asansol' name='city' value={formData.city} onChange={changeHandler}/>

          <label htmlFor='state'>State/Province</label>
          <input className='input' type='text' id='state' placeholder='Gujarat' name='state' value={formData.state} onChange={changeHandler}/>

          <label htmlFor='zip'>ZIP / Postal Code</label>
          <input className='input' type='number' id='zip' placeholder='751345' name='zip' value={formData.zip} onChange={changeHandler}/>

          <label>By Email</label>
          <label >
            <input type='checkbox' name='comments' checked={formData.comments} onChange={changeHandler} />
            Comments
          </label>
          <label >
            <input type='checkbox' name='candidates' checked={formData.candidates} onChange={changeHandler} />
            Candidates
          </label>
          <label >
            <input  type='checkbox' name='offers' checked={formData.offers} onChange={changeHandler} />
            Offers
          </label>

          <label>Push Notification</label>
          
          <label htmlFor='everything'>
            <input type='radio' id='everything' name='notification' value="Everything" onChange={changeHandler}/>
            Everything
          </label>
          
          <label htmlFor='asEmail'>
            <input type='radio' id='asEmail' name='notification' value="Same as Email" onChange={changeHandler} />
            Same as Email
          </label>
          
          <label htmlFor='no'>
            <input type='radio' id='no' name='notification' value="No Notification" onChange={changeHandler} />
            No Notification
          </label>

          <div className='button'>
            <button>Submit</button>
          </div>
        </form>

      </div>
    </>
  )
}

export default App
